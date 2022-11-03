# Corepack 使用实践

## 环境要求

Node 版本需要大于 v14.19.0 或 v16.9.0。

## 用法

```
corepack enable
```

执行以上命令后就会开启 corepack，自带 yarn 和 pnpm 命令，对应的版本参考 [默认配置](#默认配置)

```
corepack enable npm
```

npm 需要单独开启，因为 npm 在任何项目都能完成依赖安装的过程，是 Nodejs 官方的期望。

此外还可单独指定包管理器以及对应的版本：

```shell
corepack prepare pnpm@7.14.2 --activate
```

如果 package.json 中没有指定 `packageManager`，那么在执行 pnpm 相关命令时就会使用对应的版本，即 `7.14.2`。

## 默认配置

Corepack 在开启时会默认拉取 yarn 和 pnpm 的一个版本，对应默认的 Corepack 配置文件路径为：`~/.nvm/versions/node/v16.12.0/lib/node_modules/corepack/dist`。

```json
{
    "definitions":{
        "npm":{
            "default":"7.20.1",
            "transparent":{
                "commands":[
                    [
                        "npm",
                        "init"
                    ],
                    [
                        "npx"
                    ]
                ]
            },
            "ranges":{
                "*":{
                    "url":"https://registry.npmjs.org/npm/-/npm-{}.tgz",
                    "bin":{
                        "npm":"./bin/npm-cli.js",
                        "npx":"./bin/npx-cli.js"
                    },
                    "registry":{
                        "type":"npm",
                        "package":"npm"
                    }
                }
            }
        },
        "pnpm":{
            "default":"6.11.0",
            "transparent":{
                "commands":[
                    [
                        "pnpm",
                        "init"
                    ],
                    [
                        "pnpx"
                    ]
                ]
            },
            "ranges":{
                "<6.0.0":{
                    "url":"https://registry.npmjs.org/pnpm/-/pnpm-{}.tgz",
                    "bin":{
                        "pnpm":"./bin/pnpm.js",
                        "pnpx":"./bin/pnpx.js"
                    },
                    "registry":{
                        "type":"npm",
                        "package":"pnpm"
                    }
                },
                ">=6.0.0":{
                    "url":"https://registry.npmjs.org/pnpm/-/pnpm-{}.tgz",
                    "bin":{
                        "pnpm":"./bin/pnpm.cjs",
                        "pnpx":"./bin/pnpx.cjs"
                    },
                    "registry":{
                        "type":"npm",
                        "package":"pnpm"
                    }
                }
            }
        },
        "yarn":{
            "default":"1.22.15",
            "transparent":{
                "default":"3.0.0",
                "commands":[
                    [
                        "yarn",
                        "dlx"
                    ]
                ]
            },
            "ranges":{
                "<2.0.0":{
                    "url":"https://registry.yarnpkg.com/yarn/-/yarn-{}.tgz",
                    "bin":{
                        "yarn":"./bin/yarn.js",
                        "yarnpkg":"./bin/yarn.js"
                    },
                    "registry":{
                        "type":"npm",
                        "package":"yarn"
                    }
                },
                ">=2.0.0":{
                    "name":"yarn",
                    "url":"https://repo.yarnpkg.com/{}/packages/yarnpkg-cli/bin/yarn.js",
                    "bin":[
                        "yarn",
                        "yarnpkg"
                    ],
                    "registry":{
                        "type":"url",
                        "url":"https://repo.yarnpkg.com/tags",
                        "fields":{
                            "tags":"latest",
                            "versions":"tags"
                        }
                    }
                }
            }
        }
    }
}
```

package.json 配置：

```json
{
	"packageManager": "pnpm@7.3.0",
}
```

表示当 corepack 开启时，在当前目录运行 pnpm 相关命令时，用到的版本为 v7.3.0。

## 常见问题

### 1. 已开启 Corepack，包管理器校验不生效？

检查是否有全局安装的包管理器，使用 `which yarn` 可以查看当前使用的 yarn 所在位置。如果你是 nvm 用户，检查默认版本下的 bin 目录以及 `/usr/local/bin` 下是否安装了全局包。

## 参考来源

- [Node.js 官方文档 - Corepack](https://nodejs.org/api/corepack.html)
- [Node.js Corepack](https://www.jianshu.com/p/c239ed5dedd6)
