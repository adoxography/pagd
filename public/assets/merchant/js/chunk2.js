webpackJsonp([2],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Tag.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_buefy_src_components_tag_Tag_vue__ = __webpack_require__("./node_modules/buefy/src/components/tag/Tag.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_Colour_js__ = __webpack_require__("./resources/assets/js/util/Colour.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/**
 * Tag component
 *
 * Subclass of Buefy's Tag component, which adds some extra functionality:
 *  - Adds props for background and text colour
 */

/* harmony default export */ __webpack_exports__["a"] = ({
  extends: __WEBPACK_IMPORTED_MODULE_0_buefy_src_components_tag_Tag_vue__["a" /* default */],
  props: ['backgroundColor', 'textColor'],
  computed: {
    styles: function styles() {
      var styles = {};

      if (this.backgroundColor) {
        styles['background-color'] = this.backgroundColor;

        if (this.textColor === 'invert') {
          styles['color'] = Object(__WEBPACK_IMPORTED_MODULE_1__util_Colour_js__["a" /* invertColour */])(this.backgroundColor);
        }
      }

      if (this.textColor && this.textColor !== 'invert') {
        styles['color'] = this.textColor;
      }

      return styles;
    }
  }
});

/***/ }),

/***/ "./node_modules/buefy/src/components/tag/Tag.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tag_vue_vue_type_template_id_14c199b0___ = __webpack_require__("./node_modules/buefy/src/components/tag/Tag.vue?vue&type=template&id=14c199b0&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tag_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/buefy/src/components/tag/Tag.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Tag_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Tag_vue_vue_type_template_id_14c199b0___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Tag_vue_vue_type_template_id_14c199b0___["b" /* staticRenderFns */],
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
      api.createRecord('14c199b0', component.options)
    } else {
      api.reload('14c199b0', component.options)
    }
    module.hot.accept("./Tag.vue?vue&type=template&id=14c199b0&", function () {
      api.rerender('14c199b0', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "node_modules/buefy/src/components/tag/Tag.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/buefy/src/components/tag/Tag.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/buefy/src/components/tag/Tag.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./node_modules/buefy/src/components/tag/Tag.vue?vue&type=template&id=14c199b0&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_template_id_14c199b0___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/buefy/src/components/tag/Tag.vue?vue&type=template&id=14c199b0&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_template_id_14c199b0___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_template_id_14c199b0___["b"]; });


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/buefy/src/components/tag/Tag.vue?vue&type=script&lang=js&":
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

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'BTag',
    props: {
        attached: Boolean,
        closable: Boolean,
        type: String,
        size: String,
        rounded: Boolean,
        disabled: Boolean,
        ellipsis: Boolean,
        tabstop: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        /**
         * Emit close event when delete button is clicked
         * or delete key is pressed.
         */
        close() {
            if (this.disabled) return

            this.$emit('close')
        }
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/buefy/src/components/tag/Tag.vue?vue&type=template&id=14c199b0&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.attached && _vm.closable
    ? _c("div", { staticClass: "tags has-addons" }, [
        _c(
          "span",
          {
            staticClass: "tag",
            class: [_vm.type, _vm.size, { "is-rounded": _vm.rounded }]
          },
          [
            _c(
              "span",
              { class: { "has-ellipsis": _vm.ellipsis } },
              [_vm._t("default")],
              2
            )
          ]
        ),
        _vm._v(" "),
        _c("a", {
          staticClass: "tag is-delete",
          class: [_vm.size, { "is-rounded": _vm.rounded }],
          attrs: {
            role: "button",
            tabindex: _vm.tabstop ? 0 : false,
            disabled: _vm.disabled
          },
          on: {
            click: function($event) {
              _vm.close()
            },
            keyup: function($event) {
              if (
                !("button" in $event) &&
                _vm._k($event.keyCode, "delete", [8, 46], $event.key, [
                  "Backspace",
                  "Delete",
                  "Del"
                ])
              ) {
                return null
              }
              $event.preventDefault()
              _vm.close()
            }
          }
        })
      ])
    : _c(
        "span",
        {
          staticClass: "tag",
          class: [_vm.type, _vm.size, { "is-rounded": _vm.rounded }]
        },
        [
          _c(
            "span",
            { class: { "has-ellipsis": _vm.ellipsis } },
            [_vm._t("default")],
            2
          ),
          _vm._v(" "),
          _vm.closable
            ? _c("a", {
                staticClass: "delete is-small",
                attrs: {
                  role: "button",
                  disabled: _vm.disabled,
                  tabindex: _vm.tabstop ? 0 : false
                },
                on: {
                  click: function($event) {
                    _vm.close()
                  },
                  keyup: function($event) {
                    if (
                      !("button" in $event) &&
                      _vm._k($event.keyCode, "delete", [8, 46], $event.key, [
                        "Backspace",
                        "Delete",
                        "Del"
                      ])
                    ) {
                      return null
                    }
                    $event.preventDefault()
                    _vm.close()
                  }
                }
              })
            : _vm._e()
        ]
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Tag.vue?vue&type=template&id=7cc4b493&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.attached && _vm.closable
    ? _c("div", { staticClass: "tags has-addons" }, [
        _c(
          "span",
          {
            staticClass: "tag",
            class: [_vm.type, _vm.size, { "is-rounded": _vm.rounded }],
            style: _vm.styles
          },
          [
            _c(
              "span",
              { class: { "has-ellipsis": _vm.ellipsis } },
              [_vm._t("default")],
              2
            )
          ]
        ),
        _vm._v(" "),
        _c("a", {
          staticClass: "tag is-delete",
          class: [_vm.size, { "is-rounded": _vm.rounded }],
          attrs: {
            role: "button",
            tabindex: _vm.tabstop ? 0 : false,
            disabled: _vm.disabled
          },
          on: {
            click: function($event) {
              _vm.close()
            },
            keyup: function($event) {
              if (
                !("button" in $event) &&
                _vm._k($event.keyCode, "delete", [8, 46], $event.key, [
                  "Backspace",
                  "Delete",
                  "Del"
                ])
              ) {
                return null
              }
              $event.preventDefault()
              _vm.close()
            }
          }
        })
      ])
    : _c(
        "span",
        {
          staticClass: "tag",
          class: [_vm.type, _vm.size, { "is-rounded": _vm.rounded }],
          style: _vm.styles
        },
        [
          _c(
            "span",
            { class: { "has-ellipsis": _vm.ellipsis } },
            [_vm._t("default")],
            2
          ),
          _vm._v(" "),
          _vm.closable
            ? _c("a", {
                staticClass: "delete is-small",
                attrs: {
                  role: "button",
                  disabled: _vm.disabled,
                  tabindex: _vm.tabstop ? 0 : false
                },
                on: {
                  click: function($event) {
                    _vm.close()
                  },
                  keyup: function($event) {
                    if (
                      !("button" in $event) &&
                      _vm._k($event.keyCode, "delete", [8, 46], $event.key, [
                        "Backspace",
                        "Delete",
                        "Del"
                      ])
                    ) {
                      return null
                    }
                    $event.preventDefault()
                    _vm.close()
                  }
                }
              })
            : _vm._e()
        ]
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/forms/Tag.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tag_vue_vue_type_template_id_7cc4b493___ = __webpack_require__("./resources/assets/js/components/forms/Tag.vue?vue&type=template&id=7cc4b493&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tag_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/forms/Tag.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Tag_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Tag_vue_vue_type_template_id_7cc4b493___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Tag_vue_vue_type_template_id_7cc4b493___["b" /* staticRenderFns */],
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
      api.createRecord('7cc4b493', component.options)
    } else {
      api.reload('7cc4b493', component.options)
    }
    module.hot.accept("./Tag.vue?vue&type=template&id=7cc4b493&", function () {
      api.rerender('7cc4b493', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/forms/Tag.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/forms/Tag.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Tag.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/forms/Tag.vue?vue&type=template&id=7cc4b493&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_template_id_7cc4b493___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Tag.vue?vue&type=template&id=7cc4b493&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_template_id_7cc4b493___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_template_id_7cc4b493___["b"]; });


/***/ }),

/***/ "./resources/assets/js/util/Colour.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return invertColour; });
function invertColour(hexTripletColor) {
  var color = hexTripletColor;
  color = color.substring(1); // remove #

  color = parseInt(color, 16); // convert to integer

  color = 0xFFFFFF ^ color; // invert three bytes

  color = color.toString(16); // convert to hex

  color = ("000000" + color).slice(-6); // pad with leading zeros

  color = "#" + color; // prepend #

  return color;
}



/***/ })

});