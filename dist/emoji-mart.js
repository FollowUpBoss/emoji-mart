(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["EmojiMart"] = factory(require("react"));
	else
		root["EmojiMart"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_94__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.frequently = exports.store = exports.emojiIndex = exports.Category = exports.Emoji = exports.Picker = undefined;

	var _components = __webpack_require__(1);

	Object.defineProperty(exports, 'Picker', {
	  enumerable: true,
	  get: function get() {
	    return _components.Picker;
	  }
	});
	Object.defineProperty(exports, 'Emoji', {
	  enumerable: true,
	  get: function get() {
	    return _components.Emoji;
	  }
	});
	Object.defineProperty(exports, 'Category', {
	  enumerable: true,
	  get: function get() {
	    return _components.Category;
	  }
	});

	var _emojiIndex = __webpack_require__(163);

	var _emojiIndex2 = _interopRequireDefault(_emojiIndex);

	var _store = __webpack_require__(133);

	var _store2 = _interopRequireDefault(_store);

	var _frequently = __webpack_require__(121);

	var _frequently2 = _interopRequireDefault(_frequently);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.emojiIndex = _emojiIndex2.default;
	exports.store = _store2.default;
	exports.frequently = _frequently2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _anchors = __webpack_require__(2);

	Object.defineProperty(exports, 'Anchors', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_anchors).default;
	  }
	});

	var _category = __webpack_require__(120);

	Object.defineProperty(exports, 'Category', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_category).default;
	  }
	});

	var _emoji = __webpack_require__(136);

	Object.defineProperty(exports, 'Emoji', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_emoji).default;
	  }
	});

	var _picker = __webpack_require__(158);

	Object.defineProperty(exports, 'Picker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_picker).default;
	  }
	});

	var _preview = __webpack_require__(161);

	Object.defineProperty(exports, 'Preview', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_preview).default;
	  }
	});

	var _search = __webpack_require__(162);

	Object.defineProperty(exports, 'Search', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_search).default;
	  }
	});

	var _skins = __webpack_require__(167);

	Object.defineProperty(exports, 'Skins', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_skins).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getIterator2 = __webpack_require__(3);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(95);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _svgs = __webpack_require__(104);

	var SVGs = _interopRequireWildcard(_svgs);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Anchors = function (_React$Component) {
	  (0, _inherits3.default)(Anchors, _React$Component);

	  function Anchors(props) {
	    (0, _classCallCheck3.default)(this, Anchors);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (Anchors.__proto__ || (0, _getPrototypeOf2.default)(Anchors)).call(this, props));

	    var defaultCategory = null;
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = (0, _getIterator3.default)(props.categories), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var category = _step.value;

	        if (category.first) {
	          defaultCategory = category;
	          break;
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

	    _this.state = {
	      selected: defaultCategory.name
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(Anchors, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var categories = _props.categories;
	      var onAnchorClick = _props.onAnchorClick;
	      var color = _props.color;
	      var i18n = _props.i18n;
	      var selected = this.state.selected;


	      return _react2.default.createElement(
	        'div',
	        { className: 'emoji-mart-anchors' },
	        categories.map(function (category, i) {
	          var name = category.name;
	          var anchor = category.anchor;
	          var isSelected = name == selected;
	          var SVGElement = SVGs[name];

	          if (anchor === false) {
	            return null;
	          }

	          return _react2.default.createElement(
	            'span',
	            {
	              key: name,
	              title: i18n.categories[name.toLowerCase()],
	              onClick: function onClick() {
	                return onAnchorClick(category, i);
	              },
	              className: 'emoji-mart-anchor ' + (isSelected ? 'emoji-mart-anchor-selected' : ''),
	              style: { color: isSelected ? color : null }
	            },
	            _react2.default.createElement(SVGElement, null),
	            _react2.default.createElement('span', { className: 'emoji-mart-anchor-bar', style: { backgroundColor: color } })
	          );
	        })
	      );
	    }
	  }]);
	  return Anchors;
	}(_react2.default.Component);

	exports.default = Anchors;


	Anchors.propTypes = {
	  categories: _propTypes2.default.array,
	  onAnchorClick: _propTypes2.default.func
	};

	Anchors.defaultProps = {
	  categories: [],
	  onAnchorClick: function onAnchorClick() {}
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(4), __esModule: true };

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	__webpack_require__(51);
	module.exports = __webpack_require__(53);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	var global        = __webpack_require__(17)
	  , hide          = __webpack_require__(21)
	  , Iterators     = __webpack_require__(9)
	  , TO_STRING_TAG = __webpack_require__(48)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(7)
	  , step             = __webpack_require__(8)
	  , Iterators        = __webpack_require__(9)
	  , toIObject        = __webpack_require__(10);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(14)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(11)
	  , defined = __webpack_require__(13);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(12);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(15)
	  , $export        = __webpack_require__(16)
	  , redefine       = __webpack_require__(31)
	  , hide           = __webpack_require__(21)
	  , has            = __webpack_require__(32)
	  , Iterators      = __webpack_require__(9)
	  , $iterCreate    = __webpack_require__(33)
	  , setToStringTag = __webpack_require__(47)
	  , getPrototypeOf = __webpack_require__(49)
	  , ITERATOR       = __webpack_require__(48)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(17)
	  , core      = __webpack_require__(18)
	  , ctx       = __webpack_require__(19)
	  , hide      = __webpack_require__(21)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
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
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
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

/***/ },
/* 17 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 18 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(20);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(22)
	  , createDesc = __webpack_require__(30);
	module.exports = __webpack_require__(26) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(23)
	  , IE8_DOM_DEFINE = __webpack_require__(25)
	  , toPrimitive    = __webpack_require__(29)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(26) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(24);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(26) && !__webpack_require__(27)(function(){
	  return Object.defineProperty(__webpack_require__(28)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(27)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(24)
	  , document = __webpack_require__(17).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(24);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(21);

/***/ },
/* 32 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(34)
	  , descriptor     = __webpack_require__(30)
	  , setToStringTag = __webpack_require__(47)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(21)(IteratorPrototype, __webpack_require__(48)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(23)
	  , dPs         = __webpack_require__(35)
	  , enumBugKeys = __webpack_require__(45)
	  , IE_PROTO    = __webpack_require__(42)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(28)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(46).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(22)
	  , anObject = __webpack_require__(23)
	  , getKeys  = __webpack_require__(36);

	module.exports = __webpack_require__(26) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(37)
	  , enumBugKeys = __webpack_require__(45);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(32)
	  , toIObject    = __webpack_require__(10)
	  , arrayIndexOf = __webpack_require__(38)(false)
	  , IE_PROTO     = __webpack_require__(42)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(10)
	  , toLength  = __webpack_require__(39)
	  , toIndex   = __webpack_require__(41);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(40)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(40)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(43)('keys')
	  , uid    = __webpack_require__(44);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(17)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(17).document && document.documentElement;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(22).f
	  , has = __webpack_require__(32)
	  , TAG = __webpack_require__(48)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(43)('wks')
	  , uid        = __webpack_require__(44)
	  , Symbol     = __webpack_require__(17).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(32)
	  , toObject    = __webpack_require__(50)
	  , IE_PROTO    = __webpack_require__(42)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(13);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(52)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(14)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(40)
	  , defined   = __webpack_require__(13);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(23)
	  , get      = __webpack_require__(54);
	module.exports = __webpack_require__(18).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(55)
	  , ITERATOR  = __webpack_require__(48)('iterator')
	  , Iterators = __webpack_require__(9);
	module.exports = __webpack_require__(18).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(12)
	  , TAG = __webpack_require__(48)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(58);
	module.exports = __webpack_require__(18).Object.getPrototypeOf;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(50)
	  , $getPrototypeOf = __webpack_require__(49);

	__webpack_require__(59)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(16)
	  , core    = __webpack_require__(18)
	  , fails   = __webpack_require__(27);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(62);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(63), __esModule: true };

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(64);
	var $Object = __webpack_require__(18).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(16);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(26), 'Object', {defineProperty: __webpack_require__(22).f});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(66);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(67);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(70);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(68), __esModule: true };

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(51);
	__webpack_require__(5);
	module.exports = __webpack_require__(69).f('iterator');

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(48);

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(71), __esModule: true };

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(72);
	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(85);
	module.exports = __webpack_require__(18).Symbol;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(17)
	  , has            = __webpack_require__(32)
	  , DESCRIPTORS    = __webpack_require__(26)
	  , $export        = __webpack_require__(16)
	  , redefine       = __webpack_require__(31)
	  , META           = __webpack_require__(73).KEY
	  , $fails         = __webpack_require__(27)
	  , shared         = __webpack_require__(43)
	  , setToStringTag = __webpack_require__(47)
	  , uid            = __webpack_require__(44)
	  , wks            = __webpack_require__(48)
	  , wksExt         = __webpack_require__(69)
	  , wksDefine      = __webpack_require__(74)
	  , keyOf          = __webpack_require__(75)
	  , enumKeys       = __webpack_require__(76)
	  , isArray        = __webpack_require__(79)
	  , anObject       = __webpack_require__(23)
	  , toIObject      = __webpack_require__(10)
	  , toPrimitive    = __webpack_require__(29)
	  , createDesc     = __webpack_require__(30)
	  , _create        = __webpack_require__(34)
	  , gOPNExt        = __webpack_require__(80)
	  , $GOPD          = __webpack_require__(82)
	  , $DP            = __webpack_require__(22)
	  , $keys          = __webpack_require__(36)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(81).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(78).f  = $propertyIsEnumerable;
	  __webpack_require__(77).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(15)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(21)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(44)('meta')
	  , isObject = __webpack_require__(24)
	  , has      = __webpack_require__(32)
	  , setDesc  = __webpack_require__(22).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(27)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(17)
	  , core           = __webpack_require__(18)
	  , LIBRARY        = __webpack_require__(15)
	  , wksExt         = __webpack_require__(69)
	  , defineProperty = __webpack_require__(22).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(36)
	  , toIObject = __webpack_require__(10);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(36)
	  , gOPS    = __webpack_require__(77)
	  , pIE     = __webpack_require__(78);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 78 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(12);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(10)
	  , gOPN      = __webpack_require__(81).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(37)
	  , hiddenKeys = __webpack_require__(45).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(78)
	  , createDesc     = __webpack_require__(30)
	  , toIObject      = __webpack_require__(10)
	  , toPrimitive    = __webpack_require__(29)
	  , has            = __webpack_require__(32)
	  , IE8_DOM_DEFINE = __webpack_require__(25)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(26) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 83 */
/***/ function(module, exports) {

	

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(74)('asyncIterator');

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(74)('observable');

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(87);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(91);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(66);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(88), __esModule: true };

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(89);
	module.exports = __webpack_require__(18).Object.setPrototypeOf;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(16);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(90).set});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(24)
	  , anObject = __webpack_require__(23);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(19)(Function.call, __webpack_require__(82).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(92), __esModule: true };

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(93);
	var $Object = __webpack_require__(18).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(16)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(34)});

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_94__;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(97)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(103)();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(96)))

