import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _642d93f2 = () => interopDefault(import('..\\pages\\accounts\\index.vue' /* webpackChunkName: "pages/accounts/index" */))
const _710006d4 = () => interopDefault(import('..\\pages\\borrowers\\index.vue' /* webpackChunkName: "pages/borrowers/index" */))
const _761860ed = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _5332f5d3 = () => interopDefault(import('..\\pages\\installments\\index.vue' /* webpackChunkName: "pages/installments/index" */))
const _329f25a4 = () => interopDefault(import('..\\pages\\loans\\index.vue' /* webpackChunkName: "pages/loans/index" */))
const _6c9e4802 = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages/users/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/accounts",
    component: _642d93f2,
    name: "accounts___bn"
  }, {
    path: "/borrowers",
    component: _710006d4,
    name: "borrowers___bn"
  }, {
    path: "/en",
    component: _761860ed,
    name: "index___en"
  }, {
    path: "/installments",
    component: _5332f5d3,
    name: "installments___bn"
  }, {
    path: "/loans",
    component: _329f25a4,
    name: "loans___bn"
  }, {
    path: "/users",
    component: _6c9e4802,
    name: "users___bn"
  }, {
    path: "/en/accounts",
    component: _642d93f2,
    name: "accounts___en"
  }, {
    path: "/en/borrowers",
    component: _710006d4,
    name: "borrowers___en"
  }, {
    path: "/en/installments",
    component: _5332f5d3,
    name: "installments___en"
  }, {
    path: "/en/loans",
    component: _329f25a4,
    name: "loans___en"
  }, {
    path: "/en/users",
    component: _6c9e4802,
    name: "users___en"
  }, {
    path: "/",
    component: _761860ed,
    name: "index___bn"
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
