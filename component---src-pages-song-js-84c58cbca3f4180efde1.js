(self.webpackChunkalmost_dead_net=self.webpackChunkalmost_dead_net||[]).push([[914],{9934:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(8980);function u(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function i(e,t,n){for(var r=0,u=n.length;r<u;){if(e(t,n[r]))return!0;r+=1}return!1}var a=n(5638);var s="function"==typeof Object.is?Object.is:function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t},c=n(4567),o=(0,n(4715).Z)((function(e){return null===e?"Null":void 0===e?"Undefined":Object.prototype.toString.call(e).slice(8,-1)}));function f(e,t,n,r){var a=u(e);function s(e,t){return l(e,t,n.slice(),r.slice())}return!i((function(e,t){return!i(s,t,e)}),u(t),a)}function l(e,t,n,r){if(s(e,t))return!0;var u,i,d=o(e);if(d!==o(t))return!1;if(null==e||null==t)return!1;if("function"==typeof e["fantasy-land/equals"]||"function"==typeof t["fantasy-land/equals"])return"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](t)&&"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](e);if("function"==typeof e.equals||"function"==typeof t.equals)return"function"==typeof e.equals&&e.equals(t)&&"function"==typeof t.equals&&t.equals(e);switch(d){case"Arguments":case"Array":case"Object":if("function"==typeof e.constructor&&"Promise"===(u=e.constructor,null==(i=String(u).match(/^function (\w*)/))?"":i[1]))return e===t;break;case"Boolean":case"Number":case"String":if(typeof e!=typeof t||!s(e.valueOf(),t.valueOf()))return!1;break;case"Date":if(!s(e.valueOf(),t.valueOf()))return!1;break;case"Error":return e.name===t.name&&e.message===t.message;case"RegExp":if(e.source!==t.source||e.global!==t.global||e.ignoreCase!==t.ignoreCase||e.multiline!==t.multiline||e.sticky!==t.sticky||e.unicode!==t.unicode)return!1}for(var p=n.length-1;p>=0;){if(n[p]===e)return r[p]===t;p-=1}switch(d){case"Map":return e.size===t.size&&f(e.entries(),t.entries(),n.concat([e]),r.concat([t]));case"Set":return e.size===t.size&&f(e.values(),t.values(),n.concat([e]),r.concat([t]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var m=(0,c.Z)(e);if(m.length!==(0,c.Z)(t).length)return!1;var h=n.concat([e]),g=r.concat([t]);for(p=m.length-1;p>=0;){var Z=m[p];if(!(0,a.Z)(Z,t)||!l(t[Z],e[Z],h,g))return!1;p-=1}return!0}var d=(0,r.Z)((function(e,t){return l(e,t,[],[])}))},768:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(8980),u=n(91);var i=n(2214),a=function(){function e(e,t){this.xf=t,this.f=e,this.found=!1}return e.prototype["@@transducer/init"]=i.Z.init,e.prototype["@@transducer/result"]=function(e){return this.found||(e=this.xf["@@transducer/step"](e,void 0)),this.xf["@@transducer/result"](e)},e.prototype["@@transducer/step"]=function(e,t){var n;return this.f(t)&&(this.found=!0,e=(n=this.xf["@@transducer/step"](e,t))&&n["@@transducer/reduced"]?n:{"@@transducer/value":n,"@@transducer/reduced":!0}),e},e}(),s=(0,r.Z)((function(e,t){return new a(e,t)})),c=(0,r.Z)((0,u.Z)(["find"],s,(function(e,t){for(var n=0,r=t.length;n<r;){if(e(t[n]))return t[n];n+=1}})))},4715:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7678);function u(e){return function t(n){return 0===arguments.length||(0,r.Z)(n)?t:e.apply(this,arguments)}}},8980:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(4715),u=n(7678);function i(e){return function t(n,i){switch(arguments.length){case 0:return t;case 1:return(0,u.Z)(n)?t:(0,r.Z)((function(t){return e(n,t)}));default:return(0,u.Z)(n)&&(0,u.Z)(i)?t:(0,u.Z)(n)?(0,r.Z)((function(t){return e(t,i)})):(0,u.Z)(i)?(0,r.Z)((function(t){return e(n,t)})):e(n,i)}}}},91:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(8537);function u(e){return null!=e&&"function"==typeof e["@@transducer/step"]}function i(e,t,n){return function(){if(0===arguments.length)return n();var i=Array.prototype.slice.call(arguments,0),a=i.pop();if(!(0,r.Z)(a)){for(var s=0;s<e.length;){if("function"==typeof a[e[s]])return a[e[s]].apply(a,i);s+=1}if(u(a)){var c=t.apply(null,i);return c(a)}}return n.apply(this,arguments)}}},5638:function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(t,e)}n.d(t,{Z:function(){return r}})},5871:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(9934);function u(e,t){return function(e,t,n){var u,i;if("function"==typeof e.indexOf)switch(typeof t){case"number":if(0===t){for(u=1/t;n<e.length;){if(0===(i=e[n])&&1/i===u)return n;n+=1}return-1}if(t!=t){for(;n<e.length;){if("number"==typeof(i=e[n])&&i!=i)return n;n+=1}return-1}return e.indexOf(t,n);case"string":case"boolean":case"function":case"undefined":return e.indexOf(t,n);case"object":if(null===t)return e.indexOf(t,n)}for(;n<e.length;){if((0,r.Z)(e[n],t))return n;n+=1}return-1}(t,e,0)>=0}},8537:function(e,t){"use strict";t.Z=Array.isArray||function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)}},7678:function(e,t,n){"use strict";function r(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}n.d(t,{Z:function(){return r}})},2214:function(e,t){"use strict";t.Z={init:function(){return this.xf["@@transducer/init"]()},result:function(e){return this.xf["@@transducer/result"](e)}}},4567:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(4715),u=n(5638),i=Object.prototype.toString,a=function(){return"[object Arguments]"===i.call(arguments)?function(e){return"[object Arguments]"===i.call(e)}:function(e){return(0,u.Z)("callee",e)}}(),s=!{toString:null}.propertyIsEnumerable("toString"),c=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],o=function(){return arguments.propertyIsEnumerable("length")}(),f=function(e,t){for(var n=0;n<e.length;){if(e[n]===t)return!0;n+=1}return!1},l="function"!=typeof Object.keys||o?(0,r.Z)((function(e){if(Object(e)!==e)return[];var t,n,r=[],i=o&&a(e);for(t in e)!(0,u.Z)(t,e)||i&&"length"===t||(r[r.length]=t);if(s)for(n=c.length-1;n>=0;)t=c[n],(0,u.Z)(t,e)&&!f(r,t)&&(r[r.length]=t),n-=1;return r})):(0,r.Z)((function(e){return Object(e)!==e?[]:Object.keys(e)}))},2084:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(4715),u=n(8980),i=n(7678);function a(e){return function t(n,a,s){switch(arguments.length){case 0:return t;case 1:return(0,i.Z)(n)?t:(0,u.Z)((function(t,r){return e(n,t,r)}));case 2:return(0,i.Z)(n)&&(0,i.Z)(a)?t:(0,i.Z)(n)?(0,u.Z)((function(t,n){return e(t,a,n)})):(0,i.Z)(a)?(0,u.Z)((function(t,r){return e(n,t,r)})):(0,r.Z)((function(t){return e(n,a,t)}));default:return(0,i.Z)(n)&&(0,i.Z)(a)&&(0,i.Z)(s)?t:(0,i.Z)(n)&&(0,i.Z)(a)?(0,u.Z)((function(t,n){return e(t,n,s)})):(0,i.Z)(n)&&(0,i.Z)(s)?(0,u.Z)((function(t,n){return e(t,a,n)})):(0,i.Z)(a)&&(0,i.Z)(s)?(0,u.Z)((function(t,r){return e(n,t,r)})):(0,i.Z)(n)?(0,r.Z)((function(t){return e(t,a,s)})):(0,i.Z)(a)?(0,r.Z)((function(t){return e(n,t,s)})):(0,i.Z)(s)?(0,r.Z)((function(t){return e(n,a,t)})):e(n,a,s)}}}var s=n(9934),c=a((function(e,t,n){return(0,s.Z)(t,n[e])}))},5689:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(7294),u=n(5444),i=n(5871);function a(e,t,n){var r,u=typeof e;switch(u){case"string":case"number":return 0===e&&1/e==-1/0?!!n._items["-0"]||(t&&(n._items["-0"]=!0),!1):null!==n._nativeSet?t?(r=n._nativeSet.size,n._nativeSet.add(e),n._nativeSet.size===r):n._nativeSet.has(e):u in n._items?e in n._items[u]||(t&&(n._items[u][e]=!0),!1):(t&&(n._items[u]={},n._items[u][e]=!0),!1);case"boolean":if(u in n._items){var a=e?1:0;return!!n._items[u][a]||(t&&(n._items[u][a]=!0),!1)}return t&&(n._items[u]=e?[!1,!0]:[!0,!1]),!1;case"function":return null!==n._nativeSet?t?(r=n._nativeSet.size,n._nativeSet.add(e),n._nativeSet.size===r):n._nativeSet.has(e):u in n._items?!!(0,i.Z)(e,n._items[u])||(t&&n._items[u].push(e),!1):(t&&(n._items[u]=[e]),!1);case"undefined":return!!n._items[u]||(t&&(n._items[u]=!0),!1);case"object":if(null===e)return!!n._items.null||(t&&(n._items.null=!0),!1);default:return(u=Object.prototype.toString.call(e))in n._items?!!(0,i.Z)(e,n._items[u])||(t&&n._items[u].push(e),!1):(t&&(n._items[u]=[e]),!1)}}var s=function(){function e(){this._nativeSet="function"==typeof Set?new Set:null,this._items={}}return e.prototype.add=function(e){return!a(e,!0,this)},e.prototype.has=function(e){return a(e,!1,this)},e}(),c=(0,n(8980).Z)((function(e,t){for(var n,r,u=new s,i=[],a=0;a<t.length;)n=e(r=t[a]),u.add(n)&&i.push(r),a+=1;return i})),o=n(768),f=n(2084),l=n(5581),d=n(3751);var p={soundcheck:"soundcheck",set1:"set 1",set2:"set 2",set3:"set 3",encore1:"encore",encore2:"double encore"};function m(e){var t=e.pageContext,n=t.song,i=t.shows,a=t.sets,s=t.songs,m=t.songPerformances,h=t.teases,g=t.teasePerformances;if(!(n&&s&&m&&i&&h&&a))return r.createElement("p",null,"Loading...");if(!n)return r.createElement("p",null,"Uh oh, no song data found...");var Z=m.map((function(e){var t=e.id.toString(),r=(0,o.Z)((function(e){return e.setlist&&e.setlist.toString().split(":").includes(t)}))(a);if(!r||!r.id)return console.warn("missing setData...",{song:n,performanceData:e}),!1;var u=(0,o.Z)((function(e){return[e.soundcheck,e.set1,e.set2,e.set3,e.encore1,e.encore2].includes(r.id)}))(i);if(!u||!u.id)return console.warn("missing showData...",{song:n,performanceData:e,setData:r}),!1;var s=Object.entries(p).find((function(e){var t=e[0];e[1];return u[t]===r.id}))[1],c=!!e.variation&&"("+e.variation+")";return{performanceData:e,showData:u,variation:c,whichSet:s}})).filter((function(e){return e&&e.showData})).sort((function(e,t){var n=new Date(e.showData.date.split("/")),r=new Date(t.showData.date.split("/"));return n>r?-1:n<r?1:0})),v=c((function(e){return e.showData.id}),Z),y=Z.map((function(e){var t=e.performanceData,n=e.showData,i=e.variation,a=e.whichSet;return r.createElement("li",{key:t.id},r.createElement(u.rU,{to:"/show/"+n.id},n.date," ",i," in ",a))})),_=m.length>0&&r.createElement(r.Fragment,null,r.createElement("h2",null,"Performed at ",v.length+" Show"+(1===v.length?"":"s")),r.createElement("ul",null,y)),b=h.length>0&&r.createElement(r.Fragment,null,r.createElement("h2",null,"Teases"),r.createElement("ul",null,h.map((function(e){var t=(0,o.Z)((0,f.Z)("id",e.performance_id))(g),n=(0,o.Z)((function(e){return e.setlist.toString().split(":").includes(t.id.toString())}))(a),s=(0,o.Z)((function(e){return[e.soundcheck,e.set1,e.set2,e.set3,e.encore1,e.encore2].includes(n.id)}))(i);return r.createElement("li",{key:e.id},"within ",r.createElement(u.rU,{to:"/show/"+s.id},e.within," — ",s.date))}))));return console.log({song:n,teases:h,teasePerformances:g}),r.createElement(l.Z,{className:"songpage"},r.createElement(d.Z,{title:'"'+n.title+'" performances by JRAD',description:'List of performances of the song "'+n.title+"\" by Joe Russo's Almost Dead"}),r.createElement("h1",{className:"songpage__name"},n.title),r.createElement("div",{className:"songpage__info"},function(e){switch(void 0===e&&(e=null),e){case null:case"":return!1;case"traditional":return r.createElement("p",null,"(traditional)");default:return r.createElement("p",null,"by ",e)}}(n.author),n.suite&&r.createElement("p",null,"Part of the ",n.suite," suite")),r.createElement("div",{className:"songpage__performances"},_),r.createElement("div",{className:"songpage__teases"},b))}}}]);
//# sourceMappingURL=component---src-pages-song-js-84c58cbca3f4180efde1.js.map