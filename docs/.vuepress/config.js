module.exports = {
  title: "CellerChan Blog",
  description: "All I know is that I know nothing.",
  base: "/blog/",
  themeConfig: {
    repo: "https://github.com/cathe-zhang/notes",
    nav: [
      // { text: "taro相关", link: "/Taro/Taro踩坑指南.md" },
    ],
    sidebar: [
      {
        title: "杂",
        collapsable: false,
        children: [
          "/",
          "/HTTP请求状态码",
          "/mac操作指南",
          "/npm发布node包指北",
          "/移动端兼容性问题解决方案",
          "/项目目录",
          "/markdown相关/",
          "/vuepress部署博客"
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
        title: "Git相关",
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
        title: "npm相关",
        collapsable: false,
        children: ["/npm相关/npm常用命令.md"]
      },
      {
        title: "React相关",
        collapsable: false,
        children: ["/React相关/React生命周期概述"]
      },
      {
        title: "Taro",
        collapsable: false,
        children: ["/Taro/Taro踩坑指南"]
      },
      {
        title: "VSCode",
        collapsable: false,
        children: ["/VSCode/工作区相关"]
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
