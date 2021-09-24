exports.ids = [7];
exports.modules = {

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BorrowersView.vue?vue&type=template&id=ca85a390&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{attrs:{"header-class":"py-2","footer-class":"py-1","button-size":"sm","size":"lg","ok-title":_vm.$t('ok'),"cancel-title":_vm.$t('cancel'),"title":_vm.$t('borrower_details'),"header-bg-variant":"dark","header-text-variant":"light"},on:{"hidden":function($event){_vm.$emit('input',false),_vm.$emit('hidden',true)}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hide = ref.hide;
return [_c('table',{staticClass:"table table-sm table-bordered table-hover"},_vm._l((Object.keys(_vm.item)),function(x){return _c('tr',[_c('th',[_vm._v(_vm._s(_vm.$t(x)))]),_vm._v(" "),_c('td',[(['previous_debt','amount','current_debt'].includes(x))?[_vm._v("\n                        "+_vm._s(_vm.$n(_vm.item[x], {currency: 'BDT', style: "currency"}))+"\n                    ")]:(['created_at','updated_at','deleted_at','date_of_birth'].includes(x))?[_vm._v("\n                        "+_vm._s(_vm.item[x] ? _vm.$d(new Date(_vm.item[x])) : null)+"\n                    ")]:(['payment_method','gender'].includes(x))?[_vm._v("\n                        "+_vm._s(_vm.$t(_vm.item[x]))+"\n                    ")]:[_vm._v("\n                        "+_vm._s(_vm.item[x])+"\n                    ")]],2)])}),0)]}}]),model:{value:(_vm.is_visible),callback:function ($$v) {_vm.is_visible=$$v},expression:"is_visible"}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BorrowersView.vue?vue&type=template&id=ca85a390&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BorrowersView.vue?vue&type=script&lang=js&
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
/* harmony default export */ var BorrowersViewvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/BorrowersView.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BorrowersViewvue_type_script_lang_js_ = (BorrowersViewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BorrowersView.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BorrowersViewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7af39e0a"
  
)

/* harmony default export */ var BorrowersView = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=borrowers-view.js.map