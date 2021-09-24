exports.ids = [14];
exports.modules = {

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoansView.vue?vue&type=template&id=b490f806&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{attrs:{"header-class":"py-2","footer-class":"py-1","button-size":"sm","size":"lg","title":_vm.$t('loan_details'),"header-bg-variant":"dark","header-text-variant":"light"},on:{"hidden":function($event){_vm.$emit('input',false),_vm.$emit('hidden',true)}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hide = ref.hide;
return [_c('b-form-row',[_c('b-col',{attrs:{"md":"6","sm":"12"}},[_c('table',{staticClass:"table table-sm table-bordered table-hover"},_vm._l((['id','disbursement_date','closing_date','loan_amount',
                        'installment_amount','installment_quantity','collection_amount','due_amount',
                        'last_collection_date','status','created_at']),function(x){return _c('tr',[_c('th',[_vm._v(_vm._s(_vm.$t(x)))]),_vm._v(" "),_c('td',[(['previous_debt','amount','current_debt'].includes(x))?[_vm._v("\n                                    "+_vm._s(_vm.$n(_vm.item[x], {currency: 'BDT', style: "currency"}))+"\n                                ")]:(['date'].includes(x))?[_vm._v("\n                                    "+_vm._s(_vm.$d(new Date(_vm.item[x])))+"\n                                ")]:(['payment_method'].includes(x))?[_vm._v("\n                                    "+_vm._s(_vm.$t(_vm.item[x]))+"\n                                ")]:[_vm._v("\n                                    "+_vm._s(_vm.item[x])+"\n                                ")]],2)])}),0)]),_vm._v(" "),_c('b-col',{attrs:{"md":"6","sm":"12"}},[_c('table',{staticClass:"table table-sm table-bordered table-hover "},[_c('tr',[_c('th',[_vm._v(_vm._s(_vm.$t('borrower')))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.item.borrower.name))])]),_vm._v(" "),_c('tr',[_c('th',[_vm._v(_vm._s(_vm.$t('account_name')))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.item.account.account_name))])]),_vm._v(" "),_c('tr',[_c('th',[_vm._v(_vm._s(_vm.$t('account_no')))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.item.account.account_no))])])])])],1)]}}]),model:{value:(_vm.is_visible),callback:function ($$v) {_vm.is_visible=$$v},expression:"is_visible"}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/LoansView.vue?vue&type=template&id=b490f806&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoansView.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var LoansViewvue_type_script_lang_js_ = ({
  props: {
    item: {
      type: Object | null
    },
    value: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      is_visible: false
    };
  },

  watch: {
    value(v) {
      this.is_visible = v;
    }

  }
});
// CONCATENATED MODULE: ./components/LoansView.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LoansViewvue_type_script_lang_js_ = (LoansViewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/LoansView.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LoansViewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "65c007ad"
  
)

/* harmony default export */ var LoansView = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=loans-view.js.map