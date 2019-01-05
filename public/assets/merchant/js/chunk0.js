webpackJsonp([0,18],{

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

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/IGT.vue?vue&type=script&lang=js&":
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/IGT.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.igt-line {\n  margin: inherit;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/IGT.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/IGT.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IGT.vue?vue&type=style&index=0&lang=css&", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IGT.vue?vue&type=style&index=0&lang=css&");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

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

/***/ "./resources/assets/js/components/forms/IGT.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IGT_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/forms/IGT.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IGT_vue_vue_type_style_index_0_lang_css___ = __webpack_require__("./resources/assets/js/components/forms/IGT.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__IGT_vue_vue_type_script_lang_js___["a" /* default */],
  render,
  staticRenderFns,
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
      api.createRecord('09766a0f', component.options)
    } else {
      api.reload('09766a0f', component.options)
    }
    
  }
}
component.options.__file = "resources/assets/js/components/forms/IGT.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/forms/IGT.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IGT_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/IGT.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IGT_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/forms/IGT.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IGT_vue_vue_type_style_index_0_lang_css___ = __webpack_require__("./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/IGT.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IGT_vue_vue_type_style_index_0_lang_css____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IGT_vue_vue_type_style_index_0_lang_css___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IGT_vue_vue_type_style_index_0_lang_css____default.a); 

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
          return _this.$root.errors.add({ field: field, msg: message });
        });
      });
    };
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