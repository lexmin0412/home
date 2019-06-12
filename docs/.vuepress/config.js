module.exports = {
  title: "CellerChan Blog",
  description: "All I know is that I know nothing.",
  base: "/blog/",  // basename
  port: 8021,  // 端口
  dest: 'dist',   // 打包输出文件存放的目录，默认为文档文件夹下的.vuepress/dist
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
      {
        title: "杂",
        collapsable: false,
        children: [
          "/",
          "/HTTP请求状态码",
          "/mac操作指南",
          "/移动端兼容性问题解决方案",
          "/项目目录",
          "/markdown相关/",
          "/前端技术栈"
        ]
      },
      {
        title: '博客部署',
        collapsable: true,
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
        title: "Taro",
        collapsable: false,
        children: ["/Taro/Taro踩坑指南"]
      },
      {
        title: "React",
        collapsable: false,
        children: [
          "/React相关/React生命周期概述",
          "/React相关/React高阶组件",
          "/React相关/使用react-app-rewired覆盖cra配置"
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
        title: "package manage",
        collapsable: false,
        children: [
          "/npm相关/npm发布node包指北",
          "/npm相关/npm常用命令.md"
        ]
      },
      {
        title: "CSS",
        collapsable: false,
        children: ["/CSS/样式统一"]
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
        title: "H5 api",
        collapsable: false,
        children: ["/H5 api/"]
      },
      {
        title: "VSCode",
        collapsable: false,
        children: [
          "/VSCode/工作区相关",
          "/VSCode/使用setting sync同步vscode设置"
        ]
      },
      {
        title: "编码规范",
        collapsable: false,
        children: ["/编码规范/commitlint钩子配置"]
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
