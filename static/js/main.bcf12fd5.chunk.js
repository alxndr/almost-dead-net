(this["webpackJsonpalmost-dead-net"]=this["webpackJsonpalmost-dead-net"]||[]).push([[0],{11:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return l}));var n="https://gist.githubusercontent.com/alxndr/5f64cf477d5202c004856772ad2222db/raw/76739a12f10c011c46b4c9c654383f31a6fb5e1e",r=("".concat(n,"/segues.csv"),"".concat(n,"/sets.csv")),c="".concat(n,"/shows.csv"),o="".concat(n,"/songperformances.csv"),l=("".concat(n,"/songs.csv"),"".concat(n,"/venues.csv"))},14:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return h}));var n=a(9),r=a(12),c=a(0),o=a.n(c),l=a(10),s=a.n(l),i=a(41),u=a(40),m=a(11),d={download:!0,dynamicTyping:!0,header:!0,worker:!0};function h(t){console.log("setlist seeing...",t);var a=Object(c.useState)(null),l=Object(r.a)(a,2),h=l[0],f=l[1];return Object(c.useEffect)((function(){s.a.parse(m.c,Object(n.a)(Object(n.a)({},d),{},{complete:function(e){var t=e.data,a=e.errors,n=e.meta;if(a.length)throw new Error("Ruh roh",{data:t,errors:a,meta:n});f(t)}}))}),[]),h?h.length?(e.console.log({performances:h}),o.a.createElement(o.a.Fragment,null,t.isEncore?o.a.createElement("p",null,"Encore ",t.which>1&&t.which):o.a.createElement("p",null,"Set ",t.which),o.a.createElement("ol",null,t.setlist.map((function(t){var a,n=(a=t,Object(i.a)(Object(u.a)("id",a)))(h);return e.console.log({perf:n}),o.a.createElement("li",null,n.song_name)}))))):o.a.createElement("p",null,"Uh oh, no sets found..."):o.a.createElement("p",null,"Loading sets...")}}).call(this,a(17))},24:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return u}));var n=a(12),r=a(0),c=a.n(r),o=a(10),l=a.n(o),s=a(11);function i(e){var t=e.date,a=e.id;return c.a.createElement("li",null,c.a.createElement("a",{href:"/show/".concat(a)},t))}function u(){var t=Object(r.useState)(void 0),a=Object(n.a)(t,2),o=a[0],u=a[1];return Object(r.useEffect)((function(){l.a.parse(s.b,{complete:function(e){var t=e.data,a=e.errors,n=e.meta;if(a.length)throw new Error("Ruh roh",{data:t,errors:a,meta:n});u(t)},download:!0,header:!0,worker:!0})}),[]),e.console.log(o),void 0===o?c.a.createElement("p",null,"Loading..."):c.a.createElement("ul",{className:"shows"},o.length?o.map((function(e){return c.a.createElement(i,{key:e.id,date:e.date,id:e.id})})):c.a.createElement("li",null,"Uh oh, no shows found..."))}}).call(this,a(17))},27:function(e,t,a){e.exports=a(39)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),l=(a(32),a(18)),s=a(2),i=a(9),u=a(12),m=a(10),d=a.n(m),h=a(41),f=a(40),E=a(11),p=a(14),g=(a(33),{download:!0,dynamicTyping:!0,header:!0,worker:!0});function b(e){var t=e.match.params,a=Object(n.useState)(null),c=Object(u.a)(a,2),o=c[0],l=c[1],s=Object(n.useState)(null),m=Object(u.a)(s,2),b=m[0],v=m[1],w=Object(n.useState)(null),O=Object(u.a)(w,2),j=O[0],N=O[1];if(Object(n.useEffect)((function(){d.a.parse(E.b,Object(i.a)(Object(i.a)({},g),{},{complete:function(e){var t=e.data,a=e.errors,n=e.meta;if(a.length)throw new Error("Ruh roh",{data:t,errors:a,meta:n});l(t)}})),d.a.parse(E.a,Object(i.a)(Object(i.a)({},g),{},{complete:function(e){var t=e.data,a=e.errors,n=e.meta;if(a.length)throw new Error("Ruh roh",{data:t,errors:a,meta:n});v(t)}})),d.a.parse(E.d,Object(i.a)(Object(i.a)({},g),{},{complete:function(e){var t=e.data,a=e.errors,n=e.meta;if(a.length)throw new Error("Ruh roh",{data:t,errors:a,meta:n});N(t)}}))}),[]),!o)return r.a.createElement("p",null,"Loading shows...");if(!j)return r.a.createElement("p",null,"Loading venues...");if(!o.length)return r.a.createElement("p",null,"Uh oh, no shows found...");if(!j.length)return r.a.createElement("p",null,"Uh oh, no venues found...");if(!b)return r.a.createElement("p",null,"Loading sets...");if(!b.length)return r.a.createElement("p",null,"Uh oh, no sets found...");var k=Object(h.a)(Object(f.a)("id",Number(t.id)))(o);if(!k)return r.a.createElement("p",null,"Uh oh, no show data found...");var y=k.date,U=k.venue_id,A=Object(h.a)(Object(f.a)("id",U))(j),S=A.name,D=A.location,R=[];if(k.set1){var F=Object(h.a)(Object(f.a)("id",Number(k.set1)))(b);console.log("raw set data!!",F);var L=r.a.createElement(p.a,{isEncore:!1,which:1,id:F.id,setlist:[F["song performances"]]});R.push(L)}if(k.set2){var x=Object(h.a)(Object(f.a)("id",Number(k.set2)))(b),T=r.a.createElement(p.a,{isEncore:!1,which:2,id:x.id,setlist:[x["song performances"]]});R.push(T)}if(k.set3){var J=Object(h.a)(Object(f.a)("id",Number(k.set3)))(b),_=r.a.createElement(p.a,{isEncore:!1,which:2,id:J.id,setlist:[J["song performances"]]});R.push(_)}if(k.encore1){var B=Object(h.a)(Object(f.a)("id",Number(k.encore1)))(b),C=r.a.createElement(p.a,{isEncore:!0,which:1,id:B.id,setlist:[B["song performances"]]});R.push(C)}if(k.encore2){var W=Object(h.a)(Object(f.a)("id",Number(k.encore2)))(b),Y=r.a.createElement(p.a,{isEncore:!0,which:2,id:W.id,setlist:[W["song performances"]]});R.push(Y)}return console.log({sets:b,encores:[]}),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"pagetitle"},r.a.createElement("span",{className:"pagetitle--number"},k.id),r.a.createElement("span",{className:"pagetitle--date"},y),r.a.createElement("span",{className:"pagetitle--venue"},S,", ",D)),r.a.createElement("section",null,R.length?R:r.a.createElement("p",null,"Uh oh, no sets found.")))}var v=a(24);function w(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Almost-Dead.net"),r.a.createElement("p",null,"JRAD setlists:"),r.a.createElement(v.a,null),r.a.createElement("hr",null),r.a.createElement("p",null,"Coming eventually..."),r.a.createElement("ul",null,r.a.createElement("li",null,"links to Archive.org"),r.a.createElement("li",null,"videos"),r.a.createElement("li",null,"tease notations")))}a(34);function O(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Uh oh!"),r.a.createElement("p",null,"Error... Please visit the ",r.a.createElement(l.b,{to:"/"},"home page")," and try again."),r.a.createElement("p",null,r.a.createElement("samp",null,"TODO:")," figure out how to 301-redirect?"))}var j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App ".concat(document&&document.location&&document.location.hostname&&("almost-dead.net"===document.location.hostname||"alxndr.github.io"===document.location.hostname)?"prod":"")},r.a.createElement("a",{id:"logo",href:"/"},r.a.createElement("img",{src:"https://i.imgur.com/tvtgYVY.png",alt:"Good Ol' Almost Dead"})),r.a.createElement(l.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:w}),r.a.createElement(s.a,{path:"/show/:id",component:b}),r.a.createElement(s.a,{path:"/:path",component:O})))),r.a.createElement("footer",{id:"site-footer"},"Contributions / corrections: ",r.a.createElement("a",{href:"https://twitter.com/AlmostDeadNet",target:"_new"},"@AlmostDeadNet on Twitter")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.bcf12fd5.chunk.js.map