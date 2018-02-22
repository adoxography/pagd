webpackJsonp([53],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Filter.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Filter = function () {
	function Filter(name, value, operator) {
		_classCallCheck(this, Filter);

		this.keys = name.split('.');
		this.operator = operator;
		this.setValue(value);
	}

	_createClass(Filter, [{
		key: 'allows',
		value: function allows(item) {
			var itemValue = this.getValue(item);
			var rc = false;

			if (this.value == 'null') {
				return itemValue == null;
			} else if (!this.value) {
				rc = true;
			} else if (itemValue === null) {
				rc = false;
			} else if (this.operator == 'like') {
				var val = itemValue.toLowerCase();

				if (val.includes(this.value) || val.replace(/\(|\)/g, '').includes(this.value)) {
					rc = true;
				}
			} else if (itemValue == this.value) {
				rc = true;
			}

			return rc;
		}
	}, {
		key: 'update',
		value: function update(newValue) {
			this.setValue(newValue);
		}
	}, {
		key: 'getValue',
		value: function getValue(item) {
			var found = true;

			if (item.form) {
				item = item.form;
			}

			for (var i = 0; i < this.keys.length && found; i++) {
				var key = this.keys[i];

				if (item.hasOwnProperty(key)) {
					item = item[key];
				} else {
					item = null;
					found = false;
				}
			}

			return item;
		}
	}, {
		key: 'setValue',
		value: function setValue(newValue) {
			if (typeof newValue === 'string') {
				this.value = newValue.toLowerCase();
			} else {
				this.value = newValue;
			}
		}
	}]);

	return Filter;
}();

/* harmony default export */ __webpack_exports__["a"] = ({
	props: ["lists"],

	data: function data() {
		return {
			filteredLists: [],
			filters: {}
		};
	},
	created: function created() {
		this.filteredLists = this.lists;
	},


	methods: {
		onInput: function onInput(event) {
			var name = event.target.name;
			var value = event.target.value;
			var operator = event.target.dataset.operator;

			if (this.filters[name]) {
				this.filters[name].update(value);
			} else {
				this.filters[name] = new Filter(name, value, operator);
			}

			this.filter();
		},
		filter: function filter() {
			var _this = this;

			var tempLists = {};

			_.each(this.lists, function (list, key) {

				if (Array.isArray(list)) {
					var tempList = [];

					list.forEach(function (item) {
						if (!_this.isFiltered(item)) {
							tempList.push(item);
						}
					});

					tempLists[key] = tempList;
				}
			});

			this.filteredLists = tempLists;
		},
		isFiltered: function isFiltered(item) {
			var rc = false;

			_.forEach(this.filters, function (filter) {
				if (!filter.allows(item)) {
					rc = true;
					return false;
				}
			});

			return rc;
		}
	}
});

/***/ }),

/***/ "./resources/assets/js/components/Filter.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_Filter_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Filter.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_Filter_vue__["a" /* default */],
  __vue_render__,
  __vue_static_render_fns__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Filter.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4aa1e46f", Component.options)
  } else {
    hotAPI.reload("data-v-4aa1e46f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});