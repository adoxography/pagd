webpackJsonp([19],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Sandbox.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Filter = function Filter(label, options) {
  _classCallCheck(this, Filter);

  this.label = label;
  this.value = -1;
  this.options = options;
};

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    'language': {
      default: 0
    },
    'languages': {
      default: null
    },
    'filterData': {},
    'perPage': {
      default: 20
    }
  },

  data: function data() {
    return {
      forms: null,
      numPages: 0,
      page: 1,
      showFilter: false,
      shape: '',
      filters: []
    };
  },


  watch: {
    page: function page() {
      this.getForms();
    }
  },

  created: function created() {
    if (this.languages) {
      this.filters.push(new Filter('Language', this.languages));
    }

    this.getForms();
    console.log(this.filterData);

    for (var filterName in this.filterData) {
      this.filters.push(new Filter(filterName, this.filterData[filterName]));
    }
  },


  methods: {
    getForms: function getForms() {
      var _this = this;

      this.forms = null;

      var params = {
        'per_page': this.perPage,
        'page': this.page
      };

      if (this.language) {
        params['language'] = this.language;
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.filters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var filter = _step.value;

          params[_.camelCase(filter.label)] = filter.value;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      axios.get('/verbs/forms/async', {
        params: params
      }).then(function (response) {
        _this.forms = response.data.data;
        _this.numPages = response.data.last_page;

        _this.forms.forEach(function (form) {
          if (form.examples.length == 0) {
            form.examples.push({ html: '<p class="table-note">No examples in the database</p>' });
          }
        });
      });
    },


    debounceGetForms: _.debounce(function (e) {
      console.log('bar');
      this.getForms();
    }, 300)
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Sandbox.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.table tbody tr:last-child td {\n  border-bottom-width: thin;\n}\n.sandbox .table-note {\n  font-style: italic;\n}\n.sandbox .level {\n  margin-bottom: .5em;\n}\n.sandbox .filter-panel {\n  margin-top: 1em;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-01831f60\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Sandbox.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "sandbox" }, [
    _c("div", { attrs: { role: "pagination" } }, [
      _c("div", { staticClass: "level" }, [
        _c("div", { staticClass: "level-left" }, [
          _c("div", { staticClass: "level-item" }, [
            _c(
              "a",
              {
                staticClass: "pagination-previous",
                attrs: { disabled: _vm.page <= 1 },
                on: {
                  click: function($event) {
                    _vm.page--
                  }
                }
              },
              [_vm._v("Previous")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "level-right" }, [
          _c("div", { staticClass: "level-item" }, [
            _c(
              "a",
              {
                staticClass: "pagination-next",
                attrs: { disabled: _vm.page >= _vm.numPages },
                on: {
                  click: function($event) {
                    _vm.page++
                  }
                }
              },
              [_vm._v("Next")]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "nav",
        { staticClass: "pagination", attrs: { "aria-label": "pagination" } },
        [
          _vm.forms && _vm.forms.length > 0
            ? _c(
                "ul",
                { staticClass: "pagination-list" },
                _vm._l(_vm.numPages, function(i) {
                  return _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "pagination-link",
                        class: { "is-current": _vm.page == i },
                        attrs: { "aria-label": "Goto page" + i },
                        on: {
                          click: function($event) {
                            _vm.page = i
                          }
                        }
                      },
                      [_vm._v(_vm._s(i))]
                    )
                  ])
                })
              )
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showFilter,
              expression: "showFilter"
            }
          ],
          staticClass: "filter-panel"
        },
        [
          _c("div", { staticClass: "field is-horizontal" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "field-body" }, [
              _c("div", { staticClass: "field" }, [
                _c("p", { staticClass: "control" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.shape,
                        expression: "shape"
                      }
                    ],
                    staticClass: "input",
                    attrs: { type: "text" },
                    domProps: { value: _vm.shape },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.shape = $event.target.value
                        },
                        function($event) {
                          _vm.debounceGetForms()
                        }
                      ]
                    }
                  })
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _vm._l(_vm.filters, function(filter) {
            return _c("div", { staticClass: "field is-horizontal" }, [
              _c("div", { staticClass: "field-label is-normal" }, [
                _c("label", { staticClass: "label" }, [
                  _vm._v(_vm._s(filter.label))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "field-body" }, [
                _c("div", { staticClass: "field" }, [
                  _c("div", { staticClass: "control is-expanded" }, [
                    _c("div", { staticClass: "select is-fullwidth" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: filter.value,
                              expression: "filter.value"
                            }
                          ],
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
                                  filter,
                                  "value",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function($event) {
                                _vm.getForms()
                              }
                            ]
                          }
                        },
                        [
                          _c(
                            "option",
                            {
                              attrs: { default: "default" },
                              domProps: { value: -1 }
                            },
                            [_vm._v("All")]
                          ),
                          _vm._v(" "),
                          _vm._l(filter.options, function(option) {
                            return _c(
                              "option",
                              { domProps: { value: option.id } },
                              [_vm._v(_vm._s(option.name))]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  ])
                ])
              ])
            ])
          })
        ],
        2
      ),
      _vm._v(" "),
      _c("span", { staticClass: "is-pulled-right" }, [
        _vm.showFilter
          ? _c(
              "a",
              {
                on: {
                  click: function($event) {
                    _vm.showFilter = false
                  }
                }
              },
              [_vm._v("Hide filters")]
            )
          : _c(
              "a",
              {
                on: {
                  click: function($event) {
                    _vm.showFilter = true
                  }
                }
              },
              [_vm._v("Filter")]
            )
      ])
    ]),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    !_vm.forms
      ? _c("div", [_c("p", [_vm._v("Loading...")])])
      : _vm.forms.length > 0
        ? _c(
            "table",
            { staticClass: "table" },
            [
              _vm._m(1),
              _vm._v(" "),
              _vm._l(_vm.forms, function(form) {
                return _c(
                  "tbody",
                  _vm._l(form.examples, function(example, i) {
                    return form.examples.length > 0
                      ? _c("tr", [
                          i == 0
                            ? _c("td", {
                                attrs: { rowspan: form.examples.length },
                                domProps: { innerHTML: _vm._s(form.html) }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _c("td", {
                            domProps: { innerHTML: _vm._s(example.html) }
                          })
                        ])
                      : _c("tr", [
                          _c("td", {
                            domProps: { innerHTML: _vm._s(form.html) }
                          }),
                          _vm._v(" "),
                          _c("td", [_vm._v("No examples in the database")])
                        ])
                  })
                )
              })
            ],
            2
          )
        : _c("div", [
            _c("p", [
              _vm._v("No forms in the database match that description.")
            ])
          ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "field-label is-normal" }, [
      _c("label", { staticClass: "label" }, [_vm._v("Shape")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Forms")]),
        _vm._v(" "),
        _c("th", [_vm._v("Examples")])
      ])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-01831f60", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Sandbox.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Sandbox.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("./node_modules/vue-loader/node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7aded88e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sandbox.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sandbox.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/components/Sandbox.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_Sandbox_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Sandbox.vue");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_01831f60_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Sandbox_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-01831f60\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Sandbox.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-loader/node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Sandbox.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_Sandbox_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_01831f60_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Sandbox_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_01831f60_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Sandbox_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Sandbox.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01831f60", Component.options)
  } else {
    hotAPI.reload("data-v-01831f60", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});