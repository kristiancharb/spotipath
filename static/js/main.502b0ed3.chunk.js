(this.webpackJsonpspotipath=this.webpackJsonpspotipath||[]).push([[0],{34:function(e,t,a){e.exports=a(44)},39:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),s=(a(39),a(50)),o=a(46),m=a(30),i=a(47),u=a(51),d=function(){return r.a.createElement(s.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(o.a,null,r.a.createElement(m.a,null,r.a.createElement(i.a,null,r.a.createElement(s.a.Brand,{href:"#home"},"Spotipath"),r.a.createElement(u.a,{className:"mr-auto"},r.a.createElement(u.a.Link,{href:"#about"},"About"))))))},E=a(9),p=a(11),h=a.n(p),f=a(19),b=a(52),v=function(e){var t=e.artist;return r.a.createElement(b.a,{className:"mt-3"},r.a.createElement(o.a,null,r.a.createElement(i.a,null,r.a.createElement(m.a,{xs:4},r.a.createElement(b.a.Img,{variant:"top",className:"pt-2 pb-2",src:"http://via.placeholder.com/300x180",alt:"Card image cap"})),r.a.createElement(m.a,{xs:8},r.a.createElement(b.a.Body,null,r.a.createElement(b.a.Title,null,t.name),r.a.createElement(b.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."))))))},g=function(){var e=Object(f.a)(h.a.mark((function e(t,a){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("","/path/?src=").concat(t,"&dest=").concat(a),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),w=function(e){var t=e.artistData,a=Object(n.useState)([]),c=Object(E.a)(a,2),l=c[0],s=c[1];return Object(n.useEffect)((function(){t.src&&t.dest&&function(){var e=Object(f.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t.src,t.dest);case 2:a=e.sent,s(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t.src,t.dest]),r.a.createElement("div",null,l.map((function(e){return r.a.createElement(i.a,{key:e.id},r.a.createElement(m.a,{xs:12,md:10},r.a.createElement(v,{artist:e})))})))},x=a(20),y=a(25),k=a(49),j=a(48),N=function(e){var t=Object(n.useState)({src:null,dest:null}),a=Object(E.a)(t,2),c=a[0],l=a[1],s=function(e){l(Object(y.a)(Object(y.a)({},c),{},Object(x.a)({},e.target.name,e.target.value.trim())))};return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(m.a,{className:"w-100 my-4",xs:12,md:10},r.a.createElement("h5",null,"Enter two artists from (almost) all Spotify artists and we'll find a path between them through their related artists."))),r.a.createElement(i.a,null,r.a.createElement(k.a,{inline:!0,className:"w-100",onSubmit:function(t){t.preventDefault(),e.setArtistData(c),console.log(c)}},r.a.createElement(m.a,{xs:12,md:5,lg:4},r.a.createElement(k.a.Group,{key:"srcArtist",controlId:"srcArtist"},r.a.createElement(k.a.Label,{className:"sr-only"},"Starting Artist"),r.a.createElement(k.a.Control,{name:"src",className:"my-2 w-100",placeholder:"Artist Name",onChange:s}))),r.a.createElement(m.a,{xs:12,md:5,lg:4},r.a.createElement(k.a.Group,{key:"destArtist",controlId:"destArtist"},r.a.createElement(k.a.Label,{className:"sr-only"},"Ending Artist"),r.a.createElement(k.a.Control,{name:"dest",className:"my-2 w-100",placeholder:"Artist Name",onChange:s}))),r.a.createElement(m.a,{xs:12,md:10,lg:2},r.a.createElement(j.a,{className:"my-2 w-100",variant:"primary",type:"submit"},"Find Path")))))},O=function(){var e=Object(n.useState)({src:null,dest:null}),t=Object(E.a)(e,2),a=t[0],c=t[1];return r.a.createElement(o.a,null,r.a.createElement(N,{setArtistData:c}),r.a.createElement(w,{artistData:a}))},A=function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.502b0ed3.chunk.js.map