# React组件跨层级通信 - Context

在一个典型的 React 应用中，数据是通过 props 属性自顶向下进行传递的，但这种做法对于某些类型的属性而言是极其繁琐的（例如地区偏好/UI主题）。Context 提供了一种在组件之间共享此类属性的方式，而不必显式地通过组件树的逐层传递 props。

React 中使用 Context 实现祖代组件向后代组件跨层级传值。Vue 中的 provide & inject 来源于 Context。

## Context API

`React.createContext`

用于创建 Context。

`Context.Provider`

用于提供全局属性，允许消费组件订阅 context 的变化。

`Context.Consumer`

用于消费全局属性，需要返回一个 function 作为子元素。

`Class.contextType`

用于指定当前Class绑定的Context，声明后可在生命周期/方法中通过 `this.context` 访问对应的 context。

> **此 API 只能订阅单个 Context。**

`Context.displayName`

>  接收一个字符串，React DevTools 使用该字符串来确定 context 要显示的内容。下述组件在 DevTools 中将显示为 MyDisplayName：

```jsx
const MyContext = React.createContext(/* some value */);
MyContext.displayName = 'MyDisplayName';
<MyContext.Provider> // "MyDisplayName.Provider" 在 DevTools 中
<MyContext.Consumer> // "MyDisplayName.Consumer" 在 DevTools 中
```

### 用法

| 用法                                 | 场景                       |
| ------------------------------------ | -------------------------- |
| Context.Provider / Context.Consumer  | Class组件使用多个Context   |
| Context.Provider / Class.contextType | Class组件使用单个Context   |
| Context.Provider / useContext hook   | 函数组件或自定义hook中使用 |

## 示例

### 1. 跨层级通信

```js
/**
 * src/context/index.js
 */
export const ThemeContext = React.createContext({
	themeColor: 'pink',
})

export const ThemeProvider = ThemeContext.Provider

export const ThemeConsumer = ThemeContext.Consumer
```

``` jsx
/**
 * src/components/ContextConsumeComponent.js
 */
import React, { Component } from 'react'
import { ThemeConsumer } from '../contexts'

export default class ContextConsumer extends Component {
  render() {
    return (
      <ThemeConsumer>
        {
          ({themeColor}) => (
            <div style={{
              color: themeColor
            }}>
              {themeColor}
            </div>
          )
        }
      </ThemeConsumer>
    )
  }
}

```

```jsx
/**
 * src/pages/ConsumerProvider.js
 */
import React from 'react'
import ContextConsumerComponent from './../components/ContextConsumeComponent'
import { ThemeProvider } from '../contexts'

export default class ConsumerProviderPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			theme: {
				themeColor: 'red'
			}
		}
	}

	changeColor = () => {
		const { theme: {themeColor} } = this.state
		this.setState({
			theme: {
				themeColor: themeColor === 'red' ? 'green' : 'red',
			}
		})
	}

	render() {
		const { theme, location } = this.state
		return (
			<ThemeProvider value={theme}>
				<ContextConsumerComponent />
			</ThemeProvider>
		)
	}
}
```

### 2. 嵌套多个 Context

```js
/**
 * src/context/index.js
 */
export const ThemeContext = React.createContext({
	themeColor: 'pink',
})

export const ThemeProvider = ThemeContext.Provider

export const ThemeConsumer = ThemeContext.Consume
```

```jsx
/**
 * src/components/ContextConsumeComponent.js
 */
import React, { Component } from 'react'
import { ThemeConsumer, LocationConsumer } from '../contexts'

export default class ContextConsumer extends Component {
  render() {
    return (
      <ThemeConsumer>
        {
          ({themeColor}) => (
            <div style={{
              color: themeColor
            }}>
              themeColor: {themeColor}
              
              <LocationConsumer>
                {
                  ({province})=>(
                    <div className="location-consumer">
                    location consumer
                        <div>
                          {province}
                        </div>
                    </div>
                  )
                }
              </LocationConsumer>
            </div>
          )
        }
      </ThemeConsumer>
    )
  }
}
```

```jsx
/**
 * src/pages/ConsumerProvider.js
 */
import React from 'react'
import ContextConsumerComponent from './../components/ContextConsumeComponent'
import { ThemeProvider, LocationProvider } from '../contexts'

export default class ConsumerProviderPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			theme: {
				themeColor: 'red'
			}
		}
	}

	changeColor = () => {
		const { theme: {themeColor} } = this.state
		this.setState({
			theme: {
				themeColor: themeColor === 'red' ? 'green' : 'red',
			}
		})
	}

	render() {
		const { theme, location } = this.state
		return (
			<ThemeProvider value={theme}>
        <LocationProvider>
					<ContextConsumerComponent />
        </LocationProvider>
			</ThemeProvider>
		)
	}
}
```

### 3. 使用 ContextType

使用 ContextType，可以不显式地在 render 中写入 Provider，而只需将 Class 组件的 static contextType 属性指定为对应的 Context 即可，但是这种方式的局限性是一个组件只能使用一个 Context，如果要使用多个，就要使用第二种方式嵌套了。

```jsx
/**
 * src/pages/ContextTypeDemo.js
 */
import React, { Component } from 'react'
import { ThemeContext } from './../contexts'

export default class ContextTypeDemo extends Component {
	static contextType = ThemeContext
  render() {
		const theme = this.context
		return (
			<div className='context-type'>
				{theme.themeColor}
			</div>
		)
	}
}

```

