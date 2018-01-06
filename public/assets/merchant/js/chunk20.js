webpackJsonp([20],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Typewriter.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_SpecialCharacters__ = __webpack_require__("./resources/assets/js/util/SpecialCharacters.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        disabled: {
            default: false
        },

        options: {
            default: function _default() {
                return { size: 1 };
            }
        }
    },

    data: function data() {
        return {
            show: false,

            chars: __WEBPACK_IMPORTED_MODULE_0__util_SpecialCharacters__["a" /* dictionary */],

            keys: []
        };
    },


    computed: {
        inputField: function inputField() {
            var defaultSlot = this.$slots.default[0].elm;

            return defaultSlot.className == "input" ? defaultSlot : defaultSlot.getElementsByClassName("input")[0];
        }
    },

    methods: {
        onFocusIn: function onFocusIn() {
            this.show = true;
        },
        onFocusOut: function onFocusOut() {
            this.show = false;
        },
        append: function append(char) {
            var event = new Event('input', {
                'bubbles': true,
                'cancelable': true
            });

            if (this.inputField.tagName == 'DIV') {
                this.inputField.innerHTML += char.symbol;
            } else {
                this.inputField.value += char.symbol;
            }

            this.inputField.dispatchEvent(event);
        },
        onKeyDown: function onKeyDown(event) {
            if (event.altKey) {
                var triggered = null;

                for (var i = 0; i < this.chars.length && !triggered; i++) {
                    triggered = this.chars[i].find(function (char) {
                        return char.triggeredBy(event.key);
                    });
                }

                if (triggered) {
                    event.preventDefault();
                    this.append(triggered);
                }
            }
        }
    }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-32be61b8\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Typewriter.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "\n.alg-typewriter-wrapper {\n  position: relative;\n}\n.alg-typewriter-wrapper .alg-typewriter {\n    position: absolute;\n    z-index: 1000;\n    padding: .5rem;\n}\n.alg-typewriter-wrapper .alg-typewriter .alg-typewriter-button {\n      width: 2rem;\n      height: 2rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-32be61b8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Typewriter.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "alg-typewriter-wrapper",
      on: {
        focusin: _vm.onFocusIn,
        focusout: _vm.onFocusOut,
        keydown: function($event) {
          _vm.onKeyDown($event)
        }
      }
    },
    [
      _c("transition", { attrs: { name: "fade" } }, [
        _c(
          "ul",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.show && !_vm.disabled,
                expression: "show && !disabled"
              }
            ],
            staticClass: "box alg-typewriter",
            style: { bottom: _vm.options.size + "rem" }
          },
          _vm._l(_vm.chars, function(charset) {
            return _c(
              "li",
              _vm._l(charset, function(char) {
                return _c(
                  "a",
                  {
                    staticClass: "button alg-typewriter-button",
                    attrs: { title: char.getCommand() },
                    on: {
                      click: function($event) {
                        _vm.append(char)
                      },
                      mousedown: function($event) {
                        $event.preventDefault()
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(char.symbol) +
                        "\n                "
                    )
                  ]
                )
              })
            )
          })
        )
      ]),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-32be61b8", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-32be61b8\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Typewriter.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-32be61b8\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Typewriter.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("7550049b", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-32be61b8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Typewriter.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-32be61b8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Typewriter.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/components/Typewriter.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-32be61b8\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Typewriter.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Typewriter.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-32be61b8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Typewriter.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Typewriter.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-32be61b8", Component.options)
  } else {
    hotAPI.reload("data-v-32be61b8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/util/SpecialCharacters.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SpecialCharacter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dictionary; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpecialCharacter = function () {
    function SpecialCharacter(symbol) {
        var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, SpecialCharacter);

        this.symbol = symbol;
        this.code = code;
    }

    _createClass(SpecialCharacter, [{
        key: "triggeredBy",
        value: function triggeredBy(key) {
            return key == this.code;
        }
    }, {
        key: "getCommand",
        value: function getCommand() {
            return "Alt + " + this.code;
        }
    }]);

    return SpecialCharacter;
}();

var dictionary = [
// Consonants
[new SpecialCharacter("ʃ", "5"), new SpecialCharacter("š", "s"), new SpecialCharacter("č", "c"), new SpecialCharacter("θ", "t"), new SpecialCharacter("ŋ", "n"), new SpecialCharacter("ɾ", "r"), new SpecialCharacter("ð", "d"), new SpecialCharacter("ʔ", "?"), new SpecialCharacter("∅", "0")],

// Vowels
[new SpecialCharacter("ɑ", "A"), new SpecialCharacter("æ", "a"), new SpecialCharacter("ɔ", "o"), new SpecialCharacter("ɛ", "3"), new SpecialCharacter("ə", "e")],

// Diacritics
[new SpecialCharacter("\u0301", "'"), // Acute
new SpecialCharacter("\u0300", "`"), // Grave
new SpecialCharacter("\u0302", "^"), // Circumflex
new SpecialCharacter("\u0306", "u"), // Breve
new SpecialCharacter("\u0304", "-"), // Macron
new SpecialCharacter("\u0303", "~"), // Tilde
new SpecialCharacter("ː", ":"), new SpecialCharacter("·", "."), new SpecialCharacter("\u0325") // Voiceless
]];



/***/ })

});