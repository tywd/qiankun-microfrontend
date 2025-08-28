# 开发问题排查

## 常见开发问题

### 1. 微前端加载失败

#### 问题描述
在本地开发环境中，主应用无法正确加载子应用，控制台可能显示跨域错误或资源加载失败。

#### 解决方案
1. **检查子应用是否正常运行**：确保子应用独立服务运行正常
```bash
# 检查子应用是否正常启动
cd sub-apps/user-management
npm run dev
```

2. **检查端口配置**：确保子应用端口配置与主应用中注册的端口一致
```js
// 主应用中的微应用注册配置
registerMicroApps([
  {
    name: 'user-management',
    entry: 'http://localhost:8081', // 确保子应用实际运行在这个端口
    container: '#subapp-container',
    activeRule: '/user'
  }
]);
```

3. **检查跨域配置**：确保子应用开发服务器允许跨域请求
```js
// 子应用 vite.config.js
export default defineConfig({
  server: {
    port: 8081,
    cors: true // 确保启用了CORS
  }
});
```

4. **检查加载容器**：确保主应用中存在用于加载子应用的容器元素
```html
<div id="subapp-container"></div>
```

### 2. 热更新不生效

#### 问题描述
修改代码后，浏览器不自动刷新或更新内容，需要手动刷新才能看到变化。

#### 解决方案
1. **检查 Vite 配置**：确保热更新相关配置正确
```js
// vite.config.js
export default defineConfig({
  server: {
    hmr: true, // 启用热模块替换
    watch: {
      usePolling: true // 在某些环境中可能需要轮询
    }
  }
});
```

2. **检查网络连接**：确保 WebSocket 连接正常
   - 在浏览器开发者工具的"网络"选项卡中查看 WebSocket 连接状态
   - 确保没有网络问题阻止 WebSocket 连接

3. **重启开发服务器**：有时候重启开发服务器可以解决热更新问题
```bash
# 按 Ctrl+C 停止服务器，然后重新启动
npm run dev
```

4. **清除缓存**：清除浏览器缓存和应用缓存
   - 按 Ctrl+F5 或 Cmd+Shift+R 强制刷新页面
   - 在开发者工具中禁用缓存

### 3. 类型错误

#### 问题描述
TypeScript 编译报错，提示类型不匹配或找不到声明文件。

#### 解决方案
1. **检查 TypeScript 版本**：确保项目中使用的 TypeScript 版本兼容
```bash
# 检查 TypeScript 版本
npx tsc --version
```

2. **安装声明文件**：为缺失声明的库安装类型定义
```bash
# 安装类型定义示例
npm install @types/node --save-dev
```

3. **创建类型声明**：为没有类型声明的模块创建声明文件
```typescript
// src/types/custom.d.ts
declare module 'some-module' {
  export function someFunction(): void;
  export const someValue: string;
}
```

4. **配置 tsconfig.json**：确保 TypeScript 配置正确
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "types": ["vite/client", "node"]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.vue"]
}
```

### 4. 路由问题

#### 问题描述
路由跳转失败，页面不显示或显示错误，控制台可能显示路由相关错误。

#### 解决方案
1. **检查路由配置**：确保路由定义正确
```js
// 主应用路由配置
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/user/:id',
    component: UserDetail
  },
  {
    // 确保有通配符路由用于微前端路由
    path: '/user/*',
    component: MicroAppContainer
  }
];
```

2. **检查子应用路由基础路径**：确保子应用路由基础路径与主应用中的注册路径一致
```js
// 子应用路由配置
const router = createRouter({
  history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/user' : '/'),
  routes
});
```

3. **确保路由模式一致**：主应用和子应用应使用相同的历史模式（通常是 `history` 模式）
4. **检查路由组件**：确保路由指向的组件正确导入并存在

### 5. 样式冲突

#### 问题描述
主应用和子应用之间的样式相互影响，导致界面显示异常。

#### 解决方案
1. **使用 CSS 模块化**：使用 CSS Modules 或 Scoped CSS 隔离样式
```vue
<style scoped>
/* 样式只影响当前组件 */
.container {
  background-color: #f5f5f5;
}
</style>
```

2. **添加样式前缀**：为样式添加特定前缀避免冲突
```css
/* 主应用样式 */
.main-app-container {
  margin: 20px;
}

/* 子应用样式 */
.user-app-container {
  margin: 10px;
}
```

3. **使用 Shadow DOM**：配置 qiankun 使用 Shadow DOM 隔离样式
```js
// 主应用注册微应用时启用 Shadow DOM
registerMicroApps(
  [
    {
      name: 'user-management',
      entry: 'http://localhost:8081',
      container: '#subapp-container',
      activeRule: '/user',
      props: { domElement: document.querySelector('#subapp-container') }
    }
  ],
  {
    sandbox: {
      strictStyleIsolation: true // 启用严格的样式隔离
    }
  }
);
```

4. **使用 CSS-in-JS 方案**：考虑使用 styled-components 等 CSS-in-JS 库

### 6. 跨应用通信问题

#### 问题描述
主应用与子应用之间无法正常通信，数据传递失败。

#### 解决方案
1. **使用 Props 传递数据**：通过 props 向子应用传递数据和方法
```js
// 主应用注册微应用
registerMicroApps([
  {
    name: 'user-management',
    entry: 'http://localhost:8081',
    container: '#subapp-container',
    activeRule: '/user',
    props: {
      // 传递数据和方法
      data: { userInfo: { ... } },
      methods: {
        logout: () => { ... }
      }
    }
  }
]);

