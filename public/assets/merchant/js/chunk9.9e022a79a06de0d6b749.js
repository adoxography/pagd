webpackJsonp([9,28],{UWmM:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("e1gq"),i=n("eOhn"),s={extends:o.default,props:["inventory","preset"],data:function(){return{languages:[new i.a],type:"",mode:"inventory",phonemes:{},pa:{text:"Proto-Algonquian"}}},computed:{phones:function(){return this.inventory[this.type]}},watch:{type:function(){var e={};_.each(this.phones,function(t){e[t.id]=!0}),this.phonemes=e}},created:function(){if(this.preset){this.mode=this.preset.mode;for(var e=[],t=0;t<this.preset.languages.length;t+=2){var n=this.preset.languages[t],o=this.preset.languages[t+1];n&&e.push(new i.a(n,o))}e.push(this.languages[0]),this.languages=e}},mounted:function(){var e=this;this.preset?(this.type=this.preset.type,Vue.nextTick(function(){_.each(e.phonemes,function(t,n){e.phonemes[n]=e.preset.phonemes.includes(n)})})):this.type="consonants"},methods:{onInput:function(e,t){""==e?this.languages.length>1&&this.languages.splice(t,1):t==this.languages.length-1&&this.languages.push(new i.a)},phoneName:function(e){return e.algoName},selectAll:function(){this.toggle(!0)},selectNone:function(){this.toggle(!1)},toggle:function(e){var t=this;_.each(this.phonemes,function(n,o){t.phonemes[o]=e})}}},r=n("XyMi"),a=Object(r.a)(s,void 0,void 0,!1,null,null,null);t.default=a.exports},e1gq:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={mixins:[{props:["oldErrors"],mounted:function(){var e=this;this.oldErrors&&Vue.nextTick(function(){_.forEach(e.oldErrors,function(t,n){n=n.split("_")[0],t.forEach(function(t){e.errors.add(n,t,"database")})})})},methods:{validateBeforeSubmit:function(e){this.$validator.validateAll(),this.errors.any()&&e.preventDefault()}}},{props:["oldSources"],created:function(){var e=this;this.oldSources&&this.oldSources.forEach(function(t){e.sources.push({short:t.display?t.display:t.short,id:t.id,long:t.long,extraInfo:t.pivot?t.pivot.extraInfo:t.extraInfo,description:t.pivot?t.pivot.description:t.description})})}}],data:function(){return{sources:[]}}},i=n("XyMi"),s=Object(i.a)(o,void 0,void 0,!1,null,null,null);t.default=s.exports},eOhn:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.text=t,this.id=n,this.extra=o}return o(e,[{key:"reset",value:function(){this.text="",this.id="",this.extra=""}}]),e}()}});