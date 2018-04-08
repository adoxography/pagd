webpackJsonp([87],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Pagination-Limited.vue":
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
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	props: ['pages', 'value', 'alpha'],

	computed: {
		mid: function mid() {
			return Math.max(Math.min(this.value, this.pages - 3), 2);
		}
	},

	methods: {
		onClick: function onClick(newValue) {
			this.$emit('input', newValue);
		},
		printLabel: function printLabel(index) {
			if (this.alpha) {
				return (index + 10).toString(36).toUpperCase();
			} else {
				return index + 1;
			}
		}
	}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-30995d84\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Pagination-Limited.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "pagination" }, [
    _c(
      "a",
      {
        staticClass: "pagination-previous",
        class: { "is-disabled": _vm.value == 0 },
        on: {
          click: function($event) {
            _vm.onClick(_vm.value - 1)
          }
        }
      },
      [_vm._v("\n\t\t\tPrevious\n\t")]
    ),
    _vm._v(" "),
    _c(
      "a",
      {
        staticClass: "pagination-next",
        class: { "is-disabled": _vm.value == _vm.pages - 1 },
        on: {
          click: function($event) {
            _vm.onClick(_vm.value + 1)
          }
        }
      },
      [_vm._v("\n\t\t\tNext\n\t")]
    ),
    _vm._v(" "),
    _c(
      "ul",
      { staticClass: "pagination-list" },
      [
        _c("li", [
          _c(
            "a",
            {
              staticClass: "pagination-link",
              class: { "is-disabled": _vm.value == 0 },
              on: {
                click: function($event) {
                  _vm.onClick(0)
                }
              }
            },
            [_vm._v(_vm._s(_vm.printLabel(0)))]
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
                value: _vm.value > 2 && _vm.pages > 5,
                expression: "value > 2 && pages > 5"
              }
            ]
          },
          [_c("span", { staticClass: "pagination-ellipsis" }, [_vm._v("…")])]
        ),
        _vm._v(" "),
        _vm._l(3, function(n) {
          return _c(
            "li",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.pages > n + 1,
                  expression: "pages > (n + 1)"
                }
              ]
            },
            [
              _c(
                "a",
                {
                  staticClass: "pagination-link",
                  class: { "is-disabled": _vm.value == _vm.mid - 2 + n },
                  on: {
                    click: function($event) {
                      _vm.onClick(_vm.mid - 2 + n)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n\t\t\t\t\t" +
                      _vm._s(_vm.printLabel(_vm.mid - 2 + n)) +
                      "\n\t\t\t"
                  )
                ]
              )
            ]
          )
        }),
        _vm._v(" "),
        _c(
          "li",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.value < _vm.pages - 3 && _vm.pages > 5,
                expression: "value < pages - 3 && pages > 5"
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
                value: _vm.pages > 1,
                expression: "pages > 1"
              }
            ]
          },
          [
            _c(
              "a",
              {
                staticClass: "pagination-link",
                class: { "is-disabled": _vm.value == _vm.pages - 1 },
                on: {
                  click: function($event) {
                    _vm.onClick(_vm.pages - 1)
                  }
                }
              },
              [_vm._v(_vm._s(_vm.printLabel(_vm.pages - 1)))]
            )
          ]
        )
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-30995d84", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "./resources/assets/js/components/Pagination-Limited.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_Pagination_Limited_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Pagination-Limited.vue");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30995d84_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Pagination_Limited_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-30995d84\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Pagination-Limited.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_Pagination_Limited_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30995d84_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Pagination_Limited_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30995d84_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Pagination_Limited_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Pagination-Limited.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30995d84", Component.options)
  } else {
    hotAPI.reload("data-v-30995d84", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});