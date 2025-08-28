# 部署问题排查

## 常见部署问题

### 1. Vercel 部署失败

#### 问题描述
在 Vercel 上部署项目时，构建过程失败，无法完成部署。

#### 解决方案
1. **检查 Node.js 版本**：确保使用 Node.js 18 或更高版本
2. **检查依赖位置**：Vercel 环境中，构建依赖必须放在 `dependencies` 而非 `devDependencies`
3. **查看构建日志**：在 Vercel Dashboard 中查看详细构建日志
4. **配置构建命令**：确保 `vercel.json` 中的 `buildCommand` 配置正确

```json
// 正确的 vercel.json 配置示例
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

5. **重试部署**：有时候临时网络问题可能导致部署失败，可以尝试重新部署

### 2. GitHub Pages 部署 404 错误

#### 问题描述
项目成功部署到 GitHub Pages，但访问时出现 404 错误。

#### 解决方案
1. **检查 base 路径**：确保 VitePress 配置中的 `base` 设置正确
```js
export default defineConfig({
  base: '/qiankun-microfrontend/', // 对应仓库名
  // ...其他配置
})
```

2. **检查分支设置**：确认 GitHub Pages 设置为从 `gh-pages` 分支部署
3. **检查部署目录**：确认 GitHub Pages 设置为从根目录 (`/`) 部署
4. **检查资源路径**：确保所有资源路径都考虑了子路径
5. **等待生效**：部署后可能需要几分钟才能生效

### 3. 子应用加载失败

#### 问题描述
主应用成功部署，但无法加载子应用，显示加载失败或白屏。

#### 解决方案
1. **检查跨域配置**：确保子应用配置了正确的 CORS 头
```json
// 子应用 vercel.json 示例
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Access-Control-Allow-Origin",
          "value": "*"
        }
      ]
    }
  ]
}
```

2. **检查环境变量**：确保主应用配置了正确的子应用 URL 环境变量
3. **检查网络请求**：使用浏览器开发者工具查看网络请求错误
4. **检查子应用构建**：确保子应用正确构建并可独立访问

### 4. 资源路径错误

#### 问题描述
部署后页面布局混乱、样式丢失或无法加载图片等资源。

#### 解决方案
1. **使用相对路径**：确保使用相对路径引用资源
2. **检查 publicPath**：确保构建配置中的 `publicPath` 设置正确
3. **使用别名路径**：使用 `@/assets/` 等别名来引用资源
4. **添加 base 前缀**：确保静态资源 URL 包含 base 路径前缀

### 5. 部署后版本不更新

#### 问题描述
更新代码并重新部署后，浏览器仍然显示旧版本内容。

#### 解决方案
1. **清除缓存**：按 Ctrl+F5 或 Cmd+Shift+R 强制刷新页面
2. **配置缓存控制**：添加适当的缓存控制头
```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)\\.(?:js|css)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        }
      ]
    }
  ]
}
```

3. **使用版本哈希**：确保构建配置生成带有哈希值的文件名
4. **使用 CDN 刷新**：如果使用 CDN，手动刷新 CDN 缓存

## 部署环境诊断

### Vercel 环境诊断

1. **检查 Vercel 状态页面**：[Vercel Status](https://www.vercelstatus.com/)
2. **查看构建日志**：分析详细的构建日志以识别问题
3. **查看运行时日志**：使用 `vercel logs` 命令查看运行时日志
4. **使用预览部署**：在合并到主分支前使用预览部署测试变更

### GitHub Pages 环境诊断

1. **检查 GitHub Actions 日志**：分析 GitHub Actions 工作流日志
2. **验证 gh-pages 分支**：检查 gh-pages 分支内容是否正确
3. **测试自定义脚本**：尝试使用手动部署脚本进行部署

### 自托管服务器诊断

1. **检查 Nginx 日志**：查看 Nginx 错误日志
2. **检查防火墙设置**：确保没有防火墙阻止必要的连接
3. **检查磁盘空间**：确保服务器有足够的磁盘空间
4. **检查进程状态**：确保所有必要的服务都在运行

## 部署问题上报流程

如果您在部署过程中遇到无法解决的问题，请按照以下步骤上报：

1. 截图错误信息和控制台日志
2. 记录操作步骤和环境信息
3. 通过 [GitHub Issues](https://github.com/tywd/qiankun-microfrontend/issues) 提交问题，并标记为 `deployment` 标签
4. 在工作日我们会在 24 小时内响应您的问题

## 常用部署调试命令

```bash
# 检查 Vercel 部署状态
vercel ls

# 查看 Vercel 部署日志
vercel logs

# 查看 GitHub Pages 部署状态
gh workflow list

# 检查网站可访问性
curl -I https://your-site-url.com

# 检查子应用 CORS 配置
curl -I -H "Origin: https://main-app-url.com" https://sub-app-url.com
```