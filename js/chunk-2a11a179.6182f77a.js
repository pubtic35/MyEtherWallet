(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a11a179"],{"0355":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"send-offline-container"},[a("interface-container-title",{attrs:{title:t.$t("sendTx.send-offline")}}),a("div",{staticClass:"generate-tx"},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"send-form"},[a("div",{staticClass:"form-block amount-to-address"},[a("ul",{staticClass:"type-amount"},[a("li",{staticClass:"type"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(t.$t("sendTx.type")))])]),a("currency-picker",{attrs:{currency:t.allTokens,token:!0,default:t.selectedCoinType.hasOwnProperty("symbol")?t.selectedCoinType:{},page:"sendOfflineGenTx"},on:{selectedCurrency:t.setSelectedCurrency}})],1),a("li",{staticClass:"amount"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(t.$t("sendTx.amount")))])]),a("div",{staticClass:"the-form amount-number"},[a("input",{attrs:{placeholder:t.$t("sendTx.dep-amount"),type:"number",step:"any",name:""},domProps:{value:t.toAmt},on:{input:t.debouncedAmount}})])])]),a("div",{staticClass:"to-address"},[a("dropdown-address-selector",{attrs:{"clear-address":t.clearAddress,title:t.$t("sendTx.to-addr")},on:{toAddress:function(e){return t.getToAddress(e)}}})],1)])]),a("div",{staticClass:"send-form"},[a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[a("div",{staticClass:"title-helper"},[a("h4",[t._v(t._s(t.$t("sendTx.data")))])])])]),a("div",{staticClass:"the-form gas-amount"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.toData,expression:"toData"}],attrs:{disabled:t.selectedCoinType.symbol!==t.network.type.name,type:"string",placeholder:"e.g. 0x65746865726d696e652d657531"},domProps:{value:t.toData},on:{input:function(e){e.target.composing||(t.toData=e.target.value)}}}),a("p",{directives:[{name:"show",rawName:"v-show",value:!t.validData,expression:"!validData"}]},[t._v(" "+t._s(t.$t("sendTx.invalid-data"))+" ")]),a("div",{staticClass:"good-button-container"},[a("i",{class:[t.validData&&t.toData.length>=2?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])])]),a("div",{staticClass:"send-form"},[a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[a("div",{staticClass:"title-helper"},[a("h4",[t._v(t._s(t.$t("common.gas.limit")))]),a("popover",{attrs:{popcontent:t.$t("popover.gas-limit")}})],1)])]),a("div",{staticClass:"the-form gas-amount"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.gasLimit,expression:"gasLimit"}],attrs:{placeholder:t.$t("common.gas.limit"),type:"number"},domProps:{value:t.gasLimit},on:{input:function(e){e.target.composing||(t.gasLimit=e.target.value)}}}),a("div",{staticClass:"good-button-container"},[a("i",{class:["fa fa-check-circle good-button",t.gasLimit>0?"":"not-good"],attrs:{"aria-hidden":"true"}})])])]),a("div",{staticClass:"send-form"},[a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[a("div",{staticClass:"title-helper"},[a("h4",[t._v(t._s(t.$t("sendTx.nonce")))]),a("popover",{attrs:{popcontent:t.$t("popover.nonce")}})],1)])]),a("div",{staticClass:"the-form gas-amount"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.localNonce,expression:"localNonce"}],attrs:{placeholder:t.$t("sendTx.nonce"),type:"number"},domProps:{value:t.localNonce},on:{input:function(e){e.target.composing||(t.localNonce=e.target.value)}}}),a("div",{staticClass:"good-button-container"},[a("i",{class:["fa fa-check-circle good-button",t.localNonce>=0?"":"not-good"],attrs:{"aria-hidden":"true"}})])])]),a("div",{staticClass:"send-form"},[a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[a("div",{staticClass:"title-helper"},[a("h4",[t._v(t._s(t.$t("common.gas.price")))]),a("popover",{attrs:{popcontent:t.txSpeedMsg}})],1)])]),a("div",{staticClass:"the-form gas-amount"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.localGasPrice,expression:"localGasPrice"}],attrs:{placeholder:t.$t("common.gas.price"),type:"number"},domProps:{value:t.localGasPrice},on:{input:function(e){e.target.composing||(t.localGasPrice=e.target.value)}}}),a("div",{staticClass:"good-button-container"},[a("i",{class:["fa fa-check-circle good-button",t.localGasPrice>0?"":"not-good"],attrs:{"aria-hidden":"true"}})])])]),a("div",{staticClass:"submit-button-container"},[a("input",{ref:"jsonInput",staticStyle:{display:"none"},attrs:{type:"file",name:"file"},on:{change:t.uploadFile}}),a("div",{staticClass:"submit-button large-round-button-green-border",on:{click:t.uploadClick}},[t._v(" "+t._s(t.$t("sendTx.import-json"))+" ")]),a("div",{class:[t.isAllInputValid?"":"disabled","submit-button large-round-button-green-filled"],on:{click:t.generateTx}},[t._v(" "+t._s(t.$t("sendTx.generate-tx"))+" ")]),a("div",{staticClass:"clear-all-btn",on:{click:function(e){return t.clear()}}},[t._v(" "+t._s(t.$t("common.clear-all"))+" ")])])]),a("signed-tx-modal",{ref:"signedTxModal",attrs:{"signed-tx":t.signed,"raw-tx":t.raw}})],1)],1)},n=[],i=(a("99af"),a("7db0"),a("b0c0"),a("a9e3"),a("b680"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("498a"),a("96cf"),a("c964")),o=a("f3f3"),r=a("55c1"),l=a("d7a2"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{ref:"signedTx",staticClass:"bootstrap-modal signed-tx-modal",attrs:{title:t.$t("sendTx.signed.tx"),"hide-footer":"",static:"",lazy:""}},[a("div",{staticClass:"d-block"},[a("div",{staticClass:"title-block"},[a("h4",{staticClass:"block-title"},[t._v(t._s(t.$t("sendTx.signed.tx")))])]),a("div",{staticClass:"signed-tx-container"},[a("code",[t._v(t._s(JSON.parse(t.signedTx).rawTransaction))]),a("input",{ref:"signedTxInput",staticStyle:{position:"absolute",top:"0",opacity:"0"},attrs:{autocomplete:"off"},domProps:{value:JSON.parse(t.signedTx).rawTransaction}})]),a("div",{staticClass:"scan-download-container"},[a("h4",{staticClass:"block-title"},[t._v(t._s(t.$t("sendTx.signed.scan")))]),""!==t.signedTx?a("div",{staticClass:"scan-download-items"},[a("qrcode",{attrs:{value:JSON.parse(t.signedTx).rawTransaction,options:{size:200},head:""}}),t._v(t._s(t.$t("sendTx.signed.or"))+" "),a("a",{attrs:{href:t.jsonFile,download:t.jsonFileName,rel:"noopener noreferrer"}},[t._v(t._s(t.$t("sendTx.signed.download")))])],1):t._e()]),a("div",{staticClass:"raw"},[a("div",{staticClass:"title-block"},[a("h4",{staticClass:"block-title"},[t._v(t._s(t.$t("sendTx.signed.raw")))]),a("div",{staticClass:"sliding-switch-white"},[a("label",{staticClass:"switch"},[a("input",{attrs:{type:"checkbox"},on:{click:function(e){t.showRaw=!t.showRaw}}}),a("span",{staticClass:"slider round"})])])]),t.showRaw?a("div",{staticClass:"raw-tx-container"},[a("code",[t._v(t._s(t.rawTx))])]):t._e()])]),a("div",{staticClass:"button-container"},[a("b-btn",{staticClass:"mid-round-button-green-filled close-button",on:{click:t.copyAndContinue}},[t._v(t._s(t.$t("sendTx.signed.button-copy-cont")))])],1)])},d=[],u=(a("3ca3"),a("ddb0"),a("2b3d"),{name:"SignedTxModal",props:{signedTx:{type:String,default:""},rawTx:{type:Object,default:function(){return{}}},pathUpdate:{type:Function,default:function(){}}},data:function(){return{showRaw:!1,jsonFile:"",jsonFileName:"signedTransactionObject-".concat(+new Date,".json")}},watch:{signedTx:function(t){var e=JSON.parse(t),a=this.rawTx;delete a["generateOnly"];var s=Object.assign({},e.tx,a);delete e["tx"],e["tx"]=s;var n=JSON.stringify(e),i=new Blob([n],{type:"mime"});this.jsonFileName="signedTransactionObject-".concat(+new Date,".json"),this.jsonFile=window.URL.createObjectURL(i)}},methods:{copyAndContinue:function(){this.$refs.signedTxInput.select(),document.execCommand("copy"),this.$refs.signedTx.hide()}}}),p=u,m=(a("f762"),a("2877")),h=Object(m["a"])(p,c,d,!1,null,null,null),f=h.exports,g=a("901e"),v=a.n(g),y=a("70c1"),b=a("2f62"),w=a("8ded"),C=a.n(w),x=a("ce96"),T=a("1131"),k=a.n(T),_=a("94b2"),N={components:{"signed-tx-modal":f,"currency-picker":l["a"],"interface-container-title":r["a"],"dropdown-address-selector":_["a"]},props:{checkPrefilled:{type:Function,default:function(){}},clearPrefilled:{type:Function,default:function(){}},isPrefilled:{type:Boolean,default:!1},value:{type:String,default:"0"},data:{type:String,default:""},to:{type:String,default:""},gaslimit:{type:String,default:""},gas:{type:Number,default:0},tokensymbol:{type:String,default:""},tokens:{type:Array,default:function(){return[]}},nonce:{type:String,default:"0"},highestGas:{type:String,default:"0"}},data:function(){return{toAmt:0,address:"",toData:"0x",gasLimit:21e3,selectedCoinType:{},raw:{},signed:"{}",localNonce:this.nonce,file:"",localGasPrice:this.highestGas,clearAddress:!1}},computed:Object(o["a"])({},Object(b["c"])("main",["wallet","network","web3","linkQuery"]),{txSpeedMsg:function(){var t=this.network.type.name,e="".concat(this.$t("popover.tx-speed-pt-1").replace("{0}",t)," ").concat(this.$t("popover.tx-speed-pt-2").replace("{0}",t));return e},allTokens:function(){var t=C.a.get("customTokens"),e=this.tokens.concat(t[this.network.type.name]),a=e.sort((function(t,e){return t.symbol.toUpperCase()<e.symbol.toUpperCase()?-1:t.symbol.toUpperCase()>e.symbol.toUpperCase()?1:0}));return a},isAllInputValid:function(){return this.toData.length>=2&&this.address.length>0&&this.validAddress&&this.toAmt>=0&&this.gasLimit>0&&this.localNonce>=0&&this.localGasPrice},validData:function(){return x["d"].validateHexString(this.toData)}}),watch:{highestGas:function(t){this.localGasPrice=t},nonce:function(t){this.localNonce=t},toAmt:function(t){this.createDataHex(t,null,null)},address:function(t){this.validAddress&&this.createDataHex(null,t,null)},selectedCoinType:function(t){this.createDataHex(null,null,t)},isPrefilled:function(){this.prefillForm()}},mounted:function(){this.checkPrefilled()},methods:{clear:function(){this.toAmt=0,this.address="",this.toData="0x",this.gasLimit=21e3,this.localNonce=this.nonce,this.localGasPrice=this.highestGas,this.clearAddress=!this.clearAddress,this.selectedCoinType={name:this.network.type.name_long,symbol:this.network.type.currencyName}},prefillForm:function(){var t=this;if(this.tokens.length>0&&this.isPrefilled){var e=this.tokensymbol?this.tokens.find((function(e){return e.symbol.toLowerCase()===t.tokensymbol.toLowerCase()})):void 0;this.toAmt=new v.a(this.value).toFixed(),this.toData=x["d"].validateHexString(this.data)?this.data:"",this.address=this.to,this.gasLimit=this.gaslimit?new v.a(this.gaslimit).toString():"21000",this.localGasPrice=new v.a(this.gas).toFixed(),this.selectedCoinType=e||this.selectedCoinType,x["e"].responseHandler("Form has been prefilled. Please proceed with caution!",x["e"].WARN),this.clearPrefilled()}},debouncedAmount:k.a._.debounce((function(t){var e=this.network.type.currencyName,a=this.selectedCoinType.symbol===e?18:parseInt(this.selectedCoinType.decimals);this.toAmt=t.target.valueAsNumber<0||isNaN(t.target.valueAsNumber)?0:new v.a(t.target.valueAsNumber).decimalPlaces(a).toFixed()}),300),createDataHex:function(t,e,a){var s=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var i,o,r,l,c,d,u,p;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:i=null!==t?t:s.toAmt,o=null!==e?e:s.address,r=null!==a?a:s.selectedCoinType,l=[{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],c=s.network.type.currencyName,r.symbol!==c&&""!==o&&(d=""===i||null===i?"0":i,u=new s.web3.eth.Contract(l,r.address),p=new v.a(d).times(new v.a(10).pow(r.decimals)),s.toData=u.methods.transfer(o,p.toFixed()).encodeABI());case 6:case"end":return n.stop()}}),n)})))()},getToAddress:function(t){this.address=t.address,this.validAddress=t.valid},uploadClick:function(){var t=this.$refs.jsonInput;t.value="",t.click()},uploadFile:function(t){var e=this,a=new FileReader;a.onloadend=function(a){try{var s=JSON.parse(a.target.result);e.localGasPrice=y["fromWei"](s.gasPrice,"gwei"),e.localNonce=s.nonce}catch(t){x["e"].responseHandler(t,x["e"].WARN)}},a.readAsBinaryString(t.target.files[0])},generateTx:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,s,n,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.network.type.currencyName,s=t.selectedCoinType.symbol!==a,n=y["toWei"](t.toAmt,"ether"),i={nonce:x["d"].sanitizeHex(new v.a(t.localNonce).toString(16)),gasLimit:x["d"].sanitizeHex(new v.a(t.gasLimit).toString(16)),gasPrice:x["d"].sanitizeHex(new v.a(y["toWei"](t.localGasPrice,"gwei")).toString(16)),to:s?t.selectedCoinType.address:t.address.toLowerCase().trim(),value:s?0:n,data:t.toData,chainId:t.network.type.chainID},t.raw=i,e.next=7,t.wallet.signTransaction(t.raw);case 7:o=e.sent,t.signed=JSON.stringify(o),t.$refs.signedTxModal.$refs.signedTx.show(),window.scrollTo(0,0),t.clear();case 12:case"end":return e.stop()}}),e)})))()},setSelectedCurrency:function(t){var e=this.network.type.currencyName;this.selectedCoinType=t,t.symbol===e&&(this.toData="0x")}}},$=N,A=(a("97b5"),Object(m["a"])($,s,n,!1,null,"347523db",null)),P=A.exports;a.d(e,"default",(function(){return P}))},"73cf":function(t,e,a){},"8e44d":function(t,e,a){},"97b5":function(t,e,a){"use strict";var s=a("73cf"),n=a.n(s);n.a},f762:function(t,e,a){"use strict";var s=a("8e44d"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-2a11a179.6182f77a.js.map