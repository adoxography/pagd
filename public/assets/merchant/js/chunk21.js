webpackJsonp([21],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/DataList.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_focus__ = __webpack_require__("./node_modules/vue-focus/dist/vue-focus.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_focus___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_focus__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_clickaway__ = __webpack_require__("./node_modules/vue-clickaway/dist/vue-clickaway.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_clickaway___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_clickaway__);
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
	props: ['list', 'name', 'id', 'disabled', 'required', 'value', 'placeholder', 'hasErrors', 'initial', 'autofocus'],

	computed: {
		hasValue: function hasValue() {
			return this.value.id > 0 && !this.showList;
		}
	},

	directives: {
		focus: __WEBPACK_IMPORTED_MODULE_0_vue_focus__["focus"],
		onClickaway: __WEBPACK_IMPORTED_MODULE_1_vue_clickaway__["directive"]
	},

	data: function data() {
		return {
			options: [],
			showList: false,
			writing: false,
			curr: 0,
			focused: false
		};
	},
	created: function created() {
		if (this.initial) {
			this.update(this.initial);
		}
	},


	methods: {
		getID: function getID(text) {
			var val = "";

			for (var i = 0; i < this.list.length && val === ""; i++) {
				if (this.list[i].name.toLowerCase() === text.toLowerCase()) {
					val = this.list[i].id;
				}
			}

			return val;
		},
		reset: function reset() {
			// Hide the list
			this.showList = false;
			this.writing = false;

			// Reset the current element
			this.curr = 0;
		},


		/**
   * Activated when the down arrow is pressed
   */
		toggleList: function toggleList() {
			// Reset the list
			this.options = this.list;

			// Toggle its visibility
			this.showList = !this.showList;
		},
		closeList: function closeList() {
			this.options = this.list;
			this.showList = false;
		},
		selectItem: function selectItem(item) {
			this.reset();

			// Trigger an input event
			this.update(item);

			this.$emit("select");
		},
		onKeyUp: function onKeyUp(keyCode) {
			if (keyCode == 40) {
				// Down arrow
				this.handleDownKey();
			} else if (keyCode == 38) {
				// Up arrow
				this.handleUpKey();
			} else if (keyCode != 13) {
				// Anything else, aside from the enter key
				// Filter the options based on the current text
				this.filterOptions();

				// Only show the list if there is text in the field and there are options in the list
				if (this.value.text && this.value.text.length > 0 && this.options.length > 0) {
					this.showList = true;
				}

				this.writing = true;
			}
		},
		onFocus: function onFocus() {
			this.focused = true;
			this.$emit('focus');
		},
		onBlur: function onBlur() {
			this.focused = false;
			this.$emit('blur');
		},
		onKeyDown: function onKeyDown(event) {
			if (event.keyCode == 9) {
				// Tab key
				this.showList = false;
				this.$emit("keydown", {
					keyCode: 9
				});
			} else if (event.keyCode == 13) {
				// Enter key
				this.handleEnterKey(event);
				this.showList = false;
			}
		},
		handleHover: function handleHover(item) {
			for (var i = 0; i < this.options.length; i++) {
				if (this.options[i].name == item) {
					this.curr = i + 1;
				}
			}
		},
		handleButtonClicked: function handleButtonClicked() {
			if (!this.disabled) {
				this.toggleList();
				this.$refs.textInput.focus();
			}
		},
		filterOptions: function filterOptions() {
			var _this = this;

			this.options = this.list.filter(function (item) {
				var currText = void 0;

				if (_this.value.text) {
					currText = _this.value.text.toLowerCase();
				} else {
					currText = '';
				}

				return item.name.toLowerCase().includes(currText);
			});
		},
		handleDownKey: function handleDownKey() {
			if (this.showList) {
				// The list is open

				// Increment the current selection, making sure to wrap it around the list
				this.curr++;
				this.curr %= this.options.length + 1;

				// If the current selection isn't the textbox itself, set the textbox to the current selection
				if (this.curr > 0) {
					this.update(this.options[this.curr - 1].name);
				}
			} else {
				// The list is closed

				// Reset the list
				this.options = this.list;

				// Open the list
				this.showList = true;
			}
		},
		handleUpKey: function handleUpKey() {
			this.curr += this.options.length;
			this.curr %= this.options.length + 1;
			if (this.curr > 0) {
				this.update(this.options[this.curr - 1].name);
			}
		},
		handleEnterKey: function handleEnterKey(event) {
			if (this.curr > 0) {
				// The list is open
				event.preventDefault();
				this.selectItem(this.options[this.curr - 1].name);
			} else if (this.value.text.length > 0 && this.writing) {
				event.preventDefault();
				this.$emit("keydown", {
					keyCode: 13
				});
			}
		},
		activeItem: function activeItem(n) {
			return n + 1 == this.curr;
		},
		update: function update(newText) {
			var id = this.getID(newText);

			this.$emit("input", {
				text: newText,
				id: id
			});
		}
	}
});

/***/ }),

/***/ "./node_modules/vue-clickaway/dist/vue-clickaway.common.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");
Vue = 'default' in Vue ? Vue['default'] : Vue;

var version = '2.1.0';

