webpackJsonp([20,52],{"6I8g":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("e1gq"),i=n.n(r),o=n("eOhn");e.default={extends:i.a,props:["method","action","variables","initialValue"],data:function(){return{language:new o.a,variable:new o.a,selectedValue:""}},computed:{values:function(){var t=this,e=this.variables.find(function(e){return e.id==t.variable.id});return e?e.values:[]}},created:function(){this.initialValue&&(this.selectedValue=this.initialValue)}}},CGUW:function(t,e,n){var r=n("VU/8")(n("6I8g"),null,!1,null,null,null);t.exports=r.exports},JmZv:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("sUu7"),i={props:["oldErrors"],mounted:function(){var t=this;this.oldErrors&&Vue.nextTick(function(){_.forEach(t.oldErrors,function(e,n){n=n.split("_")[0],e.forEach(function(e){t.errors.add(n,e,"database")})})})},methods:{validateBeforeSubmit:function(t){this.$validator.validateAll(),this.errors.any()&&t.preventDefault()}}};Vue.use(r.b);e.default={mixins:[i,{props:["oldSources"],created:function(){var t=this;this.oldSources&&this.oldSources.forEach(function(e){t.sources.push({short:e.display?e.display:e.short,id:e.id,long:e.long,extraInfo:e.pivot?e.pivot.extraInfo:e.extraInfo})})}}],data:function(){return{sources:[]}}}},e1gq:function(t,e,n){var r=n("VU/8")(n("JmZv"),null,!1,null,null,null);t.exports=r.exports},eOhn:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.text=e,this.id=n,this.extra=r}return r(t,[{key:"reset",value:function(){this.text="",this.id="",this.extra=""}}]),t}()}});