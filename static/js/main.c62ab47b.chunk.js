(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),a=n(4),o=n.n(a),i=(n(14),n(3));var h=function(e){var t=e.searchChange;return Object(c.jsx)("div",{className:"pa2 ma4",children:Object(c.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t})})};var l=function(e){var t=e.id,n=e.name,r=e.email;return Object(c.jsxs)("div",{className:"tc bg-light-green dib pa3 ma4 grow br3 bw2 shadow-5",children:[Object(c.jsx)("img",{className:"card-image",src:"https://robohash.org/".concat(t,"?200x200"),alt:"Robots"}),Object(c.jsxs)("div",{className:"card-content",children:[Object(c.jsx)("h2",{children:n}),Object(c.jsx)("p",{children:r})]})]})};var j=function(e){var t=e.robots.map((function(e){return Object(c.jsx)(l,{id:e.id,name:e.name,email:e.email},e.id)}));return Object(c.jsx)("div",{className:"pa1",children:t})};var u=function(e){return Object(c.jsx)("div",{style:{overflowY:"scroll",height:"750px"},children:e.children})},b=n(5),d=n(6),f=n(8),O=n(7),m=function(e){Object(f.a)(n,e);var t=Object(O.a)(n);function n(e){var c;return Object(b.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(c.jsx)("h1",{children:"Oops Not Good"}):this.props.children}}]),n}(r.Component);var g=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)(""),o=Object(i.a)(a,2),l=o[0],b=o[1];if(Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return s(e)})).catch((function(e){return console.log(e)}))}),[]),!n.length)return Object(c.jsx)("div",{className:"tc",children:Object(c.jsx)("h1",{className:"courier red f1 ma2 mt4",children:"Loading..."})});var d=n.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));return Object(c.jsxs)("div",{className:"tc",children:[Object(c.jsx)("h1",{className:"f1 light-green ttu sans-serif ",children:"Robo Friends"}),Object(c.jsx)(h,{searchChange:function(e){b(e.target.value)}}),Object(c.jsx)("hr",{}),Object(c.jsx)(m,{children:Object(c.jsx)(u,{children:Object(c.jsx)(j,{robots:d})})})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};n(15);o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.c62ab47b.chunk.js.map