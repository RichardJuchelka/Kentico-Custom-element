(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["custom-element"] = factory();
	else
		root["CustomElement"] = factory();
})(window, function() {
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

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var objectValues_1 = __webpack_require__(1);
var CustomElementApi_1 = __webpack_require__(2);
var CustomElement_1 = __webpack_require__(3);
var CustomElementMessageSender_1 = __webpack_require__(4);
var customElement = new CustomElement_1.CustomElement(new CustomElementMessageSender_1.CustomElementMessageSender(objectValues_1.getObjectValues(CustomElementApi_1.CustomElementHostMessageType)));
/*
  Publish just the plain js object (not the prototype class with readable internals)
  Arrow functions are used to preserve this inside CustomElement class.
 */
var api = {
    init: function (callback) { return customElement.init(callback); },
    setValue: function (value) { return customElement.setValue(value); },
    onDisabledChanged: function (callback) { return customElement.onDisabledChanged(callback); },
    setHeight: function (height) { return customElement.setHeight(height); },
    getElementValue: function (elementCodename, callback) { return customElement.getElementValue(elementCodename, callback); },
    observeElementChanges: function (elementCodenames, callback) { return customElement.observeElementChanges(elementCodenames, callback); },
};
module.exports = api;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getObjectValues(obj) {
    return Object.keys(obj).map(function (key) { return obj[key]; });
}
exports.getObjectValues = getObjectValues;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CustomElementClientMessageType;
(function (CustomElementClientMessageType) {
    CustomElementClientMessageType["InitDataRequest"] = "init-data-request";
    CustomElementClientMessageType["SetValueRequest"] = "set-value-request";
    CustomElementClientMessageType["SetHeightRequest"] = "set-height-request";
    CustomElementClientMessageType["GetValueRequest"] = "get-value-request";
    CustomElementClientMessageType["ObserveElementChanges"] = "observe-element-changes";
})(CustomElementClientMessageType = exports.CustomElementClientMessageType || (exports.CustomElementClientMessageType = {}));
var CustomElementHostMessageType;
(function (CustomElementHostMessageType) {
    CustomElementHostMessageType["InitDataResponse"] = "init-data-response";
    CustomElementHostMessageType["SetValueResponse"] = "set-value-response";
    CustomElementHostMessageType["OnDisabledChanged"] = "on-disabled-changed";
    CustomElementHostMessageType["GetValueResponse"] = "get-value-response";
    CustomElementHostMessageType["OnElementsChanged"] = "on-elements-changed";
})(CustomElementHostMessageType = exports.CustomElementHostMessageType || (exports.CustomElementHostMessageType = {}));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CustomElementApi_1 = __webpack_require__(2);
function isStringArray(value) {
    if (!Array.isArray(value)) {
        return false;
    }
    for (var i = 0; i < value.length; i++) {
        if (typeof value[i] !== 'string') {
            return false;
        }
    }
    return true;
}
var CustomElement = /** @class */ (function () {
    function CustomElement(sender) {
        this.sender = sender;
    }
    CustomElement.prototype.setValue = function (value) {
        if (typeof value !== 'string' && value !== null) {
            throw Error('The provided value must be a string or null.');
        }
        this.sender.sendMessageWithReply(CustomElementApi_1.CustomElementClientMessageType.SetValueRequest, CustomElementApi_1.CustomElementHostMessageType.SetValueResponse, function (data) {
            if (data.error) {
                console.error(data.error);
            }
        }, { value: value });
    };
    CustomElement.prototype.init = function (callback) {
        if (typeof callback !== 'function') {
            throw Error('Specify a callback function.');
        }
        this.sender.sendMessageWithReply(CustomElementApi_1.CustomElementClientMessageType.InitDataRequest, CustomElementApi_1.CustomElementHostMessageType.InitDataResponse, function (data) {
            callback(data.element, data.context);
        });
    };
    CustomElement.prototype.onDisabledChanged = function (callback) {
        if (typeof callback !== 'function') {
            throw Error('Specify a callback function.');
        }
        this.sender.registerListener(CustomElementApi_1.CustomElementHostMessageType.OnDisabledChanged, function (data) { return callback(data.disabled); });
    };
    CustomElement.prototype.setHeight = function (height) {
        if (!Number.isInteger(height) || height < 0) {
            throw Error('The specified height must be a positive integer.');
        }
        this.sender.sendMessage(CustomElementApi_1.CustomElementClientMessageType.SetHeightRequest, { height: height });
    };
    CustomElement.prototype.getElementValue = function (elementCodename, callback) {
        if (typeof elementCodename !== 'string') {
            throw Error('Specify a valid codename string.');
        }
        if (typeof callback !== 'function') {
            throw Error('Specify a callback function.');
        }
        this.sender.sendMessageWithReply(CustomElementApi_1.CustomElementClientMessageType.GetValueRequest, CustomElementApi_1.CustomElementHostMessageType.GetValueResponse, function (data) {
            if (data.error) {
                console.error(data.error);
            }
            else {
                callback(data.value);
            }
        }, { codename: elementCodename });
    };
    CustomElement.prototype.observeElementChanges = function (elementCodenames, callback) {
        if (!isStringArray(elementCodenames)) {
            throw Error('Specify a valid list of element codenames as string array.');
        }
        if (typeof callback !== 'function') {
            throw Error('Specify a callback function.');
        }
        this.sender.sendMessageWithListener(CustomElementApi_1.CustomElementClientMessageType.ObserveElementChanges, CustomElementApi_1.CustomElementHostMessageType.OnElementsChanged, function (data) { return callback(data.elements); }, { elements: elementCodenames });
    };
    return CustomElement;
}());
exports.CustomElement = CustomElement;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CustomExtensionMessageSender_1 = __webpack_require__(5);
var CustomElementMessageSender = /** @class */ (function (_super) {
    __extends(CustomElementMessageSender, _super);
    function CustomElementMessageSender() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CustomElementMessageSender;
}(CustomExtensionMessageSender_1.CustomExtensionMessageSender));
exports.CustomElementMessageSender = CustomElementMessageSender;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guidGenerator_1 = __webpack_require__(6);
var CustomExtensionMessageSender = /** @class */ (function () {
    function CustomExtensionMessageSender(allowedClientMessageTypes) {
        var _this = this;
        this._callbacks = {};
        this._executeCallbacks = function (type, data, requestId) {
            var callbackKey = _this._getCallbackKey(type, requestId);
            var callback = _this._callbacks[callbackKey];
            _this._callbacks[callbackKey] = undefined;
            if (callback) {
                callback(data);
            }
        };
        this._processMessage = function (event) {
            if (event.data) {
                var message = event.data;
                // Check if the event is known message
                if (_this._allowedHostMessageTypes.includes(message.type)) {
                    _this._executeCallbacks(message.type, message.data, message.requestId);
                }
            }
        };
        this._getCallbackKey = function (type, requestId) { return type + (requestId ? requestId : ''); };
        this._allowedHostMessageTypes = allowedClientMessageTypes;
        window.addEventListener('message', this._processMessage, true);
    }
    CustomExtensionMessageSender.prototype.sendMessage = function (type, data, requestId) {
        var message = {
            type: type,
            data: data,
            requestId: requestId,
        };
        if (window.self === window.top) {
            throw Error('Custom element is not hosted in an IFrame');
        }
        window.parent.postMessage(message, '*');
    };
    CustomExtensionMessageSender.prototype.sendMessageWithReply = function (requestType, responseType, callback, data) {
        // Generate unique request id (to allow parallel messages)
        var requestId = guidGenerator_1.createGuid();
        this.registerCallback(responseType, callback, requestId);
        this.sendMessage(requestType, data, requestId);
    };
    CustomExtensionMessageSender.prototype.sendMessageWithListener = function (requestType, responseType, callback, data) {
        // Generate unique request id (to allow parallel messages)
        var requestId = guidGenerator_1.createGuid();
        this.registerListener(responseType, callback, requestId);
        this.sendMessage(requestType, data, requestId);
    };
    CustomExtensionMessageSender.prototype.registerListener = function (type, callback, requestId) {
        var _this = this;
        var repetitiveCallback = function (data) {
            callback(data);
            _this.registerCallback(type, repetitiveCallback, requestId);
        };
        this.registerCallback(type, repetitiveCallback, requestId);
    };
    CustomExtensionMessageSender.prototype.registerCallback = function (type, callback, requestId) {
        if (!callback) {
            return;
        }
        var callbackKey = this._getCallbackKey(type, requestId);
        this._callbacks[callbackKey] = callback;
    };
    return CustomExtensionMessageSender;
}());
exports.CustomExtensionMessageSender = CustomExtensionMessageSender;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var v4_1 = __importDefault(__webpack_require__(7));
exports.createGuid = v4_1.default;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(8);
var bytesToUuid = __webpack_require__(9);

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
/* 8 */
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
/* 9 */
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
