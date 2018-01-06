webpackJsonp([40],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Pagination-Full.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
	props: ['pages', 'value', 'alpha', 'labels'],

	methods: {
		onClick: function onClick(newValue) {
			this.$emit('input', newValue);
		},
		printLabel: function printLabel(index) {
			if (this.labels) {
				return this.labels[index];
			} else if (this.alpha) {
				return (index + 10).toString(36).toUpperCase();
			} else {
				return index + 1;
			}
		}
	}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f07829ca\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Pagination-Full.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "alg-pagination-full" }, [
    _c(
      "a",
      {
        staticClass: "pagination-previous",
        attrs: { disabled: _vm.value == 0 },
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
        attrs: { disabled: _vm.value == _vm.pages - 1 },
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
      _vm._l(_vm.pages, function(n) {
        return _c("li", [
          _c(
            "a",
            {
              staticClass: "pagination-link",
              attrs: { disabled: _vm.value == n - 1 },
              on: {
                click: function($event) {
                  _vm.onClick(n - 1)
                }
              }
            },
            [_vm._v(_vm._s(_vm.printLabel(n - 1)))]
          )
        ])
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f07829ca", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/Pagination-Full.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Pagination-Full.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f07829ca\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Pagination-Full.vue")
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
Component.options.__file = "resources/assets/js/components/Pagination-Full.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f07829ca", Component.options)
  } else {
    hotAPI.reload("data-v-f07829ca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});