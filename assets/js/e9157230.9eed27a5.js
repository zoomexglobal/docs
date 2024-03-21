"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2161],{5680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>u});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),g=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=g(e.components);return a.createElement(p.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),y=g(r),s=n,u=y["".concat(p,".").concat(s)]||y[s]||d[s]||l;return r?a.createElement(u,o(o({ref:t},m),{},{components:r})):a.createElement(u,o({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[y]="string"==typeof e?e:n,o[1]=i;for(var g=2;g<l;g++)o[g]=r[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3328:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var a=r(8168),n=(r(6540),r(5680));const l={title:"Get Orderbook",sidebar_label:"Get Orderbook",sidebar_position:5},o=void 0,i={unversionedId:"v3/market/orderbook",id:"v3/market/orderbook",title:"Get Orderbook",description:"Query for orderbook depth data.",source:"@site/docs/v3/market/orderbook.mdx",sourceDirName:"v3/market",slug:"/v3/market/orderbook",permalink:"/docs/v3/market/orderbook",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Get Orderbook",sidebar_label:"Get Orderbook",sidebar_position:5},sidebar:"v3SideBar",previous:{title:"Get Instruments Info",permalink:"/docs/v3/market/instrument"},next:{title:"Get Tickers",permalink:"/docs/v3/market/tickers"}},p={},g=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],m={toc:g},y="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(y,(0,a.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Query for orderbook depth data."),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"Covers: USDT perpetual / Inverse contract"))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"future: 500-level of orderbook data")),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"The response is in the snapshot format.")),(0,n.yg)("h3",{id:"http-request"},"HTTP Request"),(0,n.yg)("p",null,"GET ",(0,n.yg)("inlineCode",{parentName:"p"},"/cloud/trade/v3/market/orderbook")),(0,n.yg)("h3",{id:"request-parameters"},"Request Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Required"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Comments"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"../enum#category"},"category")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("strong",{parentName:"td"},"true")),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Product type. ",(0,n.yg)("inlineCode",{parentName:"td"},"linear"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"inverse"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("strong",{parentName:"td"},"true")),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Symbol name")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"limit"),(0,n.yg)("td",{parentName:"tr",align:"left"},"false"),(0,n.yg)("td",{parentName:"tr",align:"left"},"integer"),(0,n.yg)("td",{parentName:"tr",align:null},"Limit size for each bid and ask",(0,n.yg)("ul",null,(0,n.yg)("li",null,(0,n.yg)("inlineCode",{parentName:"td"},"linear"),"&",(0,n.yg)("inlineCode",{parentName:"td"},"inverse"),": ","[",(0,n.yg)("inlineCode",{parentName:"td"},"1"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"500"),"]",". Default: ",(0,n.yg)("inlineCode",{parentName:"td"},"25"),".")))))),(0,n.yg)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Comments"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"s"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Symbol name")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"b"),(0,n.yg)("td",{parentName:"tr",align:"left"},"array"),(0,n.yg)("td",{parentName:"tr",align:null},"Bid, buyer. Sort by price desc")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"> b","[0]"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Bid price")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"> b","[1]"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Bid size")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"a"),(0,n.yg)("td",{parentName:"tr",align:"left"},"array"),(0,n.yg)("td",{parentName:"tr",align:null},"Ask, seller. Order by price asc")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"> a","[0]"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Ask price")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"> a","[1]"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Ask size")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"ts"),(0,n.yg)("td",{parentName:"tr",align:"left"},"integer"),(0,n.yg)("td",{parentName:"tr",align:null},"The timestamp (ms) that the system generates the data")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"u"),(0,n.yg)("td",{parentName:"tr",align:"left"},"integer"),(0,n.yg)("td",{parentName:"tr",align:null},"Update ID, is always in sequence",(0,n.yg)("ul",null,(0,n.yg)("li",null,"For future, it is corresponding to ",(0,n.yg)("inlineCode",{parentName:"td"},"u")," in the wss 200-level orderbook")))))),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"request-example"},"Request Example"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"GET /cloud/trade/v3/market/orderbook?category=linear&symbol=BTCUSDT HTTP/1.1\nHost: openapi-testnet.zoomex.com\n")),(0,n.yg)("h3",{id:"response-example"},"Response Example"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "s": "BTCUSDT",\n        "a": [\n            [\n                "16638.64",\n                "0.008479"\n            ]\n        ],\n        "b": [\n            [\n                "16638.27",\n                "0.305749"\n            ]\n        ],\n        "ts": 1672765737733,\n        "u": 5277055\n    },\n    "retExtInfo": {},\n    "time": 1672765737734\n}\n')))}d.isMDXComponent=!0}}]);