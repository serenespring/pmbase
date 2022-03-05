(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{2885:function(s,o,a){s.exports={basic:a(3016)}},3016:function(s,o,a){s.exports={content:{"zh-CN":[["ul",["li",["p","\u57FA\u4E8Eantd.Table\u7EC4\u4EF6\u57FA\u7840\u4E0A\u5C01\u88C5"]]]],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u53EF\u7F16\u8F91\u8868\u683C","en-US":"Type"},filename:"components/edittable/demo/basic.md",id:"components-edittable-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> EditTable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pmbase'</span>

<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> dataSource <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      id<span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span>
      name<span class="token punctuation">:</span><span class="token string">'\u5F20\u4E09'</span><span class="token punctuation">,</span>
      age<span class="token punctuation">:</span><span class="token number">16</span><span class="token punctuation">,</span>
      address<span class="token punctuation">:</span><span class="token string">'\u897F\u5B89\u96C1\u5854'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      id<span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">,</span>
      name<span class="token punctuation">:</span><span class="token string">'\u674E\u56DB'</span><span class="token punctuation">,</span>
      age<span class="token punctuation">:</span><span class="token number">25</span><span class="token punctuation">,</span>
      address<span class="token punctuation">:</span><span class="token string">'\u897F\u5B89\u957F\u5B89'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      id<span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">,</span>
      name<span class="token punctuation">:</span><span class="token string">'\u738B\u4E94'</span><span class="token punctuation">,</span>
      age<span class="token punctuation">:</span><span class="token number">33</span><span class="token punctuation">,</span>
      address<span class="token punctuation">:</span><span class="token string">'\u897F\u5B89\u7891\u6797'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
  <span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      title<span class="token punctuation">:</span> <span class="token string">'\u59D3\u540D'</span><span class="token punctuation">,</span>
      dataIndex<span class="token punctuation">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      title<span class="token punctuation">:</span> <span class="token string">'\u5E74\u9F84'</span><span class="token punctuation">,</span>
      dataIndex<span class="token punctuation">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      title<span class="token punctuation">:</span> <span class="token string">'\u4F4F\u5740'</span><span class="token punctuation">,</span>
      dataIndex<span class="token punctuation">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
      editable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> handleTableSave <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'value::::::'</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> geterrInfo <span class="token operator">=</span> <span class="token punctuation">(</span>errInfo<span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'errInfo::::::'</span><span class="token punctuation">,</span>errInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span><span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EditTable</span> 
      <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>dataSource<span class="token punctuation">}</span></span>
      <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span></span>
      <span class="token attr-name">handleSave</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
        <span class="token function">handleTableSave</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">rowKey</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span>
      <span class="token attr-name">geterrInfo</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>geterrInfo<span class="token punctuation">}</span></span>
      <span class="token attr-name">getEditingKey</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'key::::'</span><span class="token punctuation">,</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>   
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span><span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> EditTable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pmbase'</span>

<span class="token keyword">const</span> <span class="token function-variable function">Demo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> dataSource <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'\u5F20\u4E09'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">16</span><span class="token punctuation">,</span>
      <span class="token literal-property property">address</span><span class="token operator">:</span><span class="token string">'\u897F\u5B89\u96C1\u5854'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'\u674E\u56DB'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">25</span><span class="token punctuation">,</span>
      <span class="token literal-property property">address</span><span class="token operator">:</span><span class="token string">'\u897F\u5B89\u957F\u5B89'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'\u738B\u4E94'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">33</span><span class="token punctuation">,</span>
      <span class="token literal-property property">address</span><span class="token operator">:</span><span class="token string">'\u897F\u5B89\u7891\u6797'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
  <span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'\u59D3\u540D'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'\u5E74\u9F84'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'\u4F4F\u5740'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">editable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleTableSave</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'value::::::'</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token function-variable function">geterrInfo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">errInfo</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'errInfo::::::'</span><span class="token punctuation">,</span>errInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span><span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">EditTable</span></span> 
      <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>dataSource<span class="token punctuation">}</span></span>
      <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span></span>
      <span class="token attr-name">handleSave</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">handleTableSave</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">rowKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span>
      <span class="token attr-name">geterrInfo</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>geterrInfo<span class="token punctuation">}</span></span>
      <span class="token attr-name">getEditingKey</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'key::::'</span><span class="token punctuation">,</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>   
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span><span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){var p=a(0),d=a(48),e=a(2991),c=function(){var u=[{id:1,name:"\u5F20\u4E09",age:16,address:"\u897F\u5B89\u96C1\u5854"},{id:2,name:"\u674E\u56DB",age:25,address:"\u897F\u5B89\u957F\u5B89"},{id:3,name:"\u738B\u4E94",age:33,address:"\u897F\u5B89\u7891\u6797"}],l=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u5E74\u9F84",dataIndex:"age"},{title:"\u4F4F\u5740",dataIndex:"address",editable:!0}],k=function(n){console.log("value::::::",n)},i=function(n){console.log("errInfo::::::",n)};return p.createElement(e.EditTable,{dataSource:u,columns:l,handleSave:function(n){k(n)},rowKey:"id",geterrInfo:i,getEditingKey:function(n){console.log("key::::",n)}})};return p.createElement(c,null)}}}}]);
