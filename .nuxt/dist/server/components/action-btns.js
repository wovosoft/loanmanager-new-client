exports.ids = [3];
exports.modules = {

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ActionBtns.vue?vue&type=template&id=294e0364&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-btn-group',{attrs:{"size":"sm"}},[(_vm.view)?_c('b-btn',{attrs:{"variant":"dark","title":_vm.$t('view')},on:{"click":_vm.onTapView}},[_c('b-icon-eye')],1):_vm._e(),_vm._v(" "),(_vm.add)?_c('b-btn',{attrs:{"variant":"warning","title":_vm.$t('edit')},on:{"click":_vm.onTapAdd}},[_c('b-icon-pencil-fill')],1):_vm._e(),_vm._v(" "),(_vm.trash)?_c('b-btn',{attrs:{"variant":"danger","title":_vm.$t('delete')},on:{"click":_vm.onTapTrash}},[_c('b-icon-trash')],1):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ActionBtns.vue?vue&type=template&id=294e0364&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ActionBtns.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ActionBtnsvue_type_script_lang_js_ = ({
  props: {
    add: {
      type: Boolean,
      default: true
    },
    view: {
      type: Boolean,
      default: true
    },
    trash: {
      type: Boolean,
      default: true
    },
    onTapView: {
      type: Function,
      default: () => {
        console.log("No Action");
      }
    },
    onTapAdd: {
      type: Function,
      default: () => {
        console.log("No Action");
      }
    },
    onTapTrash: {
      type: Function,
      default: () => {
        console.log("No Action");
      }
    }
  }
});
// CONCATENATED MODULE: ./components/ActionBtns.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ActionBtnsvue_type_script_lang_js_ = (ActionBtnsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ActionBtns.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ActionBtnsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "69110858"
  
)

/* harmony default export */ var ActionBtns = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=action-btns.js.map