webpackJsonp([30],{

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
                      return _vm.onFileChange($event.target.files, row)
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
                            return _vm.onDelete(n)
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



/***/ }),

/***/ "./resources/assets/js/components/FileUpload.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FileUpload_vue_vue_type_template_id_12ca9994___ = __webpack_require__("./resources/assets/js/components/FileUpload.vue?vue&type=template&id=12ca9994&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FileUpload_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/FileUpload.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__FileUpload_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__FileUpload_vue_vue_type_template_id_12ca9994___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__FileUpload_vue_vue_type_template_id_12ca9994___["b" /* staticRenderFns */],
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
      api.createRecord('12ca9994', component.options)
    } else {
      api.reload('12ca9994', component.options)
    }
    module.hot.accept("./FileUpload.vue?vue&type=template&id=12ca9994&", function () {
      api.rerender('12ca9994', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/FileUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

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


/***/ })

});