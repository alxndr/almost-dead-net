/*! For license information please see component---src-templates-show-js-62b10d9dc034e4935347.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[652],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)){if(n.length){var o=a.apply(null,n);o&&e.push(o)}}else if("object"===s)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},768:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(8980),a=n(91);var s=n(2214),o=function(){function e(e,t){this.xf=t,this.f=e,this.found=!1}return e.prototype["@@transducer/init"]=s.Z.init,e.prototype["@@transducer/result"]=function(e){return this.found||(e=this.xf["@@transducer/step"](e,void 0)),this.xf["@@transducer/result"](e)},e.prototype["@@transducer/step"]=function(e,t){var n;return this.f(t)&&(this.found=!0,e=(n=this.xf["@@transducer/step"](e,t))&&n["@@transducer/reduced"]?n:{"@@transducer/value":n,"@@transducer/reduced":!0}),e},e}(),i=(0,r.Z)((function(e,t){return new o(e,t)})),l=(0,r.Z)((0,a.Z)(["find"],i,(function(e,t){for(var n=0,r=t.length;n<r;){if(e(t[n]))return t[n];n+=1}})))},8477:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(8088);function a(e,t){return function(e,t,n){var a,s;if("function"==typeof e.indexOf)switch(typeof t){case"number":if(0===t){for(a=1/t;n<e.length;){if(0===(s=e[n])&&1/s===a)return n;n+=1}return-1}if(t!=t){for(;n<e.length;){if("number"==typeof(s=e[n])&&s!=s)return n;n+=1}return-1}return e.indexOf(t,n);case"string":case"boolean":case"function":case"undefined":return e.indexOf(t,n);case"object":if(null===t)return e.indexOf(t,n)}for(;n<e.length;){if((0,r.Z)(e[n],t))return n;n+=1}return-1}(t,e,0)>=0}var s=(0,n(8980).Z)(a)},2929:function(e,t,n){"use strict";var r=n(8980),a=n(5638),s=(0,r.Z)((function(e,t){for(var n in e)if((0,a.Z)(n,e)&&!e[n](t[n]))return!1;return!0}));t.Z=s},8650:function(e){var t;t=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}'),t=JSON.parse('{"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"}}');function n(n,r){if("string"!=typeof n)throw new Error("slugify: string argument expected");var a=t[(r="string"==typeof r?{replacement:r}:r||{}).locale]||{},s=void 0===r.replacement?"-":r.replacement,o=void 0===r.trim||r.trim,i=n.normalize().split("").reduce((function(t,n){return t+(a[n]||e[n]||(n===s?" ":n)).replace(r.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"");return r.strict&&(i=i.replace(/[^A-Za-z0-9\s]/g,"")),o&&(i=i.trim()),i=i.replace(/\s+/g,s),r.lower&&(i=i.toLowerCase()),i}return n.extend=function(t){Object.assign(e,t)},n},e.exports=t(),e.exports.default=t()},4533:function(e,t,n){"use strict";function r(e){return"number"==typeof e?[e]:"string"==typeof e?e.split(":"):[]}n.d(t,{d:function(){return r}})},5127:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),a=n(5444),s=function(){return r.createElement("header",null,r.createElement(a.rU,{className:"App__banner",to:"/",title:"Almost-Dead.net home page"},r.createElement("img",{src:"https://i.imgur.com/q5cBEHG.png",alt:"Almost-Dead.net banner"})))};s.defaultProps={};var o=s,i=function(e){var t=e.children,n=e.className,s=void 0===n?"":n;return r.createElement("div",{className:"layout "+s},r.createElement(o,null),r.createElement("main",null,t),r.createElement("footer",{id:"site-footer",className:"footer"},r.createElement(a.rU,{className:"footer__logo",id:"logo-bottom",to:"/",title:"return to home page"},r.createElement("img",{src:"https://i.imgur.com/q5cBEHG.png",alt:"Almost-Dead.net"})),r.createElement(a.rU,{className:"footer__link-about",to:"/about",title:"About the Site"},"About"),r.createElement("a",{href:"https://lot.almost-dead.net",className:"footer__logo-lot",title:"JRAD Forum — The Lot"},r.createElement("img",{src:"https://i.imgur.com/Qi2NhJO.png",alt:"The Lot — a forum for fans of Joe Russo's Almost Dead"}))))}},5323:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var r=n(7294),a=n(5444),s=(0,n(8980).Z)((function(e,t){for(var n=[],r=0,a=t.length;r<a;){for(var s=r+1;s<a&&e(t[s-1],t[s]);)s+=1;n.push(t.slice(r,s)),r=s}return n})),o=n(768),i=n(2084),l=n(5435),u=n(5900),c=n.n(u);function m(e){var t=e.className,n=void 0===t?"":t,a=e.type,s=c()(n,"segue",{"segue--std":">"===a,"segue--smooth":"->"===a});return r.createElement("span",{className:s},a)}var f=n(7415);function h(e){var t=e.notes;return r.createElement(f.Tooltip,{title:t,trigger:"mouseenter focus click"},r.createElement("span",{className:"setlist__songnote","aria-label":"notes",role:"img"},"📓",r.createElement("span",{className:"hidden"},t)))}function d(e){var t=e.list,n=t.map((function(e){return e.song_name})).join(", ")+" tease"+(t.length>1?"s":"");return r.createElement(f.Tooltip,{title:n,trigger:"mouseenter focus click"},r.createElement("span",{className:"setlist__songteases","aria-label":"notes",role:"img"},"🎧",r.createElement("span",{className:"hidden"},n)))}var p=function(e){return(0,o.Z)((0,i.Z)("id",e))};function g(e){var t=e.performanceData,n=e.songData,s=e.segues,u=e.teases,c=n.title,f=(0,o.Z)((0,i.Z)("from_perf_id",t.id))(s),p=(0,l.Z)((0,i.Z)("performance_id",t.id))(u);return r.createElement("li",{className:"setlist__track"},r.createElement(a.rU,{to:"/song/"+t.song_id},c)," ",t.variation||!1,f&&r.createElement(m,f),t.notes&&r.createElement(h,{notes:t.notes}),!!p.length&&r.createElement(d,{list:p}))}function E(e){var t=e.performances,n=e.segues,a=e.songs,l=e.teases;if(!(t&&a&&n&&l))return r.createElement("p",null,"Loading...");if(!t.length)return r.createElement("p",null,"Uh oh, no sets found...");if(!a.length)return r.createElement("p",null,"Uh oh, no songs found...");if(!n.length)return r.createElement("p",null,"Uh oh, no segues found...");if(!l.length)return r.createElement("p",null,"Uh oh, no teases found...");var u=s((function(e,t){return e.suite&&e.suite===t.suite}),e.setlist.map((function(e){var n=p(e)(t),r=p(n.song_id)(a);return{suite:r.suite,songData:r,performanceData:n}})));return r.createElement("div",{className:"setlist__set setlist__set-"+(e.isEncore?"encore":e.which)},r.createElement("h3",{className:"setlist__setlabel"},"soundcheck"===e.which?"Soundcheck":e.isEncore?"Encore "+(e.which>1?e.which:""):"Set "+e.which),r.createElement("ol",{className:"setlist__tracks"},u.map((function(e){if(e.length>1){var t=e[e.length-1];return r.createElement("li",{key:e[0].performanceData.id,className:"suite"},e[0].suite," suite",r.createElement("ul",null,e.map((function(e){var t=e.songData,a=e.performanceData;return r.createElement(g,{key:a.id,performanceData:a,songData:t,segues:n,teases:l})}))),t&&t.performanceData&&r.createElement(m,Object.assign({},(0,o.Z)((0,i.Z)("from_perf_id",t.performanceData.id))(n),{className:"suite__segue"})))}var a=e[0],s=a.performanceData,u=a.songData;return r.createElement(g,{key:s.id,performanceData:s,songData:u,segues:n,teases:l})}))))}},9987:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var r=n(7294),a=(0,n(8980).Z)((function(e,t){return Array.prototype.slice.call(t,0).sort(e)})),s=n(768),o=n(2084),i=n(5435),l=n(2929),u=n(8477),c=n(5444),m=n(8650),f=n.n(m);var h=n(6501),d=n(5127),p=n(5323),g=/[?&]v=([\w-]+)/,E=/\/\/youtu\.be\/([\w-]+)/;function v(e){var t=function(e){if(!e.length||!e.match)return!1;var t=e.match(g);if(t&&t[1])return t[1];var n=e.match(E);return!(!n||!n[1])&&n[1]}(e);if(t)return r.createElement("iframe",{title:"video of the show",width:"380",src:"https://www.youtube.com/embed/"+t,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0});if(e.startsWith("https://archive.org/")){var n=e.replace("/details/","/embed/");return r.createElement("iframe",{title:"audio of the show",src:n+"?playlist=1",width:"380",height:"250",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0})}return r.createElement("span",null,"(from ",new URL(e).host.replace("www.",""),")")}function w(e){var t=e.type,n=e.url;return!!n&&r.createElement("li",null,r.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},t),v(n))}var _=n(4533),y=["matrix","soundboard","audience"],N=function(e){var t=e.type;return y.includes(t)};function b(e){var t=e.date,n=e.recordings;if(n.length){var a=t.split("/"),s=a[0],o=a[1],i=a[2];return r.createElement("section",{className:"showpage__recordings"},r.createElement("h2",null,"Recordings"),r.createElement("ul",null,n.map((function(e){var t=e.type,n=e.url;return r.createElement(w,{type:t,url:n,key:n})})),Boolean(n.filter(N).length)&&r.createElement(w,{type:"audio",url:"https://relisten.net/jrad/"+i+"/"+(s<10?"0"+s:s)+"/"+(o<10?"0"+o:o)})))}return!1}function A(e){var t=e.guests;return!!t.length&&r.createElement("p",null,"With ",t.map((function(e){return e.name})).join(", "))}function O(e){var t=e.show,n=e.which,a=e.isEncore,i=void 0!==a&&a,l=e.sets,u=e.performances,c=e.segues,m=e.teases,f=e.songs,h=t["soundcheck"===n?"soundcheck":(i?"encore":"set")+n];if(!h||!l||!l.length)return!1;var d=(0,s.Z)((0,o.Z)("id",h))(l),g=(0,_.d)(d.setlist);return r.createElement(p.Z,{isEncore:i,which:n,key:d.id,setlist:g,performances:u,segues:c,songs:f,teases:m})}function Z(e){return e.startsWith("https://lot.almost-dead.net/uploads/")||e.match(/\bimgur\b/)}var D,k,S=(D="type",k=["pro-shot","matrix","soundboard","audience","video","audio","unknown"],function(e,t){var n=e[D],r=t[D];if(n===r)return 0;var a=[n,null,r],s=k.find((function(e){return a.includes(e)}));return s?a.indexOf(s)-1:0});function U(e){var t=e.pageContext.lastShowId,n=e.data,s=n.showsCsv,o=n.venuesCsv,m=n.allSetsCsv.nodes,p=n.allGuestsCsv.nodes,g=n.allRecordingsCsv.nodes,E=n.allSongperformancesCsv.nodes,v=n.allSeguesCsv.nodes,w=n.allSongsCsv.nodes,_=n.allTeasesCsv.nodes;if(!s)return console.error("Show page, missing show.............."),!1;var y=s.date,N=s.event,D=s.notes,k=s.links,U=s.tagline,x=p.map((function(e){return e&&e.shows?Number.isInteger(e.shows)?Object.assign({},e,{shows:[e.shows.toString()]}):Object.assign({},e,{shows:e.shows.split(":")}):null})).filter((function(e){return!!e})),C=(0,i.Z)((0,l.Z)({shows:(0,u.Z)(s.id)}))(x),j=a(S)(g),Y=[1,2,3].reduce((function(e,t){return e.concat(r.createElement(O,{which:t,show:s,performances:E,sets:m,segues:v,teases:_,songs:w,key:"set"+t}))}),[]),L=[1,2].reduce((function(e,t){return e.concat(r.createElement(O,{isEncore:!0,which:t,show:s,performances:E,sets:m,segues:v,teases:_,songs:w,key:"encore"+t}))}),[]),J=k.split(/\s+/),H="Setlist and recordings of Joe Russo's Almost Dead "+(C.length?"with "+C.map((function(e){return e.name})).join(" and "):"")+" "+y+" at "+(N?N+", ":"")+o.name+" ("+o.location+") including song segues, teases, and show notes",I=(0,i.Z)(Z)(J);return r.createElement(d.Z,{className:"showpage"},r.createElement(h.Z,{title:"JRAD "+U,description:H,image:I.length&&I[0]}),r.createElement("h1",{className:"showpage__pagetitle"},r.createElement("span",{className:"showpage__pagetitle--band"},"Joe Russo's Almost Dead")," ",r.createElement("span",{className:"showpage__pagetitle--date"},y)," ",N&&r.createElement("span",{className:"showpage__pagetitle--event"},N)," ",o&&r.createElement("span",{className:"showpage__pagetitle--venue"}," ",r.createElement(c.rU,{to:"/venue/"+o.id+"-"+f()(o.name)},o.name,", ",o.location))),r.createElement("section",{className:"showpage__setlist"},D&&r.createElement("div",{className:"showpage__notes"},D),r.createElement(A,{guests:C}),s.soundcheck&&r.createElement(O,{which:"soundcheck",show:s,performances:E,sets:m,segues:v,teases:_,songs:w}),Y.length?Y:r.createElement("p",null,"Uh oh, no sets found."),L.length&&L,I.length?r.createElement("div",{className:"showpage__leadimage"},I.map((function(e){return r.createElement("img",{src:e,alt:"a poster or photograph from the show"})}))):null),r.createElement(b,{recordings:j,date:y}),r.createElement("nav",{className:"showpage__nav"},Number(s.id)>1&&r.createElement("a",{href:"/show/"+(Number(s.id)-1),className:"showpage__nav__prev",title:"previous show"},"Prior show"),Number(s.id)<Number(t)&&r.createElement("a",{href:"/show/"+(Number(s.id)+1),className:"showpage__nav__next",title:"following show"},"Next show")))}}}]);
//# sourceMappingURL=component---src-templates-show-js-62b10d9dc034e4935347.js.map