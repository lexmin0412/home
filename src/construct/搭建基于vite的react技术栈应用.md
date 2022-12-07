# 搭建 React + TypeScript + Vite 搭建项目

## 前置条件

本文中的运行环境以及使用到的工具对应版本如下：

- node v16.14.0
- pnpm v7.5.2
- vite v3.0.7
- tailwindcss v3.1.8
- react v18.2.0
- react-router-dom v6.3.0

## 初始化项目

使用 pnpm 初始化 Vite 项目，并且安装依赖。

```shell
pnpm create vite  # 初始化项目模版
cd <project-name> # 进入项目目录
pnpm install      # 安装依赖
pnpm dev          # 启动开发服务器
```

## 引入 tailwindcss

### 1. 安装相关依赖

将 tailwindcss、postcss、autoprefixer 加入项目开发依赖。

```shell
pnpm add tailwindcss postcss autoprefixer -D
```

### 2. 初始化 postcss 配置

vite 的 react+ts 初始模版是没有 postcss 配置的，需要自己初始化。

创建 postcss.config.cjs 文件并添加如下内容：

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

### 3. 初始化 tailwindcss 配置

生成 tailwind.config.cjs 文件及初始化配置。

```shell
npx tailwindcss init
```

tailwind.config.cjs 文件内容如下：

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

修改 `content` 属性，使之能够匹配到对应的文件。

```javascript
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
}
```

### 4. 将 tailwind 基础样式添加到项目的入口样式文件

将 tailwind 基础样式添加到项目的入口样式文件。

在我们当前的项目中，样式入口为 `src/index.css`，添加如下内容：

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. 完成

到此为止，我们可以在项目 src 目录下的 html、js、jsx、ts、tsx 文件中使用 tailwindcss 的样式。如：

```html
<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>
```

## 别名配置

在项目中使用别名配置，可以避免多层目录间引用时书写冗长的相对路径。

目标：能够使用 `@/pathname/filename` 的形式指向 src 目录下的任意文件

### 1. 修改 tsconfig.json

在 tsconfig.json 中修改 `compilerOptions` 属性，添加如下内容：

```javascript
module.exports = {
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"],
    }
  }
}
```

### 2. 修改 vite.config.js

在 vite.config.ts 中修改 `alias` 属性，添加如下内容：

```typescript
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './', 'src'),
    }
  },
})
```

在第1步中我们告诉编辑器（如 vscode）识别别名，第2步中我们告诉 vite 构建工具识别别名。

## 路由管理

### 1. 安装依赖

```shell
pnpm add react-router-dom@6.3.0
```

### 2. 新建页面

新建 src/routes 目录，用于存放页面文件。

新建 src/routes/home/index.tsx，内容如下：

```tsx
export default function Home() {
  return (
    <div>
      home
    </div>
  )
}
```

新建 src/routes/blogs/index.tsx，内容如下：

```tsx
export default function Blogs() {
  return (
    <div>
      blogs
    </div>
  )
}
```

### 3. 新增路由表文件

新建 src/routes/index.ts，内容如下：

```tsx
import Home from "./home"
import Blogs from './blogs'

const routeList = [
  {
    path: '/',
    component: Home,
    children: []
  },
  {
    path: '/blogs',
    component: Blogs,
    children: []
  }
]

export default routeList
```

### 4. 新增布局组件

我们即将弃用 App.tsx，对于单页应用，不同的页面往往会有相似的页面结构，这时候就需要使用布局组件。

新建以下文件：

```tsx
// src/components/layouts/header.tsx
import { Link } from 'react-router-dom'
import IconGithub from '@/assets/github.svg'

const innerLinks = [
	{
		path: '/',
		text: 'Home',
	},
	{
		path: '/blogs',
		text: 'Blogs',
	},
]

export default function Header() {
  return (
    <div className="flex items-center justify-between h-16 leading-16 px-6">
      <Link to='/'>Lexmin0412</Link>
      <div className='flex items-center'>
        <div className="inner-link">
          {
            innerLinks.map((link: any) => <Link className='mr-5' key={link.path} to={link.path}>{link.text}</Link>)
          }
        </div>
        <div className="outer-link">
          <img src={IconGithub} alt="" />
        </div>
      </div>
    </div>
  )
}
```

```tsx
// src/components/layouts/content.tsx
interface ContentProps {
  children: React.ReactNode
}

export default function Content(props: ContentProps) {
  return (
    <div className="px-6"
      style={{
        minHeight: 'calc(100vh - 128px)',
      }}
    >
      {props.children}
    </div>
  )
}
```

```tsx
export default function Footer() {
  return (
    <div className="h-16 leading-16 text-center">Created by Lexmin0412.</div>
  )
}
```

```tsx
// src/components/layouts/layout.tsx
import Header from "./header"
import Content from "./content"
import Footer from "./footer"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <div>
      <Header />
      <Content>
        {props.children}
      </Content>
      <Footer />
    </div>
  )
}
```

### 5. 新增路由入口文件

新建 src/routes/entry.tsx，内容如下：

```tsx
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'
import routes from './index'
import Layout from './../components/layouts/layout'

export default function RouterEntry() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {
            routes.map((route: any) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}>
              </Route>)
            )
          }
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
```

### 6. 调整项目结构

删除 App.tsx 以及 App.css，将 src/routes/entry.tsx 文件作为项目入口组件。

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes/entry'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
```

## github 自动构建及部署

### 1. 添加工作流配置文件

新建 .github/workflows/deploy.yml，内容如下：

```yaml
name: Deploy
on:
  push:
    branches:
      - master

jobs:
  main:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
        with:
          persist-credentials: false

      - name: Install and Build
        run: |
          npm install pnpm -g
          pnpm install
          pnpm run build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          BRANCH: gh-pages
          FOLDER: dist
```

### 2. 添加 github 密钥

进入 github 对应仓库的设置页，点击 Secrets 菜单，进入 actions 子菜单，点击 New repository secret，name 输入 ACCESS_TOKEN，value 输入在个人设置中生成的密钥。

### 3. 修改项目 base

#### 3.1 vite base 配置修改

修改 vite.config.ts 的 base 属性，将 base 设置为对应的 github 仓库名，前后拼接 `/`，如下（仓库名为 spacex）：

```ts
export default defineConfig({
  base: '/spacex/',
})
```

#### 3.2 react-router 路由配置修改

修改 src/routes/entry.tsx，修改 BrowserRouter/HashRouter 的 basename 属性为 `/<repo-name>`：

```tsx
export default function RouterEntry() {
  return (
    <BrowserRouter basename='/spacex'>
  )
}
```

#### 4. 推送代码触发部署

将代码推送到 master 分支，将会看到一个 action 被自动触发，等待结束后访问 `https://<username>.github.io/<repo-name>` 即可。
