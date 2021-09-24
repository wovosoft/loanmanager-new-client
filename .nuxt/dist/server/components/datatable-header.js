exports.ids = [9];
exports.modules = {

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DatatableHeader.vue?vue&type=template&id=77631d47&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-form-row',[_c('b-col',{attrs:{"md":"4","sm":"12"}},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('b-col',{staticClass:"text-right",attrs:{"md":"8","sm":"12"}},[_c('b-select',{staticStyle:{"max-width":"100px"},attrs:{"size":"sm","options":[5, 10, 15, 20, 30, 40, 50, 100, 200, 500, 1000]},model:{value:(_vm.datatable.per_page),callback:function ($$v) {_vm.$set(_vm.datatable, "per_page", $$v)},expression:"datatable.per_page"}}),_vm._v(" "),_vm._t("actions")],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/DatatableHeader.vue?vue&type=template&id=77631d47&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DatatableHeader.vue?vue&type=script&lang=js&
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
/* harmony default export */ var DatatableHeadervue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      default: "List"
    },
    datatable: {
      type: Object,
      required: true,

      default() {
        return {
          current_page: 1,
          last_page: 1,
          from: 1,
          per_page: 15,
          to: 1,
          total: 0
        };
      }

    }
  }
});
// CONCATENATED MODULE: ./components/DatatableHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DatatableHeadervue_type_script_lang_js_ = (DatatableHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/DatatableHeader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DatatableHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "199278b6"
  
)

/* harmony default export */ var DatatableHeader = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=datatable-header.js.map