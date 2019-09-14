# 常用linux命令

### 新建文件夹

```nginx
mkdir <directoryName>
```

### 新建文件
```nginx
touch <fileName>
```

### 文件/文件夹复制
```bash
cp -r <directoryName> <path>  # 将文件夹及该文件夹下的所有内容复制到另一个文件夹下
cp <directory></filename> path  # 将文件夹下的某个文件复制到另一个文件夹
```

### 文件/文件夹移动 及重命名
```nginx
mv directoryPath fatherDirectoryPath  # 将文件夹复制到另一个文件夹目录下
mv filename newFilename  # 重命名文件
```

示例：
```nginx
mv .gitignore .testgitignore # 将.gitignore移动到当前目录下并重命名为.testgitignore, 达到重命名的效果
```

### 删除文件/文件夹
```nginx
rm -r <directory>  # 删除指定文件夹下的所有文件
rm <fileName>   # 删除指定文件

