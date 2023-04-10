"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92294],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(r),h=a,f=m["".concat(i,".").concat(h)]||m[h]||s[h]||o;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96807:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>l});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c={sidebar_label:"Touchscreen.touchStart"},p="Touchscreen.touchStart() method",i={unversionedId:"api/puppeteer.touchscreen.touchstart",id:"version-19.8.5/api/puppeteer.touchscreen.touchstart",title:"Touchscreen.touchStart() method",description:"Dispatches a touchstart event.",source:"@site/versioned_docs/version-19.8.5/api/puppeteer.touchscreen.touchstart.md",sourceDirName:"api",slug:"/api/puppeteer.touchscreen.touchstart",permalink:"/api/puppeteer.touchscreen.touchstart",draft:!1,tags:[],version:"19.8.5",frontMatter:{sidebar_label:"Touchscreen.touchStart"},sidebar:"api",previous:{title:"Touchscreen.touchMove",permalink:"/api/puppeteer.touchscreen.touchmove"},next:{title:"Tracing",permalink:"/api/puppeteer.tracing"}},u={},l=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}],s={toc:l};function m(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"touchscreentouchstart-method"}),"Touchscreen.touchStart() method"),(0,n.kt)("p",null,"Dispatches a ",(0,n.kt)("inlineCode",{parentName:"p"},"touchstart")," event."),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class Touchscreen {\n  touchStart(x: number, y: number): Promise<void>;\n}\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"x"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Horizontal position of the tap.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Vertical position of the tap.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","void",">"))}m.isMDXComponent=!0}}]);