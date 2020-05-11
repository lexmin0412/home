# Taro项目规范

## 前言

最近的项目技术栈从 UniApp 重构为 Taro 技术栈，之前的老项目因为大家已经习惯了之前的开发方式，很多东西的改动成本较高，既然是重构，也就下定决心彻底抛弃了老项目中的东西，跳出了之前的思维定势，去做一些新的东西。

老项目中，对于 lint 这一块的内容做的不够多，因为之前原本是 js 的项目，用的 lint 规则基本也是继承自第三方库，没有很好地考虑到项目中的实际需求。既然是开发规范，那么既要有规范，也要兼顾开发的体验，一切工具都是为人服务的，最适合的才是最好的。

存在的问题：

- 缺少 typescript 规则校验，老项目本来就是基于 js 项目，所以这个不能强求
- 提交之前没有格式化代码，虽然提供了另外的脚本用于格式化文件，但是一个相同的文件有多个开发修改，如果大家都不主动执行lint脚本, 开发A提交到代码库中，开发B在本地使用编辑器插件格式化之后再提交，就会造成不必要的冲突，甚至会掩盖掉本来很容易发现的问题。
- scss 检查及格式化，同样是格式化会造成冲突，另外，不规范的书写方式也增加了样式文件的维护难度
- commitlint，老项目中有许多的 commit log 惨不忍睹，毫无可读性可言。

结合实际需求及通用的解决方案，代码规范涉及到的工具如下：

