(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[540],{9402:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(8537);function a(e,t){return function(){var n=arguments.length;if(0===n)return t();var a=arguments[n-1];return(0,r.Z)(a)||"function"!=typeof a[e]?t.apply(this,arguments):a[e].apply(a,Array.prototype.slice.call(arguments,0,n-1))}}var s=n(8980);var o=n(9956);function i(e,t,n,r){var a,s=function(a){for(var s=t.length,o=0;o<s;){if(e===t[o])return n[o];o+=1}for(var l in t[o+1]=e,n[o+1]=a,e)a[l]=r?i(e[l],t,n,!0):e[l];return a};switch((0,o.Z)(e)){case"Object":return s({});case"Array":return s([]);case"Date":return new Date(e.valueOf());case"RegExp":return a=e,new RegExp(a.source,(a.global?"g":"")+(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.sticky?"y":"")+(a.unicode?"u":""));default:return e}}var l=n(7947),u=n(91),c=n(5638),m=n(6911),f=n(2214),d=function(){function e(e,t,n,r){this.valueFn=e,this.valueAcc=t,this.keyFn=n,this.xf=r,this.inputs={}}return e.prototype["@@transducer/init"]=f.Z.init,e.prototype["@@transducer/result"]=function(e){var t;for(t in this.inputs)if((0,c.Z)(t,this.inputs)&&(e=this.xf["@@transducer/step"](e,this.inputs[t]))["@@transducer/reduced"]){e=e["@@transducer/value"];break}return this.inputs=null,this.xf["@@transducer/result"](e)},e.prototype["@@transducer/step"]=function(e,t){var n=this.keyFn(t);return this.inputs[n]=this.inputs[n]||[n,this.valueAcc],this.inputs[n][1]=this.valueFn(this.inputs[n][1],t),e},e}(),p=(0,l.Z)(4,[],(function(e,t,n,r){return new d(e,t,n,r)})),h=(0,l.Z)(4,[],(0,u.Z)([],p,(function(e,t,n,r){return(0,m.Z)((function(r,a){var s=n(a);return r[s]=e((0,c.Z)(s,r)?r[s]:i(t,[],[],!1),a),r}),{},r)}))),g=(0,s.Z)(a("groupBy",h((function(e,t){return null==e&&(e=[]),e.push(t),e}),null)))},5127:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),a=n(5444),s=function(){return r.createElement("header",null,r.createElement(a.rU,{className:"App__banner",to:"/",title:"Almost-Dead.net home page"},r.createElement("img",{src:"https://i.imgur.com/q5cBEHG.png",alt:"Almost-Dead.net banner"})))};s.defaultProps={};var o=s,i=function(e){var t=e.children,n=e.className,s=void 0===n?"":n;return r.createElement("div",{className:"layout "+s},r.createElement(o,null),r.createElement("main",null,t),r.createElement("footer",{id:"site-footer",className:"footer"},r.createElement(a.rU,{className:"footer__logo",id:"logo-bottom",to:"/",title:"return to home page"},r.createElement("img",{src:"https://i.imgur.com/q5cBEHG.png",alt:"Almost-Dead.net"})),r.createElement(a.rU,{className:"footer__link-about",to:"/about",title:"About the Site"},"About"),r.createElement("a",{href:"https://lot.almost-dead.net",className:"footer__logo-lot",title:"JRAD Forum — The Lot"},r.createElement("img",{src:"https://i.imgur.com/Qi2NhJO.png",alt:"The Lot — a forum for fans of Joe Russo's Almost Dead"}))))}},8965:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(9756),a=n(7294),s=n(5444),o=(0,n(8980).Z)((function(e,t){return Array.prototype.slice.call(t,0).sort((function(t,n){var r=e(t),a=e(n);return r<a?-1:r>a?1:0}))})),i=n(9402),l=n(3960),u=n(5435),c=n(6041),m=n(7415),f=n(5127),d=n(6501),p=["author","core_gd","cover_gd","id","suite","title","performances"];function h(e){var t=e.name;return!(!t||"traditional"===t)&&a.createElement("span",{className:"song__author"},t)}function g(e){var t=e.perfIds,n=e.text,r=void 0===n?"performed":n;if(!t||!t.length)return!1;var s=r+" "+t.length+" time"+(1===t.length?"":"s");return a.createElement(m.Tooltip,{title:s,trigger:"mouseenter focus click"},a.createElement("span",{className:"song__perfcount","aria-label":"notes",role:"img"},"×",t.length,a.createElement("span",{className:"hidden"},s)))}function E(e){var t=e.data,n=t.author,o=t.core_gd,i=t.cover_gd,l=t.id,u=t.suite,c=t.title;t.performances,(0,r.Z)(t,p);return a.createElement(s.rU,{to:"/song/"+l},'"',c,'"'," ",u&&a.createElement("span",{className:"song__suite"},u," suite")," ",(!o||i)&&a.createElement(h,{name:n}))}function _(e){var t=e.data,n=t.allSongsCsv.nodes,r=t.allTeasesCsv.nodes,s=n.filter((function(e){return e.title&&"[unknown]"!==e.title})),m=(0,i.Z)((function(e){return Boolean(e.performances)}),s),p=m[!0],h=m[!1];return a.createElement(f.Z,{className:"songs"},a.createElement(d.Z,{title:"JRAD — all songs played",description:"Almost-complete repertoire of Joe Russo's Almost Dead (JRAD) songs and teases"}),a.createElement("p",null,a.createElement("a",{href:"#songs__headline--teased"},'Jump down to "Teases Only"')),a.createElement("h1",null,"Songs Performed / Jammed"),a.createElement("ul",{className:"songs__list"},o((0,l.Z)("title"))(p).map((function(e){return e.sections?e.title:a.createElement("li",{key:e.id},a.createElement(E,{data:e}),a.createElement(g,{perfIds:String(e.performances).split(":")}))}))),a.createElement("h1",{id:"songs__headline--teased"},"Songs Teased"),a.createElement("ul",{className:"songs__list"},o((0,l.Z)("title"))(h).map((function(e){var t=(0,u.Z)((0,c.Z)("song_id",e.id))(r).map((function(e){return e.performance_id}));return e.sections?e.title:a.createElement("li",{key:e.id},a.createElement(E,{data:e}),a.createElement(g,{text:"teased",perfIds:t}))}))))}var v=function(){return a.createElement(s.i1,{query:"1353399418",render:function(e){return a.createElement(_,{data:e})}})}}}]);
//# sourceMappingURL=component---src-pages-songs-js-2b5f83b27980df72b63f.js.map