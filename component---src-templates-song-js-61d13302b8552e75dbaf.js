(self.webpackChunkalmost_dead_net=self.webpackChunkalmost_dead_net||[]).push([[208],{8088:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var r=n(8980);function a(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}function u(t,e,n){for(var r=0,a=n.length;r<a;){if(t(e,n[r]))return!0;r+=1}return!1}var i=n(5638);var o="function"==typeof Object.is?Object.is:function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e},c=n(4567),s=n(9956);function l(t,e,n,r){var i=a(t);function o(t,e){return f(t,e,n.slice(),r.slice())}return!u((function(t,e){return!u(o,e,t)}),a(e),i)}function f(t,e,n,r){if(o(t,e))return!0;var a,u,d=(0,s.Z)(t);if(d!==(0,s.Z)(e))return!1;if(null==t||null==e)return!1;if("function"==typeof t["fantasy-land/equals"]||"function"==typeof e["fantasy-land/equals"])return"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](e)&&"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](t);if("function"==typeof t.equals||"function"==typeof e.equals)return"function"==typeof t.equals&&t.equals(e)&&"function"==typeof e.equals&&e.equals(t);switch(d){case"Arguments":case"Array":case"Object":if("function"==typeof t.constructor&&"Promise"===(a=t.constructor,null==(u=String(a).match(/^function (\w*)/))?"":u[1]))return t===e;break;case"Boolean":case"Number":case"String":if(typeof t!=typeof e||!o(t.valueOf(),e.valueOf()))return!1;break;case"Date":if(!o(t.valueOf(),e.valueOf()))return!1;break;case"Error":return t.name===e.name&&t.message===e.message;case"RegExp":if(t.source!==e.source||t.global!==e.global||t.ignoreCase!==e.ignoreCase||t.multiline!==e.multiline||t.sticky!==e.sticky||t.unicode!==e.unicode)return!1}for(var m=n.length-1;m>=0;){if(n[m]===t)return r[m]===e;m-=1}switch(d){case"Map":return t.size===e.size&&l(t.entries(),e.entries(),n.concat([t]),r.concat([e]));case"Set":return t.size===e.size&&l(t.values(),e.values(),n.concat([t]),r.concat([e]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var p=(0,c.Z)(t);if(p.length!==(0,c.Z)(e).length)return!1;var h=n.concat([t]),g=r.concat([e]);for(m=p.length-1;m>=0;){var v=p[m];if(!(0,i.Z)(v,e)||!f(e[v],t[v],h,g))return!1;m-=1}return!0}var d=(0,r.Z)((function(t,e){return f(t,e,[],[])}))},768:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(8980),a=n(91);var u=n(2214),i=function(){function t(t,e){this.xf=e,this.f=t,this.found=!1}return t.prototype["@@transducer/init"]=u.Z.init,t.prototype["@@transducer/result"]=function(t){return this.found||(t=this.xf["@@transducer/step"](t,void 0)),this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,e){var n;return this.f(e)&&(this.found=!0,t=(n=this.xf["@@transducer/step"](t,e))&&n["@@transducer/reduced"]?n:{"@@transducer/value":n,"@@transducer/reduced":!0}),t},t}(),o=(0,r.Z)((function(t,e){return new i(t,e)})),c=(0,r.Z)((0,a.Z)(["find"],o,(function(t,e){for(var n=0,r=e.length;n<r;){if(t(e[n]))return e[n];n+=1}})))},4715:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(7678);function a(t){return function e(n){return 0===arguments.length||(0,r.Z)(n)?e:t.apply(this,arguments)}}},8980:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(4715),a=n(7678);function u(t){return function e(n,u){switch(arguments.length){case 0:return e;case 1:return(0,a.Z)(n)?e:(0,r.Z)((function(e){return t(n,e)}));default:return(0,a.Z)(n)&&(0,a.Z)(u)?e:(0,a.Z)(n)?(0,r.Z)((function(e){return t(e,u)})):(0,a.Z)(u)?(0,r.Z)((function(e){return t(n,e)})):t(n,u)}}}},91:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(8537);function a(t){return null!=t&&"function"==typeof t["@@transducer/step"]}function u(t,e,n){return function(){if(0===arguments.length)return n();var u=Array.prototype.slice.call(arguments,0),i=u.pop();if(!(0,r.Z)(i)){for(var o=0;o<t.length;){if("function"==typeof i[t[o]])return i[t[o]].apply(i,u);o+=1}if(a(i)){var c=e.apply(null,u);return c(i)}}return n.apply(this,arguments)}}},5638:function(t,e,n){"use strict";function r(t,e){return Object.prototype.hasOwnProperty.call(e,t)}n.d(e,{Z:function(){return r}})},5871:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(8088);function a(t,e){return function(t,e,n){var a,u;if("function"==typeof t.indexOf)switch(typeof e){case"number":if(0===e){for(a=1/e;n<t.length;){if(0===(u=t[n])&&1/u===a)return n;n+=1}return-1}if(e!=e){for(;n<t.length;){if("number"==typeof(u=t[n])&&u!=u)return n;n+=1}return-1}return t.indexOf(e,n);case"string":case"boolean":case"function":case"undefined":return t.indexOf(e,n);case"object":if(null===e)return t.indexOf(e,n)}for(;n<t.length;){if((0,r.Z)(t[n],e))return n;n+=1}return-1}(e,t,0)>=0}},8537:function(t,e){"use strict";e.Z=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)}},7678:function(t,e,n){"use strict";function r(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}n.d(e,{Z:function(){return r}})},2214:function(t,e){"use strict";e.Z={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}}},4567:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var r=n(4715),a=n(5638),u=Object.prototype.toString,i=function(){return"[object Arguments]"===u.call(arguments)?function(t){return"[object Arguments]"===u.call(t)}:function(t){return(0,a.Z)("callee",t)}}(),o=!{toString:null}.propertyIsEnumerable("toString"),c=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],s=function(){return arguments.propertyIsEnumerable("length")}(),l=function(t,e){for(var n=0;n<t.length;){if(t[n]===e)return!0;n+=1}return!1},f="function"!=typeof Object.keys||s?(0,r.Z)((function(t){if(Object(t)!==t)return[];var e,n,r=[],u=s&&i(t);for(e in t)!(0,a.Z)(e,t)||u&&"length"===e||(r[r.length]=e);if(o)for(n=c.length-1;n>=0;)e=c[n],(0,a.Z)(e,t)&&!l(r,e)&&(r[r.length]=e),n-=1;return r})):(0,r.Z)((function(t){return Object(t)!==t?[]:Object.keys(t)}))},2084:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(4715),a=n(8980),u=n(7678);function i(t){return function e(n,i,o){switch(arguments.length){case 0:return e;case 1:return(0,u.Z)(n)?e:(0,a.Z)((function(e,r){return t(n,e,r)}));case 2:return(0,u.Z)(n)&&(0,u.Z)(i)?e:(0,u.Z)(n)?(0,a.Z)((function(e,n){return t(e,i,n)})):(0,u.Z)(i)?(0,a.Z)((function(e,r){return t(n,e,r)})):(0,r.Z)((function(e){return t(n,i,e)}));default:return(0,u.Z)(n)&&(0,u.Z)(i)&&(0,u.Z)(o)?e:(0,u.Z)(n)&&(0,u.Z)(i)?(0,a.Z)((function(e,n){return t(e,n,o)})):(0,u.Z)(n)&&(0,u.Z)(o)?(0,a.Z)((function(e,n){return t(e,i,n)})):(0,u.Z)(i)&&(0,u.Z)(o)?(0,a.Z)((function(e,r){return t(n,e,r)})):(0,u.Z)(n)?(0,r.Z)((function(e){return t(e,i,o)})):(0,u.Z)(i)?(0,r.Z)((function(e){return t(n,e,o)})):(0,u.Z)(o)?(0,r.Z)((function(e){return t(n,i,e)})):t(n,i,o)}}}var o=n(8088),c=i((function(t,e,n){return(0,o.Z)(e,n[t])}))},9956:function(t,e,n){"use strict";var r=(0,n(4715).Z)((function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)}));e.Z=r},5581:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var r=n(7294),a=n(5444),u="canary",i="dev",o="prod",c="unknown";function s(){switch(n.g.document&&n.g.document.location.hostname){case"almost-dead.net":return o;case"alxndr.github.io":return u;case"localhost":return i;default:return c}}var l=function(t){return function(t){if(null==t)throw new TypeError("Cannot destructure undefined")}(t),r.createElement("header",{style:{}},r.createElement(a.rU,{className:"App__banner",to:"/",title:"Almost-Dead.net home page"},r.createElement("img",{src:"https://i.imgur.com/q5cBEHG.png",alt:"Almost-Dead.net banner"})))};l.defaultProps={};var f=l,d=function(t){var e=t.children,n=t.className,u=void 0===n?"":n;return r.createElement("div",{className:"layout layout-"+s()+" "+u},r.createElement(f,null),r.createElement("main",null,e),r.createElement("footer",{id:"site-footer",className:"footer"},r.createElement(a.rU,{className:"footer__logo",id:"logo-bottom",to:"/",title:"return to home page"},r.createElement("img",{src:"https://i.imgur.com/tvtgYVY.png",alt:"Good Ol' Almost Dead"})),r.createElement(a.rU,{className:"footer__link-about",to:"/about",title:"About the Site"},"About the Site"),r.createElement("a",{href:"https://lot.almost-dead.net",className:"footer__logo-lot",title:"JRAD Forum — The Lot"},r.createElement("img",{src:"https://i.imgur.com/Qi2NhJO.png",alt:"The Lot — a forum for fans of Joe Russo's Almost Dead"}))))}},9062:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var r=n(7294),a=n(5444),u=n(5871);function i(t,e,n){var r,a=typeof t;switch(a){case"string":case"number":return 0===t&&1/t==-1/0?!!n._items["-0"]||(e&&(n._items["-0"]=!0),!1):null!==n._nativeSet?e?(r=n._nativeSet.size,n._nativeSet.add(t),n._nativeSet.size===r):n._nativeSet.has(t):a in n._items?t in n._items[a]||(e&&(n._items[a][t]=!0),!1):(e&&(n._items[a]={},n._items[a][t]=!0),!1);case"boolean":if(a in n._items){var i=t?1:0;return!!n._items[a][i]||(e&&(n._items[a][i]=!0),!1)}return e&&(n._items[a]=t?[!1,!0]:[!0,!1]),!1;case"function":return null!==n._nativeSet?e?(r=n._nativeSet.size,n._nativeSet.add(t),n._nativeSet.size===r):n._nativeSet.has(t):a in n._items?!!(0,u.Z)(t,n._items[a])||(e&&n._items[a].push(t),!1):(e&&(n._items[a]=[t]),!1);case"undefined":return!!n._items[a]||(e&&(n._items[a]=!0),!1);case"object":if(null===t)return!!n._items.null||(e&&(n._items.null=!0),!1);default:return(a=Object.prototype.toString.call(t))in n._items?!!(0,u.Z)(t,n._items[a])||(e&&n._items[a].push(t),!1):(e&&(n._items[a]=[t]),!1)}}var o=function(){function t(){this._nativeSet="function"==typeof Set?new Set:null,this._items={}}return t.prototype.add=function(t){return!i(t,!0,this)},t.prototype.has=function(t){return i(t,!1,this)},t}(),c=(0,n(8980).Z)((function(t,e){for(var n,r,a=new o,u=[],i=0;i<e.length;)n=t(r=e[i]),a.add(n)&&u.push(r),i+=1;return u})),s=n(768),l=n(2084),f=n(5581),d=n(4250);var m={soundcheck:"soundcheck",set1:"set 1",set2:"set 2",set3:"set 3",encore1:"encore",encore2:"double encore"};function p(t){var e=t.pageContext,n=e.song,u=e.shows,i=e.sets,o=e.songs,p=e.songPerformances,h=e.teases,g=e.teasePerformances;if(!(n&&o&&p&&u&&h&&i))return r.createElement("p",null,"Loading...");if(!n)return r.createElement("p",null,"Uh oh, no song data found...");var v=p.map((function(t){var e=t.id.toString(),r=(0,s.Z)((function(t){return t.setlist&&t.setlist.toString().split(":").includes(e)}))(i);if(!r||!r.id)return console.warn("missing setData...",{song:n,performanceData:t}),!1;var a=(0,s.Z)((function(t){return[t.soundcheck,t.set1,t.set2,t.set3,t.encore1,t.encore2].includes(r.id)}))(u);if(!a||!a.id)return console.warn("missing showData...",{song:n,performanceData:t,setData:r}),!1;var o=Object.entries(m).find((function(t){var e=t[0];t[1];return a[e]===r.id}))[1],c=!!t.variation&&"("+t.variation+")";return{performanceData:t,showData:a,variation:c,whichSet:o}})).filter((function(t){return t&&t.showData})).sort((function(t,e){var n=new Date(t.showData.date.split("/")),r=new Date(e.showData.date.split("/"));return n>r?-1:n<r?1:0})),Z=c((function(t){return t.showData.id}),v),y=v.map((function(t){var e=t.performanceData,n=t.showData,u=t.variation,i=t.whichSet;return r.createElement("li",{key:e.id},r.createElement(a.rU,{to:"/show/"+n.id},n.date," ",u," in ",i))})),_=p.length>0&&r.createElement(r.Fragment,null,r.createElement("h2",null,"Performed at ",Z.length+" Show"+(1===Z.length?"":"s")),r.createElement("ul",null,y)),b=h.length>0&&r.createElement(r.Fragment,null,r.createElement("h2",null,"Teases"),r.createElement("ul",null,h.map((function(t){var e=(0,s.Z)((0,l.Z)("id",t.performance_id))(g);if(!e||!e.id)return!1;var n=(0,s.Z)((function(t){return t.setlist.toString().split(":").includes(e.id.toString())}))(i),o=(0,s.Z)((function(t){return[t.soundcheck,t.set1,t.set2,t.set3,t.encore1,t.encore2].includes(n.id)}))(u);return r.createElement("li",{key:t.id},r.createElement(a.rU,{to:"/show/"+o.id},o.date," within ",t.within," ",e.variation&&"("+e.variation+")"," "))}))));return r.createElement(f.Z,{className:"songpage"},r.createElement(d.Z,{title:'"'+n.title+'" performances by JRAD',description:'List of performances of the song "'+n.title+"\" by Joe Russo's Almost Dead"}),r.createElement("h1",{className:"songpage__name"},n.title),r.createElement("div",{className:"songpage__info"},function(t){switch(void 0===t&&(t=null),t){case null:case"":return!1;case"traditional":return r.createElement("p",null,"(traditional)");default:return r.createElement("p",null,"by ",t)}}(n.author),n.suite&&r.createElement("p",null,"Part of the ",n.suite," suite")),r.createElement("div",{className:"songpage__performances"},_),r.createElement("div",{className:"songpage__teases"},b))}}}]);
//# sourceMappingURL=component---src-templates-song-js-61d13302b8552e75dbaf.js.map