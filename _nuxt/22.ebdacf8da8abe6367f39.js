(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{278:function(e,t,n){(function(n){var o,r,c;r=[],void 0===(c="function"==typeof(o=function(){"use strict";var e,t,o,r,c="undefined"!=typeof window?window:null!=typeof n?n:this||{},l=c.cancelRequestAnimationFrame&&c.requestAnimationFrame||setTimeout,d=c.cancelRequestAnimationFrame||clearTimeout,f=[],m=0,v=!1,w=7,k=35,h=125,y=0,C=0,D=0,I={get didTimeout(){return!1},timeRemaining:function(){var e=w-(Date.now()-C);return e<0?0:e}},E=T((function(){w=22,h=66,k=0}));function T(e){var t,n,o=99,r=function(){var c=Date.now()-n;c<o?t=setTimeout(r,o-c):(t=null,e())};return function(){n=Date.now(),t||(t=setTimeout(r,o))}}function L(){v&&(r&&d(r),o&&clearTimeout(o),v=!1)}function R(){125!=h&&(w=7,h=125,k=35,v&&(L(),F())),E()}function O(){r=null,o=setTimeout(j,0)}function A(){o=null,l(O)}function F(){v||(t=h-(Date.now()-C),e=Date.now(),v=!0,k&&t<k&&(t=k),t>9?o=setTimeout(A,t):(t=0,A()))}function j(){var n,i,r,c=w>9?9:1;if(C=Date.now(),v=!1,o=null,m>2||C-t-50<e)for(i=0,r=f.length;i<r&&I.timeRemaining()>c;i++)n=f.shift(),D++,n&&n(I);f.length?F():m=0}function J(e){return y++,f.push(e),F(),y}function M(e){var t=e-1-D;f[t]&&(f[t]=null)}if(c.requestIdleCallback&&c.cancelIdleCallback)try{c.requestIdleCallback((function(){}),{timeout:0})}catch(e){!function(e){var t,n;if(c.requestIdleCallback=function(t,n){return n&&"number"==typeof n.timeout?e(t,n.timeout):e(t)},c.IdleCallbackDeadline&&(t=IdleCallbackDeadline.prototype)){if(!(n=Object.getOwnPropertyDescriptor(t,"timeRemaining"))||!n.configurable||!n.get)return;Object.defineProperty(t,"timeRemaining",{value:function(){return n.get.call(this)},enumerable:!0,configurable:!0})}}(c.requestIdleCallback)}else c.requestIdleCallback=J,c.cancelIdleCallback=M,c.document&&document.addEventListener&&(c.addEventListener("scroll",R,!0),c.addEventListener("resize",R),document.addEventListener("focus",R,!0),document.addEventListener("mouseover",R,!0),["click","keypress","touchstart","mousedown"].forEach((function(e){document.addEventListener(e,R,{capture:!0,passive:!0})})),c.MutationObserver&&new MutationObserver(R).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}));return{request:J,cancel:M}})?o.apply(t,r):o)||(e.exports=c)}).call(this,n(1))}}]);