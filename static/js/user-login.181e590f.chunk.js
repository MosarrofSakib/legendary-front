(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[84],{1177:function(e,n,t){"use strict";t.r(n);var a=t(12),s=t(92),r=t(4),c=t.n(r),u=t(8),i=t(310),d=t(103),o=t(121),l=t(210),m=t(266),b=t(159),j=t(267),f=t(93),h=t(34),p=t(232),O=t(409),x=t(94),g=t(91),v=t(132),w=t(423),N=t(21),y=function(e){var n;return e?e.length<4&&(n="Value must be longer than 3 characters"):n="Please enter your password",n},k=function(e){var n;return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(n="Invalid email address"):n="Please enter your email address",n};n.default=Object(h.b)((function(e){var n=e.authUser;return{loading:n.loading,error:n.error}}),{loginUserAction:v.x})((function(e){e.history;var n=e.loading,t=e.error,r=(e.loginUserAction,e.setUserLoggued),h=Object(u.useState)("test@legendary.com"),v=Object(s.a)(h,2),C=v[0],E=v[1],S=Object(u.useState)("TestPassword"),A=Object(s.a)(S,2),T=A[0],V=A[1];Object(u.useEffect)((function(){t&&O.b.warning(t,"Login Error",3e3,null,null,"")}),[t]);var R=function(){var e=Object(a.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=6;break}if(""===t.email||""===t.password){e.next=6;break}return e.next=4,Object(w.a)(C,T);case 4:(a=e.sent).token&&(document.cookie="lgLegendary=".concat(a.token),r(!0));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),P={email:C,password:T};return Object(N.jsx)(i.a,{className:"h-100",children:Object(N.jsx)(x.a,{xxs:"12",md:"10",c:!0,lassName:"mx-auto my-auto",children:Object(N.jsxs)(d.a,{className:"auth-card",children:[Object(N.jsxs)("div",{className:"position-relative image-side ",children:[Object(N.jsx)("p",{className:"text-white h2",children:"LEGENDARY THE BEST EVENTS"}),Object(N.jsxs)("p",{className:"white mb-0",children:["Please use your credentials to login.",Object(N.jsx)("br",{})]})]}),Object(N.jsxs)("div",{className:"form-side",children:[Object(N.jsx)(o.a,{className:"mb-4",children:Object(N.jsx)(g.a,{id:"user.login-title"})}),Object(N.jsx)(p.c,{initialValues:P,onSubmit:R,children:function(e){var t=e.errors,a=e.touched;return Object(N.jsxs)(p.b,{className:"av-tooltip tooltip-label-bottom",children:[Object(N.jsxs)(l.a,{className:"form-group has-float-label",children:[Object(N.jsx)(m.a,{children:Object(N.jsx)(g.a,{id:"user.email"})}),Object(N.jsx)(b.a,{className:"form-control",name:"email",defaultValue:C,validate:k,onChange:function(e){var n=e.target;return E(n.value)}}),t.email&&a.email&&Object(N.jsx)("div",{className:"invalid-feedback d-block",children:t.email})]}),Object(N.jsxs)(l.a,{className:"form-group has-float-label",children:[Object(N.jsx)(m.a,{children:Object(N.jsx)(g.a,{id:"user.password"})}),Object(N.jsx)(b.a,{className:"form-control",type:"password",defaultValue:T,name:"password",validate:y,onChange:function(e){var n=e.target;return V(n.value)}}),t.password&&a.password&&Object(N.jsx)("div",{className:"invalid-feedback d-block",children:t.password})]}),Object(N.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(N.jsx)(f.b,{to:"/user/forgot-password",children:Object(N.jsx)(g.a,{id:"user.forgot-password-question"})}),Object(N.jsxs)(j.a,{color:"primary",className:"btn-shadow btn-multiple-state ".concat(n?"show-spinner":""),size:"lg",children:[Object(N.jsxs)("span",{className:"spinner d-inline-block",children:[Object(N.jsx)("span",{className:"bounce1"}),Object(N.jsx)("span",{className:"bounce2"}),Object(N.jsx)("span",{className:"bounce3"})]}),Object(N.jsx)("span",{className:"label",children:Object(N.jsx)(g.a,{id:"user.login-button"})})]})]})]})}})]})]})})})}))},132:function(e,n,t){"use strict";t.d(n,"F",(function(){return i})),t.d(n,"a",(function(){return c})),t.d(n,"f",(function(){return r})),t.d(n,"h",(function(){return s})),t.d(n,"i",(function(){return u})),t.d(n,"g",(function(){return o})),t.d(n,"A",(function(){return l.k})),t.d(n,"l",(function(){return l.a})),t.d(n,"y",(function(){return l.g})),t.d(n,"x",(function(){return l.d})),t.d(n,"z",(function(){return l.h})),t.d(n,"d",(function(){return m.a})),t.d(n,"t",(function(){return m.d})),t.d(n,"u",(function(){return m.f})),t.d(n,"v",(function(){return m.h})),t.d(n,"w",(function(){return m.i})),t.d(n,"E",(function(){return m.j})),t.d(n,"b",(function(){return b.a})),t.d(n,"e",(function(){return b.b})),t.d(n,"j",(function(){return b.c})),t.d(n,"m",(function(){return b.d})),t.d(n,"n",(function(){return b.g})),t.d(n,"C",(function(){return b.j})),t.d(n,"c",(function(){return j.a})),t.d(n,"p",(function(){return j.d})),t.d(n,"q",(function(){return j.f})),t.d(n,"r",(function(){return j.h})),t.d(n,"s",(function(){return j.i})),t.d(n,"D",(function(){return j.j})),t.d(n,"B",(function(){return f.e})),t.d(n,"o",(function(){return f.b})),t.d(n,"k",(function(){return f.a}));var a=t(2),s=function(e){return{type:a.t,payload:e}},r=function(e){return{type:a.s,payload:e}},c=function(e,n){var t=!n.indexOf(e)>-1?"".concat(n," ").concat(e):n;return{type:a.v,payload:t}},u=function(e){var n=e?e.split(" ").filter((function(e){return""!==e&&"sub-show-temporary"!==e})):"",t="";return t=n.includes("main-show-temporary")?n.filter((function(e){return"main-show-temporary"!==e})).join(" "):"".concat(n.join(" ")," main-show-temporary"),{type:a.u,payload:{containerClassnames:t,menuClickCount:0}}},i=function(e,n,t){var s=n?n.split(" ").filter((function(e){return""!==e})):"",r="";return t||(!s.includes("menu-default")||e%4!==0&&e%4!==3||(e=1),s.includes("menu-sub-hidden")&&e%4===2&&(e=0),!s.includes("menu-hidden")||e%4!==2&&e%4!==3||(e=0)),e%4===0?(s.includes("menu-default")&&s.includes("menu-sub-hidden")?r="menu-default menu-sub-hidden":s.includes("menu-default")?r="menu-default":s.includes("menu-sub-hidden")?r="menu-sub-hidden":s.includes("menu-hidden")&&(r="menu-hidden"),e=0):e%4===1?s.includes("menu-default")&&s.includes("menu-sub-hidden")?r="menu-default menu-sub-hidden main-hidden sub-hidden":s.includes("menu-default")?r="menu-default sub-hidden":s.includes("menu-sub-hidden")?r="menu-sub-hidden main-hidden sub-hidden":s.includes("menu-hidden")&&(r="menu-hidden main-show-temporary"):e%4===2?s.includes("menu-default")&&s.includes("menu-sub-hidden")?r="menu-default menu-sub-hidden sub-hidden":s.includes("menu-default")?r="menu-default main-hidden sub-hidden":s.includes("menu-sub-hidden")?r="menu-sub-hidden sub-hidden":s.includes("menu-hidden")&&(r="menu-hidden main-show-temporary sub-show-temporary"):e%4===3&&(s.includes("menu-default")&&s.includes("menu-sub-hidden")?r="menu-default menu-sub-hidden sub-show-temporary":s.includes("menu-default")?r="menu-default sub-hidden":s.includes("menu-sub-hidden")?r="menu-sub-hidden sub-show-temporary":s.includes("menu-hidden")&&(r="menu-hidden main-show-temporary")),s.includes("menu-mobile")&&(r+=" menu-mobile"),{type:a.w,payload:{containerClassnames:r,menuClickCount:e}}},d=t(13),o=function(e){return Object(d.h)(e),{type:a.a,payload:e}},l=t(15),m=t(23),b=t(18),j=t(24),f=t(25)},309:function(e,n,t){"use strict";n.a="54.183.246.192:9000"},423:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return m}));var a=t(12),s=t(4),r=t.n(s),c=t(237),u=t.n(c),i=t(309),d="http://".concat(i.a,"/api/v1/users");function o(e,n){return l.apply(this,arguments)}function l(){return(l=Object(a.a)(r.a.mark((function e(n,t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u()({method:"POST",url:"".concat(d,"/login"),auth:{username:n,password:t}});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("ERROR OF CONNECTION BACK =>",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function m(e,n){return b.apply(this,arguments)}function b(){return(b=Object(a.a)(r.a.mark((function e(n,t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u()({method:"POST",url:"".concat(d,"/register"),data:{email:n,password:t}});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("ERROR OF CONNECTION BACK =>",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},841:function(e,n,t){"use strict";t.r(n);var a=t(12),s=t(92),r=t(4),c=t.n(r),u=t(8),i=t(310),d=t(103),o=t(121),l=t(238),m=t(210),b=t(266),j=t(159),f=t(267),h=t(93),p=t(34),O=t(132),x=t(91),g=t(94),v=t(423),w=t(21);n.default=Object(p.b)((function(){}),{registerUserAction:O.z})((function(e){e.history;var n=Object(u.useState)("demo@testemail.com"),t=Object(s.a)(n,1)[0],r=Object(u.useState)("test123"),p=Object(s.a)(r,1)[0],O=Object(u.useState)("Sarah Kortney"),N=Object(s.a)(O,1)[0],y=function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t||""===p){e.next=3;break}return e.next=3,Object(v.b)(t,p);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsx)(i.a,{className:"h-100",children:Object(w.jsx)(g.a,{xxs:"12",md:"10",className:"mx-auto my-auto",children:Object(w.jsxs)(d.a,{className:"auth-card",children:[Object(w.jsxs)("div",{className:"position-relative image-side ",children:[Object(w.jsx)("p",{className:"text-white h2",children:"BEST EVENTS"}),Object(w.jsxs)("p",{className:"white mb-0",children:["Please use this form to register. ",Object(w.jsx)("br",{}),"If you are a member, please"," ",Object(w.jsx)(h.b,{to:"/user/login",className:"white",children:"login"}),"."]})]}),Object(w.jsxs)("div",{className:"form-side",children:[Object(w.jsx)(h.b,{to:"/",className:"white",children:Object(w.jsx)("span",{className:"logo-single"})}),Object(w.jsx)(o.a,{className:"mb-4",children:Object(w.jsx)(x.a,{id:"user.register"})}),Object(w.jsxs)(l.a,{children:[Object(w.jsxs)(m.a,{className:"form-group has-float-label  mb-4",children:[Object(w.jsx)(b.a,{children:Object(w.jsx)(x.a,{id:"user.fullname"})}),Object(w.jsx)(j.a,{type:"name",defaultValue:N})]}),Object(w.jsxs)(m.a,{className:"form-group has-float-label  mb-4",children:[Object(w.jsx)(b.a,{children:Object(w.jsx)(x.a,{id:"user.email"})}),Object(w.jsx)(j.a,{type:"email",defaultValue:t})]}),Object(w.jsxs)(m.a,{className:"form-group has-float-label  mb-4",children:[Object(w.jsx)(b.a,{children:Object(w.jsx)(x.a,{id:"user.password",defaultValue:p})}),Object(w.jsx)(j.a,{type:"password"})]}),Object(w.jsx)("div",{className:"d-flex justify-content-end align-items-center",children:Object(w.jsx)(f.a,{color:"primary",className:"btn-shadow",size:"lg",onClick:function(){return y()},children:Object(w.jsx)(x.a,{id:"user.register-button"})})})]})]})]})})})}))},91:function(e,n,t){"use strict";var a=t(1),s=(t(8),t(468)),r=t(304),c=t(21);n.a=Object(r.c)((function(e){return Object(c.jsx)(s.a,Object(a.a)({},e))}),{withRef:!1})},94:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return u}));var a=t(1),s=(t(8),t(308)),r=t(21),c=function(e){return Object(r.jsx)(s.a,Object(a.a)(Object(a.a)({},e),{},{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},u=function(e){var n=e.className;return Object(r.jsx)("div",{className:"separator ".concat(n)})}}}]);
//# sourceMappingURL=user-login.181e590f.chunk.js.map