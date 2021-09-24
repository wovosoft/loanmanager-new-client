exports.ids = [4];
exports.modules = {

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("f3a1e65e", content, true, context)
};

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiSelectable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiSelectable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiSelectable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiSelectable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiSelectable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".api-selectable .dropdown-toggle:after{float:right!important;top:13px!important;position:absolute;right:5px}.api-selectable .dropdown-menu{max-height:300px;overflow:auto}.api-selectable .min-w-100{min-width:100%!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ApiSelectable.vue?vue&type=template&id=738982a9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-dropdown',{staticClass:"api-selectable",attrs:{"menu-class":"min-w-100","size":_vm.size,"right":"","text":_vm.selected?_vm.selected.text:_vm.placeholder,"block":"","toggle-class":"text-left","variant":"light"},on:{"shown":function($event){_vm.$el.querySelector('input').focus()}}},[_c('div',{staticClass:"px-2"},[_c('b-input',{attrs:{"value":_vm.filter,"placeholder":_vm.placeholder,"debounce":_vm.debounce,"type":"search","size":_vm.size},model:{value:(_vm.query),callback:function ($$v) {_vm.query=$$v},expression:"query"}})],1),_vm._v(" "),_vm._l((_vm.items),function(item,item_key){return _c('b-dd-item',{key:item_key,on:{"click":function($event){return _vm.selectItem(item)}}},[_vm._v("\n        "+_vm._s(item.text)+"\n    ")])})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ApiSelectable.vue?vue&type=template&id=738982a9&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ApiSelectable.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ApiSelectablevue_type_script_lang_js_ = ({
  props: {
    apiUrl: {
      type: String,
      required: true
    },
    size: {
      default: "sm",
      type: String
    },
    placeholder: {
      type: String,
      default: "Search..."
    },
    debounce: {
      type: String | Number,
      default: 300
    },
    value: {
      default: null
    },
    valueField: {
      type: String,
      default: 'value'
    },
    identifier: {
      type: String,
      default: 'id'
    }
  },

  data() {
    return {
      items: [],
      filter: null,
      query: null,
      selected: null
    };
  },

  watch: {
    query() {
      this.fetchData();
    },

    value: {
      deep: true,

      handler(v) {
        if (this.valueField && v) {
          this.selected = (this.items || []).find(i => i.value === v);
        } else {
          this.selected = v;
        }
      }

    }
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      if (this.value) {
        let q = {
          key: this.identifier,
          value: this.value
        };
        let the = this;
        this.fetchData(q, function (items) {
          the.selected = (items || []).find(i => i.value === q.value);
        });
      }
    },

    selectItem(item) {
      this.$set(this, 'selected', item);
      this.$emit("input", this.selected && this.valueField ? this.selected[this.valueField] : this.selected);
    },

    fetchData(q = null, callback = null) {
      this.$axios.post(this.apiUrl, q || {
        filter: this.query
      }).then(res => {
        this.items = res.data;

        if (typeof callback === "function") {
          callback(this.items);
        }
      }).catch(err => {
        console.log(err.response);
      });
    }

  }
});
// CONCATENATED MODULE: ./components/ApiSelectable.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ApiSelectablevue_type_script_lang_js_ = (ApiSelectablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ApiSelectable.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(59)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ApiSelectablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7e681075"
  
)

/* harmony default export */ var ApiSelectable = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=api-selectable.js.map