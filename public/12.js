webpackJsonp([12],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/forms/Phoneme.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form__ = __webpack_require__("./resources/assets/js/components/forms/Form.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Datalist__ = __webpack_require__("./resources/assets/js/Datalist.js");




/* harmony default export */ __webpack_exports__["default"] = ({
	extends: __WEBPACK_IMPORTED_MODULE_0__Form___default.a,

	props: ['oldType', 'oldIsArchiphoneme'],

	data: function data() {
		return {
			type: '',
			isArchiphoneme: false,

			language: new __WEBPACK_IMPORTED_MODULE_1__Datalist__["a" /* Datalist */](),

			// Consonant features
			place: new __WEBPACK_IMPORTED_MODULE_1__Datalist__["a" /* Datalist */](),
			manner: new __WEBPACK_IMPORTED_MODULE_1__Datalist__["a" /* Datalist */](),
			voicing: new __WEBPACK_IMPORTED_MODULE_1__Datalist__["a" /* Datalist */](),

			// Vowel features
			height: new __WEBPACK_IMPORTED_MODULE_1__Datalist__["a" /* Datalist */](),
			backness: new __WEBPACK_IMPORTED_MODULE_1__Datalist__["a" /* Datalist */](),
			length: new __WEBPACK_IMPORTED_MODULE_1__Datalist__["a" /* Datalist */](),

			// Cluster features
			firstSegment: new __WEBPACK_IMPORTED_MODULE_1__Datalist__["a" /* Datalist */](),
			secondSegment: new __WEBPACK_IMPORTED_MODULE_1__Datalist__["a" /* Datalist */]()
		};
	},


	computed: {
		fieldConstraints: function fieldConstraints() {
			return this.isArchiphoneme ? "datalist_exists" : "datalist_required|datalist_exists";
		},
		archiphonemeDescriptionConstraints: function archiphonemeDescriptionConstraints() {
			return this.isArchiphoneme ? 'required' : '';
		},
		typeConstraints: function typeConstraints() {
			return this.isArchiphoneme ? 'required|not_in:clusterTypes' : 'required';
		}
	},

	created: function created() {
		if (this.oldType) {
			this.type = this.oldType;
		}

		if (this.oldIsArchiphoneme) {
			this.isArchiphoneme = this.oldIsArchiphoneme;
		}

		var dict = {
			en: {
				custom: {
					featurable_type: {
						not_in: 'Clusters cannot be archiphonemes'
					}
				}
			}
		};

		this.$validator.updateDictionary(dict);
	},


	watch: {
		language: function language() {
			this.firstSegment = new __WEBPACK_IMPORTED_MODULE_1__Datalist__["a" /* Datalist */]();
			this.secondSegment = new __WEBPACK_IMPORTED_MODULE_1__Datalist__["a" /* Datalist */]();
		},
		type: function type(value) {
			if (value == 'clusterTypes') {
				this.isArchiphoneme = false;
			}
		}
	}
});

/***/ }),

/***/ "./resources/assets/js/components/forms/Phoneme.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/forms/Phoneme.vue")
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
Component.options.__file = "resources/assets/js/components/forms/Phoneme.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6133a402", Component.options)
  } else {
    hotAPI.reload("data-v-6133a402", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});