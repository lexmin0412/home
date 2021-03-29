# React高阶组件 - HOC

为了提高组件复用率、可测试性，就要保证组件功能单一性；但是若要满足复杂需求就要扩展功能单一的组件，在 React 中就有了 HOC（Higher-Order Components）的概念。

定义：**高阶组件接收一个组件作为参数，返回一个新组件。** 生成的新组件可以对属性进行包装，也可以重写组件的部分生命周期。

React作为组件化的开山鼻祖，在对组件功能进行扩展时，高阶组件是不二法则。react-redux中的connect就是一个高阶组件。它接受一个组件，然后对它的生命周期进行一些特殊的处理，实现了组件间的数据共享。

HOC在第三方库中的应用：

- Redux中的 connect

## HOC的应用场景

假如现在有这样的两个页面：

```jsx
// page1.js
import React, { Component } from 'react'

class Page1 extends Component {

	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
	}

	componentDidMount(){
		this.getData()
	}

	getCount = () => {
		return new Promise((resolve, reject)=>{
			setTimeout(() => {
				this.setState({
          count: 1
        })
			}, 2000);
		})
	}

	render() {
		const { count } = this.state
		return (
			<div>
				count {count}
			</div>
		)
	}
}

export default Page1
```

```jsx
// page2.js
import React, { Component } from 'react'

class Page2 extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: 0
		}
	}

	componentDidMount(){
		this.getData()
	}

	getList = () => {
		return new Promise((resolve, reject)=>{
			setTimeout(() => {
				resolve(2)
			}, 2000);
		})
	}

	render() {
		const { data } = this.state
		return (
			<div>
				data {data}
			</div>
		)
	}
}

export default Page2
```

对上面两个页面的代码进行比较，可以发现他们有着类似的逻辑，那就是：

- 初始化一个state
- 通过一个异步请求获取数据并用于修改state，然后渲染在页面中。

在一个大型应用中，这样的场景是非常常见的，而这就是高阶组件大展身手的时候了。

我们可以编写一个组件函数，它接受一个组件和一个方法作为参数，返回一个新的组件：

```tsx
/**
 * 获取同类型的数据
 * @param {*} WrappedComponent
 * @param {*} getData 用于异步获取数据的方法
 * @returns
 */
const WithGetData = (WrappedComponent, getData) =>  {

	class WithGetData extends React.Component {
		constructor(props) {
			super(props)
			this.state = {
				data: 0
			}
		}

		componentDidMount(){
			getData().then((res)=>{
				this.setState({
					data: res
				})
			})
		}

		render(){
			const { data } = this.state
			return <WrappedComponent {...this.props} data={data}  />
		}
	}
	return WithGetData
}
```

`WithGetData`作为一个函数，接受一个组件和一个方法作为参数，返回新的组件，这个新组件就拥有了异步获取数据并渲染的功能。

我们可以这样使用 `WithGetData`：

```tsx
// page1.js
import React, { Component } from 'react'
import { WithGetData } from './hoc/withGetData'

class Page1 extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { data } = this.props
		return (
			<div>
				data {data}
			</div>
		)
	}
}

const getCount = () => {
	return new Promise((resolve, reject)=>{
		setTimeout(() => {
      resolve(1)
		}, 2000);
	})
}

export default WithGetData(Page1, getCount)
```

```tsx
// page2.js
import React, { Component } from 'react'
import { WithGetData } from './hoc/withGetData'

class Page2 extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { data } = this.props
		return (
			<div>
				data {data}
			</div>
		)
	}
}

const getList = () => {
	return new Promise((resolve, reject)=>{
		setTimeout(() => {
			resolve(2)
		}, 2000);
	})
}

export default WithGetData(Page2, getList)
```

## 高阶组件嵌套

有时候为了让组件具备不同的功能，我们需要对一个组件进行多次包裹，这时就需要用到高阶组件的嵌套了。

先定义不同的高阶组件：

