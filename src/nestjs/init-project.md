# 初始化应用

## 1. 全局安装 nest 命令行工具

```bash
npm i @nestjs/cli -g
```

## 2. 初始化模版

```bash
nest new <projectName>
```

其中， `projectName` 为你的本地项目名称，执行命令后，将会让你选择包管理器(npm/yarn/pnpm)，然后自动安装依赖。

## 3. 本地启动

进入 `projectName` 目录，然后运行 `pnpm start:dev` 即可启动本地服务，默认端口为 3000，我们访问 `localhost:3000` ，就可以看到内容为 `Hello World!` 的相应。

## 4. 创建模块

在终端执行 `nest generate res`, 选择你喜欢的 API 风格 (如 Restful) 即可按需生成 CRUD 模块并自动在入口模块中引入。

![](2022-12-02-00-56-28.png)
