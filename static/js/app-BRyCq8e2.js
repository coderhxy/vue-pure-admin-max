var h=(e,i,t)=>new Promise((a,n)=>{var p=s=>{try{u(t.next(s))}catch(d){n(d)}},S=s=>{try{u(t.throw(s))}catch(d){n(d)}},u=s=>s.done?a(s.value):Promise.resolve(s.value).then(p,S);u((t=t.apply(e,i)).next())});import{at as b,au as o,av as r,aw as l,$ as w,ax as c}from"./index-C9LNgsF8.js";const g=b({id:"pure-app",state:()=>{var e,i,t,a;return{sidebar:{opened:(i=(e=o().getItem(`${r()}layout`))==null?void 0:e.sidebarStatus)!=null?i:l().SidebarStatus,withoutAnimation:!1,isClickCollapse:!1},layout:(a=(t=o().getItem(`${r()}layout`))==null?void 0:t.layout)!=null?a:l().Layout,device:w()?"mobile":"desktop",isShowDouble:!0,viewportSize:{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight},sortSwap:!1}},getters:{getSidebarStatus(e){return e.sidebar.opened},getDevice(e){return e.device},getViewportWidth(e){return e.viewportSize.width},getViewportHeight(e){return e.viewportSize.height}},actions:{TOGGLE_SIDEBAR(e,i){const t=o().getItem(`${r()}layout`);e&&i?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!0,t.sidebarStatus=!0):!e&&i?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!1,t.sidebarStatus=!1):!e&&!i&&(this.sidebar.withoutAnimation=!1,this.sidebar.opened=!this.sidebar.opened,this.sidebar.isClickCollapse=!this.sidebar.opened,t.sidebarStatus=this.sidebar.opened),o().setItem(`${r()}layout`,t)},toggleSideBar(e,i){return h(this,null,function*(){yield this.TOGGLE_SIDEBAR(e,i)})},toggleDevice(e){this.device=e},setLayout(e){this.layout=e},showDouble(e){this.isShowDouble=e},setViewportSize(e){this.viewportSize=e},setSortSwap(e){this.sortSwap=e}}});function v(){return g(c)}export{v as u};
