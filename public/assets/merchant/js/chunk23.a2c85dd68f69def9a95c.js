webpackJsonp([23],{"2jId":function(e,t,o){"use strict";var s=o("I3G/");s="default"in s?s.default:s;/^2\./.test(s.version)||s.util.warn("VueFocus 2.1.0 only supports Vue 2.x, and does not support Vue "+s.version);var a={inserted:function(e,t){t.value?e.focus():e.blur()},componentUpdated:function(e,t){t.modifiers.lazy&&Boolean(t.value)===Boolean(t.oldValue)||(t.value?e.focus():e.blur())}},i={directives:{focus:a}};t.version="2.1.0",t.focus=a,t.mixin=i},LZch:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o("2jId"),a={props:["value","disabled"],data:function(){return{showModal:!1,oldSource:{text:"",id:""}}},computed:{hasDuplicates:function(){for(var e=this.value,t=!1,o=0;o<e.length&&!t;o++)t=this.duplicateSource(e[o].id);return t}},directives:{focus:s.focus},methods:{open:function(){this.showModal=!0},close:function(){this.showModal=!1},add:function(e){var t=this,o=this.value;o.push({short:e.display,id:e.id,long:e.long,extraInfo:""}),this.$emit("input",o),Vue.nextTick(function(){t.$refs.extrainfo[t.value.length-1].focus()})},remove:function(e){var t=this.value;t.splice(e,1),this.$emit("input",t)},duplicateSource:function(e){var t=this.value,o=!1,s=!1;return t&&t.forEach(function(t){t.id==e&&(o?s=!0:o=!0)}),s},extractExtraInfo:function(e){return e.pivot?e.pivot.extraInfo:e.extraInfo},handleOldSourceInput:function(){var e=this;Vue.nextTick(function(){e.$refs.oldSource.showCheck&&(e.add({display:e.oldSource.extra,id:e.oldSource.id,long:e.oldSource.text}),e.oldSource.text="",e.oldSource.id="",e.oldSource.extra="")})}}},i=o("XyMi"),n=Object(i.a)(a,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h4",{staticClass:"subtitle is-4"},[e._v("Sources")]),e._v(" "),o("div",{staticClass:"columns"},[o("div",{staticClass:"column is-8"},[o("label",{staticClass:"label",attrs:{for:"old-source"}},[e._v("Look up an existing source:")]),e._v(" "),o("alg-ajaxlist",{ref:"oldSource",attrs:{uri:"/autocomplete/sources",placeholder:"Search for an existing source",name:"old-source",id:"old-source",disabled:e.disabled},on:{input:e.handleOldSourceInput},model:{value:e.oldSource,callback:function(t){e.oldSource=t},expression:"oldSource"}})],1),e._v(" "),o("div",{staticClass:"column",staticStyle:{display:"flex","justify-content":"center"}},[o("a",{staticClass:"button",class:{"is-disabled":e.disabled},staticStyle:{"margin-top":"2rem"},attrs:{id:"new-source-button"},on:{click:e.open}},[e._v("\n\t\t\t   \tAdd a new source\n\t\t    ")])])]),e._v(" "),o("ul",e._l(e.value,function(t,s){return o("div",[o("div",{staticClass:"columns"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"source.id"}],attrs:{type:"hidden",name:"sources["+s+"][id]"},domProps:{value:t.id},on:{input:function(o){o.target.composing||e.$set(t,"id",o.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.short,expression:"source.short"}],attrs:{type:"hidden",name:"sources["+s+"][short]"},domProps:{value:t.short},on:{input:function(o){o.target.composing||e.$set(t,"short",o.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.long,expression:"source.long"}],attrs:{type:"hidden",name:"sources["+s+"][long]"},domProps:{value:t.long},on:{input:function(o){o.target.composing||e.$set(t,"long",o.target.value)}}}),e._v(" "),o("div",{staticClass:"column is-one-quarter"},[o("div",[o("p",{attrs:{title:t.long}},[e._v(e._s(s+1)+". "+e._s(t.short))]),e._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:e.duplicateSource(t.id),expression:"duplicateSource(source.id)"}],staticClass:"help is-danger",domProps:{textContent:e._s("This source is already listed")}})])]),e._v(" "),o("div",{staticClass:"column is-8"},[o("p",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.extraInfo,expression:"source.extraInfo"}],ref:"extrainfo",refInFor:!0,staticClass:"input is-expanded",attrs:{type:"text",name:"sources["+s+"][extraInfo]",placeholder:"chapter, page number, etc...",disabled:e.disabled,autocomplete:"off"},domProps:{value:t.extraInfo},on:{input:function(o){o.target.composing||e.$set(t,"extraInfo",o.target.value)}}})])]),e._v(" "),o("div",{staticClass:"column is-1"},[o("a",{staticClass:"button",attrs:{disabled:e.disabled},on:{click:function(t){e.remove(s)}}},[e._v("Remove")])])])])})),e._v(" "),o("alg-new-source",{directives:[{name:"show",rawName:"v-show",value:e.showModal,expression:"showModal"}],attrs:{open:e.showModal},on:{close:e.close,input:function(t){e.add(t)}}})],1)},[],!1,null,null,null);t.default=n.exports}});