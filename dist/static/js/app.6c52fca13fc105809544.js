webpackJsonp([1],{"+Kih":function(t,e){},"/VWt":function(t,e){},"3j9/":function(t,e){},"4uul":function(t,e){},EIsY:function(t,e){},EaU0:function(t,e){},GIpd:function(t,e){},L8ge:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("MVMM"),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"app-nav"},[n("div",[t._v(t._s(t.currentPath))]),t._v(" "),n("router-link",{staticClass:"nav-item",attrs:{to:"/Home"}},[n("div",{staticClass:"homeImg",class:t.homeImgOn,on:{click:t.changeNavImg}})]),t._v(" "),n("router-link",{staticClass:"nav-item",attrs:{to:"/Cart"}},[n("div",{staticClass:"cartImg",class:t.cartImgOn,on:{click:t.changeNavImg}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.cartCounter>0,expression:"cartCounter > 0"}],staticClass:"cart-counter"},[t._v(t._s(t.cartCounter))])])]),t._v(" "),n("router-link",{staticClass:"nav-item",attrs:{to:"/Profile"}},[n("div",{staticClass:"profileImg",class:t.profileImgOn,on:{click:t.changeNavImg}})])],1)},staticRenderFns:[]};var o={name:"App",components:{"app-nav":n("Z0/y")({name:"home",data:function(){return{homeImgOn:"",cartImgOn:"",profileImgOn:""}},methods:{changeNavImg:function(t){var e=t.target.className;e.includes("home")?(this.homeImgOn="homeImgOn",this.cartImgOn="",this.profileImgOn=""):e.includes("cart")?(this.homeImgOn="",this.cartImgOn="cartImgOn",this.profileImgOn=""):e.includes("profile")?(this.homeImgOn="",this.cartImgOn="",this.profileImgOn="profileImgOn"):(this.homeImgOn="",this.cartImgOn="",this.profileImgOn="")},autoChangeCurrentImg:function(){var t=this.currentPath;t.includes("Home")?(this.homeImgOn="homeImgOn",this.cartImgOn="",this.profileImgOn=""):t.includes("Cart")?(this.homeImgOn="",this.cartImgOn="cartImgOn",this.profileImgOn=""):t.includes("Profile")?(this.homeImgOn="",this.cartImgOn="",this.profileImgOn="profileImgOn"):(this.homeImgOn="",this.cartImgOn="",this.profileImgOn="")}},computed:{cartCounter:function(){return this.$store.state.cartCounter},currentPath:function(){return this.$route.path}},mounted:function(){this.autoChangeCurrentImg()},updated:function(){this.autoChangeCurrentImg()}},s,!1,function(t){n("4uul")},"data-v-6c0566f9",null).exports}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1),this._v(" "),e("app-nav")],1)},staticRenderFns:[]};var r=n("Z0/y")(o,i,!1,function(t){n("VYRP")},null,null).exports,c=n("zO6J"),u=n("IHPB"),l=n.n(u),d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-number",on:{click:t.stopPro}},[n("i",{staticClass:"el-icon-remove-outline",on:{click:t.minus}}),t._v(" "),n("span",{staticClass:"inputText"},[t._v(t._s(t.number))]),t._v(" "),n("i",{staticClass:"el-icon-circle-plus",on:{click:t.plus}})])},staticRenderFns:[]};var m=n("Z0/y")({name:"InputNumber",props:["count"],data:function(){return{}},computed:{number:function(){return this.count}},methods:{minus:function(t){t.stopPropagation(),this.count--,this.$store.state.cartCounter--,this.changeNumber()},plus:function(t){t.stopPropagation(),this.count++,this.$store.state.cartCounter++,this.changeNumber()},changeNumber:function(){this.$emit("changeNumberEvent",this.number)},stopPro:function(t){t.stopPropagation()}}},d,!1,function(t){n("mvys")},"data-v-0024401e",null).exports,h={name:"one-commodity",props:["itemId","imgUrl","title","content","price","count"],data:function(){return{oneCommodity:{id:this.itemId,img:this.imgUrl,title:this.title,content:this.content,price:this.price,count:this.count}}},computed:{counter:function(){var t=this,e=0;return this.$store.state.cartGoods.some(function(n){n.id===t.itemId&&(e=n.count)}),e}},methods:{addGoodsToCart:function(t){t.stopPropagation(),this.count=1,this.oneCommodity.count++,this.$store.state.cartGoods.push(this.oneCommodity),this.$store.state.cartCounter++},getCounter:function(t){this.count=t,this.oneCommodity.count=t;var e=this.$store.state.cartGoods,n=this;e.forEach(function(e){e.id===n.itemId&&(e.count=t)}),0===t&&(this.$store.state.cartGoods=e.filter(function(t){return t.id!==n.itemId}))},goToDetailsPage:function(){this.$router.push({path:"/DetailsPage",query:this.oneCommodity})}},components:{MyInputNumber:m}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"one-commodity",on:{click:t.goToDetailsPage}},[n("div",{staticClass:"left"},[n("img",{attrs:{src:t.imgUrl}})]),t._v(" "),n("div",{staticClass:"right"},[n("div",{staticClass:"text"},[n("h3",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"content"},[t._v(t._s(t.content))]),t._v(" "),n("div",[n("span",{staticClass:"price"},[t._v(" ￥\n          "),n("span",{staticClass:"price-number"},[t._v(t._s(t.price))])])])]),t._v(" "),n("div",{staticClass:"cart-btn"},[n("el-button",{directives:[{name:"show",rawName:"v-show",value:0===t.counter,expression:"counter === 0"}],attrs:{icon:"el-icon-goods",type:"danger",circle:""},nativeOn:{click:function(e){return t.addGoodsToCart(e)}}}),t._v(" "),n("my-input-number",{directives:[{name:"show",rawName:"v-show",value:t.counter>0,expression:"counter > 0"}],attrs:{count:t.counter},on:{changeNumberEvent:t.getCounter}})],1)])])},staticRenderFns:[]};var v=n("Z0/y")(h,p,!1,function(t){n("oKGs")},"data-v-5b729082",null).exports,f=n("cUn4"),g=n.n(f),_={name:"home-header",data:function(){return{isInput:!1,inputText:"",kindToType:new g.a([["全部",0],["水果",1],["蔬菜",2],["肉蛋",3],["速冻",4],["酒饮",5],["乳品",6],["零食",7]]),goodsType:"全部"}},methods:{changeGoodsType:function(){this.$store.state.GoodsCurrentSelKind=this.kindToType.get(this.goodsType)}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"home-header"},[n("div",{staticClass:"search"},[t.isInput?n("el-input",{attrs:{placeholder:"请输入内容","prefix-icon":"el-icon-search"},model:{value:t.inputText,callback:function(e){t.inputText=e},expression:"inputText"}}):n("div",[n("span",[t._v("一小时达")]),t._v(" "),n("i",{staticClass:"el-icon-search",on:{click:function(e){t.isInput=!t.isInput}}})])],1),t._v(" "),n("div",{staticClass:"tap-menu"},[n("el-tabs",{staticStyle:{height:"39px"},attrs:{"tab-position":"top",type:"border-card"},on:{"tab-click":t.changeGoodsType},model:{value:t.goodsType,callback:function(e){t.goodsType=e},expression:"goodsType"}},[n("el-tab-pane",{attrs:{label:"全部",name:"全部"}}),t._v(" "),n("el-tab-pane",{attrs:{label:"水果",name:"水果"}}),t._v(" "),n("el-tab-pane",{attrs:{label:"蔬菜",name:"蔬菜"}}),t._v(" "),n("el-tab-pane",{attrs:{label:"肉蛋",name:"肉蛋"}}),t._v(" "),n("el-tab-pane",{attrs:{label:"速冻",name:"速冻"}}),t._v(" "),n("el-tab-pane",{attrs:{label:"酒饮",name:"酒饮"}}),t._v(" "),n("el-tab-pane",{attrs:{label:"乳品",name:"乳品"}}),t._v(" "),n("el-tab-pane",{attrs:{label:"零食",name:"零食"}})],1)],1)])},staticRenderFns:[]};var b={name:"home",data:function(){return{goods:[],animatedCurrentKey:0}},computed:{},methods:{isCurrent:function(t){var e=this.$store.state.GoodsCurrentSelKind;return this.animatedCurrentKey=e,0===e||t===e}},components:{OneCommodity:v,HomeHeader:n("Z0/y")(_,C,!1,function(t){n("iuJ0")},"data-v-366bd739",null).exports},mounted:function(){var t=this;this.axios.get("/shoppingApp/static/data/github-goods.json").then(function(e){t.goods=[].concat(l()(e.data))}).catch(function(){t.axios.get("http://localhost:8080/static/data/goods.json").then(function(e){t.goods=[].concat(l()(e.data))})})}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("home-header"),t._v(" "),n("div",{staticClass:"home-main"},[n("transition-group",{attrs:{"enter-active-class":"slideInRight"}},[n("ul",{key:t.animatedCurrentKey,staticClass:"goods animated"},t._l(t.goods,function(e){return n("li",{directives:[{name:"show",rawName:"v-show",value:t.isCurrent(e.kind),expression:"isCurrent(item.kind)"}],staticClass:"one-com"},[n("one-commodity",{attrs:{itemId:e.id,imgUrl:e.img,title:e.title,content:e.content,price:e.price,count:0}})],1)})),t._v(" "),n("div",{key:"0"+t.animatedCurrentKey},[n("p",{staticClass:"no-more-goods"},[t._v("没有更多商品啦，敬请期待!!!")])])])],1)],1)},staticRenderFns:[]};var y=n("Z0/y")(b,I,!1,function(t){n("EaU0")},"data-v-6edf52e0",null).exports,k={name:"cart",data:function(){return{redPackets:[{id:1,money:10,limit:70,label:"10元红包(满70可用)"},{id:2,money:20,limit:100,label:"20元红包(满100可用)"},{id:3,money:30,limit:150,label:"30元红包(满150可用)"}],redPacket:"",redPacketPlaceholder:"无可用红包",postage:6,needPostage:!0}},computed:{cartGoods:function(){return this.$store.state.cartGoods},amount:function(){var t=0;return this.$store.state.cartGoods.forEach(function(e){t+=e.price*e.count}),t},pay:function(){var t=this.amount-this.redPacket;return this.needPostage=!(t>=49),this.needPostage&&(t+=this.postage),t}},methods:{isRedPacketDisabled:function(t){return this.amount<this.redPackets[0].limit?(this.redPacket="",this.redPacketPlaceholder="无可用红包",!0):this.amount<t||(this.redPacketPlaceholder="请选择红包",!1)}},components:{"one-commodity":v}},P={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cart"},[t._m(0),t._v(" "),t.cartGoods.length>0?n("main",{staticClass:"cart-body"},[n("div",{staticClass:"wrap"},[n("ul",{staticClass:"goods-wrap"},t._l(t.cartGoods,function(t){return n("li",{staticClass:"cartGoodsItem"},[n("one-commodity",{attrs:{itemId:t.id,imgUrl:t.img,title:t.title,content:t.content,price:t.price,count:t.count}})],1)})),t._v(" "),n("div",{staticClass:"price-wrap"},[n("div",{staticClass:"amount"},[t._v("商品总价：\n            "),n("span",{staticClass:"float-right"},[t._v("￥"+t._s(t.amount))])]),t._v(" "),n("div",{staticClass:"red-packet"},[n("div",[t._v("红包：\n              "),n("el-select",{attrs:{placeholder:t.redPacketPlaceholder},model:{value:t.redPacket,callback:function(e){t.redPacket=e},expression:"redPacket"}},t._l(t.redPackets,function(e){return n("el-option",{key:e.id,attrs:{label:e.label,value:e.money,disabled:t.isRedPacketDisabled(e.limit)}})})),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.redPacket,expression:"redPacket"}],staticClass:"float-right"},[t._v("-￥"+t._s(t.redPacket))])],1)]),t._v(" "),n("div",{staticClass:"pay"},[n("div",[t._v("商品实付：\n              "),n("span",{staticClass:"float-right"},[t._v("￥"+t._s(t.amount-t.redPacket))])]),t._v(" "),n("div",[n("span",[t._v("运费（实付满49免邮）：")]),t._v(" "),n("span",{staticClass:"float-right"},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.needPostage,expression:"needPostage"}],staticClass:"postage"},[t._v("￥"+t._s(t.postage))]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.needPostage,expression:"!needPostage"}],staticClass:"postage"},[t._v("免邮")])])]),t._v(" "),n("div",[n("span",{staticClass:"text-left"},[t._v("合计：\n                "),n("span",{staticClass:"float-right"},[t._v("￥"+t._s(t.pay))])])])])])])]):t._e(),t._v(" "),n("footer",{directives:[{name:"show",rawName:"v-show",value:t.cartGoods.length>0,expression:"cartGoods.length > 0"}],staticClass:"cart-footer"},[n("div",{staticClass:"toPay"},[n("el-button",{staticClass:"text-right",attrs:{type:"danger"}},[t._v("去结算"),n("i",{staticClass:"el-icon-arrow-right el-icon--right"})])],1)]),t._v(" "),0===t.cartGoods.length?n("div",{staticClass:"empty-wrap"},[t._v("\n      你还没有添加任何商品哦~\n    ")]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"cart-header"},[e("h3",[this._v("我的购物车")])])}]};var O=n("Z0/y")(k,P,!1,function(t){n("GIpd")},"data-v-90d68de8",null).exports,w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile"},[t.isLogin?n("div",{staticClass:"main"},[n("header",{staticClass:"profile-header"},[n("h3",[t._v("当前用户："+t._s(t.username))])]),t._v(" "),n("main",{staticClass:"profile-body"}),t._v(" "),n("footer",{staticClass:"profile-footer"})]):n("div",{staticClass:"login"},[n("el-input",{attrs:{placeholder:"请输入帐号"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),n("el-input",{attrs:{placeholder:"请输入密码",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("br"),t._v(" "),n("el-button",{attrs:{type:"success"},on:{click:function(e){t.isLogin=!0}}},[t._v("登录")]),t._v(" "),n("el-button",[t._v("注册")])],1)])},staticRenderFns:[]};var x=n("Z0/y")({name:"profile",data:function(){return{isLogin:!1,username:"abcde",password:"123456"}}},w,!1,function(t){n("VOrR")},"data-v-bbbf1c7c",null).exports,G={name:"detail-page",data:function(){return{}},computed:{cartCounter:function(){return this.$store.state.cartCounter},goods:function(){return this.$route.query}},methods:{addGoodsToCart:function(){var t=this;this.goods.count++,this.$store.state.cartCounter++;var e=this.$store.state.cartGoods.some(function(e){return e.id===t.goods.id});console.log(this.goods),e||this.$store.state.cartGoods.push(this.goods)}}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"details-page"},[n("header",{staticClass:"dp-header"},[n("router-link",{attrs:{to:"/"}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-back"}})],1),t._v(" "),n("span",[t._v("商品详情")])],1),t._v(" "),n("main",{staticClass:"dp-main"},[n("div",[n("img",{attrs:{src:t.goods.img}})]),t._v(" "),n("h4",[t._v(t._s(t.goods.title))]),t._v(" "),n("p",[t._v(t._s(t.goods.content))]),t._v(" "),n("div",[n("span",{staticClass:"goods-price"},[t._v(t._s(t.goods.price))])])]),t._v(" "),n("footer",{staticClass:"dp-footer"},[n("span",[n("router-link",{attrs:{to:"/Cart"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.cartCounter>0,expression:"cartCounter > 0"}],staticClass:"cart-counter"},[t._v(t._s(t.cartCounter))]),t._v(" "),n("el-button",{attrs:{icon:"el-icon-goods"}})],1)],1),t._v(" "),n("el-button",{on:{click:t.addGoodsToCart}},[t._v("加入购物车")])],1)])},staticRenderFns:[]};var N=n("Z0/y")(G,$,!1,function(t){n("btfD")},"data-v-6e076196",null).exports;a.default.use(c.a);var T=new c.a({mode:"history",routes:[{path:"/",redirect:"/Home"},{path:"/Home",component:y},{path:"/Cart",component:O},{path:"/Profile",component:x},{path:"/DetailsPage",component:N}]}),E=n("9rMa"),R=n("Z4qQ"),K=n.n(R),Z=n("vWlU"),S=n.n(Z),F=n("/VWt"),H=n.n(F);a.default.use(E.a);var U=new E.a.Store({state:{username:"",point:0,cartGoods:[],cartCounter:0,GoodsCurrentSelKind:0},mutations:{},actions:{},modules:{HomeStore:K.a,CartStore:S.a,ProfileStore:H.a}}),V=n("aozt"),j=n.n(V),q=n("qbg9"),D=n.n(q),M=(n("vfIS"),n("tV6h"),n("VTag")),W=n.n(M),A=(n("L8ge"),n("N5e6")),L=n.n(A),Y=(n("hNqO"),n("i5RB")),J=n.n(Y),Q=(n("+Kih"),n("gZws")),z=n.n(Q),B=(n("xIex"),n("wCKp")),X=n.n(B),tt=(n("t5Ke"),n("HNWp")),et=n.n(tt),nt=(n("m8Cl"),n("MrOs")),at=n.n(nt),st=(n("n3Sy"),n("YGKM")),ot=n.n(st),it=(n("fE9y"),n("yWGh")),rt=n.n(it),ct=(n("EIsY"),n("EjZ/")),ut=n.n(ct),lt=(n("ajFv"),n("bRqE")),dt=n.n(lt),mt=(n("OeGC"),n("KAis")),ht=n.n(mt),pt=(n("3j9/"),n("/6s/")),vt=n.n(pt),ft=(n("Z/nt"),n("6u3b")),gt=n.n(ft);a.default.use(gt.a),a.default.use(vt.a),a.default.use(m),a.default.use(ht.a),a.default.use(dt.a),a.default.use(ut.a),a.default.use(rt.a),a.default.use(ot.a),a.default.use(at.a),a.default.use(et.a),a.default.use(X.a),a.default.use(z.a),a.default.use(J.a),a.default.use(L.a),a.default.use(W.a);n("Qbok"),n("iOvl");a.default.use(D.a,j.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:T,store:U,components:{App:r},template:"<App/>"})},OeGC:function(t,e){},Qbok:function(t,e){},VOrR:function(t,e){},VYRP:function(t,e){},"Z/nt":function(t,e){},Z4qQ:function(t,e){},ajFv:function(t,e){},btfD:function(t,e){},fE9y:function(t,e){},hNqO:function(t,e){},iOvl:function(t,e){},iuJ0:function(t,e){},m8Cl:function(t,e){},mvys:function(t,e){},n3Sy:function(t,e){},oKGs:function(t,e){},t5Ke:function(t,e){},tV6h:function(t,e){},vWlU:function(t,e){},vfIS:function(t,e){},xIex:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6c52fca13fc105809544.js.map