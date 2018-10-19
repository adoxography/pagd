webpackJsonp([27],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Paradigm-Search.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
	props: ['languages', 'orders', 'modes', 'preset', 'active'],

	data: function data() {
		return {
			activeTab: ''
		};
	},


	methods: {
		onTabChanged: function onTabChanged(searchName) {
			var oldSearchName = void 0;
			var oldSearch = void 0;
			var newSearch = void 0;

			// Figure out which searches are which
			if (searchName === 'Basic') {
				oldSearchName = 'Advanced';
			} else {
				oldSearchName = 'Basic';
			}

			// Recall the searches
			oldSearch = this.$refs[oldSearchName];
			newSearch = this.$refs[searchName];

			// Load the data from the old search into the new one
			newSearch.importData(oldSearch.getData());
		}
	},

	created: function created() {
		if (this.active) {
			this.activeTab = this.active;
		} else {
			this.activeTab = 'Basic';
		}
	}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Paradigm-Search.vue?vue&type=template&id=71b77d43&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "alg-tabs",
    {
      attrs: { active: _vm.activeTab },
      on: {
        tabChanged: function($event) {
          _vm.onTabChanged($event)
        }
      }
    },
    [
      _c(
        "alg-tab",
        { attrs: { name: "Basic" } },
        [
          _c("alg-basic-paradigm-search", {
            ref: "Basic",
            attrs: { languages: _vm.languages }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "alg-tab",
        { attrs: { name: "Advanced" } },
        [
          _c("alg-advanced-paradigm-search", {
            ref: "Advanced",
            attrs: {
              orders: _vm.orders,
              modes: _vm.modes,
              languages: _vm.languages,
              preset: _vm.preset
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/forms/Paradigm-Search.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Paradigm_Search_vue_vue_type_template_id_71b77d43___ = __webpack_require__("./resources/assets/js/components/forms/Paradigm-Search.vue?vue&type=template&id=71b77d43&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Paradigm_Search_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/forms/Paradigm-Search.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Paradigm_Search_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Paradigm_Search_vue_vue_type_template_id_71b77d43___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Paradigm_Search_vue_vue_type_template_id_71b77d43___["b" /* staticRenderFns */],
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
      api.createRecord('71b77d43', component.options)
    } else {
      api.reload('71b77d43', component.options)
    }
    module.hot.accept("./Paradigm-Search.vue?vue&type=template&id=71b77d43&", function () {
      api.rerender('71b77d43', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/forms/Paradigm-Search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/forms/Paradigm-Search.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paradigm_Search_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Paradigm-Search.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paradigm_Search_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/forms/Paradigm-Search.vue?vue&type=template&id=71b77d43&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paradigm_Search_vue_vue_type_template_id_71b77d43___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Paradigm-Search.vue?vue&type=template&id=71b77d43&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paradigm_Search_vue_vue_type_template_id_71b77d43___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paradigm_Search_vue_vue_type_template_id_71b77d43___["b"]; });


/***/ })

});