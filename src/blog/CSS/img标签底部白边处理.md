# img标签底部白边解决方案

### html结构
```html
<div class="box">
  <img src="https://xx.png" />
</div>
```

### 问题来源

img标签为行内元素，默认对其方式为 `vertical-align: baseline` (基线对齐) 。图片默认的垂直对齐方式是基线，基线的位置与字体相关，所以在某些时候，图片底部的空隙可能是 2px，而有时可能是 4px 或更多。不同的 font-size 会造成这个空隙的高度大小。


### 解决方案

#### 方案1
```less
.box {
  img {
    display: block;
  }
}
```

#### 方案2
```less
.box {
  img {
    vertical-align: bottom;
  }
}
```

#### 方案3
```less
.box {
  font-size: 0;
}
```

#### 方案4
```less
.box {
  img {
    float: left;
    width: 100%;
  }
}
```


[参考](https://blog.csdn.net/tt18473481961/article/details/82786676)