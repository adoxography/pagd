webpackJsonp([51],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Basic-Paradigm-Search.vue?vue&type=script&lang=js&":
=======
/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Form.vue?vue&type=script&lang=js&":
>>>>>>> Move gloss rendering into the GlossLine class
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
<<<<<<< HEAD
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
  props: ['languages'],
  data: function data() {
    return {
      values: {
        class: '',
        orders: [],
        language: {
          text: 'Proto-Algonquian',
          id: '1'
        },
        orderValue: ''
      }
    };
  },
  methods: {
    onOrderChange: function onOrderChange(value) {
      var tokens = value.split(',');
      var temp = [];
      tokens.forEach(function (token) {
        temp.push(token);
      });
      this.values.orders = temp;
    },
    getData: function getData() {
      return this.values;
    },
    importData: function importData(data) {
      var _this = this;

      var found = false;

      _.forEach(data.classes, function (theClass) {
        if (theClass.checked && theClass.id <= 4) {
          _this.values.class = theClass.id;
          found = true;
          return false;
        }
      });

      if (!found) {
        this.values.class = '';
      }

      this.values.orders = [];
      this.values.orderValue = '';
      found = false;

      for (var i = 0; i < data.orders.length && !found; i++) {
        found = false;

        if (data.orders[i].checked) {
          if (data.orders[i].id != 1) {
            found = true;
          }

          if (data.orders[i].id != 3 || this.values.orders.length == 0) {
            this.values.orders = [data.orders[i].id];
            this.values.orderValue = data.orders[i].id;
          } else {
            this.values.orders = [1, 3];
            this.values.orderValue = '1,3';
          }
        }
      }

      if (data.languages.length > 0) {
        this.values.language = data.languages[0];
      } else {
        this.values.language = {
          text: '',
          id: ''
        };
      }
=======
/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['method', 'action', 'oldErrors'],
  data: function data() {
    return {
      csrfToken: Laravel.csrfToken
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (this.oldErrors) {
      _.forEach(this.oldErrors, function (errors, field) {
        errors.forEach(function (message) {
          return _this.$root.errors.add({
            field: field,
            msg: message
          });
        });
      });
    }

    ;
  },
  methods: {
    validateBeforeSubmit: function validateBeforeSubmit(event) {
      var _this2 = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this2.$children.forEach(function (child) {
            if (child.beforeSubmit) {
              child.beforeSubmit();
            }
          });

          _this2.$nextTick(function () {
            return _this2.$refs.form.submit();
          });
        }
      });
>>>>>>> Move gloss rendering into the GlossLine class
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Basic-Paradigm-Search.vue?vue&type=template&id=6fdd8f78&":
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Form.vue?vue&type=template&id=68350a1b&":
>>>>>>> Move gloss rendering into the GlossLine class
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
<<<<<<< HEAD
    { attrs: { action: "/verbs/search/paradigm/results", method: "GET" } },
    [
      _c("input", {
        attrs: { type: "hidden", name: "affirmative", value: "on" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "modeSelect", value: "indicativeOnly" }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "field is-grouped" },
        [
          _c("p", { staticClass: "control" }, [
            _c("span", { staticClass: "select" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.values.class,
                      expression: "values.class"
                    }
                  ],
                  attrs: { name: "classes[]", required: "required" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.values,
                        "class",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "1" } }, [_vm._v("AI")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "2" } }, [_vm._v("II")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "3" } }, [_vm._v("TA")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "4" } }, [_vm._v("TI")])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "control" }, [
            _c(
              "span",
              { staticClass: "select" },
              [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.values.orderValue,
                        expression: "values.orderValue"
                      }
                    ],
                    attrs: { required: "required" },
                    on: {
                      change: [
                        function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.values,
                            "orderValue",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        function($event) {
                          _vm.onOrderChange($event.target.value)
                        }
                      ]
                    }
                  },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "1,3" } }, [
                      _vm._v("Conjunct and Independent")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "1" } }, [
                      _vm._v("Conjunct")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "2" } }, [
                      _vm._v("Imperative")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "3" } }, [
                      _vm._v("Independent")
                    ])
                  ]
                ),
                _vm._v(" "),
                _vm._l(_vm.values.orders, function(order) {
                  return _c("input", {
                    attrs: { type: "hidden", name: "orders[]" },
                    domProps: { value: order }
                  })
                })
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c("alg-datalist", {
            attrs: {
              list: _vm.languages,
              name: "languages[]",
              required: "required"
            },
            model: {
              value: _vm.values.language,
              callback: function($$v) {
                _vm.$set(_vm.values, "language", $$v)
              },
              expression: "values.language"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "button is-success", attrs: { type: "submit" } },
        [_vm._v("Search")]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("option", { attrs: { value: "", selected: "selected" } }, [
      _c("span", { staticClass: "placeholder" }, [_vm._v("Select a class...")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("option", { attrs: { value: "", selected: "selected" } }, [
      _c("span", { staticClass: "placeholder" }, [_vm._v("Select an order...")])
    ])
  }
]
=======
    {
      ref: "form",
      attrs: {
        method: _vm.method == "GET" ? _vm.method : "POST",
        action: _vm.action
      },
      on: {
        submit: function($event) {
          $event.preventDefault()
          _vm.validateBeforeSubmit($event)
        }
      }
    },
    [
      _c("input", {
        attrs: { name: "_token", type: "hidden" },
        domProps: { value: _vm.csrfToken }
      }),
      _vm._v(" "),
      _vm.method != "POST" && _vm.method != "GET"
        ? _c("input", {
            attrs: { type: "hidden", name: "_method" },
            domProps: { value: _vm.method }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm._t("default"),
      _vm._v(" "),
      _c("div", { staticClass: "field" }, [
        _c(
          "button",
          {
            staticClass: "button is-primary has-text-grey-dark",
            attrs: { type: "submit", disabled: _vm.errors.any() }
          },
          [_vm._v("Submit")]
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
>>>>>>> Move gloss rendering into the GlossLine class
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/assets/js/components/forms/Basic-Paradigm-Search.vue":
=======
/***/ "./resources/assets/js/components/forms/Form.vue":
>>>>>>> Move gloss rendering into the GlossLine class
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Basic_Paradigm_Search_vue_vue_type_template_id_6fdd8f78___ = __webpack_require__("./resources/assets/js/components/forms/Basic-Paradigm-Search.vue?vue&type=template&id=6fdd8f78&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Basic_Paradigm_Search_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/forms/Basic-Paradigm-Search.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form_vue_vue_type_template_id_68350a1b___ = __webpack_require__("./resources/assets/js/components/forms/Form.vue?vue&type=template&id=68350a1b&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/forms/Form.vue?vue&type=script&lang=js&");
>>>>>>> Move gloss rendering into the GlossLine class
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
<<<<<<< HEAD
  __WEBPACK_IMPORTED_MODULE_1__Basic_Paradigm_Search_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Basic_Paradigm_Search_vue_vue_type_template_id_6fdd8f78___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Basic_Paradigm_Search_vue_vue_type_template_id_6fdd8f78___["b" /* staticRenderFns */],
=======
  __WEBPACK_IMPORTED_MODULE_1__Form_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Form_vue_vue_type_template_id_68350a1b___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Form_vue_vue_type_template_id_68350a1b___["b" /* staticRenderFns */],
>>>>>>> Move gloss rendering into the GlossLine class
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
      api.createRecord('6fdd8f78', component.options)
    } else {
      api.reload('6fdd8f78', component.options)
    }
    module.hot.accept("./Basic-Paradigm-Search.vue?vue&type=template&id=6fdd8f78&", function () {
      api.rerender('6fdd8f78', {
=======
      api.createRecord('68350a1b', component.options)
    } else {
      api.reload('68350a1b', component.options)
    }
    module.hot.accept("./Form.vue?vue&type=template&id=68350a1b&", function () {
      api.rerender('68350a1b', {
>>>>>>> Move gloss rendering into the GlossLine class
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
<<<<<<< HEAD
component.options.__file = "resources/assets/js/components/forms/Basic-Paradigm-Search.vue"
=======
component.options.__file = "resources/assets/js/components/forms/Form.vue"
>>>>>>> Move gloss rendering into the GlossLine class
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/assets/js/components/forms/Basic-Paradigm-Search.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Basic_Paradigm_Search_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Basic-Paradigm-Search.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Basic_Paradigm_Search_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/forms/Basic-Paradigm-Search.vue?vue&type=template&id=6fdd8f78&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Basic_Paradigm_Search_vue_vue_type_template_id_6fdd8f78___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Basic-Paradigm-Search.vue?vue&type=template&id=6fdd8f78&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Basic_Paradigm_Search_vue_vue_type_template_id_6fdd8f78___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Basic_Paradigm_Search_vue_vue_type_template_id_6fdd8f78___["b"]; });
=======
/***/ "./resources/assets/js/components/forms/Form.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Form.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/forms/Form.vue?vue&type=template&id=68350a1b&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_68350a1b___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Form.vue?vue&type=template&id=68350a1b&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_68350a1b___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_68350a1b___["b"]; });
>>>>>>> Move gloss rendering into the GlossLine class


/***/ })

});