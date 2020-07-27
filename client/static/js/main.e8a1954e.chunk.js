(this.webpackJsonpmybus_client=this.webpackJsonpmybus_client||[]).push([[0],{129:function(e,t,a){e.exports=a(167)},134:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),l=(a(134),a(29)),u=a(113),i=a(36),s=a(114),d=a(22),m=Object(i.b)({name:"form",initialState:{dialogStatus:null},reducers:{setDialogStatus:function(e,t){e.dialogStatus=t.payload}}}),f=m.actions.setDialogStatus,p=m.reducer,h=Object(i.b)({name:"requests",initialState:{},reducers:{updateSnackbar:function(){},showErrorAlert:function(){},showSuccessAlert:function(){},schedulesRequest:function(){},deleteScheduleRequest:function(){},createScheduleRequest:function(){},updateScheduleRequest:function(){}}}),b=h.actions,v=b.updateSnackbar,g=b.showErrorAlert,x=b.showSuccessAlert,k=b.schedulesRequest,y=b.deleteScheduleRequest,O=b.createScheduleRequest,w=b.updateScheduleRequest,j=h.reducer,E=Object(i.b)({name:"myschedules",initialState:{mail:"",token:"",dialogStatus:null,schedules:[]},reducers:{updateToken:function(e,t){e.token=t.payload},updateSchedules:function(e,t){var a=t.payload;e.schedules=a},addSchedule:function(e,t){e.schedules.push(t.payload)},updateSchedule:function(e,t){var a=t.payload.id;console.log(a);var n=e.schedules.findIndex((function(e){return e.id===a}));e.schedules[n]=t.payload},deleteSchedule:function(e,t){var a=e.schedules.findIndex((function(e){return e.id===t.payload}));e.schedules.splice(a,1)},loginRequest:function(e,t){e.mail=t.payload},setDialogStatus:function(e,t){e.dialogStatus=t.payload}}}),S=E.actions,C=S.updateToken,N=S.updateSchedules,A=S.addSchedule,R=S.updateSchedule,T=S.deleteSchedule,F=S.loginRequest,q=(S.setDialogStatus,E.reducer),M=Object(d.c)({form:p,requests:j,myschedules:q}),z=a(7),D=a.n(z),W=a(10),B=a(27),U=a(103),I=a.n(U),H=!1,L="/api/",Y="BD_5MmozAF-gMuVZcDaMHrdsYBUtRlkFizkFQZH7lyaM9RcDgh822UyNthQFzWXjs6we0DBdhbwxm8RtceUuntQ",P=a(104),Z=a.n(P),J=function(e){return new Promise((function(t){return setTimeout(t,e)}))},X=I.a.create({baseURL:L,headers:{auth:localStorage.token}}),$={status:200,data:{id:"3294a",mail:"bla213bla@bla.com",rule:{hour:52,minute:5}}},_=function(){var e=Object(B.a)(D.a.mark((function e(t){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!H){e.next=4;break}return e.next=3,J(250);case 3:return e.abrupt("return",{data:"392A8349ABs9359SA"});case 4:return e.next=7,X.post("login",t).catch((function(e){throw e.response}));case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(B.a)(D.a.mark((function e(t){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!H){e.next=4;break}return e.next=3,J(250);case 3:return e.abrupt("return",{data:[]});case 4:return e.next=6,X.get("schedules/mail/".concat(t)).catch((function(e){throw e.response}));case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(B.a)(D.a.mark((function e(t){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!H){e.next=4;break}return e.next=3,J(1250);case 3:return e.abrupt("return",{status:200,data:{id:Z.a.generate(),mail:"bla213bla@bla.com",rule:{hour:52,minute:5},bus:271,station:5,name:"test"}});case 4:return e.next=6,X.post("schedule",t).catch((function(e){throw e.response}));case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(B.a)(D.a.mark((function e(t,a){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!H){e.next=4;break}return e.next=3,J(250);case 3:return e.abrupt("return",$);case 4:return e.next=6,X.put("schedule/".concat(t),a).catch((function(e){throw e.response}));case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),V=function(){var e=Object(B.a)(D.a.mark((function e(t){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!H){e.next=4;break}return e.next=3,J(250);case 3:return e.abrupt("return",{status:200});case 4:return e.next=6,X.delete("schedule/".concat(t)).catch((function(e){throw e.response}));case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=a(34),te=Object(ee.a)(),ae=D.a.mark(he),ne=D.a.mark(be),re=D.a.mark(ve),ce=D.a.mark(ge),oe=D.a.mark(xe),le=D.a.mark(ke),ue=D.a.mark(ye),ie=D.a.mark(Oe),se=D.a.mark(we),de=D.a.mark(je),me=D.a.mark(Ee),fe=D.a.mark(Se),pe=D.a.mark(Ae);function he(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.f)(F.type,Oe);case 2:case"end":return e.stop()}}),ae)}function be(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.f)(k.type,we);case 2:case"end":return e.stop()}}),ne)}function ve(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.f)(y.type,je);case 2:case"end":return e.stop()}}),re)}function ge(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.f)(O.type,Ee);case 2:case"end":return e.stop()}}),ce)}function xe(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.f)(w.type,Se);case 2:case"end":return e.stop()}}),oe)}function ke(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.f)(v,D.a.mark((function e(t){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.c)("snackbar");case 2:a=e.sent,Object.assign(a,t.payload);case 4:case"end":return e.stop()}}),e)})));case 2:return e.next=4,Object(W.f)(g,D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.c)("snackbar");case 2:e.sent.enqueueSnackbar(t.payload,{variant:"error",autoHideDuration:2e3});case 4:case"end":return e.stop()}}),e)})));case 4:return e.next=6,Object(W.f)(x,D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.c)("snackbar");case 2:e.sent.enqueueSnackbar(t.payload,{variant:"success",autoHideDuration:2e3});case 4:case"end":return e.stop()}}),e)})));case 6:case"end":return e.stop()}}),le)}function ye(){var e,t;return D.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(console.log("init"),localStorage.auth){a.next=3;break}return a.abrupt("return");case 3:if(!(e=JSON.parse(localStorage.auth))){a.next=8;break}return t=e.mail,a.next=8,Object(W.d)(F(t));case 8:case"end":return a.stop()}}),ue)}function Oe(e){var t,a,n;return D.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=e.payload,r.next=4,Object(W.b)(_,{mail:t});case 4:return a=r.sent,n=a.data,console.log(n),localStorage.setItem("auth",JSON.stringify({token:n,mail:t})),r.next=10,Object(W.d)(C(n));case 10:return r.next=12,Object(W.b)(Ce);case 12:r.next=17;break;case 14:r.prev=14,r.t0=r.catch(0),console.log(r.t0.status);case 17:case"end":return r.stop()}}),ie,null,[[0,14]])}function we(){var e,t,a;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(W.e)();case 2:return e=n.sent,t=e.myschedules.mail,console.log(t),n.prev=5,n.next=8,Object(W.b)(G,t);case 8:return a=n.sent,console.log(a),n.next=12,Object(W.d)(N(a.data));case 12:return n.next=14,Object(W.d)(x("Got Schedules"));case 14:n.next=28;break;case 16:if(n.prev=16,n.t0=n.catch(5),401!==n.t0.status){n.next=25;break}return console.log("Unauthorized"),n.next=22,Object(W.b)(Ne);case 22:return n.abrupt("return");case 25:return n.next=27,Object(W.d)(g("Cant get schedules from server"));case 27:console.log(n.t0);case 28:case"end":return n.stop()}}),se,null,[[5,16]])}function je(e){var t;return D.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.prev=1,a.next=4,Object(W.b)(V,t);case 4:return a.sent,a.next=7,Object(W.d)(T(t));case 7:return a.next=9,Object(W.d)(x("Deleted"));case 9:a.next=24;break;case 11:if(a.prev=11,a.t0=a.catch(1),401!==a.t0.status){a.next=20;break}return console.log("Unauthorized"),a.next=17,Object(W.b)(Ne);case 17:return a.abrupt("return");case 20:return console.log("Error ".concat(a.t0.status)),a.next=23,Object(W.d)(g("Failed deleting, status ".concat(a.t0.status)));case 23:console.log(a.t0);case 24:case"end":return a.stop()}}),de,null,[[1,11]])}function Ee(e){var t,a;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(W.b)(K,t);case 4:return a=n.sent,console.log("==================="),console.log(a),console.log("==================="),n.next=10,Object(W.d)(A(a.data));case 10:return n.next=12,Object(W.d)(x("Created"));case 12:return n.next=14,Object(W.d)(f({success:!0,error:null}));case 14:n.next=31;break;case 16:if(n.prev=16,n.t0=n.catch(1),401!==n.t0.status){n.next=25;break}return console.log("Unauthorized"),n.next=22,Object(W.b)(Ne);case 22:return n.abrupt("return");case 25:return console.log("Error ".concat(n.t0.status)),n.next=28,Object(W.d)(g("Failed creating, status ".concat(n.t0.status)));case 28:return n.next=30,Object(W.d)(f({success:!1,error:n.t0.data.message}));case 30:console.log(n.t0);case 31:case"end":return n.stop()}}),me,null,[[1,16]])}function Se(e){var t,a;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,console.log(t),n.next=5,Object(W.b)(Q,t.id,t.data);case 5:return a=n.sent,n.next=8,Object(W.d)(R(a.data));case 8:return n.next=10,Object(W.d)(x("Updated"));case 10:return n.next=12,Object(W.d)(f({success:!0,error:null}));case 12:n.next=29;break;case 14:if(n.prev=14,n.t0=n.catch(1),401!==n.t0.status){n.next=23;break}return console.log("Unauthorized"),n.next=20,Object(W.b)(Ne);case 20:return n.abrupt("return");case 23:return console.log("Error ".concat(n.t0.status)),n.next=26,Object(W.d)(g("Failed updating, status ".concat(n.t0.status)));case 26:return n.next=28,Object(W.d)(f({success:!1,error:n.t0.data.message}));case 28:console.log(n.t0);case 29:case"end":return n.stop()}}),fe,null,[[1,14]])}function Ce(){te.push("/")}function Ne(){te.push("/login")}function Ae(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.a)([ye(),he(),be(),ve(),ge(),xe(),ke()]);case 2:case"end":return e.stop()}}),pe)}var Re=Object(s.a)({context:{snackbar:{}}}),Te=Object(i.a)({reducer:M,middleware:[].concat(Object(u.a)(Object(i.c)({serializableCheck:{ignoredActions:[v.type,f.type,O.type,g.type]}})),[Re])});Re.run(Ae);var Fe=Te,qe=(a(76),a(111)),Me=a(72),ze=a(19),De=a(226),We=a(112),Be=a(78),Ue=a.n(Be),Ie=a(46),He=a.n(Ie),Le=Object(De.a)(Object(We.a)({body:"#F5F5F5",text:"#363537",palette:{action:{selected:He.a[400],expanded:He.a[100]},background:{default:"#F5F5F5"},text:{primary:"#000000"},primary:He.a,secondary:Ue.a,type:"light"}})),Ye=Object(De.a)(Object(We.a)({body:"#363537",text:"#FAFAFA",palette:{action:{selected:He.a[600],expanded:He.a[100]},background:{default:"#363537"},text:{primary:"#ffffff"},primary:{main:He.a[600]},secondary:Ue.a,type:"dark"}})),Pe=a(208),Ze=r.a.createContext(null),Je=a(209),Xe=function(e){if(localStorage)return localStorage.getItem(e)},$e=function(e,t){if(localStorage)return localStorage.setItem(e,t)};function _e(e){var t=r.a.useState("true"===Xe("darkTheme")),a=Object(ze.a)(t,2),n=a[0],c=a[1],o={themeSwitch:function(){$e("darkTheme",!n),c(!n)}};return r.a.createElement(Ze.Provider,{value:o},r.a.createElement(Pe.a,{theme:n?Ye:Le},r.a.createElement(Je.a,null),e.children))}var Ge=a(207);var Ke=a(210),Qe=a(211),Ve=a(118),et=a(105),tt=a.n(et),at=Object(Ge.a)({header:{width:"100%",background:"rgba(0,0,0,0.1)",height:50},dark:{float:"right"},hello:{float:"left",padding:10}}),nt=function(){var e=at(),t=r.a.useContext(Ze),a=Object(l.c)((function(e){return e.myschedules.mail}));return r.a.createElement("div",{className:e.header},r.a.createElement(Ke.a,{className:e.dark,"aria-label":"theme",onClick:function(){return t.themeSwitch()}},r.a.createElement(Qe.a,null)),r.a.createElement(Ke.a,{className:e.hello,"aria-label":"leave",onClick:function(){te.push("/login")}},r.a.createElement(tt.a,null)),r.a.createElement(Ve.a,{className:e.hello},"Hello ".concat(a)))},rt=a(81),ct=a(206),ot=a(213),lt=a(214),ut=function(e){var t=e.hour,a=e.minute;return t=t<10?"0".concat(t):t,a=a<10?"0".concat(a):a,"".concat(t,":").concat(a)},it=a(212),st=a(106),dt=a.n(st),mt=a(107),ft=a.n(mt),pt=Object(Ge.a)({"@keyframes something":{"0%":{opacity:"0"},"100%":{opacity:"1"}},"@keyframes fly":{"0%":{transform:"translateX(-400%)"},"100%":{transform:"translateX(0%)"}},card:{position:"relative",color:"white",margin:"30px",height:"140px",width:"200px"},animate:{animation:"$fly 0.75s ease-out"},container:{display:"inline-block",position:"relative",width:"100%",verticalAlign:"middle",overflow:"hidden",zIndex:10},bus:{position:"absolute",right:0,top:0},forceTitle:{marginTop:5,width:"100%",position:"absolute",top:0,textAlign:"center",fontSize:"large",overflow:"hidden",textOverflow:"ellipsis",margin:"0 auto"},title:{},info:{margin:"0 auto",width:"50%",display:"flex",justifyContent:"space-around"},actions:{position:"absolute",height:30,bottom:5,width:"100%",display:"flex",justifyContent:"space-between"}}),ht=r.a.memo((function(e){var t=e.schedule,a=e.updateSchedule,n=e.deleteSchedule,c="".concat(ut(t.rule)),o=pt(),l=r.a.useState(!0),u=Object(ze.a)(l,2),i=u[0],s=u[1],d=r.a.useRef(!0);r.a.useEffect((function(){d.current?d.current=!1:(console.log("ahhaha"),s(!1))}));var m=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,n=0,r=0;r<e.length;r++)n=e.charCodeAt(r)+((n<<5)-n);var c=n%360;return"hsl("+c+", "+t+"%, "+a+"%)"}(t.id);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ct.a,{elevation:3,className:"".concat(o.card," ").concat(i?o.animate:null),style:{background:m}},r.a.createElement(it.a,{className:o.bus,badgeContent:t.bus,max:999,color:"primary"},r.a.createElement(dt.a,{fontSize:"small"})),r.a.createElement("div",{className:o.title},r.a.createElement("svg",{viewBox:"0 0 500 130",preserveAspectRatio:"xMinYMin meet"},r.a.createElement("path",{d:"M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z",style:{stroke:"none",fill:"rgba(0,0,0,0.2)"}})),r.a.createElement("div",{className:o.forceTitle},t.name)),r.a.createElement("div",{className:o.info},r.a.createElement(ft.a,{style:{marginTop:10}})," ",r.a.createElement("p",null,c)),r.a.createElement("div",{className:o.actions},r.a.createElement(Ke.a,{style:{color:"white"},"aria-label":"update",onClick:function(e){e.stopPropagation(),a(t)}},r.a.createElement(ot.a,null)),r.a.createElement(Ke.a,{style:{color:"white"},"aria-label":"delete",onClick:function(e){e.stopPropagation(),n(t)}},r.a.createElement(lt.a,null)))))})),bt=a(219),vt=a(225),gt=a(218),xt=a(216),kt=a(217),yt=a(215),Ot=a(201),wt=r.a.forwardRef((function(e,t){return r.a.createElement(Ot.a,Object.assign({direction:"up",ref:t},e))})),jt=function(e){var t=e.open,a=e.setOpen,n=e.item,c=e.onConfirm,o=function(){a(!1)},l="Delete ".concat(null===n||void 0===n?void 0:n.id,"?");return r.a.createElement(vt.a,{open:t,TransitionComponent:wt,keepMounted:!0,onClose:o,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(yt.a,{id:"alert-dialog-slide-title"},l),r.a.createElement(xt.a,null,r.a.createElement(kt.a,{id:"alert-dialog-slide-description"},"this will delete forever!")),r.a.createElement(gt.a,null,r.a.createElement(bt.a,{onClick:o,color:"primary"},"No"),r.a.createElement(bt.a,{onClick:function(){return c()},color:"primary"},"Yes")))},Et=Object(Ge.a)({content:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",padding:10},item:{margin:10,width:250,textAlign:"center",fontWeight:"bold"},center:{display:"flex",justifyContent:"center"}}),St=r.a.forwardRef((function(e,t){return r.a.createElement(Ot.a,Object.assign({direction:"up",ref:t},e))})),Ct=function(e){var t,a=e.open,n=e.setOpen,c=e.schedule,o=Et(),l=function(){n(!1)},u="Schedule ".concat(null===c||void 0===c?void 0:c.id);if(c){var i=Object.keys(c);t=Object.values(c).map((function(e,t){var a="rule"===i[t]?ut(e):e;return r.a.createElement("div",{key:t,className:o.item},"".concat(i[t],": ").concat(a))}))}return r.a.createElement(vt.a,{open:a,TransitionComponent:St,keepMounted:!0,onClose:l,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(yt.a,{id:"alert-dialog-slide-title",className:o.center},u),r.a.createElement(xt.a,{className:o.content},t),r.a.createElement(gt.a,null,r.a.createElement(bt.a,{onClick:l,color:"primary"},"ok")))},Nt=a(31),At=a(220),Rt=a(70),Tt=a(222),Ft=a(224),qt=a(109),Mt=a.n(qt),zt=a(108),Dt=a.n(zt),Wt=Y,Bt=Object(B.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=6;break}return console.log("Registering service worker"),e.next=4,It().catch((function(e){console.log(e)}));case 4:return t=e.sent,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));function Ut(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),a=window.atob(t),n=new Uint8Array(a.length),r=0;r<a.length;++r)n[r]=a.charCodeAt(r);return n}function It(){return Ht.apply(this,arguments)}function Ht(){return(Ht=Object(B.a)(D.a.mark((function e(){var t,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Registering service worker"),e.next=3,navigator.serviceWorker.register("".concat("","/worker.js"),{scope:"/public"}).catch((function(e){return console.log(e)}));case 3:return t=e.sent,console.log("Registered service worker"),console.log("Registering push"),console.log(t),e.next=9,t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ut(Wt)}).catch((function(e){return console.log(e)}));case 9:return a=e.sent,console.log("Registered push"),e.abrupt("return",a);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Lt=Object(Ge.a)({form:{display:"flex",flexWrap:"wrap",justifyContent:"flex-start",alignContent:"flex-start"},fields:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignContent:"flex-start"},advanced:{width:"90%","&.MuiExpansionPanel-root:before":{display:"none"}},fake:{width:200},tick:{marginTop:20,width:"100%",marginLeft:"5%"}}),Yt=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,Pt=function(e){var t=e.form,a=e.setForm,n=Lt(),c=r.a.useState(!1),o=Object(ze.a)(c,2),l=o[0],u=o[1],i=function(){var e=Object(B.a)(D.a.mark((function e(n){var r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.target.checked){e.next=9;break}return e.next=4,Bt();case 4:r=e.sent,console.log(r),a(Object(Nt.a)(Object(Nt.a)({},t),{},{checked:{touched:!0,value:r}})),e.next=10;break;case 9:a(Object(Nt.a)(Object(Nt.a)({},t),{},{checked:{touched:!0,value:!1}}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(e){a(Object(Nt.a)(Object(Nt.a)({},t),{},Object(Rt.a)({},e.target.name,{touched:!0,value:e.target.value})))},d=[];l&&(d=[r.a.createElement(Tt.a,{key:1,className:n.fake,margin:"normal",name:"trigger",label:"trigger time",value:t.trigger.value,type:"number",helperText:"Waits for bus to be X minutes from ur station",onChange:s}),r.a.createElement(Tt.a,{key:2,className:n.fake,margin:"normal",label:"notificates",name:"times",value:t.trigger.times,type:"number",helperText:"How much times to notificate?",onChange:s})]);var m=l?r.a.createElement(Dt.a,null):r.a.createElement(Mt.a,null);return r.a.createElement("div",{className:n.form},r.a.createElement("div",{className:n.fields},r.a.createElement(Tt.a,{error:function(){var e=Yt.test(String(t.mail.value).toLowerCase());return(!t.mail.value||!e)&&t.mail.touched}(),margin:"normal",name:"mail",required:!0,label:"Mail",value:t.mail.value,helperText:"",onChange:s}),r.a.createElement(Tt.a,{error:!t.name.value&&t.name.touched,margin:"normal",autoComplete:"off",name:"name",required:!0,label:"name",value:t.name.value,helperText:"",onChange:s}),r.a.createElement(Tt.a,{error:!t.bus.value&&t.bus.touched,margin:"normal",type:"number",name:"bus",required:!0,label:"bus line",value:t.bus.value,helperText:"",onChange:s}),r.a.createElement(Tt.a,{error:!t.station.value&&t.station.touched,margin:"normal",type:"number",name:"station",required:!0,label:"station id",value:t.station.value,helperText:"",onChange:s}),r.a.createElement(Tt.a,{error:!t.hour.value&&t.hour.touched,margin:"normal",name:"hour",label:"Hour",required:!0,value:t.hour.value,type:"number",helperText:"",onChange:s}),r.a.createElement(Tt.a,{error:!t.minute.value&&t.minute.touched,margin:"normal",name:"minute",label:"Minute",required:!0,value:t.minute.value,type:"number",helperText:"",onChange:s}),r.a.createElement("div",{className:n.tick},r.a.createElement(Ke.a,{onClick:function(){return u(!l)}},m),"Advanced fields"),d),r.a.createElement("div",{className:n.tick},r.a.createElement(Ft.a,{checked:!!t.checked.value,onChange:i,color:"primary",inputProps:{"aria-label":"secondary checkbox"}}),"use chrome notifications instead of mail?"))},Zt=Object(Ge.a)({error:{color:"red",padding:10,textAlign:"center",fontWeight:"bold"}}),Jt=r.a.forwardRef((function(e,t){return r.a.createElement(Ot.a,Object.assign({direction:"up",ref:t},e))})),Xt=Object(l.b)((function(e){return{dialogStatus:e.form.dialogStatus,loggedInMail:e.myschedules.mail}}),(function(e){return{createSchedule:function(t){return e(O(t))},updateSchedule:function(t){return e(w(t))}}}))((function(e){var t=e.schedule,a=e.open,c=e.setOpen,o=e.createSchedule,l=e.updateSchedule,u=e.dialogStatus,i=e.loggedInMail,s=Zt(),d=r.a.useState(null),m=Object(ze.a)(d,2),f=m[0],p=m[1],h=r.a.useState(!1),b=Object(ze.a)(h,2),v=b[0],g=b[1],x=r.a.useState({confirmDisabled:!0,mail:{touched:!1,value:""},name:{touched:!1,value:""},bus:{touched:!1,value:""},station:{touched:!1,value:""},trigger:{touched:!1,value:""},times:{touched:!1,value:""},hour:{touched:!1,value:""},minute:{touched:!1,value:""},checked:{touched:!1,value:!1}}),k=Object(ze.a)(x,2),y=k[0],O=k[1];Object(n.useEffect)((function(){(null===u||void 0===u?void 0:u.success)&&(c(!1),p(null),g(!1)),u&&!u.success&&(p(String(u.error)),g(!1))}),[u]),Object(n.useEffect)((function(){var e,a;t?O(Object(Nt.a)(Object(Nt.a)({},y),{},{mail:{touched:!1,value:(null===t||void 0===t?void 0:t.mail)||""},name:{touched:!1,value:(null===t||void 0===t?void 0:t.name)||""},hour:{touched:!1,value:(null===t||void 0===t||null===(e=t.rule)||void 0===e?void 0:e.hour)||""},minute:{touched:!1,value:(null===t||void 0===t||null===(a=t.rule)||void 0===a?void 0:a.minute)||""},bus:{touched:!1,value:(null===t||void 0===t?void 0:t.bus)||""},station:{touched:!1,value:(null===t||void 0===t?void 0:t.station)||""},trigger:{touched:!1,value:(null===t||void 0===t?void 0:t.trigger)||""},times:{touched:!1,value:(null===t||void 0===t?void 0:t.times)||""},checked:{touched:!1,value:(null===t||void 0===t?void 0:t.checked)||!1}})):O(Object(Nt.a)(Object(Nt.a)({},y),{},{mail:{touched:!1,value:i},name:{touched:!1,value:""},hour:{touched:!1,value:""},minute:{touched:!1,value:""},bus:{touched:!1,value:""},station:{touched:!1,value:""},trigger:{touched:!1,value:""},times:{touched:!1,value:""},checked:{touched:!1,value:!1}}));p(null),g(!1)}),[a]);var w=function(){c(!1)},j=t?"Update Schedule ".concat(null===t||void 0===t?void 0:t.id):"Add new schedule";return r.a.createElement(vt.a,{open:a,disableBackdropClick:!0,disableEscapeKeyDown:!0,TransitionComponent:Jt,keepMounted:!0,onClose:w,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},v&&r.a.createElement(At.a,null),r.a.createElement(yt.a,{id:"alert-dialog-slide-title"},j),r.a.createElement(xt.a,null,r.a.createElement(Pt,{form:y,setForm:O}),r.a.createElement("div",{className:s.error}," ",f," ")),r.a.createElement(gt.a,null,r.a.createElement(bt.a,{onClick:w,color:"primary"},"no"),r.a.createElement(bt.a,{onClick:function(){var e=y.mail,a=y.bus,n=y.station,r=y.trigger,c=y.times,u=y.hour,i=y.minute,s=y.checked,d=y.name,m={hour:u.value,minute:i.value},f={mail:e.value,name:d.value,bus:a.value,station:n.value,rule:m,trigger:r.value,times:c.value};Object.keys(f).forEach((function(e){return f[e]?{}:delete f[e]})),console.log(JSON.stringify(s.value)),s.value&&(f.webPushSub=s.value),console.log(f),g(!0),t?l({id:t.id,data:f}):o(f)},color:"primary",disabled:!y.mail.value||!y.name.value||!y.bus.value||!y.station.value||!y.hour.value||!y.minute.value},t?"Update":"Add")))})),$t=Object(Ge.a)({content:{maxHeight:"75vh",width:"100%",margin:"0 auto",padding:"20px",display:"flex",justifyContent:"center",flexWrap:"wrap",overflowY:"auto",overflowX:"hidden"},contentGrid:{listStyleType:"none",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(14rem, 1fr))",gridAutoRows:"8rem",gridGap:"1rem",padding:0,margin:0},noSchedules:{fontSize:"2em",fontWeight:"bold"}}),_t=Object(l.b)((function(e){return{schedules:e.myschedules.schedules}}),(function(e){return{updateSnackbar:function(t){return e(v(t))},getSchedules:function(){return e(k())},deleteSchedule:function(t){return e(y(t))}}}))((function(e){var t=e.getSchedules,a=e.deleteSchedule,c=e.schedules,o=e.updateSnackbar,l=$t(),u=Object(Me.b)(),i=r.a.useState(!1),s=Object(ze.a)(i,2),d=s[0],m=s[1],f=r.a.useState(!1),p=Object(ze.a)(f,2),h=p[0],b=p[1],v=r.a.useState(!1),g=Object(ze.a)(v,2),x=g[0],k=g[1];Object(n.useEffect)((function(){t()}),[t]),Object(n.useEffect)((function(){o(u)}),[u]);var y,O=function(e){m(e)},w=function(e){b(e)},j=function(){var e=Object(B.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();c.length>0?y=c.map((function(e){return r.a.createElement(rt.a,{flipId:e.id,key:e.id},r.a.createElement("div",{onClick:function(){return j(e)}},r.a.createElement(ht,{schedule:e,updateSchedule:O,deleteSchedule:w})))})):y=r.a.createElement("p",{className:l.noSchedules}," You don't have any schedules, be sure to create. ");return r.a.createElement(r.a.Fragment,null,r.a.createElement(rt.b,{flipKey:y.length},r.a.createElement("div",{className:l.content},y)),r.a.createElement(Xt,{open:!!d,setOpen:m,schedule:d}),r.a.createElement(jt,{open:!!h,setOpen:b,item:h,onConfirm:function(){a(h.id),b(!1)}}),r.a.createElement(Ct,{open:!!x,setOpen:k,schedule:x}))})),Gt=a(221),Kt=a(110),Qt=a.n(Kt),Vt=Object(Ge.a)({AddButton:{position:"absolute",bottom:0,right:0,margin:"10px"}}),ea=function(){var e=Vt(),t=r.a.useState(!1),a=Object(ze.a)(t,2),n=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Gt.a,{color:"primary","aria-label":"add",className:e.AddButton,onClick:function(){c(!0)}},r.a.createElement(Qt.a,null)),r.a.createElement(Xt,{open:n,setOpen:c}))},ta=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(nt,null),r.a.createElement(_t,null),r.a.createElement(ea,null))},aa=Object(Ge.a)({"@keyframes fly":{"0%":{transform:"translateY(-400%)"},"100%":{transform:"translateY(0%)"}},container:{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",width:"100%",overflow:"hidden"},formBox:{animation:"$fly 1s ease-out",height:400,width:"50%",minWidth:300,margin:"0 auto",position:"relative"},forceTitle:{marginTop:15,width:"100%",position:"absolute",top:0,textAlign:"center",fontSize:"large",overflow:"hidden",textOverflow:"ellipsis",margin:"0 auto"},form:{position:"absolute",width:"100%",bottom:0,display:"flex",justifyContent:"center"},mailField:{width:150}}),na=Object(l.b)((function(e){return{state:e}}),(function(e){return{login:function(t){return e(F(t))}}}))((function(e){var t=e.login,a=aa(),c=Object(n.useState)(""),o=Object(ze.a)(c,2),l=o[0],u=o[1];return r.a.useEffect((function(){localStorage.removeItem("auth")}),[]),r.a.createElement("div",{className:a.container},r.a.createElement(ct.a,{elevation:3,className:a.formBox},r.a.createElement("svg",{viewBox:"0 0 500 130",preserveAspectRatio:"xMinYMin meet"},r.a.createElement("path",{d:"M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z",style:{stroke:"none",fill:"rgba(0,0,0,0.2)"}})),r.a.createElement("div",{className:a.forceTitle},"Hello"),r.a.createElement("div",{className:a.form},r.a.createElement(Tt.a,{className:a.mailField,margin:"normal",variant:"outlined",label:"mail",name:"mail",type:"mail",onChange:function(e){return u(e.target.value)}}),r.a.createElement(bt.a,{margin:"normal",color:"primary",disabled:!l,onClick:function(){return t(l)}},"Login"))))})),ra=a(115),ca=Object(l.b)((function(e){return{token:e.myschedules.token}}))((function(e){var t=e.component,a=Object(ra.a)(e,["component"]);return r.a.createElement(qe.b,Object.assign({},a,{render:function(e){return a.token?r.a.createElement(t,e):r.a.createElement(qe.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}));var oa=function(){return r.a.createElement(l.a,{store:Fe},r.a.createElement(_e,null,r.a.createElement(Me.a,{maxSnack:3,style:{width:"50%"}},r.a.createElement(qe.c,{history:te},r.a.createElement(qe.d,null,r.a.createElement(qe.b,{exact:!0,path:"/login",component:na}),r.a.createElement(ca,{exact:!0,path:"/",component:ta}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(oa,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,t,a){}},[[129,1,2]]]);
//# sourceMappingURL=main.e8a1954e.chunk.js.map