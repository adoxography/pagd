<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:public/assets/merchant/js/chunk54.js
<<<<<<< HEAD:public/assets/merchant/js/chunk54.js
webpackJsonp([54,72],{
=======
webpackJsonp([1,18],{
>>>>>>> Adapt async autocomplete into Buefy component:public/assets/merchant/js/chunk1.js
=======
webpackJsonp([1],{
>>>>>>> Remove unneeded components:public/assets/merchant/js/chunk1.js

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Typewriter.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_SpecialCharacters__ = __webpack_require__("./resources/assets/js/util/SpecialCharacters.js");
=======
webpackJsonp([54],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Value-Input.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
>>>>>>> Move gloss rendering into the GlossLine class
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
=======
webpackJsonp([54],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Tab.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
>>>>>>> Update sources component
=======
>>>>>>> Move gloss rendering into the GlossLine class
//
//
//
//
//
//
//
//
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Move gloss rendering into the GlossLine class
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

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    disabled: {
      default: false
    },
    startHidden: {
      default: false
    },
    typewriterId: {
      default: null
    },
    options: {
      default: function _default() {
        return {
          size: 1
        };
      }
=======
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    name: {
      required: true
    },
    selected: {
      default: false
>>>>>>> Update sources component
    }
  },
  data: function data() {
    return {
<<<<<<< HEAD
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
=======
      isActive: false
    };
  },
  computed: {
    href: function href() {
      return '#' + this.name.toLowerCase().replace(/ /g, '-');
    }
  },
  mounted: function mounted() {
    this.isActive = this.selected;
>>>>>>> Update sources component
=======
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
  props: ['list', 'initial'],
  data: function data() {
    return {
      valueText: '',
      values: [],
      usedValues: []
    };
  },
  computed: {
    filteredValues: function filteredValues() {
      var _this = this;

      var unchecked = [];
      var checked = [];
      this.values.forEach(function (value) {
        if (value.name.toLowerCase().includes(_this.valueText.toLowerCase())) {
          if (value.checked) {
            checked.push(value);
          } else {
            unchecked.push(value);
          }
        }
      });
      return checked.concat(unchecked);
    },
    selectedValues: function selectedValues() {
      var values = [];
      this.values.forEach(function (value) {
        if (value.checked) {
          values.unshift({
            id: value.id,
            name: value.name
          });
        }
      });
      return values;
    }
  },
  created: function created() {
    var _this2 = this;

    for (var i = 0; i < this.list.length; i++) {
      this.values.push({
        id: this.list[i].id,
        name: this.list[i].name,
        checked: false,
        used: false
      });
    }

    if (this.initial) {
      this.initial.forEach(function (value) {
        var index = _this2.selectItemInList(value.name, _this2.values);

        if (value.used) {
          _this2.values[index].used = true;

          _this2.usedValues.push(value.name);
        }
      });
    }
  },
  methods: {
    onEnter: function onEnter(event) {
      if (this.valueText.length > 0) {
        event.preventDefault(); // this.errors.clear('values');

        if (this.selectItemInList(event.target.value, this.values) < 0) {
          this.values.push({
            id: 0,
            name: event.target.value,
            checked: true
          });
        }

        this.valueText = '';
      }
    },
    removeValue: function removeValue(name) {
      var index = this.values.findIndex(function (value) {
        return value.name == name;
      });
      this.values.splice(index, 1);
    },
    selectItemInList: function selectItemInList(lookup, array) {
      var found = -1;

      for (var i = 0; i < array.length && found < 0; i++) {
        if (array[i].name.toLowerCase() == lookup.toLowerCase()) {
          found = i;
          array[i].checked = true;
        }
      }

      return found;
    }
>>>>>>> Move gloss rendering into the GlossLine class
  }
});

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Tab.vue?vue&type=template&id=dbd21ca4&":
>>>>>>> Update sources component
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Value-Input.vue?vue&type=template&id=3c7b10e7&":
>>>>>>> Move gloss rendering into the GlossLine class
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
<<<<<<< HEAD
    {
<<<<<<< HEAD
      staticClass: "alg-typewriter-wrapper",
      on: {
        focusin: _vm.onFocusIn,
        focusout: _vm.onFocusOut,
        keydown: function($event) {
          _vm.onKeyDown($event)
=======
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isActive,
          expression: "isActive"
>>>>>>> Update sources component
        }
      ]
    },
<<<<<<< HEAD
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
              }),
              0
            )
          }),
          0
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
=======
    [_c("div", { staticClass: "tabs-details" }, [_vm._t("default")], 2)]
>>>>>>> Update sources component
=======
    { staticClass: "field" },
    [
      _c("label", { staticClass: "label" }, [_vm._v("Options")]),
      _vm._v(" "),
      _c("div", { staticClass: "multi-select box" }, [
        _c("div", { staticClass: "field" }, [
          _c("p", { staticClass: "control" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.valueText,
                  expression: "valueText"
                }
              ],
              staticClass: "input",
              attrs: {
                type: "text",
                name: "value-input",
                id: "value-input",
                placeholder: "Filter the options"
              },
              domProps: { value: _vm.valueText },
              on: {
                keydown: function($event) {
                  if (
                    !("button" in $event) &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  _vm.onEnter($event)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.valueText = $event.target.value
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "box",
            staticStyle: { height: "200px", overflow: "auto" }
          },
          [
            _c(
              "p",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value:
                      _vm.filteredValues.length == 0 &&
                      _vm.valueText.length > 0,
                    expression:
                      "filteredValues.length == 0 && valueText.length > 0"
                  }
                ]
              },
              [
                _c("em", [
                  _vm._v(
                    "Press 'enter' to add '" +
                      _vm._s(_vm.valueText) +
                      "' as an option"
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _vm._l(_vm.filteredValues, function(item) {
              return _c("div", { staticClass: "field" }, [
                _c("p", { staticClass: "control" }, [
                  _c(
                    "label",
                    {
                      staticClass: "checkbox",
                      attrs: {
                        title: item.used
                          ? "This value cannot be removed because it is being used in a datapoint."
                          : ""
                      }
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: item.checked,
                            expression: "item.checked"
                          }
                        ],
                        attrs: {
                          type: "checkbox",
                          name: "values[]",
                          disabled: item.used
                        },
                        domProps: {
                          value: item.name,
                          checked: Array.isArray(item.checked)
                            ? _vm._i(item.checked, item.name) > -1
                            : item.checked
                        },
                        on: {
                          change: function($event) {
                            var $$a = item.checked,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = item.name,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(item, "checked", $$a.concat([$$v]))
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    item,
                                    "checked",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(item, "checked", $$c)
                            }
                          }
                        }
                      }),
                      _vm._v(
                        "\n\t\t\t\t\t\t" + _vm._s(item.name) + "\n\t\t\t\t\t"
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("a", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: item.id == 0,
                        expression: "item.id == 0"
                      }
                    ],
                    staticClass: "delete is-small is-pulled-right",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.removeValue(item.name)
                      }
                    }
                  })
                ])
              ])
            })
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.selectedValues.length < 2,
                expression: "selectedValues.length < 2"
              }
            ],
            staticClass: "help is-danger"
          },
          [_vm._v("\n\t\t\tVariables must have at least two options\n\t\t")]
        )
      ]),
      _vm._v(" "),
      _vm._l(_vm.usedValues, function(value) {
        return _c("input", {
          attrs: { type: "hidden", name: "values[]" },
          domProps: { value: value }
        })
      })
    ],
    2
