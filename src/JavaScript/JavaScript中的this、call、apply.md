# JavaScript中的this、call、apply

## This 的指向

在 ES5 中，**this 永远指向最后调用它的那个对象。** 参考：[this、apply、call、bind](https://juejin.cn/post/6844903496253177863)

示例：

```js
var name = "windowsName";
function a() {
    var name = "Cherry";

    console.log(this.name);          // windowsName

    console.log("inner:" + this);    // inner: Window
}
a();
console.log("outer:" + this)         // outer: Window
```

```js
var name = "windowsName";
var a = {
    name: "Cherry",
    fn : function () {
        console.log(this.name);      // Cherry
    }
}
a.fn();
```

```js
var name = "windowsName";
var a = {
    name: "Cherry",
    fn : function () {
        console.log(this.name);      // Cherry
    }
}
window.a.fn();
```

```js
var name = "windowsName";
var a = {
    // name: "Cherry",
    fn : function () {
        console.log(this.name);      // undefined
    }
}
window.a.fn();
```

```js
var name = "windowsName";
var a = {
    name : null,
    // name: "Cherry",
    fn : function () {
        console.log(this.name);      // windowsName
    }
}

var f = a.fn;
f();
```

```js
var name = "windowsName";

function fn() {
    var name = 'Cherry';
    innerFunction();
    function innerFunction() {
        console.log(this.name);      // windowsName
    }
}

fn()
```

## 改变 this 指向

改变 this 的指向有以下的几种方法：

- 使用 ES6 的箭头函数
- 在函数内部使用 _this = this
- 使用 `apply`、`call`、`bind`
- new 实例化一个对象

例子：

```js
var name = "windowsName";

var a = {
    name : "Cherry",

    func1: function () {
        console.log(this.name)
    },

    func2: function () {
        setTimeout(  function () {
            this.func1()
        },100);
    }

};

a.func2()     // this.func1 is not a function
```

在不使用箭头函数的情况下，是会报错的，因为最后调用 `setTimeout` 的对象是 window，但是在 window 中并没有 func1 函数。

### 箭头函数

箭头函数可以避免 ES5 中使用 this 的坑，**箭头函数的 this 永远指向函数定义时的 this，而非执行时。**

**箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包裹，则 this 绑定的是最近一层非箭头函数的 this, 否则，this 为 undefined。**

```js
var name = "windowsName";

var a = {
    name : "Cherry",

    func1: function () {
        console.log(this.name)
    },

    func2: function () {
        setTimeout( () => {
            this.func1()
        },100);
    }

};

a.func2()     // Cherry
```

### 在函数内部使用变量赋值(_this = this)

如果不使用 ES6，可以使用一个变量将 this 记录下来，然后供内层函数调用，这样 this 就不会被改变了。

```js
var name = "windowsName";

var a = {

    name : "Cherry",

    func1: function () {
        console.log(this.name)
    },

    func2: function () {
        var _this = this;
        setTimeout( function() {
            _this.func1()
        },100);
    }

};

a.func2()       // Cherry
```

在上面的 setTimeout 回调函数中，_this 在上层已经被定义为了调用 func2 的对象，所以 setTimeout 中的 _this 就不会指向 Window, 而是 a 了。

### bind、apply、call

#### apply

> apply() 方法调用一个函数，其具有指定的一个 this 值，以及作为一个数组(或类数组的对象) 指向的参数。

语法：

```
fun.apply(thisArg, [argsArray])
```

#### call

call 和 apply 相似，唯一的区别是参数形式不同。apply 接受的是一个参数的数组，call 接收的是若干个参数列表。

语法：

```
fun.call(thisArg[, arg1 [, arg2 [, ...]]])
```

示例：

```js
// apply
var a ={
    name : "Cherry",
    fn : function (a,b) {
      	console.log(this.name)
        console.log( a + b)
    }
}

var b = a.fn;
b.apply(a,[1,2])
// 'Cherry'
// 3
```

```js
// call
var a ={
    name : "Cherry",
    fn : function (a,b) {
    		console.log(this.name)
        console.log( a + b)
    }
}

var b = a.fn;
b.call(a,1,2)
// 'Cherry'
// 3
```

```js
// bind
var a ={
    name : "Cherry",
    fn : function (a,b) {
      	console.log(this.name)
        console.log( a + b)
    }
}

var b = a.fn;
b.bind(a,1,2)()
// 'Cherry'
// 3
```

## 函数调用

函数调用的方法一共有 4 种：

- 作为一个函数调用
- 作为方法调用
- 作为构造函数调用
- 作为函数方法调用函数

### 作为函数调用

```js
var name = "windowsName";
function a() {
    var name = "Cherry";

    console.log(this.name);          // windowsName

    console.log("inner:" + this);    // inner: Window
}
a();
console.log("outer:" + this)         // outer: Window
```

this 默认指向 window, 如果在严格模式就是 undefined， 外面的 outer 无论在非严格还是严格模式下都是 window。

这是一个全局函数，容易造成命名冲突，不建议使用。

### 作为方法调用

```js
var name = "windowsName";
var a = {
    name: "Cherry",
    fn : function () {
        console.log(this.name);      // Cherry
    }
}
a.fn();
```

由于 **this 永远指向最后调用它的那个对象** ，所以 this 是 a。

### 作为构造函数调用

```js
function createPerson(name, age) {
	this.name = name
	this.age = age
}
var person = new createPerson('jack', '22')
console.log(person.name)  // 'jack'
```

#### new 的过程

```js
var person = new createPerson('jack', '22')

new createPerson {
  var obj = {}
  obj.__proto__ = createPerson.prototype
  var result = obj.call(obj, 'jack', '22')
  return typeof result === 'obj' ? result : obj
}
```

- 第一步，创建一个空对象
- 第二步，将新创建的对象的隐式原型指向其构造函数的显式原型；
- 第三步，使用 call 改变 this 的指向
- 第四步，如果无返回值或者返回的是一个空对象，则将 obj 返回作为新对象，否则返回新创建的对象。

### 作为函数方法调用

```js
var name = "windowsName";

function fn() {
    var name = 'Cherry';
    innerFunction();
    function innerFunction() {
        console.log(this.name);      // windowsName
    }
}

fn()
```

这里的 innerFunction 属于第一种方式，作为函数调用，没有挂在任何对象上，所以它的 this 永远指向 window。

```js
var name = "windowsName";

var a = {
    name : "Cherry",

    func1: function () {
        console.log(this.name)
    },

    func2: function () {
        setTimeout(  function () {
            this.func1()
        },100 );
    }

};

a.func2()     // this.func1 is not a function
```

**匿名函数的 this 永远指向 window。**



## 总结

以下三点：

- **ES5中，this 永远指向最后调用它的那个对象**
- **匿名函数的 this 永远指向 window**
- **箭头函数没有 this 绑定，必须通过作用域链来查找。如果箭头函数被非箭头函数包裹，那么它的 this 绑定的是最近一层非箭头函数的 this，也就是指向最后调用最近一层非箭头函数的那个对象。**





