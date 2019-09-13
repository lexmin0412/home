# 使用Github Actions自动化构建项目

> 2019.09.09

今天有个东西突然忘了，想上github看一看，没想到很久之前申请的github actions居然可以用了。

是的，就是它
![github action](./images/github_action.png)

废话不多说，就用它来帮我创建一个博客吧！

### 准备工作

创建并克隆Repo 这个不多说

```bash
git clone git@github.com:cathe-zhang/github_action_test.git
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
# action名称
name: Node CI

# 指定触发action的事件
on:
  # 指定触发事件
  push:
    # 指定触发指定事件的分支 仅master触发
    branches:
      - master
  pull_request:
    branches:
      - master
jobs:
  # job_id
  build:

    # 指定运行虚拟机
    runs-on: ubuntu-latest

    # 构建矩阵
    strategy:
      matrix:
        node-version: [10.x]

    steps:
    - uses: actions/checkout@v1
    - name: Use Node.js ${{ strategy.matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ strategy.matrix.node-version }}
    - name: 执行npm install
      run: |
        npm install
      env:
        CI: true
    # 此步骤根据package.json中的script打包脚本而定
    - name: 执行npm run build:h5
      run: |
        npm run build:h5
    - name: 进入dist文件夹 准备提交代码
      run: |
        echo 'cd dist/ 进入dist文件夹'
        cd dist/

        echo 'git init'
        git init

        echo 'git config --global user.name 设置用户名'
        git config --global user.name <git-user-name>

        echo 'git config --global user.email 设置邮箱'
        git config --global user.email <git-user-email>

        echo 'git add .'
        git add .

        echo 'git commit -m "deploy"'
        git commit -m 'deploy'

        echo 'git push'
        # 这里的secret.PWD是在github-repo-settings中添加的secret(如果是这种需要每个repo都加一个secret)  如果写成secrets.GITHUB_TOKEN 或者github密码(泄露个人信息，一般不用) 所有repo都可以用
        git push -f https://cathe-zhang:${{ secrets.PWD }}@github.com/cathe-zhang/github_action_test.git master:gh-pages
```

### 部署

```bash
git add .
git commit -m ''
git push -u origin master
```
此时点开Repo的Actions选项卡就可以看到如下的构建过程：

![Github Actions构建示例](./images/github_actions_node_cli.png)

可以看到我们在nodejs.yml中的定义的push事件被触发，执行了jobs中的所有步骤，打包并推送到了Repo的gh-pages分支。

当complete job选项完成的时候，访问 [https://cathe-zhang.github.io/github_actions_test](https://cathe-zhang.github.io/github_actions_test) 就可以看到自动构建完成的应用了。

### 参考资料
- [github action](https://help.github.com/cn/articles/configuring-a-workflow)
- [GitHub 操作的工作流程语法](https://help.github.com/cn/articles/workflow-syntax-for-github-actions)