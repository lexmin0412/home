# Taro踩坑指南

- jsx中不能使用匿名函数, 需要bind
```js
<View onClick={this.handleClick}></View>  // 正确
<View onClick={()=>this.handleClick(params)}></View>  // 错误
<View onClick={this.handleClick.bind(this, params)}></View>  // 正确
```

### Taro中的跳转事件与生命周期的关系
- `navigateTo` 会进  `componentDidhide`

- `relaunch`,  `redirect`, `navigateBack` 以及物理返回 会进 `componentWillUnmount`

应用：如果要监听taro中的返回事件，则可以在页面中所有的跳转事件中加上一个state，然后在componentwillUnmount中判断state中的判断，用于判断是返回还是跳转