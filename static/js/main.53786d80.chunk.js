(this["webpackJsonpmy-kanban"]=this["webpackJsonpmy-kanban"]||[]).push([[0],{14:function(t){t.exports=JSON.parse('[{"name":"La mia bacheca","lists":[{"name":"Todo","list":[{"id":1,"title":"Create layout","description":""},{"id":2,"title":"Create project","description":""},{"id":3,"title":"Deploy in heroku","description":""},{"id":4,"title":"Hack the world","description":""}],"id":0},{"name":"Progress","list":[{"id":5,"title":"Completing this project","description":""},{"id":6,"title":"print \\"Hello, World!\\"","description":""}],"id":1},{"name":"To Check","list":[{"id":7,"title":"The water on the gas","description":""},{"id":8,"title":"Did I close the main door?","description":""}],"id":2},{"name":"Completed","list":[{"id":9,"title":"Have an idea!","description":""}],"id":3}]}]')},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var i=n(0),c=n.n(i),a=n(19),s=n.n(a),l=(n(28),n(5)),r=n(14),o=(n(29),n(42)),d=n(22),j=n(44),u="CARD",b=n(43),h=(n(30),n(2)),m=function(t){return Object(h.jsx)("div",{className:"label label-rounded h6 label-primary Badge",children:t.text})},f=(n(32),function(t){var e=Object(i.useState)(t.title),n=Object(l.a)(e,2),c=n[0],a=n[1];return Object(h.jsx)("div",{children:Object(h.jsx)("input",{type:"text",name:"title",className:"form-input",value:c,onChange:function(e){a(e.target.value),t.onTitleChange(c)}})})}),O=(n(33),function(t){var e=t.item,n=Object(i.useState)(!1),c=Object(l.a)(n,2),a=c[0],s=c[1],r=Object(b.a)((function(){return{type:u,item:{card:e},collect:function(t){return{opacity:t.isDragging()?.5:1}}}}),[]),o=Object(l.a)(r,2),d=o[0].opacity,j=o[1],O=function(t,e){t.stopPropagation(),s(e)};return Object(h.jsx)("div",{className:"card mt-2",ref:j,style:{opacity:d},onClick:function(t){return O(t,!1)},children:Object(h.jsxs)("div",{className:"card-header",children:[Object(h.jsx)(m,{text:"".concat(t.item.id)})," ",Object(h.jsx)("br",{}),!a&&Object(h.jsx)("h4",{onClick:function(t){return O(t,!0)},children:t.item.title}),a&&Object(h.jsx)("div",{onClick:function(t){return O(t,!0)},children:Object(h.jsx)(f,{title:e.title,onTitleChange:function(n){t.onTitleChange({newTitle:n,id:e.id})}})})]})})}),p=(n(34),function(t){var e=Object(j.a)((function(){return{accept:u,drop:function(e,n){t.onMoveHandler(e,t.cards.id)}}})),n=Object(l.a)(e,2)[1];return Object(h.jsxs)("div",{className:"card List full-height",ref:n,children:[Object(h.jsx)("div",{className:"card-header",children:Object(h.jsx)("div",{className:"card-title label label-primary",children:t.cards.name})}),Object(h.jsx)("div",{className:"card-body",children:Object(h.jsx)("div",{className:"columns",children:t.cards.list&&t.cards.list.map((function(e,n){return Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)(O,{onTitleChange:t.onTitleChange,item:e})},"card".concat(n))}))})})]})}),v=(n(35),function(t){return Object(h.jsxs)("div",{className:"Kanban",children:[Object(h.jsx)("h1",{children:t.data.name}),Object(h.jsx)("div",{className:"columns",children:Object(h.jsx)(o.a,{backend:d.a,children:t.data.lists&&t.data.lists.map((function(e,n){return Object(h.jsx)("div",{className:"column col-3",children:Object(h.jsx)(p,{cards:e,onMoveHandler:t.onMoveHandler,onTitleChange:t.onTitleChange})},"list".concat(n))}))})})]})}),x=function(){var t=Object(i.useState)({name:"",lists:[]}),e=Object(l.a)(t,2),n=e[0],c=e[1],a=Object(i.useState)(""),s=Object(l.a)(a,2),o=s[0],d=s[1];Object(i.useEffect)((function(){0!==Object.keys(n.lists).length&&localStorage.setItem("kanban",JSON.stringify(n))}),[n]),Object(i.useEffect)((function(){var t=localStorage.getItem("kanban");t?c(JSON.parse(t)):new Promise((function(t,e){r&&t(r[0]),e("Data not found")})).then((function(t){c(t)})).catch((function(t){d(t)})).finally((function(){}))}),[]);return Object(h.jsxs)("div",{className:"App",children:[""!==o&&Object(h.jsx)("h5",{children:o}),""===o&&Object(h.jsx)(v,{onMoveHandler:function(t,e){for(var i=n,a=0;a<i.lists.length;a++){for(var s=n.lists[a],l=0;l<s.list.length;l++){var r=s.list[l];r.id===t.card.id&&(s.list.splice(l,1),console.log("remove '".concat(r.title,"' from ").concat(s.name)))}s.id===e&&(s.list.push(t.card),console.log("add '".concat(t.card.title,"' in ").concat(s.name)))}c({name:n.name,lists:n.lists})},data:n,onTitleChange:function(t){for(var e=n,i=0;i<e.lists.length;i++)for(var a=n.lists[i],s=0;s<a.list.length;s++){var l=a.list[s];l.id===t.id&&(l.title=t.newTitle)}c({name:n.name,lists:n.lists})}})]})};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.53786d80.chunk.js.map