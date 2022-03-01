import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4e921a66 = () => interopDefault(import('../_theme/pages/Category.vue' /* webpackChunkName: "_theme/pages/Category" */))
const _167e1f15 = () => interopDefault(import('../_theme/pages/Checkout.vue' /* webpackChunkName: "" */))
const _53c8793e = () => interopDefault(import('../_theme/pages/Checkout/Billing.vue' /* webpackChunkName: "" */))
const _74cb156c = () => interopDefault(import('../_theme/pages/Checkout/Payment.vue' /* webpackChunkName: "" */))
const _2d16df38 = () => interopDefault(import('../_theme/pages/Checkout/Shipping.vue' /* webpackChunkName: "" */))
const _16a4aadf = () => interopDefault(import('../_theme/pages/Checkout/ThankYou.vue' /* webpackChunkName: "" */))
const _54b0cf1f = () => interopDefault(import('../_theme/pages/ContactUs.vue' /* webpackChunkName: "_theme/pages/ContactUs" */))
const _38bc05ae = () => interopDefault(import('../_theme/pages/Home.vue' /* webpackChunkName: "" */))
const _173fecbc = () => interopDefault(import('../_theme/pages/MyAccount.vue' /* webpackChunkName: "_theme/pages/MyAccount" */))
const _62598a5c = () => interopDefault(import('../_theme/pages/MyAccount/AdressBook.vue' /* webpackChunkName: "_theme/pages/MyAccount/AdressBook" */))
const _2568deb8 = () => interopDefault(import('../_theme/pages/MyAccount/BillingDetails.vue' /* webpackChunkName: "_theme/pages/MyAccount/BillingDetails" */))
const _2651982e = () => interopDefault(import('../_theme/pages/MyAccount/LoyaltyCard.vue' /* webpackChunkName: "_theme/pages/MyAccount/LoyaltyCard" */))
const _09ed1f22 = () => interopDefault(import('../_theme/pages/MyAccount/MyNewsletter.vue' /* webpackChunkName: "_theme/pages/MyAccount/MyNewsletter" */))
const _8680c5e0 = () => interopDefault(import('../_theme/pages/MyAccount/MyProfile.vue' /* webpackChunkName: "_theme/pages/MyAccount/MyProfile" */))
const _04427e82 = () => interopDefault(import('../_theme/pages/MyAccount/MyReviews.vue' /* webpackChunkName: "_theme/pages/MyAccount/MyReviews" */))
const _359b7efa = () => interopDefault(import('../_theme/pages/MyAccount/OrderHistory.vue' /* webpackChunkName: "_theme/pages/MyAccount/OrderHistory" */))
const _6c01eba7 = () => interopDefault(import('../_theme/pages/MyAccount/ShippingDetails.vue' /* webpackChunkName: "_theme/pages/MyAccount/ShippingDetails" */))
const _104b9af0 = () => interopDefault(import('../_theme/pages/Product.vue' /* webpackChunkName: "_theme/pages/Product" */))
const _2ff232cb = () => interopDefault(import('../_theme/pages/ResetPassword.vue' /* webpackChunkName: "" */))
const _5e020492 = () => interopDefault(import('../_theme/pages/TermsAndConditions.vue' /* webpackChunkName: "_theme/pages/TermsAndConditions" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Category",
    component: _4e921a66,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _167e1f15,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _53c8793e,
      name: "billing___en"
    }, {
      path: "payment",
      component: _74cb156c,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _2d16df38,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _16a4aadf,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _167e1f15,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _53c8793e,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _74cb156c,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _2d16df38,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _16a4aadf,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/ContactUs",
    component: _54b0cf1f,
    name: "ContactUs___en"
  }, {
    path: "/de",
    component: _38bc05ae,
    name: "home___de"
  }, {
    path: "/Home",
    component: _38bc05ae,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _173fecbc,
    name: "MyAccount___en",
    children: [{
      path: "AdressBook",
      component: _62598a5c,
      name: "MyAccount-AdressBook___en"
    }, {
      path: "BillingDetails",
      component: _2568deb8,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _2651982e,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _09ed1f22,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _8680c5e0,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _04427e82,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _359b7efa,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _6c01eba7,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _104b9af0,
    name: "Product___en"
  }, {
    path: "/reset-password",
    component: _2ff232cb,
    name: "reset-password___en"
  }, {
    path: "/ResetPassword",
    component: _2ff232cb,
    name: "ResetPassword___en"
  }, {
    path: "/TermsAndConditions",
    component: _5e020492,
    name: "TermsAndConditions___en"
  }, {
    path: "/de/Category",
    component: _4e921a66,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _167e1f15,
    name: "checkout___de",
    children: [{
      path: "billing",
      component: _53c8793e,
      name: "billing___de"
    }, {
      path: "payment",
      component: _74cb156c,
      name: "payment___de"
    }, {
      path: "shipping",
      component: _2d16df38,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _16a4aadf,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _167e1f15,
    name: "Checkout___de",
    children: [{
      path: "Billing",
      component: _53c8793e,
      name: "Checkout-Billing___de"
    }, {
      path: "Payment",
      component: _74cb156c,
      name: "Checkout-Payment___de"
    }, {
      path: "Shipping",
      component: _2d16df38,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _16a4aadf,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/ContactUs",
    component: _54b0cf1f,
    name: "ContactUs___de"
  }, {
    path: "/de/Home",
    component: _38bc05ae,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _173fecbc,
    name: "MyAccount___de",
    children: [{
      path: "AdressBook",
      component: _62598a5c,
      name: "MyAccount-AdressBook___de"
    }, {
      path: "BillingDetails",
      component: _2568deb8,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _2651982e,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _09ed1f22,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _8680c5e0,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _04427e82,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _359b7efa,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _6c01eba7,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _104b9af0,
    name: "Product___de"
  }, {
    path: "/de/reset-password",
    component: _2ff232cb,
    name: "reset-password___de"
  }, {
    path: "/de/ResetPassword",
    component: _2ff232cb,
    name: "ResetPassword___de"
  }, {
    path: "/de/TermsAndConditions",
    component: _5e020492,
    name: "TermsAndConditions___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _173fecbc,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _104b9af0,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _4e921a66,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _173fecbc,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _104b9af0,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _4e921a66,
    name: "category___en"
  }, {
    path: "/",
    component: _38bc05ae,
    name: "home___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
