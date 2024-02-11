"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[612],{5248:function(e,t,a){a.r(t);var r=a(1504),n=a(8008),s=(a(5776),a(9756)),o=a(5420),l=a(1264),c=a(6320);const d=e=>{let{title:t}=e;return t&&!["[unknown]","Drums","Jam","Space"].includes(t)};(0,o.cpR)((0,o.iwI)("title"));function m(e){let{name:t}=e;return!(!t||"traditional"===t)&&r.createElement("span",{className:"song__author"},t)}function i(e){let{data:{author:t,core_gd:a,cover_gd:n,id:o,suite:l,title:c,performances:d},full:i}=e;return r.createElement(s.cH,{to:"/song/"+o},'"',c,'"',i&&r.createElement(r.Fragment,null," ",l&&r.createElement("span",{className:"song__suite"},l," suite")," ",(!a||n)&&r.createElement(m,{name:t})))}function u(e){let{columns:t,data:a,link:s=!0}=e;const{getTableProps:o,getTableBodyProps:l,headerGroups:c,rows:d,prepareRow:m}=(0,n.useTable)({columns:t,data:a},n.useRowState,n.useSortBy);return r.createElement("table",o(),r.createElement("thead",null,c.map((e=>r.createElement("tr",e.getHeaderGroupProps(),e.headers.map((e=>r.createElement("th",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{style:{borderBottom:"solid 3px gray",background:"aliceblue",fontWeight:"bold"}}),e.render("Header"),r.createElement("span",{className:"songs__performed-table__column-sort"},e.isSorted?e.isSortedDesc?"⬇︎":"⬆︎":"⇅")))))))),r.createElement("tbody",l(),d.map((e=>(m(e),r.createElement("tr",e.getRowProps(),e.cells.map((e=>{var t;return r.createElement("td",e.getCellProps(),"title"===(null===(t=e.column)||void 0===t?void 0:t.id)&&s?r.createElement(i,{data:e.row.original}):e.render("Cell"))}))))))))}function h(e){var t,n,s;let{data:{allSongsCsv:{nodes:m},allTeasesCsv:{nodes:i}}}=e;const h=(0,o.aS)((e=>Boolean(e.performances)),m.filter(d)),p=(0,r.useMemo)((()=>h[!0].map((e=>({...e,performances:String(e.performances).split(":").length})))),[]),g=(0,r.useMemo)((()=>[{Header:"title",accessor:"title"},{Header:"author",accessor:"author"},{Header:"suite",accessor:"suite"},{Header:"plays",accessor:"performances"}]),[]),E=i.reduce(((e,t)=>e.concat(t.song_id)),[]),_=(0,o.aS)((e=>E.includes(e.id)),h[!1]),f=(0,r.useMemo)((()=>_[!0].map((e=>({...e,teases:(0,o.IFD)((0,o.eAo)("song_id",e.id))(i).map((e=>e.performance_id)).length})))),[]),b=(0,r.useMemo)((()=>[{Header:"title",accessor:"title"},{Header:"author",accessor:"author"},{Header:"teases",accessor:"teases"}]),[]);return r.createElement(l.c,{className:"songs"},r.createElement(c.c,{title:"JRAD songs played or teased",description:"Repertoire of songs and teases performed by Joe Russo's Almost Dead, plus setlists of each concert"}),r.createElement("div",{id:"songs__toc",className:"tableofcontents"},r.createElement("p",null,"Table of Contents"),r.createElement("ol",null,r.createElement("li",null,r.createElement("a",{href:"#songs__performed-headline"},"Songs Performed / Jammed")),r.createElement("li",null,r.createElement("a",{href:"#songs__teased-headline"},"Songs Teased")))),r.createElement("h1",{href:"#songs__performed-headline"},"Songs Performed / Jammed"),r.createElement("p",null,"These songs have been performed in their entirety, or played as an extended theme by the entire band."),r.createElement(u,{columns:g,data:p}),r.createElement("h1",{id:"songs__teased-headline"},"Songs Teased"),r.createElement("p",null,"These are songs which have been hinted at by one or more members of the band while playing another song."),r.createElement(u,{columns:b,data:f}),"#notyet"===(null===(t=a.g)||void 0===t||null===(n=t.window)||void 0===n||null===(s=n.location)||void 0===s?void 0:s.hash)&&r.createElement(r.Fragment,null,r.createElement("h1",{id:"songs__notyet-headline"},"Not Yet Played from the GD Repertoire"),r.createElement("p",null,"This is an incomplete list of songs which the Grateful Dead or their members recorded or played live (either together or in other projects), but have been neither played nor teased by JRAD..."),r.createElement(u,{columns:(0,r.useMemo)((()=>[{Header:"title",accessor:"title"},{Header:"author",accessor:"author"}]),[]),data:(0,r.useMemo)((()=>_[!1]),[]),link:!1})))}t.default=()=>r.createElement(s.Yl,{query:"1353399418",render:e=>r.createElement(h,{data:e})})}}]);
//# sourceMappingURL=component---src-pages-songs-js-5d80c64f146079998331.js.map