var compatible = (/^2\./).test(Vue.version);
if (!compatible) {
  Vue.util.warn('VueClickaway ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
}



// @SECTION: implementation

var HANDLER = '_vue_clickaway_handler';

function bind(el, binding) {
  unbind(el);

  var callback = binding.value;
  if (typeof callback !== 'function') {
    if (true) {
      Vue.util.warn(
        'v-' + binding.name + '="' +
        binding.expression + '" expects a function value, ' +
        'got ' + callback
      );
    }
    return;
  }

  // @NOTE: Vue binds directives in microtasks, while UI events are dispatched
  //        in macrotasks. This causes the listener to be set up before
  //        the "origin" click event (the event that lead to the binding of
  //        the directive) arrives at the document root. To work around that,
  //        we ignore events until the end of the "initial" macrotask.
  // @REFERENCE: https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
  // @REFERENCE: https://github.com/simplesmiler/vue-clickaway/issues/8
  var initialMacrotaskEnded = false;
  setTimeout(function() {
    initialMacrotaskEnded = true;
  }, 0);

  el[HANDLER] = function(ev) {
    // @NOTE: IE 5.0+
    // @REFERENCE: https://developer.mozilla.org/en/docs/Web/API/Node/contains
    if (initialMacrotaskEnded && !el.contains(ev.target)) {
      return callback(ev);
    }
  };

  document.documentElement.addEventListener('click', el[HANDLER], false);
}

function unbind(el) {
  document.documentElement.removeEventListener('click', el[HANDLER], false);
  delete el[HANDLER];
}

var directive = {
  bind: bind,
  update: function(el, binding) {
    if (binding.value === binding.oldValue) return;
    bind(el, binding);
  },
  unbind: unbind,
};

var mixin = {
  directives: { onClickaway: directive },
};

exports.version = version;
exports.directive = directive;
exports.mixin = mixin;

/***/ }),

/***/ "./node_modules/vue-focus/dist/vue-focus.common.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");
Vue = 'default' in Vue ? Vue['default'] : Vue;

var version = '2.1.0';

var compatible = (/^2\./).test(Vue.version);
if (!compatible) {
  Vue.util.warn('VueFocus ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
}

var focus = {
  inserted: function(el, binding) {
    if (binding.value) el.focus();
    else el.blur();
  },

  componentUpdated: function(el, binding) {
    if (binding.modifiers.lazy) {
      if (Boolean(binding.value) === Boolean(binding.oldValue)) {
        return;
      }
    }

    if (binding.value) el.focus();
    else el.blur();
  },
};

var mixin = {
  directives: {
    focus: focus,
  },
};

exports.version = version;
exports.focus = focus;
exports.mixin = mixin;

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ee5496c2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/DataList.vue":
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
    {
      directives: [
        {
          name: "on-clickaway",
          rawName: "v-on-clickaway",
          value: _vm.closeList,
          expression: "closeList"
        }
      ],
      staticClass: "alg-datalist alg-datalist-container"
    },
    [
      _c("div", { staticClass: "field has-addons" }, [
        _c("span", { staticClass: "control is-expanded" }, [
          _c("input", {
            directives: [
              {
                name: "focus",
                rawName: "v-focus",
                value: _vm.focused,
                expression: "focused"
              }
            ],
            ref: "textInput",
            staticClass: "input",
            class: { "is-danger": _vm.hasErrors },
            attrs: {
              type: "text",
              name: _vm.name,
              id: _vm.id,
              disabled: _vm.disabled,
              autocomplete: "off",
              placeholder: _vm.placeholder,
              autofocus: _vm.autofocus,
              required: _vm.required
            },
            domProps: { value: _vm.value.text },
            on: {
              keyup: function($event) {
                _vm.onKeyUp($event.keyCode)
              },
              keydown: function($event) {
                _vm.onKeyDown($event)
              },
              input: function($event) {
                _vm.update($event.target.value)
              },
              focus: _vm.onFocus,
              blur: _vm.onBlur
            }
          })
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "control" }, [
          _c(
            "a",
            {
              staticClass: "button",
              class: { "is-danger": _vm.hasErrors },
              attrs: { disabled: _vm.disabled },
              on: { click: _vm.handleButtonClicked }
            },
            [_vm._m(0)]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showList,
              expression: "showList"
            }
          ],
          staticClass: "box alg-datalist-dropdown"
        },
        [
          _c(
            "ul",
            _vm._l(_vm.options, function(option, index) {
              return _c("li", [
                _c(
                  "a",
                  {
                    class: { "is-highlighted": _vm.activeItem(index) },
                    on: {
                      click: function($event) {
                        _vm.selectItem(option.name)
                      },
                      mouseover: function($event) {
                        _vm.handleHover(option.name)
                      }
                    }
                  },
                  [_vm._v("\n\t\t\t\t\t" + _vm._s(option.name) + "\n\t\t\t\t")]
                )
              ])
            })
          )
        ]
      ),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: _vm.name + "_id" },
        domProps: { value: _vm.value.id }
      })
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small" }, [
      _c("i", { staticClass: "fa fa-chevron-down" })
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ee5496c2", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "./resources/assets/js/components/DataList.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_DataList_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/DataList.vue");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ee5496c2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DataList_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ee5496c2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/DataList.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_DataList_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ee5496c2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DataList_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ee5496c2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DataList_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/DataList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ee5496c2", Component.options)
  } else {
    hotAPI.reload("data-v-ee5496c2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});