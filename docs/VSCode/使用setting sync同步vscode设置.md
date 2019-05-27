# 使用setting sync同步vscode设置

### 0. 安装vscode扩展

`command+shift+X` 打开扩展，搜索 `setting sync` , 安装插件

### 1. 生成token
```
settings --> Developer settings --> Personal access tokens --> Generate new tokens, 勾选上gist选项
```
点击生成按钮后会得到一个token，保存一下。

### 2. 在不同设备间设置
`command+shift+P`, 找到 sync: update/upload settings选项，会弹出一个框，输入刚刚保存的token，回车。vscode右下角会有提示框，生成了gistid，保存gistid，在另一台设备上的vscode中使用 `command+shift+p` 找到 `sync: download settings` ，相继输入token和gistid，即可在不同设备之间同步设置了。

### 3. Remark
> `command+shift+p` 找到 `sync:reset settings`, 可以重置同步设置。

### 4. 我的配置
- 我的token  `5d6f6df64f51cb41f9ba461ad06b79d1ab626194`
- 我的gistid `2c3e6fe7271b3e332fb9550e4469de3e`