webpackJsonp([72],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Typeahead.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_typeahead__ = __webpack_require__("./node_modules/vue-typeahead/dist/vue-typeahead.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_typeahead___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_typeahead__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_input_tag__ = __webpack_require__("./node_modules/vue-input-tag/dist/vue-input-tag.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_input_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_input_tag__);
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
//




/* harmony default export */ __webpack_exports__["a"] = ({
	extends: __WEBPACK_IMPORTED_MODULE_0_vue_typeahead___default.a,

	props: ['list'],

	components: {
		InputTag: __WEBPACK_IMPORTED_MODULE_1_vue_input_tag___default.a,

		editable: {
			props: ['value'],

			template: '\n\t\t\t\t<div\n\t\t\t\t\tcontenteditable="true"\n\t\t\t\t\tclass="input"\n\t\t\t\t\t:innerHTML="value"\n\t\t\t\t\t@input="update($event)"\n\t\t\t\t\t@keydown="keydown($event)"\n\t\t\t\t>{{ value }}</div>\n\t\t\t',

			// mounted() {
			// 	if (this.value) {
			// 		this.$el.innerHTML = "<p>" + this.value + "</p>";
			// 	}
			// },

			methods: {
				update: function update(event) {
					console.log(this.clearUselessTags(event.target.innerHTML));
					this.$emit('input', this.clearUselessTags(event.target.innerHTML));
				},
				clearUselessTags: function clearUselessTags(str) {
					return str.replace(/<[^>]*>{2}/, '');
				},
				keydown: function keydown(event) {
					this.$emit('keydown', event);
				}
			}
		}
	},

	data: function data() {
		return {
			queryParamName: 'term',
			id: '',
			tagsArray: []
		};
	},


	methods: {
		onHit: function onHit(item) {
			this.query = item.name;
			this.id = item.id;
			this.items = [];
		},
		triggerUpdate: function triggerUpdate() {
			if (Array.isArray(this.list)) {
				this.filter();
			} else {
				this.update();
			}
		},
		filter: function filter() {
			var _this = this;

			this.items = this.list.filter(function (item) {
				return item.name.toLowerCase().includes(_this.query.toLowerCase());
			});
		},
		onDown: function onDown() {
			this.filter();

			if (!this.hasItems) {
				this.items = this.list;
			}
		},
		enter: function enter(event) {
			if (this.current >= 0) {
				event.preventDefault();
				this.hit();
			}
		},
		toggleList: function toggleList() {
			if (this.hasItems) {
				this.items = [];
			} else {
				this.filter();

				if (!this.hasItems) {
					this.items = this.list;
				}
			}
		}
	}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Typeahead.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nli.active {\n\tbackground-color:red;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6fdc9f20\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Typeahead.vue":
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
    [
      _c("input-tag", { attrs: { tags: _vm.tagsArray } }),
      _vm._v(" "),
      _c("button", { on: { click: _vm.toggleList } }, [_vm._v("Click me")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          { name: "model", rawName: "v-model", value: _vm.id, expression: "id" }
        ],
        attrs: { type: "hidden" },
        domProps: { value: _vm.id },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.id = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c(
        "ul",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.hasItems,
              expression: "hasItems"
            }
          ]
        },
        _vm._l(_vm.items, function(item, $item) {
          return _c(
            "li",
            {
              class: _vm.activeClass($item),
              on: {
                mousedown: _vm.hit,
                mousemove: function($event) {
                  _vm.setActive($item)
                }
              }
            },
            [_c("span", { domProps: { textContent: _vm._s(item.name) } })]
          )
        })
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6fdc9f20", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Typeahead.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Typeahead.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("./node_modules/vue-loader/node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("39762d48", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Typeahead.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Typeahead.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/components/Typeahead.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_Typeahead_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Typeahead.vue");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6fdc9f20_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Typeahead_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6fdc9f20\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Typeahead.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-loader/node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Typeahead.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_Typeahead_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6fdc9f20_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Typeahead_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6fdc9f20_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Typeahead_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Typeahead.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6fdc9f20", Component.options)
  } else {
    hotAPI.reload("data-v-6fdc9f20", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});