(this["webpackJsonpgoit-react-hw-09-feedback"]=this["webpackJsonpgoit-react-hw-09-feedback"]||[]).push([[0],[,,,,,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(4),i=s.n(a),r=s(2),l=(s(9),s(0));function j(e){var t=e.good,s=e.neutral,c=e.bad,n=e.total,a=e.positivePercentage;return Object(l.jsxs)("ul",{className:"stats-list",children:[Object(l.jsxs)("li",{className:"stats-list__item",children:["Good: ",Object(l.jsx)("span",{children:t})]}),Object(l.jsxs)("li",{className:"stats-list__item",children:["Neutral: ",Object(l.jsx)("span",{children:s})]}),Object(l.jsxs)("li",{className:"stats-list__item",children:["Bad: ",Object(l.jsx)("span",{children:c})]}),Object(l.jsxs)("li",{className:"stats-list__item",children:["Total: ",Object(l.jsx)("span",{children:n})]}),Object(l.jsxs)("li",{className:"stats-list__item",children:["Positive feedback:"," ",Object(l.jsxs)("span",{children:[isNaN(a)?"0":a,"%"]})]})]})}s(11);function o(e){var t=e.options,s=e.onLeaveFeedback;return Object(l.jsx)("ul",{className:"list",children:Object.keys(t).map((function(e){return Object(l.jsx)("li",{className:"list__item",children:Object(l.jsx)("button",{className:"list__button",name:e,type:"button",onClick:s,children:e})},e)}))})}s(12);function b(e){var t=e.title,s=e.children;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:t}),s]})}s(13);function u(e){var t=e.message;return Object(l.jsx)("p",{children:t})}function d(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(0),i=Object(r.a)(a,2),d=i[0],O=i[1],h=Object(c.useState)(0),x=Object(r.a)(h,2),m=x[0],f=x[1],p=function(){return s+d+m},g=p(),v=function(){var e=p();return Math.round(100*s/e)}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{title:"Please leave feedback",children:Object(l.jsx)(o,{options:{good:s,neutral:d,bad:m},onLeaveFeedback:function(e){switch(e.target.name){case"good":n((function(e){return e+1}));break;case"neutral":O((function(e){return e+1}));break;case"bad":f((function(e){return e+1}))}}})}),Object(l.jsx)(b,{title:"Statistics",children:0===g?Object(l.jsx)(u,{message:"No feedback given :("}):Object(l.jsx)(j,{good:s,neutral:d,bad:m,total:g,positivePercentage:v})})]})}s(14);i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.ba503530.chunk.js.map