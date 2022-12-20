import{_ as e,c,o as a,a as l}from"./app.79baf921.js";const u=JSON.parse('{"title":"@lexmin0412/gcm","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5","link":"#\u5B89\u88C5","children":[]},{"level":2,"title":"\u529F\u80FD","slug":"\u529F\u80FD","link":"#\u529F\u80FD","children":[{"level":3,"title":"gcm list","slug":"gcm-list","link":"#gcm-list","children":[]},{"level":3,"title":"gcm add","slug":"gcm-add","link":"#gcm-add","children":[]},{"level":3,"title":"gcm use <alias>","slug":"gcm-use-alias","link":"#gcm-use-alias","children":[]},{"level":3,"title":"gcm remove","slug":"gcm-remove","link":"#gcm-remove","children":[]},{"level":3,"title":"gcm current","slug":"gcm-current","link":"#gcm-current","children":[]},{"level":3,"title":"gcm scan","slug":"gcm-scan","link":"#gcm-scan","children":[]},{"level":3,"title":"gcm doctor","slug":"gcm-doctor","link":"#gcm-doctor","children":[]},{"level":3,"title":"gcm upgrade","slug":"gcm-upgrade","link":"#gcm-upgrade","children":[]}]},{"level":2,"title":"\u66F4\u65B0\u65E5\u5FD7","slug":"\u66F4\u65B0\u65E5\u5FD7","link":"#\u66F4\u65B0\u65E5\u5FD7","children":[]}],"relativePath":"tools/gcm.md"}'),i={name:"tools/gcm.md"},d=l(`<h1 id="lexmin0412-gcm" tabindex="-1">@lexmin0412/gcm <a class="header-anchor" href="#lexmin0412-gcm" aria-hidden="true">#</a></h1><p>git \u7528\u6237\u914D\u7F6E\u7BA1\u7406\u5DE5\u5177\u3002</p><div style="display:flex;"><img style="margin-right:4px;" src="https://img.shields.io/npm/v/@lexmin0412/gcm"><img style="margin-right:4px;" src="https://img.shields.io/github/workflow/status/lexmin0412/gcm/publish%20node%20package?label=workflow"><img style="margin-right:4px;" src="https://img.shields.io/npm/l/@lexmin0412/gcm"><img style="margin-right:4px;" src="https://img.shields.io/npm/dm/@lexmin0412/gcm"></div><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm install @lexmin0412/gcm -g</span></span>
<span class="line"></span></code></pre></div><h2 id="\u529F\u80FD" tabindex="-1">\u529F\u80FD <a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a></h2><p><strong>\u8BF4\u660E\uFF1A</strong></p><blockquote><p>\u5982\u679C\u672C\u673A\u5DF2\u6709 gcm \u547D\u4EE4\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>gitconf</code> \u547D\u4EE4\u6765\u66FF\u6362\uFF0C\u5982 <code>gcm list</code> \u53EF\u4EE5\u6539\u4E3A <code>gitconf list</code>\uFF0C\u5176\u4ED6\u547D\u4EE4\u540C\u7406\u3002</p></blockquote><h3 id="gcm-list" tabindex="-1"><code>gcm list</code> <a class="header-anchor" href="#gcm-list" aria-hidden="true">#</a></h3><p>\u7B80\u5199\uFF1A<code>gcm ls</code>\u3002</p><p>\u67E5\u770B\u6240\u6709\u7528\u6237\u914D\u7F6E\u3002</p><h3 id="gcm-add" tabindex="-1"><code>gcm add</code> <a class="header-anchor" href="#gcm-add" aria-hidden="true">#</a></h3><p>\u6DFB\u52A0\u7528\u6237\u914D\u7F6E\uFF0C\u9700\u8981\u8F93\u5165\u522B\u540D\u3001\u7528\u6237\u3001\u90AE\u7BB1\u4FE1\u606F\u3002</p><h3 id="gcm-use-alias" tabindex="-1"><code>gcm use &lt;alias&gt;</code> <a class="header-anchor" href="#gcm-use-alias" aria-hidden="true">#</a></h3><p>\u901A\u8FC7\u522B\u540D\u5207\u6362\u7528\u6237\u914D\u7F6E\u3002</p><h3 id="gcm-remove" tabindex="-1"><code>gcm remove</code> <a class="header-anchor" href="#gcm-remove" aria-hidden="true">#</a></h3><p>\u7B80\u5199\uFF1A<code>gcm rm</code>\u3002</p><p>\u901A\u8FC7\u522B\u540D\u5220\u9664\u7528\u6237\u914D\u7F6E\u3002</p><h3 id="gcm-current" tabindex="-1"><code>gcm current</code> <a class="header-anchor" href="#gcm-current" aria-hidden="true">#</a></h3><blockquote><p>\u6CE8\uFF1Av1.1.0 \u4EE5\u4E0A\u7248\u672C\u652F\u6301\u3002</p></blockquote><p>\u7B80\u5199\uFF1A<code>gcm cur</code>\u3002</p><p>\u663E\u793A\u5F53\u524D\u7528\u6237\u6B63\u5728\u4F7F\u7528\u7684\u914D\u7F6E\u3002</p><h3 id="gcm-scan" tabindex="-1"><code>gcm scan</code> <a class="header-anchor" href="#gcm-scan" aria-hidden="true">#</a></h3><blockquote><p>\u6CE8\uFF1Av1.2.0 \u4EE5\u4E0A\u7248\u672C\u652F\u6301\u3002</p></blockquote><p>\u7B80\u5199\uFF1A<code>gcm sc</code>\u3002</p><p>\u626B\u63CF\u6307\u5B9A\u76EE\u5F55\uFF08\u9ED8\u8BA4\u5F53\u524D\u7528\u6237\u76EE\u5F55\uFF09\u4E0B\u7684\u6240\u6709\u7528\u6237\u914D\u7F6E\u3002</p><h3 id="gcm-doctor" tabindex="-1"><code>gcm doctor</code> <a class="header-anchor" href="#gcm-doctor" aria-hidden="true">#</a></h3><blockquote><p>\u6CE8\uFF1Av1.3.0 \u4EE5\u4E0A\u7248\u672C\u652F\u6301\u3002</p></blockquote><p>\u8BCA\u65AD\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528\u7684 git \u914D\u7F6E\u662F\u5426\u6B63\u786E\u3002</p><h3 id="gcm-upgrade" tabindex="-1"><code>gcm upgrade</code> <a class="header-anchor" href="#gcm-upgrade" aria-hidden="true">#</a></h3><blockquote><p>\u6CE8\uFF1Av1.4.0 \u4EE5\u4E0A\u7248\u672C\u652F\u6301\u3002</p></blockquote><p>\u66F4\u65B0\u5168\u5C40 <code>gcm</code> \u5230 latest \u7248\u672C\u3002</p><h2 id="\u66F4\u65B0\u65E5\u5FD7" tabindex="-1">\u66F4\u65B0\u65E5\u5FD7 <a class="header-anchor" href="#\u66F4\u65B0\u65E5\u5FD7" aria-hidden="true">#</a></h2><p><a href="https://github.com/lexmin0412/gcm/releases" target="_blank" rel="noreferrer">\u70B9\u6211</a> \u524D\u5F80\u3002</p>`,34),t=[d];function r(s,o,n,g,m,h){return a(),c("div",null,t)}const x=e(i,[["render",r]]);export{u as __pageData,x as default};