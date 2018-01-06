webpackJsonp([22,40],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/forms/Allophone.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form__ = __webpack_require__("./resources/assets/js/components/forms/Form.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Form__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var Row = function () {
	function Row() {
		var allophone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
		var environment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

		_classCallCheck(this, Row);

		this.allophone = allophone;
		this.environment = environment;
	}

	_createClass(Row, [{
		key: 'isEmpty',
		value: function isEmpty() {
			return this.allophone.length == 0 && this.environment.length == 0;
		}
	}, {
		key: 'clear',
		value: function clear() {
			this.allophone = '';
			this.environment = '';
		}
	}]);

	return Row;
}();

/* harmony default export */ __webpack_exports__["default"] = ({
	extends: __WEBPACK_IMPORTED_MODULE_0__Form___default.a,

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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/forms/Form.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vee_validate__ = __webpack_require__("./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_OldErrors__ = __webpack_require__("./resources/assets/js/mixins/OldErrors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_OldSources__ = __webpack_require__("./resources/assets/js/mixins/OldSources.js");





Vue.use(__WEBPACK_IMPORTED_MODULE_0_vee_validate__["b" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_OldErrors__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_OldSources__["a" /* default */]],

    data: function data() {
        return {
            sources: []
        };
    }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8411e70e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/forms/Allophone.vue":
/***/ (function(module, exports, __webpack_require__) {

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
    })
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
    require("vue-hot-reload-api")      .rerender("data-v-8411e70e", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/forms/Allophone.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/forms/Allophone.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8411e70e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/forms/Allophone.vue")
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
Component.options.__file = "resources/assets/js/components/forms/Allophone.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8411e70e", Component.options)
  } else {
    hotAPI.reload("data-v-8411e70e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/forms/Form.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/forms/Form.vue")
/* template */
var __vue_template__ = null
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
Component.options.__file = "resources/assets/js/components/forms/Form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68350a1b", Component.options)
  } else {
    hotAPI.reload("data-v-68350a1b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/mixins/OldErrors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	props: ['oldErrors'],

	mounted: function mounted() {
		var _this = this;

		if (this.oldErrors) {
			Vue.nextTick(function () {
				_.forEach(_this.oldErrors, function (errors, field) {
					field = field.split('_')[0];

					errors.forEach(function (message) {
						_this.errors.add(field, message, 'database');
					});
				});
			});
		}
	},


	methods: {
		validateBeforeSubmit: function validateBeforeSubmit(event) {
			this.$validator.validateAll();

			if (this.errors.any()) {
				event.preventDefault();
			}
		}
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
					extraInfo: source.pivot ? source.pivot.extraInfo : source.extraInfo
				});
			});
		}
	}
});

/***/ })

});