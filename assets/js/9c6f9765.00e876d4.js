"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9920],{5680:(e,t,n)=>{n.d(t,{xA:()=>o,yg:()=>u});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,o=g(e,["components","mdxType","originalType","parentName"]),y=m(n),s=r,u=y["".concat(p,".").concat(s)]||y[s]||d[s]||l;return n?a.createElement(u,i(i({ref:t},o),{},{components:n})):a.createElement(u,i({ref:t},o))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var g={};for(var p in t)hasOwnProperty.call(t,p)&&(g[p]=t[p]);g.originalType=e,g[y]="string"==typeof e?e:r,i[1]=g;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>g,toc:()=>m});var a=n(8168),r=(n(6540),n(5680));const l={title:"Get Kline",sidebar_label:"Get Kline",sidebar_position:1},i=void 0,g={unversionedId:"v3/market/kline",id:"v3/market/kline",title:"Get Kline",description:"Query for historical klines (also known as candles/candlesticks). Charts are returned in groups based on the requested interval.",source:"@site/docs/v3/market/kline.mdx",sourceDirName:"v3/market",slug:"/v3/market/kline",permalink:"/docs/v3/market/kline",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Get Kline",sidebar_label:"Get Kline",sidebar_position:1},sidebar:"v3SideBar",previous:{title:"Get Zoomex Server Time",permalink:"/docs/v3/market/time"},next:{title:"Get Mark Price Kline",permalink:"/docs/v3/market/mark-kline"}},p={},m=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],o={toc:m},y="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,a.A)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Query for historical klines (also known as candles/candlesticks). Charts are returned in groups based on the requested interval."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Covers: USDT perpetual / Inverse contract"))),(0,r.yg)("h3",{id:"http-request"},"HTTP Request"),(0,r.yg)("p",null,"GET ",(0,r.yg)("inlineCode",{parentName:"p"},"/cloud/trade/v3/market/kline")),(0,r.yg)("h3",{id:"request-parameters"},"Request Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Required"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Comments"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"../enum#category"},"category")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"true")),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Product type. ",(0,r.yg)("inlineCode",{parentName:"td"},"linear"),",",(0,r.yg)("inlineCode",{parentName:"td"},"inverse"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"../enum#symbol"},"symbol")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("b",null,"true")),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Symbol name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"../enum#interval"},"interval")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("b",null,"true")),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Kline interval. ",(0,r.yg)("inlineCode",{parentName:"td"},"1"),",",(0,r.yg)("inlineCode",{parentName:"td"},"3"),",",(0,r.yg)("inlineCode",{parentName:"td"},"5"),",",(0,r.yg)("inlineCode",{parentName:"td"},"15"),",",(0,r.yg)("inlineCode",{parentName:"td"},"30"),",",(0,r.yg)("inlineCode",{parentName:"td"},"60"),",",(0,r.yg)("inlineCode",{parentName:"td"},"120"),",",(0,r.yg)("inlineCode",{parentName:"td"},"240"),",",(0,r.yg)("inlineCode",{parentName:"td"},"360"),",",(0,r.yg)("inlineCode",{parentName:"td"},"720"),",",(0,r.yg)("inlineCode",{parentName:"td"},"D"),",",(0,r.yg)("inlineCode",{parentName:"td"},"M"),",",(0,r.yg)("inlineCode",{parentName:"td"},"W"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"start"),(0,r.yg)("td",{parentName:"tr",align:"left"},"false"),(0,r.yg)("td",{parentName:"tr",align:"left"},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"The start timestamp (ms)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"end"),(0,r.yg)("td",{parentName:"tr",align:"left"},"false"),(0,r.yg)("td",{parentName:"tr",align:"left"},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"The end timestamp (ms)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"limit"),(0,r.yg)("td",{parentName:"tr",align:"left"},"false"),(0,r.yg)("td",{parentName:"tr",align:"left"},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"Limit for data size per page. ","[",(0,r.yg)("inlineCode",{parentName:"td"},"1"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"1000"),"]",". Default: ",(0,r.yg)("inlineCode",{parentName:"td"},"200"))))),(0,r.yg)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Comments"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"category"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Product type")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"symbol"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Symbol name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"list"),(0,r.yg)("td",{parentName:"tr",align:"left"},"array"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("ul",null,(0,r.yg)("li",null,"An string array of individual candle"),(0,r.yg)("li",null,"Sort in reverse by ",(0,r.yg)("inlineCode",{parentName:"td"},"startTime"))))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> list","[0]",": startTime"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Start time of the candle (ms)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> list","[1]",": openPrice"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Open price")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> list","[2]",": highPrice"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Highest price")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> list","[3]",": lowPrice"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Lowest price")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> list","[4]",": closePrice"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Close price. ",(0,r.yg)("em",{parentName:"td"},"Is the last traded price when the candle is not closed"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> list","[5]",": volume"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Trade volume. ",(0,r.yg)("em",{parentName:"td"},"Unit of contract: pieces of contract."))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> list","[6]",": turnover"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Turnover. ",(0,r.yg)("em",{parentName:"td"},"Unit of figure: quantity of quota coin"))))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"request-example"},"Request Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"GET /cloud/trade/v3/market/kline?category=inverse&symbol=BTCUSD&interval=60&start=1670601600000&end=1670608800000 HTTP/1.1\nHost: openapi-testnet.zoomex.com\n")),(0,r.yg)("h3",{id:"response-example"},"Response Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "symbol": "BTCUSD",\n        "category": "inverse",\n        "list": [\n            [\n                "1670608800000",\n                "17071",\n                "17073",\n                "17027",\n                "17055.5",\n                "268611",\n                "15.74462667"\n            ],\n            [\n                "1670605200000",\n                "17071.5",\n                "17071.5",\n                "17061",\n                "17071",\n                "4177",\n                "0.24469757"\n            ],\n            [\n                "1670601600000",\n                "17086.5",\n                "17088",\n                "16978",\n                "17071.5",\n                "6356",\n                "0.37288112"\n            ]\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672025956592\n}\n')))}d.isMDXComponent=!0}}]);