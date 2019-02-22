webpackJsonp([33],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/ModelForm.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Validator that checks if the value of a field exists in an array
 *
 * @param value  The value to check
 * @param arr    The array to look in
 * @param key    If provided, a property to access on each element of *arr*
 *               when checking
 * @return boolean
 */
function existsValidator(value, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      arr = _ref2[0],
      key = _ref2[1];

  return arr.some(function (el) {
    return (key ? el[key] : el) === value;
  });
}
/**
 * Fills in the fields of *data* based on the values of *initial*. A *fields*
 * attribute in the *data* object tells the function which fields to look for
 * in the *initial* object; *fields* should correspond to an object where the
 * keys are the field to look for, and the value is the default to use if the
 * property is not contained in *initial*. This function is recursive, so
 * fields other than *field* will trigger an update based on the corresponding
 * object (on both the *data* and *initial* objects).
 */


function updateData(data, initial) {
  if (data !== null) {
    var _arr2 = Object.entries(data);

    for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
      var _arr2$_i = _slicedToArray(_arr2[_i2], 2),
          key = _arr2$_i[0],
          v = _arr2$_i[1];

      if (key == 'fields') {
        // If this is the *fields* property of the data object, check the
        // *initial* object for each property in the associated object.
        var _arr3 = Object.entries(v);

        for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
          var _arr3$_i = _slicedToArray(_arr3[_i3], 2),
              field = _arr3$_i[0],
              value = _arr3$_i[1];

          if (initial && initial.hasOwnProperty(field)) {
            value = initial[field];
          } // Have to use Vue.set so that the properties are reactive.


          Vue.set(data, field, value);
        }
      } else if (data.hasOwnProperty(key)) {
        // For properties other than *fields*, recursively update their data
        // as well.
        updateData(v, initial ? initial[key] : null);
      }
    }
  }
}
/**
 * Interacts directly with the DOM to disable browser-level autocompletes
 */


