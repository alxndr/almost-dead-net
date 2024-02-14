"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[612],{7336:function(e,t,r){r.d(t,{c:function(){return E}});var n=r(920);function a(e,t){return function(){var r=arguments.length;if(0===r)return t();var a=arguments[r-1];return(0,n.c)(a)||"function"!=typeof a[e]?t.apply(this,arguments):a[e].apply(a,Array.prototype.slice.call(arguments,0,r-1))}}var s=r(2368);var o=r(4048);function c(e,t,r){if(r||(r=new l),function(e){var t=typeof e;return null==e||"object"!=t&&"function"!=t}(e))return e;var n,a=function(n){var a=r.get(e);if(a)return a;for(var s in r.set(e,n),e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=t?c(e[s],!0,r):e[s]);return n};switch((0,o.c)(e)){case"Object":return a(Object.create(Object.getPrototypeOf(e)));case"Array":return a([]);case"Date":return new Date(e.valueOf());case"RegExp":return n=e,new RegExp(n.source,n.flags?n.flags:(n.global?"g":"")+(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.sticky?"y":"")+(n.unicode?"u":"")+(n.dotAll?"s":""));case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":return e.slice();default:return e}}var l=function(){function e(){this.map={},this.length=0}return e.prototype.set=function(e,t){const r=this.hash(e);let n=this.map[r];n||(this.map[r]=n=[]),n.push([e,t]),this.length+=1},e.prototype.hash=function(e){let t=[];for(var r in e)t.push(Object.prototype.toString.call(e[r]));return t.join()},e.prototype.get=function(e){if(this.length<=180){for(const t in this.map){const r=this.map[t];for(let t=0;t<r.length;t+=1){const n=r[t];if(n[0]===e)return n[1]}}return}const t=this.hash(e),r=this.map[t];if(r)for(let n=0;n<r.length;n+=1){const t=r[n];if(t[0]===e)return t[1]}},e}(),i=r(7952),u=r(7136),d=r(4671),p=r(100),m=r(4180),h=r(5564),f=function(){function e(e,t,r,n){this.valueFn=e,this.valueAcc=t,this.keyFn=r,this.xf=n,this.inputs={}}return e.prototype["@@transducer/init"]=h.c.init,e.prototype["@@transducer/result"]=function(e){var t;for(t in this.inputs)if((0,d.c)(t,this.inputs)&&(e=this.xf["@@transducer/step"](e,this.inputs[t]))["@@transducer/reduced"]){e=e["@@transducer/value"];break}return this.inputs=null,this.xf["@@transducer/result"](e)},e.prototype["@@transducer/step"]=function(e,t){var r=this.keyFn(t);return this.inputs[r]=this.inputs[r]||[r,c(this.valueAcc,!1)],this.inputs[r][1]=this.valueFn(this.inputs[r][1],t),e},e}();function g(e,t,r){return function(n){return new f(e,t,r,n)}}var y=r(2440),v=(0,i.c)(4,[],(0,u.c)([],g,(function(e,t,r,n){var a=(0,y.c)((function(n,a){var s=r(a),o=e((0,d.c)(s,n)?n[s]:c(t,!1),a);return o&&o["@@transducer/reduced"]?(0,p.c)(n):(n[s]=o,n)}));return(0,m.c)(a,{},n)}))),E=(0,s.c)(a("groupBy",v((function(e,t){return e.push(t),e}),[])))},5108:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(1504),a=r(8008),s=(r(5776),r(9756)),o=(0,r(2368).c)((function(e,t){return Array.prototype.slice.call(t,0).sort((function(t,r){var n=e(t),a=e(r);return n<a?-1:n>a?1:0}))})),c=r(5164),l=r(7336),i=r(7524),u=r(5240),d=r(1264),p=r(6320);const m=e=>{let{title:t}=e;return t&&!["[unknown]","Drums","Jam","Space"].includes(t)};o((0,c.c)("title"));function h(e){let{name:t}=e;return!(!t||"traditional"===t)&&n.createElement("span",{className:"song__author"},t)}function f(e){let{data:{author:t,core_gd:r,cover_gd:a,id:o,suite:c,title:l,performances:i},full:u}=e;return n.createElement(s.cH,{to:"/song/"+o},'"',l,'"',u&&n.createElement(n.Fragment,null," ",c&&n.createElement("span",{className:"song__suite"},c," suite")," ",(!r||a)&&n.createElement(h,{name:t})))}function g(e){let{columns:t,data:r,link:s=!0}=e;const{getTableProps:o,getTableBodyProps:c,headerGroups:l,rows:i,prepareRow:u}=(0,a.useTable)({columns:t,data:r},a.useRowState,a.useSortBy);return n.createElement("table",o(),n.createElement("thead",null,l.map((e=>n.createElement("tr",e.getHeaderGroupProps(),e.headers.map((e=>n.createElement("th",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{style:{borderBottom:"solid 3px gray",background:"aliceblue",fontWeight:"bold"}}),e.render("Header"),n.createElement("span",{className:"songs__performed-table__column-sort"},e.isSorted?e.isSortedDesc?"⬇︎":"⬆︎":"⇅")))))))),n.createElement("tbody",c(),i.map((e=>(u(e),n.createElement("tr",e.getRowProps(),e.cells.map((e=>{var t;return n.createElement("td",e.getCellProps(),"title"===(null===(t=e.column)||void 0===t?void 0:t.id)&&s?n.createElement(f,{data:e.row.original}):e.render("Cell"))}))))))))}function y(e){var t,a,s;let{data:{allSongsCsv:{nodes:o},allTeasesCsv:{nodes:c}}}=e;const h=(0,l.c)((e=>Boolean(e.performances)),o.filter(m)),f=(0,n.useMemo)((()=>h[!0].map((e=>({...e,performances:String(e.performances).split(":").length})))),[]),y=(0,n.useMemo)((()=>[{Header:"title",accessor:"title"},{Header:"author",accessor:"author"},{Header:"suite",accessor:"suite"},{Header:"plays",accessor:"performances"}]),[]),v=c.reduce(((e,t)=>e.concat(t.song_id)),[]),E=(0,l.c)((e=>v.includes(e.id)),h[!1]),_=(0,n.useMemo)((()=>E[!0].map((e=>({...e,teases:(0,i.c)((0,u.c)(e.id,"song_id"))(c).map((e=>e.performance_id)).length})))),[]),b=(0,n.useMemo)((()=>[{Header:"title",accessor:"title"},{Header:"author",accessor:"author"},{Header:"teases",accessor:"teases"}]),[]);return n.createElement(d.c,{className:"songs"},n.createElement(p.c,{title:"JRAD songs played or teased",description:"Repertoire of songs and teases performed by Joe Russo's Almost Dead, plus setlists of each concert"}),n.createElement("div",{id:"songs__toc",className:"tableofcontents"},n.createElement("p",null,"Table of Contents"),n.createElement("ol",null,n.createElement("li",null,n.createElement("a",{href:"#songs__performed-headline"},"Songs Performed / Jammed")),n.createElement("li",null,n.createElement("a",{href:"#songs__teased-headline"},"Songs Teased")))),n.createElement("h1",{href:"#songs__performed-headline"},"Songs Performed / Jammed"),n.createElement("p",null,"These songs have been performed in their entirety, or played as an extended theme by the entire band."),n.createElement(g,{columns:y,data:f}),n.createElement("h1",{id:"songs__teased-headline"},"Songs Teased"),n.createElement("p",null,"These are songs which have been hinted at by one or more members of the band while playing another song."),n.createElement(g,{columns:b,data:_}),"#notyet"===(null===(t=r.g)||void 0===t||null===(a=t.window)||void 0===a||null===(s=a.location)||void 0===s?void 0:s.hash)&&n.createElement(n.Fragment,null,n.createElement("h1",{id:"songs__notyet-headline"},"Not Yet Played from the GD Repertoire"),n.createElement("p",null,"This is an incomplete list of songs which the Grateful Dead or their members recorded or played live (either together or in other projects), but have been neither played nor teased by JRAD..."),n.createElement(g,{columns:(0,n.useMemo)((()=>[{Header:"title",accessor:"title"},{Header:"author",accessor:"author"}]),[]),data:(0,n.useMemo)((()=>E[!1]),[]),link:!1})))}var v=()=>n.createElement(s.Yl,{query:"1353399418",render:e=>n.createElement(y,{data:e})})}}]);
//# sourceMappingURL=component---src-pages-songs-js-dd4a508062d1675f11a5.js.map