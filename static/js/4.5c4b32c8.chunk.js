(this.webpackJsonpcode2=this.webpackJsonpcode2||[]).push([[4],{296:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__k3-Oa",dialogsItems:"Dialogs_dialogsItems__256UG",active:"Dialogs_active__30YiF",dialog:"Dialogs_dialog__3cmXn",messagesContainer:"Dialogs_messagesContainer__3X6Np",messages:"Dialogs_messages__IBtJc",message:"Dialogs_message__2Azfb",addMessage:"Dialogs_addMessage__36m7m"}},302:function(e,s,a){"use strict";a.r(s);var t=a(131),n=a(0),i=a.n(n),c=a(296),o=a.n(c),r=a(14),d=a(1),g=function(e){var s="/dialogs/".concat(e.id);return Object(d.jsxs)("div",{className:o.a.dialog+" "+o.a.active,children:[Object(d.jsx)("img",{src:e.avatar,alt:""}),Object(d.jsx)(r.b,{to:s,children:e.name})]})},l=function(e){return Object(d.jsx)("div",{className:o.a.message,children:e.message})},j=a(10),u=a(92),b=a(95),m=a(132),O=a(34),h=Object(u.a)(100),_=Object(m.a)({form:"dialogsAddMessageForm"})((function(e){return Object(d.jsx)("form",{onSubmit:e.handleSubmit,children:Object(d.jsxs)("div",{className:o.a.addMessage,children:[Object(d.jsx)(b.a,{component:O.b,validate:[u.b,h],name:"newMessageBody",placeholder:"Enter your message"}),Object(d.jsx)("button",{children:"Send"})]})})})),f=(a(68),function(e){var s=e.dialogsPage;if(!e.isAuth)return Object(d.jsx)(j.a,{to:"/login"});var a=s.dialogs.map((function(e){return Object(d.jsx)(g,{name:e.name,id:e.id,avatar:e.avatar},e.id)})),t=s.messages.map((function(e){return Object(d.jsx)(l,{message:e.message,id:e.id},e.id)}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:o.a.dialogs,children:[Object(d.jsx)("div",{className:o.a.dialogsItems,children:a}),Object(d.jsx)("div",{className:o.a.messagesContainer,children:Object(d.jsx)("div",{className:o.a.messages,children:t})})]}),Object(d.jsx)(_,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})}),v=a(12),x=a(5),p=a(37),D=a(38),M=a(40),N=a(39),A=function(e){return{isAuth:e.auth.isAuth}},y=a(9);s.default=Object(y.d)(Object(v.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(t.b)(s))}}})),(function(e){var s=function(s){Object(M.a)(t,s);var a=Object(N.a)(t);function t(){return Object(p.a)(this,t),a.apply(this,arguments)}return Object(D.a)(t,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(e,Object(x.a)({},this.props)):Object(d.jsx)(j.a,{to:"/login"})}}]),t}(i.a.Component);return Object(v.b)(A)(s)}))(f)}}]);
//# sourceMappingURL=4.5c4b32c8.chunk.js.map