# Taro踩坑指南

- jsx中不能使用匿名函数, 需要bind
```js
<View onClick={this.handleClick}></View>  // 正确
<View onClick={()=>this.handleClick(params)}></View>  // 错误
<View onClick={this.handleClick.bind(this, params)}></View>  // 正确
```
