"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43088],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),o=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=o(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=o(r),d=n,y=f["".concat(l,".").concat(d)]||f[d]||u[d]||s;return r?i.createElement(y,a(a({ref:t},p),{},{components:r})):i.createElement(y,a({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var o=2;o<s;o++)a[o]=r[o];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},63716:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});r(67294);var i=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},n.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const a={sidebar_label:"Accessibility"},c="Accessibility class",l={unversionedId:"api/puppeteer.accessibility",id:"version-19.11.1/api/puppeteer.accessibility",title:"Accessibility class",description:"The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by assistive technology such as screen readers or switches.",source:"@site/versioned_docs/version-19.11.1/api/puppeteer.accessibility.md",sourceDirName:"api",slug:"/api/puppeteer.accessibility",permalink:"/api/puppeteer.accessibility",draft:!1,tags:[],version:"19.11.1",frontMatter:{sidebar_label:"Accessibility"},sidebar:"api",previous:{title:"WebWorker.url",permalink:"/api/puppeteer.webworker.url"},next:{title:"Accessibility.snapshot",permalink:"/api/puppeteer.accessibility.snapshot"}},o={},p=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}],u={toc:p};function f(e){var{components:t}=e,r=s(e,["components"]);return(0,i.kt)("wrapper",n({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",n({},{id:"accessibility-class"}),"Accessibility class"),(0,i.kt)("p",null,"The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by assistive technology such as ",(0,i.kt)("a",n({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Screen_reader"}),"screen readers")," or ",(0,i.kt)("a",n({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Switch_access"}),"switches"),"."),(0,i.kt)("h4",n({},{id:"signature"}),"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"export declare class Accessibility\n")),(0,i.kt)("h2",n({},{id:"remarks"}),"Remarks"),(0,i.kt)("p",null,"Accessibility is a very platform-specific thing. On different platforms, there are different screen readers that might have wildly different output."),(0,i.kt)("p",null,'Blink - Chrome\'s rendering engine - has a concept of "accessibility tree", which is then translated into different platform-specific APIs. Accessibility namespace gives users access to the Blink Accessibility Tree.'),(0,i.kt)("p",null,'Most of the accessibility tree gets filtered out when converting from Blink AX Tree to Platform-specific AX-Tree or by assistive technologies themselves. By default, Puppeteer tries to approximate this filtering, exposing only the "interesting" nodes of the tree.'),(0,i.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,i.kt)("inlineCode",{parentName:"p"},"Accessibility")," class."),(0,i.kt)("h2",n({},{id:"methods"}),"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",n({parentName:"tr"},{align:null}),"Method"),(0,i.kt)("th",n({parentName:"tr"},{align:null}),"Modifiers"),(0,i.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",n({parentName:"tr"},{align:null}),(0,i.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.accessibility.snapshot"}),"snapshot(options)")),(0,i.kt)("td",n({parentName:"tr"},{align:null})),(0,i.kt)("td",n({parentName:"tr"},{align:null}),"Captures the current state of the accessibility tree. The returned object represents the root accessible node of the page.")))))}f.isMDXComponent=!0}}]);