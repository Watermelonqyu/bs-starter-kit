/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app/index.js","styles"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _chalk = __webpack_require__(/*! chalk */ "./node_modules/chalk/index.js");

var _chalk2 = _interopRequireDefault(_chalk);

__webpack_require__(/*! ./index.css */ "./app/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_chalk2.default.green('*************Chalk is here!***************'));

/***/ }),

/***/ "./node_modules/ansi-styles/index.js":
/*!*******************************************!*\
  !*** ./node_modules/ansi-styles/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var colorConvert = __webpack_require__(/*! color-convert */ "./node_modules/color-convert/index.js");

var wrapAnsi16 = function wrapAnsi16(fn, offset) {
	return function () {
		var code = fn.apply(colorConvert, arguments);
		return '\x1B[' + (code + offset) + 'm';
	};
};

var wrapAnsi256 = function wrapAnsi256(fn, offset) {
	return function () {
		var code = fn.apply(colorConvert, arguments);
		return '\x1B[' + (38 + offset) + ';5;' + code + 'm';
	};
};

var wrapAnsi16m = function wrapAnsi16m(fn, offset) {
	return function () {
		var rgb = fn.apply(colorConvert, arguments);
		return '\x1B[' + (38 + offset) + ';2;' + rgb[0] + ';' + rgb[1] + ';' + rgb[2] + 'm';
	};
};

function assembleStyles() {
	var codes = new Map();
	var styles = {
		modifier: {
			reset: [0, 0],
			// 21 isn't widely supported and 22 does the same thing
			bold: [1, 22],
			dim: [2, 22],
			italic: [3, 23],
			underline: [4, 24],
			inverse: [7, 27],
			hidden: [8, 28],
			strikethrough: [9, 29]
		},
		color: {
			black: [30, 39],
			red: [31, 39],
			green: [32, 39],
			yellow: [33, 39],
			blue: [34, 39],
			magenta: [35, 39],
			cyan: [36, 39],
			white: [37, 39],
			gray: [90, 39],

			// Bright color
			redBright: [91, 39],
			greenBright: [92, 39],
			yellowBright: [93, 39],
			blueBright: [94, 39],
			magentaBright: [95, 39],
			cyanBright: [96, 39],
			whiteBright: [97, 39]
		},
		bgColor: {
			bgBlack: [40, 49],
			bgRed: [41, 49],
			bgGreen: [42, 49],
			bgYellow: [43, 49],
			bgBlue: [44, 49],
			bgMagenta: [45, 49],
			bgCyan: [46, 49],
			bgWhite: [47, 49],

			// Bright color
			bgBlackBright: [100, 49],
			bgRedBright: [101, 49],
			bgGreenBright: [102, 49],
			bgYellowBright: [103, 49],
			bgBlueBright: [104, 49],
			bgMagentaBright: [105, 49],
			bgCyanBright: [106, 49],
			bgWhiteBright: [107, 49]
		}
	};

	// Fix humans
	styles.color.grey = styles.color.gray;

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = Object.keys(styles)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var groupName = _step.value;

			var group = styles[groupName];

			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = Object.keys(group)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var styleName = _step3.value;

					var style = group[styleName];

					styles[styleName] = {
						open: '\x1B[' + style[0] + 'm',
						close: '\x1B[' + style[1] + 'm'
					};

					group[styleName] = styles[styleName];

					codes.set(style[0], style[1]);
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

			Object.defineProperty(styles, groupName, {
				value: group,
				enumerable: false
			});

			Object.defineProperty(styles, 'codes', {
				value: codes,
				enumerable: false
			});
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

	var ansi2ansi = function ansi2ansi(n) {
		return n;
	};
	var rgb2rgb = function rgb2rgb(r, g, b) {
		return [r, g, b];
	};

	styles.color.close = '\x1B[39m';
	styles.bgColor.close = '\x1B[49m';

	styles.color.ansi = {
		ansi: wrapAnsi16(ansi2ansi, 0)
	};
	styles.color.ansi256 = {
		ansi256: wrapAnsi256(ansi2ansi, 0)
	};
	styles.color.ansi16m = {
		rgb: wrapAnsi16m(rgb2rgb, 0)
	};

	styles.bgColor.ansi = {
		ansi: wrapAnsi16(ansi2ansi, 10)
	};
	styles.bgColor.ansi256 = {
		ansi256: wrapAnsi256(ansi2ansi, 10)
	};
	styles.bgColor.ansi16m = {
		rgb: wrapAnsi16m(rgb2rgb, 10)
	};

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = Object.keys(colorConvert)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var key = _step2.value;

			if (_typeof(colorConvert[key]) !== 'object') {
				continue;
			}

			var suite = colorConvert[key];

			if (key === 'ansi16') {
				key = 'ansi';
			}

			if ('ansi16' in suite) {
				styles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);
				styles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);
			}

			if ('ansi256' in suite) {
				styles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);
				styles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);
			}

			if ('rgb' in suite) {
				styles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);
				styles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);
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

	return styles;
}

// Make the export immutable
Object.defineProperty(module, 'exports', {
	enumerable: true,
	get: assembleStyles
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/chalk/index.js":
/*!*************************************!*\
  !*** ./node_modules/chalk/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var escapeStringRegexp = __webpack_require__(/*! escape-string-regexp */ "./node_modules/escape-string-regexp/index.js");
var ansiStyles = __webpack_require__(/*! ansi-styles */ "./node_modules/ansi-styles/index.js");
var stdoutColor = __webpack_require__(/*! supports-color */ "./node_modules/supports-color/browser.js").stdout;

var template = __webpack_require__(/*! ./templates.js */ "./node_modules/chalk/templates.js");

var isSimpleWindowsTerm = process.platform === 'win32' && !(process.env.TERM || '').toLowerCase().startsWith('xterm');

// `supportsColor.level` → `ansiStyles.color[name]` mapping
var levelMapping = ['ansi', 'ansi', 'ansi256', 'ansi16m'];

// `color-convert` models to exclude from the Chalk API due to conflicts and such
var skipModels = new Set(['gray']);

var styles = Object.create(null);

function applyOptions(obj, options) {
	options = options || {};

	// Detect level if not set manually
	var scLevel = stdoutColor ? stdoutColor.level : 0;
	obj.level = options.level === undefined ? scLevel : options.level;
	obj.enabled = 'enabled' in options ? options.enabled : obj.level > 0;
}

function Chalk(options) {
	// We check for this.template here since calling `chalk.constructor()`
	// by itself will have a `this` of a previously constructed chalk object
	if (!this || !(this instanceof Chalk) || this.template) {
		var chalk = {};
		applyOptions(chalk, options);

		chalk.template = function () {
			var args = [].slice.call(arguments);
			return chalkTag.apply(null, [chalk.template].concat(args));
		};

		Object.setPrototypeOf(chalk, Chalk.prototype);
		Object.setPrototypeOf(chalk.template, chalk);

		chalk.template.constructor = Chalk;

		return chalk.template;
	}

	applyOptions(this, options);
}

// Use bright blue on Windows as the normal blue color is illegible
if (isSimpleWindowsTerm) {
	ansiStyles.blue.open = '\x1B[94m';
}

var _loop = function _loop(key) {
	ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');

	styles[key] = {
		get: function get() {
			var codes = ansiStyles[key];
			return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, key);
		}
	};
};

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = Object.keys(ansiStyles)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var key = _step.value;

		_loop(key);
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

styles.visible = {
	get: function get() {
		return build.call(this, this._styles || [], true, 'visible');
	}
};

ansiStyles.color.closeRe = new RegExp(escapeStringRegexp(ansiStyles.color.close), 'g');

var _loop2 = function _loop2(model) {
	if (skipModels.has(model)) {
		return 'continue';
	}

	styles[model] = {
		get: function get() {
			var level = this.level;
			return function () {
				var open = ansiStyles.color[levelMapping[level]][model].apply(null, arguments);
				var codes = {
					open: open,
					close: ansiStyles.color.close,
					closeRe: ansiStyles.color.closeRe
				};
				return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
			};
		}
	};
};

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
	for (var _iterator2 = Object.keys(ansiStyles.color.ansi)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		var model = _step2.value;

		var _ret2 = _loop2(model);

		if (_ret2 === 'continue') continue;
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

ansiStyles.bgColor.closeRe = new RegExp(escapeStringRegexp(ansiStyles.bgColor.close), 'g');

var _loop3 = function _loop3(model) {
	if (skipModels.has(model)) {
		return 'continue';
	}

	var bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
	styles[bgModel] = {
		get: function get() {
			var level = this.level;
			return function () {
				var open = ansiStyles.bgColor[levelMapping[level]][model].apply(null, arguments);
				var codes = {
					open: open,
					close: ansiStyles.bgColor.close,
					closeRe: ansiStyles.bgColor.closeRe
				};
				return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
			};
		}
	};
};

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
	for (var _iterator3 = Object.keys(ansiStyles.bgColor.ansi)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
		var model = _step3.value;

		var _ret3 = _loop3(model);

		if (_ret3 === 'continue') continue;
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

var proto = Object.defineProperties(function () {}, styles);

function build(_styles, _empty, key) {
	var builder = function builder() {
		return applyStyle.apply(builder, arguments);
	};

	builder._styles = _styles;
	builder._empty = _empty;

	var self = this;

	Object.defineProperty(builder, 'level', {
		enumerable: true,
		get: function get() {
			return self.level;
		},
		set: function set(level) {
			self.level = level;
		}
	});

	Object.defineProperty(builder, 'enabled', {
		enumerable: true,
		get: function get() {
			return self.enabled;
		},
		set: function set(enabled) {
			self.enabled = enabled;
		}
	});

	// See below for fix regarding invisible grey/dim combination on Windows
	builder.hasGrey = this.hasGrey || key === 'gray' || key === 'grey';

	// `__proto__` is used because we must return a function, but there is
	// no way to create a function with a different prototype
	builder.__proto__ = proto; // eslint-disable-line no-proto

	return builder;
}

function applyStyle() {
	// Support varags, but simply cast to string in case there's only one arg
	var args = arguments;
	var argsLen = args.length;
	var str = String(arguments[0]);

	if (argsLen === 0) {
		return '';
	}

	if (argsLen > 1) {
		// Don't slice `arguments`, it prevents V8 optimizations
		for (var a = 1; a < argsLen; a++) {
			str += ' ' + args[a];
		}
	}

	if (!this.enabled || this.level <= 0 || !str) {
		return this._empty ? '' : str;
	}

	// Turns out that on Windows dimmed gray text becomes invisible in cmd.exe,
	// see https://github.com/chalk/chalk/issues/58
	// If we're on Windows and we're dealing with a gray color, temporarily make 'dim' a noop.
	var originalDim = ansiStyles.dim.open;
	if (isSimpleWindowsTerm && this.hasGrey) {
		ansiStyles.dim.open = '';
	}

	var _iteratorNormalCompletion4 = true;
	var _didIteratorError4 = false;
	var _iteratorError4 = undefined;

	try {
		for (var _iterator4 = this._styles.slice().reverse()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
			var code = _step4.value;

			// Replace any instances already present with a re-opening code
			// otherwise only the part of the string until said closing code
			// will be colored, and the rest will simply be 'plain'.
			str = code.open + str.replace(code.closeRe, code.open) + code.close;

			// Close the styling before a linebreak and reopen
			// after next line to fix a bleed issue on macOS
			// https://github.com/chalk/chalk/pull/92
			str = str.replace(/\r?\n/g, code.close + '$&' + code.open);
		}

		// Reset the original `dim` if we changed it to work around the Windows dimmed gray issue
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

	ansiStyles.dim.open = originalDim;

	return str;
}

function chalkTag(chalk, strings) {
	if (!Array.isArray(strings)) {
		// If chalk() was called by itself or with a string,
		// return the string itself as a string.
		return [].slice.call(arguments, 1).join(' ');
	}

	var args = [].slice.call(arguments, 2);
	var parts = [strings.raw[0]];

	for (var i = 1; i < strings.length; i++) {
		parts.push(String(args[i - 1]).replace(/[{}\\]/g, '\\$&'));
		parts.push(String(strings.raw[i]));
	}

	return template(chalk, parts.join(''));
}

Object.defineProperties(Chalk.prototype, styles);

module.exports = Chalk(); // eslint-disable-line new-cap
module.exports.supportsColor = stdoutColor;
module.exports.default = module.exports; // For TypeScript
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/chalk/templates.js":
/*!*****************************************!*\
  !*** ./node_modules/chalk/templates.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var TEMPLATE_REGEX = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
var ESCAPE_REGEX = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi;

var ESCAPES = new Map([['n', '\n'], ['r', '\r'], ['t', '\t'], ['b', '\b'], ['f', '\f'], ['v', '\v'], ['0', '\0'], ['\\', '\\'], ['e', '\x1B'], ['a', '\x07']]);

function unescape(c) {
	if (c[0] === 'u' && c.length === 5 || c[0] === 'x' && c.length === 3) {
		return String.fromCharCode(parseInt(c.slice(1), 16));
	}

	return ESCAPES.get(c) || c;
}

function parseArguments(name, args) {
	var results = [];
	var chunks = args.trim().split(/\s*,\s*/g);
	var matches = void 0;

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = chunks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var chunk = _step.value;

			if (!isNaN(chunk)) {
				results.push(Number(chunk));
			} else if (matches = chunk.match(STRING_REGEX)) {
				results.push(matches[2].replace(ESCAPE_REGEX, function (m, escape, chr) {
					return escape ? unescape(escape) : chr;
				}));
			} else {
				throw new Error('Invalid Chalk template style argument: ' + chunk + ' (in style \'' + name + '\')');
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

	return results;
}

function parseStyle(style) {
	STYLE_REGEX.lastIndex = 0;

	var results = [];
	var matches = void 0;

	while ((matches = STYLE_REGEX.exec(style)) !== null) {
		var name = matches[1];

		if (matches[2]) {
			var args = parseArguments(name, matches[2]);
			results.push([name].concat(args));
		} else {
			results.push([name]);
		}
	}

	return results;
}

function buildStyle(chalk, styles) {
	var enabled = {};

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = styles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var layer = _step2.value;
			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = layer.styles[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var style = _step4.value;

					enabled[style[0]] = layer.inverse ? null : style.slice(1);
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

	var current = chalk;
	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		for (var _iterator3 = Object.keys(enabled)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			var styleName = _step3.value;

			if (Array.isArray(enabled[styleName])) {
				if (!(styleName in current)) {
					throw new Error('Unknown Chalk style: ' + styleName);
				}

				if (enabled[styleName].length > 0) {
					current = current[styleName].apply(current, enabled[styleName]);
				} else {
					current = current[styleName];
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

	return current;
}

module.exports = function (chalk, tmp) {
	var styles = [];
	var chunks = [];
	var chunk = [];

	// eslint-disable-next-line max-params
	tmp.replace(TEMPLATE_REGEX, function (m, escapeChar, inverse, style, close, chr) {
		if (escapeChar) {
			chunk.push(unescape(escapeChar));
		} else if (style) {
			var str = chunk.join('');
			chunk = [];
			chunks.push(styles.length === 0 ? str : buildStyle(chalk, styles)(str));
			styles.push({ inverse: inverse, styles: parseStyle(style) });
		} else if (close) {
			if (styles.length === 0) {
				throw new Error('Found extraneous } in Chalk template literal');
			}

			chunks.push(buildStyle(chalk, styles)(chunk.join('')));
			chunk = [];
			styles.pop();
		} else {
			chunk.push(chr);
		}
	});

	chunks.push(chunk.join(''));

	if (styles.length > 0) {
		var errMsg = 'Chalk template literal is missing ' + styles.length + ' closing bracket' + (styles.length === 1 ? '' : 's') + ' (`}`)';
		throw new Error(errMsg);
	}

	return chunks.join('');
};

/***/ }),

/***/ "./node_modules/color-convert/conversions.js":
/*!***************************************************!*\
  !*** ./node_modules/color-convert/conversions.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* MIT license */
var cssKeywords = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in cssKeywords) {
	if (cssKeywords.hasOwnProperty(key)) {
		reverseKeywords[cssKeywords[key]] = key;
	}
}

var convert = module.exports = {
	rgb: { channels: 3, labels: 'rgb' },
	hsl: { channels: 3, labels: 'hsl' },
	hsv: { channels: 3, labels: 'hsv' },
	hwb: { channels: 3, labels: 'hwb' },
	cmyk: { channels: 4, labels: 'cmyk' },
	xyz: { channels: 3, labels: 'xyz' },
	lab: { channels: 3, labels: 'lab' },
	lch: { channels: 3, labels: 'lch' },
	hex: { channels: 1, labels: ['hex'] },
	keyword: { channels: 1, labels: ['keyword'] },
	ansi16: { channels: 1, labels: ['ansi16'] },
	ansi256: { channels: 1, labels: ['ansi256'] },
	hcg: { channels: 3, labels: ['h', 'c', 'g'] },
	apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
	gray: { channels: 1, labels: ['gray'] }
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', { value: channels });
		Object.defineProperty(convert[model], 'labels', { value: labels });
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var rdif;
	var gdif;
	var bdif;
	var h;
	var s;

	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var v = Math.max(r, g, b);
	var diff = v - Math.min(r, g, b);
	var diffc = function diffc(c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = 1 / 3 + rdif - bdif;
		} else if (b === v) {
			h = 2 / 3 + gdif - rdif;
		}
		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [h * 360, s * 100, v * 100];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in cssKeywords) {
		if (cssKeywords.hasOwnProperty(keyword)) {
			var value = cssKeywords[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
	g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
	b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

	var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
	var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
	var z = r * 0.0193 + g * 0.1192 + b * 0.9505;

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

	l = 116 * y - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= l <= 1 ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - s * f);
	var t = 255 * v * (1 - s * (1 - f));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= lmin <= 1 ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0:
			r = v;g = n;b = wh;break;
		case 1:
			r = n;g = v;b = wh;break;
		case 2:
			r = wh;g = v;b = n;break;
		case 3:
			r = wh;g = n;b = v;break;
		case 4:
			r = n;g = wh;b = v;break;
		case 5:
			r = v;g = wh;b = n;break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = x * 3.2406 + y * -1.5372 + z * -0.4986;
	g = x * -0.9689 + y * 1.8758 + z * 0.0415;
	b = x * 0.0557 + y * -0.2040 + z * 1.0570;

	// assume sRGB
	r = r > 0.0031308 ? 1.055 * Math.pow(r, 1.0 / 2.4) - 0.055 : r * 12.92;

	g = g > 0.0031308 ? 1.055 * Math.pow(g, 1.0 / 2.4) - 0.055 : g * 12.92;

	b = b > 0.0031308 ? 1.055 * Math.pow(b, 1.0 / 2.4) - 0.055 : b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

	l = 116 * y - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round((r - 8) / 247 * 24) + 232;
	}

	var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = (color & 1) * mult * 255;
	var g = (color >> 1 & 1) * mult * 255;
	var b = (color >> 2 & 1) * mult * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = rem % 6 / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = integer >> 16 & 0xFF;
	var g = integer >> 8 & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = max - min;
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else if (max === r) {
		hue = (g - b) / chroma % 6;
	} else if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = h % 1 * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1;pure[1] = v;pure[2] = 0;break;
		case 1:
			pure[0] = w;pure[1] = 1;pure[2] = 0;break;
		case 2:
			pure[0] = 0;pure[1] = 1;pure[2] = v;break;
		case 3:
			pure[0] = 0;pure[1] = w;pure[2] = 1;break;
		case 4:
			pure[0] = v;pure[1] = 0;pure[2] = 1;break;
		default:
			pure[0] = 1;pure[1] = 0;pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [(c * pure[0] + mg) * 255, (c * pure[1] + mg) * 255, (c * pure[2] + mg) * 255];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
};

convert.rgb.apple = function (rgb) {
	return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};

/***/ }),

/***/ "./node_modules/color-convert/index.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");
var route = __webpack_require__(/*! ./route */ "./node_modules/color-convert/route.js");

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function wrappedFn(args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function wrappedFn(args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', { value: conversions[fromModel].channels });
	Object.defineProperty(convert[fromModel], 'labels', { value: conversions[fromModel].labels });

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;

/***/ }),

