webpackJsonp([3,28],{Em3k:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("e1gq"),i=n("kVhI"),r=n("eOhn"),o={extends:a.default,props:["pronominalFeatures","nominalFeatures","paradigms","oldParadigm","oldNominalFeature","oldPronominalFeature","oldTranslation"],mixins:[i.a],data:function(){return{language:new r.a,pronominalFeature:new r.a,nominalFeature:new r.a,paradigm:new r.a,mode:new r.a,parent:new r.a,translation:"",validations:{nominalFeature:"datalist_required|datalist_exists",pronominalFeature:"datalist_required|datalist_exists"}}},computed:{filteredParadigms:function(){var t=this;return this.paradigms.filter(function(e){return e.language_id==t.language.id})},translationRequired:function(){return 0==this.morphemes.length||!this.morphemesContainStem},translationRules:function(){return 0==this.morphemes.length||this.morphemesContainStem?"":"required"},paradigmHasPronominalFeature:function(){var t=this.getParadigm(),e=!1;return t&&(e=t.type.hasPronominalFeature),e},paradigmHasNominalFeature:function(){var t=this.getParadigm(),e=!1;return t&&(e=t.type.hasNominalFeature),e},morphemesContainStem:function(){var t=["V","N"];return void 0!==this.morphemes.find(function(e){return t.includes(e.name.replace(/[-*]/g,""))})}},watch:{language:function(){this.paradigm=new r.a},paradigm:function(){this.pronominalFeature=new r.a,this.nominalFeature=new r.a,this.paradigmHasPronominalFeature?this.validations.pronominalFeature="datalist_required|datalist_exists":this.validations.pronominalFeature="",this.paradigmHasNominalFeature?this.validations.nominalFeature="datalist_required|datalist_exists":this.validations.nominalFeature=""},translationRequired:function(t){t||(this.translation="")}},mounted:function(){var t=this;this.oldParadigm&&Vue.nextTick(function(){t.$refs.paradigm.update(t.oldParadigm),t.oldPronominalFeature&&Vue.nextTick(function(){t.$refs.pronominalFeature.update(t.oldPronominalFeature)}),t.oldNominalFeature&&Vue.nextTick(function(){t.$refs.nominalFeature.update(t.oldNominalFeature)})})},created:function(){this.oldTranslation&&(this.translation=this.oldTranslation)},methods:{getParadigm:function(){var t=this.paradigm.id,e=null;return t&&(e=this.paradigms.find(function(e){return e.id==t})),e}}},s=n("XyMi"),u=Object(s.a)(o,void 0,void 0,!1,null,null,null);e.default=u.exports},e1gq:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={mixins:[{props:["oldErrors"],mounted:function(){var t=this;this.oldErrors&&Vue.nextTick(function(){_.forEach(t.oldErrors,function(e,n){n=n.split("_")[0],e.forEach(function(e){t.errors.add(n,e,"database")})})})},methods:{validateBeforeSubmit:function(t){this.$validator.validateAll(),this.errors.any()&&t.preventDefault()}}},{props:["oldSources"],created:function(){var t=this;this.oldSources&&this.oldSources.forEach(function(e){t.sources.push({short:e.display?e.display:e.short,id:e.id,long:e.long,extraInfo:e.pivot?e.pivot.extraInfo:e.extraInfo,description:e.pivot?e.pivot.description:e.description})})}}],data:function(){return{sources:[]}}},i=n("XyMi"),r=Object(i.a)(a,void 0,void 0,!1,null,null,null);e.default=r.exports},eOhn:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();var i=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.text=e,this.id=n,this.extra=a}return a(t,[{key:"reset",value:function(){this.text="",this.id="",this.extra=""}}]),t}()},kVhI:function(t,e,n){"use strict";e.a={props:["init-morphemes"],data:function(){return{morphemes:[]}},created:function(){this.initMorphemes&&(this.morphemes=this.initMorphemes)}}}});