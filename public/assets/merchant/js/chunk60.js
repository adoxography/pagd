<<<<<<< HEAD
<<<<<<< HEAD:public/assets/merchant/js/chunk60.js
<<<<<<< HEAD:public/assets/merchant/js/chunk60.js
webpackJsonp([60,72],{
=======
webpackJsonp([7,18],{
>>>>>>> Adapt async autocomplete into Buefy component:public/assets/merchant/js/chunk7.js
=======
webpackJsonp([7],{
>>>>>>> Remove unneeded components:public/assets/merchant/js/chunk7.js

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Radio-Toggle.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Datalist_js__ = __webpack_require__("./resources/assets/js/Datalist.js");
//
//
//
=======
webpackJsonp([60],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Morpheme-Alert.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
>>>>>>> Update sources component
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
<<<<<<< HEAD

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
=======
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['title'],
  data: function data() {
    return {
      showModal: false
    };
>>>>>>> Update sources component
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Radio-Toggle.vue?vue&type=template&id=59a77c3d&":
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Morpheme-Alert.vue?vue&type=template&id=19aeffca&":
>>>>>>> Update sources component
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
<<<<<<< HEAD
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
=======
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
>>>>>>> Update sources component
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
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
=======
/***/ "./resources/assets/js/components/Morpheme-Alert.vue":
>>>>>>> Update sources component
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Radio_Toggle_vue_vue_type_template_id_59a77c3d___ = __webpack_require__("./resources/assets/js/components/Radio-Toggle.vue?vue&type=template&id=59a77c3d&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Radio_Toggle_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Radio-Toggle.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Morpheme_Alert_vue_vue_type_template_id_19aeffca___ = __webpack_require__("./resources/assets/js/components/Morpheme-Alert.vue?vue&type=template&id=19aeffca&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Morpheme_Alert_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Morpheme-Alert.vue?vue&type=script&lang=js&");
>>>>>>> Update sources component
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
<<<<<<< HEAD
  __WEBPACK_IMPORTED_MODULE_1__Radio_Toggle_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Radio_Toggle_vue_vue_type_template_id_59a77c3d___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Radio_Toggle_vue_vue_type_template_id_59a77c3d___["b" /* staticRenderFns */],
=======
  __WEBPACK_IMPORTED_MODULE_1__Morpheme_Alert_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Morpheme_Alert_vue_vue_type_template_id_19aeffca___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Morpheme_Alert_vue_vue_type_template_id_19aeffca___["b" /* staticRenderFns */],
>>>>>>> Update sources component
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
<<<<<<< HEAD
      api.createRecord('59a77c3d', component.options)
    } else {
      api.reload('59a77c3d', component.options)
    }
    module.hot.accept("./Radio-Toggle.vue?vue&type=template&id=59a77c3d&", function () {
      api.rerender('59a77c3d', {
=======
      api.createRecord('19aeffca', component.options)
    } else {
      api.reload('19aeffca', component.options)
    }
    module.hot.accept("./Morpheme-Alert.vue?vue&type=template&id=19aeffca&", function () {
      api.rerender('19aeffca', {
>>>>>>> Update sources component
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
<<<<<<< HEAD
component.options.__file = "resources/assets/js/components/Radio-Toggle.vue"
=======
component.options.__file = "resources/assets/js/components/Morpheme-Alert.vue"
>>>>>>> Update sources component
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
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
=======
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
>>>>>>> Update sources component


/***/ })

});