(this["webpackJsonpreact-practice"]=this["webpackJsonpreact-practice"]||[]).push([[0],{10:function(e,t,c){e.exports={ul:"Navigation_ul__iD9KM",li:"Navigation_li__4TiC2"}},19:function(e,t,c){e.exports={layout:"Layout_layout__2sPbh"}},20:function(e,t,c){e.exports={link:"Header_link__3EIiW"}},39:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),r=c(18),s=c.n(r),j=c(8),a=c(2),o=c(19),l=c.n(o),u=c(20),b=c.n(u),O=c(0);var h=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(j.b,{to:"/",className:b.a.link,children:Object(O.jsx)("h1",{children:"React Practice"})})})},d=c(10),x=c.n(d);var v=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("ul",{className:x.a.ul,children:[Object(O.jsx)("li",{className:x.a.li,children:Object(O.jsx)(j.b,{to:"/todolist",children:"ToDoList"})}),Object(O.jsx)("li",{className:x.a.li,children:Object(O.jsx)(j.b,{to:"/cointracker",children:"CoinTracker"})}),Object(O.jsx)("li",{className:x.a.li,children:Object(O.jsx)(j.b,{to:"/coinconverter",children:"CoinConverter"})}),Object(O.jsx)("li",{className:x.a.li,children:Object(O.jsx)(j.b,{to:"/movielist",children:"MovieList"})})]})})};var p=function(){return Object(O.jsxs)("div",{className:l.a.layout,children:[Object(O.jsx)(h,{}),Object(O.jsx)(v,{})]})};var f=function(){return Object(O.jsx)("div",{children:"Home"})},m=c(24),g=c(4);var S=function(){var e=Object(n.useState)(""),t=Object(g.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)([]),s=Object(g.a)(r,2),j=s[0],a=s[1];return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h1",{children:["My To Dos (",j.length,")"]}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==c&&(i(""),a((function(e){return[c].concat(Object(m.a)(e))})))},children:[Object(O.jsx)("input",{onChange:function(e){return i(e.target.value)},value:c,type:"text",placeholder:"Write your to do..."}),Object(O.jsx)("button",{children:"Add To Do"})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("ul",{children:j.map((function(e,t){return Object(O.jsx)("li",{children:e},t)}))})]})};var y=function(){var e=Object(n.useState)(!0),t=Object(g.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)([]),s=Object(g.a)(r,2),j=s[0],a=s[1];return Object(n.useEffect)((function(){fetch("https://api.coinpaprika.com/v1/tickers").then((function(e){return e.json()})).then((function(e){a(e),i(!1)}))}),[]),Object(O.jsxs)("div",{children:[Object(O.jsxs)("h1",{children:["The Coins! ",c?"":"(".concat(j.length,")")]}),c?Object(O.jsx)("strong",{children:"Loading..."}):Object(O.jsx)("ul",{children:j.map((function(e,t){return Object(O.jsxs)("li",{children:[e.name," (",e.symbol,") : $",e.quotes.USD.price," USD"]},t)}))})]})};function _(e){var t=e.coin,c=Object(n.useState)(0),i=Object(g.a)(c,2),r=i[0],s=i[1],j=Object(n.useState)(!1),a=Object(g.a)(j,2),o=a[0],l=a[1],u=function(e){s(e.target.value)};return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"USD",children:"USD "}),Object(O.jsx)("input",{id:"USD",value:o?r*t.quotes.USD.price:r,type:"number",onChange:u,disabled:o})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{htmlFor:t.symbol,children:[t.symbol," "]}),Object(O.jsx)("input",{id:t.symbol,value:o?r:r/t.quotes.USD.price,type:"number",onChange:u,disabled:!o})]}),Object(O.jsx)("button",{onClick:function(){s(0),l((function(e){return!e}))},children:"Convert"})]})}var C=function(){var e=Object(n.useState)(!0),t=Object(g.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)([]),s=Object(g.a)(r,2),j=s[0],a=s[1],o=Object(n.useState)("-1"),l=Object(g.a)(o,2),u=l[0],b=l[1],h=Object(n.useState)([]),d=Object(g.a)(h,2),x=d[0],v=d[1];return Object(n.useEffect)((function(){fetch("https://api.coinpaprika.com/v1/tickers").then((function(e){return e.json()})).then((function(e){a(e),i(!1)}))}),[]),Object(O.jsxs)("div",{children:[Object(O.jsxs)("h1",{children:["The Coin Converter ",c?"":"(".concat(j.length,")")]}),c?Object(O.jsx)("strong",{children:"Loading..."}):Object(O.jsxs)("div",{children:[Object(O.jsxs)("select",{value:u,onChange:function(e){b(e.target.value),"-1"===e.target.value?v([]):v(j[e.target.value])},children:[Object(O.jsx)("option",{value:"-1",children:"Select Coin"},"-1"),j.map((function(e,t){return Object(O.jsx)("option",{value:t,children:e.name},t)}))]}),Object(O.jsx)("hr",{}),"-1"===u?"Please Select Coin":Object(O.jsx)(_,{coin:x})]})]})},k=c(17),D=c.n(k),N=c(23);var T=function(){var e=Object(n.useState)(!0),t=Object(g.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)([]),s=Object(g.a)(r,2),j=s[0],a=s[1],o=function(){var e=Object(N.a)(D.a.mark((function e(){var t,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c.data.movies),i(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[]),Object(O.jsx)("div",{children:c?Object(O.jsx)("h1",{children:"Loading..."}):j.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{src:e.medium_cover_image,alt:e.title}),Object(O.jsx)("h2",{children:e.title}),Object(O.jsx)("p",{children:e.summary}),Object(O.jsx)("ul",{children:e.genres.map((function(e){return Object(O.jsx)("li",{children:e},e)}))})]},e.id)}))})};var U=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)(p,{}),Object(O.jsx)(a.a,{exact:!0,path:"/",component:f}),Object(O.jsx)(a.a,{path:"/todolist",component:S}),Object(O.jsx)(a.a,{path:"/cointracker",component:y}),Object(O.jsx)(a.a,{path:"/coinconverter",component:C}),Object(O.jsx)(a.a,{path:"/movielist",component:T})]})})};s.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(U,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.df48421a.chunk.js.map