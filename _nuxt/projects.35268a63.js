import{f as _,o,c as r,a as t,t as s,d as p,x as n,y as h,g as y,i as l,F as g,q as k,s as f}from"./entry.0f406f7c.js";import{u as j}from"./asyncData.665359d3.js";import{q as x}from"./query.035e2942.js";import"./index.cd32510b.js";import"./utils.8d19f669.js";import"./preview.4e6c94c2.js";const b=t("hr",null,null,-1),C={class:"font-medium mt-7 text-2xl mb-5 text-gray-700 dark:text-gray-50"},v={class:"mb-5 text-gray-500 dark:text-gray-300"},w={class:"mb-7 text-gray-700 dark:text-gray-50"},B=t("p",{class:"text-xl font-medium"}," ⚡ Tech stack ",-1),L={class:"text-gray-700 dark:text-gray-50"},$={class:"mb-9"},V={key:0},q=t("strong",null,"Check it out →",-1),N=["href","textContent"],P={key:1,class:"break-words"},U=t("strong",null,"Check it out →",-1),A=["href"],D=_({__name:"Project",props:{project:{}},setup(d){return(e,a)=>(o(),r("div",null,[b,t("p",C,s(e.project.name),1),t("p",v,s(e.project.description),1),t("div",w,[B,t("p",L,s(e.project.skills),1)]),t("div",$,[e.project.githubUrl?(o(),r("p",V,[p(" 🌎 "),q,t("a",{href:e.project.githubUrl,target:"_blank",rel:"noopener",textContent:s(e.project.githubUrl.replace("https://github.com/",""))},null,8,N)])):n("",!0),e.project.projectLink?(o(),r("p",P,[p(" 🌎 "),U,t("a",{href:e.project.projectLink,target:"_blank",rel:"noopener"},s(e.project.projectLink),9,A)])):n("",!0)])]))}}),F={key:0,class:"flex-grow w-full container max-w-4xl mx-auto md:py-8 py-4 px-6 text-gray-700 dark:text-gray-50"},S={class:"mb-12 md:mb-6"},T=t("div",{class:"mb-4"},[t("h1",{class:"mb-0 font-bold text-4xl"}," Projects "),t("p",{class:"my-2"}," List of projects that I am proud of ")],-1),G=_({__name:"projects",async setup(d){let e,a;const m=h(),{data:c}=([e,a]=y(()=>j(()=>x(m.path).findOne(),"$YWCdSV8Jub")),e=await e,a(),e);return(E,I)=>{const u=D;return l(c).projects?(o(),r("div",F,[t("div",S,[T,(o(!0),r(g,null,k(l(c).projects,i=>(o(),f(u,{key:i.id,project:i},null,8,["project"]))),128))])])):n("",!0)}}});export{G as default};