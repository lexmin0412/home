# 发布npm包步骤

### 第一步 新建文件夹
先新建一个名为 `wld-utils` (项目名称) 的文件夹
`mkdir wld-utils`

### 第二步 npm相关配置
按先后顺序执行以下命令：
```javascript
npm init  // npm初始化
nrm ls  // 查看当前npm指向的源
nrm use npm  // 如果npm当前指向的源不是npm，则指向npm，否则跳过此条
npm login  // 登录npm，注意这里需要输入用户名和密码，密码是密文的，在命令行中无法显示，是正常的，输入即可
npm publish  // 发布包
```

### 持续集成
如果修改了代码之后想要发布新的版本，则需要按步骤执行以下命令：
```javascript
npm version 1.1.0  // 修改版本号(需高于当前版本号)
npm publish  // 发布新版
``` 

### 问题记录

以下是部分楼主在自己发包的过程中遇到的问题，如果有同学也遇到了可以尝试如下的解决方案：

```javascript
`You do not have permission to publish "cc-utils". Are you logged in as the correct user?`
```
这个错误一般是由于npm中已经存在同名包引起的，修改 `package.json` 文件中的 `package name` 即可