"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5245],{5680:(e,t,r)=>{r.d(t,{xA:()=>y,yg:()=>c});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),o=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},y=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,y=g(e,["components","mdxType","originalType","parentName"]),m=o(r),d=a,c=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return r?n.createElement(c,i(i({ref:t},y),{},{components:r})):n.createElement(c,i({ref:t},y))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var g={};for(var p in t)hasOwnProperty.call(t,p)&&(g[p]=t[p]);g.originalType=e,g[m]="string"==typeof e?e:a,i[1]=g;for(var o=2;o<l;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5049:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>g,toc:()=>o});var n=r(8168),a=(r(6540),r(5680));const l={title:"Instrument Info",sidebar_label:"Instrument Info",slug:"/copytrade/public/instrument-info"},i=void 0,g={unversionedId:"v3/copy-trade/rest-public/symbol-info",id:"v3/copy-trade/rest-public/symbol-info",title:"Instrument Info",description:"Get the spec of trading symbols",source:"@site/docs/v3/copy-trade/rest-public/symbol-info.mdx",sourceDirName:"v3/copy-trade/rest-public",slug:"/copytrade/public/instrument-info",permalink:"/docs/copytrade/public/instrument-info",draft:!1,tags:[],version:"current",frontMatter:{title:"Instrument Info",sidebar_label:"Instrument Info",slug:"/copytrade/public/instrument-info"},sidebar:"v3SideBar",previous:{title:"Copy Trade",permalink:"/docs/category/copy-trade"},next:{title:"Create Order",permalink:"/docs/copy-trade/trade/create-order"}},p={},o=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],y={toc:o},m="wrapper";function s(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Get the spec of trading symbols"),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"This is public endpoint, so it does not need authentication")),(0,a.yg)("h3",{id:"http-request"},"HTTP Request"),(0,a.yg)("p",null,"GET ",(0,a.yg)("inlineCode",{parentName:"p"},"/cloud/contract/v3/public/copytrading/symbol/list")),(0,a.yg)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.yg)("p",null,"None"),(0,a.yg)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Comments"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"list"),(0,a.yg)("td",{parentName:"tr",align:"left"},"array"),(0,a.yg)("td",{parentName:"tr",align:null},"Object")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> symbol"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"symbol")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> baseCurrency"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Base currency")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> quoteCurrency"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Quote currency")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> priceScale"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Price scale (the number of decimal places to which a price can be submitted, although the final price may be rounded to conform to the tick_size)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> takerFee"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Taker fee")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> makerFee"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Maker fee")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> fundingInterval"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Funding fee interval")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> leverageFilter"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Object"),(0,a.yg)("td",{parentName:"tr",align:null},"Leverage attributes")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},">> maxLeverage"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Max leverage (indicates the max leverage, assuming the lowest risk limit setting)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},">> minLeverage"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Min leverage")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> priceFilter"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Object"),(0,a.yg)("td",{parentName:"tr",align:null},"Price attributes")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},">> minPrice"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Min price")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},">> maxPrice"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Max price")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},">> tickSize"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Tick size")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> lotSizeFilter"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Object"),(0,a.yg)("td",{parentName:"tr",align:null},"Order attributes")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},">> qtyStep"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Qty step")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},">> maxOrderQty"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Max trading quantity")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},">> minOrderQty"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Min trading quantity")))),(0,a.yg)("h3",{id:"request-example"},"Request Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"curl https://openapi-testnet.zoomex.com/cloud/contract/v3/public/copytrading/symbol/list\n")),(0,a.yg)("h3",{id:"response-example"},"Response Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "list": [\n            {\n                "symbol": "BTCUSDT",\n                "baseCurrency": "BTC",\n                "quoteCurrency": "USDT",\n                "priceScale": "1",\n                "takerFee": "0.00060",\n                "makerFee": "0.00020",\n                "fundingInterval": "480",\n                "leverageFilter": {\n                    "maxLeverage": "100",\n                    "minLeverage": "1"\n                },\n                "priceFilter": {\n                    "minPrice": "0.5",\n                    "maxPrice": "999999.0",\n                    "tickSize": "0.5"\n                },\n                "lotSizeFilter": {\n                    "qtyStep": "0.001",\n                    "maxOrderQty": "100.000",\n                    "minOrderQty": "0.001"\n                }\n            }\n        ]\n    }\n}\n')))}s.isMDXComponent=!0}}]);