# Array

- every
> 测试数组中的所有元素是否都通过了指定函数的测试。
```javascript
// 测试数组中的元素是否都大于10
function isBigEnough ( element, index, array ) {
  return (element >= 10)
}
var passed = [ 21, 12, 9 ].every(isBigEnough)  
console.log(passed)  // false
passed = [ 21, 12, 19 ].every(isBigEnough)
console.log(passed)  // true
```

- some
> 测试数组中是否有元素通过了指定函数的测试。
```javascript
// 测试数组中是否有元素通过了指定函数的测试
function isBigEnough ( element, index, array ) {
  return (element >= 10)
}
var passed = [ 7, 8, 9 ].some(isBigEnough)
console.log(passed)  // false
passed = [ 7, 8, 10 ].some(isBigEnough)
console.log(passed)  // true
```

- [reduce](https://www.jianshu.com/p/e375ba1cfc47)
> reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

> 参数：reduce()接收两个参数，第一个为函数，第二个为初始值
```javascript
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```
实例：
```javascript
// 累加器
function getSum ( total, item ) {
  return total+item
}
let numbers = [1,2,34,567]
console.log(numbers.reduce(getSum, 100))  // 704  初始值100，累加器计算结果为604，相加即为704
```