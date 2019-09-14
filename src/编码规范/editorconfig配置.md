# editorconfig配置

### 安装

0. 新建 `.editorconfig.js`, 定义规则
```cmd
# http://editorconfig.org
root = true

[*]
indent_style = tab
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

```

1. 安装vscode扩展

`command shift + x` , 搜索 `editorconfig for vs code` , 安装

2. 安装editorconfig依赖

```cmd
yarn add editorconfig -D
```

3. 格式化

进入需要格式化的文件
```cmd
shift + command + f
```

4. the end