(function () {
  'use strict';

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _global = createCommonjsModule(function (module) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
    : Function('return this')();
    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var _global$1 = /*#__PURE__*/Object.freeze({
    default: _global,
    __moduleExports: _global
  });

  var _core = createCommonjsModule(function (module) {
    var core = module.exports = {
      version: '2.5.3'
    };
    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });
  var _core_1 = _core.version;

  var _core$1 = /*#__PURE__*/Object.freeze({
    default: _core,
    __moduleExports: _core,
    version: _core_1
  });

  var _isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var _isObject$1 = /*#__PURE__*/Object.freeze({
    default: _isObject,
    __moduleExports: _isObject
  });

  var isObject = ( _isObject$1 && _isObject ) || _isObject$1;

  var _anObject = function (it) {
    if (!isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _anObject$1 = /*#__PURE__*/Object.freeze({
    default: _anObject,
    __moduleExports: _anObject
  });

  var _fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  var _fails$1 = /*#__PURE__*/Object.freeze({
    default: _fails,
    __moduleExports: _fails
  });

  var fails = ( _fails$1 && _fails ) || _fails$1;

  var _descriptors = !fails(function () {
    return Object.defineProperty({}, 'a', {
      get: function () {
        return 7;
      }
    }).a != 7;
  });

  var _descriptors$1 = /*#__PURE__*/Object.freeze({
    default: _descriptors,
    __moduleExports: _descriptors
  });

  var global$1 = ( _global$1 && _global ) || _global$1;

  var document$1 = global$1.document; // typeof document.createElement is 'object' in old IE

  var is = isObject(document$1) && isObject(document$1.createElement);

  var _domCreate = function (it) {
    return is ? document$1.createElement(it) : {};
  };

  var _domCreate$1 = /*#__PURE__*/Object.freeze({
    default: _domCreate,
    __moduleExports: _domCreate
  });

  var require$$0 = ( _descriptors$1 && _descriptors ) || _descriptors$1;

  var cel = ( _domCreate$1 && _domCreate ) || _domCreate$1;

  var _ie8DomDefine = !require$$0 && !fails(function () {
    return Object.defineProperty(cel('div'), 'a', {
      get: function () {
        return 7;
      }
    }).a != 7;
  });

  var _ie8DomDefine$1 = /*#__PURE__*/Object.freeze({
    default: _ie8DomDefine,
    __moduleExports: _ie8DomDefine
  });

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string

  var _toPrimitive$1 = function (it, S) {
    if (!isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var _toPrimitive$2 = /*#__PURE__*/Object.freeze({
    default: _toPrimitive$1,
    __moduleExports: _toPrimitive$1
  });

  var anObject = ( _anObject$1 && _anObject ) || _anObject$1;

  var IE8_DOM_DEFINE = ( _ie8DomDefine$1 && _ie8DomDefine ) || _ie8DomDefine$1;

  var require$$16 = ( _toPrimitive$2 && _toPrimitive$1 ) || _toPrimitive$2;

  var dP = Object.defineProperty;
  var f = require$$0 ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = require$$16(P, true);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
      return dP(O, P, Attributes);
    } catch (e) {
      /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };
  var _objectDp = {
    f: f
  };

  var _objectDp$1 = /*#__PURE__*/Object.freeze({
    default: _objectDp,
    __moduleExports: _objectDp,
    f: f
  });

  var _propertyDesc = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _propertyDesc$1 = /*#__PURE__*/Object.freeze({
    default: _propertyDesc,
    __moduleExports: _propertyDesc
  });

  var require$$37 = ( _objectDp$1 && _objectDp ) || _objectDp$1;

  var require$$9 = ( _propertyDesc$1 && _propertyDesc ) || _propertyDesc$1;

  var _hide = require$$0 ? function (object, key, value) {
    return require$$37.f(object, key, require$$9(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var _hide$1 = /*#__PURE__*/Object.freeze({
    default: _hide,
    __moduleExports: _hide
  });

  var hasOwnProperty = {}.hasOwnProperty;

  var _has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var _has$1 = /*#__PURE__*/Object.freeze({
    default: _has,
    __moduleExports: _has
  });

  var id$1 = 0;
  var px = Math.random();

  var _uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id$1 + px).toString(36));
  };

  var _uid$1 = /*#__PURE__*/Object.freeze({
    default: _uid,
    __moduleExports: _uid
  });

  var hide = ( _hide$1 && _hide ) || _hide$1;

  var $has = ( _has$1 && _has ) || _has$1;

  var require$$26 = ( _uid$1 && _uid ) || _uid$1;

  var core = ( _core$1 && _core ) || _core$1;

  var _redefine = createCommonjsModule(function (module) {
    var SRC = require$$26('src');
    var TO_STRING = 'toString';
    var $toString = Function[TO_STRING];
    var TPL = ('' + $toString).split(TO_STRING);

    core.inspectSource = function (it) {
      return $toString.call(it);
    };

    (module.exports = function (O, key, val, safe) {
      var isFunction = typeof val == 'function';
      if (isFunction) $has(val, 'name') || hide(val, 'name', key);
      if (O[key] === val) return;
      if (isFunction) $has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

      if (O === global$1) {
        O[key] = val;
      } else if (!safe) {
        delete O[key];
        hide(O, key, val);
      } else if (O[key]) {
        O[key] = val;
      } else {
        hide(O, key, val);
      } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

    })(Function.prototype, TO_STRING, function toString() {
      return typeof this == 'function' && this[SRC] || $toString.call(this);
    });
  });

  var _redefine$1 = /*#__PURE__*/Object.freeze({
    default: _redefine,
    __moduleExports: _redefine
  });

  var _aFunction = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  var _aFunction$1 = /*#__PURE__*/Object.freeze({
    default: _aFunction,
    __moduleExports: _aFunction
  });

  var aFunction = ( _aFunction$1 && _aFunction ) || _aFunction$1;

  var _ctx = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;

    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };

      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };

      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }

    return function ()
    /* ...args */
    {
      return fn.apply(that, arguments);
    };
  };

  var _ctx$1 = /*#__PURE__*/Object.freeze({
    default: _ctx,
    __moduleExports: _ctx
  });

  var redefine = ( _redefine$1 && _redefine ) || _redefine$1;

  var require$$7 = ( _ctx$1 && _ctx ) || _ctx$1;

  var PROTOTYPE = 'prototype';

  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? global$1 : IS_STATIC ? global$1[name] || (global$1[name] = {}) : (global$1[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) source = name;

    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

      out = (own ? target : source)[key]; // bind timers to global for call from export context

      exp = IS_BIND && own ? require$$7(out, global$1) : IS_PROTO && typeof out == 'function' ? require$$7(Function.call, out) : out; // extend global

      if (target) redefine(target, key, out, type & $export.U); // export

      if (exports[key] != out) hide(exports, key, exp);
      if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
  };

  global$1.core = core; // type bitmap

  $export.F = 1; // forced

  $export.G = 2; // global

  $export.S = 4; // static

  $export.P = 8; // proto

  $export.B = 16; // bind

  $export.W = 32; // wrap

  $export.U = 64; // safe

  $export.R = 128; // real proto method for `library`

  var _export = $export;

  var _export$1 = /*#__PURE__*/Object.freeze({
    default: _export,
    __moduleExports: _export
  });

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  var _defined$1 = /*#__PURE__*/Object.freeze({
    default: _defined,
    __moduleExports: _defined
  });

  var defined = ( _defined$1 && _defined ) || _defined$1;

  var _toObject = function (it) {
    return Object(defined(it));
  };

  var _toObject$1 = /*#__PURE__*/Object.freeze({
    default: _toObject,
    __moduleExports: _toObject
  });

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;

  var _toInteger = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  var _toInteger$1 = /*#__PURE__*/Object.freeze({
    default: _toInteger,
    __moduleExports: _toInteger
  });

  var require$$12 = ( _toInteger$1 && _toInteger ) || _toInteger$1;

  var max = Math.max;
  var min = Math.min;

  var _toAbsoluteIndex = function (index, length) {
    index = require$$12(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  };

  var _toAbsoluteIndex$1 = /*#__PURE__*/Object.freeze({
    default: _toAbsoluteIndex,
    __moduleExports: _toAbsoluteIndex
  });

  var min$1 = Math.min;

  var _toLength = function (it) {
    return it > 0 ? min$1(require$$12(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var _toLength$1 = /*#__PURE__*/Object.freeze({
    default: _toLength,
    __moduleExports: _toLength
  });

  var require$$20 = ( _toObject$1 && _toObject ) || _toObject$1;

  var require$$15 = ( _toAbsoluteIndex$1 && _toAbsoluteIndex ) || _toAbsoluteIndex$1;

  var require$$13 = ( _toLength$1 && _toLength ) || _toLength$1;

  var _arrayCopyWithin = [].copyWithin || function copyWithin(target
  /* = 0 */
  , start
  /* = 0, end = @length */
  ) {
    var O = require$$20(this);
    var len = require$$13(O.length);
    var to = require$$15(target, len);
    var from = require$$15(start, len);
    var end = arguments.length > 2 ? arguments[2] : undefined;
    var count = Math.min((end === undefined ? len : require$$15(end, len)) - from, len - to);
    var inc = 1;

    if (from < to && to < from + count) {
      inc = -1;
      from += count - 1;
      to += count - 1;
    }

    while (count-- > 0) {
      if (from in O) O[to] = O[from];else delete O[to];
      to += inc;
      from += inc;
    }

    return O;
  };

  var _arrayCopyWithin$1 = /*#__PURE__*/Object.freeze({
    default: _arrayCopyWithin,
    __moduleExports: _arrayCopyWithin
  });

  var SHARED = '__core-js_shared__';
  var store = global$1[SHARED] || (global$1[SHARED] = {});

  var _shared = function (key) {
    return store[key] || (store[key] = {});
  };

  var _shared$1 = /*#__PURE__*/Object.freeze({
    default: _shared,
    __moduleExports: _shared
  });

  var shared = ( _shared$1 && _shared ) || _shared$1;

  var _wks = createCommonjsModule(function (module) {
    var store = shared('wks');
    var Symbol = global$1.Symbol;
    var USE_SYMBOL = typeof Symbol == 'function';

    var $exports = module.exports = function (name) {
      return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : require$$26)('Symbol.' + name));
    };

    $exports.store = store;
  });

  var _wks$1 = /*#__PURE__*/Object.freeze({
    default: _wks,
    __moduleExports: _wks
  });

  var wks = ( _wks$1 && _wks ) || _wks$1;

  var UNSCOPABLES = wks('unscopables');
  var ArrayProto = Array.prototype;
  if (ArrayProto[UNSCOPABLES] == undefined) hide(ArrayProto, UNSCOPABLES, {});

  var _addToUnscopables = function (key) {
    ArrayProto[UNSCOPABLES][key] = true;
  };

  var _addToUnscopables$1 = /*#__PURE__*/Object.freeze({
    default: _addToUnscopables,
    __moduleExports: _addToUnscopables
  });

  var $export$1 = ( _export$1 && _export ) || _export$1;

  var require$$36 = ( _arrayCopyWithin$1 && _arrayCopyWithin ) || _arrayCopyWithin$1;

  var addToUnscopables = ( _addToUnscopables$1 && _addToUnscopables ) || _addToUnscopables$1;

  $export$1($export$1.P, 'Array', {
    copyWithin: require$$36
  });
  addToUnscopables('copyWithin');

  var _arrayFill = function fill(value
  /* , start = 0, end = @length */
  ) {
    var O = require$$20(this);
    var length = require$$13(O.length);
    var aLen = arguments.length;
    var index = require$$15(aLen > 1 ? arguments[1] : undefined, length);
    var end = aLen > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : require$$15(end, length);

    while (endPos > index) O[index++] = value;

    return O;
  };

  var _arrayFill$1 = /*#__PURE__*/Object.freeze({
    default: _arrayFill,
    __moduleExports: _arrayFill
  });

  var require$$35 = ( _arrayFill$1 && _arrayFill ) || _arrayFill$1;

  $export$1($export$1.P, 'Array', {
    fill: require$$35
  });
  addToUnscopables('fill');

  var toString = {}.toString;

  var _cof = function (it) {
    return toString.call(it).slice(8, -1);
  };

  var _cof$1 = /*#__PURE__*/Object.freeze({
    default: _cof,
    __moduleExports: _cof
  });

  var cof = ( _cof$1 && _cof ) || _cof$1;

  // eslint-disable-next-line no-prototype-builtins

  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };

  var _iobject$1 = /*#__PURE__*/Object.freeze({
    default: _iobject,
    __moduleExports: _iobject
  });

  var _isArray = Array.isArray || function isArray(arg) {
    return cof(arg) == 'Array';
  };

  var _isArray$1 = /*#__PURE__*/Object.freeze({
    default: _isArray,
    __moduleExports: _isArray
  });

  var isArray = ( _isArray$1 && _isArray ) || _isArray$1;

  var SPECIES = wks('species');

  var _arraySpeciesConstructor = function (original) {
    var C;

    if (isArray(original)) {
      C = original.constructor; // cross-realm fallback

      if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;

      if (isObject(C)) {
        C = C[SPECIES];
        if (C === null) C = undefined;
      }
    }

    return C === undefined ? Array : C;
  };

  var _arraySpeciesConstructor$1 = /*#__PURE__*/Object.freeze({
    default: _arraySpeciesConstructor,
    __moduleExports: _arraySpeciesConstructor
  });

  var speciesConstructor = ( _arraySpeciesConstructor$1 && _arraySpeciesConstructor ) || _arraySpeciesConstructor$1;

  var _arraySpeciesCreate = function (original, length) {
    return new (speciesConstructor(original))(length);
  };

  var _arraySpeciesCreate$1 = /*#__PURE__*/Object.freeze({
    default: _arraySpeciesCreate,
    __moduleExports: _arraySpeciesCreate
  });

  var IObject = ( _iobject$1 && _iobject ) || _iobject$1;

  var asc = ( _arraySpeciesCreate$1 && _arraySpeciesCreate ) || _arraySpeciesCreate$1;

  // 1 -> Array#map
  // 2 -> Array#filter
  // 3 -> Array#some
  // 4 -> Array#every
  // 5 -> Array#find
  // 6 -> Array#findIndex

  var _arrayMethods = function (TYPE, $create) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    var create = $create || asc;
    return function ($this, callbackfn, that) {
      var O = require$$20($this);
      var self = IObject(O);
      var f = require$$7(callbackfn, that, 3);
      var length = require$$13(self.length);
      var index = 0;
      var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
      var val, res;

      for (; length > index; index++) if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);

        if (TYPE) {
          if (IS_MAP) result[index] = res; // map
          else if (res) switch (TYPE) {
              case 3:
                return true;
              // some

              case 5:
                return val;
              // find

              case 6:
                return index;
              // findIndex

              case 2:
                result.push(val);
              // filter
            } else if (IS_EVERY) return false; // every
        }
      }

      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };

  var _arrayMethods$1 = /*#__PURE__*/Object.freeze({
    default: _arrayMethods,
    __moduleExports: _arrayMethods
  });

  var require$$0$1 = ( _arrayMethods$1 && _arrayMethods ) || _arrayMethods$1;

  var $find = require$$0$1(5);
  var KEY = 'find';
  var forced = true; // Shouldn't skip holes

  if (KEY in []) Array(1)[KEY](function () {
    forced = false;
  });
  $export$1($export$1.P + $export$1.F * forced, 'Array', {
    find: function find(callbackfn
    /* , that = undefined */
    ) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  addToUnscopables(KEY);

  var $find$1 = require$$0$1(6);
  var KEY$1 = 'findIndex';
  var forced$1 = true; // Shouldn't skip holes

  if (KEY$1 in []) Array(1)[KEY$1](function () {
    forced$1 = false;
  });
  $export$1($export$1.P + $export$1.F * forced$1, 'Array', {
    findIndex: function findIndex(callbackfn
    /* , that = undefined */
    ) {
      return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  addToUnscopables(KEY$1);

  var _iterCall = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) anObject(ret.call(iterator));
      throw e;
    }
  };

  var _iterCall$1 = /*#__PURE__*/Object.freeze({
    default: _iterCall,
    __moduleExports: _iterCall
  });

  var _iterators = {};

  var _iterators$1 = /*#__PURE__*/Object.freeze({
    default: _iterators,
    __moduleExports: _iterators
  });

  var Iterators = ( _iterators$1 && _iterators ) || _iterators$1;

  var ITERATOR = wks('iterator');
  var ArrayProto$1 = Array.prototype;

  var _isArrayIter = function (it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto$1[ITERATOR] === it);
  };

  var _isArrayIter$1 = /*#__PURE__*/Object.freeze({
    default: _isArrayIter,
    __moduleExports: _isArrayIter
  });

  var _createProperty = function (object, index, value) {
    if (index in object) require$$37.f(object, index, require$$9(0, value));else object[index] = value;
  };

  var _createProperty$1 = /*#__PURE__*/Object.freeze({
    default: _createProperty,
    __moduleExports: _createProperty
  });

  var TAG = wks('toStringTag'); // ES3 wrong here

  var ARG = cof(function () {
    return arguments;
  }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (e) {
      /* empty */
    }
  };

  var _classof = function (it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T // builtinTag case
    : ARG ? cof(O) // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

  var _classof$1 = /*#__PURE__*/Object.freeze({
    default: _classof,
    __moduleExports: _classof
  });

  var require$$18 = ( _classof$1 && _classof ) || _classof$1;

  var ITERATOR$1 = wks('iterator');

  var core_getIteratorMethod = core.getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$1] || it['@@iterator'] || Iterators[require$$18(it)];
  };

  var core_getIteratorMethod$1 = /*#__PURE__*/Object.freeze({
    default: core_getIteratorMethod,
    __moduleExports: core_getIteratorMethod
  });

  var ITERATOR$2 = wks('iterator');
  var SAFE_CLOSING = false;

  try {
    var riter = [7][ITERATOR$2]();

    riter['return'] = function () {
      SAFE_CLOSING = true;
    }; // eslint-disable-next-line no-throw-literal
  } catch (e) {
    /* empty */
  }

  var _iterDetect = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;

    try {
      var arr = [7];
      var iter = arr[ITERATOR$2]();

      iter.next = function () {
        return {
          done: safe = true
        };
      };

      arr[ITERATOR$2] = function () {
        return iter;
      };

      exec(arr);
    } catch (e) {
      /* empty */
    }

    return safe;
  };

  var _iterDetect$1 = /*#__PURE__*/Object.freeze({
    default: _iterDetect,
    __moduleExports: _iterDetect
  });

  var call = ( _iterCall$1 && _iterCall ) || _iterCall$1;

  var require$$21 = ( _isArrayIter$1 && _isArrayIter ) || _isArrayIter$1;

  var createProperty = ( _createProperty$1 && _createProperty ) || _createProperty$1;

  var require$$25 = ( core_getIteratorMethod$1 && core_getIteratorMethod ) || core_getIteratorMethod$1;

  var require$$33 = ( _iterDetect$1 && _iterDetect ) || _iterDetect$1;

  $export$1($export$1.S + $export$1.F * !require$$33(function (iter) {
  }), 'Array', {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from(arrayLike
    /* , mapfn = undefined, thisArg = undefined */
    ) {
      var O = require$$20(arrayLike);
      var C = typeof this == 'function' ? this : Array;
      var aLen = arguments.length;
      var mapfn = aLen > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      var index = 0;
      var iterFn = require$$25(O);
      var length, result, step, iterator;
      if (mapping) mapfn = require$$7(mapfn, aLen > 2 ? arguments[2] : undefined, 2); // if object isn't iterable or it's array with default iterator - use simple case

      if (iterFn != undefined && !(C == Array && require$$21(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
        }
      } else {
        length = require$$13(O.length);

        for (result = new C(length); length > index; index++) {
          createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
        }
      }

      result.length = index;
      return result;
    }
  });

  var _toIobject = function (it) {
    return IObject(defined(it));
  };

  var _toIobject$1 = /*#__PURE__*/Object.freeze({
    default: _toIobject,
    __moduleExports: _toIobject
  });

  var toIObject = ( _toIobject$1 && _toIobject ) || _toIobject$1;

  // true  -> Array#includes

  var _arrayIncludes = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIObject($this);
      var length = require$$13(O.length);
      var index = require$$15(fromIndex, length);
      var value; // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare

      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++]; // eslint-disable-next-line no-self-compare

        if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };

  var _arrayIncludes$1 = /*#__PURE__*/Object.freeze({
    default: _arrayIncludes,
    __moduleExports: _arrayIncludes
  });

  var require$$29 = ( _arrayIncludes$1 && _arrayIncludes ) || _arrayIncludes$1;

  var $includes = require$$29(true);
  $export$1($export$1.P, 'Array', {
    includes: function includes(el
    /* , fromIndex = 0 */
    ) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  addToUnscopables('includes');

  var _iterStep = function (done, value) {
    return {
      value: value,
      done: !!done
    };
  };

  var _iterStep$1 = /*#__PURE__*/Object.freeze({
    default: _iterStep,
    __moduleExports: _iterStep
  });

  var _library = false;

  var _library$1 = /*#__PURE__*/Object.freeze({
    default: _library,
    __moduleExports: _library
  });

  var shared$1 = shared('keys');

  var _sharedKey = function (key) {
    return shared$1[key] || (shared$1[key] = require$$26(key));
  };

  var _sharedKey$1 = /*#__PURE__*/Object.freeze({
    default: _sharedKey,
    __moduleExports: _sharedKey
  });

  var require$$1 = ( _sharedKey$1 && _sharedKey ) || _sharedKey$1;

  var arrayIndexOf = require$$29(false);
  var IE_PROTO = require$$1('IE_PROTO');

  var _objectKeysInternal = function (object, names) {
    var O = toIObject(object);
    var i = 0;
    var result = [];
    var key;

    for (key in O) if (key != IE_PROTO) $has(O, key) && result.push(key); // Don't enum bug & hidden keys


    while (names.length > i) if ($has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }

    return result;
  };

  var _objectKeysInternal$1 = /*#__PURE__*/Object.freeze({
    default: _objectKeysInternal,
    __moduleExports: _objectKeysInternal
  });

  // IE 8- don't enum bug keys
  var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

  var _enumBugKeys$1 = /*#__PURE__*/Object.freeze({
    default: _enumBugKeys,
    __moduleExports: _enumBugKeys
  });

  var $keys = ( _objectKeysInternal$1 && _objectKeysInternal ) || _objectKeysInternal$1;

  var require$$0$2 = ( _enumBugKeys$1 && _enumBugKeys ) || _enumBugKeys$1;

  var _objectKeys = Object.keys || function keys(O) {
    return $keys(O, require$$0$2);
  };

  var _objectKeys$1 = /*#__PURE__*/Object.freeze({
    default: _objectKeys,
    __moduleExports: _objectKeys
  });

  var getKeys = ( _objectKeys$1 && _objectKeys ) || _objectKeys$1;

  var _objectDps = require$$0 ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = getKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;

    while (length > i) require$$37.f(O, P = keys[i++], Properties[P]);

    return O;
  };

  var _objectDps$1 = /*#__PURE__*/Object.freeze({
    default: _objectDps,
    __moduleExports: _objectDps
  });

  var document$2 = global$1.document;

  var _html = document$2 && document$2.documentElement;

  var _html$1 = /*#__PURE__*/Object.freeze({
    default: _html,
    __moduleExports: _html
  });

  var dPs = ( _objectDps$1 && _objectDps ) || _objectDps$1;

  var html = ( _html$1 && _html ) || _html$1;

  var IE_PROTO$1 = require$$1('IE_PROTO');

  var Empty = function () {
    /* empty */
  };

  var PROTOTYPE$1 = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = cel('iframe');
    var i = require$$0$2.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);

    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;

    while (i--) delete createDict[PROTOTYPE$1][require$$0$2[i]];

    return createDict();
  };

  var _objectCreate = Object.create || function create(O, Properties) {
    var result;

    if (O !== null) {
      Empty[PROTOTYPE$1] = anObject(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null; // add "__proto__" for Object.getPrototypeOf polyfill

      result[IE_PROTO$1] = O;
    } else result = createDict();

    return Properties === undefined ? result : dPs(result, Properties);
  };

  var _objectCreate$1 = /*#__PURE__*/Object.freeze({
    default: _objectCreate,
    __moduleExports: _objectCreate
  });

  var def = require$$37.f;
  var TAG$1 = wks('toStringTag');

  var _setToStringTag = function (it, tag, stat) {
    if (it && !$has(it = stat ? it : it.prototype, TAG$1)) def(it, TAG$1, {
      configurable: true,
      value: tag
    });
  };

  var _setToStringTag$1 = /*#__PURE__*/Object.freeze({
    default: _setToStringTag,
    __moduleExports: _setToStringTag
  });

  var require$$22 = ( _objectCreate$1 && _objectCreate ) || _objectCreate$1;

  var setToStringTag = ( _setToStringTag$1 && _setToStringTag ) || _setToStringTag$1;

  var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

  hide(IteratorPrototype, wks('iterator'), function () {
    return this;
  });

  var _iterCreate = function (Constructor, NAME, next) {
    Constructor.prototype = require$$22(IteratorPrototype, {
      next: require$$9(1, next)
    });
    setToStringTag(Constructor, NAME + ' Iterator');
  };

  var _iterCreate$1 = /*#__PURE__*/Object.freeze({
    default: _iterCreate,
    __moduleExports: _iterCreate
  });

  var IE_PROTO$2 = require$$1('IE_PROTO');
  var ObjectProto = Object.prototype;

  var _objectGpo = Object.getPrototypeOf || function (O) {
    O = require$$20(O);
    if ($has(O, IE_PROTO$2)) return O[IE_PROTO$2];

    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }

    return O instanceof Object ? ObjectProto : null;
  };

  var _objectGpo$1 = /*#__PURE__*/Object.freeze({
    default: _objectGpo,
    __moduleExports: _objectGpo
  });

  var require$$1$1 = ( _library$1 && _library ) || _library$1;

  var $iterCreate = ( _iterCreate$1 && _iterCreate ) || _iterCreate$1;

  var require$$23 = ( _objectGpo$1 && _objectGpo ) || _objectGpo$1;

  var ITERATOR$3 = wks('iterator');
  var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

  var FF_ITERATOR = '@@iterator';
  var KEYS = 'keys';
  var VALUES = 'values';

  var returnThis = function () {
    return this;
  };

  var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);

    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];

      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };

        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }

      return function entries() {
        return new Constructor(this, kind);
      };
    };

    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR$3] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = !BUGGY && $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype; // Fix native

    if ($anyNative) {
      IteratorPrototype = require$$23($anyNative.call(new Base()));

      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

        if (!require$$1$1 && !$has(IteratorPrototype, ITERATOR$3)) hide(IteratorPrototype, ITERATOR$3, returnThis);
      }
    } // fix Array#{values, @@iterator}.name in V8 / FF


    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;

      $default = function values() {
        return $native.call(this);
      };
    } // Define iterator


    if ((!require$$1$1 || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR$3])) {
      hide(proto, ITERATOR$3, $default);
    } // Plug for library


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
      } else $export$1($export$1.P + $export$1.F * (BUGGY || VALUES_BUG), NAME, methods);
    }

    return methods;
  };

  var _iterDefine$1 = /*#__PURE__*/Object.freeze({
    default: _iterDefine,
    __moduleExports: _iterDefine
  });

  var step = ( _iterStep$1 && _iterStep ) || _iterStep$1;

  var require$$1$2 = ( _iterDefine$1 && _iterDefine ) || _iterDefine$1;

  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()


  var es6_array_iterator = require$$1$2(Array, 'Array', function (iterated, kind) {
    this._t = toIObject(iterated); // target

    this._i = 0; // next index

    this._k = kind; // kind
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
  }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

  Iterators.Arguments = Iterators.Array;
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');

  $export$1($export$1.S + $export$1.F * fails(function () {
    function F() {
      /* empty */
    }

    return !(Array.of.call(F) instanceof F);
  }), 'Array', {
    // 22.1.2.3 Array.of( ...items)
    of: function of()
    /* ...args */
    {
      var index = 0;
      var aLen = arguments.length;
      var result = new (typeof this == 'function' ? this : Array)(aLen);

      while (aLen > index) createProperty(result, index, arguments[index++]);

      result.length = aLen;
      return result;
    }
  });

  var _strictMethod = function (method, arg) {
    return !!method && fails(function () {
      // eslint-disable-next-line no-useless-call
      arg ? method.call(null, function () {
        /* empty */
      }, 1) : method.call(null);
    });
  };

  var _strictMethod$1 = /*#__PURE__*/Object.freeze({
    default: _strictMethod,
    __moduleExports: _strictMethod
  });

  var require$$0$3 = ( _strictMethod$1 && _strictMethod ) || _strictMethod$1;

  var $sort = [].sort;
  var test = [1, 2, 3];
  $export$1($export$1.P + $export$1.F * (fails(function () {
    // IE8-
    test.sort(undefined);
  }) || !fails(function () {
    // V8 bug
    test.sort(null); // Old WebKit
  }) || !require$$0$3($sort)), 'Array', {
    // 22.1.3.25 Array.prototype.sort(comparefn)
    sort: function sort(comparefn) {
      return comparefn === undefined ? $sort.call(require$$20(this)) : $sort.call(require$$20(this), aFunction(comparefn));
    }
  });

  var SPECIES$1 = wks('species');

  var _setSpecies = function (KEY) {
    var C = global$1[KEY];
    if (require$$0 && C && !C[SPECIES$1]) require$$37.f(C, SPECIES$1, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  };

  var _setSpecies$1 = /*#__PURE__*/Object.freeze({
    default: _setSpecies,
    __moduleExports: _setSpecies
  });

  var require$$34 = ( _setSpecies$1 && _setSpecies ) || _setSpecies$1;

  require$$34('Array');

  $export$1($export$1.P + $export$1.F * fails(function () {
    return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
      toISOString: function () {
        return 1;
      }
    }) !== 1;
  }), 'Date', {
    // eslint-disable-next-line no-unused-vars
    toJSON: function toJSON(key) {
      var O = require$$20(this);
      var pv = require$$16(O);
      return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
    }
  });

  var NUMBER = 'number';

  var _dateToPrimitive = function (hint) {
    if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
    return require$$16(anObject(this), hint != NUMBER);
  };

  var _dateToPrimitive$1 = /*#__PURE__*/Object.freeze({
    default: _dateToPrimitive,
    __moduleExports: _dateToPrimitive
  });

  var require$$2 = ( _dateToPrimitive$1 && _dateToPrimitive ) || _dateToPrimitive$1;

  var TO_PRIMITIVE = wks('toPrimitive');
  var proto = Date.prototype;
  if (!(TO_PRIMITIVE in proto)) hide(proto, TO_PRIMITIVE, require$$2);

  var HAS_INSTANCE = wks('hasInstance');
  var FunctionProto = Function.prototype; // 19.2.3.6 Function.prototype[@@hasInstance](V)

  if (!(HAS_INSTANCE in FunctionProto)) require$$37.f(FunctionProto, HAS_INSTANCE, {
    value: function (O) {
      if (typeof this != 'function' || !isObject(O)) return false;
      if (!isObject(this.prototype)) return O instanceof this; // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:

      while (O = require$$23(O)) if (this.prototype === O) return true;

      return false;
    }
  });

  var dP$1 = require$$37.f;
  var FProto = Function.prototype;
  var nameRE = /^\s*function ([^ (]*)/;
  var NAME = 'name'; // 19.2.4.2 name

  NAME in FProto || require$$0 && dP$1(FProto, NAME, {
    configurable: true,
    get: function () {
      try {
        return ('' + this).match(nameRE)[1];
      } catch (e) {
        return '';
      }
    }
  });

  var _redefineAll = function (target, src, safe) {
    for (var key in src) redefine(target, key, src[key], safe);

    return target;
  };

  var _redefineAll$1 = /*#__PURE__*/Object.freeze({
    default: _redefineAll,
    __moduleExports: _redefineAll
  });

  var _anInstance = function (it, Constructor, name, forbiddenField) {
    if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
      throw TypeError(name + ': incorrect invocation!');
    }

    return it;
  };

  var _anInstance$1 = /*#__PURE__*/Object.freeze({
    default: _anInstance,
    __moduleExports: _anInstance
  });

  var _forOf = createCommonjsModule(function (module) {
    var BREAK = {};
    var RETURN = {};

    var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
      var iterFn = ITERATOR ? function () {
        return iterable;
      } : require$$25(iterable);
      var f = require$$7(fn, that, entries ? 2 : 1);
      var index = 0;
      var length, step, iterator, result;
      if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!'); // fast case for arrays with default iterator

      if (require$$21(iterFn)) for (length = require$$13(iterable.length); length > index; index++) {
        result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
        if (result === BREAK || result === RETURN) return result;
      } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
        result = call(iterator, f, step.value, entries);
        if (result === BREAK || result === RETURN) return result;
      }
    };

    exports.BREAK = BREAK;
    exports.RETURN = RETURN;
  });

  var _forOf$1 = /*#__PURE__*/Object.freeze({
    default: _forOf,
    __moduleExports: _forOf
  });

  var _meta = createCommonjsModule(function (module) {
    var META = require$$26('meta');
    var setDesc = require$$37.f;
    var id = 0;

    var isExtensible = Object.isExtensible || function () {
      return true;
    };

    var FREEZE = !fails(function () {
      return isExtensible(Object.preventExtensions({}));
    });

    var setMeta = function (it) {
      setDesc(it, META, {
        value: {
          i: 'O' + ++id,
          // object ID
          w: {} // weak collections IDs

        }
      });
    };

    var fastKey = function (it, create) {
      // return primitive with prefix
      if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

      if (!$has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F'; // not necessary to add metadata

        if (!create) return 'E'; // add missing metadata

        setMeta(it); // return object ID
      }

      return it[META].i;
    };

    var getWeak = function (it, create) {
      if (!$has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true; // not necessary to add metadata

        if (!create) return false; // add missing metadata

        setMeta(it); // return hash weak collections IDs
      }

      return it[META].w;
    }; // add metadata on freeze-family methods calling


    var onFreeze = function (it) {
      if (FREEZE && meta.NEED && isExtensible(it) && !$has(it, META)) setMeta(it);
      return it;
    };

    var meta = module.exports = {
      KEY: META,
      NEED: false,
      fastKey: fastKey,
      getWeak: getWeak,
      onFreeze: onFreeze
    };
  });
  var _meta_1 = _meta.KEY;
  var _meta_2 = _meta.NEED;
  var _meta_3 = _meta.fastKey;
  var _meta_4 = _meta.getWeak;
  var _meta_5 = _meta.onFreeze;

  var _meta$1 = /*#__PURE__*/Object.freeze({
    default: _meta,
    __moduleExports: _meta,
    KEY: _meta_1,
    NEED: _meta_2,
    fastKey: _meta_3,
    getWeak: _meta_4,
    onFreeze: _meta_5
  });

  var _validateCollection = function (it, TYPE) {
    if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
    return it;
  };

  var _validateCollection$1 = /*#__PURE__*/Object.freeze({
    default: _validateCollection,
    __moduleExports: _validateCollection
  });

  var redefineAll = ( _redefineAll$1 && _redefineAll ) || _redefineAll$1;

  var anInstance = ( _anInstance$1 && _anInstance ) || _anInstance$1;

  var forOf = ( _forOf$1 && _forOf ) || _forOf$1;

  var meta = ( _meta$1 && _meta ) || _meta$1;

  var validate = ( _validateCollection$1 && _validateCollection ) || _validateCollection$1;

  var dP$2 = require$$37.f;
  var fastKey = meta.fastKey;
  var SIZE = require$$0 ? '_s' : 'size';

  var getEntry = function (that, key) {
    // fast case
    var index = fastKey(key);
    var entry;
    if (index !== 'F') return that._i[index]; // frozen object case

    for (entry = that._f; entry; entry = entry.n) {
      if (entry.k == key) return entry;
    }
  };

  var _collectionStrong = {
    getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        anInstance(that, C, NAME, '_i');
        that._t = NAME; // collection type

        that._i = require$$22(null); // index

        that._f = undefined; // first entry

        that._l = undefined; // last entry

        that[SIZE] = 0; // size

        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        // 23.1.3.1 Map.prototype.clear()
        // 23.2.3.2 Set.prototype.clear()
        clear: function clear() {
          for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
            entry.r = true;
            if (entry.p) entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }

          that._f = that._l = undefined;
          that[SIZE] = 0;
        },
        // 23.1.3.3 Map.prototype.delete(key)
        // 23.2.3.4 Set.prototype.delete(value)
        'delete': function (key) {
          var that = validate(this, NAME);
          var entry = getEntry(that, key);

          if (entry) {
            var next = entry.n;
            var prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if (prev) prev.n = next;
            if (next) next.p = prev;
            if (that._f == entry) that._f = next;
            if (that._l == entry) that._l = prev;
            that[SIZE]--;
          }

          return !!entry;
        },
        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
        forEach: function forEach(callbackfn
        /* , that = undefined */
        ) {
          validate(this, NAME);
          var f = require$$7(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
          var entry;

          while (entry = entry ? entry.n : this._f) {
            f(entry.v, entry.k, this); // revert to the last existing entry

            while (entry && entry.r) entry = entry.p;
          }
        },
        // 23.1.3.7 Map.prototype.has(key)
        // 23.2.3.7 Set.prototype.has(value)
        has: function has(key) {
          return !!getEntry(validate(this, NAME), key);
        }
      });
      if (require$$0) dP$2(C.prototype, 'size', {
        get: function () {
          return validate(this, NAME)[SIZE];
        }
      });
      return C;
    },
    def: function (that, key, value) {
      var entry = getEntry(that, key);
      var prev, index; // change existing entry

      if (entry) {
        entry.v = value; // create new entry
      } else {
        that._l = entry = {
          i: index = fastKey(key, true),
          // <- index
          k: key,
          // <- key
          v: value,
          // <- value
          p: prev = that._l,
          // <- previous entry
          n: undefined,
          // <- next entry
          r: false // <- removed

        };
        if (!that._f) that._f = entry;
        if (prev) prev.n = entry;
        that[SIZE]++; // add to index

        if (index !== 'F') that._i[index] = entry;
      }

      return that;
    },
    getEntry: getEntry,
    setStrong: function (C, NAME, IS_MAP) {
      // add .keys, .values, .entries, [@@iterator]
      // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
      require$$1$2(C, NAME, function (iterated, kind) {
        this._t = validate(iterated, NAME); // target

        this._k = kind; // kind

        this._l = undefined; // previous
      }, function () {
        var that = this;
        var kind = that._k;
        var entry = that._l; // revert to the last existing entry

        while (entry && entry.r) entry = entry.p; // get next entry


        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
          // or finish the iteration
          that._t = undefined;
          return step(1);
        } // return step by kind


        if (kind == 'keys') return step(0, entry.k);
        if (kind == 'values') return step(0, entry.v);
        return step(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

      require$$34(NAME);
    }
  };
  var _collectionStrong_1 = _collectionStrong.getConstructor;
  var _collectionStrong_2 = _collectionStrong.def;
  var _collectionStrong_3 = _collectionStrong.getEntry;
  var _collectionStrong_4 = _collectionStrong.setStrong;

  var _collectionStrong$1 = /*#__PURE__*/Object.freeze({
    default: _collectionStrong,
    __moduleExports: _collectionStrong,
    getConstructor: _collectionStrong_1,
    def: _collectionStrong_2,
    getEntry: _collectionStrong_3,
    setStrong: _collectionStrong_4
  });

  var f$1 = {}.propertyIsEnumerable;
  var _objectPie = {
    f: f$1
  };

  var _objectPie$1 = /*#__PURE__*/Object.freeze({
    default: _objectPie,
    __moduleExports: _objectPie,
    f: f$1
  });

  var pIE = ( _objectPie$1 && _objectPie ) || _objectPie$1;

  var gOPD = Object.getOwnPropertyDescriptor;
  var f$2 = require$$0 ? gOPD : function getOwnPropertyDescriptor(O, P) {
    O = toIObject(O);
    P = require$$16(P, true);
    if (IE8_DOM_DEFINE) try {
      return gOPD(O, P);
    } catch (e) {
      /* empty */
    }
    if ($has(O, P)) return require$$9(!pIE.f.call(O, P), O[P]);
  };
  var _objectGopd = {
    f: f$2
  };

  var _objectGopd$1 = /*#__PURE__*/Object.freeze({
    default: _objectGopd,
    __moduleExports: _objectGopd,
    f: f$2
  });

  var require$$38 = ( _objectGopd$1 && _objectGopd ) || _objectGopd$1;

  /* eslint-disable no-proto */

  var check = function (O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
  };

  var _setProto = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = require$$7(Function.call, require$$38.f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }

      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };
  var _setProto_1 = _setProto.set;
  var _setProto_2 = _setProto.check;

  var _setProto$1 = /*#__PURE__*/Object.freeze({
    default: _setProto,
    __moduleExports: _setProto,
    set: _setProto_1,
    check: _setProto_2
  });

  var setProto = ( _setProto$1 && _setProto ) || _setProto$1;

  var setPrototypeOf = setProto.set;

  var _inheritIfRequired = function (that, target, C) {
    var S = target.constructor;
    var P;

    if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
      setPrototypeOf(that, P);
    }

    return that;
  };

  var _inheritIfRequired$1 = /*#__PURE__*/Object.freeze({
    default: _inheritIfRequired,
    __moduleExports: _inheritIfRequired
  });

  var inheritIfRequired = ( _inheritIfRequired$1 && _inheritIfRequired ) || _inheritIfRequired$1;

  var _collection = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = global$1[NAME];
    var C = Base;
    var ADDER = IS_MAP ? 'set' : 'add';
    var proto = C && C.prototype;
    var O = {};

    var fixMethod = function (KEY) {
      var fn = proto[KEY];
      redefine(proto, KEY, KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) {
        fn.call(this, a === 0 ? 0 : a);
        return this;
      } : function set(a, b) {
        fn.call(this, a === 0 ? 0 : a, b);
        return this;
      });
    };

    if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
      new C().entries().next();
    }))) {
      // create collection constructor
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      redefineAll(C.prototype, methods);
      meta.NEED = true;
    } else {
      var instance = new C(); // early implementations not supports chaining

      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false

      var THROWS_ON_PRIMITIVES = fails(function () {
        instance.has(1);
      }); // most early implementations doesn't supports iterables, most modern - not close it correctly

      var ACCEPT_ITERABLES = require$$33(function (iter) {
        new C(iter);
      }); // eslint-disable-line no-new
      // for early implementations -0 and +0 not the same

      var BUGGY_ZERO = !IS_WEAK && fails(function () {
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new C();
        var index = 5;

        while (index--) $instance[ADDER](index, index);

        return !$instance.has(-0);
      });

      if (!ACCEPT_ITERABLES) {
        C = wrapper(function (target, iterable) {
          anInstance(target, C, NAME);
          var that = inheritIfRequired(new Base(), target, C);
          if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
          return that;
        });
        C.prototype = proto;
        proto.constructor = C;
      }

      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }

      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

      if (IS_WEAK && proto.clear) delete proto.clear;
    }

    setToStringTag(C, NAME);
    O[NAME] = C;
    $export$1($export$1.G + $export$1.W + $export$1.F * (C != Base), O);
    if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
    return C;
  };

  var _collection$1 = /*#__PURE__*/Object.freeze({
    default: _collection,
    __moduleExports: _collection
  });

  var strong = ( _collectionStrong$1 && _collectionStrong ) || _collectionStrong$1;

  var require$$1$3 = ( _collection$1 && _collection ) || _collection$1;

  var MAP = 'Map'; // 23.1 Map Objects

  var es6_map = require$$1$3(MAP, function (get) {
    return function Map() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    // 23.1.3.6 Map.prototype.get(key)
    get: function get(key) {
      var entry = strong.getEntry(validate(this, MAP), key);
      return entry && entry.v;
    },
    // 23.1.3.9 Map.prototype.set(key, value)
    set: function set(key, value) {
      return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
    }
  }, strong, true);

  // 20.2.2.20 Math.log1p(x)
  var _mathLog1p = Math.log1p || function log1p(x) {
    return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
  };

  var _mathLog1p$1 = /*#__PURE__*/Object.freeze({
    default: _mathLog1p,
    __moduleExports: _mathLog1p
  });

  var require$$0$4 = ( _mathLog1p$1 && _mathLog1p ) || _mathLog1p$1;

  var sqrt = Math.sqrt;
  var $acosh = Math.acosh;
  $export$1($export$1.S + $export$1.F * !($acosh // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710 // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity), 'Math', {
    acosh: function acosh(x) {
      return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : require$$0$4(x - 1 + sqrt(x - 1) * sqrt(x + 1));
    }
  });

  var $asinh = Math.asinh;

  function asinh(x) {
    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
  } // Tor Browser bug: Math.asinh(0) -> -0


  $export$1($export$1.S + $export$1.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {
    asinh: asinh
  });

  var $atanh = Math.atanh; // Tor Browser bug: Math.atanh(-0) -> 0

  $export$1($export$1.S + $export$1.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
    atanh: function atanh(x) {
      return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
    }
  });

  // 20.2.2.28 Math.sign(x)
  var _mathSign = Math.sign || function sign(x) {
    // eslint-disable-next-line no-self-compare
    return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
  };

  var _mathSign$1 = /*#__PURE__*/Object.freeze({
    default: _mathSign,
    __moduleExports: _mathSign
  });

  var require$$0$5 = ( _mathSign$1 && _mathSign ) || _mathSign$1;

  $export$1($export$1.S, 'Math', {
    cbrt: function cbrt(x) {
      return require$$0$5(x = +x) * Math.pow(Math.abs(x), 1 / 3);
    }
  });

  $export$1($export$1.S, 'Math', {
    clz32: function clz32(x) {
      return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
    }
  });

  var exp = Math.exp;
  $export$1($export$1.S, 'Math', {
    cosh: function cosh(x) {
      return (exp(x = +x) + exp(-x)) / 2;
    }
  });

  // 20.2.2.14 Math.expm1(x)
  var $expm1 = Math.expm1;

  var _mathExpm1 = !$expm1 // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168 // Tor Browser bug
  || $expm1(-2e-17) != -2e-17 ? function expm1(x) {
    return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
  } : $expm1;

  var _mathExpm1$1 = /*#__PURE__*/Object.freeze({
    default: _mathExpm1,
    __moduleExports: _mathExpm1
  });

  var expm1 = ( _mathExpm1$1 && _mathExpm1 ) || _mathExpm1$1;

  $export$1($export$1.S + $export$1.F * (expm1 != Math.expm1), 'Math', {
    expm1: expm1
  });

  var pow = Math.pow;
  var EPSILON = pow(2, -52);
  var EPSILON32 = pow(2, -23);
  var MAX32 = pow(2, 127) * (2 - EPSILON32);
  var MIN32 = pow(2, -126);

  var roundTiesToEven = function (n) {
    return n + 1 / EPSILON - 1 / EPSILON;
  };

  var _mathFround = Math.fround || function fround(x) {
    var $abs = Math.abs(x);
    var $sign = require$$0$5(x);
    var a, result;
    if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs); // eslint-disable-next-line no-self-compare

    if (result > MAX32 || result != result) return $sign * Infinity;
    return $sign * result;
  };

  var _mathFround$1 = /*#__PURE__*/Object.freeze({
    default: _mathFround,
    __moduleExports: _mathFround
  });

  var require$$0$6 = ( _mathFround$1 && _mathFround ) || _mathFround$1;

  $export$1($export$1.S, 'Math', {
    fround: require$$0$6
  });

  var abs = Math.abs;
  $export$1($export$1.S, 'Math', {
    hypot: function hypot(value1, value2) {
      // eslint-disable-line no-unused-vars
      var sum = 0;
      var i = 0;
      var aLen = arguments.length;
      var larg = 0;
      var arg, div;

      while (i < aLen) {
        arg = abs(arguments[i++]);

        if (larg < arg) {
          div = larg / arg;
          sum = sum * div * div + 1;
          larg = arg;
        } else if (arg > 0) {
          div = arg / larg;
          sum += div * div;
        } else sum += arg;
      }

      return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
    }
  });

  var $imul = Math.imul; // some WebKit versions fails with big numbers, some has wrong arity

  $export$1($export$1.S + $export$1.F * fails(function () {
    return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
  }), 'Math', {
    imul: function imul(x, y) {
      var UINT16 = 0xffff;
      var xn = +x;
      var yn = +y;
      var xl = UINT16 & xn;
      var yl = UINT16 & yn;
      return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
    }
  });

  $export$1($export$1.S, 'Math', {
    log1p: require$$0$4
  });

  $export$1($export$1.S, 'Math', {
    log10: function log10(x) {
      return Math.log(x) * Math.LOG10E;
    }
  });

  $export$1($export$1.S, 'Math', {
    log2: function log2(x) {
      return Math.log(x) / Math.LN2;
    }
  });

  $export$1($export$1.S, 'Math', {
    sign: require$$0$5
  });

  var exp$1 = Math.exp; // V8 near Chromium 38 has a problem with very small numbers

  $export$1($export$1.S + $export$1.F * fails(function () {
    return !Math.sinh(-2e-17) != -2e-17;
  }), 'Math', {
    sinh: function sinh(x) {
      return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp$1(x - 1) - exp$1(-x - 1)) * (Math.E / 2);
    }
  });

  var exp$2 = Math.exp;
  $export$1($export$1.S, 'Math', {
    tanh: function tanh(x) {
      var a = expm1(x = +x);
      var b = expm1(-x);
      return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp$2(x) + exp$2(-x));
    }
  });

  $export$1($export$1.S, 'Math', {
    trunc: function trunc(it) {
      return (it > 0 ? Math.floor : Math.ceil)(it);
    }
  });

  var hiddenKeys = require$$0$2.concat('length', 'prototype');

  var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return $keys(O, hiddenKeys);
  };

  var _objectGopn = {
    f: f$3
  };

  var _objectGopn$1 = /*#__PURE__*/Object.freeze({
    default: _objectGopn,
    __moduleExports: _objectGopn,
    f: f$3
  });

  var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var _stringWs$1 = /*#__PURE__*/Object.freeze({
    default: _stringWs,
    __moduleExports: _stringWs
  });

  var ws = ( _stringWs$1 && _stringWs ) || _stringWs$1;

  var space = '[' + ws + ']';
  var non = '\u200b\u0085';
  var ltrim = RegExp('^' + space + space + '*');
  var rtrim = RegExp(space + space + '*$');

  var exporter = function (KEY, exec, ALIAS) {
    var exp = {};
    var FORCE = fails(function () {
      return !!ws[KEY]() || non[KEY]() != non;
    });
    var fn = exp[KEY] = FORCE ? exec(trim) : ws[KEY];
    if (ALIAS) exp[ALIAS] = fn;
    $export$1($export$1.P + $export$1.F * FORCE, 'String', exp);
  }; // 1 -> String#trimLeft
  // 2 -> String#trimRight
  // 3 -> String#trim


  var trim = exporter.trim = function (string, TYPE) {
    string = String(defined(string));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };

  var _stringTrim = exporter;

  var _stringTrim$1 = /*#__PURE__*/Object.freeze({
    default: _stringTrim,
    __moduleExports: _stringTrim
  });

  var require$$24 = ( _objectGopn$1 && _objectGopn ) || _objectGopn$1;

  var require$$1$4 = ( _stringTrim$1 && _stringTrim ) || _stringTrim$1;

  var gOPN = require$$24.f;
  var gOPD$1 = require$$38.f;
  var dP$3 = require$$37.f;
  var $trim = require$$1$4.trim;
  var NUMBER$1 = 'Number';
  var $Number = global$1[NUMBER$1];
  var Base = $Number;
  var proto$1 = $Number.prototype; // Opera ~12 has broken Object#toString

  var BROKEN_COF = cof(require$$22(proto$1)) == NUMBER$1;
  var TRIM = 'trim' in String.prototype; // 7.1.3 ToNumber(argument)

  var toNumber = function (argument) {
    var it = require$$16(argument, false);

    if (typeof it == 'string' && it.length > 2) {
      it = TRIM ? it.trim() : $trim(it, 3);
      var first = it.charCodeAt(0);
      var third, radix, maxCode;

      if (first === 43 || first === 45) {
        third = it.charCodeAt(2);
        if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
      } else if (first === 48) {
        switch (it.charCodeAt(1)) {
          case 66:
          case 98:
            radix = 2;
            maxCode = 49;
            break;
          // fast equal /^0b[01]+$/i

          case 79:
          case 111:
            radix = 8;
            maxCode = 55;
            break;
          // fast equal /^0o[0-7]+$/i

          default:
            return +it;
        }

        for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
          code = digits.charCodeAt(i); // parseInt parses a string to a first unavailable symbol
          // but ToNumber should return NaN if a string contains unavailable symbols

          if (code < 48 || code > maxCode) return NaN;
        }

        return parseInt(digits, radix);
      }
    }

    return +it;
  };

  if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
    $Number = function Number(value) {
      var it = arguments.length < 1 ? 0 : value;
      var that = this;
      return that instanceof $Number // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () {
        proto$1.valueOf.call(that);
      }) : cof(that) != NUMBER$1) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
    };

    for (var keys = require$$0 ? gOPN(Base) : ( // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
      if ($has(Base, key = keys[j]) && !$has($Number, key)) {
        dP$3($Number, key, gOPD$1(Base, key));
      }
    }

    $Number.prototype = proto$1;
    proto$1.constructor = $Number;
    redefine(global$1, NUMBER$1, $Number);
  }

  $export$1($export$1.S, 'Number', {
    EPSILON: Math.pow(2, -52)
  });

  var _isFinite = global$1.isFinite;
  $export$1($export$1.S, 'Number', {
    isFinite: function isFinite(it) {
      return typeof it == 'number' && _isFinite(it);
    }
  });

  var floor$1 = Math.floor;

  var _isInteger = function isInteger(it) {
    return !isObject(it) && isFinite(it) && floor$1(it) === it;
  };

  var _isInteger$1 = /*#__PURE__*/Object.freeze({
    default: _isInteger,
    __moduleExports: _isInteger
  });

  var isInteger = ( _isInteger$1 && _isInteger ) || _isInteger$1;

  $export$1($export$1.S, 'Number', {
    isInteger: isInteger
  });

  $export$1($export$1.S, 'Number', {
    isNaN: function isNaN(number) {
      // eslint-disable-next-line no-self-compare
      return number != number;
    }
  });

  var abs$1 = Math.abs;
  $export$1($export$1.S, 'Number', {
    isSafeInteger: function isSafeInteger(number) {
      return isInteger(number) && abs$1(number) <= 0x1fffffffffffff;
    }
  });

  $export$1($export$1.S, 'Number', {
    MAX_SAFE_INTEGER: 0x1fffffffffffff
  });

  $export$1($export$1.S, 'Number', {
    MIN_SAFE_INTEGER: -0x1fffffffffffff
  });

  var $parseFloat = global$1.parseFloat;
  var $trim$1 = require$$1$4.trim;

  var _parseFloat = 1 / $parseFloat(ws + '-0') !== -Infinity ? function parseFloat(str) {
    var string = $trim$1(String(str), 3);
    var result = $parseFloat(string);
    return result === 0 && string.charAt(0) == '-' ? -0 : result;
  } : $parseFloat;

  var _parseFloat$1 = /*#__PURE__*/Object.freeze({
    default: _parseFloat,
    __moduleExports: _parseFloat
  });

  var $parseFloat$1 = ( _parseFloat$1 && _parseFloat ) || _parseFloat$1;

  $export$1($export$1.S + $export$1.F * (Number.parseFloat != $parseFloat$1), 'Number', {
    parseFloat: $parseFloat$1
  });

  var $parseInt = global$1.parseInt;
  var $trim$2 = require$$1$4.trim;
  var hex = /^[-+]?0[xX]/;

  var _parseInt = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
    var string = $trim$2(String(str), 3);
    return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
  } : $parseInt;

  var _parseInt$1 = /*#__PURE__*/Object.freeze({
    default: _parseInt,
    __moduleExports: _parseInt
  });

  var $parseInt$1 = ( _parseInt$1 && _parseInt ) || _parseInt$1;

  $export$1($export$1.S + $export$1.F * (Number.parseInt != $parseInt$1), 'Number', {
    parseInt: $parseInt$1
  });

  var f$4 = Object.getOwnPropertySymbols;
  var _objectGops = {
    f: f$4
  };

  var _objectGops$1 = /*#__PURE__*/Object.freeze({
    default: _objectGops,
    __moduleExports: _objectGops,
    f: f$4
  });

  var gOPS = ( _objectGops$1 && _objectGops ) || _objectGops$1;

  var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

  var _objectAssign = !$assign || fails(function () {
    var A = {};
    var B = {}; // eslint-disable-next-line no-undef

    var S = Symbol();
    var K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function (k) {
      B[k] = k;
    });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
  }) ? function assign(target, source) {
    // eslint-disable-line no-unused-vars
    var T = require$$20(target);
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
    }

    return T;
  } : $assign;

  var _objectAssign$1 = /*#__PURE__*/Object.freeze({
    default: _objectAssign,
    __moduleExports: _objectAssign
  });

  var assign = ( _objectAssign$1 && _objectAssign ) || _objectAssign$1;

  $export$1($export$1.S + $export$1.F, 'Object', {
    assign: assign
  });

  var _objectForcedPam = require$$1$1 || !fails(function () {
    var K = Math.random(); // In FF throws only define methods
    // eslint-disable-next-line no-undef, no-useless-call

    __defineSetter__.call(null, K, function () {
      /* empty */
    });

    delete global$1[K];
  });

  var _objectForcedPam$1 = /*#__PURE__*/Object.freeze({
    default: _objectForcedPam,
    __moduleExports: _objectForcedPam
  });

  var require$$2$1 = ( _objectForcedPam$1 && _objectForcedPam ) || _objectForcedPam$1;

  require$$0 && $export$1($export$1.P + require$$2$1, 'Object', {
    __defineGetter__: function __defineGetter__(P, getter) {
      require$$37.f(require$$20(this), P, {
        get: aFunction(getter),
        enumerable: true,
        configurable: true
      });
    }
  });

  require$$0 && $export$1($export$1.P + require$$2$1, 'Object', {
    __defineSetter__: function __defineSetter__(P, setter) {
      require$$37.f(require$$20(this), P, {
        set: aFunction(setter),
        enumerable: true,
        configurable: true
      });
    }
  });

  var isEnum = pIE.f;

  var _objectToArray = function (isEntries) {
    return function (it) {
      var O = toIObject(it);
      var keys = getKeys(O);
      var length = keys.length;
      var i = 0;
      var result = [];
      var key;

      while (length > i) if (isEnum.call(O, key = keys[i++])) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }

      return result;
    };
  };

  var _objectToArray$1 = /*#__PURE__*/Object.freeze({
    default: _objectToArray,
    __moduleExports: _objectToArray
  });

  var require$$0$7 = ( _objectToArray$1 && _objectToArray ) || _objectToArray$1;

  var $entries = require$$0$7(true);
  $export$1($export$1.S, 'Object', {
    entries: function entries(it) {
      return $entries(it);
    }
  });

  var _objectSap = function (KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY];
    var exp = {};
    exp[KEY] = exec(fn);
    $export$1($export$1.S + $export$1.F * fails(function () {
      fn(1);
    }), 'Object', exp);
  };

  var _objectSap$1 = /*#__PURE__*/Object.freeze({
    default: _objectSap,
    __moduleExports: _objectSap
  });

  var require$$1$5 = ( _objectSap$1 && _objectSap ) || _objectSap$1;

  var meta$1 = meta.onFreeze;
  require$$1$5('freeze', function ($freeze) {
    return function freeze(it) {
      return $freeze && isObject(it) ? $freeze(meta$1(it)) : it;
    };
  });

  var $getOwnPropertyDescriptor = require$$38.f;
  require$$1$5('getOwnPropertyDescriptor', function () {
    return function getOwnPropertyDescriptor(it, key) {
      return $getOwnPropertyDescriptor(toIObject(it), key);
    };
  });

  var Reflect$1 = global$1.Reflect;

  var _ownKeys = Reflect$1 && Reflect$1.ownKeys || function ownKeys(it) {
    var keys = require$$24.f(anObject(it));
    var getSymbols = gOPS.f;
    return getSymbols ? keys.concat(getSymbols(it)) : keys;
  };

  var _ownKeys$1 = /*#__PURE__*/Object.freeze({
    default: _ownKeys,
    __moduleExports: _ownKeys
  });

  var require$$0$8 = ( _ownKeys$1 && _ownKeys ) || _ownKeys$1;

  $export$1($export$1.S, 'Object', {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
      var O = toIObject(object);
      var getDesc = require$$38.f;
      var keys = require$$0$8(O);
      var result = {};
      var i = 0;
      var key, desc;

      while (keys.length > i) {
        desc = getDesc(O, key = keys[i++]);
        if (desc !== undefined) createProperty(result, key, desc);
      }

      return result;
    }
  });

  var gOPN$1 = require$$24.f;
  var toString$1 = {}.toString;
  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function (it) {
    try {
      return gOPN$1(it);
    } catch (e) {
      return windowNames.slice();
    }
  };

  var f$5 = function getOwnPropertyNames(it) {
    return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(toIObject(it));
  };

  var _objectGopnExt = {
    f: f$5
  };

  var _objectGopnExt$1 = /*#__PURE__*/Object.freeze({
    default: _objectGopnExt,
    __moduleExports: _objectGopnExt,
    f: f$5
  });

  var gOPNExt = ( _objectGopnExt$1 && _objectGopnExt ) || _objectGopnExt$1;

  require$$1$5('getOwnPropertyNames', function () {
    return gOPNExt.f;
  });

  require$$1$5('getPrototypeOf', function () {
    return function getPrototypeOf(it) {
      return require$$23(require$$20(it));
    };
  });

  var getOwnPropertyDescriptor = require$$38.f; // B.2.2.4 Object.prototype.__lookupGetter__(P)

  require$$0 && $export$1($export$1.P + require$$2$1, 'Object', {
    __lookupGetter__: function __lookupGetter__(P) {
      var O = require$$20(this);
      var K = require$$16(P, true);
      var D;

      do {
        if (D = getOwnPropertyDescriptor(O, K)) return D.get;
      } while (O = require$$23(O));
    }
  });

  var getOwnPropertyDescriptor$1 = require$$38.f; // B.2.2.5 Object.prototype.__lookupSetter__(P)

  require$$0 && $export$1($export$1.P + require$$2$1, 'Object', {
    __lookupSetter__: function __lookupSetter__(P) {
      var O = require$$20(this);
      var K = require$$16(P, true);
      var D;

      do {
        if (D = getOwnPropertyDescriptor$1(O, K)) return D.set;
      } while (O = require$$23(O));
    }
  });

  var meta$2 = meta.onFreeze;
  require$$1$5('preventExtensions', function ($preventExtensions) {
    return function preventExtensions(it) {
      return $preventExtensions && isObject(it) ? $preventExtensions(meta$2(it)) : it;
    };
  });

  // 7.2.9 SameValue(x, y)
  var _sameValue = Object.is || function is(x, y) {
    // eslint-disable-next-line no-self-compare
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };

  var _sameValue$1 = /*#__PURE__*/Object.freeze({
    default: _sameValue,
    __moduleExports: _sameValue
  });

  var require$$0$9 = ( _sameValue$1 && _sameValue ) || _sameValue$1;

  $export$1($export$1.S, 'Object', {
    is: require$$0$9
  });

  require$$1$5('isFrozen', function ($isFrozen) {
    return function isFrozen(it) {
      return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
    };
  });

  require$$1$5('isSealed', function ($isSealed) {
    return function isSealed(it) {
      return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
    };
  });

  require$$1$5('isExtensible', function ($isExtensible) {
    return function isExtensible(it) {
      return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
    };
  });

  require$$1$5('keys', function () {
    return function keys(it) {
      return getKeys(require$$20(it));
    };
  });

  var meta$3 = meta.onFreeze;
  require$$1$5('seal', function ($seal) {
    return function seal(it) {
      return $seal && isObject(it) ? $seal(meta$3(it)) : it;
    };
  });

  $export$1($export$1.S, 'Object', {
    setPrototypeOf: setProto.set
  });

  var $values = require$$0$7(false);
  $export$1($export$1.S, 'Object', {
    values: function values(it) {
      return $values(it);
    }
  });

  var SPECIES$2 = wks('species');

  var _speciesConstructor = function (O, D) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || (S = anObject(C)[SPECIES$2]) == undefined ? D : aFunction(S);
  };

  var _speciesConstructor$1 = /*#__PURE__*/Object.freeze({
    default: _speciesConstructor,
    __moduleExports: _speciesConstructor
  });

  // fast apply, http://jsperf.lnkit.com/fast-apply/5
  var _invoke = function (fn, args, that) {
    var un = that === undefined;

    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);

      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);

      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);

      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);

      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }

    return fn.apply(that, args);
  };

  var _invoke$1 = /*#__PURE__*/Object.freeze({
    default: _invoke,
    __moduleExports: _invoke
  });

  var invoke = ( _invoke$1 && _invoke ) || _invoke$1;

  var process = global$1.process;
  var setTask = global$1.setImmediate;
  var clearTask = global$1.clearImmediate;
  var MessageChannel = global$1.MessageChannel;
  var Dispatch = global$1.Dispatch;
  var counter = 0;
  var queue = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var defer, channel, port;

  var run = function () {
    var id = +this; // eslint-disable-next-line no-prototype-builtins

    if (queue.hasOwnProperty(id)) {
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };

  var listener = function (event) {
    run.call(event.data);
  }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


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
    }; // Node.js 0.8-


    if (cof(process) == 'process') {
      defer = function (id) {
        process.nextTick(require$$7(run, id, 1));
      }; // Sphere (JS game engine) Dispatch API

    } else if (Dispatch && Dispatch.now) {
      defer = function (id) {
        Dispatch.now(require$$7(run, id, 1));
      }; // Browsers with MessageChannel, includes WebWorkers

    } else if (MessageChannel) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = require$$7(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global$1.addEventListener && typeof postMessage == 'function' && !global$1.importScripts) {
      defer = function (id) {
        global$1.postMessage(id + '', '*');
      };

      global$1.addEventListener('message', listener, false); // IE8-
    } else if (ONREADYSTATECHANGE in cel('script')) {
      defer = function (id) {
        html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
          html.removeChild(this);
          run.call(id);
        };
      }; // Rest old browsers

    } else {
      defer = function (id) {
        setTimeout(require$$7(run, id, 1), 0);
      };
    }
  }

  var _task = {
    set: setTask,
    clear: clearTask
  };
  var _task_1 = _task.set;
  var _task_2 = _task.clear;

  var _task$1 = /*#__PURE__*/Object.freeze({
    default: _task,
    __moduleExports: _task,
    set: _task_1,
    clear: _task_2
  });

  var $task = ( _task$1 && _task ) || _task$1;

  var macrotask = $task.set;
  var Observer = global$1.MutationObserver || global$1.WebKitMutationObserver;
  var process$1 = global$1.process;
  var Promise$1 = global$1.Promise;
  var isNode = cof(process$1) == 'process';

  var _microtask = function () {
    var head, last, notify;

    var flush = function () {
      var parent, fn;
      if (isNode && (parent = process$1.domain)) parent.exit();

      while (head) {
        fn = head.fn;
        head = head.next;

        try {
          fn();
        } catch (e) {
          if (head) notify();else last = undefined;
          throw e;
        }
      }

      last = undefined;
      if (parent) parent.enter();
    }; // Node.js


    if (isNode) {
      notify = function () {
        process$1.nextTick(flush);
      }; // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339

    } else if (Observer && !(global$1.navigator && global$1.navigator.standalone)) {
      var toggle = true;
      var node = document.createTextNode('');
      new Observer(flush).observe(node, {
        characterData: true
      }); // eslint-disable-line no-new

      notify = function () {
        node.data = toggle = !toggle;
      }; // environments with maybe non-completely correct, but existent Promise

    } else if (Promise$1 && Promise$1.resolve) {
      var promise = Promise$1.resolve();

      notify = function () {
        promise.then(flush);
      }; // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout

    } else {
      notify = function () {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(global$1, flush);
      };
    }

    return function (fn) {
      var task = {
        fn: fn,
        next: undefined
      };
      if (last) last.next = task;

      if (!head) {
        head = task;
        notify();
      }

      last = task;
    };
  };

  var _microtask$1 = /*#__PURE__*/Object.freeze({
    default: _microtask,
    __moduleExports: _microtask
  });

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

  var f$6 = function (C) {
    return new PromiseCapability(C);
  };

  var _newPromiseCapability = {
    f: f$6
  };

  var _newPromiseCapability$1 = /*#__PURE__*/Object.freeze({
    default: _newPromiseCapability,
    __moduleExports: _newPromiseCapability,
    f: f$6
  });

  var _perform = function (exec) {
    try {
      return {
        e: false,
        v: exec()
      };
    } catch (e) {
      return {
        e: true,
        v: e
      };
    }
  };

  var _perform$1 = /*#__PURE__*/Object.freeze({
    default: _perform,
    __moduleExports: _perform
  });

  var newPromiseCapabilityModule = ( _newPromiseCapability$1 && _newPromiseCapability ) || _newPromiseCapability$1;

  var _promiseResolve = function (C, x) {
    anObject(C);
    if (isObject(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapabilityModule.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var _promiseResolve$1 = /*#__PURE__*/Object.freeze({
    default: _promiseResolve,
    __moduleExports: _promiseResolve
  });

  var require$$30 = ( _speciesConstructor$1 && _speciesConstructor ) || _speciesConstructor$1;

  var require$$1$6 = ( _microtask$1 && _microtask ) || _microtask$1;

  var perform = ( _perform$1 && _perform ) || _perform$1;

  var promiseResolve = ( _promiseResolve$1 && _promiseResolve ) || _promiseResolve$1;

  var task = $task.set;
  var microtask = require$$1$6();
  var PROMISE = 'Promise';
  var TypeError$1 = global$1.TypeError;
  var process$2 = global$1.process;
  var $Promise = global$1[PROMISE];
  var isNode$1 = require$$18(process$2) == 'process';

  var empty = function () {
    /* empty */
  };

  var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
  var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
  var USE_NATIVE = !!function () {
    try {
      // correct subclassing with @@species support
      var promise = $Promise.resolve(1);

      var FakePromise = (promise.constructor = {})[wks('species')] = function (exec) {
        exec(empty, empty);
      }; // unhandled rejections tracking support, NodeJS Promise without it fails @@species test


      return (isNode$1 || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
    } catch (e) {
      /* empty */
    }
  }(); // helpers

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

            if (handler === true) result = value;else {
              if (domain) domain.enter();
              result = handler(value);
              if (domain) domain.exit();
            }

            if (result === reaction.promise) {
              reject(TypeError$1('Promise-chain cycle'));
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
    task.call(global$1, function () {
      var value = promise._v;
      var unhandled = isUnhandled(promise);
      var result, handler, console;

      if (unhandled) {
        result = perform(function () {
          if (isNode$1) {
            process$2.emit('unhandledRejection', value, promise);
          } else if (handler = global$1.onunhandledrejection) {
            handler({
              promise: promise,
              reason: value
            });
          } else if ((console = global$1.console) && console.error) {
            console.error('Unhandled promise rejection', value);
          }
        }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

        promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
      }

      promise._a = undefined;
      if (unhandled && result.e) throw result.v;
    });
  };

  var isUnhandled = function (promise) {
    return promise._h !== 1 && (promise._a || promise._c).length === 0;
  };

  var onHandleUnhandled = function (promise) {
    task.call(global$1, function () {
      var handler;

      if (isNode$1) {
        process$2.emit('rejectionHandled', promise);
      } else if (handler = global$1.onrejectionhandled) {
        handler({
          promise: promise,
          reason: promise._v
        });
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
      if (promise === value) throw TypeError$1("Promise can't be resolved itself");

      if (then = isThenable(value)) {
        microtask(function () {
          var wrapper = {
            _w: promise,
            _d: false
          }; // wrap

          try {
            then.call(value, require$$7($resolve, wrapper, 1), require$$7($reject, wrapper, 1));
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
      $reject.call({
        _w: promise,
        _d: false
      }, e); // wrap
    }
  }; // constructor polyfill


  if (!USE_NATIVE) {
    // 25.4.3.1 Promise(executor)
    $Promise = function Promise(executor) {
      anInstance(this, $Promise, PROMISE, '_h');
      aFunction(executor);
      Internal.call(this);

      try {
        executor(require$$7($resolve, this, 1), require$$7($reject, this, 1));
      } catch (err) {
        $reject.call(this, err);
      }
    }; // eslint-disable-next-line no-unused-vars


    Internal = function Promise(executor) {
      this._c = []; // <- awaiting reactions

      this._a = undefined; // <- checked in isUnhandled reactions

      this._s = 0; // <- state

      this._d = false; // <- done

      this._v = undefined; // <- value

      this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled

      this._n = false; // <- notify
    };

    Internal.prototype = redefineAll($Promise.prototype, {
      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
      then: function then(onFulfilled, onRejected) {
        var reaction = newPromiseCapability(require$$30(this, $Promise));
        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
        reaction.fail = typeof onRejected == 'function' && onRejected;
        reaction.domain = isNode$1 ? process$2.domain : undefined;

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
      this.resolve = require$$7($resolve, promise, 1);
      this.reject = require$$7($reject, promise, 1);
    };

    newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
      return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };
  }

  $export$1($export$1.G + $export$1.W + $export$1.F * !USE_NATIVE, {
    Promise: $Promise
  });
  setToStringTag($Promise, PROMISE);
  require$$34(PROMISE);
  Wrapper = core[PROMISE]; // statics

  $export$1($export$1.S + $export$1.F * !USE_NATIVE, PROMISE, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(r) {
      var capability = newPromiseCapability(this);
      var $$reject = capability.reject;
      $$reject(r);
      return capability.promise;
    }
  });
  $export$1($export$1.S + $export$1.F * (require$$1$1 || !USE_NATIVE), PROMISE, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(x) {
      return promiseResolve(require$$1$1 && this === Wrapper ? $Promise : this, x);
    }
  });
  $export$1($export$1.S + $export$1.F * !(USE_NATIVE && require$$33(function (iter) {
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

  $export$1($export$1.P + $export$1.R, 'Promise', {
    'finally': function (onFinally) {
      var C = require$$30(this, core.Promise || global$1.Promise);
      var isFunction = typeof onFinally == 'function';
      return this.then(isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () {
          return x;
        });
      } : onFinally, isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () {
          throw e;
        });
      } : onFinally);
    }
  });

  var rApply = (global$1.Reflect || {}).apply;
  var fApply = Function.apply; // MS Edge argumentsList argument is optional

  $export$1($export$1.S + $export$1.F * !fails(function () {
    rApply(function () {
      /* empty */
    });
  }), 'Reflect', {
    apply: function apply(target, thisArgument, argumentsList) {
      var T = aFunction(target);
      var L = anObject(argumentsList);
      return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
    }
  });

  var arraySlice = [].slice;
  var factories = {};

  var construct = function (F, len, args) {
    if (!(len in factories)) {
      for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']'; // eslint-disable-next-line no-new-func


      factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
    }

    return factories[len](F, args);
  };

  var _bind = Function.bind || function bind(that
  /* , ...args */
  ) {
    var fn = aFunction(this);
    var partArgs = arraySlice.call(arguments, 1);

    var bound = function ()
    /* args... */
    {
      var args = partArgs.concat(arraySlice.call(arguments));
      return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
    };

    if (isObject(fn.prototype)) bound.prototype = fn.prototype;
    return bound;
  };

  var _bind$1 = /*#__PURE__*/Object.freeze({
    default: _bind,
    __moduleExports: _bind
  });

  var bind = ( _bind$1 && _bind ) || _bind$1;

  var rConstruct = (global$1.Reflect || {}).construct; // MS Edge supports only 2 arguments and argumentsList argument is optional
  // FF Nightly sets third argument as `new.target`, but does not create `this` from it

  var NEW_TARGET_BUG = fails(function () {
    function F() {
      /* empty */
    }

    return !(rConstruct(function () {
      /* empty */
    }, [], F) instanceof F);
  });
  var ARGS_BUG = !fails(function () {
    rConstruct(function () {
      /* empty */
    });
  });
  $export$1($export$1.S + $export$1.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
    construct: function construct(Target, args
    /* , newTarget */
    ) {
      aFunction(Target);
      anObject(args);
      var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
      if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);

      if (Target == newTarget) {
        // w/o altered newTarget, optimization for 0-4 arguments
        switch (args.length) {
          case 0:
            return new Target();

          case 1:
            return new Target(args[0]);

          case 2:
            return new Target(args[0], args[1]);

          case 3:
            return new Target(args[0], args[1], args[2]);

          case 4:
            return new Target(args[0], args[1], args[2], args[3]);
        } // w/o altered newTarget, lot of arguments case


        var $args = [null];
        $args.push.apply($args, args);
        return new (bind.apply(Target, $args))();
      } // with altered newTarget, not support built-in constructors


      var proto = newTarget.prototype;
      var instance = require$$22(isObject(proto) ? proto : Object.prototype);
      var result = Function.apply.call(Target, instance, args);
      return isObject(result) ? result : instance;
    }
  });

  // MS Edge has broken Reflect.defineProperty - throwing instead of returning false

  $export$1($export$1.S + $export$1.F * fails(function () {
    // eslint-disable-next-line no-undef
    Reflect.defineProperty(require$$37.f({}, 1, {
      value: 1
    }), 1, {
      value: 2
    });
  }), 'Reflect', {
    defineProperty: function defineProperty(target, propertyKey, attributes) {
      anObject(target);
      propertyKey = require$$16(propertyKey, true);
      anObject(attributes);

      try {
        require$$37.f(target, propertyKey, attributes);
        return true;
      } catch (e) {
        return false;
      }
    }
  });

  var gOPD$2 = require$$38.f;
  $export$1($export$1.S, 'Reflect', {
    deleteProperty: function deleteProperty(target, propertyKey) {
      var desc = gOPD$2(anObject(target), propertyKey);
      return desc && !desc.configurable ? false : delete target[propertyKey];
    }
  });

  function get(target, propertyKey
  /* , receiver */
  ) {
    var receiver = arguments.length < 3 ? target : arguments[2];
    var desc, proto;
    if (anObject(target) === receiver) return target[propertyKey];
    if (desc = require$$38.f(target, propertyKey)) return $has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
    if (isObject(proto = require$$23(target))) return get(proto, propertyKey, receiver);
  }

  $export$1($export$1.S, 'Reflect', {
    get: get
  });

  $export$1($export$1.S, 'Reflect', {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
      return require$$38.f(anObject(target), propertyKey);
    }
  });

  $export$1($export$1.S, 'Reflect', {
    getPrototypeOf: function getPrototypeOf(target) {
      return require$$23(anObject(target));
    }
  });

  $export$1($export$1.S, 'Reflect', {
    has: function has(target, propertyKey) {
      return propertyKey in target;
    }
  });

  var $isExtensible = Object.isExtensible;
  $export$1($export$1.S, 'Reflect', {
    isExtensible: function isExtensible(target) {
      anObject(target);
      return $isExtensible ? $isExtensible(target) : true;
    }
  });

  $export$1($export$1.S, 'Reflect', {
    ownKeys: require$$0$8
  });

  var $preventExtensions = Object.preventExtensions;
  $export$1($export$1.S, 'Reflect', {
    preventExtensions: function preventExtensions(target) {
      anObject(target);

      try {
        if ($preventExtensions) $preventExtensions(target);
        return true;
      } catch (e) {
        return false;
      }
    }
  });

  function set$1(target, propertyKey, V
  /* , receiver */
  ) {
    var receiver = arguments.length < 4 ? target : arguments[3];
    var ownDesc = require$$38.f(anObject(target), propertyKey);
    var existingDescriptor, proto;

    if (!ownDesc) {
      if (isObject(proto = require$$23(target))) {
        return set$1(proto, propertyKey, V, receiver);
      }

      ownDesc = require$$9(0);
    }

    if ($has(ownDesc, 'value')) {
      if (ownDesc.writable === false || !isObject(receiver)) return false;
      existingDescriptor = require$$38.f(receiver, propertyKey) || require$$9(0);
      existingDescriptor.value = V;
      require$$37.f(receiver, propertyKey, existingDescriptor);
      return true;
    }

    return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
  }

  $export$1($export$1.S, 'Reflect', {
    set: set$1
  });

  if (setProto) $export$1($export$1.S, 'Reflect', {
    setPrototypeOf: function setPrototypeOf(target, proto) {
      setProto.check(target, proto);

      try {
        setProto.set(target, proto);
        return true;
      } catch (e) {
        return false;
      }
    }
  });

  var MATCH = wks('match');

  var _isRegexp = function (it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
  };

  var _isRegexp$1 = /*#__PURE__*/Object.freeze({
    default: _isRegexp,
    __moduleExports: _isRegexp
  });

  var _flags = function () {
    var that = anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  var _flags$1 = /*#__PURE__*/Object.freeze({
    default: _flags,
    __moduleExports: _flags
  });

  var isRegExp = ( _isRegexp$1 && _isRegexp ) || _isRegexp$1;

  var $flags = ( _flags$1 && _flags ) || _flags$1;

  var dP$4 = require$$37.f;
  var gOPN$2 = require$$24.f;
  var $RegExp = global$1.RegExp;
  var Base$1 = $RegExp;
  var proto$2 = $RegExp.prototype;
  var re1 = /a/g;
  var re2 = /a/g; // "new" creates a new object, old webkit buggy here

  var CORRECT_NEW = new $RegExp(re1) !== re1;

  if (require$$0 && (!CORRECT_NEW || fails(function () {
    re2[wks('match')] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

    return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
  }))) {
    $RegExp = function RegExp(p, f) {
      var tiRE = this instanceof $RegExp;
      var piRE = isRegExp(p);
      var fiU = f === undefined;
      return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base$1(piRE && !fiU ? p.source : p, f) : Base$1((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto$2, $RegExp);
    };

    var proxy = function (key) {
      key in $RegExp || dP$4($RegExp, key, {
        configurable: true,
        get: function () {
          return Base$1[key];
        },
        set: function (it) {
          Base$1[key] = it;
        }
      });
    };

    for (var keys$1 = gOPN$2(Base$1), i = 0; keys$1.length > i;) proxy(keys$1[i++]);

    proto$2.constructor = $RegExp;
    $RegExp.prototype = proto$2;
    redefine(global$1, 'RegExp', $RegExp);
  }

  require$$34('RegExp');

  if (require$$0 && /./g.flags != 'g') require$$37.f(RegExp.prototype, 'flags', {
    configurable: true,
    get: $flags
  });

  var _fixReWks = function (KEY, length, exec) {
    var SYMBOL = wks(KEY);
    var fns = exec(defined, SYMBOL, ''[KEY]);
    var strfn = fns[0];
    var rxfn = fns[1];

    if (fails(function () {
      var O = {};

      O[SYMBOL] = function () {
        return 7;
      };

      return ''[KEY](O) != 7;
    })) {
      redefine(String.prototype, KEY, strfn);
      hide(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) {
        return rxfn.call(string, this, arg);
      } // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) {
        return rxfn.call(string, this);
      });
    }
  };

  var _fixReWks$1 = /*#__PURE__*/Object.freeze({
    default: _fixReWks,
    __moduleExports: _fixReWks
  });

  var require$$0$a = ( _fixReWks$1 && _fixReWks ) || _fixReWks$1;

  require$$0$a('match', 1, function (defined, MATCH, $match) {
    // 21.1.3.11 String.prototype.match(regexp)
    return [function match(regexp) {

      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    }, $match];
  });

  require$$0$a('replace', 2, function (defined, REPLACE, $replace) {
    // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
    return [function replace(searchValue, replaceValue) {

      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
    }, $replace];
  });

  require$$0$a('split', 2, function (defined, SPLIT, $split) {

    var isRegExp$$1 = isRegExp;
    var _split = $split;
    var $push = [].push;
    var $SPLIT = 'split';
    var LENGTH = 'length';
    var LAST_INDEX = 'lastIndex';

    if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
      var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
      // based on es5-shim implementation, need to rework it

      $split = function (separator, limit) {
        var string = String(this);
        if (separator === undefined && limit === 0) return []; // If `separator` is not a regex, use native split

        if (!isRegExp$$1(separator)) return _split.call(string, separator, limit);
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        var splitLimit = limit === undefined ? 4294967295 : limit >>> 0; // Make `global` and avoid `lastIndex` issues by working with a copy

        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var separator2, match, lastIndex, lastLength, i; // Doesn't need flags gy, but they don't hurt

        if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);

        while (match = separatorCopy.exec(string)) {
          // `separatorCopy.lastIndex` is not reliable cross-browser
          lastIndex = match.index + match[0][LENGTH];

          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index)); // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
            // eslint-disable-next-line no-loop-func

            if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
              for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
            });
            if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
            lastLength = match[0][LENGTH];
            lastLastIndex = lastIndex;
            if (output[LENGTH] >= splitLimit) break;
          }

          if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
        }

        if (lastLastIndex === string[LENGTH]) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));

        return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
      }; // Chakra, V8

    } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
      $split = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
      };
    } // 21.1.3.17 String.prototype.split(separator, limit)


    return [function split(separator, limit) {
      var O = defined(this);
      var fn = separator == undefined ? undefined : separator[SPLIT];
      return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
    }, $split];
  });

  require$$0$a('search', 1, function (defined, SEARCH, $search) {
    // 21.1.3.15 String.prototype.search(regexp)
    return [function search(regexp) {

      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    }, $search];
  });

  var TO_STRING = 'toString';
  var $toString = /./[TO_STRING];

  var define = function (fn) {
    redefine(RegExp.prototype, TO_STRING, fn, true);
  }; // 21.2.5.14 RegExp.prototype.toString()


  if (fails(function () {
    return $toString.call({
      source: 'a',
      flags: 'b'
    }) != '/a/b';
  })) {
    define(function toString() {
      var R = anObject(this);
      return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !require$$0 && R instanceof RegExp ? $flags.call(R) : undefined);
    }); // FF44- RegExp#toString has a wrong name
  } else if ($toString.name != TO_STRING) {
    define(function toString() {
      return $toString.call(this);
    });
  }

  var SET = 'Set'; // 23.2 Set Objects

  var es6_set = require$$1$3(SET, function (get) {
    return function Set() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    // 23.2.3.1 Set.prototype.add(value)
    add: function add(value) {
      return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
    }
  }, strong);

  var f$7 = wks;
  var _wksExt = {
    f: f$7
  };

  var _wksExt$1 = /*#__PURE__*/Object.freeze({
    default: _wksExt,
    __moduleExports: _wksExt,
    f: f$7
  });

  var wksExt = ( _wksExt$1 && _wksExt ) || _wksExt$1;

  var defineProperty = require$$37.f;

  var _wksDefine = function (name) {
    var $Symbol = core.Symbol || (core.Symbol = require$$1$1 ? {} : global$1.Symbol || {});
    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
      value: wksExt.f(name)
    });
  };

  var _wksDefine$1 = /*#__PURE__*/Object.freeze({
    default: _wksDefine,
    __moduleExports: _wksDefine
  });

  var _enumKeys = function (it) {
    var result = getKeys(it);
    var getSymbols = gOPS.f;

    if (getSymbols) {
      var symbols = getSymbols(it);
      var isEnum = pIE.f;
      var i = 0;
      var key;

      while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }

    return result;
  };

  var _enumKeys$1 = /*#__PURE__*/Object.freeze({
    default: _enumKeys,
    __moduleExports: _enumKeys
  });

  var require$$0$b = ( _wksDefine$1 && _wksDefine ) || _wksDefine$1;

  var enumKeys = ( _enumKeys$1 && _enumKeys ) || _enumKeys$1;

  var META = meta.KEY;
  var gOPD$3 = require$$38.f;
  var dP$5 = require$$37.f;
  var gOPN$3 = gOPNExt.f;
  var $Symbol = global$1.Symbol;
  var $JSON = global$1.JSON;

  var _stringify = $JSON && $JSON.stringify;

  var PROTOTYPE$2 = 'prototype';
  var HIDDEN = wks('_hidden');
  var TO_PRIMITIVE$1 = wks('toPrimitive');
  var isEnum$1 = {}.propertyIsEnumerable;
  var SymbolRegistry = shared('symbol-registry');
  var AllSymbols = shared('symbols');
  var OPSymbols = shared('op-symbols');
  var ObjectProto$1 = Object[PROTOTYPE$2];
  var USE_NATIVE$1 = typeof $Symbol == 'function';
  var QObject = global$1.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

  var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

  var setSymbolDesc = require$$0 && fails(function () {
    return require$$22(dP$5({}, 'a', {
      get: function () {
        return dP$5(this, 'a', {
          value: 7
        }).a;
      }
    })).a != 7;
  }) ? function (it, key, D) {
    var protoDesc = gOPD$3(ObjectProto$1, key);
    if (protoDesc) delete ObjectProto$1[key];
    dP$5(it, key, D);
    if (protoDesc && it !== ObjectProto$1) dP$5(ObjectProto$1, key, protoDesc);
  } : dP$5;

  var wrap = function (tag) {
    var sym = AllSymbols[tag] = require$$22($Symbol[PROTOTYPE$2]);

    sym._k = tag;
    return sym;
  };

  var isSymbol = USE_NATIVE$1 && typeof $Symbol.iterator == 'symbol' ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    return it instanceof $Symbol;
  };

  var $defineProperty = function defineProperty(it, key, D) {
    if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
    anObject(it);
    key = require$$16(key, true);
    anObject(D);

    if ($has(AllSymbols, key)) {
      if (!D.enumerable) {
        if (!$has(it, HIDDEN)) dP$5(it, HIDDEN, require$$9(1, {}));
        it[HIDDEN][key] = true;
      } else {
        if ($has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
        D = require$$22(D, {
          enumerable: require$$9(0, false)
        });
      }

      return setSymbolDesc(it, key, D);
    }

    return dP$5(it, key, D);
  };

  var $defineProperties = function defineProperties(it, P) {
    anObject(it);
    var keys = enumKeys(P = toIObject(P));
    var i = 0;
    var l = keys.length;
    var key;

    while (l > i) $defineProperty(it, key = keys[i++], P[key]);

    return it;
  };

  var $create = function create(it, P) {
    return P === undefined ? require$$22(it) : $defineProperties(require$$22(it), P);
  };

  var $propertyIsEnumerable = function propertyIsEnumerable(key) {
    var E = isEnum$1.call(this, key = require$$16(key, true));
    if (this === ObjectProto$1 && $has(AllSymbols, key) && !$has(OPSymbols, key)) return false;
    return E || !$has(this, key) || !$has(AllSymbols, key) || $has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
  };

  var $getOwnPropertyDescriptor$1 = function getOwnPropertyDescriptor(it, key) {
    it = toIObject(it);
    key = require$$16(key, true);
    if (it === ObjectProto$1 && $has(AllSymbols, key) && !$has(OPSymbols, key)) return;
    var D = gOPD$3(it, key);
    if (D && $has(AllSymbols, key) && !($has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
    return D;
  };

  var $getOwnPropertyNames = function getOwnPropertyNames(it) {
    var names = gOPN$3(toIObject(it));
    var result = [];
    var i = 0;
    var key;

    while (names.length > i) {
      if (!$has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
    }

    return result;
  };

  var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
    var IS_OP = it === ObjectProto$1;
    var names = gOPN$3(IS_OP ? OPSymbols : toIObject(it));
    var result = [];
    var i = 0;
    var key;

    while (names.length > i) {
      if ($has(AllSymbols, key = names[i++]) && (IS_OP ? $has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
    }

    return result;
  }; // 19.4.1.1 Symbol([description])


  if (!USE_NATIVE$1) {
    $Symbol = function Symbol() {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
      var tag = require$$26(arguments.length > 0 ? arguments[0] : undefined);

      var $set = function (value) {
        if (this === ObjectProto$1) $set.call(OPSymbols, value);
        if ($has(this, HIDDEN) && $has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDesc(this, tag, require$$9(1, value));
      };

      if (require$$0 && setter) setSymbolDesc(ObjectProto$1, tag, {
        configurable: true,
        set: $set
      });
      return wrap(tag);
    };

    redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
      return this._k;
    });
    require$$38.f = $getOwnPropertyDescriptor$1;
    require$$37.f = $defineProperty;
    require$$24.f = gOPNExt.f = $getOwnPropertyNames;
    pIE.f = $propertyIsEnumerable;
    gOPS.f = $getOwnPropertySymbols;

    if (require$$0 && !require$$1$1) {
      redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
    }

    wksExt.f = function (name) {
      return wrap(wks(name));
    };
  }

  $export$1($export$1.G + $export$1.W + $export$1.F * !USE_NATIVE$1, {
    Symbol: $Symbol
  });

  for (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j$1 = 0; es6Symbols.length > j$1;) wks(es6Symbols[j$1++]);

  for (var wellKnownSymbols = getKeys(wks.store), k = 0; wellKnownSymbols.length > k;) require$$0$b(wellKnownSymbols[k++]);

  $export$1($export$1.S + $export$1.F * !USE_NATIVE$1, 'Symbol', {
    // 19.4.2.1 Symbol.for(key)
    'for': function (key) {
      return $has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
    },
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: function keyFor(sym) {
      if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');

      for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
    },
    useSetter: function () {
      setter = true;
    },
    useSimple: function () {
      setter = false;
    }
  });
  $export$1($export$1.S + $export$1.F * !USE_NATIVE$1, 'Object', {
    // 19.1.2.2 Object.create(O [, Properties])
    create: $create,
    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
    defineProperty: $defineProperty,
    // 19.1.2.3 Object.defineProperties(O, Properties)
    defineProperties: $defineProperties,
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor$1,
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    getOwnPropertyNames: $getOwnPropertyNames,
    // 19.1.2.8 Object.getOwnPropertySymbols(O)
    getOwnPropertySymbols: $getOwnPropertySymbols
  }); // 24.3.2 JSON.stringify(value [, replacer [, space]])

  $JSON && $export$1($export$1.S + $export$1.F * (!USE_NATIVE$1 || fails(function () {
    var S = $Symbol(); // MS Edge converts symbol values to JSON as {}
    // WebKit converts symbol values to JSON as null
    // V8 throws on boxed symbols

    return _stringify([S]) != '[null]' || _stringify({
      a: S
    }) != '{}' || _stringify(Object(S)) != '{}';
  })), 'JSON', {
    stringify: function stringify(it) {
      var args = [it];
      var i = 1;
      var replacer, $replacer;

      while (arguments.length > i) args.push(arguments[i++]);

      $replacer = replacer = args[1];
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return _stringify.apply($JSON, args);
    }
  }); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

  $Symbol[PROTOTYPE$2][TO_PRIMITIVE$1] || hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE$1, $Symbol[PROTOTYPE$2].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

  setToStringTag($Symbol, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]

  setToStringTag(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]

  setToStringTag(global$1.JSON, 'JSON', true);

  require$$0$b('asyncIterator');

  var quot = /"/g; // B.2.3.2.1 CreateHTML(string, tag, attribute, value)

  var createHTML = function (string, tag, attribute, value) {
    var S = String(defined(string));
    var p1 = '<' + tag;
    if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
    return p1 + '>' + S + '</' + tag + '>';
  };

  var _stringHtml = function (NAME, exec) {
    var O = {};
    O[NAME] = exec(createHTML);
    $export$1($export$1.P + $export$1.F * fails(function () {
      var test = ''[NAME]('"');
      return test !== test.toLowerCase() || test.split('"').length > 3;
    }), 'String', O);
  };

  var _stringHtml$1 = /*#__PURE__*/Object.freeze({
    default: _stringHtml,
    __moduleExports: _stringHtml
  });

  var require$$0$c = ( _stringHtml$1 && _stringHtml ) || _stringHtml$1;

  require$$0$c('anchor', function (createHTML) {
    return function anchor(name) {
      return createHTML(this, 'a', 'name', name);
    };
  });

  require$$0$c('big', function (createHTML) {
    return function big() {
      return createHTML(this, 'big', '', '');
    };
  });

  require$$0$c('blink', function (createHTML) {
    return function blink() {
      return createHTML(this, 'blink', '', '');
    };
  });

  require$$0$c('bold', function (createHTML) {
    return function bold() {
      return createHTML(this, 'b', '', '');
    };
  });

  // false -> String#codePointAt

  var _stringAt = function (TO_STRING) {
    return function (that, pos) {
      var s = String(defined(that));
      var i = require$$12(pos);
      var l = s.length;
      var a, b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

  var _stringAt$1 = /*#__PURE__*/Object.freeze({
    default: _stringAt,
    __moduleExports: _stringAt
  });

  var require$$0$d = ( _stringAt$1 && _stringAt ) || _stringAt$1;

  var $at = require$$0$d(false);
  $export$1($export$1.P, 'String', {
    // 21.1.3.3 String.prototype.codePointAt(pos)
    codePointAt: function codePointAt(pos) {
      return $at(this, pos);
    }
  });

  var _stringContext = function (that, searchString, NAME) {
    if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
    return String(defined(that));
  };

  var _stringContext$1 = /*#__PURE__*/Object.freeze({
    default: _stringContext,
    __moduleExports: _stringContext
  });

  var MATCH$1 = wks('match');

  var _failsIsRegexp = function (KEY) {
    var re = /./;

    try {
      '/./'[KEY](re);
    } catch (e) {
      try {
        re[MATCH$1] = false;
        return !'/./'[KEY](re);
      } catch (f) {
        /* empty */
      }
    }

    return true;
  };

  var _failsIsRegexp$1 = /*#__PURE__*/Object.freeze({
    default: _failsIsRegexp,
    __moduleExports: _failsIsRegexp
  });

  var context = ( _stringContext$1 && _stringContext ) || _stringContext$1;

  var require$$0$e = ( _failsIsRegexp$1 && _failsIsRegexp ) || _failsIsRegexp$1;

  var ENDS_WITH = 'endsWith';
  var $endsWith = ''[ENDS_WITH];
  $export$1($export$1.P + $export$1.F * require$$0$e(ENDS_WITH), 'String', {
    endsWith: function endsWith(searchString
    /* , endPosition = @length */
    ) {
      var that = context(this, searchString, ENDS_WITH);
      var endPosition = arguments.length > 1 ? arguments[1] : undefined;
      var len = require$$13(that.length);
      var end = endPosition === undefined ? len : Math.min(require$$13(endPosition), len);
      var search = String(searchString);
      return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
    }
  });

  require$$0$c('fixed', function (createHTML) {
    return function fixed() {
      return createHTML(this, 'tt', '', '');
    };
  });

  require$$0$c('fontcolor', function (createHTML) {
    return function fontcolor(color) {
      return createHTML(this, 'font', 'color', color);
    };
  });

  require$$0$c('fontsize', function (createHTML) {
    return function fontsize(size) {
      return createHTML(this, 'font', 'size', size);
    };
  });

  var fromCharCode = String.fromCharCode;
  var $fromCodePoint = String.fromCodePoint; // length should be 1, old FF problem

  $export$1($export$1.S + $export$1.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
    // 21.1.2.2 String.fromCodePoint(...codePoints)
    fromCodePoint: function fromCodePoint(x) {
      // eslint-disable-line no-unused-vars
      var res = [];
      var aLen = arguments.length;
      var i = 0;
      var code;

      while (aLen > i) {
        code = +arguments[i++];
        if (require$$15(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
        res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
      }

      return res.join('');
    }
  });

  var INCLUDES = 'includes';
  $export$1($export$1.P + $export$1.F * require$$0$e(INCLUDES), 'String', {
    includes: function includes(searchString
    /* , position = 0 */
    ) {
      return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  require$$0$c('italics', function (createHTML) {
    return function italics() {
      return createHTML(this, 'i', '', '');
    };
  });

  var $at$1 = require$$0$d(true); // 21.1.3.27 String.prototype[@@iterator]()

  require$$1$2(String, 'String', function (iterated) {
    this._t = String(iterated); // target

    this._i = 0; // next index
    // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return {
      value: undefined,
      done: true
    };
    point = $at$1(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });

  require$$0$c('link', function (createHTML) {
    return function link(url) {
      return createHTML(this, 'a', 'href', url);
    };
  });

  var _stringRepeat = function repeat(count) {
    var str = String(defined(this));
    var res = '';
    var n = require$$12(count);
    if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");

    for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;

    return res;
  };

  var _stringRepeat$1 = /*#__PURE__*/Object.freeze({
    default: _stringRepeat,
    __moduleExports: _stringRepeat
  });

  var require$$0$f = ( _stringRepeat$1 && _stringRepeat ) || _stringRepeat$1;

  var _stringPad = function (that, maxLength, fillString, left) {
    var S = String(defined(that));
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : String(fillString);
    var intMaxLength = require$$13(maxLength);
    if (intMaxLength <= stringLength || fillStr == '') return S;
    var fillLen = intMaxLength - stringLength;
    var stringFiller = require$$0$f.call(fillStr, Math.ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
    return left ? stringFiller + S : S + stringFiller;
  };

  var _stringPad$1 = /*#__PURE__*/Object.freeze({
    default: _stringPad,
    __moduleExports: _stringPad
  });

  var navigator$1 = global$1.navigator;

  var _userAgent = navigator$1 && navigator$1.userAgent || '';

  var _userAgent$1 = /*#__PURE__*/Object.freeze({
    default: _userAgent,
    __moduleExports: _userAgent
  });

  var $pad = ( _stringPad$1 && _stringPad ) || _stringPad$1;

  var userAgent = ( _userAgent$1 && _userAgent ) || _userAgent$1;

  // https://github.com/zloirock/core-js/issues/280


  $export$1($export$1.P + $export$1.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
    padStart: function padStart(maxLength
    /* , fillString = ' ' */
    ) {
      return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
    }
  });

  // https://github.com/zloirock/core-js/issues/280


  $export$1($export$1.P + $export$1.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
    padEnd: function padEnd(maxLength
    /* , fillString = ' ' */
    ) {
      return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
    }
  });

  $export$1($export$1.S, 'String', {
    // 21.1.2.4 String.raw(callSite, ...substitutions)
    raw: function raw(callSite) {
      var tpl = toIObject(callSite.raw);
      var len = require$$13(tpl.length);
      var aLen = arguments.length;
      var res = [];
      var i = 0;

      while (len > i) {
        res.push(String(tpl[i++]));
        if (i < aLen) res.push(String(arguments[i]));
      }

      return res.join('');
    }
  });

  $export$1($export$1.P, 'String', {
    // 21.1.3.13 String.prototype.repeat(count)
    repeat: require$$0$f
  });

  require$$0$c('small', function (createHTML) {
    return function small() {
      return createHTML(this, 'small', '', '');
    };
  });

  var STARTS_WITH = 'startsWith';
  var $startsWith = ''[STARTS_WITH];
  $export$1($export$1.P + $export$1.F * require$$0$e(STARTS_WITH), 'String', {
    startsWith: function startsWith(searchString
    /* , position = 0 */
    ) {
      var that = context(this, searchString, STARTS_WITH);
      var index = require$$13(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
      var search = String(searchString);
      return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
    }
  });

  require$$0$c('strike', function (createHTML) {
    return function strike() {
      return createHTML(this, 'strike', '', '');
    };
  });

  require$$0$c('sub', function (createHTML) {
    return function sub() {
      return createHTML(this, 'sub', '', '');
    };
  });

  require$$0$c('sup', function (createHTML) {
    return function sup() {
      return createHTML(this, 'sup', '', '');
    };
  });

  var TYPED = require$$26('typed_array');
  var VIEW = require$$26('view');
  var ABV = !!(global$1.ArrayBuffer && global$1.DataView);
  var CONSTR = ABV;
  var i$1 = 0;
  var l = 9;
  var Typed;
  var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');

  while (i$1 < l) {
    if (Typed = global$1[TypedArrayConstructors[i$1++]]) {
      hide(Typed.prototype, TYPED, true);
      hide(Typed.prototype, VIEW, true);
    } else CONSTR = false;
  }

  var _typed = {
    ABV: ABV,
    CONSTR: CONSTR,
    TYPED: TYPED,
    VIEW: VIEW
  };
  var _typed_1 = _typed.ABV;
  var _typed_2 = _typed.CONSTR;
  var _typed_3 = _typed.TYPED;
  var _typed_4 = _typed.VIEW;

  var _typed$1 = /*#__PURE__*/Object.freeze({
    default: _typed,
    __moduleExports: _typed,
    ABV: _typed_1,
    CONSTR: _typed_2,
    TYPED: _typed_3,
    VIEW: _typed_4
  });

  var _toIndex = function (it) {
    if (it === undefined) return 0;
    var number = require$$12(it);
    var length = require$$13(number);
    if (number !== length) throw RangeError('Wrong length!');
    return length;
  };

  var _toIndex$1 = /*#__PURE__*/Object.freeze({
    default: _toIndex,
    __moduleExports: _toIndex
  });

  var require$$5 = ( _typed$1 && _typed ) || _typed$1;

  var require$$14 = ( _toIndex$1 && _toIndex ) || _toIndex$1;

  var _typedBuffer = createCommonjsModule(function (module, exports) {

    var gOPN = require$$24.f;
    var dP = require$$37.f;
    var ARRAY_BUFFER = 'ArrayBuffer';
    var DATA_VIEW = 'DataView';
    var PROTOTYPE = 'prototype';
    var WRONG_LENGTH = 'Wrong length!';
    var WRONG_INDEX = 'Wrong index!';
    var $ArrayBuffer = global$1[ARRAY_BUFFER];
    var $DataView = global$1[DATA_VIEW];
    var Math = global$1.Math;
    var RangeError = global$1.RangeError; // eslint-disable-next-line no-shadow-restricted-names

    var Infinity = global$1.Infinity;
    var BaseBuffer = $ArrayBuffer;
    var abs = Math.abs;
    var pow = Math.pow;
    var floor = Math.floor;
    var log = Math.log;
    var LN2 = Math.LN2;
    var BUFFER = 'buffer';
    var BYTE_LENGTH = 'byteLength';
    var BYTE_OFFSET = 'byteOffset';
    var $BUFFER = require$$0 ? '_b' : BUFFER;
    var $LENGTH = require$$0 ? '_l' : BYTE_LENGTH;
    var $OFFSET = require$$0 ? '_o' : BYTE_OFFSET; // IEEE754 conversions based on https://github.com/feross/ieee754

    function packIEEE754(value, mLen, nBytes) {
      var buffer = new Array(nBytes);
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
      var i = 0;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      var e, m, c;
      value = abs(value); // eslint-disable-next-line no-self-compare

      if (value != value || value === Infinity) {
        // eslint-disable-next-line no-self-compare
        m = value != value ? 1 : 0;
        e = eMax;
      } else {
        e = floor(log(value) / LN2);

        if (value * (c = pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }

        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * pow(2, 1 - eBias);
        }

        if (value * c >= 2) {
          e++;
          c /= 2;
        }

        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * pow(2, eBias - 1) * pow(2, mLen);
          e = 0;
        }
      }

      for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);

      e = e << mLen | m;
      eLen += mLen;

      for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);

      buffer[--i] |= s * 128;
      return buffer;
    }

    function unpackIEEE754(buffer, mLen, nBytes) {
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = eLen - 7;
      var i = nBytes - 1;
      var s = buffer[i--];
      var e = s & 127;
      var m;
      s >>= 7;

      for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);

      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;

      for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);

      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : s ? -Infinity : Infinity;
      } else {
        m = m + pow(2, mLen);
        e = e - eBias;
      }

      return (s ? -1 : 1) * m * pow(2, e - mLen);
    }

    function unpackI32(bytes) {
      return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
    }

    function packI8(it) {
      return [it & 0xff];
    }

    function packI16(it) {
      return [it & 0xff, it >> 8 & 0xff];
    }

    function packI32(it) {
      return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
    }

    function packF64(it) {
      return packIEEE754(it, 52, 8);
    }

    function packF32(it) {
      return packIEEE754(it, 23, 4);
    }

    function addGetter(C, key, internal) {
      dP(C[PROTOTYPE], key, {
        get: function () {
          return this[internal];
        }
      });
    }

    function get(view, bytes, index, isLittleEndian) {
      var numIndex = +index;
      var intIndex = require$$14(numIndex);
      if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
      var store = view[$BUFFER]._b;
      var start = intIndex + view[$OFFSET];
      var pack = store.slice(start, start + bytes);
      return isLittleEndian ? pack : pack.reverse();
    }

    function set(view, bytes, index, conversion, value, isLittleEndian) {
      var numIndex = +index;
      var intIndex = require$$14(numIndex);
      if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
      var store = view[$BUFFER]._b;
      var start = intIndex + view[$OFFSET];
      var pack = conversion(+value);

      for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
    }

    if (!require$$5.ABV) {
      $ArrayBuffer = function ArrayBuffer(length) {
        anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
        var byteLength = require$$14(length);
        this._b = require$$35.call(new Array(byteLength), 0);
        this[$LENGTH] = byteLength;
      };

      $DataView = function DataView(buffer, byteOffset, byteLength) {
        anInstance(this, $DataView, DATA_VIEW);
        anInstance(buffer, $ArrayBuffer, DATA_VIEW);
        var bufferLength = buffer[$LENGTH];
        var offset = require$$12(byteOffset);
        if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
        byteLength = byteLength === undefined ? bufferLength - offset : require$$13(byteLength);
        if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
        this[$BUFFER] = buffer;
        this[$OFFSET] = offset;
        this[$LENGTH] = byteLength;
      };

      if (require$$0) {
        addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
        addGetter($DataView, BUFFER, '_b');
        addGetter($DataView, BYTE_LENGTH, '_l');
        addGetter($DataView, BYTE_OFFSET, '_o');
      }

      redefineAll($DataView[PROTOTYPE], {
        getInt8: function getInt8(byteOffset) {
          return get(this, 1, byteOffset)[0] << 24 >> 24;
        },
        getUint8: function getUint8(byteOffset) {
          return get(this, 1, byteOffset)[0];
        },
        getInt16: function getInt16(byteOffset
        /* , littleEndian */
        ) {
          var bytes = get(this, 2, byteOffset, arguments[1]);
          return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
        },
        getUint16: function getUint16(byteOffset
        /* , littleEndian */
        ) {
          var bytes = get(this, 2, byteOffset, arguments[1]);
          return bytes[1] << 8 | bytes[0];
        },
        getInt32: function getInt32(byteOffset
        /* , littleEndian */
        ) {
          return unpackI32(get(this, 4, byteOffset, arguments[1]));
        },
        getUint32: function getUint32(byteOffset
        /* , littleEndian */
        ) {
          return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
        },
        getFloat32: function getFloat32(byteOffset
        /* , littleEndian */
        ) {
          return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
        },
        getFloat64: function getFloat64(byteOffset
        /* , littleEndian */
        ) {
          return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
        },
        setInt8: function setInt8(byteOffset, value) {
          set(this, 1, byteOffset, packI8, value);
        },
        setUint8: function setUint8(byteOffset, value) {
          set(this, 1, byteOffset, packI8, value);
        },
        setInt16: function setInt16(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 2, byteOffset, packI16, value, arguments[2]);
        },
        setUint16: function setUint16(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 2, byteOffset, packI16, value, arguments[2]);
        },
        setInt32: function setInt32(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 4, byteOffset, packI32, value, arguments[2]);
        },
        setUint32: function setUint32(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 4, byteOffset, packI32, value, arguments[2]);
        },
        setFloat32: function setFloat32(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 4, byteOffset, packF32, value, arguments[2]);
        },
        setFloat64: function setFloat64(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 8, byteOffset, packF64, value, arguments[2]);
        }
      });
    } else {
      if (!fails(function () {
        $ArrayBuffer(1);
      }) || !fails(function () {
        new $ArrayBuffer(-1); // eslint-disable-line no-new
      }) || fails(function () {
        new $ArrayBuffer(); // eslint-disable-line no-new

        new $ArrayBuffer(1.5); // eslint-disable-line no-new

        new $ArrayBuffer(NaN); // eslint-disable-line no-new

        return $ArrayBuffer.name != ARRAY_BUFFER;
      })) {
        $ArrayBuffer = function ArrayBuffer(length) {
          anInstance(this, $ArrayBuffer);
          return new BaseBuffer(require$$14(length));
        };

        var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];

        for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
          if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
        }

        if (!require$$1$1) ArrayBufferProto.constructor = $ArrayBuffer;
      } // iOS Safari 7.x bug


      var view = new $DataView(new $ArrayBuffer(2));
      var $setInt8 = $DataView[PROTOTYPE].setInt8;
      view.setInt8(0, 2147483648);
      view.setInt8(1, 2147483649);
      if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
        setInt8: function setInt8(byteOffset, value) {
          $setInt8.call(this, byteOffset, value << 24 >> 24);
        },
        setUint8: function setUint8(byteOffset, value) {
          $setInt8.call(this, byteOffset, value << 24 >> 24);
        }
      }, true);
    }

    setToStringTag($ArrayBuffer, ARRAY_BUFFER);
    setToStringTag($DataView, DATA_VIEW);
    hide($DataView[PROTOTYPE], require$$5.VIEW, true);
    exports[ARRAY_BUFFER] = $ArrayBuffer;
    exports[DATA_VIEW] = $DataView;
  });

  var _typedBuffer$1 = /*#__PURE__*/Object.freeze({
    default: _typedBuffer,
    __moduleExports: _typedBuffer
  });

  var require$$6 = ( _typedBuffer$1 && _typedBuffer ) || _typedBuffer$1;

  var ArrayBuffer = global$1.ArrayBuffer;
  var $ArrayBuffer = require$$6.ArrayBuffer;
  var $DataView = require$$6.DataView;
  var $isView = require$$5.ABV && ArrayBuffer.isView;
  var $slice = $ArrayBuffer.prototype.slice;
  var VIEW$1 = require$$5.VIEW;
  var ARRAY_BUFFER = 'ArrayBuffer';
  $export$1($export$1.G + $export$1.W + $export$1.F * (ArrayBuffer !== $ArrayBuffer), {
    ArrayBuffer: $ArrayBuffer
  });
  $export$1($export$1.S + $export$1.F * !require$$5.CONSTR, ARRAY_BUFFER, {
    // 24.1.3.1 ArrayBuffer.isView(arg)
    isView: function isView(it) {
      return $isView && $isView(it) || isObject(it) && VIEW$1 in it;
    }
  });
  $export$1($export$1.P + $export$1.U + $export$1.F * fails(function () {
    return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
  }), ARRAY_BUFFER, {
    // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
    slice: function slice(start, end) {
      if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix

      var len = anObject(this).byteLength;
      var first = require$$15(start, len);
      var final = require$$15(end === undefined ? len : end, len);
      var result = new (require$$30(this, $ArrayBuffer))(require$$13(final - first));
      var viewS = new $DataView(this);
      var viewT = new $DataView(result);
      var index = 0;

      while (first < final) {
        viewT.setUint8(index++, viewS.getUint8(first++));
      }

      return result;
    }
  });
  require$$34(ARRAY_BUFFER);

  var _typedArray = createCommonjsModule(function (module) {

    if (require$$0) {
      var LIBRARY = require$$1$1;
      var global = global$1;
      var fails$$1 = fails;
      var $export = $export$1;
      var $typed = require$$5;
      var $buffer = require$$6;
      var ctx = require$$7;
      var anInstance$$1 = anInstance;
      var propertyDesc = require$$9;
      var hide$$1 = hide;
      var redefineAll$$1 = redefineAll;
      var toInteger = require$$12;
      var toLength = require$$13;
      var toIndex = require$$14;
      var toAbsoluteIndex = require$$15;
      var toPrimitive = require$$16;
      var has = $has;
      var classof = require$$18;
      var isObject$$1 = isObject;
      var toObject = require$$20;
      var isArrayIter = require$$21;
      var create = require$$22;
      var getPrototypeOf = require$$23;
      var gOPN = require$$24.f;
      var getIterFn = require$$25;
      var uid = require$$26;
      var wks$$1 = wks;
      var createArrayMethod = require$$0$1;
      var createArrayIncludes = require$$29;
      var speciesConstructor = require$$30;
      var ArrayIterators = es6_array_iterator;
      var Iterators$$1 = Iterators;
      var $iterDetect = require$$33;
      var setSpecies = require$$34;
      var arrayFill = require$$35;
      var arrayCopyWithin = require$$36;
      var $DP = require$$37;
      var $GOPD = require$$38;
      var dP = $DP.f;
      var gOPD = $GOPD.f;
      var RangeError = global.RangeError;
      var TypeError = global.TypeError;
      var Uint8Array = global.Uint8Array;
      var ARRAY_BUFFER = 'ArrayBuffer';
      var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
      var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
      var PROTOTYPE = 'prototype';
      var ArrayProto = Array[PROTOTYPE];
      var $ArrayBuffer = $buffer.ArrayBuffer;
      var $DataView = $buffer.DataView;
      var arrayForEach = createArrayMethod(0);
      var arrayFilter = createArrayMethod(2);
      var arraySome = createArrayMethod(3);
      var arrayEvery = createArrayMethod(4);
      var arrayFind = createArrayMethod(5);
      var arrayFindIndex = createArrayMethod(6);
      var arrayIncludes = createArrayIncludes(true);
      var arrayIndexOf = createArrayIncludes(false);
      var arrayValues = ArrayIterators.values;
      var arrayKeys = ArrayIterators.keys;
      var arrayEntries = ArrayIterators.entries;
      var arrayLastIndexOf = ArrayProto.lastIndexOf;
      var arrayReduce = ArrayProto.reduce;
      var arrayReduceRight = ArrayProto.reduceRight;
      var arrayJoin = ArrayProto.join;
      var arraySort = ArrayProto.sort;
      var arraySlice = ArrayProto.slice;
      var arrayToString = ArrayProto.toString;
      var arrayToLocaleString = ArrayProto.toLocaleString;
      var ITERATOR = wks$$1('iterator');
      var TAG = wks$$1('toStringTag');
      var TYPED_CONSTRUCTOR = uid('typed_constructor');
      var DEF_CONSTRUCTOR = uid('def_constructor');
      var ALL_CONSTRUCTORS = $typed.CONSTR;
      var TYPED_ARRAY = $typed.TYPED;
      var VIEW = $typed.VIEW;
      var WRONG_LENGTH = 'Wrong length!';
      var $map = createArrayMethod(1, function (O, length) {
        return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
      });
      var LITTLE_ENDIAN = fails$$1(function () {
        // eslint-disable-next-line no-undef
        return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
      });
      var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails$$1(function () {
        new Uint8Array(1).set({});
      });

      var toOffset = function (it, BYTES) {
        var offset = toInteger(it);
        if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
        return offset;
      };

      var validate = function (it) {
        if (isObject$$1(it) && TYPED_ARRAY in it) return it;
        throw TypeError(it + ' is not a typed array!');
      };

      var allocate = function (C, length) {
        if (!(isObject$$1(C) && TYPED_CONSTRUCTOR in C)) {
          throw TypeError('It is not a typed array constructor!');
        }

        return new C(length);
      };

      var speciesFromList = function (O, list) {
        return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
      };

      var fromList = function (C, list) {
        var index = 0;
        var length = list.length;
        var result = allocate(C, length);

        while (length > index) result[index] = list[index++];

        return result;
      };

      var addGetter = function (it, key, internal) {
        dP(it, key, {
          get: function () {
            return this._d[internal];
          }
        });
      };

      var $from = function from(source
      /* , mapfn, thisArg */
      ) {
        var O = toObject(source);
        var aLen = arguments.length;
        var mapfn = aLen > 1 ? arguments[1] : undefined;
        var mapping = mapfn !== undefined;
        var iterFn = getIterFn(O);
        var i, length, values, result, step, iterator;

        if (iterFn != undefined && !isArrayIter(iterFn)) {
          for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
            values.push(step.value);
          }

          O = values;
        }

        if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);

        for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
          result[i] = mapping ? mapfn(O[i], i) : O[i];
        }

        return result;
      };

      var $of = function of()
      /* ...items */
      {
        var index = 0;
        var length = arguments.length;
        var result = allocate(this, length);

        while (length > index) result[index] = arguments[index++];

        return result;
      }; // iOS Safari 6.x fails here


      var TO_LOCALE_BUG = !!Uint8Array && fails$$1(function () {
        arrayToLocaleString.call(new Uint8Array(1));
      });

      var $toLocaleString = function toLocaleString() {
        return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
      };

      var proto = {
        copyWithin: function copyWithin(target, start
        /* , end */
        ) {
          return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
        },
        every: function every(callbackfn
        /* , thisArg */
        ) {
          return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        fill: function fill(value
        /* , start, end */
        ) {
          // eslint-disable-line no-unused-vars
          return arrayFill.apply(validate(this), arguments);
        },
        filter: function filter(callbackfn
        /* , thisArg */
        ) {
          return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
        },
        find: function find(predicate
        /* , thisArg */
        ) {
          return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
        },
        findIndex: function findIndex(predicate
        /* , thisArg */
        ) {
          return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
        },
        forEach: function forEach(callbackfn
        /* , thisArg */
        ) {
          arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        indexOf: function indexOf(searchElement
        /* , fromIndex */
        ) {
          return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
        },
        includes: function includes(searchElement
        /* , fromIndex */
        ) {
          return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
        },
        join: function join(separator) {
          // eslint-disable-line no-unused-vars
          return arrayJoin.apply(validate(this), arguments);
        },
        lastIndexOf: function lastIndexOf(searchElement
        /* , fromIndex */
        ) {
          // eslint-disable-line no-unused-vars
          return arrayLastIndexOf.apply(validate(this), arguments);
        },
        map: function map(mapfn
        /* , thisArg */
        ) {
          return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        reduce: function reduce(callbackfn
        /* , initialValue */
        ) {
          // eslint-disable-line no-unused-vars
          return arrayReduce.apply(validate(this), arguments);
        },
        reduceRight: function reduceRight(callbackfn
        /* , initialValue */
        ) {
          // eslint-disable-line no-unused-vars
          return arrayReduceRight.apply(validate(this), arguments);
        },
        reverse: function reverse() {
          var that = this;
          var length = validate(that).length;
          var middle = Math.floor(length / 2);
          var index = 0;
          var value;

          while (index < middle) {
            value = that[index];
            that[index++] = that[--length];
            that[length] = value;
          }

          return that;
        },
        some: function some(callbackfn
        /* , thisArg */
        ) {
          return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        sort: function sort(comparefn) {
          return arraySort.call(validate(this), comparefn);
        },
        subarray: function subarray(begin, end) {
          var O = validate(this);
          var length = O.length;
          var $begin = toAbsoluteIndex(begin, length);
          return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));
        }
      };

      var $slice = function slice(start, end) {
        return speciesFromList(this, arraySlice.call(validate(this), start, end));
      };

      var $set = function set(arrayLike
      /* , offset */
      ) {
        validate(this);
        var offset = toOffset(arguments[1], 1);
        var length = this.length;
        var src = toObject(arrayLike);
        var len = toLength(src.length);
        var index = 0;
        if (len + offset > length) throw RangeError(WRONG_LENGTH);

        while (index < len) this[offset + index] = src[index++];
      };

      var $iterators = {
        entries: function entries() {
          return arrayEntries.call(validate(this));
        },
        keys: function keys() {
          return arrayKeys.call(validate(this));
        },
        values: function values() {
          return arrayValues.call(validate(this));
        }
      };

      var isTAIndex = function (target, key) {
        return isObject$$1(target) && target[TYPED_ARRAY] && typeof key != 'symbol' && key in target && String(+key) == String(key);
      };

      var $getDesc = function getOwnPropertyDescriptor(target, key) {
        return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
      };

      var $setDesc = function defineProperty(target, key, desc) {
        if (isTAIndex(target, key = toPrimitive(key, true)) && isObject$$1(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set') // TODO: add validation descriptor w/o calling accessors
        && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
          target[key] = desc.value;
          return target;
        }

        return dP(target, key, desc);
      };

      if (!ALL_CONSTRUCTORS) {
        $GOPD.f = $getDesc;
        $DP.f = $setDesc;
      }

      $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
        getOwnPropertyDescriptor: $getDesc,
        defineProperty: $setDesc
      });

      if (fails$$1(function () {
        arrayToString.call({});
      })) {
        arrayToString = arrayToLocaleString = function toString() {
          return arrayJoin.call(this);
        };
      }

      var $TypedArrayPrototype$ = redefineAll$$1({}, proto);
      redefineAll$$1($TypedArrayPrototype$, $iterators);
      hide$$1($TypedArrayPrototype$, ITERATOR, $iterators.values);
      redefineAll$$1($TypedArrayPrototype$, {
        slice: $slice,
        set: $set,
        constructor: function () {
          /* noop */
        },
        toString: arrayToString,
        toLocaleString: $toLocaleString
      });
      addGetter($TypedArrayPrototype$, 'buffer', 'b');
      addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
      addGetter($TypedArrayPrototype$, 'byteLength', 'l');
      addGetter($TypedArrayPrototype$, 'length', 'e');
      dP($TypedArrayPrototype$, TAG, {
        get: function () {
          return this[TYPED_ARRAY];
        }
      }); // eslint-disable-next-line max-statements

      module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
        CLAMPED = !!CLAMPED;
        var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
        var GETTER = 'get' + KEY;
        var SETTER = 'set' + KEY;
        var TypedArray = global[NAME];
        var Base = TypedArray || {};
        var TAC = TypedArray && getPrototypeOf(TypedArray);
        var FORCED = !TypedArray || !$typed.ABV;
        var O = {};
        var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];

        var getter = function (that, index) {
          var data = that._d;
          return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
        };

        var setter = function (that, index, value) {
          var data = that._d;
          if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
          data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
        };

        var addElement = function (that, index) {
          dP(that, index, {
            get: function () {
              return getter(this, index);
            },
            set: function (value) {
              return setter(this, index, value);
            },
            enumerable: true
          });
        };

        if (FORCED) {
          TypedArray = wrapper(function (that, data, $offset, $length) {
            anInstance$$1(that, TypedArray, NAME, '_d');
            var index = 0;
            var offset = 0;
            var buffer, byteLength, length, klass;

            if (!isObject$$1(data)) {
              length = toIndex(data);
              byteLength = length * BYTES;
              buffer = new $ArrayBuffer(byteLength);
            } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
              buffer = data;
              offset = toOffset($offset, BYTES);
              var $len = data.byteLength;

              if ($length === undefined) {
                if ($len % BYTES) throw RangeError(WRONG_LENGTH);
                byteLength = $len - offset;
                if (byteLength < 0) throw RangeError(WRONG_LENGTH);
              } else {
                byteLength = toLength($length) * BYTES;
                if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
              }

              length = byteLength / BYTES;
            } else if (TYPED_ARRAY in data) {
              return fromList(TypedArray, data);
            } else {
              return $from.call(TypedArray, data);
            }

            hide$$1(that, '_d', {
              b: buffer,
              o: offset,
              l: byteLength,
              e: length,
              v: new $DataView(buffer)
            });

            while (index < length) addElement(that, index++);
          });
          TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
          hide$$1(TypedArrayPrototype, 'constructor', TypedArray);
        } else if (!fails$$1(function () {
          TypedArray(1);
        }) || !fails$$1(function () {
          new TypedArray(-1); // eslint-disable-line no-new
        }) || !$iterDetect(function (iter) {
          new TypedArray(); // eslint-disable-line no-new

          new TypedArray(null); // eslint-disable-line no-new

          new TypedArray(1.5); // eslint-disable-line no-new

          new TypedArray(iter); // eslint-disable-line no-new
        }, true)) {
          TypedArray = wrapper(function (that, data, $offset, $length) {
            anInstance$$1(that, TypedArray, NAME);
            var klass; // `ws` module bug, temporarily remove validation length for Uint8Array
            // https://github.com/websockets/ws/pull/645

            if (!isObject$$1(data)) return new Base(toIndex(data));

            if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
              return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
            }

            if (TYPED_ARRAY in data) return fromList(TypedArray, data);
            return $from.call(TypedArray, data);
          });
          arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
            if (!(key in TypedArray)) hide$$1(TypedArray, key, Base[key]);
          });
          TypedArray[PROTOTYPE] = TypedArrayPrototype;
          if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
        }

        var $nativeIterator = TypedArrayPrototype[ITERATOR];
        var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
        var $iterator = $iterators.values;
        hide$$1(TypedArray, TYPED_CONSTRUCTOR, true);
        hide$$1(TypedArrayPrototype, TYPED_ARRAY, NAME);
        hide$$1(TypedArrayPrototype, VIEW, true);
        hide$$1(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

        if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
          dP(TypedArrayPrototype, TAG, {
            get: function () {
              return NAME;
            }
          });
        }

        O[NAME] = TypedArray;
        $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
        $export($export.S, NAME, {
          BYTES_PER_ELEMENT: BYTES
        });
        $export($export.S + $export.F * fails$$1(function () {
          Base.of.call(TypedArray, 1);
        }), NAME, {
          from: $from,
          of: $of
        });
        if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide$$1(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
        $export($export.P, NAME, proto);
        setSpecies(NAME);
        $export($export.P + $export.F * FORCED_SET, NAME, {
          set: $set
        });
        $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
        if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;
        $export($export.P + $export.F * fails$$1(function () {
          new TypedArray(1).slice();
        }), NAME, {
          slice: $slice
        });
        $export($export.P + $export.F * (fails$$1(function () {
          return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
        }) || !fails$$1(function () {
          TypedArrayPrototype.toLocaleString.call([1, 2]);
        })), NAME, {
          toLocaleString: $toLocaleString
        });
        Iterators$$1[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
        if (!LIBRARY && !CORRECT_ITER_NAME) hide$$1(TypedArrayPrototype, ITERATOR, $iterator);
      };
    } else module.exports = function () {
      /* empty */
    };
  });

  var _typedArray$1 = /*#__PURE__*/Object.freeze({
    default: _typedArray,
    __moduleExports: _typedArray
  });

  var require$$0$g = ( _typedArray$1 && _typedArray ) || _typedArray$1;

  require$$0$g('Int8', 1, function (init) {
    return function Int8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  require$$0$g('Uint8', 1, function (init) {
    return function Uint8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  require$$0$g('Uint8', 1, function (init) {
    return function Uint8ClampedArray(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  }, true);

  require$$0$g('Int16', 2, function (init) {
    return function Int16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  require$$0$g('Uint16', 2, function (init) {
    return function Uint16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  require$$0$g('Int32', 4, function (init) {
    return function Int32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  require$$0$g('Uint32', 4, function (init) {
    return function Uint32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  require$$0$g('Float32', 4, function (init) {
    return function Float32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  require$$0$g('Float64', 8, function (init) {
    return function Float64Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var getWeak = meta.getWeak;
  var arrayFind = require$$0$1(5);
  var arrayFindIndex = require$$0$1(6);
  var id$2 = 0; // fallback for uncaught frozen keys

  var uncaughtFrozenStore = function (that) {
    return that._l || (that._l = new UncaughtFrozenStore());
  };

  var UncaughtFrozenStore = function () {
    this.a = [];
  };

  var findUncaughtFrozen = function (store, key) {
    return arrayFind(store.a, function (it) {
      return it[0] === key;
    });
  };

  UncaughtFrozenStore.prototype = {
    get: function (key) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) return entry[1];
    },
    has: function (key) {
      return !!findUncaughtFrozen(this, key);
    },
    set: function (key, value) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) entry[1] = value;else this.a.push([key, value]);
    },
    'delete': function (key) {
      var index = arrayFindIndex(this.a, function (it) {
        return it[0] === key;
      });
      if (~index) this.a.splice(index, 1);
      return !!~index;
    }
  };
  var _collectionWeak = {
    getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        anInstance(that, C, NAME, '_i');
        that._t = NAME; // collection type

        that._i = id$2++; // collection id

        that._l = undefined; // leak store for uncaught frozen objects

        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        // 23.3.3.2 WeakMap.prototype.delete(key)
        // 23.4.3.3 WeakSet.prototype.delete(value)
        'delete': function (key) {
          if (!isObject(key)) return false;
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
          return data && $has(data, this._i) && delete data[this._i];
        },
        // 23.3.3.4 WeakMap.prototype.has(key)
        // 23.4.3.4 WeakSet.prototype.has(value)
        has: function has(key) {
          if (!isObject(key)) return false;
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
          return data && $has(data, this._i);
        }
      });
      return C;
    },
    def: function (that, key, value) {
      var data = getWeak(anObject(key), true);
      if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
      return that;
    },
    ufstore: uncaughtFrozenStore
  };
  var _collectionWeak_1 = _collectionWeak.getConstructor;
  var _collectionWeak_2 = _collectionWeak.def;
  var _collectionWeak_3 = _collectionWeak.ufstore;

  var _collectionWeak$1 = /*#__PURE__*/Object.freeze({
    default: _collectionWeak,
    __moduleExports: _collectionWeak,
    getConstructor: _collectionWeak_1,
    def: _collectionWeak_2,
    ufstore: _collectionWeak_3
  });

  var weak = ( _collectionWeak$1 && _collectionWeak ) || _collectionWeak$1;

  var es6_weakMap = createCommonjsModule(function (module) {

    var each = require$$0$1(0);
    var WEAK_MAP = 'WeakMap';
    var getWeak = meta.getWeak;
    var isExtensible = Object.isExtensible;
    var uncaughtFrozenStore = weak.ufstore;
    var tmp = {};
    var InternalMap;

    var wrapper = function (get) {
      return function WeakMap() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
      };
    };

    var methods = {
      // 23.3.3.3 WeakMap.prototype.get(key)
      get: function get(key) {
        if (isObject(key)) {
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
          return data ? data[this._i] : undefined;
        }
      },
      // 23.3.3.5 WeakMap.prototype.set(key, value)
      set: function set(key, value) {
        return weak.def(validate(this, WEAK_MAP), key, value);
      }
    }; // 23.3 WeakMap Objects

    var $WeakMap = module.exports = require$$1$3(WEAK_MAP, wrapper, methods, weak, true, true); // IE11 WeakMap frozen keys fix

    if (fails(function () {
      return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7;
    })) {
      InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
      assign(InternalMap.prototype, methods);
      meta.NEED = true;
      each(['delete', 'has', 'get', 'set'], function (key) {
        var proto = $WeakMap.prototype;
        var method = proto[key];
        redefine(proto, key, function (a, b) {
          // store frozen objects on internal weakmap shim
          if (isObject(a) && !isExtensible(a)) {
            if (!this._f) this._f = new InternalMap();

            var result = this._f[key](a, b);

            return key == 'set' ? this : result; // store all the rest on native weakmap
          }

          return method.call(this, a, b);
        });
      });
    }
  });

  var WEAK_SET = 'WeakSet'; // 23.4 WeakSet Objects

  require$$1$3(WEAK_SET, function (get) {
    return function WeakSet() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    // 23.4.3.1 WeakSet.prototype.add(value)
    add: function add(value) {
      return weak.def(validate(this, WEAK_SET), value, true);
    }
  }, weak, false, true);

  var slice = [].slice;
  var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

  var wrap$1 = function (set) {
    return function (fn, time
    /* , ...args */
    ) {
      var boundArgs = arguments.length > 2;
      var args = boundArgs ? slice.call(arguments, 2) : false;
      return set(boundArgs ? function () {
        // eslint-disable-next-line no-new-func
        (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
      } : fn, time);
    };
  };

  $export$1($export$1.G + $export$1.B + $export$1.F * MSIE, {
    setTimeout: wrap$1(global$1.setTimeout),
    setInterval: wrap$1(global$1.setInterval)
  });

  $export$1($export$1.G + $export$1.B, {
    setImmediate: $task.set,
    clearImmediate: $task.clear
  });

  var ITERATOR$4 = wks('iterator');
  var TO_STRING_TAG = wks('toStringTag');
  var ArrayValues = Iterators.Array;
  var DOMIterables = {
    CSSRuleList: true,
    // TODO: Not spec compliant, should be false.
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
    MediaList: true,
    // TODO: Not spec compliant, should be false.
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
    StyleSheetList: true,
    // TODO: Not spec compliant, should be false.
    TextTrackCueList: false,
    TextTrackList: false,
    TouchList: false
  };

  for (var collections = getKeys(DOMIterables), i$2 = 0; i$2 < collections.length; i$2++) {
    var NAME$1 = collections[i$2];
    var explicit = DOMIterables[NAME$1];
    var Collection = global$1[NAME$1];
    var proto$3 = Collection && Collection.prototype;
    var key$1;

    if (proto$3) {
      if (!proto$3[ITERATOR$4]) hide(proto$3, ITERATOR$4, ArrayValues);
      if (!proto$3[TO_STRING_TAG]) hide(proto$3, TO_STRING_TAG, NAME$1);
      Iterators[NAME$1] = ArrayValues;
      if (explicit) for (key$1 in es6_array_iterator) if (!proto$3[key$1]) redefine(proto$3, key$1, es6_array_iterator[key$1], true);
    }
  }

  var runtime = createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2014-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    !function (global) {

      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined; // More compressible than void 0.

      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
      var runtime = global.regeneratorRuntime;

      if (runtime) {
        {
          // If regeneratorRuntime is defined globally and we're in a module,
          // make the exports object identical to regeneratorRuntime.
          module.exports = runtime;
        } // Don't bother evaluating the rest of this file if the runtime was
        // already defined globally.


        return;
      } // Define the runtime globally (as expected by generated code) as either
      // module.exports (if we're in a module) or a new, empty object.


      runtime = global.regeneratorRuntime = module.exports;

      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.

        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
      }

      runtime.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.

      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }

      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.

      var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.

      function Generator() {}

      function GeneratorFunction() {}

      function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.


      var IteratorPrototype = {};

      IteratorPrototype[iteratorSymbol] = function () {
        return this;
      };

      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
      }

      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
      GeneratorFunctionPrototype.constructor = GeneratorFunction;
      GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.

      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function (method) {
          prototype[method] = function (arg) {
            return this._invoke(method, arg);
          };
        });
      }

      runtime.isGeneratorFunction = function (genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };

      runtime.mark = function (genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;

          if (!(toStringTagSymbol in genFun)) {
            genFun[toStringTagSymbol] = "GeneratorFunction";
          }
        }

        genFun.prototype = Object.create(Gp);
        return genFun;
      }; // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.


      runtime.awrap = function (arg) {
        return {
          __await: arg
        };
      };

      function AsyncIterator(generator) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);

          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;

            if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
              return Promise.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              });
            }

            return Promise.resolve(value).then(function (unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration.
              result.value = unwrapped;
              resolve(result);
            }, function (error) {
              // If a rejected Promise was yielded, throw the rejection back
              // into the async generator function so it can be handled there.
              return invoke("throw", error, resolve, reject);
            });
          }
        }

        var previousPromise;

        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new Promise(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }

          return previousPromise = // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).


        this._invoke = enqueue;
      }

      defineIteratorMethods(AsyncIterator.prototype);

      AsyncIterator.prototype[asyncIteratorSymbol] = function () {
        return this;
      };

      runtime.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.

      runtime.async = function (innerFn, outerFn, self, tryLocsList) {
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
        return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function (result) {
          return result.done ? result.value : iter.next();
        });
      };

      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }

          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            } // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


            return doneResult();
          }

          context.method = method;
          context.arg = arg;

          while (true) {
            var delegate = context.delegate;

            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);

              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if (context.method === "next") {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }

              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }

            state = GenStateExecuting;
            var record = tryCatch(innerFn, self, context);

            if (record.type === "normal") {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;

              if (record.arg === ContinueSentinel) {
                continue;
              }

              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted; // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.

              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      } // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.


      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];

        if (method === undefined) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null;

          if (context.method === "throw") {
            if (delegate.iterator.return) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = "return";
              context.arg = undefined;
              maybeInvokeDelegate(delegate, context);

              if (context.method === "throw") {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }

            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return ContinueSentinel;
        }

        var record = tryCatch(method, delegate.iterator, context.arg);

        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }

        var info = record.arg;

        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }

        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

          context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.

          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined;
          }
        } else {
          // Re-yield the result returned by the delegate method.
          return info;
        } // The delegate iterator is finished, so forget it and continue with
        // the outer generator.


        context.delegate = null;
        return ContinueSentinel;
      } // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.


      defineIteratorMethods(Gp);
      Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.

      Gp[iteratorSymbol] = function () {
        return this;
      };

      Gp.toString = function () {
        return "[object Generator]";
      };

      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };

        if (1 in locs) {
          entry.catchLoc = locs[1];
        }

        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }

        this.tryEntries.push(entry);
      }

      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }

      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{
          tryLoc: "root"
        }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }

      runtime.keys = function (object) {
        var keys = [];

        for (var key in object) {
          keys.push(key);
        }

        keys.reverse(); // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.

        return function next() {
          while (keys.length) {
            var key = keys.pop();

            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          } // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.


          next.done = true;
          return next;
        };
      };

      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];

          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }

          if (typeof iterable.next === "function") {
            return iterable;
          }

          if (!isNaN(iterable.length)) {
            var i = -1,
                next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }

              next.value = undefined;
              next.done = true;
              return next;
            };

            return next.next = next;
          }
        } // Return an iterator with no values.


        return {
          next: doneResult
        };
      }

      runtime.values = values;

      function doneResult() {
        return {
          value: undefined,
          done: true
        };
      }

      Context.prototype = {
        constructor: Context,
        reset: function (skipTempReset) {
          this.prev = 0;
          this.next = 0; // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.

          this.sent = this._sent = undefined;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined;
          this.tryEntries.forEach(resetTryEntry);

          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined;
              }
            }
          }
        },
        stop: function () {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;

          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }

          return this.rval;
        },
        dispatchException: function (exception) {
          if (this.done) {
            throw exception;
          }

          var context = this;

          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;

            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = "next";
              context.arg = undefined;
            }

            return !!caught;
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;

            if (entry.tryLoc === "root") {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle("end");
            }

            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");

              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function (type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }

          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
          }

          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;

          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }

          return this.complete(record);
        },
        complete: function (record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }

          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }

          return ContinueSentinel;
        },
        finish: function (finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function (tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;

              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }

              return thrown;
            }
          } // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.


          throw new Error("illegal catch attempt");
        },
        delegateYield: function (iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };

          if (this.method === "next") {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
          }

          return ContinueSentinel;
        }
      };
    }( // In sloppy mode, unbound `this` refers to the global object, fallback to
    // Function constructor if we're in global strict mode. That is sadly a form
    // of indirect eval which violates Content Security Policy.
    function () {
      return this || typeof self === "object" && self;
    }() || Function("return this")());
  });

  /**
   * van11y-accessible-accordion-aria - ES2015 accessible accordion system, using ARIA (compatible IE9+ when transpiled)
   * @version v3.0.1
   * @link https://van11y.net/accessible-accordion/
   * @license MIT : https://github.com/nico3333fr/van11y-accessible-accordion-aria/blob/master/LICENSE
   */

  function _defineProperty$1(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e;
  }

  var _extends$1 = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];

      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }

    return e;
  },
      loadConfig = function () {
    var e = {},
        t = function (t, r) {
      e[t] = r;
    },
        r = function (t) {
      return e[t];
    },
        n = function (t) {
      return e[t];
    };

    return {
      set: t,
      get: r,
      remove: n
    };
  },
      DATA_HASH_ID = "data-hashaccordion-id",
      pluginConfig = loadConfig(),
      findById = function (e, t) {
    return document.querySelector("#" + e + "[" + DATA_HASH_ID + '="' + t + '"]');
  },
      addClass = function (e, t) {
    e.classList ? e.classList.add(t) : e.className += " " + t;
  },
      removeClass = function (e, t) {
    e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ");
  },
      hasClass = function (e, t) {
    return e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className);
  },
      setAttributes = function (e, t) {
    Object.keys(t).forEach(function (r) {
      e.setAttribute(r, t[r]);
    });
  },
      searchParentHashId = function (e, t) {
    for (var r = !1, n = e; 1 === n.nodeType && n && r === !1;) n.hasAttribute(t) === !0 ? r = !0 : n = n.parentNode;

    return r === !0 ? n.getAttribute(t) : "";
  },
      searchParent = function (e, t, r) {
    for (var n = !1, A = e; A && n === !1;) hasClass(A, t) === !0 && A.getAttribute(DATA_HASH_ID) === r ? n = !0 : A = A.parentNode;

    return n === !0 ? A.getAttribute("id") : "";
  },
      unSelectHeaders = function (e, t) {
    e.forEach(function (e) {
      setAttributes(e, _defineProperty$1({}, t, "false"));
    });
  },
      selectHeader = function (e, t) {
    e.setAttribute(t, !0);
  },
      selectHeaderInList = function (e, t, r) {
    var n = void 0;
    e.forEach(function (e, t) {
      "true" === e.getAttribute(r) && (n = t);
    }), "next" === t && (selectHeader(e[n + 1]), setTimeout(function () {
      e[n + 1].focus();
    }, 0)), "prev" === t && (selectHeader(e[n - 1]), setTimeout(function () {
      e[n - 1].focus();
    }, 0));
  },
      plugin = function () {
    var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        t = _extends$1({
      ACCORDION_JS: "js-accordion",
      ACCORDION_JS_HEADER: "js-accordion__header",
      ACCORDION_JS_PANEL: "js-accordion__panel",
      ACCORDION_DATA_PREFIX_CLASS: "data-accordion-prefix-classes",
      ACCORDION_DATA_OPENED: "data-accordion-opened",
      ACCORDION_DATA_MULTISELECTABLE: "data-accordion-multiselectable",
      ACCORDION_DATA_COOL_SELECTORS: "data-accordion-cool-selectors",
      ACCORDION_PREFIX_IDS: "accordion",
      ACCORDION_BUTTON_ID: "_tab",
      ACCORDION_PANEL_ID: "_panel",
      ACCORDION_STYLE: "accordion",
      ACCORDION_TITLE_STYLE: "accordion__title",
      ACCORDION_HEADER_STYLE: "accordion__header",
      ACCORDION_PANEL_STYLE: "accordion__panel",
      ACCORDION_ROLE_TABLIST: "tablist",
      ACCORDION_ROLE_TAB: "tab",
      ACCORDION_ROLE_TABPANEL: "tabpanel",
      ATTR_ROLE: "role",
      ATTR_MULTISELECTABLE: "aria-multiselectable",
      ATTR_EXPANDED: "aria-expanded",
      ATTR_LABELLEDBY: "aria-labelledby",
      ATTR_HIDDEN: "aria-hidden",
      ATTR_CONTROLS: "aria-controls",
      ATTR_SELECTED: "aria-selected"
    }, e),
        r = Math.random().toString(32).slice(2, 12);

    pluginConfig.set(r, t);

    var n = function () {
      var e = arguments.length <= 0 || void 0 === arguments[0] ? document : arguments[0];
      return [].slice.call(e.querySelectorAll("." + t.ACCORDION_JS));
    },
        A = function (e) {
      n(e).forEach(function (e) {
        var n = "z" + Math.random().toString(32).slice(2, 12),
            A = e.hasAttribute(t.ACCORDION_DATA_PREFIX_CLASS) === !0 ? e.getAttribute(t.ACCORDION_DATA_PREFIX_CLASS) + "-" : "",
            a = e.hasAttribute(t.ACCORDION_DATA_COOL_SELECTORS) === !0;
        "none" === e.getAttribute(t.ACCORDION_DATA_MULTISELECTABLE) ? e.setAttribute(t.ATTR_MULTISELECTABLE, "false") : e.setAttribute(t.ATTR_MULTISELECTABLE, "true"), e.setAttribute(t.ATTR_ROLE, t.ACCORDION_ROLE_TABLIST), e.setAttribute("id", n), e.setAttribute(DATA_HASH_ID, r), addClass(e, A + t.ACCORDION_STYLE);
        var i = [].slice.call(e.querySelectorAll("." + t.ACCORDION_JS_HEADER));
        i.forEach(function (i, _) {
          var o, T;

          if (i.parentNode === e || a !== !1) {
            var E = _ + 1,
                s = i.nextElementSibling,
                C = i.innerHTML,
                c = document.createElement("BUTTON"),
                D = i.hasAttribute(t.ACCORDION_DATA_OPENED) === !0 ? i.getAttribute(t.ACCORDION_DATA_OPENED) : "";
            c.innerHTML = C, addClass(c, t.ACCORDION_JS_HEADER), addClass(c, A + t.ACCORDION_HEADER_STYLE), setAttributes(c, (o = {}, _defineProperty$1(o, t.ATTR_ROLE, t.ACCORDION_ROLE_TAB), _defineProperty$1(o, "id", t.ACCORDION_PREFIX_IDS + n + t.ACCORDION_BUTTON_ID + E), _defineProperty$1(o, t.ATTR_CONTROLS, t.ACCORDION_PREFIX_IDS + n + t.ACCORDION_PANEL_ID + E), _defineProperty$1(o, t.ATTR_SELECTED, "false"), _defineProperty$1(o, "type", "button"), _defineProperty$1(o, DATA_HASH_ID, r), o)), i.innerHTML = "", i.appendChild(c), addClass(i, A + t.ACCORDION_TITLE_STYLE), removeClass(i, t.ACCORDION_JS_HEADER), addClass(s, A + t.ACCORDION_PANEL_STYLE), setAttributes(s, (T = {}, _defineProperty$1(T, t.ATTR_ROLE, t.ACCORDION_ROLE_TABPANEL), _defineProperty$1(T, t.ATTR_LABELLEDBY, t.ACCORDION_PREFIX_IDS + n + t.ACCORDION_BUTTON_ID + E), _defineProperty$1(T, "id", t.ACCORDION_PREFIX_IDS + n + t.ACCORDION_PANEL_ID + E), _defineProperty$1(T, DATA_HASH_ID, r), T)), "true" === D ? (c.setAttribute(t.ATTR_EXPANDED, "true"), i.removeAttribute(t.ACCORDION_DATA_OPENED), s.setAttribute(t.ATTR_HIDDEN, "false")) : (c.setAttribute(t.ATTR_EXPANDED, "false"), s.setAttribute(t.ATTR_HIDDEN, "true"));
          }
        });
      });
    };

    return {
      attach: A
    };
  },
      main = function () {
    return ["click", "keydown", "focus"].forEach(function (e) {
      document.body.addEventListener(e, function (t) {
        var r = searchParentHashId(t.target, DATA_HASH_ID);
        "" !== r && !function () {
          var n = pluginConfig.get(r);
          hasClass(t.target, n.ACCORDION_JS_HEADER) === !0 && "focus" === e && !function () {
            var e = t.target,
                A = findById(searchParent(e, n.ACCORDION_JS, r), r),
                a = A.hasAttribute(n.ACCORDION_DATA_COOL_SELECTORS) === !0,
                i = [].slice.call(A.querySelectorAll("." + n.ACCORDION_JS_HEADER));
            a === !1 && (i = i.filter(function (e) {
              return e.parentNode.parentNode === A;
            })), unSelectHeaders(i, n.ATTR_SELECTED), selectHeader(e, n.ATTR_SELECTED);
          }(), hasClass(t.target, n.ACCORDION_JS_HEADER) === !0 && "click" === e && !function () {
            var e = t.target,
                A = findById(searchParent(e, n.ACCORDION_JS, r), r),
                a = A.hasAttribute(n.ACCORDION_DATA_COOL_SELECTORS) === !0,
                i = [].slice.call(A.querySelectorAll("." + n.ACCORDION_JS_HEADER)),
                _ = A.getAttribute(n.ATTR_MULTISELECTABLE),
                o = findById(e.getAttribute(n.ATTR_CONTROLS), r),
                T = e.getAttribute(n.ATTR_EXPANDED);

            a === !1 && (i = i.filter(function (e) {
              return e.parentNode.parentNode === A;
            })), "false" === T ? (e.setAttribute(n.ATTR_EXPANDED, !0), o.removeAttribute(n.ATTR_HIDDEN)) : (e.setAttribute(n.ATTR_EXPANDED, !1), o.setAttribute(n.ATTR_HIDDEN, !0)), "false" === _ && i.forEach(function (t) {
              var A = findById(t.getAttribute(n.ATTR_CONTROLS), r);
              t !== e ? (t.setAttribute(n.ATTR_SELECTED, !1), t.setAttribute(n.ATTR_EXPANDED, !1), A.setAttribute(n.ATTR_HIDDEN, !0)) : t.setAttribute(n.ATTR_SELECTED, !0);
            }), setTimeout(function () {
              e.focus();
            }, 0), t.preventDefault();
          }(), hasClass(t.target, n.ACCORDION_JS_HEADER) === !0 && "keydown" === e && !function () {
            var e = t.target,
                A = searchParent(e, n.ACCORDION_JS, r),
                a = findById(A, r),
                i = a.hasAttribute(n.ACCORDION_DATA_COOL_SELECTORS) === !0,
                _ = [].slice.call(a.querySelectorAll("." + n.ACCORDION_JS_HEADER));

            i === !1 && (_ = _.filter(function (e) {
              return e.parentNode.parentNode === a;
            })), 36 === t.keyCode ? (unSelectHeaders(_, n.ATTR_SELECTED), selectHeader(_[0], n.ATTR_SELECTED), setTimeout(function () {
              _[0].focus();
            }, 0), t.preventDefault()) : 35 === t.keyCode ? (unSelectHeaders(_, n.ATTR_SELECTED), selectHeader(_[_.length - 1], n.ATTR_SELECTED), setTimeout(function () {
              _[_.length - 1].focus();
            }, 0), t.preventDefault()) : 37 !== t.keyCode && 38 !== t.keyCode || t.ctrlKey ? 40 !== t.keyCode && 39 !== t.keyCode || t.ctrlKey || ("true" === _[_.length - 1].getAttribute(n.ATTR_SELECTED) ? (unSelectHeaders(_, n.ATTR_SELECTED), selectHeader(_[0], n.ATTR_SELECTED), setTimeout(function () {
              _[0].focus();
            }, 0), t.preventDefault()) : (selectHeaderInList(_, "next", n.ATTR_SELECTED), t.preventDefault())) : "true" === _[0].getAttribute(n.ATTR_SELECTED) ? (unSelectHeaders(_, n.ATTR_SELECTED), selectHeader(_[_.length - 1], n.ATTR_SELECTED), setTimeout(function () {
              _[_.length - 1].focus();
            }, 0), t.preventDefault()) : (selectHeaderInList(_, "prev", n.ATTR_SELECTED), t.preventDefault());
          }();
        }();
      }, !0);
    }), plugin;
  };

  window.van11yAccessibleAccordionAria = main();

  var onLoad = function e() {
    var t = window.van11yAccessibleAccordionAria();
    t.attach(), document.removeEventListener("DOMContentLoaded", e);
  };

  document.addEventListener("DOMContentLoaded", onLoad);

  var win = window;
  var raf = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.msRequestAnimationFrame || function (cb) {
    return setTimeout(cb, 16);
  };

  var win$1 = window;
  var caf = win$1.cancelAnimationFrame || win$1.mozCancelAnimationFrame || function (id) {
    clearTimeout(id);
  };

  function extend() {
    var obj,
        name,
        copy,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length;

    for (; i < length; i++) {
      if ((obj = arguments[i]) !== null) {
        for (name in obj) {
          copy = obj[name];

          if (target === copy) {
            continue;
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }

    return target;
  }

  function checkStorageValue(value) {
    return ['true', 'false'].indexOf(value) >= 0 ? JSON.parse(value) : value;
  }

  function setLocalStorage(storage, key, value, access) {
    if (access) {
      try {
        storage.setItem(key, value);
      } catch (e) {}
    }

    return value;
  }

  function getSlideId() {
    var id = window.tnsId;
    window.tnsId = !id ? 1 : id + 1;
    return 'tns' + window.tnsId;
  }

  function getBody() {
    var doc = document,
        body = doc.body;

    if (!body) {
      body = doc.createElement('body');
      body.fake = true;
    }

    return body;
  }

  var docElement = document.documentElement;

  function setFakeBody(body) {
    var docOverflow = '';

    if (body.fake) {
      docOverflow = docElement.style.overflow; //avoid crashing IE8, if background image is used

      body.style.background = ''; //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible

      body.style.overflow = docElement.style.overflow = 'hidden';
      docElement.appendChild(body);
    }

    return docOverflow;
  }

  function resetFakeBody(body, docOverflow) {
    if (body.fake) {
      body.remove();
      docElement.style.overflow = docOverflow; // Trigger layout so kinetic scrolling isn't disabled in iOS6+
      // eslint-disable-next-line

      docElement.offsetHeight;
    }
  }

  // get css-calc 
  function calc() {
    var doc = document,
        body = getBody(),
        docOverflow = setFakeBody(body),
        div = doc.createElement('div'),
        result = false;
    body.appendChild(div);

    try {
      var str = '(10px * 10)',
          vals = ['calc' + str, '-moz-calc' + str, '-webkit-calc' + str],
          val;

      for (var i = 0; i < 3; i++) {
        val = vals[i];
        div.style.width = val;

        if (div.offsetWidth === 100) {
          result = val.replace(str, '');
          break;
        }
      }
    } catch (e) {}

    body.fake ? resetFakeBody(body, docOverflow) : div.remove();
    return result;
  }

  // get subpixel support value
  function percentageLayout() {
    // check subpixel layout supporting
    var doc = document,
        body = getBody(),
        docOverflow = setFakeBody(body),
        wrapper = doc.createElement('div'),
        outer = doc.createElement('div'),
        str = '',
        count = 70,
        perPage = 3,
        supported = false;
    wrapper.className = "tns-t-subp2";
    outer.className = "tns-t-ct";

    for (var i = 0; i < count; i++) {
      str += '<div></div>';
    }

    outer.innerHTML = str;
    wrapper.appendChild(outer);
    body.appendChild(wrapper);
    supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;
    body.fake ? resetFakeBody(body, docOverflow) : wrapper.remove();
    return supported;
  }

  function mediaquerySupport() {
    var doc = document,
        body = getBody(),
        docOverflow = setFakeBody(body),
        div = doc.createElement('div'),
        style = doc.createElement('style'),
        rule = '@media all and (min-width:1px){.tns-mq-test{position:absolute}}',
        position;
    style.type = 'text/css';
    div.className = 'tns-mq-test';
    body.appendChild(style);
    body.appendChild(div);

    if (style.styleSheet) {
      style.styleSheet.cssText = rule;
    } else {
      style.appendChild(doc.createTextNode(rule));
    }

    position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle['position'];
    body.fake ? resetFakeBody(body, docOverflow) : div.remove();
    return position === "absolute";
  }

  // create and append style sheet
  function createStyleSheet(media) {
    // Create the <style> tag
    var style = document.createElement("style"); // style.setAttribute("type", "text/css");
    // Add a media (and/or media query) here if you'd like!
    // style.setAttribute("media", "screen")
    // style.setAttribute("media", "only screen and (max-width : 1024px)")

    if (media) {
      style.setAttribute("media", media);
    } // WebKit hack :(
    // style.appendChild(document.createTextNode(""));
    // Add the <style> element to the page


    document.querySelector('head').appendChild(style);
    return style.sheet ? style.sheet : style.styleSheet;
  }

  // cross browsers addRule method
  function addCSSRule(sheet, selector, rules, index) {
    // return raf(function() {
    'insertRule' in sheet ? sheet.insertRule(selector + '{' + rules + '}', index) : sheet.addRule(selector, rules, index); // });
  }

  // cross browsers addRule method
  function removeCSSRule(sheet, index) {
    // return raf(function() {
    'deleteRule' in sheet ? sheet.deleteRule(index) : sheet.removeRule(index); // });
  }

  function getCssRulesLength(sheet) {
    var rule = 'insertRule' in sheet ? sheet.cssRules : sheet.rules;
    return rule.length;
  }

  function toDegree(y, x) {
    return Math.atan2(y, x) * (180 / Math.PI);
  }

  function getTouchDirection(angle, range) {
    var direction = false,
        gap = Math.abs(90 - Math.abs(angle));

    if (gap >= 90 - range) {
      direction = 'horizontal';
    } else if (gap <= range) {
      direction = 'vertical';
    }

    return direction;
  }

  // https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
  function forEach(arr, callback, scope) {
    for (var i = 0, l = arr.length; i < l; i++) {
      callback.call(scope, arr[i], i);
    }
  }

  var classListSupport = 'classList' in document.createElement('_');

  var hasClass$1 = classListSupport ? function (el, str) {
    return el.classList.contains(str);
  } : function (el, str) {
    return el.className.indexOf(str) >= 0;
  };

  var addClass$1 = classListSupport ? function (el, str) {
    if (!hasClass$1(el, str)) {
      el.classList.add(str);
    }
  } : function (el, str) {
    if (!hasClass$1(el, str)) {
      el.className += ' ' + str;
    }
  };

  var removeClass$1 = classListSupport ? function (el, str) {
    if (hasClass$1(el, str)) {
      el.classList.remove(str);
    }
  } : function (el, str) {
    if (hasClass$1(el, str)) {
      el.className = el.className.replace(str, '');
    }
  };

  function hasAttr(el, attr) {
    return el.hasAttribute(attr);
  }

  function getAttr(el, attr) {
    return el.getAttribute(attr);
  }

  function isNodeList(el) {
    // Only NodeList has the "item()" function
    return typeof el.item !== "undefined";
  }

  function setAttrs(els, attrs) {
    els = isNodeList(els) || els instanceof Array ? els : [els];

    if (Object.prototype.toString.call(attrs) !== '[object Object]') {
      return;
    }

    for (var i = els.length; i--;) {
      for (var key in attrs) {
        els[i].setAttribute(key, attrs[key]);
      }
    }
  }

  function removeAttrs(els, attrs) {
    els = isNodeList(els) || els instanceof Array ? els : [els];
    attrs = attrs instanceof Array ? attrs : [attrs];
    var attrLength = attrs.length;

    for (var i = els.length; i--;) {
      for (var j = attrLength; j--;) {
        els[i].removeAttribute(attrs[j]);
      }
    }
  }

  function arrayFromNodeList(nl) {
    var arr = [];

    for (var i = 0, l = nl.length; i < l; i++) {
      arr.push(nl[i]);
    }

    return arr;
  }

  function hideElement(el, forceHide) {
    if (el.style.display !== 'none') {
      el.style.display = 'none';
    }
  }

  function showElement(el, forceHide) {
    if (el.style.display === 'none') {
      el.style.display = '';
    }
  }

  function isVisible(el) {
    return window.getComputedStyle(el).display !== 'none';
  }

  function whichProperty(props) {
    if (typeof props === 'string') {
      var arr = [props],
          Props = props.charAt(0).toUpperCase() + props.substr(1),
          prefixes = ['Webkit', 'Moz', 'ms', 'O'];
      prefixes.forEach(function (prefix) {
        if (prefix !== 'ms' || props === 'transform') {
          arr.push(prefix + Props);
        }
      });
      props = arr;
    }

    var el = document.createElement('fakeelement'),
        len = props.length;

    for (var i = 0; i < props.length; i++) {
      var prop = props[i];

      if (el.style[prop] !== undefined) {
        return prop;
      }
    }

    return false; // explicit for ie9-
  }

  function has3DTransforms(tf) {
    if (!tf) {
      return false;
    }

    if (!window.getComputedStyle) {
      return false;
    }

    var doc = document,
        body = getBody(),
        docOverflow = setFakeBody(body),
        el = doc.createElement('p'),
        has3d,
        cssTF = tf.length > 9 ? '-' + tf.slice(0, -9).toLowerCase() + '-' : '';
    cssTF += 'transform'; // Add it to the body to get the computed style

    body.insertBefore(el, null);
    el.style[tf] = 'translate3d(1px,1px,1px)';
    has3d = window.getComputedStyle(el).getPropertyValue(cssTF);
    body.fake ? resetFakeBody(body, docOverflow) : el.remove();
    return has3d !== undefined && has3d.length > 0 && has3d !== "none";
  }

  // get transitionend, animationend based on transitionDuration
  // @propin: string
  // @propOut: string, first-letter uppercase
  // Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd
  function getEndProperty(propIn, propOut) {
    var endProp = false;

    if (/^Webkit/.test(propIn)) {
      endProp = 'webkit' + propOut + 'End';
    } else if (/^O/.test(propIn)) {
      endProp = 'o' + propOut + 'End';
    } else if (propIn) {
      endProp = propOut.toLowerCase() + 'end';
    }

    return endProp;
  }

  // Test via a getter in the options object to see if the passive property is accessed
  var supportsPassive = false;

  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function () {
        supportsPassive = true;
      }
    });
    window.addEventListener("test", null, opts);
  } catch (e) {}

  var passiveOption = supportsPassive ? {
    passive: true
  } : false;

  function addEvents(el, obj, preventScrolling) {
    for (var prop in obj) {
      var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 && !preventScrolling ? passiveOption : false;
      el.addEventListener(prop, obj[prop], option);
    }
  }

  function removeEvents(el, obj) {
    for (var prop in obj) {
      var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 ? passiveOption : false;
      el.removeEventListener(prop, obj[prop], option);
    }
  }

  function Events() {
    return {
      topics: {},
      on: function (eventName, fn) {
        this.topics[eventName] = this.topics[eventName] || [];
        this.topics[eventName].push(fn);
      },
      off: function (eventName, fn) {
        if (this.topics[eventName]) {
          for (var i = 0; i < this.topics[eventName].length; i++) {
            if (this.topics[eventName][i] === fn) {
              this.topics[eventName].splice(i, 1);
              break;
            }
          }
        }
      },
      emit: function (eventName, data) {
        data.type = eventName;

        if (this.topics[eventName]) {
          this.topics[eventName].forEach(function (fn) {
            fn(data, eventName);
          });
        }
      }
    };
  }

  function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
    var tick = Math.min(duration, 10),
        unit = to.indexOf('%') >= 0 ? '%' : 'px',
        to = to.replace(unit, ''),
        from = Number(element.style[attr].replace(prefix, '').replace(postfix, '').replace(unit, '')),
        positionTick = (to - from) / duration * tick;
    setTimeout(moveElement, tick);

    function moveElement() {
      duration -= tick;
      from += positionTick;
      element.style[attr] = prefix + from + unit + postfix;

      if (duration > 0) {
        setTimeout(moveElement, tick);
      } else {
        callback();
      }
    }
  }

  if (!Object.keys) {
    Object.keys = function (object) {
      var keys = [];

      for (var name in object) {
        if (Object.prototype.hasOwnProperty.call(object, name)) {
          keys.push(name);
        }
      }

      return keys;
    };
  }

  if (!("remove" in Element.prototype)) {
    Element.prototype.remove = function () {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }

  var tns = function (options) {
    options = extend({
      container: '.slider',
      mode: 'carousel',
      axis: 'horizontal',
      items: 1,
      gutter: 0,
      edgePadding: 0,
      fixedWidth: false,
      autoWidth: false,
      viewportMax: false,
      slideBy: 1,
      center: false,
      controls: true,
      controlsPosition: 'top',
      controlsText: ['prev', 'next'],
      controlsContainer: false,
      prevButton: false,
      nextButton: false,
      nav: true,
      navPosition: 'top',
      navContainer: false,
      navAsThumbnails: false,
      arrowKeys: false,
      speed: 300,
      autoplay: false,
      autoplayPosition: 'top',
      autoplayTimeout: 5000,
      autoplayDirection: 'forward',
      autoplayText: ['start', 'stop'],
      autoplayHoverPause: false,
      autoplayButton: false,
      autoplayButtonOutput: true,
      autoplayResetOnVisibility: true,
      animateIn: 'tns-fadeIn',
      animateOut: 'tns-fadeOut',
      animateNormal: 'tns-normal',
      animateDelay: false,
      loop: true,
      rewind: false,
      autoHeight: false,
      responsive: false,
      lazyload: false,
      lazyloadSelector: '.tns-lazy-img',
      touch: true,
      mouseDrag: false,
      swipeAngle: 15,
      nested: false,
      preventActionWhenRunning: false,
      preventScrollOnTouch: false,
      freezable: true,
      onInit: false,
      useLocalStorage: true
    }, options || {});
    var doc = document,
        win = window,
        KEYS = {
      ENTER: 13,
      SPACE: 32,
      LEFT: 37,
      RIGHT: 39
    },
        tnsStorage = {},
        localStorageAccess = options.useLocalStorage;

    if (localStorageAccess) {
      // check browser version and local storage access
      var browserInfo = navigator.userAgent;
      var uid = new Date();

      try {
        tnsStorage = win.localStorage;

        if (tnsStorage) {
          tnsStorage.setItem(uid, uid);
          localStorageAccess = tnsStorage.getItem(uid) == uid;
          tnsStorage.removeItem(uid);
        } else {
          localStorageAccess = false;
        }

        if (!localStorageAccess) {
          tnsStorage = {};
        }
      } catch (e) {
        localStorageAccess = false;
      }

      if (localStorageAccess) {
        // remove storage when browser version changes
        if (tnsStorage['tnsApp'] && tnsStorage['tnsApp'] !== browserInfo) {
          ['tC', 'tPL', 'tMQ', 'tTf', 't3D', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(function (item) {
            tnsStorage.removeItem(item);
          });
        } // update browserInfo


        localStorage['tnsApp'] = browserInfo;
      }
    }

    var CALC = tnsStorage['tC'] ? checkStorageValue(tnsStorage['tC']) : setLocalStorage(tnsStorage, 'tC', calc(), localStorageAccess),
        PERCENTAGELAYOUT = tnsStorage['tPL'] ? checkStorageValue(tnsStorage['tPL']) : setLocalStorage(tnsStorage, 'tPL', percentageLayout(), localStorageAccess),
        CSSMQ = tnsStorage['tMQ'] ? checkStorageValue(tnsStorage['tMQ']) : setLocalStorage(tnsStorage, 'tMQ', mediaquerySupport(), localStorageAccess),
        TRANSFORM = tnsStorage['tTf'] ? checkStorageValue(tnsStorage['tTf']) : setLocalStorage(tnsStorage, 'tTf', whichProperty('transform'), localStorageAccess),
        HAS3DTRANSFORMS = tnsStorage['t3D'] ? checkStorageValue(tnsStorage['t3D']) : setLocalStorage(tnsStorage, 't3D', has3DTransforms(TRANSFORM), localStorageAccess),
        TRANSITIONDURATION = tnsStorage['tTDu'] ? checkStorageValue(tnsStorage['tTDu']) : setLocalStorage(tnsStorage, 'tTDu', whichProperty('transitionDuration'), localStorageAccess),
        TRANSITIONDELAY = tnsStorage['tTDe'] ? checkStorageValue(tnsStorage['tTDe']) : setLocalStorage(tnsStorage, 'tTDe', whichProperty('transitionDelay'), localStorageAccess),
        ANIMATIONDURATION = tnsStorage['tADu'] ? checkStorageValue(tnsStorage['tADu']) : setLocalStorage(tnsStorage, 'tADu', whichProperty('animationDuration'), localStorageAccess),
        ANIMATIONDELAY = tnsStorage['tADe'] ? checkStorageValue(tnsStorage['tADe']) : setLocalStorage(tnsStorage, 'tADe', whichProperty('animationDelay'), localStorageAccess),
        TRANSITIONEND = tnsStorage['tTE'] ? checkStorageValue(tnsStorage['tTE']) : setLocalStorage(tnsStorage, 'tTE', getEndProperty(TRANSITIONDURATION, 'Transition'), localStorageAccess),
        ANIMATIONEND = tnsStorage['tAE'] ? checkStorageValue(tnsStorage['tAE']) : setLocalStorage(tnsStorage, 'tAE', getEndProperty(ANIMATIONDURATION, 'Animation'), localStorageAccess); // get element nodes from selectors

    var supportConsoleWarn = win.console && typeof win.console.warn === "function",
        tnsList = ['container', 'controlsContainer', 'prevButton', 'nextButton', 'navContainer', 'autoplayButton'],
        optionsElements = {};
    tnsList.forEach(function (item) {
      if (typeof options[item] === 'string') {
        var str = options[item],
            el = doc.querySelector(str);
        optionsElements[item] = str;

        if (el && el.nodeName) {
          options[item] = el;
        } else {
          if (supportConsoleWarn) {
            console.warn('Can\'t find', options[item]);
          }

          return;
        }
      }
    }); // make sure at least 1 slide

    if (options.container.children.length < 1) {
      if (supportConsoleWarn) {
        console.warn('No slides found in', options.container);
      }

      return;
    } // update options


    var responsive = options.responsive,
        nested = options.nested,
        carousel = options.mode === 'carousel' ? true : false;

    if (responsive) {
      // apply responsive[0] to options and remove it
      if (0 in responsive) {
        options = extend(options, responsive[0]);
        delete responsive[0];
      }

      var responsiveTem = {};

      for (var key in responsive) {
        var val = responsive[key]; // update responsive
        // from: 300: 2
        // to: 
        //   300: { 
        //     items: 2 
        //   } 

        val = typeof val === 'number' ? {
          items: val
        } : val;
        responsiveTem[key] = val;
      }

      responsive = responsiveTem;
      responsiveTem = null;
    } // update options


    function updateOptions(obj) {
      for (var key in obj) {
        if (!carousel) {
          if (key === 'slideBy') {
            obj[key] = 'page';
          }

          if (key === 'edgePadding') {
            obj[key] = false;
          }

          if (key === 'autoHeight') {
            obj[key] = false;
          }
        } // update responsive options


        if (key === 'responsive') {
          updateOptions(obj[key]);
        }
      }
    }

    if (!carousel) {
      updateOptions(options);
    } // === define and set variables ===


    if (!carousel) {
      options.axis = 'horizontal';
      options.slideBy = 'page';
      options.edgePadding = false;
      var animateIn = options.animateIn,
          animateOut = options.animateOut,
          animateDelay = options.animateDelay,
          animateNormal = options.animateNormal;
    }

    var horizontal = options.axis === 'horizontal' ? true : false,
        outerWrapper = doc.createElement('div'),
        innerWrapper = doc.createElement('div'),
        middleWrapper,
        container = options.container,
        containerParent = container.parentNode,
        containerHTML = container.outerHTML,
        slideItems = container.children,
        slideCount = slideItems.length,
        breakpointZone,
        windowWidth = getWindowWidth(),
        isOn = false;

    if (responsive) {
      setBreakpointZone();
    }

    if (carousel) {
      container.className += ' tns-vpfix';
    } // fixedWidth: viewport > rightBoundary > indexMax


    var autoWidth = options.autoWidth,
        fixedWidth = getOption('fixedWidth'),
        edgePadding = getOption('edgePadding'),
        gutter = getOption('gutter'),
        viewport = getViewportWidth(),
        center = getOption('center'),
        items = !autoWidth ? Math.floor(getOption('items')) : 1,
        slideBy = getOption('slideBy'),
        viewportMax = options.viewportMax || options.fixedWidthViewportWidth,
        arrowKeys = getOption('arrowKeys'),
        speed = getOption('speed'),
        rewind = options.rewind,
        loop = rewind ? false : options.loop,
        autoHeight = getOption('autoHeight'),
        controls = getOption('controls'),
        controlsText = getOption('controlsText'),
        nav = getOption('nav'),
        touch = getOption('touch'),
        mouseDrag = getOption('mouseDrag'),
        autoplay = getOption('autoplay'),
        autoplayTimeout = getOption('autoplayTimeout'),
        autoplayText = getOption('autoplayText'),
        autoplayHoverPause = getOption('autoplayHoverPause'),
        autoplayResetOnVisibility = getOption('autoplayResetOnVisibility'),
        sheet = createStyleSheet(),
        lazyload = options.lazyload,
        lazyloadSelector = options.lazyloadSelector,
        slidePositions,
        // collection of slide positions
    slideItemsOut = [],
        cloneCount = loop ? getCloneCountForLoop() : 0,
        slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2,
        hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false,
        rightBoundary = fixedWidth ? getRightBoundary() : null,
        updateIndexBeforeTransform = !carousel || !loop ? true : false,
        // transform
    transformAttr = horizontal ? 'left' : 'top',
        transformPrefix = '',
        transformPostfix = '',
        // index
    getIndexMax = function () {
      if (fixedWidth) {
        return function () {
          return center && !loop ? slideCount - 1 : Math.ceil(-rightBoundary / (fixedWidth + gutter));
        };
      } else if (autoWidth) {
        return function () {
          for (var i = slideCountNew; i--;) {
            if (slidePositions[i] > -rightBoundary) {
              return i;
            }
          }
        };
      } else {
        return function () {
          if (center && carousel && !loop) {
            return slideCount - 1;
          } else {
            return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
          }
        };
      }
    }(),
        index = getStartIndex(getOption('startIndex')),
        indexCached = index,
        displayIndex = getCurrentSlide(),
        indexMin = 0,
        indexMax = !autoWidth ? getIndexMax() : null,
        // resize
    resizeTimer,
        preventActionWhenRunning = options.preventActionWhenRunning,
        swipeAngle = options.swipeAngle,
        moveDirectionExpected = swipeAngle ? '?' : true,
        running = false,
        onInit = options.onInit,
        events = new Events(),
        // id, class
    newContainerClasses = ' tns-slider tns-' + options.mode,
        slideId = container.id || getSlideId(),
        disable = getOption('disable'),
        disabled = false,
        freezable = options.freezable,
        freeze = freezable && !autoWidth ? getFreeze() : false,
        frozen = false,
        controlsEvents = {
      'click': onControlsClick,
      'keydown': onControlsKeydown
    },
        navEvents = {
      'click': onNavClick,
      'keydown': onNavKeydown
    },
        hoverEvents = {
      'mouseover': mouseoverPause,
      'mouseout': mouseoutRestart
    },
        visibilityEvent = {
      'visibilitychange': onVisibilityChange
    },
        docmentKeydownEvent = {
      'keydown': onDocumentKeydown
    },
        touchEvents = {
      'touchstart': onPanStart,
      'touchmove': onPanMove,
      'touchend': onPanEnd,
      'touchcancel': onPanEnd
    },
        dragEvents = {
      'mousedown': onPanStart,
      'mousemove': onPanMove,
      'mouseup': onPanEnd,
      'mouseleave': onPanEnd
    },
        hasControls = hasOption('controls'),
        hasNav = hasOption('nav'),
        navAsThumbnails = autoWidth ? true : options.navAsThumbnails,
        hasAutoplay = hasOption('autoplay'),
        hasTouch = hasOption('touch'),
        hasMouseDrag = hasOption('mouseDrag'),
        slideActiveClass = 'tns-slide-active',
        imgCompleteClass = 'tns-complete',
        imgEvents = {
      'load': onImgLoaded,
      'error': onImgFailed
    },
        imgsComplete,
        liveregionCurrent,
        preventScroll = options.preventScrollOnTouch === 'force' ? true : false; // controls


    if (hasControls) {
      var controlsContainer = options.controlsContainer,
          controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : '',
          prevButton = options.prevButton,
          nextButton = options.nextButton,
          prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : '',
          nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : '',
          prevIsButton,
          nextIsButton;
    } // nav


    if (hasNav) {
      var navContainer = options.navContainer,
          navContainerHTML = options.navContainer ? options.navContainer.outerHTML : '',
          navItems,
          pages = autoWidth ? slideCount : getPages(),
          pagesCached = 0,
          navClicked = -1,
          navCurrentIndex = getCurrentNavIndex(),
          navCurrentIndexCached = navCurrentIndex,
          navActiveClass = 'tns-nav-active',
          navStr = 'Carousel Page ',
          navStrCurrent = ' (Current Slide)';
    } // autoplay


    if (hasAutoplay) {
      var autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,
          autoplayButton = options.autoplayButton,
          autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : '',
          autoplayHtmlStrings = ['<span class=\'tns-visually-hidden\'>', ' animation</span>'],
          autoplayTimer,
          animating,
          autoplayHoverPaused,
          autoplayUserPaused,
          autoplayVisibilityPaused;
    }

    if (hasTouch || hasMouseDrag) {
      var initPosition = {},
          lastPosition = {},
          translateInit,
          disX,
          disY,
          panStart = false,
          rafIndex,
          getDist = horizontal ? function (a, b) {
        return a.x - b.x;
      } : function (a, b) {
        return a.y - b.y;
      };
    } // disable slider when slidecount <= items


    if (!autoWidth) {
      resetVariblesWhenDisable(disable || freeze);
    }

    if (TRANSFORM) {
      transformAttr = TRANSFORM;
      transformPrefix = 'translate';

      if (HAS3DTRANSFORMS) {
        transformPrefix += horizontal ? '3d(' : '3d(0px, ';
        transformPostfix = horizontal ? ', 0px, 0px)' : ', 0px)';
      } else {
        transformPrefix += horizontal ? 'X(' : 'Y(';
        transformPostfix = ')';
      }
    }

    if (carousel) {
      container.className = container.className.replace('tns-vpfix', '');
    }

    initStructure();
    initSheet();
    initSliderTransform(); // === COMMON FUNCTIONS === //

    function resetVariblesWhenDisable(condition) {
      if (condition) {
        controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
      }
    }

    function getCurrentSlide() {
      var tem = carousel ? index - cloneCount : index;

      while (tem < 0) {
        tem += slideCount;
      }

      return tem % slideCount + 1;
    }

    function getStartIndex(ind) {
      ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
      return carousel ? ind + cloneCount : ind;
    }

    function getAbsIndex(i) {
      if (i == null) {
        i = index;
      }

      if (carousel) {
        i -= cloneCount;
      }

      while (i < 0) {
        i += slideCount;
      }

      return Math.floor(i % slideCount);
    }

    function getCurrentNavIndex() {
      var absIndex = getAbsIndex(),
          result;
      result = navAsThumbnails ? absIndex : fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) : Math.floor(absIndex / items); // set active nav to the last one when reaches the right edge

      if (!loop && carousel && index === indexMax) {
        result = pages - 1;
      }

      return result;
    }

    function getItemsMax() {
      // fixedWidth or autoWidth while viewportMax is not available
      if (autoWidth || fixedWidth && !viewportMax) {
        return slideCount - 1; // most cases
      } else {
        var str = fixedWidth ? 'fixedWidth' : 'items',
            arr = [];

        if (fixedWidth || options[str] < slideCount) {
          arr.push(options[str]);
        }

        if (responsive) {
          for (var bp in responsive) {
            var tem = responsive[bp][str];

            if (tem && (fixedWidth || tem < slideCount)) {
              arr.push(tem);
            }
          }
        }

        if (!arr.length) {
          arr.push(0);
        }

        return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
      }
    }

    function getCloneCountForLoop() {
      var itemsMax = getItemsMax(),
          result = carousel ? Math.ceil((itemsMax * 5 - slideCount) / 2) : itemsMax * 4 - slideCount;
      result = Math.max(itemsMax, result);
      return hasOption('edgePadding') ? result + 1 : result;
    }

    function getWindowWidth() {
      return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
    }

    function getInsertPosition(pos) {
      return pos === 'top' ? 'afterbegin' : 'beforeend';
    }

    function getClientWidth(el) {
      var div = doc.createElement('div'),
          rect,
          width;
      el.appendChild(div);
      rect = div.getBoundingClientRect();
      width = rect.right - rect.left;
      div.remove();
      return width || getClientWidth(el.parentNode);
    }

    function getViewportWidth() {
      var gap = edgePadding ? edgePadding * 2 - gutter : 0;
      return getClientWidth(containerParent) - gap;
    }

    function hasOption(item) {
      if (options[item]) {
        return true;
      } else {
        if (responsive) {
          for (var bp in responsive) {
            if (responsive[bp][item]) {
              return true;
            }
          }
        }

        return false;
      }
    } // get option:
    // fixed width: viewport, fixedWidth, gutter => items
    // others: window width => all variables
    // all: items => slideBy


    function getOption(item, ww) {
      if (ww == null) {
        ww = windowWidth;
      }

      if (item === 'items' && fixedWidth) {
        return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;
      } else {
        var result = options[item];

        if (responsive) {
          for (var bp in responsive) {
            // bp: convert string to number
            if (ww >= parseInt(bp)) {
              if (item in responsive[bp]) {
                result = responsive[bp][item];
              }
            }
          }
        }

        if (item === 'slideBy' && result === 'page') {
          result = getOption('items');
        }

        if (!carousel && (item === 'slideBy' || item === 'items')) {
          result = Math.floor(result);
        }

        return result;
      }
    }

    function getSlideMarginLeft(i) {
      return CALC ? CALC + '(' + i * 100 + '% / ' + slideCountNew + ')' : i * 100 / slideCountNew + '%';
    }

    function getInnerWrapperStyles(edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
      var str = '';

      if (edgePaddingTem !== undefined) {
        var gap = edgePaddingTem;

        if (gutterTem) {
          gap -= gutterTem;
        }

        str = horizontal ? 'margin: 0 ' + gap + 'px 0 ' + edgePaddingTem + 'px;' : 'margin: ' + edgePaddingTem + 'px 0 ' + gap + 'px 0;';
      } else if (gutterTem && !fixedWidthTem) {
        var gutterTemUnit = '-' + gutterTem + 'px',
            dir = horizontal ? gutterTemUnit + ' 0 0' : '0 ' + gutterTemUnit + ' 0';
        str = 'margin: 0 ' + dir + ';';
      }

      if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) {
        str += getTransitionDurationStyle(speedTem);
      }

      return str;
    }

    function getContainerWidth(fixedWidthTem, gutterTem, itemsTem) {
      if (fixedWidthTem) {
        return (fixedWidthTem + gutterTem) * slideCountNew + 'px';
      } else {
        return CALC ? CALC + '(' + slideCountNew * 100 + '% / ' + itemsTem + ')' : slideCountNew * 100 / itemsTem + '%';
      }
    }

    function getSlideWidthStyle(fixedWidthTem, gutterTem, itemsTem) {
      var width;

      if (fixedWidthTem) {
        width = fixedWidthTem + gutterTem + 'px';
      } else {
        if (!carousel) {
          itemsTem = Math.floor(itemsTem);
        }

        var dividend = carousel ? slideCountNew : itemsTem;
        width = CALC ? CALC + '(100% / ' + dividend + ')' : 100 / dividend + '%';
      }

      width = 'width:' + width; // inner slider: overwrite outer slider styles

      return nested !== 'inner' ? width + ';' : width + ' !important;';
    }

    function getSlideGutterStyle(gutterTem) {
      var str = ''; // gutter maybe interger || 0
      // so can't use 'if (gutter)'

      if (gutterTem !== false) {
        var prop = horizontal ? 'padding-' : 'margin-',
            dir = horizontal ? 'right' : 'bottom';
        str = prop + dir + ': ' + gutterTem + 'px;';
      }

      return str;
    }

    function getCSSPrefix(name, num) {
      var prefix = name.substring(0, name.length - num).toLowerCase();

      if (prefix) {
        prefix = '-' + prefix + '-';
      }

      return prefix;
    }

    function getTransitionDurationStyle(speed) {
      return getCSSPrefix(TRANSITIONDURATION, 18) + 'transition-duration:' + speed / 1000 + 's;';
    }

    function getAnimationDurationStyle(speed) {
      return getCSSPrefix(ANIMATIONDURATION, 17) + 'animation-duration:' + speed / 1000 + 's;';
    }

    function initStructure() {
      var classOuter = 'tns-outer',
          classInner = 'tns-inner',
          hasGutter = hasOption('gutter');
      outerWrapper.className = classOuter;
      innerWrapper.className = classInner;
      outerWrapper.id = slideId + '-ow';
      innerWrapper.id = slideId + '-iw'; // set container properties

      if (container.id === '') {
        container.id = slideId;
      }

      newContainerClasses += PERCENTAGELAYOUT || autoWidth ? ' tns-subpixel' : ' tns-no-subpixel';
      newContainerClasses += CALC ? ' tns-calc' : ' tns-no-calc';

      if (autoWidth) {
        newContainerClasses += ' tns-autowidth';
      }

      newContainerClasses += ' tns-' + options.axis;
      container.className += newContainerClasses; // add constrain layer for carousel

      if (carousel) {
        middleWrapper = doc.createElement('div');
        middleWrapper.id = slideId + '-mw';
        middleWrapper.className = 'tns-ovh';
        outerWrapper.appendChild(middleWrapper);
        middleWrapper.appendChild(innerWrapper);
      } else {
        outerWrapper.appendChild(innerWrapper);
      }

      if (autoHeight) {
        var wp = middleWrapper ? middleWrapper : innerWrapper;
        wp.className += ' tns-ah';
      }

      containerParent.insertBefore(outerWrapper, container);
      innerWrapper.appendChild(container); // add id, class, aria attributes 
      // before clone slides

      forEach(slideItems, function (item, i) {
        addClass$1(item, 'tns-item');

        if (!item.id) {
          item.id = slideId + '-item' + i;
        }

        if (!carousel && animateNormal) {
          addClass$1(item, animateNormal);
        }

        setAttrs(item, {
          'aria-hidden': 'true',
          'tabindex': '-1'
        });
      }); // ## clone slides
      // carousel: n + slides + n
      // gallery:      slides + n

      if (cloneCount) {
        var fragmentBefore = doc.createDocumentFragment(),
            fragmentAfter = doc.createDocumentFragment();

        for (var j = cloneCount; j--;) {
          var num = j % slideCount,
              cloneFirst = slideItems[num].cloneNode(true);
          removeAttrs(cloneFirst, 'id');
          fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);

          if (carousel) {
            var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
            removeAttrs(cloneLast, 'id');
            fragmentBefore.appendChild(cloneLast);
          }
        }

        container.insertBefore(fragmentBefore, container.firstChild);
        container.appendChild(fragmentAfter);
        slideItems = container.children;
      }
    }

    function initSliderTransform() {
      // ## images loaded/failed
      if (hasOption('autoHeight') || autoWidth || !horizontal) {
        var imgs = container.querySelectorAll('img'); // add complete class if all images are loaded/failed

        forEach(imgs, function (img) {
          var src = img.src;

          if (src && src.indexOf('data:image') < 0) {
            addEvents(img, imgEvents);
            img.src = '';
            img.src = src;
            addClass$1(img, 'loading');
          } else if (!lazyload) {
            imgLoaded(img);
          }
        }); // All imgs are completed

        raf(function () {
          imgsLoadedCheck(arrayFromNodeList(imgs), function () {
            imgsComplete = true;
          });
        }); // Check imgs in window only for auto height

        if (!autoWidth && horizontal) {
          imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1));
        }

        lazyload ? initSliderTransformStyleCheck() : raf(function () {
          imgsLoadedCheck(arrayFromNodeList(imgs), initSliderTransformStyleCheck);
        });
      } else {
        // set container transform property
        if (carousel) {
          doContainerTransformSilent();
        } // update slider tools and events


        initTools();
        initEvents();
      }
    }

    function initSliderTransformStyleCheck() {
      if (autoWidth) {
        // check styles application
        var num = loop ? index : slideCount - 1;

        (function stylesApplicationCheck() {
          slideItems[num - 1].getBoundingClientRect().right.toFixed(2) === slideItems[num].getBoundingClientRect().left.toFixed(2) ? initSliderTransformCore() : setTimeout(function () {
            stylesApplicationCheck();
          }, 16);
        })();
      } else {
        initSliderTransformCore();
      }
    }

    function initSliderTransformCore() {
      // run Fn()s which are rely on image loading
      if (!horizontal || autoWidth) {
        setSlidePositions();

        if (autoWidth) {
          rightBoundary = getRightBoundary();

          if (freezable) {
            freeze = getFreeze();
          }

          indexMax = getIndexMax(); // <= slidePositions, rightBoundary <=

          resetVariblesWhenDisable(disable || freeze);
        } else {
          updateContentWrapperHeight();
        }
      } // set container transform property


      if (carousel) {
        doContainerTransformSilent();
      } // update slider tools and events


      initTools();
      initEvents();
    }

    function initSheet() {
      // gallery:
      // set animation classes and left value for gallery slider
      if (!carousel) {
        for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
          var item = slideItems[i];
          item.style.left = (i - index) * 100 / items + '%';
          addClass$1(item, animateIn);
          removeClass$1(item, animateNormal);
        }
      } // #### LAYOUT
      // ## INLINE-BLOCK VS FLOAT
      // ## PercentageLayout:
      // slides: inline-block
      // remove blank space between slides by set font-size: 0
      // ## Non PercentageLayout:
      // slides: float
      //         margin-right: -100%
      //         margin-left: ~
      // Resource: https://docs.google.com/spreadsheets/d/147up245wwTXeQYve3BRSAD4oVcvQmuGsFteJOeA5xNQ/edit?usp=sharing


      if (horizontal) {
        if (PERCENTAGELAYOUT || autoWidth) {
          addCSSRule(sheet, '#' + slideId + ' > .tns-item', 'font-size:' + win.getComputedStyle(slideItems[0]).fontSize + ';', getCssRulesLength(sheet));
          addCSSRule(sheet, '#' + slideId, 'font-size:0;', getCssRulesLength(sheet));
        } else if (carousel) {
          forEach(slideItems, function (slide, i) {
            slide.style.marginLeft = getSlideMarginLeft(i);
          });
        }
      } // ## BASIC STYLES


      if (CSSMQ) {
        // middle wrapper style
        if (TRANSITIONDURATION) {
          var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : '';
          addCSSRule(sheet, '#' + slideId + '-mw', str, getCssRulesLength(sheet));
        } // inner wrapper styles


        str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
        addCSSRule(sheet, '#' + slideId + '-iw', str, getCssRulesLength(sheet)); // container styles

        if (carousel) {
          str = horizontal && !autoWidth ? 'width:' + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ';' : '';

          if (TRANSITIONDURATION) {
            str += getTransitionDurationStyle(speed);
          }

          addCSSRule(sheet, '#' + slideId, str, getCssRulesLength(sheet));
        } // slide styles


        str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : '';

        if (options.gutter) {
          str += getSlideGutterStyle(options.gutter);
        } // set gallery items transition-duration


        if (!carousel) {
          if (TRANSITIONDURATION) {
            str += getTransitionDurationStyle(speed);
          }

          if (ANIMATIONDURATION) {
            str += getAnimationDurationStyle(speed);
          }
        }

        if (str) {
          addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet));
        } // non CSS mediaqueries: IE8
        // ## update inner wrapper, container, slides if needed
        // set inline styles for inner wrapper & container
        // insert stylesheet (one line) for slides only (since slides are many)

      } else {
        // middle wrapper styles
        update_carousel_transition_duration(); // inner wrapper styles

        innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight); // container styles

        if (carousel && horizontal && !autoWidth) {
          container.style.width = getContainerWidth(fixedWidth, gutter, items);
        } // slide styles


        var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : '';

        if (gutter) {
          str += getSlideGutterStyle(gutter);
        } // append to the last line


        if (str) {
          addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet));
        }
      } // ## MEDIAQUERIES


      if (responsive && CSSMQ) {
        for (var bp in responsive) {
          // bp: convert string to number
          bp = parseInt(bp);
          var opts = responsive[bp],
              str = '',
              middleWrapperStr = '',
              innerWrapperStr = '',
              containerStr = '',
              slideStr = '',
              itemsBP = !autoWidth ? getOption('items', bp) : null,
              fixedWidthBP = getOption('fixedWidth', bp),
              speedBP = getOption('speed', bp),
              edgePaddingBP = getOption('edgePadding', bp),
              autoHeightBP = getOption('autoHeight', bp),
              gutterBP = getOption('gutter', bp); // middle wrapper string

          if (TRANSITIONDURATION && middleWrapper && getOption('autoHeight', bp) && 'speed' in opts) {
            middleWrapperStr = '#' + slideId + '-mw{' + getTransitionDurationStyle(speedBP) + '}';
          } // inner wrapper string


          if ('edgePadding' in opts || 'gutter' in opts) {
            innerWrapperStr = '#' + slideId + '-iw{' + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + '}';
          } // container string


          if (carousel && horizontal && !autoWidth && ('fixedWidth' in opts || 'items' in opts || fixedWidth && 'gutter' in opts)) {
            containerStr = 'width:' + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ';';
          }

          if (TRANSITIONDURATION && 'speed' in opts) {
            containerStr += getTransitionDurationStyle(speedBP);
          }

          if (containerStr) {
            containerStr = '#' + slideId + '{' + containerStr + '}';
          } // slide string


          if ('fixedWidth' in opts || fixedWidth && 'gutter' in opts || !carousel && 'items' in opts) {
            slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
          }

          if ('gutter' in opts) {
            slideStr += getSlideGutterStyle(gutterBP);
          } // set gallery items transition-duration


          if (!carousel && 'speed' in opts) {
            if (TRANSITIONDURATION) {
              slideStr += getTransitionDurationStyle(speedBP);
            }

            if (ANIMATIONDURATION) {
              slideStr += getAnimationDurationStyle(speedBP);
            }
          }

          if (slideStr) {
            slideStr = '#' + slideId + ' > .tns-item{' + slideStr + '}';
          } // add up


          str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;

          if (str) {
            sheet.insertRule('@media (min-width: ' + bp / 16 + 'em) {' + str + '}', sheet.cssRules.length);
          }
        }
      }
    }

    function initTools() {
      // == slides ==
      updateSlideStatus(); // == live region ==

      outerWrapper.insertAdjacentHTML('afterbegin', '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + '</span>  of ' + slideCount + '</div>');
      liveregionCurrent = outerWrapper.querySelector('.tns-liveregion .current'); // == autoplayInit ==

      if (hasAutoplay) {
        var txt = autoplay ? 'stop' : 'start';

        if (autoplayButton) {
          setAttrs(autoplayButton, {
            'data-action': txt
          });
        } else if (options.autoplayButtonOutput) {
          outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + '</button>');
          autoplayButton = outerWrapper.querySelector('[data-action]');
        } // add event


        if (autoplayButton) {
          addEvents(autoplayButton, {
            'click': toggleAutoplay
          });
        }

        if (autoplay) {
          startAutoplay();

          if (autoplayHoverPause) {
            addEvents(container, hoverEvents);
          }

          if (autoplayResetOnVisibility) {
            addEvents(container, visibilityEvent);
          }
        }
      } // == navInit ==


      if (hasNav) {
        // will not hide the navs in case they're thumbnails

        if (navContainer) {
          setAttrs(navContainer, {
            'aria-label': 'Carousel Pagination'
          });
          navItems = navContainer.children;
          forEach(navItems, function (item, i) {
            setAttrs(item, {
              'data-nav': i,
              'tabindex': '-1',
              'aria-label': navStr + (i + 1),
              'aria-controls': slideId
            });
          }); // generated nav 
        } else {
          var navHtml = '',
              hiddenStr = navAsThumbnails ? '' : 'style="display:none"';

          for (var i = 0; i < slideCount; i++) {
            // hide nav items by default
            navHtml += '<button data-nav="' + i + '" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i + 1) + '"></button>';
          }

          navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
          outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);
          navContainer = outerWrapper.querySelector('.tns-nav');
          navItems = navContainer.children;
        }

        updateNavVisibility(); // add transition

        if (TRANSITIONDURATION) {
          var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(),
              str = 'transition: all ' + speed / 1000 + 's';

          if (prefix) {
            str = '-' + prefix + '-' + str;
          }

          addCSSRule(sheet, '[aria-controls^=' + slideId + '-item]', str, getCssRulesLength(sheet));
        }

        setAttrs(navItems[navCurrentIndex], {
          'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent
        });
        removeAttrs(navItems[navCurrentIndex], 'tabindex');
        addClass$1(navItems[navCurrentIndex], navActiveClass); // add events

        addEvents(navContainer, navEvents);
      } // == controlsInit ==


      if (hasControls) {
        if (!controlsContainer && (!prevButton || !nextButton)) {
          outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[0] + '</button><button data-controls="next" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[1] + '</button></div>');
          controlsContainer = outerWrapper.querySelector('.tns-controls');
        }

        if (!prevButton || !nextButton) {
          prevButton = controlsContainer.children[0];
          nextButton = controlsContainer.children[1];
        }

        if (options.controlsContainer) {
          setAttrs(controlsContainer, {
            'aria-label': 'Carousel Navigation',
            'tabindex': '0'
          });
        }

        if (options.controlsContainer || options.prevButton && options.nextButton) {
          setAttrs([prevButton, nextButton], {
            'aria-controls': slideId,
            'tabindex': '-1'
          });
        }

        if (options.controlsContainer || options.prevButton && options.nextButton) {
          setAttrs(prevButton, {
            'data-controls': 'prev'
          });
          setAttrs(nextButton, {
            'data-controls': 'next'
          });
        }

        prevIsButton = isButton(prevButton);
        nextIsButton = isButton(nextButton);
        updateControlsStatus(); // add events

        if (controlsContainer) {
          addEvents(controlsContainer, controlsEvents);
        } else {
          addEvents(prevButton, controlsEvents);
          addEvents(nextButton, controlsEvents);
        }
      } // hide tools if needed


      disableUI();
    }

    function initEvents() {
      // add events
      if (carousel && TRANSITIONEND) {
        var eve = {};
        eve[TRANSITIONEND] = onTransitionEnd;
        addEvents(container, eve);
      }

      if (touch) {
        addEvents(container, touchEvents, options.preventScrollOnTouch);
      }

      if (mouseDrag) {
        addEvents(container, dragEvents);
      }

      if (arrowKeys) {
        addEvents(doc, docmentKeydownEvent);
      }

      if (nested === 'inner') {
        events.on('outerResized', function () {
          resizeTasks();
          events.emit('innerLoaded', info());
        });
      } else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) {
        addEvents(win, {
          'resize': onResize
        });
      }

      if (autoHeight) {
        if (nested === 'outer') {
          events.on('innerLoaded', doAutoHeight);
        } else if (!disable) {
          doAutoHeight();
        }
      }

      doLazyLoad();

      if (disable) {
        disableSlider();
      } else if (freeze) {
        freezeSlider();
      }

      events.on('indexChanged', additionalUpdates);

      if (nested === 'inner') {
        events.emit('innerLoaded', info());
      }

      if (typeof onInit === 'function') {
        onInit(info());
      }

      isOn = true;
    }

    function destroy() {
      // sheet
      sheet.disabled = true;

      if (sheet.ownerNode) {
        sheet.ownerNode.remove();
      } // remove win event listeners


      removeEvents(win, {
        'resize': onResize
      }); // arrowKeys, controls, nav

      if (arrowKeys) {
        removeEvents(doc, docmentKeydownEvent);
      }

      if (controlsContainer) {
        removeEvents(controlsContainer, controlsEvents);
      }

      if (navContainer) {
        removeEvents(navContainer, navEvents);
      } // autoplay


      removeEvents(container, hoverEvents);
      removeEvents(container, visibilityEvent);

      if (autoplayButton) {
        removeEvents(autoplayButton, {
          'click': toggleAutoplay
        });
      }

      if (autoplay) {
        clearInterval(autoplayTimer);
      } // container


      if (carousel && TRANSITIONEND) {
        var eve = {};
        eve[TRANSITIONEND] = onTransitionEnd;
        removeEvents(container, eve);
      }

      if (touch) {
        removeEvents(container, touchEvents);
      }

      if (mouseDrag) {
        removeEvents(container, dragEvents);
      } // cache Object values in options && reset HTML


      var htmlList = [containerHTML, controlsContainerHTML, prevButtonHTML, nextButtonHTML, navContainerHTML, autoplayButtonHTML];
      tnsList.forEach(function (item, i) {
        var el = item === 'container' ? outerWrapper : options[item];

        if (typeof el === 'object') {
          var prevEl = el.previousElementSibling ? el.previousElementSibling : false,
              parentEl = el.parentNode;
          el.outerHTML = htmlList[i];
          options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
        }
      }); // reset variables

      tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = resizeTimer = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = disX = disY = panStart = rafIndex = getDist = touch = mouseDrag = null; // check variables
      // [animateIn, animateOut, animateDelay, animateNormal, horizontal, outerWrapper, innerWrapper, container, containerParent, containerHTML, slideItems, slideCount, breakpointZone, windowWidth, autoWidth, fixedWidth, edgePadding, gutter, viewport, items, slideBy, viewportMax, arrowKeys, speed, rewind, loop, autoHeight, sheet, lazyload, slidePositions, slideItemsOut, cloneCount, slideCountNew, hasRightDeadZone, rightBoundary, updateIndexBeforeTransform, transformAttr, transformPrefix, transformPostfix, getIndexMax, index, indexCached, indexMin, indexMax, resizeTimer, swipeAngle, moveDirectionExpected, running, onInit, events, newContainerClasses, slideId, disable, disabled, freezable, freeze, frozen, controlsEvents, navEvents, hoverEvents, visibilityEvent, docmentKeydownEvent, touchEvents, dragEvents, hasControls, hasNav, navAsThumbnails, hasAutoplay, hasTouch, hasMouseDrag, slideActiveClass, imgCompleteClass, imgEvents, imgsComplete, controls, controlsText, controlsContainer, controlsContainerHTML, prevButton, nextButton, prevIsButton, nextIsButton, nav, navContainer, navContainerHTML, navItems, pages, pagesCached, navClicked, navCurrentIndex, navCurrentIndexCached, navActiveClass, navStr, navStrCurrent, autoplay, autoplayTimeout, autoplayDirection, autoplayText, autoplayHoverPause, autoplayButton, autoplayButtonHTML, autoplayResetOnVisibility, autoplayHtmlStrings, autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused, initPosition, lastPosition, translateInit, disX, disY, panStart, rafIndex, getDist, touch, mouseDrag ].forEach(function(item) { if (item !== null) { console.log(item); } });

      for (var a in this) {
        if (a !== 'rebuild') {
          this[a] = null;
        }
      }

      isOn = false;
    } // === ON RESIZE ===
    // responsive || fixedWidth || autoWidth || !horizontal


    function onResize(e) {
      raf(function () {
        resizeTasks(getEvent(e));
      });
    }

    function resizeTasks(e) {
      if (!isOn) {
        return;
      }

      if (nested === 'outer') {
        events.emit('outerResized', info(e));
      }

      windowWidth = getWindowWidth();
      var bpChanged,
          breakpointZoneTem = breakpointZone,
          needContainerTransform = false;

      if (responsive) {
        setBreakpointZone();
        bpChanged = breakpointZoneTem !== breakpointZone; // if (hasRightDeadZone) { needContainerTransform = true; } // *?

        if (bpChanged) {
          events.emit('newBreakpointStart', info(e));
        }
      }

      var indChanged,
          itemsChanged,
          itemsTem = items,
          disableTem = disable,
          freezeTem = freeze,
          arrowKeysTem = arrowKeys,
          controlsTem = controls,
          navTem = nav,
          touchTem = touch,
          mouseDragTem = mouseDrag,
          autoplayTem = autoplay,
          autoplayHoverPauseTem = autoplayHoverPause,
          autoplayResetOnVisibilityTem = autoplayResetOnVisibility,
          indexTem = index;

      if (bpChanged) {
        var fixedWidthTem = fixedWidth,
            autoHeightTem = autoHeight,
            controlsTextTem = controlsText,
            centerTem = center,
            autoplayTextTem = autoplayText;

        if (!CSSMQ) {
          var gutterTem = gutter,
              edgePaddingTem = edgePadding;
        }
      } // get option:
      // fixed width: viewport, fixedWidth, gutter => items
      // others: window width => all variables
      // all: items => slideBy


      arrowKeys = getOption('arrowKeys');
      controls = getOption('controls');
      nav = getOption('nav');
      touch = getOption('touch');
      center = getOption('center');
      mouseDrag = getOption('mouseDrag');
      autoplay = getOption('autoplay');
      autoplayHoverPause = getOption('autoplayHoverPause');
      autoplayResetOnVisibility = getOption('autoplayResetOnVisibility');

      if (bpChanged) {
        disable = getOption('disable');
        fixedWidth = getOption('fixedWidth');
        speed = getOption('speed');
        autoHeight = getOption('autoHeight');
        controlsText = getOption('controlsText');
        autoplayText = getOption('autoplayText');
        autoplayTimeout = getOption('autoplayTimeout');

        if (!CSSMQ) {
          edgePadding = getOption('edgePadding');
          gutter = getOption('gutter');
        }
      } // update options


      resetVariblesWhenDisable(disable);
      viewport = getViewportWidth(); // <= edgePadding, gutter

      if ((!horizontal || autoWidth) && !disable) {
        setSlidePositions();

        if (!horizontal) {
          updateContentWrapperHeight(); // <= setSlidePositions

          needContainerTransform = true;
        }
      }

      if (fixedWidth || autoWidth) {
        rightBoundary = getRightBoundary(); // autoWidth: <= viewport, slidePositions, gutter
        // fixedWidth: <= viewport, fixedWidth, gutter

        indexMax = getIndexMax(); // autoWidth: <= rightBoundary, slidePositions
        // fixedWidth: <= rightBoundary, fixedWidth, gutter
      }

      if (bpChanged || fixedWidth) {
        items = getOption('items');
        slideBy = getOption('slideBy');
        itemsChanged = items !== itemsTem;

        if (itemsChanged) {
          if (!fixedWidth && !autoWidth) {
            indexMax = getIndexMax();
          } // <= items
          // check index before transform in case
          // slider reach the right edge then items become bigger


          updateIndex();
        }
      }

      if (bpChanged) {
        if (disable !== disableTem) {
          if (disable) {
            disableSlider();
          } else {
            enableSlider(); // <= slidePositions, rightBoundary, indexMax
          }
        }
      }

      if (freezable && (bpChanged || fixedWidth || autoWidth)) {
        freeze = getFreeze(); // <= autoWidth: slidePositions, gutter, viewport, rightBoundary
        // <= fixedWidth: fixedWidth, gutter, rightBoundary
        // <= others: items

        if (freeze !== freezeTem) {
          if (freeze) {
            doContainerTransform(getContainerTransformValue(getStartIndex(0)));
            freezeSlider();
          } else {
            unfreezeSlider();
            needContainerTransform = true;
          }
        }
      }

      resetVariblesWhenDisable(disable || freeze); // controls, nav, touch, mouseDrag, arrowKeys, autoplay, autoplayHoverPause, autoplayResetOnVisibility

      if (!autoplay) {
        autoplayHoverPause = autoplayResetOnVisibility = false;
      }

      if (arrowKeys !== arrowKeysTem) {
        arrowKeys ? addEvents(doc, docmentKeydownEvent) : removeEvents(doc, docmentKeydownEvent);
      }

      if (controls !== controlsTem) {
        if (controls) {
          if (controlsContainer) {
            showElement(controlsContainer);
          } else {
            if (prevButton) {
              showElement(prevButton);
            }

            if (nextButton) {
              showElement(nextButton);
            }
          }
        } else {
          if (controlsContainer) {
            hideElement(controlsContainer);
          } else {
            if (prevButton) {
              hideElement(prevButton);
            }

            if (nextButton) {
              hideElement(nextButton);
            }
          }
        }
      }

      if (nav !== navTem) {
        nav ? showElement(navContainer) : hideElement(navContainer);
      }

      if (touch !== touchTem) {
        touch ? addEvents(container, touchEvents, options.preventScrollOnTouch) : removeEvents(container, touchEvents);
      }

      if (mouseDrag !== mouseDragTem) {
        mouseDrag ? addEvents(container, dragEvents) : removeEvents(container, dragEvents);
      }

      if (autoplay !== autoplayTem) {
        if (autoplay) {
          if (autoplayButton) {
            showElement(autoplayButton);
          }

          if (!animating && !autoplayUserPaused) {
            startAutoplay();
          }
        } else {
          if (autoplayButton) {
            hideElement(autoplayButton);
          }

          if (animating) {
            stopAutoplay();
          }
        }
      }

      if (autoplayHoverPause !== autoplayHoverPauseTem) {
        autoplayHoverPause ? addEvents(container, hoverEvents) : removeEvents(container, hoverEvents);
      }

      if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
        autoplayResetOnVisibility ? addEvents(doc, visibilityEvent) : removeEvents(doc, visibilityEvent);
      }

      if (bpChanged) {
        if (fixedWidth !== fixedWidthTem || center !== centerTem) {
          needContainerTransform = true;
        }

        if (autoHeight !== autoHeightTem) {
          if (!autoHeight) {
            innerWrapper.style.height = '';
          }
        }

        if (controls && controlsText !== controlsTextTem) {
          prevButton.innerHTML = controlsText[0];
          nextButton.innerHTML = controlsText[1];
        }

        if (autoplayButton && autoplayText !== autoplayTextTem) {
          var i = autoplay ? 1 : 0,
              html = autoplayButton.innerHTML,
              len = html.length - autoplayTextTem[i].length;

          if (html.substring(len) === autoplayTextTem[i]) {
            autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
          }
        }
      } else {
        if (center && (fixedWidth || autoWidth)) {
          needContainerTransform = true;
        }
      }

      if (itemsChanged || fixedWidth && !autoWidth) {
        pages = getPages();
        updateNavVisibility();
      }

      indChanged = index !== indexTem;

      if (indChanged) {
        events.emit('indexChanged', info());
        needContainerTransform = true;
      } else if (itemsChanged) {
        if (!indChanged) {
          additionalUpdates();
        }
      } else if (fixedWidth || autoWidth) {
        doLazyLoad();
        updateSlideStatus();
        updateLiveRegion();
      }

      if (itemsChanged || !carousel) {
        updateGallerySlidePositions();
      }

      if (!disable && !freeze) {
        // non-meduaqueries: IE8
        if (bpChanged && !CSSMQ) {
          // middle wrapper styles
          if (autoHeight !== autoheightTem || speed !== speedTem) {
            update_carousel_transition_duration();
          } // inner wrapper styles


          if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {
            innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);
          }

          if (horizontal) {
            // container styles
            if (carousel) {
              container.style.width = getContainerWidth(fixedWidth, gutter, items);
            } // slide styles


            var str = getSlideWidthStyle(fixedWidth, gutter, items) + getSlideGutterStyle(gutter); // remove the last line and
            // add new styles

            removeCSSRule(sheet, getCssRulesLength(sheet) - 1);
            addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet));
          }
        } // auto height


        if (autoHeight) {
          doAutoHeight();
        }

        if (needContainerTransform) {
          doContainerTransformSilent();
          indexCached = index;
        }
      }

      if (bpChanged) {
        events.emit('newBreakpointEnd', info(e));
      }
    } // === INITIALIZATION FUNCTIONS === //


    function getFreeze() {
      if (!fixedWidth && !autoWidth) {
        var a = center ? items - (items - 1) / 2 : items;
        return slideCount <= a;
      }

      var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount],
          vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;

      if (center) {
        vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;
      }

      return width <= vp;
    }

    function setBreakpointZone() {
      breakpointZone = 0;

      for (var bp in responsive) {
        bp = parseInt(bp); // convert string to number

        if (windowWidth >= bp) {
          breakpointZone = bp;
        }
      }
    } // (slideBy, indexMin, indexMax) => index


    var updateIndex = function () {
      return loop ? carousel ? // loop + carousel
      function () {
        var leftEdge = indexMin,
            rightEdge = indexMax;
        leftEdge += slideBy;
        rightEdge -= slideBy; // adjust edges when has edge paddings
        // or fixed-width slider with extra space on the right side

        if (edgePadding) {
          leftEdge += 1;
          rightEdge -= 1;
        } else if (fixedWidth) {
          if ((viewport + gutter) % (fixedWidth + gutter)) {
            rightEdge -= 1;
          }
        }

        if (cloneCount) {
          if (index > rightEdge) {
            index -= slideCount;
          } else if (index < leftEdge) {
            index += slideCount;
          }
        }
      } : // loop + gallery
      function () {
        if (index > indexMax) {
          while (index >= indexMin + slideCount) {
            index -= slideCount;
          }
        } else if (index < indexMin) {
          while (index <= indexMax - slideCount) {
            index += slideCount;
          }
        }
      } : // non-loop
      function () {
        index = Math.max(indexMin, Math.min(indexMax, index));
      };
    }();

    function disableUI() {
      if (!autoplay && autoplayButton) {
        hideElement(autoplayButton);
      }

      if (!nav && navContainer) {
        hideElement(navContainer);
      }

      if (!controls) {
        if (controlsContainer) {
          hideElement(controlsContainer);
        } else {
          if (prevButton) {
            hideElement(prevButton);
          }

          if (nextButton) {
            hideElement(nextButton);
          }
        }
      }
    }

    function enableUI() {
      if (autoplay && autoplayButton) {
        showElement(autoplayButton);
      }

      if (nav && navContainer) {
        showElement(navContainer);
      }

      if (controls) {
        if (controlsContainer) {
          showElement(controlsContainer);
        } else {
          if (prevButton) {
            showElement(prevButton);
          }

          if (nextButton) {
            showElement(nextButton);
          }
        }
      }
    }

    function freezeSlider() {
      if (frozen) {
        return;
      } // remove edge padding from inner wrapper


      if (edgePadding) {
        innerWrapper.style.margin = '0px';
      } // add class tns-transparent to cloned slides


      if (cloneCount) {
        var str = 'tns-transparent';

        for (var i = cloneCount; i--;) {
          if (carousel) {
            addClass$1(slideItems[i], str);
          }

          addClass$1(slideItems[slideCountNew - i - 1], str);
        }
      } // update tools


      disableUI();
      frozen = true;
    }

    function unfreezeSlider() {
      if (!frozen) {
        return;
      } // restore edge padding for inner wrapper
      // for mordern browsers


      if (edgePadding && CSSMQ) {
        innerWrapper.style.margin = '';
      } // remove class tns-transparent to cloned slides


      if (cloneCount) {
        var str = 'tns-transparent';

        for (var i = cloneCount; i--;) {
          if (carousel) {
            removeClass$1(slideItems[i], str);
          }

          removeClass$1(slideItems[slideCountNew - i - 1], str);
        }
      } // update tools


      enableUI();
      frozen = false;
    }

    function disableSlider() {
      if (disabled) {
        return;
      }

      sheet.disabled = true;
      container.className = container.className.replace(newContainerClasses.substring(1), '');
      removeAttrs(container, ['style']);

      if (loop) {
        for (var j = cloneCount; j--;) {
          if (carousel) {
            hideElement(slideItems[j]);
          }

          hideElement(slideItems[slideCountNew - j - 1]);
        }
      } // vertical slider


      if (!horizontal || !carousel) {
        removeAttrs(innerWrapper, ['style']);
      } // gallery


      if (!carousel) {
        for (var i = index, l = index + slideCount; i < l; i++) {
          var item = slideItems[i];
          removeAttrs(item, ['style']);
          removeClass$1(item, animateIn);
          removeClass$1(item, animateNormal);
        }
      } // update tools


      disableUI();
      disabled = true;
    }

    function enableSlider() {
      if (!disabled) {
        return;
      }

      sheet.disabled = false;
      container.className += newContainerClasses;
      doContainerTransformSilent();

      if (loop) {
        for (var j = cloneCount; j--;) {
          if (carousel) {
            showElement(slideItems[j]);
          }

          showElement(slideItems[slideCountNew - j - 1]);
        }
      } // gallery


      if (!carousel) {
        for (var i = index, l = index + slideCount; i < l; i++) {
          var item = slideItems[i],
              classN = i < index + items ? animateIn : animateNormal;
          item.style.left = (i - index) * 100 / items + '%';
          addClass$1(item, classN);
        }
      } // update tools


      enableUI();
      disabled = false;
    }

    function updateLiveRegion() {
      var str = getLiveRegionStr();

      if (liveregionCurrent.innerHTML !== str) {
        liveregionCurrent.innerHTML = str;
      }
    }

    function getLiveRegionStr() {
      var arr = getVisibleSlideRange(),
          start = arr[0] + 1,
          end = arr[1] + 1;
      return start === end ? start + '' : start + ' to ' + end;
    }

    function getVisibleSlideRange(val) {
      if (val == null) {
        val = getContainerTransformValue();
      }

      var start = index,
          end,
          rangestart,
          rangeend; // get range start, range end for autoWidth and fixedWidth

      if (center || edgePadding) {
        if (autoWidth || fixedWidth) {
          rangestart = -(parseFloat(val) + edgePadding);
          rangeend = rangestart + viewport + edgePadding * 2;
        }
      } else {
        if (autoWidth) {
          rangestart = slidePositions[index];
          rangeend = rangestart + viewport;
        }
      } // get start, end
      // - check auto width


      if (autoWidth) {
        slidePositions.forEach(function (point, i) {
          if (i < slideCountNew) {
            if ((center || edgePadding) && point <= rangestart + 0.5) {
              start = i;
            }

            if (rangeend - point >= 0.5) {
              end = i;
            }
          }
        }); // - check percentage width, fixed width
      } else {
        if (fixedWidth) {
          var cell = fixedWidth + gutter;

          if (center || edgePadding) {
            start = Math.floor(rangestart / cell);
            end = Math.ceil(rangeend / cell - 1);
          } else {
            end = start + Math.ceil(viewport / cell) - 1;
          }
        } else {
          if (center || edgePadding) {
            var a = items - 1;

            if (center) {
              start -= a / 2;
              end = index + a / 2;
            } else {
              end = index + a;
            }

            if (edgePadding) {
              var b = edgePadding * items / viewport;
              start -= b;
              end += b;
            }

            start = Math.floor(start);
            end = Math.ceil(end);
          } else {
            end = start + items - 1;
          }
        }

        start = Math.max(start, 0);
        end = Math.min(end, slideCountNew - 1);
      }

      return [start, end];
    }

    function doLazyLoad() {
      if (lazyload && !disable) {
        getImageArray.apply(null, getVisibleSlideRange()).forEach(function (img) {
          if (!hasClass$1(img, imgCompleteClass)) {
            // stop propagation transitionend event to container
            var eve = {};

            eve[TRANSITIONEND] = function (e) {
              e.stopPropagation();
            };

            addEvents(img, eve);
            addEvents(img, imgEvents); // update src

            img.src = getAttr(img, 'data-src'); // update srcset

            var srcset = getAttr(img, 'data-srcset');

            if (srcset) {
              img.srcset = srcset;
            }

            addClass$1(img, 'loading');
          }
        });
      }
    }

    function onImgLoaded(e) {
      imgLoaded(getTarget(e));
    }

    function onImgFailed(e) {
      imgFailed(getTarget(e));
    }

    function imgLoaded(img) {
      addClass$1(img, 'loaded');
      imgCompleted(img);
    }

    function imgFailed(img) {
      addClass$1(img, 'failed');
      imgCompleted(img);
    }

    function imgCompleted(img) {
      addClass$1(img, 'tns-complete');
      removeClass$1(img, 'loading');
      removeEvents(img, imgEvents);
    }

    function getImageArray(start, end) {
      var imgs = [];

      while (start <= end) {
        forEach(slideItems[start].querySelectorAll('img'), function (img) {
          imgs.push(img);
        });
        start++;
      }

      return imgs;
    } // check if all visible images are loaded
    // and update container height if it's done


    function doAutoHeight() {
      var imgs = getImageArray.apply(null, getVisibleSlideRange());
      raf(function () {
        imgsLoadedCheck(imgs, updateInnerWrapperHeight);
      });
    }

    function imgsLoadedCheck(imgs, cb) {
      // directly execute callback function if all images are complete
      if (imgsComplete) {
        return cb();
      } // check selected image classes otherwise


      imgs.forEach(function (img, index) {
        if (hasClass$1(img, imgCompleteClass)) {
          imgs.splice(index, 1);
        }
      }); // execute callback function if selected images are all complete

      if (!imgs.length) {
        return cb();
      } // otherwise execute this functiona again


      raf(function () {
        imgsLoadedCheck(imgs, cb);
      });
    }

    function additionalUpdates() {
      doLazyLoad();
      updateSlideStatus();
      updateLiveRegion();
      updateControlsStatus();
      updateNavStatus();
    }

    function update_carousel_transition_duration() {
      if (carousel && autoHeight) {
        middleWrapper.style[TRANSITIONDURATION] = speed / 1000 + 's';
      }
    }

    function getMaxSlideHeight(slideStart, slideRange) {
      var heights = [];

      for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
        heights.push(slideItems[i].offsetHeight);
      }

      return Math.max.apply(null, heights);
    } // update inner wrapper height
    // 1. get the max-height of the visible slides
    // 2. set transitionDuration to speed
    // 3. update inner wrapper height to max-height
    // 4. set transitionDuration to 0s after transition done


    function updateInnerWrapperHeight() {
      var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount),
          wp = middleWrapper ? middleWrapper : innerWrapper;

      if (wp.style.height !== maxHeight) {
        wp.style.height = maxHeight + 'px';
      }
    } // get the distance from the top edge of the first slide to each slide
    // (init) => slidePositions


    function setSlidePositions() {
      slidePositions = [0];
      var attr = horizontal ? 'left' : 'top',
          attr2 = horizontal ? 'right' : 'bottom',
          base = slideItems[0].getBoundingClientRect()[attr];
      forEach(slideItems, function (item, i) {
        // skip the first slide
        if (i) {
          slidePositions.push(item.getBoundingClientRect()[attr] - base);
        } // add the end edge


        if (i === slideCountNew - 1) {
          slidePositions.push(item.getBoundingClientRect()[attr2] - base);
        }
      });
    } // update slide


    function updateSlideStatus() {
      var range = getVisibleSlideRange(),
          start = range[0],
          end = range[1];
      forEach(slideItems, function (item, i) {
        // show slides
        if (i >= start && i <= end) {
          if (hasAttr(item, 'aria-hidden')) {
            removeAttrs(item, ['aria-hidden', 'tabindex']);
            addClass$1(item, slideActiveClass);
          } // hide slides

        } else {
          if (!hasAttr(item, 'aria-hidden')) {
            setAttrs(item, {
              'aria-hidden': 'true',
              'tabindex': '-1'
            });
            removeClass$1(item, slideActiveClass);
          }
        }
      });
    } // gallery: update slide position


    function updateGallerySlidePositions() {
      var l = index + Math.min(slideCount, items);

      for (var i = slideCountNew; i--;) {
        var item = slideItems[i];

        if (i >= index && i < l) {
          // add transitions to visible slides when adjusting their positions
          addClass$1(item, 'tns-moving');
          item.style.left = (i - index) * 100 / items + '%';
          addClass$1(item, animateIn);
          removeClass$1(item, animateNormal);
        } else if (item.style.left) {
          item.style.left = '';
          addClass$1(item, animateNormal);
          removeClass$1(item, animateIn);
        } // remove outlet animation


        removeClass$1(item, animateOut);
      } // removing '.tns-moving'


      setTimeout(function () {
        forEach(slideItems, function (el) {
          removeClass$1(el, 'tns-moving');
        });
      }, 300);
    } // set tabindex on Nav


    function updateNavStatus() {
      // get current nav
      if (nav) {
        navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
        navClicked = -1;

        if (navCurrentIndex !== navCurrentIndexCached) {
          var navPrev = navItems[navCurrentIndexCached],
              navCurrent = navItems[navCurrentIndex];
          setAttrs(navPrev, {
            'tabindex': '-1',
            'aria-label': navStr + (navCurrentIndexCached + 1)
          });
          removeClass$1(navPrev, navActiveClass);
          setAttrs(navCurrent, {
            'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent
          });
          removeAttrs(navCurrent, 'tabindex');
          addClass$1(navCurrent, navActiveClass);
          navCurrentIndexCached = navCurrentIndex;
        }
      }
    }

    function getLowerCaseNodeName(el) {
      return el.nodeName.toLowerCase();
    }

    function isButton(el) {
      return getLowerCaseNodeName(el) === 'button';
    }

    function isAriaDisabled(el) {
      return el.getAttribute('aria-disabled') === 'true';
    }

    function disEnableElement(isButton, el, val) {
      if (isButton) {
        el.disabled = val;
      } else {
        el.setAttribute('aria-disabled', val.toString());
      }
    } // set 'disabled' to true on controls when reach the edges


    function updateControlsStatus() {
      if (!controls || rewind || loop) {
        return;
      }

      var prevDisabled = prevIsButton ? prevButton.disabled : isAriaDisabled(prevButton),
          nextDisabled = nextIsButton ? nextButton.disabled : isAriaDisabled(nextButton),
          disablePrev = index <= indexMin ? true : false,
          disableNext = !rewind && index >= indexMax ? true : false;

      if (disablePrev && !prevDisabled) {
        disEnableElement(prevIsButton, prevButton, true);
      }

      if (!disablePrev && prevDisabled) {
        disEnableElement(prevIsButton, prevButton, false);
      }

      if (disableNext && !nextDisabled) {
        disEnableElement(nextIsButton, nextButton, true);
      }

      if (!disableNext && nextDisabled) {
        disEnableElement(nextIsButton, nextButton, false);
      }
    } // set duration


    function resetDuration(el, str) {
      if (TRANSITIONDURATION) {
        el.style[TRANSITIONDURATION] = str;
      }
    }

    function getSliderWidth() {
      return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
    }

    function getCenterGap(num) {
      if (num == null) {
        num = index;
      }

      var gap = edgePadding ? gutter : 0;
      return autoWidth ? (viewport - gap - (slidePositions[num + 1] - slidePositions[num] - gutter)) / 2 : fixedWidth ? (viewport - fixedWidth) / 2 : (items - 1) / 2;
    }

    function getRightBoundary() {
      var gap = edgePadding ? gutter : 0,
          result = viewport + gap - getSliderWidth();

      if (center && !loop) {
        result = fixedWidth ? -(fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() : getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
      }

      if (result > 0) {
        result = 0;
      }

      return result;
    }

    function getContainerTransformValue(num) {
      if (num == null) {
        num = index;
      }

      var val;

      if (horizontal && !autoWidth) {
        if (fixedWidth) {
          val = -(fixedWidth + gutter) * num;

          if (center) {
            val += getCenterGap();
          }
        } else {
          var denominator = TRANSFORM ? slideCountNew : items;

          if (center) {
            num -= getCenterGap();
          }

          val = -num * 100 / denominator;
        }
      } else {
        val = -slidePositions[num];

        if (center && autoWidth) {
          val += getCenterGap();
        }
      }

      if (hasRightDeadZone) {
        val = Math.max(val, rightBoundary);
      }

      val += horizontal && !autoWidth && !fixedWidth ? '%' : 'px';
      return val;
    }

    function doContainerTransformSilent(val) {
      resetDuration(container, '0s');
      doContainerTransform(val);
    }

    function doContainerTransform(val) {
      if (val == null) {
        val = getContainerTransformValue();
      }

      container.style[transformAttr] = transformPrefix + val + transformPostfix;
    }

    function animateSlide(number, classOut, classIn, isOut) {
      var l = number + items;

      if (!loop) {
        l = Math.min(l, slideCountNew);
      }

      for (var i = number; i < l; i++) {
        var item = slideItems[i]; // set item positions

        if (!isOut) {
          item.style.left = (i - index) * 100 / items + '%';
        }

        if (animateDelay && TRANSITIONDELAY) {
          item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + 's';
        }

        removeClass$1(item, classOut);
        addClass$1(item, classIn);

        if (isOut) {
          slideItemsOut.push(item);
        }
      }
    } // make transfer after click/drag:
    // 1. change 'transform' property for mordern browsers
    // 2. change 'left' property for legacy browsers


    var transformCore = function () {
      return carousel ? function () {
        resetDuration(container, '');

        if (TRANSITIONDURATION || !speed) {
          // for morden browsers with non-zero duration or 
          // zero duration for all browsers
          doContainerTransform(); // run fallback function manually 
          // when duration is 0 / container is hidden

          if (!speed || !isVisible(container)) {
            onTransitionEnd();
          }
        } else {
          // for old browser with non-zero duration
          jsTransform(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
        }

        if (!horizontal) {
          updateContentWrapperHeight();
        }
      } : function () {
        slideItemsOut = [];
        var eve = {};
        eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
        removeEvents(slideItems[indexCached], eve);
        addEvents(slideItems[index], eve);
        animateSlide(indexCached, animateIn, animateOut, true);
        animateSlide(index, animateNormal, animateIn); // run fallback function manually 
        // when transition or animation not supported / duration is 0

        if (!TRANSITIONEND || !ANIMATIONEND || !speed || !isVisible(container)) {
          onTransitionEnd();
        }
      };
    }();

    function render(e, sliderMoved) {
      if (updateIndexBeforeTransform) {
        updateIndex();
      } // render when slider was moved (touch or drag) even though index may not change


      if (index !== indexCached || sliderMoved) {
        // events
        events.emit('indexChanged', info());
        events.emit('transitionStart', info());

        if (autoHeight) {
          doAutoHeight();
        } // pause autoplay when click or keydown from user


        if (animating && e && ['click', 'keydown'].indexOf(e.type) >= 0) {
          stopAutoplay();
        }

        running = true;
        transformCore();
      }
    }
    /*
     * Transfer prefixed properties to the same format
     * CSS: -Webkit-Transform => webkittransform
     * JS: WebkitTransform => webkittransform
     * @param {string} str - property
     *
     */


    function strTrans(str) {
      return str.toLowerCase().replace(/-/g, '');
    } // AFTER TRANSFORM
    // Things need to be done after a transfer:
    // 1. check index
    // 2. add classes to visible slide
    // 3. disable controls buttons when reach the first/last slide in non-loop slider
    // 4. update nav status
    // 5. lazyload images
    // 6. update container height


    function onTransitionEnd(event) {
      // check running on gallery mode
      // make sure trantionend/animationend events run only once
      if (carousel || running) {
        events.emit('transitionEnd', info(event));

        if (!carousel && slideItemsOut.length > 0) {
          for (var i = 0; i < slideItemsOut.length; i++) {
            var item = slideItemsOut[i]; // set item positions

            item.style.left = '';

            if (ANIMATIONDELAY && TRANSITIONDELAY) {
              item.style[ANIMATIONDELAY] = '';
              item.style[TRANSITIONDELAY] = '';
            }

            removeClass$1(item, animateOut);
            addClass$1(item, animateNormal);
          }
        }
        /* update slides, nav, controls after checking ...
         * => legacy browsers who don't support 'event' 
         *    have to check event first, otherwise event.target will cause an error 
         * => or 'gallery' mode: 
         *   + event target is slide item
         * => or 'carousel' mode: 
         *   + event target is container, 
         *   + event.property is the same with transform attribute
         */


        if (!event || !carousel && event.target.parentNode === container || event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {
          if (!updateIndexBeforeTransform) {
            var indexTem = index;
            updateIndex();

            if (index !== indexTem) {
              events.emit('indexChanged', info());
              doContainerTransformSilent();
            }
          }

          if (nested === 'inner') {
            events.emit('innerLoaded', info());
          }

          running = false;
          indexCached = index;
        }
      }
    } // # ACTIONS


    function goTo(targetIndex, e) {
      if (freeze) {
        return;
      } // prev slideBy


      if (targetIndex === 'prev') {
        onControlsClick(e, -1); // next slideBy
      } else if (targetIndex === 'next') {
        onControlsClick(e, 1); // go to exact slide
      } else {
        if (running) {
          if (preventActionWhenRunning) {
            return;
          } else {
            onTransitionEnd();
          }
        }

        var absIndex = getAbsIndex(),
            indexGap = 0;

        if (targetIndex === 'first') {
          indexGap = -absIndex;
        } else if (targetIndex === 'last') {
          indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
        } else {
          if (typeof targetIndex !== 'number') {
            targetIndex = parseInt(targetIndex);
          }

          if (!isNaN(targetIndex)) {
            // from directly called goTo function
            if (!e) {
              targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex));
            }

            indexGap = targetIndex - absIndex;
          }
        } // gallery: make sure new page won't overlap with current page


        if (!carousel && indexGap && Math.abs(indexGap) < items) {
          var factor = indexGap > 0 ? 1 : -1;
          indexGap += index + indexGap - slideCount >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
        }

        index += indexGap; // make sure index is in range

        if (carousel && loop) {
          if (index < indexMin) {
            index += slideCount;
          }

          if (index > indexMax) {
            index -= slideCount;
          }
        } // if index is changed, start rendering


        if (getAbsIndex(index) !== getAbsIndex(indexCached)) {
          render(e);
        }
      }
    } // on controls click


    function onControlsClick(e, dir) {
      if (running) {
        if (preventActionWhenRunning) {
          return;
        } else {
          onTransitionEnd();
        }
      }

      var passEventObject;

      if (!dir) {
        e = getEvent(e);
        var target = getTarget(e);

        while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) {
          target = target.parentNode;
        }

        var targetIn = [prevButton, nextButton].indexOf(target);

        if (targetIn >= 0) {
          passEventObject = true;
          dir = targetIn === 0 ? -1 : 1;
        }
      }

      if (rewind) {
        if (index === indexMin && dir === -1) {
          goTo('last', e);
          return;
        } else if (index === indexMax && dir === 1) {
          goTo('first', e);
          return;
        }
      }

      if (dir) {
        index += slideBy * dir;

        if (autoWidth) {
          index = Math.floor(index);
        } // pass e when click control buttons or keydown


        render(passEventObject || e && e.type === 'keydown' ? e : null);
      }
    } // on nav click


    function onNavClick(e) {
      if (running) {
        if (preventActionWhenRunning) {
          return;
        } else {
          onTransitionEnd();
        }
      }

      e = getEvent(e);
      var target = getTarget(e),
          navIndex; // find the clicked nav item

      while (target !== navContainer && !hasAttr(target, 'data-nav')) {
        target = target.parentNode;
      }

      if (hasAttr(target, 'data-nav')) {
        var navIndex = navClicked = Number(getAttr(target, 'data-nav')),
            targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items,
            targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
        goTo(targetIndex, e);

        if (navCurrentIndex === navIndex) {
          if (animating) {
            stopAutoplay();
          }

          navClicked = -1; // reset navClicked
        }
      }
    } // autoplay functions


    function setAutoplayTimer() {
      autoplayTimer = setInterval(function () {
        onControlsClick(null, autoplayDirection);
      }, autoplayTimeout);
      animating = true;
    }

    function stopAutoplayTimer() {
      clearInterval(autoplayTimer);
      animating = false;
    }

    function updateAutoplayButton(action, txt) {
      setAttrs(autoplayButton, {
        'data-action': action
      });
      autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
    }

    function startAutoplay() {
      setAutoplayTimer();

      if (autoplayButton) {
        updateAutoplayButton('stop', autoplayText[1]);
      }
    }

    function stopAutoplay() {
      stopAutoplayTimer();

      if (autoplayButton) {
        updateAutoplayButton('start', autoplayText[0]);
      }
    } // programaitcally play/pause the slider


    function play() {
      if (autoplay && !animating) {
        startAutoplay();
        autoplayUserPaused = false;
      }
    }

    function pause() {
      if (animating) {
        stopAutoplay();
        autoplayUserPaused = true;
      }
    }

    function toggleAutoplay() {
      if (animating) {
        stopAutoplay();
        autoplayUserPaused = true;
      } else {
        startAutoplay();
        autoplayUserPaused = false;
      }
    }

    function onVisibilityChange() {
      if (doc.hidden) {
        if (animating) {
          stopAutoplayTimer();
          autoplayVisibilityPaused = true;
        }
      } else if (autoplayVisibilityPaused) {
        setAutoplayTimer();
        autoplayVisibilityPaused = false;
      }
    }

    function mouseoverPause() {
      if (animating) {
        stopAutoplayTimer();
        autoplayHoverPaused = true;
      }
    }

    function mouseoutRestart() {
      if (autoplayHoverPaused) {
        setAutoplayTimer();
        autoplayHoverPaused = false;
      }
    } // keydown events on document 


    function onDocumentKeydown(e) {
      e = getEvent(e);
      var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

      if (keyIndex >= 0) {
        onControlsClick(e, keyIndex === 0 ? -1 : 1);
      }
    } // on key control


    function onControlsKeydown(e) {
      e = getEvent(e);
      var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

      if (keyIndex >= 0) {
        if (keyIndex === 0) {
          if (!prevButton.disabled) {
            onControlsClick(e, -1);
          }
        } else if (!nextButton.disabled) {
          onControlsClick(e, 1);
        }
      }
    } // set focus


    function setFocus(el) {
      el.focus();
    } // on key nav


    function onNavKeydown(e) {
      e = getEvent(e);
      var curElement = doc.activeElement;

      if (!hasAttr(curElement, 'data-nav')) {
        return;
      } // var code = e.keyCode,


      var keyIndex = [KEYS.LEFT, KEYS.RIGHT, KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode),
          navIndex = Number(getAttr(curElement, 'data-nav'));

      if (keyIndex >= 0) {
        if (keyIndex === 0) {
          if (navIndex > 0) {
            setFocus(navItems[navIndex - 1]);
          }
        } else if (keyIndex === 1) {
          if (navIndex < pages - 1) {
            setFocus(navItems[navIndex + 1]);
          }
        } else {
          navClicked = navIndex;
          goTo(navIndex, e);
        }
      }
    }

    function getEvent(e) {
      e = e || win.event;
      return isTouchEvent(e) ? e.changedTouches[0] : e;
    }

    function getTarget(e) {
      return e.target || win.event.srcElement;
    }

    function isTouchEvent(e) {
      return e.type.indexOf('touch') >= 0;
    }

    function preventDefaultBehavior(e) {
      e.preventDefault ? e.preventDefault() : e.returnValue = false;
    }

    function getMoveDirectionExpected() {
      return getTouchDirection(toDegree(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
    }

    function onPanStart(e) {
      if (running) {
        if (preventActionWhenRunning) {
          return;
        } else {
          onTransitionEnd();
        }
      }

      if (autoplay && animating) {
        stopAutoplayTimer();
      }

      panStart = true;

      if (rafIndex) {
        caf(rafIndex);
        rafIndex = null;
      }

      var $ = getEvent(e);
      events.emit(isTouchEvent(e) ? 'touchStart' : 'dragStart', info(e));

      if (!isTouchEvent(e) && ['img', 'a'].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
        preventDefaultBehavior(e);
      }

      lastPosition.x = initPosition.x = $.clientX;
      lastPosition.y = initPosition.y = $.clientY;

      if (carousel) {
        translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ''));
        resetDuration(container, '0s');
      }
    }

    function onPanMove(e) {
      if (panStart) {
        var $ = getEvent(e);
        lastPosition.x = $.clientX;
        lastPosition.y = $.clientY;

        if (carousel) {
          if (!rafIndex) {
            rafIndex = raf(function () {
              panUpdate(e);
            });
          }
        } else {
          if (moveDirectionExpected === '?') {
            moveDirectionExpected = getMoveDirectionExpected();
          }

          if (moveDirectionExpected) {
            preventScroll = true;
          }
        }

        if (preventScroll) {
          e.preventDefault();
        }
      }
    }

    function panUpdate(e) {
      if (!moveDirectionExpected) {
        panStart = false;
        return;
      }

      caf(rafIndex);

      if (panStart) {
        rafIndex = raf(function () {
          panUpdate(e);
        });
      }

      if (moveDirectionExpected === '?') {
        moveDirectionExpected = getMoveDirectionExpected();
      }

      if (moveDirectionExpected) {
        if (!preventScroll && isTouchEvent(e)) {
          preventScroll = true;
        }

        try {
          if (e.type) {
            events.emit(isTouchEvent(e) ? 'touchMove' : 'dragMove', info(e));
          }
        } catch (err) {}

        var x = translateInit,
            dist = getDist(lastPosition, initPosition);

        if (!horizontal || fixedWidth || autoWidth) {
          x += dist;
          x += 'px';
        } else {
          var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew) : dist * 100 / (viewport + gutter);
          x += percentageX;
          x += '%';
        }

        container.style[transformAttr] = transformPrefix + x + transformPostfix;
      }
    }

    function onPanEnd(e) {
      if (panStart) {
        if (rafIndex) {
          caf(rafIndex);
          rafIndex = null;
        }

        if (carousel) {
          resetDuration(container, '');
        }

        panStart = false;
        var $ = getEvent(e);
        lastPosition.x = $.clientX;
        lastPosition.y = $.clientY;
        var dist = getDist(lastPosition, initPosition);

        if (Math.abs(dist)) {
          // drag vs click
          if (!isTouchEvent(e)) {
            // prevent "click"
            var target = getTarget(e);
            addEvents(target, {
              'click': function preventClick(e) {
                preventDefaultBehavior(e);
                removeEvents(target, {
                  'click': preventClick
                });
              }
            });
          }

          if (carousel) {
            rafIndex = raf(function () {
              if (horizontal && !autoWidth) {
                var indexMoved = -dist * items / (viewport + gutter);
                indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
                index += indexMoved;
              } else {
                var moved = -(translateInit + dist);

                if (moved <= 0) {
                  index = indexMin;
                } else if (moved >= slidePositions[slideCountNew - 1]) {
                  index = indexMax;
                } else {
                  var i = 0;

                  while (i < slideCountNew && moved >= slidePositions[i]) {
                    index = i;

                    if (moved > slidePositions[i] && dist < 0) {
                      index += 1;
                    }

                    i++;
                  }
                }
              }

              render(e, dist);
              events.emit(isTouchEvent(e) ? 'touchEnd' : 'dragEnd', info(e));
            });
          } else {
            if (moveDirectionExpected) {
              onControlsClick(e, dist > 0 ? -1 : 1);
            }
          }
        }
      } // reset


      if (options.preventScrollOnTouch === 'auto') {
        preventScroll = false;
      }

      if (swipeAngle) {
        moveDirectionExpected = '?';
      }

      if (autoplay && !animating) {
        setAutoplayTimer();
      }
    } // === RESIZE FUNCTIONS === //
    // (slidePositions, index, items) => vertical_conentWrapper.height


    function updateContentWrapperHeight() {
      var wp = middleWrapper ? middleWrapper : innerWrapper;
      wp.style.height = slidePositions[index + items] - slidePositions[index] + 'px';
    }

    function getPages() {
      var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
      return Math.min(Math.ceil(rough), slideCount);
    }
    /*
     * 1. update visible nav items list
     * 2. add "hidden" attributes to previous visible nav items
     * 3. remove "hidden" attrubutes to new visible nav items
     */


    function updateNavVisibility() {
      if (!nav || navAsThumbnails) {
        return;
      }

      if (pages !== pagesCached) {
        var min = pagesCached,
            max = pages,
            fn = showElement;

        if (pagesCached > pages) {
          min = pages;
          max = pagesCached;
          fn = hideElement;
        }

        while (min < max) {
          fn(navItems[min]);
          min++;
        } // cache pages


        pagesCached = pages;
      }
    }

    function info(e) {
      return {
        container: container,
        slideItems: slideItems,
        navContainer: navContainer,
        navItems: navItems,
        controlsContainer: controlsContainer,
        hasControls: hasControls,
        prevButton: prevButton,
        nextButton: nextButton,
        items: items,
        slideBy: slideBy,
        cloneCount: cloneCount,
        slideCount: slideCount,
        slideCountNew: slideCountNew,
        index: index,
        indexCached: indexCached,
        displayIndex: getCurrentSlide(),
        navCurrentIndex: navCurrentIndex,
        navCurrentIndexCached: navCurrentIndexCached,
        pages: pages,
        pagesCached: pagesCached,
        sheet: sheet,
        isOn: isOn,
        event: e || {}
      };
    }

    return {
      version: '2.9.1',
      getInfo: info,
      events: events,
      goTo: goTo,
      play: play,
      pause: pause,
      isOn: isOn,
      updateSliderHeight: updateInnerWrapperHeight,
      refresh: initSliderTransform,
      destroy: destroy,
      rebuild: function () {
        return tns(extend(options, optionsElements));
      }
    };
  };

  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }
  /* Tronque le texte des cards à une hauteur max (fonctionne avec le max-height appliqué en CSS) */


  (function () {
    var texts = document.querySelectorAll(".sba-video__description, .sba-home-main__inner__parallax-block__content__text, .sba-services-cards__card__content__text, .sba-services-cards__card__thumbnail > span");

    if (!texts) {
      return;
    }

    var ellipsisText = function ellipsisText(e, etc) {
      var wordArray = e.innerHTML.split(" ");

      while (e.scrollHeight > e.offsetHeight) {
        wordArray.pop();
        e.innerHTML = wordArray.join(" ") + (etc || "...");
      }
    };

    texts.forEach(function (elem) {
      ellipsisText(elem);
    });
  })();

  (function () {
    var container = '.sba-news-slider__container > div';
    var newsSlider = document.querySelector(container);
    console.log(document.querySelector('.sba-news-slider__controls'));
    console.log(document.querySelector('.sba-news-slider__nav'));
    if (!newsSlider) return;
    var slider = tns({
      loop: true,
      container: container,
      controlsContainer: '.sba-news-slider__controls',
      items: 1,
      speed: 400,
      mouseDrag: true
    });
  })();

  (function () {
    var sliders = document.querySelectorAll('.sba-accordion__panel__carousel');
    if (!sliders) return;
    sliders.forEach(function (element, index) {
      var container = "#sba-carousel__main-" + index;
      var nav = "#sba-carousel__thumbnails-" + index;
      var controls = "#sba-carousel__controls-" + index;
      var slider = tns({
        loop: true,
        container: container,
        items: 1,
        controlsContainer: controls,
        navContainer: nav,
        navAsThumbnails: true,
        autoplay: false,
        speed: 400,
        center: true,
        mouseDrag: true
      });
      var thumbnailsSlider = tns({
        loop: false,
        fixedWidth: 75,
        container: nav,
        mouseDrag: true,
        nav: false,
        controls: false,
        gutter: 10
      });
    });
  })();
  /**
   * Video accueil
   * ===
   */

  /**
   * Video
   */


  (function () {
    var videoPlayableInline = /iPhone|iPad|iPod/i.test(navigator.userAgent) && !matchMedia('(-webkit-video-playable-inline)').matches;
    var videoLoop = 0;
    var videoElem = document.querySelector('video'); //var videoBtn = document.querySelector('.Hero-control');

    if (!videoElem) {
      return;
    } // Si ce n'est pas iOS ou que c'est iOS qui supporte de lire les vidéos dans le navigateur


    if (!videoPlayableInline) {
      videoElem.style.cursor = "pointer"; // Arete la vidéo après 2 boucles.

      videoElem.addEventListener('seeked', function () {
        if (videoLoop < 2 && this.currentTime === 0) {
          videoLoop++;
        } else {
          this.pause(); //videoBtn.classList.remove('js-playing');
          //videoBtn.style.opacity = 1;
        }
      }, true);
      var promise = videoElem.play();
      videoElem.addEventListener('play', function () {
        //videoBtn.style.opacity = 0;

      }); //videoBtn.addEventListener('click', function() { videoElem.click(); });

      videoElem.addEventListener('click', function () {
        if (videoElem.paused) {
          videoElem.play(); //videoBtn.classList.remove('js-playing');
        } else {
          videoElem.pause(); //videoBtn.classList.add('js-playing');
        }
        /*
        videoBtn.style.opacity = 0;
        videoBtn.style.animation = 'fade .6s linear forwards';
        videoBtn.addEventListener('animationend', function(){
            this.style.animation = '';
            if (this.classList.contains('js-playing')) {
                this.classList.remove('js-playing');
            } else {
                this.classList.add('js-playing');
            }
        });
        */


        videoLoop = 0;
      }, false);
    } else {
      videoElem.classList.add('u-hidden'); //videoBtn.classList.add('u-hidden');
    }
  })();
  /**
   * Menu hamburger
   * ===
   */


  (function () {
    var htmlElem = document.documentElement;
    var headerElem = document.querySelector('.sba-header');
    var burgerElem = document.querySelector('.sba-header__burger');
    var dropElem = document.querySelector('.sba-header__content');

    if (!dropElem.style.top) {
      dropElem.style.top = headerElem.offsetHeight + 'px';
    }

    burgerElem.addEventListener('click', function (event) {
      event.preventDefault;

      if (!htmlElem.classList.contains('js-nav')) {
        htmlElem.classList.add('js-nav');
        freezeDocumentScroll(true);

        if (!window.scrollY && !headerElem.classList.contains('js-sticky')) {
          headerElem.classList.add('js-sticky');
        }
      } else {
        htmlElem.classList.remove('js-nav');
        freezeDocumentScroll(false);

        if (!window.scrollY && headerElem.classList.contains('js-sticky')) {
          headerElem.classList.remove('js-sticky');
        }
      }
    });

    function handleDropElemAnimation() {
      if (burgerElem.offsetParent === null) {
        htmlElem.classList.remove('js-nav--animate');
      } else {
        htmlElem.classList.add('js-nav--animate');
      }
    }

    handleDropElemAnimation();
    window.addEventListener('resize', handleDropElemAnimation);
  })();
  /**
   * Déplace l'élément "Corpo bar" dans la navigation du header pendant
   * la vue responsive.
   *
   * ToDo: remplacer `u-hidden` par autre chose pour garder la hauteur intacte
   *       pour la gestion du header.
   */


  (function () {
    var headerElem = document.querySelector('.sba-header__navigation');
    var corpoNavElem = document.querySelector('.sba-corpobar__navigation-list');

    if (!corpoNavElem) {
      return;
    }

    var _corpoNavElem = corpoNavElem.cloneNode(true);

    _corpoNavElem.className = _corpoNavElem.className.replace(/sba-corpobar/gi, 'sba-header');

    _corpoNavElem.querySelectorAll('[class]').forEach(function (value) {
      return value.className = value.className.replace(/sba-corpobar/gi, 'sba-header');
    });

    function handleCorpoNavElem() {
      if (window.matchMedia('(max-width: 1152px)').matches) {
        corpoNavElem.classList.add('u-hidden');
        corpoNavElem.setAttribute('aria-hidden', 'true');
        headerElem.insertBefore(_corpoNavElem, headerElem.firstElementChild);
      } else {
        corpoNavElem.removeAttribute('aria-hidden');
        corpoNavElem.classList.remove('u-hidden');

        if (_corpoNavElem.parentNode) {
          headerElem.removeChild(_corpoNavElem);
        }
      }
    }

    handleCorpoNavElem();
    window.addEventListener('resize', handleCorpoNavElem);
  })();

  (function () {
    var corpoNavLinkElem = document.querySelectorAll('.sba-corpobar__navigation-link:not(:last-child)');

    if (!corpoNavLinkElem.length) {
      return;
    }

    corpoNavLinkElem.forEach(function (elem) {
      elem.addEventListener('mouseenter', function (event) {
        this.parentNode.classList.add('js-hover');
      });
      elem.parentNode.addEventListener('mouseleave', function (event) {
        this.classList.remove('js-hover');
      });
    });
  })();
  /**
   * Entête avec ou sans media
   * ===
   */


  (function () {
    var heroElem = document.querySelector('.sba-hero');

    if (!heroElem) {
      return;
    }

    var heroMarginBottom = 90;
    var isMedia = heroElem.classList.contains('sba-hero--media') || heroElem.classList.contains('sba-hero--media-cover');
    var isCover = heroElem.classList.contains('sba-hero--media-cover');
    var htmlElem = document.documentElement;
    var corpobarElem = document.querySelector('.sba-corpobar');
    var headerElem = document.querySelector('.sba-header');
    var breadcrumbElem = document.querySelector('.sba-breadcrumb');
    var heroInnerElem = document.querySelector('.sba-hero__inner');

    function getPaddingTop() {
      var paddingTop = headerElem.offsetHeight;

      if (breadcrumbElem) {
        paddingTop += breadcrumbElem.offsetHeight;
      }

      return paddingTop;
    }

    function setHeroInnerElem() {
      var paddingTop = getPaddingTop();
      var vHeight = htmlElem.clientHeight;
      heroInnerElem.style.paddingTop = paddingTop + 'px';
      heroInnerElem.parentNode.style.marginTop = '-' + paddingTop + 'px';

      if (!isMedia) {
        return;
      }

      var t = vHeight - corpobarElem.offsetHeight - (!isCover ? heroMarginBottom : 0);
      heroInnerElem.style.minHeight = t + 'px';
    }

    setHeroInnerElem();
    window.addEventListener('resize', setHeroInnerElem);
  })();
  /**
   * Entête sticky
   * ===
   *
   *
   */


  (function () {
    var lastTop = null;
    var sbaNews = document.querySelector('.sba-news-slider');
    var headerElem = document.querySelector('.sba-header');
    var breadcrumbElem = document.querySelector('.sba-breadcrumb');
    var heroElem = document.querySelector('.sba-hero');

    if (!heroElem && !sbaNews) {
      headerElem.classList.add('js-nohero');
      return;
    }

    function checkStickyPosition() {
      var rect = headerElem.getBoundingClientRect();

      if (rect.top <= 0.5 && (lastTop >= 0.5 || lastTop == null)) {
        headerElem.classList.add('js-sticky');
        if (breadcrumbElem) breadcrumbElem.classList.add('js-sticky');
        console.log('sticky');
      }

      var eltScrollY = this.scrollY || this.pageYOffset;

      if (headerElem.classList.contains('js-sticky') && (rect.top > 0 && lastTop > 1 && eltScrollY < headerElem.offsetHeight || eltScrollY <= 0)) {
        headerElem.classList.remove('js-sticky');
        if (breadcrumbElem) breadcrumbElem.classList.remove('js-sticky');
        console.log('reset');
        lastTop = null;
        return;
      }

      lastTop = rect.top;
    }

    checkStickyPosition.bind(window);
    window.addEventListener('load', checkStickyPosition);
    window.addEventListener('scroll', checkStickyPosition);
  })();
  /**
   * Cluster navigation scrollSpy + scrollTo + Lavalamp
   * ===
   */


  (function () {
    if (!document.querySelector('.sba-cluster')) {
      return;
    }

    var stickyElemsHeight = 164;
    var navHighliterLocked = false;
    var navHighliterTimeout;
    var navElem = document.querySelector('.sba-cluster__nav');
    var navItemElems = document.querySelectorAll('.sba-cluster__nav-item');
    var domainElems = document.querySelectorAll('.sba-cluster__item');
    var ghostElem = document.createElement('LI');
    ghostElem.classList.add('sba-cluster__nav-item--highliter');
    ghostElem.setAttribute('aria-hidden', true);

    function getNavItemInfos() {
      var infos = {};
      infos.parent = navElem.offsetWidth - 36;
      infos.items = [];
      navItemElems.forEach(function (elem) {
        var rect = elem.firstElementChild.getBoundingClientRect();
        var obj = {};
        obj.left = elem.offsetLeft + 18;
        obj.width = rect.width;
        obj.scale = obj.width / infos.parent;
        infos.items.push(obj);
      });
      return infos;
    }

    function getDomainLimits() {
      var positions = [];
      domainElems.forEach(function (elem) {
        var rect = elem.getBoundingClientRect();
        var pos = {
          t: rect.top + window.scrollY,
          b: rect.bottom + window.scrollY
        };
        positions.push(pos);
      });
      return positions;
    }

    function getCurrentDomainIndex() {
      var limits = getDomainLimits();
      var y = window.scrollY + stickyElemsHeight;
      var i = 0;

      if (y < limits[0].t) {
        i = 0;
      } else if (y > limits[limits.length - 1].b) {
        i = limits.length - 1;
      } else {
        i = limits.findIndex(function (elem) {
          return elem.t < y && elem.b > y;
        });
      }

      return i;
    }

    function selectNavItem() {
      var index = getCurrentDomainIndex();

      if (navItemElems[index] && !navItemElems[index].classList.contains('js-selected')) {
        navItemElems.forEach(function (elem) {
          return elem.classList.remove('js-selected');
        });
        navItemElems[index].classList.add('js-selected');

        if (!navHighliterLocked) {
          highlightNavItem(index);
        }
      }
    }

    function highlightNavItem(index) {
      var infos = getNavItemInfos();
      var info;

      if (index === null) {
        index = getCurrentDomainIndex();
      }

      info = infos.items[index];
      ghostElem.style.transform = "translateX(".concat(info.left, "px) scaleX(").concat(info.scale, ")");
    }

    navElem.appendChild(ghostElem);
    navItemElems.forEach(function (elem) {
      var linkElem = elem.firstElementChild;
      linkElem.addEventListener('mouseenter', function (event) {
        window.clearTimeout(navHighliterTimeout);

        var index = _toConsumableArray(navItemElems).indexOf(this.parentNode);

        highlightNavItem(index);
      });
      linkElem.addEventListener('click', function (event) {
        event.preventDefault();
        navHighliterLocked = true;
        var dest = document.querySelector(this.hash);
        scrollPageTo(dest, 500, 198).then(function () {
          navHighliterLocked = false;
          highlightNavItem(null);
        });
      });
      elem.addEventListener('mouseleave', function () {
        navHighliterTimeout = window.setTimeout(function () {
          if (!navHighliterLocked) highlightNavItem(null);
        }, 1000);
      });
    });
    navElem.addEventListener('mouseleave', function () {
      if (!navHighliterLocked) highlightNavItem(null);
    });
    window.addEventListener('scroll', selectNavItem);
    window.addEventListener('resize', selectNavItem);
  })();
  /**
   * Ré-ordonne les listes des sous-categories
   * ===
   
  (function () {
      const DEFAULT_LIST_LIMIT = 8;

      const listElems = document.querySelectorAll('.sba-subsections__nav-list');

      if (!listElems.length) {
          return;
      }

      let ghostItemElem = document.createElement('LI');
      ghostItemElem.classList.add('sba-subsections__nav-item');
      ghostItemElem.classList.add('sba-subsections__nav-item--ghost');
      ghostItemElem.setAttribute('aria-hidden', 'true');

      listElems.forEach(elem => {
          const itemElems = elem.querySelectorAll('.sba-subsections__nav-item');
          const nb_itemElems = itemElems.length;

          if (nb_itemElems > (DEFAULT_LIST_LIMIT / 2)) {
              let nb_entries = DEFAULT_LIST_LIMIT;

              if (nb_itemElems > DEFAULT_LIST_LIMIT) {
                  nb_entries = nb_itemElems % 2 ? nb_itemElems + 1 : nb_itemElems;
              }

              let order = getFlexboxOrder([...Array(nb_entries).keys()], (nb_entries / 2));
              for (var i = 0; i < nb_entries; i++) {
                  if (itemElems[i]) {
                      itemElems[i].style.order = order[i];
                      continue;
                  }
                  let clone = ghostItemElem.cloneNode(true);
                  clone.style.order = order[i];

                  itemElems[0].parentNode.appendChild(clone);
              }
          }
      });
  })();*/

  /**
   * Ré-ordonne les listes des services
   * ===

  (function () {
      const DEFAULT_LIST_LIMIT = 8;

      const listElems = document.querySelectorAll('.sba-subsection__list');

      if (!listElems.length) {
          return;
      }

      let ghostItemElem = document.createElement('LI');
      ghostItemElem.classList.add('sba-subsection__item');
      ghostItemElem.classList.add('sba-subsection__item--ghost');
      ghostItemElem.setAttribute('aria-hidden', 'true');

      listElems.forEach(elem => {
          const itemElems = elem.querySelectorAll('.sba-subsection__item');
          const nb_itemElems = itemElems.length;

          if (nb_itemElems > (DEFAULT_LIST_LIMIT / 2)) {
              let nb_entries = DEFAULT_LIST_LIMIT;

              if (nb_itemElems > DEFAULT_LIST_LIMIT) {
                  nb_entries = nb_itemElems % 2 ? nb_itemElems + 1 : nb_itemElems;
              }

              let order = getFlexboxOrder([...Array(nb_entries).keys()], (nb_entries / 2));
              for (var i = 0; i < nb_entries; i++) {
                  if (itemElems[i]) {
                      itemElems[i].style.order = order[i];
                      continue;
                  }
                  let clone = ghostItemElem.cloneNode(true);
                  clone.style.order = order[i];

                  itemElems[0].parentNode.appendChild(clone);
              }
          }
      });
  })(); */

  /*
   * Bootstrap Cookie Alert by Wruczek
   * https://github.com/Wruczek/Bootstrap-Cookie-Alert
   * Released under MIT license
   */


  (function () {

    var body = document.querySelector("body");
    var cookieAlert = document.querySelector(".sba-cookies");
    var acceptCookies = document.querySelector(".sba-cookies__agree");
    var closeCookies = document.querySelector(".sba-cookies__close");

    if (!cookieAlert) {
      return;
    }

    cookieAlert.offsetHeight; // Force browser to trigger reflow (https://stackoverflow.com/a/39451131)
    // Show the alert if we cant find the "acceptCookies" cookie

    if (!getCookie("acceptCookies")) {
      body.classList.add("sba-enableCookie");
    } // When clicking on the agree button, create a 1 year
    // cookie to remember user's choice and close the banner


    acceptCookies.addEventListener("click", function (e) {
      e.preventDefault();
      setCookie("acceptCookies", true, 365);
      body.classList.remove("sba-enableCookie");
    }); // When clicking on the close button you close the banner

    closeCookies.addEventListener("click", function () {
      body.classList.remove("sba-enableCookie");
    }); // Cookie functions from w3schools

    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');

      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }

        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }

      return "";
    }
  })();
  /**
   * Navigation catégories / sous-categories
   * ===
   */


  (function () {
    var catElems = document.querySelectorAll('.sba-subsections');

    if (!catElems.length) {
      return;
    }

    catElems.forEach(function (elem) {
      var catElem = elem;
      var linkElems = elem.querySelectorAll('.sba-subsections__nav-link');
      var subcatElems = elem.querySelectorAll('.sba-subsections__item');
      var navElem = catElem.querySelector('.sba-subsections__nav');
      var navElemHeight = navElem.offsetHeight + 'px';
      catElem.style.height = navElemHeight;
      linkElems.forEach(function (elem) {
        elem.addEventListener('click', function (event) {
          event.preventDefault();
          var subcatElem = document.querySelector(this.hash);

          if (!subcatElem) {
            return;
          }

          catElem.style.height = subcatElem.offsetHeight + 'px';
          subcatElems.forEach(function (elem) {
            return elem.style.zIndex = 0;
          });
          subcatElem.style.zIndex = 1;
          catElem.style.transform = 'translateX(-100%)';
        });
      });

      if (subcatElems.length) {
        subcatElems.forEach(function (elem, index) {
          var backElem = elem.querySelector('.sba-subsection__name');
          backElem.addEventListener('click', function (event) {
            event.preventDefault();
            catElem.style.height = navElemHeight;
            catElem.style.transform = 'translateX(0%)';
          });

          if (!index) {
            return;
          }

          elem.style.transform = "translateX(-200%)";
        });
      }
    });
  })();
  /**
   * Popin vidéo
   * ===
   */


  (function () {
    var videoOpened;
    var htmlElem = document.documentElement;
    var videoElems = document.querySelectorAll('.sba-video');
    var popinElem = document.querySelector('.sba-popin');
    var popinBodyElem = document.querySelector('.sba-popin__body');

    if (!videoElems.length) {
      return;
    }

    popinElem.classList.add('sba-popin--video');
    videoElems.forEach(function (elem) {
      elem.addEventListener('click', showVideo);
    });
    popinElem.addEventListener('click', closePopin);

    function showVideo(event) {
      event.preventDefault();
      freezeDocumentScroll(true);
      htmlElem.classList.add('js-freeze');
      videoOpened = this;
      var popinIframeElem;
      var embed = this.querySelector('.sba-video__embed');

      if (!embed.classList.contains('sba-video__embed--popin')) {
        var iframe = embed.querySelector('iframe');
        var video = {
          width: iframe.width,
          ratio: iframe.height * 100 / iframe.width,
          embed: iframe.outerHTML
        };
        var tmpl = "\n            <div class=\"sba-embed\" style=\"width:".concat(video.width, "px\">\n                <div class=\"sba-embed__content\">").concat(video.embed, "</div>\n                <div class=\"sba-embed__ratio\" style=\"padding-bottom:").concat(video.ratio, "%\"></div>\n            </div>");
        embed.style.display = 'block';
        embed.classList.add('sba-video__embed--popin');
        embed.classList.add('u-hidden');
        embed.innerHTML = tmpl;
      }

      popinBodyElem.innerHTML = embed.innerHTML;
      popinIframeElem = popinBodyElem.querySelector('iframe');
      popinIframeElem.addEventListener('load', showPopin);

      function showPopin() {
        popinIframeElem.removeEventListener('load', showPopin);
        var imgElem = videoOpened.querySelector('.sba-video__image');
        var imgRect = imgElem.getBoundingClientRect();
        var popinRect = popinBodyElem.getBoundingClientRect();
        popinBodyElem.style.transform = 'translate(' + (imgRect.left - popinRect.left) + 'px, ' + (imgRect.top - popinRect.top) + 'px) scale(' + imgRect.width / popinRect.width + ', ' + imgRect.height / popinRect.height + ')';
        setTimeout(function () {
          imgElem.classList.add('js-hover');
          popinElem.classList.add('js-show');
          popinElem.classList.add('js-overlay');
          htmlElem.classList.add('js-popin');
          popinBodyElem.classList.add('js-move');
        }, 10);
        popinBodyElem.addEventListener('transitionend', _popinBodyTransitionListener);

        function _popinBodyTransitionListener(event) {
          this.removeEventListener('transitionend', _popinBodyTransitionListener);
          popinBodyElem.classList.remove('js-move');
          popinBodyElem.removeAttribute('style');
        }
      }
    }

    function closePopin(event) {
      event.preventDefault();
      var imgElem = videoOpened.querySelector('.sba-video__image');
      var imgRect = imgElem.getBoundingClientRect();
      var popinRect = popinBodyElem.getBoundingClientRect();
      popinBodyElem.classList.add('js-reduce');
      setTimeout(function () {
        popinBodyElem.style.transform = 'translate(' + (imgRect.left - popinRect.left) + 'px, ' + (imgRect.top - popinRect.top) + 'px) scale(' + imgRect.width / popinRect.width + ', ' + imgRect.height / popinRect.height + ')';
        popinElem.classList.remove('js-overlay');
        htmlElem.classList.remove('js-popin');
      }, 10);
      popinBodyElem.addEventListener('transitionend', _popinBodyTransitionObserver);

      function _popinBodyTransitionObserver(event) {
        this.removeEventListener('transitionend', _popinBodyTransitionObserver);
        popinElem.classList.remove('js-show');
        popinBodyElem.classList.remove('js-reduce');
        popinBodyElem.removeAttribute('style');
        imgElem.classList.remove('js-hover');
        videoOpened.querySelector('.sba-video__embed').innerHTML = popinBodyElem.innerHTML;
        popinBodyElem.innerHTML = "";
        freezeDocumentScroll(false);
        htmlElem.classList.remove('js-freeze');
      }
    }
  })();
  /**
   * Back to top
   * ===
   */


  (function () {
    var htmlElem = document.documentElement;
    var bttElem = document.querySelector('.sba-backtotop a');

    if (!bttElem) {
      return;
    }

    bttElem.addEventListener('click', function (event) {
      event.preventDefault();
      scrollPageTo(0, 500);
    });
  })();

  function freezeDocumentScroll(bool) {
    if (bool === true) {
      document.body.addEventListener('touchmove', _freeze);
    } else {
      document.body.removeEventListener('touchmove', _freeze);
    }

    function _freeze(event) {
      event.preventDefault();
    }
  }

  function scrollPageTo(to) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var margin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    //t = current time
    //b = start value
    //c = change in value
    //d = duration
    var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    return new Promise(function (resolve, reject) {
      var element = document.scrollingElement || document.documentElement;

      if (typeof to === 'string') {
        to = document.querySelector(to) || reject();
      }

      if (typeof to !== 'number') {
        to = to.getBoundingClientRect().top + element.scrollTop;
      }

      var start = element.scrollTop,
          change = to - start - margin,
          currentTime = 0,
          increment = 20;

      var animateScroll = function animateScroll() {
        currentTime += increment;
        var val = easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;

        if (currentTime < duration) {
          setTimeout(animateScroll, increment);
        } else {
          resolve();
        }
      };

      animateScroll();
    });
  }

}());
//# sourceMappingURL=script.js.map
