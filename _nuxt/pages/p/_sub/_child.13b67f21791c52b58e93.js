(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{29:function(t,e,n){"use strict";var c={extends:n(36).a,async asyncData({$content:t,store:e,app:n,error:c,route:r}){const o=n.i18n.locale,path=function(path,t){return path=path.replace(/^\//,"").replace(t,"").replace(/^[\\/]?/,"").replace(/^\//,""),`${t}/${path||"index"}`}(r.path,o);let data=await t(path).fetch().catch((t=>c(t)));return Array.isArray(data)&&(data=data.find((({slug:t})=>"index"===t))),"routeParams"in data&&e.dispatch("i18n/setRouteParams",data.routeParams),{title:data.title,components:data.components}},data:()=>({title:"title of page",components:[]}),head(){return{title:this.title}}},r=n(6),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},t._l(t.components,(function(e,c){return n(e.component,t._b({key:c,tag:"component",attrs:{critical:c<1}},"component",e.data,!1))})),1)}),[],!1,null,null,null);e.a=component.exports},295:function(t,e,n){"use strict";n.r(e);var c={extends:n(29).a,nuxtI18n:{paths:{de:"/p/:sub/:child",en:"/p/:sub/:child"}}},r=n(6),component=Object(r.a)(c,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);