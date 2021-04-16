# Redux 使用及其原理

## Redux 使用

Redux 是 javascript 应用的状态容器，它保证了程序行为的一致性，且便于测试。

### API

#### createStore 

创建 store，用于存储状态(state)

#### getState 

获取状态，无参数，返回当前state

#### dispatch 

提交更新, 参数为一个action

#### reducer 

初始化、修改状态函数（纯函数），接受当前 state 和 action 为参数，返回新的state

示例：

```js
(prevState, action) => newState
```

之所以将这种函数称为 reducer，是因为它与被传入 `Array.prototype.reduce(reducer, ?initialValue)` 的回调函数属于相同的类型。保持 reducer 纯净非常重要，永远不要在 reducer 中做下面这些操作：

- 修改传入参数
- 执行有副作用的操作，如 API 请求和路由跳转
- 调用非纯函数，如 `Date.now()` 或者 `Math.random()`

#### subscribe 

订阅状态，参数为一个监听函数，在 store 发生变化后执行

### 使用示例

```jsx
import { createStore } from 'redux'

/**
 * reducer 接收一个state和action，返回新的state
 */
const reducer = (state = {
  // 初始化状态
	count: 0
}, action) => {
	switch( action.type ) {
		case 'INCREMENT':
			return {
				count: state.count + 1
			}
		case 'DECREMENT':
			return {
				count: state.count - 1
			};
		default:
			return state
	}
}

// 使用 createStore 创建一个状态容器
const store = createStore(reducer)

// 导出状态集，用于组件订阅
export default store
```

```jsx
// ReduxDemo.js
import React, { Component } from 'react'
import store from './../store/index'

export default class reduxDemo extends Component {

	componentDidMount() {
    // 订阅
		store.subscribe(()=>{
      // store状态更新后，需要触发页面render，页面状态才会更新
			this.forceUpdate()
		})
	}

	render() {
		console.log('into redux demo render', store.getState())
		return (
			<div>
				<button onClick={() =>  {
          // 提交更新, 所有对state的更改都经由dispatch(action)提交
          store.dispatch({type: 'DECREMENT'})
        }}>-</button>
				<span style={{
					margin: '0 20px'
				}}>
				{store.getState().count}
				</span>
				<button onClick={()=>{store.dispatch({type: 'INCREMENT'})}}>+</button>
			</div>
		)
	}
}
```

## 异步

Redux 只是一个纯粹的状态管理器，默认只支持同步，要实现异步任务，比如延迟，网络请求，需要中间件的支持，比如我们使用的最简单的 redux-thunk 和 redux-logger。

中间件就是一个函数，对 `store.dispatch` 方法进行改造，在发出 `Action` 和执行 Reducer 这两步之间，添加了其他功能。

Redux 本来不支持异步，它的 dispatch 方法的 action 参数只支持 plain object，也就是 `{type: 'INCREMENT'}` 类似的形式，无法执行异步逻辑，使用如下：

```tsx
handleAdd = () => {
	store.dispatch({type: 'INCREMENT'})
} 

render() {
  return (
  	<button onClick={()=>this.handleAdd()}>add</button>
  )
}
```

而通过引入 redux-thunk 中间件，既不影响原生的 redux 调用方式，还可以实现向 dispatch 传递函数，从而执行异步逻辑：

```tsx
handleAdd = () => {
	store.dispatch({type: 'INCREMENT'})
} 

// 模拟异步方式
handleAsyncAdd = () => {
  // thunk中间件会判断dispatch的参数类型，如果是函数则给它添加两个参数：dispatch和getState，
	store.dispatch((dispatch, getState)=>{
		setTimeout(() => {  // 模拟请求
			dispatch({type: 'INCREMENT'})
		}, 1000);
	})
}

render() {
  return (
  	<button onClick={()=>this.handleAdd()}>add</button>
    <button onClick={()=>this.handleAsyncAdd()}>async add</button>
  )
}
```

dispatch 接收的参数可以是一个 plain object, 也可以是一个函数，它接收 dispatch 和 getState 函数，dispatch 就是 redux 中的 store.dispatch 函数，而 getState 对应 redux 中的 getState,  返回修改前的 state。

## 函数式编程

### 概念

函数式编程倡导 **利用若干简单的执行单元** 让计算结果不断渐进，逐层推导复杂的运算。

函数式编程有两个最基本的运算：合成（compose）与柯里化（Currying）。

### 合成

如果一个值要经过多个函数才能变成另一个值，就可以把所有中间步骤合并成一个函数，这叫做函数的合成（compose）。

合成的可以使代码变得简单而富有可读性，同时通过不同的组合方式，我们可以轻松组合出其他函数，让我们的代码更具表现力。

