exports.ids = [25,3,17,18];
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

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UsersAdd.vue?vue&type=template&id=3c25706c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{attrs:{"header-class":"py-2","footer-class":"py-1","button-size":"sm","ok-title":_vm.$t('submit'),"cancel-title":_vm.$t('cancel'),"title":_vm.$t('user_details'),"header-bg-variant":"dark","header-text-variant":"light"},on:{"ok":function($event){$event.preventDefault();return _vm.handleSubmit.apply(null, arguments)},"shown":_vm.setItem,"hidden":function($event){_vm.$emit('input',false);_vm.$emit('hidden',true);_vm.resetItem();}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hide = ref.hide;
return [_c('b-form',{ref:"the_form",on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit(hide)},"keypress":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleSubmit(hide)}}},[_c('b-form-group',{attrs:{"label":_vm.$t('name')}},[_c('b-form-input',{attrs:{"name":"name","size":"sm","required":""},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1),_vm._v(" "),_c('b-form-group',{attrs:{"label":_vm.$t('email')}},[_c('b-form-input',{attrs:{"size":"sm","name":"email","required":""},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v)},expression:"form.email"}})],1),_vm._v(" "),_c('b-form-group',{attrs:{"label":_vm.$t('password')+' (Fill if changes needed)'}},[_c('b-form-input',{attrs:{"size":"sm","type":"password","name":"password"},model:{value:(_vm.form.password),callback:function ($$v) {_vm.$set(_vm.form, "password", $$v)},expression:"form.password"}})],1)],1)]}}]),model:{value:(_vm.is_visible),callback:function ($$v) {_vm.is_visible=$$v},expression:"is_visible"}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/UsersAdd.vue?vue&type=template&id=3c25706c&

// EXTERNAL MODULE: ./partials/form_methods.js + 1 modules
var form_methods = __webpack_require__(49);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UsersAdd.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var UsersAddvue_type_script_lang_js_ = ({
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
      form: {
        id: null,
        name: null,
        email: null,
        password: null
      }
    };
  },

  watch: {
    value(v) {
      this.is_visible = v;
    }

  },
  methods: {
    setItem() {
      this.$set(this, 'form', this.item);
    },

    resetItem() {
      this.$set(this, 'form', {
        id: null,
        name: null,
        email: null,
        password: null
      });
    },

    handleSubmit(hide) {
      Object(form_methods["a" /* handleSubmit */])(this, hide, "/users/store", JSON.parse(JSON.stringify(this.form)));
    }

  }
});
// CONCATENATED MODULE: ./components/UsersAdd.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_UsersAddvue_type_script_lang_js_ = (UsersAddvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/UsersAdd.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_UsersAddvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "356dbba4"
  
)

/* harmony default export */ var UsersAdd = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/users/index.vue?vue&type=template&id=d759be2e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pt-3"},[_c('b-container',[_c('b-table',{ref:"datatable",attrs:{"small":"","hover":"","striped":"","head-variant":"dark","fields":_vm.fields,"items":_vm.getItems},scopedSlots:_vm._u([{key:"cell(action)",fn:function(row){return [_c('action-btns',{attrs:{"on-tap-add":function (){
                        _vm.item=JSON.parse(JSON.stringify(row.item));
                        _vm.show_add=true;
                    },"on-tap-view":function (){
                        _vm.item=JSON.parse(JSON.stringify(row.item));
                        _vm.show_view=true;
                    }}})]}}])})],1),_vm._ssrNode(" "),_c('users-view',{attrs:{"item":_vm.item},on:{"hidden":function($event){_vm.item=null}},model:{value:(_vm.show_view),callback:function ($$v) {_vm.show_view=$$v},expression:"show_view"}}),_vm._ssrNode(" "),_c('users-add',{attrs:{"item":_vm.item},on:{"stored":function($event){return _vm.$refs.datatable.refresh()},"hidden":function($event){_vm.item=null}},model:{value:(_vm.show_add),callback:function ($$v) {_vm.show_add=$$v},expression:"show_add"}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/users/index.vue?vue&type=template&id=d759be2e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/users/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var usersvue_type_script_lang_js_ = ({
  head() {
    return {
      title: this.$t('user_list')
    };
  },

  data() {
    return {
      show_view: false,
      show_add: false,
      item: null,
      fields: [{
        key: 'id',
        sortable: false,
        label: this.$t('id')
      }, {
        key: 'name',
        sortable: false,
        label: this.$t('name')
      }, {
        key: 'email',
        sortable: false,
        label: this.$t('email')
      }, {
        key: 'created_at',
        sortable: false,
        label: this.$t('created_at'),
        formatter: v => this.$d(new Date(v))
      }, {
        key: 'updated_at',
        sortable: false,
        label: this.$t('updated_at'),
        formatter: v => this.$d(new Date(v))
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
    getItems() {
      return this.$axios.post("https://loanmanager.test/api/users").then(res => {
        return res.data.data;
      }).catch(err => {
        console.log(err.response);
        return [];
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/users/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_usersvue_type_script_lang_js_ = (usersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/users/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_usersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "275825ab"
  
)

/* harmony default export */ var users = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ActionBtns: __webpack_require__(53).default,UsersView: __webpack_require__(76).default,UsersAdd: __webpack_require__(77).default})


/***/ })

};;
//# sourceMappingURL=index.js.map