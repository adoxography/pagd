webpackJsonp([14,28],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Form.vue?vue&type=script&lang=js&":
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

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Group.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form__ = __webpack_require__("./resources/assets/js/components/forms/Form.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Datalist_js__ = __webpack_require__("./resources/assets/js/Datalist.js");




/* harmony default export */ __webpack_exports__["a"] = ({
	extends: __WEBPACK_IMPORTED_MODULE_0__Form__["default"],

	data: function data() {
		return {
			parent: new __WEBPACK_IMPORTED_MODULE_1__Datalist_js__["a" /* Datalist */]()
		};
	}
});

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/forms/Form.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__Form_vue_vue_type_script_lang_js___["a" /* default */],
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
      api.createRecord('68350a1b', component.options)
    } else {
      api.reload('68350a1b', component.options)
    }
    
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

/***/ "./resources/assets/js/components/forms/Group.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Group_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/forms/Group.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__Group_vue_vue_type_script_lang_js___["a" /* default */],
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
      api.createRecord('466cc690', component.options)
    } else {
      api.reload('466cc690', component.options)
    }
    
  }
}
component.options.__file = "resources/assets/js/components/forms/Group.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/forms/Group.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Group.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group_vue_vue_type_script_lang_js___["a" /* default */]); 

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
					extraInfo: source.pivot ? source.pivot.extraInfo : source.extraInfo,
					description: source.pivot ? source.pivot.description : source.description
				});
			});
		}
	}
});

/***/ })

});