>>>>>>> Move gloss rendering into the GlossLine class
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "./resources/assets/js/components/Typewriter.vue":
=======
/***/ "./resources/assets/js/components/Tab.vue":
>>>>>>> Update sources component
=======
/***/ "./resources/assets/js/components/Value-Input.vue":
>>>>>>> Move gloss rendering into the GlossLine class
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Typewriter_vue_vue_type_template_id_32be61b8___ = __webpack_require__("./resources/assets/js/components/Typewriter.vue?vue&type=template&id=32be61b8&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Typewriter_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Typewriter.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tab_vue_vue_type_template_id_dbd21ca4___ = __webpack_require__("./resources/assets/js/components/Tab.vue?vue&type=template&id=dbd21ca4&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tab_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Tab.vue?vue&type=script&lang=js&");
>>>>>>> Update sources component
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Typewriter_vue_vue_type_style_index_0_lang_scss___ = __webpack_require__("./resources/assets/js/components/Typewriter.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Value_Input_vue_vue_type_template_id_3c7b10e7___ = __webpack_require__("./resources/assets/js/components/Value-Input.vue?vue&type=template&id=3c7b10e7&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Value_Input_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Value-Input.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
>>>>>>> Move gloss rendering into the GlossLine class





/* normalize component */

<<<<<<< HEAD
<<<<<<< HEAD
var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Typewriter_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Typewriter_vue_vue_type_template_id_32be61b8___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Typewriter_vue_vue_type_template_id_32be61b8___["b" /* staticRenderFns */],
=======
var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Tab_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Tab_vue_vue_type_template_id_dbd21ca4___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Tab_vue_vue_type_template_id_dbd21ca4___["b" /* staticRenderFns */],
>>>>>>> Update sources component
=======
var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Value_Input_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Value_Input_vue_vue_type_template_id_3c7b10e7___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Value_Input_vue_vue_type_template_id_3c7b10e7___["b" /* staticRenderFns */],
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
      api.createRecord('32be61b8', component.options)
    } else {
      api.reload('32be61b8', component.options)
    }
    module.hot.accept("./Typewriter.vue?vue&type=template&id=32be61b8&", function () {
      api.rerender('32be61b8', {
=======
      api.createRecord('dbd21ca4', component.options)
    } else {
      api.reload('dbd21ca4', component.options)
    }
    module.hot.accept("./Tab.vue?vue&type=template&id=dbd21ca4&", function () {
      api.rerender('dbd21ca4', {
>>>>>>> Update sources component
=======
      api.createRecord('3c7b10e7', component.options)
    } else {
      api.reload('3c7b10e7', component.options)
    }
    module.hot.accept("./Value-Input.vue?vue&type=template&id=3c7b10e7&", function () {
      api.rerender('3c7b10e7', {
>>>>>>> Move gloss rendering into the GlossLine class
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
component.options.__file = "resources/assets/js/components/Typewriter.vue"
=======
component.options.__file = "resources/assets/js/components/Tab.vue"
>>>>>>> Update sources component
=======
component.options.__file = "resources/assets/js/components/Value-Input.vue"
>>>>>>> Move gloss rendering into the GlossLine class
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
/***/ "./resources/assets/js/components/Tab.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Tab.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Tab.vue?vue&type=template&id=dbd21ca4&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_dbd21ca4___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Tab.vue?vue&type=template&id=dbd21ca4&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_dbd21ca4___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_dbd21ca4___["b"]; });
>>>>>>> Update sources component
=======
/***/ "./resources/assets/js/components/Value-Input.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Value_Input_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Value-Input.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Value_Input_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Value-Input.vue?vue&type=template&id=3c7b10e7&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Value_Input_vue_vue_type_template_id_3c7b10e7___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Value-Input.vue?vue&type=template&id=3c7b10e7&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Value_Input_vue_vue_type_template_id_3c7b10e7___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Value_Input_vue_vue_type_template_id_3c7b10e7___["b"]; });
>>>>>>> Move gloss rendering into the GlossLine class


/***/ })

});