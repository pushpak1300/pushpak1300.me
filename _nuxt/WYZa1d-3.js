const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./C-7lRC_w.js","./C-lXhpSr.js","./entry.bAORWwZs.css","./DYaJwRlR.js","./m5iWxH7_.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{p as f,V as p,_ as v,d as g,ag as d,E as l,m as h,ad as _,af as r,A as y}from"./C-lXhpSr.js";import{u as C}from"./B2vtfghr.js";import{q as w,w as m,e as P,s as $,j as N,u as j}from"./DYaJwRlR.js";import{u as E}from"./m5iWxH7_.js";const T=async e=>{const{content:t}=f().public;typeof(e==null?void 0:e.params)!="function"&&(e=w(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${P(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if($())return(await v(()=>import("./C-7lRC_w.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:N(a),previewToken:E().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},D=g({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=d(e),a=l(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:n}=j();return{navigation:n}}const{data:s}=await C(`content-navigation-${p(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=_(),{navigation:a}=e,s=o=>r(y,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),O=D;export{O as default};
