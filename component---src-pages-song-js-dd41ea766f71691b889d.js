(self.webpackChunkalmost_dead_net=self.webpackChunkalmost_dead_net||[]).push([[914],{9934:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var r=n(8980);function u(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}function i(t,e,n){for(var r=0,u=n.length;r<u;){if(t(e,n[r]))return!0;r+=1}return!1}var a=n(5638);var c="function"==typeof Object.is?Object.is:function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e},s=n(4567),o=(0,n(4715).Z)((function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)}));function f(t,e,n,r){var a=u(t);function c(t,e){return l(t,e,n.slice(),r.slice())}return!i((function(t,e){return!i(c,e,t)}),u(e),a)}function l(t,e,n,r){if(c(t,e))return!0;var u,i,d=o(t);if(d!==o(e))return!1;if(null==t||null==e)return!1;if("function"==typeof t["fantasy-land/equals"]||"function"==typeof e["fantasy-land/equals"])return"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](e)&&"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](t);if("function"==typeof t.equals||"function"==typeof e.equals)return"function"==typeof t.equals&&t.equals(e)&&"function"==typeof e.equals&&e.equals(t);switch(d){case"Arguments":case"Array":case"Object":if("function"==typeof t.constructor&&"Promise"===(u=t.constructor,null==(i=String(u).match(/^function (\w*)/))?"":i[1]))return t===e;break;case"Boolean":case"Number":case"String":if(typeof t!=typeof e||!c(t.valueOf(),e.valueOf()))return!1;break;case"Date":if(!c(t.valueOf(),e.valueOf()))return!1;break;case"Error":return t.name===e.name&&t.message===e.message;case"RegExp":if(t.source!==e.source||t.global!==e.global||t.ignoreCase!==e.ignoreCase||t.multiline!==e.multiline||t.sticky!==e.sticky||t.unicode!==e.unicode)return!1}for(var p=n.length-1;p>=0;){if(n[p]===t)return r[p]===e;p-=1}switch(d){case"Map":return t.size===e.size&&f(t.entries(),e.entries(),n.concat([t]),r.concat([e]));case"Set":return t.size===e.size&&f(t.values(),e.values(),n.concat([t]),r.concat([e]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var h=(0,s.Z)(t);if(h.length!==(0,s.Z)(e).length)return!1;var m=n.concat([t]),g=r.concat([e]);for(p=h.length-1;p>=0;){var v=h[p];if(!(0,a.Z)(v,e)||!l(e[v],t[v],m,g))return!1;p-=1}return!0}var d=(0,r.Z)((function(t,e){return l(t,e,[],[])}))},768:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(8980),u=n(91);var i=n(2214),a=function(){function t(t,e){this.xf=e,this.f=t,this.found=!1}return t.prototype["@@transducer/init"]=i.Z.init,t.prototype["@@transducer/result"]=function(t){return this.found||(t=this.xf["@@transducer/step"](t,void 0)),this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,e){var n;return this.f(e)&&(this.found=!0,t=(n=this.xf["@@transducer/step"](t,e))&&n["@@transducer/reduced"]?n:{"@@transducer/value":n,"@@transducer/reduced":!0}),t},t}(),c=(0,r.Z)((function(t,e){return new a(t,e)})),s=(0,r.Z)((0,u.Z)(["find"],c,(function(t,e){for(var n=0,r=e.length;n<r;){if(t(e[n]))return e[n];n+=1}})))},4715:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(7678);function u(t){return function e(n){return 0===arguments.length||(0,r.Z)(n)?e:t.apply(this,arguments)}}},8980:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(4715),u=n(7678);function i(t){return function e(n,i){switch(arguments.length){case 0:return e;case 1:return(0,u.Z)(n)?e:(0,r.Z)((function(e){return t(n,e)}));default:return(0,u.Z)(n)&&(0,u.Z)(i)?e:(0,u.Z)(n)?(0,r.Z)((function(e){return t(e,i)})):(0,u.Z)(i)?(0,r.Z)((function(e){return t(n,e)})):t(n,i)}}}},91:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(8537);function u(t){return null!=t&&"function"==typeof t["@@transducer/step"]}function i(t,e,n){return function(){if(0===arguments.length)return n();var i=Array.prototype.slice.call(arguments,0),a=i.pop();if(!(0,r.Z)(a)){for(var c=0;c<t.length;){if("function"==typeof a[t[c]])return a[t[c]].apply(a,i);c+=1}if(u(a)){var s=e.apply(null,i);return s(a)}}return n.apply(this,arguments)}}},5638:function(t,e,n){"use strict";function r(t,e){return Object.prototype.hasOwnProperty.call(e,t)}n.d(e,{Z:function(){return r}})},5871:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(9934);function u(t,e){return function(t,e,n){var u,i;if("function"==typeof t.indexOf)switch(typeof e){case"number":if(0===e){for(u=1/e;n<t.length;){if(0===(i=t[n])&&1/i===u)return n;n+=1}return-1}if(e!=e){for(;n<t.length;){if("number"==typeof(i=t[n])&&i!=i)return n;n+=1}return-1}return t.indexOf(e,n);case"string":case"boolean":case"function":case"undefined":return t.indexOf(e,n);case"object":if(null===e)return t.indexOf(e,n)}for(;n<t.length;){if((0,r.Z)(t[n],e))return n;n+=1}return-1}(e,t,0)>=0}},8537:function(t,e){"use strict";e.Z=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)}},7678:function(t,e,n){"use strict";function r(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}n.d(e,{Z:function(){return r}})},2214:function(t,e){"use strict";e.Z={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}}},4567:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(4715),u=n(5638),i=Object.prototype.toString,a=function(){return"[object Arguments]"===i.call(arguments)?function(t){return"[object Arguments]"===i.call(t)}:function(t){return(0,u.Z)("callee",t)}}(),c=!{toString:null}.propertyIsEnumerable("toString"),s=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],o=function(){return arguments.propertyIsEnumerable("length")}(),f=function(t,e){for(var n=0;n<t.length;){if(t[n]===e)return!0;n+=1}return!1},l="function"!=typeof Object.keys||o?(0,r.Z)((function(t){if(Object(t)!==t)return[];var e,n,r=[],i=o&&a(t);for(e in t)!(0,u.Z)(e,t)||i&&"length"===e||(r[r.length]=e);if(c)for(n=s.length-1;n>=0;)e=s[n],(0,u.Z)(e,t)&&!f(r,e)&&(r[r.length]=e),n-=1;return r})):(0,r.Z)((function(t){return Object(t)!==t?[]:Object.keys(t)}))},2084:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(4715),u=n(8980),i=n(7678);function a(t){return function e(n,a,c){switch(arguments.length){case 0:return e;case 1:return(0,i.Z)(n)?e:(0,u.Z)((function(e,r){return t(n,e,r)}));case 2:return(0,i.Z)(n)&&(0,i.Z)(a)?e:(0,i.Z)(n)?(0,u.Z)((function(e,n){return t(e,a,n)})):(0,i.Z)(a)?(0,u.Z)((function(e,r){return t(n,e,r)})):(0,r.Z)((function(e){return t(n,a,e)}));default:return(0,i.Z)(n)&&(0,i.Z)(a)&&(0,i.Z)(c)?e:(0,i.Z)(n)&&(0,i.Z)(a)?(0,u.Z)((function(e,n){return t(e,n,c)})):(0,i.Z)(n)&&(0,i.Z)(c)?(0,u.Z)((function(e,n){return t(e,a,n)})):(0,i.Z)(a)&&(0,i.Z)(c)?(0,u.Z)((function(e,r){return t(n,e,r)})):(0,i.Z)(n)?(0,r.Z)((function(e){return t(e,a,c)})):(0,i.Z)(a)?(0,r.Z)((function(e){return t(n,e,c)})):(0,i.Z)(c)?(0,r.Z)((function(e){return t(n,a,e)})):t(n,a,c)}}}var c=n(9934),s=a((function(t,e,n){return(0,c.Z)(e,n[t])}))},5689:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var r=n(7294),u=n(5444),i=n(5871);function a(t,e,n){var r,u=typeof t;switch(u){case"string":case"number":return 0===t&&1/t==-1/0?!!n._items["-0"]||(e&&(n._items["-0"]=!0),!1):null!==n._nativeSet?e?(r=n._nativeSet.size,n._nativeSet.add(t),n._nativeSet.size===r):n._nativeSet.has(t):u in n._items?t in n._items[u]||(e&&(n._items[u][t]=!0),!1):(e&&(n._items[u]={},n._items[u][t]=!0),!1);case"boolean":if(u in n._items){var a=t?1:0;return!!n._items[u][a]||(e&&(n._items[u][a]=!0),!1)}return e&&(n._items[u]=t?[!1,!0]:[!0,!1]),!1;case"function":return null!==n._nativeSet?e?(r=n._nativeSet.size,n._nativeSet.add(t),n._nativeSet.size===r):n._nativeSet.has(t):u in n._items?!!(0,i.Z)(t,n._items[u])||(e&&n._items[u].push(t),!1):(e&&(n._items[u]=[t]),!1);case"undefined":return!!n._items[u]||(e&&(n._items[u]=!0),!1);case"object":if(null===t)return!!n._items.null||(e&&(n._items.null=!0),!1);default:return(u=Object.prototype.toString.call(t))in n._items?!!(0,i.Z)(t,n._items[u])||(e&&n._items[u].push(t),!1):(e&&(n._items[u]=[t]),!1)}}var c=function(){function t(){this._nativeSet="function"==typeof Set?new Set:null,this._items={}}return t.prototype.add=function(t){return!a(t,!0,this)},t.prototype.has=function(t){return a(t,!1,this)},t}(),s=(0,n(8980).Z)((function(t,e){for(var n,r,u=new c,i=[],a=0;a<e.length;)n=t(r=e[a]),u.add(n)&&i.push(r),a+=1;return i})),o=n(768),f=n(2084),l=n(5581),d=n(4250);var p={soundcheck:"soundcheck",set1:"set 1",set2:"set 2",set3:"set 3",encore1:"encore",encore2:"double encore"};function h(t){var e=t.pageContext,n=e.song,i=e.shows,a=e.sets,c=e.songs,h=e.songPerformances,m=e.teases,g=e.teasePerformances;if(!(n&&c&&h&&i&&m&&a))return r.createElement("p",null,"Loading...");if(!n)return r.createElement("p",null,"Uh oh, no song data found...");var v=h.map((function(t){var e=t.id.toString(),r=(0,o.Z)((function(t){return t.setlist&&t.setlist.toString().split(":").includes(e)}))(a);if(!r||!r.id)return console.warn("missing setData...",{song:n,performanceData:t}),!1;var u=(0,o.Z)((function(t){return[t.soundcheck,t.set1,t.set2,t.set3,t.encore1,t.encore2].includes(r.id)}))(i);if(!u||!u.id)return console.warn("missing showData...",{song:n,performanceData:t,setData:r}),!1;var c=Object.entries(p).find((function(t){var e=t[0];t[1];return u[e]===r.id}))[1],s=!!t.variation&&"("+t.variation+")";return{performanceData:t,showData:u,variation:s,whichSet:c}})).filter((function(t){return t&&t.showData})).sort((function(t,e){var n=new Date(t.showData.date.split("/")),r=new Date(e.showData.date.split("/"));return n>r?-1:n<r?1:0})),Z=s((function(t){return t.showData.id}),v),y=v.map((function(t){var e=t.performanceData,n=t.showData,i=t.variation,a=t.whichSet;return r.createElement("li",{key:e.id},r.createElement(u.rU,{to:"/show/"+n.id},n.date," ",i," in ",a))})),_=h.length>0&&r.createElement(r.Fragment,null,r.createElement("h2",null,"Performed at ",Z.length+" Show"+(1===Z.length?"":"s")),r.createElement("ul",null,y)),b=m.length>0&&r.createElement(r.Fragment,null,r.createElement("h2",null,"Teases"),r.createElement("ul",null,m.map((function(t){var e=(0,o.Z)((0,f.Z)("id",t.performance_id))(g);if(!e||!e.id)return!1;var n=(0,o.Z)((function(t){return t.setlist.toString().split(":").includes(e.id.toString())}))(a),c=(0,o.Z)((function(t){return[t.soundcheck,t.set1,t.set2,t.set3,t.encore1,t.encore2].includes(n.id)}))(i);return r.createElement("li",{key:t.id},"within ",r.createElement(u.rU,{to:"/show/"+c.id},t.within," ",e.variation&&"("+e.variation+")"," — ",c.date))}))));return r.createElement(l.Z,{className:"songpage"},r.createElement(d.Z,{title:'"'+n.title+'" performances by JRAD',description:'List of performances of the song "'+n.title+"\" by Joe Russo's Almost Dead"}),r.createElement("h1",{className:"songpage__name"},n.title),r.createElement("div",{className:"songpage__info"},function(t){switch(void 0===t&&(t=null),t){case null:case"":return!1;case"traditional":return r.createElement("p",null,"(traditional)");default:return r.createElement("p",null,"by ",t)}}(n.author),n.suite&&r.createElement("p",null,"Part of the ",n.suite," suite")),r.createElement("div",{className:"songpage__performances"},_),r.createElement("div",{className:"songpage__teases"},b))}}}]);
//# sourceMappingURL=component---src-pages-song-js-dd41ea766f71691b889d.js.map