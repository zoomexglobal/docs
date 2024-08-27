"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6080],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,m=p["".concat(i,".").concat(d)]||p[d]||g[d]||o;return t?a.createElement(m,l(l({ref:n},c),{},{components:t})):a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9365:(e,n,t)=>{t.d(n,{A:()=>l});var a=t(6540),r=t(53);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:t},n)}},1470:(e,n,t)=>{t.d(n,{A:()=>k});var a=t(8168),r=t(6540),o=t(53),l=t(3104),s=t(6347),i=t(7485),u=t(1682),c=t(9466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function g(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=g(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[i,u]=m({queryString:t,groupId:a}),[p,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),y=(()=>{const e=i??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var y=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.a_)(),g=e=>{const n=e.currentTarget,t=c.indexOf(n),a=u[t].value;a!==s&&(p(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>c.push(e),onKeyDown:d,onClick:g},l,{className:(0,o.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":s===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function w(e){const n=b(e);return r.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},r.createElement(h,(0,a.A)({},e,n)),r.createElement(v,(0,a.A)({},e,n)))}function k(e){const n=(0,y.A)();return r.createElement(w,(0,a.A)({key:String(n)},e))}},9816:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=t(8168),r=(t(6540),t(5680)),o=t(1470),l=t(9365);const s={title:"Connect",sidebar_label:"Connect",slug:"/v3/ws/connect"},i=void 0,u={unversionedId:"v3/websocket/wss-authentication",id:"v3/websocket/wss-authentication",title:"Connect",description:"WebSocket public channel:",source:"@site/docs/v3/websocket/wss-authentication.mdx",sourceDirName:"v3/websocket",slug:"/v3/ws/connect",permalink:"/docs/v3/ws/connect",draft:!1,tags:[],version:"current",frontMatter:{title:"Connect",sidebar_label:"Connect",slug:"/v3/ws/connect"},sidebar:"v3SideBar",previous:{title:"Get Wallet Balance",permalink:"/docs/v3/account/wallet-balance"},next:{title:"Orderbook",permalink:"/docs/v3/websocket/public/orderbook"}},c={},p=[{value:"Authentication",id:"authentication",level:2},{value:"IP Limits",id:"ip-limits",level:2},{value:"Public channel - Args limits",id:"public-channel---args-limits",level:2},{value:"How to Send the Heartbeat Packet",id:"how-to-send-the-heartbeat-packet",level:2},{value:"How to Subscribe to Topics",id:"how-to-subscribe-to-topics",level:2},{value:"Understanding WebSocket Filters",id:"understanding-websocket-filters",level:3},{value:"Understanding WebSocket Filters: Unsubscription",id:"understanding-websocket-filters-unsubscription",level:3},{value:"Understanding the Subscription Response",id:"understanding-the-subscription-response",level:2}],g={toc:p},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"WebSocket public channel:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Mainnet:"),(0,r.yg)("br",null),"\nUSDT perpetual: ",(0,r.yg)("inlineCode",{parentName:"p"},"wss://stream.zoomex.com/v3/public/linear"),(0,r.yg)("br",null),"\nInverse contract: ",(0,r.yg)("inlineCode",{parentName:"p"},"wss://stream.zoomex.com/v3/public/inverse"),(0,r.yg)("br",null))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Testnet:"),(0,r.yg)("br",null),"\nUSDT perpetual: ",(0,r.yg)("inlineCode",{parentName:"p"},"wss://stream-testnet.zoomex.com/v3/public/linear"),(0,r.yg)("br",null),"\nInverse contract: ",(0,r.yg)("inlineCode",{parentName:"p"},"wss://stream-testnet.zoomex.com/v3/public/inverse"),(0,r.yg)("br",null)))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"WebSocket private channel:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Mainnet:"),(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"wss://stream.zoomex.com/v3/private"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Testnet:"),(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"wss://stream-testnet.zoomex.com/v3/private")))),(0,r.yg)("h2",{id:"authentication"},"Authentication"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("b",null,"Public")," topics do not require authentication. The following section applies to ",(0,r.yg)("b",null,"private")," topics only."),(0,r.yg)("p",null,"Apply for authentication when establishing a connection."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "req_id": "10001", // optional\n    "op": "auth",\n    "args": [\n        "api_key",\n        1662350400000, // expires; is greater than your current timestamp\n        "signature"\n    ]\n}\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Successful authentication sample response")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "",\n    "op": "auth",\n    "conn_id": "cejreaspqfh3sjdnldmg-p"\n}\n')),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Example signature algorithms as following")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"import hmac\nimport json\nimport logging\nimport time\n\n\ndef send_auth():\n    key = 'XXXXXXXX'\n    secret = 'XXXXXXXX'\n    expires = int((time.time() + 1000) * 1000)\n    _val = f'GET/realtime{expires}'\n    print(_val)\n    signature = str(hmac.new(\n        bytes(secret, 'utf-8'),\n        bytes(_val, 'utf-8'), digestmod='sha256'\n    ).hexdigest())\n    print(json.dumps({\"op\": \"auth\", \"args\": [key, expires, signature]}))\n\n\nif __name__ == \"__main__\":\n    send_auth()\n")),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Due to network complexity, your may get disconnected at any time. Please follow the instructions below to ensure that you receive WebSocket messages on time:"),(0,r.yg)("ol",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ol"},"Keep connection alive by ",(0,r.yg)("a",{parentName:"li",href:"connect#how-to-send-the-heartbeat-packet"},"sending the heartbeat packet")),(0,r.yg)("li",{parentName:"ol"},"Reconnect as soon as possible if disconnected"))),(0,r.yg)("h2",{id:"ip-limits"},"IP Limits"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Do not frequently connect and disconnect the connection."),(0,r.yg)("li",{parentName:"ul"},"Do not build over 500 connections in 5 minutes. This is counted separately per WebSocket endpoint.")),(0,r.yg)("h2",{id:"public-channel---args-limits"},"Public channel - Args limits"),(0,r.yg)("p",null,'For one public connection, you cannot have length of "args" array over 21,000 characters.'),(0,r.yg)("h2",{id:"how-to-send-the-heartbeat-packet"},"How to Send the Heartbeat Packet"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"How to Send")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'// req_id is a customised ID, which is optional\nws.send(JSON.stringify({"req_id": "100001", "op": "ping"}));\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Pong message example of public channels")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "pong",\n    "conn_id": "465772b1-7630-4fdc-a492-e003e6f0f260",\n    "req_id": "",\n    "op": "ping"\n}\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Pong message example of private channels")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "req_id": "test",\n    "op": "pong",\n    "args": [\n        "1675418560633"\n    ],\n    "conn_id": "cfcb4ocsvfriu23r3er0-1b"\n}\n')),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"To avoid network or program issues, we recommend that you send the ",(0,r.yg)("code",null,"ping")," heartbeat packet every ",(0,r.yg)("b",null,"20")," seconds to maintain the WebSocket connection.")),(0,r.yg)("h2",{id:"how-to-subscribe-to-topics"},"How to Subscribe to Topics"),(0,r.yg)("h3",{id:"understanding-websocket-filters"},"Understanding WebSocket Filters"),(0,r.yg)("p",null,"How to subscribe with a filter"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'// Subscribing level 1 orderbook\n{\n    "req_id": "test", // optional\n    "op": "subscribe",\n    "args": [\n        "orderbook.1.BTCUSDT"\n    ]\n}\n')),(0,r.yg)("p",null,"Subscribing with multiple symbols and topics is supported."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "req_id": "test", // optional\n    "op": "subscribe",\n    "args": [\n        "orderbook.1.BTCUSDT",\n        "publicTrade.BTCUSDT",\n        "orderbook.1.ETHUSDT"\n    ]\n}\n')),(0,r.yg)("h3",{id:"understanding-websocket-filters-unsubscription"},"Understanding WebSocket Filters: Unsubscription"),(0,r.yg)("p",null,"You can dynamically subscribe and unsubscribe from topics without unsubscribing from the WebSocket like so:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "op": "unsubscribe",\n    "args": [\n        "publicTrade.ETHUSD"\n    ],\n    "req_id": "customised_id"\n}\n')),(0,r.yg)("h2",{id:"understanding-the-subscription-response"},"Understanding the Subscription Response"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Topic subscription response message example")),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"private",label:"Private",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "",\n    "op": "subscribe",\n    "conn_id": "cejreassvfrsfvb9v1a0-2m"\n}\n'))),(0,r.yg)(l.A,{value:"public-future",label:"Linear/Inverse",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "",\n    "conn_id": "3cd84cb1-4d06-4a05-930a-2efe5fc70f0f",\n    "req_id": "",\n    "op": "subscribe"\n}\n')))))}m.isMDXComponent=!0}}]);