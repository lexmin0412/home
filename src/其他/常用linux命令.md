# 常用linux命令

## 新建文件夹

```shell
mkdir <directoryName>
```

## 新建文件

```shell
touch <fileName>
```

## 文件/文件夹复制

```bash
cp -r <directoryName> <path>  # 将文件夹及该文件夹下的所有内容复制到另一个文件夹下
cp <directory></filename> path  # 将文件夹下的某个文件复制到另一个文件夹
```

## 文件/文件夹移动 及重命名

```shell
mv directoryPath fatherDirectoryPath  # 将文件夹复制到另一个文件夹目录下
mv filename newFilename  # 重命名文件
```

示例：

```shell
mv .gitignore .testgitignore # 将.gitignore移动到当前目录下并重命名为.testgitignore, 达到重命名的效果
mv website/wtils-website/* website/  将website/wtils-website下的所有文件移动到website下
```

### 删除文件/文件夹

```shell
rm -r <directory>  # 删除指定文件夹下的所有文件
rm <fileName>   # 删除指定文件
```

### 终端

| 命令    | 说明                                     |
|---------|------------------------------------------|
| `clear` | 清除当前屏幕内容，但仍可上滑查看历史内容 |
| `reset` | 清除当前屏幕内容，上滑不可查看历史       |
