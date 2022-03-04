(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{266:function(t,e,_){"use strict";_.r(e);var i=_(0),r=Object(i.a)({},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"content"},[t._m(0),t._v(" "),_("p",[t._v("现在的流程：")]),t._v(" "),_("p",[t._v("faas请求应用数据(包括页面/组件/导航等) =>  构建脚本处理文件 => 执行构建。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),_("p",[t._v("要做到按需构建，首先得知道我们的需求。")]),t._v(" "),t._m(3),t._v(" "),_("p",[t._v("第一种方案，简单粗暴，但难以升级。每一次小程序构建都只打包当前设计器内拖放了的组件，这样一来虽然保证了当前的小程序包总体积最小，但对用户来说可能会难以接受，因为如果想要做到不提审更新元数据，用户只能使用当前版本已使用的组件，只要有之前没有拖放进设计器的组件，就需要走重新提审发布的流程。")]),t._v(" "),_("p",[t._v("第二种方案，只构建当前使用了的组件包。每次小程序构建时只打包当前使用到的组件列表所引用的组件包，这种情况下只要做好组件的分类和产品层面的限制（比如单个页面不能使用超过3个以上组件包的组件，用这样的方式去促使用户对组件做好分类），其实算是当前阶段比较合适的策略。")]),t._v(" "),_("p",[t._v("第三种，全量构建。只要用户引用到了的组件包，都打包进小程序内，达到最高的灵活性。")]),t._v(" "),_("p",[t._v("我们的终极目标当然是第三种，但是需要有非常完善的方案去实现。")]),t._v(" "),t._m(4),t._v(" "),_("p",[t._v("基于可行性，我们按两个方向来展开讨论。")]),t._v(" "),t._m(5),t._v(" "),_("p",[t._v("不做分包异步化的情况下，微信小程序存在以下限制：")]),t._v(" "),t._m(6),t._v(" "),_("p",[t._v("可以看出来存在很大问题，主包总体积只有2M，除去框架运行时和SDK等内置代码之外，我们只有1.5M左右的体积供组件包使用才能保证小程序体积在一个合理的范围，产品层面可以从以下方面考虑：")]),t._v(" "),t._m(7),t._v(" "),_("p",[t._v("那么我们的分包策略（不基于分包异步化）简单来说类似：")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),_("p",[t._v("虽然但是，分包异步化一定是我们的终极解决方案。")]),t._v(" "),_("p",[t._v("分包异步化需要的最低基础库版本为 2.17.3，当前线上基础库占比已经达到了94%+（"),_("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/client-lib/version.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("基础库版本分布统计"),_("OutboundLink")],1),t._v("），再等待一段时间就可以升级了。")]),t._v(" "),_("p",[t._v("在分包异步化的前提下，我们可以按照组件包的粒度来进行分包，同样地：")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),_("p",[t._v("配合以上的策略，还需要做分包预加载等。")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"按需构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#按需构建","aria-hidden":"true"}},[this._v("#")]),this._v(" 按需构建")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"images/image-20211224151044582.png",alt:"image-20211224151044582"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"按需，按什么需？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#按需，按什么需？","aria-hidden":"true"}},[this._v("#")]),this._v(" 按需，按什么需？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("只构建当前使用的组件？")]),this._v(" "),e("li",[this._v("只构建当前引用的组件包？")]),this._v(" "),e("li",[this._v("全量构建")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"分包策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分包策略","aria-hidden":"true"}},[this._v("#")]),this._v(" 分包策略")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"不做分包异步化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不做分包异步化","aria-hidden":"true"}},[this._v("#")]),this._v(" 不做分包异步化")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("主包 2M")]),this._v(" "),e("li",[this._v("每个分包 2M")]),this._v(" "),e("li",[this._v("总体积 20M")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("在组件包注册时进行检测，对组件包总体积/单个组件体积进行限制（比如: 单个组件包代码总体积不超过1M，组件数量不超过20个）")]),this._v(" "),e("li",[this._v("限制页面个数")]),this._v(" "),e("li",[this._v("单页面限制引用组件包个数")]),this._v(" "),e("li",[this._v("限制主包引用的组件包（可以是系统组件+客户自选的模式，比如主包引用的组件包不超过5个）")])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ul",[_("li",[_("strong",[t._v("只有 tabbar 页面打包进主包，对应引用的组件包进主包")])]),t._v(" "),_("li",[t._v("其他页面及其引用的组件包（除主包已引用的之外）全部打进分包")]),t._v(" "),_("li",[t._v("对组件包引用频率进行排序，引用频率较高的组件包和对应的页面打入同一分包，其他依次同理（如某个组件包被10个页面引用了，那么我们就将这10个页面和其引用的组件包打进一个分包，这里需要有更加详细的算法）")]),t._v(" "),_("li",[t._v("不依赖主包功能的打入独立分包")]),t._v(" "),_("li",[t._v("必要时将同一个组件包复制多份打入不同的分包")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"分包异步化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分包异步化","aria-hidden":"true"}},[this._v("#")]),this._v(" 分包异步化")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ul",[_("li",[t._v("组件包注册/升级时检测，限制单个组件包体积")]),t._v(" "),_("li",[t._v("构建前检测，限制所有组件包的总体积")]),t._v(" "),_("li",[t._v("按组件包引用频率来统计，"),_("strong",[t._v("主包(tabbar)页面使用频率较高的组件包打入主包内")]),t._v("，其他打入分包，运行时异步加载")]),t._v(" "),_("li",[t._v("对组件包引用频率进行排序，引用频率较高的组件包和对应的页面打入同一分包，其他同理逐个合并")]),t._v(" "),_("li",[t._v("不依赖主包功能的打入独立分包")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他","aria-hidden":"true"}},[this._v("#")]),this._v(" 其他")])}],!1,null,null,null);e.default=r.exports}}]);