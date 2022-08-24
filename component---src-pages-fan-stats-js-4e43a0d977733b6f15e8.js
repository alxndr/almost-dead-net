(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[523],{5127:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),a=n(5444),l=function(){return r.createElement("header",null,r.createElement(a.rU,{className:"App__banner",to:"/",title:"Almost-Dead.net home page"},r.createElement("img",{src:"https://i.imgur.com/q5cBEHG.png",alt:"Almost-Dead.net banner"})))};l.defaultProps={};var s=l,u=function(e){var t=e.children,n=e.className,l=void 0===n?"":n;return r.createElement("div",{className:"layout "+l},r.createElement(s,null),r.createElement("main",null,t),r.createElement("footer",null,r.createElement(a.rU,{className:"footer__home",to:"/",title:"return to home page"},"Home"),r.createElement(a.rU,{className:"footer__link-about",to:"/about",title:"About the Site"},"About"),r.createElement("a",{href:"https://lot.almost-dead.net",className:"footer__forum",title:"JRAD Forum — The Lot"},"Forum")))}},1458:function(e,t,n){"use strict";function r(e,t){return e+" "+t+(1!==e?"s":"")}n.d(t,{_:function(){return r}})},673:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});n(6535),n(9244);var r=n(7294),a=n(5444),l=n(5805),s=n(8650),u=n.n(s),o=n(5127),c=n(6501),m=n(1458),i=function(e,t){return e-t},f=function(){return r.createElement("form",{action:"/fan-stats"},r.createElement("input",{type:"text",name:"username",placeholder:"your username on The Lot",size:"30"}),r.createElement("button",null,"generate stats"))},E=function(e){var t=e.username;return r.createElement("a",{href:"https://lot.almost-dead.net/u/"+t+"/summary"},"@",t)},d=function(e){var t=e.username;return t?r.createElement(r.Fragment,null,r.createElement(E,{username:t}),"'s Fan Stats"):"Fan Stats"},h=function(e){var t=e.id,n=e.name;return"/venue/"+t+"-"+u()(n)},_=(0,l.mNm)((function(e){return e.song_id})),p=function(e){var t=e.user,n=e.shows,s=e.songs,u=e.teases,o=Object.keys(n),c=(0,l.jj$)(Object.values(n).map((function(e){return e.venue}))),f=_(s),d=_(u);return r.createElement(r.Fragment,null,r.createElement("p",null,r.createElement(E,{username:t.username})," was at ",(0,m._)(o.length,"show")," across ",(0,m._)(c.length,"venue"),", with ",(0,m._)(f.length,"different song")," performed, and ",(0,m._)(d.length,"unique song")," teased!"),r.createElement("h2",null,"Shows"),r.createElement("ol",null,(0,l.DYV)(i,o).map((function(e){var t=n[e],l=t.date,s=t.venue;return r.createElement("li",{key:e},r.createElement(a.rU,{to:"/show/"+e},l)," at ",r.createElement(a.rU,{to:h(s)},s.name,", ",s.location))}))),r.createElement("h2",null,"Venues"),r.createElement("ol",null,c.map((function(e){return r.createElement("li",{key:e.id},r.createElement(a.rU,{to:h(e)},e.name,", ",e.location))}))),r.createElement("h2",null,"Songs"),r.createElement("ol",null,f.map((function(e){var t=e.song_id,n=e.song_name;return r.createElement("li",{key:t},r.createElement(a.rU,{to:"/song/"+t},n))}))),r.createElement("h2",null,"Teases"),r.createElement("ol",null,d.map((function(e){return r.createElement("li",{key:e.song_id},r.createElement(a.rU,{to:"/song/"+e.song_id},e.song_name))}))))};function g(e){var t,n=e.location,a=e.data,s=new URLSearchParams(n.search).get("username"),u=(0,r.useState)(),m=u[0],i=u[1],E=(0,r.useState)({}),h=E[0],_=E[1],g=(0,r.useState)(),v=g[0],S=g[1],O=(0,r.useState)(),b=O[0],w=O[1];(0,r.useEffect)((function(){s&&fetch("https://lot.almost-dead.net/u/"+s+".json").then((function(e){return e.json()})).then((function(e){null!=e&&e.user&&i({user:e.user,shows:e.user.user_fields[1]?JSON.parse(e.user.user_fields[1]):[]})}))}),[s]);var y=a.allSetsCsv.nodes,A=a.allSongperformancesCsv.nodes,N=a.allTeasesCsv.nodes,U=a.allShowsCsv.nodes,D=a.allVenuesCsv.nodes,L=(0,l.sEJ)(l.__,A),j=(0,l.sEJ)(l.__,y),H=(0,l.sEJ)(l.__,U),F=(0,l.sEJ)(l.__,D),k=(0,l.hXT)(l.__,N);return(0,r.useEffect)((function(){if(null!=m&&m.shows){var e=m.shows.reduce((function(e,t){var n=t.split(" ")[0].replace(/\/(\d{2})$/,"/20$1"),r=H((0,l.OH4)("date",n));if(null!=r&&r.id){var a,s=F((0,l.OH4)("id",r.venue_id));return Object.assign({},e,((a={})[r.id]=Object.assign({},r,{venue:s}),a))}return e}),{});_(e);var t=Object.values(e).reduce((function(e,t){return e.concat([t.set1,t.set2,t.set3,t.encore1,t.encore2].filter((function(e){return Boolean(e)})))}),[]).map((function(e){return j((0,l.OH4)("id",e))})).flatMap((function(e){var t=e.setlist;return String(t).split(":")})).map((function(e){return L((0,l.OH4)("id",e))}));S(t);var n=t.flatMap((function(e){return k((0,l.OH4)("performance_id",e.id))}));w(n)}}),[m]),r.createElement(o.Z,{className:"fanstatspage"},r.createElement(c.Z,{title:"JRAD Fan Stats"}),r.createElement("h1",null,r.createElement(d,{username:null==m||null===(t=m.user)||void 0===t?void 0:t.username})),s?null!=m&&m.user?Object.keys(h).length?r.createElement(p,{shows:h,songs:v,teases:b,user:m.user}):r.createElement(r.Fragment,null,r.createElement("p",null,"No shows found! (Have you entered them in ",r.createElement("a",{href:"https://lot.almost-dead.net/my/preferences/profile"},"your account preferences on The Lot"),"?)"),r.createElement(f,null)):null!=m&&m.error?r.createElement(r.Fragment,null,r.createElement("p",null,"Uh oh, error fetching data."),r.createElement(f,null)):r.createElement("p",null,"Loading..."):r.createElement(f,null))}}}]);
//# sourceMappingURL=component---src-pages-fan-stats-js-4e43a0d977733b6f15e8.js.map