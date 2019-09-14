# package.json配置详解

### 参考
- [npmjs.com - package.json](https://docs.npmjs.com/files/package.json)

```js
// package.json
{
  "name": "project-name",  // 项目名称
  "private": true,  // 设置为 `true` 则在执行 `npm publish` 时会报错，放置被误发布到npm
}
```

### name

库名称，需保持在npmjs生态中唯一。

### version

库版本，每次发布时需要更新，可使用 `npm version <verision>` 命令快速更新

```bash
npm version 1.0.1
```

### description

项目描述

### keywords 

关键词，格式为字符串数组

### homepage

项目主页url

Example:
```json
"homepage": "https://github.com/cathe-zhang/js-utils#readme"
```

### author / contributors

作者 / 贡献者

author是一个对象, contributors是一个对象数组, 对象包含一个必须属性 `name` 和两个可选属性 `email` 和 `url`

Example:
```js
// package.json 
{
  "author": {
		"name": "cathe-zhang",
		"email": "zhangle_web@163.com",
		"url": "https://cathe-zhang.github.io"
  },
  "contributors": [
    {
			"name": "person",
			"email": "person@gmail.com",
			"url": "https://person.github.io"
    }
  ],
}
```

### files

可选属性。

格式：一个pattern数组, pattern类似 `.gitignore`, 不过是相反的，因为 `.gitignore` 文件是忽略文件, 而此选项是指定npm发布需要引入的文件, 也就是用户执行 `npm install` 时在 `node_modules` 中得到的文件。

类似 `.gitignore`, 也可以在项目的根文件夹提供一个 `.npmignore` 文件, 用于指定npm需要忽略的文件, 格式与 `.gitignore` 相同, 如果存在 `.gitignore` 而不存在 `.npmignore`, 那么npm就会忽略 `.gitignore` 中的内容。

注意：在 `package.json#files` 字段中指定的内容无法被 `.gitignore` 和 `.npmignore` 忽略。

固定会被npm引入的(不受任何设置影响, 包括package.json / .gitignore / .npmignore), 包括如下文件：
- `package.json`
- `README`
- `CHANGES / CHANGELOG / HISTORY`
- `NOTICE`
- 在 `main` 选项中指定的文件

`README`, `CHANGES`, `LICENSE` & `NOTICE` 不区分大小写, 支持任何后缀。

固定被忽略的文件：
- `.git`
- `CVS`
- `.svn`
- `.hg`
- `.lock-wscript`
- `.wafpickle-N`
- `.*.swp`
- `.DS_Store`
- `._*`
- `npm-debug.log`
- `.npmrc`
- `node_modules`
- `config.gypi`
- `*.orig`
- `package-lock.json (use shrinkwrap instead)`

### main

项目入口文件。

例如当项目为 `foo`, 用户执行 `npm install` 然后使用`require("foo")` 引入项目, 此时在 `main` 选项中指定的文件导出的对象就会被返回

### repository
说明当前库代码的存放位置, 如果项目存放在github, 执行 `npm docs` 命令会直接在浏览器中打开项目的 `readme` 文档

Example:
```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/cathe-zhang/js_utils"
  },
}
```

### scripts
命令字典, 可以包含在项目内可执行的命令。键为事件名称,
, 值为要执行的命令。

Example：
```json
{
  "scripts": {
    "start": "webpack-dev-server --progress --colors --config ./scripts/webpack.dev.config.js",
    "build": "webpack --config ./scripts/webpack.prod.config.js",
    "build-dev": "webpack --config ./scripts/webpack.dev.config.js",
    "lint": "eslint ./ --cache --fix --ignore-pattern .gitignore",
    "mock": "supervisor -i node_modules mock/http.js",
    "dll": "webpack --config scripts/webpack.dll.config.js",
    "stats": "webpack --config ./scripts/webpack.prod.config.js --profile --json > stats.json"
  },
}
```

### config

对象。

可用于设置环境变量，待完善。

可能与npmrc有关。

### dependencies

依赖。

[npmjs.com - dependencies](https://docs.npmjs.com/files/package.json#dependencies)

### devDependencies

开发环境依赖。

待完善

### peerDependencies

待完善

### bundledDependencies

待完善

### optionalDependencies

待完善

### engines

待完善

### engineStrict

待完善

### os

待完善

### cpu

待完善

### private

是否为私有库, 如果设置为 `true` 则执行 `npm publish` 时会报错, 可以防止误发布至npm。

### publishConfig

发布配置。