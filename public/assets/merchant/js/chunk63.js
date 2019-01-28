<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:public/assets/merchant/js/chunk63.js
<<<<<<< HEAD:public/assets/merchant/js/chunk63.js
webpackJsonp([63,72],{
=======
webpackJsonp([10,18],{
>>>>>>> Adapt async autocomplete into Buefy component:public/assets/merchant/js/chunk10.js
=======
webpackJsonp([10],{
>>>>>>> Remove unneeded components:public/assets/merchant/js/chunk10.js

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Multi-DataList.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Datalist_js__ = __webpack_require__("./resources/assets/js/Datalist.js");
//
//
//
//
=======
webpackJsonp([63],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Modal.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
<<<<<<< HEAD
=======
webpackJsonp([63],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Filter-List.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
<<<<<<< HEAD
//
//
<<<<<<< HEAD

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['value', 'list', 'name', 'disabled'],
  data: function data() {
    return {
      numFields: 1,
      suggestions: {
        cree: [new __WEBPACK_IMPORTED_MODULE_0__Datalist_js__["a" /* Datalist */]('Plains Cree', 2), new __WEBPACK_IMPORTED_MODULE_0__Datalist_js__["a" /* Datalist */]('Woods Cree', 35), new __WEBPACK_IMPORTED_MODULE_0__Datalist_js__["a" /* Datalist */]('Swampy Cree', 59), new __WEBPACK_IMPORTED_MODULE_0__Datalist_js__["a" /* Datalist */]('Moose Cree', 5), new __WEBPACK_IMPORTED_MODULE_0__Datalist_js__["a" /* Datalist */]('Atikamekw', 36), new __WEBPACK_IMPORTED_MODULE_0__Datalist_js__["a" /* Datalist */]('Southern East Cree', 37), new __WEBPACK_IMPORTED_MODULE_0__Datalist_js__["a" /* Datalist */]('Northern East Cree', 38), new __WEBPACK_IMPORTED_MODULE_0__Datalist_js__["a" /* Datalist */]('Sheshatshiu Innu', 39)],
        ojibwe: [new __WEBPACK_IMPORTED_MODULE_0__Datalist_js__["a" /* Datalist */]('Saulteaux', 27), new __WEBPACK_IMPORTED_MODULE_0__Datalist_js__["a" /* Datalist */]('Southwestern Ojibwe', 21), new __WEBPACK_IMPORTED_MODULE_0__Datalist_js__["a" /* Datalist */]('Oji-Cree', 28), new __WEBPACK_IMPORTED_MODULE_0__Datalist_js__["a" /* Datalist */]('Odawa', 29), new __WEBPACK_IMPORTED_MODULE_0__Datalist_js__["a" /* Datalist */]('Nishnaabemwin', 22), new __WEBPACK_IMPORTED_MODULE_0__Datalist_js__["a" /* Datalist */]('Nipissing', 31), new __WEBPACK_IMPORTED_MODULE_0__Datalist_js__["a" /* Datalist */]('Old Algonquin', 32), new __WEBPACK_IMPORTED_MODULE_0__Datalist_js__["a" /* Datalist */]('Lac Simon Algonquin', 33), new __WEBPACK_IMPORTED_MODULE_0__Datalist_js__["a" /* Datalist */]('Golden Lake Algonquin', 34)]
      }
    };
  },
  methods: {
    addField: function addField() {
      if (this.value.length < 5) {
        var temp = this.value;
        temp.push({
          text: '',
          id: ''
        });
        this.$emit('input', temp);
      }
    },
    removeField: function removeField() {
      if (this.value.length > 1) {
        var temp = this.value;
        temp.pop();
        this.$emit('input', temp);
      }
    },
    suggest: function suggest(key) {
      var newLists = [];
      this.suggestions[key].forEach(function (suggestion) {
        newLists.push({
          text: suggestion.text,
          id: suggestion.id
        });
      });
      this.$emit('input', newLists);
=======
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['list', 'filteroptions'],
  data: function data() {
    return {
      parsedList: [],
      parsedFilterOptions: [],
      filteredList: [],
      selected: ''
    };
  },
  created: function created() {
    this.parsedList = JSON.parse(this.list);
    this.parsedFilterOptions = JSON.parse(this.filteroptions);
    this.filteredList = this.parsedList;
  },
  methods: {
    filter: function filter() {
      var _this = this;

      // console.log(this.$refs.pages);
      this.$refs.pages.selected = 0;

      if (this.selected == '') {
        this.filteredList = this.parsedList;
      } else {
        this.filteredList = [];
        this.parsedList.forEach(function (item) {
          if (item.slot_id == _this.selected) {
            _this.filteredList.push(item);
          }
        });
      }
>>>>>>> Update sources component
=======
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    title: {
      default: ""
    },
    content: {
      default: ""
    },
    footer: {
      default: ""
    }
  },
  data: function data() {
    return {
      active: false
    };
  },
  methods: {
    open: function open() {
      this.active = true;
    },
    close: function close() {
      this.active = false;
    },
    onClickOutside: function onClickOutside() {
      var _this = this;

      Vue.nextTick(function () {
        if (_this.active) {
          _this.close();
        }
      });
>>>>>>> Move gloss rendering into the GlossLine class
    }
  }
});

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Multi-DataList.vue?vue&type=template&id=3d68a993&":
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Filter-List.vue?vue&type=template&id=04b3280c&":
>>>>>>> Update sources component
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Modal.vue?vue&type=template&id=6e8d36f4&":
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
    "div",
<<<<<<< HEAD
<<<<<<< HEAD
    [
      _vm._l(_vm.value, function(line, n) {
        return _c(
          "div",
          { staticClass: "field" },
          [
            _c("alg-datalist", {
              key: n,
              ref: "datalists",
              refInFor: true,
              attrs: { list: _vm.list, name: _vm.name, disabled: _vm.disabled },
              model: {
                value: _vm.value[n],
                callback: function($$v) {
                  _vm.$set(_vm.value, n, $$v)
                },
                expression: "value[n]"
              }
            })
          ],
          1
        )
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
                staticClass: "button is-primary is-small",
                attrs: { disabled: _vm.value.length >= 5 || _vm.disabled },
                on: {
                  click: function($event) {
                    _vm.addField()
                  }
                }
              },
              [_vm._m(0)]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "level-item" }, [
            _c(
              "a",
              {
                staticClass: "button is-primary is-small",
                attrs: { disabled: _vm.value.length <= 1 || _vm.disabled },
                on: {
                  click: function($event) {
                    _vm.removeField()
                  }
                }
              },
              [_vm._m(1)]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("em", [_vm._v("Suggestions: ")]),
      _vm._v(" "),
      _c(
        "a",
        {
          on: {
            click: function($event) {
              _vm.suggest("cree")
            }
          }
        },
        [_vm._v("Cree Dialects")]
      ),
      _vm._v(",\n\t"),
      _c(
        "a",
        {
          on: {
            click: function($event) {
              _vm.suggest("ojibwe")
            }
          }
        },
        [_vm._v("Ojibwe Dialects")]
      )
=======
    { staticClass: "alg-filter-list" },
    [
      _c("div", { staticClass: "control is-horizontal" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "control" }, [
          _c("span", { staticClass: "select is-fullwidth" }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.selected,
                    expression: "selected"
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
                      _vm.selected = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    },
                    _vm.filter
                  ]
                }
              },
              [
                _c("option", { attrs: { value: "" } }, [_vm._v("All")]),
                _vm._v(" "),
                _vm._l(_vm.parsedFilterOptions, function(option) {
                  return _c("option", { domProps: { value: option.id } }, [
                    _vm._v(_vm._s(option.abv))
                  ])
                })
              ],
              2
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("alg-paginated-list", {
        ref: "pages",
        attrs: { list: _vm.filteredList }
      })
>>>>>>> Update sources component
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
<<<<<<< HEAD
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
=======
    return _c("div", { staticClass: "control-label" }, [
      _c("label", { staticClass: "label" }, [_vm._v("Slot")])
>>>>>>> Update sources component
    ])
  }
]
=======
    { staticClass: "modal", class: { "is-active": _vm.active } },
    [
      _c("div", { staticClass: "modal-background", on: { click: _vm.close } }),
      _vm._v(" "),
      _c("div", { staticClass: "modal-card" }, [
        _c("header", { staticClass: "modal-card-head" }, [
          _c(
            "p",
            { staticClass: "modal-card-title" },
            [
              _vm._t("title", [
                _c("div", { domProps: { innerHTML: _vm._s(_vm.title) } })
              ])
            ],
            2
          ),
          _vm._v(" "),
          _c("button", { staticClass: "delete", on: { click: _vm.close } })
        ]),
        _vm._v(" "),
        _c(
          "section",
          { staticClass: "modal-card-body" },
          [
            _vm._t("default", [
              _c("div", { domProps: { innerHTML: _vm._s(_vm.content) } })
            ])
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "footer",
          { staticClass: "modal-card-foot" },
          [
            _vm._t("footer", [
              _c("div", { domProps: { innerHTML: _vm._s(_vm.footer) } })
            ])
          ],
          2
        )
      ])
    ]
  )
}
var staticRenderFns = []
>>>>>>> Move gloss rendering into the GlossLine class
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

/***/ "./resources/assets/js/components/Multi-DataList.vue":
=======
/***/ "./resources/assets/js/components/Filter-List.vue":
>>>>>>> Update sources component
=======
/***/ "./resources/assets/js/components/Modal.vue":
>>>>>>> Move gloss rendering into the GlossLine class
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Multi_DataList_vue_vue_type_template_id_3d68a993___ = __webpack_require__("./resources/assets/js/components/Multi-DataList.vue?vue&type=template&id=3d68a993&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Multi_DataList_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Multi-DataList.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Filter_List_vue_vue_type_template_id_04b3280c___ = __webpack_require__("./resources/assets/js/components/Filter-List.vue?vue&type=template&id=04b3280c&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Filter_List_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Filter-List.vue?vue&type=script&lang=js&");
>>>>>>> Update sources component
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modal_vue_vue_type_template_id_6e8d36f4___ = __webpack_require__("./resources/assets/js/components/Modal.vue?vue&type=template&id=6e8d36f4&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Modal_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Modal.vue?vue&type=script&lang=js&");
>>>>>>> Move gloss rendering into the GlossLine class
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
<<<<<<< HEAD
<<<<<<< HEAD
  __WEBPACK_IMPORTED_MODULE_1__Multi_DataList_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Multi_DataList_vue_vue_type_template_id_3d68a993___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Multi_DataList_vue_vue_type_template_id_3d68a993___["b" /* staticRenderFns */],
=======
  __WEBPACK_IMPORTED_MODULE_1__Filter_List_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Filter_List_vue_vue_type_template_id_04b3280c___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Filter_List_vue_vue_type_template_id_04b3280c___["b" /* staticRenderFns */],
>>>>>>> Update sources component
=======
  __WEBPACK_IMPORTED_MODULE_1__Modal_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Modal_vue_vue_type_template_id_6e8d36f4___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Modal_vue_vue_type_template_id_6e8d36f4___["b" /* staticRenderFns */],
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
      api.createRecord('3d68a993', component.options)
    } else {
      api.reload('3d68a993', component.options)
    }
    module.hot.accept("./Multi-DataList.vue?vue&type=template&id=3d68a993&", function () {
      api.rerender('3d68a993', {
=======
      api.createRecord('04b3280c', component.options)
    } else {
      api.reload('04b3280c', component.options)
    }
    module.hot.accept("./Filter-List.vue?vue&type=template&id=04b3280c&", function () {
      api.rerender('04b3280c', {
>>>>>>> Update sources component
=======
      api.createRecord('6e8d36f4', component.options)
    } else {
      api.reload('6e8d36f4', component.options)
    }
    module.hot.accept("./Modal.vue?vue&type=template&id=6e8d36f4&", function () {
      api.rerender('6e8d36f4', {
>>>>>>> Move gloss rendering into the GlossLine class
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
component.options.__file = "resources/assets/js/components/Multi-DataList.vue"
=======
component.options.__file = "resources/assets/js/components/Filter-List.vue"
>>>>>>> Update sources component
=======
component.options.__file = "resources/assets/js/components/Modal.vue"
>>>>>>> Move gloss rendering into the GlossLine class
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "./resources/assets/js/components/Multi-DataList.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Multi_DataList_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Multi-DataList.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Multi_DataList_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Multi-DataList.vue?vue&type=template&id=3d68a993&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Multi_DataList_vue_vue_type_template_id_3d68a993___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Multi-DataList.vue?vue&type=template&id=3d68a993&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Multi_DataList_vue_vue_type_template_id_3d68a993___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Multi_DataList_vue_vue_type_template_id_3d68a993___["b"]; });
=======
/***/ "./resources/assets/js/components/Filter-List.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_List_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Filter-List.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_List_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Filter-List.vue?vue&type=template&id=04b3280c&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_List_vue_vue_type_template_id_04b3280c___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Filter-List.vue?vue&type=template&id=04b3280c&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_List_vue_vue_type_template_id_04b3280c___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_List_vue_vue_type_template_id_04b3280c___["b"]; });
>>>>>>> Update sources component
=======
/***/ "./resources/assets/js/components/Modal.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Modal.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Modal.vue?vue&type=template&id=6e8d36f4&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_6e8d36f4___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Modal.vue?vue&type=template&id=6e8d36f4&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_6e8d36f4___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_6e8d36f4___["b"]; });
>>>>>>> Move gloss rendering into the GlossLine class


/***/ })

});