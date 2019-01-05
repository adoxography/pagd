webpackJsonp([96],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Filter-List.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	props: ['list', 'filteroptions'],

	data: function data() {
		return {
			parsedList: [],
			parsedFilterOptions: [],
			filteredList: [],
			selected: ''
		};
	},
	created: function created() {
		this.parsedList = JSON.parse(this.list);
		this.parsedFilterOptions = JSON.parse(this.filteroptions);

		this.filteredList = this.parsedList;
	},


	methods: {
		filter: function filter() {
			var _this = this;

			// console.log(this.$refs.pages);
			this.$refs.pages.selected = 0;

			if (this.selected == '') {
				this.filteredList = this.parsedList;
			} else {
				this.filteredList = [];

				this.parsedList.forEach(function (item) {
					if (item.slot_id == _this.selected) {
						_this.filteredList.push(item);
					}
				});
			}
		}
	}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Filter-List.vue?vue&type=template&id=04b3280c&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "alg-filter-list" },
    [
      _c("div", { staticClass: "control is-horizontal" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "control" }, [
          _c("span", { staticClass: "select is-fullwidth" }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.selected,
                    expression: "selected"
                  }
                ],
                on: {
                  change: [
                    function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.selected = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    },
                    _vm.filter
                  ]
                }
              },
              [
                _c("option", { attrs: { value: "" } }, [_vm._v("All")]),
                _vm._v(" "),
                _vm._l(_vm.parsedFilterOptions, function(option) {
                  return _c("option", { domProps: { value: option.id } }, [
                    _vm._v(_vm._s(option.abv))
                  ])
                })
              ],
              2
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("alg-paginated-list", {
        ref: "pages",
        attrs: { list: _vm.filteredList }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "control-label" }, [
      _c("label", { staticClass: "label" }, [_vm._v("Slot")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/Filter-List.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Filter_List_vue_vue_type_template_id_04b3280c___ = __webpack_require__("./resources/assets/js/components/Filter-List.vue?vue&type=template&id=04b3280c&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Filter_List_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Filter-List.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Filter_List_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Filter_List_vue_vue_type_template_id_04b3280c___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Filter_List_vue_vue_type_template_id_04b3280c___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/etc/httpd/docs/alglang.localhost/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('04b3280c', component.options)
    } else {
      api.reload('04b3280c', component.options)
    }
    module.hot.accept("./Filter-List.vue?vue&type=template&id=04b3280c&", function () {
      api.rerender('04b3280c', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/Filter-List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Filter-List.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_List_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Filter-List.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_List_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Filter-List.vue?vue&type=template&id=04b3280c&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_List_vue_vue_type_template_id_04b3280c___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Filter-List.vue?vue&type=template&id=04b3280c&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_List_vue_vue_type_template_id_04b3280c___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_List_vue_vue_type_template_id_04b3280c___["b"]; });


/***/ })

});