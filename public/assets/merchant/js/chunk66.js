<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:public/assets/merchant/js/chunk66.js
<<<<<<< HEAD:public/assets/merchant/js/chunk66.js
webpackJsonp([66,72],{
=======
webpackJsonp([13,18],{
>>>>>>> Adapt async autocomplete into Buefy component:public/assets/merchant/js/chunk13.js
=======
webpackJsonp([13],{
>>>>>>> Remove unneeded components:public/assets/merchant/js/chunk13.js

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
=======
webpackJsonp([66],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ParadigmTable.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuebar__ = __webpack_require__("./node_modules/vuebar/vuebar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuebar__);

Vue.use(__WEBPACK_IMPORTED_MODULE_0_vuebar___default.a);
/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['morphemesOn', 'hasMorphemes'],
  data: function data() {
    return {
      show: false
    };
  },
  methods: {
    toggleShow: function toggleShow() {
      this.show = !this.show;
    }
  },
  created: function created() {
    if (this.morphemesOn) {
      this.show = this.hasMorphemes && this.morphemesOn;
    }
  },
  mounted: function mounted() {
    var table = this.$refs.table;
    Vue.nextTick(function () {
      table.style.width = table.firstChild.scrollWidth + 'px'; //console.log(table.style.width);
    });
    var header = table.firstChild;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = header.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var row = _step.value;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = row.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var cell = _step2.value;
            cell.style.top = cell.offsetTop + 'px';
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

/***/ "./node_modules/vuebar/vuebar.js":
/***/ (function(module, exports, __webpack_require__) {

/*

  TODO: min-height of scrollbar support
  TODO: revisit naming of state properties: especially scrollTop, barTop, barHeight
  TODO: performance: cache in state all properties that make render/reflow of document (like el2.offsetTop, etc.)
  TODO: add dragger min-height to default styles
  TODO: change name of dragger to something more fitting
  NOTE: take in consideration content height/width change between horizontal/vertical height/width calculations
  TODO: content min/max height support
  TODO: reimplement replaceOverlayScrollbars (new overrideFloatingScrollbar) option
  TODO: don't overwrite vuebar element classess completely, use aC
  TODO: Site: add limitations (no tables, etc.) ?
  TODO: There is a problem with hiding overlayed/0 scrollbars when in vertical+horizonal mode - maybe just add warning to replaceOverlayScrollbars option?
  TODO: el1ScrollInvisibleClass/el1ScrollVisibleClass should be either for X or Y pane, not both

  Upon Completion
  TODO: Validate el1/el2 style attributes (prevent or warn about custom inline styles)
  TODO: SSR support / https://ssr.vuejs.org/en/universal.html#custom-directives
  TODO: Check again if all references (this.ins/this.state/this.config) were refactored properly
  TODO: Check if events are removed properly on destroy method

*/



;(function(){
  'use strict';
>>>>>>> Update sources component

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

<<<<<<< HEAD
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
=======
  /*------------------------------------*\
    Vuebar Constructor
  \*------------------------------------*/
  function Vuebar(Vue, el, binding, vnode, oldVnode){



    /*------------------------------------*\
      Config
      - Default values that may be overwritten
        on directive intialization
    \*------------------------------------*/
    this.config = {

      scrollThrottle: 10,
      draggerThrottle: 10,
      resizeRefresh: true,
      observerThrottle: 100,
      resizeDebounce: 100,
      unselectableBody: true,
      //replaceOverlayScrollbars: false, // TODO
      scrollingPhantomDelay: 1000,
      draggingPhantomDelay: 1000,
      preventParentScroll: false,

      el1Class: 'vb',
      el1ScrollVisibleClass: 'vb-visible',
      el1ScrollInvisibleClass: 'vb-invisible',
      el1ScrollingClass: 'vb-scrolling',
      el1ScrollingPhantomClass: 'vb-scrolling-phantom',
      el1DraggingClass: 'vb-dragging',
      el1DraggingPhantomClass: 'vb-dragging-phantom',

      el2Class: 'vb-content',

      draggerCommonClass: 'vb-dragger',
      draggerCommonStylerClass: 'vb-dragger-styler',

      draggerYClass: 'vb-dragger-y',
      draggerXClass: 'vb-dragger-x',


>>>>>>> Update sources component
    }


<<<<<<< HEAD
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
=======

    /*------------------------------------*\
      Instances
      - This holds references to elements
        and as well to events & other stuff
      - More fitting name would probably
        be "refs", but I don't want for
        people to confuse it with Vue
        $refs property
    \*------------------------------------*/
    this.ins = {

      // reference to binding
      binding: null,

      // references to directive DOM elements
      el1: null,
      el2: null,
      dragger: null,

      // reference to MutationObserver
      mutationObserver: null,

      // references to timeouts for DOM class manipulation
      scrollingClassTimeout: null,
      draggingClassTimeout: null,
      scrollingPhantomClassTimeout: null,
      draggingPhantomClassTimeout: null,

      // references to a functions we'll need when removing events
      windowResize: null,
      scrollHandler: null,
      wheelHandler: null,

      y: {
        barMousedown: null,
        documentMousemove: null,
        documentMouseup: null,
      },

      x: {
        barMousedown: null,
        documentMousemove: null,
        documentMouseup: null,
      },

    }



    /*------------------------------------*\
      State
      - Don't confuse with Vue state!
      - This holds internal Vuebar state
        for computing positions of
        elements and scrollbar
      - Properties computed for internal
        directive logic & DOM manipulations
    \*------------------------------------*/
    this.state = {

      // constants + cached properties
      nativeScrollbarSize: null,

      // dynamic properties for y plane
      y: {
        visibleRatio: 0, // ratio between container height and scrollable content height
        barTop: 0, // position (top) of dragger in px
        barBaseHeight: 0, // base height of dragger in px
        barClickOffset: 0, // relative position of mouse at the time of clicking on dragger
        scrollPercent: 0, // scroll percentage on y plane
        scrollTop: 0, // position of content scrollTop in px
      },


      // dynamic properties for x plane
      x: {
        visibleRatio: 0, // ratio between container height and scrollable content height
        barLeft: 0, // position (left) of dragger in px
        barBaseWidth: 0, // base width of dragger in px
        barClickOffset: 0, // relative position of mouse at the time of clicking on dragger
        scrollPercent: 0, // scroll percentage on x plane
        scrollLeft: 0,
      },


      // when the dragger is used - can be 'y', 'x' or false
      barDragging: false,


    }





    /*------------------------------------*\
      Validate Markup
    \*------------------------------------*/
    this.validateMarkup = function(){
      if (!el.firstChild) {
        return this.util.warn('Element 1 with v-bar directive doesn\'t have required child element 2.');
      }
      return true;
    }






    /*------------------------------------*\
      Initialize Sub Methods
      - These methods gets called only once
        on initialize()
    \*------------------------------------*/

    // options
    this.initializeOptions = function(){
      // get options object & overwrite defaults with provided options
      // - it will come from directive binding (there is a 'value' property)
      // - or it will come from public method direct options object
      var options = binding.value ? binding.value : (binding ? binding : {});
      for (var key in options){
        this.config[key] = options[key];
      }
    }


    // create and reference event listeners
    this.initializeEvents = function(){

      // create and reference event listeners
      this.ins.y.barMousedown = this.barMousedown('y');
      this.ins.x.barMousedown = this.barMousedown('x');

      this.ins.y.documentMousemove = this.documentMousemove('y');
      this.ins.x.documentMousemove = this.documentMousemove('x');

      this.ins.y.documentMouseup = this.documentMouseup('y');
      this.ins.x.documentMouseup = this.documentMouseup('x');

      this.ins.windowResize = this.windowResize();
      this.ins.scrollHandler = this.scrollHandler();
      this.ins.wheelHandler = this.wheelHandler();

      // add events
      this.ins.el2.addEventListener('scroll', this.ins.scrollHandler, 0);
      this.ins.draggerY.addEventListener('mousedown', this.ins.y.barMousedown, 0);
      this.ins.draggerX.addEventListener('mousedown', this.ins.x.barMousedown, 0);

      // - wheel event is only needed when preventParentScroll option is enabled
      this.config.preventParentScroll ? this.ins.el2.addEventListener('wheel', this.ins.wheelHandler, 0) : null;

      // - resize event is only needed when resizeRefresh option is enabled
      this.config.resizeRefresh ? window.addEventListener('resize', this.ins.windowResize, 0) : null;

    }



    // setup element styles and classess
    this.initializeStyles = function(){

      // need to have visibleRatios calculate beforehand...
      //this.computeVisibleRatios();

      // el1 styles and class
      this.util.aC(this.ins.el1, this.config.el1Class);
      this.ins.el1.style.position = 'relative';
      this.ins.el1.style.overflow = 'hidden';

      // el2 styles and class
      this.util.aC(this.ins.el2, this.config.el2Class);
      this.ins.el2.style.display = 'block';
      this.ins.el2.style.overflowX = 'scroll';
      this.ins.el2.style.overflowY = 'scroll';
      this.ins.el2.style.width = '100%';
      this.ins.el2.style.height = '100%';
      this.util.cS(this.ins.el2, 'BoxSizing', 'content-box'); // safe guard for user styling


      // do we need scrollbars?
      var scrollbarsWanted = (this.state.y.visibleRatio<1 || this.state.x.visibleRatio<1) &&        this.state.nativeScrollbarSize;

      // how much of el2 to hide... if native scrollbar width is 0 it's either overlay scrollbar or hidden
      // ... so let's use constant of 20px because it's impossible (?) to calculate scrollbar width in this case
      // and 20px is a safe value that should cover 99% of cases (PRs welcome!)
      var pxToHide = this.state.nativeScrollbarSize ? this.state.nativeScrollbarSize : 20; // <---- TODO?


      // do the magic
      if (scrollbarsWanted){

        // for in-the-flow scrollbars (not overlayed)
        // hide el2 scrollbar by making it larger than el1 overflow boundaries
        if (this.state.nativeScrollbarSize>0) {
          this.ins.el2.style.width = 'calc(100% + ' + pxToHide + 'px)';
          this.ins.el2.style.height = 'calc(100% + ' + pxToHide + 'px)';
        }

        // for overlayed/0 scrollbars
        // add padding to overlayed/0 scrollbars, so the proper el2 content won't get cut off
        else {
          // TODO: todo this
        }


      }
>>>>>>> Update sources component



    }

<<<<<<< HEAD
/***/ "./resources/assets/js/components/forms/Advanced-Paradigm-Search.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Advanced_Paradigm_Search_vue_vue_type_template_id_e5764f54___ = __webpack_require__("./resources/assets/js/components/forms/Advanced-Paradigm-Search.vue?vue&type=template&id=e5764f54&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Advanced_Paradigm_Search_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/forms/Advanced-Paradigm-Search.vue?vue&type=script&lang=js&");
=======

    // mutation observer for content changes outside Vue state
    this.initializeMutationObserver = function(){
      if (typeof MutationObserver === typeof void 0) { return null }

      var observer = new MutationObserver(this.util.throttle(function(mutations) {
        this.refresh();
      }.bind(this), this.config.observerThrottle));

      observer.observe(this.ins.el2, {
        childList: true,
        characterData: true,
        subtree: true,
      });

      this.ins.mutationObserver = observer;

      return observer;
    }




    /*------------------------------------*\
      Initialize Scrollbar
    \*------------------------------------*/
    this.initialize = function(){

      // safeguard to not initialize vuebar when it's already initialized
      if (el.$_vuebar) return this.util.warn('Can\'t initialize on already initialized element.');

      // validate on directive bind if the markup is OK
      if (!this.validateMarkup()) return;

      // initialize options...
      this.initializeOptions();

      //  native scrollbar size
      this.state.nativeScrollbarSize = this.util.getNativeScrollbarSize(el.firstElementChild);

      // add binding and els to state
      this.ins.binding = binding.value ? binding : null;
      this.ins.el1 = el;
      this.ins.el2 = el.firstElementChild;

      // create draggers
      this.ins.draggerY = this.createDragger('y');
      this.ins.draggerX = this.createDragger('x');

      // initialize events and observer...
      this.initializeEvents();
      this.initializeMutationObserver();

      // initialize styles...
      this.initializeStyles();

      // expose instance on vuebar element (https://vuejs.org/v2/style-guide/#Private-property-names-essential)
      this.ins.el1.$_vuebar = this;

      // initial calculations using refresh scrollbar
      this.refresh({alsoImmediately: true});

      // return instance
      return this;

    }




    /*------------------------------------*\
      Destroy Scrollbar
    \*------------------------------------*/
    this.destroy = function(options){
      var options = options ? options : {};

      // clear events
      this.ins.draggerY.removeEventListener('mousedown', this.ins.y.barMousedown, 0);
      this.ins.draggerX.removeEventListener('mousedown', this.ins.x.barMousedown, 0);
      this.ins.el2.removeEventListener('scroll', this.ins.scrollHandler, 0);
      this.ins.el2.removeEventListener('wheel', this.ins.scrollHandler, 0);
      window.removeEventListener('resize', this.ins.windowResize, 0);

      // disconnect mutation observer
      this.ins.mutationObserver ? this.ins.mutationObserver.disconnect() : null;

      // clear el1 classes
      this.util.rC(this.ins.el1, this.config.el1Class);
      this.util.rC(this.ins.el1, this.config.el1ScrollVisibleClass);
      this.util.rC(this.ins.el1, this.config.el1ScrollInvisibleClass);
      this.util.rC(this.ins.el1, this.config.el1ScrollingClass);
      this.util.rC(this.ins.el1, this.config.el1ScrollingPhantomClass);
      this.util.rC(this.ins.el1, this.config.el1DraggingClass);

      // clear el1 styles
      if (!options.skipStyles) {
        this.ins.el1.style.position = '';
        this.ins.el1.style.overflow = '';
      }

      // clear el2 classes
      this.util.rC(this.ins.el2, this.config.el2Class);

      // clear el2 styles
      if (!options.skipStyles) {
        this.ins.el2.style.boxSizing = '';
        this.ins.el2.style.display = '';
        this.ins.el2.style.overflowX = '';
        this.ins.el2.style.overflowY = '';
        this.ins.el2.style.height = '';
        this.ins.el2.style.width = '';
        //this.ins.el2.style.marginRight = '';
        this.ins.el2.style.paddingRight = '';
      }

      // clear dragger
      this.ins.draggerY.removeChild(this.ins.draggerY.firstChild);
      this.ins.draggerX.removeChild(this.ins.draggerX.firstChild);
      this.ins.el1.removeChild(this.ins.draggerY);
      this.ins.el1.removeChild(this.ins.draggerX);

      // clear timeouts that may be still running
      this.ins.scrollingPhantomClassTimeout ?
      clearTimeout(this.ins.scrollingPhantomClassTimeout) : null;
      this.ins.draggingPhantomClassTimeout ?
      clearTimeout(this.ins.draggingPhantomClassTimeout) : null;

      // delete instance from vuebar element
      delete this.ins.el1.$_vuebar;

      // return el1 (not sure why, but why not)
      return this.ins.el1;

    }





    /*------------------------------------*\
      Refresh Scrollbar
    \*------------------------------------*/
    this.refresh = function(options){
      var options = options ? options : {};
      if (options.alsoImmediately) {
        this.computeVisibleRatios();
        this.computeBarTopOnScroll();
        this.computeBarLeftOnScroll();
        this.computeBarBaseHeight();
        this.computeBarBaseWidth();
        this.updateDraggers();
      }
      Vue.nextTick(function(){
        if (!el.$_vuebar) return;
        this.computeVisibleRatios();
        this.computeBarTopOnScroll();
        this.computeBarLeftOnScroll();
        this.computeBarBaseHeight();
        this.computeBarBaseWidth();
        this.updateDraggers();
      }.bind(this));
    }














    /*------------------------------------*\
      Computing Properties
    \*------------------------------------*/

    this.computeVisibleRatios = function(){
      this.state.y.visibleRatio = (this.ins.el2.clientHeight / this.ins.el2.scrollHeight);
      this.state.x.visibleRatio = (this.ins.el2.clientWidth / this.ins.el2.scrollWidth);
    }


    //this.computeScrollTop = function(){
    //  this.state.y.scrollTop = this.state.y.barTop * (this.ins.el2.scrollHeight / this.ins.el2.clientHeight);
    //}

    this.computeScrollTop = function(){

      // calculate scroll percentage...
      // I SPENT 5 HOURS to come up with these 2 lines below - lets say I've suffered "writer's block" =) / Dom
      var barHeight = this.ins.draggerY.offsetHeight;
      this.state.y.scrollPercent = this.state.y.barTop / (this.ins.el2.clientHeight - barHeight);

      // convert scroll percentage to scrollTop pixels
      var availablePixels = (this.ins.el2.scrollHeight - this.ins.el2.clientHeight);
      var scrollTop = availablePixels * this.state.y.scrollPercent;

      //console.table({
      //  barHeight: barHeight,
      //  scrollPercent: (this.state.y.scrollPercent*100)+'%',
      //  el2ScrollHeight: this.ins.el2.scrollHeight,
      //  el2ClientHeight: this.ins.el2.clientHeight,
      //  availablePixels: availablePixels,
      //  scrollTop: scrollTop,
      //});

      this.state.y.scrollTop = scrollTop;
    }



    this.computeScrollLeft = function(){

      // calculate scroll percentage...
      var barWidth = this.ins.draggerX.offsetWidth;
      this.state.x.scrollPercent = this.state.x.barLeft / (this.ins.el2.clientWidth - barWidth);

      // convert scroll percentage to scrollTop pixels
      var availablePixels = (this.ins.el2.scrollWidth - this.ins.el2.clientWidth);
      var scrollLeft = availablePixels * this.state.x.scrollPercent;

      this.state.x.scrollLeft = scrollLeft;
    }





    // for y scrollbar
    this.computeBarBaseHeight = function(){
      if (this.state.y.visibleRatio >= 1) {
        this.state.y.barBaseHeight = 0;
      } else {
        this.state.y.barBaseHeight = this.ins.el2.clientHeight * this.state.y.visibleRatio;
      }
    }


    // for x scrollbar
    this.computeBarBaseWidth = function(){
      if (this.state.x.visibleRatio >= 1) {
        this.state.x.barBaseWidth = 0;
      } else {
        this.state.x.barBaseWidth = this.ins.el2.clientWidth * this.state.x.visibleRatio;
      }
    }




    this.computeBarTopOnDrag = function(event){

      // get bar height
      var barHeight = this.ins.draggerY.offsetHeight;

      // get relative mouse y position (mouse position - el1 offset from window)
      var relativeMouseY = (event.clientY - this.ins.el1.getBoundingClientRect().top);

      // if bar is trying to go over top
      if (relativeMouseY <= this.state.y.barClickOffset) {
        this.state.y.barTop = 0;
      }

      // alternative: if bar is trying to go over top
      //if (this.state.y.scrollPercent <= 0.0) {
      //  this.state.y.barTop = 0;
      //}

      // if bar is moving between top and bottom
      if (relativeMouseY > this.state.y.barClickOffset) {
        this.state.y.barTop = relativeMouseY - this.state.y.barClickOffset;
      }

      // if bar is trying to go over bottom
      if ( (this.state.y.barTop + barHeight ) >= this.ins.el2.clientHeight ) {
        this.state.y.barTop = this.ins.el2.clientHeight - barHeight;
      }

      // debug
      //this.state.y.barTop = relativeMouseY - this.state.y.barClickOffset;

    }



    this.computeBarLeftOnDrag = function(event){

      // get bar width
      var barWidth = this.ins.draggerX.offsetWidth;

      // get relative mouse x position (mouse position - el1 offset from window)
      var relativeMouseX = (event.clientX - this.ins.el1.getBoundingClientRect().left);

      // if bar is trying to go over top
      if (relativeMouseX <= this.state.x.barClickOffset) {
        this.state.x.barLeft = 0;
      }

      // if bar is moving between top and bottom
      if (relativeMouseX > this.state.x.barClickOffset) {
        this.state.x.barLeft = relativeMouseX - this.state.x.barClickOffset;
      }

      // if bar is trying to go over bottom
      if ( (this.state.x.barLeft + barWidth ) >= this.ins.el2.clientWidth ) {
        this.state.x.barLeft = this.ins.el2.clientWidth - barWidth;
      }

      // debug
      //this.state.x.barLeft = relativeMouseX - this.state.x.barClickOffset;

    }







    this.computeBarTopOnScroll = function(){
      var el2ClientHeight = this.ins.el2.clientHeight;
      var el2ScrollHeight = this.ins.el2.scrollHeight;
      var el2ScrollTop = this.ins.el2.scrollTop;
      var draggerYOffsetHeight = this.ins.draggerY.offsetHeight;

      var scrollPercent = el2ScrollTop / (el2ScrollHeight - el2ClientHeight);
      var availablePixels = (el2ClientHeight - draggerYOffsetHeight);
      this.state.y.barTop = availablePixels * scrollPercent;
    }



    this.computeBarLeftOnScroll = function(){
      var el2ClientWidth = this.ins.el2.clientWidth;
      var el2ScrollWidth = this.ins.el2.scrollWidth;
      var el2ScrollLeft = this.ins.el2.scrollLeft;
      var draggerXOffsetWidth = this.ins.draggerX.offsetWidth;

      var scrollPercent = el2ScrollLeft / (el2ScrollWidth - el2ClientWidth);
      var availablePixels = (el2ClientWidth - draggerXOffsetWidth);
      this.state.x.barLeft = availablePixels * scrollPercent;
    }








    /*------------------------------------*\
      Styles & DOM
    \*------------------------------------*/
    this.createDragger = function(plane){

      var dragger = document.createElement('div');
      var draggerStyler = document.createElement('div');

      this.util.aC(dragger, this.config.draggerCommonClass);
      this.util.aC(draggerStyler, this.config.draggerCommonStylerClass);
      if (plane==='y') this.util.aC(dragger, this.config.draggerYClass);
      if (plane==='x') this.util.aC(dragger, this.config.draggerXClass);

      dragger.style.position = 'absolute';

      dragger.appendChild(draggerStyler);
      this.ins.el1.appendChild(dragger);

      return dragger;
    }


    this.updateDraggers = function(options){
      var options = options ? options : {};

      // do we need draggers visible?
      var scrollbarYWanted = !!this.state.nativeScrollbarSize && this.state.y.visibleRatio<1;
      var scrollbarXWanted = !!this.state.nativeScrollbarSize && this.state.x.visibleRatio<1;

      if (scrollbarYWanted) {
        this.ins.draggerY.style.display = '';
      } else {
        this.ins.draggerY.style.display = 'none';
      }

      if (scrollbarXWanted) {
        this.ins.draggerX.style.display = '';
      } else {
        this.ins.draggerX.style.display = 'none';
      }


      if (scrollbarYWanted || scrollbarXWanted) {
        this.util.rC(this.ins.el1, this.config.el1ScrollInvisibleClass);
        this.util.aC(this.ins.el1, this.config.el1ScrollVisibleClass);
      } else {
        this.util.rC(this.ins.el1, this.config.el1ScrollVisibleClass);
        this.util.aC(this.ins.el1, this.config.el1ScrollInvisibleClass);
        // we can stop here since we don't need calculations if scrollbars are not wanted at all
        return;
      }


      // setting dragger styles
      this.ins.draggerY.style.height = parseInt(Math.round(this.state.y.barBaseHeight)) + 'px';
      this.ins.draggerY.style.top = parseInt(Math.round(this.state.y.barTop)) + 'px';

      this.ins.draggerX.style.width = parseInt(Math.round(this.state.x.barBaseWidth)) + 'px';
      this.ins.draggerX.style.left = parseInt(Math.round(this.state.x.barLeft)) + 'px';

      //this.ins.draggerY.style.height = Math.ceil( this.state.y.barBaseHeight ) + 'px';
      //this.ins.draggerY.style.top = Math.ceil( this.state.y.barTop ) + 'px';



      if (options.withScrollingClasses) {

        // add scrolling class
        this.util.aC(this.ins.el1, this.config.el1ScrollingClass);

        // remove scrolling class
        this.ins.scrollingClassTimeout ?
        clearTimeout(this.ins.scrollingClassTimeout) : null;

        this.ins.scrollingClassTimeout = setTimeout(function() {
          this.util.rC(this.ins.el1, this.config.el1ScrollingClass);
        }.bind(this), this.config.scrollThrottle + 5);



        // add phantom scrolling class
        this.util.aC(this.ins.el1, this.config.el1ScrollingPhantomClass);

        // remove phantom scrolling class
        this.ins.scrollingPhantomClassTimeout ?
        clearTimeout(this.ins.scrollingPhantomClassTimeout) : null;
        this.ins.scrollingPhantomClassTimeout = setTimeout(function() {
          this.util.rC(this.ins.el1, this.config.el1ScrollingPhantomClass);
        }.bind(this), this.config.scrollThrottle + this.config.scrollingPhantomDelay);

      }

    }




    this.preventParentScroll = function(event){
      if (this.state.y.visibleRatio >= 1) return false;

      var scrollDist = this.ins.el2.scrollHeight - this.ins.el2.clientHeight;
      var scrollTop = this.ins.el2.scrollTop;

      var wheelingUp = event.deltaY < 0;
      var wheelingDown = event.deltaY > 0;

      if ( (scrollTop <= 0) && wheelingUp) {
        event.preventDefault();
        return false;
      }

      if ( (scrollTop >= scrollDist) && wheelingDown) {
        event.preventDefault();
        return false;
      }

    }



    this.updateScroll = function(){
      this.ins.el2.scrollTop = this.state.y.scrollTop;
      this.ins.el2.scrollLeft = this.state.x.scrollLeft;
    }







    /*------------------------------------*\
      Events & Handlers
    \*------------------------------------*/

    this.scrollHandler = function(){
      return this.util.throttle(function(event){
        this.computeVisibleRatios();
        this.computeBarBaseHeight(); // fallback for an undetected content change
        this.computeBarBaseWidth();
        if (!this.state.barDragging) {
          this.computeBarTopOnScroll();
          this.computeBarLeftOnScroll();
          this.updateDraggers({withScrollingClasses: true});
        }
      }.bind(this), this.config.scrollThrottle);
    }


    this.wheelHandler = function(){
      return function(event){
        this.preventParentScroll(event);
      }.bind(this);
    }


    this.documentMousemove = function(plane){
      return this.util.throttle(function(event){

        if (plane==='y') this.computeBarTopOnDrag(event);
        if (plane==='x') this.computeBarLeftOnDrag(event);

        this.updateDraggers();

        // we need to calculate both, so the other scrollbar
        // wont return to it's old scroll position
        // "scroll then drag problem"
        this.computeScrollTop();
        this.computeScrollLeft();

        this.updateScroll();

      }.bind(this), this.config.draggerThrottle);
    }


    this.documentMouseup = function(plane){
      return function(event){

        //
        this.state.barDragging = false;

        // enable user select
        this.ins.el1.style.userSelect = '';
        this.config.unselectableBody ? this.util.cS(document.body, 'UserSelect', '') : null;

        // remove dragging class
        this.util.rC(this.ins.el1, this.config.el1DraggingClass);
        this.ins.draggingPhantomClassTimeout = setTimeout(function() {
          this.util.rC(this.ins.el1, this.config.el1DraggingPhantomClass);
        }.bind(this), this.config.draggingPhantomDelay);


        // remove events
        document.removeEventListener('mousemove', this.ins[plane].documentMousemove, 0);
        document.removeEventListener('mouseup', this.ins[plane].documentMouseup, 0);

      }.bind(this);

    }


    this.barMousedown = function(plane){
      return function(event){

        // do nothing if it's not left mouse button
        if ( event.which!==1 ) { return false }


        if (plane==='y') {
          this.state.barDragging = 'y';
          this.state.y.barClickOffset = event.offsetY;
        }

        if (plane==='x') {
          this.state.barDragging = 'x';
          this.state.x.barClickOffset = event.offsetX;
        }

        // disable user select
        this.ins.el1.style.userSelect = 'none';
        this.config.unselectableBody ? this.util.cS(document.body, 'UserSelect', 'none') : null;

        // add dragging class
        this.util.aC(this.ins.el1, this.config.el1DraggingClass);
        this.ins.draggingPhantomClassTimeout ?
        clearTimeout(this.ins.draggingPhantomClassTimeout) : null;
        this.util.aC(this.ins.el1, this.config.el1DraggingPhantomClass);


        // add events
        document.addEventListener('mousemove', this.ins[plane].documentMousemove, 0);
        document.addEventListener('mouseup', this.ins[plane].documentMouseup, 0);


      }.bind(this);
    }






    this.windowResize = function(){
      return this.util.debounce(function(event){
        this.refresh();
      }.bind(this), this.config.resizeDebounce);
    }










    /*------------------------------------*\
      Convenience Methods
      - Warning! Don't use yet.
      - This method API will change.
    \*------------------------------------*/
    this.scrollTo = function(positionY, positionX){
      // TODO: scroll to top
      // TODO: scroll to bottom
      // TODO: scroll to child element
      // TODO: scroll to position
      // TODO: scroll by specific amount of distance
      // TODO: smoothly animated scroll
      if (!positionY) return this.util.warn('[scrollTo]: You need to specify position to scroll.');
      if (positionY === 'top') { this.ins.el2.scrollTop = 0; }
      else if (positionY === 'bottom') { this.ins.el2.scrollTop = this.ins.el2.scrollHeight; }
      else {
        this.ins.el2.scrollTop = positionY;
        this.ins.el2.scrollLeft = positionX;
      }
    }











    /*------------------------------------*\
      Utils
    \*------------------------------------*/
    this.util = {


      /*------------------------------------*\
        Warning
      \*------------------------------------*/
      warn: function(message){
        var message = '[Vuebar]: ' + message;
        return Vue.util && Vue.util.warn ? Vue.util.warn(message) : window.console.warn(message);
      },



      /*------------------------------------*\
        Debounce Helper
        https://remysharp.com/2010/07/21/throttling-function-calls
      \*------------------------------------*/
      debounce: function(fn, delay) {
        var timer = null;
        return function () {
          var context = this, args = arguments;
          clearTimeout(timer);
          timer = setTimeout(function () {
            fn.apply(context, args);
          }, delay);
        };
      },



      /*------------------------------------*\
        Throttle Helper
        https://remysharp.com/2010/07/21/throttling-function-calls
      \*------------------------------------*/
      throttle: function(fn, threshhold, scope) {
        threshhold || (threshhold = 250);
        var last,
        deferTimer;
        return function () {
          var context = scope || this;

          var now = +new Date,
          args = arguments;
          if (last && now < last + threshhold) {
            // hold on to it
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function () {
              last = now;
              fn.apply(context, args);
            }, threshhold);
          } else {
            last = now;
            fn.apply(context, args);
          }
        }
      },




      /*------------------------------------*\
        [C]ompat [S]tyle
        Style Vendor Prefixes Helper
      \*------------------------------------*/
      cS: function(element, property, value) {
        element.style['webkit' + property] = value;
        element.style['moz' + property] = value;
        element.style['ms' + property] = value;
        element.style['o' + property] = value;
        element.style[ property.slice(0,1).toLowerCase() + property.substring(1) ] = value;
      },



      /*------------------------------------*\
        Class Manipulation Helpers
        https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
      \*------------------------------------*/

      // hasClass
      hC: function(el, classToCheck) {
        if (el.classLists) { return el.classList.contains(classToCheck); }
        else { return (new RegExp('\\b'+ classToCheck+'\\b')).test(el.className); }
      },

      // addClass
      aC: function(el, classToAdd) {
        var hC = (this.util && this.util.hC) ? this.util.hC : this.hC; // fix for < ie9
        if (el.classList) { el.classList.add(classToAdd); }
        else if (!hC(el, classToAdd)) { el.className += ' ' + classToAdd };
      },

      // removeClass
      rC: function(el, classToRemove) {
        if (el.classList) el.classList.remove(classToRemove);
        else el.className = el.className.replace(new RegExp('\\b'+ classToRemove+'\\b', 'g'), '');
      },




      /*------------------------------------*\
        Calculate scrollbar size (width) in element
        - if the size is 0 it means the scrollbar is floated/overlayed
        - accepts "container" paremeter because ie & edge can have different
        scrollbar behaviors for different elements using '-ms-overflow-style'
        - useful: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
      \*------------------------------------*/
      getNativeScrollbarSize: function(container) {
        var container = container ? container : document.body;

        var fullWidth = 0;
        var barWidth = 0;

        var wrapper = document.createElement('div');
        var child = document.createElement('div');

        wrapper.style.display = 'block';
        wrapper.style.boxSizing = 'content-box';
        wrapper.style.position = 'absolute';
        wrapper.style.pointerEvents = 'none';
        wrapper.style.opacity = '0';
        wrapper.style.bottom = '0';
        wrapper.style.right = '0';
        wrapper.style.width = '100px';
        wrapper.style.height = '30px';
        wrapper.style.overflow = 'hidden';

        wrapper.appendChild(child);
        container.appendChild(wrapper);

        fullWidth = child.offsetWidth;

        wrapper.style.overflowY = 'scroll';

        // fix for safari https://github.com/DominikSerafin/vuebar/pull/45
        child.style.height = '60px';
        child.style.width = '100%';

        barWidth = fullWidth - child.offsetWidth;

        container.removeChild(wrapper);

        return barWidth;
      },


    }





  }






  /*------------------------------------*\
    Vuebar For Installation
  \*------------------------------------*/
  function VuebarPlugin(Vue, options){



    /*------------------------------------*\
      Custom Directive Name
    \*------------------------------------*/
    options = options || {};
    options.directive = options.directive || 'bar';



    /*------------------------------------*\
      Public Methods Install
    \*------------------------------------*/
    Vue.$_Vuebar = Vuebar;
    Vue.prototype.$_Vuebar = Vuebar;



    /*------------------------------------*\
      Directive Install
    \*------------------------------------*/
    Vue.directive(options.directive, {

      inserted: function(el, binding, vnode){
        (new Vuebar(Vue, el, binding, vnode)).initialize();
      },

      componentUpdated: function(el, binding, vnode, oldVnode){
        el.$_vuebar ? el.$_vuebar.refresh() : null;
      },

      unbind: function(el, binding, vnode, oldVnode){
        // we shouldn't clear styles because it actually doesn't matter that much
        // the element will be always deleted on unbind and its styles also
        // and if we do clear styles then it looks bad on transitions
        el.$_vuebar ? el.$_vuebar.destroy({skipStyles: true}) : null;
      },

    });

  }


  /*------------------------------------*\
    Expose / Autoinstall
  \*------------------------------------*/
  if (true) {
    module.exports = VuebarPlugin;
  } else if (typeof define === 'function' && define.amd) {
    define(function () { return VuebarPlugin });
  } else if (typeof window !== typeof void 0) {
    window.Vuebar = VuebarPlugin;
  }

  //if (typeof Vue !== typeof void 0) {
  //  Vue.use(VuebarPlugin);
  //}


})();
=======
webpackJsonp([66],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/FileUpload.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    }
  },
  created: function created() {
    this.rows.push(new File());
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/FileUpload.vue?vue&type=template&id=12ca9994&":
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
  )
}
var staticRenderFns = []
render._withStripped = true

>>>>>>> Move gloss rendering into the GlossLine class


/***/ }),

<<<<<<< HEAD
/***/ "./resources/assets/js/components/ParadigmTable.vue":
=======
/***/ "./resources/assets/js/components/FileUpload.vue":
>>>>>>> Move gloss rendering into the GlossLine class
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ParadigmTable_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/ParadigmTable.vue?vue&type=script&lang=js&");
>>>>>>> Update sources component
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FileUpload_vue_vue_type_template_id_12ca9994___ = __webpack_require__("./resources/assets/js/components/FileUpload.vue?vue&type=template&id=12ca9994&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FileUpload_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/FileUpload.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

>>>>>>> Move gloss rendering into the GlossLine class




/* normalize component */

<<<<<<< HEAD
<<<<<<< HEAD
var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Advanced_Paradigm_Search_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Advanced_Paradigm_Search_vue_vue_type_template_id_e5764f54___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Advanced_Paradigm_Search_vue_vue_type_template_id_e5764f54___["b" /* staticRenderFns */],
=======
var component = Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__ParadigmTable_vue_vue_type_script_lang_js___["a" /* default */],
  render,
  staticRenderFns,
>>>>>>> Update sources component
=======
var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__FileUpload_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__FileUpload_vue_vue_type_template_id_12ca9994___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__FileUpload_vue_vue_type_template_id_12ca9994___["b" /* staticRenderFns */],
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
      api.createRecord('e5764f54', component.options)
    } else {
      api.reload('e5764f54', component.options)
    }
    module.hot.accept("./Advanced-Paradigm-Search.vue?vue&type=template&id=e5764f54&", function () {
      api.rerender('e5764f54', {
=======
      api.createRecord('12ca9994', component.options)
    } else {
      api.reload('12ca9994', component.options)
    }
    module.hot.accept("./FileUpload.vue?vue&type=template&id=12ca9994&", function () {
      api.rerender('12ca9994', {
>>>>>>> Move gloss rendering into the GlossLine class
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
<<<<<<< HEAD
component.options.__file = "resources/assets/js/components/forms/Advanced-Paradigm-Search.vue"
=======
      api.createRecord('54ec585c', component.options)
    } else {
      api.reload('54ec585c', component.options)
    }
    
  }
}
component.options.__file = "resources/assets/js/components/ParadigmTable.vue"
>>>>>>> Update sources component
=======
component.options.__file = "resources/assets/js/components/FileUpload.vue"
>>>>>>> Move gloss rendering into the GlossLine class
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
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

=======
/***/ "./resources/assets/js/components/ParadigmTable.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ParadigmTable_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ParadigmTable.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ParadigmTable_vue_vue_type_script_lang_js___["a" /* default */]); 
>>>>>>> Update sources component
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

>>>>>>> Move gloss rendering into the GlossLine class

/***/ })

});