/*! For license information please see component---src-templates-song-js-9840f7991d19c0dd41c0.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[208],{5900:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var s=o.apply(null,r);s&&e.push(s)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},5097:function(e,t,r){"use strict";var n=r(9756),o=r(7294),a=r(9499),s=r(5444),i=["children","state"];t.Z=function(e){var t=e.children,r=e.state,l=(0,n.Z)(e,i);return o.createElement(a.Location,null,(function(e){var n=e.location;return o.createElement(s.rU,Object.assign({},l,{state:Object.assign({previousUrl:n.href},r)}),t)}))}},1458:function(e,t,r){"use strict";function n(e,t){return e+" "+t+(1!==e?"s":"")}r.d(t,{_:function(){return n}})},5659:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(7294),o=r(742),a=r(5805),s=r(5900),i=r.n(s),l=r(1458),u=r(5127),c=r(6501),d=r(5097);var h={soundcheck:"soundcheck",set1:"set 1",set2:"set 2",set3:"set 3",encore1:"encore",encore2:"double encore"};function f(e){var t=e.columns,r=e.data,a=e.previousUrl,s=void 0===a?"":a,l=(0,o.useTable)({columns:t,data:r},o.useSortBy),u=l.getTableProps,c=l.getTableBodyProps,h=l.headerGroups,f=l.rows,g=l.prepareRow;return n.createElement("table",Object.assign({},u(),{className:"sortable"}),n.createElement("thead",null,h.map((function(e){return n.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return n.createElement("th",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{className:"sortable__cell-"+e.id+" "+(e.isSorted?e.isSortedDesc?"sorted-desc":"sorted-asc":"")}),e.render("Header"))})))}))),n.createElement("tbody",c(),f.map((function(e){return g(e),n.createElement("tr",e.getRowProps(),e.cells.map((function(e){e.row.original.fullData.showData.id;var t,r=i()(((t={blank:"[opener]"===e.value||"[closer]"===e.value})["sortable__cell-"+e.column.id]=!0,t));return n.createElement("td",Object.assign({},e.getCellProps(),{className:r}),function(e,t){var r,o=e.column,a=e.render,s=e.row;return void 0===t&&(t=""),"show"===o.id?r="/show/"+s.original.fullData.showData.id:"prior"===o.id&&s.original.fullData.prior.song_id?r="/song/"+s.original.fullData.prior.song_id:"after"===o.id&&s.original.fullData.after.song_id&&(r="/song/"+s.original.fullData.after.song_id),r?n.createElement(d.Z,{to:r,className:t.endsWith(r)?"highlight":""},a("Cell")):a("Cell")}(e,s))})))}))))}function g(e){var t,r=e.data,o=r.songsCsv,s=r.allSeguesCsv.nodes,g=r.allSetsCsv.nodes,v=r.allShowsCsv.nodes,p=r.allSongperformancesCsv.nodes,m=r.allTeasesCsv.nodes,w=e.location;if(!o)return n.createElement("p",null,"Uh oh, no song data found...");var E=o.performances.split(":");if(!p.length)throw new Error("No data for allSongPerformances");if(!v.length)throw new Error("No data for allShows");if(!g.length)throw new Error("No data for allSets");if(!s.length)throw new Error("No data for allSegues");var S=p.filter((function(e){return E.includes(e.id)})).map((function(e){var t,r,n,i,l=e.id.toString(),u=(0,a.sEJ)((function(e){return e.setlist&&e.setlist.toString().split(":").includes(l)}))(g);if(!u)throw new Error("No setData",{song:o,performanceData:e,allSets:g});var c=(0,a.sEJ)((function(e){return[e.soundcheck,e.set1,e.set2,e.set3,e.encore1,e.encore2].includes(u.id)}))(v);if(!c)throw new Error("No showData",{song:o,performanceData:e,setData:u,allShows:v});var d,f,m,w=String(u.setlist).split(":"),E=w.indexOf(l);if(E>0){var S,_=w[E-1];(d=p.find((function(e){return e.id===_}))).segue=(null===(S=(0,a.sEJ)((0,a.OH4)("to_perf_id",l))(s))||void 0===S?void 0:S.type)||","}else d={song_name:"[opener]"};E<w.length-1?(f=p.find((function(e){return e.id===w[E+1]}))).segue=(null===(m=(0,a.sEJ)((0,a.OH4)("from_perf_id",l))(s))||void 0===m?void 0:m.type)||",":f={song_name:"[closer]"};var D=Object.entries(h).find((function(e){var t=e[0];e[1];return c[t]===u.id}))[1],b=!!e.variation&&"("+e.variation+")";return{show:c.date,prior:null===(t=d)||void 0===t?void 0:t.song_name,segue_prior:null===(r=d)||void 0===r?void 0:r.segue,title:o.title,segue_after:null===(n=f)||void 0===n?void 0:n.segue,after:null===(i=f)||void 0===i?void 0:i.song_name,whichSet:D,fullData:{performanceData:e,showData:c,variation:b,whichSet:D,prior:d,after:f}}})),_=(0,n.useMemo)((function(){return S}),[]),D=(0,n.useMemo)((function(){return[{accessor:"show",Header:"show",sortType:function(e,t){return new Date(e.values.show).getTime()-new Date(t.values.show).getTime()}},{accessor:"prior",Header:"prior song"},{accessor:"segue_prior",Header:">"},{accessor:"title",disableSortBy:!0},{accessor:"segue_after",Header:">"},{accessor:"after",Header:"following song"},{accessor:"whichSet",Header:"where",sortType:function(e,t){return"soundcheck"===e.values.whichSet?-1:"soundcheck"===t.values.whichSet?1:"set 1"===e.values.whichSet?-1:"set 1"===t.values.whichSet?1:"set 2"===e.values.whichSet?-1:"set 2"===t.values.whichSet?1:"set 3"===e.values.whichSet?-1:"set 3"===t.values.whichSet?1:"encore"===e.values.whichSet?-1:"encore"===t.values.whichSet?1:"double encore"===e.values.whichSet?-1:"double encore"===t.values.whichSet?1:void 0}}]}),[]);return n.createElement(u.Z,{className:"songpage"},n.createElement(c.Z,{title:'"'+o.title+'" performed or teased by JRAD',description:"List of each time Joe Russo's Almost Dead has performed or teased the song \""+o.title+'" '+(o.author&&"traditional"!==o.author?"by "+o.author:"")}),n.createElement("h1",{className:"songpage__name"},o.title),n.createElement("div",{className:"songpage__info"},function(e){switch(void 0===e&&(e=null),e){case null:case"":return!1;case"traditional":return n.createElement("p",null,"(traditional)");default:return n.createElement("p",null,"by ",e)}}(o.author),o.suite&&n.createElement("p",null,"Part of the ",o.suite," suite")),Boolean(_.length)&&n.createElement("div",{className:"songpage__performances"},n.createElement("h2",null,"Performed at ",(0,l._)(_.length,"Show")),n.createElement(f,{data:_,columns:D,previousUrl:null==w||null===(t=w.state)||void 0===t?void 0:t.previousUrl})),Boolean(m.length)&&n.createElement("div",{className:"songpage__teases"},n.createElement("h2",null,"Teases"),n.createElement("ul",null,m.map((function(e){var t,r,o=(0,a.sEJ)((0,a.OH4)("id",e.performance_id))(p);if(null==o||!o.id)return!1;var s=(0,a.sEJ)((function(e){return e.setlist.toString().split(":").includes(o.id.toString())}))(g),l=(0,a.sEJ)((function(e){return[e.soundcheck,e.set1,e.set2,e.set3,e.encore1,e.encore2].includes(s.id)}))(v),u="/show/"+l.id;return n.createElement("li",{key:e.id,className:i()({highlight:null==w||null===(t=w.state)||void 0===t||null===(r=t.previousUrl)||void 0===r?void 0:r.endsWith(u)})},n.createElement(d.Z,{to:u},l.date," within ",e.within," ",o.variation&&"("+o.variation+")"))})))))}}}]);
//# sourceMappingURL=component---src-templates-song-js-9840f7991d19c0dd41c0.js.map