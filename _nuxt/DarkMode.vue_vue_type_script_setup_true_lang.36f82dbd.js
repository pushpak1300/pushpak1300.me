import{H as c,e as d,p as i,D as h,o as t,E as r,a2 as l,u as s,F as n}from"./entry.abdacd9b.js";const u=()=>c("color-mode").value,v={id:"dark-mode","aria-label":"toggle dark mode",class:"text-gray-800 md:text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 focus:outline-none p-2 rounded-full"},p=n("path",{d:"M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05L3.515 4.93zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414l-2.121-2.121zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414l2.121-2.121zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414l2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z",fill:"currentColor"},null,-1),m=[p],_=n("path",{d:"M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938A7.999 7.999 0 0 0 4 12z",fill:"currentColor"},null,-1),f=[_],z=d({__name:"DarkMode",setup(M){const e=i(!1),o=u(),a=()=>{if(o.preference==="dark"){o.preference="light",e.value=!1;return}o.preference="dark",e.value=!0};return h(()=>{o.preference==="dark"&&(e.value=!0)}),(g,k)=>(t(),r("button",v,[(t(),r("svg",{xmlns:"http://www.w3.org/2000/svg",class:l(["h-6 w-6",s(e)?"hidden":"block"]),preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",onClick:a},m,2)),(t(),r("svg",{class:l(["h-6 w-6",s(e)?"block":"hidden"]),xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",onClick:a},f,2))]))}});export{z as _};