// 子应用接收 props
export async function mount(props) {
  const { data, methods } = props;
  // 使用主应用传递的数据和方法
  console.log(data.userInfo);
  // 调用主应用方法
  methods.logout();
}
```

2. **使用全局状态管理**：使用 qiankun 提供的全局状态管理
```js
// 主应用初始化全局状态
import { initGlobalState } from 'qiankun';
const actions = initGlobalState({
  user: { name: 'admin' }
});

// 主应用监听和修改状态
actions.onGlobalStateChange((state, prev) => {
  console.log('状态变更', state, prev);
});
actions.setGlobalState({ user: { name: 'new admin' } });

// 子应用获取和修改状态
export function mount(props) {
  const { onGlobalStateChange, setGlobalState } = props;
  
  onGlobalStateChange((state, prev) => {
    console.log('子应用接收到状态变更', state, prev);
  });
  
  setGlobalState({ count: 1 });
}
```

3. **使用自定义事件**：使用自定义事件进行通信
```js
// 主应用发送事件
window.dispatchEvent(new CustomEvent('main-app-event', { detail: { data: 'some data' } }));

// 子应用监听事件
window.addEventListener('main-app-event', (event) => {
  console.log('接收到主应用事件', event.detail);
});
```

## 开发环境问题

### 1. 依赖安装失败

#### 问题描述
使用 pnpm 或 npm 安装依赖时报错，无法完成安装。

#### 解决方案
1. **清理缓存**：清理包管理器缓存
```bash
# 清理 npm 缓存
npm cache clean --force

# 清理 pnpm 缓存
pnpm store prune
```

2. **检查 Node.js 版本**：确保 Node.js 版本符合项目要求
```bash
# 检查 Node.js 版本
node --version

# 可以使用 nvm 切换版本
nvm use 18
```

3. **使用镜像源**：使用国内镜像源加速下载
```bash
# 设置 npm 镜像源
npm config set registry https://registry.npmmirror.com/

# 设置 pnpm 镜像源
pnpm config set registry https://registry.npmmirror.com/
```

4. **检查网络环境**：确保网络环境正常，必要时使用代理

### 2. 构建错误

#### 问题描述
项目在构建过程中报错，无法生成产物。

#### 解决方案
1. **检查构建命令**：确保使用正确的构建命令
```bash
# 检查 package.json 中的构建命令
npm run build
```

2. **检查构建配置**：确保 vite.config.js 或其他构建配置正确
3. **检查依赖版本**：确保依赖版本兼容，必要时锁定特定版本
4. **增加构建内存**：对于大型项目，可能需要增加 Node.js 内存限制
```bash
# 增加 Node.js 内存限制
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### 3. 代码格式化问题

#### 问题描述
代码格式化不一致，导致团队协作困难或代码提交冲突。

#### 解决方案
1. **统一使用 ESLint 配置**：确保团队使用相同的 ESLint 配置
```json
// .eslintrc.js
module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  rules: {
    // 自定义规则
  }
};
```

2. **统一使用 Prettier 配置**：确保团队使用相同的 Prettier 配置
```json
// .prettierrc
{
  "singleQuote": true,
  "semi": false,
  "tabWidth": 2,
  "trailingComma": "none"
}
```

3. **使用 Git Hooks**：使用 husky 和 lint-staged 在提交前自动格式化代码
```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx,vue}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

## 调试技巧

### 浏览器调试

1. **使用 Vue DevTools**：安装 [Vue DevTools](https://devtools.vuejs.org/) 进行 Vue 组件调试
2. **使用控制台 API**：利用 `console.log()`, `console.table()`, `console.time()` 等进行调试
3. **设置断点**：在浏览器开发者工具中设置断点调试 JavaScript
4. **使用 Network 面板**：分析网络请求和响应

### 微前端调试

1. **独立调试子应用**：先确保子应用在独立环境中正常运行
2. **使用 qiankun 提供的调试工具**：
```js
// 启用 qiankun 调试模式
import { start } from 'qiankun';
start({ sandbox: { strictStyleIsolation: true }, debug: true });
```

3. **检查生命周期**：确保子应用正确实现了生命周期函数
```js
// 子应用入口
export async function bootstrap() {
  console.log('子应用启动');
}

export async function mount(props) {
  console.log('子应用挂载', props);
}

export async function unmount() {
  console.log('子应用卸载');
}
```

## 性能优化提示

1. **懒加载组件**：使用 Vue 的动态导入实现组件懒加载
```js
const UserList = () => import('./components/UserList.vue');
```

2. **代码分割**：利用 Vite 的代码分割特性减小初始加载体积
3. **缓存子应用**：配置 qiankun 缓存子应用实例
```js
registerMicroApps(
  [...apps],
  {
    beforeLoad: [
      app => {
        console.log('before load', app.name);
        return Promise.resolve();
      },
    ],
    beforeMount: [
      app => {
        console.log('before mount', app.name);
        return Promise.resolve();
      },
    ],
    afterUnmount: [
      app => {
        console.log('after unmount', app.name);
        return Promise.resolve();
      },
    ],
  },
);

start({ prefetch: 'all', singular: false });
```

4. **减少不必要的重渲染**：使用 `computed` 和 `watch` 优化计算属性和监听器