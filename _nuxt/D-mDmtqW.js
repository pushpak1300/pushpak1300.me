import{d as n,H as c,at as o,aj as h,p,au as u,c as l,Y as d,a4 as s,ac as f}from"./C4-WVN8l.js";import{_ as m}from"./B_D4aYza.js";const S=n({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(r){const t=r,i=c(()=>{var e;if((e=t.src)!=null&&e.startsWith("/")&&!t.src.startsWith("//")){const a=o(h(p().app.baseURL));if(a!=="/"&&!t.src.startsWith(a))return u(a,t.src)}return t.src});return(e,a)=>(l(),d(f(s(m)),{src:s(i),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{S as default};