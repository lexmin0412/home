# VSCode插件开发指

## 开发环境

开始前电脑上需要安装以下工具：

- vscode
- node.js
- yarn/npm
- 官方脚手架工具Yeoman和Generator-code

  ```bash
  $yarn global add yo generator-code
  ```

- 官方打包/发布工具vsce

  ```bash
  $yarn global add vsce
  ```

## 初始化插件项目

执行以下命令：

```bash
yo code
```

然后选择项目类型，输入项目信息等，也可以一路回车，直到最后一项项目初始化成功。

## 开发

以一个代码块项目插件为例：

1. 在 `package.json` 文件加入以下内容

```json
// package.json
{
  ...,
  "contributes": {
    "snippets": [
      {
        "language": "javascript",
        "path": "./snippets/javascript.json"
      },
      {
        "language": "typescript",
        "path": "./snippets/javascript.json"
      }
    ]
  },
}
```

以上内容声明了对应文件类型的代码块提示文件，具体表示在js和ts文件中提供 `./snippets/javascript.json` 文件下的声明的代码提示。

2. 创建代码块文件

```json
// snippets/javascript.json
{
  "forEach": {
    "prefix": "fe",
    "body": [
      "${1:array}.forEach(function(item) {",
      "\t${2:// body}",
      "});"
    ],
    "description": "Code snippet for \"forEach\""
  },
  "setTimeout": {
    "prefix": "st",
    "body": [
      "setTimeout(function() {",
      "\t${0:// body}",
      "}, ${1:1000});"
    ],
    "description": "Code snippet for 'setTimeout'"
  }
}
```

## 调试

点击VSCode左边调试，点击绿色的run extension按钮，会弹出一个调试窗口，在这个新窗口中新建js或者ts文件即可验证snippets是否生效了。

## 打包/发布

```
vsce package
```

打包会生成.vsix文件，拖拽到插件管理上传即可。