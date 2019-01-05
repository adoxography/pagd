webpackJsonp([89],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Order.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuedraggable__ = __webpack_require__("./node_modules/vuedraggable/dist/vuedraggable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuedraggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuedraggable__);
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



/* harmony default export */ __webpack_exports__["a"] = ({
	props: ['list'],

	components: {
		draggable: __WEBPACK_IMPORTED_MODULE_0_vuedraggable___default.a
	},

	data: function data() {
		return {
			listArray: []
		};
	},


	methods: {
		renderName: function renderName(item) {
			var name = item.name;

			if (item.type == 'App\\Group') {
				name += " languages";
			}

			return name;
		}
	},

	created: function created() {
		this.listArray = _.sortBy(this.list, function (item) {
			return item.position;
		});
	}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Order.vue?vue&type=template&id=300db8a7&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "order-languages" },
    [
      _c(
        "draggable",
        {
          model: {
            value: _vm.listArray,
            callback: function($$v) {
              _vm.listArray = $$v
            },
            expression: "listArray"
          }
        },
        _vm._l(_vm.listArray, function(item, n) {
          return _c("div", [
            _c(
              "div",
              {
                staticStyle: {
                  border: "1px solid black",
                  "border-radius": "1rem",
                  "margin-bottom": "1rem",
                  padding: ".5rem",
                  cursor: "move"
                },
                attrs: { id: item.name }
              },
              [
                _c(
                  "p",
                  {
                    class: {
                      "is-danger": item.position < 0 && _vm.listArray.length > 1
                    }
                  },
                  [
                    _vm._v(
                      "\n\t\t\t\t\t" +
                        _vm._s(_vm.renderName(item)) +
                        "\n\t\t\t\t"
                    )
                  ]
                ),
                _vm._v(" "),
                _c("input", {
                  attrs: { type: "hidden", name: "ids[]" },
                  domProps: { value: item.id }
                }),
                _vm._v(" "),
                _c("input", {
                  attrs: { type: "hidden", name: "types[]" },
                  domProps: { value: item.type }
                }),
                _vm._v(" "),
                _c("input", {
                  attrs: { type: "hidden", name: "positions[]" },
                  domProps: { value: n }
                })
              ]
            )
          ])
        })
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/Order.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Order_vue_vue_type_template_id_300db8a7___ = __webpack_require__("./resources/assets/js/components/Order.vue?vue&type=template&id=300db8a7&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Order_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Order.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Order_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Order_vue_vue_type_template_id_300db8a7___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Order_vue_vue_type_template_id_300db8a7___["b" /* staticRenderFns */],
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
      api.createRecord('300db8a7', component.options)
    } else {
      api.reload('300db8a7', component.options)
    }
    module.hot.accept("./Order.vue?vue&type=template&id=300db8a7&", function () {
      api.rerender('300db8a7', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/Order.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Order.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Order.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Order.vue?vue&type=template&id=300db8a7&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_300db8a7___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Order.vue?vue&type=template&id=300db8a7&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_300db8a7___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_300db8a7___["b"]; });


/***/ })

});