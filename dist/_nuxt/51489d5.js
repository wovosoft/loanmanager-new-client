(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{334:function(e,t,n){"use strict";n.r(t);var l={props:{item:{type:null|Object},value:{type:Boolean,default:!1}},data:function(){return{is_visible:!1}},watch:{value:function(e){this.is_visible=e}}},r=n(64),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{attrs:{"header-class":"py-2","footer-class":"py-1","button-size":"sm",size:"lg","ok-title":e.$t("ok"),"cancel-title":e.$t("cancel"),title:e.$t("account_details"),"header-bg-variant":"dark","header-text-variant":"light"},on:{hidden:function(t){e.$emit("input",!1),e.$emit("hidden",!0)}},scopedSlots:e._u([{key:"default",fn:function(t){t.hide;return[n("b-form-row",[n("b-col",{attrs:{md:"6",sm:"12"}},[n("table",{staticClass:"table table-sm table-bordered table-hover"},e._l(["id","account_no","account_name","type","is_active","opening_date","closing_date","description","created_at"],(function(t){return n("tr",[n("th",[e._v(e._s(e.$t(t)))]),e._v(" "),n("td",[["previous_debt","amount","current_debt"].includes(t)?[e._v("\n                                "+e._s(e.$n(e.item[t],{currency:"BDT",style:"currency"}))+"\n                            ")]:["opening_date","created_at","updated_at","closing_date"].includes(t)?[e._v("\n                                "+e._s(e.item[t]?e.$d(new Date(e.item[t])):null)+"\n                            ")]:["is_active"].includes(t)?[e._v("\n                                "+e._s(e.$t(["no","yes"][e.item[t]||0]))+"\n                            ")]:["type"].includes(t)?[e._v("\n                                "+e._s(e.$t(e.item[t]))+"\n                            ")]:[e._v("\n                                "+e._s(e.item[t])+"\n                            ")]],2)])})),0)]),e._v(" "),n("b-col",{attrs:{md:"6",sm:"12"}},[n("table",{staticClass:"table table-sm table-bordered table-hover "},[n("tr",[n("th",[e._v(e._s(e.$t("borrower")))]),e._v(" "),n("td",[e._v(e._s(e.item.borrower.name))])])])])],1)]}}]),model:{value:e.is_visible,callback:function(t){e.is_visible=t},expression:"is_visible"}})}),[],!1,null,null,null);t.default=component.exports}}]);