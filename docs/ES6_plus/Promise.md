# Promise api

参考资料：[Promise - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

语法：
```js
new Promise((resolve, reject) => {
  var result = Math.random()
  console.log('result', result);
  setTimeout(() => {
    if (result > 0.5) {
      resolve(result)
    }
    else {
      reject(`数字小于0.5, 为${result}`)
    }
  }, 1000);
})
```

### `Promise.all(iterable)`

`Promise.all` 方法接收一个Promise对象数组作为参数，返回一个Promise实例。

参数：`iterable`，一个可迭代对象，如 `Array` 或 `String`

返回值：返回一个 `Promise` 实例，此实例在 `iterable` 参数内所有的 `promise` 都完成(`resolved`)或参数中不包含`promise`时回调完成；如果参数中`promise`有一个失败(`rejected`)，此实例回调失败(`reject`)，失败原因是第一个失败`promise`的结果

注意：如果传入的参数中没有可调用的 `Promise` 实例会进入 `resolve`

```js
// promise1
var promise1 = () => {
  return new Promise((resolve, reject) => {
    var result = Math.random()
    console.log('result', result);
    setTimeout(() => {
      if (result > 0.5) {
        resolve(result)
      }
      else {
        reject(`数字小于0.5, 为${result}`)
      }
    }, 1000);
  })
}

// promise2
var promise2 = () => {
  return new Promise((resolve, reject)=>{

    setTimeout(() => {
      if ( false ) {
        resolve('promise2 resolve')
      }
      else {
        reject('promise2 reject')
      }
    }, 2000);
  })
}

// promise all
// 返回的结果本身也是一个Promise实例
Promise.all([promise1(), promise2()]).then(res=>{
  // 当所有传入的Promise都执行完成(resolve)时resolve
  console.log('promise all resolve');
})
.catch((err)=>{
  // 只要有一个reject则reject, reject的原因是第一个reject的Promise的结果
  console.log('promise all reject',err);
})
```

### `promise.race(iterable)`

参数：同 `promise.all(iteralble)`

返回值：返回一个promise，一旦迭代器中的某个promise解决或拒绝，就采用第一个promise的值作为它的值，从而异步地解析或拒绝。

```js
// promise1
var promise1 = () => {
  return new Promise((resolve, reject) => {
    var result = Math.random()
    console.log('result', result);
    setTimeout(() => {
      if (result > 0.5) {
        resolve(result)
      }
      else {
        reject(`数字小于0.5, 为${result}`)
      }
    }, 1000);
  })
}

// promise2
var promise2 = () => {
  return new Promise((resolve, reject)=>{

    setTimeout(() => {
      if ( false ) {
        resolve('promise2 resolve')
      }
      else {
        reject('promise2 reject')
      }
    }, 2000);
  })
}

// promise race
// 因为 promise1执行得更快, 所以这里返回的结果无论是resolve还是reject, 永远是promise1的执行结果
Promise.race([promise1(), promise2()]).then(res=>{
  console.log('promise race resolve', res);
})
.catch((err)=>{
  console.log('promise race reject', err);
})
```

### `Promise.resolve(value)`

描述：静态方法 `Promise.resolve` 返回一个解析过的Promise对象。

参数：将被Promise对象解析的参数。也可以是一个Promise对象，或者是一个thenable。

返回值：一个解析过带着给定值的Promise对象，如果返回值是一个promise对象，则直接返回这个Promise对象。

```js
Promise.resolve(
  promise1()
).then(data=>{
  console.log('promise resolve', data);
  return Promise.resolve(data+1)   // 下面可以继续then
}).then(data=>{
  console.log('primise resolve2', data);
}).catch(err=>{
  console.log('promise resolve err', err);
})
```

### `Promise.reject(reason)`

返回值：一个带有拒绝原因reason参数的Promise对象。

目前想到的用途是用于错误监控, 在需要抛出错误的地方直接调用, 强制进入catch, 但是感觉是画蛇添足, 不如直接抛出error。

```js
Promise.reject('报错啦').then(res=>{
  // 永远不会进入
}).catch(err=>{
  // 错误处理
  console.log(err);
})
// 直接进入catch 打印结果为 报错啦
```