| 工具                                                   | 作用                                      | 备注                                       |
|--------------------------------------------------------|-------------------------------------------|--------------------------------------------|
| husky                                                  | 根据配置生成对应的git钩子并执行对应的逻辑 | 无                                         |
| lint-staged                                            | 只对staged的文件进行处理                  | 能够避免每次提交都对整个项目的代码产生影响 |
| [prettier](https://prettier.io/)                       | 代码检查之前的代码格式化处理              | 提前规避eslint报出的大量格式化问题         |
| [eslint](https://eslint.bootcss.com/)                  | ts/js代码检查                             | 避免不必要的错误并统一编码风格             |
| [stylelint](https://stylelint.io/user-guide/usage/cli) | scss格式化                                | 提高样式代码可读性                         |
| commitlint                                             | commit日志规范检查                        | 解决commit log可读性差的问题               |

## 配置

## Prettier

在当前项目中用于 `pre-commit` 钩子的代码格式化操作，在 `eslint` 校验之前。

格式化规则配置在根目录下的 `.prettierrc.js` 文件中，主要是为了避免无用的格式化提交造成不必要且难以处理的冲突。

```js
// .prettierrc.js
module.exports = {
	semi: false,                 // 使用分号 默认true
	singleQuote: true,           // 使用单引号 默认false jsx中无效
	tabWidth: 2,                 // tab缩进大小,默认为2
	useTabs: true,               // 使用tab缩进，默认false
	jsxSingleQuote: true,        // jsx中使用单引号
	bracketSpacing: true,        // 大括号是否强制空格
	jsxBracketSameLine: false,   // 多行js结束标签是否与属性同行
	printWidth: 80,              // 单行长度
	arrowParens: 'avoid',        // 必要的时候省略箭头函数参数的括号包裹(单个参数时省略)
}
```

## ESLint

### eslint规则格式

- "off" or 0 - 关闭规则
- "warn" or 1 - 将规则视为一个警告（不会影响退出码）
- "error" or 2 - 将规则视为一个错误 (退出码为1)

配置文件 https://eslint.bootcss.com/docs/user-guide/configuring

### 具体的规则列表

```js
rules: {
		'arrow-parens': ['error', 'as-needed'], // 箭头函数单参数时不使用括号 多参数时使用括号
		'object-curly-newline': [ // 强制在花括号内使用一致的换行符
			'off',
			{
				minProperties: 2, // 属性数量超过2时强制使用换行符
			},
		],
		'object-property-newline': [ // 强制将对象的属性放在不同的行上
			'off',
			{
				allowAllPropertiesOnSameLine: true, // // 禁止所有的属性都放在同一行
			},
		],

		'object-curly-spacing': [ 'error', 'always' ], // 要求大括号与内容间总是有空格
		'dot-location': [ 'error', 'property' ], // 强制在点号之后换行 object-跟随对象 property-跟随属性
		curly: 'error', // 强制所有控制语句使用一致的括号风格
		complexity: [ 'off', 16 ], // 限制圈复杂度 阈值3 如if else if else语句最多嵌套三层 TODO: 需要放开
		'react/jsx-indent-props': ['off'], // 不验证jsx缩进
		'no-unused-vars': [  // 不允许未使用的变量
			'error',
			{
				varsIgnorePattern: 'Taro', // Taro框架要求在使用class组件的时候必须在文件中声明Taro 但是不是所有文件都会显式使用到 所以忽略
			},
		],
		'arrow-spacing': [ // 要求箭头函数的箭头之前或之后有空格
			'error',
			{
				before: true,
				after: true,
			},
		],
		'prefer-arrow-callback': ['error'], // 要求使用箭头函数作为回调
		'react/no-string-ref': ['off'], // 不允许字符串ref
		'react/jsx-filename-extension': [ // 识别jsx的文件扩展名
			1,
			{
				extensions: ['.js', '.jsx', '.tsx'],
			},
		],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'none',
					requireLast: false,
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false,
				},
			},
		],
		'@typescript-eslint/explicit-function-return-type': ['error'], // function和class的方法必须有明确的返回值
		'@typescript-eslint/no-empty-function': ['warn'], // 禁止空函数体
		'@typescript-eslint/no-var-requires': ['off'], // 在import引用之外禁止require引用
		'import/first': ['off'], // import必须位于文件头部
		'@typescript-eslint/no-explicit-any': ['off'], // 禁止any声明
		'@typescript-eslint/interface-name-prefix': ['off'], // interface名必须以大写字母I开头
		'import/newline-after-import': ['off'], // import之后必须隔行
		'@typescript-eslint/camelcase': ['off'], // 变量必须使用驼峰命名
		'@typescript-eslint/no-this-alias': ['off'], // 禁止将this赋值给其他变量
	}
```

## CommitLint

### commitlint类型列表

| 类型     | 意义         | 更多备注                                           |
|----------|--------------|----------------------------------------------------|
| test     | 测试代码     | 如查找问题时必须提交调试代码到代码库的行为         |
| feat     | 新增内容     | 新功能的增加                                       |
| fix      | 问题修复     | 问题修复                                           |
| refactor | 代码重构     | 不改变外部行为的代码重构                           |
| style    | 代码样式     | 不改变实际代码的样式行为，如格式化操作             |
| docs     | 文档         | 如README文档的更新                                 |
| conf     | 项目配置相关 | 如编译配置插件的修改                               |
| revert   | 回退         | 如发现更新代码之后出现问题进行的代码回退操作       |
| perf     | 优化         | 性能/体验优化 |

使用示例：

```bash
test: 调试百度统计
feat: 新增营销活动页面
fix: 修复商品详情主图展示不正确的问题
refactor: 优化购物车遍历处理逻辑
style: 确认订单页代码格式化
docs: README更新，添加项目规范相关内容
conf: 新增page文件夹的扫描，自动生成route.js
revert: 回退调试代码
perf: 优化支付成功轮询的loading效果
```

## stylelint

这里主要做的是属性的排序统一及格式化，在执行 git commit 之后，stylelint 会对 staged状态的 scss 文件做格式化操作。

```js
module.exports = {
	extends: 'stylelint-config-standard',
	plugins: ['stylelint-order'],
	rules: {
		'order/order': [
			'declarations',
			'custom-properties',
			'dollar-variables',
			'rules',
			'at-rules',
		],
		'order/properties-order': [
			'position',
			'z-index',
			'top',
			'bottom',
			'left',
			'right',
			'float',
			'clear',
			'columns',
			'columns-width',
			'columns-count',
			'column-rule',
			'column-rule-width',
			'column-rule-style',
			'column-rule-color',
			'column-fill',
			'column-span',
			'column-gap',
			'display',
			'grid',
			'grid-template-rows',
			'grid-template-columns',
			'grid-template-areas',
			'grid-auto-rows',
			'grid-auto-columns',
			'grid-auto-flow',
			'grid-column-gap',
			'grid-row-gap',
			'grid-template',
			'grid-template-rows',
			'grid-template-columns',
			'grid-template-areas',
			'grid-gap',
			'grid-row-gap',
			'grid-column-gap',
			'grid-area',
			'grid-row-start',
			'grid-row-end',
			'grid-column-start',
			'grid-column-end',
			'grid-column',
			'grid-column-start',
			'grid-column-end',
			'grid-row',
			'grid-row-start',
			'grid-row-end',
			'flex',
			'flex-grow',
			'flex-shrink',
			'flex-basis',
			'flex-flow',
			'flex-direction',
			'flex-wrap',
			'justify-content',
			'align-content',
			'align-items',
			'align-self',
			'order',
			'table-layout',
			'empty-cells',
			'caption-side',
			'border-collapse',
			'border-spacing',
			'list-style',
			'list-style-type',
			'list-style-position',
			'list-style-image',
			'ruby-align',
			'ruby-merge',
			'ruby-position',
			'box-sizing',
			'width',
			'min-width',
			'max-width',
			'height',
			'min-height',
			'max-height',
			'padding',
			'padding-top',
			'padding-right',
			'padding-bottom',
			'padding-left',
			'margin',
			'margin-top',
			'margin-right',
			'margin-bottom',
			'margin-left',
			'border',
			'border-width',
			'border-top-width',
			'border-right-width',
			'border-bottom-width',
			'border-left-width',
			'border-style',
			'border-top-style',
			'border-right-style',
			'border-bottom-style',
			'border-left-style',
			'border-color',
			'border-top-color',
			'border-right-color',
			'border-bottom-color',
			'border-left-color',
			'border-image',
			'border-image-source',
			'border-image-slice',
			'border-image-width',
			'border-image-outset',
			'border-image-repeat',
			'border-top',
			'border-top-width',
			'border-top-style',
			'border-top-color',
			'border-top',
			'border-right-width',
			'border-right-style',
			'border-right-color',
			'border-bottom',
			'border-bottom-width',
			'border-bottom-style',
			'border-bottom-color',
			'border-left',
			'border-left-width',
			'border-left-style',
			'border-left-color',
			'border-radius',
			'border-top-right-radius',
			'border-bottom-right-radius',
			'border-bottom-left-radius',
			'border-top-left-radius',
			'outline',
			'outline-width',
			'outline-color',
			'outline-style',
			'outline-offset',
			'overflow',
			'overflow-x',
			'overflow-y',
			'resize',
			'visibility',
			'font',
			'font-style',
			'font-variant',
			'font-weight',
			'font-stretch',
			'font-size',
			'font-family',
			'font-synthesis',
			'font-size-adjust',
			'font-kerning',
			'line-height',
			'text-align',
			'text-align-last',
			'vertical-align',
			'text-overflow',
			'text-justify',
			'text-transform',
			'text-indent',
			'text-emphasis',
			'text-emphasis-style',
			'text-emphasis-color',
			'text-emphasis-position',
			'text-decoration',
			'text-decoration-color',
			'text-decoration-style',
			'text-decoration-line',
			'text-underline-position',
			'text-shadow',
			'white-space',
			'overflow-wrap',
			'word-wrap',
			'word-break',
			'line-break',
			'hyphens',
			'letter-spacing',
			'word-spacing',
			'quotes',
			'tab-size',
			'orphans',
			'writing-mode',
			'text-combine-upright',
			'unicode-bidi',
			'text-orientation',
			'direction',
			'text-rendering',
			'font-feature-settings',
			'font-language-override',
			'image-rendering',
			'image-orientation',
			'image-resolution',
			'shape-image-threshold',
			'shape-outside',
			'shape-margin',
			'color',
			'background',
			'background-image',
			'background-position',
			'background-size',
			'background-repeat',
			'background-origin',
			'background-clip',
			'background-attachment',
			'background-color',
			'background-blend-mode',
			'isolation',
			'clip-path',
			'mask',
			'mask-image',
			'mask-mode',
			'mask-position',
			'mask-size',
			'mask-repeat',
			'mask-origin',
			'mask-clip',
			'mask-composite',
			'mask-type',
			'filter',
			'box-shadow',
			'opacity',
			'transform-style',
			'transform',
			'transform-box',
			'transform-origin',
			'perspective',
			'perspective-origin',
			'backface-visibility',
			'transition',
			'transition-property',
			'transition-duration',
			'transition-timing-function',
			'transition-delay',
			'animation',
			'animation-name',
			'animation-duration',
			'animation-timing-function',
			'animation-delay',
			'animation-iteration-count',
			'animation-direction',
			'animation-fill-mode',
			'animation-play-state',
			'scroll-behavior',
			'scroll-snap-type',
			'scroll-snap-destination',
			'scroll-snap-coordinate',
			'cursor',
			'touch-action',
			'caret-color',
			'ime-mode',
			'object-fit',
			'object-position',
			'content',
			'counter-reset',
			'counter-increment',
			'will-change',
			'pointer-events',
			'all',
			'page-break-before',
			'page-break-after',
			'page-break-inside',
			'widows',
		],
		'no-empty-source': null,
		'property-no-vendor-prefix': [
			true,
			{ignoreProperties: ['background-clip']},
		],
		'number-leading-zero': 'never',
		'number-no-trailing-zeros': true,
		'length-zero-no-unit': true,
		'value-list-comma-space-after': 'always',
		'declaration-colon-space-after': 'always',
		'value-list-max-empty-lines': 0,
		'shorthand-property-no-redundant-values': true,
		'declaration-block-no-duplicate-properties': true,
		'declaration-block-no-redundant-longhand-properties': true,
		'declaration-block-semicolon-newline-after': 'always',
		'block-closing-brace-newline-after': 'always',
		'media-feature-colon-space-after': 'always',
		'media-feature-range-operator-space-after': 'always',
		'at-rule-name-space-after': 'always',
		indentation: 2,
		'no-eol-whitespace': true,
		'string-no-newline': null,
	},
}

```

## 鸣谢

感谢既是基友也是老大的 [starxing](https://1415801689xing.github.io/starxingblog/) 小姐姐，让我第一次有机会来整一个大项目的框架，哈哈哈。