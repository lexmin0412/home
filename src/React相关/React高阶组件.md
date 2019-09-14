# React高阶组件

### 认识高阶组件
高阶组件 (Higher-Order Components) 其实就是一个函数，它接受一个组件，返回另外一个组件，生成的新组件可以对属性进行包装，也可以重写组件的部分生命周期。

React作为组件化的开山鼻祖，在对组件功能进行扩展时，高阶组件是不二法则。react-redux中的connect就是一个高阶组件。它接受一个组件，然后对它的生命周期进行一些特殊的处理，实现了组件间的数据共享。

### 实现一个高阶组件

```jsx
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

### 高阶组件应用
```jsx
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
