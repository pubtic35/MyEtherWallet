(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e1317f5"],{"48fe":function(e,t,n){"use strict";var a=n("dd38"),r=n.n(a);r.a},dd38:function(e,t,n){},e814:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"max-width":"500px"}},[n("div",{staticClass:"d-flex align-items-center mb-3"},[n("h3",{staticClass:"mr-2 "},[e._v(e._s(e.$t("dappsMCDMaker.upgrade-sai-to-dai")))]),n("img",{staticClass:"icon-size",attrs:{src:e.DaiIcon}})]),n("div",{staticClass:"mb-5",staticStyle:{"max-width":"500px"}},[e._v(" "+e._s(e.$t("dappsMCDMaker.upgrade-informational"))+" ")]),n("div",{staticClass:"top-buttons"},[n("p",{on:{click:e.setMax}},[e._v(e._s(e.$t("dappsMCDMaker.entire-sai-balance")))])]),n("div",{staticClass:"dropdown-text-container dropdown-container no-point"},[n("p",[n("span",{staticClass:"cc DAI cc-icon cc-icon-dai currency-symbol"}),e._v(" "+e._s(e.$t("dappsMCDMaker.sai"))+" ")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.daiQty,expression:"daiQty"}],class:["currency-picker-container","dropdown-text-container","dropdown-container"],domProps:{value:e.daiQty},on:{input:function(t){t.target.composing||(e.daiQty=t.target.value)}}}),n("div",{staticClass:"buttons-container"},[n("div",{class:[e.validInputs?"":"disabled","submit-button large-round-button-green-filled"],on:{click:e.submitTransaction}},[e._v(" "+e._s(e.$t("dappsMCDMaker.upgrade"))+" ")])])])},r=[],i=(n("7db0"),n("b680"),n("d3b7"),n("25f0"),n("3ca3"),n("ddb0"),n("96cf"),n("c964")),c=n("f3f3"),s=n("2f62"),o=n("9b76"),u=n.n(o),d=n("901e"),p=n.n(d),l=n("d1fb"),f=n("70c1"),m=n.n(f),v=n("ce96"),b=function(e){return new p.a(e)},w={props:{tokensWithBalance:{type:Array,default:function(){return[]}},ethPrice:{type:p.a,default:function(){return new p.a(0)}},makerActive:{type:Boolean,default:!1},cdps:{type:Array,default:function(){return[]}},availableCdps:{type:Object,default:function(){return{}}},cdpDetailsLoaded:{type:Boolean,default:!1}},data:function(){return{daiQty:0,gasLimit:-1,DaiIcon:u.a}},computed:Object(c["a"])({},Object(s["c"])("main",["account","gasPrice","web3","network","ens"]),{validInputs:function(){return b(this.daiQty).gt(0)}}),mounted:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{migrate:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=new t.web3.eth.Contract(l["B"],l["h"].MIGRATION),r=a.methods.swapSaiToDai(e).encodeABI(),n.abrupt("return",{from:t.account.address,to:l["h"].MIGRATION,value:0,gas:5e5,data:r});case 3:case"end":return n.stop()}}),n)})))()},setMax:function(){var e=this.tokensWithBalance.find((function(e){return"SAI"===e.symbol}));this.daiQty=e?e.balance:0},approve:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=new t.web3.eth.Contract(l["c"],l["h"].SAI),r=a.methods.approve(l["h"].MIGRATION,e).encodeABI(),n.abrupt("return",{from:t.account.address,to:l["h"].SAI,value:0,data:r});case 3:case"end":return n.stop()}}),n)})))()},submitTransaction:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return window.scrollTo(0,0),t.prev=1,n=m.a.toWei(e.daiQty,"ether").toString(),t.next=5,Promise.all([e.approve(n),e.migrate(n)]);case 5:a=t.sent,e.web3.mew.sendBatchTransactions(a).catch((function(e){v["e"].responseHandler(e,v["e"].ERROR)})),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),v["e"].responseHandler(t.t0,v["e"].ERROR);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()},displayPercentValue:function(e){return p.a.isBigNumber(e)||(e=new p.a(e)),e.times(100).toString()},displayFixedValue:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return p.a.isBigNumber(e)||(e=new p.a(e)),e.toFixed(t).toString()}}},h=w,g=(n("48fe"),n("2877")),y=Object(g["a"])(h,a,r,!1,null,"47cd2ff8",null),k=y.exports;t["default"]=k}}]);
//# sourceMappingURL=chunk-4e1317f5.36b00256.js.map