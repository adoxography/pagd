webpackJsonp([24],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Pagination-Limited.vue?vue&type=script&lang=js&":
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Pagination-Limited.vue?vue&type=template&id=30995d84&":
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



/***/ }),

/***/ "./resources/assets/js/components/Pagination-Limited.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Pagination_Limited_vue_vue_type_template_id_30995d84___ = __webpack_require__("./resources/assets/js/components/Pagination-Limited.vue?vue&type=template&id=30995d84&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Pagination_Limited_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Pagination-Limited.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Pagination_Limited_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Pagination_Limited_vue_vue_type_template_id_30995d84___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Pagination_Limited_vue_vue_type_template_id_30995d84___["b" /* staticRenderFns */],
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
      api.createRecord('30995d84', component.options)
    } else {
      api.reload('30995d84', component.options)
    }
    module.hot.accept("./Pagination-Limited.vue?vue&type=template&id=30995d84&", function () {
      api.rerender('30995d84', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/Pagination-Limited.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Pagination-Limited.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_Limited_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Pagination-Limited.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_Limited_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Pagination-Limited.vue?vue&type=template&id=30995d84&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_Limited_vue_vue_type_template_id_30995d84___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Pagination-Limited.vue?vue&type=template&id=30995d84&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_Limited_vue_vue_type_template_id_30995d84___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_Limited_vue_vue_type_template_id_30995d84___["b"]; });


/***/ })

});