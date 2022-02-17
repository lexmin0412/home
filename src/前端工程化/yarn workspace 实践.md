# yarn workspace 实践

## 结构

```shell
node_modules
packages
  youtils-functions
  	dist
    package.json
    rollup.config.json
    src/main.ts
  youtils-node
  	dist
  	package.json
  	rollup.config.json
  	src/main.ts
package.json
```

一个 yarn workspace 实现的 monorepo 项目基本结构如上。

根目录称为 workspace-root，在它下面有 package.json 需要做如下声明：

```json
{
	"private": false,
	"workspaces": ["packages/*"]
}
```

`"private": false` 表示这是一个私有项目，防止被不小心发布到 npm，因为这是整个仓库的根目录，一般是不需要发布到 npm 的。

`"workspaces: ["packages/*"]"` 表示 packages 下面的文件夹都会作为 workspace，在根目录或子目录下执行 `yarn install` 时，会将根目录以及所有子目录 package.json 中声明的依赖全部安装到根目录的 node_modules 中，其中，workspaces 也就是 youtils-functions 和 youtils-node 的软链会被添加到 node_modules 中，当这些包中有互相依赖而依赖的版本号又和当前版本代码的 package.json 中声明的版本号匹配时，就会自动引用到本地对应的项目。

不同项目间的公共依赖可以声明在根目录下，它们都会被安装在根目录的 node_modules 下，所以构建时也可以读取到。

每一个包的构建流程甚至构建工具都可能不同，它们可以在自己的 workspace 中声明自己的构建配置如 rollup.config.js，以及在 package.json 下声明合适的 scripts。

运行 yarn workspaces run build，可以触发每个子包 package.json 中的 build 命令，同样，也可以通过统一其他的脚本，如test 来统一执行各个子包下的类似命令。

运行 `yarn workspaces info`，可以查看 workspace 之间的依赖树，类似如下：

```json
{
  "youtils-functions": {
    "location": "packages/youtils-functions",
    "workspaceDependencies": [],
    "mismatchedWorkspaceDependencies": []
  },
  "youtils-node": {
    "location": "packages/youtils-node",
    "workspaceDependencies": [
      "youtils-functions"
    ],
    "mismatchedWorkspaceDependencies": []
  }
}
```

社区流行的方式是使用 yarn workspace 来管理包依赖，使用 lerna 来进行 npm 包的发布。

## 参考

- https://zhuanlan.zhihu.com/p/381794854
- https://www.jianshu.com/p/990afa30b6fe