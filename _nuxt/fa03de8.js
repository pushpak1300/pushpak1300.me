(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{357:function(t,e,r){"use strict";r.r(e);var n=r(20),c=r(19),o=r(30),l=r(34),f=r(15),d=r(10),y=(r(25),r(11),r(68),r(1)),v=r(41);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var h=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},x=function(t){Object(o.a)(r,t);var e=_(r);function r(){return Object(c.a)(this,r),e.apply(this,arguments)}return Object(n.a)(r)}(y.a.extend({props:{blog:{type:Object,required:!0}}})),O=x=h([v.a],x),j=r(9),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-gray-500 dark:text-gray-300"},[r("p",{staticClass:"text-sm"},[r("time",{attrs:{datetime:new Date(Date.parse(t.blog.created_at))}},[t._v(t._s(t.$dateFns.format(new Date(Date.parse(t.blog.created_at)),"d MMM, yyyy")))])]),t._v(" "),r("a",{staticClass:"mt-1 block",attrs:{href:t.blog.url,target:"_blank",rel:"noopener"}},[r("p",{staticClass:"text-xl font-semibold text-gray-700 dark:text-gray-100"},[t._v("\n      "+t._s(t.blog.title)+"\n    ")]),t._v(" "),r("p",{staticClass:"mt-3 text-base"},[t._v("\n      "+t._s(t.blog.description)+"\n    ")])]),t._v(" "),r("div",{staticClass:"mt-3"},[r("a",{staticClass:"text-base font-semibold text-gray-700 dark:text-gray-300 hover",attrs:{href:t.blog.url,target:"_blank",rel:"noopener"}},[t._v("\n      Read full blog\n    ")])])])}),[],!1,null,null,null);e.default=component.exports}}]);