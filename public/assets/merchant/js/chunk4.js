webpackJsonp([4],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      formData: {
        author: '',
        year: '',
        long: '',
        url: '',
        notes: ''
      }
    };
  },
  $_veeValidate: {
    validator: 'new'
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      this.$validator.validateAll();

      if (!this.errors.any()) {
        axios.post('/sources', this.formData).then(function (response) {
          _this.$emit('change', response.data);

          _this.$parent.close();
        }).catch(function (error) {
          console.error(error);
        });
      }
    }
  }
};
var DescriptionModal = {
  props: ['source'],
  data: function data() {
    return {
      description: ''
    };
  },
  template: "\n    <div class=\"modal-card\" style=\"width: auto\">\n      <header class=\"modal-card-head\" style=\"margin-bottom: 0;\">\n        <p class=\"modal-card-title\">Description of {{ source.author }} ({{ source.year }})</p>\n      </header>\n      <section class=\"modal-card-body\">\n        <wysiwyg v-model=\"description\"></wysiwyg>\n        <footer class=\"modal-card-foot\">\n          <a class=\"button is-primary has-text-grey-dark\"\n             @click=\"onSubmit\">\n             Save\n          </a>\n          <a class=\"button is-danger\" @click=\"$parent.close()\">Cancel</a>\n        </footer>\n      </section>\n    </div>\n  ",
  created: function created() {
    this.description = this.source.pivot.description;
  },
  methods: {
    onSubmit: function onSubmit() {
      this.source.pivot.description = this.description;
      this.$parent.close();
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    NewSource: NewSource,
    DescriptionModal: DescriptionModal
  },
  props: ['value'],
  data: function data() {
    return {
      sources: [],
      ajaxList: [],
      loading: false,
      isNewSourceModalOpen: false,
      isDescriptionModalOpen: false,
      descriptionSource: {
        source: {}
      }
    };
  },
  methods: {
    onAutocompleteKeyUp: function onAutocompleteKeyUp(event) {
      if (event.key.length == 1) {
        this.loadSources(event.target.value);
      }
    },
    loadSources: _.debounce(function (query) {
      var _this2 = this;

      this.loading = true;
      axios.get('/autocomplete/sources', {
        params: {
          term: query
        }
      }).then(function (response) {
        _this2.loading = false;
        _this2.ajaxList = response.data;
      }).catch(function (error) {
        console.error(error);
      });
    }, 500),
    addSource: function addSource(source) {
      if (source) {
        // Give the source extra_info and description fields, and make them
        // reactive
        var pivot = {
          extra_info: '',
          description: ''
        };
        this.$set(source, 'pivot', pivot);
        var newValue = this.value.clone();
        newValue.push(source);
        this.$emit('input', newValue);
      }
    },
    removeTags: function removeTags(string) {
      var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (all) {
        string = string.replace(/<[^>]+>/g, '');
      } else {
        var match = string.match(/<([^\s>]+)[^>]*>(.*)<\/\1>/);

        if (match) {
          string = match[2];
        }
      }

      return string.replace('&nbsp;', ' ');
    },
    removeSource: function removeSource(index) {
      var newValue = this.value.clone();
      newValue.splice(index, 1);
      this.$emit('input', newValue);
    },
    openDescriptionModal: function openDescriptionModal(source) {
      this.descriptionSource.source = source;
      this.isDescriptionModalOpen = true;
    }
>>>>>>> Start working on initial change
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/FormFilter.vue?vue&type=style&index=0&lang=scss&":
=======
/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sources.vue?vue&type=style&index=0&lang=sass&":
>>>>>>> Start working on initial change
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
<<<<<<< HEAD
exports.push([module.i, "\n.table tbody tr:last-child td {\n  border-bottom-width: thin;\n}\n.alg-form-filter .table-note {\n  font-style: italic;\n}\n.alg-form-filter .level {\n  margin-bottom: .5em;\n}\n.alg-form-filter .filter-panel {\n  margin-top: 1em;\n}\n", ""]);
=======
exports.push([module.i, ".source-list {\n  margin-left: 1rem;\n}\n.source-list li:not(:first-child) {\n    margin-top: .75rem;\n}\n.source-list .source-entry {\n    display: flex;\n}\n.source-list .source-entry .source-long {\n      flex: 1;\n      max-width: 15rem;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      margin-right: 1rem;\n}\n.source-list .source-entry .source-extra-info {\n      flex: 2;\n}\n", ""]);
>>>>>>> Start working on initial change

// exports


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/FormFilter.vue?vue&type=style&index=0&lang=scss&":
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sources.vue?vue&type=style&index=0&lang=sass&":
>>>>>>> Start working on initial change
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
<<<<<<< HEAD
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/FormFilter.vue?vue&type=style&index=0&lang=scss&");
=======
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sources.vue?vue&type=style&index=0&lang=sass&");
>>>>>>> Start working on initial change
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
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormFilter.vue?vue&type=style&index=0&lang=scss&", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormFilter.vue?vue&type=style&index=0&lang=scss&");
=======
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sources.vue?vue&type=style&index=0&lang=sass&", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sources.vue?vue&type=style&index=0&lang=sass&");
>>>>>>> Start working on initial change
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/FormFilter.vue?vue&type=template&id=311760d3&":
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sources.vue?vue&type=template&id=3d461bd1&":
>>>>>>> Start working on initial change
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
    [
      _c(
        "b-field",
        [
          _c("b-autocomplete", {
            attrs: {
              data: _vm.ajaxList,
              field: "name",
              loading: _vm.loading,
              "clear-on-select": true,
              expanded: "",
              placeholder: "Look up an existing source"
            },
            on: { select: _vm.addSource },
            nativeOn: {
              keyup: function($event) {
                _vm.onAutocompleteKeyUp($event)
              }
            }
          }),
          _vm._v(" "),
          _c("p", { staticClass: "control" }, [
            _c(
              "a",
              {
                staticClass: "button is-info",
                attrs: { title: "Add a new source" },
                on: {
                  click: function($event) {
                    _vm.isNewSourceModalOpen = true
                  }
                }
              },
              [
                _c("span", { staticClass: "icon" }, [
                  _c("i", { staticClass: "fas fa-ellipsis-h" })
                ])
              ]
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "ol",
        { staticClass: "source-list", staticStyle: { "margin-left": "1rem" } },
        _vm._l(_vm.value, function(source, i) {
          return _c("li", [
            _c(
              "div",
              { staticClass: "source-entry" },
              [
                _c("input", {
                  attrs: { type: "hidden", name: "sources[" + i + "][id]" },
                  domProps: { value: source.id }
                }),
                _vm._v(" "),
                _c("input", {
                  attrs: {
                    type: "hidden",
                    name: "sources[" + i + "][description]"
                  },
                  domProps: { value: source.pivot.description }
                }),
                _vm._v(" "),
                _c("p", {
                  staticClass: "source-long",
                  attrs: { title: _vm.removeTags(source.long, true) },
                  domProps: { innerHTML: _vm._s(_vm.removeTags(source.long)) }
                }),
                _vm._v(" "),
                _c("b-input", {
                  staticClass: "source-extra-info",
                  attrs: { name: "sources[" + i + "][extra_info]" },
                  model: {
                    value: source.pivot.extra_info,
                    callback: function($$v) {
                      _vm.$set(source.pivot, "extra_info", $$v)
                    },
                    expression: "source.pivot.extra_info"
                  }
                }),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "button",
                    class: {
                      "is-info":
                        source.pivot.description &&
                        source.pivot.description.length > 0
                    },
                    attrs: { title: "Add description" },
                    on: {
                      click: function($event) {
                        _vm.openDescriptionModal(source)
                      }
                    }
                  },
                  [_vm._m(0, true)]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "button is-danger",
                    attrs: { title: "Remove source" },
                    on: {
                      click: function($event) {
                        _vm.removeSource(i)
                      }
                    }
                  },
                  [_vm._m(1, true)]
                )
              ],
              1
            )
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { active: _vm.isDescriptionModalOpen, "has-modal-card": "" },
          on: {
            "update:active": function($event) {
              _vm.isDescriptionModalOpen = $event
            }
          }
        },
        [
          _c(
            "description-modal",
            _vm._b({}, "description-modal", _vm.descriptionSource, false)
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { active: _vm.isNewSourceModalOpen, "has-modal-card": "" },
          on: {
            "update:active": function($event) {
              _vm.isNewSourceModalOpen = $event
            }
          }
        },
        [_c("new-source", { on: { change: _vm.addSource } })],
        1
      )
    ],
    1
  )
>>>>>>> Start working on initial change
}
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
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/assets/js/components/FormFilter.vue":
=======
/***/ "./resources/assets/js/components/Sources.vue":
>>>>>>> Start working on initial change
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
<<<<<<< HEAD
  __WEBPACK_IMPORTED_MODULE_1__FormFilter_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__FormFilter_vue_vue_type_template_id_311760d3___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__FormFilter_vue_vue_type_template_id_311760d3___["b" /* staticRenderFns */],
=======
  __WEBPACK_IMPORTED_MODULE_1__Sources_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Sources_vue_vue_type_template_id_3d461bd1___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Sources_vue_vue_type_template_id_3d461bd1___["b" /* staticRenderFns */],
>>>>>>> Start working on initial change
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
      api.createRecord('311760d3', component.options)
    } else {
      api.reload('311760d3', component.options)
    }
    module.hot.accept("./FormFilter.vue?vue&type=template&id=311760d3&", function () {
      api.rerender('311760d3', {
=======
      api.createRecord('3d461bd1', component.options)
    } else {
      api.reload('3d461bd1', component.options)
    }
    module.hot.accept("./Sources.vue?vue&type=template&id=3d461bd1&", function () {
      api.rerender('3d461bd1', {
>>>>>>> Start working on initial change
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
<<<<<<< HEAD
component.options.__file = "resources/assets/js/components/FormFilter.vue"
=======
component.options.__file = "resources/assets/js/components/Sources.vue"
>>>>>>> Start working on initial change
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sources_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sources.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sources_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Sources.vue?vue&type=style&index=0&lang=sass&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Sources_vue_vue_type_style_index_0_lang_sass___ = __webpack_require__("./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sources.vue?vue&type=style&index=0&lang=sass&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Sources_vue_vue_type_style_index_0_lang_sass____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Sources_vue_vue_type_style_index_0_lang_sass___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Sources_vue_vue_type_style_index_0_lang_sass____default.a); 

/***/ }),

/***/ "./resources/assets/js/components/Sources.vue?vue&type=template&id=3d461bd1&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sources_vue_vue_type_template_id_3d461bd1___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sources.vue?vue&type=template&id=3d461bd1&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sources_vue_vue_type_template_id_3d461bd1___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sources_vue_vue_type_template_id_3d461bd1___["b"]; });
>>>>>>> Start working on initial change


/***/ })

});