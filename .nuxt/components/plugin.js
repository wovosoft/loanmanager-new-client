import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AccountsAdd: () => import('../..\\components\\AccountsAdd.vue' /* webpackChunkName: "components/accounts-add" */).then(c => wrapFunctional(c.default || c)),
  AccountsView: () => import('../..\\components\\AccountsView.vue' /* webpackChunkName: "components/accounts-view" */).then(c => wrapFunctional(c.default || c)),
  ActionBtns: () => import('../..\\components\\ActionBtns.vue' /* webpackChunkName: "components/action-btns" */).then(c => wrapFunctional(c.default || c)),
  ApiSelectable: () => import('../..\\components\\ApiSelectable.vue' /* webpackChunkName: "components/api-selectable" */).then(c => wrapFunctional(c.default || c)),
  BorrowersAdd: () => import('../..\\components\\BorrowersAdd.vue' /* webpackChunkName: "components/borrowers-add" */).then(c => wrapFunctional(c.default || c)),
  BorrowersSelect: () => import('../..\\components\\BorrowersSelect.vue' /* webpackChunkName: "components/borrowers-select" */).then(c => wrapFunctional(c.default || c)),
  BorrowersView: () => import('../..\\components\\BorrowersView.vue' /* webpackChunkName: "components/borrowers-view" */).then(c => wrapFunctional(c.default || c)),
  DatatableFooter: () => import('../..\\components\\DatatableFooter.vue' /* webpackChunkName: "components/datatable-footer" */).then(c => wrapFunctional(c.default || c)),
  DatatableHeader: () => import('../..\\components\\DatatableHeader.vue' /* webpackChunkName: "components/datatable-header" */).then(c => wrapFunctional(c.default || c)),
  InstallmentsAdd: () => import('../..\\components\\InstallmentsAdd.vue' /* webpackChunkName: "components/installments-add" */).then(c => wrapFunctional(c.default || c)),
  InstallmentsView: () => import('../..\\components\\InstallmentsView.vue' /* webpackChunkName: "components/installments-view" */).then(c => wrapFunctional(c.default || c)),
  LoansAdd: () => import('../..\\components\\LoansAdd.vue' /* webpackChunkName: "components/loans-add" */).then(c => wrapFunctional(c.default || c)),
  LoansSelect: () => import('../..\\components\\LoansSelect.vue' /* webpackChunkName: "components/loans-select" */).then(c => wrapFunctional(c.default || c)),
  LoansView: () => import('../..\\components\\LoansView.vue' /* webpackChunkName: "components/loans-view" */).then(c => wrapFunctional(c.default || c)),
  MenuBar: () => import('../..\\components\\MenuBar.vue' /* webpackChunkName: "components/menu-bar" */).then(c => wrapFunctional(c.default || c)),
  NuxtLogo: () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c)),
  Tutorial: () => import('../..\\components\\Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c)),
  UsersAdd: () => import('../..\\components\\UsersAdd.vue' /* webpackChunkName: "components/users-add" */).then(c => wrapFunctional(c.default || c)),
  UsersView: () => import('../..\\components\\UsersView.vue' /* webpackChunkName: "components/users-view" */).then(c => wrapFunctional(c.default || c)),
  VSelect: () => import('../..\\components\\VSelect.vue' /* webpackChunkName: "components/v-select" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
