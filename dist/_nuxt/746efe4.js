(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{577:function(t,e,r){},620:function(t,e,r){"use strict";r(577)},635:function(t,e,r){"use strict";r.r(e);var n=r(4),o=(r(41),r(27),r(94),r(10),r(34),r(39),r(349),r(170),r(532)),l=r(634),d=r(16),c=r(344),_=r(64),v=r(17),f=r(82),m=r(104),S=r(520),C=r(166),y=r(519),h=r(0),w=r(26),O=r(14),T={name:"PersonalDetails",components:{SfTabs:o.a,SfTable:l.a,SfButton:d.a,SfProperty:c.a,SfLink:_.a,SfIcon:v.a,SfImage:f.a,SfHeading:m.a,SfAlert:S.a,SfBadge:C.a,SfLoader:y.a},props:{title:{type:String,default:"My Orders"}},setup:function(){var t=Object(w.o)(),e=t.orders,r=t.search,o=t.loading,l=Object(h.k)(null);Object(O.k)(Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r();case 2:case"end":return t.stop()}}),t)}))));var d=function(t,e){var a=document.createElement("a");document.body.appendChild(a),a.style="display: none";var r=window.URL.createObjectURL(t);a.href=r,a.download=e,a.click(),window.URL.revokeObjectURL(r)},c=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d(new Blob([JSON.stringify(e.value)],{type:"application/json"}),"orders.json");case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d(new Blob([JSON.stringify(e)],{type:"application/json"}),"order "+w.c.getId(e)+".json");case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{tableHeaders:["Order ID","Date and Time","Tracking Number","Name","Price","Status",""],orders:Object(h.a)((function(){return e?e.value:[]})),getStatusTextClass:function(t){switch(w.c.getStatus(t)){case O.a.Open:return"text-warning";case O.a.Complete:return"text-success";default:return""}},orderGetters:w.c,downloadOrder:_,downloadOrders:c,currentOrder:l,loading:o}},head:function(){return{title:"My Orders - Pure Daily Care",meta:[{hid:"My Orders - Pure Daily Care",name:"My Orders - Pure Daily Care",content:"Pure Daily Care promotes natural beauty by combining the most modern technologies into easy-to-use, at-home products. Pure Daily Care technologies harness the healing power of naturally occurring phenomenon like steam, electricity and light to drastically improve your skin profile without the use of cosmetics."}]}}},G=T,k=(r(620),r(2)),component=Object(k.a)(G,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"my_account_content_wrap"},[r("div",{class:null==t.currentOrder?"":"no-title",attrs:{"data-cy":"order-history-tab_my-orders no-title"}},[t.currentOrder?r("div",[[r("div",{staticClass:"order-head-wrapper"},[r("div",{staticClass:"order-number"},[r("SfButton",{staticClass:"sf-button--text all-orders",attrs:{"data-cy":"order-history-btn_orders"},on:{click:function(e){t.currentOrder=null,t.scrollToTop()}}},[r("SfIcon",{attrs:{icon:"arrow_left"}})],1),t._v("Order #"+t._s(t.orderGetters.getId(t.currentOrder))+"\n          ")],1),t._v(" "),r("SfBadge",{staticClass:"current-order-status"},[t._v(t._s(t.orderGetters.getStatus(t.currentOrder).toLowerCase()))])],1),t._v(" "),r("div",{staticClass:"order-date-wrap"},[r("p",[t._v("Date & Time: "),r("strong",[t._v(t._s(t.orderGetters.getDate(t.currentOrder)))])]),t._v(" "),"FULFILLED"===t.orderGetters.getStatus(t.currentOrder)?r("p",[t._v("\n            Order Tracking: "),r("strong",[t._v(t._s(t.orderGetters.getTracking(t.currentOrder)))]),t._v(" ")," - "!=t.orderGetters.getTracking(t.currentOrder)?r("span",{staticClass:"redirect-icon"},[r("SfLink",{attrs:{target:"_blank",href:t.orderGetters.getTrackingUrl(t.currentOrder)}},[r("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M13.8333 13.8333H2.16667V2.16667H8V0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.24167 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V8H13.8333V13.8333ZM9.66667 0.5V2.16667H12.6583L4.46667 10.3583L5.64167 11.5333L13.8333 3.34167V6.33333H15.5V0.5H9.66667Z",fill:"#000000"}})])])],1):t._e()]):t._e()])],t._v(" "),r("div",{staticClass:"table-responsive"},[r("SfTable",{staticClass:"ordered-products-table"},[r("SfTableHeading",[r("SfTableHeader",{staticClass:"products__name text-left"},[t._v(t._s("Product name"))]),t._v(" "),r("SfTableHeader",{staticClass:"products__name"},[t._v(t._s("SKU"))]),t._v(" "),r("SfTableHeader",{staticClass:"products__name"},[t._v(t._s("Price"))]),t._v(" "),r("SfTableHeader",[t._v(t._s("Qty"))]),t._v(" "),r("SfTableHeader",[t._v(t._s("Subtotal"))])],1),t._v(" "),t._l(t.orderGetters.getItems(t.currentOrder),(function(e,i){return r("SfTableRow",{key:i},[r("SfTableData",{staticClass:"products__name"},[r("nuxt-link",{staticClass:"product-img",attrs:{to:"/products/"+t.orderGetters.getItemSlug(e)}},[r("SfImage",{attrs:{src:t.orderGetters.getItemImage(e)+"?fm=webp",height:"100",width:"100",lazy:!1,loading:"lazy"}})],1),t._v(" "),r("nuxt-link",{attrs:{to:"/products/"+t.orderGetters.getItemSlug(e)}},[t._v("\n              "+t._s(t.orderGetters.getItemName(e))+"\n            ")])],1),t._v(" "),r("SfTableData",{staticClass:"data-ordered-sku"},[r("strong",{staticClass:"mobile-lable"},[t._v("SKU:")]),t._v("\n            "+t._s(t.orderGetters.getItemSku(e))+"\n          ")]),t._v(" "),r("SfTableData",{staticClass:"data-ordered-price"},[r("strong",{staticClass:"mobile-lable"},[t._v("Price:")]),t._v("\n            "+t._s(t.$n(t.orderGetters.getItemPrice(e),"currency"))+"\n          ")]),t._v(" "),r("SfTableData",{staticClass:"data-ordered-quantity"},[r("strong",{staticClass:"mobile-lable"},[t._v("Qty:")]),t._v("\n            "+t._s(t.orderGetters.getItemQty(e))+"\n          ")]),t._v(" "),r("SfTableData",{staticClass:"data-ordered-subtotal"},[r("strong",{staticClass:"mobile-lable"},[t._v("Subtotal:")]),t._v("\n            "+t._s(t.$n(t.orderGetters.getSubtotalPrice(t.currentOrder),"currency"))+"\n          ")])],1)}))],2)],1),t._v(" "),r("div",{staticClass:"highlighted highlighted--total"},[r("SfProperty",{staticClass:"sf-property--full-width property",attrs:{name:"Subtotal",value:t.$n(t.orderGetters.getSubtotalPrice(t.currentOrder),"currency")}}),t._v(" "),r("SfProperty",{staticClass:"sf-property--full-width property",attrs:{name:"Shipping",value:t.$n(t.orderGetters.getShippingPrice(t.currentOrder),"currency")}}),t._v(" "),r("SfProperty",{staticClass:"sf-property--full-width property",attrs:{name:"Tax",value:t.$n(t.orderGetters.getTaxPrice(t.currentOrder),"currency")}}),t._v(" "),r("SfProperty",{staticClass:"sf-property--full-width property order-grand-total",attrs:{name:"Grand total",value:t.$n(t.orderGetters.getPrice(t.currentOrder),"currency")}}),t._v(" "),r("SfProperty",{staticClass:"sf-property--full-width property",attrs:{name:"Payment status",value:t.orderGetters.getPaymentStatus(t.currentOrder)}})],1),t._v(" "),r("div",{staticClass:"order-info-wrapper"},[r("SfHeading",{attrs:{title:"Order Information",level:4}}),t._v(" "),r("div",{staticClass:"order-info-cols"},[r("div",{staticClass:"order-info-col order-info-col-1"},[r("SfHeading",{attrs:{title:"Shipping Address",level:5}}),t._v(" "),"No shipping address available"!=t.orderGetters.getShippingAddress(t.currentOrder)?[r("p",[t._v(t._s(t.orderGetters.getCustomerName(t.currentOrder)))]),t._v(" "),t._l(t.orderGetters.getShippingAddress(t.currentOrder),(function(e,n){return r("div",{key:n},[t._v(t._s(e.value))])})),t._v(" "),""!=t.orderGetters.getCustomerPhone(t.currentOrder)?r("strong",[t._v(t._s(t.orderGetters.getCustomerPhone(t.currentOrder)))]):t._e()]:[r("p",[t._v("No shipping information provided yet!")])]],2),t._v(" "),r("div",{staticClass:"order-info-col order-info-col-3"},[r("SfHeading",{attrs:{title:"Billing Address",level:5}}),t._v(" "),"No shipping address available"!=t.orderGetters.getShippingAddress(t.currentOrder)?[r("p",[t._v(t._s(t.orderGetters.getCustomerName(t.currentOrder)))]),t._v(" "),t._l(t.orderGetters.getShippingAddress(t.currentOrder),(function(e,n){return r("div",{key:n},[t._v(t._s(e.value))])})),t._v(" "),""!=t.orderGetters.getCustomerPhone(t.currentOrder)?r("strong",[t._v(t._s(t.orderGetters.getCustomerPhone(t.currentOrder)))]):t._e()]:[r("p",[t._v("No billing information provided yet!")])]],2)])],1)],2):r("div",[r("div",{staticClass:"my_accoutn_title_wrap"},[r("SfHeading",{staticClass:"my_accoutn_title",attrs:{level:1,title:t.title}})],1),t._v(" "),t.loading?r("SfLoader",{staticClass:"order-loader",class:{loading:t.loading},attrs:{loading:t.loading}},[r("div")]):t._e(),t._v(" "),!t.loading&&t.orders&&t.orders.data&&0===t.orders.data.length?r("div",{staticClass:"no-orders my_account_content container-small"},[r("p",{staticClass:"no-orders__title"},[t._v(t._s("Currently you don't have any orders."))]),t._v(" "),r("div",{staticClass:"my-account-bottom-action-wrap"},[r("div",{staticClass:"form__button_wrap"},[r("SfButton",{staticClass:"no-orders__button form__button",attrs:{"data-cy":"order-history-btn_start",link:t.localePath("/c/accessories")}},[t._v("Start shopping")])],1)])]):t.loading?t._e():r("div",{staticClass:"table-responsive"},[r("SfTable",{staticClass:"orders-list-table"},[r("SfTableHeading",t._l(t.tableHeaders,(function(e){return r("SfTableHeader",{key:e},[t._v(t._s(e))])})),1),t._v(" "),t._l(t.orders.data,(function(e){return r("SfTableRow",{key:t.orderGetters.getId(e)},[r("SfTableData",{staticClass:"data-order-no"},[r("strong",{staticClass:"mobile-lable"},[t._v("Order no")]),t._v(" "),r("SfButton",{staticClass:"sf-button--text",attrs:{"data-cy":"order-history-btn_view"},on:{click:function(r){t.currentOrder=e}}},[t._v("\n                #"+t._s(t.orderGetters.getId(e))+"\n              ")])],1),t._v(" "),r("SfTableData",{staticClass:"data-order-date"},[r("strong",{staticClass:"mobile-lable"},[t._v("Date and Time")]),t._v("\n              "+t._s(t.orderGetters.getDate(e))+"\n            ")]),t._v(" "),"FULFILLED"===t.orderGetters.getStatus(e)?r("SfTableData",{staticClass:"data-order-tracking"},[r("strong",{staticClass:"mobile-lable"},[t._v("Tracking Number")]),t._v(" "),r("span",{staticClass:"order-track-wrap"},[t._v("\n                "+t._s(t.orderGetters.getTracking(e))+"\n                ")," - "!=t.orderGetters.getTracking(e)?r("span",[r("SfLink",{attrs:{target:"_blank",href:t.orderGetters.getTrackingUrl(e)}},[r("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M13.8333 13.8333H2.16667V2.16667H8V0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.24167 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V8H13.8333V13.8333ZM9.66667 0.5V2.16667H12.6583L4.46667 10.3583L5.64167 11.5333L13.8333 3.34167V6.33333H15.5V0.5H9.66667Z",fill:"#666666"}})])])],1):t._e()])]):r("SfTableData",{staticClass:"data-order-tracking"},[r("strong",{staticClass:"mobile-lable"},[t._v("Tracking Number")]),t._v(" - ")]),t._v(" "),r("SfTableData",{staticClass:"data-order-name"},[r("strong",{staticClass:"mobile-lable"},[t._v("Name")]),t._v("\n              "+t._s(t.orderGetters.getCustomerName(e))+"\n            ")]),t._v(" "),r("SfTableData",{staticClass:"data-order-price"},[r("strong",{staticClass:"mobile-lable"},[t._v("Price")]),t._v("\n              "+t._s(t.$n(t.orderGetters.getPrice(e),"currency"))+"\n            ")]),t._v(" "),r("SfTableData",{staticClass:"data-order-status"},[r("strong",{staticClass:"mobile-lable"},[t._v("Status")]),t._v(" "),r("span",{class:t.getStatusTextClass(e)},[t._v(t._s(t.orderGetters.getStatus(e).toLowerCase()))])]),t._v(" "),r("SfTableData",{staticClass:"orders__view orders__element--right"},[r("SfButton",{staticClass:"sf-button--text",attrs:{"data-cy":"order-history-btn_view"},on:{click:function(r){t.currentOrder=e,t.scrollToTop()}}},[r("SfIcon",[[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#666666"}},[r("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),t._v(" "),r("path",{attrs:{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"}})])]],2),t._v(" "),r("strong",{staticClass:"mobile-lable"},[t._v("View Order")])],1)],1)],1)}))],2)],1)],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);