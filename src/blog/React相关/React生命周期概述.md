# React的生命周期概述

## 常用的声明周期方法

### `render`

每次渲染时调用。该方法会创建一个虚拟DOM，是一个class组件唯一必需的方法。

### `componentDidMount`

组件挂载完成时调用，只调用一次。此方法被调用时，DOM已经加载完成，可以使用 `React.findDOMNode()`  访问真实的DOM节点。

### `shouldComponentUpdate(nextProps, nextState)`

在组件接收新的props或state时调用，可以说是react性能优化中最重要的一环。可以在此对比更新前后两个props和state是否相同来决定返回值，返回false则可以阻止更新。

### `componentDidUpdate(prevProps, prevState, snapshot)`

组件接收到新的props或state重新渲染完成之后立即被调用，可以在这里访问并修改DOM。

注意:

- 首次渲染不会执行此方法
- 如果组件实现了 `getSnapshotBeforeUpdate()` 生命周期（不常用），则它的返回值将作为 `componentDidUpdate()` 的第三个参数 “snapshot” 参数传递。否则此参数将为 undefined。

使用示例：

```js
componentDidUpdate(prevProps) {
  // 典型用法（不要忘记比较 props）：
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```

### `componentWillUnmount`

组件即将卸载时调用。为防止不必要的性能消耗，应该在此方法中清除组件中的定时器和事件监听器。

## 过时的声明周期方法

### `UNSAFE_componentWillMount`

组件即将挂载时调用，只调用一次，此时可以修改state，但还不能访问DOM节点。

### `UNSAFE_componentWillReceiveProps`(nextProps)

父组件的props改变时调用，`nextProps` 为改变后的props。可以在这个方法中更新state以触发render重新渲染组件。

### `UNSAFE_componentWillUpdate(prevProps, prevState)`

组件接收到新的props或state即将进行重新渲染之前被调用。

注意:

- 不要在此方法中更新props或state

## 参考资料 

- [https://segmentfault.com/a/1190000004168886?utm_source=tag-newest](https://segmentfault.com/a/1190000004168886?utm_source=tag-newest)
