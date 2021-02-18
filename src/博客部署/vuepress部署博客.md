# vuepress部署博客

### 1. 生成目录
```shell
# 安装vuepress为本地依赖
npm install -D vuepress

# 创建一个docs目录
mkdir docs

# 创建一个markdown文件
echo '# Hello VuePress' > docs/README.md

# 创建.vuepress目录
cd docs
mkdir .vuepress
```

### 2. 在package中添加scripts
```json
"scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
```

### 3. 新建配置文件并添加以下代码
在 `/docs/.vuepress` 目录下新建 `config.js` 并添加以下代码
```js
module.exports = {
  title: "lexmin0412 Blog",    // 博客标题
  description: "All I know is that I know nothing.",  // 描述
  base: "/blog/",   // 部署base，打包时会默认在引用的静态资源文件前加上此前缀
  themeConfig: {  // 主题配置
    repo: "https://github.com/cathe-zhang/notes",  // 添加git仓库跳转地址，会在导航栏生成一个GitHub链接
    nav: [   // 导航栏配置
      { text: "taro相关", link: "/Taro/Taro踩坑指南.md" },
    ],
    sidebar: [   // 侧边栏配置
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
          "/markdown相关/"
        ]
      },
      {
        title: "CSS",
        collapsable: false,
        children: ["/CSS/样式统一"]
      }
    ],
    sidebarDepth: 2
  }
};
```

### 4. 启动开发服务器，开始编写博客
```shell
yarn docs:dev
```

### 5. 部署
```shell
yarn docs:build  # 打包
cd docs/.vuepress/dist  # 进入打包目录
git init
git add .
git commit -m 'deploy'
git push -f git@github.com:cathe-zhang/blog.git master:gh-pages
```

### 6. 将推送的分支设置为GitHub pages的指向分支
```python
settings --> Github Pages --> source  #将source指向gh-pages分支
```
此时，就可以通过 `https://cathe-zhang.github.com/blog` 访问你自己的博客了


### VuePress官方中文文档
> http://caibaojian.com/vuepress/guide/