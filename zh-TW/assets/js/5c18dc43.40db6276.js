"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[744],{5680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>u});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),g=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=g(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=g(r),y=a,u=c["".concat(p,".").concat(y)]||c[y]||d[y]||l;return r?n.createElement(u,o(o({ref:t},s),{},{components:r})):n.createElement(u,o({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var g=2;g<l;g++)o[g]=r[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8170:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var n=r(8168),a=(r(6540),r(5680));const l={title:"\u4ea4\u6613\u54e1\u8a2d\u7f6e\u5e36\u55ae\u69d3\u687f",sidebar_label:"\u4ea4\u6613\u54e1\u8a2d\u7f6e\u5e36\u55ae\u69d3\u687f",sidebar_position:3,slug:"/copy-trade/position/leverage"},o=void 0,i={unversionedId:"v3/copy-trade/rest-trade/position/set-leverage",id:"v3/copy-trade/rest-trade/position/set-leverage",title:"\u4ea4\u6613\u54e1\u8a2d\u7f6e\u5e36\u55ae\u69d3\u687f",description:"\u4ea4\u6613\u54e1\u8a2d\u7f6e\u5e36\u55ae\u69d3\u687f, \u8a2d\u7f6e\u69d3\u687f\u53ea\u80fd\u8a2d\u7f6e\u6574\u6578",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/copy-trade/rest-trade/position/set-leverage.mdx",sourceDirName:"v3/copy-trade/rest-trade/position",slug:"/copy-trade/position/leverage",permalink:"/docs/zh-TW/copy-trade/position/leverage",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u4ea4\u6613\u54e1\u8a2d\u7f6e\u5e36\u55ae\u69d3\u687f",sidebar_label:"\u4ea4\u6613\u54e1\u8a2d\u7f6e\u5e36\u55ae\u69d3\u687f",sidebar_position:3,slug:"/copy-trade/position/leverage"},sidebar:"v3SideBar",previous:{title:"\u4ea4\u6613\u54e1\u4e00\u9375\u5e73\u5009",permalink:"/docs/zh-TW/copy-trade/position/close-position"},next:{title:"\u4ea4\u6613\u54e1\u7372\u53d6\u9322\u5305\u4f59\u984d",permalink:"/docs/zh-TW/copy-trade/account/wallet"}},p={},g=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],s={toc:g},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u4ea4\u6613\u54e1\u8a2d\u7f6e\u5e36\u55ae\u69d3\u687f, \u8a2d\u7f6e\u69d3\u687f\u53ea\u80fd\u8a2d\u7f6e\u6574\u6578"),(0,a.yg)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.yg)("p",null,"GET ",(0,a.yg)("inlineCode",{parentName:"p"},"/cloud/contract/v3/private/copytrading/position/set-leverage")),(0,a.yg)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.yg)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9808"),(0,a.yg)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.yg)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"../enum#symbol"},"symbol")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"td"},"true")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5408\u7d04\u985e\u578b")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"buyLeverage"),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"td"},"true")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"\u6760\u687f\uff0c",(0,a.yg)("inlineCode",{parentName:"td"},"buyLeverage"),"\u548c",(0,a.yg)("inlineCode",{parentName:"td"},"sellLeverage"),"\u5fc5\u9808\u50b3\u5165\u76f8\u540c\u53c3\u6578\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"sellLeverage"),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"td"},"true")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"\u6760\u687f\uff0c",(0,a.yg)("inlineCode",{parentName:"td"},"buyLeverage"),"\u548c",(0,a.yg)("inlineCode",{parentName:"td"},"sellLeverage"),"\u5fc5\u9808\u50b3\u5165\u76f8\u540c\u53c3\u6578\u3002")))),(0,a.yg)("h3",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,a.yg)("p",null,"\u7121"),(0,a.yg)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'https://openapi-testnet.zoomex.com/cloud/contract/v3/private/copytrading/position/set-leverage\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{"symbol":"ETHUSDT","buyLeverage":"25","sellLeverage":"25","api_key":"XXXXX","timestamp":1689851024004,"recv_window":5000,"sign":"XXXXX"}\'\n')),(0,a.yg)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {}\n}\n')))}d.isMDXComponent=!0}}]);