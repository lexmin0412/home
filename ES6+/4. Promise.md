### Promise api
> 参考资料：`https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise`
- `Promise.all(iterable)`
> 参数：`iterable`，一个可迭代对象，如 `Array` 或 `String`

> 返回值：返回一个 `Promise` 实例，此实例在 `iterable` 参数内所有的 `promise` 都完成(`resolved`)或参数中不包含`promise`时回调完成；如果参数中`promise`有一个失败(`rejected`)，此实例回调失败(`reject`)，失败原因是第一个失败`promise`的结果

- `promise.race(iterable)`
> 参数：同 `promise.all(iteralble)`

> 返回值：返回一个promise，一旦迭代器中的某个promise解决或拒绝，就采用第一个promise的值作为它的值，从而异步地解析或拒绝。

- `Promise.resolve()`
- `Promise.reject()`
