webpackJsonp([70],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sources.vue?vue&type=script&lang=js&":
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
    this.description = this.source.description;
  },
  methods: {
    onSubmit: function onSubmit() {
      this.source.description = this.description;
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
        this.$set(source, 'extra_info', '');
        this.$set(source, 'description', ''); // The long form probably comes with its own <p> tag, but since it will
        // be inserted as the innerHTML of a <p> tag, take out the wrapping tag

        source.long = source.long.replace(/^<p[^>]*>|<\/p>$/gi, ''); // The hover text shouldn't have any tags in it at all

        source.hover = source.long.replace(/<[^>]*>/g, '').replace('&nbsp;', ' ');
        this.sources.push(source);
        this.emitInputEvent();
      }
    },
    removeSource: function removeSource(index) {
      this.sources.splice(index, 1);
      this.emitInputEvent();
    },
    emitInputEvent: function emitInputEvent() {
      this.$emit('input', this.sources);
    },
    openDescriptionModal: function openDescriptionModal(source) {
      this.descriptionSource.source = source;
      this.isDescriptionModalOpen = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sources.vue?vue&type=style&index=0&lang=sass&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.source-list {\n  margin-left: 1rem;\n}\n.source-list li:not(:first-child) {\n    margin-top: .75rem;\n}\n.source-list .source-entry {\n    display: flex;\n}\n.source-list .source-entry .source-long {\n      flex: 1;\n      max-width: 15rem;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      margin-right: 1rem;\n}\n.source-list .source-entry .source-extra-info {\n      flex: 4;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sources.vue?vue&type=style&index=0&lang=sass&":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sources.vue?vue&type=style&index=0&lang=sass&");
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
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sources.vue?vue&type=style&index=0&lang=sass&", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sources.vue?vue&type=style&index=0&lang=sass&");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sources.vue?vue&type=template&id=3d461bd1&":
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
    [
      _c(
        "b-field",
        [
          _c("b-autocomplete", {
            attrs: {
              data: _vm.ajaxList,
              field: "long",
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
        _vm._l(_vm.sources, function(source, i) {
          return _c("li", [
            _c(
              "div",
              { staticClass: "source-entry" },
              [
                _c("input", {
                  attrs: { type: "hidden", name: "sources[][id]" },
                  domProps: { value: source.id }
                }),
                _vm._v(" "),
                _c("input", {
                  attrs: { type: "hidden", name: "sources[][description]" },
                  domProps: { value: source.description }
                }),
                _vm._v(" "),
                _c("p", {
                  staticClass: "source-long",
                  attrs: { title: source.hover },
                  domProps: { innerHTML: _vm._s(source.long) }
                }),
                _vm._v(" "),
                _c("b-input", {
                  staticClass: "source-extra-info",
                  attrs: { name: "sources[][extra_info]" },
                  model: {
                    value: source.extra_info,
                    callback: function($$v) {
                      _vm.$set(source, "extra_info", $$v)
                    },
                    expression: "source.extra_info"
                  }
                }),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "button",
                    class: { "is-info": source.description.length > 0 },
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "fas fa-align-justify" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "fas fa-times" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/Sources.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sources_vue_vue_type_template_id_3d461bd1___ = __webpack_require__("./resources/assets/js/components/Sources.vue?vue&type=template&id=3d461bd1&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Sources_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Sources.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Sources_vue_vue_type_style_index_0_lang_sass___ = __webpack_require__("./resources/assets/js/components/Sources.vue?vue&type=style&index=0&lang=sass&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Sources_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Sources_vue_vue_type_template_id_3d461bd1___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Sources_vue_vue_type_template_id_3d461bd1___["b" /* staticRenderFns */],
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
      api.createRecord('3d461bd1', component.options)
    } else {
      api.reload('3d461bd1', component.options)
    }
    module.hot.accept("./Sources.vue?vue&type=template&id=3d461bd1&", function () {
      api.rerender('3d461bd1', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/Sources.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

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


/***/ })

});