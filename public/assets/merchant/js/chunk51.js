webpackJsonp([51],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Bookmark.vue":
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
	props: ['uri', 'bookmarked'],

	data: function data() {
		return {
			comment: '',
			loading: false,
			bookmarkable: true
		};
	},
	created: function created() {
		if (this.bookmarked == '1') {
			this.bookmarkable = false;
		}
	},


	methods: {
		openModal: function openModal() {
			this.$refs.modal.open();
			this.$refs.textarea.editor.focus();
		},
		unBookmark: function unBookmark() {
			var _this = this;

			this.loading = true;

			axios.delete(this.uri + '/bookmark').then(function (response) {
				_this.loading = false;
				_this.bookmarkable = true;
			}).catch(function (error) {
				_this.loading = false;
				alert('Error in bookmarking');
			});
		},
		onSubmit: function onSubmit() {
			var _this2 = this;

			this.loading = true;

			axios.post(this.uri + '/bookmark', { comment: this.comment }).then(function (response) {
				_this2.loading = false;
				_this2.comment = '';
				_this2.$refs.modal.close();
				_this2.bookmarkable = false;
			}).catch(function (error) {
				_this2.loading = false;
				alert('Error in bookmarking.');
			});
		}
	}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5dd2936d\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Bookmark.vue":
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
    { staticStyle: { display: "flex" } },
    [
      _c(
        "a",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.bookmarkable,
              expression: "bookmarkable"
            }
          ],
          staticClass: "card-header-icon",
          on: { click: _vm.openModal }
        },
        [_vm._m(0)]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.bookmarkable,
              expression: "!bookmarkable"
            }
          ],
          staticClass: "card-header-icon",
          on: { click: _vm.unBookmark }
        },
        [
          _c("span", { staticClass: "icon" }, [
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.loading,
                  expression: "loading"
                }
              ],
              staticClass: "fa fa-spinner fa-pulse fa-3x fa-fw"
            }),
            _vm._v(" "),
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.loading,
                  expression: "!loading"
                }
              ],
              staticClass: "fa fa-bookmark",
              attrs: { title: "Remove from bookmarks" }
            })
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "alg-modal",
        { ref: "modal" },
        [
          _c("div", { attrs: { slot: "title" }, slot: "title" }, [
            _vm._v("\n\t\t\tBookmark\n\t\t")
          ]),
          _vm._v(" "),
          _c("em", [_vm._v("Add a comment if desired:")]),
          _vm._v(" "),
          _c("alg-textarea", {
            ref: "textarea",
            attrs: { name: _vm.comment },
            model: {
              value: _vm.comment,
              callback: function($$v) {
                _vm.comment = $$v
              },
              expression: "comment"
            }
          }),
          _vm._v(" "),
          _c("div", { attrs: { slot: "footer" }, slot: "footer" }, [
            _c(
              "button",
              {
                staticClass: "button is-success",
                attrs: { type: "submit" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.onSubmit($event)
                  }
                }
              },
              [_vm._v("Bookmark")]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "icon" }, [
              _c("i", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.loading,
                    expression: "loading"
                  }
                ],
                staticClass: "fa fa-spinner fa-pulse fa-3x fa-fw"
              })
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-bookmark-o", attrs: { title: "Bookmark" } })
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5dd2936d", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "./resources/assets/js/components/Bookmark.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_Bookmark_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Bookmark.vue");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5dd2936d_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Bookmark_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5dd2936d\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Bookmark.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_Bookmark_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5dd2936d_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Bookmark_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5dd2936d_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Bookmark_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Bookmark.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5dd2936d", Component.options)
  } else {
    hotAPI.reload("data-v-5dd2936d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});