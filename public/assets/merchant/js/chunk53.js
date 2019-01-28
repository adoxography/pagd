webpackJsonp([53],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Advanced-Paradigm-Search.vue?vue&type=script&lang=js&":
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['method', 'action', 'orders', 'modes', 'languages', 'preset'],
  data: function data() {
    return {
      form: {
        modeSelect: 'indicativeOnly',
        languages: [{
          text: 'Proto-Algonquian',
          id: '1'
        }],
        affirmative: true,
        negative: false,
        nonDiminutive: true,
        diminutive: false,
        classes: {
          AI: {
            id: 1,
            checked: false
          },
          II: {
            id: 2,
            checked: false
          },
          TI: {
            id: 4,
            checked: false
          },
          TA: {
            id: 3,
            checked: true
          },
          AIO: {
            id: 5,
            checked: false
          },
          TAO: {
            id: 6,
            checked: false
          }
        },
        subclasses: [{
          id: 'Local',
          checked: true
        }, {
          id: 'Mixed',
          checked: true
        }, {
          id: 'Non-local',
          checked: true
        }, {
          id: 'Inanimate',
          checked: false
        }, {
          id: 'Impersonal',
          checked: false
        }, {
          id: 'Obviative',
          checked: false
        }],
        orders: [],
        modes: [],
        showMorphology: false
      }
    };
  },
  methods: {
    getData: function getData() {
      return this.form;
    },
    importData: function importData(data) {
      var _this = this;

      if (data.class) {
        _.forEach(this.form.classes, function (theClass) {
          theClass.checked = theClass.id == data.class;
        });

        this.form.subclasses.forEach(function (subclass) {
          subclass.checked = _this.form.classes.TA.checked;
        });
      }

      if (data.orders.length > 0) {
        var found = false;
        this.form.orders.forEach(function (order) {
          found = false;

          for (var i = 0; i < data.orders.length && !found; i++) {
            found = order.id == data.orders[i];
          }

          order.checked = found;
        });
      }

      if (data.language.text.length > 0) {
        this.form.languages = [data.language];
      }
    },
    onSelectSubclass: function onSelectSubclass(checked) {
      if (checked) {
        this.form.classes.TA.checked = true;
      } else {
        var found = false;

        for (var i = 0; i < this.form.subclasses.length && !found; i++) {
          if (this.form.subclasses[i].checked) {
            found = true;
          }
        }

        this.form.classes.TA.checked = found;
      }
    },
    onSelectAI: function onSelectAI(checked) {
      this.form.subclasses.forEach(function (subclass) {
        subclass.checked = checked;
      });
    },
    loadCheck: function loadCheck(array, field) {
      var _this2 = this;

      if (field.constructor === Array) {
        field.forEach(function (value) {
          _this2.loadCheck(array, value);
        });
      } else {
        this.form[field] = typeof array[field] !== 'undefined' && array[field] && array[field] != '0';
      }
    },
    loadSeries: function loadSeries(array, field) {
      var _this3 = this;

      if (field.constructor === Array) {
        field.forEach(function (value) {
          _this3.loadSeries(array, value);
        });
      } else {
        this.form[field].forEach(function (value) {
          value.checked = false;
        });

        if (array[field]) {
          array[field].forEach(function (value) {
            var found = false;

            for (var i = 0; i < _this3.form[field].length && !found; i++) {
              if (_this3.form[field][i].id == value) {
                _this3.form[field][i].checked = true;
                found = true;
              }
            }
          });
        }
      }
    }
  },
  created: function created() {
    var _this4 = this;

    this.form.orders = this.orders;
    this.form.modes = this.modes;
    var unmarkedIndex = this.form.modes.findIndex(function (mode) {
      return mode.name == 'Unmarked';
    });
    this.form.modes.splice(unmarkedIndex, 1);
    var indicativeIndex = this.form.modes.findIndex(function (mode) {
      return mode.name == 'Indicative';
    });
    this.form.modes[indicativeIndex].name = "Indicative/Unmarked";

    if (this.preset) {
      this.loadCheck(this.preset, ['affirmative', 'negative', 'nonDiminutive', 'diminutive', 'showMorphology']);
      this.loadSeries(this.preset, ['orders', 'modes', 'subclasses']);
      this.form.modeSelect = this.preset.modeSelect;

      if (this.preset.classes) {
        _.forEach(this.form.classes, function (value) {
          value.checked = false;
        });

        this.preset.classes.forEach(function (formClass) {
          _.forEach(_this4.form.classes, function (value) {
            if (value.id == formClass) {
              value.checked = true;
              return false;
            }
          });
        });
      }

      if (this.preset.languages) {
        var temp = [];

        for (var i = 0; i < this.preset.languages.length; i += 2) {
          temp.push({
            text: this.preset.languages[i],
            id: this.preset.languages[i + 1]
          });
        }

        this.form.languages = temp;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Advanced-Paradigm-Search.vue?vue&type=template&id=e5764f54&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      staticClass: "paradigm-search-form",
      attrs: { action: "/verbs/search/paradigm/results", method: "GET" }
    },
    [
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column box is-2" }, [
          _c("h5", { staticClass: "title is-5" }, [_vm._v("Class")]),
          _vm._v(" "),
          _c("div", { staticClass: "field is-grouped" }, [
            _c("p", { staticClass: "control" }, [
              _c("label", { staticClass: "checkbox" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.classes.AI.checked,
                      expression: "form.classes.AI.checked"
                    }
                  ],
                  attrs: { type: "checkbox", value: "1", name: "classes[]" },
                  domProps: {
                    checked: Array.isArray(_vm.form.classes.AI.checked)
                      ? _vm._i(_vm.form.classes.AI.checked, "1") > -1
                      : _vm.form.classes.AI.checked
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.form.classes.AI.checked,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = "1",
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            _vm.$set(
                              _vm.form.classes.AI,
                              "checked",
                              $$a.concat([$$v])
                            )
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              _vm.form.classes.AI,
                              "checked",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            )
                        }
                      } else {
                        _vm.$set(_vm.form.classes.AI, "checked", $$c)
                      }
                    }
                  }
                }),
                _vm._v("\n\t\t\t\t\t\t\tAI\n\t\t\t\t\t\t")
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
                      value: _vm.form.classes.II.checked,
                      expression: "form.classes.II.checked"
                    }
                  ],
                  attrs: { type: "checkbox", value: "2", name: "classes[]" },
                  domProps: {
                    checked: Array.isArray(_vm.form.classes.II.checked)
                      ? _vm._i(_vm.form.classes.II.checked, "2") > -1
                      : _vm.form.classes.II.checked
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.form.classes.II.checked,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = "2",
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            _vm.$set(
                              _vm.form.classes.II,
                              "checked",
                              $$a.concat([$$v])
                            )
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              _vm.form.classes.II,
                              "checked",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            )
                        }
                      } else {
                        _vm.$set(_vm.form.classes.II, "checked", $$c)
                      }
                    }
                  }
                }),
                _vm._v("\n\t\t\t\t\t\t\tII\n\t\t\t\t\t\t")
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
                      value: _vm.form.classes.TI.checked,
                      expression: "form.classes.TI.checked"
                    }
                  ],
                  attrs: { type: "checkbox", value: "4", name: "classes[]" },
                  domProps: {
                    checked: Array.isArray(_vm.form.classes.TI.checked)
                      ? _vm._i(_vm.form.classes.TI.checked, "4") > -1
                      : _vm.form.classes.TI.checked
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.form.classes.TI.checked,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = "4",
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            _vm.$set(
                              _vm.form.classes.TI,
                              "checked",
                              $$a.concat([$$v])
                            )
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              _vm.form.classes.TI,
                              "checked",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            )
                        }
                      } else {
                        _vm.$set(_vm.form.classes.TI, "checked", $$c)
                      }
                    }
                  }
                }),
                _vm._v("\n\t\t\t\t\t\t\tTI\n\t\t\t\t\t\t")
              ])
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
                    value: _vm.form.classes.TA.checked,
                    expression: "form.classes.TA.checked"
                  }
                ],
                attrs: { type: "checkbox", value: "3", name: "classes[]" },
                domProps: {
                  checked: Array.isArray(_vm.form.classes.TA.checked)
                    ? _vm._i(_vm.form.classes.TA.checked, "3") > -1
                    : _vm.form.classes.TA.checked
                },
                on: {
                  change: [
                    function($event) {
                      var $$a = _vm.form.classes.TA.checked,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = "3",
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            _vm.$set(
                              _vm.form.classes.TA,
                              "checked",
                              $$a.concat([$$v])
                            )
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              _vm.form.classes.TA,
                              "checked",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            )
                        }
                      } else {
                        _vm.$set(_vm.form.classes.TA, "checked", $$c)
                      }
                    },
                    function($event) {
                      _vm.onSelectAI($event.target.checked)
                    }
                  ]
                }
              }),
              _vm._v("\n\t\t\t\t\t\tTA\n\t\t\t\t\t")
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "box" },
            _vm._l(_vm.form.subclasses, function(subclass) {
              return _c("p", { staticClass: "control" }, [
                _c("label", { staticClass: "checkbox" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: subclass.checked,
                        expression: "subclass.checked"
                      }
                    ],
                    attrs: { type: "checkbox", name: "subclasses[]" },
                    domProps: {
                      value: subclass.id,
                      checked: Array.isArray(subclass.checked)
                        ? _vm._i(subclass.checked, subclass.id) > -1
                        : subclass.checked
                    },
                    on: {
                      change: [
                        function($event) {
                          var $$a = subclass.checked,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = subclass.id,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(subclass, "checked", $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  subclass,
                                  "checked",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(subclass, "checked", $$c)
                          }
                        },
                        function($event) {
                          _vm.onSelectSubclass($event.target.checked)
                        }
                      ]
                    }
                  }),
                  _vm._v(
                    "\n\t\t\t\t\t\t\t" + _vm._s(subclass.id) + "\n\t\t\t\t\t\t"
                  )
                ])
              ])
            }),
            0
          ),
          _vm._v(" "),
          _c("div", { staticClass: "field is-grouped" }, [
            _c("p", { staticClass: "control" }, [
              _c("label", { staticClass: "checkbox" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.classes.AIO.checked,
                      expression: "form.classes.AIO.checked"
                    }
                  ],
                  attrs: { type: "checkbox", value: "7", name: "classes[]" },
                  domProps: {
                    checked: Array.isArray(_vm.form.classes.AIO.checked)
                      ? _vm._i(_vm.form.classes.AIO.checked, "7") > -1
                      : _vm.form.classes.AIO.checked
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.form.classes.AIO.checked,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = "7",
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            _vm.$set(
                              _vm.form.classes.AIO,
                              "checked",
                              $$a.concat([$$v])
                            )
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              _vm.form.classes.AIO,
                              "checked",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            )
                        }
                      } else {
                        _vm.$set(_vm.form.classes.AIO, "checked", $$c)
                      }
                    }
                  }
                }),
                _vm._v("\n\t\t\t\t\t\t\tAI+O\n\t\t\t\t\t\t")
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
                      value: _vm.form.classes.TAO.checked,
                      expression: "form.classes.TAO.checked"
                    }
                  ],
                  attrs: { type: "checkbox", value: "8", name: "classes[]" },
                  domProps: {
                    checked: Array.isArray(_vm.form.classes.TAO.checked)
                      ? _vm._i(_vm.form.classes.TAO.checked, "8") > -1
                      : _vm.form.classes.TAO.checked
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.form.classes.TAO.checked,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = "8",
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            _vm.$set(
                              _vm.form.classes.TAO,
                              "checked",
                              $$a.concat([$$v])
                            )
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              _vm.form.classes.TAO,
                              "checked",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            )
                        }
                      } else {
                        _vm.$set(_vm.form.classes.TAO, "checked", $$c)
                      }
                    }
                  }
                }),
                _vm._v("\n\t\t\t\t\t\t\tTA+O\n\t\t\t\t\t\t")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "column box is-2" },
          [
            _c("h5", { staticClass: "title is-5" }, [_vm._v("Order")]),
            _vm._v(" "),
            _vm._l(_vm.form.orders, function(order) {
              return _c("p", { staticClass: "control" }, [
                _c("label", { staticClass: "checkbox" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: order.checked,
                        expression: "order.checked"
                      }
                    ],
                    attrs: { type: "checkbox", name: "orders[]" },
                    domProps: {
                      value: order.id,
                      checked: Array.isArray(order.checked)
                        ? _vm._i(order.checked, order.id) > -1
                        : order.checked
                    },
                    on: {
                      change: function($event) {
                        var $$a = order.checked,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = order.id,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(order, "checked", $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                order,
                                "checked",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(order, "checked", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v("\n\t\t\t\t\t\t" + _vm._s(order.name) + "\n\t\t\t\t\t")
                ])
              ])
            })
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "column box is-3" }, [
          _c("h5", { staticClass: "title is-5" }, [_vm._v("Mode")]),
          _vm._v(" "),
          _c("p", { staticClass: "control" }, [
            _c("label", { staticClass: "radio" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.modeSelect,
                    expression: "form.modeSelect"
                  }
                ],
                attrs: {
                  type: "radio",
                  name: "modeSelect",
                  value: "indicativeOnly"
                },
                domProps: {
                  checked: _vm._q(_vm.form.modeSelect, "indicativeOnly")
                },
                on: {
                  change: function($event) {
                    _vm.$set(_vm.form, "modeSelect", "indicativeOnly")
                  }
                }
              }),
              _vm._v("\n\t\t\t\t\t\tIndicative/Unmarked only\n\t\t\t\t\t")
            ])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "control" }, [
            _c("label", { staticClass: "radio" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.modeSelect,
                    expression: "form.modeSelect"
                  }
                ],
                attrs: { type: "radio", name: "modeSelect", value: "allModes" },
                domProps: { checked: _vm._q(_vm.form.modeSelect, "allModes") },
                on: {
                  change: function($event) {
                    _vm.$set(_vm.form, "modeSelect", "allModes")
                  }
                }
              }),
              _vm._v("\n\t\t\t\t\t\tAll available modes\n\t\t\t\t\t")
            ])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "control" }, [
            _c("label", { staticClass: "radio" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.modeSelect,
                    expression: "form.modeSelect"
                  }
                ],
                attrs: {
                  type: "radio",
                  name: "modeSelect",
                  value: "selectModes"
                },
                domProps: {
                  checked: _vm._q(_vm.form.modeSelect, "selectModes")
                },
                on: {
                  change: function($event) {
                    _vm.$set(_vm.form, "modeSelect", "selectModes")
                  }
                }
              }),
              _vm._v("\n\t\t\t\t\t\tThe following modes...\n\t\t\t\t\t")
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "box",
              class: { disabled: _vm.form.modeSelect != "selectModes" },
              staticStyle: {
                "max-height": "10em",
                overflow: "scroll",
                "overflow-x": "auto",
                "padding-top": "0"
              }
            },
            _vm._l(_vm.form.modes, function(mode) {
              return _c("p", { staticClass: "control" }, [
                _c("label", { staticClass: "checkbox" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: mode.checked,
                        expression: "mode.checked"
                      }
                    ],
                    attrs: {
                      type: "checkbox",
                      disabled: _vm.form.modeSelect != "selectModes",
                      name: "modes[]"
                    },
                    domProps: {
                      value: mode.id,
                      checked: Array.isArray(mode.checked)
                        ? _vm._i(mode.checked, mode.id) > -1
                        : mode.checked
                    },
                    on: {
                      change: function($event) {
                        var $$a = mode.checked,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = mode.id,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(mode, "checked", $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                mode,
                                "checked",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(mode, "checked", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v(
                    "\n\t\t\t\t\t\t\t" + _vm._s(mode.name) + "\n\t\t\t\t\t\t"
                  )
                ])
              ])
            }),
            0
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column box is-2" }, [
          _c("h5", { staticClass: "title is-5" }, [_vm._v("Other features")]),
          _vm._v(" "),
          _c("p", { staticClass: "control" }, [
            _c("label", { staticClass: "checkbox" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.affirmative,
                    expression: "form.affirmative"
                  }
                ],
                attrs: { type: "checkbox", name: "affirmative" },
                domProps: {
                  checked: Array.isArray(_vm.form.affirmative)
                    ? _vm._i(_vm.form.affirmative, null) > -1
                    : _vm.form.affirmative
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.form.affirmative,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 &&
                          _vm.$set(_vm.form, "affirmative", $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          _vm.$set(
                            _vm.form,
                            "affirmative",
                            $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                          )
                      }
                    } else {
                      _vm.$set(_vm.form, "affirmative", $$c)
                    }
                  }
                }
              }),
              _vm._v("\n\t\t\t\t\t\tAffirmative\n\t\t\t\t\t")
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
                    value: _vm.form.negative,
                    expression: "form.negative"
                  }
                ],
                attrs: { type: "checkbox", name: "negative" },
                domProps: {
                  checked: Array.isArray(_vm.form.negative)
                    ? _vm._i(_vm.form.negative, null) > -1
                    : _vm.form.negative
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.form.negative,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 &&
                          _vm.$set(_vm.form, "negative", $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          _vm.$set(
                            _vm.form,
                            "negative",
                            $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                          )
                      }
                    } else {
                      _vm.$set(_vm.form, "negative", $$c)
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
                    value: _vm.form.nonDiminutive,
                    expression: "form.nonDiminutive"
                  }
                ],
                attrs: { type: "checkbox", name: "nonDiminutive" },
                domProps: {
                  checked: Array.isArray(_vm.form.nonDiminutive)
                    ? _vm._i(_vm.form.nonDiminutive, null) > -1
                    : _vm.form.nonDiminutive
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.form.nonDiminutive,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 &&
                          _vm.$set(_vm.form, "nonDiminutive", $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          _vm.$set(
                            _vm.form,
                            "nonDiminutive",
                            $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                          )
                      }
                    } else {
                      _vm.$set(_vm.form, "nonDiminutive", $$c)
                    }
                  }
                }
              }),
              _vm._v("\n\t\t\t\t\t\tNon-diminutive\n\t\t\t\t\t")
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
                    value: _vm.form.diminutive,
                    expression: "form.diminutive"
                  }
                ],
                attrs: { type: "checkbox", name: "diminutive" },
                domProps: {
                  checked: Array.isArray(_vm.form.diminutive)
                    ? _vm._i(_vm.form.diminutive, null) > -1
                    : _vm.form.diminutive
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.form.diminutive,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 &&
                          _vm.$set(_vm.form, "diminutive", $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          _vm.$set(
                            _vm.form,
                            "diminutive",
                            $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                          )
                      }
                    } else {
                      _vm.$set(_vm.form, "diminutive", $$c)
                    }
                  }
                }
              }),
              _vm._v("\n\t\t\t\t\t\tDiminutive\n\t\t\t\t\t")
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "column box",
            staticStyle: { "margin-bottom": "1.5rem" }
          },
          [
            _c("h5", { staticClass: "title is-5" }, [_vm._v("Language")]),
            _vm._v(" "),
            _c("alg-multi-datalist", {
              attrs: { list: _vm.languages, name: "languages[]" },
              model: {
                value: _vm.form.languages,
                callback: function($$v) {
                  _vm.$set(_vm.form, "languages", $$v)
                },
                expression: "form.languages"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "control" }, [
        _c("label", { staticClass: "checkbox" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.showMorphology,
                expression: "form.showMorphology"
              }
            ],
            attrs: { type: "checkbox", name: "showMorphology" },
            domProps: {
              checked: Array.isArray(_vm.form.showMorphology)
                ? _vm._i(_vm.form.showMorphology, null) > -1
                : _vm.form.showMorphology
            },
            on: {
              change: function($event) {
                var $$a = _vm.form.showMorphology,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 &&
                      _vm.$set(_vm.form, "showMorphology", $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      _vm.$set(
                        _vm.form,
                        "showMorphology",
                        $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                      )
                  }
                } else {
                  _vm.$set(_vm.form, "showMorphology", $$c)
                }
              }
            }
          }),
          _vm._v("\n\t\t\t\tShow Morphology\n\t\t\t")
        ])
      ]),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "button is-success", attrs: { type: "submit" } },
        [_vm._v("Search")]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/forms/Advanced-Paradigm-Search.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Advanced_Paradigm_Search_vue_vue_type_template_id_e5764f54___ = __webpack_require__("./resources/assets/js/components/forms/Advanced-Paradigm-Search.vue?vue&type=template&id=e5764f54&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Advanced_Paradigm_Search_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/forms/Advanced-Paradigm-Search.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Advanced_Paradigm_Search_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Advanced_Paradigm_Search_vue_vue_type_template_id_e5764f54___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Advanced_Paradigm_Search_vue_vue_type_template_id_e5764f54___["b" /* staticRenderFns */],
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
      api.createRecord('e5764f54', component.options)
    } else {
      api.reload('e5764f54', component.options)
    }
    module.hot.accept("./Advanced-Paradigm-Search.vue?vue&type=template&id=e5764f54&", function () {
      api.rerender('e5764f54', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/forms/Advanced-Paradigm-Search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/forms/Advanced-Paradigm-Search.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Advanced_Paradigm_Search_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Advanced-Paradigm-Search.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Advanced_Paradigm_Search_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/forms/Advanced-Paradigm-Search.vue?vue&type=template&id=e5764f54&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Advanced_Paradigm_Search_vue_vue_type_template_id_e5764f54___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Advanced-Paradigm-Search.vue?vue&type=template&id=e5764f54&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Advanced_Paradigm_Search_vue_vue_type_template_id_e5764f54___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Advanced_Paradigm_Search_vue_vue_type_template_id_e5764f54___["b"]; });


/***/ })

});