function turnOffAutocompletes(parent) {
  var inputs = parent.getElementsByTagName('input');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var input = _step.value;

      if (input.name && input.name.length && input.name[0] !== '_') {
        input.name = 'alg-' + input.name;
      }

      input.autocomplete = 'off';
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
/**
 * Interacts directly with the DOM to fix wysiwyg elements
 *
 * tabindex is set to null, to conform to accessibility standards.
 */


function normalizeTextareas(parent) {
  var wysiwygs = parent.getElementsByClassName('editr');
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = wysiwygs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var wysiwyg = _step2.value;
      var content = wysiwyg.getElementsByClassName('editr--content')[0];
      content.tabIndex = null;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}
/**
 * Interacts directly with the DOM to fix radio and checkbox elements
 *
 * Buefy gives both the radio itself and the label a tabindex, which makes for
 * unintuitive tabbing. This function removes the tabindex from the radio
 * element.
 */


function normalizeRadios(parent) {
  var els = parent.querySelectorAll('input[type=radio], input[type=checkbox]');
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = els[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var el = _step3.value;
      el.tabIndex = -1;
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
}
/**
 * Adds a listener to elements which will fire when the element is disabled
 *
 * @param els  The elements to listen for being disabled
 * @param callback  The function to run when the element is disabled. Should
 *                  take one argument - the element that triggered the event
 */


function registerDisabledListeners(els, callback) {
  var config = {
    attributes: true
  };
  var observer = new MutationObserver(function (mutations) {
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = mutations[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var mutation = _step4.value;

        if (mutation.attributeName === 'disabled') {
          callback(mutation.target);
        }
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }
  });
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = els[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var el = _step5.value;
      observer.observe(el, config);
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
        _iterator5.return();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    lists: {
      type: Object
    },
    asyncRoutes: {
      type: Object
    },
    initial: {
      type: Object
    },
    template: {
      type: Object
    },
    filterProto: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    prefetch: {
      default: function _default() {}
    },
    oldErrors: {},
    oldValues: {}
  },
  data: function data() {
    return {
      data: {},
      filteredLists: {},
      prefetchLists: {},
      asyncLoading: {},
      stringifiedData: ''
    };
  },
  created: function created() {
    this.initLists();
    this.initValidator();
    this.initData();
  },
  mounted: function mounted() {
    var rootNode = this.$vnode.elm;
    turnOffAutocompletes(rootNode);
    normalizeTextareas(rootNode);
    normalizeRadios(rootNode);

    if (this.oldErrors) {
      this.updateErrors(this.oldErrors);
    }

    ; // Register "disabled" event listeners on the text inputs

    var inputs = rootNode.querySelectorAll('input[type=text]');
    registerDisabledListeners(inputs, function (target) {
      var event = new Event('input', {
        'bubbles': true,
        'cancelable': true
      });
      target.value = ''; // Fire an input event to let Vue components know something has changed

      target.dispatchEvent(event);
    });
  },
  methods: {
    /**
     * Initializes the in-memory and asychronous list structures based on the
     * provided *lists* prop
     */
    initLists: function initLists() {
      if (this.lists) {
        var _arr4 = Object.entries(this.lists);

        for (var _i4 = 0; _i4 < _arr4.length; _i4++) {
          var _arr4$_i = _slicedToArray(_arr4[_i4], 2),
              name = _arr4$_i[0],
              list = _arr4$_i[1];

          if (this.lists.hasOwnProperty(name) && Array.isArray(list)) {
            this.$set(this.filteredLists, name, list.clone());
          }
        }
      }

      if (this.asyncRoutes) {
        var _arr5 = Object.entries(this.asyncRoutes);

        for (var _i5 = 0; _i5 < _arr5.length; _i5++) {
          var _arr5$_i = _slicedToArray(_arr5[_i5], 2),
              name = _arr5$_i[0],
              route = _arr5$_i[1];

          this.$set(this.filteredLists, name, []);
          this.$set(this.asyncLoading, name, false);
        }
      }

      if (this.prefetch) {
        var _arr6 = Object.entries(this.prefetch);

        for (var _i6 = 0; _i6 < _arr6.length; _i6++) {
          var _arr6$_i = _slicedToArray(_arr6[_i6], 2),
              name = _arr6$_i[0],
              prefetches = _arr6$_i[1];

          var _arr7 = Object.entries(prefetches);

          for (var _i7 = 0; _i7 < _arr7.length; _i7++) {
            var _arr7$_i = _slicedToArray(_arr7[_i7], 2),
                prefetchName = _arr7$_i[0],
                _2 = _arr7$_i[1];

            this.prefetchLists[prefetchName] = [];
          }
        }
      }
    },

    /**
     * Initializes the validator by adding any required custom rules
     */
    initValidator: function initValidator() {
      this.$validator.extend('exists', existsValidator);
    },

    /**
     * Initializes the *data* attribute based on the *template* prop, then
     * fills it in based on the *oldValue* prop if it was passed in, or the
     * *initial* prop if it was not
     */
    initData: function initData() {
      var _this = this;

      this.data = this.template;
      updateData(this.data, this.oldValues || this.initial); // Filter the asterisks out of any fields marked as proto fields

      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        var _loop = function _loop() {
          var keyString = _step6.value;
          var data = _this.data;
          var keys = keyString.split('.');
          keys.forEach(function (key, i) {
            if (i < keys.length - 1) {
              data = data[key];
            } else if (data[key]) {
              data[key] = data[key].replace('*', '');
            }
          });
        };

        for (var _iterator6 = this.filterProto[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }
    },

    /**
     * Updates the error bag based on a list of errors
     */
    updateErrors: function updateErrors(errorList) {
      var _this2 = this;

      var _arr8 = Object.entries(errorList);

      var _loop2 = function _loop2() {
        var _arr8$_i = _slicedToArray(_arr8[_i8], 2),
            field = _arr8$_i[0],
            errors = _arr8$_i[1];

        errors.forEach(function (msg) {
          return _this2.errors.add({
            field: field,
            msg: msg
          });
        });
      };

      for (var _i8 = 0; _i8 < _arr8.length; _i8++) {
        _loop2();
      }
    },

    /**
     * Filters an in-memory list based on a query
     *
     * @param listName  The name (key) of the list
     * @param query     The string to filter the list by
     * @param func      An optional function to specify additional constraints
     *                  on the filtering
     */
    filterList: function filterList(listName, query, func) {
      var q = query.toLowerCase(); // The list to filter may exist in the initial lists that were passed in,
      // or it may be part of the lists which are prefetched when another
      // value updates

      var list = this.lists[listName] || this.prefetchLists[listName];
      this.filteredLists[listName] = list.filter(function (x) {
        return x.name.toLowerCase().includes(q) && (!func || func(x));
      }); // If a prefetch call is registered to the updated list, run the prefetch

      if (this.prefetch.hasOwnProperty(listName)) {
        this.getPrefetched(this.prefetch[listName]);
      }
    },

    /**
     * Prefetches a series of lists asynchronously
     *
     * @param prefetches  An object where the key is the name of the prefetched
     *                    list, and the value is an object consisting of the
     *                    parameters that should be sent along with the list
     */
    getPrefetched: function getPrefetched(prefetches) {
      var _arr9 = Object.entries(prefetches);

      for (var _i9 = 0; _i9 < _arr9.length; _i9++) {
        var _arr9$_i = _slicedToArray(_arr9[_i9], 2),
            listName = _arr9$_i[0],
            options = _arr9$_i[1];

        if (prefetches.hasOwnProperty(listName)) {
          this._getAsyncData(listName, '', options(this), true);
        }
      }
    },

    /**
     * Updates an asynchronous list based on a query
     *
     * Filters out any events that were caused by pressing an arrow key
     *
     * @param listName  The name (key) of the list
     * @param event     The event that was fired to trigger the fetch
     * @param options   Any additional options to send in the request
     */
    getAsyncData: function getAsyncData(listName, event, options) {
      if (event.code && (event.code.includes('Arrow') || event.code === 'Tab')) {
        return;
      }

      this._getAsyncData(listName, event.target.value, options);
    },
    _getAsyncData: _.debounce(function (listName, query, options, prefetch) {
      var _this3 = this;

      this.asyncLoading[listName] = true;
      axios.get(this.asyncRoutes[listName], {
        params: {
          term: query,
          options: options
        }
      }).then(function (response) {
        if (prefetch) {
          _this3.prefetchLists[listName] = response.data; // this.filteredLists[listName] = this.lists[listName].clone();
        } else {
          _this3.filteredLists[listName] = response.data;
        }

        _this3.asyncLoading[listName] = false;
      }).catch(function (error) {
        console.error(error);
      });
    }, 500),

    /**
     * Hook that is called before the form is submitted.
     *
     * Bundles the *data* attribute into a string and sends it along with the
     * request to the server, so that the original data structure is preserved
     * if an error occurs.
     */
    beforeSubmit: function beforeSubmit() {
      this.stringifiedData = JSON.stringify(this.data);
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/components/forms/ModelForm.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ModelForm_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/forms/ModelForm.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__ModelForm_vue_vue_type_script_lang_js___["a" /* default */],
  render,
  staticRenderFns,
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
      api.createRecord('89129374', component.options)
    } else {
      api.reload('89129374', component.options)
    }
    
  }
}
component.options.__file = "resources/assets/js/components/forms/ModelForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/forms/ModelForm.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModelForm_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/ModelForm.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModelForm_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ })

});