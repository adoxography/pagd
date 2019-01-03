webpackJsonp([36],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Paginated-List.vue?vue&type=script&lang=js&":
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
	props: ['list'],

	data: function data() {
		return {
			selected: 0
		};
	},


	computed: {
		pages: function pages() {
			var pages = [];

			for (var i = 0; i < this.list.length; i += 10) {
				pages.push(this.list.slice(i, i + 10));
			}

			return pages;
		},
		mid: function mid() {
			return Math.max(Math.min(this.selected, this.pages.length - 3), 2);
			// return Math.min(Math.max(this.selected, 2), this.pages.length - 3);
		}
	},

	methods: {
		previousPage: function previousPage() {
			if (this.selected > 0) {
				this.selected--;
			}
		},
		nextPage: function nextPage() {
			if (this.selected < this.pages.length - 1) {
				this.selected++;
			}
		}
	}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Paginated-List.vue?vue&type=template&id=37e882b5&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "alg-paginated-list box" }, [
    _c("nav", { staticClass: "pagination" }, [
      _c(
        "a",
        {
          staticClass: "pagination-previous",
          class: { "is-disabled": _vm.selected <= 0 },
          on: { click: _vm.previousPage }
        },
        [_vm._v("Previous")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "pagination-next",
          class: { "is-disabled": _vm.selected >= _vm.pages.length - 1 },
          on: { click: _vm.nextPage }
        },
        [_vm._v("Next")]
      ),
      _vm._v(" "),
      _c("ul", { staticClass: "pagination-list" }, [
        _c("li", [
          _c(
            "a",
            {
              staticClass: "pagination-link",
              class: { "is-disabled": _vm.selected == 0 },
              on: {
                click: function($event) {
                  _vm.selected = 0
                }
              }
            },
            [_vm._v("1")]
          )
        ]),
        _vm._v(" "),
        _c(
          "li",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.selected > 2 && _vm.pages.length > 5,
                expression: "selected > 2 && pages.length > 5"
              }
            ]
          },
          [_c("span", { staticClass: "pagination-ellipsis" }, [_vm._v("…")])]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.pages.length > 2,
                expression: "pages.length > 2"
              }
            ]
          },
          [
            _c(
              "a",
              {
                staticClass: "pagination-link",
                class: { "is-disabled": _vm.selected == _vm.mid - 1 },
                on: {
                  click: function($event) {
                    _vm.selected = _vm.mid - 1
                  }
                }
              },
              [_vm._v(_vm._s(_vm.mid))]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.pages.length > 3,
                expression: "pages.length > 3"
              }
            ]
          },
          [
            _c(
              "a",
              {
                staticClass: "pagination-link",
                class: { "is-disabled": _vm.selected == _vm.mid },
                on: {
                  click: function($event) {
                    _vm.selected = _vm.mid
                  }
                }
              },
              [_vm._v(_vm._s(_vm.mid + 1))]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.pages.length > 4,
                expression: "pages.length > 4"
              }
            ]
          },
          [
            _c(
              "a",
              {
                staticClass: "pagination-link",
                class: { "is-disabled": _vm.selected == _vm.mid + 1 },
                on: {
                  click: function($event) {
                    _vm.selected = _vm.mid + 1
                  }
                }
              },
              [_vm._v(_vm._s(_vm.mid + 2))]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value:
                  _vm.selected < _vm.pages.length - 3 && _vm.pages.length > 5,
                expression: "selected < pages.length - 3 && pages.length > 5"
              }
            ]
          },
          [_c("span", { staticClass: "pagination-ellipsis" }, [_vm._v("…")])]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.pages.length > 1,
                expression: "pages.length > 1"
              }
            ]
          },
          [
            _c(
              "a",
              {
                staticClass: "pagination-link",
                class: { "is-disabled": _vm.selected == _vm.pages.length - 1 },
                on: {
                  click: function($event) {
                    _vm.selected = _vm.pages.length - 1
                  }
                }
              },
              [_vm._v(_vm._s(_vm.pages.length))]
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "content" },
      _vm._l(_vm.pages, function(page, index) {
        return _c(
          "ul",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.selected == index,
                expression: "selected == index"
              }
            ]
          },
          _vm._l(page, function(item) {
            return _c("li", [
              _c("a", { attrs: { href: "/morphemes/" + item.id } }, [
                _vm._v(_vm._s(item.name)),
                item.hasDuplicates
                  ? _c("sup", [_vm._v(_vm._s(item.disambiguator))])
                  : _vm._e(),
                _vm._v(" ("),
                _c("span", { staticClass: "gloss" }, [
                  _vm._v(_vm._s(item.gloss))
                ]),
                _vm._v(")")
              ])
            ])
          })
        )
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/Paginated-List.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Paginated_List_vue_vue_type_template_id_37e882b5___ = __webpack_require__("./resources/assets/js/components/Paginated-List.vue?vue&type=template&id=37e882b5&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Paginated_List_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Paginated-List.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Paginated_List_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Paginated_List_vue_vue_type_template_id_37e882b5___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Paginated_List_vue_vue_type_template_id_37e882b5___["b" /* staticRenderFns */],
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
      api.createRecord('37e882b5', component.options)
    } else {
      api.reload('37e882b5', component.options)
    }
    module.hot.accept("./Paginated-List.vue?vue&type=template&id=37e882b5&", function () {
      api.rerender('37e882b5', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/Paginated-List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Paginated-List.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginated_List_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Paginated-List.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginated_List_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Paginated-List.vue?vue&type=template&id=37e882b5&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginated_List_vue_vue_type_template_id_37e882b5___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Paginated-List.vue?vue&type=template&id=37e882b5&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginated_List_vue_vue_type_template_id_37e882b5___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginated_List_vue_vue_type_template_id_37e882b5___["b"]; });


/***/ })

});