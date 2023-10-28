"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6559],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(n),k=r,c=d["".concat(o,".").concat(k)]||d[k]||u[k]||i;return n?a.createElement(c,p(p({ref:t},s),{},{components:n})):a.createElement(c,p({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=k;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,p[1]=l;for(var m=2;m<i;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={title:"\u6982\u89bd",sidebar_name:"\u6982\u89bd"},p=void 0,l={unversionedId:"v3/intro",id:"v3/intro",title:"\u6982\u89bd",description:"Zoomex V3 Open API \u80fd\u7d66\u8b93\u7528\u6236\u57fa\u65bc\u4e0d\u540c\u7684\u7522\u54c1\u69cb\u5efaAPI\u6a21\u578b\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/intro.mdx",sourceDirName:"v3",slug:"/v3/intro",permalink:"/docs/zh-TW/v3/intro",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6982\u89bd",sidebar_name:"\u6982\u89bd"},sidebar:"v3SideBar",next:{title:"Copy Trade",permalink:"/docs/zh-TW/category/copy-trade"}},o={},m=[{value:"\u9452\u6b0a/\u8a8d\u8b49",id:"\u9452\u6b0a\u8a8d\u8b49",level:2},{value:"\u516c\u5171\u53c3\u6578",id:"\u516c\u5171\u53c3\u6578",level:3},{value:"\u69cb\u5efa\u8acb\u6c42",id:"\u69cb\u5efa\u8acb\u6c42",level:3},{value:"Response\u901a\u7528\u6578\u64da\u7d50\u69cb",id:"response\u901a\u7528\u6578\u64da\u7d50\u69cb",level:2},{value:"\u5e36\u55ae\u4ea4\u6613",id:"\u5e36\u55ae\u4ea4\u6613",level:3}],s={toc:m},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Zoomex V3 Open API \u80fd\u7d66\u8b93\u7528\u6236\u57fa\u65bc\u4e0d\u540c\u7684\u7522\u54c1\u69cb\u5efaAPI\u6a21\u578b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5e36\u55ae\u4ea4\u6613\uff1a")," \u60a8\u5fc5\u9808\u9996\u5148\u6210\u70ba",(0,r.kt)("strong",{parentName:"li"},"\u4ea4\u6613\u54e1"),"\u624d\u80fd\u4f7f\u7528\u8a72\u5957\u63a5\u53e3\u3002")),(0,r.kt)("h2",{id:"\u9452\u6b0a\u8a8d\u8b49"},"\u9452\u6b0a/\u8a8d\u8b49"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u8acb\u5148\u751f\u6210 ",(0,r.kt)("a",{href:"https://testnet.zoomex.com/zh-TW/user-center/api-manage"},(0,r.kt)("b",null,"\u6e2c\u8a66\u7db2"))," \u6216 ",(0,r.kt)("a",{href:"https://www.zoomex.com/zh-TW/user-center/api-manage"},(0,r.kt)("b",null,"\u4e3b\u7db2"))," API KEY\u3002")),(0,r.kt)("p",null,"REST\u63a5\u53e3\u6839URL:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6e2c\u8a66\u7db2:"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"li",href:"https://openapi-testnet.zoomex.com"},"https://openapi-testnet.zoomex.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4e3b\u7db2"),":",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"li",href:"https://openapi.zoomex.com"},"https://openapi.zoomex.com"))),(0,r.kt)("h3",{id:"\u516c\u5171\u53c3\u6578"},"\u516c\u5171\u53c3\u6578"),(0,r.kt)("p",null,"\u9700\u8981\u7c3d\u540d\u7684\u63a5\u53e3\u5fc5\u9808\u5305\u542b\u4ee5\u4e0b\u53c3\u6578:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"api_key")," - api\u5bc6\u9470"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timestamp")," - UTC\u6beb\u79d2\u6642\u9593\u6233"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sign")," - \u8acb\u6c42\u53c3\u6578\u7c3d\u540d",(0,r.kt)("br",null))),(0,r.kt)("p",null,"\u53e6\u5916\u6211\u5011\u63d0\u4f9b\u53ef\u9078\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"recv_window")," \u53c3\u6578\uff08\u55ae\u4f4d\u662f\u6beb\u79d2\uff0c\u9ed8\u8a8d\u503c\u70ba",(0,r.kt)("inlineCode",{parentName:"p"},"5000"),"\uff09\uff0c\u4f86\u6307\u5b9a\u8acb\u6c42\u5728\u591a\u9577\u6642\u9593\u5167\u6709\u6548\uff0c\u540c\u6642\u7528\u4f86\u9632\u6b62\u91cd\u653e\u653b\u64ca\u3002"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u8a3b\u610f\uff0ctimestamp\u53c3\u6578\u5fc5\u9808\u7b26\u5408\u5982\u4e0b\u898f\u5247:",(0,r.kt)("br",null),"\n",(0,r.kt)("em",{parentName:"p"},"server_time - recv_window <= timestamp < server_time + 1000"),(0,r.kt)("br",null),"\n\u5176\u4e2dserver_time\u662fZoomex\u670d\u52d9\u5668\u6642\u9593\uff0c\u60a8\u53ef\u4ee5\u901a\u904e ",(0,r.kt)("a",{parentName:"p",href:"../v3/market/time#"},"Zoomex\u670d\u52d9\u5668\u6642\u9593"),"\u63a5\u53e3\u7372\u53d6.")),(0,r.kt)("h3",{id:"\u69cb\u5efa\u8acb\u6c42"},"\u69cb\u5efa\u8acb\u6c42"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u70ba\u4e86\u5e6b\u52a9\u8a3a\u65b7\u9ad8\u7d1a\u7db2\u7d61\u554f\u984c\uff0c\u60a8\u53ef\u4ee5\u8003\u616e\u5c07",(0,r.kt)("inlineCode",{parentName:"p"},"cdn-request-id"),"\u6dfb\u52a0\u5230\u60a8\u7684\u8acb\u6c42\u982d\u4e2d\u3002\u5c0d\u65bc\u6bcf\u500b\u8acb\u6c42\uff0c\u5b83\u7684\u503c\u61c9\u8a72\u662f\u552f\u4e00\u7684\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u57fa\u672c\u6b65\u9a5f:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6240\u6709\u53c3\u6578\u6309\u7167\u5b57\u6bcd\u9806\u5e8f\u6392\u5e8f\uff0c\u7136\u5f8c\u6309\u7167 ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Query_string"},"query string")," \u683c\u5f0f\u62fc\u63a5\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u62fc\u63a5\u53c3\u6578\u793a\u4f8b"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"param_str= api_key+str(time_stamp) + recv_window + payload\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"HMAC_SHA256")," \u7b97\u6cd5\u5c0d\u7b2c1\u6b65\u4e2d\u62fc\u63a5\u7684query string\u7c3d\u540d\uff0c\u4e26\u8f49\u63db\u70ba16\u9032\u88fd\u5b57\u7b26\u4e32\uff0c\u5f97\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"sign")," \u53c3\u6578\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8a08\u7b97\u7c3d\u540d\uff08\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"nodejs"),"\u70ba\u4f8b\uff09"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def genSignature(payload):\n   param_str= str(time_stamp) + api_key + recv_window + payload\n   hash = hmac.new(bytes(secret_key, "utf-8"), param_str.encode("utf-8"),hashlib.sha256)\n   signature = hash.hexdigest()\n   return signature\n'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c07sign\u53c3\u6578\u52a0\u5230\u8acb\u6c42\u53c3\u6578\u4e2d\u5373\u53ef\uff1b\u8a3b\u610fGET\u548cPOST\u8acb\u6c42\u53c3\u6578\u683c\u5f0f\u4e0d\u540c\uff0c\u8a73\u898b\u4ee5\u4e0b\u793a\u4f8b\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GET\u8acb\u6c42\u683c\u5f0f\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"GET /user/leverage?api_key=XXXXXXXXXXX&timestamp=1542434791000&sign=670e3e4aa32b243f2dedf1dafcec2fd17a440e71b05681550416507de591d908 HTTP/1.1\nHost: openapi-testnet.zoomex.com\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"POST\u8acb\u6c42\u683c\u5f0f\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'POST /user/leverage/save HTTP/1.1\nHost: openapi-testnet.zoomex.com\nContent-Type: application/json\n\n{\n    "api_key": "XXXXXXXXXXX",\n    "leverage": 100,\n    "symbol": "BTCUSD",\n    "timestamp": 1542434791000,\n    "sign": "670e3e4aa32b243f2dedf1dafcec2fd17a440e71b05681550416507de591d908"\n}\n'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u793a\u4f8b"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import requests\nimport time\nimport hashlib\nimport hmac\nimport uuid\n\napi_key=\'XXXXXXXX\'\nsecret_key=\'XXXXXXXX\'\nhttpClient=requests.Session()\nrecv_window=str(5000)\nurl="https://openapi-testnet.zoomex.com"\n\ndef HTTP_Request(endPoint,method,payload,Info):\n    global time_stamp\n    time_stamp=str(int(time.time() * 10 ** 3))\n    signature=genSignature(payload)\n    headers = {\n        \'X-BAPI-API-KEY\': api_key,\n        \'X-BAPI-SIGN\': signature,\n        \'X-BAPI-SIGN-TYPE\': \'2\',\n        \'X-BAPI-TIMESTAMP\': time_stamp,\n        \'X-BAPI-RECV-WINDOW\': recv_window,\n        \'Content-Type\': \'application/json\'\n    }\n    if(method=="POST"):\n        response = httpClient.request(method, url+endPoint, headers=headers, data=payload)\n    else:\n        response = httpClient.request(method, url+endPoint+"?"+payload, headers=headers)\n    print(response.text)\n    print(Info + " Elapsed Time : " + str(response.elapsed))\ndef genSignature(payload):\n    param_str= str(time_stamp) + api_key + recv_window + payload\n    hash = hmac.new(bytes(secret_key, "utf-8"), param_str.encode("utf-8"),hashlib.sha256)\n    signature = hash.hexdigest()\n    return signature\n\n#POST Create Order\nendpoint="/cloud/trade/v3/order/create"\nmethod="POST"\norderLinkId=uuid.uuid4().hex\nparams=\'{"category":"linear","symbol": "BTCUSDT","side": "Buy","positionIdx": 0,"orderType": "Market","qty": "0.001","price": "","timeInForce": "GTC","orderLinkId": "\' + orderLinkId + \'"}\'\nHTTP_Request(endpoint,method,params,"Create")\n\n#GET history Orders\nendpoint="/cloud/trade/v3/order/history"\nmethod="GET"\nparams=\'category=linear&symbol=BTCUSDT\'\nHTTP_Request(endpoint,method,params,"history")\n')))),(0,r.kt)("h2",{id:"response\u901a\u7528\u6578\u64da\u7d50\u69cb"},"Response\u901a\u7528\u6578\u64da\u7d50\u69cb"),(0,r.kt)("h3",{id:"\u5e36\u55ae\u4ea4\u6613"},"\u5e36\u55ae\u4ea4\u6613"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"retCode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6210\u529f/\u932f\u8aa4\u78bc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"retMsg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6210\u529f/\u932f\u8aa4\u6d88\u606f. \u6210\u529f\u6d88\u606f\u53ef\u4ee5\u662f",(0,r.kt)("inlineCode",{parentName:"td"},"OK"),",",(0,r.kt)("inlineCode",{parentName:"td"},"success"),",",(0,r.kt)("inlineCode",{parentName:"td"},"SUCCESS"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"result"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u696d\u52d9\u6578\u64da\u9ad4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"retExtInfo"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u984d\u5916\u4fe1\u606f. \u5927\u90e8\u5206\u5834\u666f\u4e0b\u90fd\u662f",(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7576\u524d\u6642\u9593\u6233 (\u6beb\u79d2)")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {},\n    "retExtInfo": {},\n    "time": 1690180896378\n}\n')))}u.isMDXComponent=!0}}]);