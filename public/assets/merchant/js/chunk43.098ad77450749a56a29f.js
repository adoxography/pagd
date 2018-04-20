webpackJsonp([43],{"5LbU":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors={}}return a(e,[{key:"get",value:function(e){if(this.errors[e])return Array.isArray(this.errors[e][0])?this.errors[e][0][0]:this.errors[e][0]}},{key:"clear",value:function(e){e?(delete this.errors[e],delete this.errors[e+"_id"],delete this.errors[e+"_text"]):this.errors={}}},{key:"record",value:function(e){var t=this;this.errors={},e&&_.forEach(e,function(e,r){var a=r;("string"==typeof r||r instanceof String)&&(a=r.split(".")[0]),t.errors[a]||(t.errors[a]=[]),t.errors[a].push(e)})}},{key:"has",value:function(e){var t=this;if(Array.isArray(e)){var r=!1;return e.forEach(function(e){r=r||t.has(e)}),r}return this.errors.hasOwnProperty(e)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}}]),e}(),n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();var o=function(){function e(t){for(var r in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.originalData=t,t)this[r]=t[r];this.errors=new s}return n(e,[{key:"data",value:function(){var e={};for(var t in this.originalData)e[t]=this[t];return e}},{key:"reset",value:function(){for(var e in this.originalData)this[e]="";this.errors.clear()}},{key:"get",value:function(e){return this.submit("get",e)}},{key:"post",value:function(e){return this.submit("post",e)}},{key:"patch",value:function(e){return this.submit("patch",e)}},{key:"submit",value:function(e,t){var r=this;arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise(function(a,s){axios[e](t,r.data()).then(function(e){r.onSuccess(e.data),a(e.data)}).catch(function(e){e.response?(422==e.response.status?r.onFail(e.response.data):500==e.response.status?alert("System error. Please submit a bug report including what you were doing and when."):400==e.response.status?console.log("Error 400"):alert("Network error "+e.response.status+". Please try again."),s(e.response.data)):(alert("Network error. Please submit a bug report including what you were doing and when."),console.log(e),s({}))})})}},{key:"onSuccess",value:function(e){}},{key:"onFail",value:function(e){this.errors.record(e)}}]),e}(),i={props:["languages","changes"],data:function(){return{rows:[],loading:!1,deleting:0,form:new o({language:{text:"",id:""},morpheme:{text:"",id:""},change:""})}},methods:{onSubmit:function(){var e=this;this.loading=!0,this.form.post("/changes").then(function(t){e.loading=!1,e.rows.push(t)}).catch(function(t){e.loading=!1})},deleteRow:function(e,t){var r=this;this.deleting=e.id,axios.delete("/changes/"+e.id).then(function(e){r.deleting=0,r.rows.splice(t,1)}).catch(function(e){r.deleting=0})},onLanguageInput:function(){this.form.morpheme={text:"",id:""}}},created:function(){this.rows=this.changes}},l=r("XyMi"),u=Object(l.a)(i,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("table",{staticClass:"table"},[e._m(0),e._v(" "),r("tbody",e._l(e.rows,function(t,a){return r("tr",[r("td",[r("a",{attrs:{href:"/languages/"+t.morpheme.language.iso}},[e._v(e._s(t.morpheme.language.name))])]),e._v(" "),r("td",[r("a",{attrs:{href:"/morphemes/"+t.morpheme.id},domProps:{innerHTML:e._s(t.morpheme.uniqueName)}})]),e._v(" "),r("td",[e._v(e._s(t.disambiguator))]),e._v(" "),r("td",[e._v(e._s(t.change))]),e._v(" "),r("td",[r("a",{staticClass:"button"},[e.deleting!=t.id?r("span",{staticClass:"icon",attrs:{title:"delete"},on:{click:function(r){e.deleteRow(t,a)}}},[r("i",{staticClass:"fa fa-times"})]):r("span",{staticClass:"icon"},[r("i",{staticClass:"fa fa-spinner fa-pulse fa-3x fa-fw"})])])])])}))]),e._v(" "),r("form",{on:{submit:function(t){t.preventDefault(),e.onSubmit(t)},keydown:function(t){e.form.errors.clear(t.target.name)}}},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-one-third"},[r("label",{staticClass:"label",attrs:{for:"language"}},[e._v("Language")]),e._v(" "),r("alg-datalist",{attrs:{list:e.languages,name:"language",required:"required",disabled:e.loading,classes:{"is-danger":e.form.errors.has("language")},autofocus:"autofocus"},on:{input:e.onLanguageInput},model:{value:e.form.language,callback:function(t){e.$set(e.form,"language",t)},expression:"form.language"}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.form.errors.has("language"),expression:"form.errors.has('language')"}],staticClass:"help is-danger",domProps:{textContent:e._s(e.form.errors.get("language"))}})],1),e._v(" "),r("div",{staticClass:"column is-one-third"},[r("label",{staticClass:"label",attrs:{for:"morpheme"}},[e._v("Morpheme")]),e._v(" "),r("alg-ajaxlist",{attrs:{uri:"/autocomplete/morphemes",with:{language:e.form.language.id},disabled:e.loading||!e.form.language.id,placeholder:"Make sure to select the language first",classes:{"is-danger":e.form.errors.has("morpheme")},required:"required"},model:{value:e.form.morpheme,callback:function(t){e.$set(e.form,"morpheme",t)},expression:"form.morpheme"}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.form.errors.has("morpheme"),expression:"form.errors.has('morpheme')"}],staticClass:"help is-danger",domProps:{textContent:e._s(e.form.errors.get("morpheme"))}})],1),e._v(" "),r("div",{staticClass:"column is-one-third"},[r("label",{staticClass:"label",attrs:{for:"change"}},[e._v("Change")]),e._v(" "),r("p",{staticClass:"control"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.change,expression:"form.change"}],staticClass:"input",class:{"is-danger":e.form.errors.has("change")},attrs:{type:"text",autocomplete:"off",name:"change",required:"required",disabled:e.loading},domProps:{value:e.form.change},on:{input:function(t){t.target.composing||e.$set(e.form,"change",t.target.value)}}})]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.form.errors.has("change"),expression:"form.errors.has('change')"}],staticClass:"help is-danger",domProps:{textContent:e._s(e.form.errors.get("change"))}})])]),e._v(" "),r("button",{staticClass:"button",attrs:{type:"submit",disabled:e.form.errors.any()||e.loading}},[e._v("Submit")]),e._v(" "),r("span",{staticClass:"icon"},[r("i",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-pulse fa-3x fa-fw"})])])])},[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",[e._v("Language")]),e._v(" "),r("th",[e._v("Morpheme")]),e._v(" "),r("th",[e._v("Initial Change #")]),e._v(" "),r("th",[e._v("Initial Change")]),e._v(" "),r("th",[e._v("Remove")])])])}],!1,null,null,null);t.default=u.exports}});