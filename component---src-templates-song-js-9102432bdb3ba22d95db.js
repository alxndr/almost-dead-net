(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[208],{8088:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var r=n(8980);function a(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}function u(t,e,n){for(var r=0,a=n.length;r<a;){if(t(e,n[r]))return!0;r+=1}return!1}var o=n(5638);var c="function"==typeof Object.is?Object.is:function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e},i=n(4567),s=n(9956);function l(t,e,n,r){var o=a(t);function c(t,e){return f(t,e,n.slice(),r.slice())}return!u((function(t,e){return!u(c,e,t)}),a(e),o)}function f(t,e,n,r){if(c(t,e))return!0;var a,u,d=(0,s.Z)(t);if(d!==(0,s.Z)(e))return!1;if(null==t||null==e)return!1;if("function"==typeof t["fantasy-land/equals"]||"function"==typeof e["fantasy-land/equals"])return"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](e)&&"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](t);if("function"==typeof t.equals||"function"==typeof e.equals)return"function"==typeof t.equals&&t.equals(e)&&"function"==typeof e.equals&&e.equals(t);switch(d){case"Arguments":case"Array":case"Object":if("function"==typeof t.constructor&&"Promise"===(a=t.constructor,null==(u=String(a).match(/^function (\w*)/))?"":u[1]))return t===e;break;case"Boolean":case"Number":case"String":if(typeof t!=typeof e||!c(t.valueOf(),e.valueOf()))return!1;break;case"Date":if(!c(t.valueOf(),e.valueOf()))return!1;break;case"Error":return t.name===e.name&&t.message===e.message;case"RegExp":if(t.source!==e.source||t.global!==e.global||t.ignoreCase!==e.ignoreCase||t.multiline!==e.multiline||t.sticky!==e.sticky||t.unicode!==e.unicode)return!1}for(var h=n.length-1;h>=0;){if(n[h]===t)return r[h]===e;h-=1}switch(d){case"Map":return t.size===e.size&&l(t.entries(),e.entries(),n.concat([t]),r.concat([e]));case"Set":return t.size===e.size&&l(t.values(),e.values(),n.concat([t]),r.concat([e]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var m=(0,i.Z)(t);if(m.length!==(0,i.Z)(e).length)return!1;var p=n.concat([t]),g=r.concat([e]);for(h=m.length-1;h>=0;){var Z=m[h];if(!(0,o.Z)(Z,e)||!f(e[Z],t[Z],p,g))return!1;h-=1}return!0}var d=(0,r.Z)((function(t,e){return f(t,e,[],[])}))},768:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(8980),a=n(91);var u=n(2214),o=function(){function t(t,e){this.xf=e,this.f=t,this.found=!1}return t.prototype["@@transducer/init"]=u.Z.init,t.prototype["@@transducer/result"]=function(t){return this.found||(t=this.xf["@@transducer/step"](t,void 0)),this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,e){var n;return this.f(e)&&(this.found=!0,t=(n=this.xf["@@transducer/step"](t,e))&&n["@@transducer/reduced"]?n:{"@@transducer/value":n,"@@transducer/reduced":!0}),t},t}(),c=(0,r.Z)((function(t,e){return new o(t,e)})),i=(0,r.Z)((0,a.Z)(["find"],c,(function(t,e){for(var n=0,r=e.length;n<r;){if(t(e[n]))return e[n];n+=1}})))},4715:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(7678);function a(t){return function e(n){return 0===arguments.length||(0,r.Z)(n)?e:t.apply(this,arguments)}}},8980:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(4715),a=n(7678);function u(t){return function e(n,u){switch(arguments.length){case 0:return e;case 1:return(0,a.Z)(n)?e:(0,r.Z)((function(e){return t(n,e)}));default:return(0,a.Z)(n)&&(0,a.Z)(u)?e:(0,a.Z)(n)?(0,r.Z)((function(e){return t(e,u)})):(0,a.Z)(u)?(0,r.Z)((function(e){return t(n,e)})):t(n,u)}}}},91:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(8537);function a(t){return null!=t&&"function"==typeof t["@@transducer/step"]}function u(t,e,n){return function(){if(0===arguments.length)return n();var u=Array.prototype.slice.call(arguments,0),o=u.pop();if(!(0,r.Z)(o)){for(var c=0;c<t.length;){if("function"==typeof o[t[c]])return o[t[c]].apply(o,u);c+=1}if(a(o)){var i=e.apply(null,u);return i(o)}}return n.apply(this,arguments)}}},5638:function(t,e,n){"use strict";function r(t,e){return Object.prototype.hasOwnProperty.call(e,t)}n.d(e,{Z:function(){return r}})},8537:function(t,e){"use strict";e.Z=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)}},7678:function(t,e,n){"use strict";function r(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}n.d(e,{Z:function(){return r}})},2214:function(t,e){"use strict";e.Z={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}}},4567:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var r=n(4715),a=n(5638),u=Object.prototype.toString,o=function(){return"[object Arguments]"===u.call(arguments)?function(t){return"[object Arguments]"===u.call(t)}:function(t){return(0,a.Z)("callee",t)}}(),c=!{toString:null}.propertyIsEnumerable("toString"),i=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],s=function(){return arguments.propertyIsEnumerable("length")}(),l=function(t,e){for(var n=0;n<t.length;){if(t[n]===e)return!0;n+=1}return!1},f="function"!=typeof Object.keys||s?(0,r.Z)((function(t){if(Object(t)!==t)return[];var e,n,r=[],u=s&&o(t);for(e in t)!(0,a.Z)(e,t)||u&&"length"===e||(r[r.length]=e);if(c)for(n=i.length-1;n>=0;)e=i[n],(0,a.Z)(e,t)&&!l(r,e)&&(r[r.length]=e),n-=1;return r})):(0,r.Z)((function(t){return Object(t)!==t?[]:Object.keys(t)}))},2084:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(4715),a=n(8980),u=n(7678);function o(t){return function e(n,o,c){switch(arguments.length){case 0:return e;case 1:return(0,u.Z)(n)?e:(0,a.Z)((function(e,r){return t(n,e,r)}));case 2:return(0,u.Z)(n)&&(0,u.Z)(o)?e:(0,u.Z)(n)?(0,a.Z)((function(e,n){return t(e,o,n)})):(0,u.Z)(o)?(0,a.Z)((function(e,r){return t(n,e,r)})):(0,r.Z)((function(e){return t(n,o,e)}));default:return(0,u.Z)(n)&&(0,u.Z)(o)&&(0,u.Z)(c)?e:(0,u.Z)(n)&&(0,u.Z)(o)?(0,a.Z)((function(e,n){return t(e,n,c)})):(0,u.Z)(n)&&(0,u.Z)(c)?(0,a.Z)((function(e,n){return t(e,o,n)})):(0,u.Z)(o)&&(0,u.Z)(c)?(0,a.Z)((function(e,r){return t(n,e,r)})):(0,u.Z)(n)?(0,r.Z)((function(e){return t(e,o,c)})):(0,u.Z)(o)?(0,r.Z)((function(e){return t(n,e,c)})):(0,u.Z)(c)?(0,r.Z)((function(e){return t(n,o,e)})):t(n,o,c)}}}var c=n(8088),i=o((function(t,e,n){return(0,c.Z)(e,n[t])}))},9956:function(t,e,n){"use strict";var r=(0,n(4715).Z)((function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)}));e.Z=r},5127:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(7294),a=n(5444),u=function(){return r.createElement("header",null,r.createElement(a.rU,{className:"App__banner",to:"/",title:"Almost-Dead.net home page"},r.createElement("img",{src:"https://i.imgur.com/q5cBEHG.png",alt:"Almost-Dead.net banner"})))};u.defaultProps={};var o=u,c=function(t){var e=t.children,n=t.className,u=void 0===n?"":n;return r.createElement("div",{className:"layout "+u},r.createElement(o,null),r.createElement("main",null,e),r.createElement("footer",{id:"site-footer",className:"footer"},r.createElement(a.rU,{className:"footer__logo",id:"logo-bottom",to:"/",title:"return to home page"},r.createElement("img",{src:"https://i.imgur.com/q5cBEHG.png",alt:"Almost-Dead.net"})),r.createElement(a.rU,{className:"footer__link-about",to:"/about",title:"About the Site"},"About"),r.createElement("a",{href:"https://lot.almost-dead.net",className:"footer__logo-lot",title:"JRAD Forum — The Lot"},r.createElement("img",{src:"https://i.imgur.com/Qi2NhJO.png",alt:"The Lot — a forum for fans of Joe Russo's Almost Dead"}))))}},1458:function(t,e,n){"use strict";function r(t,e){return t+" "+e+(1!==t?"s":"")}n.d(e,{_:function(){return r}})},5659:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var r=n(18),a=n(7294),u=n(5444),o=n(768),c=n(2084),i=n(1458),s=n(5127),l=n(6501);var f={soundcheck:"soundcheck",set1:"set 1",set2:"set 2",set3:"set 3",encore1:"encore",encore2:"double encore"};function d(t){var e=t.date,n=t.performancesOnDate,r=n[0],o=r.performanceData,c=r.showData,i=r.variation,s=r.whichSet,l=n.slice(1);return a.createElement("li",{key:o.id},a.createElement(u.rU,{to:"/show/"+c.id},e," ",i," in ",s,l.length?l[0].whichSet!==s?" & "+l[0].whichSet:"…":""))}function h(t){var e=t.data,n=e.songsCsv,h=e.allSetsCsv.nodes,m=e.allShowsCsv.nodes,p=e.allSongperformancesCsv.nodes,g=e.allTeasesCsv.nodes;if(!n)return a.createElement("p",null,"Uh oh, no song data found...");var Z=n.performances.split(":");if(!p.length)throw new Error("No data for allSongPerformances");if(!m.length)throw new Error("No data for allShows");if(!h.length)throw new Error("No data for allSets");var v=p.filter((function(t){return Z.includes(t.id)})).map((function(t){var e=t.id.toString(),r=(0,o.Z)((function(t){return t.setlist&&t.setlist.toString().split(":").includes(e)}))(h),a=(0,o.Z)((function(t){return[t.soundcheck,t.set1,t.set2,t.set3,t.encore1,t.encore2].includes(r.id)}))(m);a||console.warn("Missing showData...",{song:n,performanceData:t,setData:r});var u=Object.entries(f).find((function(t){var e=t[0];t[1];return a[e]===r.id}))[1],c=!!t.variation&&"("+t.variation+")";return{performanceData:t,showData:a,variation:c,whichSet:u}})).filter((function(t){return t&&t.showData})).reduce((function(t,e){var n;return t[e.showData.date]||(t[e.showData.date]=[]),Object.assign({},t,((n={})[e.showData.date]=[].concat((0,r.Z)(t[e.showData.date]),[e]),n))}),{}),y=Object.entries(v).sort((function(t,e){var n=t[0],r=e[0],a=new Date(n.split("/")),u=new Date(r.split("/"));return a>u?-1:a<u?1:0})),E=y.map((function(t){var e=t[0],n=t[1];return a.createElement(d,{date:e,performancesOnDate:n})})),b=y.length>0&&a.createElement(a.Fragment,null,a.createElement("h2",null,"Performed at ",(0,i._)(y.length,"Show")),a.createElement("ul",null,E)),w=g.length>0&&a.createElement(a.Fragment,null,a.createElement("h2",null,"Teases"),a.createElement("ul",null,g.map((function(t){var e=(0,o.Z)((0,c.Z)("id",t.performance_id))(p);if(!e||!e.id)return!1;var n=(0,o.Z)((function(t){return t.setlist.toString().split(":").includes(e.id.toString())}))(h),r=(0,o.Z)((function(t){return[t.soundcheck,t.set1,t.set2,t.set3,t.encore1,t.encore2].includes(n.id)}))(m);return a.createElement("li",{key:t.id},a.createElement(u.rU,{to:"/show/"+r.id},r.date," within ",t.within," ",e.variation&&"("+e.variation+")"," "))}))));return a.createElement(s.Z,{className:"songpage"},a.createElement(l.Z,{title:'"'+n.title+'" performed or teased by JRAD',description:"List of each time Joe Russo's Almost Dead has performed or teased the song \""+n.title+'" '+(n.author&&"traditional"!==n.author?"by "+n.author:"")}),a.createElement("h1",{className:"songpage__name"},n.title),a.createElement("div",{className:"songpage__info"},function(t){switch(void 0===t&&(t=null),t){case null:case"":return!1;case"traditional":return a.createElement("p",null,"(traditional)");default:return a.createElement("p",null,"by ",t)}}(n.author),n.suite&&a.createElement("p",null,"Part of the ",n.suite," suite")),a.createElement("div",{className:"songpage__performances"},b),a.createElement("div",{className:"songpage__teases"},w))}}}]);
//# sourceMappingURL=component---src-templates-song-js-9102432bdb3ba22d95db.js.map