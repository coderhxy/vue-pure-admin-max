var E=Object.defineProperty;var h=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var I=(f,l,n)=>l in f?E(f,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):f[l]=n,y=(f,l)=>{for(var n in l||(l={}))P.call(l,n)&&I(f,n,l[n]);if(h)for(var n of h(l))S.call(l,n)&&I(f,n,l[n]);return f};import{c as B,V as R,d as b,Z as _,r as D,$ as F,a0 as J,o as Y,B as j,k as W,A as N,f as L,_ as x,X as T,b as Z,u as z}from"./index--WFK53yL.js";import{m as O}from"./mock-CC4jpGLO.js";var k={exports:{}};(function(f,l){(function(n,w){f.exports=w()})(B,function(){function n(e){var p=[];return e.AMapUI&&p.push(w(e.AMapUI)),e.Loca&&p.push(m(e.Loca)),Promise.all(p)}function w(e){return new Promise(function(p,t){var s=[];if(e.plugins)for(var i=0;i<e.plugins.length;i+=1)o.AMapUI.plugins.indexOf(e.plugins[i])==-1&&s.push(e.plugins[i]);if(u.AMapUI===a.failed)t("前次请求 AMapUI 失败");else if(u.AMapUI===a.notload){u.AMapUI=a.loading,o.AMapUI.version=e.version||o.AMapUI.version,i=o.AMapUI.version;var c=document.body||document.head,A=document.createElement("script");A.type="text/javascript",A.src="https://webapi.amap.com/ui/"+i+"/main.js",A.onerror=function(r){u.AMapUI=a.failed,t("请求 AMapUI 失败")},A.onload=function(){if(u.AMapUI=a.loaded,s.length)window.AMapUI.loadUI(s,function(){for(var r=0,v=s.length;r<v;r++){var U=s[r].split("/").slice(-1)[0];window.AMapUI[U]=arguments[r]}for(p();d.AMapUI.length;)d.AMapUI.splice(0,1)[0]()});else for(p();d.AMapUI.length;)d.AMapUI.splice(0,1)[0]()},c.appendChild(A)}else u.AMapUI===a.loaded?e.version&&e.version!==o.AMapUI.version?t("不允许多个版本 AMapUI 混用"):s.length?window.AMapUI.loadUI(s,function(){for(var r=0,v=s.length;r<v;r++){var U=s[r].split("/").slice(-1)[0];window.AMapUI[U]=arguments[r]}p()}):p():e.version&&e.version!==o.AMapUI.version?t("不允许多个版本 AMapUI 混用"):d.AMapUI.push(function(r){r?t(r):s.length?window.AMapUI.loadUI(s,function(){for(var v=0,U=s.length;v<U;v++){var C=s[v].split("/").slice(-1)[0];window.AMapUI[C]=arguments[v]}p()}):p()})})}function m(e){return new Promise(function(p,t){if(u.Loca===a.failed)t("前次请求 Loca 失败");else if(u.Loca===a.notload){u.Loca=a.loading,o.Loca.version=e.version||o.Loca.version;var s=o.Loca.version,i=o.AMap.version.startsWith("2"),c=s.startsWith("2");if(i&&!c||!i&&c)t("JSAPI 与 Loca 版本不对应！！");else{i=o.key,c=document.body||document.head;var A=document.createElement("script");A.type="text/javascript",A.src="https://webapi.amap.com/loca?v="+s+"&key="+i,A.onerror=function(r){u.Loca=a.failed,t("请求 AMapUI 失败")},A.onload=function(){for(u.Loca=a.loaded,p();d.Loca.length;)d.Loca.splice(0,1)[0]()},c.appendChild(A)}}else u.Loca===a.loaded?e.version&&e.version!==o.Loca.version?t("不允许多个版本 Loca 混用"):p():e.version&&e.version!==o.Loca.version?t("不允许多个版本 Loca 混用"):d.Loca.push(function(r){r?t(r):t()})})}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var a;(function(e){e.notload="notload",e.loading="loading",e.loaded="loaded",e.failed="failed"})(a||(a={}));var o={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},u={AMap:a.notload,AMapUI:a.notload,Loca:a.notload},d={AMap:[],AMapUI:[],Loca:[]},g=[],M=function(e){typeof e=="function"&&(u.AMap===a.loaded?e(window.AMap):g.push(e))};return{load:function(e){return new Promise(function(p,t){if(u.AMap==a.failed)t("");else if(u.AMap==a.notload){var s=e.key,i=e.version,c=e.plugins;s?(window.AMap&&location.host!=="lbs.amap.com"&&t("禁止多种API加载方式混用"),o.key=s,o.AMap.version=i||o.AMap.version,o.AMap.plugins=c||o.AMap.plugins,u.AMap=a.loading,i=document.body||document.head,window.___onAPILoaded=function(r){if(delete window.___onAPILoaded,r)u.AMap=a.failed,t(r);else for(u.AMap=a.loaded,n(e).then(function(){p(window.AMap)}).catch(t);g.length;)g.splice(0,1)[0]()},c=document.createElement("script"),c.type="text/javascript",c.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+o.AMap.version+"&key="+s+"&plugin="+o.AMap.plugins.join(","),c.onerror=function(r){u.AMap=a.failed,t(r)},i.appendChild(c)):t("请填写key")}else if(u.AMap==a.loaded)if(e.key&&e.key!==o.key)t("多个不一致的 key");else if(e.version&&e.version!==o.AMap.version)t("不允许多个版本 JSAPI 混用");else{if(s=[],e.plugins)for(i=0;i<e.plugins.length;i+=1)o.AMap.plugins.indexOf(e.plugins[i])==-1&&s.push(e.plugins[i]);s.length?window.AMap.plugin(s,function(){n(e).then(function(){p(window.AMap)}).catch(t)}):n(e).then(function(){p(window.AMap)}).catch(t)}else if(e.key&&e.key!==o.key)t("多个不一致的 key");else if(e.version&&e.version!==o.AMap.version)t("不允许多个版本 JSAPI 混用");else{var A=[];if(e.plugins)for(i=0;i<e.plugins.length;i+=1)o.AMap.plugins.indexOf(e.plugins[i])==-1&&A.push(e.plugins[i]);M(function(){A.length?window.AMap.plugin(A,function(){n(e).then(function(){p(window.AMap)}).catch(t)}):n(e).then(function(){p(window.AMap)}).catch(t)})}})},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,o={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},u={AMap:a.notload,AMapUI:a.notload,Loca:a.notload},d={AMap:[],AMapUI:[],Loca:[]}}}})})(k);var q=k.exports;const K=R(q),Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAUCAMAAADSpG8HAAAC91BMVEUAAAAAJQskNR8JNS8AAAAHwgAu2CIAZQIDGgccFA8aTDwVvRAtwyUNqQgcZhgsXSUQQQ0BJQcHMwIpJw4BAQCM63sRRDct5xwHswAMOzAv4SAIxAAr3xofuhZWzUwYRTMqnDEvtyRDvjgKMSwBjQCWkJRdxFNnm2A0cy8KLSgknR0hQTEydjNDYzFhjFpocEsXig9wimhcTi45hy0kTy1Vg0hQLx0EPABCSkAYSxwATQc0UjIFCwOU/4mt/6YP7wXI/8Gh/5eK/4CG/3tJfla5/7K3/7Ck/5tL/0Yq/h0ANxDi/9DG/77D/7vA/7jG/7Cz/6yb/5Gd/4WY/4GF/oFrl3Zy9WtTh2Fj319F2kklakMgbjgOSDAx/yoALBgc8RECIQ7N/8bL/7Sx/6m6/6Oq/6Gm/6Cb/5aX/410oYRuln+U/3tklXNZjGtY019Ou15y/1RV/0YlZUUs1j1E/jk8/ysiYisWZiMFUh8CsR0i6hkj/xUd2RMa+hAAPgwK+gDa/8nT/8bW/7/a/73O/7m9/7W//6qLrZyt/5qk/5GY/JB/rI2k/4eK8YeO/3aI/3N6/21w/2Jf/2Jt72Jj5GJNemJLhmBEgVtOxlhR1lZAgVE2aFEzdE0ye0w/5Uk+nkdGzUY1TUVG4EQ+u0ElXzsicTkhZjgsijYsrDI37i0kgiwhSCwAoxsTnBsY0hALgBAAEQgN4gcHowUS/wT/////8PeWt8HI47WlxK/K/6aUuqGm/52f7Zyx/5qt/5XCupS9/5C+pI+U9456m4uI9oSS/4CE/4B+9nqa/3hkjHBVgWxUxWGA/2BNtl5WvFtS4Vll/1hGpFhY2ldd/FRa71Ne+lI6eFJAXlFq/05Ks01U2ExS9EcxTUAldz481zssRDszyDcfWTc9+jAXyzAx2S4PYSwIUiscOSkitygVMSgLwyYCvCEfpiEDyCAAvR4i3xwe1xwQaxoj9xgQShcKaBYKQBYMWBQU7BAMbA8X8A0J1wsFdgsAAABw6AJ/AAAAPXRSTlMAZ1XZBPPiqUM7/v7d04B2aFdSSRb68uzp5+fn5N/e3drT0MzKxsW+vr27tLOysLCrqqmno6CQj4aEd3Ig/fi2ogAAAkNJREFUKM9ioACwmIMIFCEBYz1DU34ODkFLHUYIEORWUpPjkeU1EICp0T1xYGfnpOLKNWveva2sfP3qcfG8eZGXI0J6LhR6+qtCzBPef2by5IiI4yEhR3p7D3U5uqfYrir/5rUh4VZH2MqwLRpgRUbbN62etWR+c1ODNxA0NDa22JbHxdXVbfBysusKu10rBFKkWPD1evjDm82+vr4+Pg4ODokOHeeyor28vP68CT6WHlLKDlLEFrv6pMuyvCY3N9dWPz+gukT/xZk7plXUJfwo9PCYNJEXrKjqTqhLdESLXXJAAEidb2LSglntu7ozD5fVxsbbV0uDFMnULAx1WTrFPy011S4ZqMzVISlyblZOZnd7WY1nvH09K0gRQOLrwIraHN3d01LtgOr8/Bfdzc3NzclCUiS17j7Qukspgenpju670+zsXNsWRU+dPi38VHkVXBHb++c5LssW7LXNCHR0dAwMdHdLufd09pxr02d/9Pz0036zBEgRT2xCePiSxZ1OtrYZGba2Ts62+x48K4qKmhOzvsR+Y221CkiR1o2El1O5lh91dnZ2cnJydp4wsW9FTBFQVRx36aMS+83gcALMbNumz8tXrcgODgrqCQoKDs7O7ltbURETE/e7tOrJrz1hHCBFnAcLPAqvzJyRl3c6/+LZ/PwZM89HFr9Yu/7Lh+8bqydstYCkAv2k/gKPyPnyzJJcc8WYmZmVNbVNFDxWxpZc7RdVZ4KlFSZrPj5+YWAqs2ESgQqxW3EKMTFxArnEAgDLUd+tnLfEzAAAAABJRU5ErkJggg==",G={id:"mapview",ref:"mapview"},V=b({name:"Amap",__name:"Amap",setup(f){let l,n;const w=_(),m=D({loading:!F()}),a=()=>{n&&n.on("complete",()=>{m.loading=!1})};return J(()=>{if(!w)return;const{MapConfigure:o}=w.appContext.config.globalProperties.$config,{options:u}=o;K.load({key:o.amapKey,version:"2.0",plugins:["AMap.MarkerCluster"]}).then(d=>{n=new d.Map(w.refs.mapview,u),n.plugin(["AMap.ToolBar","AMap.MapType"],()=>{n.addControl(new d.ToolBar),n.addControl(new d.MapType({defaultType:0}))}),l=new d.MarkerCluster(n,[],{gridSize:80,maxZoom:14,renderMarker(g){const{marker:M,data:e}=g;if(Array.isArray(e)&&e[0]){const{driver:p,plateNumber:t,orientation:s}=e[0],i=`<img style="transform: scale(1) rotate(${360-Number(s)}deg);" src='${Q}' />`;M.setContent(i),M.setLabel({direction:"bottom",offset:new d.Pixel(-4,0),content:`<div> ${t}(${p})</div>`}),M.setOffset(new d.Pixel(-18,-10)),M.on("click",({lnglat:c})=>{n.setZoom(13),n.setCenter(c)})}}}),O().then(({data:g})=>{const M=g.map(e=>y({lnglat:[e.lng,e.lat]},e));l&&l.setData(M)}).catch(g=>{}),a()}).catch(()=>{throw m.loading=!1,"地图加载失败，请重新加载"})}),Y(()=>{n&&n.destroy()&&n.clearEvents("click")}),(o,u)=>{const d=N("loading");return j((L(),W("div",G,null,512)),[[d,m.loading]])}}}),X=x(V,[["__scopeId","data-v-2ac3e490"]]),H=T(X),$=b({name:"MapPage",__name:"map",setup(f){return(l,n)=>(L(),Z(z(H)))}}),ae=x($,[["__scopeId","data-v-3dc552d8"]]);export{ae as default};
