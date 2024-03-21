"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9431],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>s});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),p=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(g.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,g=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),y=p(n),c=a,s=y["".concat(g,".").concat(c)]||y[c]||m[c]||l;return n?r.createElement(s,i(i({ref:t},d),{},{components:n})):r.createElement(s,i({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[y]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(8168),a=(n(6540),n(5680));const l={title:"Execution",sidebar_label:"Execution",sidebar_position:2},i=void 0,o={unversionedId:"v3/websocket/private/execution",id:"v3/websocket/private/execution",title:"Execution",description:"Subscribe to the execution stream to see your executions in real-time.",source:"@site/docs/v3/websocket/private/execution.mdx",sourceDirName:"v3/websocket/private",slug:"/v3/websocket/private/execution",permalink:"/docs/v3/websocket/private/execution",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Execution",sidebar_label:"Execution",sidebar_position:2},sidebar:"v3SideBar",previous:{title:"Position",permalink:"/docs/v3/websocket/private/position"},next:{title:"Order",permalink:"/docs/v3/websocket/private/order"}},g={},p=[{value:"Response Parameters",id:"response-parameters",level:3},{value:"Subscribe Example",id:"subscribe-example",level:3},{value:"Stream Example",id:"stream-example",level:3}],d={toc:p},y="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(y,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Subscribe to the execution stream to see your executions in ",(0,a.yg)("strong",{parentName:"p"},"real-time"),"."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"You may have multiple executions for one order in a single message.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Topic:")," ",(0,a.yg)("inlineCode",{parentName:"p"},"execution")),(0,a.yg)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Comments"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"id"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Message ID")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"topic"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Topic name")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"creationTime"),(0,a.yg)("td",{parentName:"tr",align:"left"},"number"),(0,a.yg)("td",{parentName:"tr",align:null},"Data created timestamp (ms)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"data"),(0,a.yg)("td",{parentName:"tr",align:"left"},"array"),(0,a.yg)("td",{parentName:"tr",align:null},"Object")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> ",(0,a.yg)("a",{parentName:"td",href:"../../enum#category"},"category")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Product type ",(0,a.yg)("ul",null,(0,a.yg)("li",null,"Normal account: ",(0,a.yg)("inlineCode",{parentName:"td"},"linear"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"inverse"),".")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> symbol"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Symbol name")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> orderId"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Order ID")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> orderLinkId"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"User customized order ID")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> side"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Side. ",(0,a.yg)("inlineCode",{parentName:"td"},"Buy"),",",(0,a.yg)("inlineCode",{parentName:"td"},"Sell"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> orderPrice"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Order price.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> orderQty"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Order qty.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> leavesQty"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"The remaining qty not executed.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> orderType"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Order type. ",(0,a.yg)("inlineCode",{parentName:"td"},"Market"),",",(0,a.yg)("inlineCode",{parentName:"td"},"Limit"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> ",(0,a.yg)("a",{parentName:"td",href:"../../enum#stopordertype"},"stopOrderType")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Stop order type. If the order is not stop order, any type is not returned.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> execFee"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Executed trading fee.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> execId"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Execution ID")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> execPrice"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Execution price")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> execQty"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Execution qty")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> ",(0,a.yg)("a",{parentName:"td",href:"../../enum#exectype"},"execType")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Executed type.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> execValue"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Executed order value.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> execTime"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Executed timestamp\uff08ms\uff09")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> isMaker"),(0,a.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"Is maker order. ",(0,a.yg)("inlineCode",{parentName:"td"},"true"),": maker, ",(0,a.yg)("inlineCode",{parentName:"td"},"false"),": taker")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> feeRate"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Trading fee rate.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> closedSize"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Closed position size")))),(0,a.yg)("h3",{id:"subscribe-example"},"Subscribe Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "op": "subscribe",\n    "args": [\n        "execution"\n    ]\n}\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'var url = require(\'url\');\nvar WebSocket = require(\'ws\');\nvar crypto = require(\'crypto\');\nvar endpoint = "wss://stream-testnet.zoomex.com/v3/private"\nconsole.log(\'attempting to connect to WebSocket %j\', endpoint);\nvar client = new WebSocket(endpoint);\nconst apiKey="XXXXXXXXX";\nconst apiSecret="XXXXXXXXX";\nclient.on(\'open\', function () {\n    console.log(\'"open" event!\');\n    console.log(\'WebSocket Client Connected\');\n    const expires = new Date().getTime() + 10000;\n    const signature = crypto.createHmac("sha256", apiSecret).update("GET/realtime" + expires).digest("hex");\n    const payload={\n        op: "auth",\n        args: [apiKey, expires.toFixed(0), signature],\n    }\n    client.send(JSON.stringify(payload));\n    setInterval(()=>{client.ping()}, 30000);\n    client.ping();\n    client.send(JSON.stringify({"op": "subscribe", "args": [\'execution\']}));\n});\n\nclient.on(\'message\', function (data) {\n    console.log(\'"message" event! %j\', JSON.parse(Buffer.from(data).toString()));\n});\nclient.on(\'ping\', function (data, flags) {\n    console.log("ping received");\n});\nclient.on(\'pong\', function (data, flags) {\n    console.log("pong received");\n});\n')),(0,a.yg)("h3",{id:"stream-example"},"Stream Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "592324803b2785-26fa-4214-9963-bdd4727f07be",\n    "topic": "execution",\n    "creationTime": 1672364174455,\n    "data": [\n        {\n            "category": "linear",\n            "symbol": "XRPUSDT",\n            "execFee": "0.005061",\n            "execId": "7e2ae69c-4edf-5800-a352-893d52b446aa",\n            "execPrice": "0.3374",\n            "execQty": "25",\n            "execType": "Trade",\n            "execValue": "8.435",\n            "isMaker": false,\n            "feeRate": "0.0006",\n            "leavesQty": "0",\n            "orderId": "f6e324ff-99c2-4e89-9739-3086e47f9381",\n            "orderLinkId": "",\n            "orderPrice": "0.3207",\n            "orderQty": "25",\n            "orderType": "Market",\n            "stopOrderType": "UNKNOWN",\n            "side": "Sell",\n            "execTime": "1672364174443",\n            "closedSize": ""\n        }\n    ]\n}\n')))}m.isMDXComponent=!0}}]);