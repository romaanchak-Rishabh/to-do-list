(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(51)},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},46:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(17),c=n.n(r),l=(n(35),n(11)),i=n(12),u=n(14),d=n(13),s=n(15),p=(n(36),n(10)),m=(n(37),n(6)),f={isAuthenticated:!1,authenticate:function(){this.isAuthenticated=!0},signout:function(){this.isAuthenticated=!1},getAuth:function(){return this.isAuthenticated}},b=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).login=n.login.bind(Object(p.a)(Object(p.a)(n))),n.logout=n.logout.bind(Object(p.a)(Object(p.a)(n))),n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"login",value:function(){f.authenticate(),console.log(f.getAuth())}},{key:"logout",value:function(){f.signout()}},{key:"render",value:function(){return a.a.createElement("div",{className:"header"},a.a.createElement(m.b,{to:"/",className:"link"},"Home"),a.a.createElement("br",null),a.a.createElement(m.b,{to:"Public",className:"link"},"Public"),a.a.createElement("br",null),a.a.createElement(m.b,{to:"protected",className:"link"},"Protected"),a.a.createElement("br",null),a.a.createElement("button",{onClick:this.login,style:{border:"2px solid coral"}},a.a.createElement(m.b,{to:"protected",className:"link"},"Login")),a.a.createElement("br",null),a.a.createElement("button",{onClick:this.logout,style:{border:"2px solid coral"}},a.a.createElement(m.b,{to:"/",className:"link"},"Logout")))}}]),t}(a.a.Component),E=n(27),h=n(9),O=function(){return a.a.createElement("h1",null," This is a Public route!")},y=(n(46),n(47),n(5)),v=function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).handleChange=function(e){return n.props.addText(e.target.value)},n.handleSubmit=function(e){e.preventDefault(),n.props.selected||0===n.props.selected?n.props.editAddTodo({value:n.props.text,selected:n.props.selected}):n.props.addTodo(n.props.text)},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("input",{type:"text",name:"todo",value:this.props.text,placeholder:"Enter your todo",onChange:this.handleChange,style:{outline:"none",fontSize:"20px",marginTop:"10px",width:"225px"}}),a.a.createElement("br",null),a.a.createElement("br",null))}}]),t}(a.a.Component),g=Object(y.b)(function(e){return{text:e.text,selected:e.selected}},function(e){return{addTodo:function(t){return e(function(e){return{type:"ADD_TODO",payload:e}}(t))},addText:function(t){return e(function(e){return{type:"ADD_TEXT",payload:e}}(t))},editAddTodo:function(t){return e(function(e){return{type:"EDIT_ADD_TODO",payload:e}}(t))}}})(v),T=Object(y.b)(function(e){return{text:e.text,selected:e.selected}},function(e){return{deleteTodo:function(t){return e(function(e){return{type:"DELETE_TODO",payload:e}}(t))},editTodo:function(t){return e(function(e){return{type:"EDIT_TODO",payload:e}}(t))}}})(function(e){var t=e.todo,n=e.idx,o=e.deleteTodo,r=e.editTodo,c=e.selected,l=e.text;return a.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",cursor:"pointer",padding:"5px",border:"1px solid gray",borderRadius:"2px"}},a.a.createElement("div",{onClick:function(){return r(n)}},c===n?l:t),a.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){return o(n)}},"X"))}),j=Object(y.b)(function(e){return{todos:e.todos}})(function(e){var t=e.todos;return a.a.createElement("div",{style:{display:"flex",flexDirection:"column",width:"250px",margin:"0 auto",height:"250px",overflowY:"auto",overflowX:"hidden"}},t.map(function(e,t){return a.a.createElement(T,{key:t,todo:e,idx:t})}))}),x=Object(y.b)(null,function(e){return{deleteAll:function(){return e({type:"DELETE_ALL"})},persistTodo:function(){return e({type:"PERSIST_TODOS"})}}})(function(e){var t=e.deleteAll,n=e.persistTodo;return Object(o.useEffect)(function(){n()},[n]),a.a.createElement("div",{className:"protected"},a.a.createElement("h1",{style:{textDecoration:"underline",marginTop:"20px"}},"Todo's App"),a.a.createElement("p",null,"Not authenticated with username and password, so everyone can access it, but made login, logout functions."),a.a.createElement("p",null,"PS. It will just take few lines of code to authenticate username and password"),a.a.createElement(g,null),a.a.createElement(j,null),a.a.createElement("div",null,a.a.createElement("button",{onClick:t},"Delete All")))}),D=function(e){var t=e.component,n=Object(E.a)(e,["component"]);return a.a.createElement(h.b,Object.assign({},n,{render:function(e){return f.getAuth()?a.a.createElement(t,e):a.a.createElement(h.a,{to:{pathname:"/"}})}}))},w=function(e){return a.a.createElement(h.d,null,a.a.createElement(h.b,{exact:!0,path:"/public",component:O}),a.a.createElement(D,{path:"/protected",component:x}))},A=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(b,null),a.a.createElement(w,null))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=n(21),S=n(29),_=n.n(S),C=n(8),N={todos:[],text:"",selected:void 0},I=function(e){return window.localStorage.setItem("todos2",JSON.stringify(e))},L=Object(k.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PERSIST_TODOS":var n=JSON.parse(window.localStorage.getItem("todos2"));return Object(C.a)({},e,{todos:n||[]});case"ADD_TEXT":return Object(C.a)({},e,{text:t.payload});case"ADD_TODO":if(""===t.payload)return e;var o=e.todos.concat(t.payload);return window.localStorage.setItem("todos2",JSON.stringify(o)),Object(C.a)({},e,{todos:o,text:""});case"DELETE_TODO":var a=e.todos.filter(function(e,n){return n!==t.payload});return I(a),Object(C.a)({},e,{todos:a});case"EDIT_TODO":return Object(C.a)({},e,{text:e.todos[t.payload],selected:t.payload});case"EDIT_ADD_TODO":var r=e.todos.map(function(e,n){return n!==t.payload.selected?e:t.payload.value});return I(r),Object(C.a)({},e,{todos:r,selected:void 0,text:""});case"DELETE_ALL":return I([]),Object(C.a)({},e,{todos:[],text:""});default:return e}},Object(k.a)(_.a));c.a.render(a.a.createElement(y.a,{store:L},a.a.createElement(m.a,null,a.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.aee9eab0.chunk.js.map