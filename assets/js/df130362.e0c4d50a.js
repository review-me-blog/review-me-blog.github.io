"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3906],{8011:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var i=s(4848),t=s(8453),o=s(9556),r=s(2015);const l={slug:"ci-cd",title:"GitHub Actions\ub97c \ud65c\uc6a9\ud55c CI/CD (Self-Hosted Runner)",authors:["donghoony"],tags:["review-me","blog","backend","ci/cd","github-actions"]},c=void 0,d={permalink:"/blog/ci-cd",editUrl:"https://github.com/review-me-blog/review-me-blog.github.io/tree/main/blog/2024-07-21-cicd/index.mdx",source:"@site/blog/2024-07-21-cicd/index.mdx",title:"GitHub Actions\ub97c \ud65c\uc6a9\ud55c CI/CD (Self-Hosted Runner)",description:"Continuous Integration",date:"2024-07-21T00:00:00.000Z",tags:[{inline:!0,label:"review-me",permalink:"/blog/tags/review-me"},{inline:!0,label:"blog",permalink:"/blog/tags/blog"},{inline:!1,label:"backend",permalink:"/blog/tags/backend",description:"\ubc31\uc5d4\ub4dc \uac1c\ubc1c \uc0c1\ud669\uc744 \uacf5\uc720\ud569\ub2c8\ub2e4."},{inline:!0,label:"ci/cd",permalink:"/blog/tags/ci-cd"},{inline:!0,label:"github-actions",permalink:"/blog/tags/github-actions"}],readingTime:17.825,hasTruncateMarker:!1,authors:[{name:"\uc774\ub3d9\ud6c8 (\uc544\ub8e8)",title:"\ub9ac\ubdf0\ubbf8 BE",url:"https://github.com/donghoony",imageURL:"https://github.com/donghoony.png",key:"donghoony"}],frontMatter:{slug:"ci-cd",title:"GitHub Actions\ub97c \ud65c\uc6a9\ud55c CI/CD (Self-Hosted Runner)",authors:["donghoony"],tags:["review-me","blog","backend","ci/cd","github-actions"]},unlisted:!1,lastUpdatedAt:1721503764e3,nextItem:{title:"\uc548\ub155\ud558\uc138\uc694, \ub9ac\ubdf0\ubbf8!",permalink:"/blog/hello-world"}},a={authorsImageUrls:[void 0]},h=[{value:"Continuous Integration",id:"continuous-integration",level:2},{value:"CI with GitHub Actions",id:"ci-with-github-actions",level:2},{value:"\ud83d\udcda \uc6a9\uc5b4 \uc815\ub9ac",id:"-\uc6a9\uc5b4-\uc815\ub9ac",level:3},{value:"\ud83d\udd0d \uc694\uad6c\uc0ac\ud56d \uc815\uc758 \ubc0f \ubd84\uc11d",id:"-\uc694\uad6c\uc0ac\ud56d-\uc815\uc758-\ubc0f-\ubd84\uc11d",level:3},{value:"\ud83d\udcdd Workflow \ud30c\uc77c \uc791\uc131\ud558\uae30",id:"-workflow-\ud30c\uc77c-\uc791\uc131\ud558\uae30",level:3},{value:"Continuous Deployment",id:"continuous-deployment",level:2},{value:"\ud83e\udd14 Delivery? Deployment?",id:"-delivery-deployment",level:3},{value:"\ud83d\udeab \uc81c\uc57d \uc0ac\ud56d",id:"-\uc81c\uc57d-\uc0ac\ud56d",level:3},{value:"\ud83d\ude80 Self-hosted runner \uad6c\uc131\ud558\uae30",id:"-self-hosted-runner-\uad6c\uc131\ud558\uae30",level:3},{value:"\ud83d\udd0d \uc694\uad6c\uc0ac\ud56d \uc815\uc758 \ubc0f \ubd84\uc11d",id:"-\uc694\uad6c\uc0ac\ud56d-\uc815\uc758-\ubc0f-\ubd84\uc11d-1",level:3},{value:"\ud83d\udcdd Workflow \ud30c\uc77c \uc791\uc131\ud558\uae30",id:"-workflow-\ud30c\uc77c-\uc791\uc131\ud558\uae30-1",level:3}];function u(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"continuous-integration",children:"Continuous Integration"}),"\n",(0,i.jsx)(e.p,{children:"CI\ub294 \uc77c\ub828\uc758 \uad6c\uccb4\uc801\uc778 \uacfc\uc815\uc744 \uc758\ubbf8\ud558\uae30\ubcf4\ub2e4\ub294, \uac1c\ubc1c \ubc29\uc2dd \uc911 \ud558\ub098\ub97c \ub73b\ud569\ub2c8\ub2e4.\n\uae30\ub2a5\uc744 \uad6c\ud604\ud558\uace0, \uae30\uc874 \uc800\uc7a5\uc18c\uc5d0 \uc0c8\ub85c\uc6b4 \uae30\ub2a5\uc744 \ubcd1\ud569\ud558\ub294 \uc77c\ub828\uc758 \uacfc\uc815\uc744 \ub9d0\ud558\uc8e0.\n\uc774\ub54c \ube4c\ub4dc/\ud1b5\ud569 \uc624\ub958\ub97c \uac00\ub2a5\ud55c \ud55c \ube60\ub974\uac8c \ucc3e\uc544\ub0b4\uc57c \ud558\uba70, \uc774\ub54c \uc790\ub3d9\ud654 \ube4c\ub4dc\ub098 \ud14c\uc2a4\ud2b8 \ub3c4\uad6c\uac00 \ud65c\uc6a9\ub429\ub2c8\ub2e4.\n\uc774 \uc911 \ud558\ub098\ub85c Jenkins, GitHub Actions\uc640 \uac19\uc740 CI/CD \ub3c4\uad6c\ub4e4\uc774 \uc0ac\uc6a9\ub3fc\uc694."}),"\n",(0,i.jsx)(e.p,{children:"\uc774\uc288\ub97c \ubc1c\ud589\ud574 \ud560 \uc77c\uc744 \ub9cc\ub4e4\uace0, PR\uc744 \ud1b5\ud574 \uc11c\ub85c \ub9ac\ubdf0\ud558\uace0 \uba38\uc9c0\ud558\uae30. \ucd94\uac00\uc801\uc778 \ud14c\uc2a4\ud2b8\ub098 \uc790\ub3d9\ud654 \ube4c\ub4dc \ub3c4\uad6c\uac00 \ud544\uc694\ud560\uae4c\uc694?\n\uc11c\ub85c \ud655\uc778\ud588\uc73c\ub2c8 \ubbff\uace0 \uc0ac\uc6a9\ud574\ub3c4 \ub418\uc9c0 \uc54a\uc744\uae4c\uc694? \uc2e4\uc81c\ub85c \ud300 \ub0b4\uc5d0\uc11c \uc11c\ub85c \ub2e4\ub978 \uae30\ub2a5\uc744 \uba38\uc9c0\ud558\ub824\ub294 \ub3c4\uc911 \ucda9\ub3cc\uc774 \ubc1c\uc0dd\ud588\uc5b4\uc694.\n\uc774\ub97c \uc798 \ud574\uacb0\ud55c \ub4a4 \uba38\uc9c0\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc544\ub798\uc640 \uac19\uc740 \uc77c\uc774 \ucd94\uac00\ub85c \ubc1c\uc0dd\ud588\uc5b4\uc694."}),"\n",(0,i.jsx)("p",{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:o.A,style:{width:"70%"}})}),"\n",(0,i.jsxs)(e.p,{children:["\uc0ac\ub78c\uc740 \uc2e4\uc218\ud558\uae30 \ub9c8\ub828\uc785\ub2c8\ub2e4. \ucf54\ub4dc\uc5d0 \ubcc0\ud654\uac00 \uc788\uc5c8\uc74c\uc5d0\ub3c4 \ud68c\uadc0 \ud14c\uc2a4\ud2b8",(0,i.jsx)("sub",{children:"regression test"}),"\ub97c \uc9c4\ud589\ud558\uc9c0 \uc54a\uc558\uc5b4\uc694. \uacb0\uad6d \ud14c\uc2a4\ud2b8\ub418\uc9c0 \uc54a\uc740 \ucf54\ub4dc\uac00 PR\uc5d0 \ud3ec\ud568\ub410\uc5b4\uc694.\n\uc774\ub97c \ub2e4\ub978 \ud300\uc6d0\ub4e4\ub3c4 \ud655\uc778\ud558\uc9c0 \ubabb\ud574 \uc2e4\uc81c \uac1c\ubc1c \uc11c\ubc84\uc5d0 \uba38\uc9c0\ub410\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \ub2e4\uc2dc \uc774\uc288\ub97c \uc791\uc131\ud558\uace0, \ud56b\ud53d\uc2a4\ub97c \uc801\uc6a9\ud558\uace0, \u2026 \ud83d\ude2e\u200d\ud83d\udca8"]}),"\n",(0,i.jsx)(e.p,{children:"\ud14c\uc2a4\ud2b8\uc640 \ube4c\ub4dc\uac00 \ub9e4 PR\ub9c8\ub2e4, PR \uc548\uc758 \ucee4\ubc0b\ub9c8\ub2e4 \uc9c4\ud589\ub41c\ub2e4\uba74 \ud3b8\ub9ac\ud558\uc9c0 \uc54a\uc744\uae4c\uc694? \ub9cc\uc57d \uc2e4\ud328\ud55c\ub2e4\uba74 \uc800\uc7a5\uc18c\uc5d0 \ud1b5\ud569\ud558\ub294 \uac83\uc774 \uc2e4\ud328\ud558\ub3c4\ub85d \ud55c\ub2e4\uba74 \ub354 \uc88b\uaca0\uc2b5\ub2c8\ub2e4.\nGitHub Actions\uc744 \uc0ac\uc6a9\ud558\uba74 \uc774\ub97c \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ube4c\ub4dc\ubd80\ud130 \ud14c\uc2a4\ud2b8 \uc790\ub3d9\ud654\uc640 \ub354\ubd88\uc5b4 Branch protection\uc744 \ud1b5\ud574 \ube4c\ub4dc/\ud14c\uc2a4\ud2b8\uc5d0 \uc2e4\ud328\ud55c\ub2e4\uba74 \ubcd1\ud569\ud558\uc9c0 \uc54a\ub3c4\ub85d \uc124\uc815\ud560 \uc218\ub3c4 \uc788\uc5b4\uc694."}),"\n",(0,i.jsxs)(e.admonition,{type:"info",children:[(0,i.jsx)(e.p,{children:"\uc774 \uae00\uc5d0\uc11c\ub294 GitHub Actions\ub97c \ud65c\uc6a9\ud55c CI, CD\uc5d0 \ub300\ud574\uc11c \ub2e4\ub8f9\ub2c8\ub2e4. \uc544\ub798\uc640 \uac19\uc740 \uc0ac\uc804\uc9c0\uc2dd\uc744 \uc694\uad6c\ud558\ub098, \ubaa8\ub974\ub354\ub77c\ub3c4 \ub530\ub77c\uc624\ub294 \ub370\uc5d0 \ud070 \uc5b4\ub824\uc6c0\uc774 \uc5c6\ub3c4\ub85d \uae00\uc744 \uc368\ubcf4\ub824\uace0 \ud569\ub2c8\ub2e4. \ud83d\ude04"}),(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Git"}),"\n",(0,i.jsx)(e.li,{children:"Shell script"}),"\n",(0,i.jsx)(e.li,{children:"Gradle task"}),"\n"]})]}),"\n",(0,i.jsx)(e.h2,{id:"ci-with-github-actions",children:"CI with GitHub Actions"}),"\n",(0,i.jsx)(e.h3,{id:"-\uc6a9\uc5b4-\uc815\ub9ac",children:"\ud83d\udcda \uc6a9\uc5b4 \uc815\ub9ac"}),"\n",(0,i.jsxs)(e.p,{children:["GitHub Actions\ub294 ",(0,i.jsx)(e.a,{href:"https://docs.github.com/en/actions",children:(0,i.jsx)(e.strong,{children:"\uc774\uacf3"})}),"\uc5d0 \uc815\ub9d0 \uc790\uc138\ud558\uac8c \uc124\uba85\ub3fc \uc788\uc2b5\ub2c8\ub2e4.\n\ub7ec\ub2dd\ucee4\ube0c\uac00 \ub0ae\uc740 \ud3b8\uc774 \uc544\ub2c8\ub77c\uc11c \uaf64\ub098 \ub9ce\uc740 \uc0ac\uc804\uc9c0\uc2dd\uc744 \ud544\uc694\ub85c \ud558\uc9c0\ub9cc, \uac04\ub2e8\ud558\uac8c action\uc774 \ub3d9\uc791\ud558\ub294 \ubc29\uc2dd\uc744 \uc54c\uae30 \uc704\ud55c \uc6a9\uc5b4\ub4e4\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\ud83d\udee0\ufe0f ",(0,i.jsx)(e.strong,{children:"Workflows"}),(0,i.jsx)(e.br,{}),"\n","Job\uc758 \uc9d1\ud569\uc785\ub2c8\ub2e4, repository\uc5d0\uc11c \ud2b9\uc815 \uc774\ubca4\ud2b8\uac00 \ud2b8\ub9ac\uac70\ub418\uba74 \uc2e4\ud589\ub429\ub2c8\ub2e4.\n",(0,i.jsx)(e.code,{children:"./github/workflows"})," \ub514\ub809\ud1a0\ub9ac \ubc11\uc5d0 ",(0,i.jsx)(e.code,{children:".yml"})," \ub610\ub294 ",(0,i.jsx)(e.code,{children:".yaml"}),"\uc744 \uc0dd\uc131\ud574\uc57c \ud574\uc694.\nWorkflow\ub294 \ub2e4\ub978 workflow\uc5d0\uc11c \uc7ac\uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\ud83c\udf89 ",(0,i.jsx)(e.strong,{children:"Events"}),(0,i.jsx)(e.br,{}),"\n","Workflow\uac00 \uc2e4\ud589\ub418\uac8c\ub054 \ud558\ub294 \uc774\ubca4\ud2b8\uc785\ub2c8\ub2e4. PR\uc744 \uc5f4\uac70\ub098, \uc774\uc288\ub97c \uc5f4\uac70\ub098, push\ud558\uac70\ub098 \ub4f1 \ub2e4\uc591\ud55c event\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u267b\ufe0f ",(0,i.jsx)(e.strong,{children:"Jobs"}),(0,i.jsx)(e.br,{}),"\n","Workflow\uc5d0 \uc18d\ud558\ub294 step\uc758 \uc9d1\ud569\uc774\uba70, ",(0,i.jsx)(e.strong,{children:"\uac19\uc740 runner \uc548\uc5d0\uc11c \uc2e4\ud589"}),"\ub429\ub2c8\ub2e4. Job\ub07c\ub9ac\ub294 ",(0,i.jsx)(e.strong,{children:"\ubcd1\ub82c\uc801\uc73c\ub85c \uc2e4\ud589"}),"\ub429\ub2c8\ub2e4.\n\ub2e4\ub978 job\uacfc\uc758 \uc758\uc874\uad00\uacc4\uac00 \uc874\uc7ac\ud55c\ub2e4\uba74, \uc774\ub97c ",(0,i.jsx)(e.code,{children:"needs"})," \ub85c \uba85\uc2dc\ud574\uc57c \ud569\ub2c8\ub2e4.\n\uac01 step\uc740 ",(0,i.jsx)(e.strong,{children:"shell script"}),"\uc774\uac70\ub098, ",(0,i.jsx)(e.strong,{children:"action"})," \uc911 \ud558\ub098\uc785\ub2c8\ub2e4. step\uc740 \uc21c\uc11c\ub300\ub85c \uc2e4\ud589\ub418\uba70, \uc774\uc804 step\uc774 \ub2e4\uc74c \uac83\uc5d0 \uc601\ud5a5\uc744 \ub07c\uce69\ub2c8\ub2e4.\n\ube4c\ub4dc\ud55c \uac83\uc744 \ub2e4\uc74c step\uc5d0\uc11c \ud65c\uc6a9\ud560 \uc218\ub3c4 \uc788\uc5b4\uc694."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\ud83d\udccb ",(0,i.jsx)(e.strong,{children:"Actions"}),(0,i.jsx)(e.br,{}),"\n","Github Actions\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 custom application. workflow\uc5d0\uc11c\uc758 \uc911\ubcf5\ub418\ub294 \ucf54\ub4dc\ub97c \ub77c\uc774\ube0c\ub7ec\ub9ac\ub85c \ub9cc\ub4e4\uc5c8\ub2e4\uace0 \uc0dd\uac01\ud558\uba74 \ud3b8\ud569\ub2c8\ub2e4.\nGitHub\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uc5ec\ub7ec \uad8c\ud55c\uc744 \uac00\uc838\uac08 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \uc678\ubd80 Job\uc5d0\uc11c \uc124\uc815\ud574\uc904 \uc218\ub3c4 \uc788\uc5b4\uc694."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\ud83c\udfc3 ",(0,i.jsx)(e.strong,{children:"Runners"}),(0,i.jsx)(e.br,{}),"\n","Workflow\uac00 \ub3cc\uc544\uac00\ub294 os\uac00 \ud3ec\ud568\ub41c \uc11c\ubc84\uc785\ub2c8\ub2e4. GitHub\ub294 Ubuntu Linux, Windows, macOS Runner\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4.\n\uc9c1\uc811 runner\ub97c \ud638\uc2a4\ud305\ud560 \uc218\ub3c4 \uc788\ub294\ub370, \uc774\ub97c ",(0,i.jsx)(e.strong,{children:"self-hosted runner"}),"\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"-\uc694\uad6c\uc0ac\ud56d-\uc815\uc758-\ubc0f-\ubd84\uc11d",children:"\ud83d\udd0d \uc694\uad6c\uc0ac\ud56d \uc815\uc758 \ubc0f \ubd84\uc11d"}),"\n",(0,i.jsxs)(e.p,{children:["\uc6b0\ub9ac\ub294 ",(0,i.jsx)(e.strong,{children:"1. \ube4c\ub4dc\uc5d0 \uc2e4\ud328\ud558\ub294 \uacbd\uc6b0 \uc800\uc7a5\uc18c\uc5d0 \ubc18\uc601\ub418\uc9c0 \uc54a\ub3c4\ub85d"})," \ud558\uace0 \uc2f6\uc2b5\ub2c8\ub2e4.\n\uc774\ub294 ",(0,i.jsx)(e.strong,{children:"2. PR\uc774 \uc0dd\uc131\ub418\uc5c8\uc744 \ub54c\ub098 \ubcc0\uacbd \uc0ac\ud56d\uc774 \uc800\uc7a5\uc18c\uc5d0 \ubc18\uc601\ub418\uc5c8\uc744 \ub54c, \ube4c\ub4dc \ud14c\uc2a4\ud2b8\ub97c \uc9c4\ud589"}),"\ud560 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(e.p,{children:"\uc55e\ucabd \ubb38\uc7a5\uc778 \ube4c\ub4dc \uc2e4\ud328 \uc2dc \uc800\uc7a5\uc18c \ubc18\uc601\ud558\uc9c0 \uc54a\ub3c4\ub85d \ud558\ub294 \uac83\uc740 GitHub\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 Branch protection\uc744 \uc0ac\uc6a9\ud574 \uac04\ub2e8\ud558\uac8c \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nPR\uc5d0 Approved \ub9ac\ubdf0\uac00 \uc77c\uc815 \uac1c\uc218 \uc774\uc0c1, Status check \ub4f1 \ub2e4\uc591\ud55c \ube0c\ub79c\uce58 \ubcf4\ud638 \uc635\uc158\uc744 \uc81c\uacf5\ud558\ub2c8 \uc911\uc694\ud55c \uc800\uc7a5\uc18c\ub77c\uba74 \uaf2d \ucc59\uaca8\uac00\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(e.p,{children:"\ube0c\ub79c\uce58 \ubcf4\ud638\ub294 \ub418\uc5c8\uc73c\ub2c8, \uc774\uc820 Status check\uc5d0 \ubc18\uc601\ub420 \ube4c\ub4dc - \ud14c\uc2a4\ud2b8\ub97c \uc790\ub3d9\ud654\ud574\uc57c \ud569\ub2c8\ub2e4. \uc704 \uc694\uad6c\uc0ac\ud56d \ubb38\uc7a5\uc744 \uc870\uae08 \ub354 \uc798\uac8c \ucabc\uac1c \ubcfc\uae4c\uc694?"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"PR\uc774 \uc0dd\uc131\ub418\uc5c8\uc744 \ub54c\ub098 \ubcc0\uacbd \uc0ac\ud56d\uc774 \uc800\uc7a5\uc18c\uc5d0 \ubc18\uc601\ub418\uc5c8\uc744 \ub54c,"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\uc55e\uc11c \uc124\uba85\ud55c \uc6a9\uc5b4 \uc911 event\uc5d0 \ud574\ub2f9\ud574\uc694. GitHub actions\uc5d0\uc11c\ub294 ",(0,i.jsx)(e.code,{children:"on"}),"\uc774\ub77c\ub294 \ud0a4\uc6cc\ub4dc\ub85c \uc801\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\ube4c\ub4dc \ubc0f \ud14c\uc2a4\ud2b8\ub97c \uc9c4\ud589\ud560 \uc218 \uc788\ub2e4"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\ud14c\uc2a4\ud2b8\ub97c \uc9c4\ud589\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub2e4\uc591\ud55c \uc635\uc158\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \uc6b0\uc120 ",(0,i.jsx)(e.strong,{children:"\ud14c\uc2a4\ud2b8\ub97c \ub3cc\ub9b4 \ud658\uacbd"}),"\uc774 \uc788\uc5b4\uc57c \ud574\uc694.\n\ub098\uc544\uac00 \uadf8 \ud658\uacbd \uc548\uc5d0 ",(0,i.jsx)(e.strong,{children:"Java\uac00 \uc124\uce58"}),"\ub3fc \uc788\uc5b4\uc57c \ud558\uace0, ",(0,i.jsx)(e.strong,{children:"\uc800\uc7a5\uc18c\ub97c \ubcf5\uc81c"}),"\ud574 \ucf54\ub4dc\ub97c \uac00\uc838\uc640\uc57c \ud569\ub2c8\ub2e4. \ud504\ub85c\uc81d\ud2b8\uc5d0 \ub530\ub77c \uc790\ub3d9 \ube4c\ub4dc \ud234\ub3c4 \ud544\uc694\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc800\ud76c \ud300\uc5d0\uc11c\ub294 ",(0,i.jsx)(e.strong,{children:"Gradle\uc744 \ud65c\uc6a9\ud574 \ube4c\ub4dc"}),"\ud558\ubbc0\ub85c, Gradle\ub3c4 \ud544\uc694\ud558\uaca0\ub124\uc694."]}),"\n",(0,i.jsx)(e.p,{children:"\ud560 \uc77c\uc774 \uc0c1\ub2f9\ud788 \ub9ce\uc544 \ubcf4\uc774\ub294\ub370, \uad75\uac8c \ud45c\uc2dc\ud55c \ubb38\uad6c\ub4e4\uc740 \uc804\ubd80 GitHub\uc5d0\uc11c \uc81c\uacf5\ud569\ub2c8\ub2e4.\n\ub530\ub77c\uc11c \uc774\ub97c \ud65c\uc6a9\ud560 \uc218 \uc788\ub294 workflow \ud30c\uc77c \ud558\ub098\ub85c \uc644\uc131\ud574\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud30c\uc77c\uc744 \uc9c1\uc811 \ub9cc\ub4e4\uc5b4\ubcf4\uace0, \uc2e4\ud589 \uacb0\uacfc\ub97c \ud655\uc778\ud574 \ubd05\uc2dc\ub2e4!"}),"\n",(0,i.jsx)(e.h3,{id:"-workflow-\ud30c\uc77c-\uc791\uc131\ud558\uae30",children:"\ud83d\udcdd Workflow \ud30c\uc77c \uc791\uc131\ud558\uae30"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-yaml",children:"# Workflow \ud30c\uc77c\uc740 .github/workflows \ub514\ub809\ud1a0\ub9ac \uc544\ub798 .yml \ub610\ub294 .yaml \ud30c\uc77c\ub85c \uc874\uc7ac\ud55c\ub2e4.\n\n# Workflow \uc774\ub984. \ud558\ub098\uc758 \ud30c\uc77c\uc774 \ud558\ub098\uc758 Workflow\ub97c \ub2f4\ub2f9\ud55c\ub2e4. Workflow\ub294 Job\uc758 \uc9d1\ud569\uc774\ub2e4.\nname: Build test with Gradle\n\n# Event. \uc5b8\uc81c \uc774 Workflow\uac00 \ud2b8\ub9ac\uac70\ub3fc \uc2e4\ud589\ub420 \uc9c0 \uc791\uc131\ud55c\ub2e4.\non:\n  pull_request:\n    branches:\n      - develop # develop \ube0c\ub79c\uce58\uc5d0 PR\uc774 \uc791\uc131\ub418\ub294 \uacbd\uc6b0\n\njobs:\n  # build\ub77c\ub294 \uc774\ub984\uc758 Job \ud55c \uac1c\ub85c \uc774\ub8e8\uc5b4\uc9c4 workflow\uc774\ub2e4.\n  # build\ub294 \uc774\ub984\uc774\uba70, \uc790\uc720\ub86d\uac8c \uc801\uc744 \uc218 \uc788\ub2e4.\n  build:\n  # \uc774 Job\uc774 \uc2e4\ud589\ub420 \ud658\uacbd. GitHub\uc5d0\uc11c\ub294 Linux, Windows, macOS \ud658\uacbd\uc744 \uc81c\uacf5\ud55c\ub2e4.\n    runs-on: ubuntu-latest\n\n  # Job\uc740 \uc5ec\ub7ec Step\uc73c\ub85c \uc774\ub904\uc838 \uc788\uc73c\uba70, \uc774\ub294 \uc21c\uc11c\ub300\ub85c \uc2e4\ud589\ub41c\ub2e4.\n    steps:\n    # \uac00\uc0c1\ud658\uacbd\uc5d0\uc11c Repository\ub97c clone\ud574 \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ud55c\ub2e4.\n      - name: Checkout to current repository\n        uses: actions/checkout@v4\n\n      # JDK\ub97c \uc124\uce58\ud55c\ub2e4.\n      - name: Setup JDK Corretto using cached gradle dependencies\n        uses: actions/setup-java@v4\n        with:\n          distribution: 'corretto'\n          java-version: 17\n          cache: 'gradle'\n\n    # \uc0ac\uc804 \uc791\uc5c5\uc774 \ubaa8\ub450 \uc900\ube44\ub418\uc5c8\uc73c\ubbc0\ub85c, \ud14c\uc2a4\ud2b8\ub97c \uc9c4\ud589\ud55c\ub2e4.\n      - name: Build and test with gradle\n        run: ./gradlew test\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\uc81c\uacf5\ud558\ub294 action\ub4e4\uc740 \uc800\uc7a5\uc18c\uac00 \uc874\uc7ac\ud558\uba70, \ud574\ub2f9 \uc800\uc7a5\uc18c\uc5d0 \uc5b4\ub5bb\uac8c \uc0ac\uc6a9\ud558\ub294\uc9c0 \uc790\uc138\ud788 \uc801\ud600\uc788\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc2b5\ub2c8\ub2e4.\n\uc608\ub97c \ub4e4\uc5b4 ",(0,i.jsx)(e.code,{children:"actions/setup-java@v4"}),"\uc758 \uacbd\uc6b0, \ud2b9\ubcc4\ud55c \ubc84\uc804\uacfc \ubca4\ub354\ub97c \uc120\ud0dd\ud568\uacfc \ub354\ubd88\uc5b4 ",(0,i.jsx)(e.code,{children:"gradle"})," \uce90\uc2f1\uae4c\uc9c0 \uc9c4\ud589\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"run"}),"\uc5d0\uc11c\ub294 \uc2e4\uc81c\ub85c \uc2e4\ud589\ud560 \uc258 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc791\uc131\ud558\uba74 \ub429\ub2c8\ub2e4.\nshell script\uc5d0 \uc775\uc219\ud558\uc9c0 \uc54a\ub2e4\uba74, \uc790\uc2e0\uc788\ub294 \ub2e4\ub978 \uc5b8\uc5b4(python, nodejs \ub4f1)\ub85c \ub85c\uc9c1\uc744 \uc9dc\uc900 \ub4a4, \uc2e4\ud589\ud558\ub294 \ubc29\ubc95\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(e.p,{children:"\uc774\uc81c PR\uc744 \uc62c\ub9b4 \ub54c\ub9c8\ub2e4 \ube4c\ub4dc \ubc0f \ud14c\uc2a4\ud2b8\ub97c \uc9c4\ud589\ud569\ub2c8\ub2e4. \uc2e4\ud328\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \uba38\uc9c0\ud558\ub294 \ubd88\uc0c1\uc0ac\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\uac8c \ub418\uc5c8\uc5b4\uc694 \ud83d\udd25"}),"\n",(0,i.jsx)(e.h2,{id:"continuous-deployment",children:"Continuous Deployment"}),"\n",(0,i.jsx)(e.h3,{id:"-delivery-deployment",children:"\ud83e\udd14 Delivery? Deployment?"}),"\n",(0,i.jsx)(e.p,{children:"CI\uc640 \ud568\uaed8 \ubd99\uc5b4\ub2e4\ub2c8\ub294 \ub2e8\uc5b4\ub85c CD\uac00 \uc788\uc2b5\ub2c8\ub2e4 \ud83d\udcbf. CD\ub294 \uc704\uc640 \uac19\uc774 \ub450 \uc6a9\uc5b4\uac00 \uc790\uc8fc \ud63c\uc6a9\ub418\ub294\ub370\uc694, \ube44\uc2b7\ud55c \ub9e5\ub77d\uc774\uc9c0\ub9cc \uc544\ub798\uc640 \uac19\uc740 \ucc28\uc774\uc810\uc774 \uc788\ub2f5\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Continuous delivery\ub294 \ud504\ub85c\ub355\uc158 \ucf54\ub4dc\uc5d0 \uc9c1\uc811 \ube4c\ub4dc \uacb0\uacfc\ub97c \uc81c\uacf5\ud558\uae30\uae4c\uc9c0\ub9cc \ud558\uba70, \ubc30\ud3ec\ub97c \uc704\ud574 \ucd94\uac00\uc801\uc778 \uc791\uc5c5\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. '\ucd9c\uc2dc\uc77c'\uc774\ub77c\ub294 \uac1c\ub150\uc774 \uc874\uc7ac\ud55c\ub2e4\uace0 \ubcf4\uba74 \ub429\ub2c8\ub2e4."}),"\n",(0,i.jsx)(e.li,{children:"Continuous deployment\ub294 \ubc30\ud3ec\uae4c\uc9c0 \ud30c\uc774\ud504\ub77c\uc778\uc5d0 \uc18d\ud574\uc694. \ucd94\uac00\uc801\uc73c\ub85c \uac1c\uc785\ud560 \ud504\ub85c\uc138\uc2a4\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc73c\uba70, \uc0ac\uc6a9\uc790\ub294 \ud56d\uc0c1 \ucd5c\uc2e0 \ubc84\uc804\uc758 \ucf54\ub4dc\ub97c \ub9c8\uc8fc\ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\uc774\ubc88 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c\uc758 \uac1c\ubc1c \uc11c\ubc84\ub294 Continuous Deployment\ub85c \uc9c4\ud589\ub418\uae30\ub97c \uc6d0\ud588\uc2b5\ub2c8\ub2e4. \uae30\ub2a5 \uac1c\ubc1c\uc774 \uc644\ub8cc\ub41c\ub2e4\uba74 \uc989\uc2dc \ubc30\ud3ec\ub3fc \ud504\ub860\ud2b8\uc5d4\ub4dc\uac00 \ud655\uc778\ud558\ub294 \uac83\uc744 \ubaa9\ud45c\ub85c \ud558\uae30 \ub54c\ubb38\uc774\uc608\uc694.\n\uc774 \ub610\ud55c GitHub actions\ub97c \ud65c\uc6a9\ud574 CD \ud30c\uc774\ud504\ub77c\uc778\ub3c4 \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(e.h3,{id:"-\uc81c\uc57d-\uc0ac\ud56d",children:"\ud83d\udeab \uc81c\uc57d \uc0ac\ud56d"}),"\n",(0,i.jsx)(e.p,{children:"CD\ub294 \ub2e4\uc591\ud55c \ubc29\ubc95\uc73c\ub85c \uad6c\ud604\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ssh \uc811\uc18d, aws S3\uc640 CodeDeploy \ub4f1 \ub2e4\uc591\ud55c\ub370\uc694, \ud504\ub85c\uc81d\ud2b8\ub97c \uc9c4\ud589\ud558\uba74\uc11c \ub2e4\uc74c\uacfc \uac19\uc740 \uc81c\uc57d \uc0ac\ud56d\uc774 \uc874\uc7ac\ud574 \uc774\ub4e4\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\ucea0\ud37c\uc2a4 \uc678\ubd80\uc5d0\uc11c\uc758 \uc811\uc18d\uc740 \uae08\uc9c0\ub3fc \uc788\uc2b5\ub2c8\ub2e4. 80/443 \ud3ec\ud2b8\ub97c \ud1b5\ud55c \uc6f9 \uc811\uadfc\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4. ssh\ub294 22\ubc88 \ud3ec\ud2b8\ub85c \ud1b5\uc2e0\ud569\ub2c8\ub2e4. (\ub2e4\ub978 \ubc29\ubc95\uc73c\ub85c \uc6b0\ud68c\ud560 \uc218\ub294 \uc788\uaca0\uc2b5\ub2c8\ub2e4\ub9cc, \uac15\ud558\uac8c \uad8c\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4 \ud83e\udd79)"}),"\n",(0,i.jsxs)(e.li,{children:["\uc81c\uacf5\ub41c aws IAM \uacc4\uc815\uc73c\ub85c\ub294 S3\uc758 Access Token\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c S3 \uc790\ub3d9 \uc5c5\ub85c\ub4dc / CodeDeploy \uc0ac\uc6a9\uc774 \ubd88\uac00\ud569\ub2c8\ub2e4.\n\uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \uc0c8\ub85c\uc6b4 aws \uacc4\uc815\uc744 \uc0dd\uc131\ud574\uc57c \ud558\uba70, \ub2e4\uc591\ud55c \uc124\uc815\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. (",(0,i.jsx)(e.a,{href:"https://wnsah052.tistory.com/206",children:"Reference"}),")"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\uac04\ub2e8\ud55c \ud574\uacb0 \ubc29\ubc95\uc73c\ub85c GitHub\uc758 Self-hosted runner\ub97c \ud65c\uc6a9\ud569\ub2c8\ub2e4. \uc11c\ube44\uc2a4\ub97c \ub744\uc6b0\ub294 \uc778\uc2a4\ud134\uc2a4\uc5d0 \ub9ac\uc2a4\ub108\ub97c \ub2ec\uc544\ub450\ub294 \ud615\uc2dd\uc785\ub2c8\ub2e4.\nactions\uc5d0\uc11c 443\ubc88 \ud3ec\ud2b8\ub97c \ud1b5\ud574 workflow \uc815\ubcf4\ub97c \uc804\ub2ec\ud558\uae30 \ub54c\ubb38\uc5d0, \uc544\uc9c1\uae4c\uc9c0 80\ud3ec\ud2b8\ub9cc\uc744 \uc0ac\uc6a9\ud558\ub294 \uac1c\ubc1c \ub2e8\uacc4\uc5d0\uc11c\ub294 \ub3c4\uc804\ud574\ubcfc \uac00\uce58\uac00 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(e.h3,{id:"-self-hosted-runner-\uad6c\uc131\ud558\uae30",children:"\ud83d\ude80 Self-hosted runner \uad6c\uc131\ud558\uae30"}),"\n",(0,i.jsx)(e.p,{children:"\ud504\ub85c\uc81d\ud2b8 \uc778\uc2a4\ud134\uc2a4\ub97c runner\ub85c \uc0dd\uc131\ud574 actions\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubc29\ubc95\uc740 \uc5b4\ub835\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4!\nRepository setting \ud0ed\uc758 Actions - Runners \ud0ed\uc758 New self-hosted runner\ub97c \ud074\ub9ad\ud574 \ucd94\uac00\ud569\uc2dc\ub2e4."}),"\n",(0,i.jsx)("p",{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:r.A})}),"\n",(0,i.jsx)(e.p,{children:"\uc77c\ub828\uc758 \uacfc\uc815\uc744 \uc218\ud589\ud55c\ub2e4\uba74 443 \ud3ec\ud2b8\ub97c \uacc4\uc18d\ud574\uc11c \ub4e3\uace0 \uc788\uc744 \uac70\uc608\uc694. \uc774\uc81c \ubaa8\ub4e0 \uc900\ube44\ub294 \ub05d\ub0ac\uc2b5\ub2c8\ub2e4 \ud83d\ude04"}),"\n",(0,i.jsx)(e.h3,{id:"-\uc694\uad6c\uc0ac\ud56d-\uc815\uc758-\ubc0f-\ubd84\uc11d-1",children:"\ud83d\udd0d \uc694\uad6c\uc0ac\ud56d \uc815\uc758 \ubc0f \ubd84\uc11d"}),"\n",(0,i.jsx)(e.p,{children:"\uc694\uad6c\uc0ac\ud56d\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\uc55e\uc120 \ube4c\ub4dc \ud14c\uc2a4\ud2b8\uac00 \uc120\ud589\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(e.li,{children:["gradle\uc758 ",(0,i.jsx)(e.code,{children:"bootJar"})," task\ub97c \ud1b5\ud574 \uc2e4\ud589 \ud30c\uc77c\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(e.li,{children:"\ud604\uc7ac 80 \ud3ec\ud2b8\uc5d0 \ubc14\uc778\ub529\ub41c \ud504\ub85c\uadf8\ub7a8\uc774 \uc874\uc7ac\ud55c\ub2e4\uba74, \uc774\ub97c \uc885\ub8cc\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(e.li,{children:"\uc0c8\ub85c\uc6b4 \uc2e4\ud589 \ud30c\uc77c\uc744 \ub744\uc6c1\ub2c8\ub2e4."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\uc704\uc758 \ub450 \uac1c\ub294 \uc774\uc804 CI\uc5d0\uc11c \uc9c4\ud589\ud588\ub358 \uac83\uacfc \uac70\uc758 \uac19\uc2b5\ub2c8\ub2e4. \uc544\ub798 \ub450 \uac1c\ub294 Shell script\ub97c \ud1b5\ud574\uc11c \uc9c4\ud589\ud560 \uc218 \uc788\uaca0\ub124\uc694!"}),"\n",(0,i.jsx)(e.h3,{id:"-workflow-\ud30c\uc77c-\uc791\uc131\ud558\uae30-1",children:"\ud83d\udcdd Workflow \ud30c\uc77c \uc791\uc131\ud558\uae30"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-yaml",children:'name: CD using Github self-hosted runner\n\non:\n  # actions \ud0ed\uc5d0\uc11c \uc2e4\ud589\ud560 \uc218 \uc788\ub3c4\ub85d \ud55c\ub2e4\n  workflow_dispatch:\n\n  push:\n    branches:\n      - main\n      - develop\n\nenv:\n  ARTIFACT_NAME: # \ud504\ub85c\uc81d\ud2b8 \uc774\ub984\uacfc \uac19\uc774 \uad6c\ubcc4\ud560 \uc218 \uc788\ub294 \ubb38\uc790\uc5f4\n  ARTIFACT_DIRECTORY: ./build/libs\n\n# \ud574\ub2f9 workflow\ub294 \ub450 \uac1c\uc758 job\uc73c\ub85c \uc774\ub8e8\uc5b4\uc838 \uc788\ub2e4. \n# \ud558\ub098\ub294 \ube4c\ub4dc\ub97c \ud1b5\ud55c jar \uc0dd\uc131, \ud558\ub098\ub294 \uc0dd\uc131\ub41c jar \ubc30\ud3ec\uc774\ub2e4.\n# \uc804\uc790\ub294 GitHub\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 runner\ub97c, \ud6c4\uc790\ub294 self-hosted runner\ub97c \uc0ac\uc6a9\ud55c\ub2e4.\njobs:\n  # \ub300\ubd80\ubd84 \uc55e\uc120 CI\uc640 \ub3d9\uc77c\ud558\ub098, gradle\uc5d0\uc11c \ud14c\uc2a4\ud2b8\ub97c \ud558\uc9c0 \uc54a\uace0, jar \ud30c\uc77c\uc744 \ub9cc\ub4e4\uc5b4\ub0b8\ub2e4\n  build:\n    name: Build Jar file and upload artifact\n    runs-on: ubuntu-latest\n\n    steps:\n      - name: Checkout to current repository\n        uses: actions/checkout@v4\n\n      - name: Setup JDK Corretto using cached gradle dependencies\n        uses: actions/setup-java@v4\n        with:\n          distribution: \'corretto\'\n          java-version: 17\n          cache: \'gradle\'\n\n      - name: Setup Gradle\n        uses: gradle/actions/setup-gradle@v3\n        with:\n          gradle-version: 8.8\n\n      - name: Build and test with gradle\n        run: ./gradlew clean bootJar\n\n      - name: Rename artifact file\n        run: |\n          mv ${{ env.ARTIFACT_DIRECTORY }}/*.jar \\\n          ${{ env.ARTIFACT_DIRECTORY }}/${{ env.ARTIFACT_NAME }}.jar\n\n      - name: Upload created artifact\n        uses: actions/upload-artifact@v4\n        with:\n          name: ${{ env.ARTIFACT_NAME }}\n          path: ${{ env.ARTIFACT_DIRECTORY }}/${{ env.ARTIFACT_NAME }}.jar\n\n  deploy:\n    name: Deploy via self-hosted runner\n    needs: build\n    runs-on: self-hosted\n\n    steps:\n      - name: Download uploaded artifact\n        uses: actions/download-artifact@v4\n        # \uc55e\uc120 actions/upload-artifact\uc5d0\uc11c \uc5c5\ub85c\ub4dc\ud55c \uc2e4\ud589 \ud30c\uc77c\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud55c\ub2e4\n        with:\n          name: ${{ env.ARTIFACT_NAME }}\n          path: ${{ env.ARTIFACT_DIRECTORY }}\n\n      # 80 \ud3ec\ud2b8\uc5d0 \uc5f4\ub824\uc788\ub294 \ud504\ub85c\uc138\uc2a4\ub97c \ud655\uc778\ud558\uace0, \uc874\uc7ac\ud55c\ub2e4\uba74 \ud658\uacbd\ubcc0\uc218\ub97c \uc124\uc815\ud55c\ub2e4\n      # well-known port (~1024)\ub97c \ud655\uc778\ud558\uac70\ub098 \ubc14\uc778\ub529, \uc885\ub8cc\ud560 \ub54c\uc5d0\ub294 \uad8c\ud55c\uc774 \ud544\uc694\ud558\ub2e4\n      # bash\uc5d0\uc11c \uc2e4\ud328\ud558\ub294 \uacbd\uc6b0 \uc804\uccb4 job\uc774 \uc2e4\ud328\ud558\ubbc0\ub85c, || (or) true \uc5f0\uc0b0\uc744 \uc9c4\ud589\ud55c\ub2e4\n      - name: Check if the port 80 is in use\n        run: |\n          echo "Checking ports on http..."\n          PID=$(sudo lsof -t -i :http || true)\n          if [ -n "$PID" ]; then\n            echo "Found process running on port http: $PID"\n            echo "server_running=true" >> "$GITHUB_ENV"\n            echo "PID=$PID" >> "$GITHUB_ENV"\n          else\n            echo "Process not found running on port http!"\n            echo "server_running=false" >> "$GITHUB_ENV"\n          fi\n\n      # \uc55e\uc120 step\uc5d0\uc11c \uc2e4\ud589\ub418\uace0 \uc788\ub294 \ud504\ub85c\uc138\uc2a4\uac00 \ubc1c\uacac\ub418\ub294 \uacbd\uc6b0, \uc774\ub97c \uc885\ub8cc\ud55c\ub2e4.\n      # \ub2e8, -15\uc640 \uac19\uc740 graceful \uc885\ub8cc\ub97c \uc9c4\ud589\ud55c\ub2e4.\n      # \uc885\ub8cc\ub41c \uac83\uc744 \ud655\uc778\ud558\uae30 \uc704\ud574 tail \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud55c\ub2e4\n      # \ud504\ub85c\uadf8\ub7a8\uc774 \uc885\ub8cc\ub418\ub294 \uacbd\uc6b0 tail\ub3c4 \uc885\ub8cc\ub41c\ub2e4\n      - name: Stop server if available (gracefully)\n        # \uc774 step\uc774 \uc2e4\ud589\ub420 \uc870\uac74\uc744 \uc124\uc815\ud55c\ub2e4\n        if: env.server_running == \'true\'\n        run: |\n          echo "Gracefully shutting down process ${{ env.PID }}"\n          sudo kill -15 ${{ env.PID }}\n          tail --pid=${{ env.PID }} -f /dev/null\n\n      - name: Start server\n        run: |\n          sudo nohup java -jar \\\n          ${{ env.ARTIFACT_DIRECTORY }}/${{ env.ARTIFACT_NAME }}.jar \\\n          --server.port=80 &\n'})}),"\n",(0,i.jsx)(e.p,{children:"\ucd94\ud6c4 443\ubc88 \ud3ec\ud2b8\ub97c \ud1b5\ud55c Http \uc6f9 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ubc30\ud3ec\ub41c\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ub420\uae4c\uc694 \ud83e\udd28? \uc544\uc9c1\uc740 \uc77c\uc5b4\ub098\uc9c0 \uc54a\uc558\uc9c0\ub9cc, \uc774 \uacbd\uc6b0\uc5d0 \ub300\ud55c \ub300\ube44\uac00 \ud544\uc694\ud558\uaca0\ub124\uc694."}),"\n",(0,i.jsx)(e.p,{children:"\uc774\ub85c\uc368 PR\uc744 \uc791\uc131\ud558\uba74 \uc790\ub3d9 \ube4c\ub4dc/\ud14c\uc2a4\ud2b8\uac00, \ud574\ub2f9 PR\uc774 \uba38\uc9c0\ub418\uba74 \uc804\uccb4 \ube4c\ub4dc/\ud14c\uc2a4\ud2b8/\ubc30\ud3ec\uac00 \ub418\ub3c4\ub85d \uc790\ub3d9\ud654\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4!\nActions\ub97c \uc870\uae08 \ub354 \ud65c\uc6a9\ud55c\ub2e4\uba74 Slack \uc54c\ub9bc\uacfc \uac19\uc740 \uae30\ub2a5\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc73c\ub2c8, \uc775\uc219\ud574\uc838\ubcf4\ub294 \uac83\uc774 \uc88b\uaca0\uc2b5\ub2c8\ub2e4 \ud83d\ude04\n\uac1c\ubc1c\ud560 \ub54c \ub2f5\ub2f5\ud558\uac70\ub098 \ubd88\ud3b8\ud568\uc744 \ub290\ub080\ub2e4\uba74, \uc774 \ub610\ud55c \uac1c\uc120\ud560 \uc218 \uc788\ub294 \uc810\uc774\ub2c8\uae50\uc694!"})]})}function p(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},9556:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/1-607487a45f21595137a2d41f218d7703.png"},2015:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/2-dc18d0733a0f5813c6bcb463fbcbbfc1.png"},8453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>l});var i=s(6540);const t={},o=i.createContext(t);function r(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);