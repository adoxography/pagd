webpackJsonp([1],{

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
//
//
//
//
//
//
//
//
//
//
//
//
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
 * TagInput component
 *
 * Subclass of Buefy's Taginput component, which adds some extra functionality:
 *  - If the component is dealing with objects, new tags that are inserted will
 *    automatically be converted into objects
 *  - Tags can be reordered by clicking and dragging
 *  - A callback function can be provided for when a tag is clicked (and not
 *    dragged)
 *  - Uses a subclassed version of Buefy's Tag component
 *  - Wraps the tag text into a slot to allow HTML
 */

/* harmony default export */ __webpack_exports__["a"] = ({
  extends: __WEBPACK_IMPORTED_MODULE_0_buefy_src_components_taginput_Taginput_vue__["a" /* default */],
  components: {
    draggable: __WEBPACK_IMPORTED_MODULE_1_vuedraggable___default.a
  },
  props: ['onClickTag'],
  watch: {
    /**
     * Watch the tags object for new strings
     */
    tags: function tags(newTags) {
      var _this = this;

      // If the component doesn't allow new elements, isn't dealing with
      // objects, or there are no strings in the tags, exit early
      if (!this.allowNew || !this.field || newTags.every(function (tag) {
        return typeof tag !== 'string';
      })) {
        return;
      } // Convert any strings in the tags to objects


      this.tags = newTags.map(function (tag) {
        if (typeof tag !== 'string') {
          return tag;
        }

        var replacementTag = {};
        replacementTag[_this.field] = tag;
        return replacementTag;
      });
      this.$emit('input', this.tags);
    }
  },
  methods: {
    /**
     * Callback for when tags have been dragged
     *
     * Emits an input event to let the parent component know it needs to update
     * its value
     */
    onDrag: function onDrag() {
      this.$emit('input', this.tags);
    },

    /**
     * Callback for when tags have been clicked
     *
     * Calls a user defined onClickTag function if available and emits an input
     * event.
     *
     * @param tag  The tag object associated with the tag that was clicked on
     */
    tagClicked: function tagClicked(tag) {
      if (this.onClickTag) {
        this.onClickTag(tag);
        console.log(tag);
        this.$emit('input', this.tags);
      }
    },

    /**
     * Shadows the parent's keydown method to allow keys in confirmKeyCodes to
     * pass through if the newTag is empty - esp. Enter and Tab
     *
     * Most of the method is unchanged from the parent, other than modifications
     * to fit the project's coding style.
     */
    keydown: function keydown(event) {
      if (this.removeOnKeys.indexOf(event.keyCode) !== -1 && !this.newTag.length) {
        this.removeLastTag();
      } // Stop if is to accept select only


      if (this.autocomplete && !this.allowNew) {
        return;
      }

      if (this.confirmKeyCodes.indexOf(event.keyCode) >= 0 && this.newTag.length) {
        event.preventDefault();
        this.addTag();
      }
    }
  }
});

/***/ }),

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


/***/ }),

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

/***/ "./node_modules/buefy/src/components/taginput/Taginput.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Taginput_vue_vue_type_template_id_641fc832___ = __webpack_require__("./node_modules/buefy/src/components/taginput/Taginput.vue?vue&type=template&id=641fc832&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Taginput_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/buefy/src/components/taginput/Taginput.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Taginput_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Taginput_vue_vue_type_template_id_641fc832___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Taginput_vue_vue_type_template_id_641fc832___["b" /* staticRenderFns */],
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

/***/ "./node_modules/sortablejs/Sortable.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */

