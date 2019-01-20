<<<<<<< HEAD
webpackJsonp([0,12],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Form.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
=======
webpackJsonp([0],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/TagInput.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_buefy_src_components_taginput_Taginput_vue__ = __webpack_require__("./node_modules/buefy/src/components/taginput/Taginput.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuedraggable__ = __webpack_require__("./node_modules/vuedraggable/dist/vuedraggable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuedraggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuedraggable__);
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
>>>>>>> Start working on initial change
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
/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['method', 'action', 'oldErrors'],
  data: function data() {
    return {
      csrfToken: Laravel.csrfToken
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (this.oldErrors) {
      _.forEach(this.oldErrors, function (errors, field) {
        errors.forEach(function (message) {
          return _this.$root.errors.add({
            field: field,
            msg: message
          });
        });
      });
    }

    ;
  },
  methods: {
    validateBeforeSubmit: function validateBeforeSubmit(event) {
      var _this2 = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this2.$children.forEach(function (child) {
            if (child.beforeSubmit) {
              child.beforeSubmit();
            }
          });

          _this2.$nextTick(function () {
            return _this2.$refs.form.submit();
          });
        }
      });
=======


/* harmony default export */ __webpack_exports__["a"] = ({
  extends: __WEBPACK_IMPORTED_MODULE_0_buefy_src_components_taginput_Taginput_vue__["a" /* default */],
  components: {
    draggable: __WEBPACK_IMPORTED_MODULE_1_vuedraggable___default.a
  },
  props: ['onClickTag'],
  methods: {
    onDrag: function onDrag() {
      this.$emit('input', this.tags);
    },
    tagClicked: function tagClicked(tag) {
      if (this.onClickTag) {
        this.onClickTag(tag);
        console.log(tag);
        this.$emit('input', this.tags);
      }
>>>>>>> Start working on initial change
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/search/Phoneme.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form__ = __webpack_require__("./resources/assets/js/components/forms/Form.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Datalist_js__ = __webpack_require__("./resources/assets/js/Datalist.js");


/* harmony default export */ __webpack_exports__["a"] = ({
  extends: __WEBPACK_IMPORTED_MODULE_0__Form__["default"],
  props: ['inventory', 'preset'],
  data: function data() {
    return {
      languages: [new __WEBPACK_IMPORTED_MODULE_1__Datalist_js__["a" /* Datalist */]()],
      type: '',
      mode: 'inventory',
      phonemes: {},
      pa: {
        'text': 'Proto-Algonquian'
      }
    };
  },
  computed: {
    phones: function phones() {
      return this.inventory[this.type];
    }
  },
  watch: {
    type: function type() {
      var phonemes = {};

      _.each(this.phones, function (phone) {
        phonemes[phone.id] = true;
      });

      this.phonemes = phonemes;
    }
  },
  created: function created() {
    if (this.preset) {
      this.mode = this.preset.mode;
      var languages = [];

      for (var i = 0; i < this.preset.languages.length; i += 2) {
        var name = this.preset.languages[i];
        var id = this.preset.languages[i + 1];

        if (name) {
          languages.push(new __WEBPACK_IMPORTED_MODULE_1__Datalist_js__["a" /* Datalist */](name, id));
        }
      }

      languages.push(this.languages[0]);
      this.languages = languages;
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.preset) {
      this.type = this.preset.type;
      Vue.nextTick(function () {
        _.each(_this.phonemes, function (_, key) {
          _this.phonemes[key] = _this.preset.phonemes.includes(key);
        });
      });
    } else {
      this.type = 'consonants';
    }
  },
  methods: {
    onInput: function onInput(text, index) {
      if (text == '') {
        if (this.languages.length > 1) {
          this.languages.splice(index, 1);
        }
      } else if (index == this.languages.length - 1) {
        this.languages.push(new __WEBPACK_IMPORTED_MODULE_1__Datalist_js__["a" /* Datalist */]());
      }
    },
    phoneName: function phoneName(phoneme) {
      return phoneme.algoName;
    },
    selectAll: function selectAll() {
      this.toggle(true);
    },
    selectNone: function selectNone() {
      this.toggle(false);
    },
    toggle: function toggle(setting) {
      var _this2 = this;

      _.each(this.phonemes, function (_, key) {
        _this2.phonemes[key] = setting;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Form.vue?vue&type=template&id=68350a1b&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      ref: "form",
      attrs: {
        method: _vm.method == "GET" ? _vm.method : "POST",
        action: _vm.action
      },
      on: {
        submit: function($event) {
          $event.preventDefault()
          _vm.validateBeforeSubmit($event)
        }
      }
    },
    [
      _c("input", {
        attrs: { name: "_token", type: "hidden" },
        domProps: { value: _vm.csrfToken }
      }),
      _vm._v(" "),
      _vm.method != "POST" && _vm.method != "GET"
        ? _c("input", {
            attrs: { type: "hidden", name: "_method" },
            domProps: { value: _vm.method }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm._t("default"),
      _vm._v(" "),
      _c("div", { staticClass: "field" }, [
        _c(
          "button",
          {
            staticClass: "button is-primary has-text-grey-dark",
            attrs: { type: "submit", disabled: _vm.errors.any() }
          },
          [_vm._v("Submit")]
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

=======
/***/ "./node_modules/buefy/src/components/autocomplete/Autocomplete.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Autocomplete_vue_vue_type_template_id_052068b2___ = __webpack_require__("./node_modules/buefy/src/components/autocomplete/Autocomplete.vue?vue&type=template&id=052068b2&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Autocomplete_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/buefy/src/components/autocomplete/Autocomplete.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Autocomplete_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Autocomplete_vue_vue_type_template_id_052068b2___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Autocomplete_vue_vue_type_template_id_052068b2___["b" /* staticRenderFns */],
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
      api.createRecord('052068b2', component.options)
    } else {
      api.reload('052068b2', component.options)
    }
    module.hot.accept("./Autocomplete.vue?vue&type=template&id=052068b2&", function () {
      api.rerender('052068b2', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "node_modules/buefy/src/components/autocomplete/Autocomplete.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/buefy/src/components/autocomplete/Autocomplete.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_index_js_vue_loader_options_Autocomplete_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/buefy/src/components/autocomplete/Autocomplete.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_index_js_vue_loader_options_Autocomplete_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./node_modules/buefy/src/components/autocomplete/Autocomplete.vue?vue&type=template&id=052068b2&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Autocomplete_vue_vue_type_template_id_052068b2___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/buefy/src/components/autocomplete/Autocomplete.vue?vue&type=template&id=052068b2&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Autocomplete_vue_vue_type_template_id_052068b2___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Autocomplete_vue_vue_type_template_id_052068b2___["b"]; });


/***/ }),

/***/ "./node_modules/buefy/src/components/icon/Icon.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Icon_vue_vue_type_template_id_0f5a9852___ = __webpack_require__("./node_modules/buefy/src/components/icon/Icon.vue?vue&type=template&id=0f5a9852&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/buefy/src/components/icon/Icon.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Icon_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Icon_vue_vue_type_template_id_0f5a9852___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Icon_vue_vue_type_template_id_0f5a9852___["b" /* staticRenderFns */],
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
      api.createRecord('0f5a9852', component.options)
    } else {
      api.reload('0f5a9852', component.options)
    }
    module.hot.accept("./Icon.vue?vue&type=template&id=0f5a9852&", function () {
      api.rerender('0f5a9852', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "node_modules/buefy/src/components/icon/Icon.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/buefy/src/components/icon/Icon.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/buefy/src/components/icon/Icon.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./node_modules/buefy/src/components/icon/Icon.vue?vue&type=template&id=0f5a9852&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_template_id_0f5a9852___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/buefy/src/components/icon/Icon.vue?vue&type=template&id=0f5a9852&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_template_id_0f5a9852___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_template_id_0f5a9852___["b"]; });
>>>>>>> Start working on initial change


/***/ }),

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

/***/ "./resources/assets/js/components/forms/Form.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form_vue_vue_type_template_id_68350a1b___ = __webpack_require__("./resources/assets/js/components/forms/Form.vue?vue&type=template&id=68350a1b&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/forms/Form.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
=======
/***/ "./node_modules/buefy/src/components/input/Input.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Input_vue_vue_type_template_id_3a0ea348___ = __webpack_require__("./node_modules/buefy/src/components/input/Input.vue?vue&type=template&id=3a0ea348&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Input_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/buefy/src/components/input/Input.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Input_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Input_vue_vue_type_template_id_3a0ea348___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Input_vue_vue_type_template_id_3a0ea348___["b" /* staticRenderFns */],
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
      api.createRecord('3a0ea348', component.options)
    } else {
      api.reload('3a0ea348', component.options)
    }
    module.hot.accept("./Input.vue?vue&type=template&id=3a0ea348&", function () {
      api.rerender('3a0ea348', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "node_modules/buefy/src/components/input/Input.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/buefy/src/components/input/Input.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/buefy/src/components/input/Input.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./node_modules/buefy/src/components/input/Input.vue?vue&type=template&id=3a0ea348&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_3a0ea348___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/buefy/src/components/input/Input.vue?vue&type=template&id=3a0ea348&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_3a0ea348___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_3a0ea348___["b"]; });


/***/ }),

/***/ "./node_modules/buefy/src/components/tag/Tag.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tag_vue_vue_type_template_id_14c199b0___ = __webpack_require__("./node_modules/buefy/src/components/tag/Tag.vue?vue&type=template&id=14c199b0&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tag_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/buefy/src/components/tag/Tag.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
>>>>>>> Start working on initial change





/* normalize component */

<<<<<<< HEAD
var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Form_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Form_vue_vue_type_template_id_68350a1b___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Form_vue_vue_type_template_id_68350a1b___["b" /* staticRenderFns */],
=======
var component = Object(__WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Tag_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Tag_vue_vue_type_template_id_14c199b0___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Tag_vue_vue_type_template_id_14c199b0___["b" /* staticRenderFns */],
>>>>>>> Start working on initial change
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
      api.createRecord('68350a1b', component.options)
    } else {
      api.reload('68350a1b', component.options)
    }
    module.hot.accept("./Form.vue?vue&type=template&id=68350a1b&", function () {
      api.rerender('68350a1b', {
=======
      api.createRecord('14c199b0', component.options)
    } else {
      api.reload('14c199b0', component.options)
    }
    module.hot.accept("./Tag.vue?vue&type=template&id=14c199b0&", function () {
      api.rerender('14c199b0', {
>>>>>>> Start working on initial change
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
<<<<<<< HEAD
component.options.__file = "resources/assets/js/components/forms/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/forms/Form.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Form.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/forms/Form.vue?vue&type=template&id=68350a1b&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_68350a1b___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Form.vue?vue&type=template&id=68350a1b&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_68350a1b___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_68350a1b___["b"]; });
=======
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
>>>>>>> Start working on initial change


/***/ }),

<<<<<<< HEAD
/***/ "./resources/assets/js/components/forms/search/Phoneme.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Phoneme_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/forms/search/Phoneme.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
=======
/***/ "./node_modules/buefy/src/components/taginput/Taginput.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Taginput_vue_vue_type_template_id_641fc832___ = __webpack_require__("./node_modules/buefy/src/components/taginput/Taginput.vue?vue&type=template&id=641fc832&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Taginput_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/buefy/src/components/taginput/Taginput.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

>>>>>>> Start working on initial change




/* normalize component */

<<<<<<< HEAD
var component = Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__Phoneme_vue_vue_type_script_lang_js___["a" /* default */],
  render,
  staticRenderFns,
=======
var component = Object(__WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Taginput_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Taginput_vue_vue_type_template_id_641fc832___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Taginput_vue_vue_type_template_id_641fc832___["b" /* staticRenderFns */],
>>>>>>> Start working on initial change
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
      api.createRecord('69d442f6', component.options)
    } else {
      api.reload('69d442f6', component.options)
    }
    
  }
}
component.options.__file = "resources/assets/js/components/forms/search/Phoneme.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/forms/search/Phoneme.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Phoneme_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/search/Phoneme.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Phoneme_vue_vue_type_script_lang_js___["a" /* default */]); 
=======
      api.createRecord('641fc832', component.options)
    } else {
      api.reload('641fc832', component.options)
    }
    module.hot.accept("./Taginput.vue?vue&type=template&id=641fc832&", function () {
      api.rerender('641fc832', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "node_modules/buefy/src/components/taginput/Taginput.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/buefy/src/components/taginput/Taginput.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_index_js_vue_loader_options_Taginput_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/buefy/src/components/taginput/Taginput.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_index_js_vue_loader_options_Taginput_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./node_modules/buefy/src/components/taginput/Taginput.vue?vue&type=template&id=641fc832&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Taginput_vue_vue_type_template_id_641fc832___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/buefy/src/components/taginput/Taginput.vue?vue&type=template&id=641fc832&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Taginput_vue_vue_type_template_id_641fc832___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Taginput_vue_vue_type_template_id_641fc832___["b"]; });


/***/ }),

/***/ "./node_modules/buefy/src/utils/FormElementMixin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_config__ = __webpack_require__("./node_modules/buefy/src/utils/config.js");


/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        size: String,
        expanded: Boolean,
        loading: Boolean,
        rounded: Boolean,
        icon: String,
        iconPack: String,
        // Native options to use in HTML5 validation
        autocomplete: String,
        maxlength: [Number, String],
        useHtml5Validation: {
            type: Boolean,
            default: () => __WEBPACK_IMPORTED_MODULE_0__utils_config__["a" /* default */].defaultUseHtml5Validation
        }
    },
    data() {
        return {
            isValid: true,
            isFocused: false,
            newIconPack: this.iconPack || __WEBPACK_IMPORTED_MODULE_0__utils_config__["a" /* default */].defaultIconPack
        }
    },
    computed: {
        /**
         * Find parent Field, max 3 levels deep.
         */
        parentField() {
            let parent = this.$parent
            for (let i = 0; i < 3; i++) {
                if (parent && !parent.$data._isField) {
                    parent = parent.$parent
                }
            }
            return parent
        },

        /**
         * Get the type prop from parent if it's a Field.
         */
        statusType() {
            if (!this.parentField) return
            if (!this.parentField.newType) return
            if (typeof this.parentField.newType === 'string') {
                return this.parentField.newType
            } else {
                for (let key in this.parentField.newType) {
                    if (this.parentField.newType[key]) {
                        return key
                    }
                }
            }
        },

        /**
         * Get the message prop from parent if it's a Field.
         */
        statusMessage() {
            if (!this.parentField) return

            return this.parentField.newMessage
        },

        /**
         * Fix icon size for inputs, large was too big
         */
        iconSize() {
            switch (this.size) {
                case 'is-small': return this.size
                case 'is-medium': return
                case 'is-large': return this.newIconPack === 'mdi'
                    ? 'is-medium'
                    : ''
            }
        }
    },
    methods: {
        /**
         * Focus method that work dynamically depending on the component.
         */
        focus() {
            if (this.$data._elementRef === undefined) return

            this.$nextTick(() => this.$el.querySelector(this.$data._elementRef).focus())
        },

        onBlur($event) {
            this.isFocused = false
            this.$emit('blur', $event)
            this.checkHtml5Validity()
        },

        onFocus($event) {
            this.isFocused = true
            this.$emit('focus', $event)
        },

        /**
         * Check HTML5 validation, set isValid property.
         * If validation fail, send 'is-danger' type,
         * and error message to parent if it's a Field.
         */
        checkHtml5Validity() {
            if (!this.useHtml5Validation) return

            if (this.$refs[this.$data._elementRef] === undefined) return

            const el = this.$el.querySelector(this.$data._elementRef)

            let type = null
            let message = null
            let isValid = true
            if (!el.checkValidity()) {
                type = 'is-danger'
                message = el.validationMessage
                isValid = false
            }
            this.isValid = isValid

            this.$nextTick(() => {
                if (this.parentField) {
                    // Set type only if not defined
                    if (!this.parentField.type) {
                        this.parentField.newType = type
                    }
                    // Set message only if not defined
                    if (!this.parentField.message) {
                        this.parentField.newMessage = message
                    }
                }
            })

            return this.isValid
        }
    }
});


/***/ }),

/***/ "./node_modules/buefy/src/utils/config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let config = {
    defaultContainerElement: null,
    defaultIconPack: 'mdi',
    defaultDialogConfirmText: null,
    defaultDialogCancelText: null,
    defaultSnackbarDuration: 3500,
    defaultToastDuration: 2000,
    defaultTooltipType: 'is-primary',
    defaultTooltipAnimated: false,
    defaultInputAutocomplete: 'on',
    defaultDateFormatter: null,
    defaultDateParser: null,
    defaultDateCreator: null,
    defaultDayNames: null,
    defaultMonthNames: null,
    defaultFirstDayOfWeek: null,
    defaultUnselectableDaysOfWeek: null,
    defaultTimeFormatter: null,
    defaultTimeParser: null,
    defaultModalScroll: null,
    defaultDatepickerMobileNative: true,
    defaultTimepickerMobileNative: true,
    defaultNoticeQueue: true,
    defaultInputHasCounter: true,
    defaultUseHtml5Validation: true
}

/* harmony default export */ __webpack_exports__["a"] = (config);

const setOptions = (options) => { config = options }
/* unused harmony export setOptions */



/***/ }),

/***/ "./node_modules/buefy/src/utils/helpers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getValueByPath;
/* unused harmony export indexOf */
/* unused harmony export removeElement */
/* unused harmony export escapeRegExpChars */
/**
 * Get value of an object property/path even if it's nested
 */
function getValueByPath(obj, path) {
    const value = path.split('.').reduce((o, i) => o[i], obj)
    return value
}

/**
 * Extension of indexOf method by equality function if specified
 */
function indexOf(array, obj, fn) {
    if (!array) return -1

    if (!fn || typeof fn !== 'function') return array.indexOf(obj)

    for (let i = 0; i < array.length; i++) {
        if (fn(array[i], obj)) {
            return i
        }
    }

    return -1
}

/**
 * Mobile detection
 * https://www.abeautifulsite.net/detecting-mobile-devices-with-javascript
 */
const isMobile = {
    Android: function () {
        return (
            typeof window !== 'undefined' &&
            window.navigator.userAgent.match(/Android/i)
        )
    },
    BlackBerry: function () {
        return (
            typeof window !== 'undefined' &&
            window.navigator.userAgent.match(/BlackBerry/i)
        )
    },
    iOS: function () {
        return (
            typeof window !== 'undefined' &&
            window.navigator.userAgent.match(/iPhone|iPad|iPod/i)
        )
    },
    Opera: function () {
        return (
            typeof window !== 'undefined' &&
            window.navigator.userAgent.match(/Opera Mini/i)
        )
    },
    Windows: function () {
        return (
            typeof window !== 'undefined' &&
            window.navigator.userAgent.match(/IEMobile/i)
        )
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        )
    }
}
/* unused harmony export isMobile */


function removeElement(el) {
    if (typeof el.remove !== 'undefined') {
        el.remove()
    } else if (typeof el.parentNode !== 'undefined') {
        el.parentNode.removeChild(el)
    }
}

/**
 * Escape regex characters
 * http://stackoverflow.com/a/6969486
 */
function escapeRegExpChars(value) {
    if (!value) return value

    // eslint-disable-next-line
    return value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/buefy/src/components/autocomplete/Autocomplete.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_helpers__ = __webpack_require__("./node_modules/buefy/src/utils/helpers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_FormElementMixin__ = __webpack_require__("./node_modules/buefy/src/utils/FormElementMixin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_Input__ = __webpack_require__("./node_modules/buefy/src/components/input/Input.vue");
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





/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'BAutocomplete',
    components: {
        [__WEBPACK_IMPORTED_MODULE_2__input_Input__["a" /* default */].name]: __WEBPACK_IMPORTED_MODULE_2__input_Input__["a" /* default */]
    },
    mixins: [__WEBPACK_IMPORTED_MODULE_1__utils_FormElementMixin__["a" /* default */]],
    inheritAttrs: false,
    props: {
        value: [Number, String],
        data: {
            type: Array,
            default: () => []
        },
        field: {
            type: String,
            default: 'value'
        },
        keepFirst: Boolean,
        clearOnSelect: Boolean,
        openOnFocus: Boolean
    },
    data() {
        return {
            selected: null,
            hovered: null,
            isActive: false,
            newValue: this.value,
            isListInViewportVertically: true,
            hasFocus: false,
            _isAutocomplete: true,
            _elementRef: 'input'
        }
    },
    computed: {
        /**
         * White-listed items to not close when clicked.
         * Add input, dropdown and all children.
         */
        whiteList() {
            const whiteList = []
            whiteList.push(this.$refs.input.$el.querySelector('input'))
            whiteList.push(this.$refs.dropdown)
            // Add all chidren from dropdown
            if (this.$refs.dropdown !== undefined) {
                const children = this.$refs.dropdown.querySelectorAll('*')
                for (const child of children) {
                    whiteList.push(child)
                }
            }

            return whiteList
        },

        /**
         * Check if exists default slot
         */
        hasDefaultSlot() {
            return !!this.$scopedSlots.default
        },

        /**
         * Check if exists "empty" slot
         */
        hasEmptySlot() {
            return !!this.$slots.empty
        },

        /**
         * Check if exists "header" slot
         */
        hasHeaderSlot() {
            return !!this.$slots.header
        }
    },
    watch: {
        /**
         * When dropdown is toggled, check the visibility to know when
         * to open upwards.
         */
        isActive(active) {
            if (active) {
                this.calcDropdownInViewportVertical()
            } else {
                this.$nextTick(() => this.setHovered(null))
                // Timeout to wait for the animation to finish before recalculating
                setTimeout(() => {
                    this.calcDropdownInViewportVertical()
                }, 100)
            }
        },

        /**
         * When updating input's value
         *   1. Emit changes
         *   2. If value isn't the same as selected, set null
         *   3. Close dropdown if value is clear or else open it
         */
        newValue(value) {
            this.$emit('input', value)
            // Check if selected is invalid
            const currentValue = this.getValue(this.selected)
            if (currentValue && currentValue !== value) {
                this.setSelected(null, false)
            }
            // Close dropdown if input is clear or else open it
            if (this.hasFocus && (!this.openOnFocus || value)) {
                this.isActive = !!value
            }
        },

        /**
         * When v-model is changed:
         *   1. Update internal value.
         *   2. If it's invalid, validate again.
         */
        value(value) {
            this.newValue = value
            !this.isValid && this.$refs.input.checkHtml5Validity()
        },

        /**
         * Select first option if "keep-first
         */
        data(value) {
            // Keep first option always pre-selected
            if (this.keepFirst) {
                this.selectFirstOption(value)
            }
        }
    },
    methods: {
        /**
         * Set which option is currently hovered.
         */
        setHovered(option) {
            if (option === undefined) return

            this.hovered = option
        },

        /**
         * Set which option is currently selected, update v-model,
         * update input value and close dropdown.
         */
        setSelected(option, closeDropdown = true) {
            if (option === undefined) return

            this.selected = option
            this.$emit('select', this.selected)
            if (this.selected !== null) {
                this.newValue = this.clearOnSelect ? '' : this.getValue(this.selected)
            }
            closeDropdown && this.$nextTick(() => { this.isActive = false })
        },

        /**
         * Select first option
         */
        selectFirstOption(options) {
            this.$nextTick(() => {
                if (options.length) {
                    // If has visible data or open on focus, keep updating the hovered
                    if (this.openOnFocus || (this.newValue !== '' && this.hovered !== options[0])) {
                        this.setHovered(options[0])
                    }
                } else {
                    this.setHovered(null)
                }
            })
        },

        /**
         * Enter key listener.
         * Select the hovered option.
         */
        enterPressed() {
            if (this.hovered === null) return
            this.setSelected(this.hovered)
        },

        /**
         * Tab key listener.
         * Select hovered option if it exists, close dropdown, then allow
         * native handling to move to next tabbable element.
         */
        tabPressed() {
            if (this.hovered === null) {
                this.isActive = false
                return
            }
            this.setSelected(this.hovered)
        },

        /**
         * Close dropdown if clicked outside.
         */
        clickedOutside(event) {
            if (this.whiteList.indexOf(event.target) < 0) this.isActive = false
        },

        /**
         * Return display text for the input.
         * If object, get value from path, or else just the value.
         */
        getValue(option) {
            if (!option) return

            return typeof option === 'object'
                ? Object(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["a" /* getValueByPath */])(option, this.field)
                : option
        },

        /**
         * Calculate if the dropdown is vertically visible when activated,
         * otherwise it is openened upwards.
         */
        calcDropdownInViewportVertical() {
            this.$nextTick(() => {
                /**
                 * this.$refs.dropdown may be undefined
                 * when Autocomplete is conditional rendered
                 */
                if (this.$refs.dropdown === undefined) return

                const rect = this.$refs.dropdown.getBoundingClientRect()

                this.isListInViewportVertically = (
                    rect.top >= 0 &&
                    rect.bottom <= (window.innerHeight ||
                        document.documentElement.clientHeight)
                )
            })
        },

        /**
         * Arrows keys listener.
         * If dropdown is active, set hovered option, or else just open.
         */
        keyArrows(direction) {
            const sum = direction === 'down' ? 1 : -1
            if (this.isActive) {
                let index = this.data.indexOf(this.hovered) + sum
                index = index > this.data.length - 1 ? this.data.length : index
                index = index < 0 ? 0 : index

                this.setHovered(this.data[index])

                const list = this.$refs.dropdown.querySelector('.dropdown-content')
                const element = list.querySelectorAll('a.dropdown-item:not(.is-disabled)')[index]

                if (!element) return

                const visMin = list.scrollTop
                const visMax = list.scrollTop + list.clientHeight - element.clientHeight

                if (element.offsetTop < visMin) {
                    list.scrollTop = element.offsetTop
                } else if (element.offsetTop >= visMax) {
                    list.scrollTop = (
                        element.offsetTop -
                        list.clientHeight +
                        element.clientHeight
                    )
                }
            } else {
                this.isActive = true
            }
        },

        /**
         * Focus listener.
         * If value is the same as selected, select all text.
         */
        focused(event) {
            if (this.getValue(this.selected) === this.newValue) {
                this.$el.querySelector('input').select()
            }
            if (this.openOnFocus) {
                this.isActive = true
                if (this.keepFirst) {
                    this.selectFirstOption(this.data)
                }
            }
            this.hasFocus = true
            this.$emit('focus', event)
        },

        /**
         * Blur listener.
        */
        onBlur(event) {
            this.hasFocus = false
            this.$emit('blur', event)
        }
    },
    created() {
        if (typeof window !== 'undefined') {
            document.addEventListener('click', this.clickedOutside)
            window.addEventListener('resize', this.calcDropdownInViewportVertical)
        }
    },
    beforeDestroy() {
        if (typeof window !== 'undefined') {
            document.removeEventListener('click', this.clickedOutside)
            window.removeEventListener('resize', this.calcDropdownInViewportVertical)
        }
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/buefy/src/components/icon/Icon.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_config__ = __webpack_require__("./node_modules/buefy/src/utils/config.js");
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'BIcon',
    props: {
        type: [String, Object],
        pack: String,
        icon: String,
        size: String,
        customSize: String,
        customClass: String,
        both: Boolean // This is used internally to show both MDI and FA icon
    },
    computed: {
        /**
         * Internal icon name based on the pack.
         * If pack is 'fa', gets the equivalent FA icon name of the MDI,
         * internal icons are always MDI.
         */
        newIcon() {
            if (!this.both) {
                if (this.newPack === 'mdi') {
                    return `${this.newPack}-${this.icon}`
                } else {
                    return `fa-${this.icon}`
                }
            }

            return this.newPack === 'mdi'
                ? `${this.newPack}-${this.icon}`
                : `fa-${this.getEquivalentIconOf(this.icon)}`
        },
        newPack() {
            return this.pack || __WEBPACK_IMPORTED_MODULE_0__utils_config__["a" /* default */].defaultIconPack
        },
        newType() {
            if (!this.type) return

            let splitType = []
            if (typeof this.type === 'string') {
                splitType = this.type.split('-')
            } else {
                for (let key in this.type) {
                    if (this.type[key]) {
                        splitType = key.split('-')
                        break
                    }
                }
            }
            if (splitType.length <= 1) return

            return `has-text-${splitType[1]}`
        },
        newCustomSize() {
            return this.customSize || this.customSizeByPack
        },
        customSizeByPack() {
            const defaultSize = this.newPack === 'mdi'
                ? 'mdi-24px'
                : 'fa-lg'
            const mediumSize = this.newPack === 'mdi'
                ? 'mdi-36px'
                : 'fa-2x'
            const largeSize = this.newPack === 'mdi'
                ? 'mdi-48px'
                : 'fa-3x'
            switch (this.size) {
                case 'is-small': return
                case 'is-medium': return mediumSize
                case 'is-large': return largeSize
                default: return defaultSize
            }
        }
    },
    methods: {
        /**
         * Equivalent FA icon name of the MDI.
         */
        getEquivalentIconOf(value) {
            switch (value) {
                case 'check': return 'check'
                case 'information': return 'info-circle'
                case 'check-circle': return 'check-circle'
                case 'alert': return 'exclamation-triangle'
                case 'alert-circle': return 'exclamation-circle'
                case 'arrow-up': return 'arrow-up'
                case 'chevron-right': return 'angle-right'
                case 'chevron-left': return 'angle-left'
                case 'chevron-down': return 'angle-down'
                case 'eye': return 'eye'
                case 'eye-off': return 'eye-slash'
                case 'menu-down': return 'caret-down'
                case 'menu-up': return 'caret-up'
                default: return value
            }
        }
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/buefy/src/components/input/Input.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon_Icon__ = __webpack_require__("./node_modules/buefy/src/components/icon/Icon.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_config__ = __webpack_require__("./node_modules/buefy/src/utils/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_FormElementMixin__ = __webpack_require__("./node_modules/buefy/src/utils/FormElementMixin.js");
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





/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'BInput',
    components: {
        [__WEBPACK_IMPORTED_MODULE_0__icon_Icon__["a" /* default */].name]: __WEBPACK_IMPORTED_MODULE_0__icon_Icon__["a" /* default */]
    },
    mixins: [__WEBPACK_IMPORTED_MODULE_2__utils_FormElementMixin__["a" /* default */]],
    inheritAttrs: false,
    props: {
        value: [Number, String],
        type: {
            type: String,
            default: 'text'
        },
        passwordReveal: Boolean,
        hasCounter: {
            type: Boolean,
            default: () => __WEBPACK_IMPORTED_MODULE_1__utils_config__["a" /* default */].defaultInputHasCounter
        },
        customClass: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            newValue: this.value,
            newType: this.type,
            newAutocomplete: this.autocomplete || __WEBPACK_IMPORTED_MODULE_1__utils_config__["a" /* default */].defaultInputAutocomplete,
            isPasswordVisible: false,
            _elementRef: this.type === 'textarea'
                ? 'textarea'
                : 'input'
        }
    },
    computed: {
        rootClasses() {
            return [
                this.iconPosition,
                this.size,
                {
                    'is-expanded': this.expanded,
                    'is-loading': this.loading,
                    'is-clearfix': !this.hasMessage
                }
            ]
        },
        inputClasses() {
            return [
                this.statusType,
                this.size,
                { 'is-rounded': this.rounded }
            ]
        },
        hasIconRight() {
            return this.passwordReveal || this.loading || this.statusType
        },

        /**
         * Position of the icon or if it's both sides.
         */
        iconPosition() {
            if (this.icon && this.hasIconRight) {
                return 'has-icons-left has-icons-right'
            } else if (!this.icon && this.hasIconRight) {
                return 'has-icons-right'
            } else if (this.icon) {
                return 'has-icons-left'
            }
        },

        /**
         * Icon name (MDI) based on the type.
         */
        statusTypeIcon() {
            switch (this.statusType) {
                case 'is-success': return 'check'
                case 'is-danger': return 'alert-circle'
                case 'is-info': return 'information'
                case 'is-warning': return 'alert'
            }
        },

        /**
         * Check if have any message prop from parent if it's a Field.
         */
        hasMessage() {
            return !!this.statusMessage
        },

        /**
         * Current password-reveal icon name.
         */
        passwordVisibleIcon() {
            return !this.isPasswordVisible ? 'eye' : 'eye-off'
        },
        /**
         * Get value length
         */
        valueLength() {
            if (typeof this.newValue === 'string') {
                return this.newValue.length
            } else if (typeof this.newValue === 'number') {
                return this.newValue.toString().length
            }
            return 0
        }
    },
    watch: {
        /**
         * When v-model is changed:
         *   1. Set internal value.
         *   2. If it's invalid, validate again.
         */
        value(value) {
            this.newValue = value
        },

        /**
         * Update user's v-model and validate again whenever
         * internal value is changed.
         */
        newValue(value) {
            this.$emit('input', value)
            !this.isValid && this.checkHtml5Validity()
        }
    },
    methods: {
        /**
         * Toggle the visibility of a password-reveal input
         * by changing the type and focus the input right away.
         */
        togglePasswordVisibility() {
            this.isPasswordVisible = !this.isPasswordVisible
            this.newType = this.isPasswordVisible ? 'text' : 'password'

            this.$nextTick(() => {
                this.$refs.input.focus()
            })
        },

        /**
         * Input's 'input' event listener, 'nextTick' is used to prevent event firing
         * before ui update, helps when using masks (Cleavejs and potentially others).
         */
        onInput(event) {
            this.$nextTick(() => { this.newValue = event.target.value })
        }
    }
});


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

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/buefy/src/components/taginput/Taginput.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_helpers__ = __webpack_require__("./node_modules/buefy/src/utils/helpers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tag_Tag__ = __webpack_require__("./node_modules/buefy/src/components/tag/Tag.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autocomplete_Autocomplete__ = __webpack_require__("./node_modules/buefy/src/components/autocomplete/Autocomplete.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_FormElementMixin__ = __webpack_require__("./node_modules/buefy/src/utils/FormElementMixin.js");
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
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'BTaginput',
    components: {
        [__WEBPACK_IMPORTED_MODULE_2__autocomplete_Autocomplete__["a" /* default */].name]: __WEBPACK_IMPORTED_MODULE_2__autocomplete_Autocomplete__["a" /* default */],
        [__WEBPACK_IMPORTED_MODULE_1__tag_Tag__["a" /* default */].name]: __WEBPACK_IMPORTED_MODULE_1__tag_Tag__["a" /* default */]
    },
    mixins: [__WEBPACK_IMPORTED_MODULE_3__utils_FormElementMixin__["a" /* default */]],
    inheritAttrs: false,
    props: {
        value: {
            type: Array,
            default: () => []
        },
        data: {
            type: Array,
            default: () => []
        },
        type: String,
        rounded: {
            type: Boolean,
            default: false
        },
        attached: {
            type: Boolean,
            default: false
        },
        maxtags: {
            type: [Number, String],
            required: false
        },
        field: {
            type: String,
            default: 'value'
        },
        autocomplete: Boolean,
        disabled: Boolean,
        ellipsis: Boolean,
        closable: {
            type: Boolean,
            default: true
        },
        confirmKeyCodes: {
            type: Array,
            default: () => [13, 188, 9]
        },
        removeOnKeys: {
            type: Array,
            default: () => [8]
        },
        allowNew: Boolean,
        onPasteSeparators: {
            type: Array,
            default: () => [',']
        },
        beforeAdding: {
            type: Function,
            default: () => true
        },
        allowDuplicates: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            tags: this.value || [],
            newTag: '',
            _elementRef: 'input',
            _isTaginput: true
        }
    },
    computed: {
        rootClasses() {
            return {
                'is-expanded': this.expanded
            }
        },

        containerClasses() {
            return {
                'is-focused': this.isFocused,
                'is-focusable': this.hasInput
            }
        },

        valueLength() {
            return this.newTag.trim().length
        },

        defaultSlotName() {
            return this.hasDefaultSlot ? 'default' : 'dontrender'
        },

        emptySlotName() {
            return this.hasEmptySlot ? 'empty' : 'dontrender'
        },

        headerSlotName() {
            return this.hasHeaderSlot ? 'header' : 'dontrender'
        },

        hasDefaultSlot() {
            return !!this.$scopedSlots.default
        },

        hasEmptySlot() {
            return !!this.$slots.empty
        },

        hasHeaderSlot() {
            return !!this.$slots.header
        },

        /**
         * Show the input field if a maxtags hasn't been set or reached.
         */
        hasInput() {
            return this.maxtags == null || this.tagsLength < this.maxtags
        },

        tagsLength() {
            return this.tags.length
        },

        /**
         * If Taginput has onPasteSeparators prop,
         * returning new RegExp used to split pasted string.
         */
        separatorsAsRegExp() {
            const sep = this.onPasteSeparators

            return sep.length ? new RegExp(sep.map((s) => {
                return s ? s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') : null
            }).join('|'), 'g') : null
        }
    },
    watch: {
        /**
         * When v-model is changed set internal value.
         */
        value(value) {
            this.tags = value
        },

        newTag(value) {
            this.$emit('typing', value.trim())
        },

        hasInput() {
            if (!this.hasInput) this.onBlur()
        }
    },
    methods: {
        addTag(tag) {
            const tagToAdd = tag || this.newTag.trim()

            if (tagToAdd) {
                if (!this.autocomplete) {
                    const reg = this.separatorsAsRegExp
                    if (reg && tagToAdd.match(reg)) {
                        tagToAdd.split(reg)
                            .map((t) => t.trim())
                            .filter((t) => t.length !== 0)
                            .map(this.addTag)
                        return
                    }
                }

                // Add the tag input if it is not blank
                // or previously added (if not allowDuplicates).
                const add = !this.allowDuplicates ? this.tags.indexOf(tagToAdd) === -1 : true
                if (add && this.beforeAdding(tagToAdd)) {
                    this.tags.push(tagToAdd)
                    this.$emit('input', this.tags)
                    this.$emit('add', tagToAdd)
                }
            }

            this.newTag = ''
        },

        getNormalizedTagText(tag) {
            if (typeof tag === 'object') {
                return Object(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["a" /* getValueByPath */])(tag, this.field)
            }

            return tag
        },

        customOnBlur($event) {
            // Add tag on-blur if not select only
            if (!this.autocomplete) this.addTag()

            this.onBlur($event)
        },

        onSelect(option) {
            if (!option) return

            this.addTag(option)
            this.$nextTick(() => {
                this.newTag = ''
            })
        },

        removeTag(index) {
            var tag = this.tags.splice(index, 1)[0]
            this.$emit('input', this.tags)
            this.$emit('remove', tag)
            return tag
        },

        removeLastTag() {
            if (this.tagsLength > 0) {
                this.removeTag(this.tagsLength - 1)
            }
        },

        keydown(event) {
            if (this.removeOnKeys.indexOf(event.keyCode) !== -1 && !this.newTag.length) {
                this.removeLastTag()
            }
            // Stop if is to accept select only
            if (this.autocomplete && !this.allowNew) return

            if (this.confirmKeyCodes.indexOf(event.keyCode) >= 0) {
                event.preventDefault()
                this.addTag()
            }
        }
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/buefy/src/components/autocomplete/Autocomplete.vue?vue&type=template&id=052068b2&":
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
      staticClass: "autocomplete control",
      class: { "is-expanded": _vm.expanded }
    },
    [
      _c(
        "b-input",
        _vm._b(
          {
            ref: "input",
            attrs: {
              size: _vm.size,
              loading: _vm.loading,
              rounded: _vm.rounded,
              icon: _vm.icon,
              "icon-pack": _vm.iconPack,
              maxlength: _vm.maxlength,
              autocomplete: "off"
            },
            on: { focus: _vm.focused, blur: _vm.onBlur },
            nativeOn: {
              keyup: function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "esc", 27, $event.key, [
                    "Esc",
                    "Escape"
                  ])
                ) {
                  return null
                }
                $event.preventDefault()
                _vm.isActive = false
              },
              keydown: [
                function($event) {
                  if (
                    !("button" in $event) &&
                    _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")
                  ) {
                    return null
                  }
                  return _vm.tabPressed($event)
                },
                function($event) {
                  if (
                    !("button" in $event) &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  $event.preventDefault()
                  return _vm.enterPressed($event)
                },
                function($event) {
                  if (
                    !("button" in $event) &&
                    _vm._k($event.keyCode, "up", 38, $event.key, [
                      "Up",
                      "ArrowUp"
                    ])
                  ) {
                    return null
                  }
                  $event.preventDefault()
                  _vm.keyArrows("up")
                },
                function($event) {
                  if (
                    !("button" in $event) &&
                    _vm._k($event.keyCode, "down", 40, $event.key, [
                      "Down",
                      "ArrowDown"
                    ])
                  ) {
                    return null
                  }
                  $event.preventDefault()
                  _vm.keyArrows("down")
                }
              ]
            },
            model: {
              value: _vm.newValue,
              callback: function($$v) {
                _vm.newValue = $$v
              },
              expression: "newValue"
            }
          },
          "b-input",
          _vm.$attrs,
          false
        )
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value:
                  _vm.isActive &&
                  (_vm.data.length > 0 ||
                    _vm.hasEmptySlot ||
                    _vm.hasHeaderSlot),
                expression:
                  "isActive && (data.length > 0 || hasEmptySlot || hasHeaderSlot)"
              }
            ],
            ref: "dropdown",
            staticClass: "dropdown-menu",
            class: { "is-opened-top": !_vm.isListInViewportVertically }
          },
          [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.isActive,
                    expression: "isActive"
                  }
                ],
                staticClass: "dropdown-content"
              },
              [
                _vm.hasHeaderSlot
                  ? _c(
                      "div",
                      { staticClass: "dropdown-item" },
                      [_vm._t("header")],
                      2
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm._l(_vm.data, function(option, index) {
                  return _c(
                    "a",
                    {
                      key: index,
                      staticClass: "dropdown-item",
                      class: { "is-hovered": option === _vm.hovered },
                      on: {
                        click: function($event) {
                          _vm.setSelected(option)
                        }
                      }
                    },
                    [
                      _vm.hasDefaultSlot
                        ? _vm._t("default", null, {
                            option: option,
                            index: index
                          })
                        : _c("span", [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.getValue(option, true)) +
                                "\n                    "
                            )
                          ])
                    ],
                    2
                  )
                }),
                _vm._v(" "),
                _vm.data.length === 0 && _vm.hasEmptySlot
                  ? _c(
                      "div",
                      { staticClass: "dropdown-item is-disabled" },
                      [_vm._t("empty")],
                      2
                    )
                  : _vm._e()
              ],
              2
            )
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/buefy/src/components/icon/Icon.vue?vue&type=template&id=0f5a9852&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", { staticClass: "icon", class: [_vm.newType, _vm.size] }, [
    _c("i", {
      class: [_vm.newPack, _vm.newIcon, _vm.newCustomSize, _vm.customClass]
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/buefy/src/components/input/Input.vue?vue&type=template&id=3a0ea348&":
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
    { staticClass: "control", class: _vm.rootClasses },
    [
      _vm.type !== "textarea"
        ? _c(
            "input",
            _vm._b(
              {
                ref: "input",
                staticClass: "input",
                class: [_vm.inputClasses, _vm.customClass],
                attrs: {
                  type: _vm.newType,
                  autocomplete: _vm.newAutocomplete,
                  maxlength: _vm.maxlength
                },
                domProps: { value: _vm.newValue },
                on: { input: _vm.onInput, blur: _vm.onBlur, focus: _vm.onFocus }
              },
              "input",
              _vm.$attrs,
              false
            )
          )
        : _c(
            "textarea",
            _vm._b(
              {
                ref: "textarea",
                staticClass: "textarea",
                class: [_vm.inputClasses, _vm.customClass],
                attrs: { maxlength: _vm.maxlength },
                domProps: { value: _vm.newValue },
                on: { input: _vm.onInput, blur: _vm.onBlur, focus: _vm.onFocus }
              },
              "textarea",
              _vm.$attrs,
              false
            )
          ),
      _vm._v(" "),
      _vm.icon
        ? _c("b-icon", {
            staticClass: "is-left",
            attrs: { icon: _vm.icon, pack: _vm.iconPack, size: _vm.iconSize }
          })
        : _vm._e(),
      _vm._v(" "),
      !_vm.loading && (_vm.passwordReveal || _vm.statusType)
        ? _c("b-icon", {
            staticClass: "is-right",
            class: { "is-clickable": _vm.passwordReveal },
            attrs: {
              icon: _vm.passwordReveal
                ? _vm.passwordVisibleIcon
                : _vm.statusTypeIcon,
              pack: _vm.iconPack,
              size: _vm.iconSize,
              type: !_vm.passwordReveal ? _vm.statusType : "is-primary",
              both: ""
            },
            nativeOn: {
              click: function($event) {
                return _vm.togglePasswordVisibility($event)
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.maxlength && _vm.hasCounter && _vm.type !== "number"
        ? _c(
            "small",
            {
              staticClass: "help counter",
              class: { "is-invisible": !_vm.isFocused }
            },
            [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.valueLength) +
                  " / " +
                  _vm._s(_vm.maxlength) +
                  "\n    "
              )
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/buefy/src/components/taginput/Taginput.vue?vue&type=template&id=641fc832&":
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
    { staticClass: "taginput control", class: _vm.rootClasses },
    [
      _c(
        "div",
        {
          staticClass: "taginput-container",
          class: [_vm.statusType, _vm.size, _vm.containerClasses],
          attrs: { disabled: _vm.disabled },
          on: {
            click: function($event) {
              _vm.hasInput && _vm.focus($event)
            }
          }
        },
        [
          _vm._l(_vm.tags, function(tag, index) {
            return _c(
              "b-tag",
              {
                key: index,
                attrs: {
                  type: _vm.type,
                  size: _vm.size,
                  rounded: _vm.rounded,
                  attached: _vm.attached,
                  tabstop: false,
                  disabled: _vm.disabled,
                  ellipsis: _vm.ellipsis,
                  closable: _vm.closable
                },
                on: {
                  close: function($event) {
                    _vm.removeTag(index)
                  }
                }
              },
              [
                _vm._v(
                  "\n          " +
                    _vm._s(_vm.getNormalizedTagText(tag)) +
                    "\n        "
                )
              ]
            )
          }),
          _vm._v(" "),
          _vm.hasInput
            ? _c(
                "b-autocomplete",
                _vm._b(
                  {
                    ref: "autocomplete",
                    attrs: {
                      data: _vm.data,
                      field: _vm.field,
                      icon: _vm.icon,
                      "icon-pack": _vm.iconPack,
                      maxlength: _vm.maxlength,
                      "has-counter": false,
                      size: _vm.size,
                      disabled: _vm.disabled,
                      loading: _vm.loading,
                      "keep-first": !_vm.allowNew
                    },
                    on: {
                      focus: _vm.onFocus,
                      blur: _vm.customOnBlur,
                      select: _vm.onSelect
                    },
                    nativeOn: {
                      keydown: function($event) {
                        return _vm.keydown($event)
                      }
                    },
                    scopedSlots: _vm._u([
                      {
                        key: _vm.defaultSlotName,
                        fn: function(props) {
                          return [
                            _vm._t("default", null, {
                              option: props.option,
                              index: props.index
                            })
                          ]
                        }
                      }
                    ]),
                    model: {
                      value: _vm.newTag,
                      callback: function($$v) {
                        _vm.newTag = $$v
                      },
                      expression: "newTag"
                    }
                  },
                  "b-autocomplete",
                  _vm.$attrs,
                  false
                ),
                [
                  _c(
                    "template",
                    { slot: _vm.headerSlotName },
                    [_vm._t("header")],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "template",
                    { slot: _vm.emptySlotName },
                    [_vm._t("empty")],
                    2
                  )
                ],
                2
              )
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _vm.maxtags || _vm.maxlength
        ? _c(
            "p",
            { staticClass: "help counter" },
            [
              _vm.maxlength && _vm.valueLength > 0
                ? [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.valueLength) +
                        " / " +
                        _vm._s(_vm.maxlength) +
                        "\n        "
                    )
                  ]
                : _vm.maxtags
                  ? [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.tagsLength) +
                          " / " +
                          _vm._s(_vm.maxtags) +
                          "\n        "
                      )
                    ]
                  : _vm._e()
            ],
            2
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/TagInput.vue?vue&type=template&id=7e5a3827&":
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
    { staticClass: "taginput control", class: _vm.rootClasses },
    [
      _c(
        "div",
        {
          staticClass: "taginput-container",
          class: [_vm.statusType, _vm.size, _vm.containerClasses],
          attrs: { disabled: _vm.disabled },
          on: {
            click: function($event) {
              _vm.hasInput && _vm.focus($event)
            }
          }
        },
        [
          _c(
            "draggable",
            {
              on: { change: _vm.onDrag },
              model: {
                value: _vm.tags,
                callback: function($$v) {
                  _vm.tags = $$v
                },
                expression: "tags"
              }
            },
            _vm._l(_vm.tags, function(tag, index) {
              return _c(
                "alg-tag",
                {
                  key: index,
                  attrs: {
                    type: _vm.type,
                    size: _vm.size,
                    rounded: _vm.rounded,
                    "text-color":
                      typeof tag === "string" ? "inherit" : "invert",
                    "background-color":
                      typeof tag === "string" ? null : tag.colour,
                    attached: _vm.attached,
                    tabstop: false,
                    disabled: _vm.disabled,
                    ellipsis: _vm.ellipsis,
                    closable: _vm.closable
                  },
                  on: {
                    close: function($event) {
                      _vm.removeTag(index)
                    }
                  }
                },
                [
                  _c("span", {
                    domProps: {
                      innerHTML: _vm._s(_vm.getNormalizedTagText(tag))
                    },
                    on: {
                      click: function($event) {
                        _vm.tagClicked(tag)
                      }
                    }
                  })
                ]
              )
            }),
            1
          ),
          _vm._v(" "),
          _vm.hasInput
            ? _c(
                "b-autocomplete",
                _vm._b(
                  {
                    ref: "autocomplete",
                    attrs: {
                      data: _vm.data,
                      field: _vm.field,
                      icon: _vm.icon,
                      "icon-pack": _vm.iconPack,
                      maxlength: _vm.maxlength,
                      "has-counter": false,
                      size: _vm.size,
                      disabled: _vm.disabled,
                      loading: _vm.loading,
                      "keep-first": !_vm.allowNew
                    },
                    on: {
                      focus: _vm.onFocus,
                      blur: _vm.customOnBlur,
                      select: _vm.onSelect
                    },
                    nativeOn: {
                      keydown: function($event) {
                        return _vm.keydown($event)
                      }
                    },
                    scopedSlots: _vm._u([
                      {
                        key: _vm.defaultSlotName,
                        fn: function(props) {
                          return [
                            _vm._t("default", null, {
                              option: props.option,
                              index: props.index
                            })
                          ]
                        }
                      }
                    ]),
                    model: {
                      value: _vm.newTag,
                      callback: function($$v) {
                        _vm.newTag = $$v
                      },
                      expression: "newTag"
                    }
                  },
                  "b-autocomplete",
                  _vm.$attrs,
                  false
                ),
                [
                  _c(
                    "template",
                    { slot: _vm.headerSlotName },
                    [_vm._t("header")],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "template",
                    { slot: _vm.emptySlotName },
                    [_vm._t("empty")],
                    2
                  )
                ],
                2
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _vm.maxtags || _vm.maxlength
        ? _c(
            "p",
            { staticClass: "help counter" },
            [
              _vm.maxlength && _vm.valueLength > 0
                ? [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.valueLength) +
                        " / " +
                        _vm._s(_vm.maxlength) +
                        "\n        "
                    )
                  ]
                : _vm.maxtags
                  ? [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.tagsLength) +
                          " / " +
                          _vm._s(_vm.maxtags) +
                          "\n        "
                      )
                    ]
                  : _vm._e()
            ],
            2
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/forms/TagInput.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TagInput_vue_vue_type_template_id_7e5a3827___ = __webpack_require__("./resources/assets/js/components/forms/TagInput.vue?vue&type=template&id=7e5a3827&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TagInput_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/forms/TagInput.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__TagInput_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__TagInput_vue_vue_type_template_id_7e5a3827___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__TagInput_vue_vue_type_template_id_7e5a3827___["b" /* staticRenderFns */],
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
      api.createRecord('7e5a3827', component.options)
    } else {
      api.reload('7e5a3827', component.options)
    }
    module.hot.accept("./TagInput.vue?vue&type=template&id=7e5a3827&", function () {
      api.rerender('7e5a3827', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/forms/TagInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/forms/TagInput.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/TagInput.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/forms/TagInput.vue?vue&type=template&id=7e5a3827&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_template_id_7e5a3827___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/TagInput.vue?vue&type=template&id=7e5a3827&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_template_id_7e5a3827___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_template_id_7e5a3827___["b"]; });

>>>>>>> Start working on initial change

/***/ })

});