const __vite__fileDeps=["./CZ8s3dek.js","./CXSoA8G4.js","./entry.6hWVVivJ.css","./C-v3KzvZ.js","./B7MfDq9I.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{av as $,s as h,a8 as P,a9 as b,aw as C,X as l,_ as E}from"./CXSoA8G4.js";import{u as w}from"./B7MfDq9I.js";const d=(t,r)=>r.split(".").reduce((n,i)=>n&&n[i],t),f=(t,r)=>Object.keys(t).filter(r).reduce((n,i)=>Object.assign(n,{[i]:t[i]}),{}),T=t=>r=>t&&t.length?f(r,n=>!t.includes(n)):r,B=t=>r=>Array.isArray(r)?r.map(n=>t(n)):t(r),g=t=>{const r=[],n=[];for(const i of t)["$","_"].includes(i)?r.push(i):n.push(i);return{prefixes:r,properties:n}},j=(t=[])=>r=>{if(t.length===0||!r)return r;const{prefixes:n,properties:i}=g(t);return f(r,s=>!i.includes(s)&&!n.includes(s[0]))},q=(t=[])=>r=>{if(t.length===0||!r)return r;const{prefixes:n,properties:i}=g(t);return f(r,s=>i.includes(s)||n.includes(s[0]))},I=(t,r)=>{const n=new Intl.Collator(r.$locale,{numeric:r.$numeric,caseFirst:r.$caseFirst,sensitivity:r.$sensitivity}),i=Object.keys(r).filter(s=>!s.startsWith("$"));for(const s of i)t=t.sort((a,e)=>{const o=[d(a,s),d(e,s)].map(c=>{if(c!==null)return c instanceof Date?c.toISOString():c});return r[s]===-1&&o.reverse(),n.compare(o[0],o[1])});return t},Q=(t,r="Expected an array")=>{if(!Array.isArray(t))throw new TypeError(r)},u=t=>Array.isArray(t)?t:[void 0,null].includes(t)?[]:[t],S=["sort","where","only","without"];function x(t,r={}){const n={};for(const e of Object.keys(r.initialParams||{}))n[e]=S.includes(e)?u(r.initialParams[e]):r.initialParams[e];const i=(e,o=c=>c)=>(...c)=>(n[e]=o(...c),a),s=e=>{var o;return r.legacy?e!=null&&e.surround?e.surround:e&&(e!=null&&e.dirConfig&&(e.result={_path:(o=e.dirConfig)==null?void 0:o._path,...e.result,_dir:e.dirConfig}),e!=null&&e._path||Array.isArray(e)||!Object.prototype.hasOwnProperty.call(e,"result")?e:e==null?void 0:e.result):e},a={params:()=>({...n,...n.where?{where:[...u(n.where)]}:{},...n.sort?{sort:[...u(n.sort)]}:{}}),only:i("only",u),without:i("without",u),where:i("where",e=>[...u(n.where),...u(e)]),sort:i("sort",e=>[...u(n.sort),...u(e)]),limit:i("limit",e=>parseInt(String(e),10)),skip:i("skip",e=>parseInt(String(e),10)),find:()=>t(a).then(s),findOne:()=>t(i("first")(!0)).then(s),count:()=>t(i("count")(!0)).then(s),locale:e=>a.where({_locale:e}),withSurround:i("surround",(e,o)=>({query:e,...o})),withDirConfig:()=>i("dirConfig")(!0)};return r.legacy&&(a.findSurround=(e,o)=>a.withSurround(e,o).find().then(s)),a}function m(t){return JSON.stringify(t,A)}function A(t,r){return r instanceof RegExp?`--REGEX ${r.toString()}`:r}const O=t=>{let r=m(t);return r=typeof Buffer<"u"?Buffer.from(r).toString("base64"):btoa(r),r=r.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(r.match(/.{1,100}/g)||[]).join("/")},y=t=>$(t,h().public.content.api.baseURL),F=()=>{throw console.warn("useContent is only accessible when you are using `documentDriven` mode."),console.warn("Learn more by visiting: https://content.nuxt.com/document-driven"),new Error("useContent is only accessible when you are using `documentDriven` mode.")},v=()=>{const{experimental:t}=h().public.content;return t.clientDB?!0:w().isEnabled()},D=()=>async t=>{const{content:r}=h().public,n=t.params(),i=r.experimental.stripQueryParameters?y(`/query/${`${l(n)}.${r.integrity}`}/${O(n)}.json`):y(`/query/${l(n)}.${r.integrity}.json`);if(v())return(await E(()=>import("./CZ8s3dek.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(e=>e.useContentDatabase())).fetch(t);const s=await $fetch(i,{method:"GET",responseType:"json",params:r.experimental.stripQueryParameters?void 0:{_params:m(n),previewToken:w().getPreviewToken()}});if(typeof s=="string"&&s.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return s};function U(t,...r){const{content:n}=h().public,i=x(D(),{initialParams:typeof t!="string"?t:{},legacy:!0});let s;typeof t=="string"&&(s=P(b(t,...r)));const a=i.params;return i.params=()=>{var o,c,p;const e=a();return s&&(e.where=e.where||[],e.first&&(e.where||[]).length===0?e.where.push({_path:C(s)}):e.where.push({_path:new RegExp(`^${s.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(o=e.sort)!=null&&o.length||(e.sort=[{_file:1,$numeric:!0}]),n.locales.length&&((p=(c=e.where)==null?void 0:c.find(_=>_._locale))!=null&&p._locale||(e.where=e.where||[],e.where.push({_locale:n.defaultLocale}))),e},i}export{Q as a,u as b,I as c,B as d,O as e,j as f,d as g,q as h,x as i,m as j,T as o,U as q,v as s,F as u,y as w};
