webpackJsonp([37],{JNOt:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("XyMi"),n=Object(s.a)({props:{name:{required:!0},selected:{default:!1}},data:function(){return{isActive:!1}},computed:{href:function(){return"#"+this.name.toLowerCase().replace(/ /g,"-")}},mounted:function(){this.isActive=this.selected}},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"show",rawName:"v-show",value:this.isActive,expression:"isActive"}]},[t("div",{staticClass:"tabs-details"},[this._t("default")],2)])},[],!1,null,null,null);t.default=n.exports}});