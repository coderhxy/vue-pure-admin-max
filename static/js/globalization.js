import{af as N,fX as O,fY as X,a9 as J,ax as $,p as s,aX as y,fZ as c,fO as Y,fE as q,fM as G,ac as C,fT as H,fI as Q,f_ as W,U as tt,ae as et,n as nt,a0 as ot,f as M,k,g as i}from"./index.js";import{e as B}from"./mitt.js";import{u as at}from"./user.js";import{u as st}from"./app.js";import{u as rt}from"./epTheme.js";const Ct={width:24,height:24,body:'<path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16ZM11 7h2v2h-2V7Zm0 4h2v6h-2v-6Z"/>'},lt="The current routing configuration is incorrect, please check the configuration";function ct(){var x,S;const e=st(),o=N().options.routes,{isFullscreen:v,toggle:r}=O(),{wholeMenus:a}=X(J()),p=(S=(x=$())==null?void 0:x.TooltipEffect)!=null?S:"light",u=s(()=>({width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",overflow:"hidden"})),m=s(()=>{var t,n;return y((t=c())==null?void 0:t.avatar)?at:(n=c())==null?void 0:n.avatar}),h=s(()=>{var t,n,l;return y((t=c())==null?void 0:t.nickname)?(n=c())==null?void 0:n.username:(l=c())==null?void 0:l.nickname}),w=s(()=>(t,n)=>({background:t===n?rt().epThemeColor:"",color:t===n?"#f4f4f5":"#000"})),_=s(()=>(t,n)=>t===n?"":"dark:hover:!text-primary"),z=s(()=>h.value?{marginRight:"10px"}:""),d=s(()=>!e.getSidebarStatus),g=s(()=>e.getDevice),{$storage:f,$config:I}=Y(),b=s(()=>{var t;return(t=f==null?void 0:f.layout)==null?void 0:t.layout}),A=s(()=>I.Title);function E(t){const n=$().Title;n?document.title=`${C(t.title)} | ${n}`:document.title=C(t.title)}function R(){c().logOut()}function L(){var t;H.push((t=Q())==null?void 0:t.path)}function P(){B.emit("openPanel")}function Z(){H.push({name:"AccountSettings"})}function j(){e.toggleSideBar()}function D(t){t==null||t.handleResize()}function F(t){var T;if(!t.children)return console.error(lt);const n=/^http(s?):\/\//,l=(T=t.children[0])==null?void 0:T.path;return n.test(l)?t.path+"/"+l:l}function U(t){a.value.length===0||V(t)||B.emit("changLayoutRoute",t)}function V(t){return W.includes(t)}function K(){return new URL("/vue-pure-admin-max/logo.svg",import.meta.url).href}return{title:A,device:g,layout:b,logout:R,routers:o,$storage:f,isFullscreen:v,Fullscreen:q,ExitFullscreen:G,toggle:r,backTopMenu:L,onPanel:P,getDivStyle:u,changeTitle:E,toggleSideBar:j,menuSelect:U,handleResize:D,resolvePath:F,getLogo:K,isCollapse:d,pureApp:e,username:h,userAvatar:m,avatarsStyle:z,tooltipEffect:p,toAccountSettings:Z,getDropdownItemStyle:w,getDropdownItemClass:_}}function Ht(e){const{$storage:o,changeTitle:v,handleResize:r}=ct(),{locale:a,t:p}=tt(),u=et();function m(){o.locale={locale:"zh"},a.value="zh",e&&r(e.value)}function h(){o.locale={locale:"en"},a.value="en",e&&r(e.value)}function w(){o.locale={locale:"tw"},a.value="tw",e&&r(e.value)}function _(){o.locale={locale:"ja"},a.value="ja",e&&r(e.value)}function z(){o.locale={locale:"ko"},a.value="ko",e&&r(e.value)}return nt(()=>a.value,()=>{v(u.meta)}),ot(()=>{var d,g;a.value=(g=(d=o.locale)==null?void 0:d.locale)!=null?g:"zh"}),{t:p,route:u,locale:a,translationCh:m,translationEn:h,translationTw:w,translationJa:_,translationKo:z}}const it={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},ut=i("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),ht=i("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12M11 1h2v3h-2zm0 19h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414zM23 11v2h-3v-2zM4 11v2H1v-2z"},null,-1),dt=[ut,ht];function gt(e,o){return M(),k("svg",it,[...dt])}const Bt={render:gt},ft={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},vt=i("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),pt=i("path",{d:"M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981"},null,-1),mt=[vt,pt];function wt(e,o){return M(),k("svg",ft,[...mt])}const It={render:wt},_t={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em","aria-hidden":"true",class:"globalization",viewBox:"0 0 512 512"},zt=i("path",{fill:"currentColor",d:"m478.33 433.6-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362 368 281.65 401.17 362zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z"},null,-1),Mt=[zt];function kt(e,o){return M(),k("svg",_t,[...Mt])}const bt={render:kt};export{It as a,Bt as b,Ht as c,Ct as d,bt as g,ct as u};
