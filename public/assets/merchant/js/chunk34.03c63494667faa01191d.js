webpackJsonp([34],{"3uqh":function(a,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={props:["pages","value","alpha"],computed:{mid:function(){return Math.max(Math.min(this.value,this.pages-3),2)}},methods:{onClick:function(a){this.$emit("input",a)},printLabel:function(a){return this.alpha?(a+10).toString(36).toUpperCase():a+1}}},t=i("XyMi"),n=Object(t.a)(e,function(){var a=this,s=a.$createElement,i=a._self._c||s;return i("nav",{staticClass:"pagination"},[i("a",{staticClass:"pagination-previous",class:{"is-disabled":0==a.value},on:{click:function(s){a.onClick(a.value-1)}}},[a._v("\n\t\t\tPrevious\n\t")]),a._v(" "),i("a",{staticClass:"pagination-next",class:{"is-disabled":a.value==a.pages-1},on:{click:function(s){a.onClick(a.value+1)}}},[a._v("\n\t\t\tNext\n\t")]),a._v(" "),i("ul",{staticClass:"pagination-list"},[i("li",[i("a",{staticClass:"pagination-link",class:{"is-disabled":0==a.value},on:{click:function(s){a.onClick(0)}}},[a._v(a._s(a.printLabel(0)))])]),a._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:a.value>2&&a.pages>5,expression:"value > 2 && pages > 5"}]},[i("span",{staticClass:"pagination-ellipsis"},[a._v("…")])]),a._v(" "),a._l(3,function(s){return i("li",{directives:[{name:"show",rawName:"v-show",value:a.pages>s+1,expression:"pages > (n + 1)"}]},[i("a",{staticClass:"pagination-link",class:{"is-disabled":a.value==a.mid-2+s},on:{click:function(i){a.onClick(a.mid-2+s)}}},[a._v("\n\t\t\t\t\t"+a._s(a.printLabel(a.mid-2+s))+"\n\t\t\t")])])}),a._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:a.value<a.pages-3&&a.pages>5,expression:"value < pages - 3 && pages > 5"}]},[i("span",{staticClass:"pagination-ellipsis"},[a._v("…")])]),a._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:a.pages>1,expression:"pages > 1"}]},[i("a",{staticClass:"pagination-link",class:{"is-disabled":a.value==a.pages-1},on:{click:function(s){a.onClick(a.pages-1)}}},[a._v(a._s(a.printLabel(a.pages-1)))])])],2)])},[],!1,null,null,null);s.default=n.exports}});