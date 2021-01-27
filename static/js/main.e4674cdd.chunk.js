(this["webpackJsonpbudget-calculator"]=this["webpackJsonpbudget-calculator"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n(4),i=n.n(a),r=n(2);var l=function(){return Object(c.jsx)("header",{id:"headerContainer",children:Object(c.jsx)("h1",{children:"Budget Calculator"})})};var o=function(e){var t=Object(s.useState)(e.savings),n=Object(r.a)(t,2),a=n[0],i=n[1],l=Object(s.useState)(!1),o=Object(r.a)(l,2),u=o[0],j=o[1],d=e.onChange;function b(){j((function(e){return!e}))}function m(){i(Number(document.getElementById("amountInput").value)),b()}Object(s.useEffect)((function(){d(a)}),[a,d]);var h=u?Object(c.jsx)("input",{id:"amountInput",type:"number",placeholder:"$",onKeyPress:function(e){return"Enter"===e.key?m():null},autoFocus:!0}):Object(c.jsxs)("span",{id:"amount",className:"font-weight-bold",children:["$ ",a.toFixed(2)]}),x=u?Object(c.jsxs)("div",{className:"d-flex flex-row",children:[Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-check2 inputAction text-success",viewBox:"0 0 16 16",onClick:m,children:Object(c.jsx)("path",{d:"M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"})}),Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-x inputAction text-danger",viewBox:"0 0 16 16",onClick:b,children:Object(c.jsx)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})})]}):Object(c.jsx)("button",{className:"btn btn-outline-success btn-sm",onClick:function(){j(!0)},children:"Change"});return Object(c.jsxs)("div",{id:"fundContainer",className:"d-flex align-items-center",children:[Object(c.jsxs)("span",{id:"savingsText",children:["My savings:\xa0",h]}),x]})};var u=function(e){var t,n;return n=e.wishListAmount||e.savings?(t=e.savings-e.wishListAmount)>0?Object(c.jsxs)("div",{className:"text-success font-weight-bold",children:["Hurray! You still have $ ",t.toFixed(2)," more to spend!"]}):t<0?Object(c.jsxs)("div",{className:"text-danger",children:["Sorry, you don have enough savings. You are $ ",(-t).toFixed(2)," short."]}):Object(c.jsx)("div",{className:"text-primary",children:"Hurray! You can buy your wishlist, but you'll spend all of your money."}):null,Object(c.jsx)("div",{className:"status ml-auto",children:n})};var j=function(e){var t=Object(s.useState)([]),n=Object(r.a)(t,2),a=n[0],i=n[1],l=Object(s.useState)(""),o=Object(r.a)(l,2),j=o[0],d=o[1],b=Object(s.useState)(""),m=Object(r.a)(b,2),h=m[0],x=m[1],O=Object(s.useState)(""),p=Object(r.a)(O,2),v=p[0],f=p[1],g=Object(s.useState)(e.wishListAmount),y=Object(r.a)(g,2),N=y[0],w=y[1],C=e.onChange;function k(e){e.preventDefault(),i((function(t){var n=[];return t.map((function(t){return+t.key!==+e.target.dataset.id&&n.push(t),0})),n}))}Object(s.useEffect)((function(){var e=0;a.map((function(t){return e+=t.price*t.qty})),w(e)}),[a]),Object(s.useEffect)((function(){C(N)}),[N,C]);var L=a.map((function(e){return Object(c.jsx)("form",{"data-id":e.key,onSubmit:k,children:Object(c.jsxs)("div",{className:"form-row align-items-center",children:[Object(c.jsx)("div",{className:"col",children:Object(c.jsx)("input",{name:"name",type:"text",className:"form-control",placeholder:"Item name",value:e.name,readOnly:!0})}),Object(c.jsx)("div",{className:"col-2",children:Object(c.jsx)("input",{name:"qty",type:"number",className:"form-control",placeholder:"Qty",value:e.qty,readOnly:!0})}),Object(c.jsx)("div",{className:"col-3",children:Object(c.jsxs)("div",{className:"input-group",children:[Object(c.jsx)("div",{className:"input-group-prepend",children:Object(c.jsx)("div",{className:"input-group-text",children:"$"})}),Object(c.jsx)("input",{name:"price",type:"number",className:"form-control",placeholder:"Price",value:e.price,readOnly:!0})]})}),Object(c.jsx)("div",{className:"col",children:Object(c.jsx)("button",{className:"btn-sm btn-outline-danger",children:"Remove"})})]})},e.key)}));return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"d-flex flex-row align-items-top",children:[Object(c.jsxs)("p",{id:"wishListTotal",children:["My WishList: ",Object(c.jsxs)("strong",{children:["$ ",N.toFixed(2)]})]}),Object(c.jsx)(u,{savings:e.savings,wishListAmount:N})]}),Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault(),i((function(e){var t=Array.from(e);return t.push({key:t.length?t[t.length-1].key+1:1,name:j,qty:h,price:v}),d(""),x(""),f(""),t})),document.getElementById("input-item-name").focus()},children:Object(c.jsxs)("div",{className:"form-row",children:[Object(c.jsx)("div",{className:"col",children:Object(c.jsx)("input",{id:"input-item-name",name:"name",type:"text",className:"form-control",placeholder:"Item name",value:j,onChange:function(e){return d(e.target.value)},autoFocus:!0,required:!0})}),Object(c.jsx)("div",{className:"col-2",children:Object(c.jsx)("input",{name:"qty",type:"number",className:"form-control",placeholder:"Qty",value:h,onChange:function(e){return x(e.target.value)},min:"1",step:"1"})}),Object(c.jsx)("div",{className:"col-3",children:Object(c.jsxs)("div",{className:"input-group",children:[Object(c.jsx)("div",{className:"input-group-prepend",children:Object(c.jsx)("div",{className:"input-group-text",children:"$"})}),Object(c.jsx)("input",{name:"price",type:"number",className:"form-control",placeholder:"Price",value:v,onChange:function(e){return f(e.target.value)},min:"0.01",step:"0.01"})]})}),Object(c.jsx)("div",{className:"col",children:Object(c.jsx)("button",{className:"btn btn-primary",children:"Add"})})]})}),L]})};var d=function(){var e=Object(s.useState)(0),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)(0),u=Object(r.a)(i,2),d=u[0],b=u[1];return Object(c.jsxs)("div",{id:"appContainer",className:"container-fluid shadow p-3 mb-5 bg-light rounded-lg card",children:[Object(c.jsx)(l,{}),Object(c.jsx)("hr",{}),Object(c.jsx)(o,{savings:n,onChange:function(e){return a(e)}}),Object(c.jsx)("hr",{}),Object(c.jsx)(j,{savings:n,wishListAmount:d,onChange:function(e){return b(e)}})]})};n(10);i.a.render(Object(c.jsx)(d,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.e4674cdd.chunk.js.map