```ts
const fn1 = (arg) => {
	console.log('fn1 arg', arg)
	return arg
}
const fn2 = (arg) => {
	console.log('fn2 arg', arg)
	return arg
}
const fn3 = (arg) => {
	console.log('fn3 arg', arg)
	return arg
}

const compose = (...funcs) => {
	if ( funcs.length === 0 ) {
		return (...args) => args
	}
	if ( funcs.length === 0 ) {
		return funcs[0]
	}
	return funcs.reduce((a, b) => (...args) => {
		return a(b(...args))
	})
}
let res = compose(fn1, fn2, fn3)('hei')
```

### 柯里化

柯里化，是把接受多个参数的函数变换成接受一个单一参数的函数，并且返回接受余下的参数而且返回结果的新函数的技术。

简而言之，就是把多参数函数转变成单参数函数。

```ts
const add = (x) => {
	const addY = (y) => {
		return x + y
	}
	return addY
}

add(1)(2)const add = (x) => {
	const addY = (y) => {
		return x + y
	}
	return addY
}

add(1)(2)
```

## 实现一个简单的 redux

createStore 接收两个参数，第一个参数为 reducer，不必多说，第二个参数为 enhancer。

### 入口文件：

redux 向外暴露两个基础 API，一个 createStore, 另一个是 applyMiddleware，而 applyMiddleware 的调用结果是作为 createStore 的第二个参数。

```js
// index.js
import createStore from './createStore'
import applyMiddleware from './applyMiddleware'

export {
	createStore,
	applyMiddleware
}

```

### `applyMiddleware.js`

```js
// applyMiddleware.js
import compose from './../utils/compose'

/**
 * applyMiddleware的作用是强化dispatch，而不改变其他api(getState和subscribe)
 * 它的执行结果需要作为createStore方法的第二个参数
 * 所以它需要返回一个函数，接收createStore为参数，然后对其的dispatch方法进行扩展后返回
 * 这个函数的返回结果也是一个函数，接收reducer作为参数，返回扩展后的store
 */
const applyMiddleware = (...middlewares) => {

	return createStore => reducer => {
		const store = createStore(reducer)
		let dispatch = store.dispatch

		// 定义中间件需要的api
		const middleAPI = {
			getState: store.getState,
			dispatch: action => dispatch(action),  // 这里相当于就是将dispatch复制一份 防止不同的中间件之间互相冲突
		}

		// 给所有中间件传入getState和dispatch
		const middlewareChain = middlewares.map(middleware=>middleware(middleAPI))

		// 融合所有函数，包装dispatch
		dispatch = compose(...middlewareChain)(store.dispatch)

		// 返回 store，同时加强 dispatch
		return {
			...store,
			dispatch
		}
	}
}

export default applyMiddleware

```

### `createStore.js`

```js
/**
 * 创建store 接收参数：reducer和enhancer
 * @param {*} reducer 定义的state修改函数
 * @param {*} enhancer store包装，用于强化dispatch 返回一个函数，这个接收createStore为参数，并返回另一个函数，接收reducer为参数
 * @returns
 */
const createStore = (reducer, enhancer) => {

	if ( enhancer ) {
		return enhancer(createStore)(reducer)
	}

	let currentState = {
		count: 0
	}
	const listeners = []

	// 获取当前状态
	const getState = () => {
		return currentState
	}

	// 接收一个action 触发reducer
	const dispatch = (action) => {
		console.log('dispatch', action)
		currentState = reducer( currentState, action)
		listeners.forEach(callbackfn=>{
			callbackfn()
		})
	}

	// 接收一个回调函数，在state更改时执行
	const subscribe = (listener) => {
		listeners.push(listener)
		// 返回取消订阅的函数
		return () => {
			const index = listeners.findIndex(listener)
			listeners.splice(index, 1)
		}
	}

	// 手动执行dispatch，赋初始值
	dispatch({type: 'FFFFFF'})

	return {
		dispatch,
		getState,
		subscribe
	}
}

export default createStore

```

## React-Redux

### 为什么要使用 React-Redux?

每一个地方都要书写订阅、取消订阅的代码，都需要调用 `store.getState` 去使用 state，很繁琐。

### Class 使用示例

#### API

- Connect

#### 代码

```tsx
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

@connect(
	// mapStateToProps function
	({count})=>({count}),
	// mapDispatchToProps:  object or function
	// object
	// {
	// 	add: () => ({type: 'INCREMENT'})
	// }
	// function1
	// dispatch => {
	// 	return {
	// 		dispatch,
	// 		add: () => dispatch({type: 'INCREMENT'}),
	// 		minus: () => dispatch({type: 'DECREMENT'})
	// 	}
	// }
	// function2
	dispatch => {
		const actionCreator = {
			add: () => ({type: 'INCREMENT'}),
			minus: () => ({type: 'DECREMENT'})
		}
		let creators = bindActionCreators(actionCreator, dispatch)
		return {
			dispatch,
			...creators
		}
	},
	// merge props, 合并 props，可以用于隐藏或增加props
	(stateProps, dispatchProps, ownProps) => {
		return {
			...stateProps,
			...dispatchProps,
			// ...ownProps
		}
	}
)
class Index extends Component {
	render() {
		console.log('this.props', this.props)
		const { count, add, minus } = this.props
		return (
			<div>
				Index
				<div>count: {count}</div>
				<button onClick={()=>add()}>add</button>
				<button onClick={()=>minus()}>minus</button>
			</div>
		)
	}
}

export default Index

```

### Hook 使用示例

#### API

- useSelector 获取 store state
- useDispatch 获取 dispatch

#### 示例：

函数组件使用：

```tsx
import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function HookIndex() {

	const store = useSelector(({count})=>({count}))
	const dispatch = useDispatch()
	const { count } = store
  
  // 优化：使用useCallback缓存方法，防止每次渲染都重新定义
  const add = useCallback(() => {
    // 调用dispatch
    dispatch({type: 'INCREMENT'})
  }, [])

	return (
		<div>
			Hook Index
			<div>
				{count}
			</div>
			<button onClick={()=>dispatch({type: 'INCREMENT'})}>add</button>
			<button onClick={()=>dispatch({type: 'DECREMENT'})}>minus</button>
		</div>
	)
}
```

## 实现一个简单的 React Redux

在 React 应用中，需要使用 context 来实现全局数据绑定和获取，react-redux 要做的，就是在 redux 和 react 之间提供一种连接，本身不提供任何数据相关的逻辑。它需要实现的 API，一个用于在应用最顶层提供数据(Provider)，一个用于在深层组件中获取数据(connect)。另外，对于 hook 组件，还需要提供 store state 和 dispatch 方法的 hook 调用形式。

### Provider

使用 React 的 context API 实现。

```js
// index.js
const StoreContext = React.createContext()  // 定义用于传递store的context

export const Provider = (props) => {
	const { children, store } = props
	return (
		<StoreContext.Provider value={store}>  // 将store传递给所有children组件
			{children}
		</StoreContext.Provider>
	)
}
```

### connect

```js
// 这个方法引用自redux, 也可以自己实现，其实就是将plain object形式的action转变为函数
import { bindActionCreators } from 'redux'

/**
 *
 * @param {*} mapStateToProps 状态映射
 * @param {*} mapDispatchToProps 派发状态映射
 * @returns
 */
export const connect = (mapStateToProps = state => state, mapDispatchToProps) => WrappedComponent  => props => {
	// 给新返回的组件的props加上store state和dispatch，这个dispatch是指所有的派发状态方法
	const store = useContext(StoreContext)
	const stateProps = mapStateToProps(store.getState())
  
	let dispatchProps = {  // 默认只有一个dispatch方法
		dispatch: store.dispatch
	}
	if ( mapDispatchToProps ) {
		// 判断如果是function则直接覆盖
		if ( typeof mapDispatchToProps === 'function' ) {
			dispatchProps = mapDispatchToProps(store.dispatch)
		} else if ( typeof mapDispatchToProps === 'object' ) {
			// 如果是object则调用bindActionCreators转换
			dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch)
		}
	}

	// 函数组件中引起更新 在class中直接使用this.forceUpdate
	const [ignored, forceUpdate] = useReducer(x=>x+1, 0)
	// 因为useEffect会在组件渲染完成之后执行，会有延迟，可能在这一段延迟范围内store改变了但是没有监听到，所以需要使用useLayoutEffect
	useLayoutEffect(() => {
		const unsubscribe = store.subscribe(()=>{
			forceUpdate()
		})
		return () => {
			unsubscribe && unsubscribe()
		}
	}, [store])

	return (
    // 将 props, stateProps, dispatchProps 全部合并传递到子组件，在子组件中可以通过this.props来访问store中的state和dispatch方法
		<WrappedComponent
			{...props}  // 输入组件原本的props
			{...stateProps}  // 映射后的store状态
			{...dispatchProps}  // 映射后的派发状态方法
		/>
	)
}
```

### Hook 实现

#### useSelector

```js
/**
 * useSelector hook实现
 */
export const useSelector = (mapStateToProps) => {
	const store = useContext(StoreContext)
	const nextStore = mapStateToProps(store.getState())

	// 更新 不添加这一段的话只能更新store，无法触发页面渲染
	// 在这里定义的话，不论在哪里调用dispatch，修改完state之后都会更新这里
	const [ignored, forceUpdate] = useReducer(x=>x+1, 0)
	useLayoutEffect(()=>{
		const unsubscribe = store.subscribe(()=>{
			forceUpdate()
		})
		return () => {
			unsubscribe && unsubscribe()
		}
	}, [store])

	return nextStore
}
```

#### useDispatch

```js
/**
 * useDispatch方法实现
 */
export const useDispatch = () => {
	const store = useContext(StoreContext)
	return store.dispatch
}
```

这样一来，就实现了 React-Redux 中的所有基础 API，可以看出并没有对 store 状态本身做任何处理，只是做了 Redux 和 React 的连接工作。



























