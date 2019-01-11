<<<<<<< HEAD
<<<<<<< HEAD:public/assets/merchant/js/chunk61.js
<<<<<<< HEAD:public/assets/merchant/js/chunk61.js
webpackJsonp([61,72],{
=======
webpackJsonp([8,18],{
>>>>>>> Adapt async autocomplete into Buefy component:public/assets/merchant/js/chunk8.js
=======
webpackJsonp([8],{
>>>>>>> Remove unneeded components:public/assets/merchant/js/chunk8.js

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Phoneme-Examples.vue?vue&type=script&lang=js&":
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
=======
webpackJsonp([61],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Modal.vue?vue&type=script&lang=js&":
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
  props: ['language', 'old'],
  data: function data() {
    return {
      lookup: new __WEBPACK_IMPORTED_MODULE_0__Datalist_js__["a" /* Datalist */](),
      examples: []
    };
  },
  computed: {
    autocompleteData: function autocompleteData() {
      return {
        language: this.language ? this.language.id : null
      };
    }
  },
  methods: {
    onUpdateLookup: function onUpdateLookup(example) {
      if (example.text && this.$refs.lookup.showCheck) {
        this.examples.push({
          name: example.text,
          id: example.id,
          comment: ''
        });
        this.$refs.lookup.reset();
      }
    },
    onDelete: function onDelete(index) {
      this.examples.splice(index, 1);
    }
  },
  created: function created() {
    var _this = this;

    if (this.old) {
      this.old.forEach(function (example) {
        _this.examples.push({
          name: example.name,
          id: example.id,
          comments: example.pivot.comments
        });
=======
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
    title: {
      default: ""
    },
    content: {
      default: ""
    },
    footer: {
      default: ""
    }
  },
  data: function data() {
    return {
      active: false
    };
  },
  methods: {
    open: function open() {
      this.active = true;
    },
    close: function close() {
      this.active = false;
    },
    onClickOutside: function onClickOutside() {
      var _this = this;

      Vue.nextTick(function () {
        if (_this.active) {
          _this.close();
        }
>>>>>>> Update sources component
      });
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Phoneme-Examples.vue?vue&type=template&id=bda815f2&":
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Modal.vue?vue&type=template&id=6e8d36f4&":
>>>>>>> Update sources component
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
<<<<<<< HEAD
    [
      _c("div", { staticClass: "field" }, [
        _c(
          "span",
          { staticClass: "control" },
          [
            _c("alg-ajaxlist", {
              ref: "lookup",
              attrs: {
                uri: "/autocomplete/examples",
                with: _vm.autocompleteData
              },
              on: {
                input: function($event) {
                  _vm.onUpdateLookup($event)
                }
              },
              model: {
                value: _vm.lookup,
                callback: function($$v) {
                  _vm.lookup = $$v
                },
                expression: "lookup"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm._l(_vm.examples, function(example, index) {
        return _c("div", { staticClass: "field is-horizontal" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: example.id,
                expression: "example.id"
              }
            ],
            attrs: { type: "hidden", name: "examples[" + index + "][id]" },
            domProps: { value: example.id },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(example, "id", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "field-label is-normal" }, [
            _c("label", { staticClass: "label" }, [
              _vm._v(_vm._s(example.name))
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "field-body" }, [
            _c("div", { staticClass: "field is-grouped" }, [
              _c("p", { staticClass: "control is-expanded" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: example.comments,
                      expression: "example.comments"
                    }
                  ],
                  staticClass: "input",
                  attrs: {
                    type: "text",
                    placeholder: "Comments",
                    name: "examples[" + index + "][comments]"
                  },
                  domProps: { value: example.comments },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(example, "comments", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "control" }, [
                _c(
                  "a",
                  {
                    staticClass: "button is-danger",
                    on: {
                      click: function($event) {
                        _vm.onDelete(index)
                      }
                    }
                  },
                  [_vm._m(0, true)]
                )
              ])
            ])
          ])
        ])
      })
    ],
    2
=======
    { staticClass: "modal", class: { "is-active": _vm.active } },
    [
      _c("div", { staticClass: "modal-background", on: { click: _vm.close } }),
      _vm._v(" "),
      _c("div", { staticClass: "modal-card" }, [
        _c("header", { staticClass: "modal-card-head" }, [
          _c(
            "p",
            { staticClass: "modal-card-title" },
            [
              _vm._t("title", [
                _c("div", { domProps: { innerHTML: _vm._s(_vm.title) } })
              ])
            ],
            2
          ),
          _vm._v(" "),
          _c("button", { staticClass: "delete", on: { click: _vm.close } })
        ]),
        _vm._v(" "),
        _c(
          "section",
          { staticClass: "modal-card-body" },
          [
            _vm._t("default", [
              _c("div", { domProps: { innerHTML: _vm._s(_vm.content) } })
            ])
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "footer",
          { staticClass: "modal-card-foot" },
          [
            _vm._t("footer", [
              _c("div", { domProps: { innerHTML: _vm._s(_vm.footer) } })
            ])
          ],
          2
        )
      ])
    ]
>>>>>>> Update sources component
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-times" })
    ])
  }
]
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

/***/ "./resources/assets/js/components/Phoneme-Examples.vue":
=======
/***/ "./resources/assets/js/components/Modal.vue":
>>>>>>> Update sources component
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Phoneme_Examples_vue_vue_type_template_id_bda815f2___ = __webpack_require__("./resources/assets/js/components/Phoneme-Examples.vue?vue&type=template&id=bda815f2&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Phoneme_Examples_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Phoneme-Examples.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modal_vue_vue_type_template_id_6e8d36f4___ = __webpack_require__("./resources/assets/js/components/Modal.vue?vue&type=template&id=6e8d36f4&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Modal_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Modal.vue?vue&type=script&lang=js&");
>>>>>>> Update sources component
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
<<<<<<< HEAD
  __WEBPACK_IMPORTED_MODULE_1__Phoneme_Examples_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Phoneme_Examples_vue_vue_type_template_id_bda815f2___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Phoneme_Examples_vue_vue_type_template_id_bda815f2___["b" /* staticRenderFns */],
=======
  __WEBPACK_IMPORTED_MODULE_1__Modal_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Modal_vue_vue_type_template_id_6e8d36f4___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Modal_vue_vue_type_template_id_6e8d36f4___["b" /* staticRenderFns */],
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
      api.createRecord('bda815f2', component.options)
    } else {
      api.reload('bda815f2', component.options)
    }
    module.hot.accept("./Phoneme-Examples.vue?vue&type=template&id=bda815f2&", function () {
      api.rerender('bda815f2', {
=======
      api.createRecord('6e8d36f4', component.options)
    } else {
      api.reload('6e8d36f4', component.options)
    }
    module.hot.accept("./Modal.vue?vue&type=template&id=6e8d36f4&", function () {
      api.rerender('6e8d36f4', {
>>>>>>> Update sources component
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
<<<<<<< HEAD
component.options.__file = "resources/assets/js/components/Phoneme-Examples.vue"
=======
component.options.__file = "resources/assets/js/components/Modal.vue"
>>>>>>> Update sources component
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/assets/js/components/Phoneme-Examples.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Phoneme_Examples_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Phoneme-Examples.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Phoneme_Examples_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Phoneme-Examples.vue?vue&type=template&id=bda815f2&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Phoneme_Examples_vue_vue_type_template_id_bda815f2___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Phoneme-Examples.vue?vue&type=template&id=bda815f2&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Phoneme_Examples_vue_vue_type_template_id_bda815f2___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Phoneme_Examples_vue_vue_type_template_id_bda815f2___["b"]; });
=======
/***/ "./resources/assets/js/components/Modal.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Modal.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Modal.vue?vue&type=template&id=6e8d36f4&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_6e8d36f4___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Modal.vue?vue&type=template&id=6e8d36f4&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_6e8d36f4___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_6e8d36f4___["b"]; });
>>>>>>> Update sources component


/***/ })

});