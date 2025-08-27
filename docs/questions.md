# 微前端项目问题汇总

本文档记录了在微前端项目开发和部署过程中遇到的所有问题及其解决方案，为后续开发提供参考。

## 🚨 部署相关问题

### 1. GitHub Actions npm缓存依赖锁定文件错误

**错误信息**:
```
Dependencies lock file is not found in /home/runner/work/qiankun-microfrontend/qiankun-microfrontend. Supported file patterns: package-lock.json,npm-shrinkwrap.json,yarn.lock
```

**问题原因**: 项目使用pnpm但GitHub Actions配置了npm缓存

**解决方案**:
```yaml
# 错误配置
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: ${{ env.NODE_VERSION }}
    cache: 'npm'  # ❌ 项目使用pnpm

# 正确配置  
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: ${{ env.NODE_VERSION }}
    # 移除cache配置或使用pnpm
```

**教训**: 确保缓存配置与实际包管理器一致

---

### 2. Shell脚本spawn sh ENOENT错误

**错误信息**:
```
spawn sh ENOENT
```

**问题原因**: 
- Shell类型未明确指定
- 条件判断语法不兼容
- 变量未加引号保护

**解决方案**:
```yaml
# 错误配置
run: |
  if [ "$condition" = "value" ]; then
    command
  fi

# 正确配置
shell: bash
run: |
  set -e
  if [[ "$condition" == "value" ]]; then
    "command with quotes"
  fi
```

**最佳实践**:
- 明确指定`shell: bash`
- 使用`set -e`确保错误时退出
- 使用`[[]]`条件判断
- 所有变量添加双引号保护

---

### 3. Vercel CLI参数错误

**错误信息**:
```
unknown or unexpected option: --yes
unknown or unexpected option: --project
```

**问题原因**: Vercel CLI版本更新，部分参数已弃用

**解决方案**:
```bash
# 错误命令
vercel link --yes
vercel env add NODE_ENV production production --yes
vercel deploy --project="$PROJECT_ID"

# 正确命令
vercel link
vercel env add NODE_ENV production production
vercel deploy  # 使用环境变量自动识别项目
```

**注意事项**: 
- 移除已弃用的`--yes`参数
- 移除`--project`参数，使用环境变量`VERCEL_PROJECT_ID`

---

### 4. Vercel部署路径重复问题

**错误信息**:
```
Error: The provided path "~/work/qiankun-microfrontend/qiankun-microfrontend/sub-apps/user-management/sub-apps/user-management" does not exist.
```

**问题原因**: 
- GitHub Actions的`working-directory`配置
- Vercel项目的Root Directory设置
- 两者叠加导致路径重复

**解决方案**:
```yaml
# 错误配置
- name: Deploy to Vercel
  working-directory: sub-apps/user-management  # ❌ 会导致路径重复
  run: vercel --prod

# 正确配置
- name: Deploy to Vercel  
  run: |
    cd sub-apps/user-management  # ✅ 手动切换目录
    vercel . --prod --force       # ✅ 显式指定当前目录
```

**关键要点**:
- 移除`working-directory`配置
- 使用`cd`命令切换目录
- Vercel项目Root Directory设置为`.`或留空

---

### 5. Vercel配置文件冲突问题

**错误信息**:
```
Error: If `rewrites`, `redirects`, `headers`, `cleanUrls` or `trailingSlash` are used, then `routes` cannot be present.
```

**问题原因**: Vercel配置中`routes`与`headers`不能同时存在

**解决方案**:
```json
// 错误配置
{
  "headers": [...],
  "routes": [...]  // ❌ 与headers冲突
}

// 正确配置
{
  "headers": [...],
  "rewrites": [    // ✅ 使用rewrites替代routes
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**配置规则**: 使用现代化配置，避免过时的routes配置

---

### 6. 主应用构建失败问题

**错误信息**:
```
Could not resolve "../../../shared/eventBus" from "src/micro/index.ts"
```

**问题原因**: 
- 主应用引用外部共享模块
- Vercel部署时只上传单个应用目录
- 无法访问上层目录的shared模块

**解决方案**:
```typescript
// 错误导入
import { globalEventBus } from '../../../shared/eventBus'  // ❌ 外部路径

// 正确导入
import { globalEventBus } from '../shared/eventBus'        // ✅ 内部路径
```

**架构调整**:
1. 创建主应用内部共享模块
2. 移除对外部shared目录的依赖
3. 实现Vue3兼容的事件总线

---

## 🔧 技术实现问题

### 7. 微前端容器检查问题

**问题描述**: 微前端容器元素加载时机不确定，导致qiankun启动失败

**原始实现**:
```javascript
// ❌ 轮询检查容器，可能导致无限循环
setTimeout(checkContainer, 100)
```

**优化方案**:
```javascript
// ✅ 使用MutationObserver + 超时机制
const observer = new MutationObserver((mutations) => {
  const container = document.querySelector('#micro-app-container')
  if (container) {
    observer.disconnect()
    resolve()
  }
})
observer.observe(document.body, { childList: true, subtree: true })