(function sortableModule(factory) {
	"use strict";

	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	else if (typeof module != "undefined" && typeof module.exports != "undefined") {
		module.exports = factory();
	}
	else {
		/* jshint sub:true */
		window["Sortable"] = factory();
	}
})(function sortableFactory() {
	"use strict";

	if (typeof window === "undefined" || !window.document) {
		return function sortableError() {
			throw new Error("Sortable.js requires a window with a document");
		};
	}

	var dragEl,
		parentEl,
		ghostEl,
		cloneEl,
		rootEl,
		nextEl,
		lastDownEl,

		scrollEl,
		scrollParentEl,
		scrollCustomFn,

		oldIndex,
		newIndex,

		activeGroup,
		putSortable,

		autoScrolls = [],
		scrolling = false,

		awaitingDragStarted = false,
		ignoreNextClick = false,
		sortables = [],

		pointerElemChangedInterval,
		lastPointerElemX,
		lastPointerElemY,

		tapEvt,
		touchEvt,

		moved,


		lastTarget,
		lastDirection,
		pastFirstInvertThresh = false,
		isCircumstantialInvert = false,
		lastMode, // 'swap' or 'insert'

		targetMoveDistance,


		forRepaintDummy,
		realDragElRect, // dragEl rect after current animation

		/** @const */
		R_SPACE = /\s+/g,

		expando = 'Sortable' + (new Date).getTime(),

		win = window,
		document = win.document,
		parseInt = win.parseInt,
		setTimeout = win.setTimeout,

		$ = win.jQuery || win.Zepto,
		Polymer = win.Polymer,

		captureMode = {
			capture: false,
			passive: false
		},

		IE11OrLess = !!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie|iemobile)/i),
		Edge = !!navigator.userAgent.match(/Edge/i),
		// FireFox = !!navigator.userAgent.match(/firefox/i),

		CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',

		// This will not pass for IE9, because IE9 DnD only works on anchors
		supportDraggable = ('draggable' in document.createElement('div')),

		supportCssPointerEvents = (function() {
			// false when <= IE11
			if (IE11OrLess) {
				return false;
			}
			var el = document.createElement('x');
			el.style.cssText = 'pointer-events:auto';
			return el.style.pointerEvents === 'auto';
		})(),

		_silent = false,
		_alignedSilent = false,

		abs = Math.abs,
		min = Math.min,

		savedInputChecked = [],

		_detectDirection = function(el, options) {
			var elCSS = _css(el),
				elWidth = parseInt(elCSS.width),
				child1 = _getChild(el, 0, options),
				child2 = _getChild(el, 1, options),
				firstChildCSS = child1 && _css(child1),
				secondChildCSS = child2 && _css(child2),
				firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + _getRect(child1).width,
				secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + _getRect(child2).width;
			if (elCSS.display === 'flex') {
				return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse'
				? 'vertical' : 'horizontal';
			}
			return (child1 &&
				(
					firstChildCSS.display === 'block' ||
					firstChildCSS.display === 'flex' ||
					firstChildCSS.display === 'table' ||
					firstChildCSS.display === 'grid' ||
					firstChildWidth >= elWidth &&
					elCSS[CSSFloatProperty] === 'none' ||
					child2 &&
					elCSS[CSSFloatProperty] === 'none' &&
					firstChildWidth + secondChildWidth > elWidth
				) ?
				'vertical' : 'horizontal'
			);
		},

		/**
		 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
		 * @param  {Number} x      X position
		 * @param  {Number} y      Y position
		 * @return {HTMLElement}   Element of the first found nearest Sortable
		 */
		_detectNearestEmptySortable = function(x, y) {
			for (var i = 0; i < sortables.length; i++) {
				if (sortables[i].children.length) continue;

				var rect = _getRect(sortables[i]),
					threshold = sortables[i][expando].options.emptyInsertThreshold,
					insideHorizontally = x >= (rect.left - threshold) && x <= (rect.right + threshold),
					insideVertically = y >= (rect.top - threshold) && y <= (rect.bottom + threshold);

				if (insideHorizontally && insideVertically) {
					return sortables[i];
				}
			}
		},

		_isClientInRowColumn = function(x, y, el, axis, options) {
			var targetRect = _getRect(el),
				targetS1Opp = axis === 'vertical' ? targetRect.left : targetRect.top,
				targetS2Opp = axis === 'vertical' ? targetRect.right : targetRect.bottom,
				mouseOnOppAxis = axis === 'vertical' ? x : y;

			return targetS1Opp < mouseOnOppAxis && mouseOnOppAxis < targetS2Opp;
		},

		_isElInRowColumn = function(el1, el2, axis) {
			var el1Rect = el1 === dragEl && realDragElRect || _getRect(el1),
				el2Rect = el2 === dragEl && realDragElRect || _getRect(el2),
				el1S1Opp = axis === 'vertical' ? el1Rect.left : el1Rect.top,
				el1S2Opp = axis === 'vertical' ? el1Rect.right : el1Rect.bottom,
				el1OppLength = axis === 'vertical' ? el1Rect.width : el1Rect.height,
				el2S1Opp = axis === 'vertical' ? el2Rect.left : el2Rect.top,
				el2S2Opp = axis === 'vertical' ? el2Rect.right : el2Rect.bottom,
				el2OppLength = axis === 'vertical' ? el2Rect.width : el2Rect.height;

			return (
				el1S1Opp === el2S1Opp ||
				el1S2Opp === el2S2Opp ||
				(el1S1Opp + el1OppLength / 2) === (el2S1Opp + el2OppLength / 2)
			);
		},

		_getParentAutoScrollElement = function(el, includeSelf) {
			// skip to window
			if (!el || !el.getBoundingClientRect) return win;

			var elem = el;
			var gotSelf = false;
			do {
				// we don't need to get elem css if it isn't even overflowing in the first place (performance)
				if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
					var elemCSS = _css(elem);
					if (
						elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') ||
						elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')
					) {
						if (!elem || !elem.getBoundingClientRect || elem === document.body) return win;

						if (gotSelf || includeSelf) return elem;
						gotSelf = true;
					}
				}
			/* jshint boss:true */
			} while (elem = elem.parentNode);

			return win;
		},

		_autoScroll = _throttle(function (/**Event*/evt, /**Object*/options, /**HTMLElement*/rootEl, /**Boolean*/isFallback) {
			// Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
			if (options.scroll) {
				var _this = rootEl ? rootEl[expando] : window,
					sens = options.scrollSensitivity,
					speed = options.scrollSpeed,

					x = evt.clientX,
					y = evt.clientY,

					winWidth = window.innerWidth,
					winHeight = window.innerHeight,

					scrollThisInstance = false;

				// Detect scrollEl
				if (scrollParentEl !== rootEl) {
					_clearAutoScrolls();

					scrollEl = options.scroll;
					scrollCustomFn = options.scrollFn;

					if (scrollEl === true) {
						scrollEl = _getParentAutoScrollElement(rootEl, true);
						scrollParentEl = scrollEl;
					}
				}


				var layersOut = 0;
				var currentParent = scrollEl;
				do {
					var	el = currentParent,
						rect = _getRect(el),

						top = rect.top,
						bottom = rect.bottom,
						left = rect.left,
						right = rect.right,

						width = rect.width,
						height = rect.height,

						scrollWidth,
						scrollHeight,

						css,

						vx,
						vy,

						canScrollX,
						canScrollY,

						scrollPosX,
						scrollPosY;


					if (el !== win) {
						scrollWidth = el.scrollWidth;
						scrollHeight = el.scrollHeight;

						css = _css(el);

						canScrollX = width < scrollWidth && (css.overflowX === 'auto' || css.overflowX === 'scroll');
						canScrollY = height < scrollHeight && (css.overflowY === 'auto' || css.overflowY === 'scroll');

						scrollPosX = el.scrollLeft;
						scrollPosY = el.scrollTop;
					} else {
						scrollWidth = document.documentElement.scrollWidth;
						scrollHeight = document.documentElement.scrollHeight;

						css = _css(document.documentElement);

						canScrollX = width < scrollWidth && (css.overflowX === 'auto' || css.overflowX === 'scroll' || css.overflowX === 'visible');
						canScrollY = height < scrollHeight && (css.overflowY === 'auto' || css.overflowY === 'scroll' || css.overflowY === 'visible');

						scrollPosX = document.documentElement.scrollLeft;
						scrollPosY = document.documentElement.scrollTop;
					}

					vx = canScrollX && (abs(right - x) <= sens && (scrollPosX + width) < scrollWidth) - (abs(left - x) <= sens && !!scrollPosX);

					vy = canScrollY && (abs(bottom - y) <= sens && (scrollPosY + height) < scrollHeight) - (abs(top - y) <= sens && !!scrollPosY);


					if (!autoScrolls[layersOut]) {
						for (var i = 0; i <= layersOut; i++) {
							if (!autoScrolls[i]) {
								autoScrolls[i] = {};
							}
						}
					}

					if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
						autoScrolls[layersOut].el = el;
						autoScrolls[layersOut].vx = vx;
						autoScrolls[layersOut].vy = vy;

						clearInterval(autoScrolls[layersOut].pid);

						if (el && (vx != 0 || vy != 0)) {
							scrollThisInstance = true;
							/* jshint loopfunc:true */
							autoScrolls[layersOut].pid = setInterval((function () {
								// emulate drag over during autoscroll (fallback), emulating native DnD behaviour
								if (isFallback && this.layer === 0) {
									Sortable.active._emulateDragOver(true);
								}
								var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
								var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

								if ('function' === typeof(scrollCustomFn)) {
									if (scrollCustomFn.call(_this, scrollOffsetX, scrollOffsetY, evt, touchEvt, autoScrolls[this.layer].el) !== 'continue') {
										return;
									}
								}
								if (autoScrolls[this.layer].el === win) {
									win.scrollTo(win.pageXOffset + scrollOffsetX, win.pageYOffset + scrollOffsetY);
								} else {
									autoScrolls[this.layer].el.scrollTop += scrollOffsetY;
									autoScrolls[this.layer].el.scrollLeft += scrollOffsetX;
								}
							}).bind({layer: layersOut}), 24);
						}
					}
					layersOut++;
				} while (options.bubbleScroll && currentParent !== win && (currentParent = _getParentAutoScrollElement(currentParent, false)));
				scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
			}
		}, 30),

		_clearAutoScrolls = function () {
			autoScrolls.forEach(function(autoScroll) {
				clearInterval(autoScroll.pid);
			});
			autoScrolls = [];
		},

		_prepareGroup = function (options) {
			function toFn(value, pull) {
				return function(to, from, dragEl, evt) {
					var sameGroup = to.options.group.name &&
									from.options.group.name &&
									to.options.group.name === from.options.group.name;

					if (value == null && (pull || sameGroup)) {
						// Default pull value
						// Default pull and put value if same group
						return true;
					} else if (value == null || value === false) {
						return false;
					} else if (pull && value === 'clone') {
						return value;
					} else if (typeof value === 'function') {
						return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
					} else {
						var otherGroup = (pull ? to : from).options.group.name;

						return (value === true ||
						(typeof value === 'string' && value === otherGroup) ||
						(value.join && value.indexOf(otherGroup) > -1));
					}
				};
			}

			var group = {};
			var originalGroup = options.group;

			if (!originalGroup || typeof originalGroup != 'object') {
				originalGroup = {name: originalGroup};
			}

			group.name = originalGroup.name;
			group.checkPull = toFn(originalGroup.pull, true);
			group.checkPut = toFn(originalGroup.put);
			group.revertClone = originalGroup.revertClone;

			options.group = group;
		},

		_checkAlignment = function(evt) {
			if (!dragEl || !dragEl.parentNode) return;
			dragEl.parentNode[expando] && dragEl.parentNode[expando]._computeIsAligned(evt);
		},

		_isTrueParentSortable = function(el, target) {
			var trueParent = target;
			while (!trueParent[expando]) {
				trueParent = trueParent.parentNode;
			}

			return el === trueParent;
		},

		_artificalBubble = function(sortable, originalEvt, method) {
			// Artificial IE bubbling
			var nextParent = sortable.parentNode;
			while (nextParent && !nextParent[expando]) {
				nextParent = nextParent.parentNode;
			}

			if (nextParent) {
				nextParent[expando][method](_extend(originalEvt, {
					artificialBubble: true
				}));
			}
		},

		_hideGhostForTarget = function() {
			if (!supportCssPointerEvents && ghostEl) {
				_css(ghostEl, 'display', 'none');
			}
		},

		_unhideGhostForTarget = function() {
			if (!supportCssPointerEvents && ghostEl) {
				_css(ghostEl, 'display', '');
			}
		};


	// #1184 fix - Prevent click event on fallback if dragged but item not changed position
	document.addEventListener('click', function(evt) {
		if (ignoreNextClick) {
			evt.preventDefault();
			evt.stopPropagation && evt.stopPropagation();
			evt.stopImmediatePropagation && evt.stopImmediatePropagation();
			ignoreNextClick = false;
			return false;
		}
	}, true);

	var nearestEmptyInsertDetectEvent = function(evt) {
		if (dragEl) {
			var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

			if (nearest) {
				nearest[expando]._onDragOver({
					clientX: evt.clientX,
					clientY: evt.clientY,
					target: nearest,
					rootEl: nearest
				});
			}
		}
	};
	// We do not want this to be triggered if completed (bubbling canceled), so only define it here
	document.addEventListener('dragover', nearestEmptyInsertDetectEvent);
	document.addEventListener('mousemove', nearestEmptyInsertDetectEvent);

	/**
	 * @class  Sortable
	 * @param  {HTMLElement}  el
	 * @param  {Object}       [options]
	 */
	function Sortable(el, options) {
		if (!(el && el.nodeType && el.nodeType === 1)) {
			throw 'Sortable: `el` must be HTMLElement, not ' + {}.toString.call(el);
		}

		this.el = el; // root element
		this.options = options = _extend({}, options);


		// Export instance
		el[expando] = this;

		// Default options
		var defaults = {
			group: null,
			sort: true,
			disabled: false,
			store: null,
			handle: null,
			scroll: true,
			scrollSensitivity: 30,
			scrollSpeed: 10,
			bubbleScroll: true,
			draggable: /[uo]l/i.test(el.nodeName) ? 'li' : '>*',
			swapThreshold: 1, // percentage; 0 <= x <= 1
			invertSwap: false, // invert always
			invertedSwapThreshold: null, // will be set to same as swapThreshold if default
			removeCloneOnHide: true,
			direction: function() {
				return _detectDirection(el, this.options);
			},
			ghostClass: 'sortable-ghost',
			chosenClass: 'sortable-chosen',
			dragClass: 'sortable-drag',
			ignore: 'a, img',
			filter: null,
			preventOnFilter: true,
			animation: 0,
			easing: null,
			setData: function (dataTransfer, dragEl) {
				dataTransfer.setData('Text', dragEl.textContent);
			},
			dropBubble: false,
			dragoverBubble: false,
			dataIdAttr: 'data-id',
			delay: 0,
			touchStartThreshold: parseInt(window.devicePixelRatio, 10) || 1,
			forceFallback: false,
			fallbackClass: 'sortable-fallback',
			fallbackOnBody: false,
			fallbackTolerance: 0,
			fallbackOffset: {x: 0, y: 0},
			supportPointer: Sortable.supportPointer !== false && (
				('PointerEvent' in window) ||
				window.navigator && ('msPointerEnabled' in window.navigator) // microsoft
			),
			emptyInsertThreshold: 5
		};


		// Set default options
		for (var name in defaults) {
			!(name in options) && (options[name] = defaults[name]);
		}

		_prepareGroup(options);

		// Bind all private methods
		for (var fn in this) {
			if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
				this[fn] = this[fn].bind(this);
			}
		}

		// Setup drag mode
		this.nativeDraggable = options.forceFallback ? false : supportDraggable;

		// Bind events
		if (options.supportPointer) {
			_on(el, 'pointerdown', this._onTapStart);
		} else {
			_on(el, 'mousedown', this._onTapStart);
			_on(el, 'touchstart', this._onTapStart);
		}

		if (this.nativeDraggable) {
			_on(el, 'dragover', this);
			_on(el, 'dragenter', this);
		}

		sortables.push(this.el);

		// Restore sorting
		options.store && options.store.get && this.sort(options.store.get(this) || []);
	}

	Sortable.prototype = /** @lends Sortable.prototype */ {
		constructor: Sortable,

		_computeIsAligned: function(evt) {
			var target;

			if (ghostEl && !supportCssPointerEvents) {
				_hideGhostForTarget();
				target = document.elementFromPoint(evt.clientX, evt.clientY);
				_unhideGhostForTarget();
			} else {
				target = evt.target;
			}

			target = _closest(target, this.options.draggable, this.el, false);
			if (_alignedSilent) return;
			if (!dragEl || dragEl.parentNode !== this.el) return;

			var children = this.el.children;
			for (var i = 0; i < children.length; i++) {
				// Don't change for target in case it is changed to aligned before onDragOver is fired
				if (_closest(children[i], this.options.draggable, this.el, false) && children[i] !== target) {
					children[i].sortableMouseAligned = _isClientInRowColumn(evt.clientX, evt.clientY, children[i], this._getDirection(evt, null), this.options);
				}
			}
			// Used for nulling last target when not in element, nothing to do with checking if aligned
			if (!_closest(target, this.options.draggable, this.el, true)) {
				lastTarget = null;
			}

			_alignedSilent = true;
			setTimeout(function() {
				_alignedSilent = false;
			}, 30);

		},

		_getDirection: function(evt, target) {
			return (typeof this.options.direction === 'function') ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
		},

		_onTapStart: function (/** Event|TouchEvent */evt) {
			if (!evt.cancelable) return;

			var _this = this,
				el = this.el,
				options = this.options,
				preventOnFilter = options.preventOnFilter,
				type = evt.type,
				touch = evt.touches && evt.touches[0],
				target = (touch || evt).target,
				originalTarget = evt.target.shadowRoot && ((evt.path && evt.path[0]) || (evt.composedPath && evt.composedPath()[0])) || target,
				filter = options.filter,
				startIndex;

			_saveInputCheckedState(el);


			// IE: Calls events in capture mode if event element is nested. This ensures only correct element's _onTapStart goes through.
			// This process is also done in _onDragOver
			if (IE11OrLess && !evt.artificialBubble && !_isTrueParentSortable(el, target)) {
				return;
			}

			// Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
			if (dragEl) {
				return;
			}

			if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
				return; // only left button and enabled
			}

			// cancel dnd if original target is content editable
			if (originalTarget.isContentEditable) {
				return;
			}

			target = _closest(target, options.draggable, el, false);

			if (!target) {
				if (IE11OrLess) {
					_artificalBubble(el, evt, '_onTapStart');
				}
				return;
			}

			if (lastDownEl === target) {
				// Ignoring duplicate `down`
				return;
			}

			// Get the index of the dragged element within its parent
			startIndex = _index(target, options.draggable);

			// Check filter
			if (typeof filter === 'function') {
				if (filter.call(this, evt, target, this)) {
					_dispatchEvent(_this, originalTarget, 'filter', target, el, el, startIndex);
					preventOnFilter && evt.cancelable && evt.preventDefault();
					return; // cancel dnd
				}
			}
			else if (filter) {
				filter = filter.split(',').some(function (criteria) {
					criteria = _closest(originalTarget, criteria.trim(), el, false);

					if (criteria) {
						_dispatchEvent(_this, criteria, 'filter', target, el, el, startIndex);
						return true;
					}
				});

				if (filter) {
					preventOnFilter && evt.cancelable && evt.preventDefault();
					return; // cancel dnd
				}
			}

			if (options.handle && !_closest(originalTarget, options.handle, el, false)) {
				return;
			}

			// Prepare `dragstart`
			this._prepareDragStart(evt, touch, target, startIndex);
		},


		_handleAutoScroll: function(evt, fallback) {
			if (!dragEl || !this.options.scroll) return;
			var x = evt.clientX,
				y = evt.clientY,

				elem = document.elementFromPoint(x, y),
				_this = this;

			// IE does not seem to have native autoscroll,
			// Edge's autoscroll seems too conditional,
			// Firefox and Chrome are good
			if (fallback || Edge || IE11OrLess) {
				_autoScroll(evt, _this.options, elem, fallback);

				// Listener for pointer element change
				var ogElemScroller = _getParentAutoScrollElement(elem, true);
				if (
					scrolling &&
					(
						!pointerElemChangedInterval ||
						x !== lastPointerElemX ||
						y !== lastPointerElemY
					)
				) {

					pointerElemChangedInterval && clearInterval(pointerElemChangedInterval);
					// Detect for pointer elem change, emulating native DnD behaviour
					pointerElemChangedInterval = setInterval(function() {
						if (!dragEl) return;
						// could also check if scroll direction on newElem changes due to parent autoscrolling
						var newElem = _getParentAutoScrollElement(document.elementFromPoint(x, y), true);
						if (newElem !== ogElemScroller) {
							ogElemScroller = newElem;
							_clearAutoScrolls();
							_autoScroll(evt, _this.options, ogElemScroller, fallback);
						}
					}, 10);
					lastPointerElemX = x;
					lastPointerElemY = y;
				}

			} else {
				// if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
				if (!_this.options.bubbleScroll || _getParentAutoScrollElement(elem, true) === window) {
					_clearAutoScrolls();
					return;
				}
				_autoScroll(evt, _this.options, _getParentAutoScrollElement(elem, false), false);
			}
		},

		_prepareDragStart: function (/** Event */evt, /** Touch */touch, /** HTMLElement */target, /** Number */startIndex) {
			var _this = this,
				el = _this.el,
				options = _this.options,
				ownerDocument = el.ownerDocument,
				dragStartFn;

			if (target && !dragEl && (target.parentNode === el)) {
				rootEl = el;
				dragEl = target;
				parentEl = dragEl.parentNode;
				nextEl = dragEl.nextSibling;
				lastDownEl = target;
				activeGroup = options.group;
				oldIndex = startIndex;

				tapEvt = {
					target: dragEl,
					clientX: (touch || evt).clientX,
					clientY: (touch || evt).clientY
				};

				this._lastX = (touch || evt).clientX;
				this._lastY = (touch || evt).clientY;

				dragEl.style['will-change'] = 'all';
				// undo animation if needed
				dragEl.style.transition = '';
				dragEl.style.transform = '';

				dragStartFn = function () {
					// Delayed drag has been triggered
					// we can re-enable the events: touchmove/mousemove
					_this._disableDelayedDrag();

					// Make the element draggable
					dragEl.draggable = _this.nativeDraggable;

					// Bind the events: dragstart/dragend
					_this._triggerDragStart(evt, touch);

					// Drag start event
					_dispatchEvent(_this, rootEl, 'choose', dragEl, rootEl, rootEl, oldIndex);

					// Chosen item
					_toggleClass(dragEl, options.chosenClass, true);
				};

				// Disable "draggable"
				options.ignore.split(',').forEach(function (criteria) {
					_find(dragEl, criteria.trim(), _disableDraggable);
				});

				if (options.supportPointer) {
					_on(ownerDocument, 'pointerup', _this._onDrop);
					_on(ownerDocument, 'pointercancel', _this._onDrop);
				} else {
					_on(ownerDocument, 'mouseup', _this._onDrop);
					_on(ownerDocument, 'touchend', _this._onDrop);
					_on(ownerDocument, 'touchcancel', _this._onDrop);
				}

				if (options.delay) {
					// If the user moves the pointer or let go the click or touch
					// before the delay has been reached:
					// disable the delayed drag
					_on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchend', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
					_on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
					_on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
					options.supportPointer && _on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);

					_this._dragStartTimer = setTimeout(dragStartFn, options.delay);
				} else {
					dragStartFn();
				}
			}
		},

		_delayedDragTouchMoveHandler: function (/** TouchEvent|PointerEvent **/e) {
			var touch = e.touches ? e.touches[0] : e;
			if (min(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY))
					>= this.options.touchStartThreshold
			) {
				this._disableDelayedDrag();
			}
		},

		_disableDelayedDrag: function () {
			var ownerDocument = this.el.ownerDocument;

			clearTimeout(this._dragStartTimer);
			_off(ownerDocument, 'mouseup', this._disableDelayedDrag);
			_off(ownerDocument, 'touchend', this._disableDelayedDrag);
			_off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
			_off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
			_off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
			_off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
		},

		_triggerDragStart: function (/** Event */evt, /** Touch */touch) {
			touch = touch || (evt.pointerType == 'touch' ? evt : null);

			if (!this.nativeDraggable || touch) {
				if (this.options.supportPointer) {
					_on(document, 'pointermove', this._onTouchMove);
				} else if (touch) {
					_on(document, 'touchmove', this._onTouchMove);
				} else {
					_on(document, 'mousemove', this._onTouchMove);
				}
			} else {
				_on(dragEl, 'dragend', this);
				_on(rootEl, 'dragstart', this._onDragStart);
			}

			try {
				if (document.selection) {
					// Timeout neccessary for IE9
					_nextTick(function () {
						document.selection.empty();
					});
				} else {
					window.getSelection().removeAllRanges();
				}
			} catch (err) {
			}
		},

		_dragStarted: function (fallback) {
			awaitingDragStarted = false;
			if (rootEl && dragEl) {
				if (this.nativeDraggable) {
					_on(document, 'dragover', this._handleAutoScroll);
					_on(document, 'dragover', _checkAlignment);
				}
				var options = this.options;

				// Apply effect
				!fallback && _toggleClass(dragEl, options.dragClass, false);
				_toggleClass(dragEl, options.ghostClass, true);

				// In case dragging an animated element
				_css(dragEl, 'transform', '');

				Sortable.active = this;

				fallback && this._appendGhost();

				// Drag start event
				_dispatchEvent(this, rootEl, 'start', dragEl, rootEl, rootEl, oldIndex);
			} else {
				this._nulling();
			}
		},

		_emulateDragOver: function (bypassLastTouchCheck) {
			if (touchEvt) {
				if (this._lastX === touchEvt.clientX && this._lastY === touchEvt.clientY && !bypassLastTouchCheck) {
					return;
				}
				this._lastX = touchEvt.clientX;
				this._lastY = touchEvt.clientY;

				_hideGhostForTarget();

				var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
				var parent = target;

				while (target && target.shadowRoot) {
					target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
					parent = target;
				}

				if (parent) {
					do {
						if (parent[expando]) {
							var inserted;

							inserted = parent[expando]._onDragOver({
								clientX: touchEvt.clientX,
								clientY: touchEvt.clientY,
								target: target,
								rootEl: parent
							});

							if (inserted && !this.options.dragoverBubble) {
								break;
							}
						}

						target = parent; // store last element
					}
					/* jshint boss:true */
					while (parent = parent.parentNode);
				}
				dragEl.parentNode[expando]._computeIsAligned(touchEvt);

				_unhideGhostForTarget();
			}
		},


		_onTouchMove: function (/**TouchEvent*/evt) {
			if (tapEvt) {
				if (!evt.cancelable) return;
				var	options = this.options,
					fallbackTolerance = options.fallbackTolerance,
					fallbackOffset = options.fallbackOffset,
					touch = evt.touches ? evt.touches[0] : evt,
					matrix = ghostEl && _matrix(ghostEl),
					scaleX = ghostEl && matrix && matrix.a,
					scaleY = ghostEl && matrix && matrix.d,
					dx = ((touch.clientX - tapEvt.clientX) + fallbackOffset.x) / (scaleX ? scaleX : 1),
					dy = ((touch.clientY - tapEvt.clientY) + fallbackOffset.y) / (scaleY ? scaleY : 1),
					translate3d = evt.touches ? 'translate3d(' + dx + 'px,' + dy + 'px,0)' : 'translate(' + dx + 'px,' + dy + 'px)';


				// only set the status to dragging, when we are actually dragging
				if (!Sortable.active && !awaitingDragStarted) {
					if (fallbackTolerance &&
						min(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY)) < fallbackTolerance
					) {
						return;
					}
					this._onDragStart(evt, true);
				}

				this._handleAutoScroll(touch, true);


				moved = true;
				touchEvt = touch;


				_css(ghostEl, 'webkitTransform', translate3d);
				_css(ghostEl, 'mozTransform', translate3d);
				_css(ghostEl, 'msTransform', translate3d);
				_css(ghostEl, 'transform', translate3d);

				evt.cancelable && evt.preventDefault();
			}
		},

		_appendGhost: function () {
			if (!ghostEl) {
				var rect = _getRect(dragEl, this.options.fallbackOnBody ? document.body : rootEl, true),
					css = _css(dragEl),
					options = this.options;

				ghostEl = dragEl.cloneNode(true);

				_toggleClass(ghostEl, options.ghostClass, false);
				_toggleClass(ghostEl, options.fallbackClass, true);
				_toggleClass(ghostEl, options.dragClass, true);

				_css(ghostEl, 'box-sizing', 'border-box');
				_css(ghostEl, 'margin', 0);
				_css(ghostEl, 'top', rect.top);
				_css(ghostEl, 'left', rect.left);
				_css(ghostEl, 'width', rect.width);
				_css(ghostEl, 'height', rect.height);
				_css(ghostEl, 'opacity', '0.8');
				_css(ghostEl, 'position', 'fixed');
				_css(ghostEl, 'zIndex', '100000');
				_css(ghostEl, 'pointerEvents', 'none');

				options.fallbackOnBody && document.body.appendChild(ghostEl) || rootEl.appendChild(ghostEl);
			}
		},

		_onDragStart: function (/**Event*/evt, /**boolean*/fallback) {
			var _this = this;
			var dataTransfer = evt.dataTransfer;
			var options = _this.options;

			// Setup clone
			cloneEl = _clone(dragEl);

			cloneEl.draggable = false;
			cloneEl.style['will-change'] = '';

			this._hideClone();

			_toggleClass(cloneEl, _this.options.chosenClass, false);


			// #1143: IFrame support workaround
			_this._cloneId = _nextTick(function () {
				if (!_this.options.removeCloneOnHide) {
					rootEl.insertBefore(cloneEl, dragEl);
				}
				_dispatchEvent(_this, rootEl, 'clone', dragEl);
			});


			!fallback && _toggleClass(dragEl, options.dragClass, true);

			// Set proper drop events
			if (fallback) {
				ignoreNextClick = true;
				_this._loopId = setInterval(_this._emulateDragOver, 50);
			} else {
				// Undo what was set in _prepareDragStart before drag started
				_off(document, 'mouseup', _this._onDrop);
				_off(document, 'touchend', _this._onDrop);
				_off(document, 'touchcancel', _this._onDrop);
				_off(document, 'pointercancel', _this._onDrop);

				if (dataTransfer) {
					dataTransfer.effectAllowed = 'move';
					options.setData && options.setData.call(_this, dataTransfer, dragEl);
				}

				_on(document, 'drop', _this);

				// #1276 fix:
				_css(dragEl, 'transform', 'translateZ(0)');
			}

			awaitingDragStarted = true;

			_this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback));
			_on(document, 'selectstart', _this);
		},

		// Returns true - if no further action is needed (either inserted or another condition)
		_onDragOver: function (/**Event*/evt) {
			var el = this.el,
				target = evt.target,
				dragRect,
				targetRect,
				revert,
				options = this.options,
				group = options.group,
				activeSortable = Sortable.active,
				isOwner = (activeGroup === group),
				canSort = options.sort,
				_this = this;

			if (_silent) return;

			// IE event order fix
			if (IE11OrLess && !evt.rootEl && !evt.artificialBubble && !_isTrueParentSortable(el, target)) {
				return;
			}

			// Return invocation when no further action is needed in another sortable
			function completed() {
				if (activeSortable) {
					// Set ghost class to new sortable's ghost class
					_toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
					_toggleClass(dragEl, options.ghostClass, true);
				}

				if (putSortable !== _this && _this !== Sortable.active) {
					putSortable = _this;
				} else if (_this === Sortable.active) {
					putSortable = null;
				}


				// Null lastTarget if it is not inside a previously swapped element
				if ((target === dragEl && !dragEl.animated) || (target === el && !target.animated)) {
					lastTarget = null;
				}
				// no bubbling and not fallback
				if (!options.dragoverBubble && !evt.rootEl && target !== document) {
					_this._handleAutoScroll(evt);
					dragEl.parentNode[expando]._computeIsAligned(evt);
				}

				!options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();

				return true;
			}

			// Call when dragEl has been inserted
			function changed() {
				_dispatchEvent(_this, rootEl, 'change', target, el, rootEl, oldIndex, _index(dragEl, options.draggable), evt);
			}


			if (evt.preventDefault !== void 0) {
				evt.cancelable && evt.preventDefault();
			}


			moved = true;

			target = _closest(target, options.draggable, el, true);

			// target is dragEl or target is animated
			if (!!_closest(evt.target, null, dragEl, true) || target.animated) {
				return completed();
			}

			if (target !== dragEl) {
				ignoreNextClick = false;
			}

			if (activeSortable && !options.disabled &&
				(isOwner
					? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
					: (
						putSortable === this ||
						(
							(this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) &&
							group.checkPut(this, activeSortable, dragEl, evt)
						)
					)
				)
			) {
				var axis = this._getDirection(evt, target);

				dragRect = _getRect(dragEl);

				if (revert) {
					this._hideClone();
					parentEl = rootEl; // actualization

					if (nextEl) {
						rootEl.insertBefore(dragEl, nextEl);
					} else {
						rootEl.appendChild(dragEl);
					}

					return completed();
				}

				if ((el.children.length === 0) || (el.children[0] === ghostEl) ||
					_ghostIsLast(evt, axis, el) && !dragEl.animated
				) {
					//assign target only if condition is true
					if (el.children.length !== 0 && el.children[0] !== ghostEl && el === evt.target) {
						target = _lastChild(el);
					}

					if (target) {
						targetRect = _getRect(target);
					}

					if (isOwner) {
						activeSortable._hideClone();
					} else {
						activeSortable._showClone(this);
					}

					if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
						el.appendChild(dragEl);
						parentEl = el; // actualization
						realDragElRect = null;

						changed();
						this._animate(dragRect, dragEl);
						target && this._animate(targetRect, target);
						return completed();
					}
				}
				else if (target && target !== dragEl && (target.parentNode[expando] !== void 0) && target !== el) {
					var direction = 0,
						targetBeforeFirstSwap,
						aligned = target.sortableMouseAligned,
						differentLevel = dragEl.parentNode !== el,
						scrolledPastTop = _isScrolledPast(target, axis === 'vertical' ? 'top' : 'left');

					if (lastTarget !== target) {
						lastMode = null;
						targetBeforeFirstSwap = _getRect(target)[axis === 'vertical' ? 'top' : 'left'];
						pastFirstInvertThresh = false;
					}

					// Reference: https://www.lucidchart.com/documents/view/10fa0e93-e362-4126-aca2-b709ee56bd8b/0
					if (
						_isElInRowColumn(dragEl, target, axis) && aligned ||
						differentLevel ||
						scrolledPastTop ||
						options.invertSwap ||
						lastMode === 'insert' ||
						// Needed, in the case that we are inside target and inserted because not aligned... aligned will stay false while inside
						// and lastMode will change to 'insert', but we must swap
						lastMode === 'swap'
					) {
						// New target that we will be inside
						if (lastMode !== 'swap') {
							isCircumstantialInvert = options.invertSwap || differentLevel || scrolling || scrolledPastTop;
						}

						direction = _getSwapDirection(evt, target, axis,
							options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold,
							isCircumstantialInvert,
							lastTarget === target);
						lastMode = 'swap';
					} else {
						// Insert at position
						direction = _getInsertDirection(target, options);
						lastMode = 'insert';
					}
					if (direction === 0) return completed();

					realDragElRect = null;
					lastTarget = target;

					lastDirection = direction;

					targetRect = _getRect(target);

					var nextSibling = target.nextElementSibling,
						after = false;

					after = direction === 1;

					var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

					if (moveVector !== false) {
						if (moveVector === 1 || moveVector === -1) {
							after = (moveVector === 1);
						}

						_silent = true;
						setTimeout(_unsilent, 30);

						if (isOwner) {
							activeSortable._hideClone();
						} else {
							activeSortable._showClone(this);
						}

						if (after && !nextSibling) {
							el.appendChild(dragEl);
						} else {
							target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
						}

						parentEl = dragEl.parentNode; // actualization

						// must be done before animation
						if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
							targetMoveDistance = abs(targetBeforeFirstSwap - _getRect(target)[axis === 'vertical' ? 'top' : 'left']);
						}
						changed();
						!differentLevel && this._animate(targetRect, target);
						this._animate(dragRect, dragEl);

						return completed();
					}
				}

				if (el.contains(dragEl)) {
					return completed();
				}
			}

			if (IE11OrLess && !evt.rootEl) {
				_artificalBubble(el, evt, '_onDragOver');
			}

			return false;
		},

		_animate: function (prevRect, target) {
			var ms = this.options.animation;

			if (ms) {
				var currentRect = _getRect(target);

				if (target === dragEl) {
					realDragElRect = currentRect;
				}

				if (prevRect.nodeType === 1) {
					prevRect = _getRect(prevRect);
				}

				// Check if actually moving position
				if ((prevRect.left + prevRect.width / 2) !== (currentRect.left + currentRect.width / 2)
					|| (prevRect.top + prevRect.height / 2) !== (currentRect.top + currentRect.height / 2)
				) {
					var matrix = _matrix(this.el),
						scaleX = matrix && matrix.a,
						scaleY = matrix && matrix.d;

					_css(target, 'transition', 'none');
					_css(target, 'transform', 'translate3d('
						+ (prevRect.left - currentRect.left) / (scaleX ? scaleX : 1) + 'px,'
						+ (prevRect.top - currentRect.top) / (scaleY ? scaleY : 1) + 'px,0)'
					);

					forRepaintDummy = target.offsetWidth; // repaint
					_css(target, 'transition', 'transform ' + ms + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
					_css(target, 'transform', 'translate3d(0,0,0)');
				}

				(typeof target.animated === 'number') && clearTimeout(target.animated);
				target.animated = setTimeout(function () {
					_css(target, 'transition', '');
					_css(target, 'transform', '');
					target.animated = false;
				}, ms);
			}
		},

		_offUpEvents: function () {
			var ownerDocument = this.el.ownerDocument;

			_off(document, 'touchmove', this._onTouchMove);
			_off(document, 'pointermove', this._onTouchMove);
			_off(ownerDocument, 'mouseup', this._onDrop);
			_off(ownerDocument, 'touchend', this._onDrop);
			_off(ownerDocument, 'pointerup', this._onDrop);
			_off(ownerDocument, 'touchcancel', this._onDrop);
			_off(ownerDocument, 'pointercancel', this._onDrop);
			_off(document, 'selectstart', this);
		},

		_onDrop: function (/**Event*/evt) {
			var el = this.el,
				options = this.options;

			awaitingDragStarted = false;
			scrolling = false;
			isCircumstantialInvert = false;
			pastFirstInvertThresh = false;

			clearInterval(this._loopId);

			clearInterval(pointerElemChangedInterval);
			_clearAutoScrolls();
			_cancelThrottle();

			clearTimeout(this._dragStartTimer);

			_cancelNextTick(this._cloneId);
			_cancelNextTick(this._dragStartId);

			// Unbind events
			_off(document, 'mousemove', this._onTouchMove);


			if (this.nativeDraggable) {
				_off(document, 'drop', this);
				_off(el, 'dragstart', this._onDragStart);
				_off(document, 'dragover', this._handleAutoScroll);
				_off(document, 'dragover', _checkAlignment);
			}

			this._offUpEvents();

			if (evt) {
				if (moved) {
					evt.cancelable && evt.preventDefault();
					!options.dropBubble && evt.stopPropagation();
				}

				ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

				if (rootEl === parentEl || (putSortable && putSortable.lastPutMode !== 'clone')) {
					// Remove clone
					cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
				}

				if (dragEl) {
					if (this.nativeDraggable) {
						_off(dragEl, 'dragend', this);
					}

					_disableDraggable(dragEl);
					dragEl.style['will-change'] = '';

					// Remove class's
					_toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
					_toggleClass(dragEl, this.options.chosenClass, false);

					// Drag stop event
					_dispatchEvent(this, rootEl, 'unchoose', dragEl, parentEl, rootEl, oldIndex, null, evt);

					if (rootEl !== parentEl) {
						newIndex = _index(dragEl, options.draggable);

						if (newIndex >= 0) {
							// Add event
							_dispatchEvent(null, parentEl, 'add', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);

							// Remove event
							_dispatchEvent(this, rootEl, 'remove', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);

							// drag from one list and drop into another
							_dispatchEvent(null, parentEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
							_dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
						}

						putSortable && putSortable.save();
					}
					else {
						if (dragEl.nextSibling !== nextEl) {
							// Get the index of the dragged element within its parent
							newIndex = _index(dragEl, options.draggable);

							if (newIndex >= 0) {
								// drag & drop within the same list
								_dispatchEvent(this, rootEl, 'update', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
								_dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
							}
						}
					}

					if (Sortable.active) {
						/* jshint eqnull:true */
						if (newIndex == null || newIndex === -1) {
							newIndex = oldIndex;
						}

						_dispatchEvent(this, rootEl, 'end', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);

						// Save sorting
						this.save();
					}
				}

			}
			this._nulling();
		},

		_nulling: function() {
			rootEl =
			dragEl =
			parentEl =
			ghostEl =
			nextEl =
			cloneEl =
			lastDownEl =

			scrollEl =
			scrollParentEl =
			autoScrolls.length =

			pointerElemChangedInterval =
			lastPointerElemX =
			lastPointerElemY =

			tapEvt =
			touchEvt =

			moved =
			newIndex =
			oldIndex =

			lastTarget =
			lastDirection =

			forRepaintDummy =
			realDragElRect =

			putSortable =
			activeGroup =
			Sortable.active = null;

			savedInputChecked.forEach(function (el) {
				el.checked = true;
			});

			savedInputChecked.length = 0;
		},

		handleEvent: function (/**Event*/evt) {
			switch (evt.type) {
				case 'drop':
				case 'dragend':
					this._onDrop(evt);
					break;

				case 'dragenter':
				case 'dragover':
					if (dragEl) {
						this._onDragOver(evt);
						_globalDragOver(evt);
					}
					break;

				case 'selectstart':
					evt.preventDefault();
					break;
			}
		},


		/**
		 * Serializes the item into an array of string.
		 * @returns {String[]}
		 */
		toArray: function () {
			var order = [],
				el,
				children = this.el.children,
				i = 0,
				n = children.length,
				options = this.options;

			for (; i < n; i++) {
				el = children[i];
				if (_closest(el, options.draggable, this.el, false)) {
					order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
				}
			}

			return order;
		},


		/**
		 * Sorts the elements according to the array.
		 * @param  {String[]}  order  order of the items
		 */
		sort: function (order) {
			var items = {}, rootEl = this.el;

			this.toArray().forEach(function (id, i) {
				var el = rootEl.children[i];

				if (_closest(el, this.options.draggable, rootEl, false)) {
					items[id] = el;
				}
			}, this);

			order.forEach(function (id) {
				if (items[id]) {
					rootEl.removeChild(items[id]);
					rootEl.appendChild(items[id]);
				}
			});
		},


		/**
		 * Save the current sorting
		 */
		save: function () {
			var store = this.options.store;
			store && store.set && store.set(this);
		},


		/**
		 * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
		 * @param   {HTMLElement}  el
		 * @param   {String}       [selector]  default: `options.draggable`
		 * @returns {HTMLElement|null}
		 */
		closest: function (el, selector) {
			return _closest(el, selector || this.options.draggable, this.el, false);
		},


		/**
		 * Set/get option
		 * @param   {string} name
		 * @param   {*}      [value]
		 * @returns {*}
		 */
		option: function (name, value) {
			var options = this.options;

			if (value === void 0) {
				return options[name];
			} else {
				options[name] = value;

				if (name === 'group') {
					_prepareGroup(options);
				}
			}
		},


		/**
		 * Destroy
		 */
		destroy: function () {
			var el = this.el;

			el[expando] = null;

			_off(el, 'mousedown', this._onTapStart);
			_off(el, 'touchstart', this._onTapStart);
			_off(el, 'pointerdown', this._onTapStart);

			if (this.nativeDraggable) {
				_off(el, 'dragover', this);
				_off(el, 'dragenter', this);
			}
			// Remove draggable attributes
			Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
				el.removeAttribute('draggable');
			});

			this._onDrop();

			sortables.splice(sortables.indexOf(this.el), 1);

			this.el = el = null;
		},

		_hideClone: function() {
			if (!cloneEl.cloneHidden) {
				_css(cloneEl, 'display', 'none');
				cloneEl.cloneHidden = true;
				if (cloneEl.parentNode && this.options.removeCloneOnHide) {
					cloneEl.parentNode.removeChild(cloneEl);
				}
			}
		},

		_showClone: function(putSortable) {
			if (putSortable.lastPutMode !== 'clone') {
				this._hideClone();
				return;
			}

			if (cloneEl.cloneHidden) {
				// show clone at dragEl or original position
				if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
					rootEl.insertBefore(cloneEl, dragEl);
				} else if (nextEl) {
					rootEl.insertBefore(cloneEl, nextEl);
				} else {
					rootEl.appendChild(cloneEl);
				}

				if (this.options.group.revertClone) {
					this._animate(dragEl, cloneEl);
				}
				_css(cloneEl, 'display', '');
				cloneEl.cloneHidden = false;
			}
		}
	};

	function _closest(/**HTMLElement*/el, /**String*/selector, /**HTMLElement*/ctx, includeCTX) {
		if (el) {
			ctx = ctx || document;

			do {
				if ((selector === '>*' && el.parentNode === ctx) || _matches(el, selector) || (includeCTX && el === ctx)) {
					return el;
				}

				if (el === ctx) break;
				/* jshint boss:true */
			} while (el = _getParentOrHost(el));
		}

		return null;
	}


	function _getParentOrHost(el) {
		return (el.host && el !== document && el.host.nodeType)
			? el.host
			: el.parentNode;
	}


	function _globalDragOver(/**Event*/evt) {
		if (evt.dataTransfer) {
			evt.dataTransfer.dropEffect = 'move';
		}
		evt.cancelable && evt.preventDefault();
	}


	function _on(el, event, fn) {
		el.addEventListener(event, fn, captureMode);
	}


	function _off(el, event, fn) {
		el.removeEventListener(event, fn, captureMode);
	}


	function _toggleClass(el, name, state) {
		if (el && name) {
			if (el.classList) {
				el.classList[state ? 'add' : 'remove'](name);
			}
			else {
				var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
				el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
			}
		}
	}


	function _css(el, prop, val) {
		var style = el && el.style;

		if (style) {
			if (val === void 0) {
				if (document.defaultView && document.defaultView.getComputedStyle) {
					val = document.defaultView.getComputedStyle(el, '');
				}
				else if (el.currentStyle) {
					val = el.currentStyle;
				}

				return prop === void 0 ? val : val[prop];
			}
			else {
				if (!(prop in style) && prop.indexOf('webkit') === -1) {
					prop = '-webkit-' + prop;
				}

				style[prop] = val + (typeof val === 'string' ? '' : 'px');
			}
		}
	}

	function _matrix(el) {
		var appliedTransforms = '';
		do {
			var transform = _css(el, 'transform');

			if (transform && transform !== 'none') {
				appliedTransforms = transform + ' ' + appliedTransforms;
			}
			/* jshint boss:true */
		} while (el = el.parentNode);

		if (window.DOMMatrix) {
			return new DOMMatrix(appliedTransforms);
		} else if (window.WebKitCSSMatrix) {
			return new WebKitCSSMatrix(appliedTransforms);
		} else if (window.CSSMatrix) {
			return new CSSMatrix(appliedTransforms);
		}
	}


	function _find(ctx, tagName, iterator) {
		if (ctx) {
			var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;

			if (iterator) {
				for (; i < n; i++) {
					iterator(list[i], i);
				}
			}

			return list;
		}

		return [];
	}



	function _dispatchEvent(sortable, rootEl, name, targetEl, toEl, fromEl, startIndex, newIndex, originalEvt) {
		sortable = (sortable || rootEl[expando]);
		var evt,
			options = sortable.options,
			onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1);
		// Support for new CustomEvent feature
		if (window.CustomEvent && !IE11OrLess && !Edge) {
			evt = new CustomEvent(name, {
				bubbles: true,
				cancelable: true
			});
		} else {
			evt = document.createEvent('Event');
			evt.initEvent(name, true, true);
		}

		evt.to = toEl || rootEl;
		evt.from = fromEl || rootEl;
		evt.item = targetEl || rootEl;
		evt.clone = cloneEl;

		evt.oldIndex = startIndex;
		evt.newIndex = newIndex;

		evt.originalEvent = originalEvt;

		if (rootEl) {
			rootEl.dispatchEvent(evt);
	        }

		if (options[onName]) {
			options[onName].call(sortable, evt);
		}
	}


	function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvt, willInsertAfter) {
		var evt,
			sortable = fromEl[expando],
			onMoveFn = sortable.options.onMove,
			retVal;
		// Support for new CustomEvent feature
		if (window.CustomEvent && !IE11OrLess && !Edge) {
			evt = new CustomEvent('move', {
				bubbles: true,
				cancelable: true
			});
		} else {
			evt = document.createEvent('Event');
			evt.initEvent('move', true, true);
		}

		evt.to = toEl;
		evt.from = fromEl;
		evt.dragged = dragEl;
		evt.draggedRect = dragRect;
		evt.related = targetEl || toEl;
		evt.relatedRect = targetRect || _getRect(toEl);
		evt.willInsertAfter = willInsertAfter;

		evt.originalEvent = originalEvt;

		fromEl.dispatchEvent(evt);

		if (onMoveFn) {
			retVal = onMoveFn.call(sortable, evt, originalEvt);
		}

		return retVal;
	}

	function _disableDraggable(el) {
		el.draggable = false;
	}

	function _unsilent() {
		_silent = false;
	}

	/**
	 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
	 * and non-draggable elements
	 * @param  {HTMLElement} el       The parent element
	 * @param  {Number} childNum      The index of the child
	 * @param  {Object} options       Parent Sortable's options
	 * @return {HTMLElement}          The child at index childNum, or null if not found
	 */
	function _getChild(el, childNum, options) {
		var currentChild = 0,
			i = 0,
			children = el.children;

		while (i < children.length) {
			if (
				children[i].style.display !== 'none' &&
				children[i] !== ghostEl &&
				children[i] !== dragEl &&
				_closest(children[i], options.draggable, el, false)
			) {
				if (currentChild === childNum) {
					return children[i];
				}
				currentChild++;
			}

			i++;
		}
		return null;
	}

	/**
	 * Gets the last child in the el, ignoring ghostEl
	 * @param  {HTMLElement} el       Parent element
	 * @return {HTMLElement}          The last child, ignoring ghostEl
	 */
	function _lastChild(el) {
		var last = el.lastElementChild;

		if (last === ghostEl) {
			last = el.children[el.childElementCount - 2];
		}

		return last || null;
	}

	function _ghostIsLast(evt, axis, el) {
		var elRect = _getRect(_lastChild(el)),
			mouseOnAxis = axis === 'vertical' ? evt.clientY : evt.clientX,
			mouseOnOppAxis = axis === 'vertical' ? evt.clientX : evt.clientY,
			targetS2 = axis === 'vertical' ? elRect.bottom : elRect.right,
			targetS1Opp = axis === 'vertical' ? elRect.left : elRect.top,
			targetS2Opp = axis === 'vertical' ? elRect.right : elRect.bottom;

		return (
			mouseOnOppAxis > targetS1Opp &&
			mouseOnOppAxis < targetS2Opp &&
			mouseOnAxis > targetS2
		);
	}

	function _getSwapDirection(evt, target, axis, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
		var targetRect = _getRect(target),
			mouseOnAxis = axis === 'vertical' ? evt.clientY : evt.clientX,
			targetLength = axis === 'vertical' ? targetRect.height : targetRect.width,
			targetS1 = axis === 'vertical' ? targetRect.top : targetRect.left,
			targetS2 = axis === 'vertical' ? targetRect.bottom : targetRect.right,
			dragRect = _getRect(dragEl),
			invert = false;


		if (!invertSwap) {
			// Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
			if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) { // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
				// check if past first invert threshold on side opposite of lastDirection
				if (!pastFirstInvertThresh &&
					(lastDirection === 1 ?
						(
							mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2
						) :
						(
							mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2
						)
					)
				)
				{
					// past first invert threshold, do not restrict inverted threshold to dragEl shadow
					pastFirstInvertThresh = true;
				}

				if (!pastFirstInvertThresh) {
					var dragS1 = axis === 'vertical' ? dragRect.top : dragRect.left,
						dragS2 = axis === 'vertical' ? dragRect.bottom : dragRect.right;
					// dragEl shadow (target move distance shadow)
					if (
						lastDirection === 1 ?
						(
							mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
						) :
						(
							mouseOnAxis > targetS2 - targetMoveDistance
						)
					)
					{
						return lastDirection * -1;
					}
				} else {
					invert = true;
				}
			} else {
				// Regular
				if (
					mouseOnAxis > targetS1 + (targetLength * (1 - swapThreshold) / 2) &&
					mouseOnAxis < targetS2 - (targetLength * (1 - swapThreshold) / 2)
				) {
					return ((mouseOnAxis > targetS1 + targetLength / 2) ? -1 : 1);
				}
			}
		}

		invert = invert || invertSwap;

		if (invert) {
			// Invert of regular
			if (
				mouseOnAxis < targetS1 + (targetLength * invertedSwapThreshold / 2) ||
				mouseOnAxis > targetS2 - (targetLength * invertedSwapThreshold / 2)
			)
			{
				return ((mouseOnAxis > targetS1 + targetLength / 2) ? 1 : -1);
			}
		}

		return 0;
	}

	/**
	 * Gets the direction dragEl must be swapped relative to target in order to make it
	 * seem that dragEl has been "inserted" into that element's position
	 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
	 * @param  {Object} options           options of the parent sortable
	 * @return {Number}                   Direction dragEl must be swapped
	 */
	function _getInsertDirection(target, options) {
		var dragElIndex = _index(dragEl, options.draggable),
			targetIndex = _index(target, options.draggable);

		if (dragElIndex < targetIndex) {
			return 1;
		} else {
			return -1;
		}
	}


	/**
	 * Generate id
	 * @param   {HTMLElement} el
	 * @returns {String}
	 * @private
	 */
	function _generateId(el) {
		var str = el.tagName + el.className + el.src + el.href + el.textContent,
			i = str.length,
			sum = 0;

		while (i--) {
			sum += str.charCodeAt(i);
		}

		return sum.toString(36);
	}

	/**
	 * Returns the index of an element within its parent for a selected set of
	 * elements
	 * @param  {HTMLElement} el
	 * @param  {selector} selector
	 * @return {number}
	 */
	function _index(el, selector) {
		var index = 0;

		if (!el || !el.parentNode) {
			return -1;
		}

		while (el && (el = el.previousElementSibling)) {
			if ((el.nodeName.toUpperCase() !== 'TEMPLATE') && el !== cloneEl) {
				index++;
			}
		}

		return index;
	}

	function _matches(/**HTMLElement*/el, /**String*/selector) {
		if (el) {
			try {
				if (el.matches) {
					return el.matches(selector);
				} else if (el.msMatchesSelector) {
					return el.msMatchesSelector(selector);
				} else if (el.webkitMatchesSelector) {
					return el.webkitMatchesSelector(selector);
				}
			} catch(_) {
				return false;
			}
		}

		return false;
	}

	var _throttleTimeout;
	function _throttle(callback, ms) {
		return function () {
			if (!_throttleTimeout) {
				var args = arguments,
					_this = this;

				_throttleTimeout = setTimeout(function () {
					if (args.length === 1) {
						callback.call(_this, args[0]);
					} else {
						callback.apply(_this, args);
					}

					_throttleTimeout = void 0;
				}, ms);
			}
		};
	}

	function _cancelThrottle() {
		clearTimeout(_throttleTimeout);
		_throttleTimeout = void 0;
	}

	function _extend(dst, src) {
		if (dst && src) {
			for (var key in src) {
				if (src.hasOwnProperty(key)) {
					dst[key] = src[key];
				}
			}
		}

		return dst;
	}

	function _clone(el) {
		if (Polymer && Polymer.dom) {
			return Polymer.dom(el).cloneNode(true);
		}
		else if ($) {
			return $(el).clone(true)[0];
		}
		else {
			return el.cloneNode(true);
		}
	}

	function _saveInputCheckedState(root) {
		savedInputChecked.length = 0;

		var inputs = root.getElementsByTagName('input');
		var idx = inputs.length;

		while (idx--) {
			var el = inputs[idx];
			el.checked && savedInputChecked.push(el);
		}
	}

	function _nextTick(fn) {
		return setTimeout(fn, 0);
	}

	function _cancelNextTick(id) {
		return clearTimeout(id);
	}


	/**
	 * Returns the "bounding client rect" of given element
	 * @param  {HTMLElement} el                The element whose boundingClientRect is wanted
	 * @param  {[HTMLElement]} container       the parent the element will be placed in
	 * @param  {[Boolean]} adjustForTransform  Whether the rect should compensate for parent's transform
	 * (used for fixed positioning on el)
	 * @return {Object}                        The boundingClientRect of el
	 */
	function _getRect(el, container, adjustForTransform) {
		if (!el.getBoundingClientRect && el !== win) return;

		var elRect,
			top,
			left,
			bottom,
			right,
			height,
			width;

		if (el !== win) {
			elRect = el.getBoundingClientRect();
			top = elRect.top;
			left = elRect.left;
			bottom = elRect.bottom;
			right = elRect.right;
			height = elRect.height;
			width = elRect.width;
		} else {
			top = 0;
			left = 0;
			bottom = window.innerHeight;
			right = window.innerWidth;
			height = window.innerHeight;
			width = window.innerWidth;
		}

		if (adjustForTransform && el !== win) {
			// Adjust for translate()
			container = container || el.parentNode;

			// solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
			// Not needed on <= IE11
			if (!IE11OrLess) {
				do {
					if (container && container.getBoundingClientRect && _css(container, 'transform') !== 'none') {
						var containerRect = container.getBoundingClientRect();

						// Set relative to edges of padding box of container
						top -= containerRect.top + parseInt(_css(container, 'border-top-width'));
						left -= containerRect.left + parseInt(_css(container, 'border-left-width'));
						bottom = top + elRect.height;
						right = left + elRect.width;

						break;
					}
					/* jshint boss:true */
				} while (container = container.parentNode);
			}

			// Adjust for scale()
			var matrix = _matrix(el),
				scaleX = matrix && matrix.a,
				scaleY = matrix && matrix.d;

			if (matrix) {
				top /= scaleY;
				left /= scaleX;

				width /= scaleX;
				height /= scaleY;

				bottom = top + height;
				right = left + width;
			}
		}

		return {
			top: top,
			left: left,
			bottom: bottom,
			right: right,
			width: width,
			height: height
		};
	}


	/**
	 * Checks if a side of an element is scrolled past a side of it's parents
	 * @param  {HTMLElement}  el       The element who's side being scrolled out of view is in question
	 * @param  {String}       side     Side of the element in question ('top', 'left', 'right', 'bottom')
	 * @return {Boolean}               Whether the element is overflowing the viewport on the given side of it's parent
	 */
	function _isScrolledPast(el, side) {
		var parent = _getParentAutoScrollElement(parent, true),
			elSide = _getRect(el)[side];

		/* jshint boss:true */
		while (parent) {
			var parentSide = _getRect(parent)[side],
				visible;

			if (side === 'top' || side === 'left') {
				visible = elSide >= parentSide;
			} else {
				visible = elSide <= parentSide;
			}

			if (!visible) return true;

			if (parent === win) break;

			parent = _getParentAutoScrollElement(parent, false);
		}

		return false;
	}

	// Fixed #973:
	_on(document, 'touchmove', function(evt) {
		if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
			evt.preventDefault();
		}
	});


	// Export utils
	Sortable.utils = {
		on: _on,
		off: _off,
		css: _css,
		find: _find,
		is: function (el, selector) {
			return !!_closest(el, selector, el, false);
		},
		extend: _extend,
		throttle: _throttle,
		closest: _closest,
		toggleClass: _toggleClass,
		clone: _clone,
		index: _index,
		nextTick: _nextTick,
		cancelNextTick: _cancelNextTick,
		detectDirection: _detectDirection,
		getChild: _getChild
	};


	/**
	 * Create sortable instance
	 * @param {HTMLElement}  el
	 * @param {Object}      [options]
	 */
	Sortable.create = function (el, options) {
		return new Sortable(el, options);
	};


	// Export
	Sortable.version = '1.8.1';
	return Sortable;
});


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
                  !$event.type.indexOf("key") &&
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
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")
                  ) {
                    return null
                  }
                  return _vm.tabPressed($event)
                },
                function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  $event.preventDefault()
                  return _vm.enterPressed($event)
                },
                function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "up", 38, $event.key, [
                      "Up",
                      "ArrowUp"
                    ])
                  ) {
                    return null
                  }
                  $event.preventDefault()
                  return _vm.keyArrows("up")
                },
                function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "down", 40, $event.key, [
                      "Down",
                      "ArrowDown"
                    ])
                  ) {
                    return null
                  }
                  $event.preventDefault()
                  return _vm.keyArrows("down")
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
                          return _vm.setSelected(option)
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
              return _vm.close()
            },
            keyup: function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "delete", [8, 46], $event.key, [
                  "Backspace",
                  "Delete",
                  "Del"
                ])
              ) {
                return null
              }
              $event.preventDefault()
              return _vm.close()
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
                    return _vm.close()
                  },
                  keyup: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "delete", [8, 46], $event.key, [
                        "Backspace",
                        "Delete",
                        "Del"
                      ])
                    ) {
                      return null
                    }
                    $event.preventDefault()
                    return _vm.close()
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
                    return _vm.removeTag(index)
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
                    scopedSlots: _vm._u(
                      [
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
                      ],
                      true
                    ),
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
                      return _vm.removeTag(index)
                    }
                  }
                },
                [
                  _c(
                    "span",
                    {
                      on: {
                        click: function($event) {
                          return _vm.tagClicked(tag)
                        }
                      }
                    },
                    [
                      _vm._t(
                        "tagDisplay",
                        [
                          _vm._v(
                            "\n                  " +
                              _vm._s(_vm.getNormalizedTagText(tag)) +
                              "\n                "
                          )
                        ],
                        { tag: tag }
                      )
                    ],
                    2
                  )
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
                    scopedSlots: _vm._u(
                      [
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
                      ],
                      true
                    ),
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

/***/ "./node_modules/vuedraggable/dist/vuedraggable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function () {
  "use strict";

  if (!Array.from) {
    Array.from = function (object) {
      return [].slice.call(object);
    };
  }

  function buildAttribute(object, propName, value) {
    if (value == undefined) {
      return object;
    }
    object = object == null ? {} : object;
    object[propName] = value;
    return object;
  }

  function buildDraggable(Sortable) {
    function removeNode(node) {
      node.parentElement.removeChild(node);
    }

    function insertNodeAt(fatherNode, node, position) {
      var refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
      fatherNode.insertBefore(node, refNode);
    }

    function computeVmIndex(vnodes, element) {
      return vnodes.map(function (elt) {
        return elt.elm;
      }).indexOf(element);
    }

    function _computeIndexes(slots, children, isTransition) {
      if (!slots) {
        return [];
      }

      var elmFromNodes = slots.map(function (elt) {
        return elt.elm;
      });
      var rawIndexes = [].concat(_toConsumableArray(children)).map(function (elt) {
        return elmFromNodes.indexOf(elt);
      });
      return isTransition ? rawIndexes.filter(function (ind) {
        return ind !== -1;
      }) : rawIndexes;
    }

    function emit(evtName, evtData) {
      var _this = this;

      this.$nextTick(function () {
        return _this.$emit(evtName.toLowerCase(), evtData);
      });
    }

    function delegateAndEmit(evtName) {
      var _this2 = this;

      return function (evtData) {
        if (_this2.realList !== null) {
          _this2['onDrag' + evtName](evtData);
        }
        emit.call(_this2, evtName, evtData);
      };
    }

    var eventsListened = ['Start', 'Add', 'Remove', 'Update', 'End'];
    var eventsToEmit = ['Choose', 'Sort', 'Filter', 'Clone'];
    var readonlyProperties = ['Move'].concat(eventsListened, eventsToEmit).map(function (evt) {
      return 'on' + evt;
    });
    var draggingElement = null;

    var props = {
      options: Object,
      list: {
        type: Array,
        required: false,
        default: null
      },
      value: {
        type: Array,
        required: false,
        default: null
      },
      noTransitionOnDrag: {
        type: Boolean,
        default: false
      },
      clone: {
        type: Function,
        default: function _default(original) {
          return original;
        }
      },
      element: {
        type: String,
        default: 'div'
      },
      move: {
        type: Function,
        default: null
      },
      componentData: {
        type: Object,
        required: false,
        default: null
      }
    };

    var draggableComponent = {
      name: 'draggable',

      props: props,

      data: function data() {
        return {
          transitionMode: false,
          noneFunctionalComponentMode: false,
          init: false
        };
      },
      render: function render(h) {
        var slots = this.$slots.default;
        if (slots && slots.length === 1) {
          var child = slots[0];
          if (child.componentOptions && child.componentOptions.tag === "transition-group") {
            this.transitionMode = true;
          }
        }
        var headerOffset = 0;
        var children = slots;
        var _$slots = this.$slots,
            header = _$slots.header,
            footer = _$slots.footer;

        if (header) {
          headerOffset = header.length;
          children = children ? [].concat(_toConsumableArray(header), _toConsumableArray(children)) : [].concat(_toConsumableArray(header));
        }
        if (footer) {
          children = children ? [].concat(_toConsumableArray(children), _toConsumableArray(footer)) : [].concat(_toConsumableArray(footer));
        }
        this.headerOffset = headerOffset;
        var attributes = null;
        var update = function update(name, value) {
          attributes = buildAttribute(attributes, name, value);
        };
        update('attrs', this.$attrs);
        if (this.componentData) {
          var _componentData = this.componentData,
              on = _componentData.on,
              _props = _componentData.props;

          update('on', on);
          update('props', _props);
        }
        return h(this.element, attributes, children);
      },
      mounted: function mounted() {
        var _this3 = this;

        this.noneFunctionalComponentMode = this.element.toLowerCase() !== this.$el.nodeName.toLowerCase();
        if (this.noneFunctionalComponentMode && this.transitionMode) {
          throw new Error('Transition-group inside component is not supported. Please alter element value or remove transition-group. Current element value: ' + this.element);
        }
        var optionsAdded = {};
        eventsListened.forEach(function (elt) {
          optionsAdded['on' + elt] = delegateAndEmit.call(_this3, elt);
        });

        eventsToEmit.forEach(function (elt) {
          optionsAdded['on' + elt] = emit.bind(_this3, elt);
        });

        var options = _extends({}, this.options, optionsAdded, { onMove: function onMove(evt, originalEvent) {
            return _this3.onDragMove(evt, originalEvent);
          } });
        !('draggable' in options) && (options.draggable = '>*');
        this._sortable = new Sortable(this.rootContainer, options);
        this.computeIndexes();
      },
      beforeDestroy: function beforeDestroy() {
        if (this._sortable !== undefined) this._sortable.destroy();
      },


      computed: {
        rootContainer: function rootContainer() {
          return this.transitionMode ? this.$el.children[0] : this.$el;
        },
        isCloning: function isCloning() {
          return !!this.options && !!this.options.group && this.options.group.pull === 'clone';
        },
        realList: function realList() {
          return !!this.list ? this.list : this.value;
        }
      },

      watch: {
        options: {
          handler: function handler(newOptionValue) {
            for (var property in newOptionValue) {
              if (readonlyProperties.indexOf(property) == -1) {
                this._sortable.option(property, newOptionValue[property]);
              }
            }
          },

          deep: true
        },

        realList: function realList() {
          this.computeIndexes();
        }
      },

      methods: {
        getChildrenNodes: function getChildrenNodes() {
          if (!this.init) {
            this.noneFunctionalComponentMode = this.noneFunctionalComponentMode && this.$children.length == 1;
            this.init = true;
          }

          if (this.noneFunctionalComponentMode) {
            return this.$children[0].$slots.default;
          }
          var rawNodes = this.$slots.default;
          return this.transitionMode ? rawNodes[0].child.$slots.default : rawNodes;
        },
        computeIndexes: function computeIndexes() {
          var _this4 = this;

          this.$nextTick(function () {
            _this4.visibleIndexes = _computeIndexes(_this4.getChildrenNodes(), _this4.rootContainer.children, _this4.transitionMode);
          });
        },
        getUnderlyingVm: function getUnderlyingVm(htmlElt) {
          var index = computeVmIndex(this.getChildrenNodes() || [], htmlElt);
          if (index === -1) {
            //Edge case during move callback: related element might be
            //an element different from collection
            return null;
          }
          var element = this.realList[index];
          return { index: index, element: element };
        },
        getUnderlyingPotencialDraggableComponent: function getUnderlyingPotencialDraggableComponent(_ref) {
          var __vue__ = _ref.__vue__;

          if (!__vue__ || !__vue__.$options || __vue__.$options._componentTag !== "transition-group") {
            return __vue__;
          }
          return __vue__.$parent;
        },
        emitChanges: function emitChanges(evt) {
          var _this5 = this;

          this.$nextTick(function () {
            _this5.$emit('change', evt);
          });
        },
        alterList: function alterList(onList) {
          if (!!this.list) {
            onList(this.list);
          } else {
            var newList = [].concat(_toConsumableArray(this.value));
            onList(newList);
            this.$emit('input', newList);
          }
        },
        spliceList: function spliceList() {
          var _arguments = arguments;

          var spliceList = function spliceList(list) {
            return list.splice.apply(list, _arguments);
          };
          this.alterList(spliceList);
        },
        updatePosition: function updatePosition(oldIndex, newIndex) {
          var updatePosition = function updatePosition(list) {
            return list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);
          };
          this.alterList(updatePosition);
        },
        getRelatedContextFromMoveEvent: function getRelatedContextFromMoveEvent(_ref2) {
          var to = _ref2.to,
              related = _ref2.related;

          var component = this.getUnderlyingPotencialDraggableComponent(to);
          if (!component) {
            return { component: component };
          }
          var list = component.realList;
          var context = { list: list, component: component };
          if (to !== related && list && component.getUnderlyingVm) {
            var destination = component.getUnderlyingVm(related);
            if (destination) {
              return _extends(destination, context);
            }
          }

          return context;
        },
        getVmIndex: function getVmIndex(domIndex) {
          var indexes = this.visibleIndexes;
          var numberIndexes = indexes.length;
          return domIndex > numberIndexes - 1 ? numberIndexes : indexes[domIndex];
        },
        getComponent: function getComponent() {
          return this.$slots.default[0].componentInstance;
        },
        resetTransitionData: function resetTransitionData(index) {
          if (!this.noTransitionOnDrag || !this.transitionMode) {
            return;
          }
          var nodes = this.getChildrenNodes();
          nodes[index].data = null;
          var transitionContainer = this.getComponent();
          transitionContainer.children = [];
          transitionContainer.kept = undefined;
        },
        onDragStart: function onDragStart(evt) {
          this.context = this.getUnderlyingVm(evt.item);
          evt.item._underlying_vm_ = this.clone(this.context.element);
          draggingElement = evt.item;
        },
        onDragAdd: function onDragAdd(evt) {
          this.updateEvenemt(evt);
          var element = evt.item._underlying_vm_;
          if (element === undefined) {
            return;
          }
          removeNode(evt.item);
          var newIndex = this.getVmIndex(evt.newIndex);
          this.spliceList(newIndex, 0, element);
          this.computeIndexes();
          var added = { element: element, newIndex: newIndex };
          this.emitChanges({ added: added });
        },
        onDragRemove: function onDragRemove(evt) {
          this.updateEvenemt(evt);
          insertNodeAt(this.rootContainer, evt.item, evt.oldIndex);
          if (this.isCloning) {
            removeNode(evt.clone);
            return;
          }
          var oldIndex = this.context.index;
          this.spliceList(oldIndex, 1);
          var removed = { element: this.context.element, oldIndex: oldIndex };
          this.resetTransitionData(oldIndex);
          this.emitChanges({ removed: removed });
        },
        onDragUpdate: function onDragUpdate(evt) {
          this.updateEvenemt(evt);
          removeNode(evt.item);
          insertNodeAt(evt.from, evt.item, evt.oldIndex);
          var oldIndex = this.context.index;
          var newIndex = this.getVmIndex(evt.newIndex);
          this.updatePosition(oldIndex, newIndex);
          var moved = { element: this.context.element, oldIndex: oldIndex, newIndex: newIndex };
          this.emitChanges({ moved: moved });
        },
        updateEvenemt: function updateEvenemt(evt) {
          this.updateProperty(evt, 'newIndex');
          this.updateProperty(evt, 'oldIndex');
        },
        updateProperty: function updateProperty(evt, propertyName) {
          evt.hasOwnProperty(propertyName) && (evt[propertyName] += this.headerOffset);
        },
        computeFutureIndex: function computeFutureIndex(relatedContext, evt) {
          if (!relatedContext.element) {
            return 0;
          }
          var domChildren = [].concat(_toConsumableArray(evt.to.children)).filter(function (el) {
            return el.style['display'] !== 'none';
          });
          var currentDOMIndex = domChildren.indexOf(evt.related);
          var currentIndex = relatedContext.component.getVmIndex(currentDOMIndex);
          var draggedInList = domChildren.indexOf(draggingElement) != -1;
          return draggedInList || !evt.willInsertAfter ? currentIndex : currentIndex + 1;
        },
        onDragMove: function onDragMove(evt, originalEvent) {
          var onMove = this.move;
          if (!onMove || !this.realList) {
            return true;
          }

          var relatedContext = this.getRelatedContextFromMoveEvent(evt);
          var draggedContext = this.context;
          var futureIndex = this.computeFutureIndex(relatedContext, evt);
          _extends(draggedContext, { futureIndex: futureIndex });
          _extends(evt, { relatedContext: relatedContext, draggedContext: draggedContext });
          return onMove(evt, originalEvent);
        },
        onDragEnd: function onDragEnd(evt) {
          this.computeIndexes();
          draggingElement = null;
        }
      }
    };
    return draggableComponent;
  }

  if (true) {
    var Sortable = __webpack_require__("./node_modules/sortablejs/Sortable.js");
    module.exports = buildDraggable(Sortable);
  } else if (typeof define == "function" && define.amd) {
    define(['sortablejs'], function (Sortable) {
      return buildDraggable(Sortable);
    });
  } else if (window && window.Vue && window.Sortable) {
    var draggable = buildDraggable(window.Sortable);
    Vue.component('draggable', draggable);
  }
})();

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


/***/ })

});