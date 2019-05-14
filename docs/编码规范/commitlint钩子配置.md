# 配置commitlint

1. 安装 `commitlint` 和 `husky` 依赖
```cmd
npm install --save-dev @commitlint/config-conventional @commitlint/cli
npm install --save-dev husky
```

2. 新建 `commitlint.config.js` 文件
```javascript
module.exports = {
    extends: ['@commitlint/config-conventional']
};
```
`@commitlint/config-conventional`提供了官方的规则扩展：
```
build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
docs：文档更新
feat：新增功能
merge：分支合并 Merge branch ? of ?
fix：bug 修复
perf：性能, 体验优化
refactor：重构代码(既没有新增功能，也没有修复 bug)
style：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
test：新增测试用例或是更新现有测试
revert：回滚某个更早之前的提交
chore：不属于以上类型的其他类型
```

3. 配置 `package.json` 文件
添加husky字段：
```cmd
"husky": {
  "hooks": {
    "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS"
  }
},
```

4. 测试
```git
git add .
git commit -m "foo: this will fail"
```

> [参考](https://segmentfault.com/a/1190000015798675?utm_source=tag-newest)