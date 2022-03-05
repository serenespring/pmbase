(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{2889:function(a,t,n){a.exports={basic:n(3018)}},3018:function(a,t,n){a.exports={content:{"zh-CN":[["ul",["li",["p","\u5E38\u89C4\u641C\u7D22"]]]],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u641C\u7D22\u6846","en-US":"Type"},filename:"components/normalsearch/demo/basic.md",id:"components-normalsearch-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NormalSearch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pmbase'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      label<span class="token punctuation">:</span> <span class="token string">'\u59D3\u540D'</span><span class="token punctuation">,</span>
      name<span class="token punctuation">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
      valueType<span class="token punctuation">:</span><span class="token string">'text'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      label<span class="token punctuation">:</span> <span class="token string">'\u5E74\u9F84'</span><span class="token punctuation">,</span>
      name<span class="token punctuation">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
      valueType<span class="token punctuation">:</span><span class="token string">'select'</span><span class="token punctuation">,</span>
      valueData<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span>key<span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span>value<span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>key<span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">,</span>value<span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      label<span class="token punctuation">:</span> <span class="token string">'\u4F4F\u5740'</span><span class="token punctuation">,</span>
      name<span class="token punctuation">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
      valueType<span class="token punctuation">:</span><span class="token string">'text'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> onSearch <span class="token operator">=</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'values:::::::'</span><span class="token punctuation">,</span>values<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span><span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NormalSearch</span> <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span></span> <span class="token attr-name">onSearch</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onSearch<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>



ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span><span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NormalSearch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pmbase'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Demo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'\u59D3\u540D'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">valueType</span><span class="token operator">:</span><span class="token string">'text'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'\u5E74\u9F84'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">valueType</span><span class="token operator">:</span><span class="token string">'select'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">valueData</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">key</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">key</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'\u4F4F\u5740'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">valueType</span><span class="token operator">:</span><span class="token string">'text'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onSearch</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">values</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'values:::::::'</span><span class="token punctuation">,</span>values<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span><span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NormalSearch</span></span> <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span></span> <span class="token attr-name">onSearch</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSearch<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>



ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span><span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){var i=n(0),m=n(48),p=e(n(0)),o=n(2991);function e(s){return s&&s.__esModule?s:{default:s}}var c=function(){var l=[{label:"\u59D3\u540D",name:"name",valueType:"text"},{label:"\u5E74\u9F84",name:"age",valueType:"select",valueData:[{key:1,value:1},{key:2,value:2}]},{label:"\u4F4F\u5740",name:"address",valueType:"text"}],u=function(k){console.log("values:::::::",k)};return p.default.createElement(o.NormalSearch,{columns:l,onSearch:u})};return p.default.createElement(c,null)}}}}]);
