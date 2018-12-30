webpackJsonp([0,27],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Form.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_OldErrors__ = __webpack_require__("./resources/assets/js/mixins/OldErrors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_OldSources__ = __webpack_require__("./resources/assets/js/mixins/OldSources.js");
//
//
//
//
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
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_OldErrors__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_OldSources__["a" /* default */]],

  props: ['method', 'action'],

  data: function data() {
    return {
      sources: [],
      csrfToken: Laravel.csrfToken
    };
  },


  methods: {
    validateBeforeSubmit: function validateBeforeSubmit(event) {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this.$refs.form.submit();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/VerbForm.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form__ = __webpack_require__("./resources/assets/js/components/forms/Form.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_HasMorphemes__ = __webpack_require__("./resources/assets/js/mixins/HasMorphemes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Datalist_js__ = __webpack_require__("./resources/assets/js/Datalist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_debounce__ = __webpack_require__("./node_modules/lodash/debounce.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_debounce__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






function updateData(data, initial) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.entries(data)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref = _step.value;

      var _ref2 = _slicedToArray(_ref, 2);

      var key = _ref2[0];
      var v = _ref2[1];

      if (key == 'fields') {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = Object.entries(v)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _ref3 = _step2.value;

            var _ref4 = _slicedToArray(_ref3, 2);

            var field = _ref4[0];
            var value = _ref4[1];

            if (initial && initial.hasOwnProperty(field)) {
              value = initial[field];
            }
            Vue.set(data, field, value);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      } else if (data.hasOwnProperty(key)) {
        updateData(v, initial ? initial[key] : null);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  extends: __WEBPACK_IMPORTED_MODULE_0__Form__["default"],

  props: ['is-empty', 'initial', 'languages', 'features', 'classes', 'orders', 'modes'],

  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_HasMorphemes__["a" /* default */]],

  data: function data() {
    return {
      data: {
        fields: {
          name: '',
          phonemicForm: '',
          historicalNotes: '',
          usageNotes: '',
          allomorphyNotes: '',
          privateNotes: ''
        },
        language: { fields: { name: '', id: 0 } },
        parent: { fields: { name: '', id: 0 } },
        structure: {
          fields: { isNegative: false, isDiminutive: false, isAbsolute: 'N/A' },
          subject: { fields: { name: '', id: 0 } },
          primaryObject: { fields: { name: '', id: 0 } },
          secondaryObject: { fields: { name: '', id: 0 } },
          verb_class: { fields: { name: '', id: 0 } },
          order: { fields: { name: '', id: 0 } },
          mode: { fields: { name: '', id: 0 } }
        }
      },

      definitenesses: ['absolute', 'objective', 'N/A'],

      morphemes: [],
      empty: false,
      isFetching: false,
      parentData: []
    };
  },
  created: function created() {
    var _this = this;

    updateData(this.data, this.initial);

    this.$validator.extend('exists', function (value, _ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
          arr = _ref6[0],
          key = _ref6[1];

      return _this[arr].some(function (el) {
        return (key ? el[key] : el) === value;
      });
    });

    if (this.isEmpty) {
      this.empty = this.isEmpty;
    }
  },


  methods: {
    getAsyncData: __WEBPACK_IMPORTED_MODULE_3_lodash_debounce___default()(function () {
      var _this2 = this;

      if (!this.parent.length) {
        this.parentData = [];
        return;
      }

      this.isFetching = true;

      axios.get('/autocomplete/formParents', {
        params: {
          options: {
            language: this.language_id,
            type: 'verb'
          },
          term: this.parent
        }
      }).then(function (response) {
        _this2.parentData = [];
        response.parentData.forEach(function (item) {
          return _this2.parentData.push(item);
        });
      }).catch(function (error) {
        _this2.parentData = [];
        console.error(error);
      }).finally(function () {
        _this2.isFetching = false;
      });
    }, 500)
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/VerbForm.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.argument-inputs .field.has-addons {\n    display: block !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__("./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__("./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__("./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    now = __webpack_require__("./node_modules/lodash/now.js"),
    toNumber = __webpack_require__("./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__("./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/VerbForm.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/VerbForm.vue?vue&type=style&index=0&lang=css&");
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
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerbForm.vue?vue&type=style&index=0&lang=css&", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerbForm.vue?vue&type=style&index=0&lang=css&");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

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
      attrs: { method: _vm.method, action: _vm.action },
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
      _vm._t("default"),
      _vm._v(" "),
      _c("div", { staticClass: "field" }, [
        _c(
          "button",
          {
            staticClass: "button is-primary",
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/VerbForm.vue?vue&type=template&id=659094da&":
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
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.validateBeforeSubmit($event)
        }
      }
    },
    [
      _c("table", { staticClass: "table details" }, [
        _c("tbody", [
          _c("tr", [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "td",
              [
                _c(
                  "b-radio",
                  {
                    attrs: { "native-value": false },
                    model: {
                      value: _vm.empty,
                      callback: function($$v) {
                        _vm.empty = $$v
                      },
                      expression: "empty"
                    }
                  },
                  [_vm._v("\n            Form exists\n          ")]
                ),
                _vm._v(" "),
                _c(
                  "b-radio",
                  {
                    attrs: { "native-value": true },
                    model: {
                      value: _vm.empty,
                      callback: function($$v) {
                        _vm.empty = $$v
                      },
                      expression: "empty"
                    }
                  },
                  [_vm._v("\n            Form does not exist\n          ")]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "td",
              [
                _c(
                  "b-field",
                  {
                    attrs: {
                      type: { "is-danger": _vm.errors.has("language-id") },
                      message: _vm.errors.first("language-id")
                    }
                  },
                  [
                    _c("b-autocomplete", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|exists:languages,name",
                          expression: "'required|exists:languages,name'"
                        }
                      ],
                      attrs: {
                        id: "language-input",
                        name: "language-id",
                        data: _vm.languages,
                        field: "name",
                        "open-on-focus": true
                      },
                      on: {
                        select: function(obj) {
                          return (_vm.data.language.id = obj.id)
                        }
                      },
                      model: {
                        value: _vm.data.language.name,
                        callback: function($$v) {
                          _vm.$set(_vm.data.language, "name", $$v)
                        },
                        expression: "data.language.name"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _vm._m(2),
            _vm._v(" "),
            _c(
              "td",
              [
                _c(
                  "b-field",
                  {
                    attrs: {
                      type: { "is-danger": _vm.errors.has("name") },
                      message: _vm.errors.first("name")
                    }
                  },
                  [
                    _c("b-input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: { required: !_vm.empty },
                          expression: "{required: !empty}"
                        }
                      ],
                      attrs: {
                        id: "name-input",
                        name: "name",
                        autocomplete: "new-password",
                        placeholder: "the form as written in a text",
                        disabled: _vm.empty
                      },
                      model: {
                        value: _vm.data.name,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "name", $$v)
                        },
                        expression: "data.name"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _vm._m(3),
            _vm._v(" "),
            _c(
              "td",
              [
                _c(
                  "b-field",
                  {
                    attrs: {
                      type: { "is-danger": _vm.errors.has("phonemic-form") },
                      message: _vm.errors.first("phonemic-form")
                    }
                  },
                  [
                    _c("b-input", {
                      attrs: {
                        id: "phonemic-form-input",
                        name: "phonemic-form",
                        autocomplete: "new-password",
                        disabled: _vm.empty,
                        placeholder: "the Algonquianist phonemic representation"
                      },
                      model: {
                        value: _vm.data.phonemicForm,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "phonemicForm", $$v)
                        },
                        expression: "data.phonemicForm"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _vm._m(4),
            _vm._v(" "),
            _c(
              "td",
              { staticClass: "argument-inputs" },
              [
                _c(
                  "b-field",
                  { attrs: { grouped: "" } },
                  [
                    _c(
                      "b-field",
                      {
                        attrs: {
                          type: { "is-danger": _vm.errors.has("subject") },
                          message: _vm.errors.first("subject"),
                          expanded: ""
                        }
                      },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "is-hidden-visual",
                            attrs: { for: "subject-input" }
                          },
                          [_vm._v("Subject")]
                        ),
                        _vm._v(" "),
                        _c("b-autocomplete", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|exists:features,name",
                              expression: "'required|exists:features,name'"
                            }
                          ],
                          attrs: {
                            id: "subject-input",
                            name: "subject",
                            data: _vm.features,
                            field: "name",
                            "open-on-focus": true,
                            placeholder: "subject"
                          },
                          on: {
                            select: function(obj) {
                              return (_vm.data.structure.subject.id = obj.id)
                            }
                          },
                          model: {
                            value: _vm.data.structure.subject.name,
                            callback: function($$v) {
                              _vm.$set(_vm.data.structure.subject, "name", $$v)
                            },
                            expression: "data.structure.subject.name"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-field",
                      {
                        attrs: {
                          type: {
                            "is-danger": _vm.errors.has("primary-object")
                          },
                          message: _vm.errors.first("primary-object"),
                          expanded: ""
                        }
                      },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "is-hidden-visual",
                            attrs: { for: "primary-object-input" }
                          },
                          [_vm._v("Primary object")]
                        ),
                        _vm._v(" "),
                        _c("b-autocomplete", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "exists:features,name",
                              expression: "'exists:features,name'"
                            }
                          ],
                          attrs: {
                            id: "primary-object-input",
                            name: "primary-object",
                            data: _vm.features,
                            field: "name",
                            "open-on-focus": true,
                            placeholder: "primary object"
                          },
                          on: {
                            select: function(obj) {
                              return (_vm.data.structure.primaryObject.id =
                                obj.id)
                            }
                          },
                          model: {
                            value: _vm.data.structure.primaryObject.name,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.data.structure.primaryObject,
                                "name",
                                $$v
                              )
                            },
                            expression: "data.structure.primaryObject.name"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-field",
                      {
                        attrs: {
                          type: {
                            "is-danger": _vm.errors.has("secondary-object")
                          },
                          message: _vm.errors.first("secondary-object"),
                          expanded: ""
                        }
                      },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "is-hidden-visual",
                            attrs: { for: "secondary-object-input" }
                          },
                          [_vm._v("Primary object")]
                        ),
                        _vm._v(" "),
                        _c("b-autocomplete", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "exists:features,name",
                              expression: "'exists:features,name'"
                            }
                          ],
                          attrs: {
                            id: "secondary-object-input",
                            name: "secondary-object",
                            data: _vm.features,
                            field: "name",
                            "open-on-focus": true,
                            placeholder: "secondary object"
                          },
                          on: {
                            select: function(obj) {
                              return (_vm.data.structure.secondaryObject.id =
                                obj.id)
                            }
                          },
                          model: {
                            value: _vm.data.structure.secondaryObject.name,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.data.structure.secondaryObject,
                                "name",
                                $$v
                              )
                            },
                            expression: "data.structure.secondaryObject.name"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _vm._m(5),
            _vm._v(" "),
            _c(
              "td",
              [
                _c(
                  "b-field",
                  {
                    attrs: {
                      type: { "is-danger": _vm.errors.has("verb-class") },
                      message: _vm.errors.first("verb-class")
                    }
                  },
                  [
                    _c("b-autocomplete", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|exists:classes,name",
                          expression: "'required|exists:classes,name'"
                        }
                      ],
                      attrs: {
                        id: "class-input",
                        name: "verb-class",
                        data: _vm.classes,
                        field: "name",
                        "open-on-focus": true
                      },
                      on: {
                        select: function(obj) {
                          return (_vm.data.structure.verb_class.id = obj.id)
                        }
                      },
                      model: {
                        value: _vm.data.structure.verb_class.name,
                        callback: function($$v) {
                          _vm.$set(_vm.data.structure.verb_class, "name", $$v)
                        },
                        expression: "data.structure.verb_class.name"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _vm._m(6),
            _vm._v(" "),
            _c(
              "td",
              [
                _c(
                  "b-field",
                  {
                    attrs: {
                      type: { "is-danger": _vm.errors.has("order") },
                      message: _vm.errors.first("order")
                    }
                  },
                  [
                    _c("b-autocomplete", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|exists:orders,name",
                          expression: "'required|exists:orders,name'"
                        }
                      ],
                      attrs: {
                        id: "order-input",
                        name: "order",
                        data: _vm.orders,
                        field: "name",
                        "open-on-focus": true
                      },
                      on: {
                        select: function(obj) {
                          return (_vm.data.structure.order.id = obj.id)
                        }
                      },
                      model: {
                        value: _vm.data.structure.order.name,
                        callback: function($$v) {
                          _vm.$set(_vm.data.structure.order, "name", $$v)
                        },
                        expression: "data.structure.order.name"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _vm._m(7),
            _vm._v(" "),
            _c(
              "td",
              [
                _c(
                  "b-field",
                  {
                    attrs: {
                      type: { "is-danger": _vm.errors.has("mode") },
                      message: _vm.errors.first("mode")
                    }
                  },
                  [
                    _c("b-autocomplete", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|exists:modes,name",
                          expression: "'required|exists:modes,name'"
                        }
                      ],
                      attrs: {
                        id: "mode-input",
                        name: "mode",
                        data: _vm.modes,
                        field: "name",
                        "open-on-focus": true
                      },
                      on: {
                        select: function(obj) {
                          return (_vm.data.structure.mode.id = obj.id)
                        }
                      },
                      model: {
                        value: _vm.data.structure.mode.name,
                        callback: function($$v) {
                          _vm.$set(_vm.data.structure.mode, "name", $$v)
                        },
                        expression: "data.structure.mode.name"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _vm._m(8),
            _vm._v(" "),
            _c(
              "td",
              [
                _c(
                  "b-checkbox",
                  {
                    model: {
                      value: _vm.data.structure.isNegative,
                      callback: function($$v) {
                        _vm.$set(_vm.data.structure, "isNegative", $$v)
                      },
                      expression: "data.structure.isNegative"
                    }
                  },
                  [_vm._v("Negative")]
                ),
                _vm._v(" "),
                _c(
                  "b-checkbox",
                  {
                    model: {
                      value: _vm.data.structure.isDiminutive,
                      callback: function($$v) {
                        _vm.$set(_vm.data.structure, "isDiminutive", $$v)
                      },
                      expression: "data.structure.isDiminutive"
                    }
                  },
                  [_vm._v("Diminutive")]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _vm._m(9),
            _vm._v(" "),
            _c(
              "td",
              [
                _c(
                  "b-field",
                  {
                    attrs: {
                      type: { "is-danger": _vm.errors.has("definiteness") },
                      message: _vm.errors.first("definiteness")
                    }
                  },
                  [
                    _c("b-autocomplete", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|exists:definitenesses",
                          expression: "'required|exists:definitenesses'"
                        }
                      ],
                      attrs: {
                        id: "definiteness-input",
                        name: "definiteness",
                        data: _vm.definitenesses,
                        "open-on-focus": true
                      },
                      model: {
                        value: _vm.data.structure.isAbsolute,
                        callback: function($$v) {
                          _vm.$set(_vm.data.structure, "isAbsolute", $$v)
                        },
                        expression: "data.structure.isAbsolute"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("button", { attrs: { type: "submit" } }, [_vm._v("Submit")])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", [_c("label", [_vm._v("Status")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", [
      _c("label", { attrs: { for: "language-input" } }, [_vm._v("Language")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", [
      _c("label", { attrs: { for: "name-input" } }, [_vm._v("Surface form")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", [
      _c("label", { attrs: { for: "phonemic-form-input" } }, [
        _vm._v("Phonemic form")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", [_c("label", [_vm._v("Arguments")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", [
      _c("label", { attrs: { for: "class-input" } }, [_vm._v("Class")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", [
      _c("label", { attrs: { for: "order-input" } }, [_vm._v("Order")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", [
      _c("label", { attrs: { for: "mode-input" } }, [_vm._v("Mode")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", [_c("label", [_vm._v("Submode")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", [
      _c("label", { attrs: { for: "definiteness-input" } }, [
        _vm._v("Definiteness")
      ])
    ])
  }
]
render._withStripped = true



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

/***/ "./resources/assets/js/components/forms/Form.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form_vue_vue_type_template_id_68350a1b___ = __webpack_require__("./resources/assets/js/components/forms/Form.vue?vue&type=template&id=68350a1b&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/forms/Form.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Form_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Form_vue_vue_type_template_id_68350a1b___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Form_vue_vue_type_template_id_68350a1b___["b" /* staticRenderFns */],
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
      api.createRecord('68350a1b', component.options)
    } else {
      api.reload('68350a1b', component.options)
    }
    module.hot.accept("./Form.vue?vue&type=template&id=68350a1b&", function () {
      api.rerender('68350a1b', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
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


/***/ }),

/***/ "./resources/assets/js/components/forms/VerbForm.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VerbForm_vue_vue_type_template_id_659094da___ = __webpack_require__("./resources/assets/js/components/forms/VerbForm.vue?vue&type=template&id=659094da&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VerbForm_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/forms/VerbForm.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VerbForm_vue_vue_type_style_index_0_lang_css___ = __webpack_require__("./resources/assets/js/components/forms/VerbForm.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__VerbForm_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__VerbForm_vue_vue_type_template_id_659094da___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__VerbForm_vue_vue_type_template_id_659094da___["b" /* staticRenderFns */],
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
      api.createRecord('659094da', component.options)
    } else {
      api.reload('659094da', component.options)
    }
    module.hot.accept("./VerbForm.vue?vue&type=template&id=659094da&", function () {
      api.rerender('659094da', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/forms/VerbForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/forms/VerbForm.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerbForm_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/VerbForm.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerbForm_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/forms/VerbForm.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VerbForm_vue_vue_type_style_index_0_lang_css___ = __webpack_require__("./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/VerbForm.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VerbForm_vue_vue_type_style_index_0_lang_css____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VerbForm_vue_vue_type_style_index_0_lang_css___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VerbForm_vue_vue_type_style_index_0_lang_css____default.a); 

/***/ }),

/***/ "./resources/assets/js/components/forms/VerbForm.vue?vue&type=template&id=659094da&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerbForm_vue_vue_type_template_id_659094da___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/VerbForm.vue?vue&type=template&id=659094da&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerbForm_vue_vue_type_template_id_659094da___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerbForm_vue_vue_type_template_id_659094da___["b"]; });


/***/ }),

/***/ "./resources/assets/js/mixins/HasMorphemes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
    props: ['init-morphemes'],

    data: function data() {
        return {
            morphemes: []
        };
    },
    created: function created() {
        if (this.initMorphemes) {
            this.morphemes = this.initMorphemes;
        }
    }
});

/***/ }),

/***/ "./resources/assets/js/mixins/OldErrors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['oldErrors'],

  mounted: function mounted() {
    var _this = this;

    if (this.oldErrors) {
      _.forEach(this.oldErrors, function (errors, field) {
        errors.forEach(function (message) {
          return _this.$root.errors.add({ field: field, msg: message });
        });
      });
    };
  }
});

/***/ }),

/***/ "./resources/assets/js/mixins/OldSources.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	props: ['oldSources'],

	created: function created() {
		var _this = this;

		if (this.oldSources) {
			this.oldSources.forEach(function (source) {
				_this.sources.push({
					short: source.display ? source.display : source.short,
					id: source.id,
					long: source.long,
					extraInfo: source.pivot ? source.pivot.extraInfo : source.extraInfo,
					description: source.pivot ? source.pivot.description : source.description
				});
			});
		}
	}
});

/***/ })

});