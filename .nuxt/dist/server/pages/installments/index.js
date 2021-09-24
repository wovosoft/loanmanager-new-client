exports.ids = [23,3,4,8,10,11,13,19];
exports.modules = {

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("f497bbde", content, true, context)
};

/***/ }),

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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".typehead-dd .dropdown-menu-scrollable{max-height:300px;overflow-y:scroll!important;overflow-x:auto;width:100%}.typehead-dd .dropdown-toggle{text-align:left}.typehead-dd .dropdown-toggle:after{right:10px;position:absolute;margin-top:6px}.typehead-dd .dd-toggle-border-color{border:1px solid #ced4da}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VSelect.vue?vue&type=template&id=036cace4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-dd',_vm._b({staticClass:"typehead-dd",attrs:{"toggle-class":_vm.toggleClass,"menu-class":['dropdown-menu-scrollable',_vm.menuClass].join(' ')},on:{"shown":_vm.dropdownOpened}},'b-dd',Object.assign({}, _vm.$props,_vm.$attrs,_vm.init),false),[_c('b-input',{staticClass:"ml-2 mr-2",staticStyle:{"width":"calc(100% - 14px)"},attrs:{"placeholder":_vm.searchPlaceholder,"size":_vm.searchSize,"type":"search"},on:{"input":function (v){ return _vm.$emit('search',v); }},model:{value:(_vm.query),callback:function ($$v) {_vm.query=$$v},expression:"query"}}),_vm._v(" "),_vm._l((_vm.searchedItems),function(item,item_key){return _c('b-dd-item',{key:item_key,on:{"click":function($event){return _vm.itemSelected(item)}}},[_vm._v("\n        "+_vm._s(item[_vm.textField])+"\n    ")])})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/VSelect.vue?vue&type=template&id=036cace4&

// CONCATENATED MODULE: ./node_modules/bootstrap-vue/src/constants/regex.js
// --- General ---
const RX_ARRAY_NOTATION = /\[(\d+)]/g;
const RX_BV_PREFIX = /^(BV?)/;
const RX_DIGITS = /^\d+$/;
const RX_EXTENSION = /^\..+/;
const RX_HASH = /^#/;
const RX_HASH_ID = /^#[A-Za-z]+[\w\-:.]*$/;
const RX_HTML_TAGS = /(<([^>]+)>)/gi;
const RX_HYPHENATE = /\B([A-Z])/g;
const RX_LOWER_UPPER = /([a-z])([A-Z])/g;
const RX_NUMBER = /^[0-9]*\.?[0-9]+$/;
const RX_PLUS = /\+/g;
const RX_REGEXP_REPLACE = /[-/\\^$*+?.()|[\]{}]/g;
const RX_SPACES = /[\s\uFEFF\xA0]+/g;
const RX_SPACE_SPLIT = /\s+/;
const RX_STAR = /\/\*$/;
const RX_START_SPACE_WORD = /(\s|^)(\w)/g;
const RX_TRIM_LEFT = /^\s+/;
const RX_TRIM_RIGHT = /\s+$/;
const RX_UNDERSCORE = /_/g;
const RX_UN_KEBAB = /-(\w)/g; // --- Date ---
// Loose YYYY-MM-DD matching, ignores any appended time inforation
// Matches '1999-12-20', '1999-1-1', '1999-01-20T22:51:49.118Z', '1999-01-02 13:00:00'

const RX_DATE = /^\d+-\d\d?-\d\d?(?:\s|T|$)/; // Used to split off the date parts of the YYYY-MM-DD string

const RX_DATE_SPLIT = /-|\s|T/; // Time string RegEx (optional seconds)

const RX_TIME = /^([0-1]?[0-9]|2[0-3]):[0-5]?[0-9](:[0-5]?[0-9])?$/; // --- URL ---
// HREFs must end with a hash followed by at least one non-hash character

