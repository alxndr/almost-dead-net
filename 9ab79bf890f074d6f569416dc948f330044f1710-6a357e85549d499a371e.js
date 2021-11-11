/*! For license information please see 9ab79bf890f074d6f569416dc948f330044f1710-6a357e85549d499a371e.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[591],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=s.apply(null,n);a&&e.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var u in n)r.call(n,u)&&n[u]&&e.push(u);else e.push(n.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()},768:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(8980),s=n(91);var i=n(2214),a=function(){function e(e,t){this.xf=t,this.f=e,this.found=!1}return e.prototype["@@transducer/init"]=i.Z.init,e.prototype["@@transducer/result"]=function(e){return this.found||(e=this.xf["@@transducer/step"](e,void 0)),this.xf["@@transducer/result"](e)},e.prototype["@@transducer/step"]=function(e,t){var n;return this.f(t)&&(this.found=!0,e=(n=this.xf["@@transducer/step"](e,t))&&n["@@transducer/reduced"]?n:{"@@transducer/value":n,"@@transducer/reduced":!0}),e},e}(),u=(0,r.Z)((function(e,t){return new a(e,t)})),o=(0,r.Z)((0,s.Z)(["find"],u,(function(e,t){for(var n=0,r=t.length;n<r;){if(e(t[n]))return t[n];n+=1}})))},3483:function(e,t,n){"use strict";var r=n(5871),s=(0,n(8980).Z)(r.Z);t.Z=s},5871:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(8088);function s(e,t){return function(e,t,n){var s,i;if("function"==typeof e.indexOf)switch(typeof t){case"number":if(0===t){for(s=1/t;n<e.length;){if(0===(i=e[n])&&1/i===s)return n;n+=1}return-1}if(t!=t){for(;n<e.length;){if("number"==typeof(i=e[n])&&i!=i)return n;n+=1}return-1}return e.indexOf(t,n);case"string":case"boolean":case"function":case"undefined":return e.indexOf(t,n);case"object":if(null===t)return e.indexOf(t,n)}for(;n<e.length;){if((0,r.Z)(e[n],t))return n;n+=1}return-1}(t,e,0)>=0}},2929:function(e,t,n){"use strict";var r=n(8980),s=n(5638),i=(0,r.Z)((function(e,t){for(var n in e)if((0,s.Z)(n,e)&&!e[n](t[n]))return!1;return!0}));t.Z=i},4533:function(e,t,n){"use strict";function r(e){return"number"==typeof e?[e]:"string"==typeof e?e.split(":"):[]}n.d(t,{d:function(){return r}})},5097:function(e,t,n){"use strict";var r=n(9756),s=n(7294),i=n(9499),a=n(5444),u=["children","state"];t.Z=function(e){var t=e.children,n=e.state,o=(0,r.Z)(e,u);return s.createElement(i.Location,null,(function(e){var r=e.location;return s.createElement(a.rU,Object.assign({},o,{state:Object.assign({previousUrl:r.href},n)}),t)}))}},7234:function(e,t,n){"use strict";n.d(t,{Z:function(){return K}});var r=n(7294),s=n(8980),i=(0,s.Z)((function(e,t){for(var n=[],r=0,s=t.length;r<s;){for(var i=r+1;i<s&&e(t[i-1],t[i]);)i+=1;n.push(t.slice(r,i)),r=i}return n})),a=n(5435),u=n(4715);function o(e,t){for(var n=0,r=t.length,s=Array(r);n<r;)s[n]=e(t[n]),n+=1;return s}var c=n(3734),l=n(7947),f=(0,s.Z)((function(e,t){return 1===e?(0,u.Z)(t):(0,c.Z)(e,(0,l.Z)(e,[],t))})),p=(0,s.Z)((function(e,t){return t>e?t:e})),d=n(91),m=n(6911),h=n(2214),g=function(){function e(e,t){this.xf=t,this.f=e}return e.prototype["@@transducer/init"]=h.Z.init,e.prototype["@@transducer/result"]=h.Z.result,e.prototype["@@transducer/step"]=function(e,t){return this.xf["@@transducer/step"](e,this.f(t))},e}(),v=(0,s.Z)((function(e,t){return new g(e,t)})),Z=n(4567),_=(0,s.Z)((0,d.Z)(["fantasy-land/map","map"],v,(function(e,t){switch(Object.prototype.toString.call(t)){case"[object Function]":return f(t.length,(function(){return e.call(this,t.apply(this,arguments))}));case"[object Object]":return(0,m.Z)((function(n,r){return n[r]=e(t[r]),n}),{},(0,Z.Z)(t));default:return o(e,t)}}))),E=n(3960),y=(0,s.Z)((function(e,t){return _((0,E.Z)(e),t)})),b=(0,n(1908).Z)(m.Z),D=(0,s.Z)((function(e,t){return f(b(p,0,y("length",t)),(function(){var n=arguments,r=this;return e.apply(r,o((function(e){return e.apply(r,n)}),t))}))})),N=(0,u.Z)((function(e){return D((function(){return Array.prototype.slice.call(arguments,0)}),e)}));var O=(0,s.Z)((function(e,t){return(0,a.Z)((n=e,function(){return!n.apply(this,arguments)}),t);var n})),k=N([a.Z,O]),x=n(768),j=n(6041),U=n(5900),A=n.n(U),S=n(7415);function w(e){var t=e.className,n=void 0===t?"":t,s=e.type,i=A()(n,"segue",{"segue--std":">"===s,"segue--smooth":"->"===s});return r.createElement("span",{className:i},s)}function L(e){var t=e.notes;return r.createElement(S.Tooltip,{title:t,trigger:"mouseenter focus click"},r.createElement("span",{className:"setlist__songnote","aria-label":"notes",role:"img"},"📓",r.createElement("span",{className:"hidden"},t)))}function T(e){var t=e.list,n=t.map((function(e){return e.song_name})).join(", ")+" tease"+(t.length>1?"s":"");return r.createElement(S.Tooltip,{title:n,trigger:"mouseenter focus click"},r.createElement("span",{className:"setlist__songteases","aria-label":"notes",role:"img"},"🎧",r.createElement("span",{className:"hidden"},n)))}var B=n(5097),C=function(e){return(0,x.Z)((0,j.Z)("id",e))};function H(e){var t=e.performanceData,n=e.songData,s=e.segues,i=e.teases,u=e.previousUrl,o=n.title,c=(0,x.Z)((0,j.Z)("from_perf_id",t.id))(s),l=(0,a.Z)((0,j.Z)("performance_id",t.id))(i),f="/song/"+t.song_id;return r.createElement("li",{className:A()("setlist__track",{highlight:null==u?void 0:u.endsWith(f)})},r.createElement(B.Z,{to:f},o)," ",t.variation||!1,c&&r.createElement(w,c),t.isDebut&&r.createElement(S.Tooltip,{title:"first time played",trigger:"mouseenter focus click"},r.createElement("span",{className:"setlist__track__badge setlist__track__badge--ftp","aria-label":"notes",role:"img"},"🆕",r.createElement("span",{className:"hidden"},"first time played"))),t.notes&&r.createElement(L,{notes:t.notes}),!!l.length&&r.createElement(T,{list:l}))}function K(e){var t=e.setlist,n=e.performances,s=e.segues,u=e.songs,o=e.teases,c=e.isEncore,l=e.which,f=e.showId,p=e.allSets,d=void 0===p?[]:p,m=e.allShows,h=void 0===m?[]:m,g=e.previousUrl;if(!(n&&u&&s&&o))return r.createElement("p",null,"Loading...");if(!n.length)return r.createElement("p",null,"Uh oh, no sets found...");if(!u.length)return r.createElement("p",null,"Uh oh, no songs found...");if(!s.length)return r.createElement("p",null,"Uh oh, no segues found...");if(!o.length)return r.createElement("p",null,"Uh oh, no teases found...");var v=Number(f),Z=i((function(e,t){return e.suite&&e.suite===t.suite}),t.map((function(e){var t,r=C(e)(n),s=C(r.song_id)(u),i=(t=s.id,(0,a.Z)((0,j.Z)("song_id",t)))(n).map((function(e){return d.find((function(t){return t.setlist.split(":").includes(e.id)}))})).map((function(e){return h.find((function(t){return[t.soundcheck,t.set1,t.set2,t.set3,t.encore1,t.encore2].includes(e.id)}))})),o=k((function(e){return Number(null==e?void 0:e.id)<v}),i)[0];return h.length&&!o.length&&(r.isDebut=!0),{suite:s.suite,songData:s,performanceData:r}})));return r.createElement("div",{className:"setlist__set setlist__set-"+(c?"encore":l)},r.createElement("h3",{className:"setlist__setlabel"},"soundcheck"===l?"Soundcheck":c?"Encore "+(l>1?l:""):"Set "+l),r.createElement("ol",{className:"setlist__tracks"},Z.map((function(e){if(e.length>1){var t=e[e.length-1];return r.createElement("li",{key:e[0].performanceData.id,className:"suite"},e[0].suite," suite",r.createElement("ul",null,e.map((function(e){var t=e.songData,n=e.performanceData;return r.createElement(H,{key:n.id,performanceData:n,songData:t,segues:s,teases:o,previousUrl:g})}))),t&&t.performanceData&&r.createElement(w,Object.assign({},(0,x.Z)((0,j.Z)("from_perf_id",t.performanceData.id))(s),{className:"suite__segue"})))}var n=e[0],i=n.performanceData,a=n.songData;return r.createElement(H,{key:i.id,performanceData:i,songData:a,segues:s,teases:o,previousUrl:g})}))))}}}]);
//# sourceMappingURL=9ab79bf890f074d6f569416dc948f330044f1710-6a357e85549d499a371e.js.map