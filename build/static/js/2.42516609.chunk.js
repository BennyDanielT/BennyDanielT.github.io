(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[2,10],{109:function(t,e,a){"use strict";a.r(e);a(3),a(111);var c=a(9);e.default=function(t){var e=t.title;return Object(c.jsx)("div",{className:"header",children:e})}},113:function(t,e,a){"use strict";a.r(e);var c=a(15),n=a(3),s=a(204),o=a(172),r=a(183),i=a(182),l=a(87),j=a.n(l),u=a(109),f=a(39),b=a(45),p=(a(180),a(9)),d={introTextContainer:{margin:10,flexDirection:"column",whiteSpace:"pre-wrap",textAlign:"justify",fontSize:"1.2em",fontWeight:500},introImageContainer:{marginTop:"-120px",margin:10,justifyContent:"center",alignItems:"center",display:"flex",position:"relative"}};e.default=function(t){t.header;var e,a=Object(n.useState)(null),l=Object(c.a)(a,2),O=l[0],h=l[1];return Object(n.useEffect)((function(){fetch(f.a.about,{method:"GET"}).then((function(t){return t.json()})).then((function(t){return h(t)})).catch((function(t){return t}))}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(u.default,{title:"Who am I ?"}),Object(p.jsx)("div",{className:"section-content-container",children:Object(p.jsx)(o.a,{children:O?Object(p.jsx)(j.a,{children:Object(p.jsxs)(r.a,{children:[Object(p.jsx)(i.a,{style:d.introTextContainer,children:(e=O.about,Object(p.jsx)(s.a,{children:e}))}),Object(p.jsx)(i.a,{style:d.introImageContainer,children:Object(p.jsx)("img",{id:"about",className:"rotate-image",src:"/images/about/Danny.jpg",alt:"profile",style:{position:"relative",borderRadius:"40%",marginTop:"40px"}})})]})}):Object(p.jsx)(b.default,{})})})]})}},180:function(t,e,a){},182:function(t,e,a){"use strict";var c=a(15),n=a(13),s=a(17),o=a(19),r=a.n(o),i=a(3),l=a(22),j=a(9),u=["as","bsPrefix","className"],f=["className"];var b=i.forwardRef((function(t,e){var a=function(t){var e=t.as,a=t.bsPrefix,c=t.className,o=Object(s.a)(t,u);a=Object(l.c)(a,"col");var i=Object(l.a)(),j=Object(l.b)(),f=[],b=[];return i.forEach((function(t){var e,c,n,s=o[t];delete o[t],"object"===typeof s&&null!=s?(e=s.span,c=s.offset,n=s.order):e=s;var r=t!==j?"-".concat(t):"";e&&f.push(!0===e?"".concat(a).concat(r):"".concat(a).concat(r,"-").concat(e)),null!=n&&b.push("order".concat(r,"-").concat(n)),null!=c&&b.push("offset".concat(r,"-").concat(c))})),[Object(n.a)(Object(n.a)({},o),{},{className:r.a.apply(void 0,[c].concat(f,b))}),{as:e,bsPrefix:a,spans:f}]}(t),o=Object(c.a)(a,2),i=o[0],b=i.className,p=Object(s.a)(i,f),d=o[1],O=d.as,h=void 0===O?"div":O,m=d.bsPrefix,x=d.spans;return Object(j.jsx)(h,Object(n.a)(Object(n.a)({},p),{},{ref:e,className:r()(b,!x.length&&m)}))}));b.displayName="Col",e.a=b},183:function(t,e,a){"use strict";var c=a(13),n=a(17),s=a(19),o=a.n(s),r=a(3),i=a(22),l=a(9),j=["bsPrefix","className","as"],u=r.forwardRef((function(t,e){var a=t.bsPrefix,s=t.className,r=t.as,u=void 0===r?"div":r,f=Object(n.a)(t,j),b=Object(i.c)(a,"row"),p=Object(i.a)(),d=Object(i.b)(),O="".concat(b,"-cols"),h=[];return p.forEach((function(t){var e,a=f[t];delete f[t],e=null!=a&&"object"===typeof a?a.cols:a;var c=t!==d?"-".concat(t):"";null!=e&&h.push("".concat(O).concat(c,"-").concat(e))})),Object(l.jsx)(u,Object(c.a)(Object(c.a)({ref:e},f),{},{className:o.a.apply(void 0,[s,b].concat(h))}))}));u.displayName="Row",e.a=u}}]);
//# sourceMappingURL=2.42516609.chunk.js.map