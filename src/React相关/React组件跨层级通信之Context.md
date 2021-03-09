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

`Context.displayName`

>  接收一个字符串，React DevTools 使用该字符串来确定 context 要显示的内容。下述组件在 DevTools 中将显示为 MyDisplayName：

```jsx
const MyContext = React.createContext(/* some value */);
MyContext.displayName = 'MyDisplayName';
<MyContext.Provider> // "MyDisplayName.Provider" 在 DevTools 中
<MyContext.Consumer> // "MyDisplayName.Consumer" 在 DevTools 中
```

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

class ContextTypeDemo extends Component {
	render() {
		const theme = this.context
		return (
			<div className='context-type'>
				{theme.themeColor}
			</div>
		)
	}
}

ContextType.contextType = ThemeContext

export default ContextTypeDemo

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

## 参考

- [React中文文档-Context](https://reactjs.bootcss.com/docs/context.html)