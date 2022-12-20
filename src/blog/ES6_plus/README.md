# ES6+ 新特性总结

### 1. 解构

- 最基本的解构
```javascript
const user = {
  id: 123,
  name: 'lexmin0412'
}
const { name } = user
console.log(name)  // lexmin0412
```

- 解构并使用别名
>有时接口定义的字段往往带有下划线，但前端更偏好于驼峰，所以可以使用别名。
```javascript
const user = {
  id: 123,
  nick_name: 'lexmin0412'
}
const { nick_name: nickName } = user  // 原名在前，命名在后
console.log(nickName)  // lexmin0412
```

```javascript
const user = {
  id: 123,
  name: 'hehe',
  education: {
    degree: 'Masters'
  }
}
const { education: { degree } } = user
console.log(degree)  // Masters
```

> 有时候接口返回的数据结构可能会丢失某条数据，则
```javascript
const user = {
  id: 123,
  name: 'lexmin0412'
}
const {
  education: {
    degree
  } = {}   // 定义了user.education的缺省值，可以达到数据防御的目的
} = user
console.log(degree)  // undefined
```

- 更深层次的嵌套
```javascript
const user = {
  id: 123,
  name: 'lexmin0412'
}
const {
  education: {
    school: {
      name
    }
  } = {
    school: {
      name: 'default'
    }
  }
}
```

