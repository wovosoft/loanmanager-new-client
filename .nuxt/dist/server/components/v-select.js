exports.ids = [19];
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

/***/ })

};;
//# sourceMappingURL=v-select.js.map