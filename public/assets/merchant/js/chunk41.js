webpackJsonp([41],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Paginated-List.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-37e882b5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Paginated-List.vue":
/***/ (function(module, exports, __webpack_require__) {

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
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-37e882b5", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/Paginated-List.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Paginated-List.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-37e882b5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Paginated-List.vue")
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
Component.options.__file = "resources/assets/js/components/Paginated-List.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37e882b5", Component.options)
  } else {
    hotAPI.reload("data-v-37e882b5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});