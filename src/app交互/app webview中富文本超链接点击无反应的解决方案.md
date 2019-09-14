# app webview中富文本超链接点击无反应的解决方案

点击无法跳转的链接
```html
<a href="https://www.baidu.com" target="_blank" title="屯堡亲子">点击无法跳转的链接</a>
```

点击可以跳转的链接
```html
<a href="https://www.baidu.com" target="_self" title="屯堡亲子">点击可以跳转的链接</a>
```

富文本编辑器插入链接一般有两种：打开新窗口和当前窗口，选择当前窗口即可解决。

若想在使用新窗口打开的情况下也能点击跳转，则需要原生修改webview相关代码，见参考链接。

[参考](https://www.jianshu.com/p/05103d25f514)