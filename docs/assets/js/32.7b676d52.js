(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{188:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"vue的生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue的生命周期","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue的生命周期")]),t._v(" "),e("blockquote",[e("p",[t._v("所有的生命周期钩子自动绑定 "),e("code",[t._v("this")]),t._v(" 上下文到实例中，在生命周期中可以访问数据，对属性和方法进行运算。但这也意味着不能使用箭头函数来自定义生命周期方法。详见官网 "),e("a",{attrs:{href:"%E5%AE%98%E6%96%B9%E6%96%87%E6%A1%A3"}},[t._v("官方文档")])])]),t._v(" "),e("h3",{attrs:{id:"beforecreate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beforecreate","aria-hidden":"true"}},[t._v("#")]),t._v(" beforeCreate")]),t._v(" "),e("p",[t._v("在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。")]),t._v(" "),e("h3",{attrs:{id:"created"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#created","aria-hidden":"true"}},[t._v("#")]),t._v(" created")]),t._v(" "),e("p",[t._v("在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。")]),t._v(" "),e("h3",{attrs:{id:"beforemount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beforemount","aria-hidden":"true"}},[t._v("#")]),t._v(" beforeMount")]),t._v(" "),e("p",[t._v("在挂载开始之前被调用：相关的 render 函数首次被调用。")]),t._v(" "),e("p",[t._v("注意：该钩子在服务器端渲染期间不被调用。")]),t._v(" "),e("h3",{attrs:{id:"mounted"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mounted","aria-hidden":"true"}},[t._v("#")]),t._v(" mounted")]),t._v(" "),e("p",[e("code",[t._v("el")]),t._v(" 被新创建的 "),e("code",[t._v("vm.$el")]),t._v(" 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 "),e("code",[t._v("mounted")]),t._v(" 被调用时 "),e("code",[t._v("vm.$el")]),t._v(" 也在文档内。")]),t._v(" "),e("p",[t._v("注意 "),e("code",[t._v("mounted")]),t._v(" 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 "),e("code",[t._v("vm.$nextTick")]),t._v(" 替换掉 "),e("code",[t._v("mounted")])]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("mounted")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("$nextTick")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Code that will run only after the")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// entire view has been rendered")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[t._v("注意：该钩子在服务器端渲染期间不被调用。")]),t._v(" "),e("h3",{attrs:{id:"beforeupdate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beforeupdate","aria-hidden":"true"}},[t._v("#")]),t._v(" beforeUpdate")]),t._v(" "),e("p",[t._v("数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。")]),t._v(" "),e("p",[t._v("注意：该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。")]),t._v(" "),e("h3",{attrs:{id:"updated"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updated","aria-hidden":"true"}},[t._v("#")]),t._v(" updated")]),t._v(" "),e("p",[t._v("由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。")]),t._v(" "),e("p",[t._v("当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。")]),t._v(" "),e("p",[t._v("注意 updated 不会承诺所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以用 vm.$nextTick 替换掉 updated：")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("updated")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("$nextTick")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Code that will run only after the")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// entire view has been re-rendered")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[t._v("该钩子在服务器端渲染期间不被调用。")]),t._v(" "),e("h3",{attrs:{id:"beforedestroy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beforedestroy","aria-hidden":"true"}},[t._v("#")]),t._v(" beforeDestroy")]),t._v(" "),e("p",[t._v("实例销毁之前调用。在这一步，实例仍然完全可用。")]),t._v(" "),e("p",[t._v("该钩子在服务器端渲染期间不被调用。")]),t._v(" "),e("h3",{attrs:{id:"destroyed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#destroyed","aria-hidden":"true"}},[t._v("#")]),t._v(" destroyed")]),t._v(" "),e("p",[t._v("Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。")]),t._v(" "),e("p",[t._v("该钩子在服务器端渲染期间不被调用。")]),t._v(" "),e("h3",{attrs:{id:"activated"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#activated","aria-hidden":"true"}},[t._v("#")]),t._v(" activated")]),t._v(" "),e("p",[t._v("keep-alive 组件激活时调用。")]),t._v(" "),e("p",[t._v("该钩子在服务器端渲染期间不被调用。")]),t._v(" "),e("h3",{attrs:{id:"deactivated"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deactivated","aria-hidden":"true"}},[t._v("#")]),t._v(" deactivated")]),t._v(" "),e("p",[t._v("keep-alive 组件停用时调用。")]),t._v(" "),e("p",[t._v("该钩子在服务器端渲染期间不被调用。")])])}],!1,null,null,null);a.default=n.exports}}]);