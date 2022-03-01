(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{531:function(e,t,n){},540:function(e,t,n){"use strict";n(531)},541:function(e,t,n){},550:function(e,t,n){"use strict";n(541)},592:function(e,t,n){"use strict";n.r(t);var r=n(4),o=(n(41),n(16)),c=n(17),l=n(104),d=n(519),f=n(596),v=n(552),_=n(553),m=n(26),y=n(0),h=n(14),w=n(221),k={name:"AdressBook",components:{SfButton:o.a,SfIcon:c.a,SfHeading:l.a,SfLoader:d.a,SfNotification:f.a,UserBillingAddress:_.a,BillingAddressForm:v.a},props:{title:{type:String,default:"Address Book"}},setup:function(){var e=Object(m.n)(),t=e.billing,n=e.load,o=e.addAddress,c=e.deleteAddress,l=e.updateAddress,d=e.loading,f=Object(y.a)((function(){return m.q.getAddresses(t.value)})),v=Object(y.k)(!1),_=Object(y.k)(void 0),k=Object(y.a)((function(){return!_.value})),A=Object(w.a)().send,C=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(address){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c({address:address}).then((function(){t.value?(n(),A({key:"address_removed",message:"Address has been removed successfully",type:"success",title:"Address removed!",icon:"check"})):A({key:"address_removed",message:"Something went wrong, please retry",type:"danger",title:"Remove address failed!"})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(r){var form,c,d,f,m,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return form=r.form,c=r.onComplete,d=r.onError,e.prev=1,f=k.value?o:l,m="Addressbook updated successfully",k.value&&(m="Address added successfully"),e.next=7,f({address:form.value}).then((function(){t.value?(n(),A({key:"address_success",message:m,type:"success",title:"Success!",icon:"check"})):A({key:"address_failed",message:"Somethig went wrong, please retry",type:"danger",title:"Failed!"})}));case 7:return data=e.sent,v.value=!1,_.value=void 0,e.next=12,c(data);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),d(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.k)(Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:case"end":return e.stop()}}),e)})))),{changeAddress:function(){var address=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;_.value=address,v.value=!0},updateAddress:l,removeAddress:C,saveAddress:S,userBillingGetters:m.q,addresses:f,edittingAddress:v,activeAddress:_,isNewAddress:k,loading:d}},data:function(){return{visible:!1,addressToRemove:{}}},methods:{ConfirmRemove:function(address){this.visible=!0,this.addressToRemove=address},handleRemove:function(address){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoadervisible=!0,t.next=3,e.removeAddress(address).then((function(){e.visible=!1}));case 3:case"end":return t.stop()}}),t)})))()}}},A=k,C=(n(550),n(2)),component=Object(C.a)(A,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"my_account_content_wrap"},[n("div",{staticClass:"my_accoutn_title_wrap"},[n("SfHeading",{staticClass:"my_accoutn_title",attrs:{level:1,title:e.title}})],1),e._v(" "),e.edittingAddress?n("div",{staticClass:"tab-orphan"},[n("div",{attrs:{"data-cy":"billing-details-tab_change"}},[n("BillingAddressForm",{attrs:{address:e.activeAddress,"is-new":e.isNewAddress},on:{submit:e.saveAddress}})],1)]):n("div",{staticClass:"tab-orphan"},[n("transition",{attrs:{name:"sf-collapse-top",mode:"out-in"}},[n("div",{staticClass:"notifications"},[e.loading?e._e():n("SfNotification",{attrs:{visible:e.visible,title:"Are you sure?",message:"Are you sure you would like to remove this address from your account?",type:"secondary"},scopedSlots:e._u([{key:"action",fn:function(){return[n("div",{staticClass:"button-wrap"},[n("SfButton",{on:{click:function(t){return e.handleRemove(e.addressToRemove)}}},[e._v("Yes")]),e._v(" "),n("SfButton",{on:{click:function(t){e.visible=!1}}},[e._v("Cancel")])],1)]},proxy:!0},{key:"close",fn:function(){return[n("div")]},proxy:!0}],null,!1,1994956572)})],1)]),e._v(" "),e.loading?n("SfLoader",{staticClass:"address-loader",class:{loading:e.loading},attrs:{loading:e.loading}},[n("div")]):e._e(),e._v(" "),e.loading?e._e():n("div",{attrs:{"data-cy":"billing-details-tab_details"}},[n("div",{staticClass:"billing-list"},[e._l(e.addresses,(function(address){return n("div",{key:e.userBillingGetters.getId(address),staticClass:"billing"},[n("div",{staticClass:"billing__wrap"},[n("div",{staticClass:"billing__content"},[n("div",{staticClass:"billing__address"},[n("UserBillingAddress",{attrs:{address:address}})],1)]),e._v(" "),n("div",{staticClass:"billing__actions"},[n("SfButton",{staticClass:" sf-button--text",attrs:{"data-cy":"billing-details-btn_change"},on:{click:function(t){e.changeAddress(address),e.scrollToTop()}}},[e._v("\n                Edit\n              ")]),e._v(" "),n("SfButton",{staticClass:"billing__button-delete sf-button--text",attrs:{"data-cy":"billing-details-btn_delete"},on:{click:function(t){return e.ConfirmRemove(address)}}},[e._v("\n                Delete\n              ")])],1)])])})),e._v(" "),n("div",{staticClass:"billing add-address-btn"},[n("div",{staticClass:"billing__wrap",on:{click:function(t){e.changeAddress(),e.scrollToTop()}}},[n("SfButton",{staticClass:"action-button sf-button--text",attrs:{"data-cy":"billing-details-btn_add"}},[n("SfIcon",{attrs:{icon:"plus"}}),e._v("\n              Add Address\n            ")],1)],1)])],2)])],1)])}),[],!1,null,"50a0aa1e",null);t.default=component.exports},596:function(e,t,n){"use strict";n(42);var r=n(17),o=n(16),c={name:"SfNotification",components:{SfIcon:r.a,SfButton:o.a},props:{visible:{type:Boolean,default:!1},persistent:{type:Boolean,default:!1},title:{type:String,default:""},message:{type:String,default:""},action:{type:String,default:""},type:{type:String,default:"secondary",validator:function(e){return["secondary","info","success","warning","danger"].includes(e)}}},computed:{icon:function(){switch(this.type){case"success":return"added_to_cart";case"danger":return"info_shield";default:return"info_circle"}},colorClass:function(){switch(this.type){case"secondary":return"color-secondary";case"info":default:return"color-info";case"success":return"color-success";case"warning":return"color-warning";case"danger":return"color-danger"}}},methods:{actionHandler:function(){this.$emit("click:action")},closeHandler:function(){this.$emit("click:close")}}},l=(n(540),n(2)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"sf-fade"}},[n("div",{staticClass:"sf-notification",class:[{"display-none":!e.visible},e.colorClass]},[e._t("icon",(function(){return[n("SfIcon",{staticClass:"sf-notification__icon",class:{"display-none":!e.icon},attrs:{icon:e.icon,size:"lg",color:"white"}})]}),null,{icon:e.icon}),e._v(" "),n("div",[e._t("title",(function(){return[n("div",{staticClass:"sf-notification__title smartphone-only",class:{"display-none":!e.title}},[e._v("\n          "+e._s(e.title)+"\n        ")])]}),null,{title:e.title}),e._v(" "),e._t("message",(function(){return[n("span",{staticClass:"sf-notification__message",class:{"display-none":!e.message}},[e._v(e._s(e.message))])]}),null,{message:e.message}),e._v(" "),e._t("action",(function(){return[n("SfButton",{staticClass:"sf-button--pure sf-notification__action",class:{"display-none":!e.action},on:{click:e.actionHandler}},[e._v("\n          "+e._s(e.action)+"\n        ")])]}),null,{action:e.action,actionHandler:e.actionHandler})],2),e._v(" "),e._t("close",(function(){return[n("SfButton",{staticClass:"sf-button--pure sf-notification__close",class:{"display-none":e.persistent},attrs:{"aria-label":"Close notification"},on:{click:e.closeHandler}},[n("SfIcon",{attrs:{icon:"cross",color:"white"}})],1)]}),null,{closeHandler:e.closeHandler})],2)])}),[],!1,null,null,null);t.a=component.exports}}]);