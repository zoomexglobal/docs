"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[181],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>c});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),o=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},g="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),g=o(r),s=n,c=g["".concat(p,".").concat(s)]||g[s]||k[s]||l;return r?a.createElement(c,i(i({ref:e},m),{},{components:r})):a.createElement(c,i({ref:e},m))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=s;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d[g]="string"==typeof t?t:n,i[1]=d;for(var o=2;o<l;o++)i[o]=r[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6857:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var a=r(7462),n=(r(7294),r(3905));const l={title:"\u67e5\u8a62\u4ea4\u6613\u54e1\u6b77\u53f2\u5e36\u55ae\u8a02\u55ae",sidebar_label:"\u67e5\u8a62\u4ea4\u6613\u54e1\u6b77\u53f2\u5e36\u55ae\u8a02\u55ae",sidebar_position:3,slug:"/copy-trade/trade/get-order"},i=void 0,d={unversionedId:"v3/copy-trade/rest-trade/order/order-list",id:"v3/copy-trade/rest-trade/order/order-list",title:"\u67e5\u8a62\u4ea4\u6613\u54e1\u6b77\u53f2\u5e36\u55ae\u8a02\u55ae",description:"\u67e5\u8a62\u4ea4\u6613\u54e1\u5e36\u55ae\u8a02\u55ae",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/copy-trade/rest-trade/order/order-list.mdx",sourceDirName:"v3/copy-trade/rest-trade/order",slug:"/copy-trade/trade/get-order",permalink:"/doc-v3/zh-TW/copy-trade/trade/get-order",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u67e5\u8a62\u4ea4\u6613\u54e1\u6b77\u53f2\u5e36\u55ae\u8a02\u55ae",sidebar_label:"\u67e5\u8a62\u4ea4\u6613\u54e1\u6b77\u53f2\u5e36\u55ae\u8a02\u55ae",sidebar_position:3,slug:"/copy-trade/trade/get-order"},sidebar:"v3SideBar",previous:{title:"\u8a2d\u7f6e\u6b62\u76c8\u6b62\u640d",permalink:"/doc-v3/zh-TW/copy-trade/trade/trading-stop"},next:{title:"\u4ea4\u6613\u54e1\u53d6\u6d88\u8a02\u55ae",permalink:"/doc-v3/zh-TW/copy-trade/trade/cancel"}},p={},o=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],m={toc:o},g="wrapper";function k(t){let{components:e,...r}=t;return(0,n.kt)(g,(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u67e5\u8a62\u4ea4\u6613\u54e1\u5e36\u55ae\u8a02\u55ae"),(0,n.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,n.kt)("p",null,"GET ",(0,n.kt)("inlineCode",{parentName:"p"},"/cloud/contract/v3/private/copytrading/order/list")),(0,n.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9808"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#symbol"},"symbol")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u985e\u578b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55aeID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6a5f\u69cb\u81ea\u5b9a\u7fa9\u8a02\u55aeID, \u6700\u5927\u9577\u5ea636\u4f4d\uff0c\u4e14\u540c\u4e00\u6a5f\u69cb\u4e0b\u81ea\u5b9a\u7fa9ID\u4e0d\u53ef\u91cd\u5fa9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"copyTradeOrderType"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8ddf\u55ae\u4ea4\u6613\u59d4\u6258\u55ae\u985e\u578b")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55aeID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6a5f\u69cb\u81ea\u5b9a\u7fa9\u8a02\u55aeID, \u6700\u5927\u9577\u5ea636\u4f4d\uff0c\u4e14\u540c\u4e00\u6a5f\u69cb\u4e0b\u81ea\u5b9a\u7fa9ID\u4e0d\u53ef\u91cd\u5fa9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u985e\u578b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"side"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u65b9\u5411")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"price"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u59d4\u6258\u50f9\u683c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"qty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u59d4\u6258\u6578\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#timeinforce"},"timeInForce")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u57f7\u884c\u7b56\u7565")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"isIsolated"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u9010\u5009\uff0ctrue-\u9010\u5009 false-\u5168\u5009")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"leverage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9010\u5009\u6a21\u5f0f\u4e0b, \u503c\u70ba\u7528\u6236\u8a2d\u7f6e\u7684\u6760\u687f\uff1b\u5168\u5009\u6a21\u5f0f\u4e0b\uff0c\u503c\u70ba\u7576\u524d\u98a8\u96aa\u9650\u984d\u4e0b\u6700\u5927\u6760\u687f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#copytradeorderstatus"},"copyTradeOrderStatus")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8ddf\u55ae\u4ea4\u6613\u8a18\u9304\u985e\u578b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"leavesQty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5269\u4f59\u59d4\u6258\u6578\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"leavesValue"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5269\u4f59\u639b\u55ae\u6578\u91cf\u5c0d\u61c9\u7684\u9810\u4f30\u50f9\u503c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cumExecValue"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7d2f\u8a08\u6210\u4ea4\u50f9\u503c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cumExecFee"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7d2f\u8a08\u6210\u4ea4\u624b\u7e8c\u8cbb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"takeProfit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b62\u76c8\u50f9\u683c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stopLoss"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b62\u640d\u50f9\u683c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"tpTriggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b62\u76c8\u6fc0\u6d3b\u50f9\u683c\u985e\u578b\uff0c\u9ed8\u8a8d\u70baLastPrice")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"slTriggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b62\u640d\u6fc0\u6d3b\u50f9\u683c\u985e\u578b\uff0c\u9ed8\u8a8d\u70baLastPrice")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"createdTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5275\u5efa\u6642\u9593 (\u6beb\u79d2)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"updatedTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u6642\u9593 (\u6beb\u79d2)")))),(0,n.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://openapi-testnet.zoomex.com/cloud/contract/v3/private/copytrading/order/list?timestamp=1689845343595&api_key=XXXXX&recv_window=5000&sign=XXXXX'\n")),(0,n.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "list": [\n            {\n                "orderId": "241588fb-1e69-46f2-8446-9278e40902bf",\n                "symbol": "BTCUSDT",\n                "orderLinkId": "",\n                "side": "Sell",\n                "copyTradeOrderStatus": "OpenOrderFilled",\n                "price": "30285.00",\n                "qty": "1",\n                "timeInForce": "GoodTillCancel",\n                "leavesQty": "0",\n                "isIsolated": true,\n                "leavesValue": "0",\n                "leverage": "25",\n                "cumExecValue": "30287.6",\n                "cumExecFee": "18.17256",\n                "createdTime": "1689845238176",\n                "updatedTime": "1689845238192",\n                "takeProfit": "29000.00",\n                "stopLoss": "32000.00",\n                "tpTriggerBy": "MarkPrice",\n                "slTriggerBy": "IndexPrice"\n            }\n        ]\n    }\n}\n')))}k.isMDXComponent=!0}}]);