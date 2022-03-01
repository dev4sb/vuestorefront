(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{523:function(t,e,n){},524:function(t,e,n){},525:function(t,e,n){"use strict";n(523)},526:function(t,e,n){"use strict";var r={name:"SfChevron",directives:{focus:n(506).a}},o=(n(525),n(2)),component=Object(o.a)(r,(function(t,e){var n=e._c;return n("span",e._g(e._b({class:[e.data.class,e.data.staticClass,"sf-chevron"],style:[e.data.style,e.data.staticStyle]},"span",e.data.attrs,!1),e.listeners),[e._t("default",(function(){return[n("span",{staticClass:"sf-chevron__bar sf-chevron__bar--left"}),e._v(" "),n("span",{staticClass:"sf-chevron__bar sf-chevron__bar--right"})]}))],2)}),[],!0,null,null,null);e.a=component.exports},527:function(t,e,n){"use strict";n(524)},532:function(t,e,n){"use strict";var r=n(32),o=(n(40),n(10),n(21),n(220),n(5)),c=n(507),l=n(526),d=n(16),f=n(502),v={name:"SfTab",components:{SfChevron:l.a,SfScrollable:f.a,SfButton:d.a},inject:["tabConfig"],props:{title:{type:String,default:""}},data:function(){return{isActive:!1,desktopMin:1024}},computed:{tabMaxContentHeight:function(){return this.tabConfig.tabMaxContentHeight},tabShowText:function(){return this.tabConfig.tabShowText},tabHideText:function(){return this.tabConfig.tabHideText}},methods:{tabClick:function(){if(c.a){var t=Math.max(document.documentElement.clientWidth,window.innerWidth);this.isActive&&t>this.desktopMin||this.$parent.$emit("toggle",this._uid)}}}},h=n(2),_=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sf-tabs__tab"},[t._t("title",(function(){return[n("SfButton",{staticClass:"sf-button--pure sf-tabs__title",class:{"is-active":t.isActive},attrs:{"aria-pressed":t.isActive.toString()},on:{click:t.tabClick}},[t._v("\n      "+t._s(t.title)+"\n      "),n("SfChevron",{staticClass:"sf-tabs__chevron",class:{"sf-chevron--right":!t.isActive}})],1)]}),null,{tabClick:t.tabClick,isActive:t.isActive,title:t.title}),t._v(" "),n("div",{staticClass:"sf-tabs__content"},[n("div",{staticClass:"sf-tabs__content__tab",class:{"display-none":!t.isActive}},[t.tabMaxContentHeight?n("SfScrollable",{attrs:{"max-content-height":t.tabMaxContentHeight,"show-text":t.tabShowText,"hide-text":t.tabHideText}},[t._t("default")],2):t._t("default")],2)])],2)}),[],!1,null,null,null).exports;o.default.component("SfTab",_);var C={name:"SfTabs",props:{openTab:{type:Number,default:1},tabMaxContentHeight:{type:String,default:""},tabShowText:{type:String,default:"show"},tabHideText:{type:String,default:"hide"}},data:function(){return{tabs:[],initialTabActivated:!1}},watch:{openTab:function(t,e){t!==e&&this.toggle(this.$children[t-1]._uid)}},mounted:function(){var t;this.$on("toggle",this.toggle),(t=this.tabs).push.apply(t,Object(r.a)(this.$children)),this.openTab&&this.openChild()},methods:{toggle:function(t){this.tabs.forEach((function(e){e.isActive=e._uid===t}));var e=this.tabs.findIndex((function(t){return!0===t.isActive}))+1;this.$emit("click:tab",e)},openChild:function(){this.openTab<this.$children.length+1&&(this.tabs[this.openTab-1].isActive=!0,this.initialTabActivated=!0)}},provide:function(){var t=this,e={};return Object.defineProperty(e,"tabMaxContentHeight",{get:function(){return t.tabMaxContentHeight}}),Object.defineProperty(e,"tabShowText",{get:function(){return t.tabShowText}}),Object.defineProperty(e,"tabHideText",{get:function(){return t.tabHideText}}),{tabConfig:e}}},m=(n(527),Object(h.a)(C,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.initialTabActivated,expression:"initialTabActivated"}],staticClass:"sf-tabs"},[t._t("default")],2)}),[],!1,null,null,null));e.a=m.exports},580:function(t,e,n){},623:function(t,e,n){"use strict";n(580)},660:function(t,e,n){"use strict";n.r(e);var r=n(4),o=(n(41),n(532)),c=n(16),l=n(17),d=n(553),f=n(552),v=n(26),h=n(0),_=n(14),C={name:"BillingDetails",components:{SfTabs:o.a,SfButton:c.a,SfIcon:l.a,UserBillingAddress:d.a,BillingAddressForm:f.a},setup:function(){var t=Object(v.n)(),e=t.billing,n=t.load,o=t.addAddress,c=t.deleteAddress,l=t.updateAddress,d=Object(h.a)((function(){return v.q.getAddresses(e.value)})),f=Object(h.k)(!1),C=Object(h.k)(void 0),m=Object(h.a)((function(){return!C.value})),A=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var form,n,r,c,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return form=e.form,n=e.onComplete,r=e.onError,t.prev=1,c=m.value?o:l,t.next=5,c({address:form});case 5:return data=t.sent,f.value=!1,C.value=void 0,t.next=10,n(data);case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),r(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}();return Object(_.k)(Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:case"end":return t.stop()}}),t)})))),{changeAddress:function(){var address=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;C.value=address,f.value=!0},updateAddress:l,removeAddress:function(address){return c({address:address})},saveAddress:A,userBillingGetters:v.q,addresses:d,edittingAddress:f,activeAddress:C,isNewAddress:m}}},m=C,A=(n(623),n(2)),component=Object(A.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.edittingAddress?n("SfTabs",{key:"edit-address",staticClass:"tab-orphan",attrs:{"open-tab":1}},[n("SfTab",{attrs:{title:t.isNewAddress?"Add the address":"Update the address"}},[n("p",{staticClass:"message"},[t._v("\n        "+t._s(t.$t("Contact details updated"))+"\n      ")]),t._v(" "),n("BillingAddressForm",{attrs:{address:t.activeAddress,isNew:t.isNewAddress},on:{submit:t.saveAddress}})],1)],1):n("SfTabs",{key:"address-list",staticClass:"tab-orphan",attrs:{"open-tab":1}},[n("SfTab",{attrs:{title:"Billing details"}},[n("p",{staticClass:"message"},[t._v("\n        "+t._s(t.$t("Manage billing addresses"))+"\n      ")]),t._v(" "),n("transition-group",{staticClass:"billing-list",attrs:{tag:"div",name:"fade"}},t._l(t.addresses,(function(address){return n("div",{key:t.userBillingGetters.getId(address),staticClass:"billing"},[n("div",{staticClass:"billing__content"},[n("div",{staticClass:"billing__address"},[n("UserBillingAddress",{attrs:{address:address}})],1)]),t._v(" "),n("div",{staticClass:"billing__actions"},[n("SfIcon",{staticClass:"smartphone-only",attrs:{icon:"cross",color:"gray",size:"14px",role:"button"},on:{click:function(e){return t.removeAddress(address)}}}),t._v(" "),n("SfButton",{on:{click:function(e){return t.changeAddress(address)}}},[t._v("\n              "+t._s(t.$t("Change"))+"\n            ")]),t._v(" "),n("SfButton",{staticClass:"color-light billing__button-delete desktop-only",on:{click:function(e){return t.removeAddress(address)}}},[t._v("\n              "+t._s(t.$t("Delete"))+"\n            ")])],1)])})),0),t._v(" "),n("SfButton",{staticClass:"action-button",on:{click:function(e){return t.changeAddress()}}},[t._v("\n        "+t._s(t.$t("Add new address"))+"\n      ")])],1)],1)],1)}),[],!1,null,"41aa3844",null);e.default=component.exports}}]);