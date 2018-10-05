webpackJsonp([54,77],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/forms/Form.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_OldErrors__ = __webpack_require__("./resources/assets/js/mixins/OldErrors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_OldSources__ = __webpack_require__("./resources/assets/js/mixins/OldSources.js");




/* harmony default export */ __webpack_exports__["a"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_OldErrors__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_OldSources__["a" /* default */]],

    data: function data() {
        return {
            sources: []
        };
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/forms/IGT.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form__ = __webpack_require__("./resources/assets/js/components/forms/Form.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Datalist_js__ = __webpack_require__("./resources/assets/js/Datalist.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




/**
 * Datatype that holds information on IGT lines
 */

var IGTLine =
/**
 * Ininitializes the IGTLine
 *
 * @param text  The text of the line
 * @param type  An object representing the line's formatting type
 */
function IGTLine() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  _classCallCheck(this, IGTLine);

  this.text = text;
  this.type = type;
};

/* harmony default export */ __webpack_exports__["a"] = ({
  extends: __WEBPACK_IMPORTED_MODULE_0__Form__["default"],

  props: ['lineTypes', 'oldLines'],

  data: function data() {
    return {
      language: new __WEBPACK_IMPORTED_MODULE_1__Datalist_js__["a" /* Datalist */](),
      lines: [new IGTLine()]
    };
  },
  created: function created() {
    var _this = this;

    // If old lines were passed in, prepopulate the form with them
    if (this.oldLines) {
      this.lines = this.oldLines.map(function (line) {
        var type = _this.lineTypes.find(function (type) {
          return type.id == line.type_id;
        });
        return new IGTLine(line.text, type);
      });
    }

    // Ensure that all lines have a type
    this.lines.forEach(function (line) {
      if (!line.type) {
        line.type = _this.lineTypes[0];
      }
    });

    // Make sure that everything is aligned properly to start off with
    this.align();
  },


  methods: {
    /**
     * Adds a line to the IGT
     *
     * Gives focus to the newly added line.
     *
     * @param index  The index to add the line after
     */
    addLine: function addLine(index) {
      var _this2 = this;

      var newIndex = index + 1;
      this.lines.splice(newIndex, 0, new IGTLine('', this.lineTypes[0]));

      // Wait for the page to re-render before focusing the new element
      Vue.nextTick(function () {
        return _this2.$refs["line-" + newIndex][0].focus();
      });
    },


    /**
     * Removes a line of IGT
     *
     * Gives focus to the line before the line that was removed, or the first
     * line if the first line was removed. Will do nothing if there is only
     * one line.
     *
     * @param index  The index of the line to remove
     */
    removeLine: function removeLine(index) {
      var _this3 = this;

      if (this.lines.length > 1) {
        this.lines.splice(index, 1);

        var remainingLine = Math.max(index - 1, 0);

        Vue.nextTick(function () {
          return _this3.$refs["line-" + remainingLine][0].focus();
        });
      }
    },


    /**
     * Lines up all of the aligning lines in the IGT
     */
    align: function align() {
      var _this4 = this;

      var horizontal = this.lines.map(function (line) {
        return line.text.split(/\s+/);
      });
      var vertical = _.zip.apply(_, horizontal);
      var exclude = [];

      for (var i = 0; i < this.lines.length; i++) {
        if (!this.lines[i].type.align) {
          exclude.push(i);
        }
      }

      vertical = vertical.map(function (tokens) {
        return _this4.__padArray(tokens, ' ', exclude);
      });
      horizontal = _.zip.apply(_, vertical);

      for (var _i = 0; _i < horizontal.length; _i++) {
        this.lines[_i].text = horizontal[_i].join(' ').trim();
      }
    },


    /**
     * Ensures all members of an array are the same length by padding them
     * with a given character
     *
     * @param arr      An array of strings
     * @param str      The string to pad the members of the array with
     * @param exclude  The indices to exclude from the padding
     * @return  An array of strings which are all the same length
     */
    __padArray: function __padArray(arr, str) {
      var exclude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      exclude = exclude || [];
      var size = 0;

      for (var i = 0; i < arr.length; i++) {
        if (!exclude.includes(i)) {
          var token = arr[i] || '';
          size = Math.max(size, token.length);
        }
      }

      for (var _i2 = 0; _i2 < arr.length; _i2++) {
        if (!exclude.includes(_i2)) {
          var _token = arr[_i2] || '';
          var addon = str.repeat(size - _token.length);
          arr[_i2] = _token + addon;
        }
      }

      return arr;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/forms/IGT.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.igt-line {\n  margin: inherit;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/forms/IGT.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/forms/IGT.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("./node_modules/vue-loader/node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6dad0bc2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./IGT.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./IGT.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/Datalist.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Datalist; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Datalist = function () {
    function Datalist() {
        var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var extra = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

        _classCallCheck(this, Datalist);

        this.text = text;
        this.id = id;
        this.extra = extra;
    }

    _createClass(Datalist, [{
        key: "reset",
        value: function reset() {
            this.text = "";
            this.id = "";
            this.extra = "";
        }
    }]);

    return Datalist;
}();



/***/ }),

/***/ "./resources/assets/js/components/forms/Form.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_Form_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/forms/Form.vue");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
/* script */


/* template */
var __vue_render__, __vue_static_render_fns__
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_Form_vue__["a" /* default */],
  __vue_render__,
  __vue_static_render_fns__,
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

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./resources/assets/js/components/forms/IGT.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_IGT_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/forms/IGT.vue");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-loader/node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/forms/IGT.vue")
}
/* script */


/* template */
var __vue_render__, __vue_static_render_fns__
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_IGT_vue__["a" /* default */],
  __vue_render__,
  __vue_static_render_fns__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/forms/IGT.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-09766a0f", Component.options)
  } else {
    hotAPI.reload("data-v-09766a0f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


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