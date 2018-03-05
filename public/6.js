webpackJsonp([6],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/forms/Example.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form__ = __webpack_require__("./resources/assets/js/components/forms/Form.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_HasMorphemes__ = __webpack_require__("./resources/assets/js/mixins/HasMorphemes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Datalist_js__ = __webpack_require__("./resources/assets/js/Datalist.js");





/* harmony default export */ __webpack_exports__["default"] = ({
	extends: __WEBPACK_IMPORTED_MODULE_0__Form___default.a,

	props: ['oldMorphemes', 'oldForm'],

	mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_HasMorphemes__["a" /* default */]],

	data: function data() {
		return {
			language: new __WEBPACK_IMPORTED_MODULE_2__Datalist_js__["a" /* Datalist */](),
			form: new __WEBPACK_IMPORTED_MODULE_2__Datalist_js__["a" /* Datalist */](),
			parent: new __WEBPACK_IMPORTED_MODULE_2__Datalist_js__["a" /* Datalist */](),
			morphemes: []
		};
	},


	methods: {
		onLanguageInput: function onLanguageInput() {
			this.form.reset();
			this.morphemes = [];
			this.errors.clear('language');
		},
		onFormInput: function onFormInput() {
			if (this.form.extra) {
				this.morphemes = Array.isArray(this.form.extra) ? this.form.extra : JSON.parse(this.form.extra);
			}
		}
	},

	mounted: function mounted() {
		if (this.oldForm) {
			this.form = new __WEBPACK_IMPORTED_MODULE_2__Datalist_js__["a" /* Datalist */](this.oldForm.text, this.oldForm.id, this.oldForm.extra);
		}

		if (this.oldMorphemes) {
			this.morphemes = this.oldMorphemes;
		}
	}
});

/***/ }),

/***/ "./resources/assets/js/components/forms/Example.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/forms/Example.vue")
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
Component.options.__file = "resources/assets/js/components/forms/Example.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6eba05e3", Component.options)
  } else {
    hotAPI.reload("data-v-6eba05e3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/mixins/HasMorphemes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
    props: ['init-morphemes'],

    data: function data() {
        return {
            morphemes: []
        };
    },
    created: function created() {
        if (this.initMorphemes) {
            this.morphemes = this.initMorphemes;
        }
    }
});

/***/ })

});