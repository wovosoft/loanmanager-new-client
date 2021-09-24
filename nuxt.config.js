import bn from "./partials/lang/bn";
import en from "./partials/lang/en";

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: true,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'server',
    router: {
        base: '/'
    },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'loanmanagerclient',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        // "~/plugins/messages.js"
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        //https://i18n.nuxtjs.org/setup
        '@nuxtjs/i18n',
    ],
    bootstrapVue: {
        icons: true
    },
    i18n: {
        locales: ['en', 'bn'],
        defaultLocale: 'bn',
        vueI18n: {
            fallbackLocale: 'en',
            messages: {
                en: en,
                bn: bn
            },
            currency: {
                style: 'currency',
                currency: 'BDT',
                currencyDisplay: 'symbol'
            }
        }
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: process.env.BASE_URL || "https://loanmanager.test/api"
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
