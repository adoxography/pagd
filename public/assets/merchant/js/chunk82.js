webpackJsonp([82],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/AJAX-List.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_clickaway__ = __webpack_require__("./node_modules/vue-clickaway/dist/vue-clickaway.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_clickaway___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_clickaway__);
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

	props: ['name', 'id', 'value', 'with', 'uri', 'placeholder', 'disabled', 'initial'],

	data: function data() {
		return {
			showList: false,
			options: [],
			loading: false,
			curr: 0,
			extra: ''
		};
	},


	directives: {
		onClickaway: __WEBPACK_IMPORTED_MODULE_0_vue_clickaway__["directive"]
	},

	computed: {
		showCheck: function showCheck() {
			return !this.loading && this.value.id > 0 && !this.showList;
		}
	},

	mounted: function mounted() {
		var _this = this;

		this.$refs.list.contentEditable = true;

		if (this.initial) {
			Vue.nextTick(function () {
				_this.$emit('input', _this.initial);
			});
		}
	},


	methods: {
		onEnter: function onEnter(event) {
			if (this.showList) {
				// The list is open
				event.preventDefault();
				this.selectItem(this.options[this.curr - 1].name);
			}
		},


		//===========================================================================================================//
		// From http://stackoverflow.com/questions/1125292/how-to-move-cursor-to-end-of-contenteditable-entity
		setEndOfContenteditable: function setEndOfContenteditable(contentEditableElement) {
			var range, selection;
			if (document.createRange) //Firefox, Chrome, Opera, Safari, IE 9+
				{
					range = document.createRange(); //Create a range (a range is a like the selection but invisible)
					range.selectNodeContents(contentEditableElement); //Select the entire contents of the element with the range
					range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
					selection = window.getSelection(); //get the selection object (allows you to change selection)
					selection.removeAllRanges(); //remove any selections already made
					selection.addRange(range); //make the range you have just created the visible selection
				} else if (document.selection) //IE 8 and lower
				{
					range = document.body.createTextRange(); //Create a range (a range is a like the selection but invisible)
					range.moveToElementText(contentEditableElement); //Select the entire contents of the element with the range
					range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
					range.select(); //Select the range (make it the visible selection
				}
		},

		//===========================================================================================================//

		closeList: function closeList() {
			this.showList = false;
		},
		determineValue: function determineValue(text) {
			var found = false;
			var val = '';
			this.extra = '';

			for (var i = 0; i < this.options.length && !found; i++) {
				if (this.options[i].name.toLowerCase() === text.toLowerCase()) {
					val = this.options[i].id;
					this.extra = this.options[i].extra;

					if (this.options[i].name === text) {
						found = true;
					}
				}
			}

			return val;
		},
		selectItem: function selectItem(newText) {
			// Hide the list
			this.closeList();

			// Reset the current element
			this.curr = 0;

			this.update(newText);
		},
		activeItem: function activeItem(n) {
			return n + 1 == this.curr;
		},
		onHover: function onHover(item) {
			for (var i = 0; i < this.options.length; i++) {
				if (this.options[i].name == item) {
					this.curr = i + 1;
				}
			}
		},
		update: function update(newText) {
			var _this2 = this;

			var id = this.determineValue(newText);

			this.$emit('input', {
				text: newText,
				id: id,
				extra: this.extra
			});

			Vue.nextTick(function () {
				var list = _this2.$refs.list;
				_this2.setEndOfContenteditable(list);
			});
		},


		onInput: _.debounce(function (newText) {
			var _this3 = this;

			if (newText.length > 0) {
				this.closeList();
				this.loading = true;

				axios.get(this.uri, {
					params: {
						term: newText,
						options: this.with
					}
				}).then(function (response) {
					_this3.options = [];

					_.forEach(response.data, function (item) {
						item.name = _this3.formatString(item.name);
						_this3.options.push(item);
					});

					if (_this3.options.length > 0) {
						_this3.showList = true;
					}

					_this3.loading = false;
				});
			}

			this.update(newText);
		}, 500),

		formatString: function formatString(str) {
			var tempString = str.replace(/<(?:.|\n)*?>/gm, '');

			if (tempString.length > 60) {
				tempString = tempString.substring(0, 60);
				tempString += "...";
			}

			return tempString;
		},
		onKeyUp: function onKeyUp(keyCode) {
			if (keyCode == 40) {
				// Down arrow
				this.handleDownKey();
			} else if (keyCode == 38) {
				// Up arrow
				this.handleUpKey();
			}
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
			}
		},
		handleUpKey: function handleUpKey() {
			this.curr += this.options.length;
			this.curr %= this.options.length + 1;
			if (this.curr > 0) {
				this.update(this.options[this.curr - 1].name);
			}
		},
		reset: function reset() {
			this.update('');
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0d7862c4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AJAX-List.vue":
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
      staticClass: "alg-ajax-list"
    },
    [
      _c("div", { staticClass: "control has-icon has-icon-right" }, [
        _c("div", { staticClass: "alg-datalist-container" }, [
          _c("div", {
            ref: "list",
            staticClass: "input single-line",
            attrs: {
              id: _vm.id,
              type: "text",
              autocomplete: "off",
              rows: "1",
              placeholder: _vm.placeholder,
              disabled: _vm.disabled
            },
            domProps: { innerHTML: _vm._s(_vm.value.text) },
            on: {
              input: function($event) {
                _vm.onInput($event.target.textContent)
              },
              keyup: function($event) {
                _vm.onKeyUp($event.keyCode)
              },
              keydown: function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "enter", 13, $event.key)
                ) {
                  return null
                }
                _vm.onEnter($event)
              }
            }
          }),
          _vm._v(" "),
          _c("input", {
            attrs: { type: "hidden", name: _vm.name },
            domProps: { value: _vm.value.text }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value:
                    _vm.showList &&
                    _vm.options.length > 0 &&
                    _vm.value.text.length > 0,
                  expression:
                    "showList && options.length > 0 && value.text.length > 0"
                }
              ],
              staticClass: "box alg-datalist-dropdown"
            },
            [
              _c(
                "ul",
                { staticStyle: { "white-space": "nowrap" } },
                _vm._l(_vm.options, function(option, index) {
                  return _c("li", [
                    _c("a", {
                      class: { "is-highlighted": _vm.activeItem(index) },
                      domProps: { innerHTML: _vm._s(option.name) },
                      on: {
                        click: function($event) {
                          _vm.selectItem(option.name)
                        },
                        mouseover: function($event) {
                          _vm.onHover(option.name)
                        }
                      }
                    })
                  ])
                })
              )
            ]
          ),
          _vm._v(" "),
          _c("span", { staticClass: "icon is-small" }, [
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
                  value: _vm.showCheck,
                  expression: "showCheck"
                }
              ],
              staticClass: "fa fa-check",
              staticStyle: { color: "green" }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: _vm.name + "_id" },
        domProps: { value: _vm.value.id }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: _vm.name + "_extra" },
        domProps: { value: _vm.extra }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0d7862c4", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "./resources/assets/js/components/AJAX-List.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_AJAX_List_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/AJAX-List.vue");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0d7862c4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AJAX_List_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0d7862c4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AJAX-List.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_AJAX_List_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0d7862c4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AJAX_List_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0d7862c4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AJAX_List_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/AJAX-List.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d7862c4", Component.options)
  } else {
    hotAPI.reload("data-v-0d7862c4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});