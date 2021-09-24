exports.ids = [21,3,5,7,8,9];
exports.modules = {

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ handleSubmit; });

// CONCATENATED MODULE: ./plugins/messages.js
const successMsgBox = (context, data) => {
  return context.$bvToast.toast(data.message, {
    title: data.title || "SUCCESS",
    variant: data.type || "success",
    autoHideDelay: data.delay || 3000,
    appendToast: true
  });
};
const failedMsgBox = (context, data) => {
  const h = context.$createElement;
  let content = [];
  let errors = [];

  if (data.errors) {
    for (let x in data.errors) {
      errors.push(h("li", data.errors[x]));
    }
  }

  content.push(h("ol", {
    class: ['pl-3']
  }, errors));
  const vNodesMsg = h('div', [h('h5', {
    class: 'font-weight-bold'
  }, data.message || "Operation Failed"), content]);
  return context.$bvToast.toast(vNodesMsg, {
    title: data.title || "FAILED",
    variant: data.type || "danger",
    autoHideDelay: data.delay || 5000,
    appendToast: true
  });
}; // export default (context, inject) => {
//     inject('successMsgBox', (data) => {
//         // console.log(context.app)
//         this.$bvToast.toast(data.message, {
//             title: data.title || "Successfully Done",
//             variant: data.type || "success",
//             autoHideDelay: data.delay || 3000,
//             appendToast: true
//         })
//     })
// }
// CONCATENATED MODULE: ./partials/form_methods.js

const handleSubmit = (context, hide, url, data, ref = "the_form") => {
  if (!context.$refs[ref].checkValidity()) {
    context.$refs[ref].reportValidity();
    return false;
  }

  context.$axios.post(url, data).then(res => {
    successMsgBox(context, res.data);
    context.$emit("stored", res.data);

    if (typeof hide === "function") {
      hide();
    } else if (hide && hide.hasOwnProperty('vueTarget')) {
      hide.vueTarget.hide();
    }
  }).catch(err => {
    failedMsgBox(context, err.response.data);
  });
};

/***/ }),

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

/***/ }),

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

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      datatable: {
        current_page: 1,
        last_page: 1,
        from: 1,
        per_page: 15,
        to: 1,
        total: 0
      },
      fields: [],
      query_fields: {}
    };
  },

  methods: {
    getItems(ctx) {
      // console.log(ctx)
      let url = new URL(this.$axios.defaults.baseURL + ctx.apiUrl);
      url.searchParams.append("page", ctx.currentPage);
      return this.$axios.post(url.toString(), { ...ctx,
        ...this.query_fields
      }).then(({
        data
      }) => {
        this.$set(this, "datatable", {
          current_page: data.current_page,
          last_page: data.last_page,
          from: data.from,
          per_page: data.per_page,
          to: data.to,
          total: data.total
        });
        return data.data;
      }).catch(err => {
        console.log(err.response);
        this.$set(this, "datatable", {
          current_page: 1,
          last_page: 1,
          from: 1,
          per_page: 15,
          to: 1,
          total: 0
        });
        return [];
      });
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(46)["URL"]))

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("e9dc2500", content, true, context)
};

