<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:public/assets/merchant/js/chunk67.js
webpackJsonp([67,72],{
=======
webpackJsonp([14],{
>>>>>>> Adapt async autocomplete into Buefy component:public/assets/merchant/js/chunk14.js

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
=======
webpackJsonp([67],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/search/Nominal-Paradigm.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Datalist_js__ = __webpack_require__("./resources/assets/js/Datalist.js");

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['oldLanguages'],
  data: function data() {
    return {
      languages: [new __WEBPACK_IMPORTED_MODULE_0__Datalist_js__["a" /* Datalist */]()]
    };
  },
  created: function created() {
    if (this.oldLanguages && Array.isArray(this.oldLanguages)) {
      var languages = [];

      for (var i = 0; i < this.oldLanguages.length; i += 2) {
        languages.push(new __WEBPACK_IMPORTED_MODULE_0__Datalist_js__["a" /* Datalist */](this.oldLanguages[i], this.oldLanguages[i + 1]));
      }

      this.languages = languages;
>>>>>>> Move gloss rendering into the GlossLine class
    }
  }
});

/***/ }),

<<<<<<< HEAD
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

=======
webpackJsonp([67],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/ModelForm.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Validator that checks if the value of a field exists in an array
 *
 * @param value  The value to check
 * @param arr    The array to look in
 * @param key    If provided, a property to access on each element of *arr*
 *               when checking
 * @return boolean
 */
function existsValidator(value, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      arr = _ref2[0],
      key = _ref2[1];

  return arr.some(function (el) {
    return (key ? el[key] : el) === value;
  });
}
/**
 * Fills in the fields of *data* based on the values of *initial*. A *fields*
 * attribute in the *data* object tells the function which fields to look for
 * in the *initial* object; *fields* should correspond to an object where the
 * keys are the field to look for, and the value is the default to use if the
 * property is not contained in *initial*. This function is recursive, so
 * fields other than *field* will trigger an update based on the corresponding
 * object (on both the *data* and *initial* objects).
 */


function updateData(data, initial) {
  if (data !== null) {
    var _arr2 = Object.entries(data);

    for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
      var _arr2$_i = _slicedToArray(_arr2[_i2], 2),
          key = _arr2$_i[0],
          v = _arr2$_i[1];

      if (key == 'fields') {
        // If this is the *fields* property of the data object, check the
        // *initial* object for each property in the associated object.
        var _arr3 = Object.entries(v);

        for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
          var _arr3$_i = _slicedToArray(_arr3[_i3], 2),
              field = _arr3$_i[0],
              value = _arr3$_i[1];

          if (initial && initial.hasOwnProperty(field)) {
            value = initial[field];
          } // Have to use Vue.set so that the properties are reactive.


          Vue.set(data, field, value);
        }
      } else if (data.hasOwnProperty(key)) {
        // For properties other than *fields*, recursively update their data
        // as well.
        updateData(v, initial ? initial[key] : null);
      }
    }
  }
}
/**
 * Interacts directly with the DOM to disable browser-level autocompletes
 */


