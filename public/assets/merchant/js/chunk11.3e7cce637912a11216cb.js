webpackJsonp([11,29],{e1gq:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={mixins:[{props:["oldErrors"],mounted:function(){var e=this;this.oldErrors&&Vue.nextTick(function(){_.forEach(e.oldErrors,function(t,n){n=n.split("_")[0],t.forEach(function(t){e.errors.add(n,t,"database")})})})},methods:{validateBeforeSubmit:function(e){this.$validator.validateAll(),this.errors.any()&&e.preventDefault()}}},{props:["oldSources"],created:function(){var e=this;this.oldSources&&this.oldSources.forEach(function(t){e.sources.push({short:t.display?t.display:t.short,id:t.id,long:t.long,extraInfo:t.pivot?t.pivot.extraInfo:t.extraInfo,description:t.pivot?t.pivot.description:t.description})})}}],data:function(){return{sources:[]}}},r=n("K1/g"),i=Object(r.a)(o,void 0,void 0,!1,null,null,null);i.options.__file="Form.vue";t.default=i.exports},eOhn:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var r=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.text=t,this.id=n,this.extra=o}return o(e,[{key:"reset",value:function(){this.text="",this.id="",this.extra=""}}]),e}()},tnZN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("e1gq"),r=n("eOhn"),i={extends:o.default,data:function(){return{language:new r.a,parent:new r.a,reflex:new r.a,deleted:!1}},created:function(){this.deleted=1==this.oldDeleted}},a=n("K1/g"),u=Object(a.a)(i,void 0,void 0,!1,null,null,null);u.options.__file="Reflex.vue";t.default=u.exports}});