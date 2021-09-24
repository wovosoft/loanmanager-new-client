exports.ids = [20,1,2,3,6,8,9,19];
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

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BorrowersSelect.vue?vue&type=template&id=0b1fd6e2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-select',{attrs:{"size":"sm","toggle-class":"border-0","init-placeholder":"Search Borrower","options":_vm.searchItems},on:{"itemSelected":function (v){ return _vm.$emit('itemSelected',v); }},model:{value:(_vm.item),callback:function ($$v) {_vm.item=$$v},expression:"item"}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BorrowersSelect.vue?vue&type=template&id=0b1fd6e2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BorrowersSelect.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BorrowersSelectvue_type_script_lang_js_ = ({
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

  mounted() {
    this.item = this.value;
  },

  methods: {
    searchItems(query, exact = false) {
      return this.$axios.post("/borrowers/search", {
        exact: exact,
        filter: query
      }).then(res => res.data).catch(err => {
        console.log(err.response);
        return [];
      });
    }

  }
});
// CONCATENATED MODULE: ./components/BorrowersSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BorrowersSelectvue_type_script_lang_js_ = (BorrowersSelectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BorrowersSelect.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BorrowersSelectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f606df5c"
  
)

/* harmony default export */ var BorrowersSelect = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {VSelect: __webpack_require__(52).default})


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

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTodayYMD; });
const getTodayYMD = (d = new Date(), separator = "-") => {
  let date = (d.getDate() < 9 ? "0" : "") + d.getDate();
  let m = (d.getMonth() < 9 ? "0" : "") + (1 + d.getMonth());
  return [d.getFullYear(), m, date].join(separator);
};

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AccountsAdd.vue?vue&type=template&id=5a480753&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{attrs:{"header-class":"py-2","footer-class":"py-1","button-size":"sm","ok-title":_vm.$t('submit'),"cancel-title":_vm.$t('cancel'),"title":_vm.$t('account_details'),"header-bg-variant":"dark","header-text-variant":"light"},on:{"ok":function($event){$event.preventDefault();return _vm.handleSubmit.apply(null, arguments)},"shown":_vm.setItem,"hidden":function($event){_vm.$emit('input',false);_vm.$emit('hidden',true);_vm.form={}}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hide = ref.hide;
return [_c('b-form',{ref:"the_form",on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit(hide)}}},[_c('table',{staticClass:"table table-sm table-bordered table-hover"},_vm._l((['borrower_id','account_no','account_name','type',
                 'is_active','opening_date','closing_date']),function(x){return _c('tr',[_c('td',[_vm._v(_vm._s((_vm.$t('borrower_id' === x ? 'borrower' : x)) + (_vm.isRequired(x) ? ' *' : '')))]),_vm._v(" "),_c('td',{staticClass:"p-0"},[(['type'].includes(x))?[_c('b-form-select',{staticClass:"border-0",attrs:{"required":_vm.isRequired(x),"size":"sm","options":_vm.loan_types},model:{value:(_vm.form[x]),callback:function ($$v) {_vm.$set(_vm.form, x, $$v)},expression:"form[x]"}})]:(['borrower_id'].includes(x))?[_c('borrowers-select',{staticClass:"border-0",model:{value:(_vm.form[x]),callback:function ($$v) {_vm.$set(_vm.form, x, $$v)},expression:"form[x]"}})]:(['is_active'].includes(x))?[_c('b-form-radio-group',{staticClass:"m-1",attrs:{"required":_vm.isRequired(x),"options":_vm.active_inactive},model:{value:(_vm.form[x]),callback:function ($$v) {_vm.$set(_vm.form, x, $$v)},expression:"form[x]"}})]:[_c('b-form-input',{staticClass:"border-0",attrs:{"required":_vm.isRequired(x),"type":_vm.getType(x),"size":"sm"},model:{value:(_vm.form[x]),callback:function ($$v) {_vm.$set(_vm.form, x, $$v)},expression:"form[x]"}})]],2)])}),0),_vm._v(" "),_c('b-form-group',{attrs:{"label":_vm.$t('description')}},[_c('b-form-textarea',{attrs:{"rows":4,"required":_vm.isRequired('description'),"size":"sm","options":_vm.loan_types},model:{value:(_vm.form['description']),callback:function ($$v) {_vm.$set(_vm.form, 'description', $$v)},expression:"form['description']"}})],1)],1)]}}]),model:{value:(_vm.is_visible),callback:function ($$v) {_vm.is_visible=$$v},expression:"is_visible"}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AccountsAdd.vue?vue&type=template&id=5a480753&

// CONCATENATED MODULE: ./partials/loan_types.js
/* harmony default export */ var loan_types = (context => {
  return [{
    text: context.$t('saving'),
    value: 'saving'
  }, {
    text: context.$t('loan'),
    value: 'loan'
  }, {
    text: context.$t('share'),
    value: 'share'
  }, {
    text: context.$t('combo'),
    value: 'combo'
  }];
});
// CONCATENATED MODULE: ./partials/active_inactive.js
/* harmony default export */ var active_inactive = (context => {
  return [{
    text: context.$t('yes'),
    value: 1
  }, {
    text: context.$t('no'),
    value: 0
  }];
});
// EXTERNAL MODULE: ./partials/form_methods.js + 1 modules
var form_methods = __webpack_require__(49);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AccountsAdd.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var AccountsAddvue_type_script_lang_js_ = ({
  props: {
    item: {
      type: Object | null
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    loan_types() {
      return loan_types(this);
    },

    active_inactive() {
      return active_inactive(this);
    }

  },

  data() {
    return {
      is_visible: false,
      form: {}
    };
  },

  methods: {
    handleSubmit(hide) {
      Object(form_methods["a" /* handleSubmit */])(this, hide, "/accounts/store", JSON.parse(JSON.stringify(this.form)));
    },

    setItem() {
      this.$set(this, 'form', JSON.parse(JSON.stringify(this.item)));
    },

    getType(x) {
      if (['opening_date', 'closing_date'].includes(x)) {
        return "date";
      }

      return "text";
    },

    isRequired(x) {
      return ['borrower_id', 'account_no', 'account_name', 'type', 'opening_date'].includes(x);
    }

  },
  watch: {
    value(v) {
      this.is_visible = v;
    }

  }
});
// CONCATENATED MODULE: ./components/AccountsAdd.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AccountsAddvue_type_script_lang_js_ = (AccountsAddvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AccountsAdd.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AccountsAddvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8fb36a00"
  
)

/* harmony default export */ var AccountsAdd = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BorrowersSelect: __webpack_require__(56).default})


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AccountsView.vue?vue&type=template&id=28106843&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{attrs:{"header-class":"py-2","footer-class":"py-1","button-size":"sm","size":"lg","ok-title":_vm.$t('ok'),"cancel-title":_vm.$t('cancel'),"title":_vm.$t('account_details'),"header-bg-variant":"dark","header-text-variant":"light"},on:{"hidden":function($event){_vm.$emit('input',false),_vm.$emit('hidden',true)}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hide = ref.hide;
return [_c('b-form-row',[_c('b-col',{attrs:{"md":"6","sm":"12"}},[_c('table',{staticClass:"table table-sm table-bordered table-hover"},_vm._l((['id','account_no','account_name','type',
                    'is_active','opening_date','closing_date','description','created_at']),function(x){return _c('tr',[_c('th',[_vm._v(_vm._s(_vm.$t(x)))]),_vm._v(" "),_c('td',[(['previous_debt','amount','current_debt'].includes(x))?[_vm._v("\n                                "+_vm._s(_vm.$n(_vm.item[x], {currency: 'BDT', style: "currency"}))+"\n                            ")]:(['opening_date','created_at','updated_at','closing_date'].includes(x))?[_vm._v("\n                                "+_vm._s(_vm.item[x] ? _vm.$d(new Date(_vm.item[x])) : null)+"\n                            ")]:(['is_active'].includes(x))?[_vm._v("\n                                "+_vm._s(_vm.$t(['no', 'yes'][_vm.item[x] || 0]))+"\n                            ")]:(['type'].includes(x))?[_vm._v("\n                                "+_vm._s(_vm.$t(_vm.item[x]))+"\n                            ")]:[_vm._v("\n                                "+_vm._s(_vm.item[x])+"\n                            ")]],2)])}),0)]),_vm._v(" "),_c('b-col',{attrs:{"md":"6","sm":"12"}},[_c('table',{staticClass:"table table-sm table-bordered table-hover "},[_c('tr',[_c('th',[_vm._v(_vm._s(_vm.$t('borrower')))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.item.borrower.name))])])])])],1)]}}]),model:{value:(_vm.is_visible),callback:function ($$v) {_vm.is_visible=$$v},expression:"is_visible"}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AccountsView.vue?vue&type=template&id=28106843&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AccountsView.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AccountsViewvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/AccountsView.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AccountsViewvue_type_script_lang_js_ = (AccountsViewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AccountsView.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AccountsViewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3f987954"
  
)

/* harmony default export */ var AccountsView = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/accounts/index.vue?vue&type=template&id=21338363&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pt-3"},[_c('b-container',{attrs:{"fluid":""}},[_c('b-card',{attrs:{"body-class":"p-0","header-bg-variant":"dark","header-text-variant":"light","footer-class":"p-2"},scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('datatable-header',{attrs:{"title":_vm.title,"datatable":_vm.datatable},scopedSlots:_vm._u([{key:"actions",fn:function(){return [_c('b-btn-group',{attrs:{"size":"sm"}},[_c('b-btn',{attrs:{"variant":"primary"},on:{"click":function($event){_vm.show_add=true;_vm.setItem();}}},[_c('b-icon-plus')],1)],1)]},proxy:true}])})]},proxy:true},{key:"footer",fn:function(){return [_c('datatable-footer',{attrs:{"datatable":_vm.datatable}})]},proxy:true}])},[_vm._v(" "),_c('b-table',{ref:"datatable",attrs:{"api-url":"/accounts","per-page":_vm.datatable.per_page,"current-page":_vm.datatable.current_page,"small":"","hover":"","striped":"","head-variant":"dark","items":_vm.getItems,"fields":_vm.fields},scopedSlots:_vm._u([{key:"cell(is_active)",fn:function(row){return [_vm._v("\n                    "+_vm._s(Number(row.item.is_active) ? "YES" : "NO")+"\n                ")]}},{key:"cell(action)",fn:function(row){return [_c('action-btns',{attrs:{"on-tap-add":function (){
                            _vm.item=JSON.parse(JSON.stringify(row.item));
                            _vm.show_add=true;
                        },"on-tap-view":function (){
                            _vm.item=JSON.parse(JSON.stringify(row.item));
                            _vm.show_view=true;
                        }}})]}}])})],1)],1),_vm._ssrNode(" "),_c('accounts-view',{attrs:{"item":_vm.item},on:{"hidden":function($event){_vm.item=null}},model:{value:(_vm.show_view),callback:function ($$v) {_vm.show_view=$$v},expression:"show_view"}}),_vm._ssrNode(" "),_c('accounts-add',{attrs:{"item":_vm.item},on:{"stored":function($event){return _vm.$refs.datatable.refresh()},"hidden":function($event){_vm.item=null}},model:{value:(_vm.show_add),callback:function ($$v) {_vm.show_add=$$v},expression:"show_add"}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/accounts/index.vue?vue&type=template&id=21338363&

// EXTERNAL MODULE: ./partials/mixins/datatable.js
var datatable = __webpack_require__(57);

// EXTERNAL MODULE: ./partials/helpers.js
var helpers = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/accounts/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var accountsvue_type_script_lang_js_ = ({
  mixins: [datatable["a" /* default */]],

  head() {
    return {
      title: this.title
    };
  },

  data() {
    return {
      show_view: false,
      show_add: false,
      item: null,
      title: this.$t('account_list'),
      fields: [{
        key: "id",
        sortable: true,
        label: this.$t('id')
      }, {
        key: "borrower",
        sortable: false,
        label: this.$t('borrower'),
        formatter: v => v ? v.name : null
      }, {
        key: "account_no",
        sortable: true,
        label: this.$t('account_no')
      }, {
        key: "account_name",
        sortable: true,
        label: this.$t('account_name')
      }, {
        key: "type",
        sortable: true,
        label: this.$t('type'),
        formatter: v => this.$t(v)
      }, {
        key: "opening_date",
        sortable: true,
        label: this.$t('account_opening_date')
      }, {
        key: "closing_date",
        sortable: true,
        label: this.$t('account_closing_date')
      }, {
        key: "is_active",
        sortable: true,
        label: this.$t('is_active')
      }, {
        key: "action",
        sortable: false,
        label: "  ",
        tdClass: 'text-right',
        thClass: 'text-right'
      }]
    };
  },

  methods: {
    setItem() {
      this.$set(this, 'item', {
        borrower_id: null,
        account_no: null,
        account_name: null,
        type: "loan",
        is_active: 1,
        opening_date: Object(helpers["a" /* getTodayYMD */])(),
        closing_date: null,
        description: null
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/accounts/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_accountsvue_type_script_lang_js_ = (accountsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/accounts/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_accountsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "74959c82"
  
)

/* harmony default export */ var accounts = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DatatableHeader: __webpack_require__(61).default,ActionBtns: __webpack_require__(53).default,DatatableFooter: __webpack_require__(55).default,AccountsView: __webpack_require__(71).default,AccountsAdd: __webpack_require__(68).default})


/***/ })

};;
//# sourceMappingURL=index.js.map