webpackJsonp([25],{qdKu:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t("XyMi"),n=Object(s.a)({props:["languages","orders","modes","preset","active"],data:function(){return{activeTab:""}},methods:{onTabChanged:function(a){var e=void 0,t=void 0;e="Basic"===a?"Advanced":"Basic",t=this.$refs[e],this.$refs[a].importData(t.getData())}},created:function(){this.active?this.activeTab=this.active:this.activeTab="Basic"}},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("alg-tabs",{attrs:{active:a.activeTab},on:{tabChanged:function(e){a.onTabChanged(e)}}},[t("alg-tab",{attrs:{name:"Basic"}},[t("alg-basic-paradigm-search",{ref:"Basic",attrs:{languages:a.languages}})],1),a._v(" "),t("alg-tab",{attrs:{name:"Advanced"}},[t("alg-advanced-paradigm-search",{ref:"Advanced",attrs:{orders:a.orders,modes:a.modes,languages:a.languages,preset:a.preset}})],1)],1)},[],!1,null,null,null);e.default=n.exports}});