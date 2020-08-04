(this.webpackJsonpmybus_client=this.webpackJsonpmybus_client||[]).push([[0],{131:function(e,t,a){e.exports=a(169)},136:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),u=(a(136),a(29)),l=a(114),i=a(36),s=a(115),d=a(22),m=Object(i.b)({name:"form",initialState:{dialogStatus:null},reducers:{setDialogStatus:function(e,t){e.dialogStatus=t.payload}}}),f=m.actions.setDialogStatus,p=m.reducer,h=Object(i.b)({name:"requests",initialState:{},reducers:{updateSnackbar:function(){},showErrorAlert:function(){},showSuccessAlert:function(){},schedulesRequest:function(){},deleteScheduleRequest:function(){},createScheduleRequest:function(){},updateScheduleRequest:function(){}}}),b=h.actions,v=b.updateSnackbar,g=b.showErrorAlert,x=b.showSuccessAlert,k=b.schedulesRequest,y=b.deleteScheduleRequest,w=b.createScheduleRequest,E=b.updateScheduleRequest,O=h.reducer,j=Object(i.b)({name:"myschedules",initialState:{mail:"",token:"",dialogStatus:null,schedules:null},reducers:{updateToken:function(e,t){e.token=t.payload},updateSchedules:function(e,t){var a=t.payload;e.schedules=a},addSchedule:function(e,t){e.schedules.push(t.payload)},updateSchedule:function(e,t){var a=t.payload.id;console.log(a);var n=e.schedules.findIndex((function(e){return e.id===a}));e.schedules[n]=t.payload},deleteSchedule:function(e,t){var a=e.schedules.findIndex((function(e){return e.id===t.payload}));e.schedules.splice(a,1)},loginRequest:function(e,t){e.mail=t.payload},setDialogStatus:function(e,t){e.dialogStatus=t.payload}}}),S=j.actions,C=S.updateToken,N=S.updateSchedules,T=S.addSchedule,A=S.updateSchedule,F=S.deleteSchedule,R=S.loginRequest,q=(S.setDialogStatus,j.reducer),z=Object(d.c)({form:p,requests:O,myschedules:q}),M=a(7),W=a.n(M),B=a(10),D=a(26),I=a(103),U=a.n(I),L=!1,P="/api/",H="BCD4EBerkE5vr8-MTicFVCVtL2-EEUORed8kRH4PncfX_S92s3ArP4uWJEt0-5ok0cos4uKxr4osFuelJzGNhSc",G=a(104),Y=a.n(G),J=function(e){return new Promise((function(t){return setTimeout(t,e)}))},X=U.a.create({baseURL:P,headers:{auth:localStorage.token}}),K=[{id:"3294a",name:"haha",mail:"blabla@bla.com",rule:{hour:9,minute:15},bus:126,station:3359},{id:"925bamba28",name:"arbuz23",mail:"blablaaa@bla.com",rule:{hour:15,minute:0},bus:171,station:1e3,scheduleTrigger:12},{id:"k0edCov0L",name:"arbuz",mail:"blablaaa@bla.com",rule:{hour:15,minute:22},bus:171,station:1e3},{id:"UV2TWMXak",name:"arbuz",mail:"blablaaa@bla.com",rule:{hour:15,minute:22},bus:171,station:1e3},{id:"xGEzN-iNG",name:"arbuz",mail:"blablaaa@bla.com",rule:{hour:15,minute:22},bus:171,station:1e3}],V={status:200,data:{id:"3294a",mail:"bla213bla@bla.com",rule:{hour:52,minute:5}}},Z=function(){var e=Object(D.a)(W.a.mark((function e(t){var a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!L){e.next=4;break}return e.next=3,J(250);case 3:return e.abrupt("return",{data:"392A8349ABs9359SA"});case 4:return e.next=7,X.post("login",t).catch((function(e){throw e.response}));case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(D.a)(W.a.mark((function e(t){var a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!L){e.next=4;break}return e.next=3,J(300);case 3:return e.abrupt("return",{data:K});case 4:return e.next=6,X.get("schedules/mail/".concat(t)).catch((function(e){throw e.response}));case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(D.a)(W.a.mark((function e(t){var a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!L){e.next=4;break}return e.next=3,J(300);case 3:return e.abrupt("return",{status:200,data:{id:Y.a.generate(),mail:"bla213bla@bla.com",rule:{hour:52,minute:5},bus:271,station:5,name:"test"}});case 4:return e.next=6,X.post("schedule",t).catch((function(e){throw e.response}));case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(D.a)(W.a.mark((function e(t,a){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!L){e.next=4;break}return e.next=3,J(250);case 3:return e.abrupt("return",V);case 4:return e.next=6,X.put("schedule/".concat(t),a).catch((function(e){throw e.response}));case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),ee=function(){var e=Object(D.a)(W.a.mark((function e(t){var a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!L){e.next=4;break}return e.next=3,J(250);case 3:return e.abrupt("return",{status:200});case 4:return e.next=6,X.delete("schedule/".concat(t)).catch((function(e){throw e.response}));case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=a(34),ae=Object(te.a)(),ne=W.a.mark(be),re=W.a.mark(ve),ce=W.a.mark(ge),oe=W.a.mark(xe),ue=W.a.mark(ke),le=W.a.mark(ye),ie=W.a.mark(we),se=W.a.mark(Ee),de=W.a.mark(Oe),me=W.a.mark(je),fe=W.a.mark(Se),pe=W.a.mark(Ce),he=W.a.mark(Ae);function be(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.f)(R.type,Ee);case 2:case"end":return e.stop()}}),ne)}function ve(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.f)(k.type,Oe);case 2:case"end":return e.stop()}}),re)}function ge(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.f)(y.type,je);case 2:case"end":return e.stop()}}),ce)}function xe(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.f)(w.type,Se);case 2:case"end":return e.stop()}}),oe)}function ke(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.f)(E.type,Ce);case 2:case"end":return e.stop()}}),ue)}function ye(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.f)(v,W.a.mark((function e(t){var a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.c)("snackbar");case 2:a=e.sent,Object.assign(a,t.payload);case 4:case"end":return e.stop()}}),e)})));case 2:return e.next=4,Object(B.f)(g,W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.c)("snackbar");case 2:e.sent.enqueueSnackbar(t.payload,{variant:"error",autoHideDuration:2e3});case 4:case"end":return e.stop()}}),e)})));case 4:return e.next=6,Object(B.f)(x,W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.c)("snackbar");case 2:e.sent.enqueueSnackbar(t.payload,{variant:"success",autoHideDuration:2e3});case 4:case"end":return e.stop()}}),e)})));case 6:case"end":return e.stop()}}),le)}function we(){var e,t;return W.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(localStorage.auth){a.next=2;break}return a.abrupt("return");case 2:if(!(e=JSON.parse(localStorage.auth))){a.next=7;break}return t=e.mail,a.next=7,Object(B.d)(R(t));case 7:case"end":return a.stop()}}),ie)}function Ee(e){var t,a,n,r;return W.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,t=e.payload,c.next=4,Object(B.b)(Z,{mail:t});case 4:return a=c.sent,n=a.data,localStorage.setItem("auth",JSON.stringify({token:n,mail:t})),c.next=9,Object(B.d)(f({success:!0,error:null}));case 9:return c.next=11,Object(B.d)(C(n));case 11:return c.next=13,Object(B.b)(Ne);case 13:c.next=29;break;case 15:if(c.prev=15,c.t0=c.catch(0),401!==c.t0.status){c.next=24;break}return console.log("Unauthorized"),c.next=21,Object(B.d)(f({success:!1,error:c.t0.data.message}));case 21:return c.abrupt("return");case 24:return console.log("Error ".concat(c.t0.status)),r=void 0===c.t0.data.message?"Error contacting server":c.t0.data.message,c.next=28,Object(B.d)(f({success:!1,error:r}));case 28:console.log(c.t0);case 29:case"end":return c.stop()}}),se,null,[[0,15]])}function Oe(){var e,t,a;return W.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(B.e)();case 2:return e=n.sent,t=e.myschedules.mail,n.prev=4,n.next=7,Object(B.b)($,t);case 7:return a=n.sent,n.next=10,Object(B.d)(N(a.data));case 10:return n.next=12,Object(B.d)(x("Got Schedules"));case 12:n.next=26;break;case 14:if(n.prev=14,n.t0=n.catch(4),401!==n.t0.status){n.next=23;break}return console.log("Unauthorized"),n.next=20,Object(B.b)(Te);case 20:return n.abrupt("return");case 23:return n.next=25,Object(B.d)(g("Cant get schedules from server"));case 25:console.log(n.t0);case 26:case"end":return n.stop()}}),de,null,[[4,14]])}function je(e){var t;return W.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.prev=1,a.next=4,Object(B.b)(ee,t);case 4:return a.next=6,Object(B.d)(F(t));case 6:return a.next=8,Object(B.d)(x("Deleted"));case 8:a.next=23;break;case 10:if(a.prev=10,a.t0=a.catch(1),401!==a.t0.status){a.next=19;break}return console.log("Unauthorized"),a.next=16,Object(B.b)(Te);case 16:return a.abrupt("return");case 19:return console.log("Error ".concat(a.t0.status)),a.next=22,Object(B.d)(g("Failed deleting, status ".concat(a.t0.status)));case 22:console.log(a.t0);case 23:case"end":return a.stop()}}),me,null,[[1,10]])}function Se(e){var t,a;return W.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(B.b)(_,t);case 4:return a=n.sent,n.next=7,Object(B.d)(T(a.data));case 7:return n.next=9,Object(B.d)(x("Created"));case 9:return n.next=11,Object(B.d)(f({success:!0,error:null}));case 11:n.next=28;break;case 13:if(n.prev=13,n.t0=n.catch(1),401!==n.t0.status){n.next=22;break}return console.log("Unauthorized"),n.next=19,Object(B.b)(Te);case 19:return n.abrupt("return");case 22:return console.log("Error ".concat(n.t0.status)),n.next=25,Object(B.d)(g("Failed creating, status ".concat(n.t0.status)));case 25:return n.next=27,Object(B.d)(f({success:!1,error:n.t0.data.message}));case 27:console.log(n.t0);case 28:case"end":return n.stop()}}),fe,null,[[1,13]])}function Ce(e){var t,a;return W.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(B.b)(Q,t.id,t.data);case 4:return a=n.sent,n.next=7,Object(B.d)(A(a.data));case 7:return n.next=9,Object(B.d)(x("Updated"));case 9:return n.next=11,Object(B.d)(f({success:!0,error:null}));case 11:n.next=28;break;case 13:if(n.prev=13,n.t0=n.catch(1),401!==n.t0.status){n.next=22;break}return console.log("Unauthorized"),n.next=19,Object(B.b)(Te);case 19:return n.abrupt("return");case 22:return console.log("Error ".concat(n.t0.status)),n.next=25,Object(B.d)(g("Failed updating, status ".concat(n.t0.status)));case 25:return n.next=27,Object(B.d)(f({success:!1,error:n.t0.data.message}));case 27:console.log(n.t0);case 28:case"end":return n.stop()}}),pe,null,[[1,13]])}function Ne(){ae.push("/")}function Te(){ae.push("/login")}function Ae(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.a)([we(),be(),ve(),ge(),xe(),ke(),ye()]);case 2:case"end":return e.stop()}}),he)}var Fe=Object(s.a)({context:{snackbar:{}}}),Re=Object(i.a)({reducer:z,middleware:[].concat(Object(l.a)(Object(i.c)({serializableCheck:{ignoredActions:[v.type,f.type,w.type,g.type]}})),[Fe])});Fe.run(Ae);var qe=Re,ze=(a(76),a(112)),Me=a(72),We=a(19),Be=a(227),De=a(113),Ie=a(78),Ue=a.n(Ie),Le=a(47),Pe=a.n(Le),He=Object(Be.a)(Object(De.a)({body:"#F5F5F5",text:"#363537",palette:{action:{selected:Pe.a[400],expanded:Pe.a[100]},background:{default:"#F5F5F5"},text:{primary:"#000000"},primary:Pe.a,secondary:Ue.a,type:"light"}})),Ge=Object(Be.a)(Object(De.a)({body:"#363537",text:"#FAFAFA",palette:{action:{selected:Pe.a[600],expanded:Pe.a[100]},background:{default:"#363537"},text:{primary:"#ffffff"},primary:{main:Pe.a[600]},secondary:Ue.a,type:"dark"}})),Ye=a(209),Je=r.a.createContext(null),Xe=a(210),Ke=function(e){if(localStorage)return localStorage.getItem(e)},Ve=function(e,t){if(localStorage)return localStorage.setItem(e,t)};function Ze(e){var t=r.a.useState("true"===Ke("darkTheme")),a=Object(We.a)(t,2),n=a[0],c=a[1],o={themeSwitch:function(){Ve("darkTheme",!n),c(!n)}};return r.a.createElement(Je.Provider,{value:o},r.a.createElement(Ye.a,{theme:n?He:Ge},r.a.createElement(Xe.a,null),e.children))}var $e=a(208);var _e,Qe=a(211),et=a(212),tt=a(119),at=a(105),nt=a.n(at),rt=Object($e.a)({header:{width:"100%",background:"rgba(0,0,0,0.1)",height:50},dark:{float:"right"},hello:{float:"left",padding:10}}),ct=function(){var e=rt(),t=r.a.useContext(Je),a=Object(u.c)((function(e){return e.myschedules.mail}));return r.a.createElement("div",{className:e.header},r.a.createElement(Qe.a,{className:e.dark,"aria-label":"theme",onClick:function(){return t.themeSwitch()}},r.a.createElement(et.a,null)),r.a.createElement(Qe.a,{className:e.hello,"aria-label":"leave",onClick:function(){localStorage.removeItem("auth"),ae.push("/login")}},r.a.createElement(nt.a,null)),r.a.createElement(tt.a,{className:e.hello},"Hello ".concat(a)))},ot=a(81),ut=a(207),lt=a(214),it=a(215),st=function(e){var t=e.hour,a=e.minute;return t=t<10?"0".concat(t):t,a=a<10?"0".concat(a):a,"".concat(t,":").concat(a)},dt=a(213),mt=a(106),ft=a.n(mt),pt=a(107),ht=a.n(pt),bt=Object($e.a)({"@keyframes something":{"0%":{opacity:"0"},"100%":{opacity:"1"}},"@keyframes fly":{"0%":{transform:"translateX(-400%)"},"100%":{transform:"translateX(0%)"}},card:{position:"relative",color:"white",margin:"30px",height:"140px",width:"200px"},animate:{animation:"$fly 0.75s ease-out"},container:{display:"inline-block",position:"relative",width:"100%",verticalAlign:"middle",overflow:"hidden",zIndex:10},bus:{position:"absolute",right:0,top:0},forceTitle:{marginTop:5,width:"100%",position:"absolute",top:0,textAlign:"center",fontSize:"large",overflow:"hidden",textOverflow:"ellipsis",margin:"0 auto"},title:{},info:{margin:"0 auto",width:"50%",display:"flex",justifyContent:"space-around"},actions:{position:"absolute",height:30,bottom:5,width:"100%",display:"flex",justifyContent:"space-between"}}),vt=r.a.memo((function(e){var t=e.schedule,a=e.updateSchedule,n=e.deleteSchedule,c="".concat(st(t.rule)),o=bt(),u=r.a.useState(!0),l=Object(We.a)(u,2),i=l[0],s=l[1],d=r.a.useRef(!0);r.a.useEffect((function(){d.current?d.current=!1:s(!1)}));var m=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,n=0,r=0;r<e.length;r++)n=e.charCodeAt(r)+((n<<5)-n);var c=n%160;return"hsl("+c+", "+t+"%, "+a+"%)"}(t.id);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ut.a,{elevation:3,className:"".concat(o.card," ").concat(i?o.animate:null),style:{background:m}},r.a.createElement(dt.a,{className:o.bus,badgeContent:t.bus,max:999,color:"primary"},r.a.createElement(ft.a,{fontSize:"small"})),r.a.createElement("div",{className:o.title},r.a.createElement("svg",{viewBox:"0 0 500 130",preserveAspectRatio:"xMinYMin meet"},r.a.createElement("path",{d:"M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z",style:{stroke:"none",fill:"rgba(0,0,0,0.2)"}})),r.a.createElement("div",{className:o.forceTitle},t.name)),r.a.createElement("div",{className:o.info},r.a.createElement(ht.a,{style:{marginTop:10}})," ",r.a.createElement("p",null,c)),r.a.createElement("div",{className:o.actions},r.a.createElement(Qe.a,{style:{color:"white"},"aria-label":"update",onClick:function(e){e.stopPropagation(),a(t)}},r.a.createElement(lt.a,null)),r.a.createElement(Qe.a,{style:{color:"white"},"aria-label":"delete",onClick:function(e){e.stopPropagation(),n(t)}},r.a.createElement(it.a,null)))))})),gt=a(220),xt=a(226),kt=a(219),yt=a(217),wt=a(218),Et=a(216),Ot=a(202),jt=r.a.forwardRef((function(e,t){return r.a.createElement(Ot.a,Object.assign({direction:"up",ref:t},e))})),St=function(e){var t=e.open,a=e.setOpen,n=e.item,c=e.onConfirm,o=function(){a(!1)},u="Delete ".concat((null===n||void 0===n?void 0:n.name)||"","?");return r.a.createElement(xt.a,{open:t,TransitionComponent:jt,keepMounted:!0,onClose:o,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(Et.a,{id:"alert-dialog-slide-title"},u),r.a.createElement(yt.a,null,r.a.createElement(wt.a,{id:"alert-dialog-slide-description"},"this will delete forever!")),r.a.createElement(kt.a,null,r.a.createElement(gt.a,{onClick:o,color:"primary"},"No"),r.a.createElement(gt.a,{onClick:function(){return c()},color:"primary"},"Yes")))},Ct=Object($e.a)({content:{minHeight:100,display:"flex",flexWrap:"wrap",justifyContent:"space-around",padding:10},item:{margin:10,width:250,textAlign:"center",fontWeight:"bold"},center:{display:"flex",justifyContent:"center"}}),Nt=r.a.forwardRef((function(e,t){return r.a.createElement(Ot.a,Object.assign({direction:"up",ref:t},e))})),Tt=function(e){var t,a=e.open,n=e.setOpen,c=e.schedule,o=Ct(),u=function(){n(!1)},l="Schedule ".concat((null===c||void 0===c?void 0:c.name)||"");if(c){var i=Object.keys(c);t=Object.values(c).map((function(e,t){var a="rule"===i[t]?st(e):e;return r.a.createElement("div",{key:t,className:o.item},"".concat(i[t],": ").concat(a))}))}return r.a.createElement(xt.a,{open:a,TransitionComponent:Nt,keepMounted:!0,onClose:u,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(Et.a,{id:"alert-dialog-slide-title",className:o.center},l),r.a.createElement(yt.a,{className:o.content},t),r.a.createElement(kt.a,null,r.a.createElement(gt.a,{onClick:u,color:"primary"},"ok")))},At=a(31),Ft=a(221),Rt=a(70),qt=a(223),zt=a(225),Mt=a(109),Wt=a.n(Mt),Bt=a(108),Dt=a.n(Bt),It=H;Object(D.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Registering service worker"),!("serviceWorker"in navigator)){e.next=8;break}return e.next=4,navigator.serviceWorker.register("".concat("","/worker.js"),{scope:"/public"}).catch((function(e){return console.log(e)}));case 4:_e=e.sent,console.log("Registered service worker"),e.next=9;break;case 8:console.log("no service worker");case 9:case"end":return e.stop()}}),e)})))();var Ut=Object(D.a)(W.a.mark((function e(){var t;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=6;break}return console.log("Registering service worker"),e.next=4,Pt().catch((function(e){console.log(e)}));case 4:return t=e.sent,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));function Lt(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),a=window.atob(t),n=new Uint8Array(a.length),r=0;r<a.length;++r)n[r]=a.charCodeAt(r);return n}function Pt(){return Ht.apply(this,arguments)}function Ht(){return(Ht=Object(D.a)(W.a.mark((function e(){var t;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Lt(It)}).catch((function(e){return console.log(e)}));case 2:return t=e.sent,console.log("Registered push"),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Gt=Object($e.a)({form:{display:"flex",flexWrap:"wrap",justifyContent:"flex-start",alignContent:"flex-start"},fields:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignContent:"flex-start"},advanced:{width:"90%","&.MuiExpansionPanel-root:before":{display:"none"}},fake:{width:200},tick:{marginTop:20,width:"100%",marginLeft:"5%"}}),Yt=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,Jt=function(e){var t=e.form,a=e.setForm,n=e.setLoading,c=Gt(),o=r.a.useState(!1),u=Object(We.a)(o,2),l=u[0],i=u[1],s=function(){var e=Object(D.a)(W.a.mark((function e(r){var c;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.target.checked){e.next=10;break}return n(!0),e.next=5,Ut();case 5:c=e.sent,a(Object(At.a)(Object(At.a)({},t),{},{checked:{touched:!0,value:c||!1}})),n(!1),e.next=11;break;case 10:a(Object(At.a)(Object(At.a)({},t),{},{checked:{touched:!0,value:!1}}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){a(Object(At.a)(Object(At.a)({},t),{},Object(Rt.a)({},e.target.name,{touched:!0,value:e.target.value})))},m=[];l&&(m=[r.a.createElement(qt.a,{key:1,className:c.fake,margin:"normal",name:"scheduleTrigger",label:"trigger time",value:t.scheduleTrigger.value,type:"number",helperText:"Waits for bus to be X minutes from ur station and only then notificates\r example: if value 12 is given, the service will wait for bus to be 12minutes or less from station and only then notificate",onChange:d}),r.a.createElement(qt.a,{key:2,className:c.fake,margin:"normal",label:"how many times?",name:"times",value:t.times.value,type:"number",helperText:"How many times to perform the notification? In case you might want the next bus. default value: 1",onChange:d})]);var f=l?r.a.createElement(Dt.a,null):r.a.createElement(Wt.a,null);return r.a.createElement("div",{className:c.form},r.a.createElement("div",{className:c.fields},r.a.createElement(qt.a,{error:function(){var e=Yt.test(String(t.mail.value).toLowerCase());return(!t.mail.value||!e)&&t.mail.touched}(),className:c.fake,margin:"normal",name:"mail",required:!0,label:"Mail",value:t.mail.value,helperText:"",onChange:d}),r.a.createElement(qt.a,{error:!t.name.value&&t.name.touched,className:c.fake,margin:"normal",autoComplete:"off",name:"name",required:!0,label:"name",value:t.name.value,helperText:"",onChange:d}),r.a.createElement(qt.a,{error:!t.bus.value&&t.bus.touched,className:c.fake,margin:"normal",type:"number",name:"bus",required:!0,label:"bus number",value:t.bus.value,helperText:"Example: 171",onChange:d}),r.a.createElement(qt.a,{error:!t.station.value&&t.station.touched,className:c.fake,margin:"normal",type:"number",name:"station",required:!0,label:"station id",value:t.station.value,helperText:"station number, find it on google maps",onChange:d}),r.a.createElement(qt.a,{error:!t.hour.value&&t.hour.touched,className:c.fake,margin:"normal",name:"hour",label:"Hour",required:!0,value:t.hour.value,type:"number",helperText:"Good: 9,  bad: 9:00",onChange:d}),r.a.createElement(qt.a,{error:!t.minute.value&&t.minute.touched,className:c.fake,margin:"normal",name:"minute",label:"Minute",required:!0,value:t.minute.value,type:"number",helperText:"Good: 30 or 5",onChange:d}),r.a.createElement("div",{className:c.tick},r.a.createElement(Qe.a,{onClick:function(){return i(!l)}},f),"Advanced fields"),m),r.a.createElement("div",{className:c.tick},r.a.createElement(zt.a,{checked:!!t.checked.value,onChange:s,color:"primary",inputProps:{"aria-label":"secondary checkbox"}}),"use chrome notifications instead of mail?"))},Xt=Object($e.a)({error:{color:"red",padding:10,textAlign:"center",fontWeight:"bold"}}),Kt=r.a.forwardRef((function(e,t){return r.a.createElement(Ot.a,Object.assign({direction:"up",ref:t},e))})),Vt=Object(u.b)((function(e){return{dialogStatus:e.form.dialogStatus,loggedInMail:e.myschedules.mail}}),(function(e){return{createSchedule:function(t){return e(w(t))},updateSchedule:function(t){return e(E(t))}}}))((function(e){var t=e.schedule,a=e.open,c=e.setOpen,o=e.createSchedule,u=e.updateSchedule,l=e.dialogStatus,i=e.loggedInMail,s=Xt(),d=r.a.useState(null),m=Object(We.a)(d,2),f=m[0],p=m[1],h=r.a.useState(!1),b=Object(We.a)(h,2),v=b[0],g=b[1],x=r.a.useState({confirmDisabled:!0,mail:{touched:!1,value:""},name:{touched:!1,value:""},bus:{touched:!1,value:""},station:{touched:!1,value:""},scheduleTrigger:{touched:!1,value:""},times:{touched:!1,value:""},hour:{touched:!1,value:""},minute:{touched:!1,value:""},checked:{touched:!1,value:!1}}),k=Object(We.a)(x,2),y=k[0],w=k[1];Object(n.useEffect)((function(){(null===l||void 0===l?void 0:l.success)&&(c(!1),p(null),g(!1)),l&&!l.success&&(p(String(l.error)),g(!1))}),[l]),Object(n.useEffect)((function(){if(t){var e,a,n=null===t||void 0===t||null===(e=t.rule)||void 0===e?void 0:e.hour;void 0!==n&&null!==n||(n="");var r=null===t||void 0===t||null===(a=t.rule)||void 0===a?void 0:a.minute;void 0!==r&&null!==r||(r=""),w(Object(At.a)(Object(At.a)({},y),{},{mail:{touched:!1,value:(null===t||void 0===t?void 0:t.mail)||""},name:{touched:!1,value:(null===t||void 0===t?void 0:t.name)||""},hour:{touched:!1,value:String(n)},minute:{touched:!1,value:String(r)},bus:{touched:!1,value:(null===t||void 0===t?void 0:t.bus)||""},station:{touched:!1,value:(null===t||void 0===t?void 0:t.station)||""},scheduleTrigger:{touched:!1,value:(null===t||void 0===t?void 0:t.scheduleTrigger)||""},times:{touched:!1,value:(null===t||void 0===t?void 0:t.times)||""},checked:{touched:!1,value:!!(null===t||void 0===t?void 0:t.webPushSub)}}))}else w(Object(At.a)(Object(At.a)({},y),{},{mail:{touched:!1,value:i},name:{touched:!1,value:""},hour:{touched:!1,value:""},minute:{touched:!1,value:""},bus:{touched:!1,value:""},station:{touched:!1,value:""},scheduleTrigger:{touched:!1,value:""},times:{touched:!1,value:""},checked:{touched:!1,value:!1}}));p(null),g(!1)}),[a]);var E=function(){c(!1)},O=t?"Update Schedule ".concat(null===t||void 0===t?void 0:t.name):"Add new schedule";return r.a.createElement(xt.a,{open:a,disableBackdropClick:!0,disableEscapeKeyDown:!0,TransitionComponent:Kt,keepMounted:!0,onClose:E,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},v&&r.a.createElement(Ft.a,null),r.a.createElement(Et.a,{id:"alert-dialog-slide-title"},O),r.a.createElement(yt.a,null,r.a.createElement(Jt,{form:y,setForm:w,setLoading:g}),r.a.createElement("div",{className:s.error}," ",f," ")),r.a.createElement(kt.a,null,r.a.createElement(gt.a,{onClick:E,color:"primary"},"no"),r.a.createElement(gt.a,{onClick:function(){var e=y.mail,a=y.bus,n=y.station,r=y.scheduleTrigger,c=y.times,l=y.hour,i=y.minute,s=y.checked,d=y.name,m=r.touched?r.value||null:"",f=c.touched?c.value||null:"",p={hour:Number(l.value),minute:Number(i.value)},h={mail:e.value,name:d.value,bus:a.value,station:n.value,rule:p,scheduleTrigger:m,times:f};Object.keys(h).forEach((function(e){return""===h[e]||void 0===h[e]?delete h[e]:{}})),s.touched&&(h.webPushSub=s.value||!1),g(!0),t?u({id:t.id,data:h}):o(h)},color:"primary",disabled:!y.mail.value||!y.name.value||!y.bus.value||!y.station.value||!y.hour.value||!y.minute.value},t?"Update":"Add")))})),Zt=Object($e.a)({content:{maxHeight:"85vh",width:"100%",margin:"0 auto",padding:"20px",display:"flex",justifyContent:"center",flexWrap:"wrap",overflowY:"auto",overflowX:"hidden"},contentGrid:{listStyleType:"none",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(14rem, 1fr))",gridAutoRows:"8rem",gridGap:"1rem",padding:0,margin:0},noSchedules:{fontSize:"2em",fontWeight:"bold"}}),$t=Object(u.b)((function(e){return{schedules:e.myschedules.schedules}}),(function(e){return{updateSnackbar:function(t){return e(v(t))},getSchedules:function(){return e(k())},deleteSchedule:function(t){return e(y(t))}}}))((function(e){var t=e.getSchedules,a=e.deleteSchedule,c=e.schedules,o=e.updateSnackbar,u=Zt(),l=Object(Me.b)(),i=r.a.useState(!1),s=Object(We.a)(i,2),d=s[0],m=s[1],f=r.a.useState(!1),p=Object(We.a)(f,2),h=p[0],b=p[1],v=r.a.useState(!1),g=Object(We.a)(v,2),x=g[0],k=g[1];Object(n.useEffect)((function(){t()}),[t]),Object(n.useEffect)((function(){o(l)}),[l]);var y=function(e){m(e)},w=function(e){b(e)},E=function(){var e=Object(D.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=[];c&&(O=c.length>0?c.map((function(e){return r.a.createElement(ot.a,{flipId:e.id,key:e.id},r.a.createElement("div",{onClick:function(){return E(e)}},r.a.createElement(vt,{schedule:e,updateSchedule:y,deleteSchedule:w})))})):r.a.createElement("p",{className:u.noSchedules}," You don't have any schedules, be sure to create. "));return r.a.createElement(r.a.Fragment,null,!c&&r.a.createElement(Ft.a,null),r.a.createElement(ot.b,{flipKey:O.length},r.a.createElement("div",{className:u.content},O)),r.a.createElement(Vt,{open:!!d,setOpen:m,schedule:d}),r.a.createElement(St,{open:!!h,setOpen:b,item:h,onConfirm:function(){a(h.id),b(!1)}}),r.a.createElement(Tt,{open:!!x,setOpen:k,schedule:x}))})),_t=a(222),Qt=a(110),ea=a.n(Qt),ta=Object($e.a)({AddButton:{position:"absolute",bottom:0,right:0,margin:"20px"}}),aa=function(){var e=ta(),t=r.a.useState(!1),a=Object(We.a)(t,2),n=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(_t.a,{color:"primary","aria-label":"add",className:e.AddButton,onClick:function(){c(!0)}},r.a.createElement(ea.a,null)),r.a.createElement(Vt,{open:n,setOpen:c}))},na=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ct,null),r.a.createElement($t,null),r.a.createElement(aa,null))},ra=a(111),ca=a.n(ra),oa=Object($e.a)({"@keyframes fly":{"0%":{transform:"translateY(-400%)"},"100%":{transform:"translateY(0%)"}},svgContainer:{display:"inline-block",position:"relative",width:"100%",paddingBottom:"100%",verticalAlign:"middle",overflow:"hidden"},svgContent:{display:"inline-block",position:"absolute",top:0,left:0},container:{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",width:"100%",overflow:"hidden"},formBox:{animation:"$fly 1s ease-out",height:400,width:"50%",minWidth:300,margin:"0 auto",position:"relative"},forceTitle:{marginTop:15,width:"100%",position:"absolute",top:0,textAlign:"center",fontSize:"large",overflow:"hidden",textOverflow:"ellipsis",margin:"0 auto"},form:{position:"absolute",width:"100%",bottom:0,padding:5,display:"flex",justifyContent:"center"},mailField:{width:250},error:{color:"red",width:"100%",position:"absolute",textAlign:"center",top:0,marginTop:120,padding:10,margin:"0 auto",fontWeight:"bold"}}),ua=Object(u.b)((function(e){return{dialogStatus:e.form.dialogStatus}}),(function(e){return{login:function(t){return e(R(t))}}}))((function(e){var t=e.login,a=e.dialogStatus,c=oa(),o=Object(n.useState)(""),u=Object(We.a)(o,2),l=u[0],i=u[1],s=r.a.useState(null),d=Object(We.a)(s,2),m=d[0],f=d[1];r.a.useEffect((function(){(null===a||void 0===a?void 0:a.success)&&f(null),a&&!a.success&&f(String(a.error))}),[a]),r.a.useEffect((function(){f(null)}),[]);return r.a.createElement("div",{className:c.container},r.a.createElement(ut.a,{elevation:3,className:c.formBox},r.a.createElement("svg",{viewBox:"0 0 500 230",preserveAspectRatio:"xMinYMin meet"},r.a.createElement("path",{d:"M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z",style:{stroke:"none",fill:"rgba(0,0,0,0.2)"}})),r.a.createElement("div",{className:c.forceTitle},"Hello"),r.a.createElement("div",{className:c.form},r.a.createElement(qt.a,{required:!0,autoFocus:!0,className:c.mailField,margin:"normal",variant:"outlined",label:"mail",name:"mail",type:"mail",onChange:function(e){return i(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&l&&(t(l),e.preventDefault())}}),r.a.createElement(gt.a,{endIcon:r.a.createElement(ca.a,null),type:"submit",margin:"normal",color:"primary",disabled:!l,onClick:function(){return t(l)}})),r.a.createElement("div",{className:c.error}," ",m," ")))})),la=a(116),ia=Object(u.b)((function(e){return{token:e.myschedules.token}}))((function(e){var t=e.component,a=Object(la.a)(e,["component"]);return r.a.createElement(ze.b,Object.assign({},a,{render:function(e){return a.token?r.a.createElement(t,e):r.a.createElement(ze.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}));var sa=function(){return r.a.createElement(u.a,{store:qe},r.a.createElement(Ze,null,r.a.createElement(Me.a,{maxSnack:3,style:{width:"50%"}},r.a.createElement(ze.c,{history:ae},r.a.createElement(ze.d,null,r.a.createElement(ze.b,{exact:!0,path:"/login",component:ua}),r.a.createElement(ia,{exact:!0,path:"/",component:na}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(sa,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,t,a){}},[[131,1,2]]]);
//# sourceMappingURL=main.1ffcb10a.chunk.js.map