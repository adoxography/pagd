webpackJsonp([88],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Value-Input.vue":
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	props: ['list', 'initial'],

	data: function data() {
		return {
			valueText: '',
			values: [],
			usedValues: []
		};
	},


	computed: {
		filteredValues: function filteredValues() {
			var _this = this;

			var unchecked = [];
			var checked = [];

			this.values.forEach(function (value) {
				if (value.name.toLowerCase().includes(_this.valueText.toLowerCase())) {

					if (value.checked) {
						checked.push(value);
					} else {
						unchecked.push(value);
					}
				}
			});

			return checked.concat(unchecked);
		},
		selectedValues: function selectedValues() {
			var values = [];

			this.values.forEach(function (value) {
				if (value.checked) {
					values.unshift({
						id: value.id,
						name: value.name
					});
				}
			});

			return values;
		}
	},

	created: function created() {
		var _this2 = this;

		for (var i = 0; i < this.list.length; i++) {
			this.values.push({
				id: this.list[i].id,
				name: this.list[i].name,
				checked: false,
				used: false
			});
		}

		if (this.initial) {
			this.initial.forEach(function (value) {
				var index = _this2.selectItemInList(value.name, _this2.values);

				if (value.used) {
					_this2.values[index].used = true;
					_this2.usedValues.push(value.name);
				}
			});
		}
	},


	methods: {
		onEnter: function onEnter(event) {

			if (this.valueText.length > 0) {
				event.preventDefault();
				// this.errors.clear('values');

				if (this.selectItemInList(event.target.value, this.values) < 0) {
					this.values.push({
						id: 0,
						name: event.target.value,
						checked: true
					});
				}

				this.valueText = '';
			}
		},
		removeValue: function removeValue(name) {
			var index = this.values.findIndex(function (value) {
				return value.name == name;
			});

			this.values.splice(index, 1);
		},
		selectItemInList: function selectItemInList(lookup, array) {
			var found = -1;

			for (var i = 0; i < array.length && found < 0; i++) {
				if (array[i].name.toLowerCase() == lookup.toLowerCase()) {
					found = i;
					array[i].checked = true;
				}
			}

			return found;
		}
	}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3c7b10e7\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Value-Input.vue":
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
    { staticClass: "field" },
    [
      _c("label", { staticClass: "label" }, [_vm._v("Options")]),
      _vm._v(" "),
      _c("div", { staticClass: "multi-select box" }, [
        _c("div", { staticClass: "field" }, [
          _c("p", { staticClass: "control" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.valueText,
                  expression: "valueText"
                }
              ],
              staticClass: "input",
              attrs: {
                type: "text",
                name: "value-input",
                id: "value-input",
                placeholder: "Filter the options"
              },
              domProps: { value: _vm.valueText },
              on: {
                keydown: function($event) {
                  if (
                    !("button" in $event) &&
                    _vm._k($event.keyCode, "enter", 13, $event.key)
                  ) {
                    return null
                  }
                  _vm.onEnter($event)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.valueText = $event.target.value
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "box",
            staticStyle: { height: "200px", overflow: "auto" }
          },
          [
            _c(
              "p",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value:
                      _vm.filteredValues.length == 0 &&
                      _vm.valueText.length > 0,
                    expression:
                      "filteredValues.length == 0 && valueText.length > 0"
                  }
                ]
              },
              [
                _c("em", [
                  _vm._v(
                    "Press 'enter' to add '" +
                      _vm._s(_vm.valueText) +
                      "' as an option"
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _vm._l(_vm.filteredValues, function(item) {
              return _c("div", { staticClass: "field" }, [
                _c("p", { staticClass: "control" }, [
                  _c(
                    "label",
                    {
                      staticClass: "checkbox",
                      attrs: {
                        title: item.used
                          ? "This value cannot be removed because it is being used in a datapoint."
                          : ""
                      }
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: item.checked,
                            expression: "item.checked"
                          }
                        ],
                        attrs: {
                          type: "checkbox",
                          name: "values[]",
                          disabled: item.used
                        },
                        domProps: {
                          value: item.name,
                          checked: Array.isArray(item.checked)
                            ? _vm._i(item.checked, item.name) > -1
                            : item.checked
                        },
                        on: {
                          change: function($event) {
                            var $$a = item.checked,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = item.name,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 && (item.checked = $$a.concat([$$v]))
                              } else {
                                $$i > -1 &&
                                  (item.checked = $$a
                                    .slice(0, $$i)
                                    .concat($$a.slice($$i + 1)))
                              }
                            } else {
                              _vm.$set(item, "checked", $$c)
                            }
                          }
                        }
                      }),
                      _vm._v(
                        "\n\t\t\t\t\t\t" + _vm._s(item.name) + "\n\t\t\t\t\t"
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("a", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: item.id == 0,
                        expression: "item.id == 0"
                      }
                    ],
                    staticClass: "delete is-small is-pulled-right",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.removeValue(item.name)
                      }
                    }
                  })
                ])
              ])
            })
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.selectedValues.length < 2,
                expression: "selectedValues.length < 2"
              }
            ],
            staticClass: "help is-danger"
          },
          [_vm._v("\n\t\t\tVariables must have at least two options\n\t\t")]
        )
      ]),
      _vm._v(" "),
      _vm._l(_vm.usedValues, function(value) {
        return _c("input", {
          attrs: { type: "hidden", name: "values[]" },
          domProps: { value: value }
        })
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3c7b10e7", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "./resources/assets/js/components/Value-Input.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_Value_Input_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Value-Input.vue");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3c7b10e7_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Value_Input_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3c7b10e7\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Value-Input.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_Value_Input_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3c7b10e7_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Value_Input_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3c7b10e7_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Value_Input_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Value-Input.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c7b10e7", Component.options)
  } else {
    hotAPI.reload("data-v-3c7b10e7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});