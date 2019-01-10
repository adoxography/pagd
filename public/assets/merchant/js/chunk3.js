webpackJsonp([3,18],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Allophone.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form__ = __webpack_require__("./resources/assets/js/components/forms/Form.vue");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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


var Row =
/*#__PURE__*/
function () {
  function Row() {
    var allophone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var environment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    _classCallCheck(this, Row);

    this.allophone = allophone;
    this.environment = environment;
  }

  _createClass(Row, [{
    key: "isEmpty",
    value: function isEmpty() {
      return this.allophone.length == 0 && this.environment.length == 0;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.allophone = '';
      this.environment = '';
    }
  }]);

  return Row;
}();

/* harmony default export */ __webpack_exports__["a"] = ({
  extends: __WEBPACK_IMPORTED_MODULE_0__Form__["default"],
  props: ['old'],
  data: function data() {
    return {
      rows: []
    };
  },
  created: function created() {
    var _this = this;

    if (this.old && this.old.length > 0) {
      this.old.forEach(function (row) {
        _this.rows.push(new Row(row.name.replace(/[\[\]\*]/g, ''), row.environment));
      });
    }

    this.rows.push(new Row());
  },
  methods: {
    onInput: function onInput(index) {
      if (index == this.rows.length - 1) {
        this.rows.push(new Row());
      }
    },
    onDelete: function onDelete(index) {
      if (this.rows.length > 1) {
        this.rows.splice(index, 1);
      } else {
        this.rows[0].clear();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Form.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_OldErrors__ = __webpack_require__("./resources/assets/js/mixins/OldErrors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_OldSources__ = __webpack_require__("./resources/assets/js/mixins/OldSources.js");
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
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_OldSources__["a" /* default */]],
  props: ['method', 'action'],
  data: function data() {
    return {
      sources: [],
      csrfToken: Laravel.csrfToken
    };
  },
  methods: {
    validateBeforeSubmit: function validateBeforeSubmit(event) {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this.$children.forEach(function (child) {
            if (child.beforeSubmit) {
              child.beforeSubmit();
            }
          });

          _this.$nextTick(function () {
            return _this.$refs.form.submit();
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Allophone.vue?vue&type=template&id=8411e70e&":
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
    _vm._l(_vm.rows, function(row, n) {
      return _c("div", { staticClass: "field is-grouped" }, [
        _c(
          "p",
          { staticClass: "control" },
          [
            _c("alg-typewriter", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: row.allophone,
                    expression: "row.allophone"
                  }
                ],
                staticClass: "input",
                attrs: {
                  name: "allophones[" + n + "][name]",
                  type: "text",
                  placeholder: "allophone",
                  autocomplete: "off"
                },
                domProps: { value: row.allophone },
                on: {
                  input: [
                    function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(row, "allophone", $event.target.value)
                    },
                    function($event) {
                      _vm.onInput(n)
                    }
                  ]
                }
              })
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("p", { staticClass: "control is-expanded" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: row.environment,
                expression: "row.environment"
              }
            ],
            staticClass: "input",
            attrs: {
              name: "allophones[" + n + "][environment]",
              type: "text",
              placeholder: "environment (leave blank if elsewhere case)",
              autocomplete: "off"
            },
            domProps: { value: row.environment },
            on: {
              input: [
                function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(row, "environment", $event.target.value)
                },
                function($event) {
                  _vm.onInput(n)
                }
              ]
            }
          })
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "control" }, [
          _c(
            "a",
            {
              staticClass: "button is-danger",
              attrs: {
                disabled: _vm.rows.length == 1 && row.isEmpty(),
                tabindex: "-1"
              },
              on: {
                click: function($event) {
                  _vm.onDelete(n)
                }
              }
            },
            [_vm._m(0, true)]
          )
        ])
      ])
    }),
    0
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Form.vue?vue&type=template&id=68350a1b&":
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
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/forms/Allophone.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Allophone_vue_vue_type_template_id_8411e70e___ = __webpack_require__("./resources/assets/js/components/forms/Allophone.vue?vue&type=template&id=8411e70e&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Allophone_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/forms/Allophone.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Allophone_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Allophone_vue_vue_type_template_id_8411e70e___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Allophone_vue_vue_type_template_id_8411e70e___["b" /* staticRenderFns */],
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
      api.createRecord('8411e70e', component.options)
    } else {
      api.reload('8411e70e', component.options)
    }
    module.hot.accept("./Allophone.vue?vue&type=template&id=8411e70e&", function () {
      api.rerender('8411e70e', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/forms/Allophone.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/forms/Allophone.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Allophone_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Allophone.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Allophone_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/forms/Allophone.vue?vue&type=template&id=8411e70e&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Allophone_vue_vue_type_template_id_8411e70e___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Allophone.vue?vue&type=template&id=8411e70e&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Allophone_vue_vue_type_template_id_8411e70e___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Allophone_vue_vue_type_template_id_8411e70e___["b"]; });


/***/ }),

/***/ "./resources/assets/js/components/forms/Form.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form_vue_vue_type_template_id_68350a1b___ = __webpack_require__("./resources/assets/js/components/forms/Form.vue?vue&type=template&id=68350a1b&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/forms/Form.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Form_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Form_vue_vue_type_template_id_68350a1b___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Form_vue_vue_type_template_id_68350a1b___["b" /* staticRenderFns */],
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
      api.createRecord('68350a1b', component.options)
    } else {
      api.reload('68350a1b', component.options)
    }
    module.hot.accept("./Form.vue?vue&type=template&id=68350a1b&", function () {
      api.rerender('68350a1b', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/forms/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

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


/***/ }),

/***/ "./resources/assets/js/mixins/OldErrors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ({
  props: ['oldErrors'],
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
  }
});

/***/ }),

/***/ "./resources/assets/js/mixins/OldSources.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['oldSources'],
  created: function created() {
    var _this = this;

    if (this.oldSources) {
      this.oldSources.forEach(function (source) {
        _this.sources.push({
          short: source.display ? source.display : source.short,
          id: source.id,
          long: source.long,
          extraInfo: source.pivot ? source.pivot.extraInfo : source.extraInfo,
          description: source.pivot ? source.pivot.description : source.description
        });
      });
    }
  }
});

/***/ })

});