(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{2895:function(d,I,u){d.exports={basic:u(3020),selectedTable:u(3021)}},3020:function(d,I,u){d.exports={content:{"zh-CN":[["ul",["li",["p","\u5FEB\u901F\u5F00\u53D1\u4E00\u4E2A\u5E26\u641C\u7D22\u6761\u4EF6\u7684\u8868\u683C"]],["li"]]],"en-US":[]},meta:{order:1,title:{"zh-CN":"\u5E26\u641C\u7D22\u6761\u4EF6\u7684\u8868\u683C","en-US":"Type"},filename:"components/searchtable/demo/basic.md",id:"components-searchtable-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> SearchTable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pmbase'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token punctuation">:</span> <span class="token string">'\u5E8F\u53F7'</span><span class="token punctuation">,</span>
    dataIndex<span class="token punctuation">:</span> <span class="token string">'index'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'index'</span><span class="token punctuation">,</span>
    isSearch<span class="token punctuation">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
    render<span class="token punctuation">:</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span>record<span class="token punctuation">,</span>index<span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span>index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token punctuation">:</span> <span class="token string">'\u59D3\u540D'</span><span class="token punctuation">,</span>
    dataIndex<span class="token punctuation">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    valueType<span class="token punctuation">:</span><span class="token string">'text'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token punctuation">:</span> <span class="token string">'\u5E74\u9F84'</span><span class="token punctuation">,</span>
    dataIndex<span class="token punctuation">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
    valueType<span class="token punctuation">:</span><span class="token string">'select'</span><span class="token punctuation">,</span>
    valueData<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span>key<span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span>value<span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>key<span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">,</span>value<span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token punctuation">:</span> <span class="token string">'\u4F4F\u5740'</span><span class="token punctuation">,</span>
    dataIndex<span class="token punctuation">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
    valueType<span class="token punctuation">:</span><span class="token string">'text'</span><span class="token punctuation">,</span>
    isSearch<span class="token punctuation">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> dataSource <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">89</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      id<span class="token punctuation">:</span>i<span class="token punctuation">,</span>
      name<span class="token punctuation">:</span><span class="token template-string"><span class="token string">\`\u5F20\u4E09</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\`</span></span><span class="token punctuation">,</span>
      age<span class="token punctuation">:</span><span class="token number">16</span><span class="token operator">+</span>i<span class="token punctuation">,</span>
      address<span class="token punctuation">:</span><span class="token string">'\u897F\u5B89\u96C1\u5854'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> data<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span>setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> onSearch <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'value:::'</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> onChange <span class="token operator">=</span> <span class="token punctuation">(</span>pagination<span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'pagination:::'</span><span class="token punctuation">,</span>pagination<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchTable</span> 
      <span class="token attr-name">rowKey</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> 
      <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span></span> 
      <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span> 
      <span class="token attr-name">onSearch</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onSearch<span class="token punctuation">}</span></span> 
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>



ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> SearchTable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pmbase'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'\u5E8F\u53F7'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'index'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'index'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isSearch</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">text<span class="token punctuation">,</span>record<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span><span class="token operator">=></span>index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'\u59D3\u540D'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">valueType</span><span class="token operator">:</span><span class="token string">'text'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'\u5E74\u9F84'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">valueType</span><span class="token operator">:</span><span class="token string">'select'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">valueData</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">key</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">key</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'\u4F4F\u5740'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">valueType</span><span class="token operator">:</span><span class="token string">'text'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isSearch</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">dataSource</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">89</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span>i<span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u5F20\u4E09</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">16</span><span class="token operator">+</span>i<span class="token punctuation">,</span>
      <span class="token literal-property property">address</span><span class="token operator">:</span><span class="token string">'\u897F\u5B89\u96C1\u5854'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> data<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">const</span> <span class="token function-variable function">Demo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span>setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onSearch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'value:::'</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">pagination</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'pagination:::'</span><span class="token punctuation">,</span>pagination<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SearchTable</span></span> 
      <span class="token attr-name">rowKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> 
      <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span></span> 
      <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span> 
      <span class="token attr-name">onSearch</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSearch<span class="token punctuation">}</span></span> 
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>



ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){var R=u(0),O=u(48);function k(s){return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},k(s)}var r=g(u(0)),v=u(2991);function y(s){if(typeof WeakMap!="function")return null;var n=new WeakMap,a=new WeakMap;return(y=function(p){return p?a:n})(s)}function g(s,n){if(!n&&s&&s.__esModule)return s;if(s===null||k(s)!=="object"&&typeof s!="function")return{default:s};var a=y(n);if(a&&a.has(s))return a.get(s);var t={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in s)if(e!=="default"&&Object.prototype.hasOwnProperty.call(s,e)){var o=p?Object.getOwnPropertyDescriptor(s,e):null;o&&(o.get||o.set)?Object.defineProperty(t,e,o):t[e]=s[e]}return t.default=s,a&&a.set(s,t),t}function h(s,n){return w(s)||f(s,n)||S(s,n)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(s,n){if(!!s){if(typeof s=="string")return m(s,n);var a=Object.prototype.toString.call(s).slice(8,-1);if(a==="Object"&&s.constructor&&(a=s.constructor.name),a==="Map"||a==="Set")return Array.from(s);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return m(s,n)}}function m(s,n){(n==null||n>s.length)&&(n=s.length);for(var a=0,t=new Array(n);a<n;a++)t[a]=s[a];return t}function f(s,n){var a=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(a!=null){var t=[],p=!0,e=!1,o,c;try{for(a=a.call(s);!(p=(o=a.next()).done)&&(t.push(o.value),!(n&&t.length===n));p=!0);}catch(l){e=!0,c=l}finally{try{!p&&a.return!=null&&a.return()}finally{if(e)throw c}}return t}}function w(s){if(Array.isArray(s))return s}var x=[{title:"\u5E8F\u53F7",dataIndex:"index",key:"index",isSearch:!1,render:function(n,a,t){return t+1}},{title:"\u59D3\u540D",dataIndex:"name",key:"name",valueType:"text"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age",valueType:"select",valueData:[{key:1,value:1},{key:2,value:2}]},{title:"\u4F4F\u5740",dataIndex:"address",key:"address",valueType:"text",isSearch:!1}],T=function(){for(var n=[],a=0;a<89;a++)n.push({id:a,name:"\u5F20\u4E09".concat(a),age:16+a,address:"\u897F\u5B89\u96C1\u5854"});return n},D=function(){var n=(0,r.useState)(T),a=h(n,2),t=a[0],p=a[1],e=function(l){console.log("value:::",l)},o=function(l){console.log("pagination:::",l)};return r.default.createElement(v.SearchTable,{rowKey:"id",columns:x,dataSource:t,onSearch:e,onChange:o})};return r.default.createElement(D,null)}}},3021:function(d,I,u){d.exports={content:{"zh-CN":[["ul",["li",["p","\u53EF\u9009\u884C\u641C\u7D22\u8868\u683C"]],["li"]]],"en-US":[]},meta:{order:2,title:{"zh-CN":"\u53EF\u9009\u884C\u8868\u683C","en-US":"Type"},filename:"components/searchtable/demo/selectedTable.md",id:"components-searchtable-demo-selectedTable"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Button<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> SearchTable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pmbase'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token punctuation">:</span> <span class="token string">'\u5E8F\u53F7'</span><span class="token punctuation">,</span>
    dataIndex<span class="token punctuation">:</span> <span class="token string">'index'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'index'</span><span class="token punctuation">,</span>
    isSearch<span class="token punctuation">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
    render<span class="token punctuation">:</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span>record<span class="token punctuation">,</span>index<span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span>index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token punctuation">:</span> <span class="token string">'\u59D3\u540D'</span><span class="token punctuation">,</span>
    dataIndex<span class="token punctuation">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    valueType<span class="token punctuation">:</span><span class="token string">'text'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token punctuation">:</span> <span class="token string">'\u5E74\u9F84'</span><span class="token punctuation">,</span>
    dataIndex<span class="token punctuation">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
    valueType<span class="token punctuation">:</span><span class="token string">'select'</span><span class="token punctuation">,</span>
    valueData<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span>key<span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span>value<span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>key<span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">,</span>value<span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token punctuation">:</span> <span class="token string">'\u4F4F\u5740'</span><span class="token punctuation">,</span>
    dataIndex<span class="token punctuation">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
    valueType<span class="token punctuation">:</span><span class="token string">'text'</span><span class="token punctuation">,</span>
    isSearch<span class="token punctuation">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

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

<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span>setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> onSearch <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'value:::'</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> doExport <span class="token operator">=</span> <span class="token punctuation">(</span>selectedKeys<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selectedKeys:::'</span><span class="token punctuation">,</span>selectedKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchTable</span> 
      <span class="token attr-name">rowKey</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> 
      <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span></span> 
      <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span> 
      <span class="token attr-name">onSearch</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onSearch<span class="token punctuation">}</span></span> 
      <span class="token attr-name">isRowSelection</span>
      <span class="token attr-name">actionRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>selectedRowKeys<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span>
        <span class="token operator">&lt;</span>Button key<span class="token operator">=</span><span class="token string">"out"</span> onClick<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token function">doExport</span><span class="token punctuation">(</span>selectedRowKeys<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          \u5BFC\u51FA
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span>
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Button<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> SearchTable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pmbase'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'\u5E8F\u53F7'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'index'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'index'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isSearch</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">text<span class="token punctuation">,</span>record<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span><span class="token operator">=></span>index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'\u59D3\u540D'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">valueType</span><span class="token operator">:</span><span class="token string">'text'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'\u5E74\u9F84'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">valueType</span><span class="token operator">:</span><span class="token string">'select'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">valueData</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">key</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">key</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'\u4F4F\u5740'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">valueType</span><span class="token operator">:</span><span class="token string">'text'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isSearch</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

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

<span class="token keyword">const</span> <span class="token function-variable function">Demo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span>setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onSearch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'value:::'</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token function-variable function">doExport</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">selectedKeys</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selectedKeys:::'</span><span class="token punctuation">,</span>selectedKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SearchTable</span></span> 
      <span class="token attr-name">rowKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> 
      <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span></span> 
      <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span> 
      <span class="token attr-name">onSearch</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSearch<span class="token punctuation">}</span></span> 
      <span class="token attr-name">isRowSelection</span>
      <span class="token attr-name">actionRender</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">selectedRowKeys</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>out<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token function">doExport</span><span class="token punctuation">(</span>selectedRowKeys<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          \u5BFC\u51FA
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){var R=u(0),O=u(48);function k(n){return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},k(n)}var r=h(u(0)),v=u(57),y=u(2991);function g(n){if(typeof WeakMap!="function")return null;var a=new WeakMap,t=new WeakMap;return(g=function(e){return e?t:a})(n)}function h(n,a){if(!a&&n&&n.__esModule)return n;if(n===null||k(n)!=="object"&&typeof n!="function")return{default:n};var t=g(a);if(t&&t.has(n))return t.get(n);var p={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in n)if(o!=="default"&&Object.prototype.hasOwnProperty.call(n,o)){var c=e?Object.getOwnPropertyDescriptor(n,o):null;c&&(c.get||c.set)?Object.defineProperty(p,o,c):p[o]=n[o]}return p.default=n,t&&t.set(n,p),p}function b(n,a){return x(n)||w(n,a)||m(n,a)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(n,a){if(!!n){if(typeof n=="string")return f(n,a);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(n,a)}}function f(n,a){(a==null||a>n.length)&&(a=n.length);for(var t=0,p=new Array(a);t<a;t++)p[t]=n[t];return p}function w(n,a){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var p=[],e=!0,o=!1,c,l;try{for(t=t.call(n);!(e=(c=t.next()).done)&&(p.push(c.value),!(a&&p.length===a));e=!0);}catch(i){o=!0,l=i}finally{try{!e&&t.return!=null&&t.return()}finally{if(o)throw l}}return p}}function x(n){if(Array.isArray(n))return n}var T=[{title:"\u5E8F\u53F7",dataIndex:"index",key:"index",isSearch:!1,render:function(a,t,p){return p+1}},{title:"\u59D3\u540D",dataIndex:"name",key:"name",valueType:"text"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age",valueType:"select",valueData:[{key:1,value:1},{key:2,value:2}]},{title:"\u4F4F\u5740",dataIndex:"address",key:"address",valueType:"text",isSearch:!1}],D=[{id:1,name:"\u5F20\u4E09",age:16,address:"\u897F\u5B89\u96C1\u5854"},{id:2,name:"\u674E\u56DB",age:25,address:"\u897F\u5B89\u957F\u5B89"},{id:3,name:"\u738B\u4E94",age:33,address:"\u897F\u5B89\u7891\u6797"}],s=function(){var a=(0,r.useState)(D),t=b(a,2),p=t[0],e=t[1],o=function(i){console.log("value:::",i)},c=function(i){console.log("selectedKeys:::",i)};return r.default.createElement(y.SearchTable,{rowKey:"id",columns:T,dataSource:p,onSearch:o,isRowSelection:!0,actionRender:function(i){return[r.default.createElement(v.Button,{key:"out",onClick:function(){c(i)}},"\u5BFC\u51FA")]}})};return r.default.createElement(s,null)}}}}]);
