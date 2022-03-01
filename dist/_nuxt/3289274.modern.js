(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{484:function(t,e,r){},486:function(t,e,r){"use strict";r(484)},487:function(t,e,r){"use strict";var n={name:"SfChevron",directives:{focus:r(467).a}},o=(r(486),r(1)),component=Object(o.a)(n,(function(t,e){var r=e._c;return r("span",e._g(e._b({class:[e.data.class,e.data.staticClass,"sf-chevron"],style:[e.data.style,e.data.staticStyle]},"span",e.data.attrs,!1),e.listeners),[e._t("default",(function(){return[r("span",{staticClass:"sf-chevron__bar sf-chevron__bar--left"}),e._v(" "),r("span",{staticClass:"sf-chevron__bar sf-chevron__bar--right"})]}))],2)}),[],!0,null,null,null);e.a=component.exports},489:function(t,e,r){},494:function(t,e,r){},495:function(t,e,r){"use strict";r(489)},507:function(t,e,r){"use strict";r(494)},518:function(t,e,r){},519:function(t,e,r){},520:function(t,e,r){},521:function(t,e,r){},522:function(t,e,r){},555:function(t,e,r){"use strict";var n=r(14),o=r(177),l={name:"SfAddToCart",components:{SfButton:n.a,SfQuantitySelector:o.a},model:{prop:"qty"},props:{disabled:{type:Boolean,default:!1},qty:{type:[Number,String],default:1}}},c=(r(507),r(1)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sf-add-to-cart"},[t._t("quantity-select-input",(function(){return[r("SfQuantitySelector",{staticClass:"sf-add-to-cart__select-quantity",attrs:{qty:t.qty,"aria-label":"Quantity",disabled:t.disabled},on:{input:function(e){return t.$emit("input",e)}}})]}),null,{qty:t.qty}),t._v(" "),t._t("add-to-cart-btn",(function(){return[r("SfButton",t._g({staticClass:"sf-add-to-cart__button",attrs:{disabled:t.disabled}},t.$listeners),[t._v("\n      Add to cart\n    ")])]}))],2)}),[],!1,null,null,null);e.a=component.exports},556:function(t,e,r){"use strict";var n={name:"SfBreadcrumbs",inject:{components:{default:{SfLink:r(41).a}}},props:{breadcrumbs:{type:Array,default:()=>[]}},breadcrumbLast:t=>t.length-1},o=(r(495),r(1)),component=Object(o.a)(n,(function(t,e){var r=e._c;return r("nav",e._g(e._b({class:[e.data.class,e.data.staticClass,"sf-breadcrumbs"],style:[e.data.style,e.data.staticStyle],attrs:{"aria-label":"breadcrumb"}},"nav",e.data.attrs,!1),e.listeners),[r("ol",{staticClass:"sf-breadcrumbs__list"},e._l(e.props.breadcrumbs,(function(t,i){return r("li",{key:i,staticClass:"sf-breadcrumbs__list-item",attrs:{"aria-current":e.$options.breadcrumbLast(e.props.breadcrumbs)===i&&"page"}},[e.$options.breadcrumbLast(e.props.breadcrumbs)!==i?[e._t("link",(function(){return[r(e.injections.components.SfLink,{tag:"component",staticClass:"sf-breadcrumbs__breadcrumb",attrs:{link:t.link,"data-testid":t.text}},[e._v("\n            "+e._s(t.text)+"\n          ")])]}),null,{breadcrumb:t})]:[e._t("current",(function(){return[r(e.injections.components.SfLink,{tag:"component",staticClass:"sf-breadcrumbs__breadcrumb current",attrs:{link:t.link}},[e._v("\n            "+e._s(t.text)+"\n          ")])]}),null,{breadcrumb:t})]],2)})),0)])}),[],!0,null,null,null);e.a=component.exports},559:function(t,e,r){"use strict";r(518)},560:function(t,e,r){"use strict";r(519)},561:function(t,e,r){"use strict";r(520)},562:function(t,e,r){"use strict";r(521)},563:function(t,e,r){"use strict";r(522)},611:function(t,e,r){"use strict";r(16),r(18),r(32);var n=r(4),o=r(467),l=r(9);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={functional:!0,props:{transition:{type:[String,Boolean],default:"sf-expand"},group:{type:Boolean,default:!1}},render(t,e){var{data:data,children:r,props:n}=e,o=!1===n.transition,l={beforeEnter:function(t){t.style.setProperty("height","auto")},enter:function(t){t.style.setProperty("height","auto");var e=getComputedStyle(t).height;t.style.setProperty("height","0"),requestAnimationFrame((()=>{t.style.setProperty("height",e)}))},leave:function(t){var e=getComputedStyle(t).height;t.style.setProperty("height",e),requestAnimationFrame((()=>{t.style.setProperty("height","0")}))}};return t("transition",d(d({},data),{},{attrs:{name:o?"":n.transition},on:"sf-expand"===n.transition&&l}),r)}},f=r(487),m=r(14),_={name:"SfAccordionItem",directives:{focus:o.a},components:{SfChevron:f.a,SfButton:m.a,SfExpand:h},props:{header:{type:String,default:""}},data:()=>({isOpen:!1}),methods:{accordionClick(){this.$parent.$emit("toggle",this._uid)}}},v=(r(562),r(1)),y=Object(v.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sf-accordion-item"},[t._t("header",(function(){return[r("SfButton",{staticClass:"sf-button--pure sf-accordion-item__header",class:{"is-open":t.isOpen},attrs:{"aria-pressed":t.isOpen.toString(),"aria-expanded":t.isOpen.toString(),"data-testid":"accordion-item-"+t.header},on:{click:t.accordionClick}},[t._v("\n      "+t._s(t.header)+"\n      "),t._t("additional-info"),t._v(" "),r("SfChevron",{staticClass:"sf-accordion-item__chevron",class:{"sf-chevron--right":!t.isOpen},attrs:{tabindex:"0"}})],2)]}),null,{header:t.header,isOpen:t.isOpen,accordionClick:t.accordionClick,showChevron:t.$parent.showChevron}),t._v(" "),r("SfExpand",{attrs:{transition:t.$parent.transition}},[r("div",{class:{"display-none":!t.isOpen}},[r("div",{staticClass:"sf-accordion-item__content"},[t._t("default")],2)])])],2)}),[],!1,null,null,null).exports;n.default.component("SfAccordionItem",y);var P={name:"SfAccordion",props:{open:{type:[String,Array],default:""},multiple:{type:Boolean,default:!1},transition:{type:String,default:"sf-expand"},showChevron:{type:Boolean,default:!0}},data(){return{items:[],openHeader:this.open,internalMultiple:this.multiple}},computed:{headersAreClosed(){return this.$children.map((header=>header.isOpen)).every((header=>!1===header))}},watch:{open(t,e){if(t&&t!==e){var r=this.$children.find((e=>e.header===t));this.toggleHandler(r._uid)}}},mounted(){this.$on("toggle",this.toggleHandler),this.setAccordionItems(),this.setAsOpen(),this.$emit("click:open-header")},updated(){this.setAccordionItems(),this.setAsOpen(),this.$emit("click:open-header")},methods:{setAccordionItems(){this.$children&&this.$children.length&&this.items.push(...this.$children)},setAsOpen(){this.$children&&this.$children.length&&("all"===this.open&&(this.internalMultiple=!0,this.openHeader=this.items.map((t=>t.header))),this.items.forEach((t=>{t.isOpen=Array.isArray(this.openHeader)?this.openHeader.includes(t.header):this.openHeader===t.header})))},toggleHandler(t){if(this.internalMultiple||Array.isArray(this.openHeader)){var e=this.items.find((e=>e._uid===t));e.isOpen=!e.isOpen,this.$emit("click:open",e.isOpen)}else this.items.forEach((e=>{e._uid===t?(e.isOpen=!e.isOpen,this.openHeader=e.header,this.$emit("click:open",this.openHeader)):e.isOpen=!1}));this.headersAreClosed&&(this.openHeader="")}}},S=(r(563),Object(v.a)(P,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"sf-accordion",class:{"has-chevron":t.showChevron}},[t._t("default")],2)}),[],!1,null,null,null));e.a=S.exports},621:function(t,e,r){"use strict";var n=r(466),o=r(286),l={name:"SfFilter",components:{SfCheckbox:n.a,SfColor:o.a},props:{label:{type:String,default:""},count:{type:[String,Number],default:""},selected:{type:Boolean,default:!1},color:{type:String,default:""}}},c=(r(559),r(1)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("SfCheckbox",t._g({staticClass:"sf-filter",class:{"is-active":t.selected,"is-color":t.color},attrs:{name:t.label,selected:t.selected},scopedSlots:t._u([{key:"label",fn:function(){return[t._t("color",(function(){return[r("SfColor",{staticClass:"sf-filter__color",class:{"display-none":!t.color},attrs:{color:t.color,"has-badge":!1,selected:t.selected},on:{click:function(e){return t.$emit("change",!t.selected)}}})]}),null,{color:t.color,selected:t.selected}),t._v(" "),t._t("label",(function(){return[r("div",{staticClass:"sf-filter__label"},[t._v(t._s(t.label))])]}),null,{label:t.label}),t._v(" "),t._t("count",(function(){return[r("div",{staticClass:"sf-filter__count"},[t._v(t._s(t.count))])]}),null,{count:t.count})]},proxy:!0}],null,!0)},t.$listeners))}),[],!1,null,null,null);e.a=component.exports},622:function(t,e,r){"use strict";var n=r(117),o=r(15),l=r(41),c=r(176),d=r(60),h=r(14),f=r(555),m=r(241),_=r.n(m),v={name:"SfProductCardHorizontal",components:{SfPrice:n.a,SfRating:c.a,SfImage:d.a,SfIcon:o.a,SfLink:l.a,SfButton:h.a,SfAddToCart:f.a},props:{description:{type:String,default:""},image:{type:[Array,Object,String],default:""},imageWidth:{type:[String,Number],default:140},imageHeight:{type:[String,Number],default:200},title:{type:String,default:""},link:{type:[String,Object],default:null},linkTag:{type:String,default:void 0},scoreRating:{type:[Number,Boolean],default:!1},reviewsCount:{type:[Number,Boolean],default:!1},maxRating:{type:[Number,String],default:5},regularPrice:{type:[Number,String],default:null},specialPrice:{type:[Number,String],default:null},wishlistIcon:{type:[String,Array,Boolean],default:"heart"},isInWishlistIcon:{type:[String,Array],default:"heart_fill"},isInWishlist:{type:Boolean,default:!1},qty:{type:[Number,String],default:1}},data(){return{quantity:this.qty,productPlaceholder:_.a}},computed:{currentWishlistIcon(){return this.isInWishlist?this.isInWishlistIcon:this.wishlistIcon},ariaLabel(){return this.isInWishlist?"Remove from wishlist":"Add to wishlist"},wishlistIconClasses(){return"".concat("sf-product-card-horizontal__wishlist-icon"," ").concat(this.isOnWishlist?"sf-product-card-horizontal--on-wishlist":"")},itemQuantity:{get(){return"string"==typeof this.quantity?Number(this.quantity):this.quantity},set(t){this.quantity=t}}},methods:{toggleIsInWishlist(){this.$emit("click:wishlist",!this.isInWishlist)}}},y=(r(560),r(1)),component=Object(y.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sf-product-card-horizontal"},[r("div",{staticClass:"sf-product-card-horizontal__image-wrapper"},[t._t("image",(function(){return[r("SfLink",{staticClass:"\n          sf-product-card-horizontal__link\n          sf-product-card-horizontal__link--image\n        ",attrs:{link:t.link}},[Array.isArray(t.image)?t._l(t.image.slice(0,2),(function(picture,e){return r("SfImage",{key:e,staticClass:"sf-product-card-horizontal__picture",attrs:{src:picture,alt:t.title,width:t.imageWidth,height:t.imageHeight,placeholder:t.productPlaceholder}})})):r("SfImage",{staticClass:"sf-product-card-horizontal__image",attrs:{src:t.image,alt:t.title,width:t.imageWidth,height:t.imageHeight,placeholder:t.productPlaceholder}})],2)]}),null,{image:t.image,title:t.title,link:t.link,imageHeight:t.imageHeight,imageWidth:t.imageWidth})],2),t._v(" "),r("div",{staticClass:"sf-product-card-horizontal__main"},[r("div",{staticClass:"sf-product-card-horizontal__details"},[t._t("title",(function(){return[r("SfLink",{staticClass:"sf-product-card-horizontal__link",attrs:{link:t.link}},[r("h3",{staticClass:"sf-product-card-horizontal__title"},[t._v("\n            "+t._s(t.title)+"\n          ")])])]}),null,{title:t.title,link:t.link}),t._v(" "),t._t("description",(function(){return[r("p",{staticClass:"sf-product-card-horizontal__description desktop-only"},[t._v("\n          "+t._s(t.description)+"\n        ")])]})),t._v(" "),r("div",{staticClass:"sf-product-card-horizontal__configuration"},[t._t("configuration")],2)],2),t._v(" "),r("div",{staticClass:"sf-product-card-horizontal__actions-wrapper"},[t._t("price",(function(){return[r("SfPrice",{staticClass:"sf-product-card-horizontal__price",class:{"display-none":!t.regularPrice},attrs:{regular:t.regularPrice,special:t.specialPrice}})]}),null,{specialPrice:t.specialPrice,regularPrice:t.regularPrice}),t._v(" "),t._t("reviews",(function(){return[r("div",{staticClass:"sf-product-card-horizontal__reviews",class:{"display-none":!t.scoreRating}},["number"==typeof t.scoreRating?r("SfRating",{staticClass:"sf-product-card-horizontal__rating",attrs:{max:t.maxRating,score:t.scoreRating}}):t._e(),t._v(" "),r("SfButton",{staticClass:"sf-button--pure sf-product-card-horizontal__reviews-count",class:{"display-none":!t.reviewsCount},attrs:{"aria-label":"Read "+t.reviewsCount+" reviews about "+t.title,href:"#"},on:{click:function(e){return t.$emit("click:reviews")}}},[t._v("\n            ("+t._s(t.reviewsCount)+")\n          ")])],1)]}),null,{maxRating:t.maxRating,scoreRating:t.scoreRating}),t._v(" "),r("div",{staticClass:"sf-product-card-horizontal__actions"},[t._t("actions")],2),t._v(" "),r("div",{staticClass:"sf-product-card-horizontal__add-to-cart"},[t._t("add-to-cart",(function(){return[r("SfAddToCart",{staticClass:"sf-product-card-horizontal__add-to-cart desktop-only",on:{input:function(e){return t.$emit("input",e)},click:function(e){return t.$emit("click:add-to-cart",t.itemQuantity)}},model:{value:t.itemQuantity,callback:function(e){t.itemQuantity=e},expression:"itemQuantity"}})]}))],2)],2),t._v(" "),!1!==t.wishlistIcon?r("SfButton",{staticClass:"sf-button--pure smartphone-only",attrs:{"aria-label":t.ariaLabel+" "+t.title},on:{click:t.toggleIsInWishlist}},[t._t("wishlist-icon",(function(){return[r("SfIcon",{attrs:{icon:t.currentWishlistIcon,size:"19px","data-test":"sf-wishlist-icon"}})]}),null,{currentWishlistIcon:t.currentWishlistIcon})],2):t._e()],1)])}),[],!1,null,null,null);e.a=component.exports},623:function(t,e,r){"use strict";var n=r(9),o=(r(82),r(48),r(15)),l=r(41),c=r(14);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"SfPagination",components:{SfIcon:o.a,SfLink:l.a,SfButton:c.a},props:{total:{type:Number,default:0},visible:{type:Number,default:5},hasArrows:{type:Boolean,default:!0},current:{type:Number,default:1},pageParamName:{type:String,default:"page"}},computed:{hasRouter(){return this.$route},componentIs(){return this.hasRouter?"SfLink":"SfButton"},currentPage(){return this.hasRouter?this.$route.query[this.pageParamName]?parseInt(this.$route.query[this.pageParamName],10):1:this.current},getPrev(){return this.currentPage===this.firstVisiblePageNumber?this.currentPage:this.currentPage-1},canGoPrev(){return this.currentPage!==this.firstVisiblePageNumber},getNext(){return this.currentPage===this.lastVisiblePageNumber?this.currentPage:this.currentPage+1},canGoNext(){return this.currentPage!==this.lastVisiblePageNumber},showFirst(){return this.firstVisiblePageNumber>1},showLast(){return this.lastVisiblePageNumber<this.total},listOfPageNumbers(){return Array.from(Array(this.total),((t,i)=>i+1))},limitedPageNumbers(){return this.total<=this.visible?this.listOfPageNumbers:this.currentPage<this.visible-Math.floor(this.visible/2)+1?this.listOfPageNumbers.slice(0,this.visible):this.total-this.currentPage<this.visible-Math.ceil(this.visible/2)+1?this.listOfPageNumbers.slice(this.total-this.visible):this.listOfPageNumbers.slice(this.currentPage-Math.ceil(this.visible/2),this.currentPage+Math.floor(this.visible/2))},firstVisiblePageNumber(){return this.limitedPageNumbers[0]},lastVisiblePageNumber(){return this.limitedPageNumbers[this.limitedPageNumbers.length-1]}},methods:{go(t){this.$emit("click",t)},getLinkTo(t){var e=t.toString();return this.hasRouter?h(h({},this.$route),{},{query:h(h({},this.$route.query),{},{[this.pageParamName]:t})}):e}}},m=(r(561),r(1)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"sf-pagination"},[t._t("prev",(function(){return[r("div",{staticClass:"sf-pagination__item prev",class:{"display-none":!t.hasArrows}},[r(t.componentIs,{tag:"component",class:{"sf-button--pure":!t.hasRouter,"sf-arrow--transparent":!t.hasRouter&&!t.canGoPrev},attrs:{link:t.hasRouter?t.getLinkTo(t.getPrev):null,disabled:!t.hasRouter&&!t.canGoPrev,"aria-label":"Go to previous page","data-testid":"pagination-button-prev"},on:{click:function(e){!t.hasRouter&&t.go(t.getPrev)}}},[r("SfIcon",{attrs:{icon:"arrow_left",size:"1.125rem"}})],1)],1)]}),null,{isDisabled:!t.canGoPrev,go:t.go,prev:t.getPrev}),t._v(" "),[t._t("number",(function(){return[r(t.componentIs,{tag:"component",staticClass:"sf-pagination__item",class:{"sf-button--pure":!t.hasRouter,"display-none":!t.showFirst},attrs:{link:t.hasRouter?t.getLinkTo(1):null},on:{click:function(e){!t.hasRouter&&t.go(1)}}},[t._v("\n        1\n      ")])]}),null,{page:1}),t._v(" "),t._t("points",(function(){return[r("div",{staticClass:"sf-pagination__item",class:{"display-none":t.firstVisiblePageNumber<=2}},[t._v("\n        ...\n      ")])]}))],t._v(" "),t._l(t.limitedPageNumbers,(function(e){return[t._t("number",(function(){return[r(t.currentPage===e?"span":t.componentIs,{key:e,tag:"component",staticClass:"sf-pagination__item",class:{"sf-button--pure":!t.hasRouter&&t.currentPage!==e,current:t.currentPage===e},attrs:{link:t.hasRouter&&t.currentPage!==e?t.getLinkTo(e):null},on:{click:function(r){!t.hasRouter&&t.currentPage!==e&&t.go(e)}}},[t._v("\n        "+t._s(e)+"\n      ")])]}),null,{page:e,currentPage:t.currentPage})]})),t._v(" "),t.showLast?[t._t("points",(function(){return[r("div",{staticClass:"sf-pagination__item",class:{"display-none":t.lastVisiblePageNumber>=t.total-1}},[t._v("\n        ...\n      ")])]})),t._v(" "),t._t("number",(function(){return[r(t.componentIs,{tag:"component",staticClass:"sf-pagination__item",class:{"sf-button--pure":!t.hasRouter},attrs:{link:t.hasRouter?t.getLinkTo(t.total):null},on:{click:function(e){!t.hasRouter&&t.go(t.total)}}},[t._v("\n        "+t._s(t.total)+"\n      ")])]}),null,{page:t.total})]:t._e(),t._v(" "),t._t("next",(function(){return[r("div",{staticClass:"sf-pagination__item next",class:{"display-none":!t.hasArrows}},[r(t.componentIs,{tag:"component",class:{"sf-button--pure":!t.hasRouter,"sf-arrow--transparent":!t.hasRouter&&!t.canGoNext},attrs:{link:t.hasRouter?t.getLinkTo(t.getNext):null,disabled:!t.hasRouter&&!t.canGoNext,"aria-label":"Go to previous next","data-testid":"pagination-button-next"},on:{click:function(e){!t.hasRouter&&t.go(t.getNext)}}},[r("SfIcon",{attrs:{icon:"arrow_right",size:"1.125rem"}})],1)],1)]}),null,{isDisabled:!t.canGoNext,go:t.go,next:t.getNext})],2)}),[],!1,null,null,null);e.a=component.exports}}]);