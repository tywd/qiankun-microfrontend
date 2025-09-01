# GitHub Actions 部署指南（简化版）

这是GitHub Actions部署指南的简化版本，用于测试构建问题。

## 基本配置

```yaml
name: Deploy Docs to Vercel

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
```