"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9337],{8396:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>x,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>h,toc:()=>j});var s=n(4848),t=n(8453),l=n(6403),o=n(3799),i=n(385),d=n(975);const a={slug:"fe-error-handleing",title:"\ud504\ub860\ud2b8 \uc5d4\ub4dc\uc758 \uc5d0\ub7ec \ud578\ub4e4\ub9c1 \uc804\ub7b5",authors:["badahertz52"],tags:["blog"]},c=void 0,h={permalink:"/blog/fe-error-handleing",editUrl:"https://github.com/review-me-blog/review-me-blog.github.io/tree/main/blog/2024-09-14-fe-error-handling/index.mdx",source:"@site/blog/2024-09-14-fe-error-handling/index.mdx",title:"\ud504\ub860\ud2b8 \uc5d4\ub4dc\uc758 \uc5d0\ub7ec \ud578\ub4e4\ub9c1 \uc804\ub7b5",description:"---",date:"2024-09-14T00:00:00.000Z",tags:[{inline:!0,label:"blog",permalink:"/blog/tags/blog"}],readingTime:7.095,hasTruncateMarker:!1,authors:[{name:"\uc190\ud574\uc601 (\ubc14\ub2e4)",title:"\ub9ac\ubdf0\ubbf8 FE",url:"https://github.com/badahertz52",imageURL:"https://github.com/badahertz52.png",key:"badahertz52"}],frontMatter:{slug:"fe-error-handleing",title:"\ud504\ub860\ud2b8 \uc5d4\ub4dc\uc758 \uc5d0\ub7ec \ud578\ub4e4\ub9c1 \uc804\ub7b5",authors:["badahertz52"],tags:["blog"]},unlisted:!1,lastUpdatedAt:1726306926e3,prevItem:{title:"\ud504\ub860\ud2b8 \uc5d4\ub4dc\uc758 \uc131\ub2a5 \ucd5c\uc801\ud654",permalink:"/blog/fe-performance-optimization"},nextItem:{title:"Nginx \uc124\uc815 \ud615\uc0c1\uad00\ub9ac\ud558\uae30",permalink:"/blog/versioning-nginx"}},x={authorsImageUrls:[void 0]},j=[{value:"\uc5d0\ub7ec \ud578\ub4e4\ub9c1 \uc804\ub7b5\uc758 \ud544\uc694\uc131",id:"\uc5d0\ub7ec-\ud578\ub4e4\ub9c1-\uc804\ub7b5\uc758-\ud544\uc694\uc131",level:2},{value:"\uc5d0\ub7ec \ud578\ub4e4\ub9c1 \uc804\ub7b5",id:"\uc5d0\ub7ec-\ud578\ub4e4\ub9c1-\uc804\ub7b5",level:3},{value:"API \uc694\uccad \uc624\ub958 \uc2dc, \uc751\ub2f5 status\ubcc4 \uc624\ub958 \uba54\uc138\uc9c0",id:"api-\uc694\uccad-\uc624\ub958-\uc2dc-\uc751\ub2f5-status\ubcc4-\uc624\ub958-\uba54\uc138\uc9c0",level:2},{value:"response status\uc5d0 \ub530\ub77c \uc77c\uad00\ub41c \uc624\ub958 \uba54\uc138\uc9c0\ub97c \ubc18\ud658\ud558\ub294 \uc720\ud2f8 \ud568\uc218",id:"response-status\uc5d0-\ub530\ub77c-\uc77c\uad00\ub41c-\uc624\ub958-\uba54\uc138\uc9c0\ub97c-\ubc18\ud658\ud558\ub294-\uc720\ud2f8-\ud568\uc218",level:3},{value:"\uc624\ub958 \uba54\uc138\uc9c0",id:"\uc624\ub958-\uba54\uc138\uc9c0",level:3},{value:"Error \ucef4\ud3ec\ub10c\ud2b8",id:"error-\ucef4\ud3ec\ub10c\ud2b8",level:2},{value:"ErrorPage",id:"errorpage",level:3},{value:"ErrorModal, ErrorSection",id:"errormodal-errorsection",level:3},{value:"ErrorSection",id:"errorsection",level:4},{value:"ErrorModal",id:"errormodal",level:4},{value:"text",id:"text",level:3},{value:"console.error",id:"consoleerror",level:2},{value:"\ucc38\uace0\uc790\ub8cc",id:"\ucc38\uace0\uc790\ub8cc",level:4}];function u(r){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...r.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"\uc5d0\ub7ec-\ud578\ub4e4\ub9c1-\uc804\ub7b5\uc758-\ud544\uc694\uc131",children:"\uc5d0\ub7ec \ud578\ub4e4\ub9c1 \uc804\ub7b5\uc758 \ud544\uc694\uc131"}),"\n",(0,s.jsx)(e.p,{children:"\uc624\ub958\ub294 UX\uc5d0 \uce58\uba85\uc801\uc774\uba70, \uac1c\ubc1c\uc790\ub294 \uc624\ub958 \uba54\uc138\uc9c0\ub97c \ud1b5\ud574 \uc5b4\ub5a4 \uc624\ub958\uc778\uc9c0 \ud30c\uc545\ud560 \uc218 \uc788\uc5b4 \uc911\uc694\ud569\ub2c8\ub2e4. \uc5ec\ub7ec \uac1c\ubc1c\uc790\ub4e4\uc774 \uc791\uc5c5\uc744 \ud558\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 \uac19\uc740 API \uc751\ub2f5 \ucf54\ub4dc(status code)\uc5ec\ub3c4 \ub2e4\ub978 \uc624\ub958 \uba54\uc138\uc9c0\ub97c \ub358\uc9c0\uac70\ub098, \ub2e4\ub978 \ud615\ud0dc\ub85c \uc624\ub958 \uad00\ub828\ub41c UI(\uc608: \ub204\uad70\uac00\ub294 \ubaa8\ub2ec\ub85c \uc624\ub958 \uba54\uc138\uc9c0\ub97c \ub744\uc6b0\uace0, \ub204\uad70\uac00\ub294 \uc624\ub958 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud558\ub294 \ubc29\uc2dd)\ub97c \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(e.p,{children:"\uac01\uae30 \ub2e4\ub978 \uc624\ub958 \uba54\uc2dc\uc9c0\uc640 UI\ub294 \uc0ac\uc6a9\uc790\uc640 \uac1c\ubc1c\uc790 \ubaa8\ub450\uc5d0\uac8c \ud63c\ub780\uc744 \uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c UX \uce21\uba74\uc5d0\uc11c\ub294 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc5b4\ub5a4 \uc624\ub958\uc778\uc9c0 \ud1b5\uc77c\ub418\uace0 \uba85\ud655\ud558\uac8c \uc548\ub0b4\ud558\uace0, \uadf8\uc5d0 \ub530\ub77c \uc0ac\uc6a9\uc790 \ud589\ub3d9\uc744 \uc720\ub3c4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c, DX \uce21\uba74\uc5d0\uc11c\ub294 \uac1c\ubc1c\uc790\uac00 \uc624\ub958\ub97c \uc27d\uac8c \ud30c\uc545\ud574 \ub514\ubc84\uae45\uc774 \uc6a9\uc774\ud558\ub3c4\ub85d \ud558\uae30 \uc704\ud574, \ub9ac\ubdf0\ubbf8 \ud504\ub860\ud2b8\uc5d4\ub4dc \ud300\ub9cc\uc758 \uc5d0\ub7ec \ud578\ub4e4\ub9c1 \uc804\ub7b5\uc744 \uc138\uc6e0\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(e.h3,{id:"\uc5d0\ub7ec-\ud578\ub4e4\ub9c1-\uc804\ub7b5",children:"\uc5d0\ub7ec \ud578\ub4e4\ub9c1 \uc804\ub7b5"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\uc624\ub958 \uc885\ub958"}),(0,s.jsx)(e.th,{children:"\uc624\ub958 \ubc1c\uc0dd \uc0c1\ud669"}),(0,s.jsx)(e.th,{children:"\ub300\uc751 \uc804\ub7b5"}),(0,s.jsx)(e.th,{children:"\uc624\ub958 \ucf00\uc774\uc2a4 \uc608\uc2dc"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"API \uc694\uccad \uc624\ub958"}),(0,s.jsx)(e.td,{children:"\ud654\uba74\uc5d0 \uc601\ud5a5\uc774 \uc788\ub294 \uacbd\uc6b0"}),(0,s.jsx)(e.td,{children:"ErrorSection, ErrorPage"}),(0,s.jsx)(e.td,{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"\uc798\ubabb\ub41c \ub9ac\ubdf0 \uc694\uccad \ucf54\ub4dc\ub85c \ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc640\uc11c \ud398\uc774\uc9c0\ub97c \ub80c\ub354\ub9c1 \ud558\ub294 \uacbd\uc6b0"}),(0,s.jsx)("li",{children:"\ub124\ud2b8\uc6cc\ud06c \ubb38\uc81c\ub098 \uc11c\ubc84\uac00 \ub2e4\uc6b4\ub418\uc5b4\uc11c \uc751\ub2f5\uc744 \ubc1b\uc9c0 \ubabb\ud558\ub294 \uacbd\uc6b0"}),(0,s.jsx)("li",{children:"\ud074\ub77c\uc774\uc5b8\ud2b8 \uce21\uc5d0\uc11c \uc124\uc7a5\ud55c \ud0c0\uc784\uc544\uc6c3\uc774 \ucd08\uacfc"}),(0,s.jsx)("li",{children:"DNS,CORS\uc5d0 \uc758\ud55c \uc624\ub958"})]})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"API \uc694\uccad \uc624\ub958"}),(0,s.jsx)(e.td,{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"\uc0ac\uc6a9\uc790\uc640 \uc0c1\ud638 \uc791\uc6a9\ud558\uace0 \uc788\uc5b4\uc11c \ud604\uc7ac \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc5b8\ub9c8\uc6b4\ud2b8 \uc2dc\ud0a4\uba70 \uc548\ub418\ub294 \uacbd\uc6b0(=\uc0c1\ud0dc \uc720\uc9c0 \ud544\uc694)"}),(0,s.jsx)("li",{children:"\ub370\uc774\ud130 \uc720\ubb34\uac00 \ud654\uba74\uc5d0 \uc601\ud5a5\uc774 \uc5c6\ub294 \uacbd\uc6b0 "})]})}),(0,s.jsx)(e.td,{children:"Error Modal(\ubaa8\ub2ec\uc758 \ud615\ud0dc\ub294 \ucf00\uc774\uc2a4\uc5d0 \ub9de\ub294 \uac83\uc73c\ub85c),text"}),(0,s.jsx)(e.td,{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"\ube44\ubc00 \ubc88\ud638 \uc870\ud68c \uc2e4\ud328"}),(0,s.jsx)("li",{children:"\uc791\uc131\ud55c \ub9ac\ubdf0 \uc81c\ucd9c \uc2e4\ud328 \uc2dc"})]})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\ubc30\ud3ec \uc0ac\uc774\ud2b8 \uc624\ub958"}),(0,s.jsx)(e.td,{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"\ubc30\ud3ec \uc0ac\uc774\ud2b8\uac00 \ub2e4\uc6b4\ub41c \uacbd\uc6b0"}),(0,s.jsx)("li",{children:"\ud30c\uc77c \uacbd\ub85c\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub294 \uacbd\uc6b0"})]})}),(0,s.jsx)(e.td,{children:"AWS\uc758 error.html \uc0ac\uc6a9, 403\uc624\ub958 \uc2dc index.html \uc0ac\uc6a9"}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\ud074\ub77c\uc774\uc5b8\ud2b8\ub2e8 \uc624\ub958"}),(0,s.jsx)(e.td,{children:"js \uc624\ub958"}),(0,s.jsx)(e.td,{children:"console.error"}),(0,s.jsx)(e.td,{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"element\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub294 \uacbd\uc6b0"}),(0,s.jsx)("li",{children:"type \ubd88\uc77c\uce58\ub85c \uc778\ud55c \uc624\ub958"})]})})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"api-\uc694\uccad-\uc624\ub958-\uc2dc-\uc751\ub2f5-status\ubcc4-\uc624\ub958-\uba54\uc138\uc9c0",children:"API \uc694\uccad \uc624\ub958 \uc2dc, \uc751\ub2f5 status\ubcc4 \uc624\ub958 \uba54\uc138\uc9c0"}),"\n",(0,s.jsx)(e.p,{children:"\uc624\ub958 \uba54\uc138\uc9c0\ub294 \ud06c\uac8c \uc11c\ubc84\ub2e8 \uc624\ub958\uc778 500\ub300 \uc5d0\ub7ec\uc640 \ud074\ub77c\uc774\uc5b8\ud2b8 \ub2e8 \uc624\ub958\uc778 400\ubc88\ub300\ub85c \ub098\ub204\uace0, 400\ubc88\ub300 \uc624\ub958\ub97c \uc880 \ub354 \uc138\ubd84\ud654\ud574\uc11c \ub2e4\ub918\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(e.h3,{id:"response-status\uc5d0-\ub530\ub77c-\uc77c\uad00\ub41c-\uc624\ub958-\uba54\uc138\uc9c0\ub97c-\ubc18\ud658\ud558\ub294-\uc720\ud2f8-\ud568\uc218",children:"response status\uc5d0 \ub530\ub77c \uc77c\uad00\ub41c \uc624\ub958 \uba54\uc138\uc9c0\ub97c \ubc18\ud658\ud558\ub294 \uc720\ud2f8 \ud568\uc218"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"const createApiErrorMessage = (statusCode: number) => {\n  //500\ub300 \uc11c\ubc84 api \uc624\ub958\n  const isServerError = SERVER_ERROR_REGEX.test(statusCode.toString());\n  if (isServerError) return API_ERROR_MESSAGE.serverError;\n  // 400\ubc88\ub300 \uc624\ub958\n  if (statusCode in API_ERROR_MESSAGE) return API_ERROR_MESSAGE[statusCode];\n};\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\uc624\ub958-\uba54\uc138\uc9c0",children:"\uc624\ub958 \uba54\uc138\uc9c0"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:'export const API_ERROR_MESSAGE: ApiErrorMessage = {\n  400: "\uc798\ubabb\ub41c \uc694\uccad\uc774\uc5d0\uc694",\n  401: "\uc778\uc99d\uc744 \uc2e4\ud328\ud588\uc5b4\uc694",\n  403: "\uc694\uccad\uad8c\ud55c\uc774 \uc5c6\uc5b4\uc694",\n  404: "\uc694\uccad\ud558\uc2e0 \ub0b4\uc6a9\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc5b4\uc694",\n  422: "\uc62c\ubc14\ub974\uc9c0 \uc54a\uc740 \ub370\uc774\ud130 \ud615\uc2dd\uc774\uc5d0\uc694",\n  serverError: "\uc11c\ubc84 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc5b4\uc694",\n};\n'})}),"\n",(0,s.jsx)(e.h2,{id:"error-\ucef4\ud3ec\ub10c\ud2b8",children:"Error \ucef4\ud3ec\ub10c\ud2b8"}),"\n",(0,s.jsx)(e.p,{children:"\uc624\ub958 \ubc1c\uc0dd \uc2dc, \uc0ac\uc6a9\uc790\uac00 \ub9cc\ub098\ub294 UI\ub294 \ud06c\uac8c ErrorPage, ErrorSection,ErrorModal, \uc624\ub958 \uba54\uc138\uc9c0\ub9cc \ud45c\uc2dc\ud558\ub294 text\ub85c \ub098\ub269\ub2c8\ub2e4."}),"\n",(0,s.jsx)(e.h3,{id:"errorpage",children:"ErrorPage"}),"\n",(0,s.jsx)(e.p,{children:"Router\uc624\ub958 \ucc98\ub7fc \uc624\ub958\uac00 \ud398\uc774\uc9c0 \uc804\uccb4\uc5d0 \uc601\ud5a5\uc774 \uc788\uc744 \uacbd\uc6b0, ErrorPage\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.\nErrorPage\uc5d0\uc11c ErrorSection\uc744 \uc0ac\uc6a9\ud574 \ucf54\ub4dc \uc911\ubcf5\uc744 \uc904\uc774\uace0, \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc77c\uad00\ub41c \uc624\ub958 UI\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u25fe Router \uc624\ub958 \uc2dc ErrorPage"})}),"\n",(0,s.jsx)("img",{style:{maxWidth:"600px",margin:"0 auto",display:"block"},src:l.A,alt:"Router \uc624\ub958 \uc2dc \ubcf4\uc774\ub294 ErrorPage \uc774\ubbf8\uc9c0"}),"\n",(0,s.jsx)(e.h3,{id:"errormodal-errorsection",children:"ErrorModal, ErrorSection"}),"\n",(0,s.jsx)(e.p,{children:"React Query\ub97c \uc0ac\uc6a9\ud55c API \uc694\uccad \uc2e4\ud328 \uc2dc QueryErrorResetBoundary\uac00 \uc624\ub958\ub97c \uac10\uc9c0\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 ErrorBoundary\uc758 fallback\uc73c\ub85c \uc9c0\uc815\ud55c ErrorModal \ub610\ub294 ErrorSection\uc774 \ub9c8\uc6b4\ud2b8\ub429\ub2c8\ub2e4."}),"\n",(0,s.jsx)(e.p,{children:"API \uc694\uccad \uc2e4\ud328\uac00 \ud604\uc7ac \ud654\uba74\uc5d0 \ub07c\uce58\ub294 \uc601\ud5a5\uc5d0 \ub530\ub77c ErrorModal \ub610\ub294ErrorSection\uc744 \uc0ac\uc6a9\ud560 \uc9c0 \ud310\ub2e8\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(e.h4,{id:"errorsection",children:"ErrorSection"}),"\n",(0,s.jsxs)(e.p,{children:["\ud398\uc774\uc9c0\uac00 \ub80c\ub354\ub9c1\ub420 \ub54c \ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc640 \ud654\uba74\uc744 \uadf8\ub824\uc57c\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc624\ub294 \ub3d9\uc548 \ud654\uba74\uc5d0 \ub85c\ub529\uc744 \ubcf4\uc5ec\uc918\uc57c\ud558\uae30 \ub54c\ubb38\uc5d0, Suspense\uc640 \ud568\uaed8 ErrorBoundary\uc758 fallback\uc73c\ub85c ErrorSection\uc774 \uc801\uc6a9\ub41c ",(0,s.jsx)(e.code,{children:"ErrorSuspenseContainer"}),"\ucef4\ud3ec\ub10c\ud2b8\ub97c \uad6c\ud604\ud574 \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u25fe \uc798\ubabb\ub41c API \uc694\uccad\uc73c\ub85c \uc778\ud574 \ub370\uc774\ud130\ub97c \ubc1b\uc9c0 \ubabb\ud558\ub294 \uacbd\uc6b0 ErrorSection"})}),"\n",(0,s.jsx)("img",{style:{maxWidth:"600px",margin:"0 auto",display:"block"},src:i.A,alt:"\ub9ac\ubdf0 \uc81c\ucd9c \uc2e4\ud328 \uc2dc \ub098\uc624\ub294 ErrorModal"}),"\n",(0,s.jsx)(e.h4,{id:"errormodal",children:"ErrorModal"}),"\n",(0,s.jsx)(e.p,{children:"API \uc694\uccad \uc2e4\ud328\uac00 \ud654\uba74\uc5d0 \uc601\ud5a5\uc744 \uc8fc\uc9c0 \uc54a\uc740 \uacbd\uc6b0, \uc624\ub958 \uba54\uc138\uc9c0\ub97c \ud45c\uc2dc\ud560 \ud544\uc694\uac00 \uc5c6\uc73c\uba74 ErrorModal\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u25fe\ub9ac\ubdf0 \uc81c\ucd9c \uc2e4\ud328 \uc2dc ErrorModal"})}),"\n",(0,s.jsx)("img",{style:{maxWidth:"600px",margin:"0 auto",display:"block"},src:o.A,alt:"\ub9ac\ubdf0 \uc81c\ucd9c \uc2e4\ud328 \uc2dc \ub098\uc624\ub294 ErrorModal"}),"\n",(0,s.jsx)(e.h3,{id:"text",children:"text"}),"\n",(0,s.jsx)(e.p,{children:"API \uc694\uccad \uc2e4\ud328 \uc2dc, \ub2e8\uc21c\ud788 \uc624\ub958 \uba54\uc138\uc9c0\ub97c \ub744\uc6cc\uc57c \ud558\uba70 \ud604\uc7ac \ud654\uba74\uc5d0 \uc601\ud5a5\uc744 \uc8fc\uba74 \uc548\ub418\ub294 \uacbd\uc6b0\uc5d0\ub294 string \ud0c0\uc785\uc758 \uc624\ub958 \uba54\uc138\uc9c0\ub97c \ud654\uba74\uc5d0 \ud45c\uc2dc\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u25fe\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \ube44\ubc00 \ubc88\ud638 \uc870\ud68c \uc2dc, \uc624\ub958 \uba54\uc138\uc9c0"})}),"\n",(0,s.jsx)("img",{style:{maxWidth:"600px",margin:"0 auto",display:"block"},src:d.A,alt:"\ub9ac\ubdf0 \uc81c\ucd9c \uc2e4\ud328 \uc2dc \ub098\uc624\ub294 ErrorModal"}),"\n",(0,s.jsx)(e.h2,{id:"consoleerror",children:"console.error"}),"\n",(0,s.jsx)(e.p,{children:"js\uc624\ub958\ucc98\ub7fc \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc624\ub958 \uba54\uc138\uc9c0\ub97c \ubcf4\uc5ec\uc904 \ud544\uc694\uac00 \uc5c6\ub2e4\uba74, console.error\ub85c \ucf58\uc194\uc5d0\ub9cc \uc624\ub958\ub97c \ud45c\uc2dc\ud558\uae30\ub85c \ud588\ub2e4."}),"\n",(0,s.jsx)(e.h4,{id:"\ucc38\uace0\uc790\ub8cc",children:"\ucc38\uace0\uc790\ub8cc"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://shopping-developers.kakao.com/hc/ko/articles/4578818403343-%EC%9D%91%EB%8B%B5-%EC%BD%94%EB%93%9C-%EB%B0%8F-%EC%97%90%EB%9F%AC-%EC%BD%94%EB%93%9C",children:"\uce74\uce74\uc624\uc758 API \uacf5\ud1b5 \uac00\uc774\ub4dc- \uc751\ub2f5 \ucf54\ub4dc \ubc0f \uc5d0\ub7ec \ucf54\ub4dc"})}),"\n"]})]})}function p(r={}){const{wrapper:e}={...(0,t.R)(),...r.components};return e?(0,s.jsx)(e,{...r,children:(0,s.jsx)(u,{...r})}):u(r)}},3799:(r,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/errorModal-498c123d814d417192d2875f2e9ddb85.png"},6403:(r,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/errorPage-822e622bfcdb1d81b75c24c0de8dd902.png"},385:(r,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/errorSection-72fa99909fcc53df86e022c7f8a1adae.png"},975:(r,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/passwordError-1ede03e926fd0c2d9fae075d722eb490.png"},8453:(r,e,n)=>{n.d(e,{R:()=>o,x:()=>i});var s=n(6540);const t={},l=s.createContext(t);function o(r){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function i(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(t):r.components||t:o(r.components),s.createElement(l.Provider,{value:e},r.children)}}}]);