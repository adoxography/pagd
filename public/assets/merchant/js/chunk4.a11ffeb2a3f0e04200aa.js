webpackJsonp([4],{Vpfh:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,".alg-preview{overflow:hidden;display:flex}.alg-preview .preview-gradient{position:absolute;background:linear-gradient(transparent 70%,hsla(0,0%,100%,.8));width:100%}.alg-preview .preview-content{width:100%}.alg-preview .toggle-bar{position:absolute;width:100%;display:flex;align-self:flex-end;justify-content:center;pointer-events:none}.alg-preview .toggle-bar a{pointer-events:all}",""])},"o+D0":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={props:["preview"],data:function(){return{show:!0,overflowing:!1}},computed:{height:function(){return this.show?"100%":this.preview},toggleText:function(){return this.show?"Show less...":"Show more..."},previewHeight:function(){return/\d+/.exec(this.preview)[0]}},methods:{toggle:function(){this.show=!this.show}},mounted:function(){this.overflowing=this.$refs.slot.offsetHeight>this.previewHeight,this.show=!1}},s=(i("sNxm"),i("K1/g")),n=Object(s.a)(o,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"alg-preview",style:{"max-height":e.height}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.overflowing&&!e.show,expression:"overflowing && !show"}],staticClass:"preview-gradient",style:{height:e.height}}),e._v(" "),i("div",{ref:"slot",staticClass:"preview-content"},[e._t("default")],2),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.overflowing,expression:"overflowing"}],staticClass:"toggle-bar"},[i("a",{on:{click:e.toggle}},[e._v(e._s(e.toggleText))])])])},[],!1,null,null,null);n.options.__file="Preview.vue";t.default=n.exports},rK0U:function(e,t,i){var o=i("Vpfh");"string"==typeof o&&(o=[[e.i,o,""]]);var s={transform:void 0};i("MTIv")(o,s);o.locals&&(e.exports=o.locals)},sNxm:function(e,t,i){"use strict";var o=i("rK0U");i.n(o).a}});