webpackJsonp([21],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Initial-Changes.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_Form__ = __webpack_require__("./resources/assets/js/utilities/Form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	props: ['languages', 'changes'],

	data: function data() {
		return {
			rows: [],
			loading: false,
			deleting: 0,
			form: new __WEBPACK_IMPORTED_MODULE_0__utilities_Form__["a" /* default */]({
				language: {
					text: '',
					id: ''
				},
				morpheme: {
					text: '',
					id: ''
				},
				change: ''
			})
		};
	},


	methods: {
		onSubmit: function onSubmit() {
			var _this = this;

			this.loading = true;

			this.form.post("/changes").then(function (response) {
				_this.loading = false;
				_this.rows.push(response);
			}).catch(function (error) {
				_this.loading = false;
			});
		},
		deleteRow: function deleteRow(row, index) {
			var _this2 = this;

			this.deleting = row.id;
			axios.delete("/changes/" + row.id).then(function (response) {
				_this2.deleting = 0;
				_this2.rows.splice(index, 1);
			}).catch(function (error) {
				_this2.deleting = 0;
			});
		},
		onLanguageInput: function onLanguageInput() {
			this.form.morpheme = {
				text: '',
				id: ''
			};
		}
	},

	created: function created() {
		this.rows = this.changes;
	}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4aff9f33\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Initial-Changes.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("table", { staticClass: "table" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.rows, function(row, index) {
          return _c("tr", [
            _c("td", [
              _c(
                "a",
                { attrs: { href: "/languages/" + row.morpheme.language.iso } },
                [_vm._v(_vm._s(row.morpheme.language.name))]
              )
            ]),
            _vm._v(" "),
            _c("td", [
              _c("a", {
                attrs: { href: "/morphemes/" + row.morpheme.id },
                domProps: { innerHTML: _vm._s(row.morpheme.uniqueName) }
              })
            ]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(row.disambiguator))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(row.change))]),
            _vm._v(" "),
            _c("td", [
              _c("a", { staticClass: "button" }, [
                _vm.deleting != row.id
                  ? _c(
                      "span",
                      {
                        staticClass: "icon",
                        attrs: { title: "delete" },
                        on: {
                          click: function($event) {
                            _vm.deleteRow(row, index)
                          }
                        }
                      },
                      [_c("i", { staticClass: "fa fa-times" })]
                    )
                  : _c("span", { staticClass: "icon" }, [
                      _c("i", {
                        staticClass: "fa fa-spinner fa-pulse fa-3x fa-fw"
                      })
                    ])
              ])
            ])
          ])
        })
      )
    ]),
    _vm._v(" "),
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            _vm.onSubmit($event)
          },
          keydown: function($event) {
            _vm.form.errors.clear($event.target.name)
          }
        }
      },
      [
        _c("div", { staticClass: "columns" }, [
          _c(
            "div",
            { staticClass: "column is-one-third" },
            [
              _c(
                "label",
                { staticClass: "label", attrs: { for: "language" } },
                [_vm._v("Language")]
              ),
              _vm._v(" "),
              _c("alg-datalist", {
                attrs: {
                  list: _vm.languages,
                  name: "language",
                  required: "required",
                  disabled: _vm.loading,
                  classes: { "is-danger": _vm.form.errors.has("language") },
                  autofocus: "autofocus"
                },
                on: { input: _vm.onLanguageInput },
                model: {
                  value: _vm.form.language,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "language", $$v)
                  },
                  expression: "form.language"
                }
              }),
              _vm._v(" "),
              _c("span", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.form.errors.has("language"),
                    expression: "form.errors.has('language')"
                  }
                ],
                staticClass: "help is-danger",
                domProps: {
                  textContent: _vm._s(_vm.form.errors.get("language"))
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "column is-one-third" },
            [
              _c(
                "label",
                { staticClass: "label", attrs: { for: "morpheme" } },
                [_vm._v("Morpheme")]
              ),
              _vm._v(" "),
              _c("alg-ajaxlist", {
                attrs: {
                  uri: "/autocomplete/morphemes",
                  with: { language: _vm.form.language.id },
                  disabled: _vm.loading || !_vm.form.language.id,
                  placeholder: "Make sure to select the language first",
                  classes: { "is-danger": _vm.form.errors.has("morpheme") },
                  required: "required"
                },
                model: {
                  value: _vm.form.morpheme,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "morpheme", $$v)
                  },
                  expression: "form.morpheme"
                }
              }),
              _vm._v(" "),
              _c("span", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.form.errors.has("morpheme"),
                    expression: "form.errors.has('morpheme')"
                  }
                ],
                staticClass: "help is-danger",
                domProps: {
                  textContent: _vm._s(_vm.form.errors.get("morpheme"))
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "column is-one-third" }, [
            _c("label", { staticClass: "label", attrs: { for: "change" } }, [
              _vm._v("Change")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "control" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.change,
                    expression: "form.change"
                  }
                ],
                staticClass: "input",
                class: { "is-danger": _vm.form.errors.has("change") },
                attrs: {
                  type: "text",
                  autocomplete: "off",
                  name: "change",
                  required: "required",
                  disabled: _vm.loading
                },
                domProps: { value: _vm.form.change },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "change", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("span", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.form.errors.has("change"),
                  expression: "form.errors.has('change')"
                }
              ],
              staticClass: "help is-danger",
              domProps: { textContent: _vm._s(_vm.form.errors.get("change")) }
            })
          ])
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "button",
            attrs: {
              type: "submit",
              disabled: _vm.form.errors.any() || _vm.loading
            }
          },
          [_vm._v("Submit")]
        ),
        _vm._v(" "),
        _c("span", { staticClass: "icon" }, [
          _c("i", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.loading,
                expression: "loading"
              }
            ],
            staticClass: "fa fa-spinner fa-pulse fa-3x fa-fw"
          })
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Language")]),
        _vm._v(" "),
        _c("th", [_vm._v("Morpheme")]),
        _vm._v(" "),
        _c("th", [_vm._v("Initial Change #")]),
        _vm._v(" "),
        _c("th", [_vm._v("Initial Change")]),
        _vm._v(" "),
        _c("th", [_vm._v("Remove")])
      ])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4aff9f33", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "./resources/assets/js/components/Initial-Changes.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_Initial_Changes_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Initial-Changes.vue");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4aff9f33_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Initial_Changes_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4aff9f33\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Initial-Changes.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_Initial_Changes_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4aff9f33_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Initial_Changes_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4aff9f33_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Initial_Changes_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Initial-Changes.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4aff9f33", Component.options)
  } else {
    hotAPI.reload("data-v-4aff9f33", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./resources/assets/js/utilities/Errors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Errors = function () {
	function Errors() {
		_classCallCheck(this, Errors);

		this.errors = {};
	}

	_createClass(Errors, [{
		key: "get",
		value: function get(field) {
			if (this.errors[field]) {
				if (Array.isArray(this.errors[field][0])) {
					return this.errors[field][0][0];
				} else {
					return this.errors[field][0];
				}
			}
		}
	}, {
		key: "clear",
		value: function clear(field) {
			if (field) {
				delete this.errors[field];
				delete this.errors[field + "_id"];
				delete this.errors[field + "_text"];
			} else {
				this.errors = {};
			}
		}
	}, {
		key: "record",
		value: function record(errors) {
			var _this = this;

			this.errors = {};

			if (errors) {
				_.forEach(errors, function (value, key) {
					var realKey = key;

					if (typeof key === 'string' || key instanceof String) {
						realKey = key.split(".")[0];
					}

					if (!_this.errors[realKey]) {
						_this.errors[realKey] = [];
					}

					_this.errors[realKey].push(value);
				});
			}
		}
	}, {
		key: "has",
		value: function has(field) {
			var _this2 = this;

			if (Array.isArray(field)) {
				var result = false;

				field.forEach(function (value) {
					result = result || _this2.has(value);
				});
				return result;
			}
			return this.errors.hasOwnProperty(field);
		}
	}, {
		key: "any",
		value: function any() {
			return Object.keys(this.errors).length > 0;
		}
	}]);

	return Errors;
}();

/* harmony default export */ __webpack_exports__["a"] = (Errors);

/***/ }),

/***/ "./resources/assets/js/utilities/Form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors__ = __webpack_require__("./resources/assets/js/utilities/Errors.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Form = function () {
	function Form(data) {
		_classCallCheck(this, Form);

		this.originalData = data;

		for (var field in data) {
			this[field] = data[field];
		}

		this.errors = new __WEBPACK_IMPORTED_MODULE_0__Errors__["a" /* default */]();
	}

	_createClass(Form, [{
		key: 'data',
		value: function data() {
			var data = {};

			for (var property in this.originalData) {
				data[property] = this[property];
			}

			return data;
		}
	}, {
		key: 'reset',
		value: function reset() {
			for (var field in this.originalData) {
				this[field] = '';
			}

			this.errors.clear();
		}
	}, {
		key: 'get',
		value: function get(url) {
			return this.submit('get', url);
		}
	}, {
		key: 'post',
		value: function post(url) {
			return this.submit('post', url);
		}
	}, {
		key: 'patch',
		value: function patch(url) {
			return this.submit('patch', url);
		}
	}, {
		key: 'submit',
		value: function submit(requestType, url) {
			var _this = this;

			var attempt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

			return new Promise(function (resolve, reject) {
				axios[requestType](url, _this.data()).then(function (response) {
					_this.onSuccess(response.data);

					resolve(response.data);
				}).catch(function (error) {
					if (error.response) {
						if (error.response.status == 422) {
							_this.onFail(error.response.data);
						} else if (error.response.status == 500) {
							alert('System error. Please submit a bug report including what you were doing and when.');
						} else if (error.response.status == 400) {
							console.log("Error 400");
						} else {
							alert("Network error " + error.response.status + ". Please try again.");
						}

						reject(error.response.data);
					} else {
						alert('Network error. Please submit a bug report including what you were doing and when.');
						console.log(error);
						reject({});
					}
				});
			});
		}
	}, {
		key: 'onSuccess',
		value: function onSuccess(data) {
			// this.reset();
		}
	}, {
		key: 'onFail',
		value: function onFail(errors) {
			this.errors.record(errors);
		}
	}]);

	return Form;
}();

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ })

});