webpackJsonp([84],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sources.vue?vue&type=script&lang=js&":
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

			showDescription: false,
			focusedSource: { index: 0, description: '' },

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
		openDescriptionModal: function openDescriptionModal(index) {
			var sources = this.value;
			this.focusedSource.description = sources[index].description;
			this.focusedSource.index = index;

			this.showDescription = true;
		},
		saveDescription: function saveDescription() {
			var sources = this.value;
			sources[this.focusedSource.index].description = this.focusedSource.description;
			this.showDescription = false;

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sources.vue?vue&type=template&id=3d461bd1&":
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
              [_vm._v("\n\t\t\t\t   \tAdd a new source\n\t\t\t    ")]
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
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: source.description,
                    expression: "source.description"
                  }
                ],
                attrs: {
                  type: "hidden",
                  name: "sources[" + index + "][description]"
                },
                domProps: { value: source.description },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(source, "description", $event.target.value)
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
              _c("div", { staticClass: "column is-7" }, [
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
                    class: {
                      "is-primary":
                        source.description && source.description.length > 0
                    },
                    on: {
                      click: function($event) {
                        _vm.openDescriptionModal(index)
                      }
                    }
                  },
                  [_vm._v(" Desc ")]
                )
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
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showDescription,
              expression: "showDescription"
            }
          ],
          staticClass: "modal is-active"
        },
        [
          _c("div", { staticClass: "modal-background" }),
          _vm._v(" "),
          _c("div", { staticClass: "modal-card" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("section", { staticClass: "modal-card-body" }, [
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.focusedSource.description,
                    expression: "focusedSource.description"
                  }
                ],
                staticClass: "textarea",
                domProps: { value: _vm.focusedSource.description },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.focusedSource,
                      "description",
                      $event.target.value
                    )
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("footer", { staticClass: "modal-card-foot" }, [
              _c(
                "a",
                {
                  staticClass: "button is-success",
                  on: { click: _vm.saveDescription }
                },
                [_vm._v("Save")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "button is-danger",
                  on: {
                    click: function($event) {
                      _vm.showDescription = false
                    }
                  }
                },
                [_vm._v("Cancel")]
              )
            ])
          ])
        ]
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "modal-card-head" }, [
      _c("p", { staticClass: "modal-card-title" }, [_vm._v("Description")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/Sources.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sources_vue_vue_type_template_id_3d461bd1___ = __webpack_require__("./resources/assets/js/components/Sources.vue?vue&type=template&id=3d461bd1&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Sources_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Sources.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Sources_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Sources_vue_vue_type_template_id_3d461bd1___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Sources_vue_vue_type_template_id_3d461bd1___["b" /* staticRenderFns */],
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
      api.createRecord('3d461bd1', component.options)
    } else {
      api.reload('3d461bd1', component.options)
    }
    module.hot.accept("./Sources.vue?vue&type=template&id=3d461bd1&", function () {
      api.rerender('3d461bd1', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/Sources.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Sources.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sources_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sources.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sources_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Sources.vue?vue&type=template&id=3d461bd1&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sources_vue_vue_type_template_id_3d461bd1___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sources.vue?vue&type=template&id=3d461bd1&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sources_vue_vue_type_template_id_3d461bd1___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sources_vue_vue_type_template_id_3d461bd1___["b"]; });


/***/ })

});