import{_ as T}from"./vWBVc_E_.js";import{d as $,D as A,E as B,c as i,e as r,h as t,t as y,F as h,a5 as x,X as _,f,a1 as C,z as S,a2 as V,a3 as F,I as w,g as G,a4 as U,i as N}from"./3sOwflZU.js";import{_ as q}from"./aakMw5Mt.js";import{q as L}from"./BHlItol0.js";import{u as O}from"./hAF_boOR.js";import"./CVHJcFvD.js";const P={delay:200,class:"py-4 md:py-2"},E={class:"group"},H={class:"group-hover:text-primary text-lg font-medium"},Y={class:"mt-4 py-4"},j={class:"space-y-2"},z=["datetime"],R={class:"text-sm text-gray-800 dark:text-gray-400"},M={class:"flex gap-6"},W=$({__name:"TalkItem",props:{talk:{type:Object,required:!0}},setup(k){const l=d=>new Date(d).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return(d,o)=>{const u=q,m=A("motion-fade-visible");return B((r(),i("div",P,[t("div",E,[t("h2",H,y(k.talk.title),1),t("div",Y,[(r(!0),i(h,null,x(k.talk.instances,e=>(r(),i("div",{key:`${e.conference}-${e.date}`,class:"ml-4 border-l border-gray-200 pl-4 dark:border-gray-800"},[t("div",j,[t("time",{datetime:e.date,class:"text-xs text-gray-800 dark:text-gray-400"},y(l(e.date)),9,z),t("p",R,y(e.conference),1),t("div",M,[e.slidesUrl?(r(),_(u,{key:e.conference+"slides",name:"Slides",link:e.slidesUrl,icon:"heroicons:presentation-chart-line",target:"_blank",active:!0,"show-name":!1},null,8,["link"])):f("",!0),e.youtubeUrl?(r(),_(u,{key:e.conference+"youtube",name:"YouTube",link:e.youtubeUrl,icon:"heroicons:video-camera",target:"_blank",active:!0,"show-name":!1},null,8,["link"])):f("",!0),e.tweetUrl?(r(),_(u,{key:e.conference+"tweet",name:"Tweet",link:e.tweetUrl,icon:"proicons:x-twitter",target:"_blank",active:!0,"show-name":!1},null,8,["link"])):f("",!0)])])]))),128))])])])),[[m]])}}}),X={key:0},J={class:"mb-4 text-xl font-semibold uppercase"},K={class:"mt-16 space-y-4"},Q={class:"text-sm text-gray-600 dark:text-gray-400"},Z=["href"],oe=$({__name:"talks",async setup(k){let l,d;const o={title:"Talks",description:"Presentations and talks I've given at various conferences and meetups over the years.",email:"talks@pushpak1300.me"};C({title:o.title,description:o.description}),S({title:`${o.title} | ${V.name}`});const{data:u}=([l,d]=F(()=>O("talks-all",()=>L("talks").findOne())),l=await l,d(),l),m=w(()=>{var p;return((p=u.value)==null?void 0:p.talks)||[]}),e=w(()=>{if(!m.value)return{};const p=c=>c.reduce((a,s)=>(a[s.title]||(a[s.title]={title:s.title,instances:[]}),a[s.title].instances.push({conference:s.conference,date:s.date,slidesUrl:s.slidesUrl,youtubeUrl:s.youtubeUrl,tweetUrl:s.tweetUrl}),a),{}),n=c=>Object.values(c).reduce((a,s)=>{s.instances.sort((D,I)=>new Date(D.date).getTime()-new Date(I.date).getTime());const g=new Date(s.instances[0].date).getFullYear().toString();return a[g]||(a[g]=[]),a[g].push(s),a},{}),v=p(m.value);return n(v)});return(p,n)=>{const v=T;return r(),i("main",null,[G(v,{class:"mb-8 md:mb-16",title:o.title,description:o.description},null,8,["title","description"]),U(m)?(r(),i("div",X,[(r(!0),i(h,null,x(U(e),(b,c)=>(r(),i("div",{key:c,class:"mb-8"},[t("h2",J,y(c),1),(r(!0),i(h,null,x(b,a=>(r(),_(W,{key:a.title,talk:a},null,8,["talk"]))),128))]))),128))])):f("",!0),t("section",K,[n[1]||(n[1]=t("h2",{class:"text-xl font-semibold"}," Want me to speak at your event? ",-1)),n[2]||(n[2]=t("p",{class:"text-sm text-gray-600 dark:text-gray-400"}," If you are organizing a tech conference or meetup focused on Laravel(PHP), Vue (Typescript), Voice AI or modern web development, I'd be happy to give a talk! ",-1)),n[3]||(n[3]=t("ul",{class:"ml-4 list-disc space-y-2 text-sm text-gray-600 dark:text-gray-400"},[t("li",null,"I am currently doing in-person/online talks"),t("li",null,"For events outside India, visa assistance may be required")],-1)),t("p",Q,[n[0]||(n[0]=N(" Reach out to me at ")),t("a",{href:`mailto:${o.email}`,class:"text-primary underline"},y(o.email),9,Z)])])])}}});export{oe as default};
