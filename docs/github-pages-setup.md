# GitHub 仓库配置检查清单

## ✅ VitePress 文档站点部署配置

### 🔧 必需配置

- [ ] **GitHub Pages 设置**
  - 访问: https://github.com/tywd/qiankun-microfrontend/settings/pages
  - Source: "Deploy from a branch"
  - Branch: "gh-pages"
  - Folder: "/ (root)"

- [ ] **GitHub Actions 权限**
  - 访问: https://github.com/tywd/qiankun-microfrontend/settings/actions
  - Workflow permissions: "Read and write permissions"

### 🎯 预期结果

配置完成后：
1. GitHub Actions 会自动运行 `Deploy VitePress Documentation` 工作流
2. 构建成功后会自动创建 `gh-pages` 分支
3. 文档站点将在以下地址可访问：
   ```
   https://tywd.github.io/qiankun-microfrontend/
   ```

### 🚨 常见问题

**Q: 没有看到 gh-pages 分支选项？**
A: 首次配置时 gh-pages 分支还不存在，需要先运行一次 GitHub Actions。配置完权限后，推送任何 docs-site/ 目录的变更都会触发构建。

**Q: Actions 运行失败？**
A: 检查 Workflow permissions 是否设置为 "Read and write permissions"

**Q: 站点访问 404？**
A: 确保 GitHub Pages 设置中选择了正确的分支 (gh-pages) 和文件夹 (root)

### 📊 部署状态检查

完成配置后，可以在以下位置检查部署状态：
- GitHub Actions: https://github.com/tywd/qiankun-microfrontend/actions
- Pages 部署: https://github.com/tywd/qiankun-microfrontend/deployments

### 🔄 部署架构

```
文档更新流程:
docs-site/ 文件变更
    ↓
GitHub Actions 触发
    ↓
VitePress 构建
    ↓
推送到 gh-pages 分支
    ↓
GitHub Pages 自动发布
    ↓
https://tywd.github.io/qiankun-microfrontend/
```

## 🎉 完成确认

- [ ] GitHub Pages 配置完成
- [ ] GitHub Actions 权限设置完成
- [ ] 首次部署成功
- [ ] 文档站点可正常访问

---

*配置完成后，每次推送 docs-site/ 目录的变更都会自动触发文档站点更新。*