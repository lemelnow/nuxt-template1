(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{115:function(e,t,n){var content=n(234);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("1358b9e8",content,!0,{sourceMap:!1})},23:function(e,t,n){var content=n(51);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("2d10542e",content,!0,{sourceMap:!1})},233:function(e,t,n){"use strict";n(115)},234:function(e,t,n){var l=n(7)((function(i){return i[1]}));l.push([e.i,".layout-two-column-container .lost-flex-container{align-items:center;}@media (max-width: 767px){.layout-two-column-container .lost-flex-container{flex-direction:column;}}@media (--xs-max){.layout-two-column-container .lost-flex-container{flex-direction:column;}}.layout-two-column-container .lost-flex-container>div{flex-grow:0;flex-shrink:0;flex-basis:calc(99.9% * 12/12);max-width:calc(99.9% * 12/12);width:calc(99.9% * 12/12);}.layout-two-column-container .lost-flex-container>div:nth-child(1n){margin-right:0;margin-left:0;}.layout-two-column-container .lost-flex-container>div:last-child{margin-right:0;}@media (min-width: 768px){.layout-two-column-container .lost-flex-container>div{flex-grow:0;flex-shrink:0;flex-basis:calc(99.9% * 6/12 - (15px - 15px * 6/12));max-width:calc(99.9% * 6/12 - (15px - 15px * 6/12));width:calc(99.9% * 6/12 - (15px - 15px * 6/12));}.layout-two-column-container .lost-flex-container>div:nth-child(1n){margin-right:15px;margin-left:0;}.layout-two-column-container .lost-flex-container>div:last-child{margin-right:0;}.layout-two-column-container .lost-flex-container>div:nth-child(12n){margin-right:0;margin-left:auto;}}@media (--sm){.layout-two-column-container .lost-flex-container>div{flex-grow:0;flex-shrink:0;flex-basis:calc(99.9% * 6/12 - (15px - 15px * 6/12));max-width:calc(99.9% * 6/12 - (15px - 15px * 6/12));width:calc(99.9% * 6/12 - (15px - 15px * 6/12));}.layout-two-column-container .lost-flex-container>div:nth-child(1n){margin-right:15px;margin-left:0;}.layout-two-column-container .lost-flex-container>div:last-child{margin-right:0;}.layout-two-column-container .lost-flex-container>div:nth-child(12n){margin-right:0;margin-left:auto;}}.layout-two-column-container.column-align--left .lost-flex-container>div:first-child{order:0}.layout-two-column-container.column-align--left .lost-flex-container>div:last-child{order:1}.layout-two-column-container.column-align--right .lost-flex-container>div:first-child{order:1}.layout-two-column-container.column-align--right .lost-flex-container>div:last-child{order:0}",""]),l.locals={},e.exports=l},24:function(e,t,n){var content=n(53);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("0245c3c8",content,!0,{sourceMap:!1})},25:function(e,t,n){var content=n(55);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("03b00668",content,!0,{sourceMap:!1})},284:function(e,t,n){"use strict";n.r(t);var l=n(28),o={components:{LayoutDefaultContainer:n(14).a},props:{options:{type:Object,default:()=>({})},mirror:{type:Boolean,default:()=>!1}},computed:{styleClasses(){return{"column-align--left":!this.mirror,"column-align--right":this.mirror}}}},r=(n(233),n(6)),c={components:{LayoutTwoColumnContainer:Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("layout-default-container",{staticClass:"layout-two-column-container",class:e.styleClasses,attrs:{visible:e.options.visible},scopedSlots:e._u([{key:"background",fn:function(){return[e._t("background")]},proxy:!0},{key:"container",fn:function(){return[n("div",{staticClass:"lost-flex-container"},[n("div",[e._t("left")],2),e._v(" "),n("div",[e._t("right")],2)])]},proxy:!0}],null,!0)})}),[],!1,null,null,null).exports,MoleculeContentArticle:n(65).a,SpeedkitPicture:l.a},props:{mirror:{type:Boolean,default:!1},overline:{type:String,default:"Text Image Overline"},headline:{type:String,default:"Text Image Headline"},subline:{type:String,default:"Text Image Subline"},content:{type:String,default:"<p>Scelerisque morbi blandit voluptate possimus vitae illum tristique, atque perspiciatis maecenas laudantium! Morbi, venenatis purus amet, rem eius ligula! Penatibus eleifend curabitur temporibus asperiores tempora cum accumsan egestas viverra laborum.</p><p>Arcu primis enim, parturient! Excepturi adipisci! Incidunt quibusdam ex. Non, impedit est. Ullam eiusmod semper pretium necessitatibus nostrum voluptatem ullamcorper, hac condimentum! Vestibulum rhoncus? Impedit culpa, error tempus. Ligula diam.</p>"},picture:{type:Object,required:!1,default:()=>({sources:[{src:"/img/sample-a-16-9.jpg",sizes:{default:"100vw",xxs:"100vw",xs:"100vw",sm:"100vw",md:"100vw",lg:"100vw",xl:"100vw",xxl:"100vw"}}]})}}},d=Object(r.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("layout-two-column-container",{staticClass:"organism-text-image",attrs:{mirror:e.mirror},scopedSlots:e._u([{key:"left",fn:function(){return[n("speedkit-picture",e._b({},"speedkit-picture",e.picture,!1))]},proxy:!0},{key:"right",fn:function(){return[n("molecule-content-article",e._b({},"molecule-content-article",{headline:{overline:e.overline,headline:e.headline,subline:e.subline},content:e.content},!1))]},proxy:!0}])})}),[],!1,null,null,null);t.default=d.exports},50:function(e,t,n){"use strict";n(23)},51:function(e,t,n){var l=n(7)((function(i){return i[1]}));l.push([e.i,".atom-headline[data-v-c88686be]{margin:0;line-height:1.5;}.atom-headline>*[data-v-c88686be]{display:block}.atom-headline.headline--h2 .overline[data-v-c88686be]{font-size:3.2vw;}@media (min-width: 576px){.atom-headline.headline--h2 .overline[data-v-c88686be]{font-size:12px;}}@media (--xs){.atom-headline.headline--h2 .overline[data-v-c88686be]{font-size:12px;}}.atom-headline.headline--h2 .subline[data-v-c88686be]{font-size:4.26667vw;}@media (min-width: 576px){.atom-headline.headline--h2 .subline[data-v-c88686be]{font-size:16px;}}@media (--xs){.atom-headline.headline--h2 .subline[data-v-c88686be]{font-size:16px;}}.atom-headline.headline--h2 .headline[data-v-c88686be]{font-size:9.6vw;}@media (min-width: 576px){.atom-headline.headline--h2 .headline[data-v-c88686be]{font-size:36px;}}@media (--xs){.atom-headline.headline--h2 .headline[data-v-c88686be]{font-size:36px;}}",""]),l.locals={},e.exports=l},52:function(e,t,n){"use strict";n(24)},53:function(e,t,n){var l=n(7)((function(i){return i[1]}));l.push([e.i,".atom-rich-text[data-v-1a1ea68a]{font-size:4.26667vw;line-height:1.3;letter-spacing:.05625em;}@media (min-width: 576px){.atom-rich-text[data-v-1a1ea68a]{font-size:16px;}}@media (--xs){.atom-rich-text[data-v-1a1ea68a]{font-size:16px;}}",""]),l.locals={},e.exports=l},54:function(e,t,n){"use strict";n(25)},55:function(e,t,n){var l=n(7)((function(i){return i[1]}));l.push([e.i,"",""]),l.locals={},e.exports=l},65:function(e,t,n){"use strict";var l={props:{tag:{type:String,default:"h1"},overline:{type:String,default:"Lorem Overline"},headline:{type:String,default:"Lorem Headline"},subline:{type:String,default:"Lorem Subline"}},computed:{styleClasses(){const e={};return e[`headline--${this.tag}`]=!0,e}}},o=(n(50),n(6)),r=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",staticClass:"atom-headline",class:e.styleClasses},[e._t("default",(function(){return[e.$slots.overline||e.overline?n("span",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Raleway"),expression:"$getFont('Raleway')"}],staticClass:"overline"},[e._t("overline-slot",(function(){return[e._v("\n        "+e._s(e.overline)+"\n      ")]}))],2):e._e(),e._v(" "),e.$slots.headline||e.headline?n("span",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Roboto Slab",700),expression:"$getFont('Roboto Slab', 700)"}],staticClass:"headline"},[e._t("headline-slot",(function(){return[e._v("\n        "+e._s(e.headline)+"\n      ")]}))],2):e._e(),e._v(" "),e.$slots.subline||e.subline?n("span",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Raleway",700),expression:"$getFont('Raleway', 700)"}],staticClass:"subline"},[e._t("subline-slot",(function(){return[e._v("\n        "+e._s(e.subline)+"\n      ")]}))],2):e._e()]}))],2)}),[],!1,null,"c88686be",null).exports,c={props:{content:{type:String,required:!1,default:"Lorem ipsum <strong>dolor sit</strong> amet, consetetur <a href='https://grabarzundpartner.de'>sadipscing elitr</a>, sed diam nonumy eirmod <i>tempor invidunt ut labore</i> et dolore magna aliquyam erat, <u>sed diam voluptua.</u> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}}},d=(n(52),{components:{AtomHeadline:r,AtomRichText:Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"font",rawName:"v-font",value:[e.$getFont("Raleway"),e.$getFont("Raleway",700,"normal",{selector:"strong"}),e.$getFont("Raleway",400,"italic",{selector:"em"})],expression:"[\n    $getFont('Raleway'),\n    $getFont('Raleway', 700, 'normal', {selector:'strong'}),\n    $getFont('Raleway', 400, 'italic', {selector:'em'})\n  ]"}],staticClass:"atom-rich-text"},[e.$slots.default?e._e():n("div",{domProps:{innerHTML:e._s(e.content)}}),e._v(" "),e._t("default")],2)}),[],!1,null,"1a1ea68a",null).exports},props:{headline:{type:Object,default:()=>({overline:"Article Overline",headline:"Article Headline",subline:"Article Subline"})},content:{type:String,default:()=>"<p>Example Text</p>"}}}),m=(n(54),Object(o.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"molecule-article"},[e.headline?n("header",[n("atom-headline",e._b({attrs:{tag:"h2"}},"atom-headline",e.headline,!1))],1):e._e(),e._v(" "),e._t("default",(function(){return[n("atom-rich-text",{attrs:{content:e.content}})]}))],2)}),[],!1,null,null,null));t.a=m.exports}}]);