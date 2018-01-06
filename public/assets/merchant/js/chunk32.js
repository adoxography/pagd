webpackJsonp([32],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Multi-DataList.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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



/* harmony default export */ __webpack_exports__["default"] = ({
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3d68a993\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Multi-DataList.vue":
/***/ (function(module, exports, __webpack_require__) {

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
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3d68a993", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/Datalist.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Datalist; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Datalist = function () {
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
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Multi-DataList.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3d68a993\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Multi-DataList.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Multi-DataList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d68a993", Component.options)
  } else {
    hotAPI.reload("data-v-3d68a993", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});