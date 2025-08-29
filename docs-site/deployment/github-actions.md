# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```
# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用