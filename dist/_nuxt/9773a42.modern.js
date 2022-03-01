(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{484:function(t,e,n){},485:function(t,e,n){},486:function(t,e,n){"use strict";n(484)},487:function(t,e,n){"use strict";var r={name:"SfChevron",directives:{focus:n(467).a}},d=(n(486),n(1)),component=Object(d.a)(r,(function(t,e){var n=e._c;return n("span",e._g(e._b({class:[e.data.class,e.data.staticClass,"sf-chevron"],style:[e.data.style,e.data.staticStyle]},"span",e.data.attrs,!1),e.listeners),[e._t("default",(function(){return[n("span",{staticClass:"sf-chevron__bar sf-chevron__bar--left"}),e._v(" "),n("span",{staticClass:"sf-chevron__bar sf-chevron__bar--right"})]}))],2)}),[],!0,null,null,null);e.a=component.exports},488:function(t,e,n){"use strict";n(485)},493:function(t,e,n){"use strict";n(16),n(18);var r=n(4),d=n(468),o=n(487),c=n(14),l=n(463),h={name:"SfTab",components:{SfChevron:o.a,SfScrollable:l.a,SfButton:c.a},inject:["tabConfig"],props:{title:{type:String,default:""}},data:()=>({isActive:!1,desktopMin:1024}),computed:{tabMaxContentHeight(){return this.tabConfig.tabMaxContentHeight},tabShowText(){return this.tabConfig.tabShowText},tabHideText(){return this.tabConfig.tabHideText}},methods:{tabClick(){if(d.a){var t=Math.max(document.documentElement.clientWidth,window.innerWidth);this.isActive&&t>this.desktopMin||this.$parent.$emit("toggle",this._uid)}}}},v=n(1),f=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sf-tabs__tab"},[t._t("title",(function(){return[n("SfButton",{staticClass:"sf-button--pure sf-tabs__title",class:{"is-active":t.isActive},attrs:{"aria-pressed":t.isActive.toString()},on:{click:t.tabClick}},[t._v("\n      "+t._s(t.title)+"\n      "),n("SfChevron",{staticClass:"sf-tabs__chevron",class:{"sf-chevron--right":!t.isActive}})],1)]}),null,{tabClick:t.tabClick,isActive:t.isActive,title:t.title}),t._v(" "),n("div",{staticClass:"sf-tabs__content"},[n("div",{staticClass:"sf-tabs__content__tab",class:{"display-none":!t.isActive}},[t.tabMaxContentHeight?n("SfScrollable",{attrs:{"max-content-height":t.tabMaxContentHeight,"show-text":t.tabShowText,"hide-text":t.tabHideText}},[t._t("default")],2):t._t("default")],2)])],2)}),[],!1,null,null,null).exports;r.default.component("SfTab",f);var _={name:"SfTabs",props:{openTab:{type:Number,default:1},tabMaxContentHeight:{type:String,default:""},tabShowText:{type:String,default:"show"},tabHideText:{type:String,default:"hide"}},data:()=>({tabs:[],initialTabActivated:!1}),watch:{openTab(t,e){t!==e&&this.toggle(this.$children[t-1]._uid)}},mounted(){this.$on("toggle",this.toggle),this.tabs.push(...this.$children),this.openTab&&this.openChild()},methods:{toggle(t){this.tabs.forEach((e=>{e.isActive=e._uid===t}));var e=this.tabs.findIndex((t=>!0===t.isActive))+1;this.$emit("click:tab",e)},openChild(){this.openTab<this.$children.length+1&&(this.tabs[this.openTab-1].isActive=!0,this.initialTabActivated=!0)}},provide:function(){var t={};return Object.defineProperty(t,"tabMaxContentHeight",{get:()=>this.tabMaxContentHeight}),Object.defineProperty(t,"tabShowText",{get:()=>this.tabShowText}),Object.defineProperty(t,"tabHideText",{get:()=>this.tabHideText}),{tabConfig:t}}},m=(n(488),Object(v.a)(_,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.initialTabActivated,expression:"initialTabActivated"}],staticClass:"sf-tabs"},[t._t("default")],2)}),[],!1,null,null,null));e.a=m.exports},545:function(t,e,n){},585:function(t,e,n){"use strict";n(545)},607:function(t,e,n){"use strict";n.r(e);var r=n(3),d=n(493),o=n(14),c=n(15),l={name:"UserShippingAddress",props:{address:{default:()=>{},type:Object}}},h=n(1),v=Object(h.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shipping-addr",attrs:{address:t.address}},[n("section",[n("p",[n("strong",[t._v(t._s(t.address.name))])]),t._v(" "),n("p",[n("i",[t._v(t._s(t.address.company))])]),t._v(" "),n("p",[n("i",[t._v(t._s(t.address.formattedArea))])]),t._v(" "),n("p",[n("i",[t._v(t._s(t.address.phone))])]),t._v(" "),n("p",[n("i",[t._v(t._s(t.address.email))])])])])}),[],!1,null,null,null).exports,f={name:"ShippingAddressForm"},_=Object(h.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b",[t._v("Please implement vendor-specific ShippingAddressForm component in the 'components/MyAccount' directory")])}),[],!1,null,null,null).exports,m=n(19),A=n(0),C=n(11),S={name:"ShippingDetails",components:{SfTabs:d.a,SfButton:o.a,SfIcon:c.a,UserShippingAddress:v,ShippingAddressForm:_},setup(){var{shipping:t,load:e,addAddress:n,deleteAddress:d,updateAddress:o}=Object(m.p)(),c=Object(A.a)((()=>m.s.getAddresses(t.value))),l=Object(A.k)(!1),h=Object(A.k)(void 0),v=Object(A.a)((()=>!h.value)),f=function(){var t=Object(r.a)((function*(t){var{form:form,onComplete:e,onError:r}=t;try{var d=v.value?n:o,data=yield d({address:form});l.value=!1,h.value=void 0,yield e(data)}catch(t){r(t)}}));return function(e){return t.apply(this,arguments)}}();return Object(C.k)(Object(r.a)((function*(){yield e()}))),{changeAddress:function(){var address=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;h.value=address,l.value=!0},updateAddress:o,removeAddress:address=>d({address:address}),saveAddress:f,userShippingGetters:m.s,addresses:c,edittingAddress:l,activeAddress:h,isNewAddress:v}}},x=S,T=(n(585),Object(h.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.edittingAddress?n("SfTabs",{key:"edit-address",staticClass:"tab-orphan",attrs:{"open-tab":1}},[n("SfTab",{attrs:{title:t.isNewAddress?"Add the address":"Update the address"}},[n("p",{staticClass:"message"},[t._v("\n        "+t._s(t.$t("Contact details updated"))+"\n      ")]),t._v(" "),n("ShippingAddressForm",{attrs:{address:t.activeAddress,isNew:t.isNewAddress},on:{submit:t.saveAddress}})],1)],1):n("SfTabs",{key:"address-list",staticClass:"tab-orphan",attrs:{"open-tab":1}},[n("SfTab",{attrs:{title:"Shipping details"}},[n("p",{staticClass:"message"},[t._v("\n        "+t._s(t.$t("Manage shipping addresses"))+"\n      ")]),t._v(" "),n("transition-group",{staticClass:"shipping-list",attrs:{tag:"div",name:"fade"}},t._l(t.addresses,(function(address){return n("div",{key:t.userShippingGetters.getId(address),staticClass:"shipping"},[n("div",{staticClass:"shipping__content"},[n("div",{staticClass:"shipping__address"},[n("UserShippingAddress",{attrs:{address:address}})],1)]),t._v(" "),n("div",{staticClass:"shipping__actions"},[n("SfIcon",{staticClass:"smartphone-only",attrs:{icon:"cross",color:"gray",size:"14px",role:"button"},on:{click:function(e){return t.removeAddress(address)}}}),t._v(" "),n("SfButton",{on:{click:function(e){return t.changeAddress(address)}}},[t._v("\n              "+t._s(t.$t("Change"))+"\n            ")]),t._v(" "),n("SfButton",{staticClass:"color-light shipping__button-delete desktop-only",on:{click:function(e){return t.removeAddress(address)}}},[t._v("\n              "+t._s(t.$t("Delete"))+"\n            ")])],1)])})),0),t._v(" "),n("SfButton",{staticClass:"action-button",on:{click:function(e){return t.changeAddress()}}},[t._v("\n        "+t._s(t.$t("Add new address"))+"\n      ")])],1)],1)],1)}),[],!1,null,"67378056",null));e.default=T.exports}}]);