!function(n){function e(e){for(var r,o,c=e[0],u=e[1],l=e[2],d=0,s=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&s.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(n[r]=u[r]);for(p&&p(e);s.length;)s.shift()();return i.push.apply(i,l||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],r=!0,c=1;c<t.length;c++){var u=t[c];0!==a[u]&&(r=!1)}r&&(i.splice(e--,1),n=o(o.s=t[0]))}return n}var r={},a={main:0},i=[];function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(t,r,function(e){return n[e]}.bind(null,r));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=u;i.push(["./src/index.js","vendors_main"]),t()}({"./src/index.js":function(n,e,t){"use strict";t.r(e);var r=t("./node_modules/react/index.js"),a=t.n(r),i=t("./node_modules/react-dom/index.js"),o=t.n(i),c=t.p+"1575fc8a455d323e1011956758831f1c.png",u=t.p+"c2f3dc7605b04a6d67c8f708f14d3541.png",l=t("./node_modules/styled-components/dist/styled-components.browser.esm.js");function p(){var n=d(["\n        @media (min-width: 768px){\n        ",";\n        }\n    "]);return p=function(){return n},n}function d(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var s=function(){return Object(l.a)(p(),l.a.apply(void 0,arguments))},f=t.p+"46a5ce720755aa2275f195b7d2fe2538.png";function m(){var n=y(["\n        width: 20%;\n        min-width: 250px;\n    "]);return m=function(){return n},n}function g(){var n=y(["\n    width: 70%;\n    max-width: 200px;\n    margin-top: 5px;\n    display: block;\n    margin: 0 auto;\n    ",";\n"]);return g=function(){return n},n}function b(){var n=y(["\n        width: 10%;\n        margin-bottom: 10px;\n        margin-top: 45px;\n        min-width: 150px;\n    "]);return b=function(){return n},n}function x(){var n=y(["\n    width: 60%;\n    max-width: 120px;\n    display: inline-block;\n\n    margin-bottom: 5px;\n    margin-top: 45px;\n\n    ",";\n"]);return x=function(){return n},n}function h(){var n=y(["\n        height 200px;\n        background-size: 50%;\n        background-position: top left 13%;\n    "]);return h=function(){return n},n}function v(){var n=y(["\n    background-image: url( "," );\n    background-repeat: no-repeat;\n    text-align: center;\n    width: 100%;\n    height 150px;\n    background-size: 90%;\n    background-position: top left -300%;\n    \n    ",";\n"]);return v=function(){return n},n}function y(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var w=l.b.header(v(),f,s(h())),k=l.b.img(x(),s(b())),E=l.b.img(g(),s(m())),z=function(){return a.a.createElement(w,null,a.a.createElement(k,{src:c,alt:"Dinna Gonzales"}),a.a.createElement(E,{src:u,alt:"Frontend Developer, Los Angeles CA"}))},j=t.p+"d1373524846b35bbc12f7b0a698aca16.png",O=t.p+"30a9af4c9116bcf8ba10ec33987a1286.png",N=t.p+"104651b163fda5e536e95d9e82031021.png",P=t.p+"56f0ce74a155e0dc6b8b46f60c780ee0.png";function _(){var n=I(["\n    overflow-x: hidden;\n    height: auto;\n    position: relative;\n    .hidden{\n        display: none;\n    }\n"]);return _=function(){return n},n}function C(){var n=I(["{\n    font-family: 'Playfair Display', serif;\n}"]);return C=function(){return n},n}function D(){var n=I(["{\n    font-family: 'Lato', sans-serif;\n}"]);return D=function(){return n},n}function I(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var S="#fff",M="#333",T={primary:"#ce8523",secondary:"#354739",highlight:"#b35417",background:"#ebe5db"},G=Object(l.a)(D()),L=(Object(l.a)(C()),l.b.div(_()));t.p,t.p;function A(){var n=K(["\n    display: inline-block;\n    max-height: 100%;\n    width: auto;\n"]);return A=function(){return n},n}function B(){var n=K(["\n        padding: 15px;\n        height: 60px;\n    "]);return B=function(){return n},n}function H(){var n=K(["\n    display: inline-block;\n    padding: 5px;\n    height: 40px;\n\n    ",";\n"]);return H=function(){return n},n}function F(){var n=K(["\n        width: 200px;\n        margin: 0 auto;\n    "]);return F=function(){return n},n}function J(){var n=K(["\n    display: block;\n    margin: 0 auto 5px;\n    width: 150px;\n\n    ",";\n"]);return J=function(){return n},n}function W(){var n=K(["\n            font-size: 12px;\n            bottom: 10px;\n        "]);return W=function(){return n},n}function R(){var n=K(["\n        height: 130px;\n        padding: 15px;\n    "]);return R=function(){return n},n}function q(){var n=K(["\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 10px;\n    background-color: ",";\n    height: 100px;\n\n    text-align: center;\n\n    ",";\n\n    .copyright{\n        position: absolute;\n        bottom: 10px;\n        left: 0;\n        right: 0;\n        font-size: 11px;\n        ",";\n    }\n"]);return q=function(){return n},n}function K(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var Q=l.b.footer(q(),T.background,s(R()),s(W())),U=l.b.img(J(),s(F())),V=l.b.a(H(),s(B())),X=l.b.img(A()),Y=function(){return a.a.createElement(Q,null,a.a.createElement(U,{src:j,alt:"Connect with me!"}),a.a.createElement(V,{href:"https://github.com/dinnagonzales",target:"_blank","aria-label":"Go to my Github account"},a.a.createElement(X,{src:O,alt:""})),a.a.createElement(V,{href:"https://linkedin.com/in/dinnagonzales",target:"_blank","aria-label":"Go to my Linked in account"},a.a.createElement(X,{src:N,alt:""})),a.a.createElement(V,{href:"mailto:dinnapgonzales@gmail.com",target:"_blank","aria-label":"Email me - dinnapgonzales@gmail.com"},a.a.createElement(X,{src:P,alt:""})),a.a.createElement("span",{className:"copyright"},"https://dinnagonzales.com © May 2020"))};function Z(){var n=function(n,e){e||(e=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n    .container{\n        border: 1px solid #c3996c;\n        box-shadow: rgb(235,229,219) 5px 5px 0px;\n        background: #c3996c;\n        border-radius: 50%;\n        margin: 40px auto;\n        width: 300px;\n        height: 300px;\n        position: relative;\n    }\n\n    .bear,\n    .bear-copy{\n        margin: 80px auto 10px;\n        background: #754d29;\n        width: 150px;\n        height: 150px;\n        border-top-left-radius: 30%;\n        border-top-right-radius: 30%;\n        position: relative;\n    }\n\n    .bear{\n        box-shadow: rgb(235,229,219) 5px 5px 0px;\n    }\n    .bear-copy{\n        z-index: 3;\n    }\n\n    .ear-left,\n    .ear-right{\n        background: #623b14;\n        width: 50px;\n        height: 50px;\n        border-radius: 50%;\n        position: absolute;\n        top: -15px;\n        .inner-ear{\n            position: absolute;\n            left: 8px;\n            top: 8px;\n            z-index: 2;\n            background: #362016;\n            width: 35px;\n            height: 35px;\n            border-radius: 50%;\n        }\n    }\n    .ear-left{\n        left: -15px;\n    }\n    .ear-right{\n        right: -15px;\n    }\n\n    .eye-left,\n    .eye-right{\n        background: #000;\n        z-index: 3;\n        width: 15px;\n        height: 15px;\n        border-radius: 50%;\n        position: absolute;\n        top: 25px;\n        .inner-eye{\n            position: absolute;\n            left: 10px;\n            top: 5px;\n            z-index: 4;\n            background: #fff;\n            width: 5px;\n            height: 5px;\n            border-radius: 50%;\n        }\n    }\n    .eye-left{\n        left: 45px;\n    }\n    .eye-right{\n        right: 45px;\n    }\n\n    .nozzle{\n        position: absolute;\n        left: -15px;\n        z-index: 4;\n        top: 55px;\n        height: 50px;\n        width: 180px;\n        background: #8c603d;\n        border-radius: 18px;\n        .nose{\n            margin: 0 auto;\n            width: 0;\n            height: 0;\n            border-left: 10px solid transparent;\n            border-right: 10px solid transparent;\n            border-top: 10px solid #000;\n        }\n\n        .mouth{\n            margin: 20px auto 10px;\n            width: 10px;\n            height: 10px;\n            border: 3px solid #000;\n            border-radius: 50%;\n        }\n    }\n\n"]);return Z=function(){return n},n}var $=l.b.div.attrs({className:"ProjectOne"})(Z()),nn=[{title:"Pure CSS Image",date:"May 25",component:function(){return a.a.createElement($,null,a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"bear"},a.a.createElement("div",{className:"bear-copy"}),a.a.createElement("div",{className:"ear-left"},a.a.createElement("div",{className:"inner-ear"})),a.a.createElement("div",{className:"ear-right"},a.a.createElement("div",{className:"inner-ear"})),a.a.createElement("div",{className:"eye-right"},a.a.createElement("div",{className:"inner-eye"})),a.a.createElement("div",{className:"eye-left"},a.a.createElement("div",{className:"inner-eye"})),a.a.createElement("div",{className:"nozzle"},a.a.createElement("div",{className:"nose"}),a.a.createElement("div",{className:"mouth"}),a.a.createElement("div",{className:"smile"})))))},tutorial:"https://medium.com/coding-artist/a-beginners-guide-to-pure-css-images-ef9a5d069dd2#.y185e0b6d",blurb:"To start this series, I decided to do something fun to get the ball rolling! I was 15 the first time\n          I was introduced to HTML & CSS. I remember being so excited when I recreated the website of a \n          cartoon I liked with all the titles replaced with my name! I seem to have forgotten how much enjoyment I get\n          from coding and today was a good reminder.\n        "}],en=t.p+"8cd356f002169c6cc153256ae051f70c.png",tn=t.p+"7a4c9754b2f1e64f28e93639a280121f.png",rn=t.p+"33b041841892d5ac5f4ba84e078850e4.png",an=t.p+"989f08fcb311ff12c5fb0c9ca083553d.png";function on(){var n=sn(["\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-size: auto 100%;\n    height: 40px;\n    width: 80px;\n    position: relative;\n\n    .number{\n        background-image: url(",");\n        background-repeat: no-repeat;\n        background-position: ","px center;\n        width: 20px;\n        height: 40px;\n        position: absolute;\n        right: 0;\n    }\n"]);return on=function(){return n},n}function cn(){var n=sn(["\n            font-size: 15px;\n            line-height: 20px;\n        "]);return cn=function(){return n},n}function un(){var n=sn(["\n    background: ",";\n    border-radius: 10px;\n    padding: 15px;\n    text-align: left;\n\n    h2{\n        margin: 0;\n    }\n    a{\n        color: ",";\n        text-decoration: none;\n    }\n    p{\n        font-size: 13px;\n        line-height: 20px;\n        margin: 30px 0 5px 0;\n        ",";\n    }\n    .date{\n        text-align: right;\n        font-size: 12px;\n    }\n"]);return un=function(){return n},n}function ln(){var n=sn(["\n    border: 1px solid ",";\n    padding: 15px;\n    text-align: left;\n"]);return ln=function(){return n},n}function pn(){var n=sn(["\n        grid-template-columns: 1fr 1fr;\n        grid-gap: 15px;\n        box-shadow: rgb(235,229,219) 2px 3px 0px;\n        border: 1px solid ",";\n        width: 1200px;\n        max-width: 80%;\n        margin: 0 auto 50px;\n        background: ",";\n        padding: 40px;\n    "]);return pn=function(){return n},n}function dn(){var n=sn(["\n    width: 100%;\n    border-radius: 5px;\n    margin: 20px auto 20px;\n    text-align: center;\n    height: auto;\n\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-gap: 20px;\n\n    ",";\n\n\n"]);return dn=function(){return n},n}function sn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var fn=l.b.article.attrs({className:"DaysContainer"})(dn(),s(pn(),T.background,S)),mn=l.b.div.attrs({className:"DayContainer"})(ln(),T.background),gn=l.b.div.attrs({className:"ProjectInfo"})(un(),T.background,T.primary,s(cn())),bn=l.b.div.attrs({className:"DayCount","aria-label":"".concat((function(n){var e=n.day;return"Day ".concat(e)}))})(on(),(function(n){return n.even?en:tn}),(function(n){return n.even?rn:an}),(function(n){var e=n.day;return e&&e})),xn=function(){return a.a.createElement(fn,null,nn.map((function(n,e){var t=n.component,r=e%2==0,i=n.title,o=n.date,c=n.tutorial,u=n.blurb;return a.a.createElement(mn,{key:"".concat(e,"_project")},a.a.createElement(bn,{day:e+1,even:r},a.a.createElement("div",{className:"number"})),a.a.createElement(t,null),a.a.createElement(gn,null,a.a.createElement("h2",null,i),c&&a.a.createElement("a",{target:"_blank",href:c},"Tutorial"),u&&a.a.createElement("p",null,u),o&&a.a.createElement("span",{className:"date"},o)))})))},hn=t.p+"65039dbb04ea1d21768d05a0a183aa3f.png",vn=t.p+"b5f94ae6cea4b1e7cc2298f5962387e4.pdf",yn=t.p+"e234faac91c277ee96146371d934df7c.png";function wn(){var n=Pn(["\n          max-width:100%;\n      "]);return wn=function(){return n},n}function kn(){var n=Pn(["\n        box-shadow: rgb(235,229,219) 2px 3px 0px;\n        border: 1px solid ",";\n        width: 500px;\n        margin: 0 auto 50px;\n        background: ",";\n        padding: 20px 20px 20px 0;\n    "]);return kn=function(){return n},n}function En(){var n=Pn(["\n    display: inline-block;\n    border-radius: 5px;\n    margin: 50px 20px 20px 0;\n    text-align: center;\n    height: auto;\n\n    ",";\n\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    .WelcomeText{\n      max-width: 200px;\n      margin: 0 auto 10px;\n      ",";\n      grid-row-start: span 2;\n    }\n    .ComingSoon{\n        line-height: 20px;\n        text-align: left;\n        color: ",";\n        font-size: 14px;\n        margin: 0 auto 15px;\n    }\n"]);return En=function(){return n},n}function zn(){var n=Pn(["\n        font-size: 14px;\n    "]);return zn=function(){return n},n}function jn(){var n=Pn(["\n    ",";\n    display: inline-block;\n    cursor: pointer;\n    text-align: center;\n    text-decoration: none;\n    padding: 10px;\n    border-radius: 4px;\n    font-size: 12px;\n    text-transform: uppercase;\n    vertical-align: middle;\n    color: ",";\n    background: ",";\n    border: 1px solid ",";\n\n    letter-spacing: 1px;\n    font-size: 12px;\n    ",";\n\n    &:hover,\n    &:focus{\n        color: ",";\n        background: ",";\n    }\n"]);return jn=function(){return n},n}function On(){var n=Pn(["\n        background: url( "," ) right top 200px no-repeat;\n        background-size: 300px;\n        padding-bottom: 200px;\n    "]);return On=function(){return n},n}function Nn(){var n=Pn(["\n    ",";\n    text-align: center;\n    background-size: 150px;\n    padding-bottom: 150px;\n    width: 100%;\n    min-height: calc(","px - 515px);\n    ",";\n"]);return Nn=function(){return n},n}function Pn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var _n=l.b.main.attrs({className:"ContentContainer"})(Nn(),G,window.outerHeight,s(On(),yn)),Cn=l.b.a(jn(),G,T.primary,S,T.primary,s(zn()),S,T.primary),Dn=l.b.article.attrs({className:"ContentBody"})(En(),s(kn(),T.background,S),s(wn()),M),In=function(){return a.a.createElement(_n,null,a.a.createElement(xn,null),a.a.createElement(Dn,null,a.a.createElement("img",{className:"WelcomeText",src:hn,alt:"Hello!"}),a.a.createElement("h2",{className:"ComingSoon"},"Thanks for stopping by! My name is Dinna Gonzales, a Frontend Developer from Los Angeles! As of 5.25.2020, I am commiting to #100DaysOfCode and all my progress will be documented here.",a.a.createElement("br",null)),a.a.createElement(Cn,{href:vn,target:"_blank"},"Download my resume")))},Sn=function(){return a.a.createElement(L,null,a.a.createElement("h1",{className:"hidden"},"Dinna Gonzales Portfolio"),a.a.createElement(z,null),a.a.createElement(In,null),a.a.createElement(Y,null))};o.a.render(a.a.createElement(Sn,null),document.getElementById("Body-Container")),console.log("PROD mode")}});