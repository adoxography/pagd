webpackJsonp([4],{

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/FormFilter.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
=======
/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sources.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
>>>>>>> Start working on initial change
//
=======
/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Typewriter.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_SpecialCharacters__ = __webpack_require__("./resources/assets/js/util/SpecialCharacters.js");
>>>>>>> Remove old morpheme tag input component
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
//
var Filter = function Filter(label, options) {
  _classCallCheck(this, Filter);

  this.label = label;
  this.value = -1;
  this.options = options;
};

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    'language': {
      default: 0
    },
    'languages': {
      default: null
    },
    'morpheme': {
      default: null
    },
    'source': {
      default: null
    },
    'filterData': {},
    'uri': {},
    'perPage': {
      default: 20
    },
    'showAddButtons': {
      default: false
    },
    'formUri': {}
  },
  data: function data() {
    return {
      forms: null,
      numPages: 0,
      page: 1,
      showFilter: false,
      shape: '',
      filters: []
    };
  },
  computed: {
    addURI: function addURI() {
      if (this.language) {
        return "/languages/".concat(this.language);
      }
    }
  },
  watch: {
    page: function page() {
      this.getForms();
    }
  },
  created: function created() {
    if (this.languages) {
      this.filters.push(new Filter('Language', this.languages));
    }

    this.getForms();

    for (var filterName in this.filterData) {
      this.filters.push(new Filter(filterName, this.filterData[filterName]));
    }
  },
  methods: {
    getForms: function getForms() {
      var _this = this;

      this.forms = null;
      var params = {
        'perPage': this.perPage,
        'page': this.page,
        'shape': this.shape
      };

      if (this.language) {
        params['language'] = this.language;
      }

      if (this.morpheme) {
        params['morpheme'] = this.morpheme;
      }

      if (this.source) {
        params['source'] = this.source;
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.filters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var filter = _step.value;
          params[_.camelCase(filter.label)] = filter.value;
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

      axios.get(this.uri, {
        params: params
      }).then(function (response) {
        _this.forms = response.data.data;
        _this.numPages = response.data.last_page;

        _this.forms.forEach(function (form) {
          if (form.examples.length == 0) {
            form.examples.push({
              html: '<p class="table-note">No examples in the database</p>'
            });
          }
        });
      });
    },
    debounceGetForms: _.debounce(function (e) {
      this.getForms();
    }, 300)
=======
var NewSource = {
  template: "\n    <div class=\"modal-card\" style=\"width: auto\">\n      <header class=\"modal-card-head\" style=\"margin-bottom: 0;\">\n        <p class=\"modal-card-title\">Add new source</p>\n      </header>\n      <section class=\"modal-card-body\">\n        <b-field label=\"Author\"\n                 :type=\"{'is-danger': errors.has('source-author')}\"\n                 :message=\"errors.first('source-author')\">\n          <b-input v-model=\"formData.author\"\n                   name=\"source-author\"\n                   v-validate=\"'required'\"\n                   data-vv-as=\"author\">\n          </b-input>\n        </b-field>\n        <b-field label=\"Year\"\n                 :type=\"{'is-danger': errors.has('source-year')}\"\n                 :message=\"errors.first('source-year')\">\n          <b-input v-model=\"formData.year\"\n                   name=\"source-year\"\n                   v-validate=\"'required'\"\n                   data-vv-as=\"year\">\n          </b-input>\n        </b-field>\n        <input type=\"hidden\"\n               v-model=\"formData.long\"\n               name=\"source-long\"\n               v-validate=\"'required'\"\n               data-vv-as=\"full citation\"\n        />\n        <b-field label=\"Full citation\"\n                 :type=\"{'is-danger': errors.has('source-long')}\"\n                 :message=\"errors.first('source-long')\">\n          <wysiwyg v-model=\"formData.long\"></wysiwyg>\n        </b-field>\n        <b-field label=\"URL\">\n          <b-input v-model=\"formData.url\"></b-input>\n        </b-field>\n        <b-field label=\"Notes\">\n          <wysiwyg v-model=\"formData.notes\"></wysiwyg>\n        </b-field>\n        <footer class=\"modal-card-foot\">\n          <a class=\"button is-primary has-text-grey-dark\"\n             @click=\"onSubmit\"\n             :disabled=\"errors.any()\">\n             Submit\n          </a>\n          <a class=\"button is-danger\" @click=\"$parent.close()\">Cancel</a>\n        </footer>\n      </section>\n    </div>\n  ",
=======

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
    }
  },
>>>>>>> Remove old morpheme tag input component
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
>>>>>>> Start working on initial change
  }
});

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/FormFilter.vue?vue&type=style&index=0&lang=scss&":
=======
/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sources.vue?vue&type=style&index=0&lang=sass&":
>>>>>>> Start working on initial change
=======
/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Typewriter.vue?vue&type=style&index=0&lang=scss&":
>>>>>>> Remove old morpheme tag input component
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
<<<<<<< HEAD
<<<<<<< HEAD
exports.push([module.i, "\n.table tbody tr:last-child td {\n  border-bottom-width: thin;\n}\n.alg-form-filter .table-note {\n  font-style: italic;\n}\n.alg-form-filter .level {\n  margin-bottom: .5em;\n}\n.alg-form-filter .filter-panel {\n  margin-top: 1em;\n}\n", ""]);
=======
exports.push([module.i, ".source-list {\n  margin-left: 1rem;\n}\n.source-list li:not(:first-child) {\n    margin-top: .75rem;\n}\n.source-list .source-entry {\n    display: flex;\n}\n.source-list .source-entry .source-long {\n      flex: 1;\n      max-width: 15rem;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      margin-right: 1rem;\n}\n.source-list .source-entry .source-extra-info {\n      flex: 2;\n}\n", ""]);
>>>>>>> Start working on initial change
=======
exports.push([module.i, ".alg-typewriter-wrapper {\n  position: relative;\n}\n.alg-typewriter-wrapper .alg-typewriter {\n    position: absolute;\n    z-index: 1000;\n    padding: .5rem;\n}\n.alg-typewriter-wrapper .alg-typewriter .alg-typewriter-button {\n      width: 2rem;\n      height: 2rem;\n}\n", ""]);
>>>>>>> Remove old morpheme tag input component

