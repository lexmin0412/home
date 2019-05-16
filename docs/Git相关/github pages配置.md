# github pages配置

### 1. 开发：新建仓库并克隆到本地开发
```bash
git clone git@github.com:cathe-zhang/blog
```

### 2. 部署：开发完成之后进入打包目录，将打包后的代码推送到 `gh-pages` 分支
```shell
cd dist
git init
git add .
git commit -m 'deploy'
git push -f git@github.com:cathe-zhang/blog master:gh-pages
```
### 3. 设置github pages来源分支
settings --> Github Pages --> source，选择gh-pages分支

### 4. 访问
此时就可以通过 `https://cathe-zhang.github.io/blog` 访问到你的项目了