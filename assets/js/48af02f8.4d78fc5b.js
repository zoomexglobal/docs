"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6673],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var r=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=r.createContext({}),s=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},d=function(t){var e=s(t.components);return r.createElement(o.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=s(n),p=l,k=m["".concat(o,".").concat(p)]||m[p]||c[p]||a;return n?r.createElement(k,u(u({ref:e},d),{},{components:n})):r.createElement(k,u({ref:e},d))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,u=new Array(a);u[0]=p;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[m]="string"==typeof t?t:l,u[1]=i;for(var s=2;s<a;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(t,e,n)=>{n.d(e,{Z:()=>u});var r=n(7294),l=n(6010);const a={tabItem:"tabItem_Ymn6"};function u(t){let{children:e,hidden:n,className:u}=t;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(a.tabItem,u),hidden:n},e)}},4866:(t,e,n)=>{n.d(e,{Z:()=>N});var r=n(7462),l=n(7294),a=n(6010),u=n(2466),i=n(6550),o=n(1980),s=n(7392),d=n(12);function m(t){return function(t){return l.Children.map(t,(t=>{if(!t||(0,l.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:n,attributes:r,default:l}}=t;return{value:e,label:n,attributes:r,default:l}}))}function c(t){const{values:e,children:n}=t;return(0,l.useMemo)((()=>{const t=e??m(n);return function(t){const e=(0,s.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function p(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function k(t){let{queryString:e=!1,groupId:n}=t;const r=(0,i.k6)(),a=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,o._X)(a),(0,l.useCallback)((t=>{if(!a)return;const e=new URLSearchParams(r.location.search);e.set(a,t),r.replace({...r.location,search:e.toString()})}),[a,r])]}function f(t){const{defaultValue:e,queryString:n=!1,groupId:r}=t,a=c(t),[u,i]=(0,l.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=n.find((t=>t.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:a}))),[o,s]=k({queryString:n,groupId:r}),[m,f]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[r,a]=(0,d.Nk)(n);return[r,(0,l.useCallback)((t=>{n&&a.set(t)}),[n,a])]}({groupId:r}),g=(()=>{const t=o??m;return p({value:t,tabValues:a})?t:null})();(0,l.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:u,selectValue:(0,l.useCallback)((t=>{if(!p({value:t,tabValues:a}))throw new Error(`Can't select invalid tab value=${t}`);i(t),s(t),f(t)}),[s,f,a]),tabValues:a}}var g=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(t){let{className:e,block:n,selectedValue:i,selectValue:o,tabValues:s}=t;const d=[],{blockElementScrollPositionUntilNextRender:m}=(0,u.o5)(),c=t=>{const e=t.currentTarget,n=d.indexOf(e),r=s[n].value;r!==i&&(m(e),o(r))},p=t=>{let e=null;switch(t.key){case"Enter":c(t);break;case"ArrowRight":{const n=d.indexOf(t.currentTarget)+1;e=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(t.currentTarget)-1;e=d[n]??d[d.length-1];break}}e?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},e)},s.map((t=>{let{value:e,label:n,attributes:u}=t;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,key:e,ref:t=>d.push(t),onKeyDown:p,onClick:c},u,{className:(0,a.Z)("tabs__item",b.tabItem,u?.className,{"tabs__item--active":i===e})}),n??e)})))}function v(t){let{lazy:e,children:n,selectedValue:r}=t;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=a.find((t=>t.props.value===r));return t?(0,l.cloneElement)(t,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==r}))))}function h(t){const e=f(t);return l.createElement("div",{className:(0,a.Z)("tabs-container",b.tabList)},l.createElement(y,(0,r.Z)({},t,e)),l.createElement(v,(0,r.Z)({},t,e)))}function N(t){const e=(0,g.Z)();return l.createElement(h,(0,r.Z)({key:String(e)},t))}},258:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=n(7462),l=(n(7294),n(3905)),a=n(4866),u=n(5162);const i={title:"Get Instruments Info",sidebar_label:"Get Instruments Info",sidebar_position:4.5},o=void 0,s={unversionedId:"v3/market/instrument",id:"v3/market/instrument",title:"Get Instruments Info",description:"Query for the instrument specification of online trading pairs.",source:"@site/docs/v3/market/instrument.mdx",sourceDirName:"v3/market",slug:"/v3/market/instrument",permalink:"/docs/v3/market/instrument",draft:!1,tags:[],version:"current",sidebarPosition:4.5,frontMatter:{title:"Get Instruments Info",sidebar_label:"Get Instruments Info",sidebar_position:4.5},sidebar:"v3SideBar",previous:{title:"Get Premium Index Price Kline",permalink:"/docs/v3/market/preimum-index-kline"},next:{title:"Get Orderbook",permalink:"/docs/v3/market/orderbook"}},d={},m=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],c={toc:m},p="wrapper";function k(t){let{components:e,...n}=t;return(0,l.kt)(p,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Query for the instrument specification of online trading pairs."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Covers: USDT perpetual / Inverse contract"))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"When query by ",(0,l.kt)("inlineCode",{parentName:"li"},"baseCoin"),", regardless of category=",(0,l.kt)("inlineCode",{parentName:"li"},"linear")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"inverse"),", the result will have USDT perpetual and Inverse contract symbols."))),(0,l.kt)("h3",{id:"http-request"},"HTTP Request"),(0,l.kt)("p",null,"GET ",(0,l.kt)("inlineCode",{parentName:"p"},"/cloud/trade/v3/market/instruments-info")),(0,l.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("b",null,"true")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Product type. ",(0,l.kt)("inlineCode",{parentName:"td"},"linear"),",",(0,l.kt)("inlineCode",{parentName:"td"},"inverse"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../enum#symbol"},"symbol")),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../enum#status"},"status")),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Symbol status filter ",(0,l.kt)("ul",null,(0,l.kt)("li",null,"linear/inverse has ",(0,l.kt)("inlineCode",{parentName:"td"},"Trading")," only")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"baseCoin"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Base coin. ",(0,l.kt)("em",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"em"},"linear"),",",(0,l.kt)("inlineCode",{parentName:"em"},"inverse")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Limit for data size per page. ","[",(0,l.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"1000"),"]",". Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"500"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Cursor. Use the ",(0,l.kt)("inlineCode",{parentName:"td"},"nextPageCursor")," token from the response to retrieve the next page of the result set")))),(0,l.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,l.kt)(a.Z,{groupId:"market-category",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"linear",label:"Linear/Inverse",default:!0,mdxType:"TabItem"},(0,l.kt)("table",{border:"0.8"},(0,l.kt)("tr",null,(0,l.kt)("th",null,"Parameter"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Comments")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"category"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"Product type")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"nextPageCursor"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"Cursor. Used to pagination")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"list"),(0,l.kt)("td",null,"array"),(0,l.kt)("td",null,"Object")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> symbol"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"Symbol name ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> ",(0,l.kt)("a",{href:"../enum#contracttype"},"contractType")),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"Contract type")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> ",(0,l.kt)("a",{href:"../enum#status"},"status")),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"Instrument status ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> baseCoin"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"Base coin ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> quoteCoin"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"Quote coin ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> launchTime"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"Launch timestamp (ms) ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> priceScale"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"Price scale ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> leverageFilter"),(0,l.kt)("td",null,"Object"),(0,l.kt)("td",null,"Leverage attributes ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,">> minLeverage"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"Minimum leverage ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,">> maxLeverage"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"Maximum leverage ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,">> leverageStep"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"The step to increase/reduce leverage ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> priceFilter"),(0,l.kt)("td",null,"Object"),(0,l.kt)("td",null,"Price attributes ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,">> minPrice"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"Minimum order price ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,">> maxPrice"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"Maximum order price ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,">> tickSize"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"The step to increase/reduce order price ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> lotSizeFilter"),(0,l.kt)("td",null,"Object"),(0,l.kt)("td",null,"Size attributes ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,">> maxOrderQty"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"Maximum order quantity ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,">> minOrderQty"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"Minimum order quantity ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,">> qtyStep"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"The step to increase/reduce order quantity ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,">> postOnlyMaxOrderQty"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"Maximum order qty for PostOnly order ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> fundingInterval"),(0,l.kt)("td",null,"integer"),(0,l.kt)("td",null,"Funding interval (minute) ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> settleCoin"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"Settle coin "))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"request-example"},"Request Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"GET /cloud/trade/v3/market/instruments-info?category=linear&symbol=BTCUSDT HTTP/1.1\nHost: openapi-testnet.zoomex.com\n")),(0,l.kt)("h3",{id:"response-example"},"Response Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "category": "linear",\n        "list": [\n            {\n                "symbol": "BTCUSDT",\n                "contractType": "LinearPerpetual",\n                "status": "Trading",\n                "baseCoin": "BTC",\n                "quoteCoin": "USDT",\n                "launchTime": "1585526400000",\n                "deliveryTime": "0",\n                "deliveryFeeRate": "",\n                "priceScale": "2",\n                "leverageFilter": {\n                    "minLeverage": "1",\n                    "maxLeverage": "100.00",\n                    "leverageStep": "0.01"\n                },\n                "priceFilter": {\n                    "minPrice": "0.50",\n                    "maxPrice": "999999.00",\n                    "tickSize": "0.50"\n                },\n                "lotSizeFilter": {\n                    "maxOrderQty": "100.000",\n                    "minOrderQty": "0.001",\n                    "qtyStep": "0.001",\n                    "postOnlyMaxOrderQty": "1000.000"\n                },\n                "unifiedMarginTrade": true,\n                "fundingInterval": 480,\n                "settleCoin": "USDT"\n            }\n        ],\n        "nextPageCursor": ""\n    },\n    "retExtInfo": {},\n    "time": 1672712495660\n}\n')))}k.isMDXComponent=!0}}]);