// exports


/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/FormFilter.vue?vue&type=style&index=0&lang=scss&":
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sources.vue?vue&type=style&index=0&lang=sass&":
>>>>>>> Start working on initial change
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Typewriter.vue?vue&type=style&index=0&lang=scss&":
>>>>>>> Remove old morpheme tag input component
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
<<<<<<< HEAD
<<<<<<< HEAD
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/FormFilter.vue?vue&type=style&index=0&lang=scss&");
=======
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sources.vue?vue&type=style&index=0&lang=sass&");
>>>>>>> Start working on initial change
=======
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Typewriter.vue?vue&type=style&index=0&lang=scss&");
>>>>>>> Remove old morpheme tag input component
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
<<<<<<< HEAD
<<<<<<< HEAD
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormFilter.vue?vue&type=style&index=0&lang=scss&", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormFilter.vue?vue&type=style&index=0&lang=scss&");
=======
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sources.vue?vue&type=style&index=0&lang=sass&", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sources.vue?vue&type=style&index=0&lang=sass&");
>>>>>>> Start working on initial change
=======
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Typewriter.vue?vue&type=style&index=0&lang=scss&", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Typewriter.vue?vue&type=style&index=0&lang=scss&");
>>>>>>> Remove old morpheme tag input component
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/FormFilter.vue?vue&type=template&id=311760d3&":
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sources.vue?vue&type=template&id=3d461bd1&":
>>>>>>> Start working on initial change
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Typewriter.vue?vue&type=template&id=32be61b8&":
>>>>>>> Remove old morpheme tag input component
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
<<<<<<< HEAD
  return _c("div", { staticClass: "alg-form-filter" }, [
    _c("div", { attrs: { role: "pagination" } }, [
      _c("div", { staticClass: "level" }, [
        _c("div", { staticClass: "level-left" }, [
          _c("div", { staticClass: "level-item" }, [
            _c(
              "a",
              {
                staticClass: "pagination-previous",
                attrs: { disabled: _vm.page <= 1 },
                on: {
                  click: function($event) {
                    _vm.page--
                  }
                }
              },
              [_vm._v("Previous")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "level-right" }, [
          _c("div", { staticClass: "level-item" }, [
            _c(
              "a",
              {
                staticClass: "pagination-next",
                attrs: { disabled: _vm.page >= _vm.numPages },
                on: {
                  click: function($event) {
                    _vm.page++
                  }
                }
              },
              [_vm._v("Next")]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "nav",
        { staticClass: "pagination", attrs: { "aria-label": "pagination" } },
        [
          _vm.forms && _vm.forms.length > 0
            ? _c(
                "ul",
                { staticClass: "pagination-list" },
                _vm._l(_vm.numPages, function(i) {
                  return _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "pagination-link",
                        class: { "is-current": _vm.page == i },
                        attrs: { "aria-label": "Goto page" + i },
                        on: {
                          click: function($event) {
                            _vm.page = i
                          }
                        }
                      },
                      [_vm._v(_vm._s(i))]
                    )
                  ])
                }),
                0
              )
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showFilter,
              expression: "showFilter"
            }
          ],
          staticClass: "filter-panel"
        },
        [
          _c("div", { staticClass: "field is-horizontal" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "field-body" }, [
              _c("div", { staticClass: "field" }, [
                _c("p", { staticClass: "control" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.shape,
                        expression: "shape"
                      }
                    ],
                    staticClass: "input",
                    attrs: {
                      type: "text",
                      placeholder: "Filter by form shape"
                    },
                    domProps: { value: _vm.shape },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.shape = $event.target.value
                        },
                        function($event) {
                          _vm.debounceGetForms()
                        }
                      ]
                    }
                  })
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _vm._l(_vm.filters, function(filter) {
            return _c("div", { staticClass: "field is-horizontal" }, [
              _c("div", { staticClass: "field-label is-normal" }, [
                _c("label", { staticClass: "label" }, [
                  _vm._v(_vm._s(filter.label))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "field-body" }, [
                _c("div", { staticClass: "field" }, [
                  _c("div", { staticClass: "control is-expanded" }, [
                    _c("div", { staticClass: "select is-fullwidth" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: filter.value,
                              expression: "filter.value"
                            }
                          ],
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  filter,
                                  "value",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function($event) {
                                _vm.getForms()
                              }
                            ]
                          }
                        },
                        [
                          _c(
                            "option",
                            {
                              attrs: { default: "default" },
                              domProps: { value: -1 }
                            },
                            [_vm._v("All")]
                          ),
                          _vm._v(" "),
                          _vm._l(filter.options, function(option) {
                            return _c(
                              "option",
                              { domProps: { value: option.id } },
                              [_vm._v(_vm._s(option.name))]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  ])
                ])
              ])
            ])
          })
        ],
        2
      ),
      _vm._v(" "),
      _c("span", { staticClass: "is-pulled-right" }, [
        _vm.showFilter
          ? _c(
              "a",
              {
                on: {
                  click: function($event) {
                    _vm.showFilter = false
                  }
                }
              },
              [_vm._v("Hide filters")]
            )
          : _c(
              "a",
              {
                on: {
                  click: function($event) {
                    _vm.showFilter = true
                  }
                }
              },
              [_vm._v("Filter")]
            )
      ])
    ]),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    !_vm.forms
      ? _c("div", [_c("p", [_vm._v("Loading...")])])
      : _vm.forms.length > 0
        ? _c(
            "table",
            { staticClass: "table" },
            [
              _c("thead", [
                _c("tr", [
                  _c("th", [
                    _vm._v("\n          Forms\n          "),
                    _c(
                      "a",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.showAddButtons,
                            expression: "showAddButtons"
                          }
                        ],
                        staticClass: "icon add-icon",
                        attrs: { href: _vm.addURI + _vm.formUri }
                      },
                      [_vm._m(1)]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v("\n          Examples\n          "),
                    _c(
                      "a",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.showAddButtons,
                            expression: "showAddButtons"
                          }
                        ],
                        staticClass: "icon add-icon",
                        attrs: { href: _vm.addURI + "/addExample" }
                      },
                      [_vm._m(2)]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm._l(_vm.forms, function(form) {
                return _c(
                  "tbody",
                  _vm._l(form.examples, function(example, i) {
                    return form.examples.length > 0
                      ? _c("tr", [
                          i == 0
                            ? _c("td", {
                                attrs: { rowspan: form.examples.length },
                                domProps: { innerHTML: _vm._s(form.html) }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _c("td", {
                            domProps: { innerHTML: _vm._s(example.html) }
                          })
                        ])
                      : _c("tr", [
                          _c("td", {
                            domProps: { innerHTML: _vm._s(form.html) }
                          }),
                          _vm._v(" "),
                          _c("td", [_vm._v("No examples in the database")])
                        ])
                  }),
                  0
                )
              })
            ],
            2
          )
        : _c("div", [
            _c("p", [
              _vm._v("No forms in the database match that description.")
            ])
          ])
  ])
=======
  return _c(
    "div",
    {
      staticClass: "alg-typewriter-wrapper",
      on: {
        focusin: _vm.onFocusIn,
        focusout: _vm.onFocusOut,
        keydown: function($event) {
          return _vm.onKeyDown($event)
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
                        return _vm.insertCharacter(char)
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
  )
>>>>>>> Start working on initial change
}
<<<<<<< HEAD
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
<<<<<<< HEAD
    return _c("div", { staticClass: "field-label is-normal" }, [
      _c("label", { staticClass: "label" }, [_vm._v("Shape")])
=======
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "fas fa-align-justify" })
>>>>>>> Start working on initial change
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
<<<<<<< HEAD
    return _c(
      "span",
      { staticClass: "icon", attrs: { title: "Add another" } },
      [_c("i", { staticClass: "fa fa-plus-square" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      { staticClass: "icon", attrs: { title: "Add another" } },
      [_c("i", { staticClass: "fa fa-plus-square" })]
    )
=======
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "fas fa-times" })
    ])
>>>>>>> Start working on initial change
  }
]
=======
var staticRenderFns = []
>>>>>>> Remove old morpheme tag input component
render._withStripped = true



/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "./resources/assets/js/components/FormFilter.vue":
=======
/***/ "./resources/assets/js/components/Sources.vue":
>>>>>>> Start working on initial change
=======
/***/ "./resources/assets/js/components/Typewriter.vue":
>>>>>>> Remove old morpheme tag input component
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormFilter_vue_vue_type_template_id_311760d3___ = __webpack_require__("./resources/assets/js/components/FormFilter.vue?vue&type=template&id=311760d3&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FormFilter_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/FormFilter.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FormFilter_vue_vue_type_style_index_0_lang_scss___ = __webpack_require__("./resources/assets/js/components/FormFilter.vue?vue&type=style&index=0&lang=scss&");
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sources_vue_vue_type_template_id_3d461bd1___ = __webpack_require__("./resources/assets/js/components/Sources.vue?vue&type=template&id=3d461bd1&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Sources_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Sources.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Sources_vue_vue_type_style_index_0_lang_sass___ = __webpack_require__("./resources/assets/js/components/Sources.vue?vue&type=style&index=0&lang=sass&");
>>>>>>> Start working on initial change
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Typewriter_vue_vue_type_template_id_32be61b8___ = __webpack_require__("./resources/assets/js/components/Typewriter.vue?vue&type=template&id=32be61b8&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Typewriter_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Typewriter.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Typewriter_vue_vue_type_style_index_0_lang_scss___ = __webpack_require__("./resources/assets/js/components/Typewriter.vue?vue&type=style&index=0&lang=scss&");
>>>>>>> Remove old morpheme tag input component
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
<<<<<<< HEAD
<<<<<<< HEAD
  __WEBPACK_IMPORTED_MODULE_1__FormFilter_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__FormFilter_vue_vue_type_template_id_311760d3___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__FormFilter_vue_vue_type_template_id_311760d3___["b" /* staticRenderFns */],
=======
  __WEBPACK_IMPORTED_MODULE_1__Sources_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Sources_vue_vue_type_template_id_3d461bd1___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Sources_vue_vue_type_template_id_3d461bd1___["b" /* staticRenderFns */],
>>>>>>> Start working on initial change
=======
  __WEBPACK_IMPORTED_MODULE_1__Typewriter_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Typewriter_vue_vue_type_template_id_32be61b8___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Typewriter_vue_vue_type_template_id_32be61b8___["b" /* staticRenderFns */],
>>>>>>> Remove old morpheme tag input component
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
      api.createRecord('311760d3', component.options)
    } else {
      api.reload('311760d3', component.options)
    }
    module.hot.accept("./FormFilter.vue?vue&type=template&id=311760d3&", function () {
      api.rerender('311760d3', {
=======
      api.createRecord('3d461bd1', component.options)
=======
      api.createRecord('32be61b8', component.options)
>>>>>>> Remove old morpheme tag input component
    } else {
      api.reload('32be61b8', component.options)
    }
<<<<<<< HEAD
    module.hot.accept("./Sources.vue?vue&type=template&id=3d461bd1&", function () {
      api.rerender('3d461bd1', {
>>>>>>> Start working on initial change
=======
    module.hot.accept("./Typewriter.vue?vue&type=template&id=32be61b8&", function () {
      api.rerender('32be61b8', {
>>>>>>> Remove old morpheme tag input component
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
component.options.__file = "resources/assets/js/components/FormFilter.vue"
=======
component.options.__file = "resources/assets/js/components/Sources.vue"
>>>>>>> Start working on initial change
=======
component.options.__file = "resources/assets/js/components/Typewriter.vue"
>>>>>>> Remove old morpheme tag input component
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "./resources/assets/js/components/FormFilter.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFilter_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/FormFilter.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFilter_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/FormFilter.vue?vue&type=style&index=0&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFilter_vue_vue_type_style_index_0_lang_scss___ = __webpack_require__("./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/FormFilter.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFilter_vue_vue_type_style_index_0_lang_scss____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFilter_vue_vue_type_style_index_0_lang_scss___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFilter_vue_vue_type_style_index_0_lang_scss____default.a); 

/***/ }),

/***/ "./resources/assets/js/components/FormFilter.vue?vue&type=template&id=311760d3&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFilter_vue_vue_type_template_id_311760d3___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/FormFilter.vue?vue&type=template&id=311760d3&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFilter_vue_vue_type_template_id_311760d3___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFilter_vue_vue_type_template_id_311760d3___["b"]; });
=======
/***/ "./resources/assets/js/components/Sources.vue?vue&type=script&lang=js&":
=======
/***/ "./resources/assets/js/components/Typewriter.vue?vue&type=script&lang=js&":
>>>>>>> Remove old morpheme tag input component
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
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sources_vue_vue_type_template_id_3d461bd1___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sources.vue?vue&type=template&id=3d461bd1&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sources_vue_vue_type_template_id_3d461bd1___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sources_vue_vue_type_template_id_3d461bd1___["b"]; });
>>>>>>> Start working on initial change
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Typewriter_vue_vue_type_template_id_32be61b8___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Typewriter.vue?vue&type=template&id=32be61b8&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Typewriter_vue_vue_type_template_id_32be61b8___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Typewriter_vue_vue_type_template_id_32be61b8___["b"]; });
>>>>>>> Remove old morpheme tag input component


/***/ })

});