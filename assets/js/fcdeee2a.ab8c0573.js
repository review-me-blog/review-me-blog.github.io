"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[874],{7811:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>t,toc:()=>h});var o=i(4848),c=i(8453),s=i(1095);const r={slug:"versioning-nginx",title:"Nginx \uc124\uc815 \ud615\uc0c1\uad00\ub9ac\ud558\uae30",authors:["donghoony"],tags:["blog","infra"]},d=void 0,t={permalink:"/blog/versioning-nginx",editUrl:"https://github.com/review-me-blog/review-me-blog.github.io/tree/main/blog/2024-09-09-versioning-nginx/index.mdx",source:"@site/blog/2024-09-09-versioning-nginx/index.mdx",title:"Nginx \uc124\uc815 \ud615\uc0c1\uad00\ub9ac\ud558\uae30",description:"\uc774\uc804\uc758 \ub9ac\ubdf0\ubbf8\ub294 nginx \uc124\uc815\uc744 \ubc14\uafb8\uae30 \uc704\ud574 \uc9c1\uc811 \uc778\uc2a4\ud134\uc2a4\uc5d0 \uc811\uc18d\ud574\uc57c \ud588\uc2b5\ub2c8\ub2e4.",date:"2024-09-09T00:00:00.000Z",tags:[{inline:!0,label:"blog",permalink:"/blog/tags/blog"},{inline:!0,label:"infra",permalink:"/blog/tags/infra"}],readingTime:14.52,hasTruncateMarker:!1,authors:[{name:"\uc774\ub3d9\ud6c8 (\uc544\ub8e8)",title:"\ub9ac\ubdf0\ubbf8 BE",url:"https://github.com/donghoony",imageURL:"https://github.com/donghoony.png",key:"donghoony"}],frontMatter:{slug:"versioning-nginx",title:"Nginx \uc124\uc815 \ud615\uc0c1\uad00\ub9ac\ud558\uae30",authors:["donghoony"],tags:["blog","infra"]},unlisted:!1,lastUpdatedAt:1725964944e3,prevItem:{title:"\ud504\ub860\ud2b8 \uc5d4\ub4dc\uc758 \uc5d0\ub7ec \ud578\ub4e4\ub9c1 \uc804\ub7b5",permalink:"/blog/fe-error-handleing"},nextItem:{title:"\uc6b0\ub9ac \ud300\uc5d0 \ub9de\ub294 \ub3c4\uba54\uc778 \uc124\uacc4\ub294 \ubb34\uc5c7\uc77c\uae4c?",permalink:"/blog/domain-design-2"}},l={authorsImageUrls:[void 0]},h=[{value:"\ud83e\udd28 \uc11c\ub85c \ub2e4\ub978 \ud658\uacbd \uc124\uc815",id:"-\uc11c\ub85c-\ub2e4\ub978-\ud658\uacbd-\uc124\uc815",level:2},{value:"\ud83d\udd78\ufe0f nginx\ub97c Git\uc73c\ub85c \uad00\ub9ac\ud558\ub77c\uace0\uc694?",id:"\ufe0f-nginx\ub97c-git\uc73c\ub85c-\uad00\ub9ac\ud558\ub77c\uace0\uc694",level:2},{value:"\ud83d\udd25 \uc790\ub3d9\ud654 \uc2a4\ud06c\ub9bd\ud2b8 \uc791\uc131",id:"-\uc790\ub3d9\ud654-\uc2a4\ud06c\ub9bd\ud2b8-\uc791\uc131",level:2},{value:"\ubcc0\uacbd \uc0ac\ud56d\uc5d0 \ub530\ub77c \ub2e4\ub974\uac8c \uc801\uc6a9\ud558\uae30",id:"\ubcc0\uacbd-\uc0ac\ud56d\uc5d0-\ub530\ub77c-\ub2e4\ub974\uac8c-\uc801\uc6a9\ud558\uae30",level:3},{value:"\ube0c\ub79c\uce58\uc5d0 \ub530\ub77c \ub2e4\ub978 \uc778\uc2a4\ud134\uc2a4\uc5d0 \uc801\uc6a9\ud558\uae30",id:"\ube0c\ub79c\uce58\uc5d0-\ub530\ub77c-\ub2e4\ub978-\uc778\uc2a4\ud134\uc2a4\uc5d0-\uc801\uc6a9\ud558\uae30",level:3},{value:"\ud83d\udd0d \uacb0\uacfc \uc2a4\ud06c\ub9bd\ud2b8\uc640 \uc55e\uc73c\ub85c\uc758 \uc219\uc81c",id:"-\uacb0\uacfc-\uc2a4\ud06c\ub9bd\ud2b8\uc640-\uc55e\uc73c\ub85c\uc758-\uc219\uc81c",level:2}];function a(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["\uc774\uc804\uc758 \ub9ac\ubdf0\ubbf8\ub294 nginx \uc124\uc815\uc744 \ubc14\uafb8\uae30 \uc704\ud574 \uc9c1\uc811 \uc778\uc2a4\ud134\uc2a4\uc5d0 \uc811\uc18d\ud574\uc57c \ud588\uc2b5\ub2c8\ub2e4.\n\ub610, \uac1c\ubc1c \uc11c\ubc84\uc640 \uc6b4\uc601 \uc11c\ubc84\uc640\uc758 nginx \uc124\uc815\ub3c4 \uc11c\ub85c \ub2ec\ub790\uc2b5\ub2c8\ub2e4.\n\ud604\uc7ac\ub294 GitHub\uc5d0 ",(0,o.jsx)(e.code,{children:".conf"}),"\uc640 ",(0,o.jsx)(e.code,{children:"docker-compose.yml"})," \ud30c\uc77c\uc744 \uad00\ub9ac\ud558\uace0 \uc788\uace0, \ud574\ub2f9 \ubd80\ubd84\uc758 \ubcc0\uacbd \uc0ac\ud56d\uc774 \uc778\uc2a4\ud134\uc2a4\uc5d0 \uc804\ud30c\ub429\ub2c8\ub2e4.\n\uc774 \uae00\uc5d0\uc11c\ub294 \uc11c\ub85c \ub2e4\ub978 nginx \uc124\uc815 \uc815\ubcf4\ub97c \uc5b4\ub5bb\uac8c \ud1b5\ud569\ud588\ub294\uc9c0\uc5d0 \ub300\ud574\uc11c \ub2e4\ub8f9\ub2c8\ub2e4."]}),"\n",(0,o.jsx)(e.h2,{id:"-\uc11c\ub85c-\ub2e4\ub978-\ud658\uacbd-\uc124\uc815",children:"\ud83e\udd28 \uc11c\ub85c \ub2e4\ub978 \ud658\uacbd \uc124\uc815"}),"\n",(0,o.jsx)(e.p,{children:"\uc6b4\uc601 \uc11c\ubc84\uc640 \uac1c\ubc1c \uc11c\ubc84\ub85c \ubd84\ub9ac\ub418\ub294 \uc21c\uac04 \uad00\ub9ac\ud574\uc57c \ud558\ub294 \ubd80\ubd84\uc774 \ud558\ub098 \ub354 \uc0dd\uae30\uac8c \ub429\ub2c8\ub2e4.\n\uc778\uc2a4\ud134\uc2a4\uac00 \ucd5c\uc18c \ud55c \uac1c \ucd94\uac00\ub418\uae30\ub3c4 \ud558\uace0, \uc5ec\ub7ec \uc774\uc720\ub4e4\ub85c \uc778\ud574 \uc778\ud504\ub77c\uc5d0 \uc791\uc5c5\uc744 \ud574 \ub450\uc5c8\ub2e4\uba74 \ub354\uc6b1 \uadf8\ub807\uaca0\uc8e0.\n\ub9ac\ubdf0\ubbf8\ub3c4 https \ud1b5\uc2e0\uc744 \uc704\ud574 nginx\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc5c8\uace0, \uac1c\ubc1c \uc11c\ubc84\uc640 \uc6b4\uc601 \uc11c\ubc84\uc5d0 \uac01\uac01 \uc124\uce58\ub3fc \uc788\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,o.jsx)(e.p,{children:"\uad00\ub9ac \ud3ec\uc778\ud2b8\uac00 \ub9ce\uc544\uc9c4\ub2e4\ub294 \uac83\uc740 \uacb0\uad6d \ud55c \ubc88\uc758 \uc218\uc815\uc774 \uace7 \ub450 \ubc88\uc758 \uc218\uc815\uc774\ub77c\ub294 \uc758\ubbf8\uc785\ub2c8\ub2e4.\n\uac1c\ubc1c \uc11c\ubc84\uc5d0\uc11c \ucda9\ubd84\ud55c \ud14c\uc2a4\ud2b8 \ud6c4 \uc6b4\uc601 \uc11c\ubc84\ub85c \ubc18\uc601\ud574\uc57c \ud560 \ub54c\uc5d0\ub294, \uc5b4\ub5a4 \ubd80\ubd84\uc774 \uc218\uc815\ub418\uc5c8\ub294\uc9c0 \ub2e4\uc2dc \ube44\uad50\ud574\ubcf4\uc544\uc57c \ud574\uc694.\n\uc774 \uacfc\uc815\uc5d0\uc11c \uc2e4\uc218\ud560 \uc218 \uc788\ub294 \uac83\uc740 \ubd84\uba85\ud558\uac70\ub2c8\uc640 \uc2e4\uc218\ud558\ub354\ub77c\ub3c4 \ube60\ub974\uac8c \ubc14\ub85c\uc7a1\uc744 \uc218 \uc5c6\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,o.jsxs)(e.p,{children:["\uac00\ub9cc \ubd05\uc2dc\ub2e4. ",(0,o.jsx)(e.strong,{children:"\uc774\uac70 \uc5b4\ub514\uc5d0\uc11c \ub9ce\uc774 \ubcf8 \uc0c1\ud669 \uc544\ub2cc\uac00\uc694?"})]}),"\n",(0,o.jsxs)(e.p,{children:["\ucc98\uc74c \ud504\ub85c\uc81d\ud2b8\ub97c \uc2dc\uc791\ud558\uace0 \uc5bc\ub9c8 \uc548 \ub3fc \uac19\uc740 \uc77c\uc744 \uacaa\uc5c8\uc2b5\ub2c8\ub2e4.\n\ube4c\ub4dc\ud558\uace0, ",(0,o.jsx)(e.code,{children:".jar"})," \ud30c\uc77c\uc744 \ub9cc\ub4e4\uace0, \uc774\ub97c \uc778\uc2a4\ud134\uc2a4\ub85c \uc62e\uaca8 ",(0,o.jsx)(e.code,{children:"java -jar"})," \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 \uc11c\ubc84\ub97c \uc2e4\ud589\ud558\uae30\uae4c\uc9c0.\n\ubd88\ud3b8\ud568\uc740 \uc624\ub958\ub97c \ud68c\ubcf5\ud558\ub294 \uc2dc\uac04\uc744 \ub354\ub514\uac8c \ub9cc\ub4e4\uc5c8\uace0 \ud6a8\uc728\uc801\uc778 \uc5c5\ubb34\uc5d0 \ubc29\ud574\uac00 \ub420 \ubfd0\uc774\uc5c8\uc2b5\ub2c8\ub2e4.\n\uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 CD \uc790\ub3d9\ud654\ub97c \uc9c4\ud589\ud588\uc5b4\uc694. \uc2e4\ud589 \ud30c\uc77c\uc744 \ube4c\ub4dc\ud558\ub294 \uac83\ubd80\ud130 \uc2e4\uc81c \uc11c\ubc84\uc5d0 \uc5c5\ub85c\ub4dc \ubc0f \uc2e4\ud589\ud558\ub294 \uac83\uc744 \ube60\ub974\uac8c \ud655\uc778\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."]}),"\n",(0,o.jsx)(e.p,{children:"\uc77c\ub828\uc758 \uacfc\uc815\ub4e4\uc744 \uc778\ud504\ub77c\uc5d0\ub3c4 \uc801\uc6a9\ud560 \uc218 \uc788\uc9c0 \uc54a\uc744\uae4c\uc694?"}),"\n",(0,o.jsx)(e.h2,{id:"\ufe0f-nginx\ub97c-git\uc73c\ub85c-\uad00\ub9ac\ud558\ub77c\uace0\uc694",children:"\ud83d\udd78\ufe0f nginx\ub97c Git\uc73c\ub85c \uad00\ub9ac\ud558\ub77c\uace0\uc694?"}),"\n",(0,o.jsxs)(e.p,{children:["\ub124, \uc774\uc81c\ub294 nginx\uc758 \uc124\uc815 \ud30c\uc77c\uc744 Git\uc73c\ub85c \uad00\ub9ac\ud558\ub824\uace0 \ud569\ub2c8\ub2e4.\n\uc2e4\uc81c\ub85c nginx\uc5d0\uc11c \uc6b0\ub9ac\uc758 \uc124\uc815\uc740 ",(0,o.jsx)(e.code,{children:"nginx.conf"}),"\uc640 ",(0,o.jsx)(e.code,{children:"/conf.d"})," \ud558\uc704\uc758 \ud30c\uc77c\ub4e4\ub9cc \uad00\ub9ac\ub418\uace0 \uc788\uc5c8\uc5b4\uc694.\n\ucd94\uac00\uc801\uc73c\ub85c Https\ub97c \uc704\ud55c \uc778\uc99d\uc11c \ud0a4\uac00 ",(0,o.jsx)(e.code,{children:"/cert"})," \ub514\ub809\ud1a0\ub9ac\uc5d0 \uc874\uc7ac\ud569\ub2c8\ub2e4\ub9cc, \uc778\uc99d\uc11c\ub294 \uc774 \uae00\uc5d0\uc11c\ub294 \ub2e4\ub8e8\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."]}),"\n",(0,o.jsxs)(e.p,{children:["\uadf8\ub807\ub2e4\uba74 \uc6b0\ub9ac\uac00 \uad00\ub9ac\ud574\uc57c \ud558\ub294 \uac83\uc740 ",(0,o.jsx)(e.code,{children:"nginx.conf"}),", ",(0,o.jsx)(e.code,{children:"/conf.d"})," \ud558\uc704 \ud30c\uc77c\ub4e4, \uadf8\ub9ac\uace0 ",(0,o.jsx)(e.code,{children:"docker-compose.yml"}),"\uc774 \ub418\uaca0\uc2b5\ub2c8\ub2e4. \ub3c4\ucee4\ub97c \ud65c\uc6a9\ud55c \uac83\uc740 \uc6b4\uc601-\uac1c\ubc1c \uc11c\ubc84\uc758 \ud658\uacbd \ucc28\uc774\ub97c \ucd5c\ub300\ud55c \uc904\uc774\uae30 \uc704\ud568\uc774\uc5c8\uc9c0\ub9cc, \uac1c\ubc1c \uc11c\ubc84\uc5d0\uc11c \uc774\uac83\uc800\uac83 \uc2e4\ud5d8\ud574 \ubcf4\uba74\uc11c \uc6b4\uc601 \uc11c\ubc84\uc640\ub294 \ub2e4\ub978 \ud658\uacbd\uc774 \ub418\uc5b4\ubc84\ub838\uc5b4\uc694. \uc774 \ucc28\uc774\ub97c \uc904\uc774\uae30 \uc704\ud574\uc11c\ub77c\ub3c4 ",(0,o.jsx)(e.code,{children:"docker-compose.yml"})," \ub610\ud55c \ubc84\uc804 \uad00\ub9ac\ub97c \ud574\uc57c\ud560 \ud544\uc694\uc131\uc744 \ub290\uaf08\uc2b5\ub2c8\ub2e4."]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"docker-compose.yml"}),"\uc5d0\uc11c\ub294 \ud3ec\ud2b8 \ubc14\uc778\ub529, \ubaa8\ub2c8\ud130\ub9c1\uc744 \uc704\ud55c exporter, \ub124\ud2b8\uc6cc\ud06c \uc815\ubcf4\uac00 \ud3ec\ud568\ub3fc \uc788\uc2b5\ub2c8\ub2e4. \ub0b4\ubd80 \uc124\uc815\uc5d0 \ud544\uc694\ud55c \ubd80\ubd84\uacfc \ub85c\uae45\uc740 \ubaa8\ub450 \ud638\uc2a4\ud2b8\uc640 \ubcfc\ub968 \ub9e4\ud551\ub3fc \uc788\uc73c\ubbc0\ub85c, ",(0,o.jsx)(e.code,{children:"down"}),", ",(0,o.jsx)(e.code,{children:"up"}),"\uc744 \uc9c4\ud589\ud558\ub354\ub77c\ub3c4 \uc911\uc694\ud55c \ub370\uc774\ud130\ub294 \uc190\uc2e4\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774 \ud30c\uc77c\uc740 \uadf8\ub300\ub85c Git\uc5d0 \uc5c5\ub85c\ub4dc\ub418\uc5b4\ub3c4 \uad1c\ucc2e\uaca0\ub124\uc694!"]}),"\n",(0,o.jsx)(e.admonition,{type:"warning",children:(0,o.jsxs)(e.p,{children:["\uae30\ubcf8\uc801\uc73c\ub85c ",(0,o.jsx)(e.strong,{children:"Private repository"}),"\uc5d0 \uc5c5\ub85c\ub4dc\ub418\ub294 \uac83\uc744 \uc6d0\uce59\uc73c\ub85c \ud569\ub2c8\ub2e4.",(0,o.jsx)("br",{}),"\nPublic\uc5d0 \uc5c5\ub85c\ub4dc\ud558\ub294 \uacbd\uc6b0 ",(0,o.jsx)(e.strong,{children:"Actions secret"}),"\uc73c\ub85c \ub300\ubd80\ubd84\uc758 \uc815\ubcf4\ub97c \uacf5\uac1c\ud558\uc9c0 \uc54a\uc744 \uac83\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4."]})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-yaml",metastring:'title="docker-compose.yml"',children:"services:\n  nginx:\n    container_name: nginx\n    image: nginx:stable-alpine3.20\n    restart: always\n    volumes:\n      - ./nginx.conf:/etc/nginx/nginx.conf\n      - ./logs:/var/log/nginx\n      - ./conf.d:/etc/nginx/conf.d\n      - ./cert:/etc/nginx/cert\n    ports:\n      # ...\n\n  nginx_exporter:\n    container_name: nginx_exporter\n    depends_on:\n      - nginx\n    image: nginx/nginx-prometheus-exporter:1.3.0\n    # ...\n\nnetworks:\n  # ...\n"})}),"\n",(0,o.jsxs)(e.p,{children:["nginx \uc124\uc815 \ud30c\uc77c\uc5d0\ub294 \uc6b4\uc601 \uc11c\ubc84\uc640 \uac1c\ubc1c \uc11c\ubc84\uac00 \uc11c\ub85c \ub2e4\ub974\uac8c \uc801\ud600\uc57c\ud558\ub294 \ubd80\ubd84\uc774 \uc788\uc2b5\ub2c8\ub2e4. IP/Port\uc640 \uac19\uc740 ",(0,o.jsx)(e.code,{children:"upstream"})," \uc815\ubcf4\uc640 ",(0,o.jsx)(e.code,{children:"server_name"}),"\uc774\uc608\uc694. ",(0,o.jsx)(e.code,{children:"app-dev.conf"}),", ",(0,o.jsx)(e.code,{children:"app-prod.conf"}),"\uc640 \uac19\uc774 \ub450 \uac1c\uc758 \ud30c\uc77c\ub85c \uad00\ub9ac\ud574\uc57c \ud560\uae4c\uc694? \uc800\ud76c\ub294 \uad00\ub9ac \ud3ec\uc778\ud2b8\uac00 \ub298\uc5b4\ub098\ub294 \uac83\uc774 \uc2eb\uc5b4\uc11c \uc5ec\ub7ec \ubc29\ubc95\uc744 \ucc3e\uc544 \ubcf4\uc558\uc5b4\uc694."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-nginx",metastring:'configuration title="conf.d/app.conf"',children:"upstream app {\n    // highlight-next-line\n    server 10.1.2.3:8080; # \uac1c\ubc1c \uc11c\ubc84\uc640 \uc6b4\uc601 \uc11c\ubc84\uc640\uc758 IP\uc640 \ud3ec\ud2b8\uac00 \ub2e4\ub985\ub2c8\ub2e4\n}\n\nserver {\n    listen 80;\n    // highlight-next-line\n    server_name your-domain.here.com;\n    # https \ub9ac\ub2e4\uc774\ub809\uc158..\n}\n\nserver {\n    listen 443 ssl;\n    // highlight-next-line\n    server_name your-domain.here.com;\n    # \uc778\uc99d\uc11c, \ub9ac\ubc84\uc2a4 \ud504\ub85d\uc2f1 \uc124\uc815..\n}\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\ub9ac\ub205\uc2a4\uc5d0\uc11c\ub294 ",(0,o.jsx)(e.code,{children:"envsubst"}),"\ub77c\ub294 \ud504\ub85c\uadf8\ub7a8\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. ",(0,o.jsx)(e.code,{children:"environment variable substitution"}),", \ud658\uacbd \ubcc0\uc218 \uce58\ud658\uc774\uc608\uc694. \ubb38\uc790\uc5f4\uc744 \uc81c\uacf5\ud55c \ub4a4, \ub9ac\ub205\uc2a4 \ub0b4 \ud658\uacbd \ubcc0\uc218\uac00 \uc874\uc7ac\ud55c\ub2e4\uba74 \ud574\ub2f9 \ub0b4\uc6a9\uc73c\ub85c \uce58\ud658\ud569\ub2c8\ub2e4. \uc774\ub54c, ",(0,o.jsx)(e.code,{children:"${VAR_NAME}"}),"\uc640 \uac19\uc740 \ud615\ud0dc\ub85c \uc81c\uacf5\ud574\uc57c \ud574\uc694."]}),"\n",(0,o.jsx)(e.p,{children:"\uadf8\ub807\ub2e4\uba74 \ud658\uacbd \ubcc0\uc218\uc5d0 \uc11c\ubc84\uc640 \ub3c4\uba54\uc778 \uc815\ubcf4\ub97c \ubbf8\ub9ac \ub123\uc5b4\ub454 \ub4a4, \uc124\uc815 \ud30c\uc77c\uc5d0 \uce58\ud658\ud560 \ubcc0\uc218\ub97c \ucd94\uac00\ud55c\ub2e4\uba74 \uc5b4\ub5a8\uae4c\uc694? \uc544\ub798\uc640 \uac19\uc740 \ubaa8\uc2b5\uc774 \ub418\uaca0\uc2b5\ub2c8\ub2e4. \ud658\uacbd \ubcc0\uc218\ub97c \uc5b4\ub5bb\uac8c \uc124\uc815\ud560\uc9c0\ub294 GitHub Actions\uc5d0\uc11c \ub2e4\uc2dc \uc124\uba85\ub4dc\ub9ac\ub3c4\ub85d \ud560\uac8c\uc694!"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-nginx",metastring:'configuration title="conf.d/app.conf"',children:"upstream app {\n// highlight-next-line\n    server ${UPSTREAM_URL};\n}\n\nserver {\n    listen 80;\n    // highlight-next-line\n    server_name ${SERVER_URL};\n}\n\nserver {\n  listen 443 ssl;\n  // highlight-next-line\n  server_name ${SERVER_URL};\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"-\uc790\ub3d9\ud654-\uc2a4\ud06c\ub9bd\ud2b8-\uc791\uc131",children:"\ud83d\udd25 \uc790\ub3d9\ud654 \uc2a4\ud06c\ub9bd\ud2b8 \uc791\uc131"}),"\n",(0,o.jsx)(e.p,{children:"\uc774\uc81c\ub294 \ubaa8\ub4e0 \uac83\uc774 Git\uc73c\ub85c \uad00\ub9ac\ub418\uace0 \uc788\uace0, \ubcc0\uacbd \uc0ac\ud56d\uc744 \uc778\uc2a4\ud134\uc2a4\uc5d0 \uc801\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4. CI/CD\ub97c \uc801\uc6a9\ud588\uc744 \ub54c\ucc98\ub7fc, GitHub Actions\ub97c \ud65c\uc6a9\ud574 \uc778\uc2a4\ud134\uc2a4\uc5d0 \ubc18\uc601\ud574 \ubd05\uc2dc\ub2e4. \ub514\ub809\ud1a0\ub9ac \uad6c\uc870\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"\ud83d\uddc2\ufe0f nginx\n \u221f \ud83d\uddc2\ufe0f conf.d\n     \u221f \u2b22 app.conf\n    \ud83d\udc33 docker-compose.yml\n    \u2b22 nginx.conf\n"})}),"\n",(0,o.jsx)(e.h3,{id:"\ubcc0\uacbd-\uc0ac\ud56d\uc5d0-\ub530\ub77c-\ub2e4\ub974\uac8c-\uc801\uc6a9\ud558\uae30",children:"\ubcc0\uacbd \uc0ac\ud56d\uc5d0 \ub530\ub77c \ub2e4\ub974\uac8c \uc801\uc6a9\ud558\uae30"}),"\n",(0,o.jsx)(e.p,{children:"\uba87 \uac00\uc9c0 \ub530\uc838\ubd10\uc57c \ud560 \uac83\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c\uacfc \uac19\uc774 \ub450 \uac00\uc9c0 \uacbd\uc6b0\ub85c \ub098\ub258\ub294\ub370\uc694,"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"docker-compose"}),"\uac00 \ubcc0\uacbd\ub418\ub294 \uacbd\uc6b0"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:".conf"})," \ud30c\uc77c\ub9cc \ubcc0\uacbd\ub418\ub294 \uacbd\uc6b0"]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["\uc804\uc790\uc758 \uacbd\uc6b0 \ucee8\ud14c\uc774\ub108\ub97c \ub2e4\uc2dc \ub744\uc6cc\uc57c \ud558\uaca0\uc9c0\ub9cc, \ud6c4\uc790\uc758 \uacbd\uc6b0\uc5d0\ub294 nginx\uc5d0\uac8c \uc0c8\ub85c\uace0\uce68 \uba85\ub839\ub9cc \ub0b4\ub9ac\uba74 \ub429\ub2c8\ub2e4. \uc989 ",(0,o.jsx)(e.code,{children:".conf"}),"\ub9cc \ubcc0\uacbd\ub418\uc5c8\uc744 \ub54c \ucee8\ud14c\uc774\ub108\uac00 \ub2e4\uc2dc \ub744\uc6cc\uc9c8 \ud544\uc694\uac00 \uc5c6\ub2e4\ub294 \uc758\ubbf8\uc785\ub2c8\ub2e4. \uc774\ub97c \uc5b4\ub5bb\uac8c \ud310\ub2e8\ud560 \uc218 \uc788\uc744\uae4c\uc694?"]}),"\n",(0,o.jsxs)(e.p,{children:["\uc6b0\uc120 workflow\uac00 \ub3cc\uc544\uac00\uae30 \uc704\ud574 ",(0,o.jsx)(e.code,{children:"/nginx"})," \uc544\ub798 \ud30c\uc77c\uc774 \ubc14\ub00c\uc5b4\uc57c \ud55c\ub2e4\ub294 \uc804\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ud574\ub2f9 \uc2a4\ud06c\ub9bd\ud2b8\uac00 \ub3cc\uc544\uac04\ub2e4\ub294 \uc758\ubbf8\ub294 ",(0,o.jsx)(e.code,{children:"/nginx"})," \ub0b4\ubd80\uc5d0 \ubcc0\uacbd\uc774 \uc77c\uc5b4\ub0ac\ub2e4\ub294 \uac83\uacfc \uac19\uc544\uc694.\n\uadf8\ub807\ub2e4\uba74 \ucee4\ubc0b \uc774\ub825\uc5d0\uc11c ",(0,o.jsx)(e.code,{children:"docker-compose.yml"}),"\uc774 \ubcc0\uacbd\ub418\uc5c8\ub294\uc9c0\ub9cc \ud655\uc778\ud558\uba74 \ub418\uc9c0 \uc54a\uc744\uae4c\uc694?"]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"actions/checkout@v4"}),"\uc5d0\uc11c\ub294 workflow\ub97c \uc2e4\ud589\ud558\uac8c \ud55c \ube0c\ub79c\uce58\ub97c \uac00\uc838\uc635\ub2c8\ub2e4. \uc774\ub97c \ud65c\uc6a9\ud574 \uc774\uc804 \ucee4\ubc0b\uacfc \ud604\uc7ac \ucee4\ubc0b\uc744 \ube44\uad50\ud574 \ubd05\uc2dc\ub2e4. \ube0c\ub79c\uce6d \uc804\ub7b5\uc744 \uc870\uae08 \ud65c\uc6a9\ud55c\ub2e4\uba74 \ubb38\uc81c\ub97c \ud574\uacb0\ud560 \uc218 \uc788\uc5b4\uc694."]}),"\n",(0,o.jsx)("img",{src:s.A,alt:"git"}),"\n",(0,o.jsxs)(e.p,{children:["PR\uc744 \ud1b5\ud574 Squash and merge\ub97c \uc9c4\ud589\ud558\uac8c \ub418\uba74 \ubcc0\uacbd \uc774\ub825\uc774 \ud558\ub098\uc758 \ucee4\ubc0b\uc73c\ub85c \ubc14\ub00c\uac8c \ub429\ub2c8\ub2e4(\uadf8\ub9bc \uc67c\ucabd). \uc9c1\uc804 \ucee4\ubc0b\uacfc Squash\ub41c \ud604\uc7ac \ucee4\ubc0b\uc744 \ube44\uad50\ud574 ",(0,o.jsx)(e.code,{children:"docker-compose.yml"}),"\uc774 \uc874\uc7ac\ud558\ub294\uc9c0 \ucc3e\uc544\ubcf4\ub294 \uac83\ub3c4 \ud558\ub098\uc758 \ubc29\ubc95\uc785\ub2c8\ub2e4. Merge commit\uc744 \uc0ac\uc6a9\ud558\uac8c \ub41c\ub2e4\uba74 \uc704 \uadf8\ub9bc\uacfc \uac19\uc740 \uc0c1\ud669\uc5d0\uc11c ",(0,o.jsx)(e.code,{children:"docker-compose.yml"}),"\uc758 \ubcc0\uacbd \uc0ac\ud56d\uc744 \ub208\uce58\ucc4c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"git diff HEAD^ HEAD"}),"\ub97c \ud1b5\ud574 ",(0,o.jsx)(e.code,{children:"HEAD"}),"\uc758 \ubd80\ubaa8 \ucee4\ubc0b\uacfc ",(0,o.jsx)(e.code,{children:"HEAD"})," \ucee4\ubc0b\uc744 \ube44\uad50\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,o.jsx)(e.code,{children:"--name-only"})," \uc635\uc158\uc744 \uc0ac\uc6a9\ud558\uba74 \ubcc0\uacbd\ub41c \ud30c\uc77c\ub9cc\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc8e0. \uc774\ub97c ",(0,o.jsx)(e.code,{children:"grep"}),"\uc744 \ud1b5\ud574 \ubc1b\uc544\ub0b4 \ubd05\uc2dc\ub2e4. \ud574\ub2f9 \uac12\uc774 \uc874\uc7ac\ud55c\ub2e4\uba74 ",(0,o.jsx)(e.code,{children:"docker-compose"})," \uc124\uc815\uc774 \ubcc0\uacbd\ub41c \uac83\uc774\uace0, \uadf8\ub807\uc9c0 \uc54a\ub2e4\uba74 ",(0,o.jsx)(e.code,{children:".conf"}),"\ub9cc\uc774 \ubcc0\uacbd\ub418\uc5c8\uaca0\uc8e0? \uadf8\ub9bc\uc744 \uc544\ub798\uc640 \uac19\uc740 \uae00\ub85c \ud480\uc5b4\ubd05\uc2dc\ub2e4."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-plaintext",children:"# Merge commit\uc774 \uc9c4\ud589\ub418\ub294 \uacbd\uc6b0, HEAD^\uc5d0 \ube44\ud574 HEAD\uc5d0 \ubcc0\uacbd\ub41c \uac83\uc740 conf/app.conf \ubfd0\uc774\ub2e4.\n// highlight-next-line\nHEAD  | commit ab92d1: modified conf/app.conf\nHEAD^ | commit 3f4a2d: modified nginx.conf\n      | commit bbacf6: modified docker-compose.yml\n---\n# Squash and merge\uac00 \uc9c4\ud589\ub418\ub294 \uacbd\uc6b0 \uc138 \uac1c\uc758 \ucee4\ubc0b\uc774 \ud558\ub098\uc758 \ucee4\ubc0b\uc73c\ub85c \ud569\uccd0\uc9d0\n// highlight-next-line\nHEAD  | commit f0139c: modified nginx.conf, conf.d/app.conf, docker-compose.yml\nHEAD^ | commit facc24: modified readme.md\n"})}),"\n",(0,o.jsx)(e.p,{children:"\ud574\ub2f9 \uaddc\uce59\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0 \ub2e4\uc591\ud55c \ubc29\ubc95\uc744 \ud65c\uc6a9\ud574 \ubcc0\uacbd\uc0ac\ud56d\uc744 \ucc3e\uc544\ub0bc \uc218\ub3c4 \uc788\uaca0\uc9c0\ub9cc, \uc800\ud76c\uac00 \ucc3e\uc740 \ud6a8\uc728\uc801\uc778 \ubc29\ubc95 \uc911 \ud558\ub098\ub77c \uc0ac\uc6a9\ud558\uac8c \ub418\uc5c8\uc5b4\uc694."}),"\n",(0,o.jsx)(e.admonition,{type:"info",children:(0,o.jsxs)(e.p,{children:["GitHub Actions\uc758 ",(0,o.jsx)(e.code,{children:"actions/checkout@v4"}),"\ub97c \ud65c\uc6a9\ud55c\ub2e4\uba74, ",(0,o.jsx)(e.code,{children:"fetch-depth"}),"\uac00 \uae30\ubcf8\uc73c\ub85c 1\uc774\ub77c \uac00\uc7a5 \ucd5c\uadfc \ucee4\ubc0b\ub9cc\uc744 \ubd88\ub7ec\uc624\uac8c \ub429\ub2c8\ub2e4. ",(0,o.jsx)(e.code,{children:"HEAD"}),"\uc640 \uadf8 \ubd80\ubaa8 \ucee4\ubc0b\uc744 \ube44\uad50\ud558\uae30 \uc704\ud574\uc11c\ub294 \ucd5c\uc18c ",(0,o.jsx)(e.strong,{children:"2 \uc774\uc0c1\uc758 \uac12"}),"\uc73c\ub85c \uc124\uc815\ud574\uc57c \ud569\ub2c8\ub2e4."]})}),"\n",(0,o.jsx)(e.h3,{id:"\ube0c\ub79c\uce58\uc5d0-\ub530\ub77c-\ub2e4\ub978-\uc778\uc2a4\ud134\uc2a4\uc5d0-\uc801\uc6a9\ud558\uae30",children:"\ube0c\ub79c\uce58\uc5d0 \ub530\ub77c \ub2e4\ub978 \uc778\uc2a4\ud134\uc2a4\uc5d0 \uc801\uc6a9\ud558\uae30"}),"\n",(0,o.jsxs)(e.p,{children:["\ud55c \uac00\uc9c0 \ub354 \uc2e0\uacbd\uc368\uc57c\ud560 \uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ubc14\ub85c \uac1c\ubc1c \uc11c\ubc84\uc640 \uc6b4\uc601 \uc11c\ubc84\uac00 \ubd84\ub9ac\ub418\uc5b4\uc788\ub2e4\ub294 \uc810\uc774\uc608\uc694. Actions\uac00 \uac1c\ubc1c \uc11c\ubc84\uc5d0\ub9cc \ubd99\uc5b4\uc788\ub2e4\uba74 \uc704\ucabd\uc5d0\uc11c ",(0,o.jsx)(e.code,{children:"envsubst"}),"\ub97c \ud560 \uc774\uc720\ub3c4 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc591\ud55c \uc11c\ubc84\uc5d0 \uc801\uc808\ud558\uac8c \uac12\uc744 \uc8fc\uc785\ud558\uace0 \uc124\uc815\uc744 \uc801\uc6a9\ud574\uc57c \ud588\uae30\uc5d0, \ubcf4\ub2e4 \uc720\uc5f0\ud558\uac8c \uc791\uc131\ud574\uc57c \ud574\uc694."]}),"\n",(0,o.jsxs)(e.p,{children:["\uac1c\ubc1c \uc11c\ubc84\uc640 \uc6b4\uc601 \uc11c\ubc84\uc5d0 \ubcc0\ub3d9\uc774 \uc77c\uc5b4\ub0ac\uc74c\uc744 \uc5b4\ub5bb\uac8c \uc54c \uc218 \uc788\uc744\uae4c\uc694? \uc800\ud76c\ub294 \ube0c\ub79c\uce58 \uc774\ub984\uc5d0 \ub530\ub77c \uc774\ub97c \ubd84\uae30\ud588\uc2b5\ub2c8\ub2e4. ",(0,o.jsx)(e.code,{children:"runs-on"}),"\uc744 \uc54c\uc544\ub0b4\uae30 \uc704\ud574 \uc6b0\uc120 \ube0c\ub79c\uce58 \uc774\ub984\uc744 \uac00\uc838\uc624\uace0, \uc774\ub97c \uae30\ubc18\uc73c\ub85c ",(0,o.jsx)(e.code,{children:"job"}),"\uc774 \ub3cc\uc544\uac08 \ub7ec\ub108\ub97c \uc120\ud0dd\ud558\ub3c4\ub85d \ud588\uc5b4\uc694. ",(0,o.jsx)(e.code,{children:"outputs"}),"\ub97c \ud1b5\ud574 \uac01 ",(0,o.jsx)(e.code,{children:"step"}),"\uc5d0\uc11c ",(0,o.jsx)(e.code,{children:"$GITHUB_OUTPUT"}),"\uc73c\ub85c \uc4f0\uc778 \uac12\ub4e4\uc744 \uc11c\ub85c \uacf5\uc720\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,o.jsx)(e.a,{href:"https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/passing-information-between-jobs",children:(0,o.jsx)(e.strong,{children:"\uc774\uacf3"})}),"\uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694!"]}),"\n",(0,o.jsx)(e.h2,{id:"-\uacb0\uacfc-\uc2a4\ud06c\ub9bd\ud2b8\uc640-\uc55e\uc73c\ub85c\uc758-\uc219\uc81c",children:"\ud83d\udd0d \uacb0\uacfc \uc2a4\ud06c\ub9bd\ud2b8\uc640 \uc55e\uc73c\ub85c\uc758 \uc219\uc81c"}),"\n",(0,o.jsx)(e.p,{children:"\ucd5c\uc885\uc801\uc73c\ub85c \uc544\ub798\uc640 \uac19\uc740 \uc2a4\ud06c\ub9bd\ud2b8\uac00 \ub9cc\ub4e4\uc5b4\uc9d1\ub2c8\ub2e4. \uc774\uc81c nginx \uc124\uc815\uc744 \uc704\ud574 \uc778\uc2a4\ud134\uc2a4\uc5d0 \ud130\ubbf8\ub110\ub85c \uc811\uc18d\ud558\ub358 \uc2dc\uc808\uc740 \uc548\ub155. \ubcf4\ub2e4 \uc548\uc804\ud558\uace0 \uae54\ub054\ud558\uac8c, \ud55c \uacf3\uc758 \ubcc0\ud654\ub85c \ubaa8\ub4e0 \uacf3\uc5d0 \uc801\uc6a9\ud560 \uc218 \uc788\ub294 \uc81c\ubc18\uc774 \ub9c8\ub828\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc800\ud76c \ubaa9\ud45c\ub294 \uc5b8\uc820\uac00 \ubaa8\ub4e0 \uc778\ud504\ub77c\ub97c \ud130\ubbf8\ub110\uc744 \ub4e4\uc5b4\uac00\uc9c0 \uc54a\uace0 \uad00\ub9ac\ud558\ub294 \uac83\uc774\uc608\uc694. \uafb8\uc900\ud558\uac8c \ubd88\ud3b8\ud55c \uac83\uc744 \ubc16\uc5d0\uc11c \uc27d\uac8c \uc801\uc6a9\ud558\ub3c4\ub85d \ud558\uba74 \uc5b8\uc820\uac00 \ud560 \uc218 \uc788\uc9c0 \uc54a\uc744\uae4c\uc694? \ud83d\ude0b"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-yaml",metastring:'showLineNumbers title=".github/workflows/nginx.yml"',children:"name: 'Configure nginx'\n\non:\n  push:\n    branches:\n      - develop\n      - release\n    paths:\n      - 'nginx/**'\n  workflow_dispatch:\n\nenv:\n  WORKING_DIRECTORY: '/home/ubuntu/nginx'\n  DEV_SERVER_URL: 'develop-domain.com'\n  DEV_UPSTREAM_URL: '1.2.3.4:8080'\n  PROD_SERVER_URL: 'production-domain.com'\n  PROD_UPSTREAM_URL: '5.6.7.8:8082'\n\njobs:\n  select-environment:\n    runs-on: ubuntu-latest\n    outputs:\n      instance: ${{ steps.set-env.outputs.instance }}\n    steps:\n      - name: Select instance\n        id: set-env\n        run: |\n          if [[ '${{ github.ref }}' = 'refs/heads/release' ]]; then\n            echo \"instance=prod\" >> \"$GITHUB_OUTPUT\"\n          else\n            echo \"instance=dev\" >> \"$GITHUB_OUTPUT\"\n          fi\n\n  configure-nginx:\n    needs: select-environment\n    runs-on: ${{ needs.select-environment.outputs.instance }}\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v4\n        with:\n          fetch-depth: 2\n\n      - name: Set environment variables\n        run: |\n          if [[ '${{ github.ref }}' = 'refs/heads/release' ]]; then\n            echo 'Setting prod environment variables'\n            echo 'SERVER_URL=${{ env.PROD_SERVER_URL }}' >> $GITHUB_ENV\n            echo 'UPSTREAM_URL=${{ env.PROD_UPSTREAM_URL }}' >> $GITHUB_ENV\n          else\n            echo 'Setting dev environment variables'\n            echo 'SERVER_URL=${{ env.DEV_SERVER_URL }}' >> $GITHUB_ENV\n            echo 'UPSTREAM_URL=${{ env.DEV_UPSTREAM_URL }}' >> $GITHUB_ENV\n          fi\n\n      - name: Replace variables using envsubst\n        run: |\n          cat ./nginx/conf.d/app.conf | envsubst '${SERVER_URL},${UPSTREAM_URL}' > ./nginx/conf.d/app.conf.tmp\n          mv ./nginx/conf.d/app.conf.tmp ./nginx/conf.d/app.conf\n\n      - name: Copy nginx configuration files\n        run: cp -r ./nginx/* ${{ env.WORKING_DIRECTORY }}\n\n      - name: Restart docker if docker-compose has changed, else reload nginx\n        run: |\n          if [[ -n $(git diff --name-only HEAD^ HEAD | grep 'docker-compose.yml') ]]; then\n            cd ${{ env.WORKING_DIRECTORY }}\n            sudo docker-compose down || true\n            sudo docker-compose up -d\n            echo 'Docker restarted'\n          else\n            sudo docker exec nginx nginx -s reload\n            echo 'Nginx reloaded'\n          fi\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\uc5ec\uc804\ud788 \ud574\uacb0\ud574\uc57c \ud560 \uacfc\uc81c\ub294 \ub0a8\uc544 \uc788\uc2b5\ub2c8\ub2e4. \uac01\uac01\uc758 ",(0,o.jsx)(e.code,{children:".conf"})," \ud30c\uc77c\uacfc ",(0,o.jsx)(e.code,{children:"docker-compose.yml"})," \ud30c\uc77c\uc774 \uc62c\ubc14\ub978 \ubb38\ubc95\uc744 \uac16\ucd94\uace0 \uc788\ub294\uc9c0 \ud655\uc778\ud560 \ubc29\ubc95\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. ",(0,o.jsx)(e.code,{children:"nginx -t"}),"\ub97c \ud1b5\ud574 \uc124\uc815 \ud30c\uc77c \ubb38\ubc95\uc744 \ud655\uc778\ud574\uc57c \ud558\ub294\ub370, \uc774 \ubd80\ubd84\uc744 \uc870\uae08 \ub354 \uacf5\ubd80\ud574\ubcf4\uc544\uc57c\uaca0\uc2b5\ub2c8\ub2e4."]})]})}function x(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},1095:(n,e,i)=>{i.d(e,{A:()=>o});const o=i.p+"assets/images/git-dcff4c8e0f33132e17b5ac154c2b15bd.png"},8453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>d});var o=i(6540);const c={},s=o.createContext(c);function r(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);