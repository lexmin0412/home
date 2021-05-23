

# React-Router 使用及其原理

## 简介

### 官方文档及示例

- https://reactrouter.com/web/guides/quick-start

### 作用

用于实现 React 单页应用的路由切换。

### 组成

React-Router 包括三个库：react-router, react-router-dom 和 react-router-native。react-router 提供最基本的路由功能，供 react-router-dom 和 react-router-native 依赖，所以实际使用的时候我们不会直接安装 react-router, 而是 react-router-dom 或 react-router-native（在 RN 中使用）, 它会自动依赖安装 react-router。

## 开始

### 安装

```bash
yarn add react-router-dom
```

### 基本使用

在 react-router 中，一切皆组件，路由器-Router、链接-Link、路由-Route、独占-Switch、重定向-Redirect 都以组件形式存在。

示例：

```jsx
<BrowserRouter>
	<Link to="/">home</Link>
	<Link to="/user">user</Link>
	<Link to="/msg">msg</Link>

	<Switch>
		<Route path="/" component={Home} />
		<Route path="/user" component={User} />
		<Route path="/msg" component={Msg} />
	</Switch>
</BrowserRouter>
```

## API

### <BrowserRouter />

```

```



### <Switch />

渲染与当前地址匹配的第一个字节点 Route 或者 Redirect。

```jsx
<Switch>
	<Route path="/home" component={Home} />
	<Route component={NotFound}></Route>  // 当列表中的所有 path 都没有匹配到时，渲染 NotFound
</Switch>
```

### <Redirect />

重定向到其他页面。

```jsx
<Redirect to={{ pathname: '/msg' }} />  // 在任何一个页面中使用，访问对应的页面时将渲染 Redirect 指向的组件。
```

## Route 渲染内容的三种方式

可以通过以下三种方式渲染路由组件：

- children: func
- render: func
- component: func

**Route 渲染优先级：children > component > render**

三者可以接收到同样的 [route props], 包括 match, location 和 history，但是当不匹配的时候，children 的 match 为 `null`。

这三种方式是互斥的，你可以同时使用，但只有优先级高的会生效，如同时配置了children, component 和 render 属性，只有children会生效。

有时候，不论 location 是否匹配，都需要渲染一些内容，这时可以使用 children。除了这一点之外，其他工作方法与 render 完全相同。

component 和 render 只有当路由匹配的时候才渲染。

示例：

```jsx
<BrowserRouter>
	<Link to="/">home</Link>
	<Link to="/user">user</Link>
	<Link to="/msg">msg</Link>
	<Link to="/product">product</Link>

	<Switch>
		<Route
			exact
			path="/"
			component={Home}
			children={()=>(<div>children</div>)}
			render={()=>(<div>render</div>)}
		></Route>
		<Route exact path="/user" component={User}></Route>
		<Route exact path="/msg" component={Msg}></Route>
		<Route component={NotFound}></Route>
	</Switch>
</BrowserRouter>
```

如上，只有 children 会生效，component 和 render 都是无效的。

当把包裹的 Switch 去除时，Home 组件和 Switch 组件一直都会渲染。

### 渲染方式选择

#### 1. 路由渲染没有逻辑时，使用 component

注意：当使用 component 时，不要使用匿名函数，否则每次父组件 render 时，都会造成当前路由的重新 render，引起不必要的性能开销；如果在渲染时有逻辑判断，可以使用 render 或 children。

```jsx
// App.js
function App() {

	const [count, setCount] = useState(0)

  return (
		<React.Fragment>
			<button onClick={()=>setCount(count+1)}>
				count: {count}
			</button>
			<BrowserRouter>
				<Switch>
					<Route
						exact
						path="/"
            // component={Home}  // 正确写法 没有逻辑，总是渲染 Home 组件
						component={()=><Home />}  // 错误写法 会导致每次 App 渲染都会引发 Home 的卸载与重新挂载，容易导致性能问题
					></Route>
				</Switch>
			</BrowserRouter>
		</React.Fragment>
  );
}


// Home.js
import React, { useEffect } from 'react'

export default function Home() {

	useEffect(() => {
		console.log('didmount')
		return () => {
			console.log('unmount')
		}
	}, [])

	return (
		<div>
			home
		</div>
	)
}
```

在上面的例子中，每次点击 button 之后都会触发 App 组件的 render, 而渲染 component 的时候会触发 React.createElement, 如果使用上面这种匿名函数的形式，会导致每次 App render 时，函数的 type 都不相同，Home 组件都会被卸载和重新挂载，容易引起性能问题。

#### 2. 无论是否匹配都要渲染组件时，使用 children

children 的匿名函数不会出发页面的卸载和重新挂载。

```jsx
// App.js
function App() {

	const [count, setCount] = useState(0)

  return (
		<React.Fragment>
			<button onClick={()=>setCount(count+1)}>
				count: {count}
			</button>
			<BrowserRouter>
				<Route
					exact
					path="/"
					children={()=><Home />}  // 不论路由是否匹配，都会执行 children, 匿名函数中可以通过逻辑判断渲染不同组件
				/>
			</BrowserRouter>
		</React.Fragment>
  );
}
```

#### 3. 必须匹配才渲染时，使用 render

```jsx
// App.js
function App() {

	const [count, setCount] = useState(0)

  return (
		<React.Fragment>
			<button onClick={()=>setCount(count+1)}>
				count: {count}
			</button>
			<BrowserRouter>
				<Route
					exact
					path="/"
					render={()=><Home />}  // 只有匹配，才会执行 render, 匿名函数中可以通过逻辑判断渲染不同组件
				/>
			</BrowserRouter>
		</React.Fragment>
  );
}
```

## 如何配置 404 页面

在 <Route/> 组件中，如果不赋 path 属性，就会默认匹配，所以将一个 404 的 <Route/>  放到路由列表的最后即可。

```jsx
<BrowserRouter>
	<Link to="/">home</Link>
	<Link to="/user">user</Link>
	<Link to="/msg">msg</Link>

	<Switch>
		<Route path="/" component={Home} />
		<Route path="/user" component={User} />
		<Route path="/msg" component={Msg} />
    <Route component={_NotFoundPage} />
	</Switch>
</BrowserRouter>
```

## 动态路由

```jsx
<Route path="/user/:id" component={User}></Route>
```

通过访问类似 `user/12345` 即可匹配到对应的 Route，渲染 User 组件。

在组件中通过访问 props.match.params 即可获取到 `{id: "12345"}`

### 嵌套

在下面的例子中，点击“详情”，地址栏路径将会变为 `/product/:id/detail`, 点击评价，将会变成 `/product/:id/comment`。

```jsx
import React from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './detail'
import Comment from './comment'

export default function Product(props) {
	console.log('product props', props)
	const { params: {id}, url } = props.match
	const detailRoute = `${url}/detail`
	const commentRoute = `${url}/comment`
	return (
		<div>
			product
			<Link to={detailRoute}>详情</Link>
			<Link to={commentRoute}>评价</Link>

			<Route path={detailRoute} component={Detail} />
			<Route path={commentRoute} component={Comment} />
		</div>
	)
}
```

