"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2136],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>s});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),y=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):g(g({},t),e)),r},p=function(e){var t=y(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=y(r),u=a,s=d["".concat(o,".").concat(u)]||d[u]||m[u]||l;return r?n.createElement(s,g(g({ref:t},p),{},{components:r})):n.createElement(s,g({ref:t},p))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,g=new Array(l);g[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:a,g[1]=i;for(var y=2;y<l;y++)g[y]=r[y];return n.createElement.apply(null,g)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7231:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>g,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>y});var n=r(8168),a=(r(6540),r(5680));const l={title:"Order Book (\u6df1\u5ea6)",sidebar_label:"Order Book (\u6df1\u5ea6)",sidebar_position:5},g=void 0,i={unversionedId:"v3/market/orderbook",id:"v3/market/orderbook",title:"Order Book (\u6df1\u5ea6)",description:"\u7372\u53d6\u6df1\u5ea6\u6578\u64da",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/market/orderbook.mdx",sourceDirName:"v3/market",slug:"/v3/market/orderbook",permalink:"/docs/zh-TW/v3/market/orderbook",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Order Book (\u6df1\u5ea6)",sidebar_label:"Order Book (\u6df1\u5ea6)",sidebar_position:5},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u53ef\u4ea4\u6613\u7522\u54c1\u7684\u898f\u683c\u4fe1\u606f",permalink:"/docs/zh-TW/v3/market/instrument"},next:{title:"\u67e5\u8a62\u6700\u65b0\u884c\u60c5\u4fe1\u606f",permalink:"/docs/zh-TW/v3/market/tickers"}},o={},y=[{value:"HTTP\u8acb\u6c42",id:"http\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],p={toc:y},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u7372\u53d6\u6df1\u5ea6\u6578\u64da"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"\u8986\u84cb\u7bc4\u570d: USDT\u6c38\u7e8c / \u53cd\u5411\u5408\u7d04"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u671f\u8ca8: \u6700\u591a\u8fd4\u56de500\u6a94\u7684\u6578\u64da.")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"\u97ff\u61c9\u662f\u7576\u524d\u6642\u9593\u7684\u5207\u7247\u6578\u64da")),(0,a.yg)("h3",{id:"http\u8acb\u6c42"},"HTTP\u8acb\u6c42"),(0,a.yg)("p",null,"GET ",(0,a.yg)("inlineCode",{parentName:"p"},"/cloud/trade/v3/market/orderbook")),(0,a.yg)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.yg)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,a.yg)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.yg)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"../enum#category"},"category")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"td"},"true")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b. ",(0,a.yg)("inlineCode",{parentName:"td"},"linear"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"inverse"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"../enum#symbol"},"symbol")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"td"},"true")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"limit"),(0,a.yg)("td",{parentName:"tr",align:"left"},"false"),(0,a.yg)("td",{parentName:"tr",align:"left"},"integer"),(0,a.yg)("td",{parentName:"tr",align:null},"\u6df1\u5ea6\u9650\u5236.",(0,a.yg)("ul",null,(0,a.yg)("li",null,(0,a.yg)("inlineCode",{parentName:"td"},"linear"),"&",(0,a.yg)("inlineCode",{parentName:"td"},"inverse"),": ","[",(0,a.yg)("inlineCode",{parentName:"td"},"1"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"500"),"]",",\u9ed8\u8a8d: ",(0,a.yg)("inlineCode",{parentName:"td"},"25"),".")))))),(0,a.yg)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.yg)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.yg)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"s"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"b"),(0,a.yg)("td",{parentName:"tr",align:"left"},"array"),(0,a.yg)("td",{parentName:"tr",align:null},"Bid, \u8cb7\u65b9. \u6309\u7167\u50f9\u683c\u5f9e\u5927\u5230\u5c0f")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> b","[0]"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"\u8cb7\u65b9\u5831\u50f9")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> b","[1]"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"\u8cb7\u65b9\u6578\u91cf")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"a"),(0,a.yg)("td",{parentName:"tr",align:"left"},"array"),(0,a.yg)("td",{parentName:"tr",align:null},"Ask, \u8ce3\u65b9. \u6309\u7167\u50f9\u683c\u5f9e\u5c0f\u5230\u5927")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> a","[0]"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"\u8ce3\u65b9\u5831\u50f9")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> a","[1]"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"\u8ce3\u65b9\u6578\u91cf")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"ts"),(0,a.yg)("td",{parentName:"tr",align:"left"},"integer"),(0,a.yg)("td",{parentName:"tr",align:null},"\u884c\u60c5\u670d\u52d9\u751f\u6210\u6578\u64da\u6642\u9593\u6233\uff08\u6beb\u79d2\uff09")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"u"),(0,a.yg)("td",{parentName:"tr",align:"left"},"integer"),(0,a.yg)("td",{parentName:"tr",align:null},"\u8868\u793a\u6578\u64da\u9023\u7e8c\u6027\u7684id. ",(0,a.yg)("ul",null,(0,a.yg)("li",null,"\u5c0d\u65bc\u671f\u8ca8, \u5b83\u548cwss\u63a8\u9001\u88e1\u7684200\u6a94\u7684",(0,a.yg)("inlineCode",{parentName:"td"},"u"),"\u5c0d\u9f4a")))))),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"GET /cloud/trade/v3/market/orderbook?category=linear&symbol=BTCUSDT HTTP/1.1\nHost: openapi-testnet.zoomex.com\n")),(0,a.yg)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "s": "BTCUSDT",\n        "a": [\n            [\n                "16638.64",\n                "0.008479"\n            ]\n        ],\n        "b": [\n            [\n                "16638.27",\n                "0.305749"\n            ]\n        ],\n        "ts": 1672765737733,\n        "u": 5277055\n    },\n    "retExtInfo": {},\n    "time": 1672765737734\n}\n')))}m.isMDXComponent=!0}}]);