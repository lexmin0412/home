(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{172:function(s,t,n){s.exports=n.p+"assets/img/github_action.71b0e150.png"},173:function(s,t,n){s.exports=n.p+"assets/img/github_actions_node_cli.6fc2aa51.png"},245:function(s,t,n){"use strict";n.r(t);var a=[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"使用github-actions自动化构建项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用github-actions自动化构建项目"}},[this._v("#")]),this._v(" 使用Github Actions自动化构建项目")])},function(){var s=this.$createElement,t=this._self._c||s;return t("blockquote",[t("p",[this._v("2019.09.09")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("是的，就是它\n"),t("img",{attrs:{src:n(172),alt:"github action"}})])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[this._v("#")]),this._v(" 准备工作")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" clone git@github.com:cathe-zhang/github_action_test.git\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"创建action文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建action文件"}},[this._v("#")]),this._v(" 创建action文件")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" .github\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" .github\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" workflows\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" workflows\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" nodejs.yml\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("在 "),t("code",[this._v("nodejs.yml")]),this._v(" 中添加如下内容")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# action名称")]),s._v("\nname: Node CI\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定触发action的事件")]),s._v("\non:\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定触发事件")]),s._v("\n  push:\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定触发指定事件的分支 仅master触发")]),s._v("\n    branches:\n      - master\n  pull_request:\n    branches:\n      - master\njobs:\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# job_id")]),s._v("\n  build:\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定运行虚拟机")]),s._v("\n    runs-on: ubuntu-latest\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建矩阵")]),s._v("\n    strategy:\n      matrix:\n        node-version: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(".x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n    steps:\n    - uses: actions/checkout@v1\n    - name: Use Node.js "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${{ strategy.matrix.node-version }")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      uses: actions/setup-node@v1\n      with:\n        node-version: "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${{ strategy.matrix.node-version }")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    - name: 执行npm "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n      run: "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n      env:\n        CI: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此步骤根据package.json中的script打包脚本而定")]),s._v("\n    - name: 执行npm run build:h5\n      run: "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build:h5\n    - name: 进入dist文件夹 准备提交代码\n      run: "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cd dist/ 进入dist文件夹'")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" dist/\n\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git init'")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git config --global user.name 设置用户名'")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("git-user-name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git config --global user.email 设置邮箱'")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("git-user-email"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git add .'")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git commit -m \"deploy\"'")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git push'")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里的secret.PWD是在github-repo-settings中添加的secret(如果是这种需要每个repo都加一个secret)  如果写成secrets.GITHUB_TOKEN 或者github密码(泄露个人信息，一般不用) 所有repo都可以用")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f https://cathe-zhang:"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${{ secrets.PWD }")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("@github.com/cathe-zhang/github_action_test.git master:gh-pages\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[this._v("#")]),this._v(" 部署")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("img",{attrs:{src:n(173),alt:"Github Actions构建示例"}})])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[this._v("#")]),this._v(" 参考资料")])}],e=n(0),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[s._m(0),s._v(" "),s._m(1),s._v(" "),n("p",[s._v("今天有个东西突然忘了，想上github看一看，没想到很久之前申请的github actions居然可以用了。")]),s._v(" "),s._m(2),s._v(" "),n("p",[s._v("废话不多说，就用它来帮我创建一个博客吧！")]),s._v(" "),s._m(3),s._v(" "),n("p",[s._v("创建并克隆Repo 这个不多说")]),s._v(" "),s._m(4),s._m(5),s._v(" "),n("p",[s._v("在项目根目录下按照如下的路径创建待执行的YAML文件")]),s._v(" "),s._m(6),s._m(7),s._v(" "),s._m(8),s._m(9),s._v(" "),s._m(10),n("p",[s._v("此时点开Repo的Actions选项卡就可以看到如下的构建过程：")]),s._v(" "),s._m(11),s._v(" "),n("p",[s._v("可以看到我们在nodejs.yml中的定义的push事件被触发，执行了jobs中的所有步骤，打包并推送到了Repo的gh-pages分支。")]),s._v(" "),n("p",[s._v("当complete job选项完成的时候，访问 "),n("a",{attrs:{href:"https://cathe-zhang.github.io/github_actions_test",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://cathe-zhang.github.io/github_actions_test"),n("OutboundLink")],1),s._v(" 就可以看到自动构建完成的应用了。")]),s._v(" "),s._m(12),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://help.github.com/cn/articles/configuring-a-workflow",target:"_blank",rel:"noopener noreferrer"}},[s._v("github action"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://help.github.com/cn/articles/workflow-syntax-for-github-actions",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub 操作的工作流程语法"),n("OutboundLink")],1)])])])}),a,!1,null,null,null);t.default=r.exports}}]);