/***/ }),

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

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BorrowersAdd_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BorrowersAdd_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BorrowersAdd_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BorrowersAdd_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BorrowersAdd_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".borrower-photo .custom-file-label{border:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

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

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BorrowersAdd.vue?vue&type=template&id=00e0ce06&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{attrs:{"header-class":"py-2","footer-class":"py-1","button-size":"sm","size":"lg","ok-title":_vm.$t('submit'),"cancel-title":_vm.$t('cancel'),"title":_vm.$t('borrower_details'),"header-bg-variant":"dark","header-text-variant":"light"},on:{"ok":function($event){$event.preventDefault();return _vm.handleSubmit.apply(null, arguments)},"shown":_vm.setItem,"hidden":function($event){_vm.$emit('input',false),_vm.$emit('hidden',true)}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hide = ref.hide;
return [_c('b-form',{ref:"the_form",on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit(hide)}}},[_c('table',{staticClass:"table table-sm table-bordered table-hover"},[_vm._l((Object.keys(_vm.form)),function(x){return [(!['id','created_at','deleted_at','updated_at'].includes(x))?_c('tr',[_c('th',[_vm._v(_vm._s(_vm.$t(x) + (_vm.isRequired(x) ? ' *' : '')))]),_vm._v(" "),_c('td',{staticClass:"p-0"},[(x==='photo')?[_c('b-form-file',{staticClass:"borrower-photo",attrs:{"name":x,"required":_vm.isRequired(x),"accept":"image/*","label-class":"border-0","size":"sm"},on:{"keypress":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleSubmit(hide)}},model:{value:(_vm.form[x]),callback:function ($$v) {_vm.$set(_vm.form, x, $$v)},expression:"form[x]"}})]:(x==='gender')?[_c('b-form-select',{staticClass:"border-0",attrs:{"size":"sm","required":_vm.isRequired(x),"options":[{value:'male',text:'Male'},{value:'female',text: 'Female'},{value:'others',text: 'Others'}]},model:{value:(_vm.form[x]),callback:function ($$v) {_vm.$set(_vm.form, x, $$v)},expression:"form[x]"}})]:(x==='description')?[_c('b-form-textarea',{staticClass:"border-0",attrs:{"name":x,"size":"sm","required":_vm.isRequired(x)},model:{value:(_vm.form[x]),callback:function ($$v) {_vm.$set(_vm.form, x, $$v)},expression:"form[x]"}})]:[_c('b-form-input',{staticClass:"border-0",attrs:{"name":x,"size":"sm","required":_vm.isRequired(x),"type":_vm.getType(x)},on:{"keypress":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleSubmit(hide)}},model:{value:(_vm.form[x]),callback:function ($$v) {_vm.$set(_vm.form, x, $$v)},expression:"form[x]"}})]],2)]):_vm._e()]})],2)])]}}]),model:{value:(_vm.is_visible),callback:function ($$v) {_vm.is_visible=$$v},expression:"is_visible"}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BorrowersAdd.vue?vue&type=template&id=00e0ce06&

// EXTERNAL MODULE: ./partials/form_methods.js + 1 modules
var form_methods = __webpack_require__(49);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BorrowersAdd.vue?vue&type=script&lang=js&
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

/* harmony default export */ var BorrowersAddvue_type_script_lang_js_ = ({
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
      is_visible: false,
      form: {}
    };
  },

  methods: {
    setItem() {
      this.$set(this, 'form', JSON.parse(JSON.stringify(this.item)));
    },

    handleSubmit(hide) {
      Object(form_methods["a" /* handleSubmit */])(this, hide, "/borrowers/store", JSON.parse(JSON.stringify(this.form)));
    },

    getType(x) {
      if (['created_at', 'updated_at', 'deleted_at', 'date_of_birth'].includes(x)) {
        return 'date';
      } else if (x === 'phone') {
        return "tel";
      } else if (x === "email") {
        return "email";
      }

      return "text";
    },

    isRequired(x) {
      return ['name', 'nid', 'fathers_name', 'mothers_name'].includes(x);
    }

  },
  watch: {
    value(v) {
      this.is_visible = v;
    }

  }
});
// CONCATENATED MODULE: ./components/BorrowersAdd.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BorrowersAddvue_type_script_lang_js_ = (BorrowersAddvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BorrowersAdd.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(65)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BorrowersAddvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b2a5d68a"
  
)

