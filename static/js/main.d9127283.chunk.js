(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,a){},263:function(e,a,t){e.exports={header:"App_header__1gthY"}},264:function(e,a,t){e.exports={options:"Setup_options__w8eR9"}},301:function(e,a,t){e.exports=t(831)},306:function(e,a,t){},41:function(e,a,t){e.exports={parameter:"Parameter_parameter__3U4Bt",header:"Parameter_header__V08Wh",parameterType:"Parameter_parameterType__rPz-V",controls:"Parameter_controls__1hc0D",editButton:"Parameter_editButton__1AG8a",deleteButton:"Parameter_deleteButton__7LdFa"}},42:function(e,a,t){e.exports={header:"ParameterNode_header__kutRV",info:"ParameterNode_info__1fqdN",children:"ParameterNode_children__FgXFL",controls:"ParameterNode_controls__1DgCV"}},831:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(70),l=t.n(c),o=(t(306),t(254)),u=t(255),i=t(288),s=t(256),m=t(289),p=t(846),d=t(844),h=t(843),E=t(853),f=t(852),v=t(850),O=t(257),b=t(840),_=Object(b.a)(function(e){var a=e.history,t=e.name,n=e.path,c=e.exactMatch,l=e.location,o=Object(O.a)(l.pathname,{exact:c,path:n});return r.a.createElement(v.a.Item,{name:t,active:!!o,onClick:function(){return a.push(n)}},t)}),g=t(263),S=t.n(g),y=t(29),N=t.n(y),j=t(169),w=t(88),x=t(163),k=t(40),P=t(845),A=t(264),T=t.n(A),R={region:"eu-west-1",credentials:{accessKeyId:"",secretAccessKey:""}},C="_ssm_parameter_ui_options",D=function(){var e=Object(n.useState)(JSON.stringify(R,null,2)),a=Object(k.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)(function(){var e=localStorage.getItem(C);c(e||JSON.stringify(R,null,2))},[]),r.a.createElement(E.a,null,r.a.createElement(E.a.Row,null,r.a.createElement(E.a.Column,null,r.a.createElement(P.a,{onSubmit:function(){var e=JSON.stringify(JSON.parse(t),null,2);localStorage.setItem(C,e),c(e)}},r.a.createElement(P.a.TextArea,{className:T.a.options,label:"Options",name:"options",value:t,onChange:function(e){return c(e.target.value)},rows:10}),r.a.createElement(P.a.Button,null,"Save")))))},B=function(){var e=Object(w.a)(N.a.mark(function e(a,t){var n,r;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new x.SSM(JSON.parse(localStorage.getItem(C)||"{}")),e.next=3,n.getParametersByPath({Path:a,WithDecryption:!0,Recursive:!0,MaxResults:10,NextToken:t}).promise();case 3:if(!(r=e.sent).NextToken){e.next=15;break}return e.t0=[],e.t1=Object(j.a)(r.Parameters||[]),e.t2=j.a,e.next=10,B(a,r.NextToken);case 10:return e.t3=e.sent,e.t4=(0,e.t2)(e.t3),e.abrupt("return",e.t0.concat.call(e.t0,e.t1,e.t4));case 15:return e.abrupt("return",r.Parameters||[]);case 16:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),M=function(e){return B(e)},L=function(e){var a={path:"/",children:{}};return e.forEach(function(e){var t=e.Name.split("/");if(""===t[0]){a.children[t[1]]||(a.children[t[1]]={path:t[1],children:{}});for(var n=a.children[t[1]],r=2;r<t.length;r++)n.children[t[r]]?n=n.children[t[r]]:(n.children[t[r]]={path:t[r],children:{}},n=n.children[t[r]]),r===t.length-1&&(n.parameter=e)}else a.children||(a.children={}),a.children[t[0]]={path:t[0],parameter:e,children:{}}}),a},F=function(){var e=Object(w.a)(N.a.mark(function e(a){var t;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new x.SSM(JSON.parse(localStorage.getItem(C)||"{}")),e.abrupt("return",t.putParameter(a).promise());case 2:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}(),I=t(276),V=t.n(I),J=t(124),U="LOAD_PARAMETERS/LOAD",H="LOAD_PARAMETERS/SUCCEEDED",W="LOAD_PARAMETERS/FAILED",G={load:function(){return{type:U}},started:function(){return{type:"LOAD_PARAMETERS/STARTED"}},succeeded:function(e){return{type:H,payload:e}},failed:function(e){return{type:W,payload:e}}},X=t(848),z=t(854),K=t(842),Y=t(75),q=t(849),$=t(125),Q=t(41),Z=t.n(Q),ee=t(847),ae=t(841),te=function(e){var a=e.children,t=e.parameter,c=e.putParameter,l=void 0===c?F:c,o=e.path,u=Object(n.useState)(!1),i=Object(k.a)(u,2),s=i[0],m=i[1],p=Object(n.useState)(t?t.Type:"String"),d=Object(k.a)(p,2),h=d[0],E=d[1],f=Object(n.useState)(t?t.Name:o||":"),v=Object(k.a)(f,2),O=v[0],b=v[1],_=Object(n.useState)(t?t.Value:""),g=Object(k.a)(_,2),S=g[0],y=g[1],j=Object(n.useState)(!1),x=Object(k.a)(j,2),A=x[0],T=x[1],R=Object(n.useState)(null),C=Object(k.a)(R,2),D=C[0],B=C[1];return r.a.createElement(ee.a,{open:s,onClose:function(){return m(!1)},trigger:r.a.cloneElement(a,{onClick:function(){return m(!0)}})},r.a.createElement(ee.a.Header,null,t?"Update":"Create"," parameter"),r.a.createElement(ee.a.Content,null,r.a.createElement(ee.a.Description,null,r.a.createElement(P.a,{onSubmit:Object(w.a)(N.a.mark(function e(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),e.prev=1,e.next=4,l({Name:O,Type:h,Value:S,Overwrite:!!t});case 4:T(!1),m(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),B(e.t0);case 11:case"end":return e.stop()}},e,this,[[1,8]])}))},r.a.createElement(P.a.Field,null,r.a.createElement("label",null,"Name"),r.a.createElement("input",{name:"name",placeholder:"Name",value:O,onChange:function(e){return b(e.target.value)}})),r.a.createElement(P.a.Field,null,r.a.createElement("label",null,"Sensitive value?"),r.a.createElement(ae.a,{name:"type",placeholder:"Encrypt the value?",options:[{key:"SecureString",text:"Yes",value:"SecureString"},{key:"String",text:"No",value:"String"}],value:h,onChange:function(e,a){var t=a.value;return E(t)}})),r.a.createElement(P.a.Field,null,r.a.createElement("label",null,"Value"),r.a.createElement("input",{name:"value",placeholder:"Value",value:S,onChange:function(e){return y(e.target.value)}})),D&&r.a.createElement(X.a,{negative:!0},r.a.createElement(X.a.Header,null,"Error"),r.a.createElement("pre",null,D.stack)),r.a.createElement(q.a,{type:"submit",loading:A,disabled:A},"Save")))))},ne=function(e){var a=e.childNode;return r.a.createElement("div",{className:Z.a.parameter},r.a.createElement("div",{className:Z.a.header},r.a.createElement("span",{className:Z.a.path},a.path),r.a.createElement($.a,{as:"span",className:Z.a.parameterType,content:a.parameter.Type,icon:"SecureString"===a.parameter.Type?"lock":void 0}),r.a.createElement(q.a.Group,{className:Z.a.controls},r.a.createElement(te,{parameter:a.parameter},r.a.createElement(q.a,{icon:"pencil",className:Z.a.editButton})),r.a.createElement(q.a,{icon:"trash",className:Z.a.deleteButton}))),r.a.createElement("div",{className:Z.a.description},r.a.createElement("pre",null,a.parameter.Value)))},re=t(42),ce=t.n(re),le=t(168),oe=function e(a){var t=a.node,n=a.parentPath,c=n?n+t.path+"/":t.path;return r.a.createElement("div",{className:ce.a.parameterNode},r.a.createElement("div",{className:ce.a.header},r.a.createElement(Y.a,{name:"folder"}),r.a.createElement("div",{className:ce.a.info},r.a.createElement("div",{className:ce.a.name},t.path),r.a.createElement("div",{className:ce.a.description},c)),r.a.createElement(q.a.Group,{className:ce.a.controls},r.a.createElement(te,{path:c},r.a.createElement(q.a,{icon:"plus",className:ce.a.createButton})))),r.a.createElement("div",{className:ce.a.children},le.map(le.orderBy(t.children,function(e){return Object.keys(e.children).length>=1?e.path:"_".concat(e.path)},"asc"),function(a,t){return r.a.createElement(r.a.Fragment,{key:t},a.parameter&&r.a.createElement(ne,{childNode:a}),Object.keys(a.children).length>=1&&r.a.createElement(e,{key:t,node:a,parentPath:c}))})))},ue=t(127),ie={parameters:{loading:!0,error:null,value:null}},se=V()(Object(J.b)(function(e){return e.parameters},G))(function(e){return Object(n.useEffect)(function(){e.load()},[]),function(e){return null!==e.error}(e)?r.a.createElement(X.a,{negative:!0},r.a.createElement(X.a.Header,null,"Failed to load parameters."),r.a.createElement("pre",null,e.error.stack)):function(e){return e.loading}(e)?r.a.createElement(z.a,{active:!0},r.a.createElement(K.a,{size:"massive"},"Loading")):r.a.createElement(E.a,null,r.a.createElement(E.a.Row,null,r.a.createElement(E.a.Column,{width:16},r.a.createElement(oe,{node:e.value}))))}),me=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,null,r.a.createElement(E.a,null,r.a.createElement(E.a.Row,{className:S.a.header},r.a.createElement(E.a.Column,null,r.a.createElement(f.a,{as:"h1"},"SSM Parameter UI"))),r.a.createElement(E.a.Row,null,r.a.createElement(E.a.Column,null,r.a.createElement(v.a,null,r.a.createElement(_,{path:"/",exactMatch:!0,name:"Home"}),r.a.createElement(_,{path:"/setup",name:"Setup"}))))),r.a.createElement(d.a,{exact:!0,path:"/",component:function(){return r.a.createElement(se,null)}}),r.a.createElement(d.a,{exact:!0,path:"/setup",component:function(){return r.a.createElement(D,null)}}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=t(77),de=N.a.mark(fe),he=N.a.mark(ve),Ee=N.a.mark(Oe);function fe(){var e;return N.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(pe.b)(M,"/");case 3:return e=a.sent,a.next=6,Object(pe.c)({type:H,payload:L(e)});case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,Object(pe.c)({type:W,payload:a.t0});case 12:case"end":return a.stop()}},de,this,[[0,8]])}function ve(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(pe.d)(U,fe);case 2:case"end":return e.stop()}},he,this)}function Oe(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(pe.a)([ve()]);case 2:case"end":return e.stop()}},Ee,this)}var be=t(287),_e=t(54),ge=Object(be.a)(),Se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_e.c,ye=Object(_e.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOAD_PARAMETERS/STARTED":return Object(ue.a)({},e,{parameters:{loading:!0,error:null,value:null}});case H:return Object(ue.a)({},e,{parameters:{loading:!1,error:null,value:a.payload}});case W:return Object(ue.a)({},e,{parameters:{loading:!1,error:a.payload,value:null}});default:return e}},Se(Object(_e.a)(ge)));ge.run(Oe),l.a.render(r.a.createElement(J.a,{store:ye},r.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[301,1,2]]]);
//# sourceMappingURL=main.d9127283.chunk.js.map