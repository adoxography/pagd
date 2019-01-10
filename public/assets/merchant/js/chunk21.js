webpackJsonp([21],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Radio-Toggle.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Datalist_js__ = __webpack_require__("./resources/assets/js/Datalist.js");
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
  props: ['languages', 'oldLanguages'],
  data: function data() {
    return {
      disabled: true,
      selections: [new __WEBPACK_IMPORTED_MODULE_0__Datalist_js__["a" /* Datalist */]()]
    };
  },
  created: function created() {
    if (this.oldLanguages) {
      var languages = [];

      for (var i = 0; i < this.oldLanguages.length; i += 2) {
        languages.push(new __WEBPACK_IMPORTED_MODULE_0__Datalist_js__["a" /* Datalist */](this.oldLanguages[i], this.oldLanguages[i + 1]));
      }

      this.disabled = false;
      this.selections = languages;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Radio-Toggle.vue?vue&type=template&id=59a77c3d&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("p", { staticClass: "control" }, [
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.disabled,
              expression: "disabled"
            }
          ],
          staticClass: "radio",
          attrs: { name: "searchAll", type: "radio" },
          domProps: { value: true, checked: _vm._q(_vm.disabled, true) },
          on: {
            change: function($event) {
              _vm.disabled = true
            }
          }
        }),
        _vm._v("\n\t\t\tAll languages\n\t\t")
      ])
    ]),
    _vm._v(" "),
    _c("p", { staticClass: "control" }, [
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.disabled,
              expression: "disabled"
            }
          ],
          staticClass: "radio",
          attrs: { name: "searchAll", type: "radio" },
          domProps: { value: false, checked: _vm._q(_vm.disabled, false) },
          on: {
            change: function($event) {
              _vm.disabled = false
            }
          }
        }),
        _vm._v("\n\t\t\tThe following languages...\n\t\t")
      ])
    ]),
    _c(
      "div",
      { staticClass: "box" },
      [
        _c("alg-multi-datalist", {
          attrs: {
            list: _vm.languages,
            name: "languages[]",
            disabled: _vm.disabled
          },
          model: {
            value: _vm.selections,
            callback: function($$v) {
              _vm.selections = $$v
            },
            expression: "selections"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("p")
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/Datalist.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Datalist; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Datalist =
/*#__PURE__*/
function () {
  function Datalist() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var extra = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

    _classCallCheck(this, Datalist);

    this.text = text;
    this.id = id;
    this.extra = extra;
  }

  _createClass(Datalist, [{
    key: "reset",
    value: function reset() {
      this.text = "";
      this.id = "";
      this.extra = "";
    }
  }]);

  return Datalist;
}();



/***/ }),

/***/ "./resources/assets/js/components/Radio-Toggle.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Radio_Toggle_vue_vue_type_template_id_59a77c3d___ = __webpack_require__("./resources/assets/js/components/Radio-Toggle.vue?vue&type=template&id=59a77c3d&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Radio_Toggle_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Radio-Toggle.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Radio_Toggle_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Radio_Toggle_vue_vue_type_template_id_59a77c3d___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Radio_Toggle_vue_vue_type_template_id_59a77c3d___["b" /* staticRenderFns */],
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
      api.createRecord('59a77c3d', component.options)
    } else {
      api.reload('59a77c3d', component.options)
    }
    module.hot.accept("./Radio-Toggle.vue?vue&type=template&id=59a77c3d&", function () {
      api.rerender('59a77c3d', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/Radio-Toggle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Radio-Toggle.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Radio_Toggle_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Radio-Toggle.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Radio_Toggle_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Radio-Toggle.vue?vue&type=template&id=59a77c3d&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Radio_Toggle_vue_vue_type_template_id_59a77c3d___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Radio-Toggle.vue?vue&type=template&id=59a77c3d&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Radio_Toggle_vue_vue_type_template_id_59a77c3d___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Radio_Toggle_vue_vue_type_template_id_59a77c3d___["b"]; });


/***/ })

});