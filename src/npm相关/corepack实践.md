# Corepack 使用实践

## Corepack 是什么

Corepack 是 Nodejs 自带的用于管理包管理器及其版本的工具，它自带开箱即用的 npm/yarn/pnpm 支持，自动识别适用于项目的包管理器。使用它之后，可以减少很多不同开发者之间由于包管理器/版本不一致导致的依赖版本不一致、 lock 文件冲突等问题。

:::warning
需要注意的是，截止 2022.11.03，Corepack 仍然为试验特性（Stability: 1 - Experimental）。
:::

## 环境要求

Node >= v14.19.0 或 v16.9.0。

## 用法

### 启用 Corepack

```
corepack enable
```

执行以上命令后就会开启 corepack，自带 yarn 和 pnpm 命令，无需全局安装，对应的版本参考 [默认配置](#默认配置)

### 指定全局默认包管理器

我们可以通过 prepare 命令全局指定默认的包管理器以及对应的版本，如：

```shell
corepack prepare pnpm@7.14.2 --activate
```

在使用到包管理器时 package.json 中没有指定 `packageManager`，那么在执行 pnpm 相关命令时就会使用设置的默认版本，即 `7.14.2`。

### 配置项目独有的包管理器


在项目的 package.json 中添加如下配置：

```json
{
	"packageManager": "pnpm@7.3.0",
}
```

则在当前目录运行 pnpm 相关命令时，用到的版本为 v7.3.0。如果运行的是 yarn/npm 则会直接抛出错误中断进程，错误如下：

```bash
cellerchan@cellerchandeMacBook-Pro mp-design-bff % yarn install
Usage Error: This project is configured to use pnpm

$ yarn ...
```

### 对 npm 生效

```
corepack enable npm
```

npm 需要单独开启，因为 npm 在任何项目都能完成依赖安装的过程，是 Nodejs 官方的期望。

### 默认配置

Corepack 会预置 yarn 和 pnpm 的一个默认版本，每一个 Node 版本对应的默认版本都不一样，Corepack 配置文件路径为：`~/.nvm/versions/node/v16.12.0/lib/node_modules/corepack/dist/corepack.js`。

```json
{
	"definitions": {
		"npm": {
			"default": "7.20.1",
			"transparent": {
				"commands": [
					[
						"npm",
						"init"
					],
					[
						"npx"
					]
				]
			},
			"ranges": {
				"*": {
					"url": "https://registry.npmjs.org/npm/-/npm-{}.tgz",
					"bin": {
						"npm": "./bin/npm-cli.js",
						"npx": "./bin/npx-cli.js"
					},
					"registry": {
						"type": "npm",
						"package": "npm"
					}
				}
			}
		},
		"pnpm": {
			"default": "6.11.0",
			"transparent": {
				"commands": [
					[
						"pnpm",
						"init"
					],
					[
						"pnpx"
					]
				]
			},
			"ranges": {
				"<6.0.0": {
					"url": "https://registry.npmjs.org/pnpm/-/pnpm-{}.tgz",
					"bin": {
						"pnpm": "./bin/pnpm.js",
						"pnpx": "./bin/pnpx.js"
					},
					"registry": {
						"type": "npm",
						"package": "pnpm"
					}
				},
				">=6.0.0": {
					"url": "https://registry.npmjs.org/pnpm/-/pnpm-{}.tgz",
					"bin": {
						"pnpm": "./bin/pnpm.cjs",
						"pnpx": "./bin/pnpx.cjs"
					},
					"registry": {
						"type": "npm",
						"package": "pnpm"
					}
				}
			}
		},
		"yarn": {
			"default": "1.22.15",
			"transparent": {
				"default": "3.0.0",
				"commands": [
					[
						"yarn",
						"dlx"
					]
				]
			},
			"ranges": {
				"<2.0.0": {
					"url": "https://registry.yarnpkg.com/yarn/-/yarn-{}.tgz",
					"bin": {
						"yarn": "./bin/yarn.js",
						"yarnpkg": "./bin/yarn.js"
					},
					"registry": {
						"type": "npm",
						"package": "yarn"
					}
				},
				">=2.0.0": {
					"name": "yarn",
					"url": "https://repo.yarnpkg.com/{}/packages/yarnpkg-cli/bin/yarn.js",
					"bin": [
						"yarn",
						"yarnpkg"
					],
					"registry": {
						"type": "url",
						"url": "https://repo.yarnpkg.com/tags",
						"fields": {
							"tags": "latest",
							"versions": "tags"
						}
					}
				}
			}
		}
	}
}
```

## 常见问题

### 1. 已开启 Corepack，包管理器校验不生效？

检查是否有全局安装的包管理器，使用 `which yarn` 可以查看当前使用的 yarn 所在位置。如果你是 nvm 用户，检查默认版本下的 bin 目录以及 `/usr/local/bin` 下是否安装了全局包。

## 参考来源

- [Node.js 官方文档 - Corepack](https://nodejs.org/api/corepack.html)
- [Node.js Corepack](https://www.jianshu.com/p/c239ed5dedd6)
