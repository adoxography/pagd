webpackJsonp([38],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Tag-Input.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_input_tag__ = __webpack_require__("./node_modules/vue-input-tag/dist/vueInputTag.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_input_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_input_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuedraggable__ = __webpack_require__("./node_modules/vuedraggable/dist/vuedraggable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuedraggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuedraggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_typeahead__ = __webpack_require__("./node_modules/vue-typeahead/dist/vue-typeahead.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_typeahead___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_typeahead__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_clickaway__ = __webpack_require__("./node_modules/vue-clickaway/dist/vue-clickaway.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_clickaway___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_clickaway__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_Colour__ = __webpack_require__("./resources/assets/js/util/Colour.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  extends: __WEBPACK_IMPORTED_MODULE_0_vue_input_tag___default.a,
  mixins: [__WEBPACK_IMPORTED_MODULE_2_vue_typeahead___default.a],
  directives: {
    onClickaway: __WEBPACK_IMPORTED_MODULE_3_vue_clickaway__["directive"]
  },
  props: {
    source: {
      default: []
    },
    tags: {
      default: []
    },
    name: {
      type: String
    },
    allowHyphens: {
      type: Boolean,
      default: true
    },
    allowPeriods: {
      type: Boolean,
      default: true
    },
    allowDuplicates: {
      type: Boolean,
      default: true
    },
    allowNew: {
      type: Boolean,
      default: false
    },
    typewriter: {
      default: false
    },
    limit: {
      default: false
    }
  },
  computed: {
    src: function src() {
      if (_.isString(this.source) && this.ajaxOptions) {
        var options = '';

        _.forEach(this.ajaxOptions(), function (value, key) {
          if (options.length > 0) {
            options += '&';
          }

          options += "options[".concat(key, "]=").concat(value);
        });

        if (options.length > 0) {
          options = '?' + options;
        }

        return this.source + options;
      }

      return this.source;
    },
    typewriterBottom: function typewriterBottom() {
      var pos = 1;

      if (this.innerTags.length > 0) {
        pos += 2;
      }

      return pos;
    },

    /**
     * Override InputTag's limit property, since it clashes with VueTypeahead's limit prop
     */
    isLimit: function isLimit() {
      return false;
    }
  },
  data: function data() {
    return {
      keyCodes: [13, 188, 9],
      $http: axios,
      queryParamName: 'term',
      defaultColor: "#fff74a"
    };
  },
  components: {
    draggable: __WEBPACK_IMPORTED_MODULE_1_vuedraggable___default.a
  },
  created: function created() {
    if (!this.allowHyphens) {
      this.keyCodes.push(189);
    }

    if (!this.allowPeriods) {
      this.keyCodes.push(110, 190);
    }

    this.innerTags = _toConsumableArray(this.tags);
  },
  mounted: function mounted() {
    var _this = this;

    this.query = function () {
      return _this.newTag;
    };
  },
  methods: {
    triggerUpdate: function triggerUpdate() {
      if (Array.isArray(this.src)) {
        this.filter();
      } else {
        this.update();
      }
    },
    filter: function filter() {
      var _this2 = this;

      this.items = this.source.filter(function (item) {
        return item.name.toLowerCase().includes(_this2.newTag.toLowerCase());
      });
    },
    onHit: function onHit(item) {
      if (_.isString(item)) {
        item = {
          name: item,
          color: "#fff74a",
          id: 0
        };
      }

      this.addNew(item);
      this.items = [];
      this.resetActive();
      this.$emit('input', this.innerTags);
    },
    removeTag: function removeTag(index) {
      this.remove(index);
      this.$forceUpdate();
      this.$emit('input', this.innerTags);
    },
    toggleList: function toggleList() {
      if (this.hasItems) {
        this.items = [];
      } else {
        this.triggerUpdate();

        if (!this.hasItems && Array.isArray(this.source)) {
          this.items = this.source;
        }
      }
    },
    onEnter: function onEnter(event) {
      if (this.keyCodes.indexOf(event.keyCode) >= 0) {
        if (this.current >= 0) {
          event.preventDefault();
          this.hit();
        } else if (this.newTag.length > 0 && this.allowNew) {
          event.preventDefault();
          this.onHit(this.newTag);
        }
      } else if (event.keyCode == 46 || event.keyCode == 8) {
        // delete or backspace
        this.removeLastTag();
      } else if (event.keyCode == 38) {
        // up
        this.up();
      } else if (event.keyCode == 40) {
        // down
        if (this.hasItems) {
          this.down();
        } else {
          this.toggleList();
        }
      }
    },
    resetActive: function resetActive() {
      this.current = -1;
    },
    addNew: function addNew(tag) {
      if (tag && (this.innerTags.indexOf(tag) === -1 || this.allowDuplicates) && this.validateIfNeeded(tag)) {
        this.innerTags.push(tag);
        this.tagChange();
      }

      this.newTag = '';
    },
    prepareResponseData: function prepareResponseData(data) {
      for (var i = 0; i < data.length; i++) {
        data[i]['name'] = data[i].name.replace(/<\/?a(?=[ >])[^>]*>/gi, ""); // Get rid of anchor tags
      }

      return data;
    },
    closeList: function closeList() {
      this.items = [];
    },
    // Override if desired
    onClickTag: function onClickTag(tag) {},
    fontColour: __WEBPACK_IMPORTED_MODULE_4__util_Colour__["a" /* invertColour */]
  }
});

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/promise.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/promise.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/defineProperty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/promise.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__("./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__("./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__("./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_for-of.js":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__("./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__("./node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__("./node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__("./node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__("./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_invoke.js":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__("./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__("./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__("./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_microtask.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var macrotask = __webpack_require__("./node_modules/core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("./node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__("./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__("./node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__("./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__("./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__("./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__("./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__("./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__("./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_perform.js":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__("./node_modules/core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-species.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__("./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_task.js":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var invoke = __webpack_require__("./node_modules/core-js/library/modules/_invoke.js");
var html = __webpack_require__("./node_modules/core-js/library/modules/_html.js");
var cel = __webpack_require__("./node_modules/core-js/library/modules/_dom-create.js");
var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("./node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__("./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__("./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__("./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("./node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("./node_modules/core-js/library/modules/_library.js");
var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var classof = __webpack_require__("./node_modules/core-js/library/modules/_classof.js");
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__("./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__("./node_modules/core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__("./node_modules/core-js/library/modules/_species-constructor.js");
var task = __webpack_require__("./node_modules/core-js/library/modules/_task.js").set;
var microtask = __webpack_require__("./node_modules/core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__("./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__("./node_modules/core-js/library/modules/_perform.js");
var promiseResolve = __webpack_require__("./node_modules/core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("./node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("./node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__("./node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__("./node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__("./node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__("./node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__("./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__("./node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Tag-Input.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.vue-input-tag-wrapper {\n\toverflow: initial;\n}\n.vue-input-tag-wrapper .new-tag {\n\tmargin: 0;\n\tcolor: initial;\n\tfont-size: 1rem;\n\twidth: initial;\n}\n.tags-field .tag {\n\tfont-size: 1rem;\n}\n.tags-field .tag span {\n\tcursor: default;\n}\n.typeahead-dropdown {\n\tposition: absolute;\n\tz-index: 1000;\n\tpadding: 0;\n}\nli.active {\n\tbackground-color: grey;\n}\n", ""]);

// exports


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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Tag-Input.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Tag-Input.vue?vue&type=style&index=0&lang=css&");
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
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tag-Input.vue?vue&type=style&index=0&lang=css&", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tag-Input.vue?vue&type=style&index=0&lang=css&");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-input-tag/dist/vueInputTag.common.js":
/***/ (function(module, exports) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "1eb2":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "3b2b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var inheritIfRequired = __webpack_require__("5dbc");
var dP = __webpack_require__("86cc").f;
var gOPN = __webpack_require__("9093").f;
var isRegExp = __webpack_require__("aae3");
var $flags = __webpack_require__("0bfb");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__("9e1e") && (!CORRECT_NEW || __webpack_require__("79e5")(function () {
  re2[__webpack_require__("2b4c")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__("2aba")(global, 'RegExp', $RegExp);
}

__webpack_require__("7a56")('RegExp');


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "456d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("4bf8");
var $keys = __webpack_require__("0d58");

__webpack_require__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5c94":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6900");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("a08cad1e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "5eda":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("5ca1");
var core = __webpack_require__("8378");
var fails = __webpack_require__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "6900":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.vue-input-tag-wrapper{-webkit-appearance:textfield;background-color:#fff;border:1px solid #ccc;cursor:text;display:flex;flex-wrap:wrap;overflow:hidden;padding-left:4px;padding-top:4px;text-align:left\n}\n.vue-input-tag-wrapper .input-tag{background-color:#cde69c;border:1px solid #a5d24a;border-radius:2px;color:#638421;display:inline-block;font-size:13px;font-weight:400;margin-bottom:4px;margin-right:4px;padding:3px\n}\n.vue-input-tag-wrapper .input-tag .remove{color:#638421;cursor:pointer;font-weight:700\n}\n.vue-input-tag-wrapper .input-tag .remove:hover{text-decoration:none\n}\n.vue-input-tag-wrapper .input-tag .remove:before{content:\" x\"\n}\n.vue-input-tag-wrapper .new-tag{background:transparent;border:0;color:#777;flex-grow:1;font-size:13px;font-weight:400;margin-bottom:6px;margin-top:1px;outline:none;padding:4px 4px 4px 0\n}\n.vue-input-tag-wrapper.read-only{cursor:default\n}", ""]);

// exports


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7a56":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var dP = __webpack_require__("86cc");
var DESCRIPTORS = __webpack_require__("9e1e");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "8e26":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTag_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5c94");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTag_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTag_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTag_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("1eb2");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0595ba96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InputTag.vue?vue&type=template&id=02df55b8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-input-tag-wrapper",class:{
    'read-only': _vm.readOnly,
    'vue-input-tag-wrapper--active': _vm.isInputActive,
  },on:{"click":function($event){_vm.focusNewTag()}}},[_vm._l((_vm.innerTags),function(tag,index){return _c('span',{key:index,staticClass:"input-tag"},[_c('span',[_vm._v(_vm._s(tag))]),(!_vm.readOnly)?_c('a',{staticClass:"remove",on:{"click":function($event){$event.preventDefault();$event.stopPropagation();_vm.remove(index)}}}):_vm._e()])}),(!_vm.readOnly && !_vm.isLimit)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newTag),expression:"newTag"}],ref:"inputtag",staticClass:"new-tag",attrs:{"placeholder":_vm.placeholder,"type":"text"},domProps:{"value":(_vm.newTag)},on:{"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"delete",[8,46],$event.key,["Backspace","Delete"])){ return null; }$event.stopPropagation();return _vm.removeLastTag($event)},_vm.addNew],"blur":_vm.handleInputBlur,"focus":_vm.handleInputFocus,"input":function($event){if($event.target.composing){ return; }_vm.newTag=$event.target.value}}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/InputTag.vue?vue&type=template&id=02df55b8&

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/typeof.js
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/iterableToArray.js
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__("3b2b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InputTag.vue?vue&type=script&lang=js&







/* eslint-disable */
var validators = {
  email: new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
  url: new RegExp(/^(https?|ftp|rmtp|mms):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i),
  text: new RegExp(/^[a-zA-Z]+$/),
  digits: new RegExp(/^[\d() \.\:\-\+#]+$/),
  isodate: new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/)
};
/* eslint-enable */

/* harmony default export */ var InputTagvue_type_script_lang_js_ = ({
  name: "InputTag",
  props: {
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    placeholder: {
      type: String,
      default: ""
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    validate: {
      type: String | Function | Object,
      default: ""
    },
    addTagOnKeys: {
      type: Array,
      default: function _default() {
        return [13, // Return
        188, // Comma ','
        9 // Tab
        ];
      }
    },
    addTagOnBlur: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: -1
    },
    allowDuplicates: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      newTag: "",
      innerTags: _toConsumableArray(this.value),
      isInputActive: false
    };
  },
  computed: {
    isLimit: function isLimit() {
      return this.limit > 0 && Number(this.limit) === this.innerTags.length;
    }
  },
  methods: {
    focusNewTag: function focusNewTag() {
      if (this.readOnly || !this.$el.querySelector(".new-tag")) {
        return;
      }

      this.$el.querySelector(".new-tag").focus();
    },
    handleInputFocus: function handleInputFocus() {
      this.isInputActive = true;
    },
    handleInputBlur: function handleInputBlur(e) {
      this.isInputActive = false;
      this.addNew(e);
    },
    addNew: function addNew(e) {
      var keyShouldAddTag = e ? this.addTagOnKeys.indexOf(e.keyCode) !== -1 : true;
      var typeIsNotBlur = e && e.type !== "blur";

      if (!keyShouldAddTag && (typeIsNotBlur || !this.addTagOnBlur) || this.isLimit) {
        return;
      }

      if (this.newTag && (this.allowDuplicates || this.innerTags.indexOf(this.newTag) === -1) && this.validateIfNeeded(this.newTag)) {
        this.innerTags.push(this.newTag);
        this.newTag = "";
        this.tagChange();
        e && e.preventDefault();
      }
    },
    validateIfNeeded: function validateIfNeeded(tagValue) {
      if (this.validate === "" || this.validate === undefined) {
        return true;
      }

      if (typeof this.validate === "function") {
        return this.validate(tagValue);
      }

      if (typeof this.validate === "string" && Object.keys(validators).indexOf(this.validate) > -1) {
        return validators[this.validate].test(tagValue);
      }

      if (_typeof(this.validate) === "object" && this.validate.test !== undefined) {
        return this.validate.test(tagValue);
      }

      return true;
    },
    remove: function remove(index) {
      this.innerTags.splice(index, 1);
      this.tagChange();
    },
    removeLastTag: function removeLastTag() {
      if (this.newTag) {
        return;
      }

      this.innerTags.pop();
      this.tagChange();
    },
    tagChange: function tagChange() {
      this.$emit("update:tags", this.innerTags);
      this.$emit("input", this.innerTags);
    }
  }
});
// CONCATENATED MODULE: ./src/components/InputTag.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_InputTagvue_type_script_lang_js_ = (InputTagvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/InputTag.vue?vue&type=style&index=0&lang=css&
var InputTagvue_type_style_index_0_lang_css_ = __webpack_require__("8e26");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/InputTag.vue






/* normalize component */

var component = normalizeComponent(
  components_InputTagvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "InputTag.vue"
/* harmony default export */ var InputTag = (component.exports);
// CONCATENATED MODULE: ./src/components/index.js

/* harmony default export */ var components = (InputTag);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components);



/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ });
//# sourceMappingURL=vueInputTag.common.js.map

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Tag-Input.vue?vue&type=template&id=0644a7e0&lang=pug&":
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
      _c("transition", { attrs: { name: "fade" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.innerTags.length > 0,
                expression: "innerTags.length > 0"
              }
            ],
            staticClass: "field tags-field",
            staticStyle: { "margin-bottom": "0" }
          },
          [
            _c("div", { staticClass: "control" }, [
              _c(
                "div",
                { staticClass: "input" },
                [
                  _c(
                    "draggable",
                    {
                      model: {
                        value: _vm.innerTags,
                        callback: function($$v) {
                          _vm.innerTags = $$v
                        },
                        expression: "innerTags"
                      }
                    },
                    _vm._l(_vm.innerTags, function(tag, index) {
                      return _c(
                        "span",
                        {
                          key: index,
                          staticClass: "tag",
                          style: {
                            "background-color": tag.colour
                              ? tag.colour
                              : _vm.defaultColor,
                            color: _vm.fontColour(
                              tag.colour ? tag.colour : _vm.defaultColor
                            )
                          },
                          on: {
                            click: function($event) {
                              _vm.onClickTag(tag)
                            }
                          }
                        },
                        [
                          _c("span", {
                            domProps: { innerHTML: _vm._s(tag.name) }
                          }),
                          !_vm.readOnly
                            ? _c("a", {
                                staticClass: "delete is-small",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    $event.stopPropagation()
                                    _vm.removeTag(index)
                                  }
                                }
                              })
                            : _vm._e(),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: tag.name,
                                expression: "tag.name"
                              }
                            ],
                            attrs: {
                              type: "hidden",
                              name: _vm.name + "[" + index + "][name]"
                            },
                            domProps: { value: tag.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(tag, "name", $event.target.value)
                              }
                            }
                          }),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: tag.id,
                                expression: "tag.id"
                              }
                            ],
                            attrs: {
                              type: "hidden",
                              name: _vm.name + "[" + index + "][id]"
                            },
                            domProps: { value: tag.id },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(tag, "id", $event.target.value)
                              }
                            }
                          })
                        ]
                      )
                    }),
                    0
                  )
                ],
                1
              )
            ])
          ]
        )
      ]),
      _c(
        "div",
        {
          directives: [
            {
              name: "on-clickaway",
              rawName: "v-on-clickaway",
              value: _vm.closeList,
              expression: "closeList"
            }
          ],
          staticClass: "alg-datalist alg-datalist-container"
        },
        [
          _c(
            "div",
            {
              staticClass: "field has-addons",
              staticStyle: { "margin-bottom": "0" }
            },
            [
              _c(
                "div",
                {
                  class: {
                    control: true,
                    "is-expanded": true,
                    "is-loading": _vm.loading
                  }
                },
                [
                  _c(
                    "alg-typewriter",
                    {
                      attrs: {
                        options: { size: _vm.typewriterBottom },
                        disabled: !_vm.typewriter
                      }
                    },
                    [
                      !_vm.readOnly
                        ? _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.newTag,
                                expression: "newTag"
                              }
                            ],
                            staticClass: "input",
                            attrs: {
                              placeholder: _vm.placeholder,
                              type: "text"
                            },
                            domProps: { value: _vm.newTag },
                            on: {
                              keydown: function($event) {
                                _vm.onEnter($event)
                              },
                              input: [
                                function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.newTag = $event.target.value
                                },
                                _vm.triggerUpdate
                              ]
                            }
                          })
                        : _vm._e()
                    ]
                  )
                ],
                1
              ),
              _c("div", { staticClass: "control" }, [
                _c(
                  "a",
                  { staticClass: "button", on: { click: _vm.toggleList } },
                  [_vm._m(0)]
                )
              ])
            ]
          ),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.hasItems,
                  expression: "hasItems"
                }
              ],
              staticClass: "box alg-datalist-dropdown",
              on: { mouseleave: _vm.resetActive }
            },
            [
              _c(
                "ul",
                _vm._l(_vm.items, function(item, $item) {
                  return _c(
                    "li",
                    {
                      class: _vm.activeClass($item),
                      on: {
                        mousedown: _vm.hit,
                        mousemove: function($event) {
                          _vm.setActive($item)
                        }
                      }
                    },
                    [_c("span", { domProps: { innerHTML: _vm._s(item.name) } })]
                  )
                }),
                0
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-angle-down" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-typeahead/dist/vue-typeahead.common.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      items: [],
      query: '',
      current: -1,
      loading: false,
      selectFirst: false,
      queryParamName: 'q'
    };
  },


  computed: {
    hasItems: function hasItems() {
      return this.items.length > 0;
    },
    isEmpty: function isEmpty() {
      return !this.query;
    },
    isDirty: function isDirty() {
      return !!this.query;
    }
  },

  methods: {
    update: function update() {
      var _this = this;

      this.cancel();

      if (!this.query) {
        return this.reset();
      }

      if (this.minChars && this.query.length < this.minChars) {
        return;
      }

      this.loading = true;

      this.fetch().then(function (response) {
        if (response && _this.query) {
          var data = response.data;
          data = _this.prepareResponseData ? _this.prepareResponseData(data) : data;
          _this.items = _this.limit ? data.slice(0, _this.limit) : data;
          _this.current = -1;
          _this.loading = false;

          if (_this.selectFirst) {
            _this.down();
          }
        }
      });
    },
    fetch: function fetch() {
      var _this2 = this;

      if (!this.$http) {
        return _vue.util.warn('You need to provide a HTTP client', this);
      }

      if (!this.src) {
        return _vue.util.warn('You need to set the `src` property', this);
      }

      var src = this.queryParamName ? this.src : this.src + this.query;

      var params = this.queryParamName ? (0, _assign2.default)((0, _defineProperty3.default)({}, this.queryParamName, this.query), this.data) : this.data;

      var cancel = new _promise2.default(function (resolve) {
        return _this2.cancel = resolve;
      });
      var request = this.$http.get(src, { params: params });

      return _promise2.default.race([cancel, request]);
    },
    cancel: function cancel() {},
    reset: function reset() {
      this.items = [];
      this.query = '';
      this.loading = false;
    },
    setActive: function setActive(index) {
      this.current = index;
    },
    activeClass: function activeClass(index) {
      return {
        active: this.current === index
      };
    },
    hit: function hit() {
      if (this.current !== -1) {
        this.onHit(this.items[this.current]);
      }
    },
    up: function up() {
      if (this.current > 0) {
        this.current--;
      } else if (this.current === -1) {
        this.current = this.items.length - 1;
      } else {
        this.current = -1;
      }
    },
    down: function down() {
      if (this.current < this.items.length - 1) {
        this.current++;
      } else {
        this.current = -1;
      }
    },
    onHit: function onHit() {
      _vue.util.warn('You need to implement the `onHit` method', this);
    }
  }
};


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

/***/ "./resources/assets/js/components/Tag-Input.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tag_Input_vue_vue_type_template_id_0644a7e0_lang_pug___ = __webpack_require__("./resources/assets/js/components/Tag-Input.vue?vue&type=template&id=0644a7e0&lang=pug&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tag_Input_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Tag-Input.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tag_Input_vue_vue_type_style_index_0_lang_css___ = __webpack_require__("./resources/assets/js/components/Tag-Input.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Tag_Input_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Tag_Input_vue_vue_type_template_id_0644a7e0_lang_pug___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Tag_Input_vue_vue_type_template_id_0644a7e0_lang_pug___["b" /* staticRenderFns */],
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
      api.createRecord('0644a7e0', component.options)
    } else {
      api.reload('0644a7e0', component.options)
    }
    module.hot.accept("./Tag-Input.vue?vue&type=template&id=0644a7e0&lang=pug&", function () {
      api.rerender('0644a7e0', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/Tag-Input.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Tag-Input.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_Input_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Tag-Input.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_Input_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Tag-Input.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_Input_vue_vue_type_style_index_0_lang_css___ = __webpack_require__("./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Tag-Input.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_Input_vue_vue_type_style_index_0_lang_css____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_Input_vue_vue_type_style_index_0_lang_css___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_Input_vue_vue_type_style_index_0_lang_css____default.a); 

/***/ }),

/***/ "./resources/assets/js/components/Tag-Input.vue?vue&type=template&id=0644a7e0&lang=pug&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_Input_vue_vue_type_template_id_0644a7e0_lang_pug___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Tag-Input.vue?vue&type=template&id=0644a7e0&lang=pug&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_Input_vue_vue_type_template_id_0644a7e0_lang_pug___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_Input_vue_vue_type_template_id_0644a7e0_lang_pug___["b"]; });


/***/ }),

/***/ "./resources/assets/js/util/Colour.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return invertColour; });
function invertColour(hexTripletColor) {
  var color = hexTripletColor;
  color = color.substring(1); // remove #

  color = parseInt(color, 16); // convert to integer

  color = 0xFFFFFF ^ color; // invert three bytes

  color = color.toString(16); // convert to hex

  color = ("000000" + color).slice(-6); // pad with leading zeros

  color = "#" + color; // prepend #

  return color;
}



/***/ })

});