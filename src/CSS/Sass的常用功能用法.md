# Sass的常用功能用法

市面上有很多的 CSS 预处理器，包括 Sass、Less、Stylus等，都有着五花八门的功能，但是在我们平时的工作中经常用到的只是其中的一小部分，下面是个人经常用到的功能记录。

## 0. 项目结构

一个项目应该有一个单独的 scss 文件夹，用于存放公用的 scss 文件，一般是 src/scss , 包含以下文件：

- base.scss , 用于业务样式文件导入的入口文件
- theme.scss , 用于存放主题变量，如字体颜色、边框颜色等
- mixin.scss , 用于存放混入样式

```scss
// sass/base.scss
@import './theme.scss';
@import './mixin.scss';
```

下面的所有功能都会按照这个结构来记录。

## 1. 功能

### 1.0 文件引入

在页面的样式文件中，应该统一引入基础的公用样式文件

```scss
// pages/home/index.scss
@import './sass/base.scss';
```

注意：**`@import` 语句后必须跟分号，否则会报错**

### 1.1 变量

变量以 `$` 符号开头，如下：

定义：

```scss
// scss/theme.scss
$font24: 24rpx;
$theme-color: #45aafa;
$border-color: #999;
```

使用：

```scss
// pages/home/index.scss
@import './../../sass/base.scss';

.input-item {
  font-size: $font24;
  border-bottom: 1px solid $border-color;
}
```

### 1.2 混入 ( mixin )

混入规则的定义使用 `@mixin` 标识符开头, 可接收参数, 在引用时使用 `@include` 标识符。

定义：

```scss
// scss/mixin.scs
// 1px边框处理 可传入参数说明边框颜色和边框类型 不传则为默认值
@mixin border-bottom-1px($color: #eee, $type: solid) {
  &:after {
    content: "  ";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px $type $color;
    transform-origin: left bottom;
    transform: scale(1, 0.5);
  }
}
```

使用：

```scss
// pages/home/index.scss
@import './../../sass/base.scss';

.goods-item {
  @include border-bottom-1px(#999, dashed);
}
```

### 1.3 继承 ( extend )

继承用于不同选择器的样式存在包含关系，如 B 选择器包含 A 选择器的所有样式，另外还有自己独有的一些样式，这时就可以用到继承。

```scss
// pages/home/index
.goods-icon {
  width: 36rpx;
  height: 36rpx;
}

.store-image {
  @extend .goods-icon;
  border-radius: 8rpx;
}
```

### 1.4 判断

在一些公用的mixin样式中，可能会根据传入参数的不同决定部分属性的值。

如文本溢出的样式，单行的多行的部分属性不同：

```scss
// 多行截取
@mixin textOrient($line) {
  // 单行
  @if $line==1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  // 多行
  @else {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    // 需要加上这一句autoprefixer的忽略规则 否则这一行样式加不上 导致无法展示省略号

    /*! autoprefixer: ignore next */
    -webkit-box-orient: vertical;
    -webkit-line-clamp: $line;
  }
}
```
