(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{2883:function(a,p,n){a.exports={basic:n(3015)}},3015:function(a,p,n){a.exports={content:{"zh-CN":[],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u63CF\u8FF0\u4FE1\u606F","en-US":"Type"},filename:"components/descriptionspro/demo/basic.md",id:"components-descriptionspro-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DescriptionsPro <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pmbase'</span>

<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      title<span class="token punctuation">:</span> <span class="token string">'\u59D3\u540D'</span><span class="token punctuation">,</span>
      key<span class="token punctuation">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
      dataIndex<span class="token punctuation">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      title<span class="token punctuation">:</span> <span class="token string">'\u6027\u522B'</span><span class="token punctuation">,</span>
      key<span class="token punctuation">:</span> <span class="token string">'sex'</span><span class="token punctuation">,</span>
      dataIndex<span class="token punctuation">:</span> <span class="token string">'sex'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      title<span class="token punctuation">:</span> <span class="token string">'\u5E74\u9F84'</span><span class="token punctuation">,</span>
      key<span class="token punctuation">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
      dataIndex<span class="token punctuation">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      title<span class="token punctuation">:</span> <span class="token string">'\u4F4F\u5740'</span><span class="token punctuation">,</span>
      key<span class="token punctuation">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
      dataIndex<span class="token punctuation">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> dataSource <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> <span class="token string">'\u5F20\u4E09'</span><span class="token punctuation">,</span>
    sex<span class="token punctuation">:</span> <span class="token string">'\u7537'</span><span class="token punctuation">,</span>
    age<span class="token punctuation">:</span>  <span class="token number">18</span><span class="token punctuation">,</span>
    address<span class="token punctuation">:</span> <span class="token string">'\u897F\u5B89\u96C1\u5854'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DescriptionsPro</span> <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span></span> <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>dataSource<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DescriptionsPro <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pmbase'</span>

<span class="token keyword">const</span> <span class="token function-variable function">Demo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'\u59D3\u540D'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'\u6027\u522B'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'sex'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'sex'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'\u5E74\u9F84'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'\u4F4F\u5740'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> dataSource <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'\u5F20\u4E09'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">'\u7537'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span>  <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'\u897F\u5B89\u96C1\u5854'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DescriptionsPro</span></span> <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span></span> <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>dataSource<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){var r=n(0),i=n(48),t=e(n(0)),o=n(2991);function e(s){return s&&s.__esModule?s:{default:s}}var c=function(){var l=[{title:"\u59D3\u540D",key:"name",dataIndex:"name"},{title:"\u6027\u522B",key:"sex",dataIndex:"sex"},{title:"\u5E74\u9F84",key:"age",dataIndex:"age"},{title:"\u4F4F\u5740",key:"address",dataIndex:"address"}],u={name:"\u5F20\u4E09",sex:"\u7537",age:18,address:"\u897F\u5B89\u96C1\u5854"};return t.default.createElement(o.DescriptionsPro,{columns:l,dataSource:u})};return t.default.createElement(c,null)}}}}]);
