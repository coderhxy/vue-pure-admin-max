import{at as a,au as o,av as r,aw as h,ax as p}from"./index-C9LNgsF8.js";const T=a({id:"pure-epTheme",state:()=>{var e,t,m,s;return{epThemeColor:(t=(e=o().getItem(`${r()}layout`))==null?void 0:e.epThemeColor)!=null?t:h().EpThemeColor,epTheme:(s=(m=o().getItem(`${r()}layout`))==null?void 0:m.theme)!=null?s:h().Theme}},getters:{getEpThemeColor(e){return e.epThemeColor},fill(e){return e.epTheme==="light"?"#409eff":"#fff"}},actions:{setEpThemeColor(e){const t=o().getItem(`${r()}layout`);this.epTheme=t==null?void 0:t.theme,this.epThemeColor=e,t&&(t.epThemeColor=e,o().setItem(`${r()}layout`,t))}}});function u(){return T(p)}export{u};
