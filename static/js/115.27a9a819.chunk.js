"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[115],{6115:function(a,e,s){s.r(e),s.d(e,{default:function(){return F}});var t=s(7581),c=s(7781),n=s(9204),i=s(5927),r=s(3504),l={contacts__item:"Contact_contacts__item__+gfs0",active:"Contact_active__o9MaU",contacts__avatar:"Contact_contacts__avatar__l-dtB"},o=s(184),_=function(a){var e=a.contactInfo.map((function(e){if(a.id===e.id)return(0,o.jsx)("li",{className:"".concat(l.contacts__item," ","contacts__item"),children:(0,o.jsxs)(r.OL,{className:function(a){return a.isActive?l.active:l.item},to:"/messages/".concat(a.url),children:[(0,o.jsx)("div",{className:l.contacts__avatar,children:(0,o.jsx)("img",{src:e.avatar,alt:"1"})}),(0,o.jsx)("div",{children:e.name})]})},e.id)}));return(0,o.jsx)("div",{children:e})},d={contacts:"Contacts_contacts__Is8L2",contacts__title:"Contacts_contacts__title__6Xi+h"},u=function(a){var e=[2,3,4].map((function(e){return(0,o.jsx)(_,{id:e,contactInfo:a.state.block_MessagesPage.contact_data,url:"id_".concat(e)},e)}));return(0,o.jsxs)("div",{className:d.contacts,children:[(0,o.jsx)("h1",{className:d.contacts__title,children:"dialogs"}),(0,o.jsx)("ul",{className:d.list,children:e})]})},m=(s(2791),s(6871)),x=s(5705),h=s(132),v="SendBlock_send_block__afGpj",j="SendBlock_textarea__iLgih",g="SendBlock_send__z08Bj",f=function(a){var e=h.Ry().shape({textarea:h.Z_()});return(0,o.jsx)("div",{className:v,children:(0,o.jsx)(x.J9,{initialValues:{textarea:""},validateOnBlur:!0,onSubmit:function(e){var s;return""!==(s=e.textarea)&&a.store.onAddMessage(a.id.id,s),e.textarea=""},validationSchema:e,children:function(a){var e=a.values,s=a.handleChange,t=a.handleBlur,c=a.isValid,n=a.handleSubmit,i=a.dirty;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("textarea",{className:j,type:"text",name:"textarea",onChange:s,onBlur:t,value:e.textarea}),(0,o.jsx)("button",{className:g,disabled:!c&&!i,onClick:n,type:"button",children:"Send"})]})}})})},N="Message_message__o1vFp",p="Message_text__MnhJl",M="Message_name__RlHpl",k="Message_Mymessage__NlwIB",b="Message_avatar__1DWhJ",C="Message_ssd__Z5zGt",B=function(a){var e=a.store.block_MessagesPage.message["id_"+a.state.id].map((function(e){return"Posted"===e[0]?(0,o.jsxs)("div",{className:N,children:[(0,o.jsx)("div",{className:b,children:(0,o.jsx)("img",{src:"https://via.placeholder.com/100/000000/FF0000?text=WTF",alt:"1"})}),(0,o.jsxs)("div",{className:p,children:[(0,o.jsx)("div",{className:M,children:"cyka"}),"".concat(e[2])]})]},e[1]):"obtained"===e[0]?(0,o.jsxs)("div",{className:"".concat(N," ").concat(k),children:[(0,o.jsxs)("div",{className:p,children:[(0,o.jsx)("div",{className:M,children:"".concat(a.state.name)}),"".concat(e[2])]}),(0,o.jsx)("div",{className:b,children:(0,o.jsx)("img",{src:"".concat(a.state.avatar),alt:"1"})})]},e[1]):void 0}));return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:C,children:e}),(0,o.jsx)(f,{id:a.state,store:a.store})]})},y="Messages_block__message__8xldA",S=function(a){var e=a.state.block_MessagesPage.contact_data.map((function(e){return(0,o.jsx)(m.AW,{path:"id_".concat(e.id,"/*"),element:(0,o.jsx)(B,{state:e,store:a.state})},e.id)}));return(0,o.jsx)("div",{className:y,children:(0,o.jsx)(m.Z5,{children:e})})},P="Block_Messages_messages__block__8MNc9",A=function(a){return(0,o.jsxs)("div",{className:P,children:[(0,o.jsx)(u,{state:a}),(0,o.jsx)(S,{state:a})]})},F=(0,c.qC)((0,t.$j)((function(a){return{block_MessagesPage:a.block_MessagesPage}}),(function(a){return{onAddMessage:function(e,s){a((0,n.H)(e,s))}}})),i.D)(A)}}]);
//# sourceMappingURL=115.27a9a819.chunk.js.map