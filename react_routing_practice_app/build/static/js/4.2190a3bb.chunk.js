(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{45:function(e,t,c){e.exports={card:"Card_card__3HrB-"}},46:function(e,t,c){e.exports={form:"QuoteForm_form__1Iopp",loading:"QuoteForm_loading__3-1yg",control:"QuoteForm_control__1IPb7",actions:"QuoteForm_actions__F1DeF"}},53:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c(21),r=c(2),a=c(45),s=c.n(a),i=c(0),u=function(e){return Object(i.jsx)("div",{className:s.a.card,children:e.children})},l=c(14),d=c(46),j=c.n(d),b=function(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),a=c[0],s=c[1],d=Object(n.useRef)(),b=Object(n.useRef)();return Object(i.jsxs)(n.Fragment,{children:[Object(i.jsx)(r.a,{when:a,message:"Are you sure you want to leave this page?"}),Object(i.jsx)(u,{children:Object(i.jsxs)("form",{onFocus:function(){s(!0)},className:j.a.form,onSubmit:function(t){t.preventDefault();var c=d.current.value,n=b.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(i.jsx)("div",{className:j.a.loading,children:Object(i.jsx)(l.a,{})}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"author",children:"Author"}),Object(i.jsx)("input",{type:"text",id:"author",ref:d})]}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("textarea",{id:"text",rows:"5",ref:b})]}),Object(i.jsx)("div",{className:j.a.actions,children:Object(i.jsx)("button",{onClick:function(){s(!1)},className:"btn",children:"Add Quote"})})]})})]})},h=c(19),x=c(20);t.default=function(){var e=Object(h.a)(x.b),t=e.sendRequest,c=e.status,o=Object(r.h)();Object(n.useEffect)((function(){"completed"===c&&o.replace("/quotes")}),[c,o]);return Object(i.jsx)(b,{isLoading:"pending"===c,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=4.2190a3bb.chunk.js.map