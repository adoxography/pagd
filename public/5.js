webpackJsonp([5],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/forms/NominalForm.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form__ = __webpack_require__("./resources/assets/js/components/forms/Form.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_HasMorphemes__ = __webpack_require__("./resources/assets/js/mixins/HasMorphemes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Datalist_js__ = __webpack_require__("./resources/assets/js/Datalist.js");





/* harmony default export */ __webpack_exports__["default"] = ({
	extends: __WEBPACK_IMPORTED_MODULE_0__Form___default.a,

	props: ['pronominalFeatures', 'nominalFeatures', 'paradigms', 'oldParadigm', 'oldNominalFeature', 'oldPronominalFeature', 'oldTranslation'],

	mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_HasMorphemes__["a" /* default */]],

	data: function data() {
		return {
			language: new __WEBPACK_IMPORTED_MODULE_2__Datalist_js__["a" /* Datalist */](),
			pronominalFeature: new __WEBPACK_IMPORTED_MODULE_2__Datalist_js__["a" /* Datalist */](),
			nominalFeature: new __WEBPACK_IMPORTED_MODULE_2__Datalist_js__["a" /* Datalist */](),
			paradigm: new __WEBPACK_IMPORTED_MODULE_2__Datalist_js__["a" /* Datalist */](),
			mode: new __WEBPACK_IMPORTED_MODULE_2__Datalist_js__["a" /* Datalist */](),
			parent: new __WEBPACK_IMPORTED_MODULE_2__Datalist_js__["a" /* Datalist */](),
			translation: '',
			validations: {
				nominalFeature: 'datalist_required|datalist_exists',
				pronominalFeature: 'datalist_required|datalist_exists'
			}
		};
	},


	computed: {
		filteredParadigms: function filteredParadigms() {
			var _this = this;

			return this.paradigms.filter(function (paradigm) {
				return paradigm.language_id == _this.language.id;
			});
		},
		translationRequired: function translationRequired() {
			return this.morphemes.length == 0 || !this.morphemesContainStem;
		},
		translationRules: function translationRules() {
			if (this.morphemes.length == 0 || this.morphemesContainStem) {
				return '';
			}

			return 'required';
		},
		paradigmHasPronominalFeature: function paradigmHasPronominalFeature() {
			var paradigm = this.getParadigm();
			var result = false;

			if (paradigm) {
				result = paradigm.type.hasPronominalFeature;
			}

			return result;
		},
		paradigmHasNominalFeature: function paradigmHasNominalFeature() {
			var paradigm = this.getParadigm();
			var result = false;

			if (paradigm) {
				result = paradigm.type.hasNominalFeature;
			}

			return result;
		},
		morphemesContainStem: function morphemesContainStem() {
			var stems = ['V', 'N'];

			var result = this.morphemes.find(function (item) {
				return stems.includes(item.name.replace(/[-*]/g, ''));
			});

			return typeof result !== 'undefined';
		}
	},

	watch: {
		language: function language() {
			this.paradigm = new __WEBPACK_IMPORTED_MODULE_2__Datalist_js__["a" /* Datalist */]();
		},
		paradigm: function paradigm() {
			this.pronominalFeature = new __WEBPACK_IMPORTED_MODULE_2__Datalist_js__["a" /* Datalist */]();
			this.nominalFeature = new __WEBPACK_IMPORTED_MODULE_2__Datalist_js__["a" /* Datalist */]();

			if (this.paradigmHasPronominalFeature) {
				this.validations.pronominalFeature = 'datalist_required|datalist_exists';
			} else {
				this.validations.pronominalFeature = '';
			}

			if (this.paradigmHasNominalFeature) {
				this.validations.nominalFeature = 'datalist_required|datalist_exists';
			} else {
				this.validations.nominalFeature = '';
			}
		},
		translationRequired: function translationRequired(value) {
			if (!value) {
				this.translation = '';
			}
		}
	},

	mounted: function mounted() {
		var _this2 = this;

		if (this.oldParadigm) {
			Vue.nextTick(function () {
				_this2.$refs.paradigm.update(_this2.oldParadigm);
				if (_this2.oldPronominalFeature) {
					Vue.nextTick(function () {
						_this2.$refs.pronominalFeature.update(_this2.oldPronominalFeature);
					});
				}

				if (_this2.oldNominalFeature) {
					Vue.nextTick(function () {
						_this2.$refs.nominalFeature.update(_this2.oldNominalFeature);
					});
				}
			});
		}
	},
	created: function created() {
		if (this.oldTranslation) {
			this.translation = this.oldTranslation;
		}
	},


	methods: {
		getParadigm: function getParadigm() {
			var id = this.paradigm.id;
			var lookup = null;

			if (id) {
				lookup = this.paradigms.find(function (paradigm) {
					return paradigm.id == id;
				});
			}

			return lookup;
		}
	}
});

/***/ }),

/***/ "./resources/assets/js/components/forms/NominalForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/forms/NominalForm.vue")
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
Component.options.__file = "resources/assets/js/components/forms/NominalForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-71c4068e", Component.options)
  } else {
    hotAPI.reload("data-v-71c4068e", Component.options)
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