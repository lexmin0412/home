# 使用rollup构建js库

### 参考
[rollup中文网](https://www.rollupjs.com/guide/tutorial/#%E5%88%9B%E5%BB%BA%E7%AC%AC%E4%B8%80%E4%B8%AAbundlecreating-your-first-bundle)

### 安装
```
npm install rollup --global
```

### 初始化项目结构
```
├── dist                   编译结果目录       
├── rollup                 打包脚本文件目录
|   └── index.js           默认配置
|   └── dev.js             开发时配置
|   └── uat.js             uat环境配置
|   └── prod.js            生产环境配置
|   └── prod.js            生产环境配置       
├── src                    项目文件目录
├── README.md              项目说明文件
```

### 新建入口文件
将以下代码粘贴到新建的文件 `src/main.js` 中：
```js
// src/main.js
import foo from './foo.js';
export default function () {
  console.log(foo);
}
```

然后创建入口文件引用的 `foo` 模块
```js
// src/foo.js
export default 'hello world!';
```

### 打包
```powershell
rollup src/main.js --output.file dist/bundle.js --output.format cjs
```

### 指定配置文件

创建配置文件 `rollup.config.js` 并增加如下代码
```js
// rollup.config.js
export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
};
```

指定文件打包
```bash
rollup --config rollup.config.js
```

