/*! For license information please see 8e184c1277a336ea4f5264cf950a2a36d71da73c-a45d459c67989d4e76ff.js.LICENSE.txt */
(self.webpackChunkalmost_dead_net=self.webpackChunkalmost_dead_net||[]).push([[448],{5900:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var u=typeof r;if("string"===u||"number"===u)e.push(r);else if(Array.isArray(r)&&r.length){var s=a.apply(null,r);s&&e.push(s)}else if("object"===u)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},8088:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(8980);function a(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}function u(e,t,r){for(var n=0,a=r.length;n<a;){if(e(t,r[n]))return!0;n+=1}return!1}var s=r(5638);var i="function"==typeof Object.is?Object.is:function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t},o=r(4567),c=r(9956);function l(e,t,r,n){var s=a(e);function i(e,t){return f(e,t,r.slice(),n.slice())}return!u((function(e,t){return!u(i,t,e)}),a(t),s)}function f(e,t,r,n){if(i(e,t))return!0;var a,u,p=(0,c.Z)(e);if(p!==(0,c.Z)(t))return!1;if(null==e||null==t)return!1;if("function"==typeof e["fantasy-land/equals"]||"function"==typeof t["fantasy-land/equals"])return"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](t)&&"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](e);if("function"==typeof e.equals||"function"==typeof t.equals)return"function"==typeof e.equals&&e.equals(t)&&"function"==typeof t.equals&&t.equals(e);switch(p){case"Arguments":case"Array":case"Object":if("function"==typeof e.constructor&&"Promise"===(a=e.constructor,null==(u=String(a).match(/^function (\w*)/))?"":u[1]))return e===t;break;case"Boolean":case"Number":case"String":if(typeof e!=typeof t||!i(e.valueOf(),t.valueOf()))return!1;break;case"Date":if(!i(e.valueOf(),t.valueOf()))return!1;break;case"Error":return e.name===t.name&&e.message===t.message;case"RegExp":if(e.source!==t.source||e.global!==t.global||e.ignoreCase!==t.ignoreCase||e.multiline!==t.multiline||e.sticky!==t.sticky||e.unicode!==t.unicode)return!1}for(var m=r.length-1;m>=0;){if(r[m]===e)return n[m]===t;m-=1}switch(p){case"Map":return e.size===t.size&&l(e.entries(),t.entries(),r.concat([e]),n.concat([t]));case"Set":return e.size===t.size&&l(e.values(),t.values(),r.concat([e]),n.concat([t]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var d=(0,o.Z)(e);if(d.length!==(0,o.Z)(t).length)return!1;var h=r.concat([e]),g=n.concat([t]);for(m=d.length-1;m>=0;){var y=d[m];if(!(0,s.Z)(y,t)||!f(t[y],e[y],h,g))return!1;m-=1}return!0}var p=(0,n.Z)((function(e,t){return f(e,t,[],[])}))},5435:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(8980),a=r(91);var u=r(6911),s=r(2214),i=function(){function e(e,t){this.xf=t,this.f=e}return e.prototype["@@transducer/init"]=s.Z.init,e.prototype["@@transducer/result"]=s.Z.result,e.prototype["@@transducer/step"]=function(e,t){return this.f(t)?this.xf["@@transducer/step"](e,t):e},e}(),o=(0,n.Z)((function(e,t){return new i(e,t)})),c=r(4567),l=(0,n.Z)((0,a.Z)(["filter"],o,(function(e,t){return r=t,"[object Object]"===Object.prototype.toString.call(r)?(0,u.Z)((function(r,n){return e(t[n])&&(r[n]=t[n]),r}),{},(0,c.Z)(t)):function(e,t){for(var r=0,n=t.length,a=[];r<n;)e(t[r])&&(a[a.length]=t[r]),r+=1;return a}(e,t);var r})))},768:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(8980),a=r(91);var u=r(2214),s=function(){function e(e,t){this.xf=t,this.f=e,this.found=!1}return e.prototype["@@transducer/init"]=u.Z.init,e.prototype["@@transducer/result"]=function(e){return this.found||(e=this.xf["@@transducer/step"](e,void 0)),this.xf["@@transducer/result"](e)},e.prototype["@@transducer/step"]=function(e,t){var r;return this.f(t)&&(this.found=!0,e=(r=this.xf["@@transducer/step"](e,t))&&r["@@transducer/reduced"]?r:{"@@transducer/value":r,"@@transducer/reduced":!0}),e},e}(),i=(0,n.Z)((function(e,t){return new s(e,t)})),o=(0,n.Z)((0,a.Z)(["find"],i,(function(e,t){for(var r=0,n=t.length;r<n;){if(e(t[r]))return t[r];r+=1}})))},3483:function(e,t,r){"use strict";var n=r(5871),a=(0,r(8980).Z)(n.Z);t.Z=a},5871:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(8088);function a(e,t){return function(e,t,r){var a,u;if("function"==typeof e.indexOf)switch(typeof t){case"number":if(0===t){for(a=1/t;r<e.length;){if(0===(u=e[r])&&1/u===a)return r;r+=1}return-1}if(t!=t){for(;r<e.length;){if("number"==typeof(u=e[r])&&u!=u)return r;r+=1}return-1}return e.indexOf(t,r);case"string":case"boolean":case"function":case"undefined":return e.indexOf(t,r);case"object":if(null===t)return e.indexOf(t,r)}for(;r<e.length;){if((0,n.Z)(e[r],t))return r;r+=1}return-1}(t,e,0)>=0}},4567:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(4715),a=r(5638),u=Object.prototype.toString,s=function(){return"[object Arguments]"===u.call(arguments)?function(e){return"[object Arguments]"===u.call(e)}:function(e){return(0,a.Z)("callee",e)}}(),i=!{toString:null}.propertyIsEnumerable("toString"),o=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],c=function(){return arguments.propertyIsEnumerable("length")}(),l=function(e,t){for(var r=0;r<e.length;){if(e[r]===t)return!0;r+=1}return!1},f="function"!=typeof Object.keys||c?(0,n.Z)((function(e){if(Object(e)!==e)return[];var t,r,n=[],u=c&&s(e);for(t in e)!(0,a.Z)(t,e)||u&&"length"===t||(n[n.length]=t);if(i)for(r=o.length-1;r>=0;)t=o[r],(0,a.Z)(t,e)&&!l(n,t)&&(n[n.length]=t),r-=1;return n})):(0,n.Z)((function(e){return Object(e)!==e?[]:Object.keys(e)}))},2084:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(4715),a=r(8980),u=r(7678);function s(e){return function t(r,s,i){switch(arguments.length){case 0:return t;case 1:return(0,u.Z)(r)?t:(0,a.Z)((function(t,n){return e(r,t,n)}));case 2:return(0,u.Z)(r)&&(0,u.Z)(s)?t:(0,u.Z)(r)?(0,a.Z)((function(t,r){return e(t,s,r)})):(0,u.Z)(s)?(0,a.Z)((function(t,n){return e(r,t,n)})):(0,n.Z)((function(t){return e(r,s,t)}));default:return(0,u.Z)(r)&&(0,u.Z)(s)&&(0,u.Z)(i)?t:(0,u.Z)(r)&&(0,u.Z)(s)?(0,a.Z)((function(t,r){return e(t,r,i)})):(0,u.Z)(r)&&(0,u.Z)(i)?(0,a.Z)((function(t,r){return e(t,s,r)})):(0,u.Z)(s)&&(0,u.Z)(i)?(0,a.Z)((function(t,n){return e(r,t,n)})):(0,u.Z)(r)?(0,n.Z)((function(t){return e(t,s,i)})):(0,u.Z)(s)?(0,n.Z)((function(t){return e(r,t,i)})):(0,u.Z)(i)?(0,n.Z)((function(t){return e(r,s,t)})):e(r,s,i)}}}var i=r(8088),o=s((function(e,t,r){return(0,i.Z)(t,r[e])}))},2929:function(e,t,r){"use strict";var n=r(8980),a=r(5638),u=(0,n.Z)((function(e,t){for(var r in e)if((0,a.Z)(r,e)&&!e[r](t[r]))return!1;return!0}));t.Z=u},8650:function(e){var t;t=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\"","”":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}'),t=JSON.parse('{"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"vi":{"Đ":"D","đ":"d"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"}}');function r(r,n){if("string"!=typeof r)throw new Error("slugify: string argument expected");var a=t[(n="string"==typeof n?{replacement:n}:n||{}).locale]||{},u=void 0===n.replacement?"-":n.replacement,s=r.normalize().split("").reduce((function(t,r){return t+(a[r]||e[r]||r).replace(n.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"").trim().replace(new RegExp("[\\s"+u+"]+","g"),u);return n.lower&&(s=s.toLowerCase()),n.strict&&(s=s.replace(new RegExp("[^a-zA-Z0-9"+u+"]","g"),"").replace(new RegExp("[\\s"+u+"]+","g"),u)),s}return r.extend=function(t){for(var r in t)e[r]=t[r]},r},e.exports=t(),e.exports.default=t()},4533:function(e,t,r){"use strict";function n(e){return"number"==typeof e?[e]:"string"==typeof e?e.split(":"):[]}r.d(t,{d:function(){return n}})},272:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7294),a=/[?&]v=([\w-]+)/,u=/\/\/youtu\.be\/([\w-]+)/;function s(e){var t=function(e){if(!e.length||!e.match)return!1;var t=e.match(a);if(t&&t[1])return t[1];var r=e.match(u);return!(!r||!r[1])&&r[1]}(e);if(t)return n.createElement("iframe",{title:"video of the show",width:"380",src:"https://www.youtube.com/embed/"+t,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0});if(e.startsWith("https://archive.org/")){var r=e.replace("/details/","/embed/");return n.createElement("iframe",{title:"audio of the show",src:r+"?playlist=1",width:"380",height:"250",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0})}return n.createElement("span",null,"(from ",new URL(e).host.replace("www.",""),")")}function i(e){var t=e.type,r=e.url;return n.createElement("li",null,n.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},t),s(r))}},1867:function(e,t,r){"use strict";r.d(t,{Z:function(){return E}});var n=r(7294),a=r(5444),u=(0,r(8980).Z)((function(e,t){for(var r=[],n=0,a=t.length;n<a;){for(var u=n+1;u<a&&e(t[u-1],t[u]);)u+=1;r.push(t.slice(n,u)),n=u}return r})),s=r(768),i=r(2084),o=r(5435),c=r(5900),l=r.n(c);function f(e){var t=e.className,r=void 0===t?"":t,a=e.type,u=l()(r,"segue",{"segue--std":">"===a,"segue--smooth":"->"===a});return n.createElement("span",{className:u},a)}var p=r(7415);function m(e){var t=e.showgap;return t>=50&&n.createElement(p.Tooltip,{title:"bust-out! hadn't been played for "+t+" shows",trigger:"mouseenter focus click"},n.createElement("span",{className:"setlist__track__badge setlist__track__badge--bustout","aria-label":"notes",role:"img"},"‼️",n.createElement("span",{className:"hidden"},"bust-out! hadn't been played for "+t+" shows")))}function d(e){var t=e.prevPerf,r=e.nextPerf;return t||r?t&&!r?n.createElement(p.Tooltip,{title:"last time played",trigger:"mouseenter focus click"},n.createElement("span",{className:"setlist__track__badge setlist__track__badge--ltp","aria-label":"notes",role:"img"},"𝛀",n.createElement("span",{className:"hidden"},"last time played"))):!(t||!r)&&n.createElement(p.Tooltip,{title:"first time played",trigger:"mouseenter focus click"},n.createElement("span",{className:"setlist__track__badge setlist__track__badge--ftp","aria-label":"notes",role:"img"},"🆕",n.createElement("span",{className:"hidden"},"first time played"))):n.createElement(p.Tooltip,{title:"only time played",trigger:"mouseenter focus click"},n.createElement("span",{className:"setlist__track__badge setlist__track__badge--otp","aria-label":"notes",role:"img"},"⁕",n.createElement("span",{className:"hidden"},"only time played")))}function h(e){var t=e.notes;return n.createElement(p.Tooltip,{title:t,trigger:"mouseenter focus click"},n.createElement("span",{className:"setlist__songnote","aria-label":"notes",role:"img"},"📓",n.createElement("span",{className:"hidden"},t)))}function g(e){var t=e.list,r=t.map((function(e){return e.song_name})).join(", ")+" tease"+(t.length>1?"s":"");return n.createElement(p.Tooltip,{title:r,trigger:"mouseenter focus click"},n.createElement("span",{className:"setlist__songteases","aria-label":"notes",role:"img"},"🎧",n.createElement("span",{className:"hidden"},r)))}var y=function(e){return(0,s.Z)((0,i.Z)("id",e))};function v(e){var t=e.performanceData,r=e.songData,u=e.segues,c=e.teases,l=r.title,p=(0,s.Z)((0,i.Z)("from_perf_id",t.id))(u),y=(0,o.Z)((0,i.Z)("performance_id",t.id))(c);return n.createElement("li",{className:"setlist__track"},n.createElement(a.rU,{to:"/song/"+t.song_id},l)," ",t.variation||!1,p&&n.createElement(f,p),n.createElement(d,{prevPerf:Number(t.prev_perfid),nextPerf:Number(t.next_perfid)}),n.createElement(m,{showgap:Number(t.showgap)}),t.notes&&n.createElement(h,{notes:t.notes}),!!y.length&&n.createElement(g,{list:y}))}function E(e){var t=e.performances,r=e.segues,a=e.songs,o=e.teases;if(!(t&&a&&r&&o))return n.createElement("p",null,"Loading...");if(!t.length)return n.createElement("p",null,"Uh oh, no sets found...");if(!a.length)return n.createElement("p",null,"Uh oh, no songs found...");if(!r.length)return n.createElement("p",null,"Uh oh, no segues found...");if(!o.length)return n.createElement("p",null,"Uh oh, no teases found...");var c=u((function(e,t){return e.suite&&e.suite===t.suite}),e.setlist.map((function(e){var r=y(e)(t),n=y(r.song_id)(a);return{suite:n.suite,songData:n,performanceData:r}})));return n.createElement("div",{className:"setlist__set setlist__set-"+(e.isEncore?"encore":e.which)},n.createElement("h3",{className:"setlist__setlabel"},"soundcheck"===e.which?"Soundcheck":e.isEncore?"Encore "+(e.which>1?e.which:""):"Set "+e.which),n.createElement("ol",{className:"setlist__tracks"},c.map((function(e){if(e.length>1){var t=e[e.length-1];return n.createElement("li",{key:e[0].performanceData.id,className:"suite"},e[0].suite," suite",n.createElement("ul",null,e.map((function(e){var t=e.songData,a=e.performanceData;return n.createElement(v,{key:a.id,performanceData:a,songData:t,segues:r,teases:o})}))),t&&t.performanceData&&n.createElement(f,Object.assign({},(0,s.Z)((0,i.Z)("from_perf_id",t.performanceData.id))(r),{className:"suite__segue"})))}var a=e[0],u=a.performanceData,c=a.songData;return n.createElement(v,{key:u.id,performanceData:u,songData:c,segues:r,teases:o})}))))}}}]);
//# sourceMappingURL=8e184c1277a336ea4f5264cf950a2a36d71da73c-a45d459c67989d4e76ff.js.map