(this["webpackJsonpalmost-dead-net"]=this["webpackJsonpalmost-dead-net"]||[]).push([[0],{48:function(e,t,n){e.exports=n(83)},53:function(e,t,n){},54:function(e,t,n){},68:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(34),o=n.n(c),s=(n(53),n(11)),l=n(7),i="canary",u="dev",m="prod",h="unknown";function f(){if(!document||!document.location||!document.location.hostname)return h;switch(document.location.hostname){case"almost-dead.net":return m;case"alxndr.github.io":return i;case"localhost":return u;default:return h}}function d(){return Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).GIT_SHA&&Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).GIT_SHA.length?Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).GIT_SHA:"unknown"}console.log("release...",d());n(54);function g(){return r.a.createElement("section",{className:"errorpage"},r.a.createElement("h1",null,"Uh oh! Error"))}var p=n(2),b=n(42),E=n.n(b),O="https://gist.githubusercontent.com/alxndr/5f64cf477d5202c004856772ad2222db/raw/2e8093fffa3e790eeab966b0942a70788401f9ac",v="".concat(O,"/guests.csv"),j="".concat(O,"/segues.csv"),w="".concat(O,"/sets.csv"),_="".concat(O,"/shows.csv"),S="".concat(O,"/songperformances.csv"),N="".concat(O,"/songs.csv"),y="".concat(O,"/teases.csv"),D="".concat(O,"/venues.csv"),k=n(16),x=n(21),T=n.n(x),C=n(31),U=n(35),R=n.n(U);function W(e){var t;try{t=window[e];var n="__storage_test__";return t.setItem(n,n),t.removeItem(n),!0}catch(a){return a instanceof DOMException&&(22===a.code||1014===a.code||"QuotaExceededError"===a.name||"NS_ERROR_DOM_QUOTA_REACHED"===a.name)&&t&&0!==t.length}}function I(e){return e.split("/").slice(-2).join("/")}function P(e){return e.split("/").slice(-2).join("/").split(".")[0]}function A(e){return L.apply(this,arguments)}function L(){return(L=Object(C.a)(T.a.mark((function e(t){var n,a,r,c,o,s=arguments;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=s.length>1&&void 0!==s[1]?s[1]:function(e){return e},localStorage){e.next=3;break}throw new Error("Ruh roh, no localStorage");case 3:if(W("localStorage")){e.next=5;break}throw new Error("Ruh roh, localStorage doesn't look healthy...");case 5:if(a=I(t),!(r=localStorage.getItem(a))){e.next=9;break}return e.abrupt("return",r);case 9:return e.next=11,fetch(t);case 11:if((c=e.sent).ok){e.next=14;break}throw new Error("Uh oh, could not fetch...",{url:t,data:c});case 14:return e.next=16,c.text();case 16:return o=e.sent,localStorage.setItem(a,n(o)),e.abrupt("return",o);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e,t,n){return K.apply(this,arguments)}function K(){return(K=Object(C.a)(T.a.mark((function e(t,n,a){var r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t);case 2:return r=e.sent,e.abrupt("return",R.a.parse(r,Object(k.a)({dynamicTyping:!0,header:!0,complete:function(e){if(!e)throw new Error("getCsvWithCache: No response when fetching",{url:t});var a=e.data;if(e.errors.length)throw new Error("getCsvWithCache: Error fetching",{url:t,response:e});return n(a)}},a)));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t){return V.apply(this,arguments)}function V(){return(V=Object(C.a)(T.a.mark((function e(t,n){var a,r,c,o,s,l,i,u=arguments;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=function(e){return e.reduce((function(e,t){return r(t)&&(e[t.id]=t),e}),{})},a=u.length>2&&void 0!==u[2]?u[2]:{},r=u.length>3&&void 0!==u[3]?u[3]:function(e){return!0},localStorage){e.next=5;break}throw new Error("Ruh roh, no localStorage");case 5:if(W("localStorage")){e.next=7;break}throw new Error("Ruh roh, localStorage doesn't look healthy...");case 7:if(c="".concat(P(t),".obj.str"),!(o=localStorage.getItem(c))){e.next=11;break}return e.abrupt("return",n(JSON.parse(o)));case 11:return e.next=13,fetch(t);case 13:if((s=e.sent).ok){e.next=16;break}throw new Error("Uh oh, could not fetch...",{url:t,data:s});case 16:return e.next=18,s.text();case 18:return l=e.sent,e.abrupt("return",R.a.parse(l,Object(k.a)({dynamicTyping:!0,header:!0,complete:function(e){if(!e)throw new Error("parseIntoObjectWithCache: No response when fetching",{url:t});var a=e.data;if(e.errors.length)throw new Error("parseIntoObjectWithCache: Error fetching",{url:t,response:e});var r=i(a);return localStorage.setItem(c,JSON.stringify(r)),n(r)}},a)));case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e,t){return e.replace(":id",t.id)}var B={anyPath:"/:path",home:"/",show:"/show/:id",song:"/song/:id"},G=(n(68),/[^a-z0-9 ]+/g),M=/[-\u2014/\u2013+,()[\]{}\u2026]+/g;function z(e){return e.toLowerCase().replace(M," ").replace(G,"").trim()}function Y(e){var t=Object(a.useState)(null),n=Object(p.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(""),i=Object(p.a)(s,2),u=i[0],m=i[1],h=Object(a.useState)([]),f=Object(p.a)(h,2),d=f[0],g=f[1],b=Object(a.useState)(null),O=Object(p.a)(b,2),v=O[0],j=O[1];if(Object(a.useEffect)((function(){H(N,o)}),[]),v)return r.a.createElement(l.a,{push:!0,to:v});if(!c||!c.length)return r.a.createElement("p",null,"Loading...");return r.a.createElement("div",{className:"songfinder"},r.a.createElement(E.a,{suggestions:d,highlightFirstSuggestion:!0,onSuggestionsClearRequested:function(){return g([])},onSuggestionsFetchRequested:function(e){var t=e.value;m(t),g(function(e){if(!e)return[];var t=z(e);if(!t||t.length<2)return[];var n=new RegExp("\\b".concat(t));return c.filter((function(e){var t=e.title,a=void 0===t?"":t,r=e.author,c=void 0===r?"":r;return!(!a||!n.test(z(a)))||!(!c||!n.test(z(c)))}))}(t))},getSuggestionValue:function(e){return e.title},renderSuggestion:function(e){var t=!!e.author&&r.a.createElement("span",{className:"songfinder__suggestion--author"},e.author);return r.a.createElement("span",{className:"songfinder__suggestion"},e.title,t)},inputProps:{onChange:function(e,t){var n=t.newValue;return m(n)},placeholder:"type a song name",value:u},onSuggestionSelected:function(e,t){var n=t.suggestion;j(J(B.song,{id:n.id}))}}))}n(71);function q(e){var t=e.children,n=e.show,a=n.date,c=n.event,o=n.id,l=n.venue,i="#".concat(o,": ").concat(a).concat(c?" ".concat(c):""," @ ").concat(l.name," (").concat(l.location,")");return r.a.createElement(s.b,{to:B.show.replace(":id",o),title:i},t||a)}function Q(e){var t=e.rawShows,n=e.rawVenues,a=Object.values(t).reduce((function(e,t){var a=t.date.split("/"),r=Object(p.a)(a,3),c=r[0],o=r[1],s=r[2];e[s]||(e[s]={});var l=n[t.venue_id];return e[s]["".concat(c,"/").concat(o)]=Object(k.a)(Object(k.a)({},t),{},{venue:l}),e}),{});return r.a.createElement("ul",{className:"showslist__years"},Object.entries(a).reverse().map((function(e){var t=Object(p.a)(e,2),n=t[0],a=t[1];return r.a.createElement("li",{className:"showslist__years--".concat(n),key:n},r.a.createElement("h3",null,n),r.a.createElement("ul",{className:"showslist__years__shows"},Object.entries(a).map((function(e){var t=Object(p.a)(e,2),n=t[0],a=t[1];return r.a.createElement("li",{className:"showslist__years__shows__".concat(n),key:n},r.a.createElement(q,{key:a.id,show:a},n))}))))})))}n(72);function $(e){var t=Object(a.useState)(null),n=Object(p.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(null),l=Object(p.a)(s,2),i=l[0],u=l[1];return Object(a.useEffect)((function(){F(_,o,null,(function(e){return!!e.date})),F(D,u,null,(function(e){return!!e.name&&!!e.location}))}),[]),c&&i?r.a.createElement("section",{className:"homepage"},r.a.createElement("h1",null,"JRAD Setlists"),r.a.createElement("p",null,"Find a song:"),r.a.createElement(Y,null),r.a.createElement("hr",null),r.a.createElement("p",null,"Pick a date to view the setlist and/or notes:"),r.a.createElement(Q,{rawShows:c,rawVenues:i}),r.a.createElement("hr",null),r.a.createElement("p",null,"Coming eventually..."),r.a.createElement("ul",null,r.a.createElement("li",null,"easier navigation??"),r.a.createElement("li",null,"more teases!"),r.a.createElement("li",null,"more links to Archive.org & Youtube"),r.a.createElement("li",null,"fun stats"))):r.a.createElement("p",null,"Loading...")}var X=n(90),Z=n(92),ee=n(89),te=n(87),ne=n(91),ae=n(38),re=n.n(ae),ce=n(86),oe=n(44),se=n.n(oe);n(73);function le(e){var t=e.type,n=se()("segue",{"segue--std":">"===t,"segue--smooth":"->"===t});return r.a.createElement("span",{className:n},t)}var ie=n(27);function ue(e){var t=e.notes;return r.a.createElement(ie.Tooltip,{title:t,trigger:"mouseenter focus click"},r.a.createElement("span",{className:"setlist__songnote","aria-label":"notes",role:"img"},"\ud83d\udcd3",r.a.createElement("span",{className:"hidden"},t)))}function me(e){var t=e.list,n=t.map((function(e){return e.song_name})).join(", "),a="".concat(n," tease").concat(t.length>1?"s":"");return r.a.createElement(ie.Tooltip,{title:a,trigger:"mouseenter focus click"},r.a.createElement("span",{className:"setlist__songteases","aria-label":"notes",role:"img"},"\ud83c\udfa7",r.a.createElement("span",{className:"hidden"},a)))}n(75),n(76);function he(e){var t=e.performanceData,n=e.songData,a=e.segues,c=e.teases,o=n.title,l=Object(X.a)(Object(Z.a)("from_perf_id",t.id))(a),i=Object(ee.a)(Object(Z.a)("performance_id",t.id))(c);return r.a.createElement("li",null,r.a.createElement(s.b,{to:J(B.song,{id:t.song_id})},o)," ",t.variation||!1,l&&r.a.createElement(le,l),t.notes&&r.a.createElement(ue,{notes:t.notes}),!!i.length&&r.a.createElement(me,{list:i}))}function fe(e){var t=Object(a.useState)(null),n=Object(p.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(null),l=Object(p.a)(s,2),i=l[0],u=l[1],m=Object(a.useState)(null),h=Object(p.a)(m,2),f=h[0],d=h[1],g=Object(a.useState)(null),b=Object(p.a)(g,2),E=b[0],O=b[1];if(Object(a.useEffect)((function(){H(S,o),H(j,u),H(N,d),H(y,O)}),[]),!(c&&f&&i&&E))return r.a.createElement("p",null,"Loading...");if(!c.length)return r.a.createElement("p",null,"Uh oh, no sets found...");if(!f.length)return r.a.createElement("p",null,"Uh oh, no songs found...");if(!i.length)return r.a.createElement("p",null,"Uh oh, no segues found...");if(!E.length)return r.a.createElement("p",null,"Uh oh, no teases found...");var v=Object(ce.a)((function(e,t){return e.suite&&e.suite===t.suite}),e.setlist.map((function(e){var t,n=(t=e,Object(X.a)(Object(Z.a)("id",Number(t))))(c),a=Object(X.a)(Object(Z.a)("id",n.song_id))(f);return{suite:a.suite,songData:a,performanceData:n}})));return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"setlist__label"},e.isEncore?"Encore ".concat(e.which>1?e.which:""):"Set ".concat(e.which)),r.a.createElement("ol",{className:"setlist"},v.map((function(e){if(e.length>1)return r.a.createElement("li",{key:e[0].performanceData.id,className:"suite"},e[0].suite," suite:",r.a.createElement("ul",null,e.map((function(e){var t=e.songData,n=e.performanceData;return r.a.createElement(he,{key:n.id,performanceData:n,songData:t,segues:i,teases:E})}))));var t=Object(p.a)(e,1)[0],n=t.performanceData,a=t.songData;return r.a.createElement(he,{key:n.id,performanceData:n,songData:a,segues:i,teases:E})}))))}n(77);function de(e){var t=e.prev,n=e.next;return r.a.createElement("ul",{className:"showpaginator"},t&&t.date&&r.a.createElement("li",{className:"showpaginator__prev"},r.a.createElement(s.b,{to:J(B.show,{id:t.id})},"Previous show: ",t.date)),n&&n.date&&r.a.createElement("li",{className:"showpaginator__next"},r.a.createElement(s.b,{to:J(B.show,{id:n.id})},"Next show: ",n.date)))}n(78);function ge(e){var t=e.match.params,n=Object(a.useState)(null),c=Object(p.a)(n,2),o=c[0],s=c[1],l=Object(a.useState)(null),i=Object(p.a)(l,2),u=i[0],m=i[1],h=Object(a.useState)(null),f=Object(p.a)(h,2),d=f[0],g=f[1],b=Object(a.useState)(null),E=Object(p.a)(b,2),O=E[0],j=E[1];if(Object(a.useEffect)((function(){H(_,s),H(w,m),H(D,g),H(v,j)}),[]),!o||!d||!u||!O)return r.a.createElement("p",null,"Loading...");if(!o.length)return r.a.createElement("p",null,"Uh oh, no shows found...");if(!d.length)return r.a.createElement("p",null,"Uh oh, no venues found...");if(!u.length)return r.a.createElement("p",null,"Uh oh, no sets found...");if(!O.length)return r.a.createElement("p",null,"Uh oh, no guests found...");var S=Number(t.id),N=Object(X.a)(Object(Z.a)("id",S))(o);if(!N)return r.a.createElement("p",null,"Uh oh, no show data found...");var y=Object(X.a)(Object(Z.a)("id",S+1))(o),x=Object(X.a)(Object(Z.a)("id",S-1))(o),T=N.date,C=N.event,U=N.notes,R=N.venue_id,W=Object(X.a)(Object(Z.a)("id",Number(R)))(d);if(!W)return r.a.createElement("p",null,"Uh oh, no venue data found...");var I,P=W.name,A=W.location,L=O.map((function(e){return e&&e.shows?Number.isInteger(e.shows)?Object(k.a)(Object(k.a)({},e),{},{shows:[e.shows]}):Object(k.a)(Object(k.a)({},e),{},{shows:e.shows.split(":").map(Number.bind(null))}):null})).filter((function(e){return!!e})),K=Object(ee.a)(Object(te.a)({shows:Object(ne.a)(S)}))(L),F=[1,2,3].reduce((function(e,t){if(!N["set".concat(t)])return e;var n=Object(X.a)(Object(Z.a)("id",Number(N["set".concat(t)])))(u),a="number"===typeof n.setlist?[n.setlist]:n.setlist.split(":");return e.concat([r.a.createElement(fe,{isEncore:!1,which:t,key:n.id,setlist:a})])}),[]),V=[1,2].reduce((function(e,t){if(!N["encore".concat(t)])return e;var n=Object(X.a)(Object(Z.a)("id",Number(N["encore".concat(t)])))(u),a="number"===typeof n.setlist?[n.setlist]:n.setlist.split(":");return e.concat([r.a.createElement(fe,{isEncore:!0,which:t,key:n.id,setlist:a})])}),[]);return r.a.createElement("div",{className:"showpage"},r.a.createElement("section",null,r.a.createElement("h1",{className:"showpage__pagetitle"},r.a.createElement("span",{className:"showpage__pagetitle--band"},"Joe Russo's Almost Dead"),r.a.createElement("span",{className:"showpage__pagetitle--date"},T),r.a.createElement("span",{className:"showpage__pagetitle--event"},C||!1),r.a.createElement("span",{className:"showpage__pagetitle--venue"},P,", ",A),r.a.createElement("span",{className:"showpage__pagetitle--number"},"show #",N.id)),!!K.length&&r.a.createElement("p",null,"With ",K.map((function(e){return e.name})).join(", ")),F.length?F:r.a.createElement("p",null,"Uh oh, no sets found."),V.length?V:r.a.createElement("p",null,"(no encore)"),U&&r.a.createElement("div",{className:"showpage__notes"},(I=U,r.a.createElement(r.a.Fragment,null,I.split(/\s/g).flatMap((function(e){return e.startsWith("https://")?[r.a.createElement("a",{href:e,rel:"noopener noreferrer",target:"_blank"},re.a.sanitize(e))," "]:[re.a.sanitize(e)," "]})))))),r.a.createElement(de,{prev:x,next:y}))}n(79);var pe={set1:"set 1",set2:"set 2",set3:"set 3",encore1:"encore",encore2:"double encore"};function be(e){var t=e.match.params,n=Object(a.useState)(null),c=Object(p.a)(n,2),o=c[0],l=c[1],i=Object(a.useState)(null),u=Object(p.a)(i,2),m=u[0],h=u[1],f=Object(a.useState)(null),d=Object(p.a)(f,2),g=d[0],b=d[1],E=Object(a.useState)(null),O=Object(p.a)(E,2),v=O[0],j=O[1],D=Object(a.useState)(null),k=Object(p.a)(D,2),x=k[0],T=k[1];if(Object(a.useEffect)((function(){F(_,l),F(w,h),F(N,b),F(S,j,null,(function(e){return!!e.song_id})),F(y,T)}),[]),!(g&&v&&o&&x))return r.a.createElement("p",null,"Loading...");var C=g[t.id];if(!C)return r.a.createElement("p",null,"Uh oh, no song data found...");var U=Number(C.id),R=Object(ee.a)(Object(Z.a)("song_id",U))(Object.values(v)),W=R.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Performances"),r.a.createElement("ul",null,R.map((function(e){var t=e.id.toString(),n=Object(X.a)((function(e){return e.setlist&&e.setlist.toString().split(":").includes(t)}))(Object.values(m));if(!n||!n.id)return console.warn("missing setData...",{performanceData:e,setsObject:m}),!1;var a=Object(X.a)((function(e){return[e.set1,e.set2,e.set3,e.encore1,e.encore2].includes(n.id)}))(Object.values(o));if(!a||!a.id)return console.warn("missing showData...",{performanceData:e,setData:n}),!1;var c=Object.entries(pe).find((function(e){var t=Object(p.a)(e,2),r=t[0];t[1];return a[r]===n.id}))[1],l=!!e.variation&&"(".concat(e.variation,")");return r.a.createElement("li",{key:e.id},r.a.createElement(s.b,{to:J(B.show,{id:a.id})},a.date," ",l," in ",c))})))),I=Object(ee.a)(Object(Z.a)("song_id",U))(Object.values(x)),P=I.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Teases"),r.a.createElement("ul",null,I.map((function(e){var t=v[e.performance_id],n=Object(X.a)((function(e){return e.setlist.toString().split(":").includes(t.id.toString())}))(Object.values(m)),a=Object(X.a)((function(e){return[e.set1,e.set2,e.set3,e.encore1,e.encore2].includes(n.id)}))(Object.values(o));return r.a.createElement("li",{key:e.id},"within ",r.a.createElement(s.b,{to:J(B.show,{id:a.id})},e.within," \u2014 ",a.date))}))));return r.a.createElement("section",{className:"songpage"},r.a.createElement("h1",{className:"songpage__name"},C.title),r.a.createElement("div",{className:"songpage__info"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;switch(e){case null:return!1;case"traditional":return r.a.createElement("p",null,"(traditional)");default:return r.a.createElement("p",null,"by ",e)}}(C.author),C.suite&&r.a.createElement("p",null,"Part of the ",C.suite," suite")),r.a.createElement("div",{className:"songpage__performances"},W),r.a.createElement("div",{className:"songpage__teases"},P))}n(80);var Ee=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App ".concat(f())},r.a.createElement("a",{id:"logo",href:"?#",title:"return to home page"},r.a.createElement("img",{src:"https://i.imgur.com/tvtgYVY.png",alt:"Good Ol' Almost Dead"})),r.a.createElement(s.a,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{path:B.home,exact:!0,component:$}),r.a.createElement(l.b,{path:B.show,component:ge}),r.a.createElement(l.b,{path:B.song,component:be}),r.a.createElement(l.b,{path:B.anyPath,component:g})))),r.a.createElement("footer",{id:"site-footer"},"Corrections? Contributions?",r.a.createElement("br",null),"Contact: ",r.a.createElement("a",{href:"https://twitter.com/AlmostDeadNet",target:"_new",rel:"noopener noreferrer"},"@AlmostDeadNet on Twitter")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Oe=n(88),ve=n(45);n.n(ve).a.init("wi3hyr/a-dn"),Oe.a({dsn:"https://174349d7133f4877ba279f589bf54642@o412799.ingest.sentry.io/5293476",environment:f(),release:d()}),o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.787c2fe2.chunk.js.map