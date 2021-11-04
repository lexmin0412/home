# 使用Github Actions自动化构建项目

当你想要在线上查看你的项目效果时，github actions 可以帮到你。

是的，就是它 ⬇️

![github action](./images/github_action.png)

废话不多说，我们现在就用它来创建一个属于自己的博客。

## 准备工作

创建并克隆 Repo 这个不多说

```bash
git clone git@github.com:lexmin0412/github_action_test.git
```

### 创建action文件

在项目根目录下按照如下的路径创建待执行的YAML文件

```bash
mkdir .github
cd .github
mkdir workflows
cd workflows
touch nodejs.yml
```

在 `nodejs.yml` 中添加如下内容

```bash
name: 构建博客
on:
  push:
    branches:
      - dev

jobs:
  main:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v2
      with:
        persist-credentials: false

    # react项目为npm run-script build，vue项目改为npm run build
    - name: Install and Build
      run: |
        npm install
        npm run build

    # react项目的FOLDER为build，vue项目改为dist
    - name: Deploy
      uses: JamesIves/github-pages-deploy-action@releases/v3
      with:
        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        BRANCH: gh-pages
        FOLDER: docs
```

### 触发构建

```bash
git add .
git commit -m ''
git push -u origin master
```

此时点开Repo的Actions选项卡就可以看到如下的构建过程：

![Github Actions构建示例](./images/github_actions_node_cli.png)

可以看到我们在nodejs.yml中的定义的push事件被触发，执行了jobs中的所有步骤，打包并推送到了Repo的gh-pages分支。

当complete job选项完成的时候，访问 [https://lexmin0412.github.io/github_actions_test](https://lexmin0412.github.io/github_actions_test) 就可以看到自动构建完成的应用了。

### 参考资料

- [github action](https://help.github.com/cn/articles/configuring-a-workflow)
- [GitHub 操作的工作流程语法](https://help.github.com/cn/articles/workflow-syntax-for-github-actions)
