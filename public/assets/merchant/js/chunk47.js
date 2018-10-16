webpackJsonp([47],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/FileUpload.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var Errors = function () {
	function Errors() {
		_classCallCheck(this, Errors);

		this.errors = [];
	}

	_createClass(Errors, [{
		key: 'any',
		value: function any() {
			return this.errors.length > 0;
		}
	}, {
		key: 'record',
		value: function record(error) {
			this.errors.push(error);
		}
	}, {
		key: 'clear',
		value: function clear() {
			this.errors = [];
		}
	}, {
		key: 'first',
		value: function first() {
			return this.errors[0];
		}
	}]);

	return Errors;
}();

var File = function () {
	function File() {
		var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

		_classCallCheck(this, File);

		this.text = text;
		this.isEmpty = text.length == 0;
		this.errors = new Errors();
	}

	_createClass(File, [{
		key: 'buttonText',
		value: function buttonText() {
			if (this.isEmpty) {
				return 'Upload new file';
			} else {
				return 'File is ready!';
			}
		}
	}, {
		key: 'reset',
		value: function reset() {
			this.text = '';
			this.isEmpty = true;
		}
	}, {
		key: 'store',
		value: function store(file) {
			var valid = this.validate(file);
			var pattern = /(.*)\.([^\.]*$)/;

			if (valid) {
				this.text = file.name.match(pattern)[1];
				this.errors.clear();
				this.isEmpty = false;
			} else {
				this.errors.record("That file type is not allowed.");
			}

			return valid;
		}
	}, {
		key: 'validate',
		value: function validate(file) {
			var pattern = /^audio\/.*/;

			return file && file.type && file.type.match(pattern);
		}
	}, {
		key: 'hasErrors',
		value: function hasErrors() {
			return this.error.length > 0;
		}
	}]);

	return File;
}();

/* harmony default export */ __webpack_exports__["a"] = ({
	props: ['multi', 'name', 'showText', 'accept'],

	data: function data() {
		return {
			rows: []
		};
	},


	methods: {
		onFileChange: function onFileChange(files, row) {
			if (row.store(files[0])) {
				this.$emit('upload', {
					name: row.text
				});

				if (this.multi) {
					this.rows.push(new File());
				}
			}
		},
		onDelete: function onDelete(index) {
			this.rows.splice(index, 1);

			if (this.rows.length == 0) {
				this.rows.push(new File());
			}
		}
	},

	created: function created() {
		this.rows.push(new File());
	}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-12ca9994\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/FileUpload.vue":
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
      return _c("div", { staticClass: "field" }, [
        _c("div", { staticClass: "field has-addons" }, [
          _c("p", { staticClass: "control" }, [
            _c(
              "label",
              {
                staticClass: "button",
                class: {
                  "is-primary": row.isEmpty,
                  "is-success": !row.isEmpty
                },
                attrs: { for: "file-upload-" + n }
              },
              [
                _c("input", {
                  ref: "fileInput",
                  refInFor: true,
                  attrs: {
                    id: "file-upload-" + n,
                    type: "file",
                    name: _vm.name,
                    accept: _vm.accept
                  },
                  on: {
                    change: function($event) {
                      _vm.onFileChange($event.target.files, row)
                    }
                  }
                }),
                _vm._v("\n\t\t\t\t\t" + _vm._s(row.buttonText()) + "\n\t\t\t\t")
              ]
            )
          ]),
          _vm._v(" "),
          _vm.showText
            ? _c("p", { staticClass: "control is-expanded" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: row.text,
                      expression: "row.text"
                    }
                  ],
                  staticClass: "input",
                  attrs: {
                    type: "text",
                    name: _vm.name + "_name",
                    disabled: row.isEmpty
                  },
                  domProps: { value: row.text },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(row, "text", $event.target.value)
                    }
                  }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.multi
            ? _c("p", { staticClass: "control" }, [
                _c(
                  "a",
                  {
                    staticClass: "button is-danger",
                    attrs: { disabled: row.isEmpty }
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass: "icon",
                        on: {
                          click: function($event) {
                            _vm.onDelete(n)
                          }
                        }
                      },
                      [_c("i", { staticClass: "fa fa-times" })]
                    )
                  ]
                )
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        row.hasErrors
          ? _c("p", { staticClass: "help is-danger" }, [
              _vm._v("\n\t\t\t" + _vm._s(row.errors.first()) + "\n\t\t")
            ])
          : _vm._e()
      ])
    })
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-12ca9994", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "./resources/assets/js/components/FileUpload.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_FileUpload_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/FileUpload.vue");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_12ca9994_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FileUpload_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-12ca9994\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/FileUpload.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_FileUpload_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_12ca9994_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FileUpload_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_12ca9994_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FileUpload_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/FileUpload.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-12ca9994", Component.options)
  } else {
    hotAPI.reload("data-v-12ca9994", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});