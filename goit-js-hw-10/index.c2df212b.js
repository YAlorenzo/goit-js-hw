!function(){function t(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},r={},o=n.parcelRequired7c6;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in r){var n=r[t];delete r[t];var o={id:t,exports:{}};return e[t]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,n){r[t]=n},n.parcelRequired7c6=o),o.register("l5bVx",(function(t,n){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t}}));var i,c=o("l5bVx"),u=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,f=/^0o[0-7]+$/i,s=parseInt,p="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=p||d||Function("return this")(),v=Object.prototype.toString,h=Math.max,g=Math.min,y=function(){return m.Date.now()};function b(n){var e=void 0===n?"undefined":t(c)(n);return!!n&&("object"==e||"function"==e)}function x(n){if("number"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":t(c)(n))||function(t){return!!t&&"object"==typeof t}(n)&&"[object Symbol]"==v.call(n)}(n))return NaN;if(b(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=b(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(u,"");var r=l.test(n);return r||f.test(n)?s(n.slice(2),r?2:8):a.test(n)?NaN:+n}i=function(t,n,e){var r,o,i,c,u,a,l=0,f=!1,s=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(n){var e=r,i=o;return r=o=void 0,l=n,c=t.apply(i,e)}function m(t){return l=t,u=setTimeout(T,n),f?d(t):c}function v(t){var e=t-a;return void 0===a||e>=n||e<0||s&&t-l>=i}function T(){var t=y();if(v(t))return _(t);u=setTimeout(T,function(t){var e=n-(t-a);return s?g(e,i-(t-l)):e}(t))}function _(t){return u=void 0,p&&r?d(t):(r=o=void 0,c)}function j(){var t=y(),e=v(t);if(r=arguments,o=this,a=t,e){if(void 0===u)return m(a);if(s)return u=setTimeout(T,n),d(a)}return void 0===u&&(u=setTimeout(T,n)),c}return n=x(n)||0,b(e)&&(f=!!e.leading,i=(s="maxWait"in e)?h(x(e.maxWait)||0,n):i,p="trailing"in e?!!e.trailing:p),j.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=a=o=u=void 0},j.flush=function(){return void 0===u?c:_(y())},j};var T=o("6JpON");function _(t){if(t.length>=1)return fetch("https://restcountries.com/v3.1/name/".concat(t,"?fullText=true&fields=name,capital,population,flags,languages"))}function j(t){if(t.length>=1)return fetch("https://restcountries.com/v3.1/name/".concat(t,"?fields=name,flags"))}var w=document.querySelector("#search-box"),O=document.querySelector(".country-card"),L=document.querySelector(".list_proposed_country"),M=document.querySelector(".search_form");function E(n){if(n.length>10&&(t(T).Notify.info("Too many matches found. Please enter a more specific name."),O.innerHTML="",L.innerHTML=""),n.length>=2&&n.length<=10){var e=n.map((function(t){return"<li class=\"list_item\"><img class = 'img_flag'src = ".concat(t.flags.svg,"  width = 30px height = 20px>").concat(t.name.common,"</li>")})).join("");function r(t){w.value=t.currentTarget.textContent}L.innerHTML=e,O.innerHTML="",document.querySelectorAll(".list_item").forEach((function(t){t.addEventListener("click",r)}))}}function N(t){if(console.log(t),1===t.length){var n=t.map((function(t){return"<h1 class=\"h1_name_country\"><img class = 'img_flag'src = ".concat(t.flags.svg,"  width = 70px height = 40px>").concat(t.name.official,'</h1>\n        <ul class="ul_country">\n            <li class="li_country"><span>Capital: </span>').concat(t.capital,'</li>\n            <li class="li_country"><span>Population: </span>').concat(t.population,'</li>\n            <li class="li_country"><span>Languages: </span>').concat(Object.values(t.languages),"</li>\n        </ul>")})).join("");O.innerHTML=n,L.innerHTML=""}}function S(n){t(T).Notify.failure("Oops, there is no country with that name")}w.addEventListener("input",t(i)((function(t){var n=w.value.trim();n&&j(n).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})).then(E).catch(S)}),300)),M.addEventListener("submit",(function(t){t.preventDefault();var n=w.value.trim();n&&_(n).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})).then(N).catch(S);L.innerHTML="",t.currentTarget.reset()}))}();
//# sourceMappingURL=index.c2df212b.js.map