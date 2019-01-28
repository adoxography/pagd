<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:public/assets/merchant/js/chunk64.js
<<<<<<< HEAD:public/assets/merchant/js/chunk64.js
webpackJsonp([64,72],{
=======
webpackJsonp([11,18],{
>>>>>>> Adapt async autocomplete into Buefy component:public/assets/merchant/js/chunk11.js
=======
webpackJsonp([11],{
>>>>>>> Remove unneeded components:public/assets/merchant/js/chunk11.js

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Paradigm-Search.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
=======
webpackJsonp([64],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/FileUpload.vue?vue&type=script&lang=js&":
=======
webpackJsonp([64],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Form-Search.vue?vue&type=script&lang=js&":
>>>>>>> Move gloss rendering into the GlossLine class
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

<<<<<<< HEAD
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

=======
>>>>>>> Move gloss rendering into the GlossLine class
//
//
//
//
//
<<<<<<< HEAD
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
//
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
<<<<<<< HEAD
/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['languages', 'orders', 'modes', 'preset', 'active'],
  data: function data() {
    return {
      activeTab: ''
    };
  },
  methods: {
    onTabChanged: function onTabChanged(searchName) {
      var oldSearchName;
      var oldSearch;
      var newSearch; // Figure out which searches are which

      if (searchName === 'Basic') {
        oldSearchName = 'Advanced';
      } else {
        oldSearchName = 'Basic';
      } // Recall the searches


      oldSearch = this.$refs[oldSearchName];
      newSearch = this.$refs[searchName]; // Load the data from the old search into the new one

      newSearch.importData(oldSearch.getData());
    }
  },
  created: function created() {
    if (this.active) {
      this.activeTab = this.active;
    } else {
      this.activeTab = 'Basic';
=======
=======
>>>>>>> Move gloss rendering into the GlossLine class
//
//
//
//
//
<<<<<<< HEAD
var Errors =
/*#__PURE__*/
function () {
  function Errors() {
    _classCallCheck(this, Errors);

    this.errors = [];
  }

  _createClass(Errors, [{
    key: "any",
    value: function any() {
      return this.errors.length > 0;
    }
  }, {
    key: "record",
    value: function record(error) {
      this.errors.push(error);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.errors = [];
    }
  }, {
    key: "first",
    value: function first() {
      return this.errors[0];
    }
  }]);

  return Errors;
}();

var File =
/*#__PURE__*/
function () {
  function File() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, File);

    this.text = text;
    this.isEmpty = text.length == 0;
    this.errors = new Errors();
  }

  _createClass(File, [{
    key: "buttonText",
    value: function buttonText() {
      if (this.isEmpty) {
        return 'Upload new file';
      } else {
        return 'File is ready!';
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.text = '';
      this.isEmpty = true;
    }
  }, {
    key: "store",
    value: function store(file) {
      var valid = this.validate(file);
      var pattern = /(.*)\.([^\.]*$)/;

      if (valid) {
        this.text = file.name.match(pattern)[1];
        this.errors.clear();
        this.isEmpty = false;
      } else {
        this.errors.record("That file type is not allowed.");
      }

      return valid;
    }
  }, {
    key: "validate",
    value: function validate(file) {
      var pattern = /^audio\/.*/;
      return file && file.type && file.type.match(pattern);
    }
  }, {
    key: "hasErrors",
    value: function hasErrors() {
      return this.error.length > 0;
    }
  }]);

  return File;
}();

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['multi', 'name', 'showText', 'accept'],
  data: function data() {
    return {
      rows: []
    };
  },
  methods: {
    onFileChange: function onFileChange(files, row) {
      if (row.store(files[0])) {
        this.$emit('upload', {
          name: row.text
        });

        if (this.multi) {
          this.rows.push(new File());
        }
      }
    },
    onDelete: function onDelete(index) {
      this.rows.splice(index, 1);

      if (this.rows.length == 0) {
        this.rows.push(new File());
      }
>>>>>>> Update sources component
    }
  },
  created: function created() {
    this.rows.push(new File());
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var Line = function Line() {
  var _this = this;

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, Line);

  var defaults = {
    verbClass: 1,
    subject: 1,
    primaryObject: 0,
    secondaryObject: 0,
    order: 1,
    mode: 1,
    isNegative: false,
    isDiminutive: false
  };

  _.forEach(defaults, function (value, key) {
    if (options[key]) {
      _this[key] = options[key];
    } else {
      _this[key] = value;
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['args', 'classes', 'modes', 'orders', 'oldValues'],
  data: function data() {
    return {
      lines: [new Line()]
    };
  },
  computed: {
    numLines: function numLines() {
      return this.lines.length;
    }
  },
  methods: {
    addLine: function addLine() {
      if (this.numLines < 10) {
        // Clone the last line
        var newLine = JSON.parse(JSON.stringify(this.lines[this.lines.length - 1])); // Push it onto the list

        this.lines.push(newLine);
      }
    },
    removeLine: function removeLine() {
      if (this.numLines > 1) {
        this.lines.pop();
      }
    }
  },
  created: function created() {
    if (this.oldValues) {
      var lines = [];

      for (var i = 0; i < this.oldValues.classes.length; i++) {
        var line = new Line({
          verbClass: this.oldValues.classes[i],
          subject: this.oldValues.subjects[i],
          primaryObject: this.oldValues.primaryObjects[i],
          secondaryObject: this.oldValues.secondaryObjects[i],
          order: this.oldValues.orders[i],
          mode: this.oldValues.modes[i]
        });

        if (this.oldValues.isNegative) {
          line.isNegative = this.oldValues.isNegative[i];
        }

        if (this.oldValues.isDiminutive) {
          line.isDiminutive = this.oldValues.isDiminutive[i];
        }

        lines.push(line);
      }

      this.lines = lines;
    }
>>>>>>> Move gloss rendering into the GlossLine class
  }
});

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Paradigm-Search.vue?vue&type=template&id=71b77d43&":
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/FileUpload.vue?vue&type=template&id=12ca9994&":
>>>>>>> Update sources component
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Form-Search.vue?vue&type=template&id=3ec31e0a&":
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
<<<<<<< HEAD
<<<<<<< HEAD
    "alg-tabs",
    {
      attrs: { active: _vm.activeTab },
      on: {
        tabChanged: function($event) {
          _vm.onTabChanged($event)
        }
      }
    },
    [
      _c(
        "alg-tab",
        { attrs: { name: "Basic" } },
        [
          _c("alg-basic-paradigm-search", {
            ref: "Basic",
            attrs: { languages: _vm.languages }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "alg-tab",
        { attrs: { name: "Advanced" } },
        [
          _c("alg-advanced-paradigm-search", {
            ref: "Advanced",
            attrs: {
              orders: _vm.orders,
              modes: _vm.modes,
              languages: _vm.languages,
              preset: _vm.preset
            }
          })
        ],
        1
      )
    ],
    1
=======
    "div",
    _vm._l(_vm.rows, function(row, n) {
      return _c("div", { staticClass: "field" }, [
        _c("div", { staticClass: "field has-addons" }, [
          _c("p", { staticClass: "control" }, [
            _c(
              "label",
              {
                staticClass: "button",
                class: {
                  "is-primary": row.isEmpty,
                  "is-success": !row.isEmpty
                },
                attrs: { for: "file-upload-" + n }
              },
              [
                _c("input", {
                  ref: "fileInput",
                  refInFor: true,
                  attrs: {
                    id: "file-upload-" + n,
                    type: "file",
                    name: _vm.name,
                    accept: _vm.accept
                  },
                  on: {
                    change: function($event) {
                      _vm.onFileChange($event.target.files, row)
                    }
                  }
                }),
                _vm._v("\n\t\t\t\t\t" + _vm._s(row.buttonText()) + "\n\t\t\t\t")
              ]
            )
          ]),
          _vm._v(" "),
          _vm.showText
            ? _c("p", { staticClass: "control is-expanded" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: row.text,
                      expression: "row.text"
                    }
                  ],
                  staticClass: "input",
                  attrs: {
                    type: "text",
                    name: _vm.name + "_name",
                    disabled: row.isEmpty
                  },
                  domProps: { value: row.text },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(row, "text", $event.target.value)
                    }
                  }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.multi
            ? _c("p", { staticClass: "control" }, [
                _c(
                  "a",
                  {
                    staticClass: "button is-danger",
                    attrs: { disabled: row.isEmpty }
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass: "icon",
                        on: {
                          click: function($event) {
                            _vm.onDelete(n)
                          }
                        }
                      },
                      [_c("i", { staticClass: "fa fa-times" })]
                    )
                  ]
                )
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        row.hasErrors
          ? _c("p", { staticClass: "help is-danger" }, [
              _vm._v("\n\t\t\t" + _vm._s(row.errors.first()) + "\n\t\t")
            ])
          : _vm._e()
      ])
    }),
    0
>>>>>>> Update sources component
  )
}
var staticRenderFns = []
=======
    "div",
    [
      _vm._l(_vm.lines, function(line, index) {
        return _c("div", { staticClass: "box" }, [
          _c("div", { staticClass: "columns" }, [
            _c("div", { staticClass: "column" }, [
              _c("h5", { staticClass: "title is-5" }, [_vm._v("Class")]),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass: "control",
                  staticStyle: { "padding-top": "1.5rem" }
                },
                [
                  _c("span", { staticClass: "select" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: line.verbClass,
                            expression: "line.verbClass"
                          }
                        ],
                        attrs: { name: "classes[" + index + "]" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              line,
                              "verbClass",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.classes, function(verbClass) {
                        return _c(
                          "option",
                          { domProps: { value: verbClass.id } },
                          [_vm._v(_vm._s(verbClass.name))]
                        )
                      }),
                      0
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "column" }, [
              _c(
                "h5",
                {
                  staticClass: "title is-5",
                  staticStyle: { "margin-bottom": "1rem" }
                },
                [_vm._v("Arguments")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "control is-horizontal" }, [
                _c("div", { staticClass: "field is-grouped" }, [
                  _c("p", { staticClass: "control" }, [
                    _c("label", { staticClass: "label argument-label" }, [
                      _vm._v("Subject")
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "select" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: line.subject,
                              expression: "line.subject"
                            }
                          ],
                          attrs: { name: "subjects[" + index + "]" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                line,
                                "subject",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.args, function(argument) {
                          return _c(
                            "option",
                            { domProps: { value: argument.id } },
                            [_vm._v(_vm._s(argument.name))]
                          )
                        }),
                        0
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "control" }, [
                    _c("label", { staticClass: "label argument-label" }, [
                      _vm._v("P. Object")
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "select" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: line.primaryObject,
                              expression: "line.primaryObject"
                            }
                          ],
                          attrs: { name: "primaryObjects[" + index + "]" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                line,
                                "primaryObject",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "0" } }, [
                            _vm._v("None")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.args, function(argument) {
                            return _c(
                              "option",
                              { domProps: { value: argument.id } },
                              [_vm._v(_vm._s(argument.name))]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "control" }, [
                    _c("label", { staticClass: "label argument-label" }, [
                      _vm._v("S. Object")
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "select" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: line.secondaryObject,
                              expression: "line.secondaryObject"
                            }
                          ],
                          attrs: { name: "secondaryObjects[" + index + "]" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                line,
                                "secondaryObject",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "0" } }, [
                            _vm._v("None")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.args, function(argument) {
                            return _c(
                              "option",
                              { domProps: { value: argument.id } },
                              [_vm._v(_vm._s(argument.name))]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "column" }, [
              _c("h5", { staticClass: "title is-5" }, [_vm._v("Order")]),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass: "control",
                  staticStyle: { "padding-top": "1.5rem" }
                },
                [
                  _c("span", { staticClass: "select" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: line.order,
                            expression: "line.order"
                          }
                        ],
                        attrs: { name: "orders[" + index + "]" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              line,
                              "order",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.orders, function(order) {
                        return _c("option", { domProps: { value: order.id } }, [
                          _vm._v(_vm._s(order.name))
                        ])
                      }),
                      0
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "column" }, [
              _c("h5", { staticClass: "title is-5" }, [_vm._v("Mode")]),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass: "control",
                  staticStyle: { "padding-top": "1.5rem" }
                },
                [
                  _c("span", { staticClass: "select" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: line.mode,
                            expression: "line.mode"
                          }
                        ],
                        attrs: { name: "modes[" + index + "]" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              line,
                              "mode",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.modes, function(mode) {
                        return _c("option", { domProps: { value: mode.id } }, [
                          _vm._v(_vm._s(mode.name))
                        ])
                      }),
                      0
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "column" }, [
              _c("p", { staticClass: "control" }, [
                _c("label", { staticClass: "checkbox" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: line.isNegative,
                        expression: "line.isNegative"
                      }
                    ],
                    attrs: {
                      type: "checkbox",
                      name: "isNegative[" + index + "]"
                    },
                    domProps: {
                      checked: Array.isArray(line.isNegative)
                        ? _vm._i(line.isNegative, null) > -1
                        : line.isNegative
                    },
                    on: {
                      change: function($event) {
                        var $$a = line.isNegative,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(line, "isNegative", $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                line,
                                "isNegative",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(line, "isNegative", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v("\n\t\t\t\t\t\tNegative\n\t\t\t\t\t")
                ])
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "control" }, [
                _c("label", { staticClass: "checkbox" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: line.isDiminutive,
                        expression: "line.isDiminutive"
                      }
                    ],
                    attrs: {
                      type: "checkbox",
                      name: "isDiminutive[" + index + "]"
                    },
                    domProps: {
                      checked: Array.isArray(line.isDiminutive)
                        ? _vm._i(line.isDiminutive, null) > -1
                        : line.isDiminutive
                    },
                    on: {
                      change: function($event) {
                        var $$a = line.isDiminutive,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(line, "isDiminutive", $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                line,
                                "isDiminutive",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(line, "isDiminutive", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v("\n\t\t\t\t\t\tDiminutive\n\t\t\t\t\t")
                ])
              ])
            ])
          ])
        ])
      }),
      _vm._v(" "),
      _c("div", { staticClass: "level" }, [
        _c("div", { staticClass: "level-left" }),
        _vm._v(" "),
        _c("div", { staticClass: "level-right" }, [
          _c("div", { staticClass: "level-item" }, [
            _c(
              "a",
              {
                staticClass: "button is-primary",
                attrs: { disabled: _vm.numLines >= 10, title: "Add" },
                on: { click: _vm.addLine }
              },
              [_vm._m(0)]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "level-item" }, [
            _c(
              "a",
              {
                staticClass: "button is-primary",
                attrs: { disabled: _vm.numLines <= 1, title: "Remove" },
                on: { click: _vm.removeLine }
              },
              [_vm._m(1)]
            )
          ])
        ])
      ])
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-plus" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-minus" })
    ])
  }
]
>>>>>>> Move gloss rendering into the GlossLine class
render._withStripped = true



/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "./resources/assets/js/components/forms/Paradigm-Search.vue":
=======
/***/ "./resources/assets/js/components/FileUpload.vue":
>>>>>>> Update sources component
=======
/***/ "./resources/assets/js/components/Form-Search.vue":
>>>>>>> Move gloss rendering into the GlossLine class
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Paradigm_Search_vue_vue_type_template_id_71b77d43___ = __webpack_require__("./resources/assets/js/components/forms/Paradigm-Search.vue?vue&type=template&id=71b77d43&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Paradigm_Search_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/forms/Paradigm-Search.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FileUpload_vue_vue_type_template_id_12ca9994___ = __webpack_require__("./resources/assets/js/components/FileUpload.vue?vue&type=template&id=12ca9994&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FileUpload_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/FileUpload.vue?vue&type=script&lang=js&");
>>>>>>> Update sources component
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form_Search_vue_vue_type_template_id_3ec31e0a___ = __webpack_require__("./resources/assets/js/components/Form-Search.vue?vue&type=template&id=3ec31e0a&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form_Search_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Form-Search.vue?vue&type=script&lang=js&");
>>>>>>> Move gloss rendering into the GlossLine class
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
<<<<<<< HEAD
<<<<<<< HEAD
  __WEBPACK_IMPORTED_MODULE_1__Paradigm_Search_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Paradigm_Search_vue_vue_type_template_id_71b77d43___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Paradigm_Search_vue_vue_type_template_id_71b77d43___["b" /* staticRenderFns */],
=======
  __WEBPACK_IMPORTED_MODULE_1__FileUpload_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__FileUpload_vue_vue_type_template_id_12ca9994___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__FileUpload_vue_vue_type_template_id_12ca9994___["b" /* staticRenderFns */],
>>>>>>> Update sources component
=======
  __WEBPACK_IMPORTED_MODULE_1__Form_Search_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Form_Search_vue_vue_type_template_id_3ec31e0a___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Form_Search_vue_vue_type_template_id_3ec31e0a___["b" /* staticRenderFns */],
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
      api.createRecord('71b77d43', component.options)
    } else {
      api.reload('71b77d43', component.options)
    }
    module.hot.accept("./Paradigm-Search.vue?vue&type=template&id=71b77d43&", function () {
      api.rerender('71b77d43', {
=======
      api.createRecord('12ca9994', component.options)
    } else {
      api.reload('12ca9994', component.options)
    }
    module.hot.accept("./FileUpload.vue?vue&type=template&id=12ca9994&", function () {
      api.rerender('12ca9994', {
>>>>>>> Update sources component
=======
      api.createRecord('3ec31e0a', component.options)
    } else {
      api.reload('3ec31e0a', component.options)
    }
    module.hot.accept("./Form-Search.vue?vue&type=template&id=3ec31e0a&", function () {
      api.rerender('3ec31e0a', {
>>>>>>> Move gloss rendering into the GlossLine class
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
component.options.__file = "resources/assets/js/components/forms/Paradigm-Search.vue"
=======
component.options.__file = "resources/assets/js/components/FileUpload.vue"
>>>>>>> Update sources component
=======
component.options.__file = "resources/assets/js/components/Form-Search.vue"
>>>>>>> Move gloss rendering into the GlossLine class
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "./resources/assets/js/components/forms/Paradigm-Search.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paradigm_Search_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Paradigm-Search.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paradigm_Search_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/forms/Paradigm-Search.vue?vue&type=template&id=71b77d43&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paradigm_Search_vue_vue_type_template_id_71b77d43___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Paradigm-Search.vue?vue&type=template&id=71b77d43&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paradigm_Search_vue_vue_type_template_id_71b77d43___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paradigm_Search_vue_vue_type_template_id_71b77d43___["b"]; });
=======
/***/ "./resources/assets/js/components/FileUpload.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/FileUpload.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/FileUpload.vue?vue&type=template&id=12ca9994&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_template_id_12ca9994___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/FileUpload.vue?vue&type=template&id=12ca9994&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_template_id_12ca9994___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_template_id_12ca9994___["b"]; });
>>>>>>> Update sources component
=======
/***/ "./resources/assets/js/components/Form-Search.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_Search_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Form-Search.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_Search_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Form-Search.vue?vue&type=template&id=3ec31e0a&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_Search_vue_vue_type_template_id_3ec31e0a___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Form-Search.vue?vue&type=template&id=3ec31e0a&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_Search_vue_vue_type_template_id_3ec31e0a___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_Search_vue_vue_type_template_id_3ec31e0a___["b"]; });
>>>>>>> Move gloss rendering into the GlossLine class


/***/ })

});