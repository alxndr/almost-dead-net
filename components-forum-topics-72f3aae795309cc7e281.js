(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[868],{1279:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var s=r(7294);function o(){return(0,s.useEffect)((function(){for(var e=document.querySelectorAll("d-topics-list"),t=0;t<e.length;t++){var r=e[t],s=r.getAttribute("discourse-url");if(s&&0!==s.length){var o="de-"+Math.random().toString(36).substr(2,9),u=["discourse_embed_id="+o];r.removeAttribute("discourse-url");for(var n=0;n<r.attributes.length;n++){var l=r.attributes[n];u.push(l.name.replace("-","_")+"="+l.value)}var i=document.createElement("iframe");i.src=s+"/embed/topics?"+u.join("&"),i.id=o,i.frameBorder=0,i.scrolling="no",r.appendChild(i)}else console.error("Error, `discourse-url` was not found")}})),s.createElement(s.Fragment,null,s.createElement("d-topics-list",{key:"forum-topics","discourse-url":"https://lot.almost-dead.net","per-page":"5",status:"open"}))}}}]);
//# sourceMappingURL=components-forum-topics-72f3aae795309cc7e281.js.map