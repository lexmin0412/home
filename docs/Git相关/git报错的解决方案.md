### 执行`git pull`时报错：`There is no tracking information for the current branch.`

问题：当前branch没有跟踪信息

解决方案：
指定本地分支关联远程分支：

`git branch --set-upstream-to=origin/local_branch target_branch`