```tsx
import React, { Component } from 'react';

// 高阶组件示例1: 赋予组件名称
const withName = Comp => {
  const name = '组件名称'
  return (
    <Comp name={name} />
  )
}

// 高阶组件示例2: 赋予组件打印组件名称的功能
const withLog = Comp => {
  console.log(Comp.name+'渲染了')
  return props => <Comp {...props} />
}

// 高阶组件示例3: 重写组件的生命周期 
const withData = (Comp) => {

  // 既然要用到生命周期，那么就要继承Component类了
  return class extends Component {
    
    state = {}
      
    componentDidMount(){
      // 比如在这里通过ajax请求数据 然后给组件赋予数据
      setTimeout(()=>{
        this.setState({
          data: {
            title: 'title',
            desc: 'desc'
          }
        })
      },2000)
    }
    render(){
      return (
        <Comp 
          {...this.props} 
          data={this.state.data} 
        />
      )
    }
  }
}
```

然后用以上的几个高阶组件对我们的页面组件进行包裹：

```tsx
import React, { Component } from 'react'
import PageContainer from './components/PageContainer'
import { withName, withlog, withData } from './decorators/hocNew'

@withName('这是标题')
@withlog
@withData
class TestComposition extends Component {
  
  render() {
    return (
      <PageContainer>
        这是页面的内容：
        {
          this.props.data && this.props.data.title
        }
      </PageContainer>
    )
  }
}

export default TestComposition

// 如果不想使用装饰器写法，也可以这样使用高阶组件包裹组件
// export default withData(withLog(withName(TestComponent)))	
```

这样一来，TestComposition组件就同时具备了设置页面标题、打印组件名称、渲染异步数据的能力。

## 使用 HOC 的注意事项

### 1. 不要改变原始组件，使用组合

HOC 不应该修改传入组件，而应该使用组合的方式，通过将组件包装在容器组件中实现功能：

```tsx
function logProps(InputComponent) {
  InputComponent.prototype.componentDidUpdate = function(prevProps) {
    console.log('Current props: ', this.props);
    console.log('Previous props: ', prevProps);
  };
  // 返回原始的 input 组件，暗示它已经被修改。
  return InputComponent;
}

// 每次调用 logProps 时，增强组件都会有 log 输出。
const EnhancedComponent = logProps(InputComponent);
```

这样做会有一些问题：

- 所有使用了logProps高阶组件包装的InputComponent组件内部的componentDidUpdate生命周期将会失效，因为无论如何定义都会被logProps中定义的覆盖
- 如果还有其他包裹InputComponent组件的HOC修改了componentDidUpdate，前面的HOC就会失效
- 如果被包裹的组件没有生命周期，那么将无法使用这个HOC进行包裹

我们不应该将组件传入后进行修改，而是使用组合的方式，在包裹的容器组件中实现功能：

```jsx
function logProps(WrappedComponent) {
  return class extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('Current props: ', this.props);
      console.log('Previous props: ', prevProps);
    }
    render() {
      // 将 input 组件包装在容器中，而不对其进行修改。Good!
      return <WrappedComponent {...this.props} />;
    }
  }
}
```

这个HOC与上文中直接修改传入组件的HOC实现了相同的功能，同时也没有对原组件进行修改，避免了冲突。它还可以与其他任何HOC进行组合，甚至是自己。

### 2. 约定：应该将不相关的props传递给被包裹的组件

HOC设计的初衷是为组件添加特性，自身不应该大幅改变约定。HOC返回的组件应与原组件保持类似的接口。

HOC应该透传与自身无关的props。大多数HOC都应该有一个类似于下面的render方法：

```tsx
render() {
  // 过滤掉非此 HOC 额外的 props，且不要进行透传
  const { extraProp, ...passThroughProps } = this.props;

  // 将 props 注入到被包装的组件中。
  // 通常为 state 的值或者实例方法。
  const injectedProp = someStateOrInstanceMethod;

  // 将 props 传递给被包装组件
  return (
    <WrappedComponent
      injectedProp={injectedProp}
      {...passThroughProps}
    />
  );
}
```

## 装饰器写法的注意事项

- 只能在class中使用

## 参考资料

- [React中文文档-高阶组件](https://react.docschina.org/docs/higher-order-components.html)



