import{_ as e,c as a,o as t,a as r}from"./app.fb0bd5e4.js";const i="/blog/assets/image-20210421154137659.85dad4a8.png",f=JSON.parse('{"title":"React \u539F\u7406\u89E3\u6790","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EC0\u4E48\u662F \u865A\u62DF DOM(Virtual DOM)\uFF1F","slug":"\u4EC0\u4E48\u662F-\u865A\u62DF-dom-virtual-dom","link":"#\u4EC0\u4E48\u662F-\u865A\u62DF-dom-virtual-dom","children":[]},{"level":2,"title":"\u4E3A\u4EC0\u4E48\u9700\u8981\u7528\u865A\u62DF DOM\uFF08Why?\uFF09","slug":"\u4E3A\u4EC0\u4E48\u9700\u8981\u7528\u865A\u62DF-dom-why","link":"#\u4E3A\u4EC0\u4E48\u9700\u8981\u7528\u865A\u62DF-dom-why","children":[]},{"level":2,"title":"\u5B83\u7528\u5728\u54EA\u91CC\u5462(where)\uFF1F","slug":"\u5B83\u7528\u5728\u54EA\u91CC\u5462-where","link":"#\u5B83\u7528\u5728\u54EA\u91CC\u5462-where","children":[]},{"level":2,"title":"\u4EC0\u4E48\u662F React Fiber?","slug":"\u4EC0\u4E48\u662F-react-fiber","link":"#\u4EC0\u4E48\u662F-react-fiber","children":[]},{"level":2,"title":"JSX","slug":"jsx","link":"#jsx","children":[]}],"relativePath":"React\u76F8\u5173/React\u539F\u7406\u89E3\u6790.md"}'),d={name:"React\u76F8\u5173/React\u539F\u7406\u89E3\u6790.md"},l=r('<h1 id="react-\u539F\u7406\u89E3\u6790" tabindex="-1">React \u539F\u7406\u89E3\u6790 <a class="header-anchor" href="#react-\u539F\u7406\u89E3\u6790" aria-hidden="true">#</a></h1><p>React \u672C\u8EAB\u53EA\u662F\u4E00\u4E2A DOM \u7684\u62BD\u8C61\u5C42\uFF0C\u4F7F\u7528\u7EC4\u4EF6\u6784\u5EFA\u865A\u62DF DOM\u3002</p><h2 id="\u4EC0\u4E48\u662F-\u865A\u62DF-dom-virtual-dom" tabindex="-1">\u4EC0\u4E48\u662F \u865A\u62DF DOM(Virtual DOM)\uFF1F <a class="header-anchor" href="#\u4EC0\u4E48\u662F-\u865A\u62DF-dom-virtual-dom" aria-hidden="true">#</a></h2><p>Virtual DOM \u662F\u4E00\u79CD\u7F16\u7A0B\u6982\u5FF5\u3002\u7528 js \u5BF9\u8C61\u6765\u63CF\u8FF0\u771F\u5B9E\u7684DOM\u8282\u70B9\uFF0C\u5B58\u5728\u5185\u5B58\u5F53\u4E2D\uFF0C\u8FD8\u9700\u8981\u901A\u8FC7 React DOM \u8FD9\u6837\u7684\u7C7B\u5E93\u4F7F\u4E4B\u4E0E\u771F\u5B9E\u7684 DOM \u4FDD\u6301\u540C\u6B65\uFF0C\u540C\u6B65\u7684\u8FD9\u4E00\u8FC7\u7A0B\u79F0\u4E3A \u201C\u534F\u8C03\u201D\u3002\u534F\u8C03\u7684\u6838\u5FC3\u5C31\u662F diff \u7B97\u6CD5\u3002</p><p>\u5728\u4E24\u6B21\u66F4\u65B0\u4E4B\u95F4\u901A\u8FC7 diff \u7B97\u6CD5\u6765\u4F7F DOM \u64CD\u4F5C\u8FBE\u5230\u6700\u5C11\uFF0C\u8FD9\u91CC\u5C31\u662F\u4F18\u5316\u7684\u70B9\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u9700\u8981\u7528\u865A\u62DF-dom-why" tabindex="-1">\u4E3A\u4EC0\u4E48\u9700\u8981\u7528\u865A\u62DF DOM\uFF08Why?\uFF09 <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u9700\u8981\u7528\u865A\u62DF-dom-why" aria-hidden="true">#</a></h2><p>DOM \u5BF9\u8C61\u975E\u5E38\u5E9E\u5927\uFF0C\u6240\u4EE5\u5B83\u64CD\u4F5C\u5F88\u6162\uFF08\u4E0B\u9762\u662F\u4E00\u4E2A\u7A7A div \u7684\u5C5E\u6027\u5217\u8868\uFF09\uFF1B\u8F7B\u5FAE\u7684\u64CD\u4F5C\u90FD\u53EF\u80FD\u5BFC\u81F4\u9875\u9762\u91CD\u65B0\u6392\u7248\uFF0C\u975E\u5E38\u8017\u8D39\u6027\u80FD\u3002\u76F8\u5BF9\u4E8E DOM \u5BF9\u8C61\uFF0Cjs \u5BF9\u8C61\u5904\u7406\u8D77\u6765\u66F4\u5FEB\uFF0C\u800C\u4E14\u66F4\u7B80\u5355\u3002\u901A\u8FC7 diff \u7B97\u6CD5\u5BF9\u6BD4\u65B0\u65E7 vDOM \u4E4B\u95F4\u7684\u5DEE\u5F02\uFF0C\u53EF\u4EE5\u6279\u91CF\u5730\uFF0C\u6700\u5C0F\u5316\u5730\u6267\u884C DOM \u64CD\u4F5C\uFF0C\u4ECE\u800C\u63D0\u9AD8\u6027\u80FD\u3002</p><p>\u865A\u62DFDOM\u8282\u70B9\u53EA\u4F1A\u5C06\u5B9A\u4E49\u65F6\u4F7F\u7528\u5230\u7684\u5C5E\u6027\u6DFB\u52A0\u5230\u865A\u62DF\u5BF9\u8C61\u4E0A\uFF0C\u8FD9\u6837\u5BF9\u6BD4\u65F6\u5C31\u53EA\u5BF9\u6BD4\u8FD9\u4E9B\u5C5E\u6027\u3002</p><p><img src="'+i+'" alt="image-20210421154137659"></p><h2 id="\u5B83\u7528\u5728\u54EA\u91CC\u5462-where" tabindex="-1">\u5B83\u7528\u5728\u54EA\u91CC\u5462(where)\uFF1F <a class="header-anchor" href="#\u5B83\u7528\u5728\u54EA\u91CC\u5462-where" aria-hidden="true">#</a></h2><p>React \u4E2D\u4F7F\u7528 jsx \u6765\u63CF\u8FF0\u89C6\u56FE\uFF0C\u901A\u8FC7 babel-loader \u8F6C\u8BD1\u540E\u4ED6\u4EEC\u53D8\u4E3A React.createElement \u7684\u5F62\u5F0F\uFF0C\u8BE5\u51FD\u6570\u5C06\u751F\u6210 vdom \u6765\u63CF\u8FF0\u771F\u5B9E dom\u3002\u5982\u679C\u5C06\u6765\u72B6\u6001\u53D8\u5316\uFF0Cvdom \u5C06\u4F5C\u51FA\u76F8\u5E94\u53D8\u5316\uFF0C\u518D\u901A\u8FC7 diff \u7B97\u6CD5\u6765\u5BF9\u6BD4\u65B0\u65E7 vdom \u533A\u522B\uFF0C\u6700\u7EC8\u4F5C\u51FA dom \u64CD\u4F5C\u3002</p><h2 id="\u4EC0\u4E48\u662F-react-fiber" tabindex="-1">\u4EC0\u4E48\u662F React Fiber? <a class="header-anchor" href="#\u4EC0\u4E48\u662F-react-fiber" aria-hidden="true">#</a></h2><p>Fiber \u662F React16 \u4E2D\u65B0\u7684\u534F\u8C03\u5F15\u64CE\uFF0C\u5B83\u7684\u4E3B\u8981\u76EE\u7684\u662F\u4F7F Virtual DOM \u53EF\u4EE5\u8FDB\u884C\u589E\u91CF\u5F0F\u6E32\u67D3\u3002</p><h2 id="jsx" tabindex="-1">JSX <a class="header-anchor" href="#jsx" aria-hidden="true">#</a></h2><p>jsx \u5176\u5B9E\u5C31\u662F <code>React.createElement</code> \u65B9\u6CD5\u7684\u8BED\u6CD5\u7CD6\u3002</p><p>\u4E3A\u4EC0\u4E48\u9700\u8981\u7528 jsx?</p><ul><li>\u5F00\u53D1\u6548\u7387\uFF1A\u4F7F\u7528 jsx \u7F16\u5199\u6A21\u7248\u7B80\u5355\u9AD8\u6548\uFF1B</li><li>\u6267\u884C\u6548\u7387\uFF1AJSX \u7F16\u8BD1\u4E3A javascript \u4EE3\u7801\u540E\u8FDB\u884C\u4E86\u4F18\u5316\uFF0C\u6267\u884C\u66F4\u5FEB\uFF1B</li><li>\u7C7B\u578B\u5B89\u5168\uFF1A\u5728\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u5C31\u80FD\u53D1\u73B0\u9519\u8BEF\u3002</li></ul><p>\u539F\u7406\uFF1Ababel-loader \u4F1A\u9884\u7F16\u8BD1 jsx \u4E3A React.createElement</p><p>\u4E0E Vue \u7684\u5F02\u540C\uFF1A</p><ul><li>React \u4E2D\u865A\u62DF dom+jsx \u7684\u8BBE\u8BA1\u662F\u4E00\u5F00\u59CB\u5C31\u6709\uFF0Cvue \u5219\u662F\u6F14\u8FDB\u8FC7\u7A0B\u4E2D\u624D\u652F\u6301\u7684\uFF1B</li><li>jsx \u672C\u6765\u5C31\u662F js \u6269\u5C55\uFF0C\u8F6C\u79FB\u8FC7\u7A0B\u7B80\u5355\u76F4\u63A5\u5F97\u591A\uFF0Cvue \u628A template \u7F16\u8BD1\u4E3A render \u51FD\u6570\u7684\u8FC7\u7A0B\u9700\u8981\u590D\u6742\u7684\u7F16\u8BD1\u5668\u6765\u8F6C\u6362\u5B57\u7B26\u4E32 - AST - JS\u51FD\u6570\u5B57\u7B26\u4E32\u3002</li></ul>',20),c=[l];function s(h,o,n,p,m,_){return t(),a("div",null,c)}const D=e(d,[["render",s]]);export{f as __pageData,D as default};
