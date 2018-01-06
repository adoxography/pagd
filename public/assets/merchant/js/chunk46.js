webpackJsonp([46],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Hidden-Icon.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
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
	props: ['hidden', 'uri'],

	data: function data() {
		return {
			isHidden: false,
			loading: false
		};
	},


	methods: {
		onSubmit: function onSubmit() {
			var _this = this;

			var attempt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

			this.loading = true;

			axios.patch(this.uri + '/hide').then(function (response) {
				_this.isHidden = response.data.hidden;
				_this.loading = false;
			}).catch(function (error) {
				if (attempt < 5) {
					_this.onSubmit(attempt + 1);
				} else {
					_this.loading = false;
					alert("Failed to change the visibility");
				}
			});
		}
	},

	created: function created() {
		this.isHidden = this.hidden;
	}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7be0d475\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Hidden-Icon.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a",
    {
      staticClass: "card-header-icon",
      on: {
        click: function($event) {
          $event.preventDefault()
          _vm.onSubmit($event)
        }
      }
    },
    [
      _c("span", { staticClass: "icon" }, [
        _c("i", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.isHidden && !_vm.loading,
              expression: "!isHidden && !loading"
            }
          ],
          staticClass: "fa fa-eye",
          attrs: { title: "Data is visible" }
        }),
        _vm._v(" "),
        _c("i", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.isHidden && !_vm.loading,
              expression: "isHidden && !loading"
            }
          ],
          staticClass: "fa fa-eye-slash",
          attrs: { title: "Data is hidden" }
        }),
        _vm._v(" "),
        _c("i", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.loading,
              expression: "loading"
            }
          ],
          staticClass: "fa fa-spinner fa-pulse fa-3x fa-fw"
        })
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7be0d475", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/Hidden-Icon.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Hidden-Icon.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7be0d475\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Hidden-Icon.vue")
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
Component.options.__file = "resources/assets/js/components/Hidden-Icon.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7be0d475", Component.options)
  } else {
    hotAPI.reload("data-v-7be0d475", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});