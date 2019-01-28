<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:public/assets/merchant/js/chunk57.js
<<<<<<< HEAD:public/assets/merchant/js/chunk57.js
webpackJsonp([57,72],{
=======
webpackJsonp([57],{
>>>>>>> Update sources component

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Pagination-Full.vue?vue&type=script&lang=js&":
=======
webpackJsonp([57],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/SelectAll.vue?vue&type=script&lang=js&":
>>>>>>> Move gloss rendering into the GlossLine class
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
<<<<<<< HEAD
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
<<<<<<< HEAD



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

/* harmony default export */ __webpack_exports__["a"] = ({
	extends: __WEBPACK_IMPORTED_MODULE_0__Form__["default"],

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
=======
webpackJsonp([4,18],{
>>>>>>> Adapt async autocomplete into Buefy component:public/assets/merchant/js/chunk4.js
=======
webpackJsonp([4],{
>>>>>>> Remove unneeded components:public/assets/merchant/js/chunk4.js

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
=======
/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['pages', 'value', 'alpha', 'labels'],
>>>>>>> Update sources component
  methods: {
    onClick: function onClick(newValue) {
      this.$emit('input', newValue);
    },
    printLabel: function printLabel(index) {
      if (this.labels) {
        return this.labels[index];
      } else if (this.alpha) {
        return (index + 10).toString(36).toUpperCase();
      } else {
        return index + 1;
      }
=======
/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {
    checkboxes: function checkboxes() {
      return $("#select-all-section input:checkbox");
    }
  },
  methods: {
    toggle: function toggle(setting) {
      this.checkboxes.prop("checked", setting);
>>>>>>> Move gloss rendering into the GlossLine class
    }
  }
});

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Form.vue?vue&type=template&id=68350a1b&":
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Pagination-Full.vue?vue&type=template&id=f07829ca&":
>>>>>>> Update sources component
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/SelectAll.vue?vue&type=template&id=3dd2905e&":
>>>>>>> Move gloss rendering into the GlossLine class
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  return _c("nav", { staticClass: "alg-pagination-full" }, [
    _c(
      "a",
      {
        staticClass: "pagination-previous",
        attrs: { disabled: _vm.value == 0 },
        on: {
          click: function($event) {
            _vm.onClick(_vm.value - 1)
          }
        }
      },
      [_vm._v("\n\t\t\tPrevious\n\t")]
    ),
    _vm._v(" "),
    _c(
      "a",
      {
        staticClass: "pagination-next",
        attrs: { disabled: _vm.value == _vm.pages - 1 },
        on: {
          click: function($event) {
            _vm.onClick(_vm.value + 1)
          }
        }
      },
      [_vm._v("\n\t\t\tNext\n\t")]
    ),
    _vm._v(" "),
    _c(
      "ul",
      { staticClass: "pagination-list" },
      _vm._l(_vm.pages, function(n) {
        return _c("li", [
          _c(
            "a",
            {
              staticClass: "pagination-link",
              attrs: { disabled: _vm.value == n - 1 },
              on: {
                click: function($event) {
                  _vm.onClick(n - 1)
                }
              }
            },
            [_vm._v(_vm._s(_vm.printLabel(n - 1)))]
          )
        ])
>>>>>>> Update sources component
      }),
      0
    )
  ])
=======
  return _c(
    "div",
    { attrs: { id: "select-all-section" } },
    [
      _c(
        "a",
        {
          staticClass: "button",
          on: {
            click: function($event) {
              _vm.toggle(true)
            }
          }
        },
        [_vm._v("Select all")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "button",
          on: {
            click: function($event) {
              _vm.toggle(false)
            }
          }
        },
        [_vm._v("Select none")]
      ),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
>>>>>>> Move gloss rendering into the GlossLine class
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "./resources/assets/js/components/forms/Form.vue":
=======
/***/ "./resources/assets/js/components/Pagination-Full.vue":
>>>>>>> Update sources component
=======
/***/ "./resources/assets/js/components/SelectAll.vue":
>>>>>>> Move gloss rendering into the GlossLine class
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form_vue_vue_type_template_id_68350a1b___ = __webpack_require__("./resources/assets/js/components/forms/Form.vue?vue&type=template&id=68350a1b&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/forms/Form.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Pagination_Full_vue_vue_type_template_id_f07829ca___ = __webpack_require__("./resources/assets/js/components/Pagination-Full.vue?vue&type=template&id=f07829ca&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Pagination_Full_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Pagination-Full.vue?vue&type=script&lang=js&");
>>>>>>> Update sources component
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SelectAll_vue_vue_type_template_id_3dd2905e___ = __webpack_require__("./resources/assets/js/components/SelectAll.vue?vue&type=template&id=3dd2905e&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SelectAll_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/SelectAll.vue?vue&type=script&lang=js&");
>>>>>>> Move gloss rendering into the GlossLine class
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
<<<<<<< HEAD
<<<<<<< HEAD
  __WEBPACK_IMPORTED_MODULE_1__Form_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Form_vue_vue_type_template_id_68350a1b___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Form_vue_vue_type_template_id_68350a1b___["b" /* staticRenderFns */],
=======
  __WEBPACK_IMPORTED_MODULE_1__Pagination_Full_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Pagination_Full_vue_vue_type_template_id_f07829ca___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Pagination_Full_vue_vue_type_template_id_f07829ca___["b" /* staticRenderFns */],
>>>>>>> Update sources component
=======
  __WEBPACK_IMPORTED_MODULE_1__SelectAll_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__SelectAll_vue_vue_type_template_id_3dd2905e___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__SelectAll_vue_vue_type_template_id_3dd2905e___["b" /* staticRenderFns */],
>>>>>>> Move gloss rendering into the GlossLine class
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
<<<<<<< HEAD
<<<<<<< HEAD
      api.createRecord('68350a1b', component.options)
    } else {
      api.reload('68350a1b', component.options)
    }
    module.hot.accept("./Form.vue?vue&type=template&id=68350a1b&", function () {
      api.rerender('68350a1b', {
=======
      api.createRecord('f07829ca', component.options)
    } else {
      api.reload('f07829ca', component.options)
    }
    module.hot.accept("./Pagination-Full.vue?vue&type=template&id=f07829ca&", function () {
      api.rerender('f07829ca', {
>>>>>>> Update sources component
=======
      api.createRecord('3dd2905e', component.options)
    } else {
      api.reload('3dd2905e', component.options)
    }
    module.hot.accept("./SelectAll.vue?vue&type=template&id=3dd2905e&", function () {
      api.rerender('3dd2905e', {
>>>>>>> Move gloss rendering into the GlossLine class
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
component.options.__file = "resources/assets/js/components/forms/Form.vue"
=======
component.options.__file = "resources/assets/js/components/Pagination-Full.vue"
>>>>>>> Update sources component
=======
component.options.__file = "resources/assets/js/components/SelectAll.vue"
>>>>>>> Move gloss rendering into the GlossLine class
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
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
          return _this.$root.errors.add({
            field: field,
            msg: message
          });
        });
      });
    }

    ;
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
=======
/***/ "./resources/assets/js/components/Pagination-Full.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_Full_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Pagination-Full.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_Full_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Pagination-Full.vue?vue&type=template&id=f07829ca&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_Full_vue_vue_type_template_id_f07829ca___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Pagination-Full.vue?vue&type=template&id=f07829ca&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_Full_vue_vue_type_template_id_f07829ca___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_Full_vue_vue_type_template_id_f07829ca___["b"]; });

>>>>>>> Update sources component
=======
/***/ "./resources/assets/js/components/SelectAll.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectAll_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/SelectAll.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectAll_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/SelectAll.vue?vue&type=template&id=3dd2905e&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectAll_vue_vue_type_template_id_3dd2905e___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/SelectAll.vue?vue&type=template&id=3dd2905e&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectAll_vue_vue_type_template_id_3dd2905e___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectAll_vue_vue_type_template_id_3dd2905e___["b"]; });

>>>>>>> Move gloss rendering into the GlossLine class

/***/ })

});