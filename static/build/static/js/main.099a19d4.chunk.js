(this["webpackJsonpreact-code"]=this["webpackJsonpreact-code"]||[]).push([[0],{121:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(0),c=a.n(r),o=a(12),i=a.n(o),s=(a(121),a(23)),l=a(186),j=a(152),b=a(45),d=a(2),m=a(99),p=a(5),u=a(103),h=a(184),x={overrides:{h1:{component:u.a,props:{gutterBottom:!0,variant:"h5",align:"center"}},h2:{component:u.a,props:{gutterBottom:!0,variant:"h6"}},h3:{component:u.a,props:{gutterBottom:!0,variant:"subtitle1"}},h4:{component:u.a,props:{gutterBottom:!0,variant:"caption",paragraph:!0,color:"secondary",align:"center"}},p:{component:u.a,props:{paragraph:!0,align:"center"}},a:{component:h.a,props:{color:"secondary"}},li:{component:Object(p.a)((function(e){return{listItem:{marginTop:e.spacing(1)}}}))((function(e){var t=e.classes,a=Object(d.a)(e,["classes"]);return Object(n.jsx)("li",{className:t.listItem,children:Object(n.jsx)(u.a,Object(b.a)({component:"span"},a))})}))}}};function O(e){return Object(n.jsx)(m.a,Object(b.a)({options:x},e))}var g=a.p+"static/media/motd.cb560fb7.md",f=a(185),v=Object(f.a)((function(e){return{root:{flexGrow:1},markdown:{padding:e.spacing(2)}}}));var y=[{path:"/",name:"Home",private:!1,component:function(){var e=v(),t=Object(r.useState)("loading..."),a=Object(s.a)(t,2),c=a[0],o=a[1];return Object(r.useEffect)((function(){fetch(g).then((function(e){return e.text()})).then((function(e){return o(e)})).catch((function(e){return console.error(e)}))})),Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(l.a,{container:!0,spacing:3,children:Object(n.jsx)(l.a,{item:!0,xs:12,children:Object(n.jsx)(j.a,{children:Object(n.jsx)(O,{className:e.markdown,children:c})})})})})}}],w=a(50),N=a(13),F=a(10),T=a(189),C=a(190),k=a(101),S=a.n(k),B=a(197),I=a(191),P=S()((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(F.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),tabs:{margin:"auto"}}})),W=function(e){e.route;var t=P(),a=c.a.useState(0),r=Object(s.a)(a,2),o=r[0],i=r[1];return Object(n.jsx)("nav",{className:"breadcrumbs",children:Object(n.jsx)(T.a,{position:"static",children:Object(n.jsxs)(C.a,{className:t.grow,children:[Object(n.jsx)(u.a,{className:t.title,variant:"h6",noWrap:!0,children:"TheraArt-2020"}),Object(n.jsxs)(B.a,{value:o,onChange:function(e,t){i(t)},"aria-label":"simple tabs example",centered:!0,className:t.tabs,children:[y.map((function(e){return Object(n.jsx)(I.a,{label:"undefined"!==typeof e.name?e.name:"add a name!",href:e.path})})),Object(n.jsx)(I.a,{label:"Item Two"}),Object(n.jsx)(I.a,{label:"Item Three"})]})]})})})},D=a(199),A=a(192),E=Object(f.a)((function(e){return{container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},content:{flexGrow:1,height:"100vh",overflow:"auto",background:e.palette.background.default}}}));function G(){return Object(n.jsxs)(u.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(n.jsx)(h.a,{color:"inherit",href:"/",children:"TheraArt"})," ",(new Date).getFullYear(),"."]})}var q=function(e){var t=e.route,a=t.component,r=Object(N.g)(),c=E();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(W,{route:t}),Object(n.jsx)("main",{className:c.content,children:Object(n.jsxs)(A.a,{maxWidth:"xl",className:c.container,children:[Object(n.jsx)(a,{params:r}),Object(n.jsx)(D.a,{pt:4,children:Object(n.jsx)(G,{})})]})})]})},J=a(188),L=a(102),R=Object(L.a)({palette:{primary:{main:"#212121",contrastText:"#fff"},secondary:{main:"#f44336"},background:{default:"#F5F5F6"}},typography:{button:{fontSize:18,textTransform:"none"}}}),Y=Object(r.createContext)();var z=function(e){var t=e.children,a=e.isPrivate,c=Object(d.a)(e,["children","isPrivate"]);return Object(r.useContext)(Y)&&a?Object(n.jsx)(N.a,{to:"/login"}):Object(n.jsx)(N.b,Object(b.a)(Object(b.a)({exact:!0},c),{},{children:t}))},H=a(195),M=a(193),U=a(196),V=a(194),K=a(198);function Q(){return Object(n.jsxs)(u.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(n.jsx)(h.a,{color:"inherit",href:"/",children:"AppName"})," ",(new Date).getFullYear(),"."]})}var X=Object(f.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function Z(){var e=X();return console.log("rendering"),Object(n.jsxs)(A.a,{component:"main",maxWidth:"xs",children:[Object(n.jsx)(M.a,{}),Object(n.jsxs)("div",{className:e.paper,children:[Object(n.jsx)(u.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(n.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(n.jsx)(U.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(n.jsx)(U.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(n.jsx)(V.a,{control:Object(n.jsx)(K.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(n.jsx)(H.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(n.jsxs)(l.a,{container:!0,children:[Object(n.jsx)(l.a,{item:!0,xs:!0,children:Object(n.jsx)(h.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(n.jsx)(l.a,{item:!0,children:Object(n.jsx)(h.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]}),Object(n.jsx)(D.a,{mt:8,children:Object(n.jsx)(Q,{})})]})}function $(){return Object(n.jsx)(Y.Provider,{value:!1,children:Object(n.jsx)(J.a,{theme:R,children:Object(n.jsx)(w.a,{basename:"",children:Object(n.jsxs)(N.d,{children:[y.map((function(e){return Object(n.jsx)(z,{path:e.path,isPrivate:e.private,children:Object(n.jsx)(q,{route:e})},e.path)})),Object(n.jsx)(N.b,{exact:!0,path:"/login",component:Z})]})})})})}var _=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,200)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)($,{})}),document.getElementById("root")),_()}},[[148,1,2]]]);
//# sourceMappingURL=main.099a19d4.chunk.js.map