const RX_HREF = /^.*(#[^#]+)$/;
const RX_ENCODED_COMMA = /%2C/g;
const RX_ENCODE_REVERSE = /[!'()*]/g;
const RX_QUERY_START = /^(\?|#|&)/; // --- Aspect ---

const RX_ASPECT = /^\d+(\.\d*)?[/:]\d+(\.\d*)?$/;
const RX_ASPECT_SEPARATOR = /[/:]/; // --- Grid ---

const RX_COL_CLASS = /^col-/; // --- Icon ---

const RX_ICON_PREFIX = /^BIcon/; // --- Locale ---

const RX_STRIP_LOCALE_MODS = /-u-.+/;
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/src/constants/env.js
const HAS_WINDOW_SUPPORT = typeof window !== 'undefined';
const HAS_DOCUMENT_SUPPORT = typeof document !== 'undefined';
const HAS_NAVIGATOR_SUPPORT = typeof navigator !== 'undefined';
const HAS_PROMISE_SUPPORT = typeof Promise !== 'undefined';
/* istanbul ignore next: JSDOM always returns false */

const HAS_MUTATION_OBSERVER_SUPPORT = typeof MutationObserver !== 'undefined' || typeof WebKitMutationObserver !== 'undefined' || typeof MozMutationObserver !== 'undefined';
const IS_BROWSER = HAS_WINDOW_SUPPORT && HAS_DOCUMENT_SUPPORT && HAS_NAVIGATOR_SUPPORT;
const WINDOW = HAS_WINDOW_SUPPORT ? window : {};
const DOCUMENT = HAS_DOCUMENT_SUPPORT ? document : {};
const NAVIGATOR = HAS_NAVIGATOR_SUPPORT ? navigator : {};
const USER_AGENT = (NAVIGATOR.userAgent || '').toLowerCase();
const IS_JSDOM = USER_AGENT.indexOf('jsdom') > 0;
const IS_IE = /msie|trident/.test(USER_AGENT); // Determine if the browser supports the option passive for events

const HAS_PASSIVE_EVENT_SUPPORT = (() => {
  let passiveEventSupported = false;

  if (IS_BROWSER) {
    try {
      const options = {
        // This function will be called when the browser
        // attempts to access the passive property
        get passive() {
          /* istanbul ignore next: will never be called in JSDOM */
          passiveEventSupported = true;
        }

      };
      WINDOW.addEventListener('test', options, options);
      WINDOW.removeEventListener('test', options, options);
    } catch {
      /* istanbul ignore next: will never be called in JSDOM */
      passiveEventSupported = false;
    }
  }

  return passiveEventSupported;
})();
const HAS_TOUCH_SUPPORT = IS_BROWSER && ('ontouchstart' in DOCUMENT.documentElement || NAVIGATOR.maxTouchPoints > 0);
const HAS_POINTER_EVENT_SUPPORT = IS_BROWSER && Boolean(WINDOW.PointerEvent || WINDOW.MSPointerEvent);
/* istanbul ignore next: JSDOM only checks for 'IntersectionObserver' */

const HAS_INTERACTION_OBSERVER_SUPPORT = IS_BROWSER && 'IntersectionObserver' in WINDOW && 'IntersectionObserverEntry' in WINDOW && // Edge 15 and UC Browser lack support for `isIntersecting`
// but we an use `intersectionRatio > 0` instead
// 'isIntersecting' in window.IntersectionObserverEntry.prototype &&
'intersectionRatio' in WINDOW.IntersectionObserverEntry.prototype;
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/src/constants/safe-types.js

/* istanbul ignore next */

const Element = HAS_WINDOW_SUPPORT ? WINDOW.Element : class Element extends Object {};
/* istanbul ignore next */

const HTMLElement = HAS_WINDOW_SUPPORT ? WINDOW.HTMLElement : class HTMLElement extends Element {};
/* istanbul ignore next */

const SVGElement = HAS_WINDOW_SUPPORT ? WINDOW.SVGElement : class SVGElement extends Element {};
/* istanbul ignore next */

const File = HAS_WINDOW_SUPPORT ? WINDOW.File : class File extends Object {};
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/src/utils/inspect.js

 // --- Convenience inspection utilities ---

const toType = value => typeof value;
const toRawType = value => Object.prototype.toString.call(value).slice(8, -1);
const toRawTypeLC = value => toRawType(value).toLowerCase();
const isUndefined = value => value === undefined;
const isNull = value => value === null;
const isEmptyString = value => value === '';
const isUndefinedOrNull = value => isUndefined(value) || isNull(value);
const isUndefinedOrNullOrEmpty = value => isUndefinedOrNull(value) || isEmptyString(value);
const isFunction = value => toType(value) === 'function';
const isBoolean = value => toType(value) === 'boolean';
const isString = value => toType(value) === 'string';
const isNumber = value => toType(value) === 'number';
const isNumeric = value => RX_NUMBER.test(String(value));
const isPrimitive = value => isBoolean(value) || isString(value) || isNumber(value);
const isArray = value => Array.isArray(value); // Quick object check
// This is primarily used to tell Objects from primitive values
// when we know the value is a JSON-compliant type
// Note object could be a complex type like array, Date, etc.

const isObject = obj => obj !== null && typeof obj === 'object'; // Strict object type check
// Only returns true for plain JavaScript objects

const isPlainObject = obj => Object.prototype.toString.call(obj) === '[object Object]';
const isDate = value => value instanceof Date;
const isEvent = value => value instanceof Event;
const isFile = value => value instanceof File;
const isRegExp = value => toRawType(value) === 'RegExp';
const isPromise = value => !isUndefinedOrNull(value) && isFunction(value.then) && isFunction(value.catch);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VSelect.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var VSelectvue_type_script_lang_js_ = ({
  name: "VSelect",
  props: {
    initialItem: {
      default: null
    },
    initPlaceholder: {
      type: String,
      default: () => "Not Selected"
    },
    variant: {
      type: String,
      default: 'outline-dark'
    },
    block: {
      type: Boolean,
      default: true
    },
    menuClass: {
      type: String,
      default: null
    },
    searchSize: {
      type: String,
      default: 'sm'
    },
    searchPlaceholder: {
      type: String,
      default: 'Search Items...'
    },
    options: {
      type: Array | Function,
      default: () => []
    },
    valueField: {
      type: String,
      default: "value"
    },
    textField: {
      type: String,
      default: "text"
    },
    value: {
      default: null
    },
    clearSearchOnSelect: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: null
    },
    toggleClass: {
      type: String | Array,
      default: 'dd-toggle-border-color'
    }
  },

  beforeMount() {
    this.init.text = this.initPlaceholder;
  },

  mounted() {
    if (this.initial && this.value) {
      this.searchItems(this.value, true);
    }
  },

  watch: {
    value(v) {
      if (this.initial && v) {
        this.searchItems(v, true);
      }
    },

    query(val) {
      this.searchItems(val);
    },

    selectedItem(val) {
      //set placeholder
      if (isObject(val) && !Array.isArray(val)) {
        if (typeof this.textField === "function") {
          this.init.text = this.textField(val);
        } else {
          this.init.text = val[this.textField];
        }
      } else {
        this.init.text = this.initPlaceholder;
      } //now emit the value


      if (isObject(val) && !Array.isArray(val)) {
        if (typeof this.valueField === 'function') {
          this.$emit('input', this.valueField(val));
        } else {
          this.$emit('input', val[this.valueField]);
        }
      } else {
        this.$emit('input', val);
      }
    }

  },

  data() {
    return {
      init: {
        text: 'Select Element'
      },
      query: null,
      selectedItem: null,
      searchedItems: [],
      initial: true
    };
  },

  methods: {
    dropdownOpened() {
      this.$el.querySelector("[type='search']").focus();
    },

    itemSelected(item) {
      this.$set(this, 'selectedItem', item);

      if (this.clearSearchOnSelect) {
        this.query = null;
      }

      this.$emit("itemSelected", item);
    },

    searchItems(query, initial = false) {
      if (Array.isArray(this.options)) {
        let items = this.options.filter(i => i[this.textField].toLocaleLowerCase().includes((query || "").toLocaleLowerCase()));

        if (this.limit) {
          items = items.slice(0, this.limit);
        }

        this.$set(this, 'searchedItems', items);
      } else if (typeof this.options === 'function') {
        this.options(query, initial).then(items => {
          if (initial) {
            this.$set(this, 'searchedItems', [items]);
            this.selectedItem = items;
          } else {
            this.$set(this, 'searchedItems', items);
          }

          this.initial = false;
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./components/VSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VSelectvue_type_script_lang_js_ = (VSelectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/VSelect.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(50)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VSelectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "edf53792"
  
)

/* harmony default export */ var VSelect = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoansSelect.vue?vue&type=template&id=eda23106&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-select',{attrs:{"size":"sm","toggle-class":"border-0","init-placeholder":"Search Loan","options":_vm.searchItems},on:{"itemSelected":function (v){ return _vm.$emit('itemSelected',v); }},model:{value:(_vm.item),callback:function ($$v) {_vm.item=$$v},expression:"item"}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/LoansSelect.vue?vue&type=template&id=eda23106&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoansSelect.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var LoansSelectvue_type_script_lang_js_ = ({
  props: {
    value: {
      default: null
    }
  },

  data() {
    return {
      query: null,
      item: null
    };
  },

  watch: {
    value(val) {
      this.$set(this, 'item', val);
    },

    item(v) {
      this.$emit('input', v);
    }

  },
  methods: {
    searchItems(query, exact = false) {
      // if (!(query || "").toString().trim()) {
      //     return false;
      // }
      return this.$axios.post("/installments/search_loans", {
        exact: exact,
        filter: query
      }).then(res => res.data).catch(err => []);
    }

  }
});
// CONCATENATED MODULE: ./components/LoansSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LoansSelectvue_type_script_lang_js_ = (LoansSelectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/LoansSelect.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LoansSelectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "411b8284"
  
)

/* harmony default export */ var LoansSelect = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {VSelect: __webpack_require__(52).default})


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InstallmentsAdd.vue?vue&type=template&id=14af7a9f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{attrs:{"header-class":"py-2","footer-class":"py-1","button-size":"sm","ok-title":_vm.$t('submit'),"cancel-title":_vm.$t('cancel'),"title":_vm.$t('Installment Details'),"header-bg-variant":"dark","header-text-variant":"light"},on:{"ok":function($event){$event.preventDefault();return _vm.handleSubmit.apply(null, arguments)},"shown":_vm.setItem,"hidden":function($event){_vm.$emit('input',false);_vm.$emit('hidden',true);_vm.form={};}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hide = ref.hide;
return [_c('b-form',{ref:"the_form",on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit(hide)}}},[_c('table',{staticClass:"table table-sm table-bordered table-hover"},[_c('tr',[_c('th',[_vm._v(_vm._s(_vm.$t('loan')))]),_vm._v(" "),_c('td',[_c('loans-select',{staticClass:"border-0",on:{"itemSelected":_vm.setLoanFields},model:{value:(_vm.form.loan_id),callback:function ($$v) {_vm.$set(_vm.form, "loan_id", $$v)},expression:"form.loan_id"}})],1)]),_vm._v(" "),_vm._l((Object.keys(_vm.form)),function(x){return [(['date','amount','payment_method'].includes(x))?_c('tr',[_c('th',[_vm._v(_vm._s(_vm.$t(x) + (_vm.isRequired(x) ? ' *' : '')))]),_vm._v(" "),_c('td',{staticClass:"p-0"},[(['date','amount'].includes(x))?_c('b-form-input',_vm._b({staticClass:"border-0",attrs:{"size":"sm"},model:{value:(_vm.form[x]),callback:function ($$v) {_vm.$set(_vm.form, x, $$v)},expression:"form[x]"}},'b-form-input',_vm.getType(x),false)):_c('b-form-select',{staticClass:"border-0",attrs:{"size":"sm","options":_vm.payment_methods},model:{value:(_vm.form[x]),callback:function ($$v) {_vm.$set(_vm.form, x, $$v)},expression:"form[x]"}})],1)]):_vm._e()]})],2)])]}}]),model:{value:(_vm.is_visible),callback:function ($$v) {_vm.is_visible=$$v},expression:"is_visible"}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/InstallmentsAdd.vue?vue&type=template&id=14af7a9f&

// EXTERNAL MODULE: ./partials/form_methods.js + 1 modules
var form_methods = __webpack_require__(49);

// CONCATENATED MODULE: ./partials/payment_methods.js
/* harmony default export */ var payment_methods = (context => {
  return [{
    text: context.$t('cash'),
    value: 'cash'
  }, {
    text: context.$t('mobile'),
    value: 'mobile'
  }, {
    text: context.$t('card'),
    value: 'card'
  }, {
    text: context.$t('bank'),
    value: 'bank'
  }];
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InstallmentsAdd.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var InstallmentsAddvue_type_script_lang_js_ = ({
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

  computed: {
    payment_methods() {
      return payment_methods(this);
    }

  },
  methods: {
    setLoanFields(v) {
      console.log(v);
      this.form.amount = v.installment_amount || 0;
    },

    setItem() {
      this.$set(this, 'form', JSON.parse(JSON.stringify(this.item)));
    },

    handleSubmit(hide) {
      Object(form_methods["a" /* handleSubmit */])(this, hide, "/installments/store", JSON.parse(JSON.stringify(this.form)));
    },

    getType(x) {
      if (['date'].includes(x)) {
        return {
          type: 'date'
        };
      } else if (['amount'].includes(x)) {
        return {
          type: "number",
          min: 0,
          step: 'any'
        };
      }

      return {
        type: "text"
      };
    },

    isRequired(x) {
      return ['name', 'nid', 'fathers_name', 'mothers_name'].includes(x);
    },

    findLoan(e) {
      this.$axios.post("/installments/search_loans", {
        filter: ''
      }).then(res => {
        console.log(res.data);
      }).catch(err => {
        console.log(err.response.data);
      });
    }

  },
  watch: {
    value(v) {
      this.is_visible = v;
    }

  }
});
// CONCATENATED MODULE: ./components/InstallmentsAdd.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_InstallmentsAddvue_type_script_lang_js_ = (InstallmentsAddvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/InstallmentsAdd.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_InstallmentsAddvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "295d4868"
  
)

/* harmony default export */ var InstallmentsAdd = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoansSelect: __webpack_require__(63).default})


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InstallmentsView.vue?vue&type=template&id=293516a1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{attrs:{"header-class":"py-2","footer-class":"py-1","button-size":"sm","size":"lg","title":_vm.$t('Installment Details'),"header-bg-variant":"dark","header-text-variant":"light"},on:{"hidden":function($event){_vm.$emit('input',false),_vm.$emit('hidden',true)}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hide = ref.hide;
return [_c('b-row',[_c('b-col',{attrs:{"md":"6","sm":"12"}},[_c('table',{staticClass:"table table-sm table-bordered table-hover"},_vm._l((['id','date','previous_debt','amount','current_debt','payment_method']),function(x){return _c('tr',[_c('th',[_vm._v(_vm._s(_vm.$t(x)))]),_vm._v(" "),_c('td',[(['previous_debt','amount','current_debt'].includes(x))?[_vm._v("\n                                "+_vm._s(_vm.$n(_vm.item[x], {currency: 'BDT', style: "currency"}))+"\n                            ")]:(['date'].includes(x))?[_vm._v("\n                                "+_vm._s(_vm.$d(new Date(_vm.item[x])))+"\n                            ")]:(['payment_method'].includes(x))?[_vm._v("\n                                "+_vm._s(_vm.$t(_vm.item[x]))+"\n                            ")]:[_vm._v("\n                                "+_vm._s(_vm.item[x])+"\n                            ")]],2)])}),0)]),_vm._v(" "),_c('b-col',{attrs:{"md":"6","sm":"12"}},[_c('table',{staticClass:"table table-sm table-bordered table-hover "},[_c('tr',[_c('th',[_vm._v(_vm._s(_vm.$t('borrower')))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.item.borrower.name))])]),_vm._v(" "),_c('tr',[_c('th',[_vm._v(_vm._s(_vm.$t('account_name')))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.item.account.account_name))])]),_vm._v(" "),_c('tr',[_c('th',[_vm._v(_vm._s(_vm.$t('loan_amount')))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.$n(_vm.item.loan.loan_amount, {style: "currency", currency: 'BDT'})))])]),_vm._v(" "),_c('tr',[_c('th',[_vm._v(_vm._s(_vm.$t('due_amount')))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.$n(_vm.item.loan.due_amount, {style: "currency", currency: 'BDT'})))])]),_vm._v(" "),_c('tr',[_c('th',[_vm._v(_vm._s(_vm.$t('disbursement_date')))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.$d(new Date(_vm.item.loan.disbursement_date))))])])])])],1)]}}]),model:{value:(_vm.is_visible),callback:function ($$v) {_vm.is_visible=$$v},expression:"is_visible"}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/InstallmentsView.vue?vue&type=template&id=293516a1&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InstallmentsView.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var InstallmentsViewvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/InstallmentsView.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_InstallmentsViewvue_type_script_lang_js_ = (InstallmentsViewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/InstallmentsView.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_InstallmentsViewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "126acc0a"
  
)

