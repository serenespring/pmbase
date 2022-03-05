(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{2893:function(a,t,n){a.exports={basic:n(3019)}},3019:function(a,t,n){a.exports={content:{"zh-CN":[["ul",["li",["p","\u57FA\u4E8Eecharts-for-react"]],["li",["p",["a",{title:null,href:"https://git.hust.cc/echarts-for-react/"},"\u53C2\u8003\u6587\u6863"]]]]],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u56FE\u8868","en-US":"Type"},filename:"components/reactecharts/demo/basic.md",id:"components-reactecharts-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ReactECharts <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pmbase'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
    title<span class="token punctuation">:</span> <span class="token punctuation">{</span>
      text<span class="token punctuation">:</span> <span class="token string">'\u5806\u53E0\u533A\u57DF\u56FE'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    tooltip <span class="token punctuation">:</span> <span class="token punctuation">{</span>
      trigger<span class="token punctuation">:</span> <span class="token string">'axis'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    legend<span class="token punctuation">:</span> <span class="token punctuation">{</span>
      data<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token string">'\u90AE\u4EF6\u8425\u9500'</span><span class="token punctuation">,</span><span class="token string">'\u8054\u76DF\u5E7F\u544A'</span><span class="token punctuation">,</span><span class="token string">'\u89C6\u9891\u5E7F\u544A'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    toolbox<span class="token punctuation">:</span> <span class="token punctuation">{</span>
      feature<span class="token punctuation">:</span> <span class="token punctuation">{</span>
        saveAsImage<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    grid<span class="token punctuation">:</span> <span class="token punctuation">{</span>
      left<span class="token punctuation">:</span> <span class="token string">'3%'</span><span class="token punctuation">,</span>
      right<span class="token punctuation">:</span> <span class="token string">'4%'</span><span class="token punctuation">,</span>
      bottom<span class="token punctuation">:</span> <span class="token string">'3%'</span><span class="token punctuation">,</span>
      containLabel<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    xAxis <span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        type <span class="token punctuation">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span>
        boundaryGap <span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        data <span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'\u5468\u4E00'</span><span class="token punctuation">,</span><span class="token string">'\u5468\u4E8C'</span><span class="token punctuation">,</span><span class="token string">'\u5468\u4E09'</span><span class="token punctuation">,</span><span class="token string">'\u5468\u56DB'</span><span class="token punctuation">,</span><span class="token string">'\u5468\u4E94'</span><span class="token punctuation">,</span><span class="token string">'\u5468\u516D'</span><span class="token punctuation">,</span><span class="token string">'\u5468\u65E5'</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    yAxis <span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        type <span class="token punctuation">:</span> <span class="token string">'value'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    series <span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name<span class="token punctuation">:</span><span class="token string">'\u90AE\u4EF6\u8425\u9500'</span><span class="token punctuation">,</span>
        type<span class="token punctuation">:</span><span class="token string">'line'</span><span class="token punctuation">,</span>
        stack<span class="token punctuation">:</span> <span class="token string">'\u603B\u91CF'</span><span class="token punctuation">,</span>
        areaStyle<span class="token punctuation">:</span> <span class="token punctuation">{</span>normal<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        data<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">132</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">134</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">210</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        name<span class="token punctuation">:</span><span class="token string">'\u8054\u76DF\u5E7F\u544A'</span><span class="token punctuation">,</span>
        type<span class="token punctuation">:</span><span class="token string">'line'</span><span class="token punctuation">,</span>
        stack<span class="token punctuation">:</span> <span class="token string">'\u603B\u91CF'</span><span class="token punctuation">,</span>
        areaStyle<span class="token punctuation">:</span> <span class="token punctuation">{</span>normal<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        data<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token number">220</span><span class="token punctuation">,</span> <span class="token number">182</span><span class="token punctuation">,</span> <span class="token number">191</span><span class="token punctuation">,</span> <span class="token number">234</span><span class="token punctuation">,</span> <span class="token number">290</span><span class="token punctuation">,</span> <span class="token number">330</span><span class="token punctuation">,</span> <span class="token number">310</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        name<span class="token punctuation">:</span><span class="token string">'\u89C6\u9891\u5E7F\u544A'</span><span class="token punctuation">,</span>
        type<span class="token punctuation">:</span><span class="token string">'line'</span><span class="token punctuation">,</span>
        stack<span class="token punctuation">:</span> <span class="token string">'\u603B\u91CF'</span><span class="token punctuation">,</span>
        areaStyle<span class="token punctuation">:</span> <span class="token punctuation">{</span>normal<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        data<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">232</span><span class="token punctuation">,</span> <span class="token number">201</span><span class="token punctuation">,</span> <span class="token number">154</span><span class="token punctuation">,</span> <span class="token number">190</span><span class="token punctuation">,</span> <span class="token number">330</span><span class="token punctuation">,</span> <span class="token number">410</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactECharts</span> <span class="token attr-name">option</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>option<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>


ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ReactECharts <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pmbase'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Demo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'\u5806\u53E0\u533A\u57DF\u56FE'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tooltip</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">'axis'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'\u90AE\u4EF6\u8425\u9500'</span><span class="token punctuation">,</span><span class="token string">'\u8054\u76DF\u5E7F\u544A'</span><span class="token punctuation">,</span><span class="token string">'\u89C6\u9891\u5E7F\u544A'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">toolbox</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">feature</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">saveAsImage</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">'3%'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">'4%'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">'3%'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">containLabel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">xAxis</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span> <span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">boundaryGap</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'\u5468\u4E00'</span><span class="token punctuation">,</span><span class="token string">'\u5468\u4E8C'</span><span class="token punctuation">,</span><span class="token string">'\u5468\u4E09'</span><span class="token punctuation">,</span><span class="token string">'\u5468\u56DB'</span><span class="token punctuation">,</span><span class="token string">'\u5468\u4E94'</span><span class="token punctuation">,</span><span class="token string">'\u5468\u516D'</span><span class="token punctuation">,</span><span class="token string">'\u5468\u65E5'</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">yAxis</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span> <span class="token operator">:</span> <span class="token string">'value'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">series</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'\u90AE\u4EF6\u8425\u9500'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">'line'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">stack</span><span class="token operator">:</span> <span class="token string">'\u603B\u91CF'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">132</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">134</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">210</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'\u8054\u76DF\u5E7F\u544A'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">'line'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">stack</span><span class="token operator">:</span> <span class="token string">'\u603B\u91CF'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">220</span><span class="token punctuation">,</span> <span class="token number">182</span><span class="token punctuation">,</span> <span class="token number">191</span><span class="token punctuation">,</span> <span class="token number">234</span><span class="token punctuation">,</span> <span class="token number">290</span><span class="token punctuation">,</span> <span class="token number">330</span><span class="token punctuation">,</span> <span class="token number">310</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'\u89C6\u9891\u5E7F\u544A'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">'line'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">stack</span><span class="token operator">:</span> <span class="token string">'\u603B\u91CF'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">232</span><span class="token punctuation">,</span> <span class="token number">201</span><span class="token punctuation">,</span> <span class="token number">154</span><span class="token punctuation">,</span> <span class="token number">190</span><span class="token punctuation">,</span> <span class="token number">330</span><span class="token punctuation">,</span> <span class="token number">410</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ReactECharts</span></span> <span class="token attr-name">option</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>option<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>


ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){var k=n(0),i=n(48),p=e(n(0)),o=n(2991);function e(s){return s&&s.__esModule?s:{default:s}}var c=function(){var u={title:{text:"\u5806\u53E0\u533A\u57DF\u56FE"},tooltip:{trigger:"axis"},legend:{data:["\u90AE\u4EF6\u8425\u9500","\u8054\u76DF\u5E7F\u544A","\u89C6\u9891\u5E7F\u544A"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D","\u5468\u65E5"]}],yAxis:[{type:"value"}],series:[{name:"\u90AE\u4EF6\u8425\u9500",type:"line",stack:"\u603B\u91CF",areaStyle:{normal:{}},data:[120,132,101,134,90,230,210]},{name:"\u8054\u76DF\u5E7F\u544A",type:"line",stack:"\u603B\u91CF",areaStyle:{normal:{}},data:[220,182,191,234,290,330,310]},{name:"\u89C6\u9891\u5E7F\u544A",type:"line",stack:"\u603B\u91CF",areaStyle:{normal:{}},data:[150,232,201,154,190,330,410]}]};return p.default.createElement(o.ReactECharts,{option:u})};return p.default.createElement(c,null)}}}}]);
