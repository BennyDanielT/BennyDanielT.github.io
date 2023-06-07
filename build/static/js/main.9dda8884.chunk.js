(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[12],{111:function(e,t,n){},125:function(e,t,n){},164:function(e,t,n){},167:function(e,t,n){var o={"./About":[113,0,2],"./About.jsx":[113,0,2],"./AppWrapper":[64],"./AppWrapper.jsx":[64],"./Blog":[114,0,3],"./Blog.jsx":[114,0,3],"./BlogPost":[115,0,4],"./BlogPost.jsx":[115,0,4],"./Computers":[62],"./Computers.jsx":[62],"./Education":[116,11,6],"./Education.jsx":[116,11,6],"./Experience":[117,0,1,7],"./Experience.jsx":[117,0,1,7],"./FallbackSpinner":[45],"./FallbackSpinner.jsx":[45],"./Header":[109,10],"./Header.jsx":[109,10],"./Home":[60],"./Home.jsx":[60],"./Loader":[63],"./Loader.jsx":[63],"./NavBar":[57],"./NavBar.jsx":[57],"./Projects":[118,0,5],"./Projects.jsx":[118,0,5],"./Skills":[119,0,9],"./Skills.jsx":[119,0,9],"./Social":[61],"./Social.jsx":[61],"./Splash":[65],"./Splash.jsx":[65],"./ThemeToggler":[79],"./ThemeToggler.jsx":[79],"./projects/ProjectCard":[112,0,8],"./projects/ProjectCard.jsx":[112,0,8]};function r(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(o)},r.id=167,e.exports=r},169:function(e,t,n){"use strict";n.r(t);var o=n(3),r=n.n(o),a=n(27),i=n.n(a),c=(n(125),n(111),n(126),n(48)),s=n(34),l=n(96),u=n(67),f=n(15),j=n(24),d=n(45),b=n(57),h=n(60),m=n(39),p=n(9);var g,x=function(){var e=Object(o.useState)(null),t=Object(f.a)(e,2),a=t[0],i=t[1];return Object(o.useEffect)((function(){fetch(m.a.routes,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return i(e)})).catch((function(e){return e}))}),[]),Object(p.jsxs)("div",{className:"MainApp",children:[Object(p.jsx)(b.default,{}),Object(p.jsx)("main",{className:"main",children:Object(p.jsx)(j.c,{children:Object(p.jsxs)(o.Suspense,{fallback:Object(p.jsx)(d.default,{}),children:[Object(p.jsx)(j.a,{exact:!0,path:"/",component:h.default}),a&&a.sections.map((function(e){var t=r.a.lazy((function(){return n(167)("./"+e.component)}));return Object(p.jsx)(j.a,{path:e.path,component:function(){return Object(p.jsx)(t,{header:e.headerTitle})}},e.headerTitle)}))]})})})]})},v=n(50),O=Object(s.c)(g||(g=Object(v.a)(["\n   body {\n     background: ",";\n     color: ",";\n     transition: all 0.50s linear; \n  }\n"])),(function(e){return e.theme.background}),(function(e){return e.theme.color})),k={background:"#fff",color:"#121212",accentColor:"#1260E7",chronoTheme:{cardBgColor:"white",cardForeColor:"black",titleColor:"white"},timelineLineColor:"#ccc",cardBackground:"#fff",cardFooterBackground:"#f7f7f7",cardBorderColor:"#00000020",navbarTheme:{linkColor:"#ffffff",linkHoverColor:"#0A59D1",linkActiveColor:"#D1D4DA"},bsPrimaryVariant:"light",bsSecondaryVariant:"dark",socialIconBgColor:"#121212"},C={background:"#050816",color:"#ffffff",accentColor:"#0d65e9",education_card:"#ffffff",chronoTheme:{cardBgColor:"#1B1B1B",cardForeColor:"#eee",titleColor:"black"},timelineLineColor:"#111",cardBackground:"#060606",cardFooterBackground:"#181818",cardBorderColor:"#ffffff20",navbarTheme:{linkColor:"#ffffff",linkHoverColor:"#0A59D1",linkActiveColor:"#D1D4DA"},bsPrimaryVariant:"dark",bsSecondaryVariant:"light",socialIconBgColor:"#D61212"};var y=function(){window.matchMedia=null;var e=Object(l.a)(!0);return Object(p.jsx)(u.a.Provider,{value:{darkMode:e},children:Object(p.jsxs)(s.b,{theme:e.value?C:k,children:[Object(p.jsx)(O,{}),Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(c.a,{children:Object(p.jsx)(x,{})})})]})})},S=function(e){e&&e instanceof Function&&n.e(15).then(n.bind(null,203)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),o(e),r(e),a(e),i(e)}))},w=n(64);i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(w.default,{children:Object(p.jsx)(y,{})})}),document.getElementById("root")),S()},39:function(e,t,n){"use strict";t.a={navbar:"profile/navbar.json",routes:"profile/routes.json",home:"profile/home.json",social:"profile/social.json",about:"profile/about.json",skills:"profile/skills.json",education:"profile/education.json",experiences:"profile/experiences.json",projects:"profile/projects.json"}},45:function(e,t,n){"use strict";n.r(t);n(3);var o=n(171),r=n(9),a={spinnerContainerStyle:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}};t.default=function(){return Object(r.jsx)("div",{style:a.spinnerContainerStyle,children:Object(r.jsx)(o.a,{animation:"grow"})})}},57:function(e,t,n){"use strict";n.r(t);var o,r,a=n(15),i=n(50),c=n(78),s=n(172),l=n(108),u=n(3),f=n(24),j=n(48),d=n(34),b=n(39),h=(n(79),n(93),n(9)),m={logoStyle:{width:100,height:400}},p=d.d.a(o||(o=Object(i.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor})),g=Object(d.d)(j.b)(r||(r=Object(i.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n  &.navbar__link--active {\n    color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor}),(function(e){return e.theme.navbarTheme.linkActiveColor})),x=Object(f.f)((function(){var e,t,n,o,r,i=Object(u.useContext)(d.a),f=Object(u.useState)(null),j=Object(a.a)(f,2),x=j[0],v=j[1],O=Object(u.useState)(!1),k=Object(a.a)(O,2),C=k[0],y=k[1];return Object(u.useEffect)((function(){fetch(b.a.navbar,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return v(e)})).catch((function(e){return e}))}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)("a",{href:"https://www.github.com/BennyDanielT",children:Object(h.jsx)("img",{src:null===x||void 0===x||null===(e=x.logo)||void 0===e?void 0:e.source,className:"brand-logo",alt:"main logo",style:null!==x&&void 0!==x&&null!==(t=x.logo)&&void 0!==t&&t.height&&null!==x&&void 0!==x&&null!==(n=x.logo)&&void 0!==n&&n.width?{height:160,width:200,borderRadius:null===x||void 0===x||null===(o=x.logo)||void 0===o?void 0:o.borderRadius,position:"absolute",left:"2%",top:"-1%"}:m.logoStyle})}),Object(h.jsx)(c.a,{fixed:"top",expand:"md",bg:" ",variant:"light",className:"navbar-custom",expanded:C,style:{right:"-12%",top:"2%"},children:Object(h.jsxs)(s.a,{children:[(null===x||void 0===x?void 0:x.logo)&&Object(h.jsx)(c.a.Brand,{href:"https://github.com/BennyDanielT"}),Object(h.jsx)(c.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return y(!C)}}),Object(h.jsxs)(c.a.Collapse,{id:"responsive-navbar-nav",children:[Object(h.jsx)(l.a,{className:"me-auto"}),Object(h.jsx)(l.a,{children:x&&(null===(r=x.sections)||void 0===r?void 0:r.map((function(e,t){return"link"===(null===e||void 0===e?void 0:e.type)?Object(h.jsx)(p,{href:e.href,target:"_blank",rel:"noopener noreferrer",onClick:function(){return y(!1)},className:"navbar__link",theme:i,children:e.title},e.title):Object(h.jsx)(g,{onClick:function(){return y(!1)},exact:0===t,activeClassName:"navbar__link--active",className:"navbar__link",to:e.href,theme:i,children:e.title},e.title)})))})]})]})})]})}));t.default=x},60:function(e,t,n){"use strict";n.r(t);var o=n(13),r=n(4),a=n(8),i=n(15),c=n(3),s=n(103),l=n.n(s),u=n(87),f=n.n(u),j=n(39),d=n(61),b=n(45),h=n(62),m=(n(170),n(168),n(9));function p(){new Audio("/music/lofi.mp3").play()}var g={nameStyle:{fontSize:"4.25em",paddingBottom:"2.5%",color:"#59cbe8",width:"100%"},inlineChild:{display:"inline-block",paddingBottom:"5.5%",color:"#fff "},mainContainer:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundRepeat:"repeat-y",backgroundPosition:"left top, right top"},imageContainer:{display:"flex",flexDirection:"column",paddingRight:"5%",position:"absolute",top:"50%",right:"0",transform:"translateY(-50%)","@media (max-width: 768px)":{position:"relative",top:"auto",right:"auto",transform:"none",marginTop:"20px",alignSelf:"center"}},badge:{width:"120px",height:"120px",margin:"30px 10px"}};t.default=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],s=t[1],u=Object(c.useState)(!1),x=Object(i.a)(u,2),v=x[0],O=x[1],k=Object(c.useCallback)((function(){O(!0)}),[]);return Object(c.useEffect)((function(){function e(){return(e=Object(a.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({audio:!0});case 3:t=e.sent,console.log("Audio permission granted:",t),p(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Audio permission denied:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),fetch(j.a.home,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return s(e)})).catch((function(e){return e}))}),[]),Object(m.jsx)(f.a,{children:Object(m.jsx)("div",{className:"section-content-container",children:Object(m.jsxs)("div",{style:g.mainContainer,children:[n?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{style:Object(o.a)({},g.nameStyle),children:n.name}),Object(m.jsx)("style",{children:"\n              @keyframes pulse {\n                0% {\n                  transform: scale(1);\n                }\n                50% {\n                  transform: scale(1.5);\n                }\n                100% {\n                  transform: scale(1);\n                }\n              }\n\n              @keyframes slide-in {\n                from {\n                  transform: translateX(-100%);\n                  opacity: 0;\n                }\n                to {\n                  transform: translateX(0%);\n                  opacity: 1;\n                }\n              }\n            "}),Object(m.jsxs)("div",{style:g.inlineChild,children:[Object(m.jsx)("h2",{style:g.inlineChild,children:" "}),Object(m.jsx)(l.a,{options:{loop:!0,autoStart:!0,strings:null===n||void 0===n?void 0:n.roles}})]}),Object(m.jsx)(h.default,{}),Object(m.jsx)(d.default,{})]}):Object(m.jsx)(b.default,{}),Object(m.jsxs)("div",{style:g.imageContainer,children:[Object(m.jsx)("img",{src:"/images/home/aws-certified-cloud-practitioner.png",style:Object(o.a)(Object(o.a)({},g.badge),{},{animation:"".concat(v?"pulse 1.5s ease-out infinite":"")}),onLoad:k,alt:"AWS Certified Cloud Practitioner"}),Object(m.jsx)("img",{src:"/images/home/aws-certified-solutions-architect-associate.png",style:Object(o.a)(Object(o.a)({},g.badge),{},{animation:"".concat(v?"pulse 1.5s ease-out infinite":"")}),onLoad:k,alt:"AWS Certified Solutions Architect Associate"}),Object(m.jsx)("img",{src:"/images/home/hashicorp-certified-terraform-associate-002.png",style:Object(o.a)(Object(o.a)({},g.badge),{},{animation:"".concat(v?"pulse 1.5s ease-out infinite":"")}),onLoad:k,alt:"HashiCorp Certified Terraform Associate"})]})]})})})}},61:function(e,t,n){"use strict";n.r(t);var o=n(15),r=n(3),a=n(104),i=n(34),c=n(39),s=(n(164),n(9)),l={iconStyle:{marginLeft:15,marginRight:15,marginBottom:40}};t.default=function(){Object(r.useContext)(i.a);var e=Object(r.useState)(null),t=Object(o.a)(e,2),n=t[0],u=t[1];return Object(r.useEffect)((function(){fetch(c.a.social,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return u(e)})).catch((function(e){return e}))}),[]),Object(s.jsx)("div",{className:"social",children:n?n.social.map((function(e){return Object(s.jsx)(a.SocialIcon,{style:l.iconStyle,url:e.href,network:e.network,bgColor:e.socialIconBgColor,target:"_blank",rel:"noopener"},e.network)})):null})}},62:function(e,t,n){"use strict";n.r(t);var o=n(15),r=n(3),a=n(21),i=n(176),c=n(177),s=n(175),l=n(63),u=n(9),f=function(e){var t=e.isMobile,n=Object(i.a)("./cube_bright/scene.gltf"),a=Object(r.useState)([90,0,90]),c=Object(o.a)(a,2),s=c[0],l=c[1];return Object(r.useEffect)((function(){var e=setInterval((function(){l([s[0],s[1]+.017,s[2]])}),10);return function(){return clearInterval(e)}}),[s]),Object(u.jsxs)("mesh",{children:[Object(u.jsx)("hemisphereLight",{intensity:.5,groundColor:"black"}),Object(u.jsx)("spotLight",{position:[0,35,0],angle:.18,penumbra:1,intensity:9,castShadow:!0,"shadow-mapSize":4096}),Object(u.jsx)("pointLight",{intensity:5}),Object(u.jsx)("primitive",{object:n.scene,scale:t?.036:.5,position:t?[0,0,0]:[0,-3.25,-1.5],rotation:s,onPointerDown:function(e){e.stopPropagation()},onPointerMove:function(e){if(e.stopPropagation(),1===e.buttons){var t=e.movementX,n=e.movementY;l([s[0]-.01*n,s[1]-.01*t,s[2]])}}})]})};t.default=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2);t[0],t[1];return Object(u.jsxs)(a.a,{frameloop:"demand",shadows:!0,dpr:[1.5,2],camera:{position:[10,0,-10],fov:60},gl:{preserveDrawingBuffer:!0},children:[Object(u.jsxs)(r.Suspense,{fallback:Object(u.jsx)(l.default,{}),children:[Object(u.jsx)(c.a,{enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),Object(u.jsx)(f,{isMobile:!0})]}),Object(u.jsx)(s.a,{all:!0})]})}},63:function(e,t,n){"use strict";n.r(t);var o=n(173),r=n(174),a=n(9);t.default=function(){var e=Object(o.a)().progress;return Object(a.jsxs)(r.a,{as:"div",center:!0,style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[Object(a.jsx)("span",{}),Object(a.jsxs)("p",{style:{fontSize:14,color:"#F1F1F1",fontWeight:800,marginTop:40},children:[e.toFixed(2),"%"]})]})}},64:function(e,t,n){"use strict";n.r(t);var o=n(15),r=n(3),a=n.n(r),i=n(65),c=n(9);t.default=function(e){var t=e.children,n=a.a.useState(!0),r=Object(o.a)(n,2),s=r[0],l=r[1];return a.a.useEffect((function(){var e=setTimeout((function(){l(!1)}),3500);return function(){return clearTimeout(e)}}),[]),Object(c.jsx)(c.Fragment,{children:s?Object(c.jsx)(i.default,{}):Object(c.jsx)("div",{children:t})})}},65:function(e,t,n){"use strict";n.r(t);var o=n(15),r=n(3),a=n.n(r),i=(n(93),n(9));t.default=function(){var e=a.a.useState(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],c=a.a.useState(!1),s=Object(o.a)(c,2),l=(s[0],s[1]);return a.a.useEffect((function(){n&&l(!0)}),[n]),Object(i.jsxs)("div",{style:{display:"flex",backgroundImage:'url("images/home/star.jpg")',flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",backgroundPosition:"center",backgroundSize:"cover"},children:[Object(i.jsx)("img",{src:"/images/home/tech_knight_danny.png",alt:"Logo",style:{width:"350px",animation:"".concat(n?"pulse 1.5s ease-out infinite":"")},onLoad:function(){r(!0)}}),Object(i.jsx)("style",{children:"\n        @keyframes pulse {\n          0% {\n            transform: scale(1);\n          }\n          50% {\n            transform: scale(1.5);\n          }\n          100% {\n            transform: scale(1);\n          }\n        }\n\n        @keyframes slide-in {\n          from {\n            transform: translateX(-100%);\n            opacity: 0;\n          }\n          to {\n            transform: translateX(0%);\n            opacity: 1;\n          }\n        }\n      "})]})}},67:function(e,t,n){"use strict";var o=n(3),r=n.n(o).a.createContext();t.a=r},79:function(e,t,n){"use strict";n.r(t);n(3);var o=n(98),r=n.n(o),a=n(67),i=n(9);function c(e){var t=e.onClick;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(a.a.Consumer,{children:function(e){return Object(i.jsx)("div",{style:{marginBottom:2},children:Object(i.jsx)(r.a,{onChange:function(){return e.darkMode.toggle(),void t()},checked:e.darkMode.value,size:50})})}})})}c.defaultProps={onClick:function(){}},t.default=c},93:function(e,t,n){}},[[169,13,14]]]);
//# sourceMappingURL=main.9dda8884.chunk.js.map