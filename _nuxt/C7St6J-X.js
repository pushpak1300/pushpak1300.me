import{_ as V}from"./D6qhrauh.js";import{_ as q}from"./Bzi2Ds0W.js";import{_ as k}from"./fREoFtXO.js";import{K as A,L as v,k as O,d as w,N as U,O as I,H as i,Q as C,R as h,r as H,ab as T,c as a,e as n,Y as g,S as _,ac as F,n as l,t as f,h as b,U as P,f as o,F as L,B as M,C as R,g as G,i as B,z as J,a2 as K,a3 as Q,a4 as $,a5 as Y}from"./C4-WVN8l.js";import{u as W}from"./BtAvhCcH.js";import{q as X}from"./7Dk6jeI_.js";import{u as Z}from"./DN5-381N.js";import"./BE8vZ1_A.js";const ee={wrapper:"relative inline-flex items-center justify-center flex-shrink-0",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-full",text:"font-medium leading-none text-gray-900 dark:text-white truncate",placeholder:"font-medium leading-none text-gray-500 dark:text-gray-400 truncate",size:{"3xs":"h-4 w-4 text-[8px]","2xs":"h-5 w-5 text-[10px]",xs:"h-6 w-6 text-xs",sm:"h-8 w-8 text-sm",md:"h-10 w-10 text-base",lg:"h-12 w-12 text-lg",xl:"h-14 w-14 text-xl","2xl":"h-16 w-16 text-2xl","3xl":"h-20 w-20 text-3xl"},chip:{base:"absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",background:"bg-{color}-500 dark:bg-{color}-400",position:{"top-right":"top-0 right-0","bottom-right":"bottom-0 right-0","top-left":"top-0 left-0","bottom-left":"bottom-0 left-0"},size:{"3xs":"h-[4px] min-w-[4px] text-[4px] p-px","2xs":"h-[5px] min-w-[5px] text-[5px] p-px",xs:"h-1.5 min-w-[0.375rem] text-[6px] p-px",sm:"h-2 min-w-[0.5rem] text-[7px] p-0.5",md:"h-2.5 min-w-[0.625rem] text-[8px] p-0.5",lg:"h-3 min-w-[0.75rem] text-[10px] p-0.5",xl:"h-3.5 min-w-[0.875rem] text-[11px] p-1","2xl":"h-4 min-w-[1rem] text-[12px] p-1","3xl":"h-5 min-w-[1.25rem] text-[14px] p-1"}},icon:{base:"text-gray-500 dark:text-gray-400 flex-shrink-0",size:{"3xs":"h-2 w-2","2xs":"h-2.5 w-2.5",xs:"h-3 w-3",sm:"h-4 w-4",md:"h-5 w-5",lg:"h-6 w-6",xl:"h-7 w-7","2xl":"h-8 w-8","3xl":"h-10 w-10"}},default:{size:"sm",icon:null,chipColor:null,chipPosition:"top-right"}},te={wrapper:{base:"flex items-center align-center text-center",horizontal:"w-full flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs",type:"solid"}},m=A(v.ui.strategy,v.ui.avatar,ee),ae=w({components:{UIcon:k},inheritAttrs:!1,props:{as:{type:[String,Object],default:"img"},src:{type:[String,Boolean],default:null},alt:{type:String,default:null},text:{type:String,default:null},icon:{type:String,default:()=>m.default.icon},size:{type:String,default:()=>m.default.size,validator(e){return Object.keys(m.size).includes(e)}},chipColor:{type:String,default:()=>m.default.chipColor,validator(e){return["gray",...v.ui.colors].includes(e)}},chipPosition:{type:String,default:()=>m.default.chipPosition,validator(e){return Object.keys(m.chip.position).includes(e)}},chipText:{type:[String,Number],default:null},imgClass:{type:String,default:""},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:s}=U("avatar",I(e,"ui"),m),r=i(()=>typeof e.src=="boolean"?null:e.src),c=i(()=>(e.alt||"").split(" ").map(E=>E.charAt(0)).join("").substring(0,2)),u=i(()=>C(h(t.value.wrapper,(p.value||!r.value)&&t.value.background,t.value.rounded,t.value.size[e.size]),e.class)),d=i(()=>C(h(t.value.rounded,t.value.size[e.size]),e.imgClass)),x=i(()=>h(t.value.icon.base,t.value.icon.size[e.size])),j=i(()=>h(t.value.chip.base,t.value.chip.size[e.size],t.value.chip.position[e.chipPosition],t.value.chip.background.replaceAll("{color}",e.chipColor))),p=H(!1);T(()=>e.src,()=>{p.value&&(p.value=!1)});function N(){p.value=!0}return{ui:t,attrs:s,wrapperClass:u,imgClass:d,iconClass:x,chipClass:j,url:r,placeholder:c,error:p,onError:N}}});function re(e,t,s,r,c,u){const d=k;return a(),n("span",{class:l(e.wrapperClass)},[e.url&&!e.error?(a(),g(F(e.as),_({key:0,class:e.imgClass,alt:e.alt,src:e.url},e.attrs,{onError:e.onError}),null,16,["class","alt","src","onError"])):e.text?(a(),n("span",{key:1,class:l(e.ui.text)},f(e.text),3)):e.icon?(a(),g(d,{key:2,name:e.icon,class:l(e.iconClass)},null,8,["name","class"])):e.placeholder?(a(),n("span",{key:3,class:l(e.ui.placeholder)},f(e.placeholder),3)):b("",!0),e.chipColor?(a(),n("span",{key:4,class:l(e.chipClass)},f(e.chipText),3)):b("",!0),P(e.$slots,"default")],2)}const D=O(ae,[["render",re]]),y=A(v.ui.strategy,v.ui.divider,te),se=w({components:{UIcon:k,UAvatar:D},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>y.default.size,validator(e){return Object.keys(y.border.size.horizontal).includes(e)||Object.keys(y.border.size.vertical).includes(e)}},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:()=>y.default.type,validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:s}=U("divider",I(e,"ui"),y),r=i(()=>C(h(t.value.wrapper.base,t.value.wrapper[e.orientation]),e.class)),c=i(()=>h(t.value.container.base,t.value.container[e.orientation])),u=i(()=>h(t.value.border.base,t.value.border[e.orientation],t.value.border.size[e.orientation][e.size],t.value.border.type[e.type]));return{ui:t,attrs:s,wrapperClass:r,containerClass:c,borderClass:u}}});function ne(e,t,s,r,c,u){const d=k,x=D;return a(),n("div",_({class:e.wrapperClass},e.attrs),[o("div",{class:l(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(a(),n(L,{key:0},[o("div",{class:l(e.containerClass)},[P(e.$slots,"default",{},()=>[e.label?(a(),n("span",{key:0,class:l(e.ui.label)},f(e.label),3)):e.icon?(a(),g(d,{key:1,name:e.icon,class:l(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(a(),g(x,_({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):b("",!0)])],2),o("div",{class:l(e.borderClass)},null,2)],64)):b("",!0)],16)}const oe=O(se,[["render",ne]]),le={delay:200},ie=["href"],ce={class:"group-hover:text-primary-500 dark:group-hover:text-primary-200 text-lg font-medium"},ue={class:"text-sm text-gray-800 dark:text-gray-400"},de={class:"hover:text-primary mt-1 text-base font-semibold text-gray-900 hover:cursor-default dark:text-gray-200"},pe={class:"text-sm font-normal lowercase"},me={class:"flex gap-6"},he=w({__name:"ProjectItem",props:{project:{type:Object,required:!0}},setup(e){return(t,s)=>{const r=q,c=oe,u=M("motion-fade-visible");return R((a(),n("div",le,[o("a",{class:"group gap-4 rounded-lg",href:e.project.mainLink,target:"_blank"},[o("div",null,[o("h2",ce,f(e.project.name),1),o("p",ue,f(e.project.description),1),o("p",de,[s[0]||(s[0]=G(" Stack: ")),o("span",pe,f(e.project.skills),1)]),o("div",me,[e.project.githubUrl?(a(),g(r,{key:e.project.name+"github",name:"Github",link:e.project.githubUrl,icon:"mdi:github",target:"_blank",active:!0,"show-name":!1},null,8,["link"])):b("",!0),e.project.projectLink?(a(),g(r,{key:e.project.name+"link",name:"Link",link:e.project.projectLink,icon:"heroicons:globe-alt",target:"_blank",active:!0,"show-name":!1},null,8,["link"])):b("",!0)])]),B(c,{type:"dashed",class:"py-4"})],8,ie)])),[[u]])}}}),fe={key:0,class:"space-y-6"},z="Projects",S="I've completed numerous projects, and I'm especially proud of these.",ze=w({__name:"projects",async setup(e){let t,s;W({title:z,description:S}),J({title:`${z} | ${K.name}`});const{data:r}=([t,s]=Q(()=>Z("projects-all",()=>X("projects").sort({id:-1}).find())),t=await t,s(),t);return(c,u)=>{const d=V,x=he;return a(),n("main",null,[B(d,{class:"mb-8 md:mb-16",title:z,description:S}),$(r)?(a(),n("div",fe,[(a(!0),n(L,null,Y($(r),(j,p)=>(a(),g(x,{key:p,project:j},null,8,["project"]))),128))])):b("",!0)])}}});export{ze as default};