// 设置5秒超时
setTimeout(() => {
  observer.disconnect()
  reject(new Error('Container timeout'))
}, 5000)
```

**改进要点**:
- 使用MutationObserver替代轮询
- 添加防重复解析机制
- 设置合理的超时时间
- 及时断开Observer连接

---

### 8. Vue3事件总线兼容问题

**问题描述**: Vue3移除了`$on`、`$off`、`$emit`方法

**错误实现**:
```javascript
// ❌ Vue3中不存在
globalEventBus.$on(event, callback)
globalEventBus.$emit(event, data)
```

**正确实现**:
```javascript
// ✅ 自定义EventBus类
class EventBus {
  private events: Record<string, Function[]> = {}
  
  on(event: string, callback: Function) {
    if (!this.events[event]) this.events[event] = []
    this.events[event].push(callback)
  }
  
  emit(event: string, ...args: any[]) {
    if (!this.events[event]) return
    this.events[event].forEach(callback => callback(...args))
  }
}
```

---

### 9. 子应用URL配置问题

**问题描述**: 主应用使用子应用的预览URL而非生产URL

**错误配置**:
```yaml
USER_URL="${{ needs.deploy-user-management.outputs.production-url }}"
# 实际获取到: https://app-9tjyoz35n-user.vercel.app
```

**正确配置**:
```yaml
USER_URL="https://qiankun-user-management.vercel.app"  # 固定生产URL
SYSTEM_URL="https://qiankun-system-management.vercel.app"
```

**解决原则**: 使用固定的生产环境URL，避免依赖动态获取的预览URL

---

## 🛡️ 配置规范问题

### 10. Vercel云环境依赖配置问题

**问题描述**: 云环境构建时找不到关键依赖

**错误配置**:
```json
{
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",  // ❌ 云环境可能跳过
    "vite": "^5.0.0",
    "typescript": "^5.0.0"
  }
}
```

**正确配置**:
```json
{
  "dependencies": {
    "@vitejs/plugin-vue": "^5.0.0",  // ✅ 确保云环境安装
    "vite": "^5.0.0",
    "typescript": "^5.0.0"
  }
}
```

**规范**: 云环境部署时，构建依赖必须放在dependencies中

---

### 11. Vite配置安全问题

**问题描述**: 环境变量暴露安全风险

**错误配置**:
```javascript
// ❌ 暴露所有环境变量
define: {
  'process.env': process.env
}
```

**安全配置**:
```javascript
// ✅ 只暴露必要的环境变量
define: {
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  'process.env.API_BASE_URL': JSON.stringify(process.env.API_BASE_URL)
}
```

---

## 🔄 工作流程问题

### 12. 部署工作流重复问题

**问题描述**: 多个Vercel部署工作流文件造成冗余

**文件列表**:
- `deploy-vercel-auto.yml` - 当前使用（✅保留）
- `deploy-vercel.yml` - 已禁用（❌删除）
- `deploy.yml` - Docker部署（✅保留）

**解决方案**: 保留功能明确的工作流，删除重复或废弃的文件

---

### 13. 包管理器版本问题

**问题描述**: Node.js版本与构建工具不兼容

**错误搭配**:
```yaml
Node.js: v14
Vite: v5.0.0  # ❌ 版本不兼容
```

**兼容搭配**:
```yaml
Node.js: v18
Vite: v5.0.0  # ✅ 版本兼容
```

**最佳实践**: 使用LTS版本的Node.js，确保与构建工具版本兼容

---

## 📋 问题分类总结

### 🔴 严重问题 (Critical)
1. 部署路径重复 - 导致部署完全失败
2. 主应用构建失败 - 阻塞整个项目
3. 微前端容器检查失败 - 影响核心功能

### 🟡 重要问题 (Major)  
1. Vercel配置冲突 - 影响部署成功率
2. CLI参数错误 - 需要及时更新
3. 事件总线兼容性 - 影响应用通信

### 🟢 一般问题 (Minor)
1. 缓存配置错误 - 影响构建性能
2. Shell脚本语法 - 影响部署稳定性
3. URL配置不当 - 影响用户体验

## 💡 预防措施

### 开发阶段
- [ ] 建立完善的开发环境检查清单
- [ ] 使用标准化的项目模板
- [ ] 定期更新依赖和工具版本
- [ ] 建立代码审查机制

### 测试阶段  
- [ ] 建立完整的CI/CD测试流程
- [ ] 增加自动化测试覆盖
- [ ] 建立预发布环境验证
- [ ] 定期进行部署演练

### 部署阶段
- [ ] 建立部署前检查清单
- [ ] 配置详细的监控告警
- [ ] 建立快速回滚机制
- [ ] 记录详细的部署日志

### 维护阶段
- [ ] 定期更新文档和最佳实践
- [ ] 建立问题追踪和分析机制
- [ ] 定期进行技术债务清理
- [ ] 组织技术分享和培训

## 📚 参考资源

### 官方文档
- [Qiankun官方文档](https://qiankun.umijs.org/)
- [Vue3官方文档](https://vuejs.org/)  
- [Vite官方文档](https://vitejs.dev/)
- [Vercel部署文档](https://vercel.com/docs)

### 最佳实践
- [微前端架构设计](../docs/project-development-summary.md)
- [Vercel部署指南](../docs/vercel-deployment-guide.md)
- [性能优化指南](../docs/performance-optimization.md)

---

*本文档持续更新，记录项目中遇到的新问题和解决方案。*