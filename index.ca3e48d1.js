function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,p=Math.max,d=Math.min,v=function(){return l.Date.now()};function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=r.test(t);return n||u.test(t)?a(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var o,i,r,u,a,f,c=0,l=!1,s=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=o,r=i;return o=i=void 0,c=e,u=t.apply(r,n)}function h(t){return c=t,a=setTimeout(T,e),l?b(t):u}function j(t){var n=t-f;return void 0===f||n>=e||n<0||s&&t-c>=r}function T(){var t=v();if(j(t))return $(t);a=setTimeout(T,function(t){var n=e-(t-f);return s?d(n,r-(t-c)):n}(t))}function $(t){return a=void 0,y&&o?b(t):(o=i=void 0,u)}function w(){var t=v(),n=j(t);if(o=arguments,i=this,f=t,n){if(void 0===a)return h(f);if(s)return a=setTimeout(T,e),b(f)}return void 0===a&&(a=setTimeout(T,e)),u}return e=m(e)||0,g(n)&&(l=!!n.leading,r=(s="maxWait"in n)?p(m(n.maxWait)||0,e):r,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=f=i=a=void 0},w.flush=function(){return void 0===a?u:$(v())},w};const y=document.querySelector("#search-box"),b=document.querySelector(".country-list"),h=document.querySelector(".country-info");y.addEventListener("input",t(e)((function(t){const e=t.target.value.trim();h.innerHTML="",b.innerHTML="",(n=e,fetch(`https://restcountries.com/v3.1/name/${n}?fields=name,capital,flags,population,languages`).then((t=>t.json())).then((t=>t))).then((e=>{console.log(e),1===e.length?function(t){const e=Object.values(t[0].languages),n=t.map((t=>`<img src ='${t.flags.svg}' width = 250px>\n  <h1>${t.name.official}</h1>\n  <p>${t.capital}</p>\n  <p>${t.population}</p>\n  <p>${e}</p>`));h.insertAdjacentHTML("beforeend",n)}(e):e.length<=10&&e.length>1?function(t){const e=t.map((t=>`<li>\n    <img src= '${t.flags.svg}' width = 100px>\n    <p>${t.name.official}</p>\n    </li>\n    `));b.insertAdjacentHTML("beforeend",e)}(e):404===e.status?(alert("dont have country, try againe"),t.target.value=""):e.length>10&&alert(" to many country, write more simbols")}));var n}),1e3));
//# sourceMappingURL=index.ca3e48d1.js.map
