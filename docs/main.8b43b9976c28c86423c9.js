!function(n){function e(e){for(var r,i,c=e[0],u=e[1],l=e[2],f=0,d=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(n[r]=u[r]);for(p&&p(e);d.length;)d.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],r=!0,c=1;c<t.length;c++){var u=t[c];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),n=i(i.s=t[0]))}return n}var r={},a={main:0},o=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=u;o.push(["./src/index.js","vendors_main"]),t()}({"./src/index.js":function(n,e,t){"use strict";t.r(e);var r=t("./node_modules/react/index.js"),a=t.n(r),o=t("./node_modules/react-dom/index.js"),i=t.n(o),c=t.p+"1575fc8a455d323e1011956758831f1c.png",u=t.p+"c2f3dc7605b04a6d67c8f708f14d3541.png",l=t("./node_modules/styled-components/dist/styled-components.browser.esm.js");function p(){var n=f(["\n        @media (min-width: 768px){\n        ",";\n        }\n    "]);return p=function(){return n},n}function f(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var d=function(){return Object(l.a)(p(),l.a.apply(void 0,arguments))},s=t.p+"46a5ce720755aa2275f195b7d2fe2538.png";function b(){var n=y(["\n        width: 20%;\n        min-width: 250px;\n    "]);return b=function(){return n},n}function m(){var n=y(["\n    width: 70%;\n    max-width: 200px;\n    margin-top: 5px;\n    display: block;\n    margin: 0 auto;\n    ",";\n"]);return m=function(){return n},n}function g(){var n=y(["\n        width: 10%;\n        margin-bottom: 10px;\n        margin-top: 45px;\n        min-width: 150px;\n    "]);return g=function(){return n},n}function x(){var n=y(["\n    width: 60%;\n    max-width: 120px;\n    display: inline-block;\n\n    margin-bottom: 5px;\n    margin-top: 45px;\n\n    ",";\n"]);return x=function(){return n},n}function h(){var n=y(["\n        height 200px;\n        background-size: 50%;\n        background-position: top left 13%;\n    "]);return h=function(){return n},n}function v(){var n=y(["\n    background-image: url( "," );\n    background-repeat: no-repeat;\n    text-align: center;\n    width: 100%;\n    height 150px;\n    background-size: 90%;\n    background-position: top left -300%;\n    \n    ",";\n"]);return v=function(){return n},n}function y(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var w=l.b.header(v(),s,d(h())),j=l.b.img(x(),d(g())),k=l.b.img(m(),d(b())),O=function(){return a.a.createElement(w,null,a.a.createElement(j,{src:c,alt:"Dinna Gonzales"}),a.a.createElement(k,{src:u,alt:"Frontend Developer, Los Angeles CA"}))},z=t.p+"65039dbb04ea1d21768d05a0a183aa3f.png",E=t.p+"b5f94ae6cea4b1e7cc2298f5962387e4.pdf";function P(){var n=D(["\n    .hidden{\n        display: none;\n    }\n"]);return P=function(){return n},n}function _(){var n=D(["{\n    font-family: 'Playfair Display', serif;\n}"]);return _=function(){return n},n}function S(){var n=D(["{\n    font-family: 'Lato', sans-serif;\n}"]);return S=function(){return n},n}function D(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var M="#fff",C="#333",G={primary:"#ce8523",secondary:"#354739",highlight:"#b35417",background:"#ebe5db"},T=Object(l.a)(S()),N=(Object(l.a)(_()),l.b.div(P())),L=t.p+"e234faac91c277ee96146371d934df7c.png";function A(){var n=q(["\n        box-shadow: rgb(235,229,219) 2px 3px 0px;\n        width: 240px;\n        margin: 0 auto;\n        border: 1px solid ",";\n        background: ",";\n\n        padding: 40px;\n    "]);return A=function(){return n},n}function B(){var n=q(["\n    border-radius: 5px;\n    margin: 50px auto 20px;\n    ",";\n"]);return B=function(){return n},n}function J(){var n=q(["\n        font-size: 14px;\n    "]);return J=function(){return n},n}function W(){var n=q(["\n    ",";\n    display: inline-block;\n    cursor: pointer;\n    text-align: center;\n    text-decoration: none;\n    padding: 10px;\n    border-radius: 4px;\n    font-size: 12px;\n    text-transform: uppercase;\n    vertical-align: middle;\n    color: ",";\n    background: ",";\n    border: 1px solid ",";\n\n    letter-spacing: 1px;\n    font-size: 12px;\n    ",";\n\n    &:hover,\n    &:focus{\n        color: ",";\n        background: ",";\n    }\n"]);return W=function(){return n},n}function F(){var n=q(["\n            font-size: 20px;\n        "]);return F=function(){return n},n}function H(){var n=q(["\n            max-width:100%;\n        "]);return H=function(){return n},n}function I(){var n=q(["\n        background: url( "," ) right center no-repeat;\n        background-size: 300px;\n        padding-bottom: 150px;\n    "]);return I=function(){return n},n}function R(){var n=q(["\n    ",";\n    text-align: center;\n    background-size: 150px;\n    padding-bottom: 100px;\n\n    ",";\n\n    .WelcomeText{\n        display: block;\n        max-width: 200px;\n        margin: 0 auto 10px;\n        ",";\n    }\n    .ComingSoon{\n        color: ",";\n        font-size: 14px;\n        width: 250px;\n        margin: 0 auto 30px;\n        ",";\n    }\n"]);return R=function(){return n},n}function q(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var K=l.b.main(R(),T,d(I(),L),d(H()),C,d(F())),Q=l.b.a(W(),T,G.primary,M,G.primary,d(J()),M,G.primary),U=l.b.article(B(),d(A(),G.background,M)),V=function(){return a.a.createElement(K,null,a.a.createElement(U,null,a.a.createElement("img",{className:"WelcomeText",src:z,alt:"Hello!"}),a.a.createElement("h2",{className:"ComingSoon"},"Thanks for stopping by. ",a.a.createElement("br",null),"More content to come soon!"),a.a.createElement(Q,{href:E,target:"_blank"},"Download my resume")))},X=t.p+"d1373524846b35bbc12f7b0a698aca16.png",Y=t.p+"30a9af4c9116bcf8ba10ec33987a1286.png",Z=t.p+"104651b163fda5e536e95d9e82031021.png",$=t.p+"56f0ce74a155e0dc6b8b46f60c780ee0.png";t.p,t.p;function nn(){var n=ln(["\n    display: inline-block;\n    max-height: 100%;\n    width: auto;\n"]);return nn=function(){return n},n}function en(){var n=ln(["\n        padding: 15px;\n        height: 60px;\n    "]);return en=function(){return n},n}function tn(){var n=ln(["\n    display: inline-block;\n    padding: 5px;\n    height: 40px;\n\n    ",";\n"]);return tn=function(){return n},n}function rn(){var n=ln(["\n        width: 200px;\n        margin: 0 auto;\n    "]);return rn=function(){return n},n}function an(){var n=ln(["\n    display: block;\n    margin: 0 auto 5px;\n    width: 150px;\n\n    ",";\n"]);return an=function(){return n},n}function on(){var n=ln(["\n            font-size: 12px;\n            bottom: 10px;\n        "]);return on=function(){return n},n}function cn(){var n=ln(["\n        height: 130px;\n        padding: 15px;\n    "]);return cn=function(){return n},n}function un(){var n=ln(["\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 10px;\n    background-color: ",";\n    height: 100px;\n\n    text-align: center;\n\n    ",";\n\n    .copyright{\n        position: absolute;\n        bottom: 10px;\n        left: 0;\n        right: 0;\n        font-size: 11px;\n        ",";\n    }\n"]);return un=function(){return n},n}function ln(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var pn=l.b.footer(un(),G.background,d(cn()),d(on())),fn=l.b.img(an(),d(rn())),dn=l.b.a(tn(),d(en())),sn=l.b.img(nn()),bn=function(){return a.a.createElement(pn,null,a.a.createElement(fn,{src:X,alt:"Connect with me!"}),a.a.createElement(dn,{href:"https://github.com/dinnagonzales",target:"_blank","aria-label":"Go to my Github account"},a.a.createElement(sn,{src:Y,alt:""})),a.a.createElement(dn,{href:"https://linkedin.com/in/dinnagonzales",target:"_blank","aria-label":"Go to my Linked in account"},a.a.createElement(sn,{src:Z,alt:""})),a.a.createElement(dn,{href:"mailto:dinnapgonzales@gmail.com",target:"_blank","aria-label":"Email me - dinnapgonzales@gmail.com"},a.a.createElement(sn,{src:$,alt:""})),a.a.createElement("span",{className:"copyright"},"https://dinnagonzales.com © May 2020"))},mn=function(){return a.a.createElement(N,null,a.a.createElement("h1",{className:"hidden"},"Dinna Gonzales Portfolio"),a.a.createElement(O,null),a.a.createElement(V,null),a.a.createElement(bn,null))};i.a.render(a.a.createElement(mn,null),document.getElementById("Body-Container")),console.log("PROD mode")}});