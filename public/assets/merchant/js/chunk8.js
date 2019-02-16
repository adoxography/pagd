webpackJsonp([8],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/FloatingTypewriter.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_SpecialCharacters_js__ = __webpack_require__("./resources/assets/js/util/SpecialCharacters.js");
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
  data: function data() {
    return {
      lastFocus: null,
      open: false,
      characters: __WEBPACK_IMPORTED_MODULE_0__util_SpecialCharacters_js__["a" /* dictionary */]
    };
  },
  methods: {
    insertCharacter: function insertCharacter(text) {
      if (this.lastFocus) {
        if (this.lastFocus.tagName === 'DIV') {
          var selection = window.getSelection();
          var range = selection.getRangeAt(0);
          range.deleteContents();
          var node = document.createTextNode(text);
          range.insertNode(node);
          range.collapse(false);
        } else {
          var startIndex = this.lastFocus.selectionStart;
          var endIndex = this.lastFocus.selectionEnd;
          var currentValue = this.lastFocus.value;
          var newValue = currentValue.slice(0, startIndex) + text + currentValue.slice(endIndex);
          this.lastFocus.value = newValue;
          this.lastFocus.selectionStart = this.lastFocus.selectionEnd = startIndex + text.length;
        }

        var event = new Event('input', {
          'bubbles': true,
          'cancelable': true
        });
        this.lastFocus.dispatchEvent(event);
        this.lastFocus.focus();
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    var inputs = document.querySelectorAll('input[type="text"], div[contenteditable="true"]');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function _loop() {
        var input = _step.value;
        input.addEventListener('focus', function () {
          _this.lastFocus = input;
        });
      };

      for (var _iterator = inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        _loop();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/FloatingTypewriter.vue?vue&type=style&index=0&lang=sass&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".floating-typewriter {\n  z-index: 100;\n  position: absolute;\n  right: 4rem;\n  bottom: 3rem;\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: flex-end;\n}\n.floating-typewriter .toggle {\n    background-color: rgba(222, 255, 0, 0.5);\n    width: 4rem;\n    height: 4rem;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.floating-typewriter .panel {\n    background-color: white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    padding: .5rem;\n    margin-right: 1rem;\n}\n.floating-typewriter .panel .button {\n      width: 32px;\n      height: 32px;\n}\n.slide-from-right-enter-active, .slide-from-right-leave-active {\n  transition: all .3s ease;\n}\n.slide-from-right-enter, .slide-from-right-leave-to {\n  transform: translateX(10px);\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/FloatingTypewriter.vue?vue&type=style&index=0&lang=sass&":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/FloatingTypewriter.vue?vue&type=style&index=0&lang=sass&");
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
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FloatingTypewriter.vue?vue&type=style&index=0&lang=sass&", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FloatingTypewriter.vue?vue&type=style&index=0&lang=sass&");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/FloatingTypewriter.vue?vue&type=template&id=6190d1ca&":
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
      staticClass: "floating-typewriter",
      on: {
        mouseleave: function($event) {
          _vm.open = false
        }
      }
    },
    [
      _c(
        "a",
        {
          staticClass: "toggle",
          on: {
            mouseover: function($event) {
              _vm.open = true
            }
          }
        },
        [_vm._m(0)]
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "slide-from-right" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.open,
                expression: "open"
              }
            ],
            staticClass: "panel"
          },
          [
            _c(
              "ul",
              _vm._l(_vm.characters, function(list) {
                return _c(
                  "li",
                  _vm._l(list, function(char) {
                    return _c(
                      "a",
                      {
                        staticClass: "button",
                        on: {
                          click: function($event) {
                            _vm.insertCharacter(char.symbol)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(char.symbol) +
                            "\n          "
                        )
                      ]
                    )
                  }),
                  0
                )
              }),
              0
            )
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-medium" }, [
      _c("i", { staticClass: "fas fa-2x fa-keyboard" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/FloatingTypewriter.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FloatingTypewriter_vue_vue_type_template_id_6190d1ca___ = __webpack_require__("./resources/assets/js/components/FloatingTypewriter.vue?vue&type=template&id=6190d1ca&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FloatingTypewriter_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/FloatingTypewriter.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FloatingTypewriter_vue_vue_type_style_index_0_lang_sass___ = __webpack_require__("./resources/assets/js/components/FloatingTypewriter.vue?vue&type=style&index=0&lang=sass&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__FloatingTypewriter_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__FloatingTypewriter_vue_vue_type_template_id_6190d1ca___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__FloatingTypewriter_vue_vue_type_template_id_6190d1ca___["b" /* staticRenderFns */],
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
      api.createRecord('6190d1ca', component.options)
    } else {
      api.reload('6190d1ca', component.options)
    }
    module.hot.accept("./FloatingTypewriter.vue?vue&type=template&id=6190d1ca&", function () {
      api.rerender('6190d1ca', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/FloatingTypewriter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/FloatingTypewriter.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatingTypewriter_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/FloatingTypewriter.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatingTypewriter_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/FloatingTypewriter.vue?vue&type=style&index=0&lang=sass&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatingTypewriter_vue_vue_type_style_index_0_lang_sass___ = __webpack_require__("./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/FloatingTypewriter.vue?vue&type=style&index=0&lang=sass&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatingTypewriter_vue_vue_type_style_index_0_lang_sass____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatingTypewriter_vue_vue_type_style_index_0_lang_sass___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatingTypewriter_vue_vue_type_style_index_0_lang_sass____default.a); 

/***/ }),

/***/ "./resources/assets/js/components/FloatingTypewriter.vue?vue&type=template&id=6190d1ca&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatingTypewriter_vue_vue_type_template_id_6190d1ca___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/FloatingTypewriter.vue?vue&type=template&id=6190d1ca&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatingTypewriter_vue_vue_type_template_id_6190d1ca___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatingTypewriter_vue_vue_type_template_id_6190d1ca___["b"]; });


/***/ })

});