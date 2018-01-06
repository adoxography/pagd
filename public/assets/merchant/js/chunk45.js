webpackJsonp([45],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Phoneme-Examples.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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



/* harmony default export */ __webpack_exports__["default"] = ({
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-bda815f2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Phoneme-Examples.vue":
/***/ (function(module, exports, __webpack_require__) {

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
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-bda815f2", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/Phoneme-Examples.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Phoneme-Examples.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-bda815f2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Phoneme-Examples.vue")
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
Component.options.__file = "resources/assets/js/components/Phoneme-Examples.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bda815f2", Component.options)
  } else {
    hotAPI.reload("data-v-bda815f2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});