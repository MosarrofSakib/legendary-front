(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[60],{104:function(e,n,t){"use strict";var a=t(14),s=t(17),c=t(8),i=t.n(c),r=t(67),u=t.n(r),l=t(88),o=t.n(l),d=t(89),m=["className","listClassName","cssModule","children","tag","listTag","aria-label"],b={tag:d.tagPropType,listTag:d.tagPropType,className:u.a.string,listClassName:u.a.string,cssModule:u.a.object,children:u.a.node,"aria-label":u.a.string},j=function(e){var n=e.className,t=e.listClassName,c=e.cssModule,r=e.children,u=e.tag,l=e.listTag,b=e["aria-label"],j=Object(s.a)(e,m),h=Object(d.mapToCssModules)(o()(n),c),p=Object(d.mapToCssModules)(o()("breadcrumb",t),c);return i.a.createElement(u,Object(a.a)({},j,{className:h,"aria-label":b}),i.a.createElement(l,{className:p},r))};j.propTypes=b,j.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},n.a=j},105:function(e,n,t){"use strict";var a=t(14),s=t(17),c=t(8),i=t.n(c),r=t(67),u=t.n(r),l=t(88),o=t.n(l),d=t(89),m=["className","cssModule","active","tag"],b={tag:d.tagPropType,active:u.a.bool,className:u.a.string,cssModule:u.a.object},j=function(e){var n=e.className,t=e.cssModule,c=e.active,r=e.tag,u=Object(s.a)(e,m),l=Object(d.mapToCssModules)(o()(n,!!c&&"active","breadcrumb-item"),t);return i.a.createElement(r,Object(a.a)({},u,{className:l,"aria-current":c?"page":void 0}))};j.propTypes=b,j.defaultProps={tag:"li"},n.a=j},874:function(e,n,t){"use strict";t.r(n);t(8);var a=t(34),s=t(310),c=t(267),i=t(94),r=t(95),u=t(91),l=t(132),o=t(21);n.default=Object(a.b)((function(e){var n=e.menu;return{containerClassnames:n.containerClassnames,subHiddenBreakpoint:n.subHiddenBreakpoint,menuHiddenBreakpoint:n.menuHiddenBreakpoint,menuClickCount:n.menuClickCount,selectedMenuHasSubItems:n.selectedMenuHasSubItems}}),{setContainerClassnamesAction:l.F})((function(e){var n=e.match,t=e.subHiddenBreakpoint,a=e.menuHiddenBreakpoint,l=e.selectedMenuHasSubItems,d=e.setContainerClassnamesAction,m=function(e,n){e.preventDefault();var s=function(e){var n=e.split(" ").filter((function(e){return""!==e})),s=window.innerWidth;return s<a?n.push("menu-mobile"):s<t?(n=n.filter((function(e){return"menu-mobile"!==e}))).includes("menu-default")&&!n.includes("menu-sub-hidden")&&n.push("menu-sub-hidden"):(n=n.filter((function(e){return"menu-mobile"!==e}))).includes("menu-default")&&n.includes("menu-sub-hidden")&&(n=n.filter((function(e){return"menu-sub-hidden"!==e}))),n}(n);d(0,s.join(" "),l)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(s.a,{children:Object(o.jsxs)(i.a,{xxs:"12",children:[Object(o.jsx)(r.a,{heading:"menu.types",match:n}),Object(o.jsx)(i.b,{className:"mb-5"})]})}),Object(o.jsx)(s.a,{children:Object(o.jsxs)(i.a,{xxs:"12",className:"mb-4",children:[Object(o.jsx)(c.a,{outline:!0,color:"primary",className:"mb-2",onClick:function(e){return m(e,"menu-default")},children:Object(o.jsx)(u.a,{id:"menu.default"})})," ",Object(o.jsx)(c.a,{outline:!0,color:"primary",className:"mb-2",onClick:function(e){return m(e,"menu-sub-hidden")},children:Object(o.jsx)(u.a,{id:"menu.subhidden"})})," ",Object(o.jsx)(c.a,{outline:!0,color:"primary",className:"mb-2",onClick:function(e){return m(e,"menu-hidden")},children:Object(o.jsx)(u.a,{id:"menu.hidden"})})]})})]})}))},95:function(e,n,t){"use strict";t(8);var a=t(104),s=t(105),c=t(93),i=t(91),r=t(10),u=t(21),l=function(e){return"/".concat(e)===r.b?Object(u.jsx)(i.a,{id:"menu.home"}):Object(u.jsx)(i.a,{id:"".concat(e)})},o=function(e,n){return e.split(n)[0]+n},d=function(e){var n=e.match.path.substr(1),t=n.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter((function(e){return-1===e.indexOf(":")}))),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(a.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block",children:t.map((function(e,a){return Object(u.jsx)(s.a,{active:t.length===a+1,children:t.length!==a+1?Object(u.jsx)(c.b,{to:"/".concat(o(n,e)),children:l(e)}):l(e)},a)}))})})};n.a=function(e){var n=e.heading,t=e.match;return Object(u.jsxs)(u.Fragment,{children:[n&&Object(u.jsx)("h1",{children:Object(u.jsx)(i.a,{id:n})}),Object(u.jsx)(d,{match:t})]})}}}]);
//# sourceMappingURL=menu-types.a60b2fac.chunk.js.map