/***/ },
/* 96 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(98);
	var invariant = __webpack_require__(99);
	var warning = __webpack_require__(100);

	var ReactPropTypesSecret = __webpack_require__(101);
	var checkPropTypes = __webpack_require__(102);

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(96)))

/***/ },
/* 98 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(96)))

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(98);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };

	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }

	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }

	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }

	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(96)))

/***/ },
/* 101 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(99);
	  var warning = __webpack_require__(100);
	  var ReactPropTypesSecret = __webpack_require__(101);
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(96)))

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(98);
	var invariant = __webpack_require__(99);
	var ReactPropTypesSecret = __webpack_require__(101);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _activity = __webpack_require__(105);

	Object.defineProperty(exports, 'Activity', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_activity).default;
	  }
	});

	var _flags = __webpack_require__(111);

	Object.defineProperty(exports, 'Flags', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_flags).default;
	  }
	});

	var _foods = __webpack_require__(112);

	Object.defineProperty(exports, 'Foods', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_foods).default;
	  }
	});

	var _nature = __webpack_require__(113);

	Object.defineProperty(exports, 'Nature', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_nature).default;
	  }
	});

	var _objects = __webpack_require__(114);

	Object.defineProperty(exports, 'Objects', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_objects).default;
	  }
	});

	var _people = __webpack_require__(115);

	Object.defineProperty(exports, 'People', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_people).default;
	  }
	});

	var _places = __webpack_require__(116);

	Object.defineProperty(exports, 'Places', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_places).default;
	  }
	});

	var _recent = __webpack_require__(117);

	Object.defineProperty(exports, 'Recent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_recent).default;
	  }
	});

	var _symbols = __webpack_require__(118);

	Object.defineProperty(exports, 'Symbols', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_symbols).default;
	  }
	});

	var _custom = __webpack_require__(119);

	Object.defineProperty(exports, 'Custom', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_custom).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(106);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var activity = function (_React$Component) {
	    (0, _inherits3.default)(activity, _React$Component);

	    function activity() {
	        (0, _classCallCheck3.default)(this, activity);
	        return (0, _possibleConstructorReturn3.default)(this, (activity.__proto__ || (0, _getPrototypeOf2.default)(activity)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(activity, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "svg",
	                (0, _extends3.default)({ height: "24", width: "24", viewBox: "0 0 24 24" }, this.props),
	                _react2.default.createElement("path", { d: "M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113" })
	            );
	        }
	    }]);
	    return activity;
	}(_react2.default.Component);

	exports.default = activity;
	;

	activity.displayName = "activity";

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(107);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(108), __esModule: true };

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(109);
	module.exports = __webpack_require__(18).Object.assign;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(16);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(110)});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(36)
	  , gOPS     = __webpack_require__(77)
	  , pIE      = __webpack_require__(78)
	  , toObject = __webpack_require__(50)
	  , IObject  = __webpack_require__(11)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(27)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(106);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var flags = function (_React$Component) {
	    (0, _inherits3.default)(flags, _React$Component);

	    function flags() {
	        (0, _classCallCheck3.default)(this, flags);
	        return (0, _possibleConstructorReturn3.default)(this, (flags.__proto__ || (0, _getPrototypeOf2.default)(flags)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(flags, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "svg",
	                (0, _extends3.default)({ height: "24", width: "24", viewBox: "0 0 24 24" }, this.props),
	                _react2.default.createElement("path", { d: "M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z" })
	            );
	        }
	    }]);
	    return flags;
	}(_react2.default.Component);

	exports.default = flags;
	;

	flags.displayName = "flags";

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(106);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var foods = function (_React$Component) {
	    (0, _inherits3.default)(foods, _React$Component);

	    function foods() {
	        (0, _classCallCheck3.default)(this, foods);
	        return (0, _possibleConstructorReturn3.default)(this, (foods.__proto__ || (0, _getPrototypeOf2.default)(foods)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(foods, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "svg",
	                (0, _extends3.default)({ height: "24", width: "24", viewBox: "0 0 24 24" }, this.props),
	                _react2.default.createElement("path", { d: "M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9" })
	            );
	        }
	    }]);
	    return foods;
	}(_react2.default.Component);

	exports.default = foods;
	;

	foods.displayName = "foods";

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(106);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var nature = function (_React$Component) {
	    (0, _inherits3.default)(nature, _React$Component);

	    function nature() {
	        (0, _classCallCheck3.default)(this, nature);
	        return (0, _possibleConstructorReturn3.default)(this, (nature.__proto__ || (0, _getPrototypeOf2.default)(nature)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(nature, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "svg",
	                (0, _extends3.default)({ height: "24", width: "24", viewBox: "0 0 24 24" }, this.props),
	                _react2.default.createElement("path", { d: "M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8" }),
	                _react2.default.createElement("path", { d: "M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235" })
	            );
	        }
	    }]);
	    return nature;
	}(_react2.default.Component);

	exports.default = nature;
	;

	nature.displayName = "nature";

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(106);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var objects = function (_React$Component) {
	    (0, _inherits3.default)(objects, _React$Component);

	    function objects() {
	        (0, _classCallCheck3.default)(this, objects);
	        return (0, _possibleConstructorReturn3.default)(this, (objects.__proto__ || (0, _getPrototypeOf2.default)(objects)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(objects, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "svg",
	                (0, _extends3.default)({ height: "24", width: "24", viewBox: "0 0 24 24" }, this.props),
	                _react2.default.createElement("path", { d: "M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z" }),
	                _react2.default.createElement("path", { d: "M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789" })
	            );
	        }
	    }]);
	    return objects;
	}(_react2.default.Component);

	exports.default = objects;
	;

	objects.displayName = "objects";

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(106);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var people = function (_React$Component) {
	    (0, _inherits3.default)(people, _React$Component);

	    function people() {
	        (0, _classCallCheck3.default)(this, people);
	        return (0, _possibleConstructorReturn3.default)(this, (people.__proto__ || (0, _getPrototypeOf2.default)(people)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(people, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "svg",
	                (0, _extends3.default)({ height: "24", width: "24", viewBox: "0 0 24 24" }, this.props),
	                _react2.default.createElement("path", { d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10" }),
	                _react2.default.createElement("path", { d: "M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0" })
	            );
	        }
	    }]);
	    return people;
	}(_react2.default.Component);

	exports.default = people;
	;

	people.displayName = "people";

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(106);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var places = function (_React$Component) {
	    (0, _inherits3.default)(places, _React$Component);

	    function places() {
	        (0, _classCallCheck3.default)(this, places);
	        return (0, _possibleConstructorReturn3.default)(this, (places.__proto__ || (0, _getPrototypeOf2.default)(places)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(places, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "svg",
	                (0, _extends3.default)({ height: "24", width: "24", viewBox: "0 0 24 24" }, this.props),
	                _react2.default.createElement("path", { d: "M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5" }),
	                _react2.default.createElement("path", { d: "M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z" })
	            );
	        }
	    }]);
	    return places;
	}(_react2.default.Component);

	exports.default = places;
	;

	places.displayName = "places";

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(106);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var recent = function (_React$Component) {
	    (0, _inherits3.default)(recent, _React$Component);

	    function recent() {
	        (0, _classCallCheck3.default)(this, recent);
	        return (0, _possibleConstructorReturn3.default)(this, (recent.__proto__ || (0, _getPrototypeOf2.default)(recent)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(recent, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "svg",
	                (0, _extends3.default)({ height: "24", width: "24", viewBox: "0 0 24 24" }, this.props),
	                _react2.default.createElement("path", { d: "M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z" }),
	                _react2.default.createElement("path", { d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10" })
	            );
	        }
	    }]);
	    return recent;
	}(_react2.default.Component);

	exports.default = recent;
	;

	recent.displayName = "recent";

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(106);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var symbols = function (_React$Component) {
	    (0, _inherits3.default)(symbols, _React$Component);

	    function symbols() {
	        (0, _classCallCheck3.default)(this, symbols);
	        return (0, _possibleConstructorReturn3.default)(this, (symbols.__proto__ || (0, _getPrototypeOf2.default)(symbols)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(symbols, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "svg",
	                (0, _extends3.default)({ height: "24", width: "24", viewBox: "0 0 24 24" }, this.props),
	                _react2.default.createElement("path", { d: "M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76" })
	            );
	        }
	    }]);
	    return symbols;
	}(_react2.default.Component);

	exports.default = symbols;
	;

	symbols.displayName = "symbols";

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
					value: true
	});

	var _extends2 = __webpack_require__(106);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var custom = function (_React$Component) {
					(0, _inherits3.default)(custom, _React$Component);

					function custom() {
									(0, _classCallCheck3.default)(this, custom);
									return (0, _possibleConstructorReturn3.default)(this, (custom.__proto__ || (0, _getPrototypeOf2.default)(custom)).apply(this, arguments));
					}

					(0, _createClass3.default)(custom, [{
									key: "render",
									value: function render() {
													return _react2.default.createElement(
																	"svg",
																	(0, _extends3.default)({ height: "24", width: "24", viewBox: "0 0 24 24" }, this.props),
																	_react2.default.createElement(
																					"g",
																					{ transform: "translate(2.000000, 1.000000)" },
																					_react2.default.createElement("rect", { height: "21", id: "Rectangle", width: "3", rx: "1.5", x: "8", y: "0" }),
																					_react2.default.createElement("rect", { height: "21", id: "Rectangle", width: "3", rx: "1.5", transform: "translate(9.843, 10.549) rotate(60) translate(-9.843, -10.549) ", x: "8.343", y: "0.049" }),
																					_react2.default.createElement("rect", { height: "21", id: "Rectangle", width: "3", rx: "1.5", transform: "translate(9.843, 10.549) rotate(-60) translate(-9.843, -10.549) ", x: "8.343", y: "0.049" })
																	)
													);
									}
					}]);
					return custom;
	}(_react2.default.Component);

	exports.default = custom;
	;

	custom.displayName = "custom";

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(106);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getIterator2 = __webpack_require__(3);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(95);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _frequently = __webpack_require__(121);

	var _frequently2 = _interopRequireDefault(_frequently);

	var _ = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Category = function (_React$Component) {
	  (0, _inherits3.default)(Category, _React$Component);

	  function Category() {
	    (0, _classCallCheck3.default)(this, Category);
	    return (0, _possibleConstructorReturn3.default)(this, (Category.__proto__ || (0, _getPrototypeOf2.default)(Category)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Category, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.container = this.refs.container;
	      this.label = this.refs.label;
	      this.parent = this.container.parentNode;

	      this.margin = 0;
	      this.minMargin = 0;

	      this.memoizeSize();
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      var _props = this.props;
	      var name = _props.name;
	      var perLine = _props.perLine;
	      var native = _props.native;
	      var hasStickyPosition = _props.hasStickyPosition;
	      var emojis = _props.emojis;
	      var emojiProps = _props.emojiProps;
	      var skin = emojiProps.skin;
	      var size = emojiProps.size;
	      var set = emojiProps.set;
	      var nextPerLine = nextProps.perLine;
	      var nextNative = nextProps.native;
	      var nextHasStickyPosition = nextProps.hasStickyPosition;
	      var nextEmojis = nextProps.emojis;
	      var nextEmojiProps = nextProps.emojiProps;
	      var nextSkin = nextEmojiProps.skin;
	      var nextSize = nextEmojiProps.size;
	      var nextSet = nextEmojiProps.set;
	      var shouldUpdate = false;

	      if (name == 'Recent' && perLine != nextPerLine) {
	        shouldUpdate = true;
	      }

	      if (name == 'Search') {
	        shouldUpdate = !(emojis == nextEmojis);
	      }

	      if (skin != nextSkin || size != nextSize || native != nextNative || set != nextSet || hasStickyPosition != nextHasStickyPosition) {
	        shouldUpdate = true;
	      }

	      return shouldUpdate;
	    }
	  }, {
	    key: 'memoizeSize',
	    value: function memoizeSize() {
	      var _container$getBoundin = this.container.getBoundingClientRect();

	      var top = _container$getBoundin.top;
	      var height = _container$getBoundin.height;

	      var _parent$getBoundingCl = this.parent.getBoundingClientRect();

	      var parentTop = _parent$getBoundingCl.top;

	      var _label$getBoundingCli = this.label.getBoundingClientRect();

	      var labelHeight = _label$getBoundingCli.height;


	      this.top = top - parentTop + this.parent.scrollTop;

	      if (height == 0) {
	        this.maxMargin = 0;
	      } else {
	        this.maxMargin = height - labelHeight;
	      }
	    }
	  }, {
	    key: 'handleScroll',
	    value: function handleScroll(scrollTop) {
	      var margin = scrollTop - this.top;
	      margin = margin < this.minMargin ? this.minMargin : margin;
	      margin = margin > this.maxMargin ? this.maxMargin : margin;

	      if (margin == this.margin) return;
	      var name = this.props.name;


	      if (!this.props.hasStickyPosition) {
	        this.label.style.top = margin + 'px';
	      }

	      this.margin = margin;
	      return true;
	    }
	  }, {
	    key: 'getEmojis',
	    value: function getEmojis() {
	      var _props2 = this.props;
	      var name = _props2.name;
	      var emojis = _props2.emojis;
	      var perLine = _props2.perLine;


	      if (name == 'Recent') {
	        var custom = this.props.custom;

	        var frequentlyUsed = _frequently2.default.get(perLine);

	        if (frequentlyUsed.length) {
	          emojis = frequentlyUsed.map(function (id) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	              for (var _iterator = (0, _getIterator3.default)(custom), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var emoji = _step.value;

	                if (emoji.id === id) {
	                  return emoji;
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

	            return id;
	          });
	        }
	      }

	      if (emojis) {
	        emojis = emojis.slice(0);
	      }

	      return emojis;
	    }
	  }, {
	    key: 'updateDisplay',
	    value: function updateDisplay(display) {
	      var emojis = this.getEmojis();

	      if (!emojis) {
	        return;
	      }

	      this.container.style.display = display;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var name = _props3.name;
	      var hasStickyPosition = _props3.hasStickyPosition;
	      var emojiProps = _props3.emojiProps;
	      var i18n = _props3.i18n;
	      var emojis = this.getEmojis();
	      var labelStyles = {};
	      var labelSpanStyles = {};
	      var containerStyles = {};

	      if (!emojis) {
	        containerStyles = {
	          display: 'none'
	        };
	      }

	      if (!hasStickyPosition) {
	        labelStyles = {
	          height: 28
	        };

	        labelSpanStyles = {
	          position: 'absolute'
	        };
	      }

	      return _react2.default.createElement(
	        'div',
	        { ref: 'container', className: 'emoji-mart-category ' + (emojis && !emojis.length ? 'emoji-mart-no-results' : ''), style: containerStyles },
	        _react2.default.createElement(
	          'div',
	          { style: labelStyles, 'data-name': name, className: 'emoji-mart-category-label' },
	          _react2.default.createElement(
	            'span',
	            { style: labelSpanStyles, ref: 'label' },
	            i18n.categories[name.toLowerCase()]
	          )
	        ),
	        emojis && emojis.map(function (emoji) {
	          return (0, _.Emoji)((0, _extends3.default)({
	            emoji: emoji
	          }, emojiProps));
	        }),
	        emojis && !emojis.length && _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            null,
	            (0, _.Emoji)((0, _extends3.default)({}, emojiProps, {
	              size: 38,
	              emoji: 'sleuth_or_spy',
	              onOver: null,
	              onLeave: null,
	              onClick: null
	            }))
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-no-results-label' },
	            i18n.notfound
	          )
	        )
	      );
	    }
	  }]);
	  return Category;
	}(_react2.default.Component);

	exports.default = Category;


	Category.propTypes = {
	  emojis: _propTypes2.default.array,
	  hasStickyPosition: _propTypes2.default.bool,
	  name: _propTypes2.default.string.isRequired,
	  native: _propTypes2.default.bool.isRequired,
	  perLine: _propTypes2.default.number.isRequired,
	  emojiProps: _propTypes2.default.object.isRequired
	};

	Category.defaultProps = {
	  emojis: [],
	  hasStickyPosition: true
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keys = __webpack_require__(122);

	var _keys2 = _interopRequireDefault(_keys);

	var _toConsumableArray2 = __webpack_require__(125);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _store = __webpack_require__(133);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DEFAULTS = ['+1', 'grinning', 'kissing_heart', 'heart_eyes', 'laughing', 'stuck_out_tongue_winking_eye', 'sweat_smile', 'joy', 'scream', 'disappointed', 'unamused', 'weary', 'sob', 'sunglasses', 'heart', 'poop'];

	var frequently = _store2.default.get('frequently');
	var defaults = {};

	function add(emoji) {
	  var id = emoji.id;


	  frequently || (frequently = defaults);
	  frequently[id] || (frequently[id] = 0);
	  frequently[id] += 1;

	  _store2.default.set('last', id);
	  _store2.default.set('frequently', frequently);
	}

	function get(perLine) {
	  if (!frequently) {
	    defaults = {};

	    // Use Array.prototype.fill() when it is more widely supported.
	    return [].concat((0, _toConsumableArray3.default)(Array(perLine))).map(function (_, i) {
	      defaults[DEFAULTS[i]] = perLine - i;
	      return DEFAULTS[i];
	    });
	  }

	  var quantity = perLine * 4,
	      sorted = (0, _keys2.default)(frequently).sort(function (a, b) {
	    return frequently[a] - frequently[b];
	  }).reverse(),
	      sliced = sorted.slice(0, quantity),
	      last = _store2.default.get('last');

	  if (last && sliced.indexOf(last) == -1) {
	    sliced.pop();
	    sliced.push(last);
	  }

	  return sliced;
	}

	exports.default = { add: add, get: get };

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(123), __esModule: true };

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(124);
	module.exports = __webpack_require__(18).Object.keys;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(50)
	  , $keys    = __webpack_require__(36);

	__webpack_require__(59)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(126);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(127), __esModule: true };

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(51);
	__webpack_require__(128);
	module.exports = __webpack_require__(18).Array.from;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(19)
	  , $export        = __webpack_require__(16)
	  , toObject       = __webpack_require__(50)
	  , call           = __webpack_require__(129)
	  , isArrayIter    = __webpack_require__(130)
	  , toLength       = __webpack_require__(39)
	  , createProperty = __webpack_require__(131)
	  , getIterFn      = __webpack_require__(54);

	$export($export.S + $export.F * !__webpack_require__(132)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(23);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(9)
	  , ITERATOR   = __webpack_require__(48)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(22)
	  , createDesc      = __webpack_require__(30);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(48)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stringify = __webpack_require__(134);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NAMESPACE = 'emoji-mart';

	var isLocalStorageSupported = typeof window !== 'undefined' && 'localStorage' in window;

	function update(state) {
	  for (var key in state) {
	    var value = state[key];
	    set(key, value);
	  }
	}

	function set(key, value) {
	  if (!isLocalStorageSupported) return;
	  try {
	    window.localStorage[NAMESPACE + '.' + key] = (0, _stringify2.default)(value);
	  } catch (e) {}
	}

	function get(key) {
	  if (!isLocalStorageSupported) return;
	  try {
	    var value = window.localStorage[NAMESPACE + '.' + key];
	  } catch (e) {
	    return;
	  }

	  if (value) {
	    return JSON.parse(value);
	  }
	}

	function setNamespace(namespace) {
	  NAMESPACE = namespace;
	}

	exports.default = { update: update, set: set, get: get, setNamespace: setNamespace };

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(135), __esModule: true };

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(18)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(95);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _data = __webpack_require__(137);

	var _data2 = _interopRequireDefault(_data);

	var _utils = __webpack_require__(138);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SHEET_COLUMNS = 49;

	var _getPosition = function _getPosition(props) {
	  var _getData2 = _getData(props);

	  var sheet_x = _getData2.sheet_x;
	  var sheet_y = _getData2.sheet_y;
	  var multiply = 100 / (SHEET_COLUMNS - 1);

	  return multiply * sheet_x + '% ' + multiply * sheet_y + '%';
	};

	var _getData = function _getData(props) {
	  var emoji = props.emoji;
	  var skin = props.skin;
	  var set = props.set;

	  return (0, _utils.getData)(emoji, skin, set);
	};

	var _getSanitizedData = function _getSanitizedData(props) {
	  var emoji = props.emoji;
	  var skin = props.skin;
	  var set = props.set;

	  return (0, _utils.getSanitizedData)(emoji, skin, set);
	};

	var _handleClick = function _handleClick(e, props) {
	  if (!props.onClick) {
	    return;
	  }
	  var onClick = props.onClick;
	  var emoji = _getSanitizedData(props);

	  onClick(emoji, e);
	};

	var _handleOver = function _handleOver(e, props) {
	  if (!props.onOver) {
	    return;
	  }
	  var onOver = props.onOver;
	  var emoji = _getSanitizedData(props);

	  onOver(emoji, e);
	};

	var _handleLeave = function _handleLeave(e, props) {
	  if (!props.onLeave) {
	    return;
	  }
	  var onLeave = props.onLeave;
	  var emoji = _getSanitizedData(props);

	  onLeave(emoji, e);
	};

	var Emoji = function Emoji(props) {
	  for (var k in Emoji.defaultProps) {
	    if (props[k] == undefined && Emoji.defaultProps[k] != undefined) {
	      props[k] = Emoji.defaultProps[k];
	    }
	  }

	  var _getData3 = _getData(props);

	  var unified = _getData3.unified;
	  var custom = _getData3.custom;
	  var imageUrl = _getData3.imageUrl;
	  var style = {};
	  var children = props.children;

	  if (!unified && !custom) {
	    return null;
	  }

	  if (props.native && unified) {
	    style = { fontSize: props.size };
	    children = (0, _utils.unifiedToNative)(unified);

	    if (props.forceSize) {
	      style.display = 'inline-block';
	      style.width = props.size;
	      style.height = props.size;
	    }
	  } else if (custom) {
	    style = {
	      width: props.size,
	      height: props.size,
	      display: 'inline-block',
	      backgroundImage: 'url(' + imageUrl + ')',
	      backgroundSize: '100%'
	    };
	  } else {
	    var setHasEmoji = _getData(props)['has_img_' + props.set];

	    if (!setHasEmoji) {
	      return null;
	    }

	    style = {
	      width: props.size,
	      height: props.size,
	      display: 'inline-block',
	      backgroundImage: 'url(' + props.backgroundImageFn(props.set, props.sheetSize) + ')',
	      backgroundSize: 100 * SHEET_COLUMNS + '%',
	      backgroundPosition: _getPosition(props)
	    };
	  }

	  return _react2.default.createElement(
	    'span',
	    {
	      key: props.emoji.id || props.emoji,
	      onClick: function onClick(e) {
	        return _handleClick(e, props);
	      },
	      onMouseEnter: function onMouseEnter(e) {
	        return _handleOver(e, props);
	      },
	      onMouseLeave: function onMouseLeave(e) {
	        return _handleLeave(e, props);
	      },
	      className: 'emoji-mart-emoji' },
	    _react2.default.createElement(
	      'span',
	      { style: style },
	      children
	    )
	  );
	};

	Emoji.propTypes = {
	  onOver: _propTypes2.default.func,
	  onLeave: _propTypes2.default.func,
	  onClick: _propTypes2.default.func,
	  backgroundImageFn: _propTypes2.default.func,
	  native: _propTypes2.default.bool,
	  forceSize: _propTypes2.default.bool,
	  skin: _propTypes2.default.oneOf([1, 2, 3, 4, 5, 6]),
	  sheetSize: _propTypes2.default.oneOf([16, 20, 32, 64]),
	  set: _propTypes2.default.oneOf(['apple', 'google', 'twitter', 'emojione', 'messenger', 'facebook']),
	  size: _propTypes2.default.number.isRequired,
	  emoji: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
	};

	Emoji.defaultProps = {
	  skin: 1,
	  set: 'apple',
	  sheetSize: 64,
	  native: true,
	  forceSize: false,
	  backgroundImageFn: function backgroundImageFn(set, sheetSize) {
	    return 'https://unpkg.com/emoji-datasource-' + set + '@' + ('^3.0.0') + '/img/' + set + '/sheets/' + sheetSize + '.png';
	  },
	  onOver: function onOver() {},
	  onLeave: function onLeave() {},
	  onClick: function onClick() {}
	};

	exports.default = Emoji;

/***/ },
/* 137 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = { categories: [{ name: "People", emojis: ["grinning", "smiley", "smile", "grin", "laughing", "sweat_smile", "joy", "relaxed", "blush", "innocent", "wink", "relieved", "heart_eyes", "kissing_heart", "kissing", "kissing_smiling_eyes", "kissing_closed_eyes", "yum", "stuck_out_tongue_winking_eye", "stuck_out_tongue_closed_eyes", "stuck_out_tongue", "sunglasses", "smirk", "unamused", "disappointed", "pensive", "worried", "confused", "white_frowning_face", "persevere", "confounded", "tired_face", "weary", "triumph", "angry", "rage", "no_mouth", "neutral_face", "expressionless", "hushed", "frowning", "anguished", "open_mouth", "astonished", "dizzy_face", "flushed", "scream", "fearful", "cold_sweat", "cry", "disappointed_relieved", "sob", "sweat", "sleepy", "sleeping", "grimacing", "mask", "smiling_imp", "imp", "japanese_ogre", "japanese_goblin", "hankey", "ghost", "skull", "skull_and_crossbones", "alien", "space_invader", "jack_o_lantern", "smiley_cat", "smile_cat", "joy_cat", "heart_eyes_cat", "smirk_cat", "kissing_cat", "scream_cat", "crying_cat_face", "pouting_cat", "ring", "lipstick", "kiss", "lips", "tongue", "footprints", "eyes", "bust_in_silhouette", "busts_in_silhouette", "dancers", "man-with-bunny-ears-partying", "couple", "two_women_holding_hands", "two_men_holding_hands", "couple_with_heart", "woman-heart-woman", "man-heart-man", "couplekiss", "woman-kiss-woman", "man-kiss-man", "family", "man-woman-girl", "man-woman-girl-boy", "man-woman-boy-boy", "man-woman-girl-girl", "woman-woman-boy", "woman-woman-girl", "woman-woman-girl-boy", "woman-woman-boy-boy", "woman-woman-girl-girl", "man-man-boy", "man-man-girl", "man-man-girl-boy", "man-man-boy-boy", "man-man-girl-girl", "woman-boy", "woman-girl", "woman-girl-boy", "woman-boy-boy", "woman-girl-girl", "man-boy", "man-girl", "man-girl-boy", "man-boy-boy", "man-girl-girl", "womans_clothes", "shirt", "jeans", "necktie", "dress", "bikini", "kimono", "high_heel", "sandal", "boot", "mans_shoe", "athletic_shoe", "womans_hat", "tophat", "mortar_board", "crown", "helmet_with_white_cross", "school_satchel", "pouch", "purse", "handbag", "briefcase", "eyeglasses", "closed_umbrella", "umbrella", "man-woman-boy", "woman-heart-man", "woman-kiss-man", "woman-with-bunny-ears-partying"] }, { name: "Nature", emojis: ["dog", "cat", "mouse", "hamster", "rabbit", "bear", "panda_face", "koala", "tiger", "cow", "pig", "pig_nose", "frog", "monkey_face", "see_no_evil", "hear_no_evil", "speak_no_evil", "monkey", "chicken", "penguin", "bird", "baby_chick", "hatching_chick", "hatched_chick", "wolf", "boar", "horse", "bee", "bug", "snail", "shell", "beetle", "ant", "turtle", "snake", "octopus", "tropical_fish", "fish", "blowfish", "dolphin", "whale", "whale2", "crocodile", "leopard", "tiger2", "water_buffalo", "ox", "cow2", "dromedary_camel", "camel", "elephant", "racehorse", "pig2", "goat", "ram", "sheep", "dog2", "poodle", "cat2", "rooster", "rabbit2", "mouse2", "rat", "feet", "dragon", "dragon_face", "cactus", "christmas_tree", "evergreen_tree", "deciduous_tree", "palm_tree", "seedling", "herb", "shamrock", "four_leaf_clover", "bamboo", "tanabata_tree", "leaves", "fallen_leaf", "maple_leaf", "mushroom", "ear_of_rice", "bouquet", "tulip", "rose", "sunflower", "blossom", "cherry_blossom", "hibiscus", "earth_americas", "earth_africa", "earth_asia", "full_moon", "waning_gibbous_moon", "last_quarter_moon", "waning_crescent_moon", "new_moon", "waxing_crescent_moon", "first_quarter_moon", "moon", "new_moon_with_face", "full_moon_with_face", "sun_with_face", "first_quarter_moon_with_face", "last_quarter_moon_with_face", "crescent_moon", "dizzy", "star", "star2", "sparkles", "zap", "fire", "boom", "comet", "sunny", "partly_sunny", "rainbow", "cloud", "thunder_cloud_and_rain", "snowman", "snowman_without_snow", "snowflake", "dash", "ocean", "droplet", "sweat_drops", "umbrella_with_rain_drops"] }, { name: "Foods", emojis: ["green_apple", "apple", "pear", "tangerine", "lemon", "banana", "watermelon", "grapes", "strawberry", "melon", "cherries", "peach", "pineapple", "tomato", "eggplant", "corn", "sweet_potato", "chestnut", "honey_pot", "bread", "fried_egg", "fried_shrimp", "poultry_leg", "meat_on_bone", "pizza", "hamburger", "fries", "spaghetti", "ramen", "stew", "fish_cake", "sushi", "bento", "curry", "rice", "rice_ball", "rice_cracker", "oden", "dango", "shaved_ice", "ice_cream", "icecream", "cake", "birthday", "custard", "lollipop", "candy", "chocolate_bar", "doughnut", "cookie", "baby_bottle", "coffee", "tea", "sake", "beer", "beers", "wine_glass", "cocktail", "tropical_drink", "fork_and_knife"] }, { name: "Activity", emojis: ["soccer", "basketball", "football", "baseball", "tennis", "rugby_football", "8ball", "golf", "fishing_pole_and_fish", "ice_skate", "ski", "skier", "running_shirt_with_sash", "trophy", "ticket", "circus_tent", "performing_arts", "art", "clapper", "microphone", "headphones", "musical_score", "musical_keyboard", "saxophone", "trumpet", "guitar", "violin", "game_die", "dart", "bowling", "video_game", "slot_machine"] }, { name: "Places", emojis: ["car", "taxi", "blue_car", "bus", "trolleybus", "police_car", "ambulance", "fire_engine", "minibus", "truck", "articulated_lorry", "tractor", "bike", "rotating_light", "oncoming_police_car", "oncoming_bus", "oncoming_automobile", "oncoming_taxi", "aerial_tramway", "mountain_cableway", "suspension_railway", "railway_car", "train", "mountain_railway", "monorail", "bullettrain_side", "bullettrain_front", "light_rail", "steam_locomotive", "train2", "metro", "tram", "station", "helicopter", "airplane", "rocket", "seat", "boat", "speedboat", "ferry", "ship", "anchor", "construction", "fuelpump", "busstop", "vertical_traffic_light", "traffic_light", "moyai", "statue_of_liberty", "fountain", "tokyo_tower", "european_castle", "japanese_castle", "ferris_wheel", "roller_coaster", "carousel_horse", "umbrella_on_ground", "mountain", "mount_fuji", "volcano", "tent", "factory", "house", "house_with_garden", "office", "department_store", "post_office", "european_post_office", "hospital", "bank", "hotel", "convenience_store", "school", "love_hotel", "wedding", "church", "shinto_shrine", "japan", "rice_scene", "sunrise", "sunrise_over_mountains", "stars", "sparkler", "fireworks", "city_sunrise", "city_sunset", "night_with_stars", "milky_way", "bridge_at_night", "foggy"] }, { name: "Objects", emojis: ["watch", "iphone", "calling", "computer", "keyboard", "minidisc", "floppy_disk", "cd", "dvd", "vhs", "camera", "video_camera", "movie_camera", "telephone_receiver", "phone", "pager", "fax", "tv", "radio", "stopwatch", "timer_clock", "alarm_clock", "hourglass", "hourglass_flowing_sand", "satellite_antenna", "battery", "electric_plug", "bulb", "flashlight", "money_with_wings", "dollar", "yen", "euro", "pound", "moneybag", "credit_card", "gem", "scales", "wrench", "hammer", "hammer_and_pick", "pick", "nut_and_bolt", "gear", "chains", "gun", "bomb", "hocho", "crossed_swords", "smoking", "coffin", "funeral_urn", "crystal_ball", "barber", "alembic", "telescope", "microscope", "pill", "syringe", "toilet", "potable_water", "shower", "bathtub", "key", "door", "gift", "balloon", "flags", "ribbon", "confetti_ball", "tada", "dolls", "izakaya_lantern", "wind_chime", "email", "envelope_with_arrow", "incoming_envelope", "e-mail", "love_letter", "inbox_tray", "outbox_tray", "package", "mailbox_closed", "mailbox", "mailbox_with_mail", "mailbox_with_no_mail", "postbox", "postal_horn", "scroll", "page_with_curl", "page_facing_up", "bookmark_tabs", "bar_chart", "chart_with_upwards_trend", "chart_with_downwards_trend", "calendar", "date", "card_index", "clipboard", "file_folder", "open_file_folder", "newspaper", "notebook", "notebook_with_decorative_cover", "ledger", "closed_book", "green_book", "blue_book", "orange_book", "books", "book", "bookmark", "link", "paperclip", "triangular_ruler", "straight_ruler", "pushpin", "round_pushpin", "scissors", "black_nib", "memo", "pencil2", "mag", "mag_right", "lock_with_ink_pen", "closed_lock_with_key", "lock", "unlock"] }, { name: "Symbols", emojis: ["heart", "yellow_heart", "green_heart", "blue_heart", "purple_heart", "broken_heart", "heavy_heart_exclamation_mark_ornament", "two_hearts", "revolving_hearts", "heartbeat", "heartpulse", "sparkling_heart", "cupid", "gift_heart", "heart_decoration", "peace_symbol", "latin_cross", "star_and_crescent", "wheel_of_dharma", "star_of_david", "six_pointed_star", "yin_yang", "orthodox_cross", "ophiuchus", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpius", "sagittarius", "capricorn", "aquarius", "pisces", "id", "atom_symbol", "accept", "radioactive_sign", "biohazard_sign", "mobile_phone_off", "vibration_mode", "u6709", "u7121", "u7533", "u55b6", "u6708", "eight_pointed_black_star", "vs", "white_flower", "ideograph_advantage", "secret", "congratulations", "u5408", "u6e80", "u5272", "u7981", "a", "b", "ab", "cl", "o2", "sos", "x", "o", "no_entry", "name_badge", "no_entry_sign", "100", "anger", "hotsprings", "no_pedestrians", "do_not_litter", "no_bicycles", "non-potable_water", "underage", "no_mobile_phones", "no_smoking", "exclamation", "grey_exclamation", "question", "grey_question", "bangbang", "interrobang", "low_brightness", "high_brightness", "part_alternation_mark", "warning", "children_crossing", "trident", "fleur_de_lis", "beginner", "recycle", "white_check_mark", "u6307", "chart", "sparkle", "eight_spoked_asterisk", "negative_squared_cross_mark", "globe_with_meridians", "diamond_shape_with_a_dot_inside", "m", "cyclone", "zzz", "atm", "wc", "wheelchair", "parking", "u7a7a", "sa", "passport_control", "customs", "baggage_claim", "left_luggage", "mens", "womens", "baby_symbol", "restroom", "put_litter_in_its_place", "cinema", "signal_strength", "koko", "symbols", "information_source", "abc", "abcd", "capital_abcd", "ng", "ok", "up", "cool", "new", "free", "keycap_ten", "1234", "arrow_forward", "black_right_pointing_triangle_with_double_vertical_bar", "eject", "black_right_pointing_double_triangle_with_vertical_bar", "black_left_pointing_double_triangle_with_vertical_bar", "fast_forward", "rewind", "arrow_double_up", "arrow_double_down", "arrow_backward", "arrow_up_small", "arrow_down_small", "arrow_right", "arrow_left", "arrow_up", "arrow_down", "arrow_upper_right", "arrow_lower_right", "arrow_lower_left", "arrow_upper_left", "arrow_up_down", "left_right_arrow", "arrow_right_hook", "leftwards_arrow_with_hook", "arrow_heading_up", "arrow_heading_down", "twisted_rightwards_arrows", "repeat", "repeat_one", "arrows_counterclockwise", "arrows_clockwise", "musical_note", "notes", "heavy_plus_sign", "heavy_minus_sign", "heavy_division_sign", "heavy_multiplication_x", "heavy_dollar_sign", "currency_exchange", "tm", "copyright", "registered", "wavy_dash", "curly_loop", "loop", "end", "back", "on", "top", "soon", "heavy_check_mark", "ballot_box_with_check", "radio_button", "white_circle", "black_circle", "red_circle", "large_blue_circle", "small_red_triangle", "small_red_triangle_down", "small_orange_diamond", "small_blue_diamond", "large_orange_diamond", "large_blue_diamond", "white_square_button", "black_square_button", "black_small_square", "white_small_square", "black_medium_small_square", "white_medium_small_square", "black_medium_square", "white_medium_square", "black_large_square", "white_large_square", "speaker", "mute", "sound", "loud_sound", "bell", "no_bell", "mega", "loudspeaker", "speech_balloon", "thought_balloon", "spades", "clubs", "hearts", "diamonds", "black_joker", "flower_playing_cards", "mahjong", "clock1", "clock2", "clock3", "clock4", "clock5", "clock6", "clock7", "clock8", "clock9", "clock10", "clock11", "clock12", "clock130", "clock230", "clock330", "clock430", "clock530", "clock630", "clock730", "clock830", "clock930", "clock1030", "clock1130", "clock1230", "female_sign", "male_sign", "staff_of_aesculapius"] }, { name: "Flags", emojis: [] }], emojis: { "100": { name: "Hundred Points Symbol", unified: "1F4AF", short_name: "100", short_names: ["100"], text: "", added_in: "6.0", search: "100,hundred,points,symbol,score,perfect,numbers,century,exam,quiz,test,pass" }, "1234": { name: "Input Symbol for Numbers", unified: "1F522", short_name: "1234", short_names: ["1234"], text: "", added_in: "6.0", search: "1234,input,symbol,for,numbers,blue-square" }, dog: { name: "Dog Face", unified: "1F436", short_name: "dog", short_names: ["dog"], text: "", added_in: "6.0", search: "dog,face,animal,friend,nature,woof,puppy,pet,faithful" }, green_apple: { name: "Green Apple", unified: "1F34F", short_name: "green_apple", short_names: ["green_apple"], text: "", added_in: "6.0", search: "green,apple,fruit,nature" }, watch: { name: "Watch", unified: "231A", variations: ["231A-FE0F"], short_name: "watch", short_names: ["watch"], text: "", added_in: "1.1", search: "watch,time,accessories" }, heart: { name: "Heavy Black Heart", unified: "2764", variations: ["2764-FE0F"], short_name: "heart", short_names: ["heart"], text: "<3", added_in: "1.1", emoticons: ["<3"], search: "heart,heavy,black,love,like,valentines,<3" }, car: { name: "Automobile", unified: "1F697", short_name: "car", short_names: ["car", "red_car"], text: "", added_in: "6.0", search: "car,red,automobile" }, soccer: { name: "Soccer Ball", unified: "26BD", variations: ["26BD-FE0F"], short_name: "soccer", short_names: ["soccer"], text: "", added_in: "5.2", search: "soccer,ball,sports,football" }, grinning: { name: "Grinning Face", unified: "1F600", short_name: "grinning", short_names: ["grinning"], text: ":D", added_in: "6.1", search: "grinning,face,smile,happy,joy,:d,grin" }, yellow_heart: { name: "Yellow Heart", unified: "1F49B", short_name: "yellow_heart", short_names: ["yellow_heart"], text: "<3", added_in: "6.0", search: "yellow,heart,love,like,affection,valentines" }, iphone: { name: "Mobile Phone", unified: "1F4F1", short_name: "iphone", short_names: ["iphone"], text: "", added_in: "6.0", search: "iphone,mobile,phone,technology,apple,gadgets,dial" }, cat: { name: "Cat Face", unified: "1F431", short_name: "cat", short_names: ["cat"], text: "", added_in: "6.0", search: "cat,face,animal,meow,nature,pet,kitten" }, taxi: { name: "Taxi", unified: "1F695", short_name: "taxi", short_names: ["taxi"], text: "", added_in: "6.0", search: "taxi,uber,vehicle,cars,transportation" }, apple: { name: "Red Apple", unified: "1F34E", short_name: "apple", short_names: ["apple"], text: "", added_in: "6.0", search: "apple,red,fruit,mac,school" }, basketball: { name: "Basketball and Hoop", unified: "1F3C0", short_name: "basketball", short_names: ["basketball"], text: "", added_in: "6.0", search: "basketball,and,hoop,sports,balls,nba" }, smiley: { name: "Smiling Face with Open Mouth", unified: "1F603", short_name: "smiley", short_names: ["smiley"], text: ":)", added_in: "6.0", emoticons: ["=)", "=-)"], search: "smiley,smiling,face,with,open,mouth,happy,joy,haha,:d,:),smile,funny,=),=-)" }, mouse: { name: "Mouse Face", unified: "1F42D", short_name: "mouse", short_names: ["mouse"], text: "", added_in: "6.0", search: "mouse,face,animal,nature,cheese_wedge,rodent" }, calling: { name: "Mobile Phone with Rightwards Arrow at Left", unified: "1F4F2", short_name: "calling", short_names: ["calling"], text: "", added_in: "6.0", search: "calling,mobile,phone,with,rightwards,arrow,at,left,iphone,incoming" }, blue_car: { name: "Recreational Vehicle", unified: "1F699", short_name: "blue_car", short_names: ["blue_car"], text: "", added_in: "6.0", search: "blue,car,recreational,vehicle,transportation" }, pear: { name: "Pear", unified: "1F350", short_name: "pear", short_names: ["pear"], text: "", added_in: "6.0", search: "pear,fruit,nature,food" }, green_heart: { name: "Green Heart", unified: "1F49A", short_name: "green_heart", short_names: ["green_heart"], text: "<3", added_in: "6.0", search: "green,heart,love,like,affection,valentines" }, football: { name: "American Football", unified: "1F3C8", short_name: "football", short_names: ["football"], text: "", added_in: "6.0", search: "football,american,sports,balls,nfl" }, smile: { name: "Smiling Face with Open Mouth and Smiling Eyes", unified: "1F604", short_name: "smile", short_names: ["smile"], text: ":)", added_in: "6.0", emoticons: ["C:", "c:", ":D", ":-D"], search: "smile,smiling,face,with,open,mouth,and,eyes,happy,joy,funny,haha,laugh,like,:d,:),c:,:-d" }, tangerine: { name: "Tangerine", unified: "1F34A", short_name: "tangerine", short_names: ["tangerine"], text: "", added_in: "6.0", search: "tangerine,food,fruit,nature,orange" }, bus: { name: "Bus", unified: "1F68C", short_name: "bus", short_names: ["bus"], text: "", added_in: "6.0", search: "bus,car,vehicle,transportation" }, baseball: { name: "Baseball", unified: "26BE", variations: ["26BE-FE0F"], short_name: "baseball", short_names: ["baseball"], text: "", added_in: "5.2", search: "baseball,sports,balls" }, hamster: { name: "Hamster Face", unified: "1F439", short_name: "hamster", short_names: ["hamster"], text: "", added_in: "6.0", search: "hamster,face,animal,nature" }, blue_heart: { name: "Blue Heart", unified: "1F499", short_name: "blue_heart", short_names: ["blue_heart"], text: "<3", added_in: "6.0", search: "blue,heart,love,like,affection,valentines" }, grin: { name: "Grinning Face with Smiling Eyes", unified: "1F601", short_name: "grin", short_names: ["grin"], text: "", added_in: "6.0", search: "grin,grinning,face,with,smiling,eyes,happy,smile,joy,kawaii" }, computer: { name: "Personal Computer", unified: "1F4BB", short_name: "computer", short_names: ["computer"], text: "", added_in: "6.0", search: "computer,personal,technology,laptop,screen,display,monitor" }, tennis: { name: "Tennis Racquet and Ball", unified: "1F3BE", short_name: "tennis", short_names: ["tennis"], text: "", added_in: "6.0", search: "tennis,racquet,and,ball,sports,balls,green" }, trolleybus: { name: "Trolleybus", unified: "1F68E", short_name: "trolleybus", short_names: ["trolleybus"], text: "", added_in: "6.0", search: "trolleybus,bart,transportation,vehicle" }, laughing: { name: "Smiling Face with Open Mouth and Tightly-Closed Eyes", unified: "1F606", short_name: "laughing", short_names: ["laughing", "satisfied"], text: "", added_in: "6.0", emoticons: [":>", ":->"], search: "laughing,satisfied,smiling,face,with,open,mouth,and,tightly,closed,eyes,happy,joy,lol,haha,glad,xd,laugh,:>,:->" }, rabbit: { name: "Rabbit Face", unified: "1F430", short_name: "rabbit", short_names: ["rabbit"], text: "", added_in: "6.0", search: "rabbit,face,animal,nature,pet,spring,magic,bunny" }, lemon: { name: "Lemon", unified: "1F34B", short_name: "lemon", short_names: ["lemon"], text: "", added_in: "6.0", search: "lemon,fruit,nature" }, keyboard: { name: "Keyboard", unified: "2328", variations: ["2328-FE0F"], short_name: "keyboard", short_names: ["keyboard"], text: "", added_in: "1.1", search: "keyboard,technology,computer,type,input,text" }, purple_heart: { name: "Purple Heart", unified: "1F49C", short_name: "purple_heart", short_names: ["purple_heart"], text: "<3", added_in: "6.0", search: "purple,heart,love,like,affection,valentines" }, sweat_smile: { name: "Smiling Face with Open Mouth and Cold Sweat", unified: "1F605", short_name: "sweat_smile", short_names: ["sweat_smile"], text: "", added_in: "6.0", search: "sweat,smile,smiling,face,with,open,mouth,and,cold,hot,happy,laugh,relief" }, banana: { name: "Banana", unified: "1F34C", short_name: "banana", short_names: ["banana"], text: "", added_in: "6.0", search: "banana,fruit,food,monkey" }, rugby_football: { name: "Rugby Football", unified: "1F3C9", short_name: "rugby_football", short_names: ["rugby_football"], text: "", added_in: "6.0", search: "rugby,football,sports,team" }, watermelon: { name: "Watermelon", unified: "1F349", short_name: "watermelon", short_names: ["watermelon"], text: "", added_in: "6.0", search: "watermelon,fruit,food,picnic,summer" }, broken_heart: { name: "Broken Heart", unified: "1F494", short_name: "broken_heart", short_names: ["broken_heart"], text: "</3", added_in: "6.0", emoticons: ["</3"], search: "broken,heart,sad,sorry,break,heartbreak,</3" }, police_car: { name: "Police Car", unified: "1F693", short_name: "police_car", short_names: ["police_car"], text: "", added_in: "6.0", search: "police,car,vehicle,cars,transportation,law,legal,enforcement" }, bear: { name: "Bear Face", unified: "1F43B", short_name: "bear", short_names: ["bear"], text: "", added_in: "6.0", search: "bear,face,animal,nature,wild" }, joy: { name: "Face with Tears of Joy", unified: "1F602", short_name: "joy", short_names: ["joy"], text: "", added_in: "6.0", search: "joy,face,with,tears,of,cry,weep,happy,happytears,haha" }, ambulance: { name: "Ambulance", unified: "1F691", short_name: "ambulance", short_names: ["ambulance"], text: "", added_in: "6.0", search: "ambulance,health,911,hospital" }, panda_face: { name: "Panda Face", unified: "1F43C", short_name: "panda_face", short_names: ["panda_face"], text: "", added_in: "6.0", search: "panda,face,animal,nature" }, heavy_heart_exclamation_mark_ornament: { name: "Heavy Heart Exclamation Mark Ornament", unified: "2763", variations: ["2763-FE0F"], short_name: "heavy_heart_exclamation_mark_ornament", short_names: ["heavy_heart_exclamation_mark_ornament"], text: "", added_in: "1.1", search: "heavy,heart,exclamation,mark,ornament" }, grapes: { name: "Grapes", unified: "1F347", short_name: "grapes", short_names: ["grapes"], text: "", added_in: "6.0", search: "grapes,fruit,food,wine" }, "8ball": { name: "Billiards", unified: "1F3B1", short_name: "8ball", short_names: ["8ball"], text: "", added_in: "6.0", search: "8ball,billiards,pool,hobby,game,luck,magic" }, fire_engine: { name: "Fire Engine", unified: "1F692", short_name: "fire_engine", short_names: ["fire_engine"], text: "", added_in: "6.0", search: "fire,engine,transportation,cars,vehicle" }, two_hearts: { name: "Two Hearts", unified: "1F495", short_name: "two_hearts", short_names: ["two_hearts"], text: "", added_in: "6.0", search: "two,hearts,love,like,affection,valentines,heart" }, koala: { name: "Koala", unified: "1F428", short_name: "koala", short_names: ["koala"], text: "", added_in: "6.0", search: "koala,animal,nature" }, relaxed: { name: "White Smiling Face", unified: "263A", variations: ["263A-FE0F"], short_name: "relaxed", short_names: ["relaxed"], text: "", added_in: "1.1", search: "relaxed,white,smiling,face,blush,massage,happiness" }, strawberry: { name: "Strawberry", unified: "1F353", short_name: "strawberry", short_names: ["strawberry"], text: "", added_in: "6.0", search: "strawberry,fruit,food,nature" }, tiger: { name: "Tiger Face", unified: "1F42F", short_name: "tiger", short_names: ["tiger"], text: "", added_in: "6.0", search: "tiger,face,animal,cat,danger,wild,nature,roar" }, revolving_hearts: { name: "Revolving Hearts", unified: "1F49E", short_name: "revolving_hearts", short_names: ["revolving_hearts"], text: "", added_in: "6.0", search: "revolving,hearts,love,like,affection,valentines" }, blush: { name: "Smiling Face with Smiling Eyes", unified: "1F60A", short_name: "blush", short_names: ["blush"], text: ":)", added_in: "6.0", search: "blush,smiling,face,with,eyes,smile,happy,flushed,crush,embarrassed,shy,joy" }, melon: { name: "Melon", unified: "1F348", short_name: "melon", short_names: ["melon"], text: "", added_in: "6.0", search: "melon,fruit,nature,food" }, minibus: { name: "Minibus", unified: "1F690", short_name: "minibus", short_names: ["minibus"], text: "", added_in: "6.0", search: "minibus,vehicle,car,transportation" }, innocent: { name: "Smiling Face with Halo", unified: "1F607", short_name: "innocent", short_names: ["innocent"], text: "", added_in: "6.0", search: "innocent,smiling,face,with,halo,angel,heaven" }, heartbeat: { name: "Beating Heart", unified: "1F493", short_name: "heartbeat", short_names: ["heartbeat"], text: "", added_in: "6.0", search: "heartbeat,beating,heart,love,like,affection,valentines,pink" }, cherries: { name: "Cherries", unified: "1F352", short_name: "cherries", short_names: ["cherries"], text: "", added_in: "6.0", search: "cherries,food,fruit" }, truck: { name: "Delivery Truck", unified: "1F69A", short_name: "truck", short_names: ["truck"], text: "", added_in: "6.0", search: "truck,delivery,cars,transportation" }, minidisc: { name: "Minidisc", unified: "1F4BD", short_name: "minidisc", short_names: ["minidisc"], text: "", added_in: "6.0", search: "minidisc,technology,record,data,disk,90s" }, articulated_lorry: { name: "Articulated Lorry", unified: "1F69B", short_name: "articulated_lorry", short_names: ["articulated_lorry"], text: "", added_in: "6.0", search: "articulated,lorry,vehicle,cars,transportation,express" }, peach: { name: "Peach", unified: "1F351", short_name: "peach", short_names: ["peach"], text: "", added_in: "6.0", search: "peach,fruit,nature,food" }, cow: { name: "Cow Face", unified: "1F42E", short_name: "cow", short_names: ["cow"], text: "", added_in: "6.0", search: "cow,face,beef,ox,animal,nature,moo,milk" }, heartpulse: { name: "Growing Heart", unified: "1F497", short_name: "heartpulse", short_names: ["heartpulse"], text: "", added_in: "6.0", search: "heartpulse,growing,heart,like,love,affection,valentines,pink" }, floppy_disk: { name: "Floppy Disk", unified: "1F4BE", short_name: "floppy_disk", short_names: ["floppy_disk"], text: "", added_in: "6.0", search: "floppy,disk,oldschool,technology,save,90s,80s" }, sparkling_heart: { name: "Sparkling Heart", unified: "1F496", short_name: "sparkling_heart", short_names: ["sparkling_heart"], text: "", added_in: "6.0", search: "sparkling,heart,love,like,affection,valentines" }, tractor: { name: "Tractor", unified: "1F69C", short_name: "tractor", short_names: ["tractor"], text: "", added_in: "6.0", search: "tractor,vehicle,car,farming,agriculture" }, pineapple: { name: "Pineapple", unified: "1F34D", short_name: "pineapple", short_names: ["pineapple"], text: "", added_in: "6.0", search: "pineapple,fruit,nature,food" }, pig: { name: "Pig Face", unified: "1F437", short_name: "pig", short_names: ["pig"], text: "", added_in: "6.0", search: "pig,face,animal,oink,nature" }, wink: { name: "Winking Face", unified: "1F609", short_name: "wink", short_names: ["wink"], text: ";)", added_in: "6.0", emoticons: [";)", ";-)"], search: "wink,winking,face,happy,mischievous,secret,;),smile,eye,;-)" }, pig_nose: { name: "Pig Nose", unified: "1F43D", short_name: "pig_nose", short_names: ["pig_nose"], text: "", added_in: "6.0", search: "pig,nose,animal,oink" }, cd: { name: "Optical Disc", unified: "1F4BF", short_name: "cd", short_names: ["cd"], text: "", added_in: "6.0", search: "cd,optical,disc,technology,dvd,disk,90s" }, cupid: { name: "Heart with Arrow", unified: "1F498", short_name: "cupid", short_names: ["cupid"], text: "", added_in: "6.0", search: "cupid,heart,with,arrow,love,like,affection,valentines" }, relieved: { name: "Relieved Face", unified: "1F60C", short_name: "relieved", short_names: ["relieved"], text: "", added_in: "6.0", search: "relieved,face,relaxed,phew,massage,happiness" }, frog: { name: "Frog Face", unified: "1F438", short_name: "frog", short_names: ["frog"], text: "", added_in: "6.0", search: "frog,face,animal,nature,croak,toad" }, bike: { name: "Bicycle", unified: "1F6B2", short_name: "bike", short_names: ["bike"], text: "", added_in: "6.0", search: "bike,bicycle,sports,exercise,hipster" }, golf: { name: "Flag in Hole", unified: "26F3", variations: ["26F3-FE0F"], short_name: "golf", short_names: ["golf"], text: "", added_in: "5.2", search: "golf,flag,in,hole,sports,business,summer" }, dvd: { name: "Dvd", unified: "1F4C0", short_name: "dvd", short_names: ["dvd"], text: "", added_in: "6.0", search: "dvd,cd,disk,disc" }, gift_heart: { name: "Heart with Ribbon", unified: "1F49D", short_name: "gift_heart", short_names: ["gift_heart"], text: "", added_in: "6.0", search: "gift,heart,with,ribbon,love,valentines" }, tomato: { name: "Tomato", unified: "1F345", short_name: "tomato", short_names: ["tomato"], text: "", added_in: "6.0", search: "tomato,fruit,vegetable,nature,food" }, vhs: { name: "Videocassette", unified: "1F4FC", short_name: "vhs", short_names: ["vhs"], text: "", added_in: "6.0", search: "vhs,videocassette,record,video,oldschool,90s,80s" }, heart_decoration: { name: "Heart Decoration", unified: "1F49F", short_name: "heart_decoration", short_names: ["heart_decoration"], text: "", added_in: "6.0", search: "heart,decoration,purple-square,love,like" }, monkey_face: { name: "Monkey Face", unified: "1F435", short_name: "monkey_face", short_names: ["monkey_face"], text: "", added_in: "6.0", emoticons: [":o)"], search: "monkey,face,animal,nature,circus,:o)" }, heart_eyes: { name: "Smiling Face with Heart-Shaped Eyes", unified: "1F60D", short_name: "heart_eyes", short_names: ["heart_eyes"], text: "", added_in: "6.0", search: "heart,eyes,smiling,face,with,shaped,love,like,affection,valentines,infatuation,crush" }, peace_symbol: { name: "Peace Symbol", unified: "262E", variations: ["262E-FE0F"], short_name: "peace_symbol", short_names: ["peace_symbol"], text: "", added_in: "1.1", search: "peace,symbol,hippie" }, camera: { name: "Camera", unified: "1F4F7", short_name: "camera", short_names: ["camera"], text: "", added_in: "6.0", search: "camera,gadgets,photography" }, kissing_heart: { name: "Face Throwing a Kiss", unified: "1F618", short_name: "kissing_heart", short_names: ["kissing_heart"], text: "", added_in: "6.0", emoticons: [":*", ":-*"], search: "kissing,heart,face,throwing,a,kiss,love,like,affection,valentines,infatuation,:*,:-*" }, eggplant: { name: "Aubergine", unified: "1F346", short_name: "eggplant", short_names: ["eggplant"], text: "", added_in: "6.0", search: "eggplant,aubergine,vegetable,nature,food" }, see_no_evil: { name: "See-No-Evil Monkey", unified: "1F648", short_name: "see_no_evil", short_names: ["see_no_evil"], text: "", added_in: "6.0", search: "see,no,evil,monkey,animal,nature,haha" }, fishing_pole_and_fish: { name: "Fishing Pole and Fish", unified: "1F3A3", short_name: "fishing_pole_and_fish", short_names: ["fishing_pole_and_fish"], text: "", added_in: "6.0", search: "fishing,pole,and,fish,food,hobby,summer" }, rotating_light: { name: "Police Cars Revolving Light", unified: "1F6A8", short_name: "rotating_light", short_names: ["rotating_light"], text: "", added_in: "6.0", search: "rotating,light,police,cars,revolving,ambulance,911,emergency,alert,error,pinged,law,legal" }, hear_no_evil: { name: "Hear-No-Evil Monkey", unified: "1F649", short_name: "hear_no_evil", short_names: ["hear_no_evil"], text: "", added_in: "6.0", search: "hear,no,evil,monkey,animal,nature" }, kissing: { name: "Kissing Face", unified: "1F617", short_name: "kissing", short_names: ["kissing"], text: "", added_in: "6.1", search: "kissing,face,love,like,3,valentines,infatuation,kiss" }, latin_cross: { name: "Latin Cross", unified: "271D", variations: ["271D-FE0F"], short_name: "latin_cross", short_names: ["latin_cross"], text: "", added_in: "1.1", search: "latin,cross,christianity" }, star_and_crescent: { name: "Star and Crescent", unified: "262A", variations: ["262A-FE0F"], short_name: "star_and_crescent", short_names: ["star_and_crescent"], text: "", added_in: "1.1", search: "star,and,crescent,islam" }, video_camera: { name: "Video Camera", unified: "1F4F9", short_name: "video_camera", short_names: ["video_camera"], text: "", added_in: "6.0", search: "video,camera,film,record" }, kissing_smiling_eyes: { name: "Kissing Face with Smiling Eyes", unified: "1F619", short_name: "kissing_smiling_eyes", short_names: ["kissing_smiling_eyes"], text: "", added_in: "6.1", search: "kissing,smiling,eyes,face,with,affection,valentines,infatuation,kiss" }, speak_no_evil: { name: "Speak-No-Evil Monkey", unified: "1F64A", short_name: "speak_no_evil", short_names: ["speak_no_evil"], text: "", added_in: "6.0", search: "speak,no,evil,monkey,animal,nature,omg" }, oncoming_police_car: { name: "Oncoming Police Car", unified: "1F694", short_name: "oncoming_police_car", short_names: ["oncoming_police_car"], text: "", added_in: "6.0", search: "oncoming,police,car,vehicle,law,legal,enforcement,911" }, oncoming_bus: { name: "Oncoming Bus", unified: "1F68D", short_name: "oncoming_bus", short_names: ["oncoming_bus"], text: "", added_in: "6.0", search: "oncoming,bus,vehicle,transportation" }, movie_camera: { name: "Movie Camera", unified: "1F3A5", short_name: "movie_camera", short_names: ["movie_camera"], text: "", added_in: "6.0", search: "movie,camera,film,record" }, corn: { name: "Ear of Maize", unified: "1F33D", short_name: "corn", short_names: ["corn"], text: "", added_in: "6.0", search: "corn,ear,of,maize,food,vegetable,plant" }, monkey: { name: "Monkey", unified: "1F412", short_name: "monkey", short_names: ["monkey"], text: "", added_in: "6.0", search: "monkey,animal,nature,banana,circus" }, ice_skate: { name: "Ice Skate", unified: "26F8", short_name: "ice_skate", short_names: ["ice_skate"], text: "", added_in: "5.2", search: "ice,skate,sports" }, kissing_closed_eyes: { name: "Kissing Face with Closed Eyes", unified: "1F61A", short_name: "kissing_closed_eyes", short_names: ["kissing_closed_eyes"], text: "", added_in: "6.0", search: "kissing,closed,eyes,face,with,love,like,affection,valentines,infatuation,kiss" }, oncoming_automobile: { name: "Oncoming Automobile", unified: "1F698", short_name: "oncoming_automobile", short_names: ["oncoming_automobile"], text: "", added_in: "6.0", search: "oncoming,automobile,car,vehicle,transportation" }, yum: { name: "Face Savouring Delicious Food", unified: "1F60B", short_name: "yum", short_names: ["yum"], text: "", added_in: "6.0", search: "yum,face,savouring,delicious,food,happy,joy,tongue,smile,silly,yummy,nom" }, chicken: { name: "Chicken", unified: "1F414", short_name: "chicken", short_names: ["chicken"], text: "", added_in: "6.0", search: "chicken,animal,cluck,nature,bird" }, wheel_of_dharma: { name: "Wheel of Dharma", unified: "2638", variations: ["2638-FE0F"], short_name: "wheel_of_dharma", short_names: ["wheel_of_dharma"], text: "", added_in: "1.1", search: "wheel,of,dharma,hinduism,buddhism,sikhism,jainism" }, ski: { name: "Ski and Ski Boot", unified: "1F3BF", short_name: "ski", short_names: ["ski"], text: "", added_in: "6.0", search: "ski,and,boot,sports,winter,cold,snow" }, stuck_out_tongue_winking_eye: { name: "Face with Stuck-out Tongue and Winking Eye", unified: "1F61C", short_name: "stuck_out_tongue_winking_eye", short_names: ["stuck_out_tongue_winking_eye"], text: ";p", added_in: "6.0", emoticons: [";p", ";-p", ";b", ";-b", ";P", ";-P"], search: "stuck,out,tongue,winking,eye,face,with,and,prank,childish,playful,mischievous,smile,wink,;p,;-p,;b,;-b" }, star_of_david: { name: "Star of David", unified: "2721", variations: ["2721-FE0F"], short_name: "star_of_david", short_names: ["star_of_david"], text: "", added_in: "1.1", search: "star,of,david,judaism" }, skier: { name: "Skier", unified: "26F7", short_name: "skier", short_names: ["skier"], text: "", added_in: "5.2", search: "skier,sports,winter,snow" }, oncoming_taxi: { name: "Oncoming Taxi", unified: "1F696", short_name: "oncoming_taxi", short_names: ["oncoming_taxi"], text: "", added_in: "6.0", search: "oncoming,taxi,vehicle,cars,uber" }, penguin: { name: "Penguin", unified: "1F427", short_name: "penguin", short_names: ["penguin"], text: "", added_in: "6.0", search: "penguin,animal,nature" }, telephone_receiver: { name: "Telephone Receiver", unified: "1F4DE", short_name: "telephone_receiver", short_names: ["telephone_receiver"], text: "", added_in: "6.0", search: "telephone,receiver,technology,communication,dial" }, sweet_potato: { name: "Roasted Sweet Potato", unified: "1F360", short_name: "sweet_potato", short_names: ["sweet_potato"], text: "", added_in: "6.0", search: "sweet,potato,roasted,food,nature" }, stuck_out_tongue_closed_eyes: { name: "Face with Stuck-out Tongue and Tightly-Closed Eyes", unified: "1F61D", short_name: "stuck_out_tongue_closed_eyes", short_names: ["stuck_out_tongue_closed_eyes"], text: "", added_in: "6.0", search: "stuck,out,tongue,closed,eyes,face,with,and,tightly,prank,playful,mischievous,smile" }, bird: { name: "Bird", unified: "1F426", short_name: "bird", short_names: ["bird"], text: "", added_in: "6.0", search: "bird,animal,nature,fly,tweet,spring" }, aerial_tramway: { name: "Aerial Tramway", unified: "1F6A1", short_name: "aerial_tramway", short_names: ["aerial_tramway"], text: "", added_in: "6.0", search: "aerial,tramway,transportation,vehicle,ski" }, six_pointed_star: { name: "Six Pointed Star with Middle Dot", unified: "1F52F", short_name: "six_pointed_star", short_names: ["six_pointed_star"], text: "", added_in: "6.0", search: "six,pointed,star,with,middle,dot,purple-square,religion,jewish,hexagram" }, phone: { name: "Black Telephone", unified: "260E", variations: ["260E-FE0F"], short_name: "phone", short_names: ["phone", "telephone"], text: "", added_in: "1.1", search: "phone,telephone,black,technology,communication,dial" }, baby_chick: { name: "Baby Chick", unified: "1F424", short_name: "baby_chick", short_names: ["baby_chick"], text: "", added_in: "6.0", search: "baby,chick,animal,chicken,bird" }, chestnut: { name: "Chestnut", unified: "1F330", short_name: "chestnut", short_names: ["chestnut"], text: "", added_in: "6.0", search: "chestnut,food,squirrel" }, stuck_out_tongue: { name: "Face with Stuck-out Tongue", unified: "1F61B", short_name: "stuck_out_tongue", short_names: ["stuck_out_tongue"], text: ":p", added_in: "6.1", emoticons: [":p", ":-p", ":P", ":-P", ":b", ":-b"], search: "stuck,out,tongue,face,with,prank,childish,playful,mischievous,smile,:p,:-p,:b,:-b" }, mountain_cableway: { name: "Mountain Cableway", unified: "1F6A0", short_name: "mountain_cableway", short_names: ["mountain_cableway"], text: "", added_in: "6.0", search: "mountain,cableway,transportation,vehicle,ski" }, yin_yang: { name: "Yin Yang", unified: "262F", variations: ["262F-FE0F"], short_name: "yin_yang", short_names: ["yin_yang"], text: "", added_in: "1.1", search: "yin,yang,balance" }, suspension_railway: { name: "Suspension Railway", unified: "1F69F", short_name: "suspension_railway", short_names: ["suspension_railway"], text: "", added_in: "6.0", search: "suspension,railway,vehicle,transportation" }, pager: { name: "Pager", unified: "1F4DF", short_name: "pager", short_names: ["pager"], text: "", added_in: "6.0", search: "pager,bbcall,oldschool,90s" }, hatching_chick: { name: "Hatching Chick", unified: "1F423", short_name: "hatching_chick", short_names: ["hatching_chick"], text: "", added_in: "6.0", search: "hatching,chick,animal,chicken,egg,born,baby,bird" }, fax: { name: "Fax Machine", unified: "1F4E0", short_name: "fax", short_names: ["fax"], text: "", added_in: "6.0", search: "fax,machine,communication,technology" }, railway_car: { name: "Railway Car", unified: "1F683", short_name: "railway_car", short_names: ["railway_car"], text: "", added_in: "6.0", search: "railway,car,transportation,vehicle" }, hatched_chick: { name: "Front-Facing Baby Chick", unified: "1F425", short_name: "hatched_chick", short_names: ["hatched_chick"], text: "", added_in: "6.0", search: "hatched,chick,front,facing,baby,animal,chicken,bird" }, honey_pot: { name: "Honey Pot", unified: "1F36F", short_name: "honey_pot", short_names: ["honey_pot"], text: "", added_in: "6.0", search: "honey,pot,bees,sweet,kitchen" }, orthodox_cross: { name: "Orthodox Cross", unified: "2626", variations: ["2626-FE0F"], short_name: "orthodox_cross", short_names: ["orthodox_cross"], text: "", added_in: "1.1", search: "orthodox,cross,suppedaneum,religion" }, train: { name: "Tram Car", unified: "1F68B", short_name: "train", short_names: ["train"], text: "", added_in: "6.0", search: "train,tram,car,transportation,vehicle,carriage,public,travel" }, tv: { name: "Television", unified: "1F4FA", short_name: "tv", short_names: ["tv"], text: "", added_in: "6.0", search: "tv,television,technology,program,oldschool,show" }, sunglasses: { name: "Smiling Face with Sunglasses", unified: "1F60E", short_name: "sunglasses", short_names: ["sunglasses"], text: "", added_in: "6.0", emoticons: ["8)"], search: "sunglasses,smiling,face,with,cool,smile,summer,beach,sunglass,8)" }, ophiuchus: { name: "Ophiuchus", unified: "26CE", short_name: "ophiuchus", short_names: ["ophiuchus"], text: "", added_in: "6.0", search: "ophiuchus,sign,purple-square,constellation,astrology" }, bread: { name: "Bread", unified: "1F35E", short_name: "bread", short_names: ["bread"], text: "", added_in: "6.0", search: "bread,food,wheat,breakfast,toast" }, mountain_railway: { name: "Mountain Railway", unified: "1F69E", short_name: "mountain_railway", short_names: ["mountain_railway"], text: "", added_in: "6.0", search: "mountain,railway,transportation,vehicle" }, radio: { name: "Radio", unified: "1F4FB", short_name: "radio", short_names: ["radio"], text: "", added_in: "6.0", search: "radio,communication,music,podcast,program" }, monorail: { name: "Monorail", unified: "1F69D", short_name: "monorail", short_names: ["monorail"], text: "", added_in: "6.0", search: "monorail,transportation,vehicle" }, aries: { name: "Aries", unified: "2648", variations: ["2648-FE0F"], short_name: "aries", short_names: ["aries"], text: "", added_in: "1.1", search: "aries,sign,purple-square,zodiac,astrology" }, taurus: { name: "Taurus", unified: "2649", variations: ["2649-FE0F"], short_name: "taurus", short_names: ["taurus"], text: "", added_in: "1.1", search: "taurus,purple-square,sign,zodiac,astrology" }, bullettrain_side: { name: "High-Speed Train", unified: "1F684", short_name: "bullettrain_side", short_names: ["bullettrain_side"], text: "", added_in: "6.0", search: "bullettrain,side,high,speed,train,transportation,vehicle" }, smirk: { name: "Smirking Face", unified: "1F60F", short_name: "smirk", short_names: ["smirk"], text: "", added_in: "6.0", search: "smirk,smirking,face,smile,mean,prank,smug,sarcasm" }, gemini: { name: "Gemini", unified: "264A", variations: ["264A-FE0F"], short_name: "gemini", short_names: ["gemini"], text: "", added_in: "1.1", search: "gemini,sign,zodiac,purple-square,astrology" }, bullettrain_front: { name: "High-Speed Train with Bullet Nose", unified: "1F685", short_name: "bullettrain_front", short_names: ["bullettrain_front"], text: "", added_in: "6.0", search: "bullettrain,front,high,speed,train,with,bullet,nose,transportation,vehicle,fast,public,travel" }, wolf: { name: "Wolf Face", unified: "1F43A", short_name: "wolf", short_names: ["wolf"], text: "", added_in: "6.0", search: "wolf,face,animal,nature,wild" }, stopwatch: { name: "Stopwatch", unified: "23F1", short_name: "stopwatch", short_names: ["stopwatch"], text: "", added_in: "6.0", search: "stopwatch,time,deadline" }, unamused: { name: "Unamused Face", unified: "1F612", short_name: "unamused", short_names: ["unamused"], text: ":(", added_in: "6.0", search: "unamused,face,indifference,bored,straight face,serious,sarcasm" }, light_rail: { name: "Light Rail", unified: "1F688", short_name: "light_rail", short_names: ["light_rail"], text: "", added_in: "6.0", search: "light,rail,transportation,vehicle" }, boar: { name: "Boar", unified: "1F417", short_name: "boar", short_names: ["boar"], text: "", added_in: "6.0", search: "boar,animal,nature" }, fried_egg: { name: "Cooking", unified: "1F373", short_name: "fried_egg", short_names: ["fried_egg", "cooking"], text: "", added_in: "6.0", search: "fried,egg,cooking,food,breakfast,kitchen" }, cancer: { name: "Cancer", unified: "264B", variations: ["264B-FE0F"], short_name: "cancer", short_names: ["cancer"], text: "", added_in: "1.1", search: "cancer,sign,zodiac,purple-square,astrology" }, leo: { name: "Leo", unified: "264C", variations: ["264C-FE0F"], short_name: "leo", short_names: ["leo"], text: "", added_in: "1.1", search: "leo,sign,purple-square,zodiac,astrology" }, disappointed: { name: "Disappointed Face", unified: "1F61E", short_name: "disappointed", short_names: ["disappointed"], text: ":(", added_in: "6.0", emoticons: ["):", ":(", ":-("], search: "disappointed,face,sad,upset,depressed,:(,):,:-(" }, timer_clock: { name: "Timer Clock", unified: "23F2", short_name: "timer_clock", short_names: ["timer_clock"], text: "", added_in: "6.0", search: "timer,clock,alarm" }, steam_locomotive: { name: "Steam Locomotive", unified: "1F682", short_name: "steam_locomotive", short_names: ["steam_locomotive"], text: "", added_in: "6.0", search: "steam,locomotive,transportation,vehicle,train" }, horse: { name: "Horse Face", unified: "1F434", short_name: "horse", short_names: ["horse"], text: "", added_in: "6.0", search: "horse,face,animal,brown,nature" }, pensive: { name: "Pensive Face", unified: "1F614", short_name: "pensive", short_names: ["pensive"], text: "", added_in: "6.0", search: "pensive,face,sad,depressed,okay,upset" }, "train2": { name: "Train", unified: "1F686", short_name: "train2", short_names: ["train2"], text: "", added_in: "6.0", search: "train2,train,transportation,vehicle" }, virgo: { name: "Virgo", unified: "264D", variations: ["264D-FE0F"], short_name: "virgo", short_names: ["virgo"], text: "", added_in: "1.1", search: "virgo,sign,zodiac,purple-square,astrology" }, alarm_clock: { name: "Alarm Clock", unified: "23F0", short_name: "alarm_clock", short_names: ["alarm_clock"], text: "", added_in: "6.0", search: "alarm,clock,time,wake" }, fried_shrimp: { name: "Fried Shrimp", unified: "1F364", short_name: "fried_shrimp", short_names: ["fried_shrimp"], text: "", added_in: "6.0", search: "fried,shrimp,food,animal,appetizer,summer" }, worried: { name: "Worried Face", unified: "1F61F", short_name: "worried", short_names: ["worried"], text: "", added_in: "6.1", search: "worried,face,concern,nervous,:(" }, libra: { name: "Libra", unified: "264E", variations: ["264E-FE0F"], short_name: "libra", short_names: ["libra"], text: "", added_in: "1.1", search: "libra,sign,purple-square,zodiac,astrology" }, metro: { name: "Metro", unified: "1F687", short_name: "metro", short_names: ["metro"], text: "", added_in: "6.0", search: "metro,transportation,blue-square,mrt,underground,tube" }, bee: { name: "Honeybee", unified: "1F41D", short_name: "bee", short_names: ["bee", "honeybee"], text: "", added_in: "6.0", search: "bee,honeybee" }, hourglass: { name: "Hourglass", unified: "231B", variations: ["231B-FE0F"], short_name: "hourglass", short_names: ["hourglass"], text: "", added_in: "1.1", search: "hourglass,time,clock,oldschool,limit,exam,quiz,test" }, tram: { name: "Tram", unified: "1F68A", short_name: "tram", short_names: ["tram"], text: "", added_in: "6.0", search: "tram,transportation,vehicle" }, scorpius: { name: "Scorpius", unified: "264F", variations: ["264F-FE0F"], short_name: "scorpius", short_names: ["scorpius"], text: "", added_in: "1.1", search: "scorpius,sign,zodiac,purple-square,astrology,scorpio" }, poultry_leg: { name: "Poultry Leg", unified: "1F357", short_name: "poultry_leg", short_names: ["poultry_leg"], text: "", added_in: "6.0", search: "poultry,leg,food,meat,drumstick,bird,chicken,turkey" }, bug: { name: "Bug", unified: "1F41B", short_name: "bug", short_names: ["bug"], text: "", added_in: "6.0", search: "bug,animal,insect,nature,worm" }, confused: { name: "Confused Face", unified: "1F615", short_name: "confused", short_names: ["confused"], text: "", added_in: "6.1", emoticons: [":\\", ":-\\", ":/", ":-/"], search: "confused,face,indifference,huh,weird,hmmm,:/,:\\,:-\\,:-/" }, sagittarius: { name: "Sagittarius", unified: "2650", variations: ["2650-FE0F"], short_name: "sagittarius", short_names: ["sagittarius"], text: "", added_in: "1.1", search: "sagittarius,sign,zodiac,purple-square,astrology" }, hourglass_flowing_sand: { name: "Hourglass with Flowing Sand", unified: "23F3", short_name: "hourglass_flowing_sand", short_names: ["hourglass_flowing_sand"], text: "", added_in: "6.0", search: "hourglass,flowing,sand,with,oldschool,time,countdown" }, station: { name: "Station", unified: "1F689", short_name: "station", short_names: ["station"], text: "", added_in: "6.0", search: "station,transportation,vehicle,public" }, meat_on_bone: { name: "Meat on Bone", unified: "1F356", short_name: "meat_on_bone", short_names: ["meat_on_bone"], text: "", added_in: "6.0", search: "meat,on,bone,good,food,drumstick" }, satellite_antenna: { name: "Satellite Antenna", unified: "1F4E1", short_name: "satellite_antenna", short_names: ["satellite_antenna"], text: "", added_in: "6.0", search: "satellite,antenna" }, helicopter: { name: "Helicopter", unified: "1F681", short_name: "helicopter", short_names: ["helicopter"], text: "", added_in: "6.0", search: "helicopter,transportation,vehicle,fly" }, pizza: { name: "Slice of Pizza", unified: "1F355", short_name: "pizza", short_names: ["pizza"], text: "", added_in: "6.0", search: "pizza,slice,of,food,party" }, snail: { name: "Snail", unified: "1F40C", short_name: "snail", short_names: ["snail"], text: "", added_in: "6.0", search: "snail,slow,animal,shell" }, white_frowning_face: { name: "White Frowning Face", unified: "2639", variations: ["2639-FE0F"], short_name: "white_frowning_face", short_names: ["white_frowning_face"], text: "", added_in: "1.1", search: "white,frowning,face" }, capricorn: { name: "Capricorn", unified: "2651", variations: ["2651-FE0F"], short_name: "capricorn", short_names: ["capricorn"], text: "", added_in: "1.1", search: "capricorn,sign,zodiac,purple-square,astrology" }, battery: { name: "Battery", unified: "1F50B", short_name: "battery", short_names: ["battery"], text: "", added_in: "6.0", search: "battery,power,energy,sustain" }, shell: { name: "Spiral Shell", unified: "1F41A", short_name: "shell", short_names: ["shell"], text: "", added_in: "6.0", search: "shell,spiral,nature,sea,beach" }, aquarius: { name: "Aquarius", unified: "2652", variations: ["2652-FE0F"], short_name: "aquarius", short_names: ["aquarius"], text: "", added_in: "1.1", search: "aquarius,sign,purple-square,zodiac,astrology" }, persevere: { name: "Persevering Face", unified: "1F623", short_name: "persevere", short_names: ["persevere"], text: "", added_in: "6.0", search: "persevere,persevering,face,sick,no,upset,oops" }, beetle: { name: "Lady Beetle", unified: "1F41E", short_name: "beetle", short_names: ["beetle"], text: "", added_in: "6.0", search: "beetle,lady,animal,insect,nature,ladybug" }, airplane: { name: "Airplane", unified: "2708", variations: ["2708-FE0F"], short_name: "airplane", short_names: ["airplane"], text: "", added_in: "1.1", search: "airplane,vehicle,transportation,flight,fly" }, pisces: { name: "Pisces", unified: "2653", variations: ["2653-FE0F"], short_name: "pisces", short_names: ["pisces"], text: "", added_in: "1.1", search: "pisces,purple-square,sign,zodiac,astrology" }, electric_plug: { name: "Electric Plug", unified: "1F50C", short_name: "electric_plug", short_names: ["electric_plug"], text: "", added_in: "6.0", search: "electric,plug,charger,power" }, hamburger: { name: "Hamburger", unified: "1F354", short_name: "hamburger", short_names: ["hamburger"], text: "", added_in: "6.0", search: "hamburger,meat,fast food,beef,cheeseburger,mcdonalds,burger king" }, confounded: { name: "Confounded Face", unified: "1F616", short_name: "confounded", short_names: ["confounded"], text: "", added_in: "6.0", search: "confounded,face,confused,sick,unwell,oops,:s" }, tired_face: { name: "Tired Face", unified: "1F62B", short_name: "tired_face", short_names: ["tired_face"], text: "", added_in: "6.0", search: "tired,face,sick,whine,upset,frustrated" }, fries: { name: "French Fries", unified: "1F35F", short_name: "fries", short_names: ["fries"], text: "", added_in: "6.0", search: "fries,french,chips,snack,fast food" }, bulb: { name: "Electric Light Bulb", unified: "1F4A1", short_name: "bulb", short_names: ["bulb"], text: "", added_in: "6.0", search: "bulb,electric,light,electricity,idea" }, id: { name: "Squared Id", unified: "1F194", short_name: "id", short_names: ["id"], text: "", added_in: "6.0", search: "id,squared,purple-square,words" }, ant: { name: "Ant", unified: "1F41C", short_name: "ant", short_names: ["ant"], text: "", added_in: "6.0", search: "ant,animal,insect,nature,bug" }, weary: { name: "Weary Face", unified: "1F629", short_name: "weary", short_names: ["weary"], text: "", added_in: "6.0", search: "weary,face,tired,sleepy,sad,frustrated,upset" }, flashlight: { name: "Electric Torch", unified: "1F526", short_name: "flashlight", short_names: ["flashlight"], text: "", added_in: "6.0", search: "flashlight,electric,torch,dark,camping,sight,night" }, atom_symbol: { name: "Atom Symbol", unified: "269B", variations: ["269B-FE0F"], short_name: "atom_symbol", short_names: ["atom_symbol"], text: "", added_in: "4.1", search: "atom,symbol,science" }, triumph: { name: "Face with Look of Triumph", unified: "1F624", short_name: "triumph", short_names: ["triumph"], text: "", added_in: "6.0", search: "triumph,face,with,look,of,gas,phew,proud,pride" }, accept: { name: "Circled Ideograph Accept", unified: "1F251", short_name: "accept", short_names: ["accept"], text: "", added_in: "6.0", search: "accept,circled,ideograph,ok,good,chinese,kanji,agree,yes,orange-circle" }, rocket: { name: "Rocket", unified: "1F680", short_name: "rocket", short_names: ["rocket"], text: "", added_in: "6.0", search: "rocket,launch,ship,staffmode,nasa,outer space,outer_space,fly" }, radioactive_sign: { name: "Radioactive Sign", unified: "2622", variations: ["2622-FE0F"], short_name: "radioactive_sign", short_names: ["radioactive_sign"], text: "", added_in: "1.1", search: "radioactive,sign" }, angry: { name: "Angry Face", unified: "1F620", short_name: "angry", short_names: ["angry"], text: "", added_in: "6.0", emoticons: [">:(", ">:-("], search: "angry,face,mad,annoyed,frustrated,>:(,>:-(" }, turtle: { name: "Turtle", unified: "1F422", short_name: "turtle", short_names: ["turtle"], text: "", added_in: "6.0", search: "turtle,animal,slow,nature,tortoise" }, snake: { name: "Snake", unified: "1F40D", short_name: "snake", short_names: ["snake"], text: "", added_in: "6.0", search: "snake,animal,evil,nature,hiss,python" }, rage: { name: "Pouting Face", unified: "1F621", short_name: "rage", short_names: ["rage"], text: "", added_in: "6.0", search: "rage,pouting,face,angry,mad,hate,despise" }, seat: { name: "Seat", unified: "1F4BA", short_name: "seat", short_names: ["seat"], text: "", added_in: "6.0", search: "seat,sit,airplane,transport,bus,flight,fly" }, biohazard_sign: { name: "Biohazard Sign", unified: "2623", variations: ["2623-FE0F"], short_name: "biohazard_sign", short_names: ["biohazard_sign"], text: "", added_in: "1.1", search: "biohazard,sign" }, mobile_phone_off: { name: "Mobile Phone off", unified: "1F4F4", short_name: "mobile_phone_off", short_names: ["mobile_phone_off"], text: "", added_in: "6.0", search: "mobile,phone,off,mute,orange-square,silence,quiet" }, money_with_wings: { name: "Money with Wings", unified: "1F4B8", short_name: "money_with_wings", short_names: ["money_with_wings"], text: "", added_in: "6.0", search: "money,with,wings,dollar,bills,payment,sale" }, no_mouth: { name: "Face Without Mouth", unified: "1F636", short_name: "no_mouth", short_names: ["no_mouth"], text: "", added_in: "6.0", search: "no,mouth,face,without,hellokitty" }, neutral_face: { name: "Neutral Face", unified: "1F610", short_name: "neutral_face", short_names: ["neutral_face"], text: "", added_in: "6.0", emoticons: [":|", ":-|"], search: "neutral,face,indifference,meh,:|,:-|" }, dollar: { name: "Banknote with Dollar Sign", unified: "1F4B5", short_name: "dollar", short_names: ["dollar"], text: "", added_in: "6.0", search: "dollar,banknote,with,sign,money,sales,bill,currency" }, vibration_mode: { name: "Vibration Mode", unified: "1F4F3", short_name: "vibration_mode", short_names: ["vibration_mode"], text: "", added_in: "6.0", search: "vibration,mode,orange-square,phone" }, spaghetti: { name: "Spaghetti", unified: "1F35D", short_name: "spaghetti", short_names: ["spaghetti"], text: "", added_in: "6.0", search: "spaghetti,food,italian,noodle" }, boat: { name: "Sailboat", unified: "26F5", variations: ["26F5-FE0F"], short_name: "boat", short_names: ["boat", "sailboat"], text: "", added_in: "5.2", search: "boat,sailboat" }, expressionless: { name: "Expressionless Face", unified: "1F611", short_name: "expressionless", short_names: ["expressionless"], text: "", added_in: "6.1", search: "expressionless,face,indifferent,-_-,meh,deadpan" }, "u6709": { name: "Squared Cjk Unified Ideograph-6709", unified: "1F236", short_name: "u6709", short_names: ["u6709"], text: "", added_in: "6.0", search: "u6709,squared,cjk,unified,ideograph,6709,orange-square,chinese,have,kanji" }, yen: { name: "Banknote with Yen Sign", unified: "1F4B4", short_name: "yen", short_names: ["yen"], text: "", added_in: "6.0", search: "yen,banknote,with,sign,money,sales,japanese,dollar,currency" }, ramen: { name: "Steaming Bowl", unified: "1F35C", short_name: "ramen", short_names: ["ramen"], text: "", added_in: "6.0", search: "ramen,steaming,bowl,food,japanese,noodle,chopsticks" }, hushed: { name: "Hushed Face", unified: "1F62F", short_name: "hushed", short_names: ["hushed"], text: "", added_in: "6.1", search: "hushed,face,woo,shh" }, "u7121": { name: "Squared Cjk Unified Ideograph-7121", unified: "1F21A", variations: ["1F21A-FE0F"], short_name: "u7121", short_names: ["u7121"], text: "", added_in: "5.2", search: "u7121,squared,cjk,unified,ideograph,7121,nothing,chinese,kanji,japanese,orange-square" }, speedboat: { name: "Speedboat", unified: "1F6A4", short_name: "speedboat", short_names: ["speedboat"], text: "", added_in: "6.0", search: "speedboat,ship,transportation,vehicle,summer" }, stew: { name: "Pot of Food", unified: "1F372", short_name: "stew", short_names: ["stew"], text: "", added_in: "6.0", search: "stew,pot,of,food,meat,soup" }, euro: { name: "Banknote with Euro Sign", unified: "1F4B6", short_name: "euro", short_names: ["euro"], text: "", added_in: "6.0", search: "euro,banknote,with,sign,money,sales,dollar,currency" }, pound: { name: "Banknote with Pound Sign", unified: "1F4B7", short_name: "pound", short_names: ["pound"], text: "", added_in: "6.0", search: "pound,banknote,with,sign,british,sterling,money,sales,bills,uk,england,currency" }, fish_cake: { name: "Fish Cake with Swirl Design", unified: "1F365", short_name: "fish_cake", short_names: ["fish_cake"], text: "", added_in: "6.0", search: "fish,cake,with,swirl,design,food,japan,sea,beach" }, octopus: { name: "Octopus", unified: "1F419", short_name: "octopus", short_names: ["octopus"], text: "", added_in: "6.0", search: "octopus,animal,creature,ocean,sea,nature,beach" }, frowning: { name: "Frowning Face with Open Mouth", unified: "1F626", short_name: "frowning", short_names: ["frowning"], text: "", added_in: "6.1", search: "frowning,face,with,open,mouth,aw,what" }, "u7533": { name: "Squared Cjk Unified Ideograph-7533", unified: "1F238", short_name: "u7533", short_names: ["u7533"], text: "", added_in: "6.0", search: "u7533,squared,cjk,unified,ideograph,7533,chinese,japanese,kanji,orange-square" }, "u55b6": { name: "Squared Cjk Unified Ideograph-55b6", unified: "1F23A", short_name: "u55b6", short_names: ["u55b6"], text: "", added_in: "6.0", search: "u55b6,squared,cjk,unified,ideograph,55b6,japanese,opening hours,orange-square" }, anguished: { name: "Anguished Face", unified: "1F627", short_name: "anguished", short_names: ["anguished"], text: "", added_in: "6.1", emoticons: ["D:"], search: "anguished,face,stunned,nervous,d:" }, moneybag: { name: "Money Bag", unified: "1F4B0", short_name: "moneybag", short_names: ["moneybag"], text: "", added_in: "6.0", search: "moneybag,money,bag,dollar,payment,coins,sale" }, sushi: { name: "Sushi", unified: "1F363", short_name: "sushi", short_names: ["sushi"], text: "", added_in: "6.0", search: "sushi,food,fish,japanese,rice" }, ferry: { name: "Ferry", unified: "26F4", short_name: "ferry", short_names: ["ferry"], text: "", added_in: "5.2", search: "ferry,boat,ship,yacht" }, credit_card: { name: "Credit Card", unified: "1F4B3", short_name: "credit_card", short_names: ["credit_card"], text: "", added_in: "6.0", search: "credit,card,money,sales,dollar,bill,payment,shopping" }, bento: { name: "Bento Box", unified: "1F371", short_name: "bento", short_names: ["bento"], text: "", added_in: "6.0", search: "bento,box,food,japanese" }, ship: { name: "Ship", unified: "1F6A2", short_name: "ship", short_names: ["ship"], text: "", added_in: "6.0", search: "ship,transportation,titanic,deploy" }, open_mouth: { name: "Face with Open Mouth", unified: "1F62E", short_name: "open_mouth", short_names: ["open_mouth"], text: "", added_in: "6.1", emoticons: [":o", ":-o", ":O", ":-O"], search: "open,mouth,face,with,surprise,impressed,wow,whoa,:o,:-o" }, "u6708": { name: "Squared Cjk Unified Ideograph-6708", unified: "1F237", variations: ["1F237-FE0F"], short_name: "u6708", short_names: ["u6708"], text: "", added_in: "6.0", search: "u6708,squared,cjk,unified,ideograph,6708,chinese,month,moon,japanese,orange-square,kanji" }, tropical_fish: { name: "Tropical Fish", unified: "1F420", short_name: "tropical_fish", short_names: ["tropical_fish"], text: "", added_in: "6.0", search: "tropical,fish,animal,swim,ocean,beach,nemo" }, fish: { name: "Fish", unified: "1F41F", short_name: "fish", short_names: ["fish"], text: "", added_in: "6.0", search: "fish,animal,food,nature" }, eight_pointed_black_star: { name: "Eight Pointed Black Star", unified: "2734", variations: ["2734-FE0F"], short_name: "eight_pointed_black_star", short_names: ["eight_pointed_black_star"], text: "", added_in: "1.1", search: "eight,pointed,black,star,orange-square,shape,polygon" }, anchor: { name: "Anchor", unified: "2693", variations: ["2693-FE0F"], short_name: "anchor", short_names: ["anchor"], text: "", added_in: "4.1", search: "anchor,ship,ferry,sea,boat" }, gem: { name: "Gem Stone", unified: "1F48E", short_name: "gem", short_names: ["gem"], text: "", added_in: "6.0", search: "gem,stone,blue,ruby,diamond,jewelry" }, astonished: { name: "Astonished Face", unified: "1F632", short_name: "astonished", short_names: ["astonished"], text: "", added_in: "6.0", search: "astonished,face,xox,surprised,poisoned" }, curry: { name: "Curry and Rice", unified: "1F35B", short_name: "curry", short_names: ["curry"], text: "", added_in: "6.0", search: "curry,and,rice,food,spicy,hot,indian" }, blowfish: { name: "Blowfish", unified: "1F421", short_name: "blowfish", short_names: ["blowfish"], text: "", added_in: "6.0", search: "blowfish,animal,nature,food,sea,ocean" }, rice: { name: "Cooked Rice", unified: "1F35A", short_name: "rice", short_names: ["rice"], text: "", added_in: "6.0", search: "rice,cooked,food,china,asian" }, running_shirt_with_sash: { name: "Running Shirt with Sash", unified: "1F3BD", short_name: "running_shirt_with_sash", short_names: ["running_shirt_with_sash"], text: "", added_in: "6.0", search: "running,shirt,with,sash,play,pageant" }, dizzy_face: { name: "Dizzy Face", unified: "1F635", short_name: "dizzy_face", short_names: ["dizzy_face"], text: "", added_in: "6.0", search: "dizzy,face,spent,unconscious,xox" }, construction: { name: "Construction Sign", unified: "1F6A7", short_name: "construction", short_names: ["construction"], text: "", added_in: "6.0", search: "construction,sign,wip,progress,caution,warning" }, scales: { name: "Scales", unified: "2696", variations: ["2696-FE0F"], short_name: "scales", short_names: ["scales"], text: "", added_in: "4.1", search: "scales" }, vs: { name: "Squared Vs", unified: "1F19A", short_name: "vs", short_names: ["vs"], text: "", added_in: "6.0", search: "vs,squared,words,orange-square" }, fuelpump: { name: "Fuel Pump", unified: "26FD", variations: ["26FD-FE0F"], short_name: "fuelpump", short_names: ["fuelpump"], text: "", added_in: "5.2", search: "fuelpump,fuel,pump,gas station,petroleum" }, white_flower: { name: "White Flower", unified: "1F4AE", short_name: "white_flower", short_names: ["white_flower"], text: "", added_in: "6.0", search: "white,flower,japanese,spring" }, rice_ball: { name: "Rice Ball", unified: "1F359", short_name: "rice_ball", short_names: ["rice_ball"], text: "", added_in: "6.0", search: "rice,ball,food,japanese" }, dolphin: { name: "Dolphin", unified: "1F42C", short_name: "dolphin", short_names: ["dolphin", "flipper"], text: "", added_in: "6.0", search: "dolphin,flipper,animal,nature,fish,sea,ocean,fins,beach" }, wrench: { name: "Wrench", unified: "1F527", short_name: "wrench", short_names: ["wrench"], text: "", added_in: "6.0", search: "wrench,tools,diy,ikea,fix,maintainer" }, flushed: { name: "Flushed Face", unified: "1F633", short_name: "flushed", short_names: ["flushed"], text: "", added_in: "6.0", search: "flushed,face,blush,shy,flattered" }, hammer: { name: "Hammer", unified: "1F528", short_name: "hammer", short_names: ["hammer"], text: "", added_in: "6.0", search: "hammer,tools,build,create" }, ideograph_advantage: { name: "Circled Ideograph Advantage", unified: "1F250", short_name: "ideograph_advantage", short_names: ["ideograph_advantage"], text: "", added_in: "6.0", search: "ideograph,advantage,circled,chinese,kanji,obtain,get,circle" }, scream: { name: "Face Screaming in Fear", unified: "1F631", short_name: "scream", short_names: ["scream"], text: "", added_in: "6.0", search: "scream,face,screaming,in,fear,munch,scared,omg" }, busstop: { name: "Bus Stop", unified: "1F68F", short_name: "busstop", short_names: ["busstop"], text: "", added_in: "6.0", search: "busstop,bus,stop,transportation,wait" }, rice_cracker: { name: "Rice Cracker", unified: "1F358", short_name: "rice_cracker", short_names: ["rice_cracker"], text: "", added_in: "6.0", search: "rice,cracker,food,japanese" }, vertical_traffic_light: { name: "Vertical Traffic Light", unified: "1F6A6", short_name: "vertical_traffic_light", short_names: ["vertical_traffic_light"], text: "", added_in: "6.0", search: "vertical,traffic,light,transportation,driving" }, hammer_and_pick: { name: "Hammer and Pick", unified: "2692", short_name: "hammer_and_pick", short_names: ["hammer_and_pick"], text: "", added_in: "4.1", search: "hammer,and,pick,tools,build,create" }, whale: { name: "Spouting Whale", unified: "1F433", short_name: "whale", short_names: ["whale"], text: "", added_in: "6.0", search: "whale,spouting,animal,nature,sea,ocean" }, secret: { name: "Circled Ideograph Secret", unified: "3299", variations: ["3299-FE0F"], short_name: "secret", short_names: ["secret"], text: "", added_in: "1.1", search: "secret,circled,ideograph,privacy,chinese,sshh,kanji,red-circle" }, fearful: { name: "Fearful Face", unified: "1F628", short_name: "fearful", short_names: ["fearful"], text: "", added_in: "6.0", search: "fearful,face,scared,terrified,nervous,oops,huh" }, oden: { name: "Oden", unified: "1F362", short_name: "oden", short_names: ["oden"], text: "", added_in: "6.0", search: "oden,food,japanese" }, "whale2": { name: "Whale", unified: "1F40B", short_name: "whale2", short_names: ["whale2"], text: "", added_in: "6.0", search: "whale2,whale,animal,nature,sea,ocean" }, traffic_light: { name: "Horizontal Traffic Light", unified: "1F6A5", short_name: "traffic_light", short_names: ["traffic_light"], text: "", added_in: "6.0", search: "traffic,light,horizontal,transportation,signal" }, dango: { name: "Dango", unified: "1F361", short_name: "dango", short_names: ["dango"], text: "", added_in: "6.0", search: "dango,food,dessert,sweet,japanese,barbecue,meat" }, cold_sweat: { name: "Face with Open Mouth and Cold Sweat", unified: "1F630", short_name: "cold_sweat", short_names: ["cold_sweat"], text: "", added_in: "6.0", search: "cold,sweat,face,with,open,mouth,and,nervous" }, congratulations: { name: "Circled Ideograph Congratulation", unified: "3297", variations: ["3297-FE0F"], short_name: "congratulations", short_names: ["congratulations"], text: "", added_in: "1.1", search: "congratulations,circled,ideograph,congratulation,chinese,kanji,japanese,red-circle" }, cry: { name: "Crying Face", unified: "1F622", short_name: "cry", short_names: ["cry"], text: ":'(", added_in: "6.0", emoticons: [":'("], search: "cry,crying,face,tears,sad,depressed,upset,:'(" }, crocodile: { name: "Crocodile", unified: "1F40A", short_name: "crocodile", short_names: ["crocodile"], text: "", added_in: "6.0", search: "crocodile,animal,nature,reptile,lizard,alligator" }, "u5408": { name: "Squared Cjk Unified Ideograph-5408", unified: "1F234", short_name: "u5408", short_names: ["u5408"], text: "", added_in: "6.0", search: "u5408,squared,cjk,unified,ideograph,5408,japanese,chinese,join,kanji,red-square" }, pick: { name: "Pick", unified: "26CF", short_name: "pick", short_names: ["pick"], text: "", added_in: "5.2", search: "pick,tools,dig" }, shaved_ice: { name: "Shaved Ice", unified: "1F367", short_name: "shaved_ice", short_names: ["shaved_ice"], text: "", added_in: "6.0", search: "shaved,ice,hot,dessert,summer" }, trophy: { name: "Trophy", unified: "1F3C6", short_name: "trophy", short_names: ["trophy"], text: "", added_in: "6.0", search: "trophy,win,award,contest,place,ftw,ceremony" }, moyai: { name: "Moyai", unified: "1F5FF", short_name: "moyai", short_names: ["moyai"], text: "", added_in: "6.0", search: "moyai,rock,easter island,moai" }, "u6e80": { name: "Squared Cjk Unified Ideograph-6e80", unified: "1F235", short_name: "u6e80", short_names: ["u6e80"], text: "", added_in: "6.0", search: "u6e80,squared,cjk,unified,ideograph,6e80,full,chinese,japanese,red-square,kanji" }, leopard: { name: "Leopard", unified: "1F406", short_name: "leopard", short_names: ["leopard"], text: "", added_in: "6.0", search: "leopard,animal,nature" }, nut_and_bolt: { name: "Nut and Bolt", unified: "1F529", short_name: "nut_and_bolt", short_names: ["nut_and_bolt"], text: "", added_in: "6.0", search: "nut,and,bolt,handy,tools,fix" }, disappointed_relieved: { name: "Disappointed but Relieved Face", unified: "1F625", short_name: "disappointed_relieved", short_names: ["disappointed_relieved"], text: "", added_in: "6.0", search: "disappointed,relieved,but,face,phew,sweat,nervous" }, ice_cream: { name: "Ice Cream", unified: "1F368", short_name: "ice_cream", short_names: ["ice_cream"], text: "", added_in: "6.0", search: "ice,cream,food,hot,dessert" }, icecream: { name: "Soft Ice Cream", unified: "1F366", short_name: "icecream", short_names: ["icecream"], text: "", added_in: "6.0", search: "icecream,soft,ice,cream,food,hot,dessert,summer" }, "u5272": { name: "Squared Cjk Unified Ideograph-5272", unified: "1F239", short_name: "u5272", short_names: ["u5272"], text: "", added_in: "6.0", search: "u5272,squared,cjk,unified,ideograph,5272,cut,divide,chinese,kanji,pink-square" }, statue_of_liberty: { name: "Statue of Liberty", unified: "1F5FD", short_name: "statue_of_liberty", short_names: ["statue_of_liberty"], text: "", added_in: "6.0", search: "statue,of,liberty,american,newyork" }, gear: { name: "Gear", unified: "2699", variations: ["2699-FE0F"], short_name: "gear", short_names: ["gear"], text: "", added_in: "4.1", search: "gear,cog" }, "tiger2": { name: "Tiger", unified: "1F405", short_name: "tiger2", short_names: ["tiger2"], text: "", added_in: "6.0", search: "tiger2,tiger,animal,nature,roar" }, sob: { name: "Loudly Crying Face", unified: "1F62D", short_name: "sob", short_names: ["sob"], text: ":'(", added_in: "6.0", search: "sob,loudly,crying,face,cry,tears,sad,upset,depressed" }, fountain: { name: "Fountain", unified: "26F2", variations: ["26F2-FE0F"], short_name: "fountain", short_names: ["fountain"], text: "", added_in: "5.2", search: "fountain,photo,summer,water,fresh" }, water_buffalo: { name: "Water Buffalo", unified: "1F403", short_name: "water_buffalo", short_names: ["water_buffalo"], text: "", added_in: "6.0", search: "water,buffalo,animal,nature,ox,cow" }, cake: { name: "Shortcake", unified: "1F370", short_name: "cake", short_names: ["cake"], text: "", added_in: "6.0", search: "cake,shortcake,food,dessert" }, "u7981": { name: "Squared Cjk Unified Ideograph-7981", unified: "1F232", short_name: "u7981", short_names: ["u7981"], text: "", added_in: "6.0", search: "u7981,squared,cjk,unified,ideograph,7981,kanji,japanese,chinese,forbidden,limit,restricted,red-square" }, chains: { name: "Chains", unified: "26D3", short_name: "chains", short_names: ["chains"], text: "", added_in: "5.2", search: "chains,lock,arrest" }, sweat: { name: "Face with Cold Sweat", unified: "1F613", short_name: "sweat", short_names: ["sweat"], text: "", added_in: "6.0", search: "sweat,face,with,cold,hot,sad,tired,exercise" }, gun: { name: "Pistol", unified: "1F52B", short_name: "gun", short_names: ["gun"], text: "", added_in: "6.0", search: "gun,pistol,violence,weapon,revolver" }, a: { name: "Negative Squared Latin Capital Letter a", unified: "1F170", variations: ["1F170-FE0F"], short_name: "a", short_names: ["a"], text: "", added_in: "6.0", search: "a,negative,squared,latin,capital,letter,red-square,alphabet" }, ox: { name: "Ox", unified: "1F402", short_name: "ox", short_names: ["ox"], text: "", added_in: "6.0", search: "ox,animal,cow,beef" }, tokyo_tower: { name: "Tokyo Tower", unified: "1F5FC", short_name: "tokyo_tower", short_names: ["tokyo_tower"], text: "", added_in: "6.0", search: "tokyo,tower,photo,japanese" }, birthday: { name: "Birthday Cake", unified: "1F382", short_name: "birthday", short_names: ["birthday"], text: "", added_in: "6.0", search: "birthday,cake,food,dessert" }, ticket: { name: "Ticket", unified: "1F3AB", short_name: "ticket", short_names: ["ticket"], text: "", added_in: "6.0", search: "ticket,event,concert,pass" }, sleepy: { name: "Sleepy Face", unified: "1F62A", short_name: "sleepy", short_names: ["sleepy"], text: "", added_in: "6.0", search: "sleepy,face,tired,rest,nap" }, european_castle: { name: "European Castle", unified: "1F3F0", short_name: "european_castle", short_names: ["european_castle"], text: "", added_in: "6.0", search: "european,castle,building,royalty,history" }, custard: { name: "Custard", unified: "1F36E", short_name: "custard", short_names: ["custard"], text: "", added_in: "6.0", search: "custard,dessert,food" }, "cow2": { name: "Cow", unified: "1F404", short_name: "cow2", short_names: ["cow2"], text: "", added_in: "6.0", search: "cow2,cow,beef,ox,animal,nature,moo,milk" }, bomb: { name: "Bomb", unified: "1F4A3", short_name: "bomb", short_names: ["bomb"], text: "", added_in: "6.0", search: "bomb,boom,explode,explosion,terrorism" }, b: { name: "Negative Squared Latin Capital Letter B", unified: "1F171", variations: ["1F171-FE0F"], short_name: "b", short_names: ["b"], text: "", added_in: "6.0", search: "b,negative,squared,latin,capital,letter,red-square,alphabet" }, ab: { name: "Negative Squared Ab", unified: "1F18E", short_name: "ab", short_names: ["ab"], text: "", added_in: "6.0", search: "ab,negative,squared,red-square,alphabet" }, sleeping: { name: "Sleeping Face", unified: "1F634", short_name: "sleeping", short_names: ["sleeping"], text: "", added_in: "6.1", search: "sleeping,face,tired,sleepy,night,zzz" }, lollipop: { name: "Lollipop", unified: "1F36D", short_name: "lollipop", short_names: ["lollipop"], text: "", added_in: "6.0", search: "lollipop,food,snack,candy,sweet" }, japanese_castle: { name: "Japanese Castle", unified: "1F3EF", short_name: "japanese_castle", short_names: ["japanese_castle"], text: "", added_in: "6.0", search: "japanese,castle,photo,building" }, hocho: { name: "Hocho", unified: "1F52A", short_name: "hocho", short_names: ["hocho", "knife"], text: "", added_in: "6.0", search: "hocho,knife,blade,cutlery,kitchen,weapon" }, circus_tent: { name: "Circus Tent", unified: "1F3AA", short_name: "circus_tent", short_names: ["circus_tent"], text: "", added_in: "6.0", search: "circus,tent,festival,carnival,party" }, cl: { name: "Squared Cl", unified: "1F191", short_name: "cl", short_names: ["cl"], text: "", added_in: "6.0", search: "cl,squared,alphabet,words,red-square" }, candy: { name: "Candy", unified: "1F36C", short_name: "candy", short_names: ["candy"], text: "", added_in: "6.0", search: "candy,snack,dessert,sweet,lolly" }, dromedary_camel: { name: "Dromedary Camel", unified: "1F42A", short_name: "dromedary_camel", short_names: ["dromedary_camel"], text: "", added_in: "6.0", search: "dromedary,camel,animal,hot,desert,hump" }, "o2": { name: "Negative Squared Latin Capital Letter O", unified: "1F17E", variations: ["1F17E-FE0F"], short_name: "o2", short_names: ["o2"], text: "", added_in: "6.0", search: "o2,negative,squared,latin,capital,letter,o,alphabet,red-square" }, camel: { name: "Bactrian Camel", unified: "1F42B", short_name: "camel", short_names: ["camel"], text: "", added_in: "6.0", search: "camel,bactrian,animal,nature,hot,desert,hump" }, ferris_wheel: { name: "Ferris Wheel", unified: "1F3A1", short_name: "ferris_wheel", short_names: ["ferris_wheel"], text: "", added_in: "6.0", search: "ferris,wheel,photo,carnival,londoneye" }, crossed_swords: { name: "Crossed Swords", unified: "2694", variations: ["2694-FE0F"], short_name: "crossed_swords", short_names: ["crossed_swords"], text: "", added_in: "4.1", search: "crossed,swords,weapon" }, chocolate_bar: { name: "Chocolate Bar", unified: "1F36B", short_name: "chocolate_bar", short_names: ["chocolate_bar"], text: "", added_in: "6.0", search: "chocolate,bar,food,snack,dessert,sweet" }, roller_coaster: { name: "Roller Coaster", unified: "1F3A2", short_name: "roller_coaster", short_names: ["roller_coaster"], text: "", added_in: "6.0", search: "roller,coaster,carnival,playground,photo,fun" }, sos: { name: "Squared Sos", unified: "1F198", short_name: "sos", short_names: ["sos"], text: "", added_in: "6.0", search: "sos,squared,help,red-square,words,emergency,911" }, elephant: { name: "Elephant", unified: "1F418", short_name: "elephant", short_names: ["elephant"], text: "", added_in: "6.0", search: "elephant,animal,nature,nose,th,circus" }, carousel_horse: { name: "Carousel Horse", unified: "1F3A0", short_name: "carousel_horse", short_names: ["carousel_horse"], text: "", added_in: "6.0", search: "carousel,horse,photo,carnival" }, performing_arts: { name: "Performing Arts", unified: "1F3AD", short_name: "performing_arts", short_names: ["performing_arts"], text: "", added_in: "6.0", search: "performing,arts,acting,theater,drama" }, x: { name: "Cross Mark", unified: "274C", short_name: "x", short_names: ["x"], text: "", added_in: "6.0", search: "x,cross,mark,no,delete,remove,cancel" }, grimacing: { name: "Grimacing Face", unified: "1F62C", short_name: "grimacing", short_names: ["grimacing"], text: "", added_in: "6.1", search: "grimacing,face,grimace,teeth" }, doughnut: { name: "Doughnut", unified: "1F369", short_name: "doughnut", short_names: ["doughnut"], text: "", added_in: "6.0", search: "doughnut,food,dessert,snack,sweet,donut" }, smoking: { name: "Smoking Symbol", unified: "1F6AC", short_name: "smoking", short_names: ["smoking"], text: "", added_in: "6.0", search: "smoking,symbol,kills,tobacco,cigarette,joint,smoke" }, o: { name: "Heavy Large Circle", unified: "2B55", variations: ["2B55-FE0F"], short_name: "o", short_names: ["o"], text: "", added_in: "5.2", search: "o,heavy,large,circle,round" }, umbrella_on_ground: { name: "Umbrella on Ground", unified: "26F1", short_name: "umbrella_on_ground", short_names: ["umbrella_on_ground"], text: "", added_in: "5.2", search: "umbrella,on,ground" }, coffin: { name: "Coffin", unified: "26B0", variations: ["26B0-FE0F"], short_name: "coffin", short_names: ["coffin"], text: "", added_in: "4.1", search: "coffin,vampire,dead,die,death,rip,graveyard,cemetery" }, cookie: { name: "Cookie", unified: "1F36A", short_name: "cookie", short_names: ["cookie"], text: "", added_in: "6.0", search: "cookie,food,snack,oreo,chocolate,sweet,dessert" }, art: { name: "Artist Palette", unified: "1F3A8", short_name: "art", short_names: ["art"], text: "", added_in: "6.0", search: "art,artist,palette,design,paint,draw,colors" }, funeral_urn: { name: "Funeral Urn", unified: "26B1", variations: ["26B1-FE0F"], short_name: "funeral_urn", short_names: ["funeral_urn"], text: "", added_in: "4.1", search: "funeral,urn,dead,die,death,rip,ashes" }, racehorse: { name: "Horse", unified: "1F40E", short_name: "racehorse", short_names: ["racehorse"], text: "", added_in: "6.0", search: "racehorse,horse,animal,gamble,luck" }, clapper: { name: "Clapper Board", unified: "1F3AC", short_name: "clapper", short_names: ["clapper"], text: "", added_in: "6.0", search: "clapper,board,movie,film,record" }, baby_bottle: { name: "Baby Bottle", unified: "1F37C", short_name: "baby_bottle", short_names: ["baby_bottle"], text: "", added_in: "6.0", search: "baby,bottle,food,container,milk" }, "pig2": { name: "Pig", unified: "1F416", short_name: "pig2", short_names: ["pig2"], text: "", added_in: "6.0", search: "pig2,pig,animal,nature" }, microphone: { name: "Microphone", unified: "1F3A4", short_name: "microphone", short_names: ["microphone"], text: "", added_in: "6.0", search: "microphone,sound,music,pa" }, no_entry: { name: "No Entry", unified: "26D4", variations: ["26D4-FE0F"], short_name: "no_entry", short_names: ["no_entry"], text: "", added_in: "5.2", search: "no,entry,limit,security,privacy,bad,denied,stop,circle" }, name_badge: { name: "Name Badge", unified: "1F4DB", short_name: "name_badge", short_names: ["name_badge"], text: "", added_in: "6.0", search: "name,badge,fire,forbid" }, mask: { name: "Face with Medical Mask", unified: "1F637", short_name: "mask", short_names: ["mask"], text: "", added_in: "6.0", search: "mask,face,with,medical,sick,ill,disease" }, coffee: { name: "Hot Beverage", unified: "2615", variations: ["2615-FE0F"], short_name: "coffee", short_names: ["coffee"], text: "", added_in: "4.0", search: "coffee,hot,beverage,caffeine,latte,espresso" }, mountain: { name: "Mountain", unified: "26F0", short_name: "mountain", short_names: ["mountain"], text: "", added_in: "5.2", search: "mountain,photo,nature,environment" }, headphones: { name: "Headphone", unified: "1F3A7", short_name: "headphones", short_names: ["headphones"], text: "", added_in: "6.0", search: "headphones,headphone,music,score,gadgets" }, goat: { name: "Goat", unified: "1F410", short_name: "goat", short_names: ["goat"], text: "", added_in: "6.0", search: "goat,animal,nature" }, crystal_ball: { name: "Crystal Ball", unified: "1F52E", short_name: "crystal_ball", short_names: ["crystal_ball"], text: "", added_in: "6.0", search: "crystal,ball,disco,party,magic,circus,fortune_teller" }, musical_score: { name: "Musical Score", unified: "1F3BC", short_name: "musical_score", short_names: ["musical_score"], text: "", added_in: "6.0", search: "musical,score,treble,clef" }, ram: { name: "Ram", unified: "1F40F", short_name: "ram", short_names: ["ram"], text: "", added_in: "6.0", search: "ram,animal,sheep,nature" }, tea: { name: "Teacup Without Handle", unified: "1F375", short_name: "tea", short_names: ["tea"], text: "", added_in: "6.0", search: "tea,teacup,without,handle,drink,bowl,breakfast,green,british" }, no_entry_sign: { name: "No Entry Sign", unified: "1F6AB", short_name: "no_entry_sign", short_names: ["no_entry_sign"], text: "", added_in: "6.0", search: "no,entry,sign,forbid,stop,limit,denied,disallow,circle" }, barber: { name: "Barber Pole", unified: "1F488", short_name: "barber", short_names: ["barber"], text: "", added_in: "6.0", search: "barber,pole,hair,salon,style" }, mount_fuji: { name: "Mount Fuji", unified: "1F5FB", short_name: "mount_fuji", short_names: ["mount_fuji"], text: "", added_in: "6.0", search: "mount,fuji,photo,mountain,nature,japanese" }, sheep: { name: "Sheep", unified: "1F411", short_name: "sheep", short_names: ["sheep"], text: "", added_in: "6.0", search: "sheep,animal,nature,wool,shipit" }, sake: { name: "Sake Bottle and Cup", unified: "1F376", short_name: "sake", short_names: ["sake"], text: "", added_in: "6.0", search: "sake,bottle,and,cup,wine,drink,drunk,beverage,japanese,alcohol,booze" }, musical_keyboard: { name: "Musical Keyboard", unified: "1F3B9", short_name: "musical_keyboard", short_names: ["musical_keyboard"], text: "", added_in: "6.0", search: "musical,keyboard,piano,instrument" }, smiling_imp: { name: "Smiling Face with Horns", unified: "1F608", short_name: "smiling_imp", short_names: ["smiling_imp"], text: "", added_in: "6.0", search: "smiling,imp,face,with,horns,devil" }, "dog2": { name: "Dog", unified: "1F415", short_name: "dog2", short_names: ["dog2"], text: "", added_in: "6.0", search: "dog2,dog,animal,nature,friend,doge,pet,faithful" }, beer: { name: "Beer Mug", unified: "1F37A", short_name: "beer", short_names: ["beer"], text: "", added_in: "6.0", search: "beer,mug,relax,beverage,drink,drunk,party,pub,summer,alcohol,booze" }, alembic: { name: "Alembic", unified: "2697", variations: ["2697-FE0F"], short_name: "alembic", short_names: ["alembic"], text: "", added_in: "4.1", search: "alembic,distilling,science,experiment" }, volcano: { name: "Volcano", unified: "1F30B", short_name: "volcano", short_names: ["volcano"], text: "", added_in: "6.0", search: "volcano,photo,nature,disaster" }, anger: { name: "Anger Symbol", unified: "1F4A2", short_name: "anger", short_names: ["anger"], text: "", added_in: "6.0", search: "anger,symbol,angry,mad" }, saxophone: { name: "Saxophone", unified: "1F3B7", short_name: "saxophone", short_names: ["saxophone"], text: "", added_in: "6.0", search: "saxophone,music,instrument,jazz,blues" }, poodle: { name: "Poodle", unified: "1F429", short_name: "poodle", short_names: ["poodle"], text: "", added_in: "6.0", search: "poodle,dog,animal,101,nature,pet" }, hotsprings: { name: "Hot Springs", unified: "2668", variations: ["2668-FE0F"], short_name: "hotsprings", short_names: ["hotsprings"], text: "", added_in: "1.1", search: "hotsprings,hot,springs,bath,warm,relax" }, beers: { name: "Clinking Beer Mugs", unified: "1F37B", short_name: "beers", short_names: ["beers"], text: "", added_in: "6.0", search: "beers,clinking,beer,mugs,relax,beverage,drink,drunk,party,pub,summer,alcohol,booze" }, imp: { name: "Imp", unified: "1F47F", short_name: "imp", short_names: ["imp"], text: "", added_in: "6.0", search: "imp,devil,angry,horns" }, telescope: { name: "Telescope", unified: "1F52D", short_name: "telescope", short_names: ["telescope"], text: "", added_in: "6.0", search: "telescope,stars,space,zoom" }, japanese_ogre: { name: "Japanese Ogre", unified: "1F479", short_name: "japanese_ogre", short_names: ["japanese_ogre"], text: "", added_in: "6.0", search: "japanese,ogre,monster,red,mask,halloween,scary,creepy,devil,demon" }, no_pedestrians: { name: "No Pedestrians", unified: "1F6B7", short_name: "no_pedestrians", short_names: ["no_pedestrians"], text: "", added_in: "6.0", search: "no,pedestrians,rules,crossing,walking,circle" }, "cat2": { name: "Cat", unified: "1F408", short_name: "cat2", short_names: ["cat2"], text: "", added_in: "6.0", search: "cat2,cat,animal,meow,pet,cats" }, trumpet: { name: "Trumpet", unified: "1F3BA", short_name: "trumpet", short_names: ["trumpet"], text: "", added_in: "6.0", search: "trumpet,music,brass" }, microscope: { name: "Microscope", unified: "1F52C", short_name: "microscope", short_names: ["microscope"], text: "", added_in: "6.0", search: "microscope,laboratory,experiment,zoomin,science,study" }, wine_glass: { name: "Wine Glass", unified: "1F377", short_name: "wine_glass", short_names: ["wine_glass"], text: "", added_in: "6.0", search: "wine,glass,drink,beverage,drunk,alcohol,booze" }, japanese_goblin: { name: "Japanese Goblin", unified: "1F47A", short_name: "japanese_goblin", short_names: ["japanese_goblin"], text: "", added_in: "6.0", search: "japanese,goblin,red,evil,mask,monster,scary,creepy" }, tent: { name: "Tent", unified: "26FA", variations: ["26FA-FE0F"], short_name: "tent", short_names: ["tent"], text: "", added_in: "5.2", search: "tent,photo,camping,outdoors" }, rooster: { name: "Rooster", unified: "1F413", short_name: "rooster", short_names: ["rooster"], text: "", added_in: "6.0", search: "rooster,animal,nature,chicken" }, do_not_litter: { name: "Do Not Litter Symbol", unified: "1F6AF", short_name: "do_not_litter", short_names: ["do_not_litter"], text: "", added_in: "6.0", search: "do,not,litter,symbol,trash,bin,garbage,circle" }, guitar: { name: "Guitar", unified: "1F3B8", short_name: "guitar", short_names: ["guitar"], text: "", added_in: "6.0", search: "guitar,music,instrument" }, no_bicycles: { name: "No Bicycles", unified: "1F6B3", short_name: "no_bicycles", short_names: ["no_bicycles"], text: "", added_in: "6.0", search: "no,bicycles,cyclist,prohibited,circle" }, violin: { name: "Violin", unified: "1F3BB", short_name: "violin", short_names: ["violin"], text: "", added_in: "6.0", search: "violin,music,instrument,orchestra,symphony" }, hankey: { name: "Pile of Poo", unified: "1F4A9", short_name: "hankey", short_names: ["hankey", "poop", "shit"], text: "", added_in: "6.0", search: "hankey,poop,shit,pile,of,poo" }, pill: { name: "Pill", unified: "1F48A", short_name: "pill", short_names: ["pill"], text: "", added_in: "6.0", search: "pill,health,medicine,doctor,pharmacy,drug" }, cocktail: { name: "Cocktail Glass", unified: "1F378", short_name: "cocktail", short_names: ["cocktail"], text: "", added_in: "6.0", search: "cocktail,glass,drink,drunk,alcohol,beverage,booze,mojito" }, game_die: { name: "Game Die", unified: "1F3B2", short_name: "game_die", short_names: ["game_die"], text: "", added_in: "6.0", search: "game,die,dice,random,tabletop,play,luck" }, "non-potable_water": { name: "Non-Potable Water Symbol", unified: "1F6B1", short_name: "non-potable_water", short_names: ["non-potable_water"], text: "", added_in: "6.0", search: "non,potable,water,symbol,drink,faucet,tap,circle" }, ghost: { name: "Ghost", unified: "1F47B", short_name: "ghost", short_names: ["ghost"], text: "", added_in: "6.0", search: "ghost,halloween,spooky,scary" }, syringe: { name: "Syringe", unified: "1F489", short_name: "syringe", short_names: ["syringe"], text: "", added_in: "6.0", search: "syringe,health,hospital,drugs,blood,medicine,needle,doctor,nurse" }, tropical_drink: { name: "Tropical Drink", unified: "1F379", short_name: "tropical_drink", short_names: ["tropical_drink"], text: "", added_in: "6.0", search: "tropical,drink,beverage,cocktail,summer,beach,alcohol,booze,mojito" }, skull: { name: "Skull", unified: "1F480", short_name: "skull", short_names: ["skull"], text: "", added_in: "6.0", search: "skull,dead,skeleton,creepy" }, dart: { name: "Direct Hit", unified: "1F3AF", short_name: "dart", short_names: ["dart"], text: "", added_in: "6.0", search: "dart,direct,hit,game,play,bar" }, "rabbit2": { name: "Rabbit", unified: "1F407", short_name: "rabbit2", short_names: ["rabbit2"], text: "", added_in: "6.0", search: "rabbit2,rabbit,animal,nature,pet,magic,spring" }, underage: { name: "No One Under Eighteen Symbol", unified: "1F51E", short_name: "underage", short_names: ["underage"], text: "", added_in: "6.0", search: "underage,no,one,under,eighteen,symbol,18,drink,pub,night,minor,circle" }, factory: { name: "Factory", unified: "1F3ED", short_name: "factory", short_names: ["factory"], text: "", added_in: "6.0", search: "factory,building,industry,pollution,smoke" }, "mouse2": { name: "Mouse", unified: "1F401", short_name: "mouse2", short_names: ["mouse2"], text: "", added_in: "6.0", search: "mouse2,mouse,animal,nature,rodent" }, toilet: { name: "Toilet", unified: "1F6BD", short_name: "toilet", short_names: ["toilet"], text: "", added_in: "6.0", search: "toilet,restroom,wc,washroom,bathroom,potty" }, no_mobile_phones: { name: "No Mobile Phones", unified: "1F4F5", short_name: "no_mobile_phones", short_names: ["no_mobile_phones"], text: "", added_in: "6.0", search: "no,mobile,phones,iphone,mute,circle" }, bowling: { name: "Bowling", unified: "1F3B3", short_name: "bowling", short_names: ["bowling"], text: "", added_in: "6.0", search: "bowling,sports,fun,play" }, skull_and_crossbones: { name: "Skull and Crossbones", unified: "2620", variations: ["2620-FE0F"], short_name: "skull_and_crossbones", short_names: ["skull_and_crossbones"], text: "", added_in: "1.1", search: "skull,and,crossbones,poison,danger,deadly,scary" }, video_game: { name: "Video Game", unified: "1F3AE", short_name: "video_game", short_names: ["video_game"], text: "", added_in: "6.0", search: "video,game,play,console,ps4,controller" }, no_smoking: { name: "No Smoking Symbol", unified: "1F6AD", short_name: "no_smoking", short_names: ["no_smoking"], text: "", added_in: "6.0", search: "no,smoking,symbol,cigarette,blue-square,smell,smoke" }, alien: { name: "Extraterrestrial Alien", unified: "1F47D", short_name: "alien", short_names: ["alien"], text: "", added_in: "6.0", search: "alien,extraterrestrial,ufo,paul,weird,outer_space" }, house: { name: "House Building", unified: "1F3E0", short_name: "house", short_names: ["house"], text: "", added_in: "6.0", search: "house,building,home" }, rat: { name: "Rat", unified: "1F400", short_name: "rat", short_names: ["rat"], text: "", added_in: "6.0", search: "rat,animal,mouse,rodent" }, potable_water: { name: "Potable Water Symbol", unified: "1F6B0", short_name: "potable_water", short_names: ["potable_water"], text: "", added_in: "6.0", search: "potable,water,symbol,blue-square,liquid,restroom,cleaning,faucet" }, exclamation: { name: "Heavy Exclamation Mark Symbol", unified: "2757", variations: ["2757-FE0F"], short_name: "exclamation", short_names: ["exclamation", "heavy_exclamation_mark"], text: "", added_in: "5.2", search: "exclamation,heavy,mark,symbol,heavy_exclamation_mark,danger,surprise,punctuation,wow,warning" }, space_invader: { name: "Alien Monster", unified: "1F47E", short_name: "space_invader", short_names: ["space_invader"], text: "", added_in: "6.0", search: "space,invader,alien,monster,game,arcade,play" }, slot_machine: { name: "Slot Machine", unified: "1F3B0", short_name: "slot_machine", short_names: ["slot_machine"], text: "", added_in: "6.0", search: "slot,machine,bet,gamble,vegas,fruit machine,luck,casino" }, shower: { name: "Shower", unified: "1F6BF", short_name: "shower", short_names: ["shower"], text: "", added_in: "6.0", search: "shower,clean,water,bathroom" }, fork_and_knife: { name: "Fork and Knife", unified: "1F374", short_name: "fork_and_knife", short_names: ["fork_and_knife"], text: "", added_in: "6.0", search: "fork,and,knife,cutlery,kitchen" }, house_with_garden: { name: "House with Garden", unified: "1F3E1", short_name: "house_with_garden", short_names: ["house_with_garden"], text: "", added_in: "6.0", search: "house,with,garden,home,plant,nature" }, feet: { name: "Paw Prints", unified: "1F43E", short_name: "feet", short_names: ["feet", "paw_prints"], text: "", added_in: "6.0", search: "feet,paw,prints" }, grey_exclamation: { name: "White Exclamation Mark Ornament", unified: "2755", short_name: "grey_exclamation", short_names: ["grey_exclamation"], text: "", added_in: "6.0", search: "grey,exclamation,white,mark,ornament,surprise,punctuation,gray,wow,warning" }, bathtub: { name: "Bathtub", unified: "1F6C1", short_name: "bathtub", short_names: ["bathtub"], text: "", added_in: "6.0", search: "bathtub,clean,shower,bathroom" }, dragon: { name: "Dragon", unified: "1F409", short_name: "dragon", short_names: ["dragon"], text: "", added_in: "6.0", search: "dragon,animal,myth,nature,chinese,green" }, jack_o_lantern: { name: "Jack-O-Lantern", unified: "1F383", short_name: "jack_o_lantern", short_names: ["jack_o_lantern"], text: "", added_in: "6.0", search: "jack,o,lantern,halloween,light,pumpkin,creepy,fall" }, question: { name: "Black Question Mark Ornament", unified: "2753", short_name: "question", short_names: ["question"], text: "", added_in: "6.0", search: "question,black,mark,ornament,doubt,confused" }, smiley_cat: { name: "Smiling Cat Face with Open Mouth", unified: "1F63A", short_name: "smiley_cat", short_names: ["smiley_cat"], text: "", added_in: "6.0", search: "smiley,cat,smiling,face,with,open,mouth,animal,cats,happy,smile" }, dragon_face: { name: "Dragon Face", unified: "1F432", short_name: "dragon_face", short_names: ["dragon_face"], text: "", added_in: "6.0", search: "dragon,face,animal,myth,nature,chinese,green" }, grey_question: { name: "White Question Mark Ornament", unified: "2754", short_name: "grey_question", short_names: ["grey_question"], text: "", added_in: "6.0", search: "grey,question,white,mark,ornament,doubts,gray,huh,confused" }, office: { name: "Office Building", unified: "1F3E2", short_name: "office", short_names: ["office"], text: "", added_in: "6.0", search: "office,building,bureau,work" }, key: { name: "Key", unified: "1F511", short_name: "key", short_names: ["key"], text: "", added_in: "6.0", search: "key,lock,door,password" }, bangbang: { name: "Double Exclamation Mark", unified: "203C", variations: ["203C-FE0F"], short_name: "bangbang", short_names: ["bangbang"], text: "", added_in: "1.1", search: "bangbang,double,exclamation,mark,surprise" }, cactus: { name: "Cactus", unified: "1F335", short_name: "cactus", short_names: ["cactus"], text: "", added_in: "6.0", search: "cactus,vegetable,plant,nature" }, department_store: { name: "Department Store", unified: "1F3EC", short_name: "department_store", short_names: ["department_store"], text: "", added_in: "6.0", search: "department,store,building,shopping,mall" }, smile_cat: { name: "Grinning Cat Face with Smiling Eyes", unified: "1F638", short_name: "smile_cat", short_names: ["smile_cat"], text: "", added_in: "6.0", search: "smile,cat,grinning,face,with,smiling,eyes,animal,cats" }, post_office: { name: "Japanese Post Office", unified: "1F3E3", short_name: "post_office", short_names: ["post_office"], text: "", added_in: "6.0", search: "post,office,japanese,building,envelope,communication" }, interrobang: { name: "Exclamation Question Mark", unified: "2049", variations: ["2049-FE0F"], short_name: "interrobang", short_names: ["interrobang"], text: "", added_in: "3.0", search: "interrobang,exclamation,question,mark,wat,punctuation,surprise" }, joy_cat: { name: "Cat Face with Tears of Joy", unified: "1F639", short_name: "joy_cat", short_names: ["joy_cat"], text: "", added_in: "6.0", search: "joy,cat,face,with,tears,of,animal,cats,haha,happy" }, christmas_tree: { name: "Christmas Tree", unified: "1F384", short_name: "christmas_tree", short_names: ["christmas_tree"], text: "", added_in: "6.0", search: "christmas,tree,festival,vacation,december,xmas,celebration" }, low_brightness: { name: "Low Brightness Symbol", unified: "1F505", short_name: "low_brightness", short_names: ["low_brightness"], text: "", added_in: "6.0", search: "low,brightness,symbol,sun,afternoon,warm,summer" }, evergreen_tree: { name: "Evergreen Tree", unified: "1F332", short_name: "evergreen_tree", short_names: ["evergreen_tree"], text: "", added_in: "6.0", search: "evergreen,tree,plant,nature" }, heart_eyes_cat: { name: "Smiling Cat Face with Heart-Shaped Eyes", unified: "1F63B", short_name: "heart_eyes_cat", short_names: ["heart_eyes_cat"], text: "", added_in: "6.0", search: "heart,eyes,cat,smiling,face,with,shaped,animal,love,like,affection,cats,valentines" }, door: { name: "Door", unified: "1F6AA", short_name: "door", short_names: ["door"], text: "", added_in: "6.0", search: "door,house,entry,exit" }, european_post_office: { name: "European Post Office", unified: "1F3E4", short_name: "european_post_office", short_names: ["european_post_office"], text: "", added_in: "6.0", search: "european,post,office,building,email" }, high_brightness: { name: "High Brightness Symbol", unified: "1F506", short_name: "high_brightness", short_names: ["high_brightness"], text: "", added_in: "6.0", search: "high,brightness,symbol,sun,light" }, deciduous_tree: { name: "Deciduous Tree", unified: "1F333", short_name: "deciduous_tree", short_names: ["deciduous_tree"], text: "", added_in: "6.0", search: "deciduous,tree,plant,nature" }, hospital: { name: "Hospital", unified: "1F3E5", short_name: "hospital", short_names: ["hospital"], text: "", added_in: "6.0", search: "hospital,building,health,surgery,doctor" }, smirk_cat: { name: "Cat Face with Wry Smile", unified: "1F63C", short_name: "smirk_cat", short_names: ["smirk_cat"], text: "", added_in: "6.0", search: "smirk,cat,face,with,wry,smile,animal,cats" }, bank: { name: "Bank", unified: "1F3E6", short_name: "bank", short_names: ["bank"], text: "", added_in: "6.0", search: "bank,building,money,sales,cash,business,enterprise" }, part_alternation_mark: { name: "Part Alternation Mark", unified: "303D", variations: ["303D-FE0F"], short_name: "part_alternation_mark", short_names: ["part_alternation_mark"], text: "", added_in: "3.2", search: "part,alternation,mark,graph,presentation,stats,business,economics,bad" }, kissing_cat: { name: "Kissing Cat Face with Closed Eyes", unified: "1F63D", short_name: "kissing_cat", short_names: ["kissing_cat"], text: "", added_in: "6.0", search: "kissing,cat,face,with,closed,eyes,animal,cats,kiss" }, palm_tree: { name: "Palm Tree", unified: "1F334", short_name: "palm_tree", short_names: ["palm_tree"], text: "", added_in: "6.0", search: "palm,tree,plant,vegetable,nature,summer,beach,mojito,tropical" }, hotel: { name: "Hotel", unified: "1F3E8", short_name: "hotel", short_names: ["hotel"], text: "", added_in: "6.0", search: "hotel,building,accomodation,checkin" }, scream_cat: { name: "Weary Cat Face", unified: "1F640", short_name: "scream_cat", short_names: ["scream_cat"], text: "", added_in: "6.0", search: "scream,cat,weary,face,animal,cats,munch,scared" }, seedling: { name: "Seedling", unified: "1F331", short_name: "seedling", short_names: ["seedling"], text: "", added_in: "6.0", search: "seedling,plant,nature,grass,lawn,spring" }, warning: { name: "Warning Sign", unified: "26A0", variations: ["26A0-FE0F"], short_name: "warning", short_names: ["warning"], text: "", added_in: "4.0", search: "warning,sign,exclamation,wip,alert,error,problem,issue" }, herb: { name: "Herb", unified: "1F33F", short_name: "herb", short_names: ["herb"], text: "", added_in: "6.0", search: "herb,vegetable,plant,medicine,weed,grass,lawn" }, crying_cat_face: { name: "Crying Cat Face", unified: "1F63F", short_name: "crying_cat_face", short_names: ["crying_cat_face"], text: "", added_in: "6.0", search: "crying,cat,face,animal,tears,weep,sad,cats,upset,cry" }, children_crossing: { name: "Children Crossing", unified: "1F6B8", short_name: "children_crossing", short_names: ["children_crossing"], text: "", added_in: "6.0", search: "children,crossing,school,warning,danger,sign,driving,yellow-diamond" }, convenience_store: { name: "Convenience Store", unified: "1F3EA", short_name: "convenience_store", short_names: ["convenience_store"], text: "", added_in: "6.0", search: "convenience,store,building,shopping,groceries" }, school: { name: "School", unified: "1F3EB", short_name: "school", short_names: ["school"], text: "", added_in: "6.0", search: "school,building,student,education,learn,teach" }, pouting_cat: { name: "Pouting Cat Face", unified: "1F63E", short_name: "pouting_cat", short_names: ["pouting_cat"], text: "", added_in: "6.0", search: "pouting,cat,face,animal,cats" }, trident: { name: "Trident Emblem", unified: "1F531", short_name: "trident", short_names: ["trident"], text: "", added_in: "6.0", search: "trident,emblem,weapon,spear" }, shamrock: { name: "Shamrock", unified: "2618", variations: ["2618-FE0F"], short_name: "shamrock", short_names: ["shamrock"], text: "", added_in: "4.1", search: "shamrock,vegetable,plant,nature,irish,clover" }, love_hotel: { name: "Love Hotel", unified: "1F3E9", short_name: "love_hotel", short_names: ["love_hotel"], text: "", added_in: "6.0", search: "love,hotel,like,affection,dating" }, fleur_de_lis: { name: "Fleur-De-Lis", unified: "269C", variations: ["269C-FE0F"], short_name: "fleur_de_lis", short_names: ["fleur_de_lis"], text: "", added_in: "4.1", search: "fleur,de,lis,decorative,scout" }, four_leaf_clover: { name: "Four Leaf Clover", unified: "1F340", short_name: "four_leaf_clover", short_names: ["four_leaf_clover"], text: "", added_in: "6.0", search: "four,leaf,clover,vegetable,plant,nature,lucky,irish" }, wedding: { name: "Wedding", unified: "1F492", short_name: "wedding", short_names: ["wedding"], text: "", added_in: "6.0", search: "wedding,love,like,affection,couple,marriage,bride,groom" }, bamboo: { name: "Pine Decoration", unified: "1F38D", short_name: "bamboo", short_names: ["bamboo"], text: "", added_in: "6.0", search: "bamboo,pine,decoration,plant,nature,vegetable,panda,pine_decoration" }, beginner: { name: "Japanese Symbol for Beginner", unified: "1F530", short_name: "beginner", short_names: ["beginner"], text: "", added_in: "6.0", search: "beginner,japanese,symbol,for,badge,shield" }, gift: { name: "Wrapped Present", unified: "1F381", short_name: "gift", short_names: ["gift"], text: "", added_in: "6.0", search: "gift,wrapped,present,birthday,christmas,xmas" }, balloon: { name: "Balloon", unified: "1F388", short_name: "balloon", short_names: ["balloon"], text: "", added_in: "6.0", search: "balloon,party,celebration,birthday,circus" }, tanabata_tree: { name: "Tanabata Tree", unified: "1F38B", short_name: "tanabata_tree", short_names: ["tanabata_tree"], text: "", added_in: "6.0", search: "tanabata,tree,plant,nature,branch,summer" }, recycle: { name: "Black Universal Recycling Symbol", unified: "267B", variations: ["267B-FE0F"], short_name: "recycle", short_names: ["recycle"], text: "", added_in: "3.2", search: "recycle,black,universal,recycling,symbol,arrow,environment,garbage,trash" }, church: { name: "Church", unified: "26EA", variations: ["26EA-FE0F"], short_name: "church", short_names: ["church"], text: "", added_in: "5.2", search: "church,building,religion,christ" }, white_check_mark: { name: "White Heavy Check Mark", unified: "2705", short_name: "white_check_mark", short_names: ["white_check_mark"], text: "", added_in: "6.0", search: "white,check,mark,heavy,green-square,ok,agree,vote,election,answer" }, flags: { name: "Carp Streamer", unified: "1F38F", short_name: "flags", short_names: ["flags"], text: "", added_in: "6.0", search: "flags,carp,streamer,fish,japanese,koinobori,banner" }, leaves: { name: "Leaf Fluttering in Wind", unified: "1F343", short_name: "leaves", short_names: ["leaves"], text: "", added_in: "6.0", search: "leaves,leaf,fluttering,in,wind,nature,plant,tree,vegetable,grass,lawn,spring" }, ribbon: { name: "Ribbon", unified: "1F380", short_name: "ribbon", short_names: ["ribbon"], text: "", added_in: "6.0", search: "ribbon,decoration,pink,girl,bowtie" }, "u6307": { name: "Squared Cjk Unified Ideograph-6307", unified: "1F22F", variations: ["1F22F-FE0F"], short_name: "u6307", short_names: ["u6307"], text: "", added_in: "5.2", search: "u6307,squared,cjk,unified,ideograph,6307,chinese,point,green-square,kanji" }, fallen_leaf: { name: "Fallen Leaf", unified: "1F342", short_name: "fallen_leaf", short_names: ["fallen_leaf"], text: "", added_in: "6.0", search: "fallen,leaf,nature,plant,vegetable,leaves" }, chart: { name: "Chart with Upwards Trend and Yen Sign", unified: "1F4B9", short_name: "chart", short_names: ["chart"], text: "", added_in: "6.0", search: "chart,with,upwards,trend,and,yen,sign,green-square,graph,presentation,stats" }, maple_leaf: { name: "Maple Leaf", unified: "1F341", short_name: "maple_leaf", short_names: ["maple_leaf"], text: "", added_in: "6.0", search: "maple,leaf,nature,plant,vegetable,ca,fall" }, confetti_ball: { name: "Confetti Ball", unified: "1F38A", short_name: "confetti_ball", short_names: ["confetti_ball"], text: "", added_in: "6.0", search: "confetti,ball,festival,party,birthday,circus" }, tada: { name: "Party Popper", unified: "1F389", short_name: "tada", short_names: ["tada"], text: "", added_in: "6.0", search: "tada,party,popper,congratulations,birthday,magic,circus,celebration" }, sparkle: { name: "Sparkle", unified: "2747", variations: ["2747-FE0F"], short_name: "sparkle", short_names: ["sparkle"], text: "", added_in: "1.1", search: "sparkle,stars,green-square,awesome,good,fireworks" }, mushroom: { name: "Mushroom", unified: "1F344", short_name: "mushroom", short_names: ["mushroom"], text: "", added_in: "6.0", search: "mushroom,plant,vegetable" }, shinto_shrine: { name: "Shinto Shrine", unified: "26E9", short_name: "shinto_shrine", short_names: ["shinto_shrine"], text: "", added_in: "5.2", search: "shinto,shrine,temple,japan,kyoto" }, ear_of_rice: { name: "Ear of Rice", unified: "1F33E", short_name: "ear_of_rice", short_names: ["ear_of_rice"], text: "", added_in: "6.0", search: "ear,of,rice,nature,plant" }, eight_spoked_asterisk: { name: "Eight Spoked Asterisk", unified: "2733", variations: ["2733-FE0F"], short_name: "eight_spoked_asterisk", short_names: ["eight_spoked_asterisk"], text: "", added_in: "1.1", search: "eight,spoked,asterisk,star,sparkle,green-square" }, dolls: { name: "Japanese Dolls", unified: "1F38E", short_name: "dolls", short_names: ["dolls"], text: "", added_in: "6.0", search: "dolls,japanese,toy,kimono" }, bouquet: { name: "Bouquet", unified: "1F490", short_name: "bouquet", short_names: ["bouquet"], text: "", added_in: "6.0", search: "bouquet,flowers,nature,spring" }, negative_squared_cross_mark: { name: "Negative Squared Cross Mark", unified: "274E", short_name: "negative_squared_cross_mark", short_names: ["negative_squared_cross_mark"], text: "", added_in: "6.0", search: "negative,squared,cross,mark,x,green-square,no,deny" }, izakaya_lantern: { name: "Izakaya Lantern", unified: "1F3EE", short_name: "izakaya_lantern", short_names: ["izakaya_lantern", "lantern"], text: "", added_in: "6.0", search: "izakaya,lantern,light,paper,halloween,spooky" }, japan: { name: "Silhouette of Japan", unified: "1F5FE", short_name: "japan", short_names: ["japan"], text: "", added_in: "6.0", search: "japan,silhouette,of,nation,country,japanese,asia" }, tulip: { name: "Tulip", unified: "1F337", short_name: "tulip", short_names: ["tulip"], text: "", added_in: "6.0", search: "tulip,flowers,plant,nature,summer,spring" }, rice_scene: { name: "Moon Viewing Ceremony", unified: "1F391", short_name: "rice_scene", short_names: ["rice_scene"], text: "", added_in: "6.0", search: "rice,scene,moon,viewing,ceremony,photo,japan,asia,tsukimi" }, wind_chime: { name: "Wind Chime", unified: "1F390", short_name: "wind_chime", short_names: ["wind_chime"], text: "", added_in: "6.0", search: "wind,chime,nature,ding,spring,bell" }, globe_with_meridians: { name: "Globe with Meridians", unified: "1F310", short_name: "globe_with_meridians", short_names: ["globe_with_meridians"], text: "", added_in: "6.0", search: "globe,with,meridians,earth,international,world,internet,interweb,i18n" }, diamond_shape_with_a_dot_inside: { name: "Diamond Shape with a Dot Inside", unified: "1F4A0", short_name: "diamond_shape_with_a_dot_inside", short_names: ["diamond_shape_with_a_dot_inside"], text: "", added_in: "6.0", search: "diamond,shape,with,a,dot,inside,jewel,blue,gem,crystal,fancy" }, email: { name: "Envelope", unified: "2709", variations: ["2709-FE0F"], short_name: "email", short_names: ["email", "envelope"], text: "", added_in: "1.1", search: "email,envelope,letter,postal,inbox,communication" }, rose: { name: "Rose", unified: "1F339", short_name: "rose", short_names: ["rose"], text: "", added_in: "6.0", search: "rose,flowers,valentines,love,spring" }, m: { name: "Circled Latin Capital Letter M", unified: "24C2", variations: ["24C2-FE0F"], short_name: "m", short_names: ["m"], text: "", added_in: "1.1", search: "m,circled,latin,capital,letter,alphabet,blue-circle" }, sunrise: { name: "Sunrise", unified: "1F305", short_name: "sunrise", short_names: ["sunrise"], text: "", added_in: "6.0", search: "sunrise,morning,view,vacation,photo" }, envelope_with_arrow: { name: "Envelope with Downwards Arrow Above", unified: "1F4E9", short_name: "envelope_with_arrow", short_names: ["envelope_with_arrow"], text: "", added_in: "6.0", search: "envelope,with,arrow,downwards,above,email,communication" }, sunrise_over_mountains: { name: "Sunrise over Mountains", unified: "1F304", short_name: "sunrise_over_mountains", short_names: ["sunrise_over_mountains"], text: "", added_in: "6.0", search: "sunrise,over,mountains,view,vacation,photo" }, sunflower: { name: "Sunflower", unified: "1F33B", short_name: "sunflower", short_names: ["sunflower"], text: "", added_in: "6.0", search: "sunflower,nature,plant,fall" }, cyclone: { name: "Cyclone", unified: "1F300", short_name: "cyclone", short_names: ["cyclone"], text: "", added_in: "6.0", search: "cyclone,weather,swirl,blue,cloud,vortex,spiral,whirlpool,spin" }, incoming_envelope: { name: "Incoming Envelope", unified: "1F4E8", short_name: "incoming_envelope", short_names: ["incoming_envelope"], text: "", added_in: "6.0", search: "incoming,envelope,email,inbox" }, "e-mail": { name: "E-Mail Symbol", unified: "1F4E7", short_name: "e-mail", short_names: ["e-mail"], text: "", added_in: "6.0", search: "e,mail,symbol,communication,inbox" }, blossom: { name: "Blossom", unified: "1F33C", short_name: "blossom", short_names: ["blossom"], text: "", added_in: "6.0", search: "blossom,nature,flowers,yellow" }, stars: { name: "Shooting Star", unified: "1F320", short_name: "stars", short_names: ["stars"], text: "", added_in: "6.0", search: "stars,shooting,star,night,photo" }, zzz: { name: "Sleeping Symbol", unified: "1F4A4", short_name: "zzz", short_names: ["zzz"], text: "", added_in: "6.0", search: "zzz,sleeping,symbol,sleepy,tired" }, love_letter: { name: "Love Letter", unified: "1F48C", short_name: "love_letter", short_names: ["love_letter"], text: "", added_in: "6.0", search: "love,letter,email,like,affection,envelope,valentines" }, sparkler: { name: "Firework Sparkler", unified: "1F387", short_name: "sparkler", short_names: ["sparkler"], text: "", added_in: "6.0", search: "sparkler,firework,stars,night,shine" }, atm: { name: "Automated Teller Machine", unified: "1F3E7", short_name: "atm", short_names: ["atm"], text: "", added_in: "6.0", search: "atm,automated,teller,machine,money,sales,cash,blue-square,payment,bank" }, cherry_blossom: { name: "Cherry Blossom", unified: "1F338", short_name: "cherry_blossom", short_names: ["cherry_blossom"], text: "", added_in: "6.0", search: "cherry,blossom,nature,plant,spring,flower" }, wc: { name: "Water Closet", unified: "1F6BE", short_name: "wc", short_names: ["wc"], text: "", added_in: "6.0", search: "wc,water,closet,toilet,restroom,blue-square" }, inbox_tray: { name: "Inbox Tray", unified: "1F4E5", short_name: "inbox_tray", short_names: ["inbox_tray"], text: "", added_in: "6.0", search: "inbox,tray,email,documents" }, fireworks: { name: "Fireworks", unified: "1F386", short_name: "fireworks", short_names: ["fireworks"], text: "", added_in: "6.0", search: "fireworks,photo,festival,carnival,congratulations" }, hibiscus: { name: "Hibiscus", unified: "1F33A", short_name: "hibiscus", short_names: ["hibiscus"], text: "", added_in: "6.0", search: "hibiscus,plant,vegetable,flowers,beach" }, outbox_tray: { name: "Outbox Tray", unified: "1F4E4", short_name: "outbox_tray", short_names: ["outbox_tray"], text: "", added_in: "6.0", search: "outbox,tray,inbox,email" }, city_sunrise: { name: "Sunset over Buildings", unified: "1F307", short_name: "city_sunrise", short_names: ["city_sunrise"], text: "", added_in: "6.0", search: "city,sunrise,sunset,over,buildings,photo,good morning,dawn" }, earth_americas: { name: "Earth Globe Americas", unified: "1F30E", short_name: "earth_americas", short_names: ["earth_americas"], text: "", added_in: "6.0", search: "earth,americas,globe,world,usa,international" }, wheelchair: { name: "Wheelchair Symbol", unified: "267F", variations: ["267F-FE0F"], short_name: "wheelchair", short_names: ["wheelchair"], text: "", added_in: "4.1", search: "wheelchair,symbol,blue-square,disabled,a11y,accessibility" }, parking: { name: "Negative Squared Latin Capital Letter P", unified: "1F17F", variations: ["1F17F-FE0F"], short_name: "parking", short_names: ["parking"], text: "", added_in: "5.2", search: "parking,negative,squared,latin,capital,letter,p,cars,blue-square,alphabet" }, city_sunset: { name: "Cityscape at Dusk", unified: "1F306", short_name: "city_sunset", short_names: ["city_sunset"], text: "", added_in: "6.0", search: "city,sunset,cityscape,at,dusk,photo,evening,sky,buildings" }, earth_africa: { name: "Earth Globe Europe-Africa", unified: "1F30D", short_name: "earth_africa", short_names: ["earth_africa"], text: "", added_in: "6.0", search: "earth,africa,globe,europe,world,international" }, package: { name: "Package", unified: "1F4E6", short_name: "package", short_names: ["package"], text: "", added_in: "6.0", search: "package,mail,gift,cardboard,box,moving" }, "u7a7a": { name: "Squared Cjk Unified Ideograph-7a7a", unified: "1F233", short_name: "u7a7a", short_names: ["u7a7a"], text: "", added_in: "6.0", search: "u7a7a,squared,cjk,unified,ideograph,7a7a,kanji,japanese,chinese,empty,sky,blue-square" }, earth_asia: { name: "Earth Globe Asia-Australia", unified: "1F30F", short_name: "earth_asia", short_names: ["earth_asia"], text: "", added_in: "6.0", search: "earth,asia,globe,australia,world,east,international" }, sa: { name: "Squared Katakana Sa", unified: "1F202", variations: ["1F202-FE0F"], short_name: "sa", short_names: ["sa"], text: "", added_in: "6.0", search: "sa,squared,katakana,japanese,blue-square" }, night_with_stars: { name: "Night with Stars", unified: "1F303", short_name: "night_with_stars", short_names: ["night_with_stars"], text: "", added_in: "6.0", search: "night,with,stars,evening,city,downtown" }, mailbox_closed: { name: "Closed Mailbox with Lowered Flag", unified: "1F4EA", short_name: "mailbox_closed", short_names: ["mailbox_closed"], text: "", added_in: "6.0", search: "mailbox,closed,with,lowered,flag,email,communication,inbox" }, full_moon: { name: "Full Moon Symbol", unified: "1F315", short_name: "full_moon", short_names: ["full_moon"], text: "", added_in: "6.0", search: "full,moon,symbol,nature,yellow,twilight,planet,space,night,evening,sleep" }, mailbox: { name: "Closed Mailbox with Raised Flag", unified: "1F4EB", short_name: "mailbox", short_names: ["mailbox"], text: "", added_in: "6.0", search: "mailbox,closed,with,raised,flag,email,inbox,communication" }, milky_way: { name: "Milky Way", unified: "1F30C", short_name: "milky_way", short_names: ["milky_way"], text: "", added_in: "6.0", search: "milky,way,photo,space,stars" }, waning_gibbous_moon: { name: "Waning Gibbous Moon Symbol", unified: "1F316", short_name: "waning_gibbous_moon", short_names: ["waning_gibbous_moon"], text: "", added_in: "6.0", search: "waning,gibbous,moon,symbol,nature,twilight,planet,space,night,evening,sleep,waxing_gibbous_moon" }, passport_control: { name: "Passport Control", unified: "1F6C2", short_name: "passport_control", short_names: ["passport_control"], text: "", added_in: "6.0", search: "passport,control,custom,blue-square" }, mailbox_with_mail: { name: "Open Mailbox with Raised Flag", unified: "1F4EC", short_name: "mailbox_with_mail", short_names: ["mailbox_with_mail"], text: "", added_in: "6.0", search: "mailbox,with,mail,open,raised,flag,email,inbox,communication" }, customs: { name: "Customs", unified: "1F6C3", short_name: "customs", short_names: ["customs"], text: "", added_in: "6.0", search: "customs,passport,border,blue-square" }, bridge_at_night: { name: "Bridge at Night", unified: "1F309", short_name: "bridge_at_night", short_names: ["bridge_at_night"], text: "", added_in: "6.0", search: "bridge,at,night,photo,sanfrancisco" }, last_quarter_moon: { name: "Last Quarter Moon Symbol", unified: "1F317", short_name: "last_quarter_moon", short_names: ["last_quarter_moon"], text: "", added_in: "6.0", search: "last,quarter,moon,symbol,nature,twilight,planet,space,night,evening,sleep" }, waning_crescent_moon: { name: "Waning Crescent Moon Symbol", unified: "1F318", short_name: "waning_crescent_moon", short_names: ["waning_crescent_moon"], text: "", added_in: "6.0", search: "waning,crescent,moon,symbol,nature,twilight,planet,space,night,evening,sleep" }, baggage_claim: { name: "Baggage Claim", unified: "1F6C4", short_name: "baggage_claim", short_names: ["baggage_claim"], text: "", added_in: "6.0", search: "baggage,claim,blue-square,airport,transport" }, foggy: { name: "Foggy", unified: "1F301", short_name: "foggy", short_names: ["foggy"], text: "", added_in: "6.0", search: "foggy,photo,mountain" }, mailbox_with_no_mail: { name: "Open Mailbox with Lowered Flag", unified: "1F4ED", short_name: "mailbox_with_no_mail", short_names: ["mailbox_with_no_mail"], text: "", added_in: "6.0", search: "mailbox,with,no,mail,open,lowered,flag,email,inbox" }, new_moon: { name: "New Moon Symbol", unified: "1F311", short_name: "new_moon", short_names: ["new_moon"], text: "", added_in: "6.0", search: "new,moon,symbol,nature,twilight,planet,space,night,evening,sleep" }, postbox: { name: "Postbox", unified: "1F4EE", short_name: "postbox", short_names: ["postbox"], text: "", added_in: "6.0", search: "postbox,email,letter,envelope" }, left_luggage: { name: "Left Luggage", unified: "1F6C5", short_name: "left_luggage", short_names: ["left_luggage"], text: "", added_in: "6.0", search: "left,luggage,blue-square,travel" }, waxing_crescent_moon: { name: "Waxing Crescent Moon Symbol", unified: "1F312", short_name: "waxing_crescent_moon", short_names: ["waxing_crescent_moon"], text: "", added_in: "6.0", search: "waxing,crescent,moon,symbol,nature,twilight,planet,space,night,evening,sleep" }, mens: { name: "Mens Symbol", unified: "1F6B9", short_name: "mens", short_names: ["mens"], text: "", added_in: "6.0", search: "mens,symbol,toilet,restroom,wc,blue-square,gender,male" }, postal_horn: { name: "Postal Horn", unified: "1F4EF", short_name: "postal_horn", short_names: ["postal_horn"], text: "", added_in: "6.0", search: "postal,horn,instrument,music" }, scroll: { name: "Scroll", unified: "1F4DC", short_name: "scroll", short_names: ["scroll"], text: "", added_in: "6.0", search: "scroll,documents,ancient,history,paper" }, womens: { name: "Womens Symbol", unified: "1F6BA", short_name: "womens", short_names: ["womens"], text: "", added_in: "6.0", search: "womens,symbol,purple-square,woman,female,toilet,loo,restroom,gender" }, first_quarter_moon: { name: "First Quarter Moon Symbol", unified: "1F313", short_name: "first_quarter_moon", short_names: ["first_quarter_moon"], text: "", added_in: "6.0", search: "first,quarter,moon,symbol,nature,twilight,planet,space,night,evening,sleep" }, moon: { name: "Waxing Gibbous Moon Symbol", unified: "1F314", short_name: "moon", short_names: ["moon", "waxing_gibbous_moon"], text: "", added_in: "6.0", search: "moon,waxing,gibbous,symbol" }, page_with_curl: { name: "Page with Curl", unified: "1F4C3", short_name: "page_with_curl", short_names: ["page_with_curl"], text: "", added_in: "6.0", search: "page,with,curl,documents,office,paper" }, baby_symbol: { name: "Baby Symbol", unified: "1F6BC", short_name: "baby_symbol", short_names: ["baby_symbol"], text: "", added_in: "6.0", search: "baby,symbol,orange-square,child" }, page_facing_up: { name: "Page Facing Up", unified: "1F4C4", short_name: "page_facing_up", short_names: ["page_facing_up"], text: "", added_in: "6.0", search: "page,facing,up,documents,office,paper,information" }, restroom: { name: "Restroom", unified: "1F6BB", short_name: "restroom", short_names: ["restroom"], text: "", added_in: "6.0", search: "restroom,blue-square,toilet,refresh,wc,gender" }, new_moon_with_face: { name: "New Moon with Face", unified: "1F31A", short_name: "new_moon_with_face", short_names: ["new_moon_with_face"], text: "", added_in: "6.0", search: "new,moon,with,face,nature,twilight,planet,space,night,evening,sleep" }, bookmark_tabs: { name: "Bookmark Tabs", unified: "1F4D1", short_name: "bookmark_tabs", short_names: ["bookmark_tabs"], text: "", added_in: "6.0", search: "bookmark,tabs,favorite,save,order,tidy" }, put_litter_in_its_place: { name: "Put Litter in Its Place Symbol", unified: "1F6AE", short_name: "put_litter_in_its_place", short_names: ["put_litter_in_its_place"], text: "", added_in: "6.0", search: "put,litter,in,its,place,symbol,blue-square,sign,human,info" }, full_moon_with_face: { name: "Full Moon with Face", unified: "1F31D", short_name: "full_moon_with_face", short_names: ["full_moon_with_face"], text: "", added_in: "6.0", search: "full,moon,with,face,nature,twilight,planet,space,night,evening,sleep" }, sun_with_face: { name: "Sun with Face", unified: "1F31E", short_name: "sun_with_face", short_names: ["sun_with_face"], text: "", added_in: "6.0", search: "sun,with,face,nature,morning,sky" }, cinema: { name: "Cinema", unified: "1F3A6", short_name: "cinema", short_names: ["cinema"], text: "", added_in: "6.0", search: "cinema,blue-square,record,film,movie,curtain,stage,theater" }, bar_chart: { name: "Bar Chart", unified: "1F4CA", short_name: "bar_chart", short_names: ["bar_chart"], text: "", added_in: "6.0", search: "bar,chart,graph,presentation,stats" }, first_quarter_moon_with_face: { name: "First Quarter Moon with Face", unified: "1F31B", short_name: "first_quarter_moon_with_face", short_names: ["first_quarter_moon_with_face"], text: "", added_in: "6.0", search: "first,quarter,moon,with,face,nature,twilight,planet,space,night,evening,sleep" }, signal_strength: { name: "Antenna with Bars", unified: "1F4F6", short_name: "signal_strength", short_names: ["signal_strength"], text: "", added_in: "6.0", search: "signal,strength,antenna,with,bars,blue-square,reception,phone,internet,connection,wifi,bluetooth" }, chart_with_upwards_trend: { name: "Chart with Upwards Trend", unified: "1F4C8", short_name: "chart_with_upwards_trend", short_names: ["chart_with_upwards_trend"], text: "", added_in: "6.0", search: "chart,with,upwards,trend,graph,presentation,stats,recovery,business,economics,money,sales,good,success" }, chart_with_downwards_trend: { name: "Chart with Downwards Trend", unified: "1F4C9", short_name: "chart_with_downwards_trend", short_names: ["chart_with_downwards_trend"], text: "", added_in: "6.0", search: "chart,with,downwards,trend,graph,presentation,stats,recession,business,economics,money,sales,bad,failure" }, last_quarter_moon_with_face: { name: "Last Quarter Moon with Face", unified: "1F31C", short_name: "last_quarter_moon_with_face", short_names: ["last_quarter_moon_with_face"], text: "", added_in: "6.0", search: "last,quarter,moon,with,face,nature,twilight,planet,space,night,evening,sleep" }, koko: { name: "Squared Katakana Koko", unified: "1F201", short_name: "koko", short_names: ["koko"], text: "", added_in: "6.0", search: "koko,squared,katakana,blue-square,here,japanese,destination" }, ring: { name: "Ring", unified: "1F48D", short_name: "ring", short_names: ["ring"], text: "", added_in: "6.0", search: "ring,wedding,propose,marriage,valentines,diamond,fashion,jewelry,gem,engagement" }, crescent_moon: { name: "Crescent Moon", unified: "1F319", short_name: "crescent_moon", short_names: ["crescent_moon"], text: "", added_in: "6.0", search: "crescent,moon,night,sleep,sky,evening,magic" }, symbols: { name: "Input Symbol for Symbols", unified: "1F523", short_name: "symbols", short_names: ["symbols"], text: "", added_in: "6.0", search: "symbols,input,symbol,for,blue-square,music,note,ampersand,percent,glyphs,characters" }, lipstick: { name: "Lipstick", unified: "1F484", short_name: "lipstick", short_names: ["lipstick"], text: "", added_in: "6.0", search: "lipstick,female,girl,fashion,woman" }, kiss: { name: "Kiss Mark", unified: "1F48B", short_name: "kiss", short_names: ["kiss"], text: "", added_in: "6.0", search: "kiss,mark,face,lips,love,like,affection,valentines" }, information_source: { name: "Information Source", unified: "2139", variations: ["2139-FE0F"], short_name: "information_source", short_names: ["information_source"], text: "", added_in: "3.0", search: "information,source,blue-square,alphabet,letter" }, dizzy: { name: "Dizzy Symbol", unified: "1F4AB", short_name: "dizzy", short_names: ["dizzy"], text: "", added_in: "6.0", search: "dizzy,symbol,star,sparkle,shoot,magic" }, abc: { name: "Input Symbol for Latin Letters", unified: "1F524", short_name: "abc", short_names: ["abc"], text: "", added_in: "6.0", search: "abc,input,symbol,for,latin,letters,blue-square,alphabet" }, lips: { name: "Mouth", unified: "1F444", short_name: "lips", short_names: ["lips"], text: "", added_in: "6.0", search: "lips,mouth,kiss" }, star: { name: "White Medium Star", unified: "2B50", variations: ["2B50-FE0F"], short_name: "star", short_names: ["star"], text: "", added_in: "5.1", search: "star,white,medium,night,yellow" }, calendar: { name: "Tear-off Calendar", unified: "1F4C6", short_name: "calendar", short_names: ["calendar"], text: "", added_in: "6.0", search: "calendar,tear,off,schedule,date,planning" }, "star2": { name: "Glowing Star", unified: "1F31F", short_name: "star2", short_names: ["star2"], text: "", added_in: "6.0", search: "star2,glowing,star,night,sparkle,awesome,good,magic" }, tongue: { name: "Tongue", unified: "1F445", short_name: "tongue", short_names: ["tongue"], text: "", added_in: "6.0", search: "tongue,mouth,playful" }, abcd: { name: "Input Symbol for Latin Small Letters", unified: "1F521", short_name: "abcd", short_names: ["abcd"], text: "", added_in: "6.0", search: "abcd,input,symbol,for,latin,small,letters,blue-square,alphabet" }, date: { name: "Calendar", unified: "1F4C5", short_name: "date", short_names: ["date"], text: "", added_in: "6.0", search: "date,calendar,schedule" }, capital_abcd: { name: "Input Symbol for Latin Capital Letters", unified: "1F520", short_name: "capital_abcd", short_names: ["capital_abcd"], text: "", added_in: "6.0", search: "capital,abcd,input,symbol,for,latin,letters,alphabet,words,blue-square" }, sparkles: { name: "Sparkles", unified: "2728", short_name: "sparkles", short_names: ["sparkles"], text: "", added_in: "6.0", search: "sparkles,stars,shine,shiny,cool,awesome,good,magic" }, card_index: { name: "Card Index", unified: "1F4C7", short_name: "card_index", short_names: ["card_index"], text: "", added_in: "6.0", search: "card,index,business,stationery" }, zap: { name: "High Voltage Sign", unified: "26A1", variations: ["26A1-FE0F"], short_name: "zap", short_names: ["zap"], text: "", added_in: "4.0", search: "zap,high,voltage,sign,thunder,weather,lightning bolt,fast" }, ng: { name: "Squared Ng", unified: "1F196", short_name: "ng", short_names: ["ng"], text: "", added_in: "6.0", search: "ng,squared,blue-square,words,shape,icon" }, ok: { name: "Squared Ok", unified: "1F197", short_name: "ok", short_names: ["ok"], text: "", added_in: "6.0", search: "ok,squared,good,agree,yes,blue-square" }, footprints: { name: "Footprints", unified: "1F463", short_name: "footprints", short_names: ["footprints"], text: "", added_in: "6.0", search: "footprints,feet,tracking,walking,beach" }, fire: { name: "Fire", unified: "1F525", short_name: "fire", short_names: ["fire"], text: "", added_in: "6.0", search: "fire,hot,cook,flame" }, boom: { name: "Collision Symbol", unified: "1F4A5", short_name: "boom", short_names: ["boom", "collision"], text: "", added_in: "6.0", search: "boom,collision,symbol,bomb,explode,explosion,blown" }, up: { name: "Squared Up with Exclamation Mark", unified: "1F199", short_name: "up", short_names: ["up"], text: "", added_in: "6.0", search: "up,squared,with,exclamation,mark,blue-square,above,high" }, cool: { name: "Squared Cool", unified: "1F192", short_name: "cool", short_names: ["cool"], text: "", added_in: "6.0", search: "cool,squared,words,blue-square" }, comet: { name: "Comet", unified: "2604", variations: ["2604-FE0F"], short_name: "comet", short_names: ["comet"], text: "", added_in: "1.1", search: "comet,space" }, eyes: { name: "Eyes", unified: "1F440", short_name: "eyes", short_names: ["eyes"], text: "", added_in: "6.0", search: "eyes,look,watch,stalk,peek,see" }, clipboard: { name: "Clipboard", unified: "1F4CB", short_name: "clipboard", short_names: ["clipboard"], text: "", added_in: "6.0", search: "clipboard,stationery,documents" }, file_folder: { name: "File Folder", unified: "1F4C1", short_name: "file_folder", short_names: ["file_folder"], text: "", added_in: "6.0", search: "file,folder,documents,business,office" }, new: { name: "Squared New", unified: "1F195", short_name: "new", short_names: ["new"], text: "", added_in: "6.0", search: "new,squared,blue-square,words,start" }, sunny: { name: "Black Sun with Rays", unified: "2600", variations: ["2600-FE0F"], short_name: "sunny", short_names: ["sunny"], text: "", added_in: "1.1", search: "sunny,black,sun,with,rays,weather,nature,brightness,summer,beach,spring" }, bust_in_silhouette: { name: "Bust in Silhouette", unified: "1F464", short_name: "bust_in_silhouette", short_names: ["bust_in_silhouette"], text: "", added_in: "6.0", search: "bust,in,silhouette,user,person,human" }, open_file_folder: { name: "Open File Folder", unified: "1F4C2", short_name: "open_file_folder", short_names: ["open_file_folder"], text: "", added_in: "6.0", search: "open,file,folder,documents,load" }, free: { name: "Squared Free", unified: "1F193", short_name: "free", short_names: ["free"], text: "", added_in: "6.0", search: "free,squared,blue-square,words" }, busts_in_silhouette: { name: "Busts in Silhouette", unified: "1F465", short_name: "busts_in_silhouette", short_names: ["busts_in_silhouette"], text: "", added_in: "6.0", search: "busts,in,silhouette,user,person,human,group,team" }, partly_sunny: { name: "Sun Behind Cloud", unified: "26C5", variations: ["26C5-FE0F"], short_name: "partly_sunny", short_names: ["partly_sunny"], text: "", added_in: "5.2", search: "partly,sunny,sun,behind,cloud,weather,nature,cloudy,morning,fall,spring" }, newspaper: { name: "Newspaper", unified: "1F4F0", short_name: "newspaper", short_names: ["newspaper"], text: "", added_in: "6.0", search: "newspaper,press,headline" }, notebook: { name: "Notebook", unified: "1F4D3", short_name: "notebook", short_names: ["notebook"], text: "", added_in: "6.0", search: "notebook,stationery,record,notes,paper,study" }, rainbow: { name: "Rainbow", unified: "1F308", short_name: "rainbow", short_names: ["rainbow"], text: "", added_in: "6.0", search: "rainbow,nature,happy,unicorn_face,photo,sky,spring" }, cloud: { name: "Cloud", unified: "2601", variations: ["2601-FE0F"], short_name: "cloud", short_names: ["cloud"], text: "", added_in: "1.1", search: "cloud,weather,sky" }, notebook_with_decorative_cover: { name: "Notebook with Decorative Cover", unified: "1F4D4", short_name: "notebook_with_decorative_cover", short_names: ["notebook_with_decorative_cover"], text: "", added_in: "6.0", search: "notebook,with,decorative,cover,classroom,notes,record,paper,study" }, ledger: { name: "Ledger", unified: "1F4D2", short_name: "ledger", short_names: ["ledger"], text: "", added_in: "6.0", search: "ledger,notes,paper" }, closed_book: { name: "Closed Book", unified: "1F4D5", short_name: "closed_book", short_names: ["closed_book"], text: "", added_in: "6.0", search: "closed,book,read,library,knowledge,textbook,learn" }, thunder_cloud_and_rain: { name: "Thunder Cloud and Rain", unified: "26C8", short_name: "thunder_cloud_and_rain", short_names: ["thunder_cloud_and_rain"], text: "", added_in: "5.2", search: "thunder,cloud,and,rain" }, green_book: { name: "Green Book", unified: "1F4D7", short_name: "green_book", short_names: ["green_book"], text: "", added_in: "6.0", search: "green,book,read,library,knowledge,study" }, blue_book: { name: "Blue Book", unified: "1F4D8", short_name: "blue_book", short_names: ["blue_book"], text: "", added_in: "6.0", search: "blue,book,read,library,knowledge,learn,study" }, orange_book: { name: "Orange Book", unified: "1F4D9", short_name: "orange_book", short_names: ["orange_book"], text: "", added_in: "6.0", search: "orange,book,read,library,knowledge,textbook,study" }, snowman: { name: "Snowman", unified: "2603", variations: ["2603-FE0F"], short_name: "snowman", short_names: ["snowman"], text: "", added_in: "1.1", search: "snowman,winter,season,cold,weather,christmas,xmas,frozen,without_snow" }, keycap_ten: { name: "Keycap Ten", unified: "1F51F", short_name: "keycap_ten", short_names: ["keycap_ten"], text: "", added_in: "6.0", search: "keycap,ten,numbers,10,blue-square" }, books: { name: "Books", unified: "1F4DA", short_name: "books", short_names: ["books"], text: "", added_in: "6.0", search: "books,literature,library,study" }, snowman_without_snow: { name: "Snowman Without Snow", unified: "26C4", variations: ["26C4-FE0F"], short_name: "snowman_without_snow", short_names: ["snowman_without_snow"], text: "", added_in: "5.2", search: "snowman,without,snow" }, book: { name: "Open Book", unified: "1F4D6", short_name: "book", short_names: ["book", "open_book"], text: "", added_in: "6.0", search: "book,open" }, snowflake: { name: "Snowflake", unified: "2744", variations: ["2744-FE0F"], short_name: "snowflake", short_names: ["snowflake"], text: "", added_in: "1.1", search: "snowflake,winter,season,cold,weather,christmas,xmas" }, bookmark: { name: "Bookmark", unified: "1F516", short_name: "bookmark", short_names: ["bookmark"], text: "", added_in: "6.0", search: "bookmark,favorite,label,save" }, link: { name: "Link Symbol", unified: "1F517", short_name: "link", short_names: ["link"], text: "", added_in: "6.0", search: "link,symbol,rings,url" }, dash: { name: "Dash Symbol", unified: "1F4A8", short_name: "dash", short_names: ["dash"], text: "", added_in: "6.0", search: "dash,symbol,wind,air,fast,shoo,fart,smoke,puff" }, arrow_forward: { name: "Black Right-Pointing Triangle", unified: "25B6", variations: ["25B6-FE0F"], short_name: "arrow_forward", short_names: ["arrow_forward"], text: "", added_in: "1.1", search: "arrow,forward,black,right,pointing,triangle,blue-square,direction,play" }, paperclip: { name: "Paperclip", unified: "1F4CE", short_name: "paperclip", short_names: ["paperclip"], text: "", added_in: "6.0", search: "paperclip,documents,stationery" }, triangular_ruler: { name: "Triangular Ruler", unified: "1F4D0", short_name: "triangular_ruler", short_names: ["triangular_ruler"], text: "", added_in: "6.0", search: "triangular,ruler,stationery,math,architect,sketch" }, ocean: { name: "Water Wave", unified: "1F30A", short_name: "ocean", short_names: ["ocean"], text: "", added_in: "6.0", search: "ocean,water,wave,sea,nature,tsunami,disaster" }, black_right_pointing_triangle_with_double_vertical_bar: { name: "Black Right-Pointing Triangle with Double Vertical Bar", unified: "23EF", short_name: "black_right_pointing_triangle_with_double_vertical_bar", short_names: ["black_right_pointing_triangle_with_double_vertical_bar"], text: "", added_in: "6.0", search: "black,right,pointing,triangle,with,double,vertical,bar" }, droplet: { name: "Droplet", unified: "1F4A7", short_name: "droplet", short_names: ["droplet"], text: "", added_in: "6.0", search: "droplet,water,drip,faucet,spring" }, straight_ruler: { name: "Straight Ruler", unified: "1F4CF", short_name: "straight_ruler", short_names: ["straight_ruler"], text: "", added_in: "6.0", search: "straight,ruler,stationery,calculate,length,math,school,drawing,architect,sketch" }, sweat_drops: { name: "Splashing Sweat Symbol", unified: "1F4A6", short_name: "sweat_drops", short_names: ["sweat_drops"], text: "", added_in: "6.0", search: "sweat,drops,splashing,symbol,water,drip,oops" }, pushpin: { name: "Pushpin", unified: "1F4CC", short_name: "pushpin", short_names: ["pushpin"], text: "", added_in: "6.0", search: "pushpin,stationery,mark,here" }, eject: { name: "Eject Symbol", unified: "23CF", short_name: "eject", short_names: ["eject"], text: "", added_in: "4.0", search: "eject,symbol" }, umbrella_with_rain_drops: { name: "Umbrella with Rain Drops", unified: "2614", variations: ["2614-FE0F"], short_name: "umbrella_with_rain_drops", short_names: ["umbrella_with_rain_drops"], text: "", added_in: "4.0", search: "umbrella,with,rain,drops" }, round_pushpin: { name: "Round Pushpin", unified: "1F4CD", short_name: "round_pushpin", short_names: ["round_pushpin"], text: "", added_in: "6.0", search: "round,pushpin,stationery,location,map,here" }, scissors: { name: "Black Scissors", unified: "2702", variations: ["2702-FE0F"], short_name: "scissors", short_names: ["scissors"], text: "", added_in: "1.1", search: "scissors,black,stationery,cut" }, black_right_pointing_double_triangle_with_vertical_bar: { name: "Black Right-Pointing Double Triangle with Vertical Bar", unified: "23ED", short_name: "black_right_pointing_double_triangle_with_vertical_bar", short_names: ["black_right_pointing_double_triangle_with_vertical_bar"], text: "", added_in: "6.0", search: "black,right,pointing,double,triangle,with,vertical,bar" }, black_left_pointing_double_triangle_with_vertical_bar: { name: "Black Left-Pointing Double Triangle with Vertical Bar", unified: "23EE", short_name: "black_left_pointing_double_triangle_with_vertical_bar", short_names: ["black_left_pointing_double_triangle_with_vertical_bar"], text: "", added_in: "6.0", search: "black,left,pointing,double,triangle,with,vertical,bar" }, fast_forward: { name: "Black Right-Pointing Double Triangle", unified: "23E9", short_name: "fast_forward", short_names: ["fast_forward"], text: "", added_in: "6.0", search: "fast,forward,black,right,pointing,double,triangle,blue-square,play,speed,continue" }, rewind: { name: "Black Left-Pointing Double Triangle", unified: "23EA", short_name: "rewind", short_names: ["rewind"], text: "", added_in: "6.0", search: "rewind,black,left,pointing,double,triangle,play,blue-square" }, black_nib: { name: "Black Nib", unified: "2712", variations: ["2712-FE0F"], short_name: "black_nib", short_names: ["black_nib"], text: "", added_in: "1.1", search: "black,nib,pen,stationery,writing,write" }, arrow_double_up: { name: "Black Up-Pointing Double Triangle", unified: "23EB", short_name: "arrow_double_up", short_names: ["arrow_double_up"], text: "", added_in: "6.0", search: "arrow,double,up,black,pointing,triangle,blue-square,direction,top" }, arrow_double_down: { name: "Black Down-Pointing Double Triangle", unified: "23EC", short_name: "arrow_double_down", short_names: ["arrow_double_down"], text: "", added_in: "6.0", search: "arrow,double,down,black,pointing,triangle,blue-square,direction,bottom" }, memo: { name: "Memo", unified: "1F4DD", short_name: "memo", short_names: ["memo", "pencil"], text: "", added_in: "6.0", search: "memo,pencil,write,documents,stationery,paper,writing,legal,exam,quiz,test,study" }, arrow_backward: { name: "Black Left-Pointing Triangle", unified: "25C0", variations: ["25C0-FE0F"], short_name: "arrow_backward", short_names: ["arrow_backward"], text: "", added_in: "1.1", search: "arrow,backward,black,left,pointing,triangle,blue-square,direction" }, "pencil2": { name: "Pencil", unified: "270F", variations: ["270F-FE0F"], short_name: "pencil2", short_names: ["pencil2"], text: "", added_in: "1.1", search: "pencil2,pencil,stationery,write,paper,writing,school,study" }, arrow_up_small: { name: "Up-Pointing Small Red Triangle", unified: "1F53C", short_name: "arrow_up_small", short_names: ["arrow_up_small"], text: "", added_in: "6.0", search: "arrow,up,small,pointing,red,triangle,blue-square,direction,point,forward,top" }, mag: { name: "Left-Pointing Magnifying Glass", unified: "1F50D", short_name: "mag", short_names: ["mag"], text: "", added_in: "6.0", search: "mag,left,pointing,magnifying,glass,search,zoom,find,detective" }, arrow_down_small: { name: "Down-Pointing Small Red Triangle", unified: "1F53D", short_name: "arrow_down_small", short_names: ["arrow_down_small"], text: "", added_in: "6.0", search: "arrow,down,small,pointing,red,triangle,blue-square,direction,bottom" }, arrow_right: { name: "Black Rightwards Arrow", unified: "27A1", variations: ["27A1-FE0F"], short_name: "arrow_right", short_names: ["arrow_right"], text: "", added_in: "1.1", search: "arrow,right,black,rightwards,blue-square,next" }, mag_right: { name: "Right-Pointing Magnifying Glass", unified: "1F50E", short_name: "mag_right", short_names: ["mag_right"], text: "", added_in: "6.0", search: "mag,right,pointing,magnifying,glass,search,zoom,find,detective" }, arrow_left: { name: "Leftwards Black Arrow", unified: "2B05", variations: ["2B05-FE0F"], short_name: "arrow_left", short_names: ["arrow_left"], text: "", added_in: "4.0", search: "arrow,left,leftwards,black,blue-square,previous,back" }, lock_with_ink_pen: { name: "Lock with Ink Pen", unified: "1F50F", short_name: "lock_with_ink_pen", short_names: ["lock_with_ink_pen"], text: "", added_in: "6.0", search: "lock,with,ink,pen,security,secret" }, arrow_up: { name: "Upwards Black Arrow", unified: "2B06", variations: ["2B06-FE0F"], short_name: "arrow_up", short_names: ["arrow_up"], text: "", added_in: "4.0", search: "arrow,up,upwards,black,blue-square,continue,top,direction" }, closed_lock_with_key: { name: "Closed Lock with Key", unified: "1F510", short_name: "closed_lock_with_key", short_names: ["closed_lock_with_key"], text: "", added_in: "6.0", search: "closed,lock,with,key,security,privacy" }, arrow_down: { name: "Downwards Black Arrow", unified: "2B07", variations: ["2B07-FE0F"], short_name: "arrow_down", short_names: ["arrow_down"], text: "", added_in: "4.0", search: "arrow,down,downwards,black,blue-square,direction,bottom" }, lock: { name: "Lock", unified: "1F512", short_name: "lock", short_names: ["lock"], text: "", added_in: "6.0", search: "lock,security,password,padlock" }, unlock: { name: "Open Lock", unified: "1F513", short_name: "unlock", short_names: ["unlock"], text: "", added_in: "6.0", search: "unlock,open,lock,privacy,security" }, arrow_upper_right: { name: "North East Arrow", unified: "2197", variations: ["2197-FE0F"], short_name: "arrow_upper_right", short_names: ["arrow_upper_right"], text: "", added_in: "1.1", search: "arrow,upper,right,north,east,blue-square,point,direction,diagonal,northeast" }, arrow_lower_right: { name: "South East Arrow", unified: "2198", variations: ["2198-FE0F"], short_name: "arrow_lower_right", short_names: ["arrow_lower_right"], text: "", added_in: "1.1", search: "arrow,lower,right,south,east,blue-square,direction,diagonal,southeast" }, arrow_lower_left: { name: "South West Arrow", unified: "2199", variations: ["2199-FE0F"], short_name: "arrow_lower_left", short_names: ["arrow_lower_left"], text: "", added_in: "1.1", search: "arrow,lower,left,south,west,blue-square,direction,diagonal,southwest" }, arrow_upper_left: { name: "North West Arrow", unified: "2196", variations: ["2196-FE0F"], short_name: "arrow_upper_left", short_names: ["arrow_upper_left"], text: "", added_in: "1.1", search: "arrow,upper,left,north,west,blue-square,point,direction,diagonal,northwest" }, arrow_up_down: { name: "Up Down Arrow", unified: "2195", variations: ["2195-FE0F"], short_name: "arrow_up_down", short_names: ["arrow_up_down"], text: "", added_in: "1.1", search: "arrow,up,down,blue-square,direction,way,vertical" }, left_right_arrow: { name: "Left Right Arrow", unified: "2194", variations: ["2194-FE0F"], short_name: "left_right_arrow", short_names: ["left_right_arrow"], text: "", added_in: "1.1", search: "left,right,arrow,shape,direction,horizontal,sideways" }, arrow_right_hook: { name: "Rightwards Arrow with Hook", unified: "21AA", variations: ["21AA-FE0F"], short_name: "arrow_right_hook", short_names: ["arrow_right_hook"], text: "", added_in: "1.1", search: "arrow,right,hook,rightwards,with,blue-square,return,rotate,direction" }, leftwards_arrow_with_hook: { name: "Leftwards Arrow with Hook", unified: "21A9", variations: ["21A9-FE0F"], short_name: "leftwards_arrow_with_hook", short_names: ["leftwards_arrow_with_hook"], text: "", added_in: "1.1", search: "leftwards,arrow,with,hook,back,return,blue-square,undo,enter" }, arrow_heading_up: { name: "Arrow Pointing Rightwards Then Curving Upwards", unified: "2934", variations: ["2934-FE0F"], short_name: "arrow_heading_up", short_names: ["arrow_heading_up"], text: "", added_in: "3.2", search: "arrow,heading,up,pointing,rightwards,then,curving,upwards,blue-square,direction,top" }, arrow_heading_down: { name: "Arrow Pointing Rightwards Then Curving Downwards", unified: "2935", variations: ["2935-FE0F"], short_name: "arrow_heading_down", short_names: ["arrow_heading_down"], text: "", added_in: "3.2", search: "arrow,heading,down,pointing,rightwards,then,curving,downwards,blue-square,direction,bottom" }, twisted_rightwards_arrows: { name: "Twisted Rightwards Arrows", unified: "1F500", short_name: "twisted_rightwards_arrows", short_names: ["twisted_rightwards_arrows"], text: "", added_in: "6.0", search: "twisted,rightwards,arrows,blue-square,shuffle,music,random" }, repeat: { name: "Clockwise Rightwards and Leftwards Open Circle Arrows", unified: "1F501", short_name: "repeat", short_names: ["repeat"], text: "", added_in: "6.0", search: "repeat,clockwise,rightwards,and,leftwards,open,circle,arrows,loop,record" }, repeat_one: { name: "Clockwise Rightwards and Leftwards Open Circle Arrows with Circled One Overlay", unified: "1F502", short_name: "repeat_one", short_names: ["repeat_one"], text: "", added_in: "6.0", search: "repeat,one,clockwise,rightwards,and,leftwards,open,circle,arrows,with,circled,overlay,blue-square,loop" }, arrows_counterclockwise: { name: "Anticlockwise Downwards and Upwards Open Circle Arrows", unified: "1F504", short_name: "arrows_counterclockwise", short_names: ["arrows_counterclockwise"], text: "", added_in: "6.0", search: "arrows,counterclockwise,anticlockwise,downwards,and,upwards,open,circle,blue-square,sync,cycle" }, arrows_clockwise: { name: "Clockwise Downwards and Upwards Open Circle Arrows", unified: "1F503", short_name: "arrows_clockwise", short_names: ["arrows_clockwise"], text: "", added_in: "6.0", search: "arrows,clockwise,downwards,and,upwards,open,circle,sync,cycle,round,repeat" }, musical_note: { name: "Musical Note", unified: "1F3B5", short_name: "musical_note", short_names: ["musical_note"], text: "", added_in: "6.0", search: "musical,note,score,tone,sound" }, notes: { name: "Multiple Musical Notes", unified: "1F3B6", short_name: "notes", short_names: ["notes"], text: "", added_in: "6.0", search: "notes,multiple,musical,music,score" }, heavy_plus_sign: { name: "Heavy Plus Sign", unified: "2795", short_name: "heavy_plus_sign", short_names: ["heavy_plus_sign"], text: "", added_in: "6.0", search: "heavy,plus,sign,math,calculation,addition,more,increase" }, heavy_minus_sign: { name: "Heavy Minus Sign", unified: "2796", short_name: "heavy_minus_sign", short_names: ["heavy_minus_sign"], text: "", added_in: "6.0", search: "heavy,minus,sign,math,calculation,subtract,less" }, heavy_division_sign: { name: "Heavy Division Sign", unified: "2797", short_name: "heavy_division_sign", short_names: ["heavy_division_sign"], text: "", added_in: "6.0", search: "heavy,division,sign,divide,math,calculation" }, heavy_multiplication_x: { name: "Heavy Multiplication X", unified: "2716", variations: ["2716-FE0F"], short_name: "heavy_multiplication_x", short_names: ["heavy_multiplication_x"], text: "", added_in: "1.1", search: "heavy,multiplication,x,math,calculation" }, heavy_dollar_sign: { name: "Heavy Dollar Sign", unified: "1F4B2", short_name: "heavy_dollar_sign", short_names: ["heavy_dollar_sign"], text: "", added_in: "6.0", search: "heavy,dollar,sign,money,sales,payment,currency,buck" }, currency_exchange: { name: "Currency Exchange", unified: "1F4B1", short_name: "currency_exchange", short_names: ["currency_exchange"], text: "", added_in: "6.0", search: "currency,exchange,money,sales,dollar,travel" }, tm: { name: "Trade Mark Sign", unified: "2122", variations: ["2122-FE0F"], short_name: "tm", short_names: ["tm"], text: "", added_in: "1.1", search: "tm,trade,mark,sign,trademark,brand,law,legal" }, copyright: { name: "Copyright Sign", unified: "00A9", variations: ["00A9-FE0F"], short_name: "copyright", short_names: ["copyright"], text: "", added_in: "1.1", search: "copyright,sign,ip,license,circle,law,legal" }, registered: { name: "Registered Sign", unified: "00AE", variations: ["00AE-FE0F"], short_name: "registered", short_names: ["registered"], text: "", added_in: "1.1", search: "registered,sign,alphabet,circle" }, wavy_dash: { name: "Wavy Dash", unified: "3030", variations: ["3030-FE0F"], short_name: "wavy_dash", short_names: ["wavy_dash"], text: "", added_in: "1.1", search: "wavy,dash,draw,line,moustache,mustache,squiggle,scribble" }, curly_loop: { name: "Curly Loop", unified: "27B0", short_name: "curly_loop", short_names: ["curly_loop"], text: "", added_in: "6.0", search: "curly,loop,scribble,draw,shape,squiggle" }, loop: { name: "Double Curly Loop", unified: "27BF", short_name: "loop", short_names: ["loop"], text: "", added_in: "6.0", search: "loop,double,curly,tape,cassette" }, end: { name: "End with Leftwards Arrow Above", unified: "1F51A", short_name: "end", short_names: ["end"], text: "", added_in: "6.0", search: "end,with,leftwards,arrow,above,words" }, back: { name: "Back with Leftwards Arrow Above", unified: "1F519", short_name: "back", short_names: ["back"], text: "", added_in: "6.0", search: "back,with,leftwards,arrow,above,words,return" }, on: { name: "On with Exclamation Mark with Left Right Arrow Above", unified: "1F51B", short_name: "on", short_names: ["on"], text: "", added_in: "6.0", search: "on,with,exclamation,mark,left,right,arrow,above,words" }, top: { name: "Top with Upwards Arrow Above", unified: "1F51D", short_name: "top", short_names: ["top"], text: "", added_in: "6.0", search: "top,with,upwards,arrow,above,words,blue-square" }, soon: { name: "Soon with Rightwards Arrow Above", unified: "1F51C", short_name: "soon", short_names: ["soon"], text: "", added_in: "6.0", search: "soon,with,rightwards,arrow,above,words" }, heavy_check_mark: { name: "Heavy Check Mark", unified: "2714", variations: ["2714-FE0F"], short_name: "heavy_check_mark", short_names: ["heavy_check_mark"], text: "", added_in: "1.1", search: "heavy,check,mark,ok,nike,answer,yes,tick" }, ballot_box_with_check: { name: "Ballot Box with Check", unified: "2611", variations: ["2611-FE0F"], short_name: "ballot_box_with_check", short_names: ["ballot_box_with_check"], text: "", added_in: "1.1", search: "ballot,box,with,check,ok,agree,confirm,black-square,vote,election,yes" }, radio_button: { name: "Radio Button", unified: "1F518", short_name: "radio_button", short_names: ["radio_button"], text: "", added_in: "6.0", search: "radio,button,input,old,music,circle" }, white_circle: { name: "Medium White Circle", unified: "26AA", variations: ["26AA-FE0F"], short_name: "white_circle", short_names: ["white_circle"], text: "", added_in: "4.1", search: "white,circle,medium,shape,round" }, black_circle: { name: "Medium Black Circle", unified: "26AB", variations: ["26AB-FE0F"], short_name: "black_circle", short_names: ["black_circle"], text: "", added_in: "4.1", search: "black,circle,medium,shape,button,round" }, red_circle: { name: "Large Red Circle", unified: "1F534", short_name: "red_circle", short_names: ["red_circle"], text: "", added_in: "6.0", search: "red,circle,large,shape,error,danger" }, large_blue_circle: { name: "Large Blue Circle", unified: "1F535", short_name: "large_blue_circle", short_names: ["large_blue_circle"], text: "", added_in: "6.0", search: "large,blue,circle,shape,icon,button" }, small_red_triangle: { name: "Up-Pointing Red Triangle", unified: "1F53A", short_name: "small_red_triangle", short_names: ["small_red_triangle"], text: "", added_in: "6.0", search: "small,red,triangle,up,pointing,shape,direction,top" }, small_red_triangle_down: { name: "Down-Pointing Red Triangle", unified: "1F53B", short_name: "small_red_triangle_down", short_names: ["small_red_triangle_down"], text: "", added_in: "6.0", search: "small,red,triangle,down,pointing,shape,direction,bottom" }, small_orange_diamond: { name: "Small Orange Diamond", unified: "1F538", short_name: "small_orange_diamond", short_names: ["small_orange_diamond"], text: "", added_in: "6.0", search: "small,orange,diamond,shape,jewel,gem" }, small_blue_diamond: { name: "Small Blue Diamond", unified: "1F539", short_name: "small_blue_diamond", short_names: ["small_blue_diamond"], text: "", added_in: "6.0", search: "small,blue,diamond,shape,jewel,gem" }, large_orange_diamond: { name: "Large Orange Diamond", unified: "1F536", short_name: "large_orange_diamond", short_names: ["large_orange_diamond"], text: "", added_in: "6.0", search: "large,orange,diamond,shape,jewel,gem" }, large_blue_diamond: { name: "Large Blue Diamond", unified: "1F537", short_name: "large_blue_diamond", short_names: ["large_blue_diamond"], text: "", added_in: "6.0", search: "large,blue,diamond,shape,jewel,gem" }, white_square_button: { name: "White Square Button", unified: "1F533", short_name: "white_square_button", short_names: ["white_square_button"], text: "", added_in: "6.0", search: "white,square,button,shape,input" }, black_square_button: { name: "Black Square Button", unified: "1F532", short_name: "black_square_button", short_names: ["black_square_button"], text: "", added_in: "6.0", search: "black,square,button,shape,input,frame" }, black_small_square: { name: "Black Small Square", unified: "25AA", variations: ["25AA-FE0F"], short_name: "black_small_square", short_names: ["black_small_square"], text: "", added_in: "1.1", search: "black,small,square,shape,icon" }, white_small_square: { name: "White Small Square", unified: "25AB", variations: ["25AB-FE0F"], short_name: "white_small_square", short_names: ["white_small_square"], text: "", added_in: "1.1", search: "white,small,square,shape,icon" }, black_medium_small_square: { name: "Black Medium Small Square", unified: "25FE", variations: ["25FE-FE0F"], short_name: "black_medium_small_square", short_names: ["black_medium_small_square"], text: "", added_in: "3.2", search: "black,medium,small,square,icon,shape,button" }, white_medium_small_square: { name: "White Medium Small Square", unified: "25FD", variations: ["25FD-FE0F"], short_name: "white_medium_small_square", short_names: ["white_medium_small_square"], text: "", added_in: "3.2", search: "white,medium,small,square,shape,stone,icon,button" }, black_medium_square: { name: "Black Medium Square", unified: "25FC", variations: ["25FC-FE0F"], short_name: "black_medium_square", short_names: ["black_medium_square"], text: "", added_in: "3.2", search: "black,medium,square,shape,button,icon" }, white_medium_square: { name: "White Medium Square", unified: "25FB", variations: ["25FB-FE0F"], short_name: "white_medium_square", short_names: ["white_medium_square"], text: "", added_in: "3.2", search: "white,medium,square,shape,stone,icon" }, black_large_square: { name: "Black Large Square", unified: "2B1B", variations: ["2B1B-FE0F"], short_name: "black_large_square", short_names: ["black_large_square"], text: "", added_in: "5.1", search: "black,large,square,shape,icon,button" }, dancers: { name: "Woman with Bunny Ears", unified: "1F46F", short_name: "dancers", short_names: ["dancers"], text: "", added_in: "6.0", obsoleted_by: "1F46F-200D-2640-FE0F", search: "dancers,woman,with,bunny,ears" }, "man-with-bunny-ears-partying": { name: "Man with Bunny Ears Partying", unified: "1F46F-200D-2642-FE0F", short_name: "man-with-bunny-ears-partying", short_names: ["man-with-bunny-ears-partying"], text: "", added_in: "6.0", search: "man,with,bunny,ears,partying" }, white_large_square: { name: "White Large Square", unified: "2B1C", variations: ["2B1C-FE0F"], short_name: "white_large_square", short_names: ["white_large_square"], text: "", added_in: "5.1", search: "white,large,square,shape,icon,stone,button" }, speaker: { name: "Speaker", unified: "1F508", short_name: "speaker", short_names: ["speaker"], text: "", added_in: "6.0", search: "speaker,sound,volume,silence,broadcast" }, mute: { name: "Speaker with Cancellation Stroke", unified: "1F507", short_name: "mute", short_names: ["mute"], text: "", added_in: "6.0", search: "mute,speaker,with,cancellation,stroke,sound,volume,silence,quiet" }, sound: { name: "Speaker with One Sound Wave", unified: "1F509", short_name: "sound", short_names: ["sound"], text: "", added_in: "6.0", search: "sound,speaker,with,one,wave,volume,broadcast" }, loud_sound: { name: "Speaker with Three Sound Waves", unified: "1F50A", short_name: "loud_sound", short_names: ["loud_sound"], text: "", added_in: "6.0", search: "loud,sound,speaker,with,three,waves,volume,noise,noisy,broadcast" }, couple: { name: "Man and Woman Holding Hands", unified: "1F46B", short_name: "couple", short_names: ["couple", "man_and_woman_holding_hands"], text: "", added_in: "6.0", search: "couple,man,and,woman,holding,hands,pair,people,human,love,date,dating,like,affection,valentines,marriage" }, bell: { name: "Bell", unified: "1F514", short_name: "bell", short_names: ["bell"], text: "", added_in: "6.0", search: "bell,sound,notification,christmas,xmas,chime" }, no_bell: { name: "Bell with Cancellation Stroke", unified: "1F515", short_name: "no_bell", short_names: ["no_bell"], text: "", added_in: "6.0", search: "no,bell,with,cancellation,stroke,sound,volume,mute,quiet,silent" }, two_women_holding_hands: { name: "Two Women Holding Hands", unified: "1F46D", short_name: "two_women_holding_hands", short_names: ["two_women_holding_hands"], text: "", added_in: "6.0", search: "two,women,holding,hands,pair,friendship,couple,love,like,female,people,human" }, two_men_holding_hands: { name: "Two Men Holding Hands", unified: "1F46C", short_name: "two_men_holding_hands", short_names: ["two_men_holding_hands"], text: "", added_in: "6.0", search: "two,men,holding,hands,pair,couple,love,like,bromance,friendship,people,human" }, mega: { name: "Cheering Megaphone", unified: "1F4E3", short_name: "mega", short_names: ["mega"], text: "", added_in: "6.0", search: "mega,cheering,megaphone,sound,speaker,volume" }, loudspeaker: { name: "Public Address Loudspeaker", unified: "1F4E2", short_name: "loudspeaker", short_names: ["loudspeaker"], text: "", added_in: "6.0", search: "loudspeaker,public,address,volume,sound" }, couple_with_heart: { name: "Couple with Heart", unified: "1F491", short_name: "couple_with_heart", short_names: ["couple_with_heart"], text: "", added_in: "6.0", obsoleted_by: "1F469-200D-2764-FE0F-200D-1F468", search: "couple,with,heart" }, "woman-heart-woman": { name: "Woman Heart Woman", unified: "1F469-200D-2764-FE0F-200D-1F469", short_name: "woman-heart-woman", short_names: ["woman-heart-woman"], text: "", added_in: "6.0", search: "woman,heart" }, "man-heart-man": { name: "Man Heart Man", unified: "1F468-200D-2764-FE0F-200D-1F468", short_name: "man-heart-man", short_names: ["man-heart-man"], text: "", added_in: "6.0", search: "man,heart" }, speech_balloon: { name: "Speech Balloon", unified: "1F4AC", short_name: "speech_balloon", short_names: ["speech_balloon"], text: "", added_in: "6.0", search: "speech,balloon,bubble,words,message,talk,chatting" }, couplekiss: { name: "Kiss", unified: "1F48F", short_name: "couplekiss", short_names: ["couplekiss"], text: "", added_in: "6.0", obsoleted_by: "1F469-200D-2764-FE0F-200D-1F48B-200D-1F468", search: "couplekiss,kiss" }, thought_balloon: { name: "Thought Balloon", unified: "1F4AD", short_name: "thought_balloon", short_names: ["thought_balloon"], text: "", added_in: "6.0", search: "thought,balloon,bubble,cloud,speech,thinking" }, "woman-kiss-woman": { name: "Woman Kiss Woman", unified: "1F469-200D-2764-FE0F-200D-1F48B-200D-1F469", short_name: "woman-kiss-woman", short_names: ["woman-kiss-woman"], text: "", added_in: "6.0", search: "woman,kiss" }, "man-kiss-man": { name: "Man Kiss Man", unified: "1F468-200D-2764-FE0F-200D-1F48B-200D-1F468", short_name: "man-kiss-man", short_names: ["man-kiss-man"], text: "", added_in: "6.0", search: "man,kiss" }, family: { name: "Family", unified: "1F46A", short_name: "family", short_names: ["family", "man-woman-boy"], text: "", added_in: "6.0", obsoleted_by: "1F468-200D-1F469-200D-1F466", search: "family,man,woman,boy" }, spades: { name: "Black Spade Suit", unified: "2660", variations: ["2660-FE0F"], short_name: "spades", short_names: ["spades"], text: "", added_in: "1.1", search: "spades,black,spade,suit,poker,cards,suits,magic" }, "man-woman-girl": { name: "Man Woman Girl", unified: "1F468-200D-1F469-200D-1F467", short_name: "man-woman-girl", short_names: ["man-woman-girl"], text: "", added_in: "6.0", search: "man,woman,girl" }, clubs: { name: "Black Club Suit", unified: "2663", variations: ["2663-FE0F"], short_name: "clubs", short_names: ["clubs"], text: "", added_in: "1.1", search: "clubs,black,club,suit,poker,cards,magic,suits" }, "man-woman-girl-boy": { name: "Man Woman Girl Boy", unified: "1F468-200D-1F469-200D-1F467-200D-1F466", short_name: "man-woman-girl-boy", short_names: ["man-woman-girl-boy"], text: "", added_in: "6.0", search: "man,woman,girl,boy" }, hearts: { name: "Black Heart Suit", unified: "2665", variations: ["2665-FE0F"], short_name: "hearts", short_names: ["hearts"], text: "", added_in: "1.1", search: "hearts,black,heart,suit,poker,cards,magic,suits" }, "man-woman-boy-boy": { name: "Man Woman Boy Boy", unified: "1F468-200D-1F469-200D-1F466-200D-1F466", short_name: "man-woman-boy-boy", short_names: ["man-woman-boy-boy"], text: "", added_in: "6.0", search: "man,woman,boy" }, diamonds: { name: "Black Diamond Suit", unified: "2666", variations: ["2666-FE0F"], short_name: "diamonds", short_names: ["diamonds"], text: "", added_in: "1.1", search: "diamonds,black,diamond,suit,poker,cards,magic,suits" }, "man-woman-girl-girl": { name: "Man Woman Girl Girl", unified: "1F468-200D-1F469-200D-1F467-200D-1F467", short_name: "man-woman-girl-girl", short_names: ["man-woman-girl-girl"], text: "", added_in: "6.0", search: "man,woman,girl" }, black_joker: { name: "Playing Card Black Joker", unified: "1F0CF", short_name: "black_joker", short_names: ["black_joker"], text: "", added_in: "6.0", search: "black,joker,playing,card,poker,cards,game,play,magic" }, "woman-woman-boy": { name: "Woman Woman Boy", unified: "1F469-200D-1F469-200D-1F466", short_name: "woman-woman-boy", short_names: ["woman-woman-boy"], text: "", added_in: "6.0", search: "woman,boy" }, flower_playing_cards: { name: "Flower Playing Cards", unified: "1F3B4", short_name: "flower_playing_cards", short_names: ["flower_playing_cards"], text: "", added_in: "6.0", search: "flower,playing,cards,game,sunset,red" }, "woman-woman-girl": { name: "Woman Woman Girl", unified: "1F469-200D-1F469-200D-1F467", short_name: "woman-woman-girl", short_names: ["woman-woman-girl"], text: "", added_in: "6.0", search: "woman,girl" }, mahjong: { name: "Mahjong Tile Red Dragon", unified: "1F004", variations: ["1F004-FE0F"], short_name: "mahjong", short_names: ["mahjong"], text: "", added_in: "5.1", search: "mahjong,tile,red,dragon,game,play,chinese,kanji" }, "woman-woman-girl-boy": { name: "Woman Woman Girl Boy", unified: "1F469-200D-1F469-200D-1F467-200D-1F466", short_name: "woman-woman-girl-boy", short_names: ["woman-woman-girl-boy"], text: "", added_in: "6.0", search: "woman,girl,boy" }, "clock1": { name: "Clock Face One Oclock", unified: "1F550", short_name: "clock1", short_names: ["clock1"], text: "", added_in: "6.0", search: "clock1,clock,face,one,oclock,time,late,early,schedule" }, "woman-woman-boy-boy": { name: "Woman Woman Boy Boy", unified: "1F469-200D-1F469-200D-1F466-200D-1F466", short_name: "woman-woman-boy-boy", short_names: ["woman-woman-boy-boy"], text: "", added_in: "6.0", search: "woman,boy" }, "clock2": { name: "Clock Face Two Oclock", unified: "1F551", short_name: "clock2", short_names: ["clock2"], text: "", added_in: "6.0", search: "clock2,clock,face,two,oclock,time,late,early,schedule" }, "clock3": { name: "Clock Face Three Oclock", unified: "1F552", short_name: "clock3", short_names: ["clock3"], text: "", added_in: "6.0", search: "clock3,clock,face,three,oclock,time,late,early,schedule" }, "woman-woman-girl-girl": { name: "Woman Woman Girl Girl", unified: "1F469-200D-1F469-200D-1F467-200D-1F467", short_name: "woman-woman-girl-girl", short_names: ["woman-woman-girl-girl"], text: "", added_in: "6.0", search: "woman,girl" }, "clock4": { name: "Clock Face Four Oclock", unified: "1F553", short_name: "clock4", short_names: ["clock4"], text: "", added_in: "6.0", search: "clock4,clock,face,four,oclock,time,late,early,schedule" }, "man-man-boy": { name: "Man Man Boy", unified: "1F468-200D-1F468-200D-1F466", short_name: "man-man-boy", short_names: ["man-man-boy"], text: "", added_in: "6.0", search: "man,boy" }, "clock5": { name: "Clock Face Five Oclock", unified: "1F554", short_name: "clock5", short_names: ["clock5"], text: "", added_in: "6.0", search: "clock5,clock,face,five,oclock,time,late,early,schedule" }, "man-man-girl": { name: "Man Man Girl", unified: "1F468-200D-1F468-200D-1F467", short_name: "man-man-girl", short_names: ["man-man-girl"], text: "", added_in: "6.0", search: "man,girl" }, "clock6": { name: "Clock Face Six Oclock", unified: "1F555", short_name: "clock6", short_names: ["clock6"], text: "", added_in: "6.0", search: "clock6,clock,face,six,oclock,time,late,early,schedule,dawn,dusk" }, "man-man-girl-boy": { name: "Man Man Girl Boy", unified: "1F468-200D-1F468-200D-1F467-200D-1F466", short_name: "man-man-girl-boy", short_names: ["man-man-girl-boy"], text: "", added_in: "6.0", search: "man,girl,boy" }, "clock7": { name: "Clock Face Seven Oclock", unified: "1F556", short_name: "clock7", short_names: ["clock7"], text: "", added_in: "6.0", search: "clock7,clock,face,seven,oclock,time,late,early,schedule" }, "man-man-boy-boy": { name: "Man Man Boy Boy", unified: "1F468-200D-1F468-200D-1F466-200D-1F466", short_name: "man-man-boy-boy", short_names: ["man-man-boy-boy"], text: "", added_in: "6.0", search: "man,boy" }, "clock8": { name: "Clock Face Eight Oclock", unified: "1F557", short_name: "clock8", short_names: ["clock8"], text: "", added_in: "6.0", search: "clock8,clock,face,eight,oclock,time,late,early,schedule" }, "man-man-girl-girl": { name: "Man Man Girl Girl", unified: "1F468-200D-1F468-200D-1F467-200D-1F467", short_name: "man-man-girl-girl", short_names: ["man-man-girl-girl"], text: "", added_in: "6.0", search: "man,girl" }, "woman-boy": { name: "Woman Boy", unified: "1F469-200D-1F466", short_name: "woman-boy", short_names: ["woman-boy"], text: "", added_in: "6.0", search: "woman,boy" }, "clock9": { name: "Clock Face Nine Oclock", unified: "1F558", short_name: "clock9", short_names: ["clock9"], text: "", added_in: "6.0", search: "clock9,clock,face,nine,oclock,time,late,early,schedule" }, "woman-girl": { name: "Woman Girl", unified: "1F469-200D-1F467", short_name: "woman-girl", short_names: ["woman-girl"], text: "", added_in: "6.0", search: "woman,girl" }, "clock10": { name: "Clock Face Ten Oclock", unified: "1F559", short_name: "clock10", short_names: ["clock10"], text: "", added_in: "6.0", search: "clock10,clock,face,ten,oclock,time,late,early,schedule" }, "clock11": { name: "Clock Face Eleven Oclock", unified: "1F55A", short_name: "clock11", short_names: ["clock11"], text: "", added_in: "6.0", search: "clock11,clock,face,eleven,oclock,time,late,early,schedule" }, "woman-girl-boy": { name: "Woman Girl Boy", unified: "1F469-200D-1F467-200D-1F466", short_name: "woman-girl-boy", short_names: ["woman-girl-boy"], text: "", added_in: "6.0", search: "woman,girl,boy" }, "woman-boy-boy": { name: "Woman Boy Boy", unified: "1F469-200D-1F466-200D-1F466", short_name: "woman-boy-boy", short_names: ["woman-boy-boy"], text: "", added_in: "6.0", search: "woman,boy" }, "clock12": { name: "Clock Face Twelve Oclock", unified: "1F55B", short_name: "clock12", short_names: ["clock12"], text: "", added_in: "6.0", search: "clock12,clock,face,twelve,oclock,time,noon,midnight,midday,late,early,schedule" }, "clock130": { name: "Clock Face One-Thirty", unified: "1F55C", short_name: "clock130", short_names: ["clock130"], text: "", added_in: "6.0", search: "clock130,clock,face,one,thirty,time,late,early,schedule" }, "woman-girl-girl": { name: "Woman Girl Girl", unified: "1F469-200D-1F467-200D-1F467", short_name: "woman-girl-girl", short_names: ["woman-girl-girl"], text: "", added_in: "6.0", search: "woman,girl" }, "man-boy": { name: "Man Boy", unified: "1F468-200D-1F466", short_name: "man-boy", short_names: ["man-boy"], text: "", added_in: "6.0", search: "man,boy" }, "clock230": { name: "Clock Face Two-Thirty", unified: "1F55D", short_name: "clock230", short_names: ["clock230"], text: "", added_in: "6.0", search: "clock230,clock,face,two,thirty,time,late,early,schedule" }, "clock330": { name: "Clock Face Three-Thirty", unified: "1F55E", short_name: "clock330", short_names: ["clock330"], text: "", added_in: "6.0", search: "clock330,clock,face,three,thirty,time,late,early,schedule" }, "man-girl": { name: "Man Girl", unified: "1F468-200D-1F467", short_name: "man-girl", short_names: ["man-girl"], text: "", added_in: "6.0", search: "man,girl" }, "man-girl-boy": { name: "Man Girl Boy", unified: "1F468-200D-1F467-200D-1F466", short_name: "man-girl-boy", short_names: ["man-girl-boy"], text: "", added_in: "6.0", search: "man,girl,boy" }, "clock430": { name: "Clock Face Four-Thirty", unified: "1F55F", short_name: "clock430", short_names: ["clock430"], text: "", added_in: "6.0", search: "clock430,clock,face,four,thirty,time,late,early,schedule" }, "clock530": { name: "Clock Face Five-Thirty", unified: "1F560", short_name: "clock530", short_names: ["clock530"], text: "", added_in: "6.0", search: "clock530,clock,face,five,thirty,time,late,early,schedule" }, "man-boy-boy": { name: "Man Boy Boy", unified: "1F468-200D-1F466-200D-1F466", short_name: "man-boy-boy", short_names: ["man-boy-boy"], text: "", added_in: "6.0", search: "man,boy" }, "clock630": { name: "Clock Face Six-Thirty", unified: "1F561", short_name: "clock630", short_names: ["clock630"], text: "", added_in: "6.0", search: "clock630,clock,face,six,thirty,time,late,early,schedule" }, "man-girl-girl": { name: "Man Girl Girl", unified: "1F468-200D-1F467-200D-1F467", short_name: "man-girl-girl", short_names: ["man-girl-girl"], text: "", added_in: "6.0", search: "man,girl" }, womans_clothes: { name: "Womans Clothes", unified: "1F45A", short_name: "womans_clothes", short_names: ["womans_clothes"], text: "", added_in: "6.0", search: "womans,clothes,fashion,shopping_bags,female" }, "clock730": { name: "Clock Face Seven-Thirty", unified: "1F562", short_name: "clock730", short_names: ["clock730"], text: "", added_in: "6.0", search: "clock730,clock,face,seven,thirty,time,late,early,schedule" }, shirt: { name: "T-Shirt", unified: "1F455", short_name: "shirt", short_names: ["shirt", "tshirt"], text: "", added_in: "6.0", search: "shirt,tshirt,t" }, "clock830": { name: "Clock Face Eight-Thirty", unified: "1F563", short_name: "clock830", short_names: ["clock830"], text: "", added_in: "6.0", search: "clock830,clock,face,eight,thirty,time,late,early,schedule" }, jeans: { name: "Jeans", unified: "1F456", short_name: "jeans", short_names: ["jeans"], text: "", added_in: "6.0", search: "jeans,fashion,shopping" }, "clock930": { name: "Clock Face Nine-Thirty", unified: "1F564", short_name: "clock930", short_names: ["clock930"], text: "", added_in: "6.0", search: "clock930,clock,face,nine,thirty,time,late,early,schedule" }, "clock1030": { name: "Clock Face Ten-Thirty", unified: "1F565", short_name: "clock1030", short_names: ["clock1030"], text: "", added_in: "6.0", search: "clock1030,clock,face,ten,thirty,time,late,early,schedule" }, necktie: { name: "Necktie", unified: "1F454", short_name: "necktie", short_names: ["necktie"], text: "", added_in: "6.0", search: "necktie,shirt,suitup,formal,fashion,cloth,business" }, dress: { name: "Dress", unified: "1F457", short_name: "dress", short_names: ["dress"], text: "", added_in: "6.0", search: "dress,clothes,fashion,shopping" }, "clock1130": { name: "Clock Face Eleven-Thirty", unified: "1F566", short_name: "clock1130", short_names: ["clock1130"], text: "", added_in: "6.0", search: "clock1130,clock,face,eleven,thirty,time,late,early,schedule" }, "clock1230": { name: "Clock Face Twelve-Thirty", unified: "1F567", short_name: "clock1230", short_names: ["clock1230"], text: "", added_in: "6.0", search: "clock1230,clock,face,twelve,thirty,time,late,early,schedule" }, bikini: { name: "Bikini", unified: "1F459", short_name: "bikini", short_names: ["bikini"], text: "", added_in: "6.0", search: "bikini,swimming,female,woman,girl,fashion,beach,summer" }, kimono: { name: "Kimono", unified: "1F458", short_name: "kimono", short_names: ["kimono"], text: "", added_in: "6.0", search: "kimono,dress,fashion,women,female,japanese" }, female_sign: { name: "Female Sign", unified: "2640", short_name: "female_sign", short_names: ["female_sign"], text: "", added_in: "1.1", search: "female,sign" }, high_heel: { name: "High-Heeled Shoe", unified: "1F460", short_name: "high_heel", short_names: ["high_heel"], text: "", added_in: "6.0", search: "high,heel,heeled,shoe,fashion,shoes,female,pumps,stiletto" }, male_sign: { name: "Male Sign", unified: "2642", short_name: "male_sign", short_names: ["male_sign"], text: "", added_in: "1.1", search: "male,sign" }, staff_of_aesculapius: { name: "Staff of Aesculapius", unified: "2695", short_name: "staff_of_aesculapius", short_names: ["staff_of_aesculapius"], text: "", added_in: "4.1", search: "staff,of,aesculapius" }, sandal: { name: "Womans Sandal", unified: "1F461", short_name: "sandal", short_names: ["sandal"], text: "", added_in: "6.0", search: "sandal,womans,shoes,fashion,flip flops" }, boot: { name: "Womans Boots", unified: "1F462", short_name: "boot", short_names: ["boot"], text: "", added_in: "6.0", search: "boot,womans,boots,shoes,fashion" }, mans_shoe: { name: "Mans Shoe", unified: "1F45E", short_name: "mans_shoe", short_names: ["mans_shoe", "shoe"], text: "", added_in: "6.0", search: "mans,shoe,fashion,male" }, athletic_shoe: { name: "Athletic Shoe", unified: "1F45F", short_name: "athletic_shoe", short_names: ["athletic_shoe"], text: "", added_in: "6.0", search: "athletic,shoe,shoes,sports,sneakers" }, womans_hat: { name: "Womans Hat", unified: "1F452", short_name: "womans_hat", short_names: ["womans_hat"], text: "", added_in: "6.0", search: "womans,hat,fashion,accessories,female,lady,spring" }, tophat: { name: "Top Hat", unified: "1F3A9", short_name: "tophat", short_names: ["tophat"], text: "", added_in: "6.0", search: "tophat,top,hat,magic,gentleman,classy,circus" }, mortar_board: { name: "Graduation Cap", unified: "1F393", short_name: "mortar_board", short_names: ["mortar_board"], text: "", added_in: "6.0", search: "mortar,board,graduation,cap,school,college,degree,university,hat,legal,learn,education" }, crown: { name: "Crown", unified: "1F451", short_name: "crown", short_names: ["crown"], text: "", added_in: "6.0", search: "crown,king,kod,leader,royalty,lord" }, helmet_with_white_cross: { name: "Helmet with White Cross", unified: "26D1", short_name: "helmet_with_white_cross", short_names: ["helmet_with_white_cross"], text: "", added_in: "5.2", search: "helmet,with,white,cross" }, school_satchel: { name: "School Satchel", unified: "1F392", short_name: "school_satchel", short_names: ["school_satchel"], text: "", added_in: "6.0", search: "school,satchel,student,education,bag,backpack" }, pouch: { name: "Pouch", unified: "1F45D", short_name: "pouch", short_names: ["pouch"], text: "", added_in: "6.0", search: "pouch,bag,accessories,shopping" }, purse: { name: "Purse", unified: "1F45B", short_name: "purse", short_names: ["purse"], text: "", added_in: "6.0", search: "purse,fashion,accessories,money,sales,shopping" }, handbag: { name: "Handbag", unified: "1F45C", short_name: "handbag", short_names: ["handbag"], text: "", added_in: "6.0", search: "handbag,fashion,accessory,accessories,shopping" }, briefcase: { name: "Briefcase", unified: "1F4BC", short_name: "briefcase", short_names: ["briefcase"], text: "", added_in: "6.0", search: "briefcase,business,documents,work,law,legal" }, eyeglasses: { name: "Eyeglasses", unified: "1F453", short_name: "eyeglasses", short_names: ["eyeglasses"], text: "", added_in: "6.0", search: "eyeglasses,fashion,accessories,eyesight,nerdy,dork,geek" }, closed_umbrella: { name: "Closed Umbrella", unified: "1F302", short_name: "closed_umbrella", short_names: ["closed_umbrella"], text: "", added_in: "6.0", search: "closed,umbrella,weather,rain,drizzle" }, umbrella: { name: "Umbrella", unified: "2602", variations: ["2602-FE0F"], short_name: "umbrella", short_names: ["umbrella"], text: "", added_in: "1.1", search: "umbrella,rainy,weather,spring" }, "man-woman-boy": { name: "Man Woman Boy", unified: "1F468-200D-1F469-200D-1F466", short_name: "man-woman-boy", short_names: ["man-woman-boy", "family"], text: "", added_in: "6.0", obsoletes: "1F46A", search: "man,woman,boy,family" }, "woman-heart-man": { name: "Woman Heart Man", unified: "1F469-200D-2764-FE0F-200D-1F468", short_name: "woman-heart-man", short_names: ["woman-heart-man"], text: "", added_in: "6.0", obsoletes: "1F491", search: "woman,heart,man" }, "woman-kiss-man": { name: "Woman Kiss Man", unified: "1F469-200D-2764-FE0F-200D-1F48B-200D-1F468", short_name: "woman-kiss-man", short_names: ["woman-kiss-man"], text: "", added_in: "6.0", obsoletes: "1F48F", search: "woman,kiss,man" }, "woman-with-bunny-ears-partying": { name: "Woman with Bunny Ears Partying", unified: "1F46F-200D-2640-FE0F", short_name: "woman-with-bunny-ears-partying", short_names: ["woman-with-bunny-ears-partying"], text: "", added_in: "6.0", obsoletes: "1F46F", search: "woman,with,bunny,ears,partying" } }, skins: {}, short_names: { red_car: "car", satisfied: "laughing", telephone: "phone", cooking: "fried_egg", honeybee: "bee", sailboat: "boat", flipper: "dolphin", knife: "hocho", poop: "hankey", shit: "hankey", heavy_exclamation_mark: "exclamation", paw_prints: "feet", lantern: "izakaya_lantern", envelope: "email", waxing_gibbous_moon: "moon", collision: "boom", open_book: "book", pencil: "memo", man_and_woman_holding_hands: "couple", "man-woman-boy": "family", tshirt: "shirt", shoe: "mans_shoe", family: "man-woman-boy" } };

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.unifiedToNative = exports.deepMerge = exports.intersect = exports.getSanitizedData = exports.getData = undefined;

	var _typeof2 = __webpack_require__(66);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _from = __webpack_require__(126);

	var _from2 = _interopRequireDefault(_from);

	var _set = __webpack_require__(139);

	var _set2 = _interopRequireDefault(_set);

	var _stringify = __webpack_require__(134);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _fromCodePoint = __webpack_require__(154);

	var _fromCodePoint2 = _interopRequireDefault(_fromCodePoint);

	var _toConsumableArray2 = __webpack_require__(125);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _buildSearch = __webpack_require__(157);

	var _buildSearch2 = _interopRequireDefault(_buildSearch);

	var _data = __webpack_require__(137);

	var _data2 = _interopRequireDefault(_data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var COLONS_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;
	var SKINS = ['1F3FA', '1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'];

	function unifiedToNative(unified) {
	  var unicodes = unified.split('-'),
	      codePoints = unicodes.map(function (u) {
	    return '0x' + u;
	  });

	  return _fromCodePoint2.default.apply(String, (0, _toConsumableArray3.default)(codePoints));
	}

	function sanitize(emoji) {
	  var name = emoji.name;
	  var short_names = emoji.short_names;
	  var skin_tone = emoji.skin_tone;
	  var skin_variations = emoji.skin_variations;
	  var emoticons = emoji.emoticons;
	  var unified = emoji.unified;
	  var custom = emoji.custom;
	  var imageUrl = emoji.imageUrl;
	  var id = emoji.id || short_names[0];
	  var colons = ':' + id + ':';

	  if (custom) {
	    return {
	      id: id,
	      name: name,
	      colons: colons,
	      emoticons: emoticons,
	      custom: custom,
	      imageUrl: imageUrl
	    };
	  }

	  if (skin_tone) {
	    colons += ':skin-tone-' + skin_tone + ':';
	  }

	  return {
	    id: id,
	    name: name,
	    colons: colons,
	    emoticons: emoticons,
	    unified: unified.toLowerCase(),
	    skin: skin_tone || (skin_variations ? 1 : null),
	    native: unifiedToNative(unified)
	  };
	}

	function getSanitizedData() {
	  return sanitize(getData.apply(undefined, arguments));
	}

	function getData(emoji, skin, set) {
	  var emojiData = {};

	  if (typeof emoji == 'string') {
	    var matches = emoji.match(COLONS_REGEX);

	    if (matches) {
	      emoji = matches[1];

	      if (matches[2]) {
	        skin = parseInt(matches[2]);
	      }
	    }

	    if (_data2.default.short_names.hasOwnProperty(emoji)) {
	      emoji = _data2.default.short_names[emoji];
	    }

	    if (_data2.default.emojis.hasOwnProperty(emoji)) {
	      emojiData = _data2.default.emojis[emoji];
	    }
	  } else if (emoji.custom) {
	    emojiData = emoji;

	    emojiData.search = (0, _buildSearch2.default)({
	      short_names: emoji.short_names,
	      name: emoji.name,
	      keywords: emoji.keywords,
	      emoticons: emoji.emoticons
	    });

	    emojiData.search = emojiData.search.join(',');
	  } else if (emoji.id) {
	    if (_data2.default.short_names.hasOwnProperty(emoji.id)) {
	      emoji.id = _data2.default.short_names[emoji.id];
	    }

	    if (_data2.default.emojis.hasOwnProperty(emoji.id)) {
	      emojiData = _data2.default.emojis[emoji.id];
	      skin || (skin = emoji.skin);
	    }
	  }

	  emojiData.emoticons || (emojiData.emoticons = []);
	  emojiData.variations || (emojiData.variations = []);

	  if (emojiData.skin_variations && skin > 1 && set) {
	    emojiData = JSON.parse((0, _stringify2.default)(emojiData));

	    var skinKey = SKINS[skin - 1],
	        variationData = emojiData.skin_variations[skinKey];

	    if (!variationData.variations && emojiData.variations) {
	      delete emojiData.variations;
	    }

	    if (variationData['has_img_' + set]) {
	      emojiData.skin_tone = skin;

	      for (var k in variationData) {
	        var v = variationData[k];
	        emojiData[k] = v;
	      }
	    }
	  }

	  if (emojiData.variations && emojiData.variations.length) {
	    emojiData = JSON.parse((0, _stringify2.default)(emojiData));
	    emojiData.unified = emojiData.variations.shift();
	  }

	  return emojiData;
	}

	function intersect(a, b) {
	  var aSet = new _set2.default(a),
	      bSet = new _set2.default(b),
	      intersection = null;

	  intersection = new _set2.default([].concat((0, _toConsumableArray3.default)(aSet)).filter(function (x) {
	    return bSet.has(x);
	  }));

	  return (0, _from2.default)(intersection);
	}

	function deepMerge(a, b) {
	  var o = {};

	  for (var key in a) {
	    var originalValue = a[key],
	        value = originalValue;

	    if (b.hasOwnProperty(key)) {
	      value = b[key];
	    }

	    if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object') {
	      value = deepMerge(originalValue, value);
	    }

	    o[key] = value;
	  }

	  return o;
	}

	exports.getData = getData;
	exports.getSanitizedData = getSanitizedData;
	exports.intersect = intersect;
	exports.deepMerge = deepMerge;
	exports.unifiedToNative = unifiedToNative;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(140), __esModule: true };

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(83);
	__webpack_require__(51);
	__webpack_require__(5);
	__webpack_require__(141);
	__webpack_require__(151);
	module.exports = __webpack_require__(18).Set;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(142);

	// 23.2 Set Objects
	module.exports = __webpack_require__(147)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(22).f
	  , create      = __webpack_require__(34)
	  , redefineAll = __webpack_require__(143)
	  , ctx         = __webpack_require__(19)
	  , anInstance  = __webpack_require__(144)
	  , defined     = __webpack_require__(13)
	  , forOf       = __webpack_require__(145)
	  , $iterDefine = __webpack_require__(14)
	  , step        = __webpack_require__(8)
	  , setSpecies  = __webpack_require__(146)
	  , DESCRIPTORS = __webpack_require__(26)
	  , fastKey     = __webpack_require__(73).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(21);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(19)
	  , call        = __webpack_require__(129)
	  , isArrayIter = __webpack_require__(130)
	  , anObject    = __webpack_require__(23)
	  , toLength    = __webpack_require__(39)
	  , getIterFn   = __webpack_require__(54)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(17)
	  , core        = __webpack_require__(18)
	  , dP          = __webpack_require__(22)
	  , DESCRIPTORS = __webpack_require__(26)
	  , SPECIES     = __webpack_require__(48)('species');

	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(17)
	  , $export        = __webpack_require__(16)
	  , meta           = __webpack_require__(73)
	  , fails          = __webpack_require__(27)
	  , hide           = __webpack_require__(21)
	  , redefineAll    = __webpack_require__(143)
	  , forOf          = __webpack_require__(145)
	  , anInstance     = __webpack_require__(144)
	  , isObject       = __webpack_require__(24)
	  , setToStringTag = __webpack_require__(47)
	  , dP             = __webpack_require__(22).f
	  , each           = __webpack_require__(148)(0)
	  , DESCRIPTORS    = __webpack_require__(26);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    C = wrapper(function(target, iterable){
	      anInstance(target, C, NAME, '_c');
	      target._c = new Base;
	      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
	        anInstance(this, C, KEY);
	        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    if('size' in proto)dP(C.prototype, 'size', {
	      get: function(){
	        return this._c.size;
	      }
	    });
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(19)
	  , IObject  = __webpack_require__(11)
	  , toObject = __webpack_require__(50)
	  , toLength = __webpack_require__(39)
	  , asc      = __webpack_require__(149);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(150);

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(24)
	  , isArray  = __webpack_require__(79)
	  , SPECIES  = __webpack_require__(48)('species');

	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(16);

	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(152)('Set')});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(55)
	  , from    = __webpack_require__(153);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(145);

	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(155), __esModule: true };

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(156);
	module.exports = __webpack_require__(18).String.fromCodePoint;

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(16)
	  , toIndex        = __webpack_require__(41)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 157 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (data) {
	  var search = [];

	  var addToSearch = function addToSearch(strings, split) {
	    if (!strings) {
	      return;
	    }

	    (Array.isArray(strings) ? strings : [strings]).forEach(function (string) {
	      (split ? string.split(/[-|_|\s]+/) : [string]).forEach(function (s) {
	        s = s.toLowerCase();

	        if (search.indexOf(s) == -1) {
	          search.push(s);
	        }
	      });
	    });
	  };

	  addToSearch(data.short_names, true);
	  addToSearch(data.name, true);
	  addToSearch(data.keywords, false);
	  addToSearch(data.emoticons, false);

	  return search;
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(107);

	var _assign2 = _interopRequireDefault(_assign);

	var _getIterator2 = __webpack_require__(3);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _extends2 = __webpack_require__(106);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	__webpack_require__(159);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(95);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _measureScrollbar = __webpack_require__(160);

	var _measureScrollbar2 = _interopRequireDefault(_measureScrollbar);

	var _data = __webpack_require__(137);

	var _data2 = _interopRequireDefault(_data);

	var _store = __webpack_require__(133);

	var _store2 = _interopRequireDefault(_store);

	var _frequently = __webpack_require__(121);

	var _frequently2 = _interopRequireDefault(_frequently);

	var _utils = __webpack_require__(138);

	var _ = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RECENT_CATEGORY = { name: 'Recent', emojis: null };
	var SEARCH_CATEGORY = { name: 'Search', emojis: null, anchor: false };
	var CUSTOM_CATEGORY = { name: 'Custom', emojis: [] };

	var I18N = {
	  search: 'Search',
	  notfound: 'No Emoji Found',
	  categories: {
	    search: 'Search Results',
	    recent: 'Frequently Used',
	    people: 'Smileys & People',
	    nature: 'Animals & Nature',
	    foods: 'Food & Drink',
	    activity: 'Activity',
	    places: 'Travel & Places',
	    objects: 'Objects',
	    symbols: 'Symbols',
	    flags: 'Flags',
	    custom: 'Custom'
	  }
	};

	var Picker = function (_React$Component) {
	  (0, _inherits3.default)(Picker, _React$Component);

	  function Picker(props) {
	    (0, _classCallCheck3.default)(this, Picker);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (Picker.__proto__ || (0, _getPrototypeOf2.default)(Picker)).call(this, props));

	    _this.i18n = (0, _utils.deepMerge)(I18N, props.i18n);
	    _this.state = {
	      skin: _store2.default.get('skin') || props.skin,
	      firstRender: true
	    };

	    _this.categories = [];
	    var allCategories = [].concat(_data2.default.categories);

	    if (props.custom.length > 0) {
	      CUSTOM_CATEGORY.emojis = props.custom.map(function (emoji) {
	        return (0, _extends3.default)({}, emoji, {
	          // `<Category />` expects emoji to have an `id`.
	          id: emoji.short_names[0],
	          custom: true
	        });
	      });

	      allCategories.push(CUSTOM_CATEGORY);
	    }

	    _this.hideRecent = true;

	    if (props.include != undefined) {
	      _data2.default.categories.sort(function (a, b) {
	        var aName = a.name.toLowerCase();
	        var bName = b.name.toLowerCase();

	        if (props.include.indexOf(aName) > props.include.indexOf(bName)) {
	          return 1;
	        }

	        return 0;
	      });
	    }

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = (0, _getIterator3.default)(allCategories), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var category = _step.value;

	        var isIncluded = props.include && props.include.length ? props.include.indexOf(category.name.toLowerCase()) > -1 : true;
	        var isExcluded = props.exclude && props.exclude.length ? props.exclude.indexOf(category.name.toLowerCase()) > -1 : false;
	        if (!isIncluded || isExcluded) {
	          continue;
	        }

	        if (props.emojisToShowFilter) {
	          var newEmojis = [];

	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;

	          try {
	            for (var _iterator2 = (0, _getIterator3.default)(category.emojis), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var emoji = _step2.value;

	              if (props.emojisToShowFilter(_data2.default.emojis[emoji] || emoji)) {
	                newEmojis.push(emoji);
	              }
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

	          if (newEmojis.length) {
	            var newCategory = {
	              emojis: newEmojis,
	              name: category.name
	            };

	            _this.categories.push(newCategory);
	          }
	        } else {
	          _this.categories.push(category);
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

	    var includeRecent = props.include && props.include.length ? props.include.indexOf('recent') > -1 : true;
	    var excludeRecent = props.exclude && props.exclude.length ? props.exclude.indexOf('recent') > -1 : false;
	    if (includeRecent && !excludeRecent) {
	      _this.hideRecent = false;
	      _this.categories.unshift(RECENT_CATEGORY);
	    }

	    if (_this.categories[0]) {
	      _this.categories[0].first = true;
	    }

	    _this.categories.unshift(SEARCH_CATEGORY);
	    return _this;
	  }

	  (0, _createClass3.default)(Picker, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(props) {
	      if (props.skin && !_store2.default.get('skin')) {
	        this.setState({ skin: props.skin });
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      if (this.state.firstRender) {
	        this.testStickyPosition();
	        this.firstRenderTimeout = setTimeout(function () {
	          _this2.setState({ firstRender: false });
	        }, 60);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.updateCategoriesSize();
	      this.handleScroll();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      SEARCH_CATEGORY.emojis = null;

	      clearTimeout(this.leaveTimeout);
	      clearTimeout(this.firstRenderTimeout);
	    }
	  }, {
	    key: 'testStickyPosition',
	    value: function testStickyPosition() {
	      var stickyTestElement = document.createElement('div');
	      var _arr = ['', '-webkit-', '-ms-', '-moz-', '-o-'];
	      for (var _i = 0; _i < _arr.length; _i++) {
	        var prefix = _arr[_i];
	        stickyTestElement.style.position = prefix + 'sticky';
	      }

	      this.hasStickyPosition = !!stickyTestElement.style.position.length;
	    }
	  }, {
	    key: 'handleEmojiOver',
	    value: function handleEmojiOver(emoji) {
	      var preview = this.refs.preview;
	      // Use Array.prototype.find() when it is more widely supported.

	      var emojiData = CUSTOM_CATEGORY.emojis.filter(function (customEmoji) {
	        return customEmoji.id === emoji.id;
	      })[0];
	      preview.setState({ emoji: (0, _assign2.default)(emoji, emojiData) });
	      clearTimeout(this.leaveTimeout);
	    }
	  }, {
	    key: 'handleEmojiLeave',
	    value: function handleEmojiLeave(emoji) {
	      var _this3 = this;

	      this.leaveTimeout = setTimeout(function () {
	        var preview = _this3.refs.preview;

	        preview.setState({ emoji: null });
	      }, 16);
	    }
	  }, {
	    key: 'handleEmojiClick',
	    value: function handleEmojiClick(emoji, e) {
	      var _this4 = this;

	      this.props.onClick(emoji, e);
	      if (!this.hideRecent) _frequently2.default.add(emoji);

	      var component = this.refs['category-1'];
	      if (component) {
	        var maxMargin = component.maxMargin;
	        component.forceUpdate();

	        window.requestAnimationFrame(function () {
	          component.memoizeSize();
	          if (maxMargin == component.maxMargin) return;

	          _this4.updateCategoriesSize();
	          _this4.handleScrollPaint();

	          if (SEARCH_CATEGORY.emojis) {
	            component.updateDisplay('none');
	          }
	        });
	      }
	    }
	  }, {
	    key: 'handleScroll',
	    value: function handleScroll() {
	      if (!this.waitingForPaint) {
	        this.waitingForPaint = true;
	        window.requestAnimationFrame(this.handleScrollPaint.bind(this));
	      }
	    }
	  }, {
	    key: 'handleScrollPaint',
	    value: function handleScrollPaint() {
	      this.waitingForPaint = false;

	      if (!this.refs.scroll) {
	        return;
	      }

	      var activeCategory = null;

	      if (SEARCH_CATEGORY.emojis) {
	        activeCategory = SEARCH_CATEGORY;
	      } else {
	        var target = this.refs.scroll,
	            scrollTop = target.scrollTop,
	            scrollingDown = scrollTop > (this.scrollTop || 0),
	            minTop = 0;

	        for (var i = 0, l = this.categories.length; i < l; i++) {
	          var ii = scrollingDown ? this.categories.length - 1 - i : i,
	              category = this.categories[ii],
	              component = this.refs['category-' + ii];

	          if (component) {
	            var active = component.handleScroll(scrollTop);

	            if (!minTop || component.top < minTop) {
	              if (component.top > 0) {
	                minTop = component.top;
	              }
	            }

	            if (active && !activeCategory) {
	              activeCategory = category;
	            }
	          }
	        }

	        if (scrollTop < minTop) {
	          var _iteratorNormalCompletion3 = true;
	          var _didIteratorError3 = false;
	          var _iteratorError3 = undefined;

	          try {
	            for (var _iterator3 = (0, _getIterator3.default)(this.categories), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	              var _category = _step3.value;

	              if (_category.anchor === false) {
	                continue;
	              }

	              activeCategory = _category;
	              break;
	            }
	          } catch (err) {
	            _didIteratorError3 = true;
	            _iteratorError3 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                _iterator3.return();
	              }
	            } finally {
	              if (_didIteratorError3) {
	                throw _iteratorError3;
	              }
	            }
	          }
	        } else if (scrollTop + this.clientHeight >= this.scrollHeight) {
	          activeCategory = this.categories[this.categories.length - 1];
	        }
	      }

	      if (activeCategory) {
	        var anchors = this.refs.anchors;
	        var _activeCategory = activeCategory;
	        var categoryName = _activeCategory.name;


	        if (anchors.state.selected != categoryName) {
	          anchors.setState({ selected: categoryName });
	        }
	      }

	      this.scrollTop = scrollTop;
	    }
	  }, {
	    key: 'handleSearch',
	    value: function handleSearch(emojis) {
	      SEARCH_CATEGORY.emojis = emojis;

	      for (var i = 0, l = this.categories.length; i < l; i++) {
	        var component = this.refs['category-' + i];

	        if (component && component.props.name != 'Search') {
	          var display = emojis ? 'none' : 'inherit';
	          component.updateDisplay(display);
	        }
	      }

	      this.forceUpdate();
	      this.refs.scroll.scrollTop = 0;
	      this.handleScroll();
	    }
	  }, {
	    key: 'handleAnchorClick',
	    value: function handleAnchorClick(category, i) {
	      var component = this.refs['category-' + i];
	      var _refs = this.refs;
	      var scroll = _refs.scroll;
	      var anchors = _refs.anchors;
	      var scrollToComponent = null;

	      scrollToComponent = function scrollToComponent() {
	        if (component) {
	          var top = component.top;


	          if (category.first) {
	            top = 0;
	          } else {
	            top += 1;
	          }

	          scroll.scrollTop = top;
	        }
	      };

	      if (SEARCH_CATEGORY.emojis) {
	        this.handleSearch(null);
	        this.refs.search.clear();

	        window.requestAnimationFrame(scrollToComponent);
	      } else {
	        scrollToComponent();
	      }
	    }
	  }, {
	    key: 'handleSkinChange',
	    value: function handleSkinChange(skin) {
	      var newState = { skin: skin };

	      this.setState(newState);
	      _store2.default.update(newState);
	    }
	  }, {
	    key: 'updateCategoriesSize',
	    value: function updateCategoriesSize() {
	      for (var i = 0, l = this.categories.length; i < l; i++) {
	        var component = this.refs['category-' + i];
	        if (component) component.memoizeSize();
	      }

	      if (this.refs.scroll) {
	        var target = this.refs.scroll;
	        this.scrollHeight = target.scrollHeight;
	        this.clientHeight = target.clientHeight;
	      }
	    }
	  }, {
	    key: 'getCategories',
	    value: function getCategories() {
	      return this.state.firstRender ? this.categories.slice(0, 3) : this.categories;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this5 = this;

	      var _props = this.props;
	      var perLine = _props.perLine;
	      var emojiSize = _props.emojiSize;
	      var set = _props.set;
	      var sheetSize = _props.sheetSize;
	      var style = _props.style;
	      var title = _props.title;
	      var emoji = _props.emoji;
	      var color = _props.color;
	      var native = _props.native;
	      var backgroundImageFn = _props.backgroundImageFn;
	      var emojisToShowFilter = _props.emojisToShowFilter;
	      var include = _props.include;
	      var exclude = _props.exclude;
	      var autoFocus = _props.autoFocus;
	      var skin = this.state.skin;
	      var width = perLine * (emojiSize + 12) + 12 + 2 + (0, _measureScrollbar2.default)();

	      return _react2.default.createElement(
	        'div',
	        { style: (0, _extends3.default)({ width: width }, style), className: 'emoji-mart' },
	        _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-bar' },
	          _react2.default.createElement(_.Anchors, {
	            ref: 'anchors',
	            i18n: this.i18n,
	            color: color,
	            categories: this.categories,
	            onAnchorClick: this.handleAnchorClick.bind(this)
	          })
	        ),
	        _react2.default.createElement(_.Search, {
	          ref: 'search',
	          onSearch: this.handleSearch.bind(this),
	          i18n: this.i18n,
	          emojisToShowFilter: emojisToShowFilter,
	          include: include,
	          exclude: exclude,
	          custom: CUSTOM_CATEGORY.emojis,
	          autoFocus: autoFocus
	        }),
	        _react2.default.createElement(
	          'div',
	          { ref: 'scroll', className: 'emoji-mart-scroll', onScroll: this.handleScroll.bind(this) },
	          this.getCategories().map(function (category, i) {
	            return _react2.default.createElement(_.Category, {
	              ref: 'category-' + i,
	              key: category.name,
	              name: category.name,
	              emojis: category.emojis,
	              perLine: perLine,
	              native: native,
	              hasStickyPosition: _this5.hasStickyPosition,
	              i18n: _this5.i18n,
	              custom: category.name == 'Recent' ? CUSTOM_CATEGORY.emojis : undefined,
	              emojiProps: {
	                native: native,
	                skin: skin,
	                size: emojiSize,
	                set: set,
	                sheetSize: sheetSize,
	                forceSize: native,
	                backgroundImageFn: backgroundImageFn,
	                onOver: _this5.handleEmojiOver.bind(_this5),
	                onLeave: _this5.handleEmojiLeave.bind(_this5),
	                onClick: _this5.handleEmojiClick.bind(_this5)
	              }
	            });
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-bar' },
	          _react2.default.createElement(_.Preview, {
	            ref: 'preview',
	            title: title,
	            emoji: emoji,
	            emojiProps: {
	              native: native,
	              size: 38,
	              skin: skin,
	              set: set,
	              sheetSize: sheetSize,
	              backgroundImageFn: backgroundImageFn
	            },
	            skinsProps: {
	              skin: skin,
	              onChange: this.handleSkinChange.bind(this)
	            }
	          })
	        )
	      );
	    }
	  }]);
	  return Picker;
	}(_react2.default.Component);

	exports.default = Picker;


	Picker.propTypes = {
	  onClick: _propTypes2.default.func,
	  perLine: _propTypes2.default.number,
	  emojiSize: _propTypes2.default.number,
	  i18n: _propTypes2.default.object,
	  style: _propTypes2.default.object,
	  title: _propTypes2.default.string,
	  emoji: _propTypes2.default.string,
	  color: _propTypes2.default.string,
	  set: _.Emoji.propTypes.set,
	  skin: _.Emoji.propTypes.skin,
	  native: _propTypes2.default.bool,
	  backgroundImageFn: _.Emoji.propTypes.backgroundImageFn,
	  sheetSize: _.Emoji.propTypes.sheetSize,
	  emojisToShowFilter: _propTypes2.default.func,
	  include: _propTypes2.default.arrayOf(_propTypes2.default.string),
	  exclude: _propTypes2.default.arrayOf(_propTypes2.default.string),
	  autoFocus: _propTypes2.default.bool,
	  custom: _propTypes2.default.arrayOf(_propTypes2.default.shape({
	    name: _propTypes2.default.string.isRequired,
	    short_names: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
	    emoticons: _propTypes2.default.arrayOf(_propTypes2.default.string),
	    keywords: _propTypes2.default.arrayOf(_propTypes2.default.string),
	    imageUrl: _propTypes2.default.string.isRequired
	  }))
	};

	Picker.defaultProps = {
	  onClick: function onClick() {},
	  emojiSize: 24,
	  perLine: 9,
	  i18n: {},
	  style: {},
	  title: 'Emoji Mart™',
	  emoji: 'department_store',
	  color: '#ae65c5',
	  set: _.Emoji.defaultProps.set,
	  skin: _.Emoji.defaultProps.skin,
	  native: _.Emoji.defaultProps.native,
	  sheetSize: _.Emoji.defaultProps.sheetSize,
	  backgroundImageFn: _.Emoji.defaultProps.backgroundImageFn,
	  emojisToShowFilter: null,
	  autoFocus: false,
	  custom: []
	};

/***/ },
/* 159 */
/***/ function(module, exports) {

	'use strict';

	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

	// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

	// MIT license

	var isWindowAvailable = typeof window !== 'undefined';

	isWindowAvailable && function () {
	  var lastTime = 0;
	  var vendors = ['ms', 'moz', 'webkit', 'o'];

	  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
	    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	  }

	  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
	    var currTime = new Date().getTime();
	    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	    var id = window.setTimeout(function () {
	      callback(currTime + timeToCall);
	    }, timeToCall);

	    lastTime = currTime + timeToCall;
	    return id;
	  };

	  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
	    clearTimeout(id);
	  };
	}();

