(self.webpackChunkalmost_dead_net=self.webpackChunkalmost_dead_net||[]).push([[177],{383:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return y}});var n=s(7294),a=(0,s(8980).Z)((function(e,t){return Array.prototype.slice.call(t,0).sort(e)})),r=s(768),o=s(2084),c=s(5435),l=s(2929),i=s(3483),u=s(5444),m=s(8650),h=s.n(m),p=s(4250),d=s(5581),g=s(1867),w=s(272),f=s(4533);function _(e){var t=e.date,s=e.recordings;if(s.length){var a=t.split("/"),r=a[0],o=a[1],c=a[2];return n.createElement("section",{className:"showpage__recordings"},n.createElement("h2",null,"Recordings"),n.createElement("ul",null,s.map((function(e){var t=e.type,s=e.url;return n.createElement(w.Z,{type:t,url:s})})),Boolean(s.filter((function(e){var t=e.type;return["matrix","soundboard"].includes(t)})).length)&&n.createElement(w.Z,{type:"audio",url:"https://relisten.net/jrad/"+c+"/"+(r<10?"0"+r:r)+"/"+(o<10?"0"+o:o)})))}return!1}function E(e){var t=e.guests;return!!t.length&&n.createElement("p",null,"With ",t.map((function(e){return e.name})).join(", "))}function v(e){var t=e.show,s=e.which,a=e.isEncore,c=void 0!==a&&a,l=e.sets,i=e.performances,u=e.segues,m=e.teases,h=e.songs,p=t["soundcheck"===s?"soundcheck":(c?"encore":"set")+s];if(!p||!l||!l.length)return!1;var d=(0,r.Z)((0,o.Z)("id",p))(l),w=(0,f.d)(d.setlist);return n.createElement(g.Z,{isEncore:c,which:s,key:d.id,setlist:w,performances:i,segues:u,songs:h,teases:m})}function N(e){var t=e.urls,s=(0,r.Z)((function(e){return e.startsWith("https://lot.almost-dead.net/uploads/")||e.match(/imgur/)}))(t);return n.createElement("div",{className:"showpage__leadimage"},n.createElement("img",{src:s}))}function y(e){var t=e.pageContext,s=t.show,r=(t.shows,t.sets),o=t.venue,m=t.guests,g=t.recordings,w=t.performances,f=t.segues,y=t.songs,b=t.teases,Z=t.lastShowId;if(!s)return console.error("Show page, missing show.............."),!1;var k=s.date,x=s.event,j=s.notes,A=s.links,R=m.map((function(e){return e&&e.shows?Number.isInteger(e.shows)?Object.assign({},e,{shows:[e.shows.toString()]}):Object.assign({},e,{shows:e.shows.split(":")}):null})).filter((function(e){return!!e})),C=(0,c.Z)((0,l.Z)({shows:(0,i.Z)(s.id)}))(R),D=a((function(e,t){return e.type===t.type?0:"pro-shot"===e.type?-1:"pro-shot"===t.type?1:"matrix"===e.type?-1:"matrix"===t.type?1:"video"===e.type?-1:"video"===t.type?1:"soundboard"===e.type?-1:"soundboard"===t.type?1:"audience"===e.type?-1:"audience"===t.type?1:void console.error("cannot sort recordings......",{a:e,b:t})}))(g),J=[1,2,3].reduce((function(e,t){return e.concat(n.createElement(v,{which:t,show:s,performances:w,sets:r,segues:f,teases:b,songs:y}))}),[]),S=[1,2].reduce((function(e,t){return e.concat(n.createElement(v,{isEncore:!0,which:t,show:s,performances:w,sets:r,segues:f,teases:b,songs:y}))}),[]),I=(x?x+", ":"")+o.name+" ("+o.location+")";return n.createElement(d.Z,{className:"showpage"},n.createElement(p.Z,{title:"JRAD "+k+" @ "+I,description:"Joe Russo's Almost Dead"+(C.length?" with "+C.map((function(e){return e.name})).join(" and "):"")+" at "+I+" "+k+" — setlist, teases, recordings"}),n.createElement("h1",{className:"showpage__pagetitle"},n.createElement("span",{className:"showpage__pagetitle--band"},"Joe Russo's Almost Dead")," "," ",n.createElement("span",{className:"showpage__pagetitle--date"},k)," "," ",x&&n.createElement("span",{className:"showpage__pagetitle--event"},x)," "," ",o&&n.createElement("span",{className:"showpage__pagetitle--venue"}," "," ",n.createElement(u.rU,{to:"/venue/"+o.id+"-"+h()(o.name)},o.name,", ",o.location))," "," ",n.createElement("span",{className:"showpage__pagetitle--number"},"show #",s.id)),n.createElement("section",{className:"showpage__setlist"},A&&n.createElement(N,{urls:A.split(/\s+/)}),j&&n.createElement("div",{className:"showpage__notes"},j),n.createElement(E,{guests:C}),s.soundcheck&&n.createElement(v,{which:"soundcheck",show:s,performances:w,sets:r,segues:f,teases:b,songs:y}),J.length?J:n.createElement("p",null,"Uh oh, no sets found."),S.length&&S),n.createElement(_,{recordings:D,date:k}),n.createElement("nav",{className:"showpage__nav"},Number(s.id)>1&&n.createElement("a",{href:"/show/"+(Number(s.id)-1),className:"showpage__nav__prev",title:"previous show"},"Prior show"),Number(s.id)<Number(Z)&&n.createElement("a",{href:"/show/"+(Number(s.id)+1),className:"showpage__nav__next",title:"following show"},"Next show")))}}}]);
//# sourceMappingURL=component---src-pages-show-js-3b61dcc2a4a68671ee62.js.map