(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{523:function(t,e,n){},524:function(t,e,n){},525:function(t,e,n){"use strict";n(523)},526:function(t,e,n){"use strict";var o={name:"SfChevron",directives:{focus:n(506).a}},c=(n(525),n(2)),component=Object(c.a)(o,(function(t,e){var n=e._c;return n("span",e._g(e._b({class:[e.data.class,e.data.staticClass,"sf-chevron"],style:[e.data.style,e.data.staticStyle]},"span",e.data.attrs,!1),e.listeners),[e._t("default",(function(){return[n("span",{staticClass:"sf-chevron__bar sf-chevron__bar--left"}),e._v(" "),n("span",{staticClass:"sf-chevron__bar sf-chevron__bar--right"})]}))],2)}),[],!0,null,null,null);e.a=component.exports},527:function(t,e,n){"use strict";n(524)},532:function(t,e,n){"use strict";var o=n(32),c=(n(40),n(10),n(21),n(220),n(5)),l=n(507),r=n(526),f=n(16),h=n(502),d={name:"SfTab",components:{SfChevron:r.a,SfScrollable:h.a,SfButton:f.a},inject:["tabConfig"],props:{title:{type:String,default:""}},data:function(){return{isActive:!1,desktopMin:1024}},computed:{tabMaxContentHeight:function(){return this.tabConfig.tabMaxContentHeight},tabShowText:function(){return this.tabConfig.tabShowText},tabHideText:function(){return this.tabConfig.tabHideText}},methods:{tabClick:function(){if(l.a){var t=Math.max(document.documentElement.clientWidth,window.innerWidth);this.isActive&&t>this.desktopMin||this.$parent.$emit("toggle",this._uid)}}}},_=n(2),v=Object(_.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sf-tabs__tab"},[t._t("title",(function(){return[n("SfButton",{staticClass:"sf-button--pure sf-tabs__title",class:{"is-active":t.isActive},attrs:{"aria-pressed":t.isActive.toString()},on:{click:t.tabClick}},[t._v("\n      "+t._s(t.title)+"\n      "),n("SfChevron",{staticClass:"sf-tabs__chevron",class:{"sf-chevron--right":!t.isActive}})],1)]}),null,{tabClick:t.tabClick,isActive:t.isActive,title:t.title}),t._v(" "),n("div",{staticClass:"sf-tabs__content"},[n("div",{staticClass:"sf-tabs__content__tab",class:{"display-none":!t.isActive}},[t.tabMaxContentHeight?n("SfScrollable",{attrs:{"max-content-height":t.tabMaxContentHeight,"show-text":t.tabShowText,"hide-text":t.tabHideText}},[t._t("default")],2):t._t("default")],2)])],2)}),[],!1,null,null,null).exports;c.default.component("SfTab",v);var C={name:"SfTabs",props:{openTab:{type:Number,default:1},tabMaxContentHeight:{type:String,default:""},tabShowText:{type:String,default:"show"},tabHideText:{type:String,default:"hide"}},data:function(){return{tabs:[],initialTabActivated:!1}},watch:{openTab:function(t,e){t!==e&&this.toggle(this.$children[t-1]._uid)}},mounted:function(){var t;this.$on("toggle",this.toggle),(t=this.tabs).push.apply(t,Object(o.a)(this.$children)),this.openTab&&this.openChild()},methods:{toggle:function(t){this.tabs.forEach((function(e){e.isActive=e._uid===t}));var e=this.tabs.findIndex((function(t){return!0===t.isActive}))+1;this.$emit("click:tab",e)},openChild:function(){this.openTab<this.$children.length+1&&(this.tabs[this.openTab-1].isActive=!0,this.initialTabActivated=!0)}},provide:function(){var t=this,e={};return Object.defineProperty(e,"tabMaxContentHeight",{get:function(){return t.tabMaxContentHeight}}),Object.defineProperty(e,"tabShowText",{get:function(){return t.tabShowText}}),Object.defineProperty(e,"tabHideText",{get:function(){return t.tabHideText}}),{tabConfig:e}}},m=(n(527),Object(_.a)(C,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.initialTabActivated,expression:"initialTabActivated"}],staticClass:"sf-tabs"},[t._t("default")],2)}),[],!1,null,null,null));e.a=m.exports},581:function(t,e,n){},624:function(t,e,n){"use strict";n(581)},661:function(t,e,n){"use strict";n.r(e);var o=n(532),c=n(505),l=n(16),r=n(64),f={name:"MyNewsletter",components:{SfTabs:o.a,SfCheckbox:c.a,SfButton:l.a,SfLink:r.a},data:function(){return{newsletter:[]}}},h=(n(624),n(2)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SfTabs",{staticClass:"tab-orphan",attrs:{"open-tab":1}},[n("SfTab",{attrs:{title:"My newsletter"}},[n("p",{staticClass:"message"},[t._v("\n      "+t._s(t.$t("Set up newsletter"))+"\n    ")]),t._v(" "),n("div",{staticClass:"form"},[n("p",{staticClass:"form__title"},[t._v(t._s(t.$t("Sections that interest you")))]),t._v(" "),n("div",{staticClass:"form__checkbox-group"},[n("SfCheckbox",{staticClass:"form__element",attrs:{label:"Woman",value:"woman"},model:{value:t.newsletter,callback:function(e){t.newsletter=e},expression:"newsletter"}}),t._v(" "),n("SfCheckbox",{staticClass:"form__element",attrs:{label:"Man",value:"man"},model:{value:t.newsletter,callback:function(e){t.newsletter=e},expression:"newsletter"}}),t._v(" "),n("SfCheckbox",{staticClass:"form__element",attrs:{label:"Kids",value:"kids"},model:{value:t.newsletter,callback:function(e){t.newsletter=e},expression:"newsletter"}})],1),t._v(" "),n("SfButton",{staticClass:"form__button"},[t._v(t._s(t.$t("Save changes")))])],1),t._v(" "),n("p",{staticClass:"notice"},[t._v("\n      "+t._s(t.$t("Read and understand"))+" "),n("SfLink",{staticClass:"notice__link",attrs:{href:"#"}},[t._v(t._s(t.$t("Privacy")))]),t._v(" and\n      "),n("SfLink",{staticClass:"notice__link",attrs:{href:"#"}},[t._v(t._s(t.$t("Cookies Policy")))]),t._v(" "+t._s(t.$t("Commercial information"))+"\n    ")],1)])],1)}),[],!1,null,"6f25d5fb",null);e.default=component.exports}}]);