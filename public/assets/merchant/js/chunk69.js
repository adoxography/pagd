webpackJsonp([69],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Typeahead.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_typeahead__ = __webpack_require__("./node_modules/vue-typeahead/dist/vue-typeahead.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_typeahead___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_typeahead__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_input_tag__ = __webpack_require__("./node_modules/vue-input-tag/dist/vueInputTag.common.js");
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Typeahead.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nli.active {\n\tbackground-color:red;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Typeahead.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Typeahead.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Typeahead.vue?vue&type=style&index=0&lang=css&", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Typeahead.vue?vue&type=style&index=0&lang=css&");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Typeahead.vue?vue&type=template&id=6fdc9f20&":
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



/***/ }),

/***/ "./resources/assets/js/components/Typeahead.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Typeahead_vue_vue_type_template_id_6fdc9f20___ = __webpack_require__("./resources/assets/js/components/Typeahead.vue?vue&type=template&id=6fdc9f20&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Typeahead_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Typeahead.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Typeahead_vue_vue_type_style_index_0_lang_css___ = __webpack_require__("./resources/assets/js/components/Typeahead.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Typeahead_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Typeahead_vue_vue_type_template_id_6fdc9f20___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Typeahead_vue_vue_type_template_id_6fdc9f20___["b" /* staticRenderFns */],
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
      api.createRecord('6fdc9f20', component.options)
    } else {
      api.reload('6fdc9f20', component.options)
    }
    module.hot.accept("./Typeahead.vue?vue&type=template&id=6fdc9f20&", function () {
      api.rerender('6fdc9f20', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/Typeahead.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Typeahead.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Typeahead_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Typeahead.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Typeahead_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Typeahead.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Typeahead_vue_vue_type_style_index_0_lang_css___ = __webpack_require__("./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Typeahead.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Typeahead_vue_vue_type_style_index_0_lang_css____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Typeahead_vue_vue_type_style_index_0_lang_css___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Typeahead_vue_vue_type_style_index_0_lang_css____default.a); 

/***/ }),

/***/ "./resources/assets/js/components/Typeahead.vue?vue&type=template&id=6fdc9f20&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Typeahead_vue_vue_type_template_id_6fdc9f20___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Typeahead.vue?vue&type=template&id=6fdc9f20&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Typeahead_vue_vue_type_template_id_6fdc9f20___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Typeahead_vue_vue_type_template_id_6fdc9f20___["b"]; });


/***/ })

});