/***/ },
/* 160 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var div = document.createElement('div');

	  div.style.width = '100px';
	  div.style.height = '100px';
	  div.style.overflow = 'scroll';
	  div.style.position = 'absolute';
	  div.style.top = '-9999px';

	  document.body.appendChild(div);

	  var scrollbarWidth = div.offsetWidth - div.clientWidth;

	  document.body.removeChild(div);

	  return scrollbarWidth;
	};

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getIterator2 = __webpack_require__(3);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _extends2 = __webpack_require__(106);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(95);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _ = __webpack_require__(1);

	var _utils = __webpack_require__(138);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Preview = function (_React$Component) {
	  (0, _inherits3.default)(Preview, _React$Component);

	  function Preview(props) {
	    (0, _classCallCheck3.default)(this, Preview);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (Preview.__proto__ || (0, _getPrototypeOf2.default)(Preview)).call(this, props));

	    _this.state = { emoji: null };
	    return _this;
	  }

	  (0, _createClass3.default)(Preview, [{
	    key: 'render',
	    value: function render() {
	      var emoji = this.state.emoji;
	      var _props = this.props;
	      var emojiProps = _props.emojiProps;
	      var skinsProps = _props.skinsProps;
	      var title = _props.title;
	      var idleEmoji = _props.emoji;


	      if (emoji) {
	        var emojiData = (0, _utils.getData)(emoji);
	        var emoticons = emojiData.emoticons;
	        var knownEmoticons = [];
	        var listedEmoticons = [];

	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = (0, _getIterator3.default)(emoticons), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var emoticon = _step.value;

	            if (knownEmoticons.indexOf(emoticon.toLowerCase()) == -1) {
	              knownEmoticons.push(emoticon.toLowerCase());
	              listedEmoticons.push(emoticon);
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

	        return _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-preview' },
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-preview-emoji' },
	            (0, _.Emoji)((0, _extends3.default)({
	              key: emoji.id,
	              emoji: emoji
	            }, emojiProps))
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-preview-data' },
	            _react2.default.createElement(
	              'div',
	              { className: 'emoji-mart-preview-name' },
	              emoji.name
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'emoji-mart-preview-shortnames' },
	              emojiData.short_names.map(function (short_name) {
	                return _react2.default.createElement(
	                  'span',
	                  { key: short_name, className: 'emoji-mart-preview-shortname' },
	                  ':',
	                  short_name,
	                  ':'
	                );
	              })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'emoji-mart-preview-emoticons' },
	              listedEmoticons.map(function (emoticon) {
	                return _react2.default.createElement(
	                  'span',
	                  { key: emoticon, className: 'emoji-mart-preview-emoticon' },
	                  emoticon
	                );
	              })
	            )
	          )
	        );
	      } else {
	        return _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-preview' },
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-preview-emoji' },
	            idleEmoji && idleEmoji.length && (0, _.Emoji)((0, _extends3.default)({
	              emoji: idleEmoji
	            }, emojiProps))
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-preview-data' },
	            _react2.default.createElement(
	              'span',
	              { className: 'emoji-mart-title-label' },
	              title
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-preview-skins' },
	            _react2.default.createElement(_.Skins, skinsProps)
	          )
	        );
	      }
	    }
	  }]);
	  return Preview;
	}(_react2.default.Component);

	exports.default = Preview;


	Preview.propTypes = {
	  title: _propTypes2.default.string.isRequired,
	  emoji: _propTypes2.default.string.isRequired,
	  emojiProps: _propTypes2.default.object.isRequired,
	  skinsProps: _propTypes2.default.object.isRequired
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(95);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _emojiIndex = __webpack_require__(163);

	var _emojiIndex2 = _interopRequireDefault(_emojiIndex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Search = function (_React$Component) {
	  (0, _inherits3.default)(Search, _React$Component);

	  function Search() {
	    (0, _classCallCheck3.default)(this, Search);
	    return (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Search, [{
	    key: 'handleChange',
	    value: function handleChange() {
	      var input = this.refs.input;
	      var value = input.value;

	      this.props.onSearch(_emojiIndex2.default.search(value, {
	        emojisToShowFilter: this.props.emojisToShowFilter,
	        maxResults: this.props.maxResults,
	        include: this.props.include,
	        exclude: this.props.exclude,
	        custom: this.props.custom
	      }));
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.refs.input.value = '';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var i18n = _props.i18n;
	      var autoFocus = _props.autoFocus;


	      return _react2.default.createElement(
	        'div',
	        { className: 'emoji-mart-search' },
	        _react2.default.createElement('input', {
	          ref: 'input',
	          type: 'text',
	          onChange: this.handleChange.bind(this),
	          placeholder: i18n.search,
	          autoFocus: autoFocus
	        })
	      );
	    }
	  }]);
	  return Search;
	}(_react2.default.Component);

	exports.default = Search;


	Search.propTypes = {
	  onSearch: _propTypes2.default.func,
	  maxResults: _propTypes2.default.number,
	  emojisToShowFilter: _propTypes2.default.func,
	  autoFocus: _propTypes2.default.bool
	};

	Search.defaultProps = {
	  onSearch: function onSearch() {},
	  maxResults: 75,
	  emojisToShowFilter: null,
	  autoFocus: false
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toConsumableArray2 = __webpack_require__(125);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _getIterator2 = __webpack_require__(3);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _data = __webpack_require__(137);

	var _data2 = _interopRequireDefault(_data);

	var _ = __webpack_require__(138);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var extend = __webpack_require__(164)._extend;

	var index = {};
	var emojisList = {};
	var emoticonsList = {};
	var previousInclude = [];
	var previousExclude = [];

	for (var emoji in _data2.default.emojis) {
	  var emojiData = _data2.default.emojis[emoji];
	  var short_names = emojiData.short_names;
	  var emoticons = emojiData.emoticons;
	  var id = short_names[0];

	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = (0, _getIterator3.default)(emoticons || []), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var emoticon = _step.value;

	      if (!emoticonsList[emoticon]) {
	        emoticonsList[emoticon] = id;
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

	  emojisList[id] = (0, _.getSanitizedData)(id);
	}

	function search(value) {
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var emojisToShowFilter = _ref.emojisToShowFilter;
	  var maxResults = _ref.maxResults;
	  var include = _ref.include;
	  var exclude = _ref.exclude;
	  var _ref$custom = _ref.custom;
	  var custom = _ref$custom === undefined ? [] : _ref$custom;

	  maxResults || (maxResults = 75);
	  include || (include = []);
	  exclude || (exclude = []);

	  if (custom.length) {
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	      for (var _iterator2 = (0, _getIterator3.default)(custom), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var _emoji = _step2.value;

	        _data2.default.emojis[_emoji.id] = (0, _.getData)(_emoji);
	        emojisList[_emoji.id] = (0, _.getSanitizedData)(_emoji);
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

	    _data2.default.categories.push({
	      name: 'Custom',
	      emojis: custom.map(function (emoji) {
	        return emoji.id;
	      })
	    });
	  }

	  var results = null,
	      pool = _data2.default.emojis;

	  if (value.length) {
	    if (value == '-' || value == '-1') {
	      return [emojisList['-1']];
	    }

	    var values = value.toLowerCase().split(/[\s|,|\-|_]+/),
	        allResults = [];

	    if (values.length > 2) {
	      values = [values[0], values[1]];
	    }

	    if (include.length || exclude.length) {
	      pool = {};

	      if (previousInclude != include.sort().join(',') || previousExclude != exclude.sort().join(',')) {
	        previousInclude = include.sort().join(',');
	        previousExclude = exclude.sort().join(',');
	        index = {};
	      }

	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;

	      try {
	        for (var _iterator3 = (0, _getIterator3.default)(_data2.default.categories), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var category = _step3.value;

	          var isIncluded = include && include.length ? include.indexOf(category.name.toLowerCase()) > -1 : true;
	          var isExcluded = exclude && exclude.length ? exclude.indexOf(category.name.toLowerCase()) > -1 : false;
	          if (!isIncluded || isExcluded) {
	            continue;
	          }

	          var _iteratorNormalCompletion4 = true;
	          var _didIteratorError4 = false;
	          var _iteratorError4 = undefined;

	          try {
	            for (var _iterator4 = (0, _getIterator3.default)(category.emojis), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	              var emojiId = _step4.value;

	              pool[emojiId] = _data2.default.emojis[emojiId];
	            }
	          } catch (err) {
	            _didIteratorError4 = true;
	            _iteratorError4 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                _iterator4.return();
	              }
	            } finally {
	              if (_didIteratorError4) {
	                throw _iteratorError4;
	              }
	            }
	          }
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }
	    } else if (previousInclude.length || previousExclude.length) {
	      index = {};
	    }

	    allResults = values.map(function (value) {
	      var aPool = pool,
	          aIndex = index,
	          length = 0;

	      var _iteratorNormalCompletion5 = true;
	      var _didIteratorError5 = false;
	      var _iteratorError5 = undefined;

	      try {
	        for (var _iterator5 = (0, _getIterator3.default)(value.split('')), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	          var char = _step5.value;

	          length++;

	          aIndex[char] || (aIndex[char] = {});
	          aIndex = aIndex[char];

	          if (!aIndex.results) {
	            (function () {
	              var scores = {};

	              aIndex.results = [];
	              aIndex.pool = {};

	              for (var id in aPool) {
	                var _emoji2 = aPool[id];
	                var _search = _emoji2.search;
	                var sub = value.substr(0, length);
	                var subIndex = _search.indexOf(sub);

	                if (subIndex != -1) {
	                  var score = subIndex + 1;
	                  if (sub == id) score = 0;

	                  aIndex.results.push(emojisList[id]);
	                  aIndex.pool[id] = _emoji2;

	                  scores[id] = score;
	                }
	              }

	              aIndex.results.sort(function (a, b) {
	                var aScore = scores[a.id],
	                    bScore = scores[b.id];

	                return aScore - bScore;
	              });
	            })();
	          }

	          aPool = aIndex.pool;
	        }
	      } catch (err) {
	        _didIteratorError5 = true;
	        _iteratorError5 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion5 && _iterator5.return) {
	            _iterator5.return();
	          }
	        } finally {
	          if (_didIteratorError5) {
	            throw _iteratorError5;
	          }
	        }
	      }

	      return aIndex.results;
	    }).filter(function (a) {
	      return a;
	    });

	    if (allResults.length > 1) {
	      results = _.intersect.apply(undefined, (0, _toConsumableArray3.default)(allResults));
	    } else if (allResults.length) {
	      results = allResults[0];
	    } else {
	      results = [];
	    }
	  }

	  if (results) {
	    if (emojisToShowFilter) {
	      results = results.filter(function (result) {
	        return emojisToShowFilter(_data2.default.emojis[result.id].unified);
	      });
	    }

	    if (results && results.length > maxResults) {
	      results = results.slice(0, maxResults);
	    }
	  }

	  return results;
	}

	exports.default = { search: search, emojis: emojisList, emoticons: emoticonsList };

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (process.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = __webpack_require__(165);

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(166);

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(96)))

/***/ },
/* 165 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 166 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toConsumableArray2 = __webpack_require__(125);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(95);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Skins = function (_React$Component) {
	  (0, _inherits3.default)(Skins, _React$Component);

	  function Skins(props) {
	    (0, _classCallCheck3.default)(this, Skins);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (Skins.__proto__ || (0, _getPrototypeOf2.default)(Skins)).call(this, props));

	    _this.state = {
	      opened: false
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(Skins, [{
	    key: 'handleClick',
	    value: function handleClick(skin) {
	      var onChange = this.props.onChange;


	      if (!this.state.opened) {
	        this.setState({ opened: true });
	      } else {
	        this.setState({ opened: false });
	        if (skin != this.props.skin) {
	          onChange(skin);
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var skin = this.props.skin;
	      var opened = this.state.opened;


	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-skin-swatches ' + (opened ? 'emoji-mart-skin-swatches-opened' : '') },
	          [].concat((0, _toConsumableArray3.default)(Array(6))).map(function (_, i) {
	            var skinTone = i + 1,
	                selected = skinTone == skin;

	            return _react2.default.createElement(
	              'span',
	              { key: 'skin-tone-' + skinTone, className: 'emoji-mart-skin-swatch ' + (selected ? 'emoji-mart-skin-swatch-selected' : '') },
	              _react2.default.createElement('span', {
	                onClick: function onClick() {
	                  return _this2.handleClick(skinTone);
	                },
	                className: 'emoji-mart-skin emoji-mart-skin-tone-' + skinTone })
	            );
	          })
	        )
	      );
	    }
	  }]);
	  return Skins;
	}(_react2.default.Component);

	exports.default = Skins;


	Skins.propTypes = {
	  onChange: _propTypes2.default.func,
	  skin: _propTypes2.default.number.isRequired
	};

	Skins.defaultProps = {
	  onChange: function onChange() {}
	};

/***/ }
/******/ ])
});
;