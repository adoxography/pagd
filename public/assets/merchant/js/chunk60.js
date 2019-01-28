<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:public/assets/merchant/js/chunk60.js
<<<<<<< HEAD:public/assets/merchant/js/chunk60.js
webpackJsonp([60,72],{
=======
webpackJsonp([7,18],{
>>>>>>> Adapt async autocomplete into Buefy component:public/assets/merchant/js/chunk7.js
=======
webpackJsonp([7],{
>>>>>>> Remove unneeded components:public/assets/merchant/js/chunk7.js

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Radio-Toggle.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Datalist_js__ = __webpack_require__("./resources/assets/js/Datalist.js");
//
//
//
=======
webpackJsonp([60],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Morpheme-Alert.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
>>>>>>> Update sources component
=======
webpackJsonp([60],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Paginated-List.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
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
<<<<<<< HEAD
<<<<<<< HEAD

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['languages', 'oldLanguages'],
  data: function data() {
    return {
      disabled: true,
      selections: [new __WEBPACK_IMPORTED_MODULE_0__Datalist_js__["a" /* Datalist */]()]
    };
  },
  created: function created() {
    if (this.oldLanguages) {
      var languages = [];

      for (var i = 0; i < this.oldLanguages.length; i += 2) {
        languages.push(new __WEBPACK_IMPORTED_MODULE_0__Datalist_js__["a" /* Datalist */](this.oldLanguages[i], this.oldLanguages[i + 1]));
      }

      this.disabled = false;
      this.selections = languages;
    }
=======
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['title'],
  data: function data() {
    return {
      showModal: false
    };
>>>>>>> Update sources component
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
/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['list'],
  data: function data() {
    return {
      selected: 0
    };
  },
  computed: {
    pages: function pages() {
      var pages = [];

      for (var i = 0; i < this.list.length; i += 10) {
        pages.push(this.list.slice(i, i + 10));
      }

      return pages;
    },
    mid: function mid() {
      return Math.max(Math.min(this.selected, this.pages.length - 3), 2); // return Math.min(Math.max(this.selected, 2), this.pages.length - 3);
    }
  },
  methods: {
    previousPage: function previousPage() {
      if (this.selected > 0) {
        this.selected--;
      }
    },
    nextPage: function nextPage() {
      if (this.selected < this.pages.length - 1) {
        this.selected++;
      }
    }
>>>>>>> Move gloss rendering into the GlossLine class
  }
});

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Radio-Toggle.vue?vue&type=template&id=59a77c3d&":
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Morpheme-Alert.vue?vue&type=template&id=19aeffca&":
>>>>>>> Update sources component
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Paginated-List.vue?vue&type=template&id=37e882b5&":
>>>>>>> Move gloss rendering into the GlossLine class
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
<<<<<<< HEAD
  return _c("div", [
<<<<<<< HEAD
    _c("p", { staticClass: "control" }, [
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.disabled,
              expression: "disabled"
            }
          ],
          staticClass: "radio",
          attrs: { name: "searchAll", type: "radio" },
          domProps: { value: true, checked: _vm._q(_vm.disabled, true) },
          on: {
            change: function($event) {
              _vm.disabled = true
            }
          }
        }),
        _vm._v("\n\t\t\tAll languages\n\t\t")
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
              value: _vm.disabled,
              expression: "disabled"
            }
          ],
          staticClass: "radio",
          attrs: { name: "searchAll", type: "radio" },
          domProps: { value: false, checked: _vm._q(_vm.disabled, false) },
          on: {
            change: function($event) {
              _vm.disabled = false
            }
          }
        }),
        _vm._v("\n\t\t\tThe following languages...\n\t\t")
      ])
    ]),
    _c(
      "div",
      { staticClass: "box" },
      [
        _c("alg-multi-datalist", {
          attrs: {
            list: _vm.languages,
            name: "languages[]",
            disabled: _vm.disabled
          },
          model: {
            value: _vm.selections,
            callback: function($$v) {
              _vm.selections = $$v
            },
            expression: "selections"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("p")
=======
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.showModal,
            expression: "showModal"
          }
        ],
        staticClass: "alg-morpheme-alert",
        on: {
          mouseleave: function($event) {
            _vm.showModal = false
          }
        }
      },
      [
        _c("article", { staticClass: "message is-primary" }, [
          _c("div", { staticClass: "message-header" }, [
            _c("p", [_vm._v(_vm._s(_vm.title))])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "message-body" }, [_vm._t("default")], 2)
        ])
      ]
    ),
    _vm._v(" "),
    _c("a", { staticClass: "icon is-danger" }, [
      _c(
        "span",
        {
          staticClass: "icon is-small",
          on: {
            mouseover: function($event) {
              _vm.showModal = true
            }
          }
        },
        [_c("i", { staticClass: "fa fa-exclamation-triangle" })]
      )
    ])
>>>>>>> Update sources component
=======
  return _c("div", { staticClass: "alg-paginated-list box" }, [
    _c("nav", { staticClass: "pagination" }, [
      _c(
        "a",
        {
          staticClass: "pagination-previous",
          class: { "is-disabled": _vm.selected <= 0 },
          on: { click: _vm.previousPage }
        },
        [_vm._v("Previous")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "pagination-next",
          class: { "is-disabled": _vm.selected >= _vm.pages.length - 1 },
          on: { click: _vm.nextPage }
        },
        [_vm._v("Next")]
      ),
      _vm._v(" "),
      _c("ul", { staticClass: "pagination-list" }, [
        _c("li", [
          _c(
            "a",
            {
              staticClass: "pagination-link",
              class: { "is-disabled": _vm.selected == 0 },
              on: {
                click: function($event) {
                  _vm.selected = 0
                }
              }
            },
            [_vm._v("1")]
          )
        ]),
        _vm._v(" "),
        _c(
          "li",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.selected > 2 && _vm.pages.length > 5,
                expression: "selected > 2 && pages.length > 5"
              }
            ]
          },
          [_c("span", { staticClass: "pagination-ellipsis" }, [_vm._v("…")])]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.pages.length > 2,
                expression: "pages.length > 2"
              }
            ]
          },
          [
            _c(
              "a",
              {
                staticClass: "pagination-link",
                class: { "is-disabled": _vm.selected == _vm.mid - 1 },
                on: {
                  click: function($event) {
                    _vm.selected = _vm.mid - 1
                  }
                }
              },
              [_vm._v(_vm._s(_vm.mid))]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.pages.length > 3,
                expression: "pages.length > 3"
              }
            ]
          },
          [
            _c(
              "a",
              {
                staticClass: "pagination-link",
                class: { "is-disabled": _vm.selected == _vm.mid },
                on: {
                  click: function($event) {
                    _vm.selected = _vm.mid
                  }
                }
              },
              [_vm._v(_vm._s(_vm.mid + 1))]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.pages.length > 4,
                expression: "pages.length > 4"
              }
            ]
          },
          [
            _c(
              "a",
              {
                staticClass: "pagination-link",
                class: { "is-disabled": _vm.selected == _vm.mid + 1 },
                on: {
                  click: function($event) {
                    _vm.selected = _vm.mid + 1
                  }
                }
              },
              [_vm._v(_vm._s(_vm.mid + 2))]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value:
                  _vm.selected < _vm.pages.length - 3 && _vm.pages.length > 5,
                expression: "selected < pages.length - 3 && pages.length > 5"
              }
            ]
          },
          [_c("span", { staticClass: "pagination-ellipsis" }, [_vm._v("…")])]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.pages.length > 1,
                expression: "pages.length > 1"
              }
            ]
          },
          [
            _c(
              "a",
              {
                staticClass: "pagination-link",
                class: { "is-disabled": _vm.selected == _vm.pages.length - 1 },
                on: {
                  click: function($event) {
                    _vm.selected = _vm.pages.length - 1
                  }
                }
              },
              [_vm._v(_vm._s(_vm.pages.length))]
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "content" },
      _vm._l(_vm.pages, function(page, index) {
        return _c(
          "ul",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.selected == index,
                expression: "selected == index"
              }
            ]
          },
          _vm._l(page, function(item) {
            return _c("li", [
              _c("a", { attrs: { href: "/morphemes/" + item.id } }, [
                _vm._v(_vm._s(item.name)),
                item.hasDuplicates
                  ? _c("sup", [_vm._v(_vm._s(item.disambiguator))])
                  : _vm._e(),
                _vm._v(" ("),
                _c("span", { staticClass: "gloss" }, [
                  _vm._v(_vm._s(item.gloss))
                ]),
                _vm._v(")")
              ])
            ])
          }),
          0
        )
      }),
      0
    )
>>>>>>> Move gloss rendering into the GlossLine class
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
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

/***/ "./resources/assets/js/components/Radio-Toggle.vue":
=======
/***/ "./resources/assets/js/components/Morpheme-Alert.vue":
>>>>>>> Update sources component
=======
/***/ "./resources/assets/js/components/Paginated-List.vue":
>>>>>>> Move gloss rendering into the GlossLine class
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Radio_Toggle_vue_vue_type_template_id_59a77c3d___ = __webpack_require__("./resources/assets/js/components/Radio-Toggle.vue?vue&type=template&id=59a77c3d&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Radio_Toggle_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Radio-Toggle.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Morpheme_Alert_vue_vue_type_template_id_19aeffca___ = __webpack_require__("./resources/assets/js/components/Morpheme-Alert.vue?vue&type=template&id=19aeffca&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Morpheme_Alert_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Morpheme-Alert.vue?vue&type=script&lang=js&");
>>>>>>> Update sources component
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Paginated_List_vue_vue_type_template_id_37e882b5___ = __webpack_require__("./resources/assets/js/components/Paginated-List.vue?vue&type=template&id=37e882b5&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Paginated_List_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Paginated-List.vue?vue&type=script&lang=js&");
>>>>>>> Move gloss rendering into the GlossLine class
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
<<<<<<< HEAD
<<<<<<< HEAD
  __WEBPACK_IMPORTED_MODULE_1__Radio_Toggle_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Radio_Toggle_vue_vue_type_template_id_59a77c3d___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Radio_Toggle_vue_vue_type_template_id_59a77c3d___["b" /* staticRenderFns */],
=======
  __WEBPACK_IMPORTED_MODULE_1__Morpheme_Alert_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Morpheme_Alert_vue_vue_type_template_id_19aeffca___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Morpheme_Alert_vue_vue_type_template_id_19aeffca___["b" /* staticRenderFns */],
>>>>>>> Update sources component
=======
  __WEBPACK_IMPORTED_MODULE_1__Paginated_List_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Paginated_List_vue_vue_type_template_id_37e882b5___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Paginated_List_vue_vue_type_template_id_37e882b5___["b" /* staticRenderFns */],
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
      api.createRecord('59a77c3d', component.options)
    } else {
      api.reload('59a77c3d', component.options)
    }
    module.hot.accept("./Radio-Toggle.vue?vue&type=template&id=59a77c3d&", function () {
      api.rerender('59a77c3d', {
=======
      api.createRecord('19aeffca', component.options)
    } else {
      api.reload('19aeffca', component.options)
    }
    module.hot.accept("./Morpheme-Alert.vue?vue&type=template&id=19aeffca&", function () {
      api.rerender('19aeffca', {
>>>>>>> Update sources component
=======
      api.createRecord('37e882b5', component.options)
    } else {
      api.reload('37e882b5', component.options)
    }
    module.hot.accept("./Paginated-List.vue?vue&type=template&id=37e882b5&", function () {
      api.rerender('37e882b5', {
>>>>>>> Move gloss rendering into the GlossLine class
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
component.options.__file = "resources/assets/js/components/Radio-Toggle.vue"
=======
component.options.__file = "resources/assets/js/components/Morpheme-Alert.vue"
>>>>>>> Update sources component
=======
component.options.__file = "resources/assets/js/components/Paginated-List.vue"
>>>>>>> Move gloss rendering into the GlossLine class
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "./resources/assets/js/components/Radio-Toggle.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Radio_Toggle_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Radio-Toggle.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Radio_Toggle_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Radio-Toggle.vue?vue&type=template&id=59a77c3d&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Radio_Toggle_vue_vue_type_template_id_59a77c3d___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Radio-Toggle.vue?vue&type=template&id=59a77c3d&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Radio_Toggle_vue_vue_type_template_id_59a77c3d___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Radio_Toggle_vue_vue_type_template_id_59a77c3d___["b"]; });
=======
/***/ "./resources/assets/js/components/Morpheme-Alert.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Morpheme_Alert_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Morpheme-Alert.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Morpheme_Alert_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Morpheme-Alert.vue?vue&type=template&id=19aeffca&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Morpheme_Alert_vue_vue_type_template_id_19aeffca___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Morpheme-Alert.vue?vue&type=template&id=19aeffca&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Morpheme_Alert_vue_vue_type_template_id_19aeffca___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Morpheme_Alert_vue_vue_type_template_id_19aeffca___["b"]; });
>>>>>>> Update sources component
=======
/***/ "./resources/assets/js/components/Paginated-List.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginated_List_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Paginated-List.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginated_List_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Paginated-List.vue?vue&type=template&id=37e882b5&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginated_List_vue_vue_type_template_id_37e882b5___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Paginated-List.vue?vue&type=template&id=37e882b5&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginated_List_vue_vue_type_template_id_37e882b5___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginated_List_vue_vue_type_template_id_37e882b5___["b"]; });
>>>>>>> Move gloss rendering into the GlossLine class


/***/ })

});