/***/ "./node_modules/color-convert/route.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/route.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};

/***/ }),

/***/ "./node_modules/color-name/index.js":
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

/***/ }),

/***/ "./node_modules/escape-string-regexp/index.js":
/*!****************************************************!*\
  !*** ./node_modules/escape-string-regexp/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return str.replace(matchOperatorsRe, '\\$&');
};

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
function defaultClearTimeout() {
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
})();
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
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
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
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
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
    while (len) {
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

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),

/***/ "./node_modules/supports-color/browser.js":
/*!************************************************!*\
  !*** ./node_modules/supports-color/browser.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	stdout: false,
	stderr: false
};

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnNpLXN0eWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2hhbGsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NoYWxrL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXNjYXBlLXN0cmluZy1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3VwcG9ydHMtY29sb3IvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJjaGFsayIsImdyZWVuIiwiY29sb3JDb252ZXJ0IiwicmVxdWlyZSIsIndyYXBBbnNpMTYiLCJmbiIsIm9mZnNldCIsImNvZGUiLCJhcHBseSIsImFyZ3VtZW50cyIsIndyYXBBbnNpMjU2Iiwid3JhcEFuc2kxNm0iLCJyZ2IiLCJhc3NlbWJsZVN0eWxlcyIsImNvZGVzIiwiTWFwIiwic3R5bGVzIiwibW9kaWZpZXIiLCJyZXNldCIsImJvbGQiLCJkaW0iLCJpdGFsaWMiLCJ1bmRlcmxpbmUiLCJpbnZlcnNlIiwiaGlkZGVuIiwic3RyaWtldGhyb3VnaCIsImNvbG9yIiwiYmxhY2siLCJyZWQiLCJ5ZWxsb3ciLCJibHVlIiwibWFnZW50YSIsImN5YW4iLCJ3aGl0ZSIsImdyYXkiLCJyZWRCcmlnaHQiLCJncmVlbkJyaWdodCIsInllbGxvd0JyaWdodCIsImJsdWVCcmlnaHQiLCJtYWdlbnRhQnJpZ2h0IiwiY3lhbkJyaWdodCIsIndoaXRlQnJpZ2h0IiwiYmdDb2xvciIsImJnQmxhY2siLCJiZ1JlZCIsImJnR3JlZW4iLCJiZ1llbGxvdyIsImJnQmx1ZSIsImJnTWFnZW50YSIsImJnQ3lhbiIsImJnV2hpdGUiLCJiZ0JsYWNrQnJpZ2h0IiwiYmdSZWRCcmlnaHQiLCJiZ0dyZWVuQnJpZ2h0IiwiYmdZZWxsb3dCcmlnaHQiLCJiZ0JsdWVCcmlnaHQiLCJiZ01hZ2VudGFCcmlnaHQiLCJiZ0N5YW5CcmlnaHQiLCJiZ1doaXRlQnJpZ2h0IiwiZ3JleSIsIk9iamVjdCIsImtleXMiLCJncm91cE5hbWUiLCJncm91cCIsInN0eWxlTmFtZSIsInN0eWxlIiwib3BlbiIsImNsb3NlIiwic2V0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJhbnNpMmFuc2kiLCJuIiwicmdiMnJnYiIsInIiLCJnIiwiYiIsImFuc2kiLCJhbnNpMjU2IiwiYW5zaTE2bSIsImtleSIsInN1aXRlIiwiYW5zaTE2IiwibW9kdWxlIiwiZ2V0IiwiZXNjYXBlU3RyaW5nUmVnZXhwIiwiYW5zaVN0eWxlcyIsInN0ZG91dENvbG9yIiwic3Rkb3V0IiwidGVtcGxhdGUiLCJpc1NpbXBsZVdpbmRvd3NUZXJtIiwicHJvY2VzcyIsInBsYXRmb3JtIiwiZW52IiwiVEVSTSIsInRvTG93ZXJDYXNlIiwic3RhcnRzV2l0aCIsImxldmVsTWFwcGluZyIsInNraXBNb2RlbHMiLCJTZXQiLCJjcmVhdGUiLCJhcHBseU9wdGlvbnMiLCJvYmoiLCJvcHRpb25zIiwic2NMZXZlbCIsImxldmVsIiwidW5kZWZpbmVkIiwiZW5hYmxlZCIsIkNoYWxrIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImNoYWxrVGFnIiwiY29uY2F0Iiwic2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJjb25zdHJ1Y3RvciIsImNsb3NlUmUiLCJSZWdFeHAiLCJidWlsZCIsIl9zdHlsZXMiLCJfZW1wdHkiLCJ2aXNpYmxlIiwibW9kZWwiLCJoYXMiLCJiZ01vZGVsIiwidG9VcHBlckNhc2UiLCJwcm90byIsImRlZmluZVByb3BlcnRpZXMiLCJidWlsZGVyIiwiYXBwbHlTdHlsZSIsInNlbGYiLCJoYXNHcmV5IiwiX19wcm90b19fIiwiYXJnc0xlbiIsImxlbmd0aCIsInN0ciIsIlN0cmluZyIsImEiLCJvcmlnaW5hbERpbSIsInJldmVyc2UiLCJyZXBsYWNlIiwic3RyaW5ncyIsIkFycmF5IiwiaXNBcnJheSIsImpvaW4iLCJwYXJ0cyIsInJhdyIsImkiLCJwdXNoIiwiZXhwb3J0cyIsInN1cHBvcnRzQ29sb3IiLCJkZWZhdWx0IiwiVEVNUExBVEVfUkVHRVgiLCJTVFlMRV9SRUdFWCIsIlNUUklOR19SRUdFWCIsIkVTQ0FQRV9SRUdFWCIsIkVTQ0FQRVMiLCJ1bmVzY2FwZSIsImMiLCJmcm9tQ2hhckNvZGUiLCJwYXJzZUludCIsInBhcnNlQXJndW1lbnRzIiwibmFtZSIsInJlc3VsdHMiLCJjaHVua3MiLCJ0cmltIiwic3BsaXQiLCJtYXRjaGVzIiwiY2h1bmsiLCJpc05hTiIsIk51bWJlciIsIm1hdGNoIiwibSIsImVzY2FwZSIsImNociIsIkVycm9yIiwicGFyc2VTdHlsZSIsImxhc3RJbmRleCIsImV4ZWMiLCJidWlsZFN0eWxlIiwibGF5ZXIiLCJjdXJyZW50IiwidG1wIiwiZXNjYXBlQ2hhciIsInBvcCIsImVyck1zZyIsImNzc0tleXdvcmRzIiwicmV2ZXJzZUtleXdvcmRzIiwiaGFzT3duUHJvcGVydHkiLCJjb252ZXJ0IiwiY2hhbm5lbHMiLCJsYWJlbHMiLCJoc2wiLCJoc3YiLCJod2IiLCJjbXlrIiwieHl6IiwibGFiIiwibGNoIiwiaGV4Iiwia2V5d29yZCIsImhjZyIsImFwcGxlIiwibWluIiwiTWF0aCIsIm1heCIsImRlbHRhIiwiaCIsInMiLCJsIiwicmRpZiIsImdkaWYiLCJiZGlmIiwidiIsImRpZmYiLCJkaWZmYyIsInciLCJ5IiwiayIsImNvbXBhcmF0aXZlRGlzdGFuY2UiLCJ4IiwicG93IiwicmV2ZXJzZWQiLCJjdXJyZW50Q2xvc2VzdERpc3RhbmNlIiwiSW5maW5pdHkiLCJjdXJyZW50Q2xvc2VzdEtleXdvcmQiLCJkaXN0YW5jZSIsInoiLCJ0MSIsInQyIiwidDMiLCJ2YWwiLCJzbWluIiwibG1pbiIsInN2IiwiaGkiLCJmbG9vciIsImYiLCJwIiwicSIsInQiLCJ2bWluIiwic2wiLCJ3aCIsImJsIiwicmF0aW8iLCJ5MiIsIngyIiwiejIiLCJociIsImF0YW4yIiwiUEkiLCJzcXJ0IiwiY29zIiwic2luIiwicm91bmQiLCJtdWx0IiwicmVtIiwiaW50ZWdlciIsInN0cmluZyIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwiY29sb3JTdHJpbmciLCJtYXAiLCJjaGFyIiwiY2hyb21hIiwiZ3JheXNjYWxlIiwiaHVlIiwicHVyZSIsIm1nIiwiY29udmVyc2lvbnMiLCJyb3V0ZSIsIm1vZGVscyIsIndyYXBSYXciLCJ3cmFwcGVkRm4iLCJjb252ZXJzaW9uIiwid3JhcFJvdW5kZWQiLCJyZXN1bHQiLCJsZW4iLCJmb3JFYWNoIiwiZnJvbU1vZGVsIiwicm91dGVzIiwicm91dGVNb2RlbHMiLCJ0b01vZGVsIiwiYnVpbGRHcmFwaCIsImdyYXBoIiwicGFyZW50IiwiZGVyaXZlQkZTIiwicXVldWUiLCJhZGphY2VudHMiLCJhZGphY2VudCIsIm5vZGUiLCJ1bnNoaWZ0IiwibGluayIsImZyb20iLCJ0byIsIndyYXBDb252ZXJzaW9uIiwicGF0aCIsImN1ciIsIm1hdGNoT3BlcmF0b3JzUmUiLCJUeXBlRXJyb3IiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZSIsImNsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJkcmFpbmluZyIsImN1cnJlbnRRdWV1ZSIsInF1ZXVlSW5kZXgiLCJjbGVhblVwTmV4dFRpY2siLCJkcmFpblF1ZXVlIiwidGltZW91dCIsInJ1biIsIm5leHRUaWNrIiwiSXRlbSIsImFycmF5IiwidGl0bGUiLCJicm93c2VyIiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsInN0ZGVyciIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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ZDtBQUNBO0FBSmtDLEdBQXBDO0FBTUFqRSxTQUFPc1EsZUFBUCxHQUF5QixDQUF6QjtBQUNBO0FBQ0QsUUFBT3RRLE1BQVA7QUFDQSxDQXJCRCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9hcHAvaW5kZXguanNcIixcInN0eWxlc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XHJcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5cclxuY29uc29sZS5sb2coY2hhbGsuZ3JlZW4oJyoqKioqKioqKioqKipDaGFsayBpcyBoZXJlISoqKioqKioqKioqKioqKicpKTsiLCIndXNlIHN0cmljdCc7XG5jb25zdCBjb2xvckNvbnZlcnQgPSByZXF1aXJlKCdjb2xvci1jb252ZXJ0Jyk7XG5cbmNvbnN0IHdyYXBBbnNpMTYgPSAoZm4sIG9mZnNldCkgPT4gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBjb2RlID0gZm4uYXBwbHkoY29sb3JDb252ZXJ0LCBhcmd1bWVudHMpO1xuXHRyZXR1cm4gYFxcdTAwMUJbJHtjb2RlICsgb2Zmc2V0fW1gO1xufTtcblxuY29uc3Qgd3JhcEFuc2kyNTYgPSAoZm4sIG9mZnNldCkgPT4gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBjb2RlID0gZm4uYXBwbHkoY29sb3JDb252ZXJ0LCBhcmd1bWVudHMpO1xuXHRyZXR1cm4gYFxcdTAwMUJbJHszOCArIG9mZnNldH07NTske2NvZGV9bWA7XG59O1xuXG5jb25zdCB3cmFwQW5zaTE2bSA9IChmbiwgb2Zmc2V0KSA9PiBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHJnYiA9IGZuLmFwcGx5KGNvbG9yQ29udmVydCwgYXJndW1lbnRzKTtcblx0cmV0dXJuIGBcXHUwMDFCWyR7MzggKyBvZmZzZXR9OzI7JHtyZ2JbMF19OyR7cmdiWzFdfTske3JnYlsyXX1tYDtcbn07XG5cbmZ1bmN0aW9uIGFzc2VtYmxlU3R5bGVzKCkge1xuXHRjb25zdCBjb2RlcyA9IG5ldyBNYXAoKTtcblx0Y29uc3Qgc3R5bGVzID0ge1xuXHRcdG1vZGlmaWVyOiB7XG5cdFx0XHRyZXNldDogWzAsIDBdLFxuXHRcdFx0Ly8gMjEgaXNuJ3Qgd2lkZWx5IHN1cHBvcnRlZCBhbmQgMjIgZG9lcyB0aGUgc2FtZSB0aGluZ1xuXHRcdFx0Ym9sZDogWzEsIDIyXSxcblx0XHRcdGRpbTogWzIsIDIyXSxcblx0XHRcdGl0YWxpYzogWzMsIDIzXSxcblx0XHRcdHVuZGVybGluZTogWzQsIDI0XSxcblx0XHRcdGludmVyc2U6IFs3LCAyN10sXG5cdFx0XHRoaWRkZW46IFs4LCAyOF0sXG5cdFx0XHRzdHJpa2V0aHJvdWdoOiBbOSwgMjldXG5cdFx0fSxcblx0XHRjb2xvcjoge1xuXHRcdFx0YmxhY2s6IFszMCwgMzldLFxuXHRcdFx0cmVkOiBbMzEsIDM5XSxcblx0XHRcdGdyZWVuOiBbMzIsIDM5XSxcblx0XHRcdHllbGxvdzogWzMzLCAzOV0sXG5cdFx0XHRibHVlOiBbMzQsIDM5XSxcblx0XHRcdG1hZ2VudGE6IFszNSwgMzldLFxuXHRcdFx0Y3lhbjogWzM2LCAzOV0sXG5cdFx0XHR3aGl0ZTogWzM3LCAzOV0sXG5cdFx0XHRncmF5OiBbOTAsIDM5XSxcblxuXHRcdFx0Ly8gQnJpZ2h0IGNvbG9yXG5cdFx0XHRyZWRCcmlnaHQ6IFs5MSwgMzldLFxuXHRcdFx0Z3JlZW5CcmlnaHQ6IFs5MiwgMzldLFxuXHRcdFx0eWVsbG93QnJpZ2h0OiBbOTMsIDM5XSxcblx0XHRcdGJsdWVCcmlnaHQ6IFs5NCwgMzldLFxuXHRcdFx0bWFnZW50YUJyaWdodDogWzk1LCAzOV0sXG5cdFx0XHRjeWFuQnJpZ2h0OiBbOTYsIDM5XSxcblx0XHRcdHdoaXRlQnJpZ2h0OiBbOTcsIDM5XVxuXHRcdH0sXG5cdFx0YmdDb2xvcjoge1xuXHRcdFx0YmdCbGFjazogWzQwLCA0OV0sXG5cdFx0XHRiZ1JlZDogWzQxLCA0OV0sXG5cdFx0XHRiZ0dyZWVuOiBbNDIsIDQ5XSxcblx0XHRcdGJnWWVsbG93OiBbNDMsIDQ5XSxcblx0XHRcdGJnQmx1ZTogWzQ0LCA0OV0sXG5cdFx0XHRiZ01hZ2VudGE6IFs0NSwgNDldLFxuXHRcdFx0YmdDeWFuOiBbNDYsIDQ5XSxcblx0XHRcdGJnV2hpdGU6IFs0NywgNDldLFxuXG5cdFx0XHQvLyBCcmlnaHQgY29sb3Jcblx0XHRcdGJnQmxhY2tCcmlnaHQ6IFsxMDAsIDQ5XSxcblx0XHRcdGJnUmVkQnJpZ2h0OiBbMTAxLCA0OV0sXG5cdFx0XHRiZ0dyZWVuQnJpZ2h0OiBbMTAyLCA0OV0sXG5cdFx0XHRiZ1llbGxvd0JyaWdodDogWzEwMywgNDldLFxuXHRcdFx0YmdCbHVlQnJpZ2h0OiBbMTA0LCA0OV0sXG5cdFx0XHRiZ01hZ2VudGFCcmlnaHQ6IFsxMDUsIDQ5XSxcblx0XHRcdGJnQ3lhbkJyaWdodDogWzEwNiwgNDldLFxuXHRcdFx0YmdXaGl0ZUJyaWdodDogWzEwNywgNDldXG5cdFx0fVxuXHR9O1xuXG5cdC8vIEZpeCBodW1hbnNcblx0c3R5bGVzLmNvbG9yLmdyZXkgPSBzdHlsZXMuY29sb3IuZ3JheTtcblxuXHRmb3IgKGNvbnN0IGdyb3VwTmFtZSBvZiBPYmplY3Qua2V5cyhzdHlsZXMpKSB7XG5cdFx0Y29uc3QgZ3JvdXAgPSBzdHlsZXNbZ3JvdXBOYW1lXTtcblxuXHRcdGZvciAoY29uc3Qgc3R5bGVOYW1lIG9mIE9iamVjdC5rZXlzKGdyb3VwKSkge1xuXHRcdFx0Y29uc3Qgc3R5bGUgPSBncm91cFtzdHlsZU5hbWVdO1xuXG5cdFx0XHRzdHlsZXNbc3R5bGVOYW1lXSA9IHtcblx0XHRcdFx0b3BlbjogYFxcdTAwMUJbJHtzdHlsZVswXX1tYCxcblx0XHRcdFx0Y2xvc2U6IGBcXHUwMDFCWyR7c3R5bGVbMV19bWBcblx0XHRcdH07XG5cblx0XHRcdGdyb3VwW3N0eWxlTmFtZV0gPSBzdHlsZXNbc3R5bGVOYW1lXTtcblxuXHRcdFx0Y29kZXMuc2V0KHN0eWxlWzBdLCBzdHlsZVsxXSk7XG5cdFx0fVxuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHN0eWxlcywgZ3JvdXBOYW1lLCB7XG5cdFx0XHR2YWx1ZTogZ3JvdXAsXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZVxuXHRcdH0pO1xuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHN0eWxlcywgJ2NvZGVzJywge1xuXHRcdFx0dmFsdWU6IGNvZGVzLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2Vcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGFuc2kyYW5zaSA9IG4gPT4gbjtcblx0Y29uc3QgcmdiMnJnYiA9IChyLCBnLCBiKSA9PiBbciwgZywgYl07XG5cblx0c3R5bGVzLmNvbG9yLmNsb3NlID0gJ1xcdTAwMUJbMzltJztcblx0c3R5bGVzLmJnQ29sb3IuY2xvc2UgPSAnXFx1MDAxQls0OW0nO1xuXG5cdHN0eWxlcy5jb2xvci5hbnNpID0ge1xuXHRcdGFuc2k6IHdyYXBBbnNpMTYoYW5zaTJhbnNpLCAwKVxuXHR9O1xuXHRzdHlsZXMuY29sb3IuYW5zaTI1NiA9IHtcblx0XHRhbnNpMjU2OiB3cmFwQW5zaTI1NihhbnNpMmFuc2ksIDApXG5cdH07XG5cdHN0eWxlcy5jb2xvci5hbnNpMTZtID0ge1xuXHRcdHJnYjogd3JhcEFuc2kxNm0ocmdiMnJnYiwgMClcblx0fTtcblxuXHRzdHlsZXMuYmdDb2xvci5hbnNpID0ge1xuXHRcdGFuc2k6IHdyYXBBbnNpMTYoYW5zaTJhbnNpLCAxMClcblx0fTtcblx0c3R5bGVzLmJnQ29sb3IuYW5zaTI1NiA9IHtcblx0XHRhbnNpMjU2OiB3cmFwQW5zaTI1NihhbnNpMmFuc2ksIDEwKVxuXHR9O1xuXHRzdHlsZXMuYmdDb2xvci5hbnNpMTZtID0ge1xuXHRcdHJnYjogd3JhcEFuc2kxNm0ocmdiMnJnYiwgMTApXG5cdH07XG5cblx0Zm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGNvbG9yQ29udmVydCkpIHtcblx0XHRpZiAodHlwZW9mIGNvbG9yQ29udmVydFtrZXldICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3VpdGUgPSBjb2xvckNvbnZlcnRba2V5XTtcblxuXHRcdGlmIChrZXkgPT09ICdhbnNpMTYnKSB7XG5cdFx0XHRrZXkgPSAnYW5zaSc7XG5cdFx0fVxuXG5cdFx0aWYgKCdhbnNpMTYnIGluIHN1aXRlKSB7XG5cdFx0XHRzdHlsZXMuY29sb3IuYW5zaVtrZXldID0gd3JhcEFuc2kxNihzdWl0ZS5hbnNpMTYsIDApO1xuXHRcdFx0c3R5bGVzLmJnQ29sb3IuYW5zaVtrZXldID0gd3JhcEFuc2kxNihzdWl0ZS5hbnNpMTYsIDEwKTtcblx0XHR9XG5cblx0XHRpZiAoJ2Fuc2kyNTYnIGluIHN1aXRlKSB7XG5cdFx0XHRzdHlsZXMuY29sb3IuYW5zaTI1NltrZXldID0gd3JhcEFuc2kyNTYoc3VpdGUuYW5zaTI1NiwgMCk7XG5cdFx0XHRzdHlsZXMuYmdDb2xvci5hbnNpMjU2W2tleV0gPSB3cmFwQW5zaTI1NihzdWl0ZS5hbnNpMjU2LCAxMCk7XG5cdFx0fVxuXG5cdFx0aWYgKCdyZ2InIGluIHN1aXRlKSB7XG5cdFx0XHRzdHlsZXMuY29sb3IuYW5zaTE2bVtrZXldID0gd3JhcEFuc2kxNm0oc3VpdGUucmdiLCAwKTtcblx0XHRcdHN0eWxlcy5iZ0NvbG9yLmFuc2kxNm1ba2V5XSA9IHdyYXBBbnNpMTZtKHN1aXRlLnJnYiwgMTApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbi8vIE1ha2UgdGhlIGV4cG9ydCBpbW11dGFibGVcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsICdleHBvcnRzJywge1xuXHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRnZXQ6IGFzc2VtYmxlU3R5bGVzXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IGVzY2FwZVN0cmluZ1JlZ2V4cCA9IHJlcXVpcmUoJ2VzY2FwZS1zdHJpbmctcmVnZXhwJyk7XG5jb25zdCBhbnNpU3R5bGVzID0gcmVxdWlyZSgnYW5zaS1zdHlsZXMnKTtcbmNvbnN0IHN0ZG91dENvbG9yID0gcmVxdWlyZSgnc3VwcG9ydHMtY29sb3InKS5zdGRvdXQ7XG5cbmNvbnN0IHRlbXBsYXRlID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMuanMnKTtcblxuY29uc3QgaXNTaW1wbGVXaW5kb3dzVGVybSA9IHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicgJiYgIShwcm9jZXNzLmVudi5URVJNIHx8ICcnKS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoJ3h0ZXJtJyk7XG5cbi8vIGBzdXBwb3J0c0NvbG9yLmxldmVsYCDihpIgYGFuc2lTdHlsZXMuY29sb3JbbmFtZV1gIG1hcHBpbmdcbmNvbnN0IGxldmVsTWFwcGluZyA9IFsnYW5zaScsICdhbnNpJywgJ2Fuc2kyNTYnLCAnYW5zaTE2bSddO1xuXG4vLyBgY29sb3ItY29udmVydGAgbW9kZWxzIHRvIGV4Y2x1ZGUgZnJvbSB0aGUgQ2hhbGsgQVBJIGR1ZSB0byBjb25mbGljdHMgYW5kIHN1Y2hcbmNvbnN0IHNraXBNb2RlbHMgPSBuZXcgU2V0KFsnZ3JheSddKTtcblxuY29uc3Qgc3R5bGVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuZnVuY3Rpb24gYXBwbHlPcHRpb25zKG9iaiwgb3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHQvLyBEZXRlY3QgbGV2ZWwgaWYgbm90IHNldCBtYW51YWxseVxuXHRjb25zdCBzY0xldmVsID0gc3Rkb3V0Q29sb3IgPyBzdGRvdXRDb2xvci5sZXZlbCA6IDA7XG5cdG9iai5sZXZlbCA9IG9wdGlvbnMubGV2ZWwgPT09IHVuZGVmaW5lZCA/IHNjTGV2ZWwgOiBvcHRpb25zLmxldmVsO1xuXHRvYmouZW5hYmxlZCA9ICdlbmFibGVkJyBpbiBvcHRpb25zID8gb3B0aW9ucy5lbmFibGVkIDogb2JqLmxldmVsID4gMDtcbn1cblxuZnVuY3Rpb24gQ2hhbGsob3B0aW9ucykge1xuXHQvLyBXZSBjaGVjayBmb3IgdGhpcy50ZW1wbGF0ZSBoZXJlIHNpbmNlIGNhbGxpbmcgYGNoYWxrLmNvbnN0cnVjdG9yKClgXG5cdC8vIGJ5IGl0c2VsZiB3aWxsIGhhdmUgYSBgdGhpc2Agb2YgYSBwcmV2aW91c2x5IGNvbnN0cnVjdGVkIGNoYWxrIG9iamVjdFxuXHRpZiAoIXRoaXMgfHwgISh0aGlzIGluc3RhbmNlb2YgQ2hhbGspIHx8IHRoaXMudGVtcGxhdGUpIHtcblx0XHRjb25zdCBjaGFsayA9IHt9O1xuXHRcdGFwcGx5T3B0aW9ucyhjaGFsaywgb3B0aW9ucyk7XG5cblx0XHRjaGFsay50ZW1wbGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gY2hhbGtUYWcuYXBwbHkobnVsbCwgW2NoYWxrLnRlbXBsYXRlXS5jb25jYXQoYXJncykpO1xuXHRcdH07XG5cblx0XHRPYmplY3Quc2V0UHJvdG90eXBlT2YoY2hhbGssIENoYWxrLnByb3RvdHlwZSk7XG5cdFx0T2JqZWN0LnNldFByb3RvdHlwZU9mKGNoYWxrLnRlbXBsYXRlLCBjaGFsayk7XG5cblx0XHRjaGFsay50ZW1wbGF0ZS5jb25zdHJ1Y3RvciA9IENoYWxrO1xuXG5cdFx0cmV0dXJuIGNoYWxrLnRlbXBsYXRlO1xuXHR9XG5cblx0YXBwbHlPcHRpb25zKHRoaXMsIG9wdGlvbnMpO1xufVxuXG4vLyBVc2UgYnJpZ2h0IGJsdWUgb24gV2luZG93cyBhcyB0aGUgbm9ybWFsIGJsdWUgY29sb3IgaXMgaWxsZWdpYmxlXG5pZiAoaXNTaW1wbGVXaW5kb3dzVGVybSkge1xuXHRhbnNpU3R5bGVzLmJsdWUub3BlbiA9ICdcXHUwMDFCWzk0bSc7XG59XG5cbmZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGFuc2lTdHlsZXMpKSB7XG5cdGFuc2lTdHlsZXNba2V5XS5jbG9zZVJlID0gbmV3IFJlZ0V4cChlc2NhcGVTdHJpbmdSZWdleHAoYW5zaVN0eWxlc1trZXldLmNsb3NlKSwgJ2cnKTtcblxuXHRzdHlsZXNba2V5XSA9IHtcblx0XHRnZXQoKSB7XG5cdFx0XHRjb25zdCBjb2RlcyA9IGFuc2lTdHlsZXNba2V5XTtcblx0XHRcdHJldHVybiBidWlsZC5jYWxsKHRoaXMsIHRoaXMuX3N0eWxlcyA/IHRoaXMuX3N0eWxlcy5jb25jYXQoY29kZXMpIDogW2NvZGVzXSwgdGhpcy5fZW1wdHksIGtleSk7XG5cdFx0fVxuXHR9O1xufVxuXG5zdHlsZXMudmlzaWJsZSA9IHtcblx0Z2V0KCkge1xuXHRcdHJldHVybiBidWlsZC5jYWxsKHRoaXMsIHRoaXMuX3N0eWxlcyB8fCBbXSwgdHJ1ZSwgJ3Zpc2libGUnKTtcblx0fVxufTtcblxuYW5zaVN0eWxlcy5jb2xvci5jbG9zZVJlID0gbmV3IFJlZ0V4cChlc2NhcGVTdHJpbmdSZWdleHAoYW5zaVN0eWxlcy5jb2xvci5jbG9zZSksICdnJyk7XG5mb3IgKGNvbnN0IG1vZGVsIG9mIE9iamVjdC5rZXlzKGFuc2lTdHlsZXMuY29sb3IuYW5zaSkpIHtcblx0aWYgKHNraXBNb2RlbHMuaGFzKG1vZGVsKSkge1xuXHRcdGNvbnRpbnVlO1xuXHR9XG5cblx0c3R5bGVzW21vZGVsXSA9IHtcblx0XHRnZXQoKSB7XG5cdFx0XHRjb25zdCBsZXZlbCA9IHRoaXMubGV2ZWw7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRjb25zdCBvcGVuID0gYW5zaVN0eWxlcy5jb2xvcltsZXZlbE1hcHBpbmdbbGV2ZWxdXVttb2RlbF0uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcblx0XHRcdFx0Y29uc3QgY29kZXMgPSB7XG5cdFx0XHRcdFx0b3Blbixcblx0XHRcdFx0XHRjbG9zZTogYW5zaVN0eWxlcy5jb2xvci5jbG9zZSxcblx0XHRcdFx0XHRjbG9zZVJlOiBhbnNpU3R5bGVzLmNvbG9yLmNsb3NlUmVcblx0XHRcdFx0fTtcblx0XHRcdFx0cmV0dXJuIGJ1aWxkLmNhbGwodGhpcywgdGhpcy5fc3R5bGVzID8gdGhpcy5fc3R5bGVzLmNvbmNhdChjb2RlcykgOiBbY29kZXNdLCB0aGlzLl9lbXB0eSwgbW9kZWwpO1xuXHRcdFx0fTtcblx0XHR9XG5cdH07XG59XG5cbmFuc2lTdHlsZXMuYmdDb2xvci5jbG9zZVJlID0gbmV3IFJlZ0V4cChlc2NhcGVTdHJpbmdSZWdleHAoYW5zaVN0eWxlcy5iZ0NvbG9yLmNsb3NlKSwgJ2cnKTtcbmZvciAoY29uc3QgbW9kZWwgb2YgT2JqZWN0LmtleXMoYW5zaVN0eWxlcy5iZ0NvbG9yLmFuc2kpKSB7XG5cdGlmIChza2lwTW9kZWxzLmhhcyhtb2RlbCkpIHtcblx0XHRjb250aW51ZTtcblx0fVxuXG5cdGNvbnN0IGJnTW9kZWwgPSAnYmcnICsgbW9kZWxbMF0udG9VcHBlckNhc2UoKSArIG1vZGVsLnNsaWNlKDEpO1xuXHRzdHlsZXNbYmdNb2RlbF0gPSB7XG5cdFx0Z2V0KCkge1xuXHRcdFx0Y29uc3QgbGV2ZWwgPSB0aGlzLmxldmVsO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0Y29uc3Qgb3BlbiA9IGFuc2lTdHlsZXMuYmdDb2xvcltsZXZlbE1hcHBpbmdbbGV2ZWxdXVttb2RlbF0uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcblx0XHRcdFx0Y29uc3QgY29kZXMgPSB7XG5cdFx0XHRcdFx0b3Blbixcblx0XHRcdFx0XHRjbG9zZTogYW5zaVN0eWxlcy5iZ0NvbG9yLmNsb3NlLFxuXHRcdFx0XHRcdGNsb3NlUmU6IGFuc2lTdHlsZXMuYmdDb2xvci5jbG9zZVJlXG5cdFx0XHRcdH07XG5cdFx0XHRcdHJldHVybiBidWlsZC5jYWxsKHRoaXMsIHRoaXMuX3N0eWxlcyA/IHRoaXMuX3N0eWxlcy5jb25jYXQoY29kZXMpIDogW2NvZGVzXSwgdGhpcy5fZW1wdHksIG1vZGVsKTtcblx0XHRcdH07XG5cdFx0fVxuXHR9O1xufVxuXG5jb25zdCBwcm90byA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCgpID0+IHt9LCBzdHlsZXMpO1xuXG5mdW5jdGlvbiBidWlsZChfc3R5bGVzLCBfZW1wdHksIGtleSkge1xuXHRjb25zdCBidWlsZGVyID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBhcHBseVN0eWxlLmFwcGx5KGJ1aWxkZXIsIGFyZ3VtZW50cyk7XG5cdH07XG5cblx0YnVpbGRlci5fc3R5bGVzID0gX3N0eWxlcztcblx0YnVpbGRlci5fZW1wdHkgPSBfZW1wdHk7XG5cblx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGJ1aWxkZXIsICdsZXZlbCcsIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldCgpIHtcblx0XHRcdHJldHVybiBzZWxmLmxldmVsO1xuXHRcdH0sXG5cdFx0c2V0KGxldmVsKSB7XG5cdFx0XHRzZWxmLmxldmVsID0gbGV2ZWw7XG5cdFx0fVxuXHR9KTtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoYnVpbGRlciwgJ2VuYWJsZWQnLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQoKSB7XG5cdFx0XHRyZXR1cm4gc2VsZi5lbmFibGVkO1xuXHRcdH0sXG5cdFx0c2V0KGVuYWJsZWQpIHtcblx0XHRcdHNlbGYuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBTZWUgYmVsb3cgZm9yIGZpeCByZWdhcmRpbmcgaW52aXNpYmxlIGdyZXkvZGltIGNvbWJpbmF0aW9uIG9uIFdpbmRvd3Ncblx0YnVpbGRlci5oYXNHcmV5ID0gdGhpcy5oYXNHcmV5IHx8IGtleSA9PT0gJ2dyYXknIHx8IGtleSA9PT0gJ2dyZXknO1xuXG5cdC8vIGBfX3Byb3RvX19gIGlzIHVzZWQgYmVjYXVzZSB3ZSBtdXN0IHJldHVybiBhIGZ1bmN0aW9uLCBidXQgdGhlcmUgaXNcblx0Ly8gbm8gd2F5IHRvIGNyZWF0ZSBhIGZ1bmN0aW9uIHdpdGggYSBkaWZmZXJlbnQgcHJvdG90eXBlXG5cdGJ1aWxkZXIuX19wcm90b19fID0gcHJvdG87IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG9cblxuXHRyZXR1cm4gYnVpbGRlcjtcbn1cblxuZnVuY3Rpb24gYXBwbHlTdHlsZSgpIHtcblx0Ly8gU3VwcG9ydCB2YXJhZ3MsIGJ1dCBzaW1wbHkgY2FzdCB0byBzdHJpbmcgaW4gY2FzZSB0aGVyZSdzIG9ubHkgb25lIGFyZ1xuXHRjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuXHRjb25zdCBhcmdzTGVuID0gYXJncy5sZW5ndGg7XG5cdGxldCBzdHIgPSBTdHJpbmcoYXJndW1lbnRzWzBdKTtcblxuXHRpZiAoYXJnc0xlbiA9PT0gMCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGlmIChhcmdzTGVuID4gMSkge1xuXHRcdC8vIERvbid0IHNsaWNlIGBhcmd1bWVudHNgLCBpdCBwcmV2ZW50cyBWOCBvcHRpbWl6YXRpb25zXG5cdFx0Zm9yIChsZXQgYSA9IDE7IGEgPCBhcmdzTGVuOyBhKyspIHtcblx0XHRcdHN0ciArPSAnICcgKyBhcmdzW2FdO1xuXHRcdH1cblx0fVxuXG5cdGlmICghdGhpcy5lbmFibGVkIHx8IHRoaXMubGV2ZWwgPD0gMCB8fCAhc3RyKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VtcHR5ID8gJycgOiBzdHI7XG5cdH1cblxuXHQvLyBUdXJucyBvdXQgdGhhdCBvbiBXaW5kb3dzIGRpbW1lZCBncmF5IHRleHQgYmVjb21lcyBpbnZpc2libGUgaW4gY21kLmV4ZSxcblx0Ly8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFsay9jaGFsay9pc3N1ZXMvNThcblx0Ly8gSWYgd2UncmUgb24gV2luZG93cyBhbmQgd2UncmUgZGVhbGluZyB3aXRoIGEgZ3JheSBjb2xvciwgdGVtcG9yYXJpbHkgbWFrZSAnZGltJyBhIG5vb3AuXG5cdGNvbnN0IG9yaWdpbmFsRGltID0gYW5zaVN0eWxlcy5kaW0ub3Blbjtcblx0aWYgKGlzU2ltcGxlV2luZG93c1Rlcm0gJiYgdGhpcy5oYXNHcmV5KSB7XG5cdFx0YW5zaVN0eWxlcy5kaW0ub3BlbiA9ICcnO1xuXHR9XG5cblx0Zm9yIChjb25zdCBjb2RlIG9mIHRoaXMuX3N0eWxlcy5zbGljZSgpLnJldmVyc2UoKSkge1xuXHRcdC8vIFJlcGxhY2UgYW55IGluc3RhbmNlcyBhbHJlYWR5IHByZXNlbnQgd2l0aCBhIHJlLW9wZW5pbmcgY29kZVxuXHRcdC8vIG90aGVyd2lzZSBvbmx5IHRoZSBwYXJ0IG9mIHRoZSBzdHJpbmcgdW50aWwgc2FpZCBjbG9zaW5nIGNvZGVcblx0XHQvLyB3aWxsIGJlIGNvbG9yZWQsIGFuZCB0aGUgcmVzdCB3aWxsIHNpbXBseSBiZSAncGxhaW4nLlxuXHRcdHN0ciA9IGNvZGUub3BlbiArIHN0ci5yZXBsYWNlKGNvZGUuY2xvc2VSZSwgY29kZS5vcGVuKSArIGNvZGUuY2xvc2U7XG5cblx0XHQvLyBDbG9zZSB0aGUgc3R5bGluZyBiZWZvcmUgYSBsaW5lYnJlYWsgYW5kIHJlb3BlblxuXHRcdC8vIGFmdGVyIG5leHQgbGluZSB0byBmaXggYSBibGVlZCBpc3N1ZSBvbiBtYWNPU1xuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFsay9jaGFsay9wdWxsLzkyXG5cdFx0c3RyID0gc3RyLnJlcGxhY2UoL1xccj9cXG4vZywgYCR7Y29kZS5jbG9zZX0kJiR7Y29kZS5vcGVufWApO1xuXHR9XG5cblx0Ly8gUmVzZXQgdGhlIG9yaWdpbmFsIGBkaW1gIGlmIHdlIGNoYW5nZWQgaXQgdG8gd29yayBhcm91bmQgdGhlIFdpbmRvd3MgZGltbWVkIGdyYXkgaXNzdWVcblx0YW5zaVN0eWxlcy5kaW0ub3BlbiA9IG9yaWdpbmFsRGltO1xuXG5cdHJldHVybiBzdHI7XG59XG5cbmZ1bmN0aW9uIGNoYWxrVGFnKGNoYWxrLCBzdHJpbmdzKSB7XG5cdGlmICghQXJyYXkuaXNBcnJheShzdHJpbmdzKSkge1xuXHRcdC8vIElmIGNoYWxrKCkgd2FzIGNhbGxlZCBieSBpdHNlbGYgb3Igd2l0aCBhIHN0cmluZyxcblx0XHQvLyByZXR1cm4gdGhlIHN0cmluZyBpdHNlbGYgYXMgYSBzdHJpbmcuXG5cdFx0cmV0dXJuIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKS5qb2luKCcgJyk7XG5cdH1cblxuXHRjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuXHRjb25zdCBwYXJ0cyA9IFtzdHJpbmdzLnJhd1swXV07XG5cblx0Zm9yIChsZXQgaSA9IDE7IGkgPCBzdHJpbmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0cGFydHMucHVzaChTdHJpbmcoYXJnc1tpIC0gMV0pLnJlcGxhY2UoL1t7fVxcXFxdL2csICdcXFxcJCYnKSk7XG5cdFx0cGFydHMucHVzaChTdHJpbmcoc3RyaW5ncy5yYXdbaV0pKTtcblx0fVxuXG5cdHJldHVybiB0ZW1wbGF0ZShjaGFsaywgcGFydHMuam9pbignJykpO1xufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhDaGFsay5wcm90b3R5cGUsIHN0eWxlcyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hhbGsoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXG5tb2R1bGUuZXhwb3J0cy5zdXBwb3J0c0NvbG9yID0gc3Rkb3V0Q29sb3I7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gbW9kdWxlLmV4cG9ydHM7IC8vIEZvciBUeXBlU2NyaXB0XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCBURU1QTEFURV9SRUdFWCA9IC8oPzpcXFxcKHVbYS1mXFxkXXs0fXx4W2EtZlxcZF17Mn18LikpfCg/Olxceyh+KT8oXFx3Kyg/OlxcKFteKV0qXFwpKT8oPzpcXC5cXHcrKD86XFwoW14pXSpcXCkpPykqKSg/OlsgXFx0XXwoPz1cXHI/XFxuKSkpfChcXH0pfCgoPzoufFtcXHJcXG5cXGZdKSs/KS9naTtcbmNvbnN0IFNUWUxFX1JFR0VYID0gLyg/Ol58XFwuKShcXHcrKSg/OlxcKChbXildKilcXCkpPy9nO1xuY29uc3QgU1RSSU5HX1JFR0VYID0gL14oWydcIl0pKCg/OlxcXFwufCg/IVxcMSlbXlxcXFxdKSopXFwxJC87XG5jb25zdCBFU0NBUEVfUkVHRVggPSAvXFxcXCh1W2EtZlxcZF17NH18eFthLWZcXGRdezJ9fC4pfChbXlxcXFxdKS9naTtcblxuY29uc3QgRVNDQVBFUyA9IG5ldyBNYXAoW1xuXHRbJ24nLCAnXFxuJ10sXG5cdFsncicsICdcXHInXSxcblx0Wyd0JywgJ1xcdCddLFxuXHRbJ2InLCAnXFxiJ10sXG5cdFsnZicsICdcXGYnXSxcblx0Wyd2JywgJ1xcdiddLFxuXHRbJzAnLCAnXFwwJ10sXG5cdFsnXFxcXCcsICdcXFxcJ10sXG5cdFsnZScsICdcXHUwMDFCJ10sXG5cdFsnYScsICdcXHUwMDA3J11cbl0pO1xuXG5mdW5jdGlvbiB1bmVzY2FwZShjKSB7XG5cdGlmICgoY1swXSA9PT0gJ3UnICYmIGMubGVuZ3RoID09PSA1KSB8fCAoY1swXSA9PT0gJ3gnICYmIGMubGVuZ3RoID09PSAzKSkge1xuXHRcdHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGMuc2xpY2UoMSksIDE2KSk7XG5cdH1cblxuXHRyZXR1cm4gRVNDQVBFUy5nZXQoYykgfHwgYztcbn1cblxuZnVuY3Rpb24gcGFyc2VBcmd1bWVudHMobmFtZSwgYXJncykge1xuXHRjb25zdCByZXN1bHRzID0gW107XG5cdGNvbnN0IGNodW5rcyA9IGFyZ3MudHJpbSgpLnNwbGl0KC9cXHMqLFxccyovZyk7XG5cdGxldCBtYXRjaGVzO1xuXG5cdGZvciAoY29uc3QgY2h1bmsgb2YgY2h1bmtzKSB7XG5cdFx0aWYgKCFpc05hTihjaHVuaykpIHtcblx0XHRcdHJlc3VsdHMucHVzaChOdW1iZXIoY2h1bmspKTtcblx0XHR9IGVsc2UgaWYgKChtYXRjaGVzID0gY2h1bmsubWF0Y2goU1RSSU5HX1JFR0VYKSkpIHtcblx0XHRcdHJlc3VsdHMucHVzaChtYXRjaGVzWzJdLnJlcGxhY2UoRVNDQVBFX1JFR0VYLCAobSwgZXNjYXBlLCBjaHIpID0+IGVzY2FwZSA/IHVuZXNjYXBlKGVzY2FwZSkgOiBjaHIpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIENoYWxrIHRlbXBsYXRlIHN0eWxlIGFyZ3VtZW50OiAke2NodW5rfSAoaW4gc3R5bGUgJyR7bmFtZX0nKWApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXN1bHRzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVN0eWxlKHN0eWxlKSB7XG5cdFNUWUxFX1JFR0VYLmxhc3RJbmRleCA9IDA7XG5cblx0Y29uc3QgcmVzdWx0cyA9IFtdO1xuXHRsZXQgbWF0Y2hlcztcblxuXHR3aGlsZSAoKG1hdGNoZXMgPSBTVFlMRV9SRUdFWC5leGVjKHN0eWxlKSkgIT09IG51bGwpIHtcblx0XHRjb25zdCBuYW1lID0gbWF0Y2hlc1sxXTtcblxuXHRcdGlmIChtYXRjaGVzWzJdKSB7XG5cdFx0XHRjb25zdCBhcmdzID0gcGFyc2VBcmd1bWVudHMobmFtZSwgbWF0Y2hlc1syXSk7XG5cdFx0XHRyZXN1bHRzLnB1c2goW25hbWVdLmNvbmNhdChhcmdzKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdHMucHVzaChbbmFtZV0pO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXN1bHRzO1xufVxuXG5mdW5jdGlvbiBidWlsZFN0eWxlKGNoYWxrLCBzdHlsZXMpIHtcblx0Y29uc3QgZW5hYmxlZCA9IHt9O1xuXG5cdGZvciAoY29uc3QgbGF5ZXIgb2Ygc3R5bGVzKSB7XG5cdFx0Zm9yIChjb25zdCBzdHlsZSBvZiBsYXllci5zdHlsZXMpIHtcblx0XHRcdGVuYWJsZWRbc3R5bGVbMF1dID0gbGF5ZXIuaW52ZXJzZSA/IG51bGwgOiBzdHlsZS5zbGljZSgxKTtcblx0XHR9XG5cdH1cblxuXHRsZXQgY3VycmVudCA9IGNoYWxrO1xuXHRmb3IgKGNvbnN0IHN0eWxlTmFtZSBvZiBPYmplY3Qua2V5cyhlbmFibGVkKSkge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KGVuYWJsZWRbc3R5bGVOYW1lXSkpIHtcblx0XHRcdGlmICghKHN0eWxlTmFtZSBpbiBjdXJyZW50KSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gQ2hhbGsgc3R5bGU6ICR7c3R5bGVOYW1lfWApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZW5hYmxlZFtzdHlsZU5hbWVdLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Y3VycmVudCA9IGN1cnJlbnRbc3R5bGVOYW1lXS5hcHBseShjdXJyZW50LCBlbmFibGVkW3N0eWxlTmFtZV0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudCA9IGN1cnJlbnRbc3R5bGVOYW1lXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3VycmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSAoY2hhbGssIHRtcCkgPT4ge1xuXHRjb25zdCBzdHlsZXMgPSBbXTtcblx0Y29uc3QgY2h1bmtzID0gW107XG5cdGxldCBjaHVuayA9IFtdO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG5cdHRtcC5yZXBsYWNlKFRFTVBMQVRFX1JFR0VYLCAobSwgZXNjYXBlQ2hhciwgaW52ZXJzZSwgc3R5bGUsIGNsb3NlLCBjaHIpID0+IHtcblx0XHRpZiAoZXNjYXBlQ2hhcikge1xuXHRcdFx0Y2h1bmsucHVzaCh1bmVzY2FwZShlc2NhcGVDaGFyKSk7XG5cdFx0fSBlbHNlIGlmIChzdHlsZSkge1xuXHRcdFx0Y29uc3Qgc3RyID0gY2h1bmsuam9pbignJyk7XG5cdFx0XHRjaHVuayA9IFtdO1xuXHRcdFx0Y2h1bmtzLnB1c2goc3R5bGVzLmxlbmd0aCA9PT0gMCA/IHN0ciA6IGJ1aWxkU3R5bGUoY2hhbGssIHN0eWxlcykoc3RyKSk7XG5cdFx0XHRzdHlsZXMucHVzaCh7aW52ZXJzZSwgc3R5bGVzOiBwYXJzZVN0eWxlKHN0eWxlKX0pO1xuXHRcdH0gZWxzZSBpZiAoY2xvc2UpIHtcblx0XHRcdGlmIChzdHlsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignRm91bmQgZXh0cmFuZW91cyB9IGluIENoYWxrIHRlbXBsYXRlIGxpdGVyYWwnKTtcblx0XHRcdH1cblxuXHRcdFx0Y2h1bmtzLnB1c2goYnVpbGRTdHlsZShjaGFsaywgc3R5bGVzKShjaHVuay5qb2luKCcnKSkpO1xuXHRcdFx0Y2h1bmsgPSBbXTtcblx0XHRcdHN0eWxlcy5wb3AoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2h1bmsucHVzaChjaHIpO1xuXHRcdH1cblx0fSk7XG5cblx0Y2h1bmtzLnB1c2goY2h1bmsuam9pbignJykpO1xuXG5cdGlmIChzdHlsZXMubGVuZ3RoID4gMCkge1xuXHRcdGNvbnN0IGVyck1zZyA9IGBDaGFsayB0ZW1wbGF0ZSBsaXRlcmFsIGlzIG1pc3NpbmcgJHtzdHlsZXMubGVuZ3RofSBjbG9zaW5nIGJyYWNrZXQke3N0eWxlcy5sZW5ndGggPT09IDEgPyAnJyA6ICdzJ30gKFxcYH1cXGApYDtcblx0XHR0aHJvdyBuZXcgRXJyb3IoZXJyTXNnKTtcblx0fVxuXG5cdHJldHVybiBjaHVua3Muam9pbignJyk7XG59O1xuIiwiLyogTUlUIGxpY2Vuc2UgKi9cbnZhciBjc3NLZXl3b3JkcyA9IHJlcXVpcmUoJ2NvbG9yLW5hbWUnKTtcblxuLy8gTk9URTogY29udmVyc2lvbnMgc2hvdWxkIG9ubHkgcmV0dXJuIHByaW1pdGl2ZSB2YWx1ZXMgKGkuZS4gYXJyYXlzLCBvclxuLy8gICAgICAgdmFsdWVzIHRoYXQgZ2l2ZSBjb3JyZWN0IGB0eXBlb2ZgIHJlc3VsdHMpLlxuLy8gICAgICAgZG8gbm90IHVzZSBib3ggdmFsdWVzIHR5cGVzIChpLmUuIE51bWJlcigpLCBTdHJpbmcoKSwgZXRjLilcblxudmFyIHJldmVyc2VLZXl3b3JkcyA9IHt9O1xuZm9yICh2YXIga2V5IGluIGNzc0tleXdvcmRzKSB7XG5cdGlmIChjc3NLZXl3b3Jkcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0cmV2ZXJzZUtleXdvcmRzW2Nzc0tleXdvcmRzW2tleV1dID0ga2V5O1xuXHR9XG59XG5cbnZhciBjb252ZXJ0ID0gbW9kdWxlLmV4cG9ydHMgPSB7XG5cdHJnYjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdyZ2InfSxcblx0aHNsOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2hzbCd9LFxuXHRoc3Y6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHN2J30sXG5cdGh3Yjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdod2InfSxcblx0Y215azoge2NoYW5uZWxzOiA0LCBsYWJlbHM6ICdjbXlrJ30sXG5cdHh5ejoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICd4eXonfSxcblx0bGFiOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2xhYid9LFxuXHRsY2g6IHtjaGFubmVsczogMywgbGFiZWxzOiAnbGNoJ30sXG5cdGhleDoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnaGV4J119LFxuXHRrZXl3b3JkOiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydrZXl3b3JkJ119LFxuXHRhbnNpMTY6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2Fuc2kxNiddfSxcblx0YW5zaTI1Njoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnYW5zaTI1NiddfSxcblx0aGNnOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogWydoJywgJ2MnLCAnZyddfSxcblx0YXBwbGU6IHtjaGFubmVsczogMywgbGFiZWxzOiBbJ3IxNicsICdnMTYnLCAnYjE2J119LFxuXHRncmF5OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydncmF5J119XG59O1xuXG4vLyBoaWRlIC5jaGFubmVscyBhbmQgLmxhYmVscyBwcm9wZXJ0aWVzXG5mb3IgKHZhciBtb2RlbCBpbiBjb252ZXJ0KSB7XG5cdGlmIChjb252ZXJ0Lmhhc093blByb3BlcnR5KG1vZGVsKSkge1xuXHRcdGlmICghKCdjaGFubmVscycgaW4gY29udmVydFttb2RlbF0pKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgY2hhbm5lbHMgcHJvcGVydHk6ICcgKyBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0aWYgKCEoJ2xhYmVscycgaW4gY29udmVydFttb2RlbF0pKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgY2hhbm5lbCBsYWJlbHMgcHJvcGVydHk6ICcgKyBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbnZlcnRbbW9kZWxdLmxhYmVscy5sZW5ndGggIT09IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2NoYW5uZWwgYW5kIGxhYmVsIGNvdW50cyBtaXNtYXRjaDogJyArIG1vZGVsKTtcblx0XHR9XG5cblx0XHR2YXIgY2hhbm5lbHMgPSBjb252ZXJ0W21vZGVsXS5jaGFubmVscztcblx0XHR2YXIgbGFiZWxzID0gY29udmVydFttb2RlbF0ubGFiZWxzO1xuXHRcdGRlbGV0ZSBjb252ZXJ0W21vZGVsXS5jaGFubmVscztcblx0XHRkZWxldGUgY29udmVydFttb2RlbF0ubGFiZWxzO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W21vZGVsXSwgJ2NoYW5uZWxzJywge3ZhbHVlOiBjaGFubmVsc30pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W21vZGVsXSwgJ2xhYmVscycsIHt2YWx1ZTogbGFiZWxzfSk7XG5cdH1cbn1cblxuY29udmVydC5yZ2IuaHNsID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgbWluID0gTWF0aC5taW4ociwgZywgYik7XG5cdHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcblx0dmFyIGRlbHRhID0gbWF4IC0gbWluO1xuXHR2YXIgaDtcblx0dmFyIHM7XG5cdHZhciBsO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdGggPSAwO1xuXHR9IGVsc2UgaWYgKHIgPT09IG1heCkge1xuXHRcdGggPSAoZyAtIGIpIC8gZGVsdGE7XG5cdH0gZWxzZSBpZiAoZyA9PT0gbWF4KSB7XG5cdFx0aCA9IDIgKyAoYiAtIHIpIC8gZGVsdGE7XG5cdH0gZWxzZSBpZiAoYiA9PT0gbWF4KSB7XG5cdFx0aCA9IDQgKyAociAtIGcpIC8gZGVsdGE7XG5cdH1cblxuXHRoID0gTWF0aC5taW4oaCAqIDYwLCAzNjApO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0bCA9IChtaW4gKyBtYXgpIC8gMjtcblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRzID0gMDtcblx0fSBlbHNlIGlmIChsIDw9IDAuNSkge1xuXHRcdHMgPSBkZWx0YSAvIChtYXggKyBtaW4pO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSBkZWx0YSAvICgyIC0gbWF4IC0gbWluKTtcblx0fVxuXG5cdHJldHVybiBbaCwgcyAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5oc3YgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByZGlmO1xuXHR2YXIgZ2RpZjtcblx0dmFyIGJkaWY7XG5cdHZhciBoO1xuXHR2YXIgcztcblxuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgdiA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXHR2YXIgZGlmZiA9IHYgLSBNYXRoLm1pbihyLCBnLCBiKTtcblx0dmFyIGRpZmZjID0gZnVuY3Rpb24gKGMpIHtcblx0XHRyZXR1cm4gKHYgLSBjKSAvIDYgLyBkaWZmICsgMSAvIDI7XG5cdH07XG5cblx0aWYgKGRpZmYgPT09IDApIHtcblx0XHRoID0gcyA9IDA7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IGRpZmYgLyB2O1xuXHRcdHJkaWYgPSBkaWZmYyhyKTtcblx0XHRnZGlmID0gZGlmZmMoZyk7XG5cdFx0YmRpZiA9IGRpZmZjKGIpO1xuXG5cdFx0aWYgKHIgPT09IHYpIHtcblx0XHRcdGggPSBiZGlmIC0gZ2RpZjtcblx0XHR9IGVsc2UgaWYgKGcgPT09IHYpIHtcblx0XHRcdGggPSAoMSAvIDMpICsgcmRpZiAtIGJkaWY7XG5cdFx0fSBlbHNlIGlmIChiID09PSB2KSB7XG5cdFx0XHRoID0gKDIgLyAzKSArIGdkaWYgLSByZGlmO1xuXHRcdH1cblx0XHRpZiAoaCA8IDApIHtcblx0XHRcdGggKz0gMTtcblx0XHR9IGVsc2UgaWYgKGggPiAxKSB7XG5cdFx0XHRoIC09IDE7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIFtcblx0XHRoICogMzYwLFxuXHRcdHMgKiAxMDAsXG5cdFx0diAqIDEwMFxuXHRdO1xufTtcblxuY29udmVydC5yZ2IuaHdiID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXTtcblx0dmFyIGcgPSByZ2JbMV07XG5cdHZhciBiID0gcmdiWzJdO1xuXHR2YXIgaCA9IGNvbnZlcnQucmdiLmhzbChyZ2IpWzBdO1xuXHR2YXIgdyA9IDEgLyAyNTUgKiBNYXRoLm1pbihyLCBNYXRoLm1pbihnLCBiKSk7XG5cblx0YiA9IDEgLSAxIC8gMjU1ICogTWF0aC5tYXgociwgTWF0aC5tYXgoZywgYikpO1xuXG5cdHJldHVybiBbaCwgdyAqIDEwMCwgYiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5jbXlrID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgYztcblx0dmFyIG07XG5cdHZhciB5O1xuXHR2YXIgaztcblxuXHRrID0gTWF0aC5taW4oMSAtIHIsIDEgLSBnLCAxIC0gYik7XG5cdGMgPSAoMSAtIHIgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0bSA9ICgxIC0gZyAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXHR5ID0gKDEgLSBiIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cblx0cmV0dXJuIFtjICogMTAwLCBtICogMTAwLCB5ICogMTAwLCBrICogMTAwXTtcbn07XG5cbi8qKlxuICogU2VlIGh0dHBzOi8vZW4ubS53aWtpcGVkaWEub3JnL3dpa2kvRXVjbGlkZWFuX2Rpc3RhbmNlI1NxdWFyZWRfRXVjbGlkZWFuX2Rpc3RhbmNlXG4gKiAqL1xuZnVuY3Rpb24gY29tcGFyYXRpdmVEaXN0YW5jZSh4LCB5KSB7XG5cdHJldHVybiAoXG5cdFx0TWF0aC5wb3coeFswXSAtIHlbMF0sIDIpICtcblx0XHRNYXRoLnBvdyh4WzFdIC0geVsxXSwgMikgK1xuXHRcdE1hdGgucG93KHhbMl0gLSB5WzJdLCAyKVxuXHQpO1xufVxuXG5jb252ZXJ0LnJnYi5rZXl3b3JkID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgcmV2ZXJzZWQgPSByZXZlcnNlS2V5d29yZHNbcmdiXTtcblx0aWYgKHJldmVyc2VkKSB7XG5cdFx0cmV0dXJuIHJldmVyc2VkO1xuXHR9XG5cblx0dmFyIGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UgPSBJbmZpbml0eTtcblx0dmFyIGN1cnJlbnRDbG9zZXN0S2V5d29yZDtcblxuXHRmb3IgKHZhciBrZXl3b3JkIGluIGNzc0tleXdvcmRzKSB7XG5cdFx0aWYgKGNzc0tleXdvcmRzLmhhc093blByb3BlcnR5KGtleXdvcmQpKSB7XG5cdFx0XHR2YXIgdmFsdWUgPSBjc3NLZXl3b3Jkc1trZXl3b3JkXTtcblxuXHRcdFx0Ly8gQ29tcHV0ZSBjb21wYXJhdGl2ZSBkaXN0YW5jZVxuXHRcdFx0dmFyIGRpc3RhbmNlID0gY29tcGFyYXRpdmVEaXN0YW5jZShyZ2IsIHZhbHVlKTtcblxuXHRcdFx0Ly8gQ2hlY2sgaWYgaXRzIGxlc3MsIGlmIHNvIHNldCBhcyBjbG9zZXN0XG5cdFx0XHRpZiAoZGlzdGFuY2UgPCBjdXJyZW50Q2xvc2VzdERpc3RhbmNlKSB7XG5cdFx0XHRcdGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UgPSBkaXN0YW5jZTtcblx0XHRcdFx0Y3VycmVudENsb3Nlc3RLZXl3b3JkID0ga2V5d29yZDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3VycmVudENsb3Nlc3RLZXl3b3JkO1xufTtcblxuY29udmVydC5rZXl3b3JkLnJnYiA9IGZ1bmN0aW9uIChrZXl3b3JkKSB7XG5cdHJldHVybiBjc3NLZXl3b3Jkc1trZXl3b3JkXTtcbn07XG5cbmNvbnZlcnQucmdiLnh5eiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblxuXHQvLyBhc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKHIgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAociAvIDEyLjkyKTtcblx0ZyA9IGcgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChnICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKGcgLyAxMi45Mik7XG5cdGIgPSBiID4gMC4wNDA0NSA/IE1hdGgucG93KCgoYiArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChiIC8gMTIuOTIpO1xuXG5cdHZhciB4ID0gKHIgKiAwLjQxMjQpICsgKGcgKiAwLjM1NzYpICsgKGIgKiAwLjE4MDUpO1xuXHR2YXIgeSA9IChyICogMC4yMTI2KSArIChnICogMC43MTUyKSArIChiICogMC4wNzIyKTtcblx0dmFyIHogPSAociAqIDAuMDE5MykgKyAoZyAqIDAuMTE5MikgKyAoYiAqIDAuOTUwNSk7XG5cblx0cmV0dXJuIFt4ICogMTAwLCB5ICogMTAwLCB6ICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmxhYiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHh5eiA9IGNvbnZlcnQucmdiLnh5eihyZ2IpO1xuXHR2YXIgeCA9IHh5elswXTtcblx0dmFyIHkgPSB4eXpbMV07XG5cdHZhciB6ID0geHl6WzJdO1xuXHR2YXIgbDtcblx0dmFyIGE7XG5cdHZhciBiO1xuXG5cdHggLz0gOTUuMDQ3O1xuXHR5IC89IDEwMDtcblx0eiAvPSAxMDguODgzO1xuXG5cdHggPSB4ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh4LCAxIC8gMykgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG5cdHkgPSB5ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh5LCAxIC8gMykgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG5cdHogPSB6ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh6LCAxIC8gMykgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cblx0bCA9ICgxMTYgKiB5KSAtIDE2O1xuXHRhID0gNTAwICogKHggLSB5KTtcblx0YiA9IDIwMCAqICh5IC0geik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQuaHNsLnJnYiA9IGZ1bmN0aW9uIChoc2wpIHtcblx0dmFyIGggPSBoc2xbMF0gLyAzNjA7XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIHQxO1xuXHR2YXIgdDI7XG5cdHZhciB0Mztcblx0dmFyIHJnYjtcblx0dmFyIHZhbDtcblxuXHRpZiAocyA9PT0gMCkge1xuXHRcdHZhbCA9IGwgKiAyNTU7XG5cdFx0cmV0dXJuIFt2YWwsIHZhbCwgdmFsXTtcblx0fVxuXG5cdGlmIChsIDwgMC41KSB7XG5cdFx0dDIgPSBsICogKDEgKyBzKTtcblx0fSBlbHNlIHtcblx0XHR0MiA9IGwgKyBzIC0gbCAqIHM7XG5cdH1cblxuXHR0MSA9IDIgKiBsIC0gdDI7XG5cblx0cmdiID0gWzAsIDAsIDBdO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdHQzID0gaCArIDEgLyAzICogLShpIC0gMSk7XG5cdFx0aWYgKHQzIDwgMCkge1xuXHRcdFx0dDMrKztcblx0XHR9XG5cdFx0aWYgKHQzID4gMSkge1xuXHRcdFx0dDMtLTtcblx0XHR9XG5cblx0XHRpZiAoNiAqIHQzIDwgMSkge1xuXHRcdFx0dmFsID0gdDEgKyAodDIgLSB0MSkgKiA2ICogdDM7XG5cdFx0fSBlbHNlIGlmICgyICogdDMgPCAxKSB7XG5cdFx0XHR2YWwgPSB0Mjtcblx0XHR9IGVsc2UgaWYgKDMgKiB0MyA8IDIpIHtcblx0XHRcdHZhbCA9IHQxICsgKHQyIC0gdDEpICogKDIgLyAzIC0gdDMpICogNjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsID0gdDE7XG5cdFx0fVxuXG5cdFx0cmdiW2ldID0gdmFsICogMjU1O1xuXHR9XG5cblx0cmV0dXJuIHJnYjtcbn07XG5cbmNvbnZlcnQuaHNsLmhzdiA9IGZ1bmN0aW9uIChoc2wpIHtcblx0dmFyIGggPSBoc2xbMF07XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIHNtaW4gPSBzO1xuXHR2YXIgbG1pbiA9IE1hdGgubWF4KGwsIDAuMDEpO1xuXHR2YXIgc3Y7XG5cdHZhciB2O1xuXG5cdGwgKj0gMjtcblx0cyAqPSAobCA8PSAxKSA/IGwgOiAyIC0gbDtcblx0c21pbiAqPSBsbWluIDw9IDEgPyBsbWluIDogMiAtIGxtaW47XG5cdHYgPSAobCArIHMpIC8gMjtcblx0c3YgPSBsID09PSAwID8gKDIgKiBzbWluKSAvIChsbWluICsgc21pbikgOiAoMiAqIHMpIC8gKGwgKyBzKTtcblxuXHRyZXR1cm4gW2gsIHN2ICogMTAwLCB2ICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHN2LnJnYiA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIGggPSBoc3ZbMF0gLyA2MDtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXHR2YXIgaGkgPSBNYXRoLmZsb29yKGgpICUgNjtcblxuXHR2YXIgZiA9IGggLSBNYXRoLmZsb29yKGgpO1xuXHR2YXIgcCA9IDI1NSAqIHYgKiAoMSAtIHMpO1xuXHR2YXIgcSA9IDI1NSAqIHYgKiAoMSAtIChzICogZikpO1xuXHR2YXIgdCA9IDI1NSAqIHYgKiAoMSAtIChzICogKDEgLSBmKSkpO1xuXHR2ICo9IDI1NTtcblxuXHRzd2l0Y2ggKGhpKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuIFt2LCB0LCBwXTtcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXR1cm4gW3EsIHYsIHBdO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiBbcCwgdiwgdF07XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmV0dXJuIFtwLCBxLCB2XTtcblx0XHRjYXNlIDQ6XG5cdFx0XHRyZXR1cm4gW3QsIHAsIHZdO1xuXHRcdGNhc2UgNTpcblx0XHRcdHJldHVybiBbdiwgcCwgcV07XG5cdH1cbn07XG5cbmNvbnZlcnQuaHN2LmhzbCA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIGggPSBoc3ZbMF07XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblx0dmFyIHZtaW4gPSBNYXRoLm1heCh2LCAwLjAxKTtcblx0dmFyIGxtaW47XG5cdHZhciBzbDtcblx0dmFyIGw7XG5cblx0bCA9ICgyIC0gcykgKiB2O1xuXHRsbWluID0gKDIgLSBzKSAqIHZtaW47XG5cdHNsID0gcyAqIHZtaW47XG5cdHNsIC89IChsbWluIDw9IDEpID8gbG1pbiA6IDIgLSBsbWluO1xuXHRzbCA9IHNsIHx8IDA7XG5cdGwgLz0gMjtcblxuXHRyZXR1cm4gW2gsIHNsICogMTAwLCBsICogMTAwXTtcbn07XG5cbi8vIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy1jb2xvci8jaHdiLXRvLXJnYlxuY29udmVydC5od2IucmdiID0gZnVuY3Rpb24gKGh3Yikge1xuXHR2YXIgaCA9IGh3YlswXSAvIDM2MDtcblx0dmFyIHdoID0gaHdiWzFdIC8gMTAwO1xuXHR2YXIgYmwgPSBod2JbMl0gLyAxMDA7XG5cdHZhciByYXRpbyA9IHdoICsgYmw7XG5cdHZhciBpO1xuXHR2YXIgdjtcblx0dmFyIGY7XG5cdHZhciBuO1xuXG5cdC8vIHdoICsgYmwgY2FudCBiZSA+IDFcblx0aWYgKHJhdGlvID4gMSkge1xuXHRcdHdoIC89IHJhdGlvO1xuXHRcdGJsIC89IHJhdGlvO1xuXHR9XG5cblx0aSA9IE1hdGguZmxvb3IoNiAqIGgpO1xuXHR2ID0gMSAtIGJsO1xuXHRmID0gNiAqIGggLSBpO1xuXG5cdGlmICgoaSAmIDB4MDEpICE9PSAwKSB7XG5cdFx0ZiA9IDEgLSBmO1xuXHR9XG5cblx0biA9IHdoICsgZiAqICh2IC0gd2gpOyAvLyBsaW5lYXIgaW50ZXJwb2xhdGlvblxuXG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cdHN3aXRjaCAoaSkge1xuXHRcdGRlZmF1bHQ6XG5cdFx0Y2FzZSA2OlxuXHRcdGNhc2UgMDogciA9IHY7IGcgPSBuOyBiID0gd2g7IGJyZWFrO1xuXHRcdGNhc2UgMTogciA9IG47IGcgPSB2OyBiID0gd2g7IGJyZWFrO1xuXHRcdGNhc2UgMjogciA9IHdoOyBnID0gdjsgYiA9IG47IGJyZWFrO1xuXHRcdGNhc2UgMzogciA9IHdoOyBnID0gbjsgYiA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgNDogciA9IG47IGcgPSB3aDsgYiA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgNTogciA9IHY7IGcgPSB3aDsgYiA9IG47IGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQuY215ay5yZ2IgPSBmdW5jdGlvbiAoY215aykge1xuXHR2YXIgYyA9IGNteWtbMF0gLyAxMDA7XG5cdHZhciBtID0gY215a1sxXSAvIDEwMDtcblx0dmFyIHkgPSBjbXlrWzJdIC8gMTAwO1xuXHR2YXIgayA9IGNteWtbM10gLyAxMDA7XG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cblx0ciA9IDEgLSBNYXRoLm1pbigxLCBjICogKDEgLSBrKSArIGspO1xuXHRnID0gMSAtIE1hdGgubWluKDEsIG0gKiAoMSAtIGspICsgayk7XG5cdGIgPSAxIC0gTWF0aC5taW4oMSwgeSAqICgxIC0gaykgKyBrKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC54eXoucmdiID0gZnVuY3Rpb24gKHh5eikge1xuXHR2YXIgeCA9IHh5elswXSAvIDEwMDtcblx0dmFyIHkgPSB4eXpbMV0gLyAxMDA7XG5cdHZhciB6ID0geHl6WzJdIC8gMTAwO1xuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXG5cdHIgPSAoeCAqIDMuMjQwNikgKyAoeSAqIC0xLjUzNzIpICsgKHogKiAtMC40OTg2KTtcblx0ZyA9ICh4ICogLTAuOTY4OSkgKyAoeSAqIDEuODc1OCkgKyAoeiAqIDAuMDQxNSk7XG5cdGIgPSAoeCAqIDAuMDU1NykgKyAoeSAqIC0wLjIwNDApICsgKHogKiAxLjA1NzApO1xuXG5cdC8vIGFzc3VtZSBzUkdCXG5cdHIgPSByID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3cociwgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IHIgKiAxMi45MjtcblxuXHRnID0gZyA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KGcsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiBnICogMTIuOTI7XG5cblx0YiA9IGIgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhiLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogYiAqIDEyLjkyO1xuXG5cdHIgPSBNYXRoLm1pbihNYXRoLm1heCgwLCByKSwgMSk7XG5cdGcgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBnKSwgMSk7XG5cdGIgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBiKSwgMSk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQueHl6LmxhYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0dmFyIHggPSB4eXpbMF07XG5cdHZhciB5ID0geHl6WzFdO1xuXHR2YXIgeiA9IHh5elsyXTtcblx0dmFyIGw7XG5cdHZhciBhO1xuXHR2YXIgYjtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeCwgMSAvIDMpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuXHR5ID0geSA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeSwgMSAvIDMpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuXHR6ID0geiA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeiwgMSAvIDMpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGwgPSAoMTE2ICogeSkgLSAxNjtcblx0YSA9IDUwMCAqICh4IC0geSk7XG5cdGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LmxhYi54eXogPSBmdW5jdGlvbiAobGFiKSB7XG5cdHZhciBsID0gbGFiWzBdO1xuXHR2YXIgYSA9IGxhYlsxXTtcblx0dmFyIGIgPSBsYWJbMl07XG5cdHZhciB4O1xuXHR2YXIgeTtcblx0dmFyIHo7XG5cblx0eSA9IChsICsgMTYpIC8gMTE2O1xuXHR4ID0gYSAvIDUwMCArIHk7XG5cdHogPSB5IC0gYiAvIDIwMDtcblxuXHR2YXIgeTIgPSBNYXRoLnBvdyh5LCAzKTtcblx0dmFyIHgyID0gTWF0aC5wb3coeCwgMyk7XG5cdHZhciB6MiA9IE1hdGgucG93KHosIDMpO1xuXHR5ID0geTIgPiAwLjAwODg1NiA/IHkyIDogKHkgLSAxNiAvIDExNikgLyA3Ljc4Nztcblx0eCA9IHgyID4gMC4wMDg4NTYgPyB4MiA6ICh4IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cdHogPSB6MiA+IDAuMDA4ODU2ID8gejIgOiAoeiAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXG5cdHggKj0gOTUuMDQ3O1xuXHR5ICo9IDEwMDtcblx0eiAqPSAxMDguODgzO1xuXG5cdHJldHVybiBbeCwgeSwgel07XG59O1xuXG5jb252ZXJ0LmxhYi5sY2ggPSBmdW5jdGlvbiAobGFiKSB7XG5cdHZhciBsID0gbGFiWzBdO1xuXHR2YXIgYSA9IGxhYlsxXTtcblx0dmFyIGIgPSBsYWJbMl07XG5cdHZhciBocjtcblx0dmFyIGg7XG5cdHZhciBjO1xuXG5cdGhyID0gTWF0aC5hdGFuMihiLCBhKTtcblx0aCA9IGhyICogMzYwIC8gMiAvIE1hdGguUEk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXG5cdHJldHVybiBbbCwgYywgaF07XG59O1xuXG5jb252ZXJ0LmxjaC5sYWIgPSBmdW5jdGlvbiAobGNoKSB7XG5cdHZhciBsID0gbGNoWzBdO1xuXHR2YXIgYyA9IGxjaFsxXTtcblx0dmFyIGggPSBsY2hbMl07XG5cdHZhciBhO1xuXHR2YXIgYjtcblx0dmFyIGhyO1xuXG5cdGhyID0gaCAvIDM2MCAqIDIgKiBNYXRoLlBJO1xuXHRhID0gYyAqIE1hdGguY29zKGhyKTtcblx0YiA9IGMgKiBNYXRoLnNpbihocik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmFuc2kxNiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciByID0gYXJnc1swXTtcblx0dmFyIGcgPSBhcmdzWzFdO1xuXHR2YXIgYiA9IGFyZ3NbMl07XG5cdHZhciB2YWx1ZSA9IDEgaW4gYXJndW1lbnRzID8gYXJndW1lbnRzWzFdIDogY29udmVydC5yZ2IuaHN2KGFyZ3MpWzJdOyAvLyBoc3YgLT4gYW5zaTE2IG9wdGltaXphdGlvblxuXG5cdHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAvIDUwKTtcblxuXHRpZiAodmFsdWUgPT09IDApIHtcblx0XHRyZXR1cm4gMzA7XG5cdH1cblxuXHR2YXIgYW5zaSA9IDMwXG5cdFx0KyAoKE1hdGgucm91bmQoYiAvIDI1NSkgPDwgMilcblx0XHR8IChNYXRoLnJvdW5kKGcgLyAyNTUpIDw8IDEpXG5cdFx0fCBNYXRoLnJvdW5kKHIgLyAyNTUpKTtcblxuXHRpZiAodmFsdWUgPT09IDIpIHtcblx0XHRhbnNpICs9IDYwO1xuXHR9XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0Lmhzdi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBvcHRpbWl6YXRpb24gaGVyZTsgd2UgYWxyZWFkeSBrbm93IHRoZSB2YWx1ZSBhbmQgZG9uJ3QgbmVlZCB0byBnZXRcblx0Ly8gaXQgY29udmVydGVkIGZvciB1cy5cblx0cmV0dXJuIGNvbnZlcnQucmdiLmFuc2kxNihjb252ZXJ0Lmhzdi5yZ2IoYXJncyksIGFyZ3NbMl0pO1xufTtcblxuY29udmVydC5yZ2IuYW5zaTI1NiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciByID0gYXJnc1swXTtcblx0dmFyIGcgPSBhcmdzWzFdO1xuXHR2YXIgYiA9IGFyZ3NbMl07XG5cblx0Ly8gd2UgdXNlIHRoZSBleHRlbmRlZCBncmV5c2NhbGUgcGFsZXR0ZSBoZXJlLCB3aXRoIHRoZSBleGNlcHRpb24gb2Zcblx0Ly8gYmxhY2sgYW5kIHdoaXRlLiBub3JtYWwgcGFsZXR0ZSBvbmx5IGhhcyA0IGdyZXlzY2FsZSBzaGFkZXMuXG5cdGlmIChyID09PSBnICYmIGcgPT09IGIpIHtcblx0XHRpZiAociA8IDgpIHtcblx0XHRcdHJldHVybiAxNjtcblx0XHR9XG5cblx0XHRpZiAociA+IDI0OCkge1xuXHRcdFx0cmV0dXJuIDIzMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgoKHIgLSA4KSAvIDI0NykgKiAyNCkgKyAyMzI7XG5cdH1cblxuXHR2YXIgYW5zaSA9IDE2XG5cdFx0KyAoMzYgKiBNYXRoLnJvdW5kKHIgLyAyNTUgKiA1KSlcblx0XHQrICg2ICogTWF0aC5yb3VuZChnIC8gMjU1ICogNSkpXG5cdFx0KyBNYXRoLnJvdW5kKGIgLyAyNTUgKiA1KTtcblxuXHRyZXR1cm4gYW5zaTtcbn07XG5cbmNvbnZlcnQuYW5zaTE2LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBjb2xvciA9IGFyZ3MgJSAxMDtcblxuXHQvLyBoYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChjb2xvciA9PT0gMCB8fCBjb2xvciA9PT0gNykge1xuXHRcdGlmIChhcmdzID4gNTApIHtcblx0XHRcdGNvbG9yICs9IDMuNTtcblx0XHR9XG5cblx0XHRjb2xvciA9IGNvbG9yIC8gMTAuNSAqIDI1NTtcblxuXHRcdHJldHVybiBbY29sb3IsIGNvbG9yLCBjb2xvcl07XG5cdH1cblxuXHR2YXIgbXVsdCA9ICh+fihhcmdzID4gNTApICsgMSkgKiAwLjU7XG5cdHZhciByID0gKChjb2xvciAmIDEpICogbXVsdCkgKiAyNTU7XG5cdHZhciBnID0gKCgoY29sb3IgPj4gMSkgJiAxKSAqIG11bHQpICogMjU1O1xuXHR2YXIgYiA9ICgoKGNvbG9yID4+IDIpICYgMSkgKiBtdWx0KSAqIDI1NTtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5hbnNpMjU2LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdC8vIGhhbmRsZSBncmV5c2NhbGVcblx0aWYgKGFyZ3MgPj0gMjMyKSB7XG5cdFx0dmFyIGMgPSAoYXJncyAtIDIzMikgKiAxMCArIDg7XG5cdFx0cmV0dXJuIFtjLCBjLCBjXTtcblx0fVxuXG5cdGFyZ3MgLT0gMTY7XG5cblx0dmFyIHJlbTtcblx0dmFyIHIgPSBNYXRoLmZsb29yKGFyZ3MgLyAzNikgLyA1ICogMjU1O1xuXHR2YXIgZyA9IE1hdGguZmxvb3IoKHJlbSA9IGFyZ3MgJSAzNikgLyA2KSAvIDUgKiAyNTU7XG5cdHZhciBiID0gKHJlbSAlIDYpIC8gNSAqIDI1NTtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5yZ2IuaGV4ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIGludGVnZXIgPSAoKE1hdGgucm91bmQoYXJnc1swXSkgJiAweEZGKSA8PCAxNilcblx0XHQrICgoTWF0aC5yb3VuZChhcmdzWzFdKSAmIDB4RkYpIDw8IDgpXG5cdFx0KyAoTWF0aC5yb3VuZChhcmdzWzJdKSAmIDB4RkYpO1xuXG5cdHZhciBzdHJpbmcgPSBpbnRlZ2VyLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHRyZXR1cm4gJzAwMDAwMCcuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpICsgc3RyaW5nO1xufTtcblxuY29udmVydC5oZXgucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIG1hdGNoID0gYXJncy50b1N0cmluZygxNikubWF0Y2goL1thLWYwLTldezZ9fFthLWYwLTldezN9L2kpO1xuXHRpZiAoIW1hdGNoKSB7XG5cdFx0cmV0dXJuIFswLCAwLCAwXTtcblx0fVxuXG5cdHZhciBjb2xvclN0cmluZyA9IG1hdGNoWzBdO1xuXG5cdGlmIChtYXRjaFswXS5sZW5ndGggPT09IDMpIHtcblx0XHRjb2xvclN0cmluZyA9IGNvbG9yU3RyaW5nLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGNoYXIpIHtcblx0XHRcdHJldHVybiBjaGFyICsgY2hhcjtcblx0XHR9KS5qb2luKCcnKTtcblx0fVxuXG5cdHZhciBpbnRlZ2VyID0gcGFyc2VJbnQoY29sb3JTdHJpbmcsIDE2KTtcblx0dmFyIHIgPSAoaW50ZWdlciA+PiAxNikgJiAweEZGO1xuXHR2YXIgZyA9IChpbnRlZ2VyID4+IDgpICYgMHhGRjtcblx0dmFyIGIgPSBpbnRlZ2VyICYgMHhGRjtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5yZ2IuaGNnID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgoTWF0aC5tYXgociwgZyksIGIpO1xuXHR2YXIgbWluID0gTWF0aC5taW4oTWF0aC5taW4ociwgZyksIGIpO1xuXHR2YXIgY2hyb21hID0gKG1heCAtIG1pbik7XG5cdHZhciBncmF5c2NhbGU7XG5cdHZhciBodWU7XG5cblx0aWYgKGNocm9tYSA8IDEpIHtcblx0XHRncmF5c2NhbGUgPSBtaW4gLyAoMSAtIGNocm9tYSk7XG5cdH0gZWxzZSB7XG5cdFx0Z3JheXNjYWxlID0gMDtcblx0fVxuXG5cdGlmIChjaHJvbWEgPD0gMCkge1xuXHRcdGh1ZSA9IDA7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSByKSB7XG5cdFx0aHVlID0gKChnIC0gYikgLyBjaHJvbWEpICUgNjtcblx0fSBlbHNlXG5cdGlmIChtYXggPT09IGcpIHtcblx0XHRodWUgPSAyICsgKGIgLSByKSAvIGNocm9tYTtcblx0fSBlbHNlIHtcblx0XHRodWUgPSA0ICsgKHIgLSBnKSAvIGNocm9tYSArIDQ7XG5cdH1cblxuXHRodWUgLz0gNjtcblx0aHVlICU9IDE7XG5cblx0cmV0dXJuIFtodWUgKiAzNjAsIGNocm9tYSAqIDEwMCwgZ3JheXNjYWxlICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHNsLmhjZyA9IGZ1bmN0aW9uIChoc2wpIHtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgYyA9IDE7XG5cdHZhciBmID0gMDtcblxuXHRpZiAobCA8IDAuNSkge1xuXHRcdGMgPSAyLjAgKiBzICogbDtcblx0fSBlbHNlIHtcblx0XHRjID0gMi4wICogcyAqICgxLjAgLSBsKTtcblx0fVxuXG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9IChsIC0gMC41ICogYykgLyAoMS4wIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2hzbFswXSwgYyAqIDEwMCwgZiAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmhzdi5oY2cgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblxuXHR2YXIgYyA9IHMgKiB2O1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKGMgPCAxLjApIHtcblx0XHRmID0gKHYgLSBjKSAvICgxIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2hzdlswXSwgYyAqIDEwMCwgZiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5yZ2IgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBoID0gaGNnWzBdIC8gMzYwO1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0aWYgKGMgPT09IDAuMCkge1xuXHRcdHJldHVybiBbZyAqIDI1NSwgZyAqIDI1NSwgZyAqIDI1NV07XG5cdH1cblxuXHR2YXIgcHVyZSA9IFswLCAwLCAwXTtcblx0dmFyIGhpID0gKGggJSAxKSAqIDY7XG5cdHZhciB2ID0gaGkgJSAxO1xuXHR2YXIgdyA9IDEgLSB2O1xuXHR2YXIgbWcgPSAwO1xuXG5cdHN3aXRjaCAoTWF0aC5mbG9vcihoaSkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRwdXJlWzBdID0gMTsgcHVyZVsxXSA9IHY7IHB1cmVbMl0gPSAwOyBicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHRwdXJlWzBdID0gdzsgcHVyZVsxXSA9IDE7IHB1cmVbMl0gPSAwOyBicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHRwdXJlWzBdID0gMDsgcHVyZVsxXSA9IDE7IHB1cmVbMl0gPSB2OyBicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHRwdXJlWzBdID0gMDsgcHVyZVsxXSA9IHc7IHB1cmVbMl0gPSAxOyBicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHRwdXJlWzBdID0gdjsgcHVyZVsxXSA9IDA7IHB1cmVbMl0gPSAxOyBicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0cHVyZVswXSA9IDE7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gdztcblx0fVxuXG5cdG1nID0gKDEuMCAtIGMpICogZztcblxuXHRyZXR1cm4gW1xuXHRcdChjICogcHVyZVswXSArIG1nKSAqIDI1NSxcblx0XHQoYyAqIHB1cmVbMV0gKyBtZykgKiAyNTUsXG5cdFx0KGMgKiBwdXJlWzJdICsgbWcpICogMjU1XG5cdF07XG59O1xuXG5jb252ZXJ0LmhjZy5oc3YgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHR2YXIgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKHYgPiAwLjApIHtcblx0XHRmID0gYyAvIHY7XG5cdH1cblxuXHRyZXR1cm4gW2hjZ1swXSwgZiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5oc2wgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHR2YXIgbCA9IGcgKiAoMS4wIC0gYykgKyAwLjUgKiBjO1xuXHR2YXIgcyA9IDA7XG5cblx0aWYgKGwgPiAwLjAgJiYgbCA8IDAuNSkge1xuXHRcdHMgPSBjIC8gKDIgKiBsKTtcblx0fSBlbHNlXG5cdGlmIChsID49IDAuNSAmJiBsIDwgMS4wKSB7XG5cdFx0cyA9IGMgLyAoMiAqICgxIC0gbCkpO1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cuaHdiID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cdHZhciB2ID0gYyArIGcgKiAoMS4wIC0gYyk7XG5cdHJldHVybiBbaGNnWzBdLCAodiAtIGMpICogMTAwLCAoMSAtIHYpICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHdiLmhjZyA9IGZ1bmN0aW9uIChod2IpIHtcblx0dmFyIHcgPSBod2JbMV0gLyAxMDA7XG5cdHZhciBiID0gaHdiWzJdIC8gMTAwO1xuXHR2YXIgdiA9IDEgLSBiO1xuXHR2YXIgYyA9IHYgLSB3O1xuXHR2YXIgZyA9IDA7XG5cblx0aWYgKGMgPCAxKSB7XG5cdFx0ZyA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtod2JbMF0sIGMgKiAxMDAsIGcgKiAxMDBdO1xufTtcblxuY29udmVydC5hcHBsZS5yZ2IgPSBmdW5jdGlvbiAoYXBwbGUpIHtcblx0cmV0dXJuIFsoYXBwbGVbMF0gLyA2NTUzNSkgKiAyNTUsIChhcHBsZVsxXSAvIDY1NTM1KSAqIDI1NSwgKGFwcGxlWzJdIC8gNjU1MzUpICogMjU1XTtcbn07XG5cbmNvbnZlcnQucmdiLmFwcGxlID0gZnVuY3Rpb24gKHJnYikge1xuXHRyZXR1cm4gWyhyZ2JbMF0gLyAyNTUpICogNjU1MzUsIChyZ2JbMV0gLyAyNTUpICogNjU1MzUsIChyZ2JbMl0gLyAyNTUpICogNjU1MzVdO1xufTtcblxuY29udmVydC5ncmF5LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHJldHVybiBbYXJnc1swXSAvIDEwMCAqIDI1NSwgYXJnc1swXSAvIDEwMCAqIDI1NSwgYXJnc1swXSAvIDEwMCAqIDI1NV07XG59O1xuXG5jb252ZXJ0LmdyYXkuaHNsID0gY29udmVydC5ncmF5LmhzdiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHJldHVybiBbMCwgMCwgYXJnc1swXV07XG59O1xuXG5jb252ZXJ0LmdyYXkuaHdiID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFswLCAxMDAsIGdyYXlbMF1dO1xufTtcblxuY29udmVydC5ncmF5LmNteWsgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gWzAsIDAsIDAsIGdyYXlbMF1dO1xufTtcblxuY29udmVydC5ncmF5LmxhYiA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbZ3JheVswXSwgMCwgMF07XG59O1xuXG5jb252ZXJ0LmdyYXkuaGV4ID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0dmFyIHZhbCA9IE1hdGgucm91bmQoZ3JheVswXSAvIDEwMCAqIDI1NSkgJiAweEZGO1xuXHR2YXIgaW50ZWdlciA9ICh2YWwgPDwgMTYpICsgKHZhbCA8PCA4KSArIHZhbDtcblxuXHR2YXIgc3RyaW5nID0gaW50ZWdlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuICcwMDAwMDAnLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn07XG5cbmNvbnZlcnQucmdiLmdyYXkgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciB2YWwgPSAocmdiWzBdICsgcmdiWzFdICsgcmdiWzJdKSAvIDM7XG5cdHJldHVybiBbdmFsIC8gMjU1ICogMTAwXTtcbn07XG4iLCJ2YXIgY29udmVyc2lvbnMgPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJyk7XG52YXIgcm91dGUgPSByZXF1aXJlKCcuL3JvdXRlJyk7XG5cbnZhciBjb252ZXJ0ID0ge307XG5cbnZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9ucyk7XG5cbmZ1bmN0aW9uIHdyYXBSYXcoZm4pIHtcblx0dmFyIHdyYXBwZWRGbiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0aWYgKGFyZ3MgPT09IHVuZGVmaW5lZCB8fCBhcmdzID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gYXJncztcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmbihhcmdzKTtcblx0fTtcblxuXHQvLyBwcmVzZXJ2ZSAuY29udmVyc2lvbiBwcm9wZXJ0eSBpZiB0aGVyZSBpcyBvbmVcblx0aWYgKCdjb252ZXJzaW9uJyBpbiBmbikge1xuXHRcdHdyYXBwZWRGbi5jb252ZXJzaW9uID0gZm4uY29udmVyc2lvbjtcblx0fVxuXG5cdHJldHVybiB3cmFwcGVkRm47XG59XG5cbmZ1bmN0aW9uIHdyYXBSb3VuZGVkKGZuKSB7XG5cdHZhciB3cmFwcGVkRm4gPSBmdW5jdGlvbiAoYXJncykge1xuXHRcdGlmIChhcmdzID09PSB1bmRlZmluZWQgfHwgYXJncyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGFyZ3M7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblx0XHR9XG5cblx0XHR2YXIgcmVzdWx0ID0gZm4oYXJncyk7XG5cblx0XHQvLyB3ZSdyZSBhc3N1bWluZyB0aGUgcmVzdWx0IGlzIGFuIGFycmF5IGhlcmUuXG5cdFx0Ly8gc2VlIG5vdGljZSBpbiBjb252ZXJzaW9ucy5qczsgZG9uJ3QgdXNlIGJveCB0eXBlc1xuXHRcdC8vIGluIGNvbnZlcnNpb24gZnVuY3Rpb25zLlxuXHRcdGlmICh0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Zm9yICh2YXIgbGVuID0gcmVzdWx0Lmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRyZXN1bHRbaV0gPSBNYXRoLnJvdW5kKHJlc3VsdFtpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHQvLyBwcmVzZXJ2ZSAuY29udmVyc2lvbiBwcm9wZXJ0eSBpZiB0aGVyZSBpcyBvbmVcblx0aWYgKCdjb252ZXJzaW9uJyBpbiBmbikge1xuXHRcdHdyYXBwZWRGbi5jb252ZXJzaW9uID0gZm4uY29udmVyc2lvbjtcblx0fVxuXG5cdHJldHVybiB3cmFwcGVkRm47XG59XG5cbm1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uIChmcm9tTW9kZWwpIHtcblx0Y29udmVydFtmcm9tTW9kZWxdID0ge307XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbZnJvbU1vZGVsXSwgJ2NoYW5uZWxzJywge3ZhbHVlOiBjb252ZXJzaW9uc1tmcm9tTW9kZWxdLmNoYW5uZWxzfSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W2Zyb21Nb2RlbF0sICdsYWJlbHMnLCB7dmFsdWU6IGNvbnZlcnNpb25zW2Zyb21Nb2RlbF0ubGFiZWxzfSk7XG5cblx0dmFyIHJvdXRlcyA9IHJvdXRlKGZyb21Nb2RlbCk7XG5cdHZhciByb3V0ZU1vZGVscyA9IE9iamVjdC5rZXlzKHJvdXRlcyk7XG5cblx0cm91dGVNb2RlbHMuZm9yRWFjaChmdW5jdGlvbiAodG9Nb2RlbCkge1xuXHRcdHZhciBmbiA9IHJvdXRlc1t0b01vZGVsXTtcblxuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXSA9IHdyYXBSb3VuZGVkKGZuKTtcblx0XHRjb252ZXJ0W2Zyb21Nb2RlbF1bdG9Nb2RlbF0ucmF3ID0gd3JhcFJhdyhmbik7XG5cdH0pO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gY29udmVydDtcbiIsInZhciBjb252ZXJzaW9ucyA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKTtcblxuLypcblx0dGhpcyBmdW5jdGlvbiByb3V0ZXMgYSBtb2RlbCB0byBhbGwgb3RoZXIgbW9kZWxzLlxuXG5cdGFsbCBmdW5jdGlvbnMgdGhhdCBhcmUgcm91dGVkIGhhdmUgYSBwcm9wZXJ0eSBgLmNvbnZlcnNpb25gIGF0dGFjaGVkXG5cdHRvIHRoZSByZXR1cm5lZCBzeW50aGV0aWMgZnVuY3Rpb24uIFRoaXMgcHJvcGVydHkgaXMgYW4gYXJyYXlcblx0b2Ygc3RyaW5ncywgZWFjaCB3aXRoIHRoZSBzdGVwcyBpbiBiZXR3ZWVuIHRoZSAnZnJvbScgYW5kICd0bydcblx0Y29sb3IgbW9kZWxzIChpbmNsdXNpdmUpLlxuXG5cdGNvbnZlcnNpb25zIHRoYXQgYXJlIG5vdCBwb3NzaWJsZSBzaW1wbHkgYXJlIG5vdCBpbmNsdWRlZC5cbiovXG5cbmZ1bmN0aW9uIGJ1aWxkR3JhcGgoKSB7XG5cdHZhciBncmFwaCA9IHt9O1xuXHQvLyBodHRwczovL2pzcGVyZi5jb20vb2JqZWN0LWtleXMtdnMtZm9yLWluLXdpdGgtY2xvc3VyZS8zXG5cdHZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9ucyk7XG5cblx0Zm9yICh2YXIgbGVuID0gbW9kZWxzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdGdyYXBoW21vZGVsc1tpXV0gPSB7XG5cdFx0XHQvLyBodHRwOi8vanNwZXJmLmNvbS8xLXZzLWluZmluaXR5XG5cdFx0XHQvLyBtaWNyby1vcHQsIGJ1dCB0aGlzIGlzIHNpbXBsZS5cblx0XHRcdGRpc3RhbmNlOiAtMSxcblx0XHRcdHBhcmVudDogbnVsbFxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4gZ3JhcGg7XG59XG5cbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0JyZWFkdGgtZmlyc3Rfc2VhcmNoXG5mdW5jdGlvbiBkZXJpdmVCRlMoZnJvbU1vZGVsKSB7XG5cdHZhciBncmFwaCA9IGJ1aWxkR3JhcGgoKTtcblx0dmFyIHF1ZXVlID0gW2Zyb21Nb2RlbF07IC8vIHVuc2hpZnQgLT4gcXVldWUgLT4gcG9wXG5cblx0Z3JhcGhbZnJvbU1vZGVsXS5kaXN0YW5jZSA9IDA7XG5cblx0d2hpbGUgKHF1ZXVlLmxlbmd0aCkge1xuXHRcdHZhciBjdXJyZW50ID0gcXVldWUucG9wKCk7XG5cdFx0dmFyIGFkamFjZW50cyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zW2N1cnJlbnRdKTtcblxuXHRcdGZvciAodmFyIGxlbiA9IGFkamFjZW50cy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdHZhciBhZGphY2VudCA9IGFkamFjZW50c1tpXTtcblx0XHRcdHZhciBub2RlID0gZ3JhcGhbYWRqYWNlbnRdO1xuXG5cdFx0XHRpZiAobm9kZS5kaXN0YW5jZSA9PT0gLTEpIHtcblx0XHRcdFx0bm9kZS5kaXN0YW5jZSA9IGdyYXBoW2N1cnJlbnRdLmRpc3RhbmNlICsgMTtcblx0XHRcdFx0bm9kZS5wYXJlbnQgPSBjdXJyZW50O1xuXHRcdFx0XHRxdWV1ZS51bnNoaWZ0KGFkamFjZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZ3JhcGg7XG59XG5cbmZ1bmN0aW9uIGxpbmsoZnJvbSwgdG8pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0cmV0dXJuIHRvKGZyb20oYXJncykpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiB3cmFwQ29udmVyc2lvbih0b01vZGVsLCBncmFwaCkge1xuXHR2YXIgcGF0aCA9IFtncmFwaFt0b01vZGVsXS5wYXJlbnQsIHRvTW9kZWxdO1xuXHR2YXIgZm4gPSBjb252ZXJzaW9uc1tncmFwaFt0b01vZGVsXS5wYXJlbnRdW3RvTW9kZWxdO1xuXG5cdHZhciBjdXIgPSBncmFwaFt0b01vZGVsXS5wYXJlbnQ7XG5cdHdoaWxlIChncmFwaFtjdXJdLnBhcmVudCkge1xuXHRcdHBhdGgudW5zaGlmdChncmFwaFtjdXJdLnBhcmVudCk7XG5cdFx0Zm4gPSBsaW5rKGNvbnZlcnNpb25zW2dyYXBoW2N1cl0ucGFyZW50XVtjdXJdLCBmbik7XG5cdFx0Y3VyID0gZ3JhcGhbY3VyXS5wYXJlbnQ7XG5cdH1cblxuXHRmbi5jb252ZXJzaW9uID0gcGF0aDtcblx0cmV0dXJuIGZuO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmcm9tTW9kZWwpIHtcblx0dmFyIGdyYXBoID0gZGVyaXZlQkZTKGZyb21Nb2RlbCk7XG5cdHZhciBjb252ZXJzaW9uID0ge307XG5cblx0dmFyIG1vZGVscyA9IE9iamVjdC5rZXlzKGdyYXBoKTtcblx0Zm9yICh2YXIgbGVuID0gbW9kZWxzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdHZhciB0b01vZGVsID0gbW9kZWxzW2ldO1xuXHRcdHZhciBub2RlID0gZ3JhcGhbdG9Nb2RlbF07XG5cblx0XHRpZiAobm9kZS5wYXJlbnQgPT09IG51bGwpIHtcblx0XHRcdC8vIG5vIHBvc3NpYmxlIGNvbnZlcnNpb24sIG9yIHRoaXMgbm9kZSBpcyB0aGUgc291cmNlIG1vZGVsLlxuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29udmVyc2lvblt0b01vZGVsXSA9IHdyYXBDb252ZXJzaW9uKHRvTW9kZWwsIGdyYXBoKTtcblx0fVxuXG5cdHJldHVybiBjb252ZXJzaW9uO1xufTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0XCJhbGljZWJsdWVcIjogWzI0MCwgMjQ4LCAyNTVdLFxyXG5cdFwiYW50aXF1ZXdoaXRlXCI6IFsyNTAsIDIzNSwgMjE1XSxcclxuXHRcImFxdWFcIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImFxdWFtYXJpbmVcIjogWzEyNywgMjU1LCAyMTJdLFxyXG5cdFwiYXp1cmVcIjogWzI0MCwgMjU1LCAyNTVdLFxyXG5cdFwiYmVpZ2VcIjogWzI0NSwgMjQ1LCAyMjBdLFxyXG5cdFwiYmlzcXVlXCI6IFsyNTUsIDIyOCwgMTk2XSxcclxuXHRcImJsYWNrXCI6IFswLCAwLCAwXSxcclxuXHRcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsIDIzNSwgMjA1XSxcclxuXHRcImJsdWVcIjogWzAsIDAsIDI1NV0sXHJcblx0XCJibHVldmlvbGV0XCI6IFsxMzgsIDQzLCAyMjZdLFxyXG5cdFwiYnJvd25cIjogWzE2NSwgNDIsIDQyXSxcclxuXHRcImJ1cmx5d29vZFwiOiBbMjIyLCAxODQsIDEzNV0sXHJcblx0XCJjYWRldGJsdWVcIjogWzk1LCAxNTgsIDE2MF0sXHJcblx0XCJjaGFydHJldXNlXCI6IFsxMjcsIDI1NSwgMF0sXHJcblx0XCJjaG9jb2xhdGVcIjogWzIxMCwgMTA1LCAzMF0sXHJcblx0XCJjb3JhbFwiOiBbMjU1LCAxMjcsIDgwXSxcclxuXHRcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsIDE0OSwgMjM3XSxcclxuXHRcImNvcm5zaWxrXCI6IFsyNTUsIDI0OCwgMjIwXSxcclxuXHRcImNyaW1zb25cIjogWzIyMCwgMjAsIDYwXSxcclxuXHRcImN5YW5cIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImRhcmtibHVlXCI6IFswLCAwLCAxMzldLFxyXG5cdFwiZGFya2N5YW5cIjogWzAsIDEzOSwgMTM5XSxcclxuXHRcImRhcmtnb2xkZW5yb2RcIjogWzE4NCwgMTM0LCAxMV0sXHJcblx0XCJkYXJrZ3JheVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJrZ3JlZW5cIjogWzAsIDEwMCwgMF0sXHJcblx0XCJkYXJrZ3JleVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJra2hha2lcIjogWzE4OSwgMTgzLCAxMDddLFxyXG5cdFwiZGFya21hZ2VudGFcIjogWzEzOSwgMCwgMTM5XSxcclxuXHRcImRhcmtvbGl2ZWdyZWVuXCI6IFs4NSwgMTA3LCA0N10sXHJcblx0XCJkYXJrb3JhbmdlXCI6IFsyNTUsIDE0MCwgMF0sXHJcblx0XCJkYXJrb3JjaGlkXCI6IFsxNTMsIDUwLCAyMDRdLFxyXG5cdFwiZGFya3JlZFwiOiBbMTM5LCAwLCAwXSxcclxuXHRcImRhcmtzYWxtb25cIjogWzIzMywgMTUwLCAxMjJdLFxyXG5cdFwiZGFya3NlYWdyZWVuXCI6IFsxNDMsIDE4OCwgMTQzXSxcclxuXHRcImRhcmtzbGF0ZWJsdWVcIjogWzcyLCA2MSwgMTM5XSxcclxuXHRcImRhcmtzbGF0ZWdyYXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3NsYXRlZ3JleVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrdHVycXVvaXNlXCI6IFswLCAyMDYsIDIwOV0sXHJcblx0XCJkYXJrdmlvbGV0XCI6IFsxNDgsIDAsIDIxMV0sXHJcblx0XCJkZWVwcGlua1wiOiBbMjU1LCAyMCwgMTQ3XSxcclxuXHRcImRlZXBza3libHVlXCI6IFswLCAxOTEsIDI1NV0sXHJcblx0XCJkaW1ncmF5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRpbWdyZXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZG9kZ2VyYmx1ZVwiOiBbMzAsIDE0NCwgMjU1XSxcclxuXHRcImZpcmVicmlja1wiOiBbMTc4LCAzNCwgMzRdLFxyXG5cdFwiZmxvcmFsd2hpdGVcIjogWzI1NSwgMjUwLCAyNDBdLFxyXG5cdFwiZm9yZXN0Z3JlZW5cIjogWzM0LCAxMzksIDM0XSxcclxuXHRcImZ1Y2hzaWFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcImdhaW5zYm9yb1wiOiBbMjIwLCAyMjAsIDIyMF0sXHJcblx0XCJnaG9zdHdoaXRlXCI6IFsyNDgsIDI0OCwgMjU1XSxcclxuXHRcImdvbGRcIjogWzI1NSwgMjE1LCAwXSxcclxuXHRcImdvbGRlbnJvZFwiOiBbMjE4LCAxNjUsIDMyXSxcclxuXHRcImdyYXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiZ3JlZW5cIjogWzAsIDEyOCwgMF0sXHJcblx0XCJncmVlbnllbGxvd1wiOiBbMTczLCAyNTUsIDQ3XSxcclxuXHRcImdyZXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiaG9uZXlkZXdcIjogWzI0MCwgMjU1LCAyNDBdLFxyXG5cdFwiaG90cGlua1wiOiBbMjU1LCAxMDUsIDE4MF0sXHJcblx0XCJpbmRpYW5yZWRcIjogWzIwNSwgOTIsIDkyXSxcclxuXHRcImluZGlnb1wiOiBbNzUsIDAsIDEzMF0sXHJcblx0XCJpdm9yeVwiOiBbMjU1LCAyNTUsIDI0MF0sXHJcblx0XCJraGFraVwiOiBbMjQwLCAyMzAsIDE0MF0sXHJcblx0XCJsYXZlbmRlclwiOiBbMjMwLCAyMzAsIDI1MF0sXHJcblx0XCJsYXZlbmRlcmJsdXNoXCI6IFsyNTUsIDI0MCwgMjQ1XSxcclxuXHRcImxhd25ncmVlblwiOiBbMTI0LCAyNTIsIDBdLFxyXG5cdFwibGVtb25jaGlmZm9uXCI6IFsyNTUsIDI1MCwgMjA1XSxcclxuXHRcImxpZ2h0Ymx1ZVwiOiBbMTczLCAyMTYsIDIzMF0sXHJcblx0XCJsaWdodGNvcmFsXCI6IFsyNDAsIDEyOCwgMTI4XSxcclxuXHRcImxpZ2h0Y3lhblwiOiBbMjI0LCAyNTUsIDI1NV0sXHJcblx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBbMjUwLCAyNTAsIDIxMF0sXHJcblx0XCJsaWdodGdyYXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRncmVlblwiOiBbMTQ0LCAyMzgsIDE0NF0sXHJcblx0XCJsaWdodGdyZXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRwaW5rXCI6IFsyNTUsIDE4MiwgMTkzXSxcclxuXHRcImxpZ2h0c2FsbW9uXCI6IFsyNTUsIDE2MCwgMTIyXSxcclxuXHRcImxpZ2h0c2VhZ3JlZW5cIjogWzMyLCAxNzgsIDE3MF0sXHJcblx0XCJsaWdodHNreWJsdWVcIjogWzEzNSwgMjA2LCAyNTBdLFxyXG5cdFwibGlnaHRzbGF0ZWdyYXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzbGF0ZWdyZXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzdGVlbGJsdWVcIjogWzE3NiwgMTk2LCAyMjJdLFxyXG5cdFwibGlnaHR5ZWxsb3dcIjogWzI1NSwgMjU1LCAyMjRdLFxyXG5cdFwibGltZVwiOiBbMCwgMjU1LCAwXSxcclxuXHRcImxpbWVncmVlblwiOiBbNTAsIDIwNSwgNTBdLFxyXG5cdFwibGluZW5cIjogWzI1MCwgMjQwLCAyMzBdLFxyXG5cdFwibWFnZW50YVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwibWFyb29uXCI6IFsxMjgsIDAsIDBdLFxyXG5cdFwibWVkaXVtYXF1YW1hcmluZVwiOiBbMTAyLCAyMDUsIDE3MF0sXHJcblx0XCJtZWRpdW1ibHVlXCI6IFswLCAwLCAyMDVdLFxyXG5cdFwibWVkaXVtb3JjaGlkXCI6IFsxODYsIDg1LCAyMTFdLFxyXG5cdFwibWVkaXVtcHVycGxlXCI6IFsxNDcsIDExMiwgMjE5XSxcclxuXHRcIm1lZGl1bXNlYWdyZWVuXCI6IFs2MCwgMTc5LCAxMTNdLFxyXG5cdFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsIDEwNCwgMjM4XSxcclxuXHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFswLCAyNTAsIDE1NF0sXHJcblx0XCJtZWRpdW10dXJxdW9pc2VcIjogWzcyLCAyMDksIDIwNF0sXHJcblx0XCJtZWRpdW12aW9sZXRyZWRcIjogWzE5OSwgMjEsIDEzM10sXHJcblx0XCJtaWRuaWdodGJsdWVcIjogWzI1LCAyNSwgMTEyXSxcclxuXHRcIm1pbnRjcmVhbVwiOiBbMjQ1LCAyNTUsIDI1MF0sXHJcblx0XCJtaXN0eXJvc2VcIjogWzI1NSwgMjI4LCAyMjVdLFxyXG5cdFwibW9jY2FzaW5cIjogWzI1NSwgMjI4LCAxODFdLFxyXG5cdFwibmF2YWpvd2hpdGVcIjogWzI1NSwgMjIyLCAxNzNdLFxyXG5cdFwibmF2eVwiOiBbMCwgMCwgMTI4XSxcclxuXHRcIm9sZGxhY2VcIjogWzI1MywgMjQ1LCAyMzBdLFxyXG5cdFwib2xpdmVcIjogWzEyOCwgMTI4LCAwXSxcclxuXHRcIm9saXZlZHJhYlwiOiBbMTA3LCAxNDIsIDM1XSxcclxuXHRcIm9yYW5nZVwiOiBbMjU1LCAxNjUsIDBdLFxyXG5cdFwib3JhbmdlcmVkXCI6IFsyNTUsIDY5LCAwXSxcclxuXHRcIm9yY2hpZFwiOiBbMjE4LCAxMTIsIDIxNF0sXHJcblx0XCJwYWxlZ29sZGVucm9kXCI6IFsyMzgsIDIzMiwgMTcwXSxcclxuXHRcInBhbGVncmVlblwiOiBbMTUyLCAyNTEsIDE1Ml0sXHJcblx0XCJwYWxldHVycXVvaXNlXCI6IFsxNzUsIDIzOCwgMjM4XSxcclxuXHRcInBhbGV2aW9sZXRyZWRcIjogWzIxOSwgMTEyLCAxNDddLFxyXG5cdFwicGFwYXlhd2hpcFwiOiBbMjU1LCAyMzksIDIxM10sXHJcblx0XCJwZWFjaHB1ZmZcIjogWzI1NSwgMjE4LCAxODVdLFxyXG5cdFwicGVydVwiOiBbMjA1LCAxMzMsIDYzXSxcclxuXHRcInBpbmtcIjogWzI1NSwgMTkyLCAyMDNdLFxyXG5cdFwicGx1bVwiOiBbMjIxLCAxNjAsIDIyMV0sXHJcblx0XCJwb3dkZXJibHVlXCI6IFsxNzYsIDIyNCwgMjMwXSxcclxuXHRcInB1cnBsZVwiOiBbMTI4LCAwLCAxMjhdLFxyXG5cdFwicmViZWNjYXB1cnBsZVwiOiBbMTAyLCA1MSwgMTUzXSxcclxuXHRcInJlZFwiOiBbMjU1LCAwLCAwXSxcclxuXHRcInJvc3licm93blwiOiBbMTg4LCAxNDMsIDE0M10sXHJcblx0XCJyb3lhbGJsdWVcIjogWzY1LCAxMDUsIDIyNV0sXHJcblx0XCJzYWRkbGVicm93blwiOiBbMTM5LCA2OSwgMTldLFxyXG5cdFwic2FsbW9uXCI6IFsyNTAsIDEyOCwgMTE0XSxcclxuXHRcInNhbmR5YnJvd25cIjogWzI0NCwgMTY0LCA5Nl0sXHJcblx0XCJzZWFncmVlblwiOiBbNDYsIDEzOSwgODddLFxyXG5cdFwic2Vhc2hlbGxcIjogWzI1NSwgMjQ1LCAyMzhdLFxyXG5cdFwic2llbm5hXCI6IFsxNjAsIDgyLCA0NV0sXHJcblx0XCJzaWx2ZXJcIjogWzE5MiwgMTkyLCAxOTJdLFxyXG5cdFwic2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDIzNV0sXHJcblx0XCJzbGF0ZWJsdWVcIjogWzEwNiwgOTAsIDIwNV0sXHJcblx0XCJzbGF0ZWdyYXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic2xhdGVncmV5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNub3dcIjogWzI1NSwgMjUwLCAyNTBdLFxyXG5cdFwic3ByaW5nZ3JlZW5cIjogWzAsIDI1NSwgMTI3XSxcclxuXHRcInN0ZWVsYmx1ZVwiOiBbNzAsIDEzMCwgMTgwXSxcclxuXHRcInRhblwiOiBbMjEwLCAxODAsIDE0MF0sXHJcblx0XCJ0ZWFsXCI6IFswLCAxMjgsIDEyOF0sXHJcblx0XCJ0aGlzdGxlXCI6IFsyMTYsIDE5MSwgMjE2XSxcclxuXHRcInRvbWF0b1wiOiBbMjU1LCA5OSwgNzFdLFxyXG5cdFwidHVycXVvaXNlXCI6IFs2NCwgMjI0LCAyMDhdLFxyXG5cdFwidmlvbGV0XCI6IFsyMzgsIDEzMCwgMjM4XSxcclxuXHRcIndoZWF0XCI6IFsyNDUsIDIyMiwgMTc5XSxcclxuXHRcIndoaXRlXCI6IFsyNTUsIDI1NSwgMjU1XSxcclxuXHRcIndoaXRlc21va2VcIjogWzI0NSwgMjQ1LCAyNDVdLFxyXG5cdFwieWVsbG93XCI6IFsyNTUsIDI1NSwgMF0sXHJcblx0XCJ5ZWxsb3dncmVlblwiOiBbMTU0LCAyMDUsIDUwXVxyXG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1hdGNoT3BlcmF0b3JzUmUgPSAvW3xcXFxce30oKVtcXF1eJCsqPy5dL2c7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cikge1xuXHRpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZycpO1xuXHR9XG5cblx0cmV0dXJuIHN0ci5yZXBsYWNlKG1hdGNoT3BlcmF0b3JzUmUsICdcXFxcJCYnKTtcbn07XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHN0ZG91dDogZmFsc2UsXG5cdHN0ZGVycjogZmFsc2Vcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9