(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,a){e.exports=a(277)},142:function(e,t,a){},143:function(e,t,a){},277:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(29),l=a.n(r);a(142),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(114),o=a(115),c=a(127),m=a(116),u=a(128),d=(a(143),a(284)),h=a(287),v=a(32),g=a(286),p=a(55),f=a(285),E=a(290),w=a(289),I=a(288),b=a(126),k=(a(144),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).menuItemClickHandle=function(e,t){var n=t.name;a.setState({activeItemName:n}),alert(n)},a.showMenu=function(e,t){a.setState({sideBarShowed:!a.state.sideBarShowed})},a.state={activeItemName:"home",sideBarShowed:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=new IntersectionObserver(function(e){e.forEach(function(e,t){e.isIntersecting?e.target.classList.add("segmentArtIntersect"):e.target.classList.remove("segmentArtIntersect")})});[].slice.call(document.querySelectorAll(".segmentArt")).forEach(function(t,a){e.observe(t)})}},{key:"render",value:function(){var e=this.state,t=e.activeItemName,a=e.sideBarShowed;return i.a.createElement("div",null,i.a.createElement(d.a,{textAlign:"left"},i.a.createElement(h.a,{inverted:!0,fixed:"top",size:"small"},i.a.createElement(d.a,{fluid:!0},i.a.createElement(h.a.Item,{name:"home",active:"home"===t,color:"red",onClick:this.menuItemClickHandle}),i.a.createElement(h.a.Item,{name:"friend",active:"friend"===t,color:"red",onClick:this.menuItemClickHandle}),i.a.createElement(h.a.Item,{name:"messages",active:"messages"===t,color:"red",onClick:this.menuItemClickHandle}),i.a.createElement(h.a.Item,{position:"right"},i.a.createElement(v.a,{name:"bars",size:"large",className:"menuButton",onClick:this.showMenu})))),i.a.createElement(h.a,{vertical:!0,inverted:!0,fixed:"right",size:"large",className:a?"sideBarShow":"sideBarHidden"},i.a.createElement(h.a.Item,{style:{marginBottom:"100px"}},i.a.createElement(v.a,{name:"close",size:"big",onClick:this.showMenu})),i.a.createElement(h.a.Item,null,i.a.createElement(g.a,{icon:"search",placeholder:"Search Something..."})),i.a.createElement(h.a.Item,{name:"inbox"},i.a.createElement(p.a,{color:"teal"},"1"),"Inbox")),i.a.createElement(f.a,null),i.a.createElement(E.a,{as:"h2",style:{marginTop:"50px"}},"Lorem ipsum"),i.a.createElement(f.a,null),i.a.createElement(w.a,{style:{overflow:"hidden",boxShadow:"none",border:"none"}},[1,2,3,4,5,6,7,8,9,10,11,12].map(function(e,t){return i.a.createElement(w.a,{piled:!0,key:t,className:"segmentArt"},i.a.createElement(I.a,{className:"article"},i.a.createElement(I.a.Column,{className:"text",width:12},t+1," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi."),i.a.createElement(I.a.Column,{className:"img",width:4},i.a.createElement(b.a,{src:"city.png",rounded:!0,centered:!0}))))}))),i.a.createElement(w.a,{inverted:!0,fixed:"bottom",textAlign:"center",size:"small",attached:"bottom",className:"footer"},"Coded By kska32@gmail.com - 2019"))}}]),t}(n.Component));l.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[137,1,2]]]);
//# sourceMappingURL=main.147cf6c8.chunk.js.map