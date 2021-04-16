module.exports = {
      title: "Lexmin0412 Blog",
      description: "All I know is that I know nothing.",
      base: "/blog/",  // basename
      port: 8021,  // 端口
      dest: 'docs',   // 打包输出文件存放的目录，默认为文档文件夹下的.vuepress/dist
      markdown: {   // markdown配置对象
        lineNumbers: true     // 是否在每个代码块的左侧显示行号
      },
      evergreen: false,   // 是否禁止esnext转译到es5以及对ie的polyfills，默认false 如果设置成true则只会支持现代浏览器
      themeConfig: {
        repo: "https://github.com/lexmin0412/blog",
        nav: [
          {
            text: 'Taro X Blog',
            link: 'https://lexmin0412.github.io/tarox-blog/'
          }
        ],
        sidebar: [
          // {
          //   title: "CSS",
          //   collapsable: false,
          //   children: [
          //         "/CSS/Sass的常用功能用法",
          //         "/CSS/img标签底部白边处理",
          //         "/CSS/使用filter属性实现高斯模糊",
          //         "/CSS/样式统一",
          //   ]
          // },
          // {
          //   title: "ES6_plus",
          //   collapsable: false,
          //   children: [
          //         "/ES6_plus/ES6与commonJS模块导入导出的区别",
          //         "/ES6_plus/Promise",
          //         "/ES6_plus/",
          //         "/ES6_plus/数组方法",
          //   ]
          // },
          // {
          //   title: "Git相关",
          //   collapsable: false,
          //   children: [
          //         "/Git相关/",
          //         "/Git相关/github pages配置",
          //         "/Git相关/git报错的解决方案",
          //         "/Git相关/git提交日志规范",
          //   ]
          // },
          {
            title: "React",
            collapsable: false,
            children: [
                  // "/React相关/React Diff算法",
                  "/React相关/React Hooks",
                  // "/React相关/React最佳实践",
                  // "/React相关/React生命周期概述",
                  // "/React相关/React组件设计原则",
                  "/React相关/React组件跨层级通信之Context",
                  "/React相关/React高阶组件-HOC",
                  "/React相关/Redux使用及其原理",
                  "/React相关/使用React Portal实现一个通知栏组件",
                  // "/React相关/使用react-app-rewired覆盖cra配置",
            ]
          },
          {
            title: "Taro",
            collapsable: false,
            children: [
                  "/Taro/Taro踩坑指南",
            ]
          },
          {
            title: "小程序",
            collapsable: false,
            children: [
                  "/小程序/微信小程序获取经纬度不准确的解决方案",
            ]
          },
          {
            title: "H5开发",
            collapsable: false,
            children: [
                  "/H5开发/H5定位终极解决方案",
                  // "/H5开发/",
            ]
          },
          {
            title: "编码规范",
            collapsable: false,
            children: [
                  "/编码规范/Taro项目规范",
                  "/编码规范/commitlint钩子配置",
                  "/编码规范/editorconfig配置",
                  "/编码规范/规范工具收集",
            ]
          },
          {
            title: "前端工程化",
            collapsable: false,
            children: [
                  "/前端工程化/Gitlab_Tag创建规范",
                  "/前端工程化/Gitlab_协作开发流程",
                  // "/前端工程化/",
                  // "/前端工程化/package.json配置详解",
                  "/前端工程化/taro多端项目搭建",
                  "/前端工程化/taro小程序mobx项目搭建",
                  "/前端工程化/使用Github Actions自动化构建项目",
                  "/前端工程化/使用rollup构建Javascript库",
                  // "/前端工程化/使用webpack搭建移动端单页应用",
                  // "/前端工程化/前后端分离",
                  // "/前端工程化/前端项目脚手架搭建",
                  // "/前端工程化/框架搭建的难题",
                  // "/前端工程化/项目文档的编写",
            ]
          },
          // {
          //   title: "JS",
          //   collapsable: false,
          //   children: [
          //         "/JS/",
          //   ]
          // },
          // {
          //   title: "JavaScript",
          //   collapsable: false,
          //   children: [
          //         "/JavaScript/",
          //         "/JavaScript/构造函数",
          //   ]
          // },
          // {
          //   title: "Linux",
          //   collapsable: false,
          //   children: [
          //         "/Linux/Linux常用命令大全",
          //   ]
          // },
          {
            title: "VSCode",
            collapsable: false,
            children: [
                  "/VSCode/VSCode插件开发",
                  "/VSCode/vscode扩展",
                  "/VSCode/使用setting sync同步vscode设置",
                  // "/VSCode/工作区相关",
            ]
          },
          // {
          //   title: "Vue",
          //   collapsable: false,
          //   children: [
          //         "/Vue/vue的生命周期",
          //   ]
          // },
          {
            title: "app交互",
            collapsable: false,
            children: [
                  "/app交互/app webview中富文本超链接点击无反应的解决方案",
            ]
          },
          // {
          //   title: "markdown相关",
          //   collapsable: false,
          //   children: [
          //         "/markdown相关/",
          //   ]
          // },
          {
            title: "npm相关",
            collapsable: false,
            children: [
                  "/npm相关/npm发布node包指北",
                  // "/npm相关/npm常用命令",
            ]
          },
          {
            title: "其他",
            collapsable: false,
            children: [
                  "/其他/HTTP请求状态码",
                  "/其他/mac操作指南",
                  // "/其他/使用VIM编辑和保存文件",
                  "/其他/全栈图谱",
                  // "/其他/前端客服功能的设计",
                  "/其他/前端技术栈",
                  // "/其他/如何写出优雅的代码",
                  "/其他/工具箱",
                  // "/其他/常用linux命令",
                  // "/其他/常用手机软件",
                  "/其他/移动端兼容性问题解决方案",
            ]
          },
          {
            title: "博客部署",
            collapsable: false,
            children: [
                  "/博客部署/vuepress部署博客",
                  "/博客部署/docsify+vercel+github搭建博客",
            ]
          },
          // {
          //   title: "前端资源集合",
          //   collapsable: false,
          //   children: [
          //         "/前端资源集合/",
          //   ]
          // },
          // {
          //   title: "回顾与展望",
          //   collapsable: false,
          //   children: [
          //   ]
          // },
          // {
          //   title: "总结与展望",
          //   collapsable: false,
          //   children: [
          //         "/总结与展望/2019年度总结",
          //   ]
          // },
          // {
          //   title: "未分类",
          //   collapsable: false,
          //   children: [
          //         "/未分类/2020.03.15",
          //   ]
          // },
          // {
          //   title: "测试用例",
          //   collapsable: false,
          //   children: [
          //         "/测试用例/购物车通用测试用例",
          //   ]
          // },
          // {
          //   title: "点滴",
          //   collapsable: false,
          //   children: [
          //         "/点滴/2019.11.19",
          //         "/点滴/2020.01.14",
          //   ]
          // },
          // {
          //   title: "用户交互",
          //   collapsable: false,
          //   children: [
          //         "/用户交互/",
          //   ]
          // },
          // {
          //   title: "联调的经验",
          //   collapsable: false,
          //   children: [
          //         "/联调的经验/与后端联调",
          //   ]
          // },
  ],
    sidebarDepth: 2
  }
};
