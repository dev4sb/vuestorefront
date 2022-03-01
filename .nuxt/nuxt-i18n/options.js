import locale77427e78 from '../../lang/en.js'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en","numberFormats":{"en":{"currency":{"style":"currency","currency":"USD","currencyDisplay":"symbol"},"decimal":{"style":"decimal","minimumFractionDigits":2,"maximumFractionDigits":2},"percent":{"style":"percent","useGrouping":false}},"de":{"currency":{"style":"currency","currency":"GBP","currencyDisplay":"symbol"},"decimal":{"style":"decimal","minimumFractionDigits":2,"maximumFractionDigits":2},"percent":{"style":"percent","useGrouping":false}}}},
  vueI18nLoader: false,
  locales: [{"code":"en","alias":"us","label":"English","file":"en.js","iso":"en"},{"code":"de","alias":"de","label":"German","file":"de.js","iso":"de"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "/home/setubridge-32/vuestorefront/19/shopify-1.0.19 (2)/shopify-1.0.19/packages/theme/lang",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"vsf-locale","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":false,"useCookie":true},
  differentDomains: false,
  seo: true,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  currency: "USD",
  country: "US",
  countries: [{"name":"US","label":"United States"},{"name":"DE","label":"Germany"}],
  currencies: [{"name":"EUR","label":"Euro"},{"name":"USD","label":"Dollar"}],
  normalizedLocales: [{"code":"en","alias":"us","label":"English","file":"en.js","iso":"en"},{"code":"de","alias":"de","label":"German","file":"de.js","iso":"de"}],
  localeCodes: ["en","de"],
}

export const localeMessages = {
  'en.js': () => Promise.resolve(locale77427e78),
  'de.js': () => import('../../lang/de.js' /* webpackChunkName: "lang-de.js" */),
}
