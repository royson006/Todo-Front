!function(n){var e={};function a(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=n,a.c=e,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)a.d(t,r,function(e){return n[e]}.bind(null,r));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="",a(a.s=0)}([function(n,e,a){"use strict";a.r(e);var t=()=>'\n        <div class="Header-main">\n            <div class="Header-logo">\n                <h1>\n                    <a href="/">Prueba</a>\n                </h1>\n            </div>\n            <div class="Header-nav">\n                <a href="#/about/">about</a>\n            </div>\n        </div>\n    ';const r="https://rickandmortyapi.com/api/character";var i=async n=>{const e=n?`${r}/${n}`:r;try{const n=await fetch(e);return await n.json()}catch(n){console.log(fetch.error,"error")}};var s=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var c=()=>'  \n    <div class="Error404">\n        <h2>Error 404 </h2>\n    </div>\n    ';var o=n=>{if(n.length<=3){return"/"===n?n:"/:id"}return"/"+n};const l={"/":async()=>`   \n    <div class="Characters">\n        ${(await i()).results.map(n=>`<article class="Character-item">\n                                                    <a href="#/${n.id}/">\n                                                        <img src="${n.image}" alt="${n.name}" />\n                                                        <h2>${n.name}</h2>\n                                                    </a>           \n                                                </article>`).join("")}\n    </div> `,"/:id":async()=>{const n=s(),e=await i(n);return`   \n    <div class="Characters-inner">\n        <article class="Characters-card">\n            <img src="${e.image}" alt="${e.name}">\n            <h2>${e.name}</h2>\n        </article>\n        <article class="Characters-card">\n            <h3>Episodes: <span>${e.episode.length}</span></h3>\n            <h3>Status: <span>${e.status}</span></h3>\n            <h3>Species: <span>${e.species}</span></h3>\n            <h3>Geneder: <span>${e.gender}</span></h3>\n            <h3>Origin: <span>${e.origin.name}</span></h3>\n            <h3>Last Location: <span>${e.location.name}</span></h3>\n        </article>\n    </div>\n    `},"/contact":"Contact"};var d=async()=>{const n=document.getElementById("header"),e=document.getElementById("content");n.innerHTML=await t();let a=s(),r=await o(a),i=l[r]?l[r]:c;e.innerHTML=await i()};window.addEventListener("load",d),window.addEventListener("hashchange",d)}]);