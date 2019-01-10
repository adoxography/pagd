webpackJsonp([24],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/New-Source.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_clickaway__ = __webpack_require__("./node_modules/vue-clickaway/dist/vue-clickaway.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_clickaway___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_clickaway__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['open'],
  data: function data() {
    return {
      author: '',
      year: '',
      long: '',
      url: '',
      notes: '',
      loading: false
    };
  },
  directives: {
    onClickaway: __WEBPACK_IMPORTED_MODULE_0_vue_clickaway__["directive"]
  },
  computed: {
    disabled: function disabled() {
      return this.author.length == 0 || this.year.length == 0 || this.long.length == 0;
    }
  },
  methods: {
    close: function close() {
      this.author = '';
      this.year = '';
      this.long = '';
      this.url = '';
      this.notes = '';
      this.$emit('close');
    },
    clickOutside: function clickOutside(event) {
      if (event.srcElement.id != 'new-source-button') {
        this.close();
      }
    },
    onEnter: function onEnter(event) {
      if (this.open) {
        event.preventDefault();

        if (!this.disabled) {
          this.submit();
        }
      }
    },
    submit: function submit() {
      var _this = this;

      this.loading = true;
      axios.post('/sources/ajax', {
        author: this.author,
        year: this.year,
        long: this.long,
        url: this.url,
        notes: this.notes
      }).then(function (response) {
        _this.$emit('input', response.data);

        _this.loading = false;

        _this.close();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/New-Source.vue?vue&type=template&id=12f4eb02&":
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
      staticClass: "modal is-active",
      on: {
        keydown: function($event) {
          if (
            !("button" in $event) &&
            _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
          ) {
            return null
          }
          _vm.onEnter($event)
        }
      }
    },
    [
      _c("div", { staticClass: "modal-background" }),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "on-clickaway",
              rawName: "v-on-clickaway",
              value: _vm.clickOutside,
              expression: "clickOutside"
            }
          ],
          staticClass: "modal-card"
        },
        [
          _c("header", { staticClass: "modal-card-head" }, [
            _c("p", { staticClass: "modal-card-title" }, [
              _vm._v("Add a new source")
            ]),
            _vm._v(" "),
            _c("a", { staticClass: "delete", on: { click: _vm.close } })
          ]),
          _vm._v(" "),
          _c(
            "section",
            { staticClass: "modal-card-body" },
            [
              _c("label", { staticClass: "label" }, [_vm._v("Author")]),
              _vm._v(" "),
              _c("p", { staticClass: "control" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.author,
                      expression: "author"
                    }
                  ],
                  staticClass: "input",
                  attrs: { type: "text", autocomplete: "off" },
                  domProps: { value: _vm.author },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.author = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("label", { staticClass: "label" }, [_vm._v("Year")]),
              _vm._v(" "),
              _c("p", { staticClass: "control" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.year,
                      expression: "year"
                    }
                  ],
                  staticClass: "input",
                  attrs: { type: "text", autocomplete: "off" },
                  domProps: { value: _vm.year },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.year = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("label", { staticClass: "label" }, [_vm._v("Full Citation")]),
              _vm._v(" "),
              _c("p", { staticClass: "control" }, [
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.long,
                      expression: "long"
                    }
                  ],
                  staticClass: "textarea",
                  domProps: { value: _vm.long },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.long = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("label", { staticClass: "label" }, [_vm._v("URL")]),
              _vm._v(" "),
              _c("p", { staticClass: "control" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.url,
                      expression: "url"
                    }
                  ],
                  staticClass: "input",
                  attrs: { type: "url", autocomplete: "off" },
                  domProps: { value: _vm.url },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.url = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("label", { staticClass: "label" }, [_vm._v("Notes")]),
              _vm._v(" "),
              _c("alg-textarea", {
                model: {
                  value: _vm.notes,
                  callback: function($$v) {
                    _vm.notes = $$v
                  },
                  expression: "notes"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("footer", { staticClass: "modal-card-foot" }, [
            _c(
              "a",
              {
                staticClass: "button is-primary",
                class: {
                  "is-loading": _vm.loading,
                  "is-disabled": _vm.disabled
                },
                on: { click: _vm.submit }
              },
              [_vm._v("Submit")]
            ),
            _vm._v(" "),
            _c("a", { staticClass: "button", on: { click: _vm.close } }, [
              _vm._v("Cancel")
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/New-Source.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__New_Source_vue_vue_type_template_id_12f4eb02___ = __webpack_require__("./resources/assets/js/components/New-Source.vue?vue&type=template&id=12f4eb02&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__New_Source_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/New-Source.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__New_Source_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__New_Source_vue_vue_type_template_id_12f4eb02___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__New_Source_vue_vue_type_template_id_12f4eb02___["b" /* staticRenderFns */],
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
      api.createRecord('12f4eb02', component.options)
    } else {
      api.reload('12f4eb02', component.options)
    }
    module.hot.accept("./New-Source.vue?vue&type=template&id=12f4eb02&", function () {
      api.rerender('12f4eb02', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/New-Source.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/New-Source.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_Source_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/New-Source.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_Source_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/New-Source.vue?vue&type=template&id=12f4eb02&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_Source_vue_vue_type_template_id_12f4eb02___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/New-Source.vue?vue&type=template&id=12f4eb02&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_Source_vue_vue_type_template_id_12f4eb02___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_Source_vue_vue_type_template_id_12f4eb02___["b"]; });


/***/ })

});