/* harmony default export */ var BorrowersAdd = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/borrowers/index.vue?vue&type=template&id=3991a9bf&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pt-3"},[_c('b-container',{attrs:{"fluid":""}},[_c('b-card',{attrs:{"body-class":"p-0","header-bg-variant":"dark","header-text-variant":"light","footer-class":"p-2"},scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('datatable-header',{attrs:{"title":_vm.title,"datatable":_vm.datatable},scopedSlots:_vm._u([{key:"actions",fn:function(){return [_c('b-btn-group',{attrs:{"size":"sm"}},[_c('b-btn',{attrs:{"variant":"primary"},on:{"click":function($event){_vm.show_add=true;_vm.setItem();}}},[_c('b-icon-plus')],1)],1)]},proxy:true}])})]},proxy:true},{key:"footer",fn:function(){return [_c('datatable-footer',{attrs:{"datatable":_vm.datatable}})]},proxy:true}])},[_vm._v(" "),_c('b-table',{ref:"datatable",attrs:{"api-url":"/borrowers","per-page":_vm.datatable.per_page,"current-page":_vm.datatable.current_page,"small":"","hover":"","striped":"","head-variant":"dark","items":_vm.getItems,"fields":_vm.fields},scopedSlots:_vm._u([{key:"cell(action)",fn:function(row){return [_c('action-btns',{attrs:{"on-tap-add":function (){
                            _vm.item=JSON.parse(JSON.stringify(row.item));
                            _vm.show_add=true;
                        },"on-tap-view":function (){
                            _vm.item=JSON.parse(JSON.stringify(row.item));
                            _vm.show_view=true;
                        }}})]}}])})],1)],1),_vm._ssrNode(" "),_c('borrowers-view',{attrs:{"item":_vm.item},on:{"hidden":function($event){_vm.item=null}},model:{value:(_vm.show_view),callback:function ($$v) {_vm.show_view=$$v},expression:"show_view"}}),_vm._ssrNode(" "),_c('borrowers-add',{attrs:{"item":_vm.item},on:{"stored":function($event){return _vm.$refs.datatable.refresh()},"hidden":function($event){_vm.item=null}},model:{value:(_vm.show_add),callback:function ($$v) {_vm.show_add=$$v},expression:"show_add"}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/borrowers/index.vue?vue&type=template&id=3991a9bf&

// EXTERNAL MODULE: ./partials/mixins/datatable.js
var datatable = __webpack_require__(57);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/borrowers/index.vue?vue&type=script&lang=js&
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
//

/* harmony default export */ var borrowersvue_type_script_lang_js_ = ({
  mixins: [datatable["a" /* default */]],

  head() {
    return {
      title: this.title
    };
  },

  data() {
    return {
      show_add: false,
      show_view: false,
      item: null,
      title: this.$t('borrower_list'),
      fields: [{
        key: "id",
        sortable: true,
        label: this.$t('id')
      }, {
        key: "name",
        sortable: true,
        label: this.$t('name')
      }, {
        key: "fathers_name",
        sortable: true,
        label: this.$t('fathers_name')
      }, {
        key: "mothers_name",
        sortable: true,
        label: this.$t('mothers_name')
      }, {
        key: "date_of_birth",
        sortable: true,
        label: this.$t('date_of_birth')
      }, {
        key: "phone",
        sortable: true,
        label: this.$t('phone')
      }, {
        key: 'action',
        label: "",
        thClass: 'text-right',
        tdClass: 'text-right'
      }]
    };
  },

  methods: {
    setItem() {
      this.$set(this, 'item', {
        name: null,
        nid: null,
        fathers_name: null,
        mothers_name: null,
        spouse_name: null,
        gender: null,
        date_of_birth: null,
        present_division: null,
        present_district: null,
        present_upazila: null,
        present_thana: null,
        present_village: null,
        permanent_division: null,
        permanent_district: null,
        permanent_upazila: null,
        permanent_thana: null,
        permanent_village: null,
        email: null,
        phone: null,
        photo: null,
        description: null
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/borrowers/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_borrowersvue_type_script_lang_js_ = (borrowersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/borrowers/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_borrowersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0d6a4598"
  
)

/* harmony default export */ var borrowers = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DatatableHeader: __webpack_require__(61).default,ActionBtns: __webpack_require__(53).default,DatatableFooter: __webpack_require__(55).default,BorrowersView: __webpack_require__(72).default,BorrowersAdd: __webpack_require__(73).default})


/***/ })

};;
//# sourceMappingURL=index.js.map