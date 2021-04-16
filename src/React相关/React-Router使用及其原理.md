

# React-Router 使用及其原理

## 简介

### 官方文档及示例

- https://reactrouter.com/web/guides/quick-start

### 作用

用于实现 React 单页应用的路由切换。

## Route 渲染内容的三种方式

- children: func
- render: func
- component: func

Route 渲染优先级：children > component > render

三者可以接收到同样的 [route props], 包括 match, location 和 history，但是当不匹配的时候，children 的 match 为 `null`。

这三种方式是互斥的，只能使用一种。

有时候，不论 location 是否匹配，都需要渲染一些内容，这时可以使用 children。除了这一点之外，其他工作方法与 render 完全相同。

component, 只有当路由匹配的时候渲染。

