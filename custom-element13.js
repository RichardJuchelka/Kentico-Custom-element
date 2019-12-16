(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["custom-element"] = factory();
	else
		root["CustomElement"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(2), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _CustomElementApi, _CustomElement, _CustomElementMessageSender) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const customElement = new _CustomElement.CustomElement(new _CustomElementMessageSender.CustomElementMessageSender(Object.values(_CustomElementApi.CustomElementHostMessageType)));
  /*
    Publish just the plain js object (not the prototype class with readable internals)
    Arrow functions are used to preserve this inside CustomElement class.
   */

  const api = {
    init: callback => customElement.init(callback),
    setValue: value => customElement.setValue(value),
    onDisabledChanged: callback => customElement.onDisabledChanged(callback),
    setHeight: height => customElement.setHeight(height),
    getElementValue: (elementCodename, callback) => customElement.getElementValue(elementCodename, callback),
    observeElementChanges: (elementCodenames, callback) => customElement.observeElementChanges(elementCodenames, callback)
  };
  var _default = api;
  _exports.default = _default;
  module.exports = exports.default;
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CustomElementHostMessageType = _exports.CustomElementClientMessageType = void 0;
  let CustomElementClientMessageType;
  _exports.CustomElementClientMessageType = CustomElementClientMessageType;

  (function (CustomElementClientMessageType) {
    CustomElementClientMessageType["InitDataRequest"] = "init-data-request";
    CustomElementClientMessageType["SetValueRequest"] = "set-value-request";
    CustomElementClientMessageType["SetHeightRequest"] = "set-height-request";
    CustomElementClientMessageType["GetValueRequest"] = "get-value-request";
    CustomElementClientMessageType["ObserveElementChanges"] = "observe-element-changes";
  })(CustomElementClientMessageType || (_exports.CustomElementClientMessageType = CustomElementClientMessageType = {}));

  let CustomElementHostMessageType;
  _exports.CustomElementHostMessageType = CustomElementHostMessageType;

  (function (CustomElementHostMessageType) {
    CustomElementHostMessageType["InitDataResponse"] = "init-data-response";
    CustomElementHostMessageType["SetValueResponse"] = "set-value-response";
    CustomElementHostMessageType["OnDisabledChanged"] = "on-disabled-changed";
    CustomElementHostMessageType["GetValueResponse"] = "get-value-response";
    CustomElementHostMessageType["OnElementsChanged"] = "on-elements-changed";
  })(CustomElementHostMessageType || (_exports.CustomElementHostMessageType = CustomElementHostMessageType = {}));
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _CustomElementApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CustomElement = void 0;

  function isStringArray(value) {
    if (!Array.isArray(value)) {
      return false;
    }

    for (let i = 0; i < value.length; i++) {
      if (typeof value[i] !== 'string') {
        return false;
      }
    }

    return true;
  }

  class CustomElement {
    constructor(sender) {
      this.sender = sender;
    }

    setValue(value) {
      if (typeof value !== 'string' && value !== null) {
        throw Error('The provided value must be a string or null.');
      }

      this.sender.sendMessageWithReply(_CustomElementApi.CustomElementClientMessageType.SetValueRequest, _CustomElementApi.CustomElementHostMessageType.SetValueResponse, data => {
        if (data.error) {
          console.error(data.error);
        }
      }, {
        value
      });
    }

    init(callback) {
      if (typeof callback !== 'function') {
        throw Error('Specify a callback function.');
      }

      this.sender.sendMessageWithReply(_CustomElementApi.CustomElementClientMessageType.InitDataRequest, _CustomElementApi.CustomElementHostMessageType.InitDataResponse, data => {
        callback(data.element, data.context);
      });
    }

    onDisabledChanged(callback) {
      if (typeof callback !== 'function') {
        throw Error('Specify a callback function.');
      }

      this.sender.registerListener(_CustomElementApi.CustomElementHostMessageType.OnDisabledChanged, data => callback(data.disabled));
    }

    setHeight(height) {
      if (!Number.isInteger(height) || height < 0) {
        throw Error('The specified height must be a positive integer.');
      }

      this.sender.sendMessage(_CustomElementApi.CustomElementClientMessageType.SetHeightRequest, {
        height
      });
    }

    getElementValue(elementCodename, callback) {
      if (typeof elementCodename !== 'string') {
        throw Error('Specify a valid codename string.');
      }

      if (typeof callback !== 'function') {
        throw Error('Specify a callback function.');
      }

      this.sender.sendMessageWithReply(_CustomElementApi.CustomElementClientMessageType.GetValueRequest, _CustomElementApi.CustomElementHostMessageType.GetValueResponse, data => {
        if (data.error) {
          console.error(data.error);
        } else {
          callback(data.value);
        }
      }, {
        codename: elementCodename
      });
    }

    observeElementChanges(elementCodenames, callback) {
      if (!isStringArray(elementCodenames)) {
        throw Error('Specify a valid list of element codenames as string array.');
      }

      if (typeof callback !== 'function') {
        throw Error('Specify a callback function.');
      }

      this.sender.sendMessageWithListener(_CustomElementApi.CustomElementClientMessageType.ObserveElementChanges, _CustomElementApi.CustomElementHostMessageType.OnElementsChanged, data => callback(data.elements), {
        elements: elementCodenames
      });
    }

  }

  _exports.CustomElement = CustomElement;
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _CustomExtensionMessageSender) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CustomElementMessageSender = void 0;

  class CustomElementMessageSender extends _CustomExtensionMessageSender.CustomExtensionMessageSender {}

  _exports.CustomElementMessageSender = CustomElementMessageSender;
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(5)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _guidGenerator) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CustomExtensionMessageSender = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class CustomExtensionMessageSender {
    constructor(allowedClientMessageTypes) {
      _defineProperty(this, "_callbacks", {});

      _defineProperty(this, "_executeCallbacks", (type, data, requestId) => {
        const callbackKey = this._getCallbackKey(type, requestId);

        const callback = this._callbacks[callbackKey];
        this._callbacks[callbackKey] = undefined;

        if (callback) {
          callback(data);
        }
      });

      _defineProperty(this, "_processMessage", event => {
        if (event.data) {
          const message = event.data; // Check if the event is known message

          if (this._allowedHostMessageTypes.includes(message.type)) {
            this._executeCallbacks(message.type, message.data, message.requestId);
          }
        }
      });

      _defineProperty(this, "_getCallbackKey", (type, requestId) => type + (requestId ? requestId : ''));

      this._allowedHostMessageTypes = allowedClientMessageTypes;
      window.addEventListener('message', this._processMessage, true);
    }

    sendMessage(type, data, requestId) {
      const message = {
        type,
        data,
        requestId
      };

      if (window.self === window.top) {
        throw Error('Custom element is not hosted in an IFrame');
      }

      window.parent.postMessage(message, '*');
    }

    sendMessageWithReply(requestType, responseType, callback, data) {
      // Generate unique request id (to allow parallel messages)
      const requestId = (0, _guidGenerator.createGuid)();
      this.registerCallback(responseType, callback, requestId);
      this.sendMessage(requestType, data, requestId);
    }

    sendMessageWithListener(requestType, responseType, callback, data) {
      // Generate unique request id (to allow parallel messages)
      const requestId = (0, _guidGenerator.createGuid)();
      this.registerListener(responseType, callback, requestId);
      this.sendMessage(requestType, data, requestId);
    }

    registerListener(type, callback, requestId) {
      const repetitiveCallback = data => {
        callback(data);
        this.registerCallback(type, repetitiveCallback, requestId);
      };

      this.registerCallback(type, repetitiveCallback, requestId);
    }

    registerCallback(type, callback, requestId) {
      if (!callback) {
        return;
      }

      const callbackKey = this._getCallbackKey(type, requestId);

      this._callbacks[callbackKey] = callback;
    }

  }

  _exports.CustomExtensionMessageSender = CustomExtensionMessageSender;
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(6)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _v) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.createGuid = void 0;
  _v = _interopRequireDefault(_v);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  const createGuid = _v.default;
  _exports.createGuid = createGuid;
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(7);
var bytesToUuid = __webpack_require__(8);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ })
/******/ ]);
});
