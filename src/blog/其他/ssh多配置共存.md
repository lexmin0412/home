# ssh 多配置共存

## 背景

在我们的工作或学习中，经常会存在需要从多个 git 平台去拉取代码的情况，如我们在工作中使用 gitlab 来进行代码管理，而业务时间会使用 github 来存放自己的一些开源仓库或 demo, 或者为了稳定性考虑，会将 github 仓库中的代码放到 gitee 中进行备份，这些都是很常见的场景，而这就常常导致了一个问题：当我们将本机的 ssh-key 配置成 github 之后，一上班发现 gitlab 的代码拉不下来了，所以我们需要使多个 ssh-key 能做到共存，这样能减少很多重复性的工作。

## 什么是 SSH Key?

首先，我们需要弄懂什么是 SSH。

简单来说，它就是一个安全协议，在类 Unix 系统上使用较为广泛，它使用 SSH Key 来进行校验。在我们使用 ssh 协议进行连接，如通过 `git@site_name.com:group/project_name.git` 的方式来进行 git 仓库的克隆时，需要先在本地生成一个 ssh-key, 然后将它的内容复制，配置到对应的 git 平台，如 github/gitlab，然后我们才能拥有拉取/提交代码的权限。

## 如何生成 SSH Key？

### 1. 在终端输入以下命令

```bash
ssh key-gen -t rsa -C "your_email@xxx.com" # your_email@xxx.com 是你在对应的平台注册的邮箱
```

## ssh key的匹配规则

要配置多个 git 站点的 ssh key, 我们先需要知道它的匹配规则是什么。

## 如何配置多个站点的 ssh key?

配置 gitee 的 ssh key：

```bash
$ ssh keygen -t rsa -C 'xxxxx@company.com' -f ~/.ssh/gitee_id_rsa
```

配置 github 的 ssh key：

```bash
$ ssh-keygen -t rsa -C 'xxxxx@self.com' -f ~/.ssh/github_id_rsa
```

会发现两个命令的不同除了账号邮箱本身不同之外，还有一点就是在 -f 标识后面指定了 ssh key file 的文件名，在 ~/.ssh/ 目录下，第一个会生成 `gitee_id_rsa` 和 `gitee_id_rsa.pub` 的文件，第二个会生成名为 `github_id_rsa` 和 `github_id_rsa.pub` 的文件，其中有 `.pub` 后缀的文件存放的就是 ssh key的内容，它用于远端配置，而没有 .pub 后缀的文件，就是用来在连接时进行校验的。

目前为止，我们已经在 `~/.ssh/` 目录下生成了 gitlab 和 github 两个站点的文件，但是由于这个文件名是我们自定义的，我们需要添加一个配置，让远端知道读取哪个文件。这时就轮到 `config` 文件大展身手了。

```bash
# github
Host github.com
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa.github
# gitee
Host gitee.com
    HostName gitee.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/gitee_id_rsa
```

ssh 配置构成：

| 配置项                   | 说明                         | 示例                                                     |
|--------------------------|------------------------------|----------------------------------------------------------|
| Host                     | 站点标题                     | github                                                   |
| HostName                 | 站点 hostname                | github.com                                               |
| PreferredAuthentications | 定义客户端鉴权方式的先后顺序 | `publickey,password` 表示先读取publickey, 再使用密码校验 |
| IdentityFile             | 校验文件在本机上的绝对路径   | `~/.ssh/gitee_id_rsa`                                    |

ssh 默认会先读取 `~/.ssh/config` 文件来读取用户配置，顺序是从上而下依次读取，如按照上面的配置，在使用 ssh 连接 gitee 时，会先读取第一条配置，发现 `HostName` 不匹配，则跳过此条配置，读取下一条，发现 HostName 与当前站点 `gitee.com` 匹配，则会应用这一条配置，那么在进行 ssh-key 校验时，读取的文件就是配置中指定的 `~/.ssh/gitee_id_rsa` 文件了。







