<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:public/assets/merchant/js/chunk55.js
<<<<<<< HEAD:public/assets/merchant/js/chunk55.js
webpackJsonp([55,72],{
=======
webpackJsonp([2,18],{
=======
webpackJsonp([2],{
>>>>>>> Remove unneeded components:public/assets/merchant/js/chunk2.js

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Preview.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD:public/assets/merchant/js/chunk55.js
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form__ = __webpack_require__("./resources/assets/js/components/forms/Form.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_HasMorphemes__ = __webpack_require__("./resources/assets/js/mixins/HasMorphemes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Datalist_js__ = __webpack_require__("./resources/assets/js/Datalist.js");



/* harmony default export */ __webpack_exports__["a"] = ({
  extends: __WEBPACK_IMPORTED_MODULE_0__Form__["default"],
  props: ['oldMorphemes', 'oldForm'],
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_HasMorphemes__["a" /* default */]],
  data: function data() {
    return {
      language: new __WEBPACK_IMPORTED_MODULE_2__Datalist_js__["a" /* Datalist */](),
      form: new __WEBPACK_IMPORTED_MODULE_2__Datalist_js__["a" /* Datalist */](),
      parent: new __WEBPACK_IMPORTED_MODULE_2__Datalist_js__["a" /* Datalist */](),
      morphemes: []
    };
  },
  methods: {
    onLanguageInput: function onLanguageInput() {
      this.form.reset();
      this.morphemes = [];
      this.errors.clear('language');
    },
    onFormInput: function onFormInput() {
      if (this.form.extra) {
        this.morphemes = Array.isArray(this.form.extra) ? this.form.extra : JSON.parse(this.form.extra);
      }
    }
  },
  mounted: function mounted() {
    if (this.oldForm) {
      this.form = new __WEBPACK_IMPORTED_MODULE_2__Datalist_js__["a" /* Datalist */](this.oldForm.text, this.oldForm.id, this.oldForm.extra);
    }

    if (this.oldMorphemes) {
      this.morphemes = this.oldMorphemes;
    }
  }
});

/***/ }),
>>>>>>> Adapt async autocomplete into Buefy component:public/assets/merchant/js/chunk2.js
=======
webpackJsonp([55],{
>>>>>>> Update sources component

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/SelectAll.vue?vue&type=script&lang=js&":
=======
webpackJsonp([55],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Tabs.vue?vue&type=script&lang=js&":
>>>>>>> Move gloss rendering into the GlossLine class
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
<<<<<<< HEAD
=======
>>>>>>> Remove unneeded components:public/assets/merchant/js/chunk2.js
=======
>>>>>>> Move gloss rendering into the GlossLine class
//
//
//
//
//
<<<<<<< HEAD
<<<<<<< HEAD
=======
//
>>>>>>> Move gloss rendering into the GlossLine class
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
<<<<<<< HEAD
  props: ['preview'],
  data: function data() {
    return {
      show: true,
      overflowing: false
    };
  },
  computed: {
    height: function height() {
      return this.show ? '100%' : this.preview;
    },
    toggleText: function toggleText() {
      return this.show ? 'Show less...' : 'Show more...';
    },
    previewHeight: function previewHeight() {
      return /\d+/.exec(this.preview)[0];
    }
  },
  methods: {
    toggle: function toggle() {
      this.show = !this.show;
=======
/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {
    checkboxes: function checkboxes() {
      return $("#select-all-section input:checkbox");
    }
  },
  methods: {
    toggle: function toggle(setting) {
      this.checkboxes.prop("checked", setting);
>>>>>>> Update sources component
    }
  },
  mounted: function mounted() {
    this.overflowing = this.$refs.slot.offsetHeight > this.previewHeight;
    this.show = false;
=======
  props: ['active'],
  data: function data() {
    return {
      tabs: []
    };
  },
  created: function created() {
    this.tabs = this.$children;
  },
  mounted: function mounted() {
    if (!this.active) {
      var hash = location.hash;

      if (hash != '') {
        this.tabs.forEach(function (tab) {
          tab.isActive = tab.href == location.hash;
        });
      }
    } else {
      this.selectTabByName(this.active);
    }
  },
  methods: {
    selectTab: function selectTab(targetTab) {
      this.selectTabByName(targetTab.name);
      this.$emit('tabChanged', targetTab.name);
    },
    selectTabByName: function selectTabByName(name) {
      this.tabs.forEach(function (tab) {
        tab.isActive = tab.name === name;
      });
    }
>>>>>>> Move gloss rendering into the GlossLine class
  }
});

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Preview.vue?vue&type=style&index=0&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.alg-preview {\n  overflow: hidden;\n  display: flex;\n}\n.alg-preview .preview-gradient {\n    position: absolute;\n    background: linear-gradient(rgba(0, 0, 0, 0) 70%, rgba(255, 255, 255, 0.8));\n    width: 100%;\n}\n.alg-preview .preview-content {\n    width: 100%;\n}\n.alg-preview .toggle-bar {\n    position: absolute;\n    width: 100%;\n    display: flex;\n    align-self: flex-end;\n    justify-content: center;\n    pointer-events: none;\n}\n.alg-preview .toggle-bar a {\n      pointer-events: all;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Preview.vue?vue&type=style&index=0&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Preview.vue?vue&type=style&index=0&lang=scss&");
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
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Preview.vue?vue&type=style&index=0&lang=scss&", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Preview.vue?vue&type=style&index=0&lang=scss&");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Preview.vue?vue&type=template&id=1760483e&":
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/SelectAll.vue?vue&type=template&id=3dd2905e&":
>>>>>>> Update sources component
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Tabs.vue?vue&type=template&id=971a3596&":
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
  return _c(
    "div",
<<<<<<< HEAD
    { staticClass: "alg-preview", style: { "max-height": _vm.height } },
    [
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.overflowing && !_vm.show,
            expression: "overflowing && !show"
          }
        ],
        staticClass: "preview-gradient",
        style: { height: _vm.height }
      }),
      _vm._v(" "),
      _c(
        "div",
        { ref: "slot", staticClass: "preview-content" },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.overflowing,
              expression: "overflowing"
            }
          ],
          staticClass: "toggle-bar"
        },
        [
          _c("a", { on: { click: _vm.toggle } }, [
            _vm._v(_vm._s(_vm.toggleText))
          ])
        ]
      )
    ]
=======
    { attrs: { id: "select-all-section" } },
    [
      _c(
        "a",
        {
          staticClass: "button",
          on: {
            click: function($event) {
              _vm.toggle(true)
            }
          }
        },
        [_vm._v("Select all")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "button",
          on: {
            click: function($event) {
              _vm.toggle(false)
            }
          }
        },
        [_vm._v("Select none")]
      ),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
>>>>>>> Update sources component
  )
=======
  return _c("div", [
    _c("div", { class: { tabs: _vm.tabs.length > 0 } }, [
      _c(
        "ul",
        _vm._l(_vm.tabs, function(tab) {
          return _c(
            "li",
            {
              class: { "is-active": tab.isActive },
              staticStyle: { "margin-top": "0" }
            },
            [
              _c(
                "a",
                {
                  attrs: { href: tab.href },
                  on: {
                    click: function($event) {
                      _vm.selectTab(tab)
                    }
                  }
                },
                [_vm._v(_vm._s(tab.name))]
              )
            ]
          )
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "tabs-details" }, [_vm._t("default")], 2)
  ])
>>>>>>> Move gloss rendering into the GlossLine class
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "./resources/assets/js/components/Preview.vue":
=======
/***/ "./resources/assets/js/components/SelectAll.vue":
>>>>>>> Update sources component
=======
/***/ "./resources/assets/js/components/Tabs.vue":
>>>>>>> Move gloss rendering into the GlossLine class
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Preview_vue_vue_type_template_id_1760483e___ = __webpack_require__("./resources/assets/js/components/Preview.vue?vue&type=template&id=1760483e&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Preview_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Preview.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SelectAll_vue_vue_type_template_id_3dd2905e___ = __webpack_require__("./resources/assets/js/components/SelectAll.vue?vue&type=template&id=3dd2905e&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SelectAll_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/SelectAll.vue?vue&type=script&lang=js&");
>>>>>>> Update sources component
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Preview_vue_vue_type_style_index_0_lang_scss___ = __webpack_require__("./resources/assets/js/components/Preview.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tabs_vue_vue_type_template_id_971a3596___ = __webpack_require__("./resources/assets/js/components/Tabs.vue?vue&type=template&id=971a3596&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tabs_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Tabs.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
>>>>>>> Move gloss rendering into the GlossLine class





/* normalize component */

<<<<<<< HEAD
<<<<<<< HEAD
var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Preview_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Preview_vue_vue_type_template_id_1760483e___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Preview_vue_vue_type_template_id_1760483e___["b" /* staticRenderFns */],
=======
var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__SelectAll_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__SelectAll_vue_vue_type_template_id_3dd2905e___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__SelectAll_vue_vue_type_template_id_3dd2905e___["b" /* staticRenderFns */],
>>>>>>> Update sources component
=======
var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Tabs_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Tabs_vue_vue_type_template_id_971a3596___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Tabs_vue_vue_type_template_id_971a3596___["b" /* staticRenderFns */],
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
      api.createRecord('1760483e', component.options)
    } else {
      api.reload('1760483e', component.options)
    }
    module.hot.accept("./Preview.vue?vue&type=template&id=1760483e&", function () {
      api.rerender('1760483e', {
=======
      api.createRecord('3dd2905e', component.options)
    } else {
      api.reload('3dd2905e', component.options)
    }
    module.hot.accept("./SelectAll.vue?vue&type=template&id=3dd2905e&", function () {
      api.rerender('3dd2905e', {
>>>>>>> Update sources component
=======
      api.createRecord('971a3596', component.options)
    } else {
      api.reload('971a3596', component.options)
    }
    module.hot.accept("./Tabs.vue?vue&type=template&id=971a3596&", function () {
      api.rerender('971a3596', {
>>>>>>> Move gloss rendering into the GlossLine class
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
component.options.__file = "resources/assets/js/components/Preview.vue"
=======
component.options.__file = "resources/assets/js/components/SelectAll.vue"
>>>>>>> Update sources component
=======
component.options.__file = "resources/assets/js/components/Tabs.vue"
>>>>>>> Move gloss rendering into the GlossLine class
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "./resources/assets/js/components/Preview.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Preview.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Preview.vue?vue&type=style&index=0&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_style_index_0_lang_scss___ = __webpack_require__("./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Preview.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_style_index_0_lang_scss____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_style_index_0_lang_scss___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_style_index_0_lang_scss____default.a); 

/***/ }),

/***/ "./resources/assets/js/components/Preview.vue?vue&type=template&id=1760483e&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_template_id_1760483e___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Preview.vue?vue&type=template&id=1760483e&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_template_id_1760483e___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_template_id_1760483e___["b"]; });
=======
/***/ "./resources/assets/js/components/SelectAll.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectAll_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/SelectAll.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectAll_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/SelectAll.vue?vue&type=template&id=3dd2905e&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectAll_vue_vue_type_template_id_3dd2905e___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/SelectAll.vue?vue&type=template&id=3dd2905e&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectAll_vue_vue_type_template_id_3dd2905e___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectAll_vue_vue_type_template_id_3dd2905e___["b"]; });
>>>>>>> Update sources component
=======
/***/ "./resources/assets/js/components/Tabs.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Tabs.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Tabs.vue?vue&type=template&id=971a3596&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_971a3596___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Tabs.vue?vue&type=template&id=971a3596&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_971a3596___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_971a3596___["b"]; });
>>>>>>> Move gloss rendering into the GlossLine class


/***/ })

});