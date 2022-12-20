# @lexmin0412/make-pkg-perfect

a tool for checking if your package is prepared for publish.

## Installation

```sh
npm install @lexmin0412/make-pkg-perfect
```

or install globally:

```sh
npm install @lexmin0412/make-pkg-perfect -g
```

## Usage

### Use in code

```ts
import * as path from 'path'
import { checkPkgJson, checkStandardFiles, checkGitUser } from '@lexmin0412/make-pkg-perfect'

const pkgJsonPath = path.resolve(__dirname, '..', 'package.json')

console.log('package.json 字段校验开始')
const { succeed, errors } = checkPkgJson(pkgJsonPath)

if ( !succeed ) {
	console.error('package.json 校验失败，错误原因：\n', errors)
	process.exit(1)
}
console.log('package.json 字段校验结束\n')

console.log('必要文件校验开始')
const { succeed: checkStandardFilesSuccees, missingFiles } = checkStandardFiles(process.cwd())

if ( !checkStandardFilesSuccees ) {
	console.error('必要文件校验失败, 缺少以下文件: \n', missingFiles, '\n')
	process.exit(1)
}
console.log('必要文件校验结束\n')


console.log('校验 git 用户配置开始')
checkGitUser(pkgJsonPath).then(({succeed: checkGitUserSucceed, message})=>{
	if (!checkGitUserSucceed) {
		console.error('校验 git 用户配置失败，错误原因', message)
	}
	console.log('校验 git 用户配置结束\n')
})

```

### Use in command line

```sh
mpp
```