/* harmony default export */ var InstallmentsView = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/installments/index.vue?vue&type=template&id=63a6f3bc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pt-3"},[_c('b-container',{attrs:{"fluid":""}},[_c('b-card',{attrs:{"body-class":"p-0","header-bg-variant":"dark","header-text-variant":"light","footer-class":"p-2"},scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.$refs.datatable.refresh()}}},[_c('b-form-row',[_c('b-col',{attrs:{"md":"2","sm":"12"}},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('b-col',{attrs:{"md":"2","sm":"12"}},[_c('b-input-group',{scopedSlots:_vm._u([{key:"append",fn:function(){return [_c('b-btn',{attrs:{"size":"sm","title":"Reset"},on:{"click":function($event){_vm.query_fields.borrower_id=null,_vm.accounts=[],_vm.query_fields.account_id=null}}},[_c('b-icon-trash')],1)]},proxy:true}])},[_c('api-selectable',{staticClass:"form-control form-control-sm p-0",attrs:{"size":"sm","title":_vm.$t('search_borrowers'),"value-field":"value","placeholder":_vm.$t('search_borrowers'),"api-url":"borrowers/search"},on:{"input":_vm.searchAccounts},model:{value:(_vm.query_fields.borrower_id),callback:function ($$v) {_vm.$set(_vm.query_fields, "borrower_id", $$v)},expression:"query_fields.borrower_id"}})],1)],1),_vm._v(" "),(_vm.query_fields.borrower_id)?_c('b-col',{attrs:{"md":"2","sm":"12"}},[_c('b-input-group',{scopedSlots:_vm._u([{key:"append",fn:function(){return [_c('b-btn',{attrs:{"size":"sm","title":"Reset"},on:{"click":function($event){_vm.query_fields.account_id=null}}},[_c('b-icon-trash')],1)]},proxy:true}],null,false,3838845581)},[_c('b-form-select',{attrs:{"title":"Select Account","options":_vm.accounts,"value-field":"id","text-field":"account_no","placeholder":"Account","size":"sm"},scopedSlots:_vm._u([{key:"first",fn:function(){return [_c('b-form-select-option',{attrs:{"value":null}},[_vm._v("\n                                                Select Account\n                                            ")])]},proxy:true}],null,false,2231096631),model:{value:(_vm.query_fields.account_id),callback:function ($$v) {_vm.$set(_vm.query_fields, "account_id", $$v)},expression:"query_fields.account_id"}})],1)],1):_c('b-col',{attrs:{"md":"2","sm":"12"}},[_c('b-form-input',{attrs:{"size":"sm","name":"account_no","title":_vm.$t('account_no'),"type":"search","placeholder":_vm.$t('account_no')},model:{value:(_vm.query_fields.account_no),callback:function ($$v) {_vm.$set(_vm.query_fields, "account_no", $$v)},expression:"query_fields.account_no"}})],1),_vm._v(" "),_c('b-col',{attrs:{"md":"3","sm":"12"}},[_c('b-input-group',{attrs:{"size":"sm"},scopedSlots:_vm._u([{key:"append",fn:function(){return [_c('b-btn',{attrs:{"size":"sm","title":_vm.$t('reset')},on:{"click":function($event){_vm.query_fields.starting_date=null,_vm.query_fields.ending_date=null}}},[_c('b-icon-trash')],1)]},proxy:true}])},[_c('b-input',{attrs:{"title":"Starting Date","type":"date"},model:{value:(_vm.query_fields.starting_date),callback:function ($$v) {_vm.$set(_vm.query_fields, "starting_date", $$v)},expression:"query_fields.starting_date"}}),_vm._v(" "),_c('b-input',{attrs:{"title":"Ending Date","type":"date"},model:{value:(_vm.query_fields.ending_date),callback:function ($$v) {_vm.$set(_vm.query_fields, "ending_date", $$v)},expression:"query_fields.ending_date"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"1","sm":"12"}},[_c('b-btn',{attrs:{"variant":"primary","size":"sm","title":_vm.$t('search'),"type":"submit"}},[_c('b-icon-search')],1),_vm._v(" "),_c('b-btn',{attrs:{"variant":"danger","size":"sm","title":_vm.$t('reset')},on:{"click":_vm.resetQueries}},[_c('b-icon-trash')],1)],1),_vm._v(" "),_c('b-col',{staticClass:"text-right",attrs:{"md":"2","sm":"12"}},[_c('b-btn-group',{staticClass:"d-inline",attrs:{"size":"sm"}},[_c('b-btn',{attrs:{"variant":"primary"},on:{"click":function($event){_vm.show_add=true;_vm.initFormItem();}}},[_c('b-icon-plus')],1)],1),_vm._v(" "),_c('b-select',{staticClass:"d-inline",staticStyle:{"max-width":"100px"},attrs:{"size":"sm","options":[ 5, 10, 15, 20, 30, 40, 50, 100, 200, 500,1000 ]},model:{value:(_vm.datatable.per_page),callback:function ($$v) {_vm.$set(_vm.datatable, "per_page", $$v)},expression:"datatable.per_page"}})],1)],1)],1)]},proxy:true},{key:"footer",fn:function(){return [_c('datatable-footer',{attrs:{"datatable":_vm.datatable}})]},proxy:true}])},[_vm._v(" "),_c('b-table',{ref:"datatable",attrs:{"responsive":"","api-url":"/installments","per-page":_vm.datatable.per_page,"current-page":_vm.datatable.current_page,"small":"","hover":"","striped":"","head-variant":"dark","items":_vm.getItems,"fields":_vm.fields},scopedSlots:_vm._u([{key:"cell(is_active)",fn:function(row){return [_vm._v("\n                        "+_vm._s(Number(row.item.is_active) ? "YES" : "NO")+"\n                    ")]}},{key:"cell(action)",fn:function(row){return [_c('action-btns',{attrs:{"on-tap-add":function (){
                                _vm.item=JSON.parse(JSON.stringify(row.item));
                                _vm.show_add=true;
                            },"on-tap-view":function (){
                                _vm.item=JSON.parse(JSON.stringify(row.item));
                                _vm.show_view=true;
                            }}})]}}])})],1)],1),_vm._ssrNode(" "),_c('installments-view',{attrs:{"item":_vm.item},on:{"hidden":function($event){_vm.item=null}},model:{value:(_vm.show_view),callback:function ($$v) {_vm.show_view=$$v},expression:"show_view"}}),_vm._ssrNode(" "),_c('installments-add',{attrs:{"item":_vm.item},on:{"stored":function($event){return _vm.$refs.datatable.refresh()},"hidden":function($event){_vm.item=null}},model:{value:(_vm.show_add),callback:function ($$v) {_vm.show_add=$$v},expression:"show_add"}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/installments/index.vue?vue&type=template&id=63a6f3bc&

// EXTERNAL MODULE: ./partials/mixins/datatable.js
var datatable = __webpack_require__(57);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/installments/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const queries = {
  borrower_id: null,
  account_id: null,
  starting_date: null,
  ending_date: null,
  account_no: null
};
/* harmony default export */ var installmentsvue_type_script_lang_js_ = ({
  mixins: [datatable["a" /* default */]],

  head() {
    return {
      title: this.title
    };
  },

  data() {
    return {
      title: this.$t("installment_list"),
      query_fields: JSON.parse(JSON.stringify(queries)),
      accounts: [],
      show_view: false,
      show_add: false,
      item: null,
      fields: [{
        key: "id",
        sortable: true,
        label: this.$t('id')
      }, {
        key: "borrower",
        sortable: false,
        label: this.$t('borrower'),
        formatter: v => v.name
      }, {
        key: "account",
        sortable: false,
        label: this.$t('account'),
        formatter: v => v.account_no
      }, {
        key: "loan",
        sortable: false,
        label: this.$t('loan'),
        formatter: v => {
          return [v.id, v.disbursement_date, v.loan_amount, v.due_amount].join(" | ");
        }
      }, {
        key: "date",
        sortable: true,
        label: this.$t('date'),
        formatter: v => this.$d(new Date(v))
      }, {
        key: "previous_debt",
        sortable: true,
        label: this.$t('previous_debt'),
        formatter: v => this.$n(v || 0, {
          style: 'currency',
          currency: 'BDT'
        })
      }, {
        key: "amount",
        sortable: true,
        label: this.$t('amount'),
        formatter: v => this.$n(v || 0, {
          style: 'currency',
          currency: 'BDT'
        })
      }, {
        key: "current_debt",
        sortable: true,
        label: this.$t('current_debt'),
        formatter: v => this.$n(v || 0, {
          style: 'currency',
          currency: 'BDT'
        })
      }, {
        key: "payment_method",
        sortable: true,
        label: this.$t('payment_method'),
        formatter: v => this.$t(v)
      }, {
        key: 'action',
        tdClass: "text-right",
        thClass: "text-right"
      }]
    };
  },

  methods: {
    resetQueries() {
      this.query_fields = JSON.parse(JSON.stringify(queries));
      this.$refs.datatable.refresh();
    },

    initFormItem() {
      let d = new Date();
      let m = d.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let date = d.getDate();
      date = date < 10 ? "0" + date : date;
      this.$set(this, 'item', {
        loan_id: null,
        date: d.getFullYear() + "-" + m + "-" + date,
        previous_debt: 0,
        amount: 0,
        current_debt: 0,
        payment_method: "cash",
        files: null
      });
    },

    trash(id) {
      if (confirm("Are You Sure?")) {
        this.$axios.delete("installments/trash/" + id).then(res => {
          this.$refs.datatable.refresh();
        }).catch(err => {
          console.log(err.response.data);
        });
      }
    },

    searchAccounts(q) {
      this.query_fields.account_id = null;

      if (q) {
        this.query_fields.account_no = null;
        this.$axios.post("accounts/by-borrower-id", {
          borrower_id: q
        }).then(res => {
          this.accounts = res.data;
        }).catch(err => {
          console.log(err.response.data);
          this.accounts = [];
        });
      } else {
        this.accounts = [];
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/installments/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_installmentsvue_type_script_lang_js_ = (installmentsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/installments/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_installmentsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "19412173"
  
)

/* harmony default export */ var installments = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ApiSelectable: __webpack_require__(62).default,ActionBtns: __webpack_require__(53).default,DatatableFooter: __webpack_require__(55).default,InstallmentsView: __webpack_require__(74).default,InstallmentsAdd: __webpack_require__(69).default})


/***/ })

};;
//# sourceMappingURL=index.js.map