```jsx
/**
 * src/pages/ConsumerProvider.js
 */
import React from 'react'
import ContextTypeDemo from './../components/ContextTypeDemo'
import { ThemeProvider } from '../contexts'

export default class ConsumerProviderPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			theme: {
				themeColor: 'red'
			}
		}
	}

	changeColor = () => {
		const { theme: {themeColor} } = this.state
		this.setState({
			theme: {
				themeColor: themeColor === 'red' ? 'green' : 'red',
			}
		})
	}

	render() {
		const { theme, location } = this.state
		return (
			<ThemeProvider value={theme}>
				<ContextTypeDemo />
			</ThemeProvider>
		)
	}
}
```

### 4. 使用 useContext Hook

```jsx
/**
 * src/pages/UseContextDemo.js
 */
import React, { useContext } from 'react'
import { ThemeContext } from './../contexts'

export default function UseContextDemo(props) {
	const { themeColor } = useContext(ThemeContext)
	return (
		<div className='use-context-page'
			style={{
				border: `1px solid ${themeColor}`,
				marginTop: '10px',
				color: themeColor
			}}
		>
			useContext {themeColor}
		</div>
	)
}

```

```jsx
/**
 * src/pages/ConsumerProvider.js
 */
import React from 'react'
import UseContextDemo from './../components/UseContextDemo'
import { ThemeProvider } from '../contexts'

export default class ConsumerProviderPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			theme: {
				themeColor: 'red'
			}
		}
	}

	changeColor = () => {
		const { theme: {themeColor} } = this.state
		this.setState({
			theme: {
				themeColor: themeColor === 'red' ? 'green' : 'red',
			}
		})
	}

	render() {
		const { theme, location } = this.state
		return (
			<ThemeProvider value={theme}>
				<UseContextDemo />
			</ThemeProvider>
		)
	}
}
```



## 注意

### 1. Consumer 的 children 必须是且仅一个函数。

错误写法1，以下代码编译会报错，原因：Consumer 的 children 除了一个 function 之外，还返回了另外一个 Consumer。

```jsx
/**
 * src/components/ContextConsumeComponent.js
 */
import React, { Component } from 'react'
import { ThemeConsumer, LocationConsumer } from '../contexts'

export default class ContextConsumer extends Component {
  render() {
    return (
      <ThemeConsumer>
        {
          ({themeColor}) => (
            <div style={{
              color: themeColor
            }}>
              themeColor: {themeColor}
            </div>
          )
        }
        <LocationConsumer>
          {
            ({province})=>(
              <div className="location-consumer">
              location consumer
                  <div>
                    {province}
                  </div>
              </div>
            )
          }
        </LocationConsumer>
      </ThemeConsumer>
    )
  }
}
```

错误写法2，以下代码编译会报错，原因：Consumer 的 children 是一个di v 元素，而不是一个 function:

```jsx
/**
 * src/components/ContextConsumeComponent.js
 */
import React, { Component } from 'react'
import { ThemeConsumer, LocationConsumer } from '../contexts'

export default class ContextConsumer extends Component {
  render() {
    return (
      <ThemeConsumer>
        <div>
          {
            ({themeColor}) => (
              <div style={{
                color: themeColor
              }}>
                themeColor: {themeColor}
              </div>
            )
          }
        </div>
      </ThemeConsumer>
    )
  }
}
```

正确写法：

```jsx
/**
 * src/components/ContextConsumeComponent.js
 */
import React, { Component } from 'react'
import { ThemeConsumer, LocationConsumer } from '../contexts'

export default class ContextConsumer extends Component {
  render() {
    return (
      <ThemeConsumer>
        {
          ({themeColor}) => (
            <div style={{
              color: themeColor
            }}>
              themeColor: {themeColor}
              
              <LocationConsumer>
                {
                  ({province})=>(
                    <div className="location-consumer">
                    location consumer
                        <div>
                          {province}
                        </div>
                    </div>
                  )
                }
              </LocationConsumer>
            </div>
          )
        }
      </ThemeConsumer>
    )
  }
}
```

### 2. 优化建议

因为 context 会使用参考标识（reference identity）来决定何时进行渲染，这里可能会有一些陷阱，当 provider 的父组件进行重渲染时，可能会在 consumers 组件中触发意外的渲染。举个例子，当每一次 Provider 重渲染时，以下的代码会重渲染所有下面的 consumers 组件，因为 `value` 属性总是被赋值为新的对象：

```jsx
class App extends React.Component {
  render() {
    return (
      // 每次渲染时候的context对比，{something: 'something'} === {something: 'something'} 永远返回 false，则所有Consumer都会重新渲染。
      <MyContext.Provider value={{something: 'something'}}>
        <Toolbar />
      </MyContext.Provider>
    );
  }
}
```

为了防止这种情况，将 value 状态提升到父节点的 state 里：

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {something: 'something'},
    };
  }

  render() {
    return (
      // 在这种写法下，当Provider的父组件重新渲染时，只要value未发生真正的变化，则不会触发子组件的重新渲染。
      <Provider value={this.state.value}>
        <Toolbar />
      </Provider>
    );
  }
}
```

### 3. 不要滥用

Context 的优点也是它的缺点。每次 Provider value 变化时，都会导致其下所有的 consumer 组件重新渲染，在某些情况下可能会导致性能问题。

## 参考

- [React中文文档-Context](https://reactjs.bootcss.com/docs/context.html)