webpackJsonp([10],{114:function(e,t,n){"use strict";n.d(t,"a",function(){return a});n(2),n(49);var a=function(){function e(e){this.storage=e}return e.prototype.createOrClearCart=function(){var e={items:[]};return this.storage.setCart(e),e},e.prototype.getCart=function(){var e=this.storage.getCart();return null==e&&(e=this.createOrClearCart()),e},e.prototype.addProduto=function(e){var t=this.getCart();return-1==t.items.findIndex(function(t){return t.produto.id==e.id})&&t.items.push({quantidade:1,produto:e}),this.storage.setCart(t),t},e.prototype.removeProduto=function(e){var t=this.getCart(),n=t.items.findIndex(function(t){return t.produto.id==e.id});return-1!=n&&t.items.splice(n,1),this.storage.setCart(t),t},e.prototype.increaseQuantity=function(e){var t=this.getCart(),n=t.items.findIndex(function(t){return t.produto.id==e.id});return-1!=n&&t.items[n].quantidade++,this.storage.setCart(t),t},e.prototype.decreaseQuantity=function(e){var t=this.getCart(),n=t.items.findIndex(function(t){return t.produto.id==e.id});return-1!=n&&(t.items[n].quantidade--,t.items[n].quantidade<1&&(t=this.removeProduto(e))),this.storage.setCart(t),t},e.prototype.total=function(){for(var e=this.getCart(),t=0,n=0;n<e.items.length;n++)t+=e.items[n].produto.preco*e.items[n].quantidade;return t},e}()},169:function(e,t,n){"use strict";n.d(t,"a",function(){return a});n(2);var a=function(){function e(){}return e.prototype.dataUriToBlob=function(e){for(var t=atob(e.split(",")[1]),n=e.split(",")[0].split(":")[1].split(";")[0],a=new ArrayBuffer(t.length),o=new Uint8Array(a),r=0;r<t.length;r++)o[r]=t.charCodeAt(r);return new Blob([a],{type:n})},e}()},174:function(e,t,n){"use strict";n.d(t,"a",function(){return o});n(2);var a=n(57),o=(n(169),n(49),function(){function e(e,t,n){this.http=e,this.storage=t,this.imageUtilService=n}return e.prototype.findByEmail=function(e){return this.http.get(a.a.baseUrl+"/clientes/email?value="+e)},e.prototype.findById=function(e){return this.http.get(a.a.baseUrl+"/clientes/"+e)},e.prototype.getImageFromBucket=function(e){return this.http.get(a.a.bucketBaseUrl+"/cp"+e+".jpg",{responseType:"blob"})},e.prototype.insert=function(e){return this.http.post(a.a.baseUrl+"/clientes",e,{observe:"response",responseType:"text"})},e.prototype.uploadPicture=function(e){var t=this.imageUtilService.dataUriToBlob(e),n=new FormData;return n.set("file",t,"file.png"),this.http.post(a.a.baseUrl+"/clientes/picture",n,{observe:"response",responseType:"text"})},e}())},176:function(e,t,n){"use strict";n.d(t,"a",function(){return o});n(2);var a=n(57),o=function(){function e(e){this.http=e}return e.prototype.findById=function(e){return this.http.get(a.a.baseUrl+"/produtos/"+e)},e.prototype.findByCategoria=function(e,t,n){return void 0===t&&(t=0),void 0===n&&(n=24),this.http.get(a.a.baseUrl+"/produtos/?categorias="+e+"&page="+t+"&linesPerPage="+n)},e.prototype.getSmallImageFromBucket=function(e){return this.http.get(a.a.bucketBaseUrl+"/prod"+e+"-small.jpg",{responseType:"blob"})},e.prototype.getImageFromBucket=function(e){return this.http.get(a.a.bucketBaseUrl+"/prod"+e+".jpg",{responseType:"blob"})},e}()},184:function(e,t,n){"use strict";n.d(t,"a",function(){return o});n(2);var a=n(57),o=function(){function e(e){this.http=e}return e.prototype.findAll=function(){return this.http.get(a.a.baseUrl+"/categorias")},e}()},199:function(e,t){function n(e){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+e+"'.")})}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=199},227:function(e,t,n){function a(e){var t=o[e];return t?n.e(t[1]).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var o={"../pages/cart/cart.module.ngfactory":[647,8],"../pages/categorias/categorias.module.ngfactory":[648,3],"../pages/home/home.module.ngfactory":[649,9],"../pages/order-confirmation/order-confirmation.module.ngfactory":[651,7],"../pages/payment/payment.module.ngfactory":[650,4],"../pages/pick-address/pick-address.module.ngfactory":[652,6],"../pages/produto-detail/produto-detail.module.ngfactory":[654,2],"../pages/produtos/produtos.module.ngfactory":[653,1],"../pages/profile/profile.module.ngfactory":[655,5],"../pages/signup/signup.module.ngfactory":[656,0]};a.keys=function(){return Object.keys(o)},a.id=227,e.exports=a},358:function(e,t,n){"use strict";function a(e){return l["ɵvid"](0,[(e()(),l["ɵeld"](0,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(e,t,n){var a=!0,o=e.component;if("click"===t){a=!1!==l["ɵnov"](e,6).close()&&a}if("click"===t){a=!1!==o.openPage(e.context.$implicit)&&a}return a},B.b,B.a)),l["ɵdid"](1,1097728,null,3,H.a,[T.a,L.a,l.ElementRef,l.Renderer,[2,D.a]],null,null),l["ɵqud"](335544320,4,{contentLabel:0}),l["ɵqud"](603979776,5,{_buttons:1}),l["ɵqud"](603979776,6,{_icons:1}),l["ɵdid"](5,16384,null,0,M.a,[],null,null),l["ɵdid"](6,16384,null,0,j.a,[x.a],{menuClose:[0,"menuClose"]},null),(e()(),l["ɵted"](7,2,["\n        ","\n      "]))],function(e,t){e(t,6,0,"")},function(e,t){e(t,7,0,t.context.$implicit.title)})}function o(e){return l["ɵvid"](0,[l["ɵqud"](402653184,1,{nav:0}),(e()(),l["ɵeld"](1,0,null,null,29,"ion-menu",[["role","navigation"],["type","overlay"]],null,null,null,_.b,_.a)),l["ɵprd"](6144,null,q.a,null,[Z.a]),l["ɵdid"](3,245760,null,2,Z.a,[x.a,l.ElementRef,L.a,J.a,l.Renderer,z.a,V.l,K.a,X.a],{content:[0,"content"],type:[1,"type"]},null),l["ɵqud"](335544320,2,{menuContent:0}),l["ɵqud"](335544320,3,{menuNav:0}),(e()(),l["ɵted"](-1,0,["\n  "])),(e()(),l["ɵeld"](7,0,null,0,10,"ion-header",[],null,null,null,null,null)),l["ɵdid"](8,16384,null,0,Q.a,[L.a,l.ElementRef,l.Renderer,[2,$.a]],null,null),(e()(),l["ɵted"](-1,null,["\n    "])),(e()(),l["ɵeld"](10,0,null,null,6,"ion-toolbar",[["class","toolbar"]],[[2,"statusbar-padding",null]],null,null,G.b,G.a)),l["ɵdid"](11,49152,null,0,W.a,[L.a,l.ElementRef,l.Renderer],null,null),(e()(),l["ɵted"](-1,3,["\n      "])),(e()(),l["ɵeld"](13,0,null,3,2,"ion-title",[],null,null,null,Y.b,Y.a)),l["ɵdid"](14,49152,null,0,ee.a,[L.a,l.ElementRef,l.Renderer,[2,W.a],[2,te.a]],null,null),(e()(),l["ɵted"](-1,0,["Menu"])),(e()(),l["ɵted"](-1,3,["\n    "])),(e()(),l["ɵted"](-1,null,["\n  "])),(e()(),l["ɵted"](-1,0,["\n\n  "])),(e()(),l["ɵeld"](19,0,null,0,10,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,ne.b,ne.a)),l["ɵdid"](20,4374528,[[2,4]],0,ae.a,[L.a,J.a,K.a,l.ElementRef,l.Renderer,X.a,z.a,l.NgZone,[2,$.a],[2,oe.a]],null,null),(e()(),l["ɵted"](-1,1,["\n    "])),(e()(),l["ɵeld"](22,0,null,1,6,"ion-list",[],null,null,null,null,null)),l["ɵdid"](23,16384,null,0,re.a,[L.a,l.ElementRef,l.Renderer,J.a,V.l,K.a],null,null),(e()(),l["ɵted"](-1,null,["\n      "])),(e()(),l["ɵted"](-1,null,["\n      "])),(e()(),l["ɵand"](16777216,null,null,1,null,a)),l["ɵdid"](27,802816,null,0,le.i,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(e()(),l["ɵted"](-1,null,["\n    "])),(e()(),l["ɵted"](-1,1,["\n  "])),(e()(),l["ɵted"](-1,0,["\n\n"])),(e()(),l["ɵted"](-1,null,["\n\n"])),(e()(),l["ɵted"](-1,null,["\n"])),(e()(),l["ɵeld"](33,0,null,null,2,"ion-nav",[["swipeBackEnabled","false"]],null,null,null,ie.b,ie.a)),l["ɵprd"](6144,null,q.a,null,[ue.a]),l["ɵdid"](35,4374528,[[1,4],["content",4]],0,ue.a,[[2,$.a],[2,oe.a],X.a,L.a,J.a,l.ElementRef,l.NgZone,l.Renderer,l.ComponentFactoryResolver,V.l,se.a,[2,de.a],K.a,l.ErrorHandler],{swipeBackEnabled:[0,"swipeBackEnabled"],root:[1,"root"]},null)],function(e,t){var n=t.component;e(t,3,0,l["ɵnov"](t,35),"overlay");e(t,27,0,n.pages);e(t,35,0,"false",n.rootPage)},function(e,t){e(t,10,0,l["ɵnov"](t,11)._sbPadding);e(t,19,0,l["ɵnov"](t,20).statusbarPadding,l["ɵnov"](t,20)._hasRefresher)})}Object.defineProperty(t,"__esModule",{value:!0});var r=n(38),l=n(1),i=(n(2),n(37)),u=(n(112),n(110)),s=n(111),d=n(82),p=function(){function e(e,t,n,a){this.platform=e,this.statusBar=t,this.splashScreen=n,this.auth=a,this.rootPage="HomePage",this.initializeApp(),this.pages=[{title:"Profile",component:"ProfilePage"},{title:"Categorias",component:"CategoriasPage"},{title:"Carrinho",component:"CartPage"},{title:"Logout",component:""}]}return e.prototype.initializeApp=function(){var e=this;this.platform.ready().then(function(){e.statusBar.styleDefault(),e.splashScreen.hide()})},e.prototype.openPage=function(e){switch(e.title){case"Logout":this.auth.logout(),this.nav.setRoot("HomePage");break;default:this.nav.setRoot(e.component)}},e}(),c=n(184),m=n(248),g=n(49),f=function(){function e(e,t){this.storage=e,this.alertCtrl=t}return e.prototype.intercept=function(e,t){var n=this;return t.handle(e).catch(function(e,t){var a=e;switch(a.error&&(a=a.error),a.status||(a=JSON.parse(a)),console.log("Erro detectado pelo interceptor:"),console.log(a),a.status){case 401:n.handle401();break;case 403:n.handle403();break;case 422:n.handle422(a);break;default:n.handleDefaultError(a)}return m.Observable.throw(e)})},e.prototype.handle403=function(){this.storage.setLocalUser(null)},e.prototype.handle401=function(){this.alertCtrl.create({title:"Erro 401: falha de autenticação",message:"Email ou senha incorretos",enableBackdropDismiss:!1,buttons:[{text:"Ok"}]}).present()},e.prototype.handle422=function(e){this.alertCtrl.create({title:"Erro 422: Validação",message:this.listErrors(e.errors),enableBackdropDismiss:!1,buttons:[{text:"Ok"}]}).present()},e.prototype.handleDefaultError=function(e){this.alertCtrl.create({title:"Erro "+e.status+": "+e.error,message:e.message,enableBackdropDismiss:!1,buttons:[{text:"Ok"}]}).present()},e.prototype.listErrors=function(e){for(var t="",n=0;n<e.length;n++)t=t+"<p><strong>"+e[n].fieldName+"</strong>: "+e[n].message;return t},e}(),h=n(174),y=n(57),b=function(){function e(e){this.storage=e}return e.prototype.intercept=function(e,t){var n=this.storage.getLocalUser(),a=e.url.substring(0,y.a.baseUrl.length)==y.a.baseUrl;if(n&&a){var o=e.clone({headers:e.headers.set("Authorization","Bearer "+n.token)});return t.handle(o)}return t.handle(e)},e}(),v=n(176),C=n(114),P=n(169),k=function(){return function(){}}(),R=n(65),I=n(345),w=n(346),E=n(347),N=n(348),U=n(349),F=n(350),A=n(351),O=n(352),S=n(353),B=n(171),H=n(25),T=n(22),L=n(3),D=n(53),M=n(77),j=n(138),x=n(32),_=n(644),q=n(46),Z=n(97),J=n(6),z=n(35),V=n(10),K=n(13),X=n(12),Q=n(113),$=n(7),G=n(645),W=n(48),Y=n(355),ee=n(78),te=n(47),ne=n(354),ae=n(30),oe=n(29),re=n(58),le=n(18),ie=n(646),ue=n(69),se=n(43),de=n(23),pe=l["ɵcrt"]({encapsulation:2,styles:[],data:{}}),ce=l["ɵccf"]("ng-component",p,function(e){return l["ɵvid"](0,[(e()(),l["ɵeld"](0,0,null,null,1,"ng-component",[],null,null,null,o,pe)),l["ɵdid"](1,49152,null,0,p,[J.a,u.a,s.a,d.a],null,null)],null,null)},{},{},[]),me=n(141),ge=n(120),fe=n(27),he=n(133),ye=n(140),be=n(45),ve=n(121),Ce=n(170),Pe=n(67),ke=n(52),Re=n(145),Ie=n(93),we=n(147),Ee=n(143),Ne=n(154),Ue=n(344),Fe=n(142),Ae=n(139),Oe=n(144),Se=l["ɵcmf"](k,[R.b],function(e){return l["ɵmod"]([l["ɵmpd"](512,l.ComponentFactoryResolver,l["ɵCodegenComponentFactoryResolver"],[[8,[I.a,w.a,E.a,N.a,U.a,F.a,A.a,O.a,S.a,ce]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["ɵmpd"](5120,l.LOCALE_ID,l["ɵq"],[[3,l.LOCALE_ID]]),l["ɵmpd"](4608,le.l,le.k,[l.LOCALE_ID,[2,le.t]]),l["ɵmpd"](5120,l.APP_ID,l["ɵi"],[]),l["ɵmpd"](5120,l.IterableDiffers,l["ɵn"],[]),l["ɵmpd"](5120,l.KeyValueDiffers,l["ɵo"],[]),l["ɵmpd"](4608,r.c,r.q,[le.d]),l["ɵmpd"](6144,l.Sanitizer,null,[r.c]),l["ɵmpd"](4608,r.f,me.a,[]),l["ɵmpd"](5120,r.d,function(e,t,n,a,o){return[new r.k(e,t),new r.o(n),new r.n(a,o)]},[le.d,l.NgZone,le.d,le.d,r.f]),l["ɵmpd"](4608,r.e,r.e,[r.d,l.NgZone]),l["ɵmpd"](135680,r.m,r.m,[le.d]),l["ɵmpd"](4608,r.l,r.l,[r.e,r.m]),l["ɵmpd"](6144,l.RendererFactory2,null,[r.l]),l["ɵmpd"](6144,r.p,null,[r.m]),l["ɵmpd"](4608,l.Testability,l.Testability,[l.NgZone]),l["ɵmpd"](4608,r.h,r.h,[le.d]),l["ɵmpd"](4608,r.i,r.i,[le.d]),l["ɵmpd"](4608,i.h,i.n,[le.d,l.PLATFORM_ID,i.l]),l["ɵmpd"](4608,i.o,i.o,[i.h,i.m]),l["ɵmpd"](4608,g.a,g.a,[]),l["ɵmpd"](4608,ge.a,ge.a,[X.a,L.a]),l["ɵmpd"](5120,i.a,function(e,t,n,a){return[e,new b(t),new f(n,a)]},[i.o,g.a,g.a,ge.a]),l["ɵmpd"](4608,i.k,i.k,[]),l["ɵmpd"](6144,i.i,null,[i.k]),l["ɵmpd"](4608,i.g,i.g,[i.i]),l["ɵmpd"](6144,i.b,null,[i.g]),l["ɵmpd"](4608,i.f,i.j,[i.b,l.Injector]),l["ɵmpd"](4608,i.c,i.c,[i.f]),l["ɵmpd"](4608,fe.r,fe.r,[]),l["ɵmpd"](4608,fe.d,fe.d,[]),l["ɵmpd"](4608,he.a,he.a,[X.a,L.a]),l["ɵmpd"](4608,ye.a,ye.a,[]),l["ɵmpd"](4608,T.a,T.a,[]),l["ɵmpd"](4608,be.a,be.a,[J.a]),l["ɵmpd"](4608,z.a,z.a,[L.a,J.a,l.NgZone,K.a]),l["ɵmpd"](4608,ve.a,ve.a,[X.a,L.a]),l["ɵmpd"](5120,le.g,Ce.c,[le.r,[2,le.a],L.a]),l["ɵmpd"](4608,le.f,le.f,[le.g]),l["ɵmpd"](5120,Pe.b,Pe.d,[X.a,Pe.a]),l["ɵmpd"](5120,de.a,de.b,[X.a,Pe.b,le.f,ke.b,l.ComponentFactoryResolver]),l["ɵmpd"](4608,Re.a,Re.a,[X.a,L.a,de.a]),l["ɵmpd"](4608,Ie.a,Ie.a,[X.a,L.a]),l["ɵmpd"](4608,we.a,we.a,[X.a,L.a,de.a]),l["ɵmpd"](4608,Ee.a,Ee.a,[L.a,J.a,K.a,X.a,V.l]),l["ɵmpd"](4608,Ne.a,Ne.a,[X.a,L.a]),l["ɵmpd"](4608,se.a,se.a,[J.a,L.a]),l["ɵmpd"](4608,u.a,u.a,[]),l["ɵmpd"](4608,s.a,s.a,[]),l["ɵmpd"](4608,c.a,c.a,[i.c]),l["ɵmpd"](4608,C.a,C.a,[g.a]),l["ɵmpd"](4608,d.a,d.a,[i.c,g.a,C.a]),l["ɵmpd"](4608,P.a,P.a,[]),l["ɵmpd"](4608,h.a,h.a,[i.c,g.a,P.a]),l["ɵmpd"](4608,v.a,v.a,[i.c]),l["ɵmpd"](512,le.b,le.b,[]),l["ɵmpd"](512,l.ErrorHandler,Ue.a,[]),l["ɵmpd"](256,L.b,{},[]),l["ɵmpd"](1024,Fe.a,Fe.b,[]),l["ɵmpd"](1024,J.a,J.b,[r.b,Fe.a,l.NgZone]),l["ɵmpd"](1024,L.a,L.c,[L.b,J.a]),l["ɵmpd"](512,K.a,K.a,[J.a]),l["ɵmpd"](512,x.a,x.a,[]),l["ɵmpd"](512,X.a,X.a,[L.a,J.a,[2,x.a]]),l["ɵmpd"](512,V.l,V.l,[X.a]),l["ɵmpd"](256,Pe.a,{links:[{loadChildren:"../pages/cart/cart.module.ngfactory#CartPageModuleNgFactory",name:"CartPage",segment:"cart",priority:"low",defaultHistory:[]},{loadChildren:"../pages/categorias/categorias.module.ngfactory#CategoriasPageModuleNgFactory",name:"CategoriasPage",segment:"categorias",priority:"low",defaultHistory:[]},{loadChildren:"../pages/home/home.module.ngfactory#HomeModuleNgFactory",name:"HomePage",segment:"home",priority:"low",defaultHistory:[]},{loadChildren:"../pages/payment/payment.module.ngfactory#PaymentPageModuleNgFactory",name:"PaymentPage",segment:"payment",priority:"low",defaultHistory:[]},{loadChildren:"../pages/order-confirmation/order-confirmation.module.ngfactory#OrderConfirmationPageModuleNgFactory",name:"OrderConfirmationPage",segment:"order-confirmation",priority:"low",defaultHistory:[]},{loadChildren:"../pages/pick-address/pick-address.module.ngfactory#PickAddressPageModuleNgFactory",name:"PickAddressPage",segment:"pick-address",priority:"low",defaultHistory:[]},{loadChildren:"../pages/produtos/produtos.module.ngfactory#ProdutosPageModuleNgFactory",name:"ProdutosPage",segment:"produtos",priority:"low",defaultHistory:[]},{loadChildren:"../pages/produto-detail/produto-detail.module.ngfactory#ProdutoDetailPageModuleNgFactory",name:"ProdutoDetailPage",segment:"produto-detail",priority:"low",defaultHistory:[]},{loadChildren:"../pages/profile/profile.module.ngfactory#ProfilePageModuleNgFactory",name:"ProfilePage",segment:"profile",priority:"low",defaultHistory:[]},{loadChildren:"../pages/signup/signup.module.ngfactory#SignupPageModuleNgFactory",name:"SignupPage",segment:"signup",priority:"low",defaultHistory:[]}]},[]),l["ɵmpd"](512,l.Compiler,l.Compiler,[]),l["ɵmpd"](512,Ae.a,Ae.a,[l.Compiler]),l["ɵmpd"](1024,ke.b,ke.c,[Ae.a,l.Injector]),l["ɵmpd"](1024,l.APP_INITIALIZER,function(e,t,n,a,o,l,i,u,s,d,p,c,m){return[r.s(e),Oe.a(t),ye.b(n,a),Ee.b(o,l,i,u,s),ke.d(d,p,c,m)]},[[2,l.NgProbeToken],L.a,J.a,K.a,L.a,J.a,K.a,X.a,V.l,L.a,Pe.a,ke.b,l.NgZone]),l["ɵmpd"](512,l.ApplicationInitStatus,l.ApplicationInitStatus,[[2,l.APP_INITIALIZER]]),l["ɵmpd"](131584,l.ApplicationRef,l.ApplicationRef,[l.NgZone,l["ɵConsole"],l.Injector,l.ErrorHandler,l.ComponentFactoryResolver,l.ApplicationInitStatus]),l["ɵmpd"](512,l.ApplicationModule,l.ApplicationModule,[l.ApplicationRef]),l["ɵmpd"](512,r.a,r.a,[[3,r.a]]),l["ɵmpd"](512,i.e,i.e,[]),l["ɵmpd"](512,i.d,i.d,[]),l["ɵmpd"](512,fe.p,fe.p,[]),l["ɵmpd"](512,fe.g,fe.g,[]),l["ɵmpd"](512,fe.n,fe.n,[]),l["ɵmpd"](512,Ce.a,Ce.a,[]),l["ɵmpd"](512,k,k,[]),l["ɵmpd"](256,i.l,"XSRF-TOKEN",[]),l["ɵmpd"](256,i.m,"X-XSRF-TOKEN",[]),l["ɵmpd"](256,R.a,p,[]),l["ɵmpd"](256,le.a,"/",[])])});Object(l.enableProdMode)(),Object(r.j)().bootstrapModuleFactory(Se)},49:function(e,t,n){"use strict";n(2),n(1);var a="localUser",o="sistemaDeVendas";n.d(t,"a",function(){return r});var r=function(){function e(){}return e.prototype.getLocalUser=function(){var e=localStorage.getItem(a);return null==e?null:JSON.parse(e)},e.prototype.setLocalUser=function(e){null==e?localStorage.removeItem(a):localStorage.setItem(a,JSON.stringify(e))},e.prototype.getCart=function(){var e=localStorage.getItem(o);return null!=e?JSON.parse(e):null},e.prototype.setCart=function(e){null!=e?localStorage.setItem(o,JSON.stringify(e)):localStorage.removeItem(o)},e}()},57:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={baseUrl:"https://spring-ionic-mc-backend.herokuapp.com",bucketBaseUrl:"https://spring-ionic-mc.s3-sa-east-1.amazonaws.com"}},82:function(e,t,n){"use strict";n.d(t,"a",function(){return r});n(2);var a=n(363),o=(n.n(a),n(57)),r=(n(114),n(49),function(){function e(e,t,n){this.http=e,this.storage=t,this.cartService=n,this.jwtHelper=new a.JwtHelper}return e.prototype.authenticate=function(e){return this.http.post(o.a.baseUrl+"/login",e,{observe:"response",responseType:"text"})},e.prototype.successfulLogin=function(e){var t=e.substring(7),n={token:t,email:this.jwtHelper.decodeToken(t).sub};this.storage.setLocalUser(n),this.cartService.createOrClearCart()},e.prototype.logout=function(){this.storage.setLocalUser(null)},e.prototype.refreshToken=function(){return this.http.post(o.a.baseUrl+"/auth/refresh_token",{},{observe:"response",responseType:"text"})},e}())}},[358]);