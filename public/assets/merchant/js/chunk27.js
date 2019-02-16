webpackJsonp([27],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Morpheme-Alert.vue?vue&type=script&lang=js&":
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
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    'title': {},
    'display': {
      default: 'block'
    }
  },
  data: function data() {
    return {
      showModal: false
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Morpheme-Alert.vue?vue&type=template&id=19aeffca&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { style: { display: _vm.display } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.showModal,
            expression: "showModal"
          }
        ],
        staticClass: "alg-morpheme-alert",
        on: {
          mouseleave: function($event) {
            _vm.showModal = false
          }
        }
      },
      [
        _c("article", { staticClass: "message is-primary" }, [
          _c("div", { staticClass: "message-header" }, [
            _c("p", [_vm._v(_vm._s(_vm.title))])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "message-body" }, [_vm._t("default")], 2)
        ])
      ]
    ),
    _vm._v(" "),
    _c("a", { staticClass: "icon is-danger" }, [
      _c(
        "span",
        {
          staticClass: "icon is-small",
          on: {
            mouseover: function($event) {
              _vm.showModal = true
            }
          }
        },
        [_c("i", { staticClass: "fa fa-exclamation-triangle" })]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/Morpheme-Alert.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Morpheme_Alert_vue_vue_type_template_id_19aeffca___ = __webpack_require__("./resources/assets/js/components/Morpheme-Alert.vue?vue&type=template&id=19aeffca&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Morpheme_Alert_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Morpheme-Alert.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Morpheme_Alert_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Morpheme_Alert_vue_vue_type_template_id_19aeffca___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Morpheme_Alert_vue_vue_type_template_id_19aeffca___["b" /* staticRenderFns */],
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
      api.createRecord('19aeffca', component.options)
    } else {
      api.reload('19aeffca', component.options)
    }
    module.hot.accept("./Morpheme-Alert.vue?vue&type=template&id=19aeffca&", function () {
      api.rerender('19aeffca', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/Morpheme-Alert.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Morpheme-Alert.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Morpheme_Alert_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Morpheme-Alert.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Morpheme_Alert_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Morpheme-Alert.vue?vue&type=template&id=19aeffca&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Morpheme_Alert_vue_vue_type_template_id_19aeffca___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Morpheme-Alert.vue?vue&type=template&id=19aeffca&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Morpheme_Alert_vue_vue_type_template_id_19aeffca___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Morpheme_Alert_vue_vue_type_template_id_19aeffca___["b"]; });


/***/ })

});