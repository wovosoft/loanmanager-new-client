exports.ids = [8];
exports.modules = {

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DatatableFooter.vue?vue&type=template&id=5cca23cc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-row',[_c('b-col',{attrs:{"md":"6","sm":"12"}},[_vm._v("\n        "+_vm._s(_vm.$t("datatable_footer_left_title", {
                from: _vm.$n(_vm.datatable.from),
                to: _vm.$n(_vm.datatable.to),
                count: _vm.$n(_vm.datatable.to - _vm.datatable.from + 1),
                total: _vm.$n(_vm.datatable.total)
            }))+"\n    ")]),_vm._v(" "),_c('b-col',{attrs:{"md":"6","sm":"12"}},[_c('b-pagination',{staticClass:"mb-0",attrs:{"size":"sm","align":"right","per-page":_vm.datatable.per_page,"total-rows":_vm.datatable.total},scopedSlots:_vm._u([{key:"page",fn:function(p){return [_vm._v(_vm._s(_vm.$n(p.page)))]}}]),model:{value:(_vm.datatable.current_page),callback:function ($$v) {_vm.$set(_vm.datatable, "current_page", $$v)},expression:"datatable.current_page"}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/DatatableFooter.vue?vue&type=template&id=5cca23cc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DatatableFooter.vue?vue&type=script&lang=js&
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
/* harmony default export */ var DatatableFootervue_type_script_lang_js_ = ({
  props: {
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
// CONCATENATED MODULE: ./components/DatatableFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DatatableFootervue_type_script_lang_js_ = (DatatableFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/DatatableFooter.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DatatableFootervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0f3fd678"
  
)

/* harmony default export */ var DatatableFooter = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=datatable-footer.js.map