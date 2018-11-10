webpackJsonp([17],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Typewriter.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        disabled: { default: false },

        startHidden: { default: false },

        typewriterId: { default: null },

        options: {
            default: function _default() {
                return { size: 1 };
            }
        }
    },

    data: function data() {
        return {
            show: false,
            turnedOff: false,

            chars: __WEBPACK_IMPORTED_MODULE_0__util_SpecialCharacters__["a" /* dictionary */],

            keys: []
        };
    },


    computed: {
        inputField: function inputField() {
            var defaultSlot = this.$slots.default[0].elm;

            if (defaultSlot.className.includes("input")) {
                return defaultSlot;
            }

            return defaultSlot.getElementsByClassName("input")[0];
        },
        shouldShow: function shouldShow() {
            return this.show && !this.disabled && !this.turnedOff;
        },
        portalName: function portalName() {
            var name = 'typewriter-toggle';

            if (this.typewriterId !== null) {
                name += '-' + this.typewriterId;
            }

            return name;
        }
    },

    created: function created() {
        if (this.startHidden) {
            this.turnedOff = true;
        }
    },


    methods: {
        onFocusIn: function onFocusIn() {
            this.show = true;
        },
        onFocusOut: function onFocusOut() {
            this.show = false;
        },
        toggle: function toggle() {
            this.inputField.focus();
            if (this.shouldShow) {
                this.turnedOff = true;
            } else {
                this.turnedOff = false;
                this.show = true;
            }
        },
        getPosition: function getPosition() {
            if (this.inputField.tagName == 'DIV') {
                this.cursorPosition = window.getSelection().anchorOffset;
            } else {
                this.cursorPosition = this.inputField.selectionStart;
            }
        },
        insertCharacter: function insertCharacter(char) {
            var event = new Event('input', {
                'bubbles': true,
                'cancelable': true
            });

            if (this.inputField.tagName == 'DIV') {
                var initialLength = this.inputField.innerHTML.length;
                this.inputField.innerHTML = this.insertCharacterIntoString(this.inputField.innerHTML, char, this.cursorPosition);
                this.cursorPosition += this.inputField.innerHTML.length - initialLength;
            } else {
                var _initialLength = this.inputField.value.length;
                this.inputField.value = this.insertCharacterIntoString(this.inputField.value, char, this.cursorPosition);
                this.cursorPosition += this.inputField.value.length - _initialLength;
            }

            this.inputField.dispatchEvent(event);

            if (this.inputField.tagName == 'DIV') {
                var range = document.createRange();
                var selection = window.getSelection();
                var line = this.inputField.childNodes[0];

                range.setStart(line, this.cursorPosition);
                range.setEnd(line, this.cursorPosition);

                selection.removeAllRanges();
                selection.addRange(range);
            } else {
                this.inputField.selectionStart = this.cursorPosition;
                this.inputField.selectionEnd = this.cursorPosition;
            }
        },
        insertCharacterIntoString: function insertCharacterIntoString(oldText, char, index) {
            var merged = char.insertInto(oldText, index);
            return merged;
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
                    this.insertCharacter(triggered);
                }
            }
        }
    }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Typewriter.vue?vue&type=style&index=0&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.alg-typewriter-wrapper {\n  position: relative;\n}\n.alg-typewriter-wrapper .alg-typewriter {\n    position: absolute;\n    z-index: 1000;\n    padding: .5rem;\n}\n.alg-typewriter-wrapper .alg-typewriter .alg-typewriter-button {\n      width: 2rem;\n      height: 2rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Typewriter.vue?vue&type=style&index=0&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Typewriter.vue?vue&type=style&index=0&lang=scss&");
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
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Typewriter.vue?vue&type=style&index=0&lang=scss&", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Typewriter.vue?vue&type=style&index=0&lang=scss&");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Typewriter.vue?vue&type=template&id=32be61b8&":
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
                value: _vm.shouldShow,
                expression: "shouldShow"
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
                        _vm.insertCharacter(char)
                      },
                      mousedown: function($event) {
                        $event.preventDefault()
                        return _vm.getPosition($event)
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
      _vm._t("default"),
      _vm._v(" "),
      _c("portal", { attrs: { to: _vm.portalName } }, [
        _c(
          "a",
          {
            staticClass: "button",
            attrs: { title: "Special characters" },
            on: { click: _vm.toggle }
          },
          [_c("i", { staticClass: "fa fa-keyboard-o" })]
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/Typewriter.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Typewriter_vue_vue_type_template_id_32be61b8___ = __webpack_require__("./resources/assets/js/components/Typewriter.vue?vue&type=template&id=32be61b8&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Typewriter_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Typewriter.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Typewriter_vue_vue_type_style_index_0_lang_scss___ = __webpack_require__("./resources/assets/js/components/Typewriter.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Typewriter_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Typewriter_vue_vue_type_template_id_32be61b8___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Typewriter_vue_vue_type_template_id_32be61b8___["b" /* staticRenderFns */],
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
      api.createRecord('32be61b8', component.options)
    } else {
      api.reload('32be61b8', component.options)
    }
    module.hot.accept("./Typewriter.vue?vue&type=template&id=32be61b8&", function () {
      api.rerender('32be61b8', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/Typewriter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Typewriter.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Typewriter_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Typewriter.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Typewriter_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Typewriter.vue?vue&type=style&index=0&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Typewriter_vue_vue_type_style_index_0_lang_scss___ = __webpack_require__("./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Typewriter.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Typewriter_vue_vue_type_style_index_0_lang_scss____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Typewriter_vue_vue_type_style_index_0_lang_scss___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Typewriter_vue_vue_type_style_index_0_lang_scss____default.a); 

/***/ }),

/***/ "./resources/assets/js/components/Typewriter.vue?vue&type=template&id=32be61b8&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Typewriter_vue_vue_type_template_id_32be61b8___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Typewriter.vue?vue&type=template&id=32be61b8&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Typewriter_vue_vue_type_template_id_32be61b8___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Typewriter_vue_vue_type_template_id_32be61b8___["b"]; });


/***/ }),

/***/ "./resources/assets/js/util/SpecialCharacters.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SpecialCharacter */
/* unused harmony export Diacritic */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dictionary; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpecialCharacter = function () {
    function SpecialCharacter(symbol, code) {
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
    }, {
        key: "insertInto",
        value: function insertInto(string, index) {
            return string.substr(0, index) + this.symbol + string.substr(index);
        }
    }]);

    return SpecialCharacter;
}();

var Diacritic = function (_SpecialCharacter) {
    _inherits(Diacritic, _SpecialCharacter);

    function Diacritic(symbol, code, modificationTable) {
        _classCallCheck(this, Diacritic);

        var _this = _possibleConstructorReturn(this, (Diacritic.__proto__ || Object.getPrototypeOf(Diacritic)).call(this, symbol, code));

        _this.table = modificationTable || {};
        return _this;
    }

    _createClass(Diacritic, [{
        key: "modify",
        value: function modify(letter) {
            if (letter in this.table) {
                return this.table[letter];
            }

            return letter + this.symbol;
        }
    }, {
        key: "insertInto",
        value: function insertInto(string, index) {
            var left = string.slice(0, index);
            var right = string.slice(index);

            if (length.length == 0) {
                return left + this.symbol + right;
            }

            return left.slice(0, -1) + this.modify(left[left.length - 1]) + right;
        }
    }]);

    return Diacritic;
}(SpecialCharacter);

var dictionary = [
// Consonants
[new SpecialCharacter("ʃ", "5"), new SpecialCharacter("š", "s"), new SpecialCharacter("č", "c"), new SpecialCharacter("θ", "t"), new SpecialCharacter("ŋ", "n"), new SpecialCharacter("ɾ", "r"), new SpecialCharacter("ð", "d"), new SpecialCharacter("ʔ", "?"), new SpecialCharacter("∅", "0")],

// Vowels
[new SpecialCharacter("ɑ", "A"), new SpecialCharacter("æ", "a"), new SpecialCharacter("ɔ", "o"), new SpecialCharacter("ɛ", "3"), new SpecialCharacter("ə", "e")],

// Diacritics
[new Diacritic("\u0301", "'", { 'a': 'á', 'e': 'é', 'i': 'í', 'o': 'ó', 'u': 'ú', 'ǽ': 'ǽ' }), // Acute
new Diacritic("\u0300", "`", { 'a': 'à', 'e': 'è', 'i': 'ì', 'o': 'ò', 'u': 'ù' }), // Grave
new Diacritic("\u0302", "^", { 'a': 'â', 'e': 'ê', 'i': 'î', 'o': 'ô', 'u': 'û' }), // Circumflex
new Diacritic("\u0306", "u", { 'a': 'ă', 'e': 'ĕ', 'i': 'ĭ', 'o': 'ŏ', 'u': 'ŭ' }), // Breve
new Diacritic("\u0304", "-", { 'a': 'ā', 'e': 'ē', 'i': 'ī', 'o': 'ō', 'u': 'ū' }), // Macron
new Diacritic("\u0303", "~", { 'a': 'ã', 'e': 'ẽ', 'i': 'ĩ', 'o': 'õ', 'u': 'ũ' }), // Tilde
new Diacritic("ː", ":"), new Diacritic("·", "."), new Diacritic("\u0325", null) // Voiceless
]];



/***/ })

});