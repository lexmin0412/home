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

### 不能在render函数中定义纯函数组件，否则打包为小程序的时候会报错
```cmd
taro Cannot read property 'isCallExpression' of null
```
解决：去除render return之前定义的纯函数组件 使用class组件代替

### 文本溢出显示省略号样式不不生效
```scss
// 多行截取
@mixin textOrient($line) {
	display: -webkit-box;

	// 需要加上这一句autoprefixer的忽略规则 否则这一行样式加不上 导致无法展示省略号
	/*! autoprefixer: ignore next */
	-webkit-box-orient: vertical;

	-webkit-line-clamp: $line;
	overflow: hidden;
}
```

### 移动滑动不跟手的问题
```scss
page{
	-webkit-overflow-scrolling: touch;
}
#app {
	height: auto;
	-webkit-overflow-scrolling: touch;
}
```

### 错误图片处理
解决方案：每一个Image标签传入一个唯一key，使用onError事件监听解决。 
下面是封装的组件
```jsx

import Taro, { Component } from '@tarojs/taro';
import { Image } from '@tarojs/components';
import defaultStoreIcon from './../assets/images/common/headimg.jpg'
import defaultGoodsIcon from './../assets/images/common/icon_default.png'
import defaultPersonIcon from './../assets/images/common/person_zhanweitu@2x.png'

/**
 * 组件需要的Props定义
 */
interface IProps {
  className: string;
  src: string;
  type: string;
  key: string;
}
/**
 * 分割线
 */

/**
 * api同taro Image 增加type和key属性 用于处理图片路径错误
 * @type 图片类型 String store-店铺 person-用户 goods-商品
 * @key 图片key值，需要保证页面唯一
 * @src 图片路径 同Image src
 * @className 图片类名 同Image className
 */

const iconEnum = {
  'store': defaultStoreIcon,
  'person': defaultPersonIcon,
  'goods': defaultGoodsIcon
}
 
export default class BackTop extends Component<IProps> {
  
    state = {};
  
    // 错误时间监听 设置唯一state
    handleError = key => {
        const { type } = this.props
        this.setState({
            [`imgError${key}`]: iconEnum[type]
        })
    }

	render() {
        const { className, src, type, key } = this.props
		return (
			<Image {...this.props}
                src={this.state[`imgError${key}`] || src}
                onError={this.handleError.bind(this, key)}
            />
		);
	}
}
```

### 行内样式自动转换
```js
// 如果在设计稿上是10px，这里就传入10	返回一个字符串 h5单位为rem 小程序端为rpx
Taro.pxTransform(10)
```