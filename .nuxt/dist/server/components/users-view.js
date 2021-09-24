exports.ids = [18];
exports.modules = {

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UsersView.vue?vue&type=template&id=4482b6aa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{attrs:{"header-class":"py-2","footer-class":"py-1","button-size":"sm","ok-title":_vm.$t('ok'),"cancel-title":_vm.$t('cancel'),"title":_vm.$t('user_details'),"header-bg-variant":"dark","header-text-variant":"light"},on:{"hidden":function($event){_vm.$emit('input',false),_vm.$emit('hidden',true)}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hide = ref.hide;
return [_c('table',{staticClass:"table table-sm table-bordered table-hover"},_vm._l((['id','name','email','created_at','updated_at']),function(x){return _c('tr',[_c('th',[_vm._v(_vm._s(_vm.$t(x)))]),_vm._v(" "),_c('td',[(['created_at','updated_at'].includes(x))?[_vm._v("\n                        "+_vm._s(_vm.$d(new Date(_vm.item[x])))+"\n                    ")]:[_vm._v("\n                        "+_vm._s(_vm.item[x])+"\n                    ")]],2)])}),0)]}}]),model:{value:(_vm.is_visible),callback:function ($$v) {_vm.is_visible=$$v},expression:"is_visible"}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/UsersView.vue?vue&type=template&id=4482b6aa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UsersView.vue?vue&type=script&lang=js&
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
/* harmony default export */ var UsersViewvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/UsersView.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_UsersViewvue_type_script_lang_js_ = (UsersViewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/UsersView.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_UsersViewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0bda6732"
  
)

/* harmony default export */ var UsersView = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=users-view.js.map