function turnOffAutocompletes(parent) {
  var inputs = parent.getElementsByTagName('input');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var input = _step.value;
      input.autocomplete = 'off';
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
/**
 * Interacts directly with the DOM to fix wysiwyg elements
 *
 * tabindex is set to null, to conform to accessibility standards.
 */


function normalizeTextareas(parent) {
  var wysiwygs = parent.getElementsByClassName('editr');
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = wysiwygs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var wysiwyg = _step2.value;
      var content = wysiwyg.getElementsByClassName('editr--content')[0];
      content.tabIndex = null;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}
/**
 * Interacts directly with the DOM to fix radio elements
 *
 * Buefy gives both the radio itself and the label a tabindex, which makes for
 * unintuitive tabbing. This function removes the tabindex from the radio
 * element.
 */


function normalizeRadios(parent) {
  var els = parent.getElementsByClassName('radio');
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = els[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var el = _step3.value;
      el.getElementsByTagName('input')[0].tabIndex = -1;
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    lists: {
      type: Object
    },
    initial: {
      type: Object
    },
    template: {
      type: Object
    },
    oldErrors: {},
    oldValues: {}
  },
  data: function data() {
    return {
      data: {},
      filteredLists: {},
      asyncLoading: {},
      stringifiedData: ''
    };
  },
  created: function created() {
    this.initLists();
    this.initValidator();
    this.initData();
  },
  mounted: function mounted() {
    turnOffAutocompletes(this.$vnode.elm);
    normalizeTextareas(this.$vnode.elm);
    normalizeRadios(this.$vnode.elm);

    if (this.oldErrors) {
      this.updateErrors(this.oldErrors);
    }

    ;
  },
  methods: {
    /**
     * Initializes the in-memory and asychronous list structures based on the
     * provided *lists* prop
     */
    initLists: function initLists() {
      if (this.lists) {
        var _arr4 = Object.entries(this.lists);

        for (var _i4 = 0; _i4 < _arr4.length; _i4++) {
          var _arr4$_i = _slicedToArray(_arr4[_i4], 2),
              name = _arr4$_i[0],
              list = _arr4$_i[1];

          if (Array.isArray(list)) {
            this.filteredLists[name] = list.clone();
          } else {
            this.filteredLists[name] = [];
            this.$set(this.asyncLoading, name, false);
          }
        }
      }
    },
>>>>>>> Update sources component

    /**
     * Initializes the validator by adding any required custom rules
     */
    initValidator: function initValidator() {
      this.$validator.extend('exists', existsValidator);
    },

    /**
     * Initializes the *data* attribute based on the *template* prop, then
     * fills it in based on the *oldValue* prop if it was passed in, or the
     * *initial* prop if it was not
     */
    initData: function initData() {
      this.data = this.template;
      updateData(this.data, this.oldValues || this.initial);
    },

<<<<<<< HEAD
/***/ "./resources/assets/js/components/Value-Input.vue":
=======
    /**
     * Updates the error bag based on a list of errors
     */
    updateErrors: function updateErrors(errorList) {
      var _this = this;

      var _arr5 = Object.entries(errorList);

      var _loop = function _loop() {
        var _arr5$_i = _slicedToArray(_arr5[_i5], 2),
            field = _arr5$_i[0],
            errors = _arr5$_i[1];

        errors.forEach(function (msg) {
          return _this.errors.add({
            field: field,
            msg: msg
          });
        });
      };

      for (var _i5 = 0; _i5 < _arr5.length; _i5++) {
        _loop();
      }
    },

    /**
     * Filters an in-memory list based on a query
     *
     * @param listName  The name (key) of the list
     * @param query     The string to filter the list by
     */
    filterList: function filterList(listName, query) {
      var q = query.toLowerCase();
      var list = this.lists[listName];
      this.filteredLists[listName] = list.filter(function (x) {
        return x.name.toLowerCase().includes(q);
      });
    },

    /**
     * Updates an asynchronous list based on a query
     *
     * @param listName  The name (key) of the list
     * @param query     The string to filter the list by
     * @param options   Any additional options to send in the request
     */
    getAsyncData: _.debounce(function (listName, query, options) {
      var _this2 = this;

      this.asyncLoading[listName] = true;
      axios.get(this.lists[listName], {
        params: {
          term: query,
          options: options
        }
      }).then(function (response) {
        _this2.filteredLists[listName] = response.data;
        _this2.asyncLoading[listName] = false;
      }).catch(function (error) {
        console.error(error);
      });
    }, 2500),

    /**
     * Hook that is called before the form is submitted.
     *
     * Bundles the *data* attribute into a string and sends it along with the
     * request to the server, so that the original data structure is preserved
     * if an error occurs.
     */
    beforeSubmit: function beforeSubmit() {
      this.stringifiedData = JSON.stringify(this.data);
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/components/forms/ModelForm.vue":
>>>>>>> Update sources component
=======
/***/ "./resources/assets/js/Datalist.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Datalist; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Datalist =
/*#__PURE__*/
function () {
  function Datalist() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var extra = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

    _classCallCheck(this, Datalist);

    this.text = text;
    this.id = id;
    this.extra = extra;
  }

  _createClass(Datalist, [{
    key: "reset",
    value: function reset() {
      this.text = "";
      this.id = "";
      this.extra = "";
    }
  }]);

  return Datalist;
}();



/***/ }),

/***/ "./resources/assets/js/components/forms/search/Nominal-Paradigm.vue":
>>>>>>> Move gloss rendering into the GlossLine class
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Value_Input_vue_vue_type_template_id_3c7b10e7___ = __webpack_require__("./resources/assets/js/components/Value-Input.vue?vue&type=template&id=3c7b10e7&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Value_Input_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Value-Input.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ModelForm_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/forms/ModelForm.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
>>>>>>> Update sources component
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Nominal_Paradigm_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/forms/search/Nominal-Paradigm.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
>>>>>>> Move gloss rendering into the GlossLine class




/* normalize component */

<<<<<<< HEAD
<<<<<<< HEAD
var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Value_Input_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Value_Input_vue_vue_type_template_id_3c7b10e7___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Value_Input_vue_vue_type_template_id_3c7b10e7___["b" /* staticRenderFns */],
=======
var component = Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__ModelForm_vue_vue_type_script_lang_js___["a" /* default */],
  render,
  staticRenderFns,
>>>>>>> Update sources component
=======
var component = Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__Nominal_Paradigm_vue_vue_type_script_lang_js___["a" /* default */],
  render,
  staticRenderFns,
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
=======
      api.createRecord('89129374', component.options)
    } else {
      api.reload('89129374', component.options)
=======
      api.createRecord('ef303c88', component.options)
    } else {
      api.reload('ef303c88', component.options)
>>>>>>> Move gloss rendering into the GlossLine class
    }
    
  }
}
<<<<<<< HEAD
component.options.__file = "resources/assets/js/components/forms/ModelForm.vue"
>>>>>>> Update sources component
=======
component.options.__file = "resources/assets/js/components/forms/search/Nominal-Paradigm.vue"
>>>>>>> Move gloss rendering into the GlossLine class
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
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

=======
/***/ "./resources/assets/js/components/forms/ModelForm.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModelForm_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/ModelForm.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModelForm_vue_vue_type_script_lang_js___["a" /* default */]); 
>>>>>>> Update sources component
=======
/***/ "./resources/assets/js/components/forms/search/Nominal-Paradigm.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nominal_Paradigm_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/search/Nominal-Paradigm.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nominal_Paradigm_vue_vue_type_script_lang_js___["a" /* default */]); 
>>>>>>> Move gloss rendering into the GlossLine class

/***/ })

});