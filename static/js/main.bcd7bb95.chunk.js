(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],{13:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},19:function(e,t,n){e.exports=n(43)},24:function(e,t,n){},25:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(12),c=n.n(l);n(24),n(13),n(25);var o=n(2),i=n(14),u=n(15),s=n(18),m=n(17),d=n(16),h=n.n(d),p=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={arr:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://restcountries.eu/rest/v2/all").then((function(t){e.setState({arr:t.data})}),(function(e){console.log(e)}))}},{key:"render",value:function(){var e;return r.a.createElement("div",null,r.a.createElement("table",(e={border:"1",cellPadding:"10px"},Object(o.a)(e,"cellPadding","10px"),Object(o.a)(e,"align","center"),e),r.a.createElement("thead",{style:{backgroundColor:"red"}},r.a.createElement("tr",null,r.a.createElement("th",null,"SNO"),r.a.createElement("th",null,"NAME"),r.a.createElement("th",null,"CAPITAL"),r.a.createElement("th",null,"POPULATION"),r.a.createElement("th",null,"FLAG"))),r.a.createElement("tbody",null,this.state.arr.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.capital),r.a.createElement("td",null,e.population),r.a.createElement("td",null,r.a.createElement("img",{width:"100px",height:"100px",src:e.flag})))})))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.bcd7bb95.chunk.js.map