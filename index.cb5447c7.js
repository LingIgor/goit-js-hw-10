!function(){function t(t){return t&&t.__esModule?t.default:t}var n,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),d=Object.prototype.toString,p=Math.max,v=Math.min,b=function(){return s.Date.now()};function m(n){var e=void 0===n?"undefined":t(o)(n);return!!n&&("object"==e||"function"==e)}function y(n){if("number"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":t(o)(n))||function(t){return!!t&&"object"==typeof t}(n)&&"[object Symbol]"==d.call(n)}(n))return NaN;if(m(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=m(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(i,"");var f=u.test(n);return f||c.test(n)?a(n.slice(2),f?2:8):r.test(n)?NaN:+n}n=function(t,n,e){var o,i,r,u,c,a,f=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(n){var e=o,r=i;return o=i=void 0,f=n,u=t.apply(r,e)}function h(t){return f=t,c=setTimeout(T,n),l?g(t):u}function j(t){var e=t-a;return void 0===a||e>=n||e<0||s&&t-f>=r}function T(){var t=b();if(j(t))return w(t);c=setTimeout(T,function(t){var e=n-(t-a);return s?v(e,r-(t-f)):e}(t))}function w(t){return c=void 0,d&&o?g(t):(o=i=void 0,u)}function O(){var t=b(),e=j(t);if(o=arguments,i=this,a=t,e){if(void 0===c)return h(a);if(s)return c=setTimeout(T,n),g(a)}return void 0===c&&(c=setTimeout(T,n)),u}return n=y(n)||0,m(e)&&(l=!!e.leading,r=(s="maxWait"in e)?p(y(e.maxWait)||0,n):r,d="trailing"in e?!!e.trailing:d),O.cancel=function(){void 0!==c&&clearTimeout(c),f=0,o=a=i=c=void 0},O.flush=function(){return void 0===c?u:w(b())},O};var g=document.querySelector("#search-box"),h=document.querySelector(".country-list");document.querySelector(".country-info");g.addEventListener("input",t(n)((function(t){(n=t.target.value,fetch("https://restcountries.com/v3.1/name/".concat(n,"?fields=name,capital,population,flags")).then((function(t){return t.json()})).then((function(t){return t}))).then((function(t){return e=(n=t).map((function(t){return n.length<=5&&n.length>1?'<li>\n    <img src="'.concat(t.flags.svg,'" alt="').concat(t.flags.alt,'" width=35 height=25>\n   <p>').concat(t.name.official,"</p>\n  </li>"):(h.innerHTML="",'<div>\n        <img src="'.concat(t.flags.svg,'" alt="').concat(t.flags.alt,'" width=35 height=25 />\n        <p>').concat(t.name.official,"</p>\n        <p><b>Capital</b>: ").concat(t.capital,"</p>\n        <p><b>Population</b>: ").concat(t.population,"</p>\n\n      </div >"))})).join(""),void h.insertAdjacentHTML("beforeend",e);var n,e}));var n}),1e3))}();
//# sourceMappingURL=index.cb5447c7.js.map
