webpackJsonp([40],{Sgal:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("DAYN"),a={props:["list"],components:{draggable:r.n(n).a},data:function(){return{listArray:[]}},methods:{renderName:function(t){var e=t.name;return"App\\Group"==t.type&&(e+=" languages"),e}},created:function(){this.listArray=_.sortBy(this.list,function(t){return t.position})}},s=r("K1/g"),i=Object(s.a)(a,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order-languages"},[r("draggable",{model:{value:t.listArray,callback:function(e){t.listArray=e},expression:"listArray"}},t._l(t.listArray,function(e,n){return r("div",[r("div",{staticStyle:{border:"1px solid black","border-radius":"1rem","margin-bottom":"1rem",padding:".5rem",cursor:"move"},attrs:{id:e.name}},[r("p",{class:{"is-danger":e.position<0&&t.listArray.length>1}},[t._v("\n\t\t\t\t\t"+t._s(t.renderName(e))+"\n\t\t\t\t")]),t._v(" "),r("input",{attrs:{type:"hidden",name:"ids[]"},domProps:{value:e.id}}),t._v(" "),r("input",{attrs:{type:"hidden",name:"types[]"},domProps:{value:e.type}}),t._v(" "),r("input",{attrs:{type:"hidden",name:"positions[]"},domProps:{value:n}})])])}))],1)},[],!1,null,null,null);i.options.__file="Order.vue";e.default=i.exports}});