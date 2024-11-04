import{_ as D}from"./BRrdkFHm.js";import{d as v,c as r,a4 as p,w as T,f as n,i as C,e as s,h as d,t as u,a6 as V,a7 as F,G as I,H as b,k as O,J as w,K as U,L as q,E as c,O as z,P as g,r as G,a8 as H,Q as _,a9 as J,n as i,R as P,F as L,g as M,Y as R,Z as $,$ as K}from"./C-lXhpSr.js";import{q as Q}from"./DYaJwRlR.js";import{u as Y}from"./DFTKeT8m.js";import{u as Z}from"./B2vtfghr.js";import"./m5iWxH7_.js";const W={wrapper:"relative inline-flex items-center justify-center flex-shrink-0",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-full",text:"font-medium leading-none text-gray-900 dark:text-white truncate",placeholder:"font-medium leading-none text-gray-500 dark:text-gray-400 truncate",size:{"3xs":"h-4 w-4 text-[8px]","2xs":"h-5 w-5 text-[10px]",xs:"h-6 w-6 text-xs",sm:"h-8 w-8 text-sm",md:"h-10 w-10 text-base",lg:"h-12 w-12 text-lg",xl:"h-14 w-14 text-xl","2xl":"h-16 w-16 text-2xl","3xl":"h-20 w-20 text-3xl"},chip:{base:"absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",background:"bg-{color}-500 dark:bg-{color}-400",position:{"top-right":"top-0 right-0","bottom-right":"bottom-0 right-0","top-left":"top-0 left-0","bottom-left":"bottom-0 left-0"},size:{"3xs":"h-[4px] min-w-[4px] text-[4px] p-px","2xs":"h-[5px] min-w-[5px] text-[5px] p-px",xs:"h-1.5 min-w-[0.375rem] text-[6px] p-px",sm:"h-2 min-w-[0.5rem] text-[7px] p-0.5",md:"h-2.5 min-w-[0.625rem] text-[8px] p-0.5",lg:"h-3 min-w-[0.75rem] text-[10px] p-0.5",xl:"h-3.5 min-w-[0.875rem] text-[11px] p-1","2xl":"h-4 min-w-[1rem] text-[12px] p-1","3xl":"h-5 min-w-[1.25rem] text-[14px] p-1"}},icon:{base:"text-gray-500 dark:text-gray-400 flex-shrink-0",size:{"3xs":"h-2 w-2","2xs":"h-2.5 w-2.5",xs:"h-3 w-3",sm:"h-4 w-4",md:"h-5 w-5",lg:"h-6 w-6",xl:"h-7 w-7","2xl":"h-8 w-8","3xl":"h-10 w-10"}},default:{size:"sm",icon:null,chipColor:null,chipPosition:"top-right"}},X={wrapper:{base:"flex items-center align-center text-center",horizontal:"w-full flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs"}},ee=["href"],te={key:0,class:"absolute h-8 w-8 z-0 rounded-xl bg-gray-200 dark:bg-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"},re={class:"sr-only"},ae=["to"],ne={class:"sr-only sm:not-sr-only sm:pr-2 group-hover:text-primary-500"},se=v({__name:"IconLink",props:{name:{type:String,required:!0},link:{type:String,required:!0},icon:{type:String,required:!0},target:{type:String,required:!0,default:"_blank"},active:{type:Boolean,required:!1,default:!1},showName:{type:Boolean,required:!0,default:!1}},setup(e){return(t,o)=>{const a=V,l=F;return r(),p(l,{text:e.name,ui:{popper:{strategy:"absolute"}}},{default:T(()=>[n("a",{href:e.link,target:"_blank",class:"relative py-4 flex items-center justify-center transition group-hover:text-primary-500 dark:hover:text-primary-400","active-class":"text-primary-600 dark:text-primary-400"},[C(a,{"aria-hidden":"true",name:e.icon,class:"w-5 h-5 z-10"},null,8,["name"]),e.active?(r(),s("span",te)):d("",!0),n("span",re,u(e.name),1)],8,ee),e.showName?(r(),s("a",{key:0,to:e.link,target:"_blank",class:"relative flex items-center justify-center","active-class":"text-primary-600 dark:text-primary-400"},[n("span",ne,u(e.name),1)],8,ae)):d("",!0)]),_:1},8,["text"])}}}),f=I(b.ui.strategy,b.ui.avatar,W),oe=v({components:{UIcon:w},inheritAttrs:!1,props:{as:{type:[String,Object],default:"img"},src:{type:[String,Boolean],default:null},alt:{type:String,default:null},text:{type:String,default:null},icon:{type:String,default:()=>f.default.icon},size:{type:String,default:()=>f.default.size,validator(e){return Object.keys(f.size).includes(e)}},chipColor:{type:String,default:()=>f.default.chipColor,validator(e){return["gray",...b.ui.colors].includes(e)}},chipPosition:{type:String,default:()=>f.default.chipPosition,validator(e){return Object.keys(f.chip.position).includes(e)}},chipText:{type:[String,Number],default:null},imgClass:{type:String,default:""},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:o}=U("avatar",q(e,"ui"),f),a=c(()=>typeof e.src=="boolean"?null:e.src),l=c(()=>(e.alt||"").split(" ").map(E=>E.charAt(0)).join("").substring(0,2)),x=c(()=>z(g(t.value.wrapper,(h.value||!a.value)&&t.value.background,t.value.rounded,t.value.size[e.size]),e.class)),m=c(()=>z(g(t.value.rounded,t.value.size[e.size]),e.imgClass)),y=c(()=>g(t.value.icon.base,t.value.icon.size[e.size])),j=c(()=>g(t.value.chip.base,t.value.chip.size[e.size],t.value.chip.position[e.chipPosition],t.value.chip.background.replaceAll("{color}",e.chipColor))),h=G(!1);H(()=>e.src,()=>{h.value&&(h.value=!1)});function N(){h.value=!0}return{ui:t,attrs:o,wrapperClass:x,imgClass:m,iconClass:y,chipClass:j,url:a,placeholder:l,error:h,onError:N}}});function le(e,t,o,a,l,x){const m=w;return r(),s("span",{class:i(e.wrapperClass)},[e.url&&!e.error?(r(),p(J(e.as),_({key:0,class:e.imgClass,alt:e.alt,src:e.url},e.attrs,{onError:e.onError}),null,16,["class","alt","src","onError"])):e.text?(r(),s("span",{key:1,class:i(e.ui.text)},u(e.text),3)):e.icon?(r(),p(m,{key:2,name:e.icon,class:i(e.iconClass)},null,8,["name","class"])):e.placeholder?(r(),s("span",{key:3,class:i(e.ui.placeholder)},u(e.placeholder),3)):d("",!0),e.chipColor?(r(),s("span",{key:4,class:i(e.chipClass)},u(e.chipText),3)):d("",!0),P(e.$slots,"default")],2)}const B=O(oe,[["render",le]]),k=I(b.ui.strategy,b.ui.divider,X),ie=v({components:{UIcon:w,UAvatar:B},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>k.default.size,validator(e){return Object.keys(k.border.size.horizontal).includes(e)||Object.keys(k.border.size.vertical).includes(e)}},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:"solid",validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:o}=U("divider",q(e,"ui"),k),a=c(()=>z(g(t.value.wrapper.base,t.value.wrapper[e.orientation]),e.class)),l=c(()=>g(t.value.container.base,t.value.container[e.orientation])),x=c(()=>g(t.value.border.base,t.value.border[e.orientation],t.value.border.size[e.orientation][e.size],t.value.border.type[e.type]));return{ui:t,attrs:o,wrapperClass:a,containerClass:l,borderClass:x}}});function ce(e,t,o,a,l,x){const m=w,y=B;return r(),s("div",_({class:e.wrapperClass},e.attrs),[n("div",{class:i(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(r(),s(L,{key:0},[n("div",{class:i(e.containerClass)},[P(e.$slots,"default",{},()=>[e.label?(r(),s("span",{key:0,class:i(e.ui.label)},u(e.label),3)):e.icon?(r(),p(m,{key:1,name:e.icon,class:i(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(r(),p(y,_({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):d("",!0)])],2),n("div",{class:i(e.borderClass)},null,2)],64)):d("",!0)],16)}const ue=O(ie,[["render",ce]]),de=["href"],pe={class:"text-lg font-medium group-hover:text-primary-500 dark:group-hover:text-primary-200"},me={class:"text-gray-800 dark:text-gray-400 text-sm"},he={class:"text-gray-900 dark:text-gray-200 text-md font-semibold mt-1 hover:text-primary hover:cursor-default"},fe={class:"font-normal text-sm lowercase"},ge={class:"flex gap-6"},xe=v({__name:"ProjectItem",props:{project:{type:Object,required:!0}},setup(e){return(t,o)=>{const a=se,l=ue;return r(),s("div",null,[n("a",{class:"gap-4 group rounded-lg",href:e.project.mainLink,target:"_blank"},[n("div",null,[n("h2",pe,u(e.project.name),1),n("p",me,u(e.project.description),1),n("p",he,[o[0]||(o[0]=M(" Stack: ")),n("span",fe,u(e.project.skills),1)]),n("div",ge,[e.project.githubUrl?(r(),p(a,{key:e.project.name+"github",name:"Github",link:e.project.githubUrl,icon:"mdi:github",target:"_blank",active:!0,"show-name":!1},null,8,["link"])):d("",!0),e.project.projectLink?(r(),p(a,{key:e.project.name+"link",name:"Link",link:e.project.projectLink,icon:"heroicons:globe-alt",target:"_blank",active:!0,"show-name":!1},null,8,["link"])):d("",!0)])]),C(l,{type:"dashed",class:"py-4"})],8,de)])}}}),ye={key:0,class:"space-y-6"},S="Projects",A="I've completed numerous projects, and I'm especially proud of these.",_e=v({__name:"projects",async setup(e){let t,o;Y({title:S,description:A});const{data:a}=([t,o]=R(()=>Z("projects-all",()=>Q("projects").sort({id:-1}).find())),t=await t,o(),t);return(l,x)=>{const m=D,y=xe;return r(),s("main",null,[C(m,{class:"mb-16",title:S,description:A}),$(a)?(r(),s("div",ye,[(r(!0),s(L,null,K($(a),(j,h)=>(r(),p(y,{key:h,project:j},null,8,["project"]))),128))])):d("",!0)])}}});export{_e as default};
