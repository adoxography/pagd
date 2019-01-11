webpackJsonp([52],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Value-Input.vue?vue&type=script&lang=js&":
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
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Value-Input.vue?vue&type=template&id=3c7b10e7&":
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/Value-Input.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Value_Input_vue_vue_type_template_id_3c7b10e7___ = __webpack_require__("./resources/assets/js/components/Value-Input.vue?vue&type=template&id=3c7b10e7&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Value_Input_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Value-Input.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Value_Input_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Value_Input_vue_vue_type_template_id_3c7b10e7___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Value_Input_vue_vue_type_template_id_3c7b10e7___["b" /* staticRenderFns */],
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
      api.createRecord('3c7b10e7', component.options)
    } else {
      api.reload('3c7b10e7', component.options)
    }
    module.hot.accept("./Value-Input.vue?vue&type=template&id=3c7b10e7&", function () {
      api.rerender('3c7b10e7', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/Value-Input.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

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


/***/ })

});