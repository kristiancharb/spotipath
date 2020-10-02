(this.webpackJsonpspotipath=this.webpackJsonpspotipath||[]).push([[0],{38:function(e,t,a){e.exports=a(48)},43:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),s=(a(43),a(55)),o=a(50),m=a(34),i=a(51),u=a(54),d=function(){return r.a.createElement(s.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(o.a,null,r.a.createElement(m.a,null,r.a.createElement(i.a,null,r.a.createElement(s.a.Brand,{href:"#home"},"Spotipath"),r.a.createElement(u.a,{className:"mr-auto"},r.a.createElement(u.a.Link,{href:"#about"},"About"))))))},E=a(10),p=a(16),h=a.n(p),f=a(25),b=a(57),v=function(e){var t=e.artist;return r.a.createElement(b.a,{className:"mt-3"},r.a.createElement(o.a,null,r.a.createElement(i.a,null,r.a.createElement(m.a,{xs:4},r.a.createElement(b.a.Img,{variant:"top",className:"pt-2 pb-2",src:"http://via.placeholder.com/300x180",alt:"Card image cap"})),r.a.createElement(m.a,{xs:8},r.a.createElement(b.a.Body,null,r.a.createElement(b.a.Title,null,t.name),r.a.createElement(b.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."))))))},w=function(){var e=Object(f.a)(h.a.mark((function e(t,a){var n,r,l,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("https://www.kristiancharb.online","/path/?src=").concat(t,"&dest=").concat(a),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:if(l=e.sent,r.ok){e.next=10;break}throw c=(null===l||void 0===l?void 0:l.error)?l.error:"An error occurred. Please try again later.",new Error(c);case 10:return e.abrupt("return",l);case 11:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),g=a(56),x=function(e){var t=e.artistData,a=Object(n.useState)([]),l=Object(E.a)(a,2),c=l[0],s=l[1],o=Object(n.useState)(null),u=Object(E.a)(o,2),d=u[0],p=u[1],b=Object(n.useState)(!1),x=Object(E.a)(b,2),k=x[0],y=x[1];return Object(n.useEffect)((function(){t.src&&t.dest&&(y(!0),function(){var e=Object(f.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(t.src,t.dest);case 3:a=e.sent,s(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),p(e.t0.message);case 10:y(!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()())}),[t.src,t.dest]),r.a.createElement("div",null,d&&r.a.createElement(i.a,null,r.a.createElement(m.a,{xs:12,md:10},r.a.createElement(g.a,{variant:"danger",onClose:function(){return p(null)},dismissible:!0},r.a.createElement(g.a.Heading,null,"Uh oh!"),r.a.createElement("p",null,d)))),k&&r.a.createElement(i.a,null,r.a.createElement(m.a,{xs:12,md:10},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-border",role:"status","aria-hidden":"true"})))),!k&&c.map((function(e){return r.a.createElement(i.a,{key:e.id},r.a.createElement(m.a,{xs:12,md:10},r.a.createElement(v,{artist:e})))})))},k=a(26),y=a(29),j=a(53),O=a(52),N=function(e){var t=Object(n.useState)({src:null,dest:null}),a=Object(E.a)(t,2),l=a[0],c=a[1],s=function(e){c(Object(y.a)(Object(y.a)({},l),{},Object(k.a)({},e.target.name,e.target.value.trim())))};return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(m.a,{className:"w-100 my-4",xs:12,md:10},r.a.createElement("h5",null,"Enter two artists from (almost) all Spotify artists and we'll find a path between them through their related artists."))),r.a.createElement(i.a,null,r.a.createElement(j.a,{inline:!0,className:"w-100",onSubmit:function(t){t.preventDefault(),e.setArtistData(l),console.log(l)}},r.a.createElement(m.a,{xs:12,md:5,lg:4},r.a.createElement(j.a.Group,{key:"srcArtist",controlId:"srcArtist"},r.a.createElement(j.a.Label,{className:"sr-only"},"Starting Artist"),r.a.createElement(j.a.Control,{name:"src",className:"my-2 w-100",placeholder:"Artist Name",onChange:s}))),r.a.createElement(m.a,{xs:12,md:5,lg:4},r.a.createElement(j.a.Group,{key:"destArtist",controlId:"destArtist"},r.a.createElement(j.a.Label,{className:"sr-only"},"Ending Artist"),r.a.createElement(j.a.Control,{name:"dest",className:"my-2 w-100",placeholder:"Artist Name",onChange:s}))),r.a.createElement(m.a,{xs:12,md:10,lg:2},r.a.createElement(O.a,{className:"my-2 w-100",variant:"primary",type:"submit"},"Find Path")))))},A=function(){var e=Object(n.useState)({src:null,dest:null}),t=Object(E.a)(e,2),a=t[0],l=t[1];return r.a.createElement(o.a,null,r.a.createElement(N,{setArtistData:l}),r.a.createElement(x,{artistData:a}))},S=function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.34a146ce.chunk.js.map