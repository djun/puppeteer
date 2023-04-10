"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2598],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,g=u["".concat(l,".").concat(m)]||u[m]||s[m]||p;return r?a.createElement(g,i(i({ref:t},d),{},{components:r})):a.createElement(g,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<p;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8153:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={sidebar_label:"Page.addScriptTag"},o="Page.addScriptTag() method",l={unversionedId:"api/puppeteer.page.addscripttag",id:"version-19.8.5/api/puppeteer.page.addscripttag",title:"Page.addScriptTag() method",description:"Adds a `` tag into the page with the desired URL or content.",source:"@site/versioned_docs/version-19.8.5/api/puppeteer.page.addscripttag.md",sourceDirName:"api",slug:"/api/puppeteer.page.addscripttag",permalink:"/api/puppeteer.page.addscripttag",draft:!1,tags:[],version:"19.8.5",frontMatter:{sidebar_label:"Page.addScriptTag"},sidebar:"api",previous:{title:"Page.$x",permalink:"/api/puppeteer.page._x"},next:{title:"Page.addStyleTag",permalink:"/api/puppeteer.page.addstyletag"}},c={},d=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],s={toc:d};function u(e){var{components:t}=e,r=p(e,["components"]);return(0,a.kt)("wrapper",n({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",n({},{id:"pageaddscripttag-method"}),"Page.addScriptTag() method"),(0,a.kt)("p",null,"Adds a ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," tag into the page with the desired URL or content."),(0,a.kt)("h4",n({},{id:"signature"}),"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"class Page {\n  addScriptTag(\n    options: FrameAddScriptTagOptions\n  ): Promise<ElementHandle<HTMLScriptElement>>;\n}\n")),(0,a.kt)("h2",n({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"options"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.frameaddscripttagoptions"}),"FrameAddScriptTagOptions")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Options for the script.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.elementhandle"}),"ElementHandle"),"<","HTMLScriptElement",">",">"),(0,a.kt)("p",null,"An ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.elementhandle"}),"element handle")," to the injected ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," element."),(0,a.kt)("h2",n({},{id:"remarks"}),"Remarks"),(0,a.kt)("p",null,"Shortcut for ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.frame.addscripttag"}),"page.mainFrame().addScriptTag(options)"),"."))}u.isMDXComponent=!0}}]);