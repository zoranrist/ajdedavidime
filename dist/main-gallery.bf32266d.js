parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"P1Nl":[function(require,module,exports) {
!function(){var e=document.querySelectorAll(".store-item"),t=document.querySelector(".lightbox-container"),c=document.querySelector(".lightbox-item"),n=document.querySelectorAll(".store-img"),o=[],r=0;n.forEach(function(e){o.push(e.src)}),e.forEach(function(e){e.addEventListener("click",function(e){var n=e.target.src;c.style.backgroundImage="url(".concat(n,")"),t.classList.add("show"),r=o.indexOf(n)})}),document.querySelector(".btnLeft").addEventListener("click",function(){--r<0&&(r=o.length-1),c.style.backgroundImage="url(".concat(o[r],")")}),document.querySelector(".btnRight").addEventListener("click",function(){++r>=o.length&&(r=0),c.style.backgroundImage="url(".concat(o[r],")")}),document.querySelector(".lightbox-close").addEventListener("click",function(){t.classList.remove("show")})}();
},{}]},{},["P1Nl"], null)
//# sourceMappingURL=/main-gallery.bf32266d.js.map