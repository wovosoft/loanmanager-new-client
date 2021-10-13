(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{312:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=function(e,data){return e.$bvToast.toast(data.message,{title:data.title||"SUCCESS",variant:data.type||"success",autoHideDelay:data.delay||3e3,appendToast:!0})},o=function(e,data){var t=e.$createElement,content=[],n=[];if(data.errors)for(var r in data.errors)n.push(t("li",data.errors[r]));content.push(t("ol",{class:["pl-3"]},n));var o=t("div",[t("h5",{class:"font-weight-bold"},data.message||"Operation Failed"),content]);return e.$bvToast.toast(o,{title:data.title||"FAILED",variant:data.type||"danger",autoHideDelay:data.delay||5e3,appendToast:!0})},l=function(e,t,n,data){var l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"the_form";if(!e.$refs[l].checkValidity())return e.$refs[l].reportValidity(),!1;e.$axios.post(n,data).then((function(n){r(e,n.data),e.$emit("stored",n.data),"function"==typeof t?t():t&&t.hasOwnProperty("vueTarget")&&t.vueTarget.hide()})).catch((function(t){o(e,t.response.data)}))}},340:function(e,t,n){"use strict";n.r(t);var r=n(312),o={props:{item:{type:null|Object},value:{type:Boolean,default:!1}},data:function(){return{is_visible:!1,form:{id:null,name:null,email:null,password:null}}},watch:{value:function(e){this.is_visible=e}},methods:{setItem:function(){this.$set(this,"form",this.item)},resetItem:function(){this.$set(this,"form",{id:null,name:null,email:null,password:null})},handleSubmit:function(e){Object(r.a)(this,e,"/users/store",JSON.parse(JSON.stringify(this.form)))}}},l=n(64),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{attrs:{"header-class":"py-2","footer-class":"py-1","button-size":"sm","ok-title":e.$t("submit"),"cancel-title":e.$t("cancel"),title:e.$t("user_details"),"header-bg-variant":"dark","header-text-variant":"light"},on:{ok:function(t){return t.preventDefault(),e.handleSubmit.apply(null,arguments)},shown:e.setItem,hidden:function(t){e.$emit("input",!1),e.$emit("hidden",!0),e.resetItem()}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.hide;return[n("b-form",{ref:"the_form",on:{submit:function(t){return t.preventDefault(),e.handleSubmit(r)},keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSubmit(r)}}},[n("b-form-group",{attrs:{label:e.$t("name")}},[n("b-form-input",{attrs:{name:"name",size:"sm",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("b-form-group",{attrs:{label:e.$t("email")}},[n("b-form-input",{attrs:{size:"sm",name:"email",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),n("b-form-group",{attrs:{label:e.$t("password")+" (Fill if changes needed)"}},[n("b-form-input",{attrs:{size:"sm",type:"password",name:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1)]}}]),model:{value:e.is_visible,callback:function(t){e.is_visible=t},expression:"is_visible"}})}),[],!1,null,null,null);t.default=component.exports}}]);