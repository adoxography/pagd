webpackJsonp([34],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Sources.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_focus__ = __webpack_require__("./node_modules/vue-focus/dist/vue-focus.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_focus___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_focus__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	props: ['value', 'disabled'],

	data: function data() {
		return {
			showModal: false,

			oldSource: {
				text: '',
				id: ''
			}
		};
	},


	computed: {
		hasDuplicates: function hasDuplicates() {
			var sources = this.value;
			var found = false;

			for (var i = 0; i < sources.length && !found; i++) {
				found = this.duplicateSource(sources[i].id);
			}

			return found;
		}
	},

	directives: {
		focus: __WEBPACK_IMPORTED_MODULE_0_vue_focus__["focus"]
	},

	methods: {
		open: function open() {
			this.showModal = true;
		},
		close: function close() {
			this.showModal = false;
		},
		add: function add(data) {
			var _this = this;

			var newSources = this.value;
			newSources.push({
				short: data.display,
				id: data.id,
				long: data.long,
				extraInfo: ''
			});

			this.$emit('input', newSources);

			Vue.nextTick(function () {
				_this.$refs.extrainfo[_this.value.length - 1].focus();
			});
		},
		remove: function remove(index) {
			var sources = this.value;
			sources.splice(index, 1);

			this.$emit('input', sources);
		},
		duplicateSource: function duplicateSource(index) {
			var sources = this.value;
			var found = false;
			var duplicate = false;

			if (sources) {
				sources.forEach(function (source) {
					if (source.id == index) {
						if (!found) {
							found = true;
						} else {
							duplicate = true;
						}
					}
				});
			}

			return duplicate;
		},
		extractExtraInfo: function extractExtraInfo(source) {
			if (source.pivot) {
				return source.pivot.extraInfo;
			} else {
				return source.extraInfo;
			}
		},
		handleOldSourceInput: function handleOldSourceInput() {
			var _this2 = this;

			Vue.nextTick(function () {
				if (_this2.$refs.oldSource.showCheck) {
					_this2.add({
						display: _this2.oldSource.extra,
						id: _this2.oldSource.id,
						long: _this2.oldSource.text
					});

					_this2.oldSource.text = '';
					_this2.oldSource.id = '';
					_this2.oldSource.extra = '';
				}
			});
		}
	}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3d461bd1\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Sources.vue":
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
      _c("h4", { staticClass: "subtitle is-4" }, [_vm._v("Sources")]),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c(
          "div",
          { staticClass: "column is-8" },
          [
            _c(
              "label",
              { staticClass: "label", attrs: { for: "old-source" } },
              [_vm._v("Look up an existing source:")]
            ),
            _vm._v(" "),
            _c("alg-ajaxlist", {
              ref: "oldSource",
              attrs: {
                uri: "/autocomplete/sources",
                placeholder: "Search for an existing source",
                name: "old-source",
                id: "old-source",
                disabled: _vm.disabled
              },
              on: { input: _vm.handleOldSourceInput },
              model: {
                value: _vm.oldSource,
                callback: function($$v) {
                  _vm.oldSource = $$v
                },
                expression: "oldSource"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "column",
            staticStyle: { display: "flex", "justify-content": "center" }
          },
          [
            _c(
              "a",
              {
                staticClass: "button",
                class: { "is-disabled": _vm.disabled },
                staticStyle: { "margin-top": "2rem" },
                attrs: { id: "new-source-button" },
                on: { click: _vm.open }
              },
              [_vm._v("\n\t\t\t   \tAdd a new source\n\t\t    ")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "ul",
        _vm._l(_vm.value, function(source, index) {
          return _c("div", [
            _c("div", { staticClass: "columns" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: source.id,
                    expression: "source.id"
                  }
                ],
                attrs: { type: "hidden", name: "sources[" + index + "][id]" },
                domProps: { value: source.id },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(source, "id", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: source.short,
                    expression: "source.short"
                  }
                ],
                attrs: {
                  type: "hidden",
                  name: "sources[" + index + "][short]"
                },
                domProps: { value: source.short },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(source, "short", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: source.long,
                    expression: "source.long"
                  }
                ],
                attrs: { type: "hidden", name: "sources[" + index + "][long]" },
                domProps: { value: source.long },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(source, "long", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "column is-one-quarter" }, [
                _c("div", [
                  _c("p", { attrs: { title: source.long } }, [
                    _vm._v(_vm._s(index + 1) + ". " + _vm._s(source.short))
                  ]),
                  _vm._v(" "),
                  _c("span", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.duplicateSource(source.id),
                        expression: "duplicateSource(source.id)"
                      }
                    ],
                    staticClass: "help is-danger",
                    domProps: {
                      textContent: _vm._s("This source is already listed")
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "column is-8" }, [
                _c("p", { staticClass: "control" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: source.extraInfo,
                        expression: "source.extraInfo"
                      }
                    ],
                    ref: "extrainfo",
                    refInFor: true,
                    staticClass: "input is-expanded",
                    attrs: {
                      type: "text",
                      name: "sources[" + index + "][extraInfo]",
                      placeholder: "chapter, page number, etc...",
                      disabled: _vm.disabled,
                      autocomplete: "off"
                    },
                    domProps: { value: source.extraInfo },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(source, "extraInfo", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "column is-1" }, [
                _c(
                  "a",
                  {
                    staticClass: "button",
                    attrs: { disabled: _vm.disabled },
                    on: {
                      click: function($event) {
                        _vm.remove(index)
                      }
                    }
                  },
                  [_vm._v("Remove")]
                )
              ])
            ])
          ])
        })
      ),
      _vm._v(" "),
      _c("alg-new-source", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.showModal,
            expression: "showModal"
          }
        ],
        attrs: { open: _vm.showModal },
        on: {
          close: _vm.close,
          input: function($event) {
            _vm.add($event)
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3d461bd1", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "./resources/assets/js/components/Sources.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_Sources_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Sources.vue");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d461bd1_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Sources_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3d461bd1\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Sources.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_Sources_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d461bd1_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Sources_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d461bd1_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Sources_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Sources.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d461bd1", Component.options)
  } else {
    hotAPI.reload("data-v-3d461bd1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});