parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=r(e))){var n=0,t=function(){};return{s:t,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l,a=!0,i=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return a=e.done,e},e:function(e){i=!0,l=e},f:function(){try{a||null==o.return||o.return()}finally{if(i)throw l}}}}function r(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}var t=document.querySelector(".append-row"),o=document.querySelector(".remove-row"),l=document.querySelector(".append-column"),a=document.querySelector(".remove-column"),i=document.querySelector(".container"),c=document.querySelector(".field"),d=2,u=10;i.addEventListener("click",function(r){var n=r.target.closest("button");if(n&&i.contains(n)){var s=r.target.className;if(s.includes("append-row")&&(c.children[0].append(c.rows[0].cloneNode(!0)),c.rows.length>=u&&(n.disabled=!0),o.disabled=!1),s.includes("remove-row")&&(c.rows[0].remove(),c.rows.length<=d&&(n.disabled=!0),t.disabled=!1),s.includes("append-column")){var f,m=e(c.rows);try{for(m.s();!(f=m.n()).done;){var y=f.value,v=Array.from(y.children);y.append(v[0].cloneNode(!0)),y.children.length>=u&&(n.disabled=!0),a.disabled=!1}}catch(w){m.e(w)}finally{m.f()}}if(s.includes("remove-column")){var p,b=e(c.rows);try{for(b.s();!(p=b.n()).done;){var h=p.value;Array.from(h.children)[0].remove(),h.children.length<=d&&(n.disabled=!0),l.disabled=!1}}catch(w){b.e(w)}finally{b.f()}}}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.4def3606.js.map