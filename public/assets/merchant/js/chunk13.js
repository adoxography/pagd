webpackJsonp([13],{

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
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Phoneme-Examples.vue?vue&type=template&id=bda815f2&":
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
                  return _vm.onUpdateLookup($event)
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
                        return _vm.onDelete(index)
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Phoneme_Examples_vue_vue_type_template_id_bda815f2___ = __webpack_require__("./resources/assets/js/components/Phoneme-Examples.vue?vue&type=template&id=bda815f2&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Phoneme_Examples_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Phoneme-Examples.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Phoneme_Examples_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Phoneme_Examples_vue_vue_type_template_id_bda815f2___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Phoneme_Examples_vue_vue_type_template_id_bda815f2___["b" /* staticRenderFns */],
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
      api.createRecord('bda815f2', component.options)
    } else {
      api.reload('bda815f2', component.options)
    }
    module.hot.accept("./Phoneme-Examples.vue?vue&type=template&id=bda815f2&", function () {
      api.rerender('bda815f2', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/Phoneme-Examples.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

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


/***/ })

});