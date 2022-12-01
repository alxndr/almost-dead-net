/*! For license information please see component---src-templates-song-js-32fda864cd873e03b036.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[208],{5900:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var a=s.apply(null,r);a&&e.push(a)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(r=function(){return s}.apply(t,[]))||(e.exports=r)}()},5097:function(e,t,r){"use strict";var n=r(9756),s=r(7294),o=r(9499),a=r(5444),i=["children","state"];t.Z=function(e){var t=e.children,r=e.state,l=(0,n.Z)(e,i);return s.createElement(o.Location,null,(function(e){var n=e.location;return s.createElement(a.rU,Object.assign({},l,{state:Object.assign({previousUrl:n.href},r)}),t)}))}},1458:function(e,t,r){"use strict";function n(e,t){return e+" "+t+(1!==e?"s":"")}r.d(t,{_:function(){return n}})},5659:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(7294),s=r(742),o=r(5805),a=r(5900),i=r.n(a),l=r(1458),c=r(5127),u=r(6501),d=r(5097);function h(e,t){return"soundcheck"===e.values.whichSet?-1:"soundcheck"===t.values.whichSet?1:"set 1"===e.values.whichSet?-1:"set 1"===t.values.whichSet?1:"set 2"===e.values.whichSet?-1:"set 2"===t.values.whichSet?1:"set 3"===e.values.whichSet?-1:"set 3"===t.values.whichSet?1:"encore"===e.values.whichSet?-1:"encore"===t.values.whichSet?1:"double encore"===e.values.whichSet?-1:"double encore"===t.values.whichSet?1:void 0}var f={soundcheck:"soundcheck",set1:"set 1",set2:"set 2",set3:"set 3",encore1:"encore",encore2:"double encore"};function g(e){var t=e.columns,r=e.data,o=e.previousUrl,a=void 0===o?"":o,l=(0,s.useTable)({columns:t,data:r},s.useSortBy),c=l.getTableProps,u=l.getTableBodyProps,h=l.headerGroups,f=l.rows,g=l.prepareRow;return n.createElement("table",Object.assign({},c(),{className:"sortable"}),n.createElement("thead",null,h.map((function(e){return n.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return n.createElement("th",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{className:"sortable__cell-"+e.id+" "+(e.isSorted?e.isSortedDesc?"sorted-desc":"sorted-asc":"")}),e.render("Header"))})))}))),n.createElement("tbody",u(),f.map((function(e){var t;return g(e),n.createElement("tr",Object.assign({},e.getRowProps(),{className:i()((t={},t["stars-"+e.original.stars]=e.original.stars,t))}),e.cells.map((function(e){var t,r=i()(((t={blank:"[opener]"===e.value||"[closer]"===e.value})["sortable__cell-"+e.column.id]=!0,t));return n.createElement("td",Object.assign({},e.getCellProps(),{className:r}),function(e,t){var r,s=e.column,o=e.render,a=e.row;return void 0===t&&(t=""),"show"===s.id?r="/show/"+a.original.fullData.showData.id:"prior"===s.id&&a.original.fullData.prior.song_id?r="/song/"+a.original.fullData.prior.song_id:"after"===s.id&&a.original.fullData.after.song_id&&(r="/song/"+a.original.fullData.after.song_id),r?n.createElement(d.Z,{to:r,className:i()({highlight:t.endsWith(r)})},o("Cell")):o("Cell")}(e,a))})))}))))}function v(e){var t,s=e.data,a=s.songsCsv,v=s.allSeguesCsv.nodes,m=s.allSetsCsv.nodes,p=s.allShowsCsv.nodes,w=s.allSongperformancesCsv.nodes,S=s.teasesOfThisSong.nodes,E=s.teasesWithinThisSong.nodes,_=e.location;if(!a)return n.createElement("p",null,"Uh oh, no song data found...");var b=a.performances.split(":");if(r.g.console.log({onlyThisSongsPerformanceIds:b}),!w.length)throw new Error("No data for allSongPerformances");if(!p.length)throw new Error("No data for allShows");if(!m.length)throw new Error("No data for allSets");if(!v.length)throw new Error("No data for allSegues");var D=w.filter((function(e){return b.includes(e.id)})).map((function(e){var t,r,n,s,i=e.id.toString(),l=(0,o.sEJ)((function(e){return e.setlist&&e.setlist.toString().split(":").includes(i)}))(m);if(!l)throw new Error("No setData",{song:a,performanceData:e,allSets:m});var c=(0,o.sEJ)((function(e){return[e.soundcheck,e.set1,e.set2,e.set3,e.encore1,e.encore2].includes(l.id)}))(p);if(!c)throw new Error("No showData",{song:a,performanceData:e,setData:l,allShows:p});var u,d,h,g=String(l.setlist).split(":"),S=g.indexOf(i);if(S>0){var E,_=g[S-1];(u=w.find((function(e){return e.id===_}))).segue=(null===(E=(0,o.sEJ)((0,o.OH4)("to_perf_id",i))(v))||void 0===E?void 0:E.type)||","}else u={song_name:"[opener]"};S<g.length-1?(d=w.find((function(e){return e.id===g[S+1]}))).segue=(null===(h=(0,o.sEJ)((0,o.OH4)("from_perf_id",i))(v))||void 0===h?void 0:h.type)||",":d={song_name:"[closer]"};var b=Object.entries(f).find((function(e){var t=e[0];e[1];return c[t]===l.id}))[1],D=!!e.variation&&"("+e.variation+")";return{show:c.date,prior:null===(t=u)||void 0===t?void 0:t.song_name,segue_prior:null===(r=u)||void 0===r?void 0:r.segue,title:a.nicknames.split("; ")[0]||a.title,stars:e.stars,segue_after:null===(n=d)||void 0===n?void 0:n.segue,after:null===(s=d)||void 0===s?void 0:s.song_name,whichSet:b,fullData:{performanceData:e,showData:c,variation:D,whichSet:b,prior:u,after:d}}})),y=(0,n.useMemo)((function(){return D}),[]),N=(0,n.useMemo)((function(){return[{accessor:"show",Header:"show",sortType:function(e,t){return new Date(e.values.show).getTime()-new Date(t.values.show).getTime()}},{accessor:"prior",Header:"prior song"},{accessor:"segue_prior",Header:">"},{accessor:"title",disableSortBy:!0},{accessor:"segue_after",Header:">"},{accessor:"after",Header:"following song"},{accessor:"whichSet",Header:"where",sortType:h}]}),[]);return r.g.console.log("teasesWithinThisSong",E),n.createElement(c.Z,{className:"songpage"},n.createElement(u.Z,{title:'"'+a.title+'" performed or teased by JRAD',description:"List of each time Joe Russo's Almost Dead has performed or teased the song \""+a.title+'" '+(a.author&&"traditional"!==a.author?"by "+a.author:"")}),n.createElement("h1",{className:"songpage__name"},a.title),n.createElement("div",{className:"songpage__info"},function(e){switch(void 0===e&&(e=null),e){case null:case"":return!1;case"traditional":return n.createElement("p",null,"(traditional)");default:return n.createElement("p",null,"by ",e)}}(a.author),a.suite&&n.createElement("p",null,"Part of the ",a.suite," suite")),Boolean(y.length)&&n.createElement("div",{className:"songpage__performances"},n.createElement("h2",null,"Performed at ",(0,l._)(y.length,"Show")),n.createElement(g,{data:y,columns:N,previousUrl:null==_||null===(t=_.state)||void 0===t?void 0:t.previousUrl})),Boolean(S.length)&&n.createElement("div",{className:"songpage__teases"},n.createElement("h2",null,"Teases / Jams"),n.createElement("ul",null,S.map((function(e){var t,r,s=(0,o.sEJ)((0,o.OH4)("id",e.performance_id))(w);if(null==s||!s.id)return!1;var a=(0,o.sEJ)((function(e){return e.setlist.toString().split(":").includes(s.id.toString())}))(m),l=(0,o.sEJ)((function(e){return[e.soundcheck,e.set1,e.set2,e.set3,e.encore1,e.encore2].includes(a.id)}))(p),c="/show/"+l.id;return n.createElement("li",{key:e.id,className:i()({highlight:null==_||null===(t=_.state)||void 0===t||null===(r=t.previousUrl)||void 0===r?void 0:r.endsWith(c)})},n.createElement(d.Z,{to:c},l.date," within ",e.within," ",s.variation&&"("+s.variation+")"))})))),Boolean(E.length)&&n.createElement("div",{className:"songpage__contains"},n.createElement("h2",null,'Teased / Jammed within "',a.title,'"')))}}}]);
//# sourceMappingURL=component---src-templates-song-js-32fda864cd873e03b036.js.map