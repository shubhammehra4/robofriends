(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),s=n(7),o=n.n(s),i=(n(13),n(2)),h=n(3),u=n(5),l=n(4),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"pa2 ma4",children:Object(r.jsx)("input",{className:"pa2 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:this.props.searchChange})})}}]),n}(c.Component),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.name,c=e.email;return Object(r.jsxs)("div",{className:"tc bg-light-green dib pa3 ma4 grow br3 bw2 shadow-5",children:[Object(r.jsx)("img",{className:"card-image",src:"https://robohash.org/".concat(t,"?200x200"),alt:"Robots"}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("h2",{children:n}),Object(r.jsx)("p",{children:c})]})]})}}]),n}(c.Component),d=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.robots.map((function(e){return Object(r.jsx)(b,{id:e.id,name:e.name,email:e.email},e.id)}));return Object(r.jsx)("div",{className:"pa1",children:e})}}]),n}(c.Component),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{style:{overflowY:"scroll",height:"750px"},children:this.props.children})}}]),n}(c.Component),O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Oops Not Good"}):this.props.children}}]),n}(c.Component),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).onSearchChange=function(e){r.setState({searchfield:e.target.value})},r.state={robots:[],searchfield:""},r}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1 light-green ttu sans-serif ",children:"Robo Friends"}),Object(r.jsx)(j,{searchChange:this.onSearchChange}),Object(r.jsx)("hr",{}),Object(r.jsx)(O,{children:Object(r.jsx)(p,{children:Object(r.jsx)(d,{robots:c})})})]}):Object(r.jsx)("h1",{className:"tc red f2 ma2",children:"Loading..."})}}]),n}(c.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};n(14);o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.d79732fc.chunk.js.map