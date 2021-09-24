exports.ids = [17];
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

/***/ })

};;
//# sourceMappingURL=users-add.js.map