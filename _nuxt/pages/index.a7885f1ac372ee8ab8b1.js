(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{29:function(t,e,n){"use strict";var r={extends:n(36).a,async asyncData({$content:t,store:e,app:n,error:r,route:c}){const o=n.i18n.locale,path=function(path,t){return path=path.replace(/^\//,"").replace(t,"").replace(/^[\\/]?/,"").replace(/^\//,""),`${t}/${path||"index"}`}(c.path,o);let data=await t(path).fetch().catch((t=>r(t)));return Array.isArray(data)&&(data=data.find((({slug:t})=>"index"===t))),"routeParams"in data&&e.dispatch("i18n/setRouteParams",data.routeParams),{title:data.title,components:data.components}},data:()=>({title:"title of page",components:[]}),head(){return{title:this.title}}},c=n(6),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},t._l(t.components,(function(e,r){return n(e.component,t._b({key:r,tag:"component",attrs:{critical:r<1}},"component",e.data,!1))})),1)}),[],!1,null,null,null);e.a=component.exports},293:function(t,e,n){"use strict";n.r(e);var r={extends:n(29).a,nuxtI18n:{paths:{de:"/",en:"/"}}},c=n(6),component=Object(c.a)(r,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);