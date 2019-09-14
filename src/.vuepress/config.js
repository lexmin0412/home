module.exports = {
  title: "CellerChan Blog",
  description: "All I know is that I know nothing.",
  base: "/blog/",  // basename
  port: 8021,  // 端口
  dest: 'docs',   // 打包输出文件存放的目录，默认为文档文件夹下的.vuepress/dist
  markdown: {   // markdown配置对象
    lineNumbers: true     // 是否在每个代码块的左侧显示行号
  },
  evergreen: false,   // 是否禁止esnext转译到es5以及对ie的polyfills，默认false 如果设置成true则只会支持现代浏览器
  themeConfig: {
    repo: "https://github.com/cathe-zhang/notes",
    nav: [
      {
        text: 'starxing',
        link: 'https://1415801689xing.github.io/starxingblog/'
      }
    ],
    sidebar: [
      "/",
      "/前端技术栈",
      {
        title: "前端工程化",
        collapsable: false,
        children: [
          "/前端工程化/",
          "/前端工程化/使用Github Actions自动化构建项目",
          "/前端工程化/taro小程序mobx项目搭建",
          "/前端工程化/使用rollup构建js库",
          "/前端工程化/package.json配置详解"
        ]
      },
      {
        title: "杂",
        collapsable: false,
        children: [
          "/HTTP请求状态码",
          "/mac操作指南",
          "/移动端兼容性问题解决方案",
          "/前端技术栈",
          "/如何写出优雅的代码",
          "/工具箱",
          "/常用linux命令",
          "/常用手机软件",
          "/使用VIM编辑和保存文件"
        ]
      },
      {
        title: 'app交互',
        collapsable: false,
        children: [
          "/app交互/app webview中富文本超链接点击无反应的解决方案"
        ]
      },
      {
        title: 'CSS',
        collapsable: false,
        children: [
          "/CSS/img标签底部白边处理",
          "/CSS/使用filter属性实现高斯模糊",
          "/CSS/样式统一",
        ]
      },
      {
        title: "ES6_plus",
        collapsable: false,
        children: [
          "/ES6_plus/",
          "/ES6_plus/ES6与commonJS模块导入导出的区别.md",
          "/ES6_plus/Promise.md",
          "/ES6_plus/数组方法.md"
        ]
      },
      {
        title: "Git",
        collapsable: false,
        children: [
          "/Git相关/",
          "/Git相关/git报错的解决方案.md",
          "/Git相关/git提交日志规范.md",
          "/Git相关/github pages配置.md",
        ]
      },
      {
        title: "H5 api",
        collapsable: false,
        children: ["/H5 api/"]
      },
      {
        title: "markdown相关",
        collapsable: false,
        children: ["/markdown相关/"]
      },
      {
        title: "npm相关",
        collapsable: false,
        children: [
          "/npm相关/npm发布node包指北",
          "/npm相关/npm常用命令.md"
        ]
      },
      {
        title: "React",
        collapsable: false,
        children: [
          "/React相关/React生命周期概述",
          "/React相关/React高阶组件",
          "/React相关/使用react-app-rewired覆盖cra配置",
          "/React相关/使用组件复合而非组件继承"
        ]
      },
      {
        title: "Taro",
        collapsable: false,
        children: ["/Taro/Taro踩坑指南"]
      },
      {
        title: "VSCode",
        collapsable: false,
        children: [
          "/VSCode/vscode扩展",
          "/VSCode/工作区相关",
          "/VSCode/使用setting sync同步vscode设置"
        ]
      },
      {
        title: "Vue",
        collapsable: false,
        children: [
          "/Vue/vue的生命周期",
        ]
      },
      {
        title: '博客部署',
        collapsable: false,
        children: [
          "/博客部署/vuepress部署博客",
        ]
      },
      {
        title: '小程序',
        collapsable: false,
        children: [
          '/小程序/微信小程序获取经纬度不准确的解决方案',
        ]
      },
      {
        title: '测试用例',
        collapsable: false,
        children: [
          '/测试用例/购物车通用测试用例',
        ]
      },
      {
        title: "编码规范",
        collapsable: false,
        children: [
          "/编码规范/editorconfig配置",
          "/编码规范/commitlint钩子配置"
        ],
      },
      {
        title: "联调的经验",
        collapsable: false,
        children: ["/联调的经验/与后端联调"]
      },
    ],
    sidebarDepth: 2
  }
};
