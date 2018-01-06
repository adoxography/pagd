webpackJsonp([39],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Pagination-Limited.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-30995d84\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Pagination-Limited.vue":
/***/ (function(module, exports, __webpack_require__) {

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
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-30995d84", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/Pagination-Limited.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Pagination-Limited.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-30995d84\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Pagination-Limited.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
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

module.exports = Component.exports


/***/ })

});