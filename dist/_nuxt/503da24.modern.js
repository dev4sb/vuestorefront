(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{490:function(t,e,n){},491:function(t,e,n){},496:function(t,e,n){"use strict";n(490)},497:function(t,e,n){"use strict";n(491)},505:function(t,e,n){"use strict";var r=n(624),o=n(60),l=n(14),c={name:"AppStoreBanner",components:{SfBanner:r.a,SfImage:o.a,SfButton:l.a}},d=(n(496),n(1)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SfBanner",{staticClass:"sf-banner--left desktop-only banner-app",attrs:{image:"/homepage/bannerD.png",subtitle:"Fashon to take away",title:"Download our application to your mobile"},scopedSlots:t._u([{key:"call-to-action",fn:function(){return[n("div",{staticClass:"banner-app__call-to-action"},[n("SfButton",{staticClass:"banner-app__button sf-button--pure",attrs:{"aria-label":"Go to Apple Product"},on:{click:function(){}}},[n("img",{attrs:{src:"/homepage/apple.png",width:"174",height:"57"}})]),t._v(" "),n("SfButton",{staticClass:"banner-app__button sf-button--pure",attrs:{"aria-label":"Go to Google Product"},on:{click:function(){}}},[n("img",{attrs:{src:"/homepage/google.png",width:"174",height:"57"}})])],1)]},proxy:!0}])})}),[],!1,null,"4adb068b",null);e.a=component.exports},506:function(t,e,n){"use strict";var r=n(613),o=n(472),l=n(625),c=n(480),d=n(41),f=n(117),m=n(19),h=n(63),y={name:"RelatedProducts",components:{SfCarousel:r.a,SfProductCard:o.a,SfSection:l.a,SfLoader:c.a,SfLink:d.a,SfPrice:f.a},props:{title:String,products:Array,loading:Boolean},setup(){var{addItem:t,isInCart:e,cart:n}=Object(m.f)(),{send:r}=Object(h.b)();return{productGetters:m.d,addItemToCart:t,isInCart:e,currentCart:n,sendNotification:r}},data:()=>({pdpUpsellSettings:{type:"slider",perView:4,peek:0,autoplay:!1,animationDuration:600,gap:20,breakpoints:{1023:{perView:3,peek:{before:0,after:72}},767:{perView:2,peek:{before:0,after:72}},510:{perView:1,peek:{before:0,after:72}}}}}),methods:{HandleAddTocart(t){this.addItemToCart(t).then((()=>{console.log("productObj",t.product.name),this.sendNotification({key:"added_to_cart",message:"".concat(t.product.name,"has been successfully added to cart !"),type:"success",title:"Product added!",icon:"check"})}))}}},S=(n(497),n(1)),component=Object(S.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SfSection",{staticClass:"section pdc-sec-title pdp-upsell-section",attrs:{"title-heading":t.title}},[n("SfLoader",{class:{loading:t.loading},attrs:{loading:t.loading}},[n("SfCarousel",{ref:"bscarousel",staticClass:"carousel",attrs:{"data-cy":"related-products-carousel",settings:t.pdpUpsellSettings}},t._l(t.products,(function(e,i){return n("SfCarouselItem",{key:i,staticClass:"carousel__item"},[n("SfProductCard",{staticClass:"pdp-product-card ",attrs:{title:t.productGetters.getName(e),image:t.productGetters.getPDPCoverImage(e),link:t.localePath("/p/"+t.productGetters.getId(e)+"/"+t.productGetters.getSlug(e)),"wishlist-icon":!1,"image-width":295,"image-height":295,"is-added-to-cart":t.isInCart({product:e,currentCart:t.currentCart})},on:{"click:add-to-cart":function(n){return t.HandleAddTocart({product:e,quantity:1,currentCart:t.currentCart})}},scopedSlots:t._u([{key:"title",fn:function(){return[n("SfLink",{staticClass:"sf-product-card__link",attrs:{link:t.localePath("/p/"+t.productGetters.getId(e)+"/"+t.productGetters.getSlug(e))}},[n("h3",{staticClass:"sf-product-card__title"},[t._v("\n                "+t._s(t.productGetters.getName(e))+"\n              ")])])]},proxy:!0},{key:"price",fn:function(){return[n("SfPrice",{staticClass:"sf-product-card__price ",scopedSlots:t._u([t.productGetters.getPrice(e).special?{key:"special",fn:function(){return[n("ins",{staticClass:"sf-price__special"},[t._v(t._s(t.$n(t.productGetters.getPrice(e).special,"currency")))])]},proxy:!0}:null,{key:"old",fn:function(){return[n("span")]},proxy:!0},t.productGetters.getPrice(e).regular>0?{key:"regular",fn:function(){return[n("del",{staticClass:"sf-price__old"},[t._v(t._s(t.$n(t.productGetters.getPrice(e).regular,"currency")))])]},proxy:!0}:null],null,!0)})]},proxy:!0}],null,!0)})],1)})),1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},538:function(t,e,n){},579:function(t,e,n){"use strict";n(538)},616:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(23),n(67),n(608)),l=n(624),c=n(626),d=n(625),f=n(613),m=n(60),h=n(627),y=n(77),S=n(557),_=n(14),k=n(19),C=n(0),w=n(175),x=n(505),v=n(506),j={name:"Home",components:{SfHero:o.a,RelatedProducts:v.a,SfBanner:l.a,SfCallToAction:c.a,SfSection:d.a,SfCarousel:f.a,SfImage:m.a,SfBannerGrid:h.a,SfHeading:y.a,SfArrow:S.a,SfButton:_.a,MobileStoreBanner:x.a,LazyHydrate:w.a},setup(t){var{products:e,search:n,loading:o}=Object(k.k)("relatedProducts"),{cart:l,addItem:c,isInCart:d}=Object(k.f)();return Object(C.f)(Object(r.a)((function*(){yield n({limit:8})}))),{products:Object(C.a)((()=>k.d.getFiltered(e.value,{master:!0}))),getChkId:Object(C.a)((()=>l.value.id)),productsLoading:o,productGetters:k.d,addToCart:c,isInCart:d}},data:()=>({heroes:[{title:"Colorful summer dresses are already in store",subtitle:"SUMMER COLLECTION 2021",buttonText:"Learn more",background:"#eceff1",image:{mobile:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerB_328x224.jpg",desktop:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerB_1240x400.jpg"},link:"/c/women/women-clothing-shirts"},{title:"Colorful summer dresses are already in store",subtitle:"SUMMER COLLECTION 2021",buttonText:"Learn more",background:"#fce4ec",image:{mobile:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerH_328x224.jpg",desktop:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerH_1240x400.jpg"},link:"/c/women/women-clothing-dresses"},{title:"Colorful summer dresses are already in store",subtitle:"SUMMER COLLECTION 2021",buttonText:"Learn more",background:"#efebe9",image:{mobile:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerA_328x224.jpg",desktop:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerA_1240x400.jpg"},link:"/c/women/women-shoes-sandals",className:"sf-hero-item--position-bg-top-left sf-hero-item--align-right"}],banners:[{slot:"banner-A",subtitle:"Dresses",title:"Cocktail & Party",description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",buttonText:"Shop now",image:{mobile:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerB_328x343.jpg",desktop:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerF_332x840.jpg"},class:"sf-banner--slim desktop-only",link:"/c/women/women-clothing-skirts"},{slot:"banner-B",subtitle:"Dresses",title:"Linen Dresses",description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",buttonText:"Shop now",image:{mobile:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerE_328x343.jpg",desktop:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerE_496x840.jpg"},class:"sf-banner--slim banner-central desktop-only",link:"/c/women/women-clothing-dresses"},{slot:"banner-C",subtitle:"T-Shirts",title:"The Office Life",image:{mobile:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerC_328x343.jpg",desktop:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerC_332x400.jpg"},class:"sf-banner--slim banner__tshirt",link:"/c/women/women-clothing-shirts"},{slot:"banner-D",subtitle:"Summer Sandals",title:"Eco Sandals",image:{mobile:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerG_328x343.jpg",desktop:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerG_332x400.jpg"},class:"sf-banner--slim",link:"/c/women/women-shoes-sandals"}]}),methods:{toggleWishlist(t){this.products[t].isInWishlist=!this.products[t].isInWishlist}}},I=(n(579),n(1)),component=Object(I.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("SfHero",{staticClass:"hero"},t._l(t.heroes,(function(t,i){return n("SfHeroItem",{key:i,class:t.className,attrs:{title:t.title,subtitle:t.subtitle,"button-text":t.buttonText,background:t.background,image:t.image}})})),1),t._v(" "),n("LazyHydrate",{attrs:{"when-visible":""}},[n("SfBannerGrid",{staticClass:"banner-grid",attrs:{"banner-grid":1},scopedSlots:t._u([t._l(t.banners,(function(t){return{key:t.slot,fn:function(){return[n("SfBanner",{key:t.slot,class:t.class,attrs:{title:t.title,subtitle:t.subtitle,description:t.description,"button-text":t.buttonText,image:t.image}})]},proxy:!0}}))],null,!0)})],1),t._v(" "),n("LazyHydrate",{attrs:{"when-visible":""}},[n("RelatedProducts",{attrs:{products:t.products,loading:t.productsLoading,title:"Match it with"}})],1),t._v(" "),n("LazyHydrate",{attrs:{"when-visible":""}},[n("SfCallToAction",{staticClass:"call-to-action",attrs:{title:"Subscribe to Newsletters","button-text":"Subscribe",description:"Be aware of upcoming sales and events. Receive gifts and special offers!",image:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/newsletter_1240x202.jpg?v=1616496568"}})],1),t._v(" "),n("LazyHydrate",{attrs:{"when-visible":""}},[n("MobileStoreBanner")],1)],1)}),[],!1,null,"02eba8a8",null);e.default=component.exports}}]);