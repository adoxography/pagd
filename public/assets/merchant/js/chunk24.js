webpackJsonp([24],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Multi-DataList.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Datalist_js__ = __webpack_require__("./resources/assets/js/Datalist.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Multi-DataList.vue?vue&type=template&id=3d68a993&":
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
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
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
    ])
  }
]
render._withStripped = true



/***/ }),

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Multi_DataList_vue_vue_type_template_id_3d68a993___ = __webpack_require__("./resources/assets/js/components/Multi-DataList.vue?vue&type=template&id=3d68a993&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Multi_DataList_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Multi-DataList.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Multi_DataList_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Multi_DataList_vue_vue_type_template_id_3d68a993___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Multi_DataList_vue_vue_type_template_id_3d68a993___["b" /* staticRenderFns */],
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
      api.createRecord('3d68a993', component.options)
    } else {
      api.reload('3d68a993', component.options)
    }
    module.hot.accept("./Multi-DataList.vue?vue&type=template&id=3d68a993&", function () {
      api.rerender('3d68a993', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/Multi-DataList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

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


/***/ })

});