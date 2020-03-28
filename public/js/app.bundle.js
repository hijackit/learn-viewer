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
/******/ 	__webpack_require__.p = "js";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/transformation-matrix/src/applyToPoint.js":
/*!****************************************************************!*\
  !*** ./node_modules/transformation-matrix/src/applyToPoint.js ***!
  \****************************************************************/
/*! exports provided: applyToPoint, applyToPoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyToPoint", function() { return applyToPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyToPoints", function() { return applyToPoints; });
/**
 * Calculate a point transformed with an affine matrix
 * @param matrix {Matrix} Affine Matrix
 * @param  point {Point} Point
 * @returns {Point} Point
 */
function applyToPoint (matrix, point) {
  return Array.isArray(point) ? [
    matrix.a * point[0] + matrix.c * point[1] + matrix.e,
    matrix.b * point[0] + matrix.d * point[1] + matrix.f
  ] : {
    x: matrix.a * point.x + matrix.c * point.y + matrix.e,
    y: matrix.b * point.x + matrix.d * point.y + matrix.f
  }
}

/**
 * Calculate an array of points transformed with an affine matrix
 * @param matrix {Matrix} Affine Matrix
 * @param points {Point[]} Array of point
 * @returns {Point[]} Array of point
 */
function applyToPoints (matrix, points) {
  return points.map(point => applyToPoint(matrix, point))
}


/***/ }),

/***/ "./node_modules/transformation-matrix/src/fromDefinition.js":
/*!******************************************************************!*\
  !*** ./node_modules/transformation-matrix/src/fromDefinition.js ***!
  \******************************************************************/
/*! exports provided: fromDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromDefinition", function() { return fromDefinition; });
/* harmony import */ var _fromObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromObject */ "./node_modules/transformation-matrix/src/fromObject.js");
/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translate */ "./node_modules/transformation-matrix/src/translate.js");
/* harmony import */ var _scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scale */ "./node_modules/transformation-matrix/src/scale.js");
/* harmony import */ var _rotate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rotate */ "./node_modules/transformation-matrix/src/rotate.js");
/* harmony import */ var _skew__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skew */ "./node_modules/transformation-matrix/src/skew.js");
/* harmony import */ var _shear__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shear */ "./node_modules/transformation-matrix/src/shear.js");







/**
 * Converts array of matrix descriptor to array of matrix
 * @param definitionOrArrayOfDefinition {Object[]} Array of object describing the matrix
 * @returns {Matrix[]} Array of matrix
 *
 * @example
 * > fromDefinition([
 *  { type: 'matrix', a:1, b:2, c:3, d:4, e:5, f:6 },
 *  { type: 'translate', tx: 10, ty: 20 },
 *  { type: 'scale', sx: 2, sy: 4 },
 *  { type: 'rotate', angle: 90, cx: 50, cy: 25 },
 *  { type: 'skewX', angle: 45 },
 *  { type: 'skewY',  angle: 45 },
 *  { type: 'shear', shx: 10, shy: 20}
 * ])
 *
 * [
 *  { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 },
 *  { a: 1, c: 0, e: 10, b: 0, d: 1, f: 20 },
 *  { a: 2, c: 0, e: 0, b: 0, d: 4, f: 0 },
 *  { a: 6.123, c: -1, e: 0, b: 1, d: 6.123, f: 0 },
 *  { a: 1, c: 0.99.., e: 0, b: 0, d: 1, f: 0 },
 *  { a: 1, c: 0, e: 0, b: 0.99, d: 1, f: 0 },
 *  { a: 1, c: 10, e: 0, b: 20, d: 1, f: 0 }
 * ]
 **/
function fromDefinition (definitionOrArrayOfDefinition) {
  return Array.isArray(definitionOrArrayOfDefinition)
    ? definitionOrArrayOfDefinition.map(mapper)
    : mapper(definitionOrArrayOfDefinition)

  function mapper (descriptor) {
    switch (descriptor.type) {
      case 'matrix':
        if ('a' in descriptor &&
          'b' in descriptor &&
          'c' in descriptor &&
          'd' in descriptor &&
          'e' in descriptor &&
          'f' in descriptor
        ) {
          return Object(_fromObject__WEBPACK_IMPORTED_MODULE_0__["fromObject"])(descriptor)
        } else {
          throw new Error('MISSING_MANDATORY_PARAM')
        }

      case 'translate':
        if (!('tx' in descriptor)) throw new Error('MISSING_MANDATORY_PARAM')

        if ('ty' in descriptor) return Object(_translate__WEBPACK_IMPORTED_MODULE_1__["translate"])(descriptor.tx, descriptor.ty)

        return Object(_translate__WEBPACK_IMPORTED_MODULE_1__["translate"])(descriptor.tx)

      case 'scale':
        if (!('sx' in descriptor)) throw new Error('MISSING_MANDATORY_PARAM')

        if ('sy' in descriptor) return Object(_scale__WEBPACK_IMPORTED_MODULE_2__["scale"])(descriptor.sx, descriptor.sy)

        return Object(_scale__WEBPACK_IMPORTED_MODULE_2__["scale"])(descriptor.sx)

      case 'rotate':
        if (!('angle' in descriptor)) throw new Error('MISSING_MANDATORY_PARAM')

        if ('cx' in descriptor && 'cy' in descriptor) {
          return Object(_rotate__WEBPACK_IMPORTED_MODULE_3__["rotateDEG"])(descriptor.angle, descriptor.cx, descriptor.cy)
        }
        return Object(_rotate__WEBPACK_IMPORTED_MODULE_3__["rotateDEG"])(descriptor.angle)

      case 'skewX':
        if (!('angle' in descriptor)) throw new Error('MISSING_MANDATORY_PARAM')
        return Object(_skew__WEBPACK_IMPORTED_MODULE_4__["skewDEG"])(descriptor.angle, 0)

      case 'skewY':
        if (!('angle' in descriptor)) throw new Error('MISSING_MANDATORY_PARAM')
        return Object(_skew__WEBPACK_IMPORTED_MODULE_4__["skewDEG"])(0, descriptor.angle)

      case 'shear':
        if (!('shx' in descriptor && 'shy' in descriptor)) throw new Error('MISSING_MANDATORY_PARAM')
        return Object(_shear__WEBPACK_IMPORTED_MODULE_5__["shear"])(descriptor.shx, descriptor.shy)

      default:
        throw new Error('UNSUPPORTED_DESCRIPTOR')
    }
  }
}


/***/ }),

/***/ "./node_modules/transformation-matrix/src/fromObject.js":
/*!**************************************************************!*\
  !*** ./node_modules/transformation-matrix/src/fromObject.js ***!
  \**************************************************************/
/*! exports provided: fromObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromObject", function() { return fromObject; });
/**
 * Extract an affine matrix from an object that contains a,b,c,d,e,f keys
 * Any value could be a float or a string that contains a float
 * @param object {Object} Object that contains a,b,c,d,e,f keys
 * @return {Matrix} Affine Matrix
 */
function fromObject (object) {
  return {
    a: parseFloat(object.a),
    b: parseFloat(object.b),
    c: parseFloat(object.c),
    d: parseFloat(object.d),
    e: parseFloat(object.e),
    f: parseFloat(object.f)
  }
}


/***/ }),

/***/ "./node_modules/transformation-matrix/src/fromString.js":
/*!**************************************************************!*\
  !*** ./node_modules/transformation-matrix/src/fromString.js ***!
  \**************************************************************/
/*! exports provided: fromString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromString", function() { return fromString; });
/**
 * @ignore
 * @type {RegExp}
 */
const matrixRegex = /^matrix\(\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*\)$/i

/**
 * Parse a string formatted as matrix(a,b,c,d,e,f)
 * @param string {string} String with an affine matrix
 * @returns {Matrix} Affine Matrix
 *
 * @example
 * > fromString('matrix(1,2,3,4,5,6)')
 * {a: 1, b: 2, c: 3, d: 4, c: 5, e: 6}
 */
function fromString (string) {
  const parsed = string.match(matrixRegex)
  if (parsed === null || parsed.length < 7) throw new Error(`'${string}' is not a matrix`)
  return {
    a: parseFloat(parsed[1]),
    b: parseFloat(parsed[2]),
    c: parseFloat(parsed[3]),
    d: parseFloat(parsed[4]),
    e: parseFloat(parsed[5]),
    f: parseFloat(parsed[6])
  }
}


/***/ }),

/***/ "./node_modules/transformation-matrix/src/fromTransformAttribute.autogenerated.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/transformation-matrix/src/fromTransformAttribute.autogenerated.js ***!
  \****************************************************************************************/
/*! exports provided: SyntaxError, parse, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyntaxError", function() { return peg$SyntaxError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return peg$parse; });
// Generated by PEG.js v0.11.0-master.30f3260, https://pegjs.org/

function peg$subclass(child, parent) {
  function C() { this.constructor = child; }
  C.prototype = parent.prototype;
  child.prototype = new C();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message = message;
  this.expected = expected;
  this.found = found;
  this.location = location;
  this.name = "SyntaxError";

  // istanbul ignore next
  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function(expectation) {
      return "\"" + literalEscape(expectation.text) + "\"";
    },

    class: function(expectation) {
      var escapedParts = expectation.parts.map(function(part) {
        return Array.isArray(part)
          ? classEscape(part[0]) + "-" + classEscape(part[1])
          : classEscape(part);
      });

      return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
    },

    any: function() {
      return "any character";
    },

    end: function() {
      return "end of input";
    },

    other: function(expectation) {
      return expectation.description;
    },

    not: function(expectation) {
      return "not " + describeExpectation(expectation.expected);
    }
  };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/"/g,  "\\\"")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/\]/g, "\\]")
      .replace(/\^/g, "\\^")
      .replace(/-/g,  "\\-")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = expected.map(describeExpectation);
    var i, j;

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== undefined ? options : {};

  var peg$FAILED = {};

  var peg$startRuleFunctions = { transformList: peg$parsetransformList };
  var peg$startRuleFunction = peg$parsetransformList;

  var peg$c0 = "matrix";
  var peg$c1 = "(";
  var peg$c2 = ")";
  var peg$c3 = "translate";
  var peg$c4 = "scale";
  var peg$c5 = "rotate";
  var peg$c6 = "skewX";
  var peg$c7 = "skewY";
  var peg$c8 = ",";
  var peg$c9 = ".";

  var peg$r0 = /^[eE]/;
  var peg$r1 = /^[+\-]/;
  var peg$r2 = /^[0-9]/;
  var peg$r3 = /^[ \t\r\n]/;

  var peg$e0 = peg$literalExpectation("matrix", false);
  var peg$e1 = peg$literalExpectation("(", false);
  var peg$e2 = peg$literalExpectation(")", false);
  var peg$e3 = peg$literalExpectation("translate", false);
  var peg$e4 = peg$literalExpectation("scale", false);
  var peg$e5 = peg$literalExpectation("rotate", false);
  var peg$e6 = peg$literalExpectation("skewX", false);
  var peg$e7 = peg$literalExpectation("skewY", false);
  var peg$e8 = peg$literalExpectation(",", false);
  var peg$e9 = peg$otherExpectation("fractionalConstant");
  var peg$e10 = peg$classExpectation(["e", "E"], false, false);
  var peg$e11 = peg$classExpectation(["+", "-"], false, false);
  var peg$e12 = peg$classExpectation([["0", "9"]], false, false);
  var peg$e13 = peg$classExpectation([" ", "\t", "\r", "\n"], false, false);

  var peg$f0 = function(ts) { return ts; };
  var peg$f1 = function(t, ts) { return t.concat(ts) };
  var peg$f2 = function(a, b, c, d, e, f) {
        return [{type: 'matrix', a: a, b: b, c: c, d: d, e: e, f: f}];
      };
  var peg$f3 = function(tx, ty) {
        var t = {type: 'translate', tx: tx};
        if (ty) t.ty = ty;
        return [t];
      };
  var peg$f4 = function(sx, sy) {
        var s = {type:'scale', sx: sx};
        if (sy) s.sy = sy;
        return [s];
      };
  var peg$f5 = function(angle, c) {
        var r = {type:'rotate', angle: angle};
        if (c) {
          r.cx = c[0];
          r.cy = c[1];
        }
        return [r];
      };
  var peg$f6 = function(angle) {
        return [{type: 'skewX', angle: angle}];
      };
  var peg$f7 = function(angle) {
        return [{type: 'skewY', angle: angle}];
      };
  var peg$f8 = function(f) { return parseFloat(f.join("")); };
  var peg$f9 = function(i) { return parseInt(i.join("")); };
  var peg$f10 = function(n) { return n; };
  var peg$f11 = function(n1, n2) { return [n1, n2]; };
  var peg$f12 = function(ds) { return ds.join(""); };
  var peg$f13 = function(d1, d2) { return [d1 ? d1.join("") : null, ".", d2.join("")].join(""); };
  var peg$f14 = function(d) { return d.join(""); };

  var peg$currPos = 0;
  var peg$savedPos = 0;
  var peg$posDetailsCache = [{ line: 1, column: 1 }];
  var peg$expected = [];
  var peg$silentFails = 0;

  var peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function offset() {
    return peg$savedPos;
  }

  function range() {
    return [peg$savedPos, peg$currPos];
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos];
    var p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;

      return details;
    }
  }

  var peg$VALIDFILENAME = typeof options.filename === "string" && options.filename.length > 0;
  function peg$computeLocation(startPos, endPos) {
    var loc = {};

    if ( peg$VALIDFILENAME ) loc.filename = options.filename;

    var startPosDetails = peg$computePosDetails(startPos);
    loc.start = {
      offset: startPos,
      line: startPosDetails.line,
      column: startPosDetails.column
    };

    var endPosDetails = peg$computePosDetails(endPos);
    loc.end = {
      offset: endPos,
      line: endPosDetails.line,
      column: endPosDetails.column
    };

    return loc;
  }

  function peg$begin() {
    peg$expected.push({ pos: peg$currPos, variants: [] });
  }

  function peg$expect(expected) {
    var top = peg$expected[peg$expected.length - 1];

    if (peg$currPos < top.pos) { return; }

    if (peg$currPos > top.pos) {
      top.pos = peg$currPos;
      top.variants = [];
    }

    top.variants.push(expected);
  }

  function peg$end(invert) {
    var expected = peg$expected.pop();
    var top = peg$expected[peg$expected.length - 1];
    var variants = expected.variants;

    if (top.pos !== expected.pos) { return; }

    if (invert) {
      variants = variants.map(function(e) {
        return e.type === "not" ? e.expected : { type: "not", expected: e };
      });
    }

    Array.prototype.push.apply(top.variants, variants);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$buildError() {
    var expected = peg$expected[0];
    var failPos = expected.pos;

    return peg$buildStructuredError(
      expected.variants,
      failPos < input.length ? input.charAt(failPos) : null,
      failPos < input.length
        ? peg$computeLocation(failPos, failPos + 1)
        : peg$computeLocation(failPos, failPos)
    );
  }

  function peg$parsetransformList() {
    var s0, s1, s2, s3, s4;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsewsp();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsewsp();
    }
    s2 = peg$parsetransforms();
    if (s2 === peg$FAILED) {
      s2 = null;
    }
    s3 = [];
    s4 = peg$parsewsp();
    while (s4 !== peg$FAILED) {
      s3.push(s4);
      s4 = peg$parsewsp();
    }
    peg$savedPos = s0;
    s0 = peg$f0(s2);

    return s0;
  }

  function peg$parsetransforms() {
    var s0, s1, s2, s3;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parsetransform();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsecommaWsp();
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsecommaWsp();
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsetransforms();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s3);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$parsetransform();
    }

    return s0;
  }

  function peg$parsetransform() {
    var s0;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$parsematrix();
    if (s0 === peg$FAILED) {
      s0 = peg$parsetranslate();
      if (s0 === peg$FAILED) {
        s0 = peg$parsescale();
        if (s0 === peg$FAILED) {
          s0 = peg$parserotate();
          if (s0 === peg$FAILED) {
            s0 = peg$parseskewX();
            if (s0 === peg$FAILED) {
              s0 = peg$parseskewY();
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parsematrix() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e0);
    if (input.substr(peg$currPos, 6) === peg$c0) {
      s1 = peg$c0;
      peg$currPos += 6;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      rule$expects(peg$e1);
      if (input.charCodeAt(peg$currPos) === 40) {
        s3 = peg$c1;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parsewsp();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parsewsp();
        }
        s5 = peg$parsenumber();
        if (s5 !== peg$FAILED) {
          s6 = peg$parsecommaWsp();
          if (s6 !== peg$FAILED) {
            s7 = peg$parsenumber();
            if (s7 !== peg$FAILED) {
              s8 = peg$parsecommaWsp();
              if (s8 !== peg$FAILED) {
                s9 = peg$parsenumber();
                if (s9 !== peg$FAILED) {
                  s10 = peg$parsecommaWsp();
                  if (s10 !== peg$FAILED) {
                    s11 = peg$parsenumber();
                    if (s11 !== peg$FAILED) {
                      s12 = peg$parsecommaWsp();
                      if (s12 !== peg$FAILED) {
                        s13 = peg$parsenumber();
                        if (s13 !== peg$FAILED) {
                          s14 = peg$parsecommaWsp();
                          if (s14 !== peg$FAILED) {
                            s15 = peg$parsenumber();
                            if (s15 !== peg$FAILED) {
                              s16 = [];
                              s17 = peg$parsewsp();
                              while (s17 !== peg$FAILED) {
                                s16.push(s17);
                                s17 = peg$parsewsp();
                              }
                              rule$expects(peg$e2);
                              if (input.charCodeAt(peg$currPos) === 41) {
                                s17 = peg$c2;
                                peg$currPos++;
                              } else {
                                s17 = peg$FAILED;
                              }
                              if (s17 !== peg$FAILED) {
                                peg$savedPos = s0;
                                s0 = peg$f2(s5, s7, s9, s11, s13, s15);
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsetranslate() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e3);
    if (input.substr(peg$currPos, 9) === peg$c3) {
      s1 = peg$c3;
      peg$currPos += 9;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      rule$expects(peg$e1);
      if (input.charCodeAt(peg$currPos) === 40) {
        s3 = peg$c1;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parsewsp();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parsewsp();
        }
        s5 = peg$parsenumber();
        if (s5 !== peg$FAILED) {
          s6 = peg$parsecommaWspNumber();
          if (s6 === peg$FAILED) {
            s6 = null;
          }
          s7 = [];
          s8 = peg$parsewsp();
          while (s8 !== peg$FAILED) {
            s7.push(s8);
            s8 = peg$parsewsp();
          }
          rule$expects(peg$e2);
          if (input.charCodeAt(peg$currPos) === 41) {
            s8 = peg$c2;
            peg$currPos++;
          } else {
            s8 = peg$FAILED;
          }
          if (s8 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f3(s5, s6);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsescale() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e4);
    if (input.substr(peg$currPos, 5) === peg$c4) {
      s1 = peg$c4;
      peg$currPos += 5;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      rule$expects(peg$e1);
      if (input.charCodeAt(peg$currPos) === 40) {
        s3 = peg$c1;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parsewsp();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parsewsp();
        }
        s5 = peg$parsenumber();
        if (s5 !== peg$FAILED) {
          s6 = peg$parsecommaWspNumber();
          if (s6 === peg$FAILED) {
            s6 = null;
          }
          s7 = [];
          s8 = peg$parsewsp();
          while (s8 !== peg$FAILED) {
            s7.push(s8);
            s8 = peg$parsewsp();
          }
          rule$expects(peg$e2);
          if (input.charCodeAt(peg$currPos) === 41) {
            s8 = peg$c2;
            peg$currPos++;
          } else {
            s8 = peg$FAILED;
          }
          if (s8 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f4(s5, s6);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parserotate() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e5);
    if (input.substr(peg$currPos, 6) === peg$c5) {
      s1 = peg$c5;
      peg$currPos += 6;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      rule$expects(peg$e1);
      if (input.charCodeAt(peg$currPos) === 40) {
        s3 = peg$c1;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parsewsp();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parsewsp();
        }
        s5 = peg$parsenumber();
        if (s5 !== peg$FAILED) {
          s6 = peg$parsecommaWspTwoNumbers();
          if (s6 === peg$FAILED) {
            s6 = null;
          }
          s7 = [];
          s8 = peg$parsewsp();
          while (s8 !== peg$FAILED) {
            s7.push(s8);
            s8 = peg$parsewsp();
          }
          rule$expects(peg$e2);
          if (input.charCodeAt(peg$currPos) === 41) {
            s8 = peg$c2;
            peg$currPos++;
          } else {
            s8 = peg$FAILED;
          }
          if (s8 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f5(s5, s6);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseskewX() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e6);
    if (input.substr(peg$currPos, 5) === peg$c6) {
      s1 = peg$c6;
      peg$currPos += 5;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      rule$expects(peg$e1);
      if (input.charCodeAt(peg$currPos) === 40) {
        s3 = peg$c1;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parsewsp();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parsewsp();
        }
        s5 = peg$parsenumber();
        if (s5 !== peg$FAILED) {
          s6 = [];
          s7 = peg$parsewsp();
          while (s7 !== peg$FAILED) {
            s6.push(s7);
            s7 = peg$parsewsp();
          }
          rule$expects(peg$e2);
          if (input.charCodeAt(peg$currPos) === 41) {
            s7 = peg$c2;
            peg$currPos++;
          } else {
            s7 = peg$FAILED;
          }
          if (s7 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f6(s5);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseskewY() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e7);
    if (input.substr(peg$currPos, 5) === peg$c7) {
      s1 = peg$c7;
      peg$currPos += 5;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      rule$expects(peg$e1);
      if (input.charCodeAt(peg$currPos) === 40) {
        s3 = peg$c1;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parsewsp();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parsewsp();
        }
        s5 = peg$parsenumber();
        if (s5 !== peg$FAILED) {
          s6 = [];
          s7 = peg$parsewsp();
          while (s7 !== peg$FAILED) {
            s6.push(s7);
            s7 = peg$parsewsp();
          }
          rule$expects(peg$e2);
          if (input.charCodeAt(peg$currPos) === 41) {
            s7 = peg$c2;
            peg$currPos++;
          } else {
            s7 = peg$FAILED;
          }
          if (s7 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f7(s5);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsenumber() {
    var s0, s1, s2, s3;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parsesign();
    if (s2 === peg$FAILED) {
      s2 = null;
    }
    s3 = peg$parsefloatingPointConstant();
    if (s3 !== peg$FAILED) {
      s2 = [s2, s3];
      s1 = s2;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f8(s1);
    }
    s0 = s1;
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parsesign();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      s3 = peg$parseintegerConstant();
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f9(s1);
      }
      s0 = s1;
    }

    return s0;
  }

  function peg$parsecommaWspNumber() {
    var s0, s1, s2;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parsecommaWsp();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsenumber();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f10(s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecommaWspTwoNumbers() {
    var s0, s1, s2, s3, s4;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parsecommaWsp();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsenumber();
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecommaWsp();
        if (s3 !== peg$FAILED) {
          s4 = peg$parsenumber();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f11(s2, s4);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecommaWsp() {
    var s0, s1, s2, s3, s4;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsewsp();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsewsp();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      s3 = [];
      s4 = peg$parsewsp();
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = peg$parsewsp();
      }
      s1 = [s1, s2, s3];
      s0 = s1;
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parsecomma();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsewsp();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsewsp();
        }
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parsecomma() {
    var s0;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    rule$expects(peg$e8);
    if (input.charCodeAt(peg$currPos) === 44) {
      s0 = peg$c8;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseintegerConstant() {
    var s0, s1;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parsedigitSequence();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f12(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsefloatingPointConstant() {
    var s0, s1, s2;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parsefractionalConstant();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseexponent();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      s1 = [s1, s2];
      s0 = s1;
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parsedigitSequence();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseexponent();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parsefractionalConstant() {
    var s0, s1, s2, s3;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    rule$expects(peg$e9);
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parsedigitSequence();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (input.charCodeAt(peg$currPos) === 46) {
      s2 = peg$c9;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parsedigitSequence();
      if (s3 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f13(s1, s3);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parsedigitSequence();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 46) {
          s2 = peg$c9;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f14(s1);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    peg$silentFails--;

    return s0;
  }

  function peg$parseexponent() {
    var s0, s1, s2, s3;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e10);
    if (peg$r0.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsesign();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      s3 = peg$parsedigitSequence();
      if (s3 !== peg$FAILED) {
        s1 = [s1, s2, s3];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesign() {
    var s0;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    rule$expects(peg$e11);
    if (peg$r1.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsedigitSequence() {
    var s0, s1;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = [];
    s1 = peg$parsedigit();
    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$parsedigit();
      }
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsedigit() {
    var s0;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    rule$expects(peg$e12);
    if (peg$r2.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsewsp() {
    var s0;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    rule$expects(peg$e13);
    if (peg$r3.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  peg$begin();
  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$expect(peg$endExpectation());
    }

    throw peg$buildError();
  }
}



/* harmony default export */ __webpack_exports__["default"] = ({
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
});


/***/ }),

/***/ "./node_modules/transformation-matrix/src/fromTransformAttribute.js":
/*!**************************************************************************!*\
  !*** ./node_modules/transformation-matrix/src/fromTransformAttribute.js ***!
  \**************************************************************************/
/*! exports provided: fromTransformAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTransformAttribute", function() { return fromTransformAttribute; });
/* harmony import */ var _fromTransformAttribute_autogenerated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromTransformAttribute.autogenerated */ "./node_modules/transformation-matrix/src/fromTransformAttribute.autogenerated.js");


/**
 * Parser for SVG Trasform Attribute http://www.w3.org/TR/SVG/coords.html#TransformAttribute <br/>
 * Warning: This should be considered BETA until it is released a stable version of pegjs.
 * @param transformString {string} Transform string as defined by w3 Consortium
 * @returns {MatrixDescriptor[]} Array of MatrixDescriptor
 *
 * @example
 * > fromTransformAttribute('translate(-10,-10) scale(2,2) translate(10,10)')
 * [
 *  { type: 'translate', tx: -10, ty: -10},
 *  { type: 'scale', sx: 2, sy: 2 },
 *  { type: 'translate', tx: 10, ty: 10}
 * ]
 *
 * > compose(fromDefinition(fromTransformAttribute('translate(-10, -10) scale(10, 10)')))
 * { a: 10, c: 0, e: -10, b: 0, d: 10, f: -10 }
 */
function fromTransformAttribute (transformString) {
  return Object(_fromTransformAttribute_autogenerated__WEBPACK_IMPORTED_MODULE_0__["parse"])(transformString)
}


/***/ }),

/***/ "./node_modules/transformation-matrix/src/fromTriangles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/transformation-matrix/src/fromTriangles.js ***!
  \*****************************************************************/
/*! exports provided: fromTriangles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTriangles", function() { return fromTriangles; });
/* harmony import */ var _inverse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inverse */ "./node_modules/transformation-matrix/src/inverse.js");
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform */ "./node_modules/transformation-matrix/src/transform.js");
/* harmony import */ var _smoothMatrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smoothMatrix */ "./node_modules/transformation-matrix/src/smoothMatrix.js");




/**
 * Returns a matrix that transforms a triangle t1 into another triangle t2, or throws an exception if it is impossible.
 * @param t1 {Point[]} Array of points containing the three points for the first triangle
 * @param t2 {Point[]} Array of points containing the three points for the second triangle
 * @returns {Matrix} Matrix which transforms t1 to t2
 * @throws Exception if the matrix becomes not invertible
 */
function fromTriangles (t1, t2) {
  // point p = first point of the triangle
  const px1 = t1[0].x != null ? t1[0].x : t1[0][0]
  const py1 = t1[0].y != null ? t1[0].y : t1[0][1]
  const px2 = t2[0].x != null ? t2[0].x : t2[0][0]
  const py2 = t2[0].y != null ? t2[0].y : t2[0][1]

  // point q = second point of the triangle
  const qx1 = t1[1].x != null ? t1[1].x : t1[1][0]
  const qy1 = t1[1].y != null ? t1[1].y : t1[1][1]
  const qx2 = t2[1].x != null ? t2[1].x : t2[1][0]
  const qy2 = t2[1].y != null ? t2[1].y : t2[1][1]

  // point r = third point of the triangle
  const rx1 = t1[2].x != null ? t1[2].x : t1[2][0]
  const ry1 = t1[2].y != null ? t1[2].y : t1[2][1]
  const rx2 = t2[2].x != null ? t2[2].x : t2[2][0]
  const ry2 = t2[2].y != null ? t2[2].y : t2[2][1]

  const r1 = {
    a: px1 - rx1,
    b: py1 - ry1,
    c: qx1 - rx1,
    d: qy1 - ry1,
    e: rx1,
    f: ry1
  }
  const r2 = {
    a: px2 - rx2,
    b: py2 - ry2,
    c: qx2 - rx2,
    d: qy2 - ry2,
    e: rx2,
    f: ry2
  }

  const inverseR1 = Object(_inverse__WEBPACK_IMPORTED_MODULE_0__["inverse"])(r1)
  const affineMatrix = Object(_transform__WEBPACK_IMPORTED_MODULE_1__["transform"])([r2, inverseR1])

  // round the matrix elements to smooth the finite inversion
  return Object(_smoothMatrix__WEBPACK_IMPORTED_MODULE_2__["smoothMatrix"])(affineMatrix)
}


/***/ }),

/***/ "./node_modules/transformation-matrix/src/identity.js":
/*!************************************************************!*\
  !*** ./node_modules/transformation-matrix/src/identity.js ***!
  \************************************************************/
/*! exports provided: identity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/**
 * Identity matrix
 * @returns {Matrix} Affine Matrix
 */
function identity () {
  return {
    a: 1,
    c: 0,
    e: 0,
    b: 0,
    d: 1,
    f: 0
  }
}


/***/ }),

/***/ "./node_modules/transformation-matrix/src/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/transformation-matrix/src/index.js ***!
  \*********************************************************/
/*! exports provided: applyToPoint, applyToPoints, fromObject, fromString, identity, inverse, isAffineMatrix, rotate, rotateDEG, scale, shear, skew, skewDEG, toCSS, toSVG, toString, transform, compose, translate, fromTriangles, smoothMatrix, fromDefinition, fromTransformAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _applyToPoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyToPoint */ "./node_modules/transformation-matrix/src/applyToPoint.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyToPoint", function() { return _applyToPoint__WEBPACK_IMPORTED_MODULE_0__["applyToPoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyToPoints", function() { return _applyToPoint__WEBPACK_IMPORTED_MODULE_0__["applyToPoints"]; });

/* harmony import */ var _fromObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fromObject */ "./node_modules/transformation-matrix/src/fromObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromObject", function() { return _fromObject__WEBPACK_IMPORTED_MODULE_1__["fromObject"]; });

/* harmony import */ var _fromString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fromString */ "./node_modules/transformation-matrix/src/fromString.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromString", function() { return _fromString__WEBPACK_IMPORTED_MODULE_2__["fromString"]; });

/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./identity */ "./node_modules/transformation-matrix/src/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _identity__WEBPACK_IMPORTED_MODULE_3__["identity"]; });

/* harmony import */ var _inverse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inverse */ "./node_modules/transformation-matrix/src/inverse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return _inverse__WEBPACK_IMPORTED_MODULE_4__["inverse"]; });

/* harmony import */ var _isAffineMatrix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isAffineMatrix */ "./node_modules/transformation-matrix/src/isAffineMatrix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAffineMatrix", function() { return _isAffineMatrix__WEBPACK_IMPORTED_MODULE_5__["isAffineMatrix"]; });

/* harmony import */ var _rotate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rotate */ "./node_modules/transformation-matrix/src/rotate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return _rotate__WEBPACK_IMPORTED_MODULE_6__["rotate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateDEG", function() { return _rotate__WEBPACK_IMPORTED_MODULE_6__["rotateDEG"]; });

/* harmony import */ var _scale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scale */ "./node_modules/transformation-matrix/src/scale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return _scale__WEBPACK_IMPORTED_MODULE_7__["scale"]; });

/* harmony import */ var _shear__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shear */ "./node_modules/transformation-matrix/src/shear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shear", function() { return _shear__WEBPACK_IMPORTED_MODULE_8__["shear"]; });

/* harmony import */ var _skew__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skew */ "./node_modules/transformation-matrix/src/skew.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skew", function() { return _skew__WEBPACK_IMPORTED_MODULE_9__["skew"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skewDEG", function() { return _skew__WEBPACK_IMPORTED_MODULE_9__["skewDEG"]; });

/* harmony import */ var _toString__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./toString */ "./node_modules/transformation-matrix/src/toString.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toCSS", function() { return _toString__WEBPACK_IMPORTED_MODULE_10__["toCSS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toSVG", function() { return _toString__WEBPACK_IMPORTED_MODULE_10__["toSVG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return _toString__WEBPACK_IMPORTED_MODULE_10__["toString"]; });

/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transform */ "./node_modules/transformation-matrix/src/transform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return _transform__WEBPACK_IMPORTED_MODULE_11__["transform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _transform__WEBPACK_IMPORTED_MODULE_11__["compose"]; });

/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./translate */ "./node_modules/transformation-matrix/src/translate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return _translate__WEBPACK_IMPORTED_MODULE_12__["translate"]; });

/* harmony import */ var _fromTriangles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fromTriangles */ "./node_modules/transformation-matrix/src/fromTriangles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromTriangles", function() { return _fromTriangles__WEBPACK_IMPORTED_MODULE_13__["fromTriangles"]; });

/* harmony import */ var _smoothMatrix__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./smoothMatrix */ "./node_modules/transformation-matrix/src/smoothMatrix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "smoothMatrix", function() { return _smoothMatrix__WEBPACK_IMPORTED_MODULE_14__["smoothMatrix"]; });

/* harmony import */ var _fromDefinition__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fromDefinition */ "./node_modules/transformation-matrix/src/fromDefinition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromDefinition", function() { return _fromDefinition__WEBPACK_IMPORTED_MODULE_15__["fromDefinition"]; });

/* harmony import */ var _fromTransformAttribute__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fromTransformAttribute */ "./node_modules/transformation-matrix/src/fromTransformAttribute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromTransformAttribute", function() { return _fromTransformAttribute__WEBPACK_IMPORTED_MODULE_16__["fromTransformAttribute"]; });




















/***/ }),

/***/ "./node_modules/transformation-matrix/src/inverse.js":
/*!***********************************************************!*\
  !*** ./node_modules/transformation-matrix/src/inverse.js ***!
  \***********************************************************/
/*! exports provided: inverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/**
 * Calculate a matrix that is the inverse of the provided matrix
 * @param matrix {Matrix} Affine Matrix
 * @returns {Matrix} Inverted Affine Matrix
 */
function inverse (matrix) {
  // http://www.wolframalpha.com/input/?i=Inverse+%5B%7B%7Ba,c,e%7D,%7Bb,d,f%7D,%7B0,0,1%7D%7D%5D

  const { a, b, c, d, e, f } = matrix

  const denom = a * d - b * c

  return {
    a: d / denom,
    b: b / -denom,
    c: c / -denom,
    d: a / denom,
    e: (d * e - c * f) / -denom,
    f: (b * e - a * f) / denom
  }
}


/***/ }),

/***/ "./node_modules/transformation-matrix/src/isAffineMatrix.js":
/*!******************************************************************!*\
  !*** ./node_modules/transformation-matrix/src/isAffineMatrix.js ***!
  \******************************************************************/
/*! exports provided: isAffineMatrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAffineMatrix", function() { return isAffineMatrix; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/transformation-matrix/src/utils.js");


/**
 * Check if the object contain an affine matrix
 * @param object {Object} Generic Plain Object
 * @return {boolean} True if is an object and contains an affine matrix
 */

function isAffineMatrix (object) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(object) &&
    'a' in object &&
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNumeric"])(object.a) &&
    'b' in object &&
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNumeric"])(object.b) &&
    'c' in object &&
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNumeric"])(object.c) &&
    'd' in object &&
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNumeric"])(object.d) &&
    'e' in object &&
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNumeric"])(object.e) &&
    'f' in object &&
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNumeric"])(object.f)
}


/***/ }),

/***/ "./node_modules/transformation-matrix/src/rotate.js":
/*!**********************************************************!*\
  !*** ./node_modules/transformation-matrix/src/rotate.js ***!
  \**********************************************************/
/*! exports provided: rotate, rotateDEG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateDEG", function() { return rotateDEG; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/transformation-matrix/src/utils.js");
/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translate */ "./node_modules/transformation-matrix/src/translate.js");
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transform */ "./node_modules/transformation-matrix/src/transform.js");




const { cos, sin, PI } = Math
/**
 * Calculate a rotation matrix
 * @param angle {number} Angle in radians
 * @param [cx] {number} If (cx,cy) are supplied the rotate is about this point
 * @param [cy] {number} If (cx,cy) are supplied the rotate is about this point
 * @returns {Matrix} Affine Matrix
 */
function rotate (angle, cx, cy) {
  const cosAngle = cos(angle)
  const sinAngle = sin(angle)
  const rotationMatrix = {
    a: cosAngle,
    c: -sinAngle,
    e: 0,
    b: sinAngle,
    d: cosAngle,
    f: 0
  }
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(cx) || Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(cy)) {
    return rotationMatrix
  }

  return Object(_transform__WEBPACK_IMPORTED_MODULE_2__["transform"])([
    Object(_translate__WEBPACK_IMPORTED_MODULE_1__["translate"])(cx, cy),
    rotationMatrix,
    Object(_translate__WEBPACK_IMPORTED_MODULE_1__["translate"])(-cx, -cy)
  ])
}

/**
 * Calculate a rotation matrix with a DEG angle
 * @param angle {number} Angle in degree
 * @param [cx] {number} If (cx,cy) are supplied the rotate is about this point
 * @param [cy] {number} If (cx,cy) are supplied the rotate is about this point
 * @returns {Matrix} Affine Matrix
 */
function rotateDEG (angle, cx = undefined, cy = undefined) {
  return rotate(angle * PI / 180, cx, cy)
}


/***/ }),

/***/ "./node_modules/transformation-matrix/src/scale.js":
/*!*********************************************************!*\
  !*** ./node_modules/transformation-matrix/src/scale.js ***!
  \*********************************************************/
/*! exports provided: scale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/transformation-matrix/src/utils.js");


/**
 * Calculate a scaling matrix
 * @param sx {number} Scaling on axis x
 * @param [sy = sx] {number} Scaling on axis y (default sx)
 * @returns {Matrix} Affine Matrix
 */
function scale (sx, sy = undefined) {
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(sy)) sy = sx
  return {
    a: sx,
    c: 0,
    e: 0,
    b: 0,
    d: sy,
    f: 0
  }
}


/***/ }),

/***/ "./node_modules/transformation-matrix/src/shear.js":
/*!*********************************************************!*\
  !*** ./node_modules/transformation-matrix/src/shear.js ***!
  \*********************************************************/
/*! exports provided: shear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shear", function() { return shear; });
/**
 * Calculate a shear matrix
 * @param shx {number} Shear on axis x
 * @param shy {number} Shear on axis y
 * @returns {Matrix} Affine Matrix
 */
function shear (shx, shy) {
  return {
    a: 1,
    c: shx,
    e: 0,
    b: shy,
    d: 1,
    f: 0
  }
}


/***/ }),

/***/ "./node_modules/transformation-matrix/src/skew.js":
/*!********************************************************!*\
  !*** ./node_modules/transformation-matrix/src/skew.js ***!
  \********************************************************/
/*! exports provided: skew, skewDEG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skew", function() { return skew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skewDEG", function() { return skewDEG; });
// https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew
const { tan } = Math

/**
 * Calculate a skew matrix
 * @param ax {number} Skew on axis x
 * @param ay {number} Skew on axis y
 * @returns {Matrix} Affine Matrix
 */
function skew (ax, ay) {
  return {
    a: 1,
    c: tan(ax),
    e: 0,
    b: tan(ay),
    d: 1,
    f: 0
  }
}

/**
 * Calculate a skew matrix using DEG angles
 * @param ax {number} Skew on axis x
 * @param ay {number} Skew on axis y
 * @returns {Matrix} Affine Matrix
 */
function skewDEG (ax, ay) {
  return skew(ax * Math.PI / 180, ay * Math.PI / 180)
}


/***/ }),

/***/ "./node_modules/transformation-matrix/src/smoothMatrix.js":
/*!****************************************************************!*\
  !*** ./node_modules/transformation-matrix/src/smoothMatrix.js ***!
  \****************************************************************/
/*! exports provided: smoothMatrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothMatrix", function() { return smoothMatrix; });
/**
 * Rounds all elements of the given matrix using the given precision
 * @param matrix {Matrix} An affine matrix to round
 * @param [precision] {number} A precision to use for Math.round. Defaults to 10000000000 (meaning which rounds to the 10th digit after the comma).
 * @returns {Matrix} The rounded Affine Matrix
 */
function smoothMatrix (matrix, precision = 10000000000) {
  return {
    a: Math.round(matrix.a * precision) / precision,
    b: Math.round(matrix.b * precision) / precision,
    c: Math.round(matrix.c * precision) / precision,
    d: Math.round(matrix.d * precision) / precision,
    e: Math.round(matrix.e * precision) / precision,
    f: Math.round(matrix.f * precision) / precision
  }
}


/***/ }),

/***/ "./node_modules/transformation-matrix/src/toString.js":
/*!************************************************************!*\
  !*** ./node_modules/transformation-matrix/src/toString.js ***!
  \************************************************************/
/*! exports provided: toCSS, toSVG, toString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCSS", function() { return toCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSVG", function() { return toSVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/**
 * Serialize an affine matrix to a string that can be used with CSS or SVG
 * @param matrix {Matrix} Affine Matrix
 * @returns {string} String that contains an affine matrix formatted as matrix(a,b,c,d,e,f)
 */
function toCSS (matrix) {
  return toString(matrix)
}

/**
 * Serialize an affine matrix to a string that can be used with CSS or SVG
 * @param matrix {Matrix} Affine Matrix
 * @returns {string} String that contains an affine matrix formatted as matrix(a,b,c,d,e,f)
 */
function toSVG (matrix) {
  return toString(matrix)
}

/**
 * Serialize an affine matrix to a string that can be used with CSS or SVG
 * @param matrix {Matrix} Affine Matrix
 * @returns {string} String that contains an affine matrix formatted as matrix(a,b,c,d,e,f)
 */
function toString (matrix) {
  return `matrix(${matrix.a},${matrix.b},${matrix.c},${matrix.d},${matrix.e},${matrix.f})`
}


/***/ }),

/***/ "./node_modules/transformation-matrix/src/transform.js":
/*!*************************************************************!*\
  !*** ./node_modules/transformation-matrix/src/transform.js ***!
  \*************************************************************/
/*! exports provided: transform, compose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/**
 * Merge multiple matrices into one
 * @param matrices {...Matrix | Matrix[]} Matrices listed as separate parameters or in an array
 * @returns {Matrix} Affine Matrix
 */
function transform (...matrices) {
  matrices = Array.isArray(matrices[0]) ? matrices[0] : matrices

  const multiply = (m1, m2) => {
    return {
      a: m1.a * m2.a + m1.c * m2.b,
      c: m1.a * m2.c + m1.c * m2.d,
      e: m1.a * m2.e + m1.c * m2.f + m1.e,
      b: m1.b * m2.a + m1.d * m2.b,
      d: m1.b * m2.c + m1.d * m2.d,
      f: m1.b * m2.e + m1.d * m2.f + m1.f
    }
  }

  switch (matrices.length) {
    case 0:
      throw new Error('no matrices provided')

    case 1:
      return matrices[0]

    case 2:
      return multiply(matrices[0], matrices[1])

    default: {
      const [m1, m2, ...rest] = matrices
      const m = multiply(m1, m2)
      return transform(m, ...rest)
    }
  }
}

/**
 * Merge multiple matrices into one
 * @param matrices {...Matrix | Matrix[]} Matrices listed as separate parameters or in an array
 * @returns {Matrix} Affine Matrix
 */
function compose (...matrices) {
  return transform(...matrices)
}


/***/ }),

/***/ "./node_modules/transformation-matrix/src/translate.js":
/*!*************************************************************!*\
  !*** ./node_modules/transformation-matrix/src/translate.js ***!
  \*************************************************************/
/*! exports provided: translate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/**
 * Calculate a translate matrix
 * @param tx {number} Translation on axis x
 * @param [ty = 0] {number} Translation on axis y
 * @returns {Matrix} Affine Matrix
 */
function translate (tx, ty = 0) {
  return {
    a: 1,
    c: 0,
    e: tx,
    b: 0,
    d: 1,
    f: ty
  }
}


/***/ }),

/***/ "./node_modules/transformation-matrix/src/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/transformation-matrix/src/utils.js ***!
  \*********************************************************/
/*! exports provided: isUndefined, isNumeric, isObject, matchesShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return isNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchesShape", function() { return matchesShape; });
function isUndefined (val) {
  return typeof val === 'undefined'
}

function isNumeric (n) {
  return typeof n === 'number' &&
    !Number.isNaN(n) &&
    Number.isFinite(n)
}

function isObject (obj) {
  return typeof obj === 'object' &&
    obj !== null &&
    !Array.isArray(obj)
}

function matchesShape (obj, keys) {
  return keys.every(key => key in obj)
}


/***/ }),

/***/ "./src/MouseHandler.ts":
/*!*****************************!*\
  !*** ./src/MouseHandler.ts ***!
  \*****************************/
/*! exports provided: MouseHandler, DragEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseHandler", function() { return MouseHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragEvent", function() { return DragEvent; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MouseHandler = function MouseHandler(canvas, listener) {
  var _this = this;

  _classCallCheck(this, MouseHandler);

  _defineProperty(this, "canvas", void 0);

  _defineProperty(this, "mousedown", false);

  _defineProperty(this, "dragging", false);

  _defineProperty(this, "initialDrag", null);

  _defineProperty(this, "lastDrag", null);

  this.canvas = canvas;

  canvas.onmousedown = function (evt) {
    _this.mousedown = true;
  };

  canvas.onmousemove = function (evt) {
    if (_this.mousedown) {
      if (_this.dragging) {
        var dragEvent = new DragEvent("DRAG", evt.offsetX, evt.offsetY, _this.initialDrag, _this.lastDrag);
        _this.lastDrag = dragEvent;
        listener === null || listener === void 0 ? void 0 : listener.onDrag(dragEvent);
      } else {
        var _dragEvent = new DragEvent("START", evt.offsetX, evt.offsetY, null, null);

        _this.initialDrag = _dragEvent;
        _this.lastDrag = _dragEvent;
        listener === null || listener === void 0 ? void 0 : listener.onDrag(_dragEvent);
      }

      _this.dragging = true;
    }
  };

  canvas.onmouseup = function (evt) {
    _this.mousedown = false;

    if (_this.dragging) {
      listener === null || listener === void 0 ? void 0 : listener.onDrag(new DragEvent("STOP", evt.offsetX, evt.offsetY, _this.initialDrag, _this.lastDrag));
      _this.initialDrag = null;
      _this.lastDrag = null;
    } else {
      listener === null || listener === void 0 ? void 0 : listener.onClick(evt.offsetX, evt.offsetY);
    }

    _this.dragging = false;
  };

  canvas.onwheel = function (evt) {
    evt.preventDefault();
    listener === null || listener === void 0 ? void 0 : listener.onWheel(evt.offsetX, evt.offsetY, evt.deltaY);
  };
};

var DragEvent = // delta from the last drag event
// distance from the initial drag event
function DragEvent(type, x, y, initialDrag, lastDrag) {
  _classCallCheck(this, DragEvent);

  _defineProperty(this, "type", void 0);

  _defineProperty(this, "x", void 0);

  _defineProperty(this, "y", void 0);

  _defineProperty(this, "lastDragEventDeltaX", 0);

  _defineProperty(this, "lastDragEventDeltaY", 0);

  _defineProperty(this, "initialDragEventDeltaX", 0);

  _defineProperty(this, "initialDragEventDeltaY", 0);

  this.x = x;
  this.y = y;
  this.type = type;

  if (initialDrag != null) {
    this.initialDragEventDeltaX = this.x - initialDrag.x;
    this.initialDragEventDeltaY = this.y - initialDrag.y;
  }

  if (lastDrag != null) {
    this.lastDragEventDeltaX = this.x - lastDrag.x;
    this.lastDragEventDeltaY = this.y - lastDrag.y;
  }
};



/***/ }),

/***/ "./src/Panel.ts":
/*!**********************!*\
  !*** ./src/Panel.ts ***!
  \**********************/
/*! exports provided: Panel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return Panel; });
/* harmony import */ var transformation_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! transformation-matrix */ "./node_modules/transformation-matrix/src/index.js");
/* harmony import */ var _MouseHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MouseHandler */ "./src/MouseHandler.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Panel = /*#__PURE__*/function () {
  function Panel(canvas) {
    _classCallCheck(this, Panel);

    _defineProperty(this, "canvas", void 0);

    _defineProperty(this, "mouseHandler", void 0);

    _defineProperty(this, "image", null);

    _defineProperty(this, "imageTx", 0);

    _defineProperty(this, "imageTy", 0);

    _defineProperty(this, "imageScale", 1);

    this.canvas = canvas;
    this.mouseHandler = new _MouseHandler__WEBPACK_IMPORTED_MODULE_1__["MouseHandler"](canvas, this);
  }

  _createClass(Panel, [{
    key: "onClick",
    value: function onClick(x, y) {
      var imagePoint = this.toImagePoint({
        x: x,
        y: y
      });
      console.log('clicked on', x, y, imagePoint);
    }
  }, {
    key: "onDrag",
    value: function onDrag(drag) {
      console.log('drag', drag.lastDragEventDeltaX);
      this.imageTx += drag.lastDragEventDeltaX;
      this.imageTy += drag.lastDragEventDeltaY;
    }
  }, {
    key: "onWheel",
    value: function onWheel(x, y, delta) {
      console.log('wheel', delta);

      if (delta > 0) {
        this.zoom(-20, x, y);
      } else {
        this.zoom(20, x, y);
      }
    }
  }, {
    key: "zoomOnImage",
    value: function zoomOnImage(amount, imageX, imageY) {
      var canvasPoint = this.toCanvasPoint({
        x: imageX,
        y: imageY
      });
      this.zoom(amount, canvasPoint.x, canvasPoint.y);
    }
  }, {
    key: "zoom",
    value: function zoom(amount, canvasX, canvasY) {
      var canvasZoomPoint = {
        x: canvasX,
        y: canvasY
      };
      var deltaScale = this.imageScale / 100 * amount;
      var newScale = this.imageScale + deltaScale;
      var imageZoomPoint = this.toImagePoint(canvasZoomPoint); // first change the scale, then we can compute the point on canvas after zoom

      this.imageScale = newScale;
      var canvasPointAfterZoom = this.toCanvasPoint(imageZoomPoint); // translate back the image

      this.imageTx -= canvasPointAfterZoom.x - canvasZoomPoint.x;
      this.imageTy -= canvasPointAfterZoom.y - canvasZoomPoint.y;
    }
  }, {
    key: "setImage",
    value: function setImage(image) {
      this.image = image;
    }
  }, {
    key: "fit",
    value: function fit() {
      if (this.image == null) {
        return;
      } // find the correct scale to fit the image inside the panel


      var scaleX = this.canvas.width / this.image.width;
      var scaleY = this.canvas.height / this.image.height;
      var newScale = scaleX < scaleY ? scaleX : scaleY;
      var scaleMatrix = Object(transformation_matrix__WEBPACK_IMPORTED_MODULE_0__["scale"])(newScale); // center the image horizontally and vertically

      var imageCenterX = this.image.width / 2;
      var imageCenterY = this.image.height / 2;
      var imageCenterOnCanvas = Object(transformation_matrix__WEBPACK_IMPORTED_MODULE_0__["applyToPoint"])(scaleMatrix, [imageCenterX, imageCenterY]); // move the center of the image onto the center of the canvas

      var canvasCenterX = this.canvas.width / 2;
      var canvasCenterY = this.canvas.height / 2;
      var tx = canvasCenterX - imageCenterOnCanvas[0];
      var ty = canvasCenterY - imageCenterOnCanvas[1]; // apply

      this.imageTx = tx;
      this.imageTy = ty;
      this.imageScale = newScale;
    }
    /**
     * Given a point on screen canvas, return the point on the image
     */

  }, {
    key: "toImagePoint",
    value: function toImagePoint(canvasPoint) {
      var matrix = Object(transformation_matrix__WEBPACK_IMPORTED_MODULE_0__["inverse"])(Object(transformation_matrix__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(transformation_matrix__WEBPACK_IMPORTED_MODULE_0__["translate"])(this.imageTx, this.imageTy), Object(transformation_matrix__WEBPACK_IMPORTED_MODULE_0__["scale"])(this.imageScale)));
      return Object(transformation_matrix__WEBPACK_IMPORTED_MODULE_0__["applyToPoint"])(matrix, canvasPoint);
    }
    /**
     * Given a point on the image, return the point on canvas
     */

  }, {
    key: "toCanvasPoint",
    value: function toCanvasPoint(imagePoint) {
      var matrix = Object(transformation_matrix__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(transformation_matrix__WEBPACK_IMPORTED_MODULE_0__["translate"])(this.imageTx, this.imageTy), Object(transformation_matrix__WEBPACK_IMPORTED_MODULE_0__["scale"])(this.imageScale));
      return Object(transformation_matrix__WEBPACK_IMPORTED_MODULE_0__["applyToPoint"])(matrix, imagePoint);
    }
  }, {
    key: "render",
    value: function render(ctx) {
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      if (this.image == null) {
        return;
      }

      var width = this.image.width * this.imageScale;
      var height = this.image.height * this.imageScale;
      ctx.drawImage(this.image, this.imageTx, this.imageTy, width, height);
    }
  }]);

  return Panel;
}();



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Panel */ "./src/Panel.ts");

var thumbnailA = document.getElementById('thumbnail-A');
var thumbnailB = document.getElementById('thumbnail-B');
var thumbnailC = document.getElementById('thumbnail-C');
var thumbnailD = document.getElementById('thumbnail-D');
var thumbnailE = document.getElementById('thumbnail-E');
var canvas = document.getElementById('main-canvas');
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;
var ctx = canvas.getContext('2d');

thumbnailA.onclick = function () {
  open('images/hand_0.jpg');
};

thumbnailB.onclick = function () {
  open('images/dino.jpg');
};

thumbnailC.onclick = function () {
  open('images/sf.jpg');
};

thumbnailD.onclick = function () {
  open('images/rock.jpg');
};

thumbnailE.onclick = function () {
  open('images/camping.jpg');
};

var panel = new _Panel__WEBPACK_IMPORTED_MODULE_0__["Panel"](canvas);

function open(url) {
  fetch(url).then(function (response) {
    return response.blob();
  }).then(function (blob) {
    return createImageBitmap(blob);
  }).then(function (bitmap) {
    panel.setImage(bitmap);
    panel.fit();
  });
}

function render() {
  panel.render(ctx);
}

function loop() {
  render();
  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RyYW5zZm9ybWF0aW9uLW1hdHJpeC9zcmMvYXBwbHlUb1BvaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cmFuc2Zvcm1hdGlvbi1tYXRyaXgvc3JjL2Zyb21EZWZpbml0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cmFuc2Zvcm1hdGlvbi1tYXRyaXgvc3JjL2Zyb21PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RyYW5zZm9ybWF0aW9uLW1hdHJpeC9zcmMvZnJvbVN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHJhbnNmb3JtYXRpb24tbWF0cml4L3NyYy9mcm9tVHJhbnNmb3JtQXR0cmlidXRlLmF1dG9nZW5lcmF0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RyYW5zZm9ybWF0aW9uLW1hdHJpeC9zcmMvZnJvbVRyYW5zZm9ybUF0dHJpYnV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHJhbnNmb3JtYXRpb24tbWF0cml4L3NyYy9mcm9tVHJpYW5nbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cmFuc2Zvcm1hdGlvbi1tYXRyaXgvc3JjL2lkZW50aXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cmFuc2Zvcm1hdGlvbi1tYXRyaXgvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cmFuc2Zvcm1hdGlvbi1tYXRyaXgvc3JjL2ludmVyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RyYW5zZm9ybWF0aW9uLW1hdHJpeC9zcmMvaXNBZmZpbmVNYXRyaXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RyYW5zZm9ybWF0aW9uLW1hdHJpeC9zcmMvcm90YXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cmFuc2Zvcm1hdGlvbi1tYXRyaXgvc3JjL3NjYWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cmFuc2Zvcm1hdGlvbi1tYXRyaXgvc3JjL3NoZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cmFuc2Zvcm1hdGlvbi1tYXRyaXgvc3JjL3NrZXcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RyYW5zZm9ybWF0aW9uLW1hdHJpeC9zcmMvc21vb3RoTWF0cml4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cmFuc2Zvcm1hdGlvbi1tYXRyaXgvc3JjL3RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cmFuc2Zvcm1hdGlvbi1tYXRyaXgvc3JjL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHJhbnNmb3JtYXRpb24tbWF0cml4L3NyYy90cmFuc2xhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RyYW5zZm9ybWF0aW9uLW1hdHJpeC9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01vdXNlSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGFuZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiXSwibmFtZXMiOlsiTW91c2VIYW5kbGVyIiwiY2FudmFzIiwibGlzdGVuZXIiLCJvbm1vdXNlZG93biIsImV2dCIsIm1vdXNlZG93biIsIm9ubW91c2Vtb3ZlIiwiZHJhZ2dpbmciLCJkcmFnRXZlbnQiLCJEcmFnRXZlbnQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImluaXRpYWxEcmFnIiwibGFzdERyYWciLCJvbkRyYWciLCJvbm1vdXNldXAiLCJvbkNsaWNrIiwib253aGVlbCIsInByZXZlbnREZWZhdWx0Iiwib25XaGVlbCIsImRlbHRhWSIsInR5cGUiLCJ4IiwieSIsImluaXRpYWxEcmFnRXZlbnREZWx0YVgiLCJpbml0aWFsRHJhZ0V2ZW50RGVsdGFZIiwibGFzdERyYWdFdmVudERlbHRhWCIsImxhc3REcmFnRXZlbnREZWx0YVkiLCJQYW5lbCIsIm1vdXNlSGFuZGxlciIsImltYWdlUG9pbnQiLCJ0b0ltYWdlUG9pbnQiLCJjb25zb2xlIiwibG9nIiwiZHJhZyIsImltYWdlVHgiLCJpbWFnZVR5IiwiZGVsdGEiLCJ6b29tIiwiYW1vdW50IiwiaW1hZ2VYIiwiaW1hZ2VZIiwiY2FudmFzUG9pbnQiLCJ0b0NhbnZhc1BvaW50IiwiY2FudmFzWCIsImNhbnZhc1kiLCJjYW52YXNab29tUG9pbnQiLCJkZWx0YVNjYWxlIiwiaW1hZ2VTY2FsZSIsIm5ld1NjYWxlIiwiaW1hZ2Vab29tUG9pbnQiLCJjYW52YXNQb2ludEFmdGVyWm9vbSIsImltYWdlIiwic2NhbGVYIiwid2lkdGgiLCJzY2FsZVkiLCJoZWlnaHQiLCJzY2FsZU1hdHJpeCIsInNjYWxlIiwiaW1hZ2VDZW50ZXJYIiwiaW1hZ2VDZW50ZXJZIiwiaW1hZ2VDZW50ZXJPbkNhbnZhcyIsImFwcGx5VG9Qb2ludCIsImNhbnZhc0NlbnRlclgiLCJjYW52YXNDZW50ZXJZIiwidHgiLCJ0eSIsIm1hdHJpeCIsImludmVyc2UiLCJjb21wb3NlIiwidHJhbnNsYXRlIiwiY3R4IiwiZmlsbFJlY3QiLCJkcmF3SW1hZ2UiLCJ0aHVtYm5haWxBIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRodW1ibmFpbEIiLCJ0aHVtYm5haWxDIiwidGh1bWJuYWlsRCIsInRodW1ibmFpbEUiLCJzY3JvbGxXaWR0aCIsInNjcm9sbEhlaWdodCIsImdldENvbnRleHQiLCJvbmNsaWNrIiwib3BlbiIsInBhbmVsIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJibG9iIiwiY3JlYXRlSW1hZ2VCaXRtYXAiLCJiaXRtYXAiLCJzZXRJbWFnZSIsImZpdCIsInJlbmRlciIsImxvb3AiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwibWFw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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLGlDQUFpQztBQUN4RDs7QUFFQTtBQUNBOztBQUVBLGdDQUFnQyxRQUFROztBQUV4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQyxRQUFROztBQUUzQztBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hELE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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LElBQTdCLEUiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwianNcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsIi8qKlxuICogQ2FsY3VsYXRlIGEgcG9pbnQgdHJhbnNmb3JtZWQgd2l0aCBhbiBhZmZpbmUgbWF0cml4XG4gKiBAcGFyYW0gbWF0cml4IHtNYXRyaXh9IEFmZmluZSBNYXRyaXhcbiAqIEBwYXJhbSAgcG9pbnQge1BvaW50fSBQb2ludFxuICogQHJldHVybnMge1BvaW50fSBQb2ludFxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlUb1BvaW50IChtYXRyaXgsIHBvaW50KSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHBvaW50KSA/IFtcbiAgICBtYXRyaXguYSAqIHBvaW50WzBdICsgbWF0cml4LmMgKiBwb2ludFsxXSArIG1hdHJpeC5lLFxuICAgIG1hdHJpeC5iICogcG9pbnRbMF0gKyBtYXRyaXguZCAqIHBvaW50WzFdICsgbWF0cml4LmZcbiAgXSA6IHtcbiAgICB4OiBtYXRyaXguYSAqIHBvaW50LnggKyBtYXRyaXguYyAqIHBvaW50LnkgKyBtYXRyaXguZSxcbiAgICB5OiBtYXRyaXguYiAqIHBvaW50LnggKyBtYXRyaXguZCAqIHBvaW50LnkgKyBtYXRyaXguZlxuICB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIGFuIGFycmF5IG9mIHBvaW50cyB0cmFuc2Zvcm1lZCB3aXRoIGFuIGFmZmluZSBtYXRyaXhcbiAqIEBwYXJhbSBtYXRyaXgge01hdHJpeH0gQWZmaW5lIE1hdHJpeFxuICogQHBhcmFtIHBvaW50cyB7UG9pbnRbXX0gQXJyYXkgb2YgcG9pbnRcbiAqIEByZXR1cm5zIHtQb2ludFtdfSBBcnJheSBvZiBwb2ludFxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlUb1BvaW50cyAobWF0cml4LCBwb2ludHMpIHtcbiAgcmV0dXJuIHBvaW50cy5tYXAocG9pbnQgPT4gYXBwbHlUb1BvaW50KG1hdHJpeCwgcG9pbnQpKVxufVxuIiwiaW1wb3J0IHsgZnJvbU9iamVjdCB9IGZyb20gJy4vZnJvbU9iamVjdCdcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJy4vdHJhbnNsYXRlJ1xuaW1wb3J0IHsgc2NhbGUgfSBmcm9tICcuL3NjYWxlJ1xuaW1wb3J0IHsgcm90YXRlREVHIH0gZnJvbSAnLi9yb3RhdGUnXG5pbXBvcnQgeyBza2V3REVHIH0gZnJvbSAnLi9za2V3J1xuaW1wb3J0IHsgc2hlYXIgfSBmcm9tICcuL3NoZWFyJ1xuXG4vKipcbiAqIENvbnZlcnRzIGFycmF5IG9mIG1hdHJpeCBkZXNjcmlwdG9yIHRvIGFycmF5IG9mIG1hdHJpeFxuICogQHBhcmFtIGRlZmluaXRpb25PckFycmF5T2ZEZWZpbml0aW9uIHtPYmplY3RbXX0gQXJyYXkgb2Ygb2JqZWN0IGRlc2NyaWJpbmcgdGhlIG1hdHJpeFxuICogQHJldHVybnMge01hdHJpeFtdfSBBcnJheSBvZiBtYXRyaXhcbiAqXG4gKiBAZXhhbXBsZVxuICogPiBmcm9tRGVmaW5pdGlvbihbXG4gKiAgeyB0eXBlOiAnbWF0cml4JywgYToxLCBiOjIsIGM6MywgZDo0LCBlOjUsIGY6NiB9LFxuICogIHsgdHlwZTogJ3RyYW5zbGF0ZScsIHR4OiAxMCwgdHk6IDIwIH0sXG4gKiAgeyB0eXBlOiAnc2NhbGUnLCBzeDogMiwgc3k6IDQgfSxcbiAqICB7IHR5cGU6ICdyb3RhdGUnLCBhbmdsZTogOTAsIGN4OiA1MCwgY3k6IDI1IH0sXG4gKiAgeyB0eXBlOiAnc2tld1gnLCBhbmdsZTogNDUgfSxcbiAqICB7IHR5cGU6ICdza2V3WScsICBhbmdsZTogNDUgfSxcbiAqICB7IHR5cGU6ICdzaGVhcicsIHNoeDogMTAsIHNoeTogMjB9XG4gKiBdKVxuICpcbiAqIFtcbiAqICB7IGE6IDEsIGI6IDIsIGM6IDMsIGQ6IDQsIGU6IDUsIGY6IDYgfSxcbiAqICB7IGE6IDEsIGM6IDAsIGU6IDEwLCBiOiAwLCBkOiAxLCBmOiAyMCB9LFxuICogIHsgYTogMiwgYzogMCwgZTogMCwgYjogMCwgZDogNCwgZjogMCB9LFxuICogIHsgYTogNi4xMjMsIGM6IC0xLCBlOiAwLCBiOiAxLCBkOiA2LjEyMywgZjogMCB9LFxuICogIHsgYTogMSwgYzogMC45OS4uLCBlOiAwLCBiOiAwLCBkOiAxLCBmOiAwIH0sXG4gKiAgeyBhOiAxLCBjOiAwLCBlOiAwLCBiOiAwLjk5LCBkOiAxLCBmOiAwIH0sXG4gKiAgeyBhOiAxLCBjOiAxMCwgZTogMCwgYjogMjAsIGQ6IDEsIGY6IDAgfVxuICogXVxuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21EZWZpbml0aW9uIChkZWZpbml0aW9uT3JBcnJheU9mRGVmaW5pdGlvbikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShkZWZpbml0aW9uT3JBcnJheU9mRGVmaW5pdGlvbilcbiAgICA/IGRlZmluaXRpb25PckFycmF5T2ZEZWZpbml0aW9uLm1hcChtYXBwZXIpXG4gICAgOiBtYXBwZXIoZGVmaW5pdGlvbk9yQXJyYXlPZkRlZmluaXRpb24pXG5cbiAgZnVuY3Rpb24gbWFwcGVyIChkZXNjcmlwdG9yKSB7XG4gICAgc3dpdGNoIChkZXNjcmlwdG9yLnR5cGUpIHtcbiAgICAgIGNhc2UgJ21hdHJpeCc6XG4gICAgICAgIGlmICgnYScgaW4gZGVzY3JpcHRvciAmJlxuICAgICAgICAgICdiJyBpbiBkZXNjcmlwdG9yICYmXG4gICAgICAgICAgJ2MnIGluIGRlc2NyaXB0b3IgJiZcbiAgICAgICAgICAnZCcgaW4gZGVzY3JpcHRvciAmJlxuICAgICAgICAgICdlJyBpbiBkZXNjcmlwdG9yICYmXG4gICAgICAgICAgJ2YnIGluIGRlc2NyaXB0b3JcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGZyb21PYmplY3QoZGVzY3JpcHRvcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01JU1NJTkdfTUFOREFUT1JZX1BBUkFNJylcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICd0cmFuc2xhdGUnOlxuICAgICAgICBpZiAoISgndHgnIGluIGRlc2NyaXB0b3IpKSB0aHJvdyBuZXcgRXJyb3IoJ01JU1NJTkdfTUFOREFUT1JZX1BBUkFNJylcblxuICAgICAgICBpZiAoJ3R5JyBpbiBkZXNjcmlwdG9yKSByZXR1cm4gdHJhbnNsYXRlKGRlc2NyaXB0b3IudHgsIGRlc2NyaXB0b3IudHkpXG5cbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZShkZXNjcmlwdG9yLnR4KVxuXG4gICAgICBjYXNlICdzY2FsZSc6XG4gICAgICAgIGlmICghKCdzeCcgaW4gZGVzY3JpcHRvcikpIHRocm93IG5ldyBFcnJvcignTUlTU0lOR19NQU5EQVRPUllfUEFSQU0nKVxuXG4gICAgICAgIGlmICgnc3knIGluIGRlc2NyaXB0b3IpIHJldHVybiBzY2FsZShkZXNjcmlwdG9yLnN4LCBkZXNjcmlwdG9yLnN5KVxuXG4gICAgICAgIHJldHVybiBzY2FsZShkZXNjcmlwdG9yLnN4KVxuXG4gICAgICBjYXNlICdyb3RhdGUnOlxuICAgICAgICBpZiAoISgnYW5nbGUnIGluIGRlc2NyaXB0b3IpKSB0aHJvdyBuZXcgRXJyb3IoJ01JU1NJTkdfTUFOREFUT1JZX1BBUkFNJylcblxuICAgICAgICBpZiAoJ2N4JyBpbiBkZXNjcmlwdG9yICYmICdjeScgaW4gZGVzY3JpcHRvcikge1xuICAgICAgICAgIHJldHVybiByb3RhdGVERUcoZGVzY3JpcHRvci5hbmdsZSwgZGVzY3JpcHRvci5jeCwgZGVzY3JpcHRvci5jeSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm90YXRlREVHKGRlc2NyaXB0b3IuYW5nbGUpXG5cbiAgICAgIGNhc2UgJ3NrZXdYJzpcbiAgICAgICAgaWYgKCEoJ2FuZ2xlJyBpbiBkZXNjcmlwdG9yKSkgdGhyb3cgbmV3IEVycm9yKCdNSVNTSU5HX01BTkRBVE9SWV9QQVJBTScpXG4gICAgICAgIHJldHVybiBza2V3REVHKGRlc2NyaXB0b3IuYW5nbGUsIDApXG5cbiAgICAgIGNhc2UgJ3NrZXdZJzpcbiAgICAgICAgaWYgKCEoJ2FuZ2xlJyBpbiBkZXNjcmlwdG9yKSkgdGhyb3cgbmV3IEVycm9yKCdNSVNTSU5HX01BTkRBVE9SWV9QQVJBTScpXG4gICAgICAgIHJldHVybiBza2V3REVHKDAsIGRlc2NyaXB0b3IuYW5nbGUpXG5cbiAgICAgIGNhc2UgJ3NoZWFyJzpcbiAgICAgICAgaWYgKCEoJ3NoeCcgaW4gZGVzY3JpcHRvciAmJiAnc2h5JyBpbiBkZXNjcmlwdG9yKSkgdGhyb3cgbmV3IEVycm9yKCdNSVNTSU5HX01BTkRBVE9SWV9QQVJBTScpXG4gICAgICAgIHJldHVybiBzaGVhcihkZXNjcmlwdG9yLnNoeCwgZGVzY3JpcHRvci5zaHkpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVU5TVVBQT1JURURfREVTQ1JJUFRPUicpXG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEV4dHJhY3QgYW4gYWZmaW5lIG1hdHJpeCBmcm9tIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEsYixjLGQsZSxmIGtleXNcbiAqIEFueSB2YWx1ZSBjb3VsZCBiZSBhIGZsb2F0IG9yIGEgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBmbG9hdFxuICogQHBhcmFtIG9iamVjdCB7T2JqZWN0fSBPYmplY3QgdGhhdCBjb250YWlucyBhLGIsYyxkLGUsZiBrZXlzXG4gKiBAcmV0dXJuIHtNYXRyaXh9IEFmZmluZSBNYXRyaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21PYmplY3QgKG9iamVjdCkge1xuICByZXR1cm4ge1xuICAgIGE6IHBhcnNlRmxvYXQob2JqZWN0LmEpLFxuICAgIGI6IHBhcnNlRmxvYXQob2JqZWN0LmIpLFxuICAgIGM6IHBhcnNlRmxvYXQob2JqZWN0LmMpLFxuICAgIGQ6IHBhcnNlRmxvYXQob2JqZWN0LmQpLFxuICAgIGU6IHBhcnNlRmxvYXQob2JqZWN0LmUpLFxuICAgIGY6IHBhcnNlRmxvYXQob2JqZWN0LmYpXG4gIH1cbn1cbiIsIi8qKlxuICogQGlnbm9yZVxuICogQHR5cGUge1JlZ0V4cH1cbiAqL1xuY29uc3QgbWF0cml4UmVnZXggPSAvXm1hdHJpeFxcKFxccyooWzAtOV8rLS5lXSspXFxzKixcXHMqKFswLTlfKy0uZV0rKVxccyosXFxzKihbMC05XystLmVdKylcXHMqLFxccyooWzAtOV8rLS5lXSspXFxzKixcXHMqKFswLTlfKy0uZV0rKVxccyosXFxzKihbMC05XystLmVdKylcXHMqXFwpJC9pXG5cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9ybWF0dGVkIGFzIG1hdHJpeChhLGIsYyxkLGUsZilcbiAqIEBwYXJhbSBzdHJpbmcge3N0cmluZ30gU3RyaW5nIHdpdGggYW4gYWZmaW5lIG1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH0gQWZmaW5lIE1hdHJpeFxuICpcbiAqIEBleGFtcGxlXG4gKiA+IGZyb21TdHJpbmcoJ21hdHJpeCgxLDIsMyw0LDUsNiknKVxuICoge2E6IDEsIGI6IDIsIGM6IDMsIGQ6IDQsIGM6IDUsIGU6IDZ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tU3RyaW5nIChzdHJpbmcpIHtcbiAgY29uc3QgcGFyc2VkID0gc3RyaW5nLm1hdGNoKG1hdHJpeFJlZ2V4KVxuICBpZiAocGFyc2VkID09PSBudWxsIHx8IHBhcnNlZC5sZW5ndGggPCA3KSB0aHJvdyBuZXcgRXJyb3IoYCcke3N0cmluZ30nIGlzIG5vdCBhIG1hdHJpeGApXG4gIHJldHVybiB7XG4gICAgYTogcGFyc2VGbG9hdChwYXJzZWRbMV0pLFxuICAgIGI6IHBhcnNlRmxvYXQocGFyc2VkWzJdKSxcbiAgICBjOiBwYXJzZUZsb2F0KHBhcnNlZFszXSksXG4gICAgZDogcGFyc2VGbG9hdChwYXJzZWRbNF0pLFxuICAgIGU6IHBhcnNlRmxvYXQocGFyc2VkWzVdKSxcbiAgICBmOiBwYXJzZUZsb2F0KHBhcnNlZFs2XSlcbiAgfVxufVxuIiwiLy8gR2VuZXJhdGVkIGJ5IFBFRy5qcyB2MC4xMS4wLW1hc3Rlci4zMGYzMjYwLCBodHRwczovL3BlZ2pzLm9yZy9cblxuZnVuY3Rpb24gcGVnJHN1YmNsYXNzKGNoaWxkLCBwYXJlbnQpIHtcbiAgZnVuY3Rpb24gQygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9XG4gIEMucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTtcbiAgY2hpbGQucHJvdG90eXBlID0gbmV3IEMoKTtcbn1cblxuZnVuY3Rpb24gcGVnJFN5bnRheEVycm9yKG1lc3NhZ2UsIGV4cGVjdGVkLCBmb3VuZCwgbG9jYXRpb24pIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgdGhpcy5leHBlY3RlZCA9IGV4cGVjdGVkO1xuICB0aGlzLmZvdW5kID0gZm91bmQ7XG4gIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgdGhpcy5uYW1lID0gXCJTeW50YXhFcnJvclwiO1xuXG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gIGlmICh0eXBlb2YgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHBlZyRTeW50YXhFcnJvcik7XG4gIH1cbn1cblxucGVnJHN1YmNsYXNzKHBlZyRTeW50YXhFcnJvciwgRXJyb3IpO1xuXG5wZWckU3ludGF4RXJyb3IuYnVpbGRNZXNzYWdlID0gZnVuY3Rpb24oZXhwZWN0ZWQsIGZvdW5kKSB7XG4gIHZhciBERVNDUklCRV9FWFBFQ1RBVElPTl9GTlMgPSB7XG4gICAgbGl0ZXJhbDogZnVuY3Rpb24oZXhwZWN0YXRpb24pIHtcbiAgICAgIHJldHVybiBcIlxcXCJcIiArIGxpdGVyYWxFc2NhcGUoZXhwZWN0YXRpb24udGV4dCkgKyBcIlxcXCJcIjtcbiAgICB9LFxuXG4gICAgY2xhc3M6IGZ1bmN0aW9uKGV4cGVjdGF0aW9uKSB7XG4gICAgICB2YXIgZXNjYXBlZFBhcnRzID0gZXhwZWN0YXRpb24ucGFydHMubWFwKGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocGFydClcbiAgICAgICAgICA/IGNsYXNzRXNjYXBlKHBhcnRbMF0pICsgXCItXCIgKyBjbGFzc0VzY2FwZShwYXJ0WzFdKVxuICAgICAgICAgIDogY2xhc3NFc2NhcGUocGFydCk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIFwiW1wiICsgKGV4cGVjdGF0aW9uLmludmVydGVkID8gXCJeXCIgOiBcIlwiKSArIGVzY2FwZWRQYXJ0cyArIFwiXVwiO1xuICAgIH0sXG5cbiAgICBhbnk6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFwiYW55IGNoYXJhY3RlclwiO1xuICAgIH0sXG5cbiAgICBlbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFwiZW5kIG9mIGlucHV0XCI7XG4gICAgfSxcblxuICAgIG90aGVyOiBmdW5jdGlvbihleHBlY3RhdGlvbikge1xuICAgICAgcmV0dXJuIGV4cGVjdGF0aW9uLmRlc2NyaXB0aW9uO1xuICAgIH0sXG5cbiAgICBub3Q6IGZ1bmN0aW9uKGV4cGVjdGF0aW9uKSB7XG4gICAgICByZXR1cm4gXCJub3QgXCIgKyBkZXNjcmliZUV4cGVjdGF0aW9uKGV4cGVjdGF0aW9uLmV4cGVjdGVkKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gaGV4KGNoKSB7XG4gICAgcmV0dXJuIGNoLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBsaXRlcmFsRXNjYXBlKHMpIHtcbiAgICByZXR1cm4gc1xuICAgICAgLnJlcGxhY2UoL1xcXFwvZywgXCJcXFxcXFxcXFwiKVxuICAgICAgLnJlcGxhY2UoL1wiL2csICBcIlxcXFxcXFwiXCIpXG4gICAgICAucmVwbGFjZSgvXFwwL2csIFwiXFxcXDBcIilcbiAgICAgIC5yZXBsYWNlKC9cXHQvZywgXCJcXFxcdFwiKVxuICAgICAgLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpXG4gICAgICAucmVwbGFjZSgvXFxyL2csIFwiXFxcXHJcIilcbiAgICAgIC5yZXBsYWNlKC9bXFx4MDAtXFx4MEZdL2csICAgICAgICAgIGZ1bmN0aW9uKGNoKSB7IHJldHVybiBcIlxcXFx4MFwiICsgaGV4KGNoKTsgfSlcbiAgICAgIC5yZXBsYWNlKC9bXFx4MTAtXFx4MUZcXHg3Ri1cXHg5Rl0vZywgZnVuY3Rpb24oY2gpIHsgcmV0dXJuIFwiXFxcXHhcIiAgKyBoZXgoY2gpOyB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsYXNzRXNjYXBlKHMpIHtcbiAgICByZXR1cm4gc1xuICAgICAgLnJlcGxhY2UoL1xcXFwvZywgXCJcXFxcXFxcXFwiKVxuICAgICAgLnJlcGxhY2UoL1xcXS9nLCBcIlxcXFxdXCIpXG4gICAgICAucmVwbGFjZSgvXFxeL2csIFwiXFxcXF5cIilcbiAgICAgIC5yZXBsYWNlKC8tL2csICBcIlxcXFwtXCIpXG4gICAgICAucmVwbGFjZSgvXFwwL2csIFwiXFxcXDBcIilcbiAgICAgIC5yZXBsYWNlKC9cXHQvZywgXCJcXFxcdFwiKVxuICAgICAgLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpXG4gICAgICAucmVwbGFjZSgvXFxyL2csIFwiXFxcXHJcIilcbiAgICAgIC5yZXBsYWNlKC9bXFx4MDAtXFx4MEZdL2csICAgICAgICAgIGZ1bmN0aW9uKGNoKSB7IHJldHVybiBcIlxcXFx4MFwiICsgaGV4KGNoKTsgfSlcbiAgICAgIC5yZXBsYWNlKC9bXFx4MTAtXFx4MUZcXHg3Ri1cXHg5Rl0vZywgZnVuY3Rpb24oY2gpIHsgcmV0dXJuIFwiXFxcXHhcIiAgKyBoZXgoY2gpOyB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc2NyaWJlRXhwZWN0YXRpb24oZXhwZWN0YXRpb24pIHtcbiAgICByZXR1cm4gREVTQ1JJQkVfRVhQRUNUQVRJT05fRk5TW2V4cGVjdGF0aW9uLnR5cGVdKGV4cGVjdGF0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc2NyaWJlRXhwZWN0ZWQoZXhwZWN0ZWQpIHtcbiAgICB2YXIgZGVzY3JpcHRpb25zID0gZXhwZWN0ZWQubWFwKGRlc2NyaWJlRXhwZWN0YXRpb24pO1xuICAgIHZhciBpLCBqO1xuXG4gICAgZGVzY3JpcHRpb25zLnNvcnQoKTtcblxuICAgIGlmIChkZXNjcmlwdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChpID0gMSwgaiA9IDE7IGkgPCBkZXNjcmlwdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uc1tpIC0gMV0gIT09IGRlc2NyaXB0aW9uc1tpXSkge1xuICAgICAgICAgIGRlc2NyaXB0aW9uc1tqXSA9IGRlc2NyaXB0aW9uc1tpXTtcbiAgICAgICAgICBqKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRlc2NyaXB0aW9ucy5sZW5ndGggPSBqO1xuICAgIH1cblxuICAgIHN3aXRjaCAoZGVzY3JpcHRpb25zLmxlbmd0aCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gZGVzY3JpcHRpb25zWzBdO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBkZXNjcmlwdGlvbnNbMF0gKyBcIiBvciBcIiArIGRlc2NyaXB0aW9uc1sxXTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9ucy5zbGljZSgwLCAtMSkuam9pbihcIiwgXCIpXG4gICAgICAgICAgKyBcIiwgb3IgXCJcbiAgICAgICAgICArIGRlc2NyaXB0aW9uc1tkZXNjcmlwdGlvbnMubGVuZ3RoIC0gMV07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVzY3JpYmVGb3VuZChmb3VuZCkge1xuICAgIHJldHVybiBmb3VuZCA/IFwiXFxcIlwiICsgbGl0ZXJhbEVzY2FwZShmb3VuZCkgKyBcIlxcXCJcIiA6IFwiZW5kIG9mIGlucHV0XCI7XG4gIH1cblxuICByZXR1cm4gXCJFeHBlY3RlZCBcIiArIGRlc2NyaWJlRXhwZWN0ZWQoZXhwZWN0ZWQpICsgXCIgYnV0IFwiICsgZGVzY3JpYmVGb3VuZChmb3VuZCkgKyBcIiBmb3VuZC5cIjtcbn07XG5cbmZ1bmN0aW9uIHBlZyRwYXJzZShpbnB1dCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucyA6IHt9O1xuXG4gIHZhciBwZWckRkFJTEVEID0ge307XG5cbiAgdmFyIHBlZyRzdGFydFJ1bGVGdW5jdGlvbnMgPSB7IHRyYW5zZm9ybUxpc3Q6IHBlZyRwYXJzZXRyYW5zZm9ybUxpc3QgfTtcbiAgdmFyIHBlZyRzdGFydFJ1bGVGdW5jdGlvbiA9IHBlZyRwYXJzZXRyYW5zZm9ybUxpc3Q7XG5cbiAgdmFyIHBlZyRjMCA9IFwibWF0cml4XCI7XG4gIHZhciBwZWckYzEgPSBcIihcIjtcbiAgdmFyIHBlZyRjMiA9IFwiKVwiO1xuICB2YXIgcGVnJGMzID0gXCJ0cmFuc2xhdGVcIjtcbiAgdmFyIHBlZyRjNCA9IFwic2NhbGVcIjtcbiAgdmFyIHBlZyRjNSA9IFwicm90YXRlXCI7XG4gIHZhciBwZWckYzYgPSBcInNrZXdYXCI7XG4gIHZhciBwZWckYzcgPSBcInNrZXdZXCI7XG4gIHZhciBwZWckYzggPSBcIixcIjtcbiAgdmFyIHBlZyRjOSA9IFwiLlwiO1xuXG4gIHZhciBwZWckcjAgPSAvXltlRV0vO1xuICB2YXIgcGVnJHIxID0gL15bK1xcLV0vO1xuICB2YXIgcGVnJHIyID0gL15bMC05XS87XG4gIHZhciBwZWckcjMgPSAvXlsgXFx0XFxyXFxuXS87XG5cbiAgdmFyIHBlZyRlMCA9IHBlZyRsaXRlcmFsRXhwZWN0YXRpb24oXCJtYXRyaXhcIiwgZmFsc2UpO1xuICB2YXIgcGVnJGUxID0gcGVnJGxpdGVyYWxFeHBlY3RhdGlvbihcIihcIiwgZmFsc2UpO1xuICB2YXIgcGVnJGUyID0gcGVnJGxpdGVyYWxFeHBlY3RhdGlvbihcIilcIiwgZmFsc2UpO1xuICB2YXIgcGVnJGUzID0gcGVnJGxpdGVyYWxFeHBlY3RhdGlvbihcInRyYW5zbGF0ZVwiLCBmYWxzZSk7XG4gIHZhciBwZWckZTQgPSBwZWckbGl0ZXJhbEV4cGVjdGF0aW9uKFwic2NhbGVcIiwgZmFsc2UpO1xuICB2YXIgcGVnJGU1ID0gcGVnJGxpdGVyYWxFeHBlY3RhdGlvbihcInJvdGF0ZVwiLCBmYWxzZSk7XG4gIHZhciBwZWckZTYgPSBwZWckbGl0ZXJhbEV4cGVjdGF0aW9uKFwic2tld1hcIiwgZmFsc2UpO1xuICB2YXIgcGVnJGU3ID0gcGVnJGxpdGVyYWxFeHBlY3RhdGlvbihcInNrZXdZXCIsIGZhbHNlKTtcbiAgdmFyIHBlZyRlOCA9IHBlZyRsaXRlcmFsRXhwZWN0YXRpb24oXCIsXCIsIGZhbHNlKTtcbiAgdmFyIHBlZyRlOSA9IHBlZyRvdGhlckV4cGVjdGF0aW9uKFwiZnJhY3Rpb25hbENvbnN0YW50XCIpO1xuICB2YXIgcGVnJGUxMCA9IHBlZyRjbGFzc0V4cGVjdGF0aW9uKFtcImVcIiwgXCJFXCJdLCBmYWxzZSwgZmFsc2UpO1xuICB2YXIgcGVnJGUxMSA9IHBlZyRjbGFzc0V4cGVjdGF0aW9uKFtcIitcIiwgXCItXCJdLCBmYWxzZSwgZmFsc2UpO1xuICB2YXIgcGVnJGUxMiA9IHBlZyRjbGFzc0V4cGVjdGF0aW9uKFtbXCIwXCIsIFwiOVwiXV0sIGZhbHNlLCBmYWxzZSk7XG4gIHZhciBwZWckZTEzID0gcGVnJGNsYXNzRXhwZWN0YXRpb24oW1wiIFwiLCBcIlxcdFwiLCBcIlxcclwiLCBcIlxcblwiXSwgZmFsc2UsIGZhbHNlKTtcblxuICB2YXIgcGVnJGYwID0gZnVuY3Rpb24odHMpIHsgcmV0dXJuIHRzOyB9O1xuICB2YXIgcGVnJGYxID0gZnVuY3Rpb24odCwgdHMpIHsgcmV0dXJuIHQuY29uY2F0KHRzKSB9O1xuICB2YXIgcGVnJGYyID0gZnVuY3Rpb24oYSwgYiwgYywgZCwgZSwgZikge1xuICAgICAgICByZXR1cm4gW3t0eXBlOiAnbWF0cml4JywgYTogYSwgYjogYiwgYzogYywgZDogZCwgZTogZSwgZjogZn1dO1xuICAgICAgfTtcbiAgdmFyIHBlZyRmMyA9IGZ1bmN0aW9uKHR4LCB0eSkge1xuICAgICAgICB2YXIgdCA9IHt0eXBlOiAndHJhbnNsYXRlJywgdHg6IHR4fTtcbiAgICAgICAgaWYgKHR5KSB0LnR5ID0gdHk7XG4gICAgICAgIHJldHVybiBbdF07XG4gICAgICB9O1xuICB2YXIgcGVnJGY0ID0gZnVuY3Rpb24oc3gsIHN5KSB7XG4gICAgICAgIHZhciBzID0ge3R5cGU6J3NjYWxlJywgc3g6IHN4fTtcbiAgICAgICAgaWYgKHN5KSBzLnN5ID0gc3k7XG4gICAgICAgIHJldHVybiBbc107XG4gICAgICB9O1xuICB2YXIgcGVnJGY1ID0gZnVuY3Rpb24oYW5nbGUsIGMpIHtcbiAgICAgICAgdmFyIHIgPSB7dHlwZToncm90YXRlJywgYW5nbGU6IGFuZ2xlfTtcbiAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICByLmN4ID0gY1swXTtcbiAgICAgICAgICByLmN5ID0gY1sxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3JdO1xuICAgICAgfTtcbiAgdmFyIHBlZyRmNiA9IGZ1bmN0aW9uKGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiBbe3R5cGU6ICdza2V3WCcsIGFuZ2xlOiBhbmdsZX1dO1xuICAgICAgfTtcbiAgdmFyIHBlZyRmNyA9IGZ1bmN0aW9uKGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiBbe3R5cGU6ICdza2V3WScsIGFuZ2xlOiBhbmdsZX1dO1xuICAgICAgfTtcbiAgdmFyIHBlZyRmOCA9IGZ1bmN0aW9uKGYpIHsgcmV0dXJuIHBhcnNlRmxvYXQoZi5qb2luKFwiXCIpKTsgfTtcbiAgdmFyIHBlZyRmOSA9IGZ1bmN0aW9uKGkpIHsgcmV0dXJuIHBhcnNlSW50KGkuam9pbihcIlwiKSk7IH07XG4gIHZhciBwZWckZjEwID0gZnVuY3Rpb24obikgeyByZXR1cm4gbjsgfTtcbiAgdmFyIHBlZyRmMTEgPSBmdW5jdGlvbihuMSwgbjIpIHsgcmV0dXJuIFtuMSwgbjJdOyB9O1xuICB2YXIgcGVnJGYxMiA9IGZ1bmN0aW9uKGRzKSB7IHJldHVybiBkcy5qb2luKFwiXCIpOyB9O1xuICB2YXIgcGVnJGYxMyA9IGZ1bmN0aW9uKGQxLCBkMikgeyByZXR1cm4gW2QxID8gZDEuam9pbihcIlwiKSA6IG51bGwsIFwiLlwiLCBkMi5qb2luKFwiXCIpXS5qb2luKFwiXCIpOyB9O1xuICB2YXIgcGVnJGYxNCA9IGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuam9pbihcIlwiKTsgfTtcblxuICB2YXIgcGVnJGN1cnJQb3MgPSAwO1xuICB2YXIgcGVnJHNhdmVkUG9zID0gMDtcbiAgdmFyIHBlZyRwb3NEZXRhaWxzQ2FjaGUgPSBbeyBsaW5lOiAxLCBjb2x1bW46IDEgfV07XG4gIHZhciBwZWckZXhwZWN0ZWQgPSBbXTtcbiAgdmFyIHBlZyRzaWxlbnRGYWlscyA9IDA7XG5cbiAgdmFyIHBlZyRyZXN1bHQ7XG5cbiAgaWYgKFwic3RhcnRSdWxlXCIgaW4gb3B0aW9ucykge1xuICAgIGlmICghKG9wdGlvbnMuc3RhcnRSdWxlIGluIHBlZyRzdGFydFJ1bGVGdW5jdGlvbnMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBzdGFydCBwYXJzaW5nIGZyb20gcnVsZSBcXFwiXCIgKyBvcHRpb25zLnN0YXJ0UnVsZSArIFwiXFxcIi5cIik7XG4gICAgfVxuXG4gICAgcGVnJHN0YXJ0UnVsZUZ1bmN0aW9uID0gcGVnJHN0YXJ0UnVsZUZ1bmN0aW9uc1tvcHRpb25zLnN0YXJ0UnVsZV07XG4gIH1cblxuICBmdW5jdGlvbiB0ZXh0KCkge1xuICAgIHJldHVybiBpbnB1dC5zdWJzdHJpbmcocGVnJHNhdmVkUG9zLCBwZWckY3VyclBvcyk7XG4gIH1cblxuICBmdW5jdGlvbiBvZmZzZXQoKSB7XG4gICAgcmV0dXJuIHBlZyRzYXZlZFBvcztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJhbmdlKCkge1xuICAgIHJldHVybiBbcGVnJHNhdmVkUG9zLCBwZWckY3VyclBvc107XG4gIH1cblxuICBmdW5jdGlvbiBsb2NhdGlvbigpIHtcbiAgICByZXR1cm4gcGVnJGNvbXB1dGVMb2NhdGlvbihwZWckc2F2ZWRQb3MsIHBlZyRjdXJyUG9zKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4cGVjdGVkKGRlc2NyaXB0aW9uLCBsb2NhdGlvbikge1xuICAgIGxvY2F0aW9uID0gbG9jYXRpb24gIT09IHVuZGVmaW5lZFxuICAgICAgPyBsb2NhdGlvblxuICAgICAgOiBwZWckY29tcHV0ZUxvY2F0aW9uKHBlZyRzYXZlZFBvcywgcGVnJGN1cnJQb3MpO1xuXG4gICAgdGhyb3cgcGVnJGJ1aWxkU3RydWN0dXJlZEVycm9yKFxuICAgICAgW3BlZyRvdGhlckV4cGVjdGF0aW9uKGRlc2NyaXB0aW9uKV0sXG4gICAgICBpbnB1dC5zdWJzdHJpbmcocGVnJHNhdmVkUG9zLCBwZWckY3VyclBvcyksXG4gICAgICBsb2NhdGlvblxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBlcnJvcihtZXNzYWdlLCBsb2NhdGlvbikge1xuICAgIGxvY2F0aW9uID0gbG9jYXRpb24gIT09IHVuZGVmaW5lZFxuICAgICAgPyBsb2NhdGlvblxuICAgICAgOiBwZWckY29tcHV0ZUxvY2F0aW9uKHBlZyRzYXZlZFBvcywgcGVnJGN1cnJQb3MpO1xuXG4gICAgdGhyb3cgcGVnJGJ1aWxkU2ltcGxlRXJyb3IobWVzc2FnZSwgbG9jYXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gcGVnJGxpdGVyYWxFeHBlY3RhdGlvbih0ZXh0LCBpZ25vcmVDYXNlKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogXCJsaXRlcmFsXCIsIHRleHQ6IHRleHQsIGlnbm9yZUNhc2U6IGlnbm9yZUNhc2UgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBlZyRjbGFzc0V4cGVjdGF0aW9uKHBhcnRzLCBpbnZlcnRlZCwgaWdub3JlQ2FzZSkge1xuICAgIHJldHVybiB7IHR5cGU6IFwiY2xhc3NcIiwgcGFydHM6IHBhcnRzLCBpbnZlcnRlZDogaW52ZXJ0ZWQsIGlnbm9yZUNhc2U6IGlnbm9yZUNhc2UgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBlZyRhbnlFeHBlY3RhdGlvbigpIHtcbiAgICByZXR1cm4geyB0eXBlOiBcImFueVwiIH07XG4gIH1cblxuICBmdW5jdGlvbiBwZWckZW5kRXhwZWN0YXRpb24oKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogXCJlbmRcIiB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcGVnJG90aGVyRXhwZWN0YXRpb24oZGVzY3JpcHRpb24pIHtcbiAgICByZXR1cm4geyB0eXBlOiBcIm90aGVyXCIsIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcGVnJGNvbXB1dGVQb3NEZXRhaWxzKHBvcykge1xuICAgIHZhciBkZXRhaWxzID0gcGVnJHBvc0RldGFpbHNDYWNoZVtwb3NdO1xuICAgIHZhciBwO1xuXG4gICAgaWYgKGRldGFpbHMpIHtcbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH0gZWxzZSB7XG4gICAgICBwID0gcG9zIC0gMTtcbiAgICAgIHdoaWxlICghcGVnJHBvc0RldGFpbHNDYWNoZVtwXSkge1xuICAgICAgICBwLS07XG4gICAgICB9XG5cbiAgICAgIGRldGFpbHMgPSBwZWckcG9zRGV0YWlsc0NhY2hlW3BdO1xuICAgICAgZGV0YWlscyA9IHtcbiAgICAgICAgbGluZTogZGV0YWlscy5saW5lLFxuICAgICAgICBjb2x1bW46IGRldGFpbHMuY29sdW1uXG4gICAgICB9O1xuXG4gICAgICB3aGlsZSAocCA8IHBvcykge1xuICAgICAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChwKSA9PT0gMTApIHtcbiAgICAgICAgICBkZXRhaWxzLmxpbmUrKztcbiAgICAgICAgICBkZXRhaWxzLmNvbHVtbiA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGV0YWlscy5jb2x1bW4rKztcbiAgICAgICAgfVxuXG4gICAgICAgIHArKztcbiAgICAgIH1cblxuICAgICAgcGVnJHBvc0RldGFpbHNDYWNoZVtwb3NdID0gZGV0YWlscztcblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9XG5cbiAgdmFyIHBlZyRWQUxJREZJTEVOQU1FID0gdHlwZW9mIG9wdGlvbnMuZmlsZW5hbWUgPT09IFwic3RyaW5nXCIgJiYgb3B0aW9ucy5maWxlbmFtZS5sZW5ndGggPiAwO1xuICBmdW5jdGlvbiBwZWckY29tcHV0ZUxvY2F0aW9uKHN0YXJ0UG9zLCBlbmRQb3MpIHtcbiAgICB2YXIgbG9jID0ge307XG5cbiAgICBpZiAoIHBlZyRWQUxJREZJTEVOQU1FICkgbG9jLmZpbGVuYW1lID0gb3B0aW9ucy5maWxlbmFtZTtcblxuICAgIHZhciBzdGFydFBvc0RldGFpbHMgPSBwZWckY29tcHV0ZVBvc0RldGFpbHMoc3RhcnRQb3MpO1xuICAgIGxvYy5zdGFydCA9IHtcbiAgICAgIG9mZnNldDogc3RhcnRQb3MsXG4gICAgICBsaW5lOiBzdGFydFBvc0RldGFpbHMubGluZSxcbiAgICAgIGNvbHVtbjogc3RhcnRQb3NEZXRhaWxzLmNvbHVtblxuICAgIH07XG5cbiAgICB2YXIgZW5kUG9zRGV0YWlscyA9IHBlZyRjb21wdXRlUG9zRGV0YWlscyhlbmRQb3MpO1xuICAgIGxvYy5lbmQgPSB7XG4gICAgICBvZmZzZXQ6IGVuZFBvcyxcbiAgICAgIGxpbmU6IGVuZFBvc0RldGFpbHMubGluZSxcbiAgICAgIGNvbHVtbjogZW5kUG9zRGV0YWlscy5jb2x1bW5cbiAgICB9O1xuXG4gICAgcmV0dXJuIGxvYztcbiAgfVxuXG4gIGZ1bmN0aW9uIHBlZyRiZWdpbigpIHtcbiAgICBwZWckZXhwZWN0ZWQucHVzaCh7IHBvczogcGVnJGN1cnJQb3MsIHZhcmlhbnRzOiBbXSB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBlZyRleHBlY3QoZXhwZWN0ZWQpIHtcbiAgICB2YXIgdG9wID0gcGVnJGV4cGVjdGVkW3BlZyRleHBlY3RlZC5sZW5ndGggLSAxXTtcblxuICAgIGlmIChwZWckY3VyclBvcyA8IHRvcC5wb3MpIHsgcmV0dXJuOyB9XG5cbiAgICBpZiAocGVnJGN1cnJQb3MgPiB0b3AucG9zKSB7XG4gICAgICB0b3AucG9zID0gcGVnJGN1cnJQb3M7XG4gICAgICB0b3AudmFyaWFudHMgPSBbXTtcbiAgICB9XG5cbiAgICB0b3AudmFyaWFudHMucHVzaChleHBlY3RlZCk7XG4gIH1cblxuICBmdW5jdGlvbiBwZWckZW5kKGludmVydCkge1xuICAgIHZhciBleHBlY3RlZCA9IHBlZyRleHBlY3RlZC5wb3AoKTtcbiAgICB2YXIgdG9wID0gcGVnJGV4cGVjdGVkW3BlZyRleHBlY3RlZC5sZW5ndGggLSAxXTtcbiAgICB2YXIgdmFyaWFudHMgPSBleHBlY3RlZC52YXJpYW50cztcblxuICAgIGlmICh0b3AucG9zICE9PSBleHBlY3RlZC5wb3MpIHsgcmV0dXJuOyB9XG5cbiAgICBpZiAoaW52ZXJ0KSB7XG4gICAgICB2YXJpYW50cyA9IHZhcmlhbnRzLm1hcChmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBlLnR5cGUgPT09IFwibm90XCIgPyBlLmV4cGVjdGVkIDogeyB0eXBlOiBcIm5vdFwiLCBleHBlY3RlZDogZSB9O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkodG9wLnZhcmlhbnRzLCB2YXJpYW50cyk7XG4gIH1cblxuICBmdW5jdGlvbiBwZWckYnVpbGRTaW1wbGVFcnJvcihtZXNzYWdlLCBsb2NhdGlvbikge1xuICAgIHJldHVybiBuZXcgcGVnJFN5bnRheEVycm9yKG1lc3NhZ2UsIG51bGwsIG51bGwsIGxvY2F0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBlZyRidWlsZFN0cnVjdHVyZWRFcnJvcihleHBlY3RlZCwgZm91bmQsIGxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIG5ldyBwZWckU3ludGF4RXJyb3IoXG4gICAgICBwZWckU3ludGF4RXJyb3IuYnVpbGRNZXNzYWdlKGV4cGVjdGVkLCBmb3VuZCksXG4gICAgICBleHBlY3RlZCxcbiAgICAgIGZvdW5kLFxuICAgICAgbG9jYXRpb25cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcGVnJGJ1aWxkRXJyb3IoKSB7XG4gICAgdmFyIGV4cGVjdGVkID0gcGVnJGV4cGVjdGVkWzBdO1xuICAgIHZhciBmYWlsUG9zID0gZXhwZWN0ZWQucG9zO1xuXG4gICAgcmV0dXJuIHBlZyRidWlsZFN0cnVjdHVyZWRFcnJvcihcbiAgICAgIGV4cGVjdGVkLnZhcmlhbnRzLFxuICAgICAgZmFpbFBvcyA8IGlucHV0Lmxlbmd0aCA/IGlucHV0LmNoYXJBdChmYWlsUG9zKSA6IG51bGwsXG4gICAgICBmYWlsUG9zIDwgaW5wdXQubGVuZ3RoXG4gICAgICAgID8gcGVnJGNvbXB1dGVMb2NhdGlvbihmYWlsUG9zLCBmYWlsUG9zICsgMSlcbiAgICAgICAgOiBwZWckY29tcHV0ZUxvY2F0aW9uKGZhaWxQb3MsIGZhaWxQb3MpXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBlZyRwYXJzZXRyYW5zZm9ybUxpc3QoKSB7XG4gICAgdmFyIHMwLCBzMSwgczIsIHMzLCBzNDtcblxuICAgIHZhciBydWxlJGV4cGVjdHMgPSBmdW5jdGlvbiAoZXhwZWN0ZWQpIHtcbiAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHBlZyRleHBlY3QoZXhwZWN0ZWQpO1xuICAgIH1cblxuICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgczEgPSBbXTtcbiAgICBzMiA9IHBlZyRwYXJzZXdzcCgpO1xuICAgIHdoaWxlIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgczEucHVzaChzMik7XG4gICAgICBzMiA9IHBlZyRwYXJzZXdzcCgpO1xuICAgIH1cbiAgICBzMiA9IHBlZyRwYXJzZXRyYW5zZm9ybXMoKTtcbiAgICBpZiAoczIgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgIHMyID0gbnVsbDtcbiAgICB9XG4gICAgczMgPSBbXTtcbiAgICBzNCA9IHBlZyRwYXJzZXdzcCgpO1xuICAgIHdoaWxlIChzNCAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgczMucHVzaChzNCk7XG4gICAgICBzNCA9IHBlZyRwYXJzZXdzcCgpO1xuICAgIH1cbiAgICBwZWckc2F2ZWRQb3MgPSBzMDtcbiAgICBzMCA9IHBlZyRmMChzMik7XG5cbiAgICByZXR1cm4gczA7XG4gIH1cblxuICBmdW5jdGlvbiBwZWckcGFyc2V0cmFuc2Zvcm1zKCkge1xuICAgIHZhciBzMCwgczEsIHMyLCBzMztcblxuICAgIHZhciBydWxlJGV4cGVjdHMgPSBmdW5jdGlvbiAoZXhwZWN0ZWQpIHtcbiAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHBlZyRleHBlY3QoZXhwZWN0ZWQpO1xuICAgIH1cblxuICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgczEgPSBwZWckcGFyc2V0cmFuc2Zvcm0oKTtcbiAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgIHMyID0gW107XG4gICAgICBzMyA9IHBlZyRwYXJzZWNvbW1hV3NwKCk7XG4gICAgICBpZiAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgd2hpbGUgKHMzICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgczIucHVzaChzMyk7XG4gICAgICAgICAgczMgPSBwZWckcGFyc2Vjb21tYVdzcCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzMiA9IHBlZyRGQUlMRUQ7XG4gICAgICB9XG4gICAgICBpZiAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczMgPSBwZWckcGFyc2V0cmFuc2Zvcm1zKCk7XG4gICAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHBlZyRzYXZlZFBvcyA9IHMwO1xuICAgICAgICAgIHMwID0gcGVnJGYxKHMxLCBzMyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICB9XG4gICAgaWYgKHMwID09PSBwZWckRkFJTEVEKSB7XG4gICAgICBzMCA9IHBlZyRwYXJzZXRyYW5zZm9ybSgpO1xuICAgIH1cblxuICAgIHJldHVybiBzMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBlZyRwYXJzZXRyYW5zZm9ybSgpIHtcbiAgICB2YXIgczA7XG5cbiAgICB2YXIgcnVsZSRleHBlY3RzID0gZnVuY3Rpb24gKGV4cGVjdGVkKSB7XG4gICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSBwZWckZXhwZWN0KGV4cGVjdGVkKTtcbiAgICB9XG5cbiAgICBzMCA9IHBlZyRwYXJzZW1hdHJpeCgpO1xuICAgIGlmIChzMCA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgczAgPSBwZWckcGFyc2V0cmFuc2xhdGUoKTtcbiAgICAgIGlmIChzMCA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMCA9IHBlZyRwYXJzZXNjYWxlKCk7XG4gICAgICAgIGlmIChzMCA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHMwID0gcGVnJHBhcnNlcm90YXRlKCk7XG4gICAgICAgICAgaWYgKHMwID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBzMCA9IHBlZyRwYXJzZXNrZXdYKCk7XG4gICAgICAgICAgICBpZiAoczAgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgczAgPSBwZWckcGFyc2Vza2V3WSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBlZyRwYXJzZW1hdHJpeCgpIHtcbiAgICB2YXIgczAsIHMxLCBzMiwgczMsIHM0LCBzNSwgczYsIHM3LCBzOCwgczksIHMxMCwgczExLCBzMTIsIHMxMywgczE0LCBzMTUsIHMxNiwgczE3O1xuXG4gICAgdmFyIHJ1bGUkZXhwZWN0cyA9IGZ1bmN0aW9uIChleHBlY3RlZCkge1xuICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgcGVnJGV4cGVjdChleHBlY3RlZCk7XG4gICAgfVxuXG4gICAgczAgPSBwZWckY3VyclBvcztcbiAgICBydWxlJGV4cGVjdHMocGVnJGUwKTtcbiAgICBpZiAoaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCA2KSA9PT0gcGVnJGMwKSB7XG4gICAgICBzMSA9IHBlZyRjMDtcbiAgICAgIHBlZyRjdXJyUG9zICs9IDY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICB9XG4gICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICBzMiA9IFtdO1xuICAgICAgczMgPSBwZWckcGFyc2V3c3AoKTtcbiAgICAgIHdoaWxlIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMi5wdXNoKHMzKTtcbiAgICAgICAgczMgPSBwZWckcGFyc2V3c3AoKTtcbiAgICAgIH1cbiAgICAgIHJ1bGUkZXhwZWN0cyhwZWckZTEpO1xuICAgICAgaWYgKGlucHV0LmNoYXJDb2RlQXQocGVnJGN1cnJQb3MpID09PSA0MCkge1xuICAgICAgICBzMyA9IHBlZyRjMTtcbiAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHMzID0gcGVnJEZBSUxFRDtcbiAgICAgIH1cbiAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzNCA9IFtdO1xuICAgICAgICBzNSA9IHBlZyRwYXJzZXdzcCgpO1xuICAgICAgICB3aGlsZSAoczUgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzNC5wdXNoKHM1KTtcbiAgICAgICAgICBzNSA9IHBlZyRwYXJzZXdzcCgpO1xuICAgICAgICB9XG4gICAgICAgIHM1ID0gcGVnJHBhcnNlbnVtYmVyKCk7XG4gICAgICAgIGlmIChzNSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHM2ID0gcGVnJHBhcnNlY29tbWFXc3AoKTtcbiAgICAgICAgICBpZiAoczYgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHM3ID0gcGVnJHBhcnNlbnVtYmVyKCk7XG4gICAgICAgICAgICBpZiAoczcgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgczggPSBwZWckcGFyc2Vjb21tYVdzcCgpO1xuICAgICAgICAgICAgICBpZiAoczggIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICBzOSA9IHBlZyRwYXJzZW51bWJlcigpO1xuICAgICAgICAgICAgICAgIGlmIChzOSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgICAgczEwID0gcGVnJHBhcnNlY29tbWFXc3AoKTtcbiAgICAgICAgICAgICAgICAgIGlmIChzMTAgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgczExID0gcGVnJHBhcnNlbnVtYmVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzMTEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzMTIgPSBwZWckcGFyc2Vjb21tYVdzcCgpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChzMTIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMxMyA9IHBlZyRwYXJzZW51bWJlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMxMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzMTQgPSBwZWckcGFyc2Vjb21tYVdzcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoczE0ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgczE1ID0gcGVnJHBhcnNlbnVtYmVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMxNSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgczE2ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzMTcgPSBwZWckcGFyc2V3c3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChzMTcgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgczE2LnB1c2goczE3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgczE3ID0gcGVnJHBhcnNld3NwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlJGV4cGVjdHMocGVnJGUyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KHBlZyRjdXJyUG9zKSA9PT0gNDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgczE3ID0gcGVnJGMyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgczE3ID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzMTcgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVnJHNhdmVkUG9zID0gczA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMwID0gcGVnJGYyKHM1LCBzNywgczksIHMxMSwgczEzLCBzMTUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgICAgICAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgICAgICAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgICAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgIH1cblxuICAgIHJldHVybiBzMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBlZyRwYXJzZXRyYW5zbGF0ZSgpIHtcbiAgICB2YXIgczAsIHMxLCBzMiwgczMsIHM0LCBzNSwgczYsIHM3LCBzODtcblxuICAgIHZhciBydWxlJGV4cGVjdHMgPSBmdW5jdGlvbiAoZXhwZWN0ZWQpIHtcbiAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHBlZyRleHBlY3QoZXhwZWN0ZWQpO1xuICAgIH1cblxuICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgcnVsZSRleHBlY3RzKHBlZyRlMyk7XG4gICAgaWYgKGlucHV0LnN1YnN0cihwZWckY3VyclBvcywgOSkgPT09IHBlZyRjMykge1xuICAgICAgczEgPSBwZWckYzM7XG4gICAgICBwZWckY3VyclBvcyArPSA5O1xuICAgIH0gZWxzZSB7XG4gICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgfVxuICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgczIgPSBbXTtcbiAgICAgIHMzID0gcGVnJHBhcnNld3NwKCk7XG4gICAgICB3aGlsZSAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczIucHVzaChzMyk7XG4gICAgICAgIHMzID0gcGVnJHBhcnNld3NwKCk7XG4gICAgICB9XG4gICAgICBydWxlJGV4cGVjdHMocGVnJGUxKTtcbiAgICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KHBlZyRjdXJyUG9zKSA9PT0gNDApIHtcbiAgICAgICAgczMgPSBwZWckYzE7XG4gICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzMyA9IHBlZyRGQUlMRUQ7XG4gICAgICB9XG4gICAgICBpZiAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczQgPSBbXTtcbiAgICAgICAgczUgPSBwZWckcGFyc2V3c3AoKTtcbiAgICAgICAgd2hpbGUgKHM1ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgczQucHVzaChzNSk7XG4gICAgICAgICAgczUgPSBwZWckcGFyc2V3c3AoKTtcbiAgICAgICAgfVxuICAgICAgICBzNSA9IHBlZyRwYXJzZW51bWJlcigpO1xuICAgICAgICBpZiAoczUgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzNiA9IHBlZyRwYXJzZWNvbW1hV3NwTnVtYmVyKCk7XG4gICAgICAgICAgaWYgKHM2ID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBzNiA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHM3ID0gW107XG4gICAgICAgICAgczggPSBwZWckcGFyc2V3c3AoKTtcbiAgICAgICAgICB3aGlsZSAoczggIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHM3LnB1c2goczgpO1xuICAgICAgICAgICAgczggPSBwZWckcGFyc2V3c3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcnVsZSRleHBlY3RzKHBlZyRlMik7XG4gICAgICAgICAgaWYgKGlucHV0LmNoYXJDb2RlQXQocGVnJGN1cnJQb3MpID09PSA0MSkge1xuICAgICAgICAgICAgczggPSBwZWckYzI7XG4gICAgICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzOCA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzOCAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgcGVnJHNhdmVkUG9zID0gczA7XG4gICAgICAgICAgICBzMCA9IHBlZyRmMyhzNSwgczYpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgIH1cblxuICAgIHJldHVybiBzMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBlZyRwYXJzZXNjYWxlKCkge1xuICAgIHZhciBzMCwgczEsIHMyLCBzMywgczQsIHM1LCBzNiwgczcsIHM4O1xuXG4gICAgdmFyIHJ1bGUkZXhwZWN0cyA9IGZ1bmN0aW9uIChleHBlY3RlZCkge1xuICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgcGVnJGV4cGVjdChleHBlY3RlZCk7XG4gICAgfVxuXG4gICAgczAgPSBwZWckY3VyclBvcztcbiAgICBydWxlJGV4cGVjdHMocGVnJGU0KTtcbiAgICBpZiAoaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCA1KSA9PT0gcGVnJGM0KSB7XG4gICAgICBzMSA9IHBlZyRjNDtcbiAgICAgIHBlZyRjdXJyUG9zICs9IDU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICB9XG4gICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICBzMiA9IFtdO1xuICAgICAgczMgPSBwZWckcGFyc2V3c3AoKTtcbiAgICAgIHdoaWxlIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMi5wdXNoKHMzKTtcbiAgICAgICAgczMgPSBwZWckcGFyc2V3c3AoKTtcbiAgICAgIH1cbiAgICAgIHJ1bGUkZXhwZWN0cyhwZWckZTEpO1xuICAgICAgaWYgKGlucHV0LmNoYXJDb2RlQXQocGVnJGN1cnJQb3MpID09PSA0MCkge1xuICAgICAgICBzMyA9IHBlZyRjMTtcbiAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHMzID0gcGVnJEZBSUxFRDtcbiAgICAgIH1cbiAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzNCA9IFtdO1xuICAgICAgICBzNSA9IHBlZyRwYXJzZXdzcCgpO1xuICAgICAgICB3aGlsZSAoczUgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzNC5wdXNoKHM1KTtcbiAgICAgICAgICBzNSA9IHBlZyRwYXJzZXdzcCgpO1xuICAgICAgICB9XG4gICAgICAgIHM1ID0gcGVnJHBhcnNlbnVtYmVyKCk7XG4gICAgICAgIGlmIChzNSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHM2ID0gcGVnJHBhcnNlY29tbWFXc3BOdW1iZXIoKTtcbiAgICAgICAgICBpZiAoczYgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHM2ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgczcgPSBbXTtcbiAgICAgICAgICBzOCA9IHBlZyRwYXJzZXdzcCgpO1xuICAgICAgICAgIHdoaWxlIChzOCAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgczcucHVzaChzOCk7XG4gICAgICAgICAgICBzOCA9IHBlZyRwYXJzZXdzcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBydWxlJGV4cGVjdHMocGVnJGUyKTtcbiAgICAgICAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChwZWckY3VyclBvcykgPT09IDQxKSB7XG4gICAgICAgICAgICBzOCA9IHBlZyRjMjtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHM4ID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHM4ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBwZWckc2F2ZWRQb3MgPSBzMDtcbiAgICAgICAgICAgIHMwID0gcGVnJGY0KHM1LCBzNik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHMwO1xuICB9XG5cbiAgZnVuY3Rpb24gcGVnJHBhcnNlcm90YXRlKCkge1xuICAgIHZhciBzMCwgczEsIHMyLCBzMywgczQsIHM1LCBzNiwgczcsIHM4O1xuXG4gICAgdmFyIHJ1bGUkZXhwZWN0cyA9IGZ1bmN0aW9uIChleHBlY3RlZCkge1xuICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgcGVnJGV4cGVjdChleHBlY3RlZCk7XG4gICAgfVxuXG4gICAgczAgPSBwZWckY3VyclBvcztcbiAgICBydWxlJGV4cGVjdHMocGVnJGU1KTtcbiAgICBpZiAoaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCA2KSA9PT0gcGVnJGM1KSB7XG4gICAgICBzMSA9IHBlZyRjNTtcbiAgICAgIHBlZyRjdXJyUG9zICs9IDY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICB9XG4gICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICBzMiA9IFtdO1xuICAgICAgczMgPSBwZWckcGFyc2V3c3AoKTtcbiAgICAgIHdoaWxlIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMi5wdXNoKHMzKTtcbiAgICAgICAgczMgPSBwZWckcGFyc2V3c3AoKTtcbiAgICAgIH1cbiAgICAgIHJ1bGUkZXhwZWN0cyhwZWckZTEpO1xuICAgICAgaWYgKGlucHV0LmNoYXJDb2RlQXQocGVnJGN1cnJQb3MpID09PSA0MCkge1xuICAgICAgICBzMyA9IHBlZyRjMTtcbiAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHMzID0gcGVnJEZBSUxFRDtcbiAgICAgIH1cbiAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzNCA9IFtdO1xuICAgICAgICBzNSA9IHBlZyRwYXJzZXdzcCgpO1xuICAgICAgICB3aGlsZSAoczUgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzNC5wdXNoKHM1KTtcbiAgICAgICAgICBzNSA9IHBlZyRwYXJzZXdzcCgpO1xuICAgICAgICB9XG4gICAgICAgIHM1ID0gcGVnJHBhcnNlbnVtYmVyKCk7XG4gICAgICAgIGlmIChzNSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHM2ID0gcGVnJHBhcnNlY29tbWFXc3BUd29OdW1iZXJzKCk7XG4gICAgICAgICAgaWYgKHM2ID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBzNiA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHM3ID0gW107XG4gICAgICAgICAgczggPSBwZWckcGFyc2V3c3AoKTtcbiAgICAgICAgICB3aGlsZSAoczggIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHM3LnB1c2goczgpO1xuICAgICAgICAgICAgczggPSBwZWckcGFyc2V3c3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcnVsZSRleHBlY3RzKHBlZyRlMik7XG4gICAgICAgICAgaWYgKGlucHV0LmNoYXJDb2RlQXQocGVnJGN1cnJQb3MpID09PSA0MSkge1xuICAgICAgICAgICAgczggPSBwZWckYzI7XG4gICAgICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzOCA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzOCAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgcGVnJHNhdmVkUG9zID0gczA7XG4gICAgICAgICAgICBzMCA9IHBlZyRmNShzNSwgczYpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgIH1cblxuICAgIHJldHVybiBzMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBlZyRwYXJzZXNrZXdYKCkge1xuICAgIHZhciBzMCwgczEsIHMyLCBzMywgczQsIHM1LCBzNiwgczc7XG5cbiAgICB2YXIgcnVsZSRleHBlY3RzID0gZnVuY3Rpb24gKGV4cGVjdGVkKSB7XG4gICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSBwZWckZXhwZWN0KGV4cGVjdGVkKTtcbiAgICB9XG5cbiAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgIHJ1bGUkZXhwZWN0cyhwZWckZTYpO1xuICAgIGlmIChpbnB1dC5zdWJzdHIocGVnJGN1cnJQb3MsIDUpID09PSBwZWckYzYpIHtcbiAgICAgIHMxID0gcGVnJGM2O1xuICAgICAgcGVnJGN1cnJQb3MgKz0gNTtcbiAgICB9IGVsc2Uge1xuICAgICAgczEgPSBwZWckRkFJTEVEO1xuICAgIH1cbiAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgIHMyID0gW107XG4gICAgICBzMyA9IHBlZyRwYXJzZXdzcCgpO1xuICAgICAgd2hpbGUgKHMzICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMyLnB1c2goczMpO1xuICAgICAgICBzMyA9IHBlZyRwYXJzZXdzcCgpO1xuICAgICAgfVxuICAgICAgcnVsZSRleHBlY3RzKHBlZyRlMSk7XG4gICAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChwZWckY3VyclBvcykgPT09IDQwKSB7XG4gICAgICAgIHMzID0gcGVnJGMxO1xuICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgczMgPSBwZWckRkFJTEVEO1xuICAgICAgfVxuICAgICAgaWYgKHMzICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHM0ID0gW107XG4gICAgICAgIHM1ID0gcGVnJHBhcnNld3NwKCk7XG4gICAgICAgIHdoaWxlIChzNSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHM0LnB1c2goczUpO1xuICAgICAgICAgIHM1ID0gcGVnJHBhcnNld3NwKCk7XG4gICAgICAgIH1cbiAgICAgICAgczUgPSBwZWckcGFyc2VudW1iZXIoKTtcbiAgICAgICAgaWYgKHM1ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgczYgPSBbXTtcbiAgICAgICAgICBzNyA9IHBlZyRwYXJzZXdzcCgpO1xuICAgICAgICAgIHdoaWxlIChzNyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgczYucHVzaChzNyk7XG4gICAgICAgICAgICBzNyA9IHBlZyRwYXJzZXdzcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBydWxlJGV4cGVjdHMocGVnJGUyKTtcbiAgICAgICAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChwZWckY3VyclBvcykgPT09IDQxKSB7XG4gICAgICAgICAgICBzNyA9IHBlZyRjMjtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHM3ID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHM3ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBwZWckc2F2ZWRQb3MgPSBzMDtcbiAgICAgICAgICAgIHMwID0gcGVnJGY2KHM1KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICB9XG5cbiAgICByZXR1cm4gczA7XG4gIH1cblxuICBmdW5jdGlvbiBwZWckcGFyc2Vza2V3WSgpIHtcbiAgICB2YXIgczAsIHMxLCBzMiwgczMsIHM0LCBzNSwgczYsIHM3O1xuXG4gICAgdmFyIHJ1bGUkZXhwZWN0cyA9IGZ1bmN0aW9uIChleHBlY3RlZCkge1xuICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgcGVnJGV4cGVjdChleHBlY3RlZCk7XG4gICAgfVxuXG4gICAgczAgPSBwZWckY3VyclBvcztcbiAgICBydWxlJGV4cGVjdHMocGVnJGU3KTtcbiAgICBpZiAoaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCA1KSA9PT0gcGVnJGM3KSB7XG4gICAgICBzMSA9IHBlZyRjNztcbiAgICAgIHBlZyRjdXJyUG9zICs9IDU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICB9XG4gICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICBzMiA9IFtdO1xuICAgICAgczMgPSBwZWckcGFyc2V3c3AoKTtcbiAgICAgIHdoaWxlIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMi5wdXNoKHMzKTtcbiAgICAgICAgczMgPSBwZWckcGFyc2V3c3AoKTtcbiAgICAgIH1cbiAgICAgIHJ1bGUkZXhwZWN0cyhwZWckZTEpO1xuICAgICAgaWYgKGlucHV0LmNoYXJDb2RlQXQocGVnJGN1cnJQb3MpID09PSA0MCkge1xuICAgICAgICBzMyA9IHBlZyRjMTtcbiAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHMzID0gcGVnJEZBSUxFRDtcbiAgICAgIH1cbiAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzNCA9IFtdO1xuICAgICAgICBzNSA9IHBlZyRwYXJzZXdzcCgpO1xuICAgICAgICB3aGlsZSAoczUgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzNC5wdXNoKHM1KTtcbiAgICAgICAgICBzNSA9IHBlZyRwYXJzZXdzcCgpO1xuICAgICAgICB9XG4gICAgICAgIHM1ID0gcGVnJHBhcnNlbnVtYmVyKCk7XG4gICAgICAgIGlmIChzNSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHM2ID0gW107XG4gICAgICAgICAgczcgPSBwZWckcGFyc2V3c3AoKTtcbiAgICAgICAgICB3aGlsZSAoczcgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHM2LnB1c2goczcpO1xuICAgICAgICAgICAgczcgPSBwZWckcGFyc2V3c3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcnVsZSRleHBlY3RzKHBlZyRlMik7XG4gICAgICAgICAgaWYgKGlucHV0LmNoYXJDb2RlQXQocGVnJGN1cnJQb3MpID09PSA0MSkge1xuICAgICAgICAgICAgczcgPSBwZWckYzI7XG4gICAgICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzNyA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzNyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgcGVnJHNhdmVkUG9zID0gczA7XG4gICAgICAgICAgICBzMCA9IHBlZyRmNyhzNSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHMwO1xuICB9XG5cbiAgZnVuY3Rpb24gcGVnJHBhcnNlbnVtYmVyKCkge1xuICAgIHZhciBzMCwgczEsIHMyLCBzMztcblxuICAgIHZhciBydWxlJGV4cGVjdHMgPSBmdW5jdGlvbiAoZXhwZWN0ZWQpIHtcbiAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHBlZyRleHBlY3QoZXhwZWN0ZWQpO1xuICAgIH1cblxuICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgczEgPSBwZWckY3VyclBvcztcbiAgICBzMiA9IHBlZyRwYXJzZXNpZ24oKTtcbiAgICBpZiAoczIgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgIHMyID0gbnVsbDtcbiAgICB9XG4gICAgczMgPSBwZWckcGFyc2VmbG9hdGluZ1BvaW50Q29uc3RhbnQoKTtcbiAgICBpZiAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgIHMyID0gW3MyLCBzM107XG4gICAgICBzMSA9IHMyO1xuICAgIH0gZWxzZSB7XG4gICAgICBwZWckY3VyclBvcyA9IHMxO1xuICAgICAgczEgPSBwZWckRkFJTEVEO1xuICAgIH1cbiAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgIHBlZyRzYXZlZFBvcyA9IHMwO1xuICAgICAgczEgPSBwZWckZjgoczEpO1xuICAgIH1cbiAgICBzMCA9IHMxO1xuICAgIGlmIChzMCA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgIHMxID0gcGVnJGN1cnJQb3M7XG4gICAgICBzMiA9IHBlZyRwYXJzZXNpZ24oKTtcbiAgICAgIGlmIChzMiA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMiA9IG51bGw7XG4gICAgICB9XG4gICAgICBzMyA9IHBlZyRwYXJzZWludGVnZXJDb25zdGFudCgpO1xuICAgICAgaWYgKHMzICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMyID0gW3MyLCBzM107XG4gICAgICAgIHMxID0gczI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZWckY3VyclBvcyA9IHMxO1xuICAgICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgICB9XG4gICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgcGVnJHNhdmVkUG9zID0gczA7XG4gICAgICAgIHMxID0gcGVnJGY5KHMxKTtcbiAgICAgIH1cbiAgICAgIHMwID0gczE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHMwO1xuICB9XG5cbiAgZnVuY3Rpb24gcGVnJHBhcnNlY29tbWFXc3BOdW1iZXIoKSB7XG4gICAgdmFyIHMwLCBzMSwgczI7XG5cbiAgICB2YXIgcnVsZSRleHBlY3RzID0gZnVuY3Rpb24gKGV4cGVjdGVkKSB7XG4gICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSBwZWckZXhwZWN0KGV4cGVjdGVkKTtcbiAgICB9XG5cbiAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgIHMxID0gcGVnJHBhcnNlY29tbWFXc3AoKTtcbiAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgIHMyID0gcGVnJHBhcnNlbnVtYmVyKCk7XG4gICAgICBpZiAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgcGVnJHNhdmVkUG9zID0gczA7XG4gICAgICAgIHMwID0gcGVnJGYxMChzMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHMwO1xuICB9XG5cbiAgZnVuY3Rpb24gcGVnJHBhcnNlY29tbWFXc3BUd29OdW1iZXJzKCkge1xuICAgIHZhciBzMCwgczEsIHMyLCBzMywgczQ7XG5cbiAgICB2YXIgcnVsZSRleHBlY3RzID0gZnVuY3Rpb24gKGV4cGVjdGVkKSB7XG4gICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSBwZWckZXhwZWN0KGV4cGVjdGVkKTtcbiAgICB9XG5cbiAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgIHMxID0gcGVnJHBhcnNlY29tbWFXc3AoKTtcbiAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgIHMyID0gcGVnJHBhcnNlbnVtYmVyKCk7XG4gICAgICBpZiAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczMgPSBwZWckcGFyc2Vjb21tYVdzcCgpO1xuICAgICAgICBpZiAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzNCA9IHBlZyRwYXJzZW51bWJlcigpO1xuICAgICAgICAgIGlmIChzNCAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgcGVnJHNhdmVkUG9zID0gczA7XG4gICAgICAgICAgICBzMCA9IHBlZyRmMTEoczIsIHM0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICB9XG5cbiAgICByZXR1cm4gczA7XG4gIH1cblxuICBmdW5jdGlvbiBwZWckcGFyc2Vjb21tYVdzcCgpIHtcbiAgICB2YXIgczAsIHMxLCBzMiwgczMsIHM0O1xuXG4gICAgdmFyIHJ1bGUkZXhwZWN0cyA9IGZ1bmN0aW9uIChleHBlY3RlZCkge1xuICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgcGVnJGV4cGVjdChleHBlY3RlZCk7XG4gICAgfVxuXG4gICAgczAgPSBwZWckY3VyclBvcztcbiAgICBzMSA9IFtdO1xuICAgIHMyID0gcGVnJHBhcnNld3NwKCk7XG4gICAgaWYgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICB3aGlsZSAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczEucHVzaChzMik7XG4gICAgICAgIHMyID0gcGVnJHBhcnNld3NwKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICB9XG4gICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICBzMiA9IHBlZyRwYXJzZWNvbW1hKCk7XG4gICAgICBpZiAoczIgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczIgPSBudWxsO1xuICAgICAgfVxuICAgICAgczMgPSBbXTtcbiAgICAgIHM0ID0gcGVnJHBhcnNld3NwKCk7XG4gICAgICB3aGlsZSAoczQgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczMucHVzaChzNCk7XG4gICAgICAgIHM0ID0gcGVnJHBhcnNld3NwKCk7XG4gICAgICB9XG4gICAgICBzMSA9IFtzMSwgczIsIHMzXTtcbiAgICAgIHMwID0gczE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgfVxuICAgIGlmIChzMCA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgIHMxID0gcGVnJHBhcnNlY29tbWEoKTtcbiAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMiA9IFtdO1xuICAgICAgICBzMyA9IHBlZyRwYXJzZXdzcCgpO1xuICAgICAgICB3aGlsZSAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzMi5wdXNoKHMzKTtcbiAgICAgICAgICBzMyA9IHBlZyRwYXJzZXdzcCgpO1xuICAgICAgICB9XG4gICAgICAgIHMxID0gW3MxLCBzMl07XG4gICAgICAgIHMwID0gczE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHMwO1xuICB9XG5cbiAgZnVuY3Rpb24gcGVnJHBhcnNlY29tbWEoKSB7XG4gICAgdmFyIHMwO1xuXG4gICAgdmFyIHJ1bGUkZXhwZWN0cyA9IGZ1bmN0aW9uIChleHBlY3RlZCkge1xuICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgcGVnJGV4cGVjdChleHBlY3RlZCk7XG4gICAgfVxuXG4gICAgcnVsZSRleHBlY3RzKHBlZyRlOCk7XG4gICAgaWYgKGlucHV0LmNoYXJDb2RlQXQocGVnJGN1cnJQb3MpID09PSA0NCkge1xuICAgICAgczAgPSBwZWckYzg7XG4gICAgICBwZWckY3VyclBvcysrO1xuICAgIH0gZWxzZSB7XG4gICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHMwO1xuICB9XG5cbiAgZnVuY3Rpb24gcGVnJHBhcnNlaW50ZWdlckNvbnN0YW50KCkge1xuICAgIHZhciBzMCwgczE7XG5cbiAgICB2YXIgcnVsZSRleHBlY3RzID0gZnVuY3Rpb24gKGV4cGVjdGVkKSB7XG4gICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSBwZWckZXhwZWN0KGV4cGVjdGVkKTtcbiAgICB9XG5cbiAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgIHMxID0gcGVnJHBhcnNlZGlnaXRTZXF1ZW5jZSgpO1xuICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgcGVnJHNhdmVkUG9zID0gczA7XG4gICAgICBzMSA9IHBlZyRmMTIoczEpO1xuICAgIH1cbiAgICBzMCA9IHMxO1xuXG4gICAgcmV0dXJuIHMwO1xuICB9XG5cbiAgZnVuY3Rpb24gcGVnJHBhcnNlZmxvYXRpbmdQb2ludENvbnN0YW50KCkge1xuICAgIHZhciBzMCwgczEsIHMyO1xuXG4gICAgdmFyIHJ1bGUkZXhwZWN0cyA9IGZ1bmN0aW9uIChleHBlY3RlZCkge1xuICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgcGVnJGV4cGVjdChleHBlY3RlZCk7XG4gICAgfVxuXG4gICAgczAgPSBwZWckY3VyclBvcztcbiAgICBzMSA9IHBlZyRwYXJzZWZyYWN0aW9uYWxDb25zdGFudCgpO1xuICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgczIgPSBwZWckcGFyc2VleHBvbmVudCgpO1xuICAgICAgaWYgKHMyID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMyID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHMxID0gW3MxLCBzMl07XG4gICAgICBzMCA9IHMxO1xuICAgIH0gZWxzZSB7XG4gICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgIH1cbiAgICBpZiAoczAgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICBzMSA9IHBlZyRwYXJzZWRpZ2l0U2VxdWVuY2UoKTtcbiAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMiA9IHBlZyRwYXJzZWV4cG9uZW50KCk7XG4gICAgICAgIGlmIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHMxID0gW3MxLCBzMl07XG4gICAgICAgICAgczAgPSBzMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBlZyRwYXJzZWZyYWN0aW9uYWxDb25zdGFudCgpIHtcbiAgICB2YXIgczAsIHMxLCBzMiwgczM7XG5cbiAgICB2YXIgcnVsZSRleHBlY3RzID0gZnVuY3Rpb24gKGV4cGVjdGVkKSB7XG4gICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSBwZWckZXhwZWN0KGV4cGVjdGVkKTtcbiAgICB9XG5cbiAgICBydWxlJGV4cGVjdHMocGVnJGU5KTtcbiAgICBwZWckc2lsZW50RmFpbHMrKztcbiAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgIHMxID0gcGVnJHBhcnNlZGlnaXRTZXF1ZW5jZSgpO1xuICAgIGlmIChzMSA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgczEgPSBudWxsO1xuICAgIH1cbiAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChwZWckY3VyclBvcykgPT09IDQ2KSB7XG4gICAgICBzMiA9IHBlZyRjOTtcbiAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHMyID0gcGVnJEZBSUxFRDtcbiAgICB9XG4gICAgaWYgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICBzMyA9IHBlZyRwYXJzZWRpZ2l0U2VxdWVuY2UoKTtcbiAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBwZWckc2F2ZWRQb3MgPSBzMDtcbiAgICAgICAgczAgPSBwZWckZjEzKHMxLCBzMyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgfVxuICAgIGlmIChzMCA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgIHMxID0gcGVnJHBhcnNlZGlnaXRTZXF1ZW5jZSgpO1xuICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KHBlZyRjdXJyUG9zKSA9PT0gNDYpIHtcbiAgICAgICAgICBzMiA9IHBlZyRjOTtcbiAgICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHMyID0gcGVnJEZBSUxFRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBwZWckc2F2ZWRQb3MgPSBzMDtcbiAgICAgICAgICBzMCA9IHBlZyRmMTQoczEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgICB9XG4gICAgfVxuICAgIHBlZyRzaWxlbnRGYWlscy0tO1xuXG4gICAgcmV0dXJuIHMwO1xuICB9XG5cbiAgZnVuY3Rpb24gcGVnJHBhcnNlZXhwb25lbnQoKSB7XG4gICAgdmFyIHMwLCBzMSwgczIsIHMzO1xuXG4gICAgdmFyIHJ1bGUkZXhwZWN0cyA9IGZ1bmN0aW9uIChleHBlY3RlZCkge1xuICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgcGVnJGV4cGVjdChleHBlY3RlZCk7XG4gICAgfVxuXG4gICAgczAgPSBwZWckY3VyclBvcztcbiAgICBydWxlJGV4cGVjdHMocGVnJGUxMCk7XG4gICAgaWYgKHBlZyRyMC50ZXN0KGlucHV0LmNoYXJBdChwZWckY3VyclBvcykpKSB7XG4gICAgICBzMSA9IGlucHV0LmNoYXJBdChwZWckY3VyclBvcyk7XG4gICAgICBwZWckY3VyclBvcysrO1xuICAgIH0gZWxzZSB7XG4gICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgfVxuICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgczIgPSBwZWckcGFyc2VzaWduKCk7XG4gICAgICBpZiAoczIgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczIgPSBudWxsO1xuICAgICAgfVxuICAgICAgczMgPSBwZWckcGFyc2VkaWdpdFNlcXVlbmNlKCk7XG4gICAgICBpZiAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczEgPSBbczEsIHMyLCBzM107XG4gICAgICAgIHMwID0gczE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHMwO1xuICB9XG5cbiAgZnVuY3Rpb24gcGVnJHBhcnNlc2lnbigpIHtcbiAgICB2YXIgczA7XG5cbiAgICB2YXIgcnVsZSRleHBlY3RzID0gZnVuY3Rpb24gKGV4cGVjdGVkKSB7XG4gICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSBwZWckZXhwZWN0KGV4cGVjdGVkKTtcbiAgICB9XG5cbiAgICBydWxlJGV4cGVjdHMocGVnJGUxMSk7XG4gICAgaWYgKHBlZyRyMS50ZXN0KGlucHV0LmNoYXJBdChwZWckY3VyclBvcykpKSB7XG4gICAgICBzMCA9IGlucHV0LmNoYXJBdChwZWckY3VyclBvcyk7XG4gICAgICBwZWckY3VyclBvcysrO1xuICAgIH0gZWxzZSB7XG4gICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHMwO1xuICB9XG5cbiAgZnVuY3Rpb24gcGVnJHBhcnNlZGlnaXRTZXF1ZW5jZSgpIHtcbiAgICB2YXIgczAsIHMxO1xuXG4gICAgdmFyIHJ1bGUkZXhwZWN0cyA9IGZ1bmN0aW9uIChleHBlY3RlZCkge1xuICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgcGVnJGV4cGVjdChleHBlY3RlZCk7XG4gICAgfVxuXG4gICAgczAgPSBbXTtcbiAgICBzMSA9IHBlZyRwYXJzZWRpZ2l0KCk7XG4gICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICB3aGlsZSAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczAucHVzaChzMSk7XG4gICAgICAgIHMxID0gcGVnJHBhcnNlZGlnaXQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgIH1cblxuICAgIHJldHVybiBzMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBlZyRwYXJzZWRpZ2l0KCkge1xuICAgIHZhciBzMDtcblxuICAgIHZhciBydWxlJGV4cGVjdHMgPSBmdW5jdGlvbiAoZXhwZWN0ZWQpIHtcbiAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHBlZyRleHBlY3QoZXhwZWN0ZWQpO1xuICAgIH1cblxuICAgIHJ1bGUkZXhwZWN0cyhwZWckZTEyKTtcbiAgICBpZiAocGVnJHIyLnRlc3QoaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKSkpIHtcbiAgICAgIHMwID0gaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKTtcbiAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICB9XG5cbiAgICByZXR1cm4gczA7XG4gIH1cblxuICBmdW5jdGlvbiBwZWckcGFyc2V3c3AoKSB7XG4gICAgdmFyIHMwO1xuXG4gICAgdmFyIHJ1bGUkZXhwZWN0cyA9IGZ1bmN0aW9uIChleHBlY3RlZCkge1xuICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgcGVnJGV4cGVjdChleHBlY3RlZCk7XG4gICAgfVxuXG4gICAgcnVsZSRleHBlY3RzKHBlZyRlMTMpO1xuICAgIGlmIChwZWckcjMudGVzdChpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpKSkge1xuICAgICAgczAgPSBpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpO1xuICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICB9IGVsc2Uge1xuICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgIH1cblxuICAgIHJldHVybiBzMDtcbiAgfVxuXG4gIHBlZyRiZWdpbigpO1xuICBwZWckcmVzdWx0ID0gcGVnJHN0YXJ0UnVsZUZ1bmN0aW9uKCk7XG5cbiAgaWYgKHBlZyRyZXN1bHQgIT09IHBlZyRGQUlMRUQgJiYgcGVnJGN1cnJQb3MgPT09IGlucHV0Lmxlbmd0aCkge1xuICAgIHJldHVybiBwZWckcmVzdWx0O1xuICB9IGVsc2Uge1xuICAgIGlmIChwZWckcmVzdWx0ICE9PSBwZWckRkFJTEVEICYmIHBlZyRjdXJyUG9zIDwgaW5wdXQubGVuZ3RoKSB7XG4gICAgICBwZWckZXhwZWN0KHBlZyRlbmRFeHBlY3RhdGlvbigpKTtcbiAgICB9XG5cbiAgICB0aHJvdyBwZWckYnVpbGRFcnJvcigpO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIHBlZyRTeW50YXhFcnJvciBhcyBTeW50YXhFcnJvcixcbiAgcGVnJHBhcnNlIGFzIHBhcnNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFN5bnRheEVycm9yOiBwZWckU3ludGF4RXJyb3IsXG4gIHBhcnNlOiBwZWckcGFyc2Vcbn07XG4iLCJpbXBvcnQgeyBwYXJzZSB9IGZyb20gJy4vZnJvbVRyYW5zZm9ybUF0dHJpYnV0ZS5hdXRvZ2VuZXJhdGVkJ1xuXG4vKipcbiAqIFBhcnNlciBmb3IgU1ZHIFRyYXNmb3JtIEF0dHJpYnV0ZSBodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcvY29vcmRzLmh0bWwjVHJhbnNmb3JtQXR0cmlidXRlIDxici8+XG4gKiBXYXJuaW5nOiBUaGlzIHNob3VsZCBiZSBjb25zaWRlcmVkIEJFVEEgdW50aWwgaXQgaXMgcmVsZWFzZWQgYSBzdGFibGUgdmVyc2lvbiBvZiBwZWdqcy5cbiAqIEBwYXJhbSB0cmFuc2Zvcm1TdHJpbmcge3N0cmluZ30gVHJhbnNmb3JtIHN0cmluZyBhcyBkZWZpbmVkIGJ5IHczIENvbnNvcnRpdW1cbiAqIEByZXR1cm5zIHtNYXRyaXhEZXNjcmlwdG9yW119IEFycmF5IG9mIE1hdHJpeERlc2NyaXB0b3JcbiAqXG4gKiBAZXhhbXBsZVxuICogPiBmcm9tVHJhbnNmb3JtQXR0cmlidXRlKCd0cmFuc2xhdGUoLTEwLC0xMCkgc2NhbGUoMiwyKSB0cmFuc2xhdGUoMTAsMTApJylcbiAqIFtcbiAqICB7IHR5cGU6ICd0cmFuc2xhdGUnLCB0eDogLTEwLCB0eTogLTEwfSxcbiAqICB7IHR5cGU6ICdzY2FsZScsIHN4OiAyLCBzeTogMiB9LFxuICogIHsgdHlwZTogJ3RyYW5zbGF0ZScsIHR4OiAxMCwgdHk6IDEwfVxuICogXVxuICpcbiAqID4gY29tcG9zZShmcm9tRGVmaW5pdGlvbihmcm9tVHJhbnNmb3JtQXR0cmlidXRlKCd0cmFuc2xhdGUoLTEwLCAtMTApIHNjYWxlKDEwLCAxMCknKSkpXG4gKiB7IGE6IDEwLCBjOiAwLCBlOiAtMTAsIGI6IDAsIGQ6IDEwLCBmOiAtMTAgfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVRyYW5zZm9ybUF0dHJpYnV0ZSAodHJhbnNmb3JtU3RyaW5nKSB7XG4gIHJldHVybiBwYXJzZSh0cmFuc2Zvcm1TdHJpbmcpXG59XG4iLCJpbXBvcnQgeyBpbnZlcnNlIH0gZnJvbSAnLi9pbnZlcnNlJ1xuaW1wb3J0IHsgdHJhbnNmb3JtIH0gZnJvbSAnLi90cmFuc2Zvcm0nXG5pbXBvcnQgeyBzbW9vdGhNYXRyaXggfSBmcm9tICcuL3Ntb290aE1hdHJpeCdcblxuLyoqXG4gKiBSZXR1cm5zIGEgbWF0cml4IHRoYXQgdHJhbnNmb3JtcyBhIHRyaWFuZ2xlIHQxIGludG8gYW5vdGhlciB0cmlhbmdsZSB0Miwgb3IgdGhyb3dzIGFuIGV4Y2VwdGlvbiBpZiBpdCBpcyBpbXBvc3NpYmxlLlxuICogQHBhcmFtIHQxIHtQb2ludFtdfSBBcnJheSBvZiBwb2ludHMgY29udGFpbmluZyB0aGUgdGhyZWUgcG9pbnRzIGZvciB0aGUgZmlyc3QgdHJpYW5nbGVcbiAqIEBwYXJhbSB0MiB7UG9pbnRbXX0gQXJyYXkgb2YgcG9pbnRzIGNvbnRhaW5pbmcgdGhlIHRocmVlIHBvaW50cyBmb3IgdGhlIHNlY29uZCB0cmlhbmdsZVxuICogQHJldHVybnMge01hdHJpeH0gTWF0cml4IHdoaWNoIHRyYW5zZm9ybXMgdDEgdG8gdDJcbiAqIEB0aHJvd3MgRXhjZXB0aW9uIGlmIHRoZSBtYXRyaXggYmVjb21lcyBub3QgaW52ZXJ0aWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVRyaWFuZ2xlcyAodDEsIHQyKSB7XG4gIC8vIHBvaW50IHAgPSBmaXJzdCBwb2ludCBvZiB0aGUgdHJpYW5nbGVcbiAgY29uc3QgcHgxID0gdDFbMF0ueCAhPSBudWxsID8gdDFbMF0ueCA6IHQxWzBdWzBdXG4gIGNvbnN0IHB5MSA9IHQxWzBdLnkgIT0gbnVsbCA/IHQxWzBdLnkgOiB0MVswXVsxXVxuICBjb25zdCBweDIgPSB0MlswXS54ICE9IG51bGwgPyB0MlswXS54IDogdDJbMF1bMF1cbiAgY29uc3QgcHkyID0gdDJbMF0ueSAhPSBudWxsID8gdDJbMF0ueSA6IHQyWzBdWzFdXG5cbiAgLy8gcG9pbnQgcSA9IHNlY29uZCBwb2ludCBvZiB0aGUgdHJpYW5nbGVcbiAgY29uc3QgcXgxID0gdDFbMV0ueCAhPSBudWxsID8gdDFbMV0ueCA6IHQxWzFdWzBdXG4gIGNvbnN0IHF5MSA9IHQxWzFdLnkgIT0gbnVsbCA/IHQxWzFdLnkgOiB0MVsxXVsxXVxuICBjb25zdCBxeDIgPSB0MlsxXS54ICE9IG51bGwgPyB0MlsxXS54IDogdDJbMV1bMF1cbiAgY29uc3QgcXkyID0gdDJbMV0ueSAhPSBudWxsID8gdDJbMV0ueSA6IHQyWzFdWzFdXG5cbiAgLy8gcG9pbnQgciA9IHRoaXJkIHBvaW50IG9mIHRoZSB0cmlhbmdsZVxuICBjb25zdCByeDEgPSB0MVsyXS54ICE9IG51bGwgPyB0MVsyXS54IDogdDFbMl1bMF1cbiAgY29uc3QgcnkxID0gdDFbMl0ueSAhPSBudWxsID8gdDFbMl0ueSA6IHQxWzJdWzFdXG4gIGNvbnN0IHJ4MiA9IHQyWzJdLnggIT0gbnVsbCA/IHQyWzJdLnggOiB0MlsyXVswXVxuICBjb25zdCByeTIgPSB0MlsyXS55ICE9IG51bGwgPyB0MlsyXS55IDogdDJbMl1bMV1cblxuICBjb25zdCByMSA9IHtcbiAgICBhOiBweDEgLSByeDEsXG4gICAgYjogcHkxIC0gcnkxLFxuICAgIGM6IHF4MSAtIHJ4MSxcbiAgICBkOiBxeTEgLSByeTEsXG4gICAgZTogcngxLFxuICAgIGY6IHJ5MVxuICB9XG4gIGNvbnN0IHIyID0ge1xuICAgIGE6IHB4MiAtIHJ4MixcbiAgICBiOiBweTIgLSByeTIsXG4gICAgYzogcXgyIC0gcngyLFxuICAgIGQ6IHF5MiAtIHJ5MixcbiAgICBlOiByeDIsXG4gICAgZjogcnkyXG4gIH1cblxuICBjb25zdCBpbnZlcnNlUjEgPSBpbnZlcnNlKHIxKVxuICBjb25zdCBhZmZpbmVNYXRyaXggPSB0cmFuc2Zvcm0oW3IyLCBpbnZlcnNlUjFdKVxuXG4gIC8vIHJvdW5kIHRoZSBtYXRyaXggZWxlbWVudHMgdG8gc21vb3RoIHRoZSBmaW5pdGUgaW52ZXJzaW9uXG4gIHJldHVybiBzbW9vdGhNYXRyaXgoYWZmaW5lTWF0cml4KVxufVxuIiwiLyoqXG4gKiBJZGVudGl0eSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9IEFmZmluZSBNYXRyaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5ICgpIHtcbiAgcmV0dXJuIHtcbiAgICBhOiAxLFxuICAgIGM6IDAsXG4gICAgZTogMCxcbiAgICBiOiAwLFxuICAgIGQ6IDEsXG4gICAgZjogMFxuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2FwcGx5VG9Qb2ludCdcbmV4cG9ydCAqIGZyb20gJy4vZnJvbU9iamVjdCdcbmV4cG9ydCAqIGZyb20gJy4vZnJvbVN0cmluZydcbmV4cG9ydCAqIGZyb20gJy4vaWRlbnRpdHknXG5leHBvcnQgKiBmcm9tICcuL2ludmVyc2UnXG5leHBvcnQgKiBmcm9tICcuL2lzQWZmaW5lTWF0cml4J1xuZXhwb3J0ICogZnJvbSAnLi9yb3RhdGUnXG5leHBvcnQgKiBmcm9tICcuL3NjYWxlJ1xuZXhwb3J0ICogZnJvbSAnLi9zaGVhcidcbmV4cG9ydCAqIGZyb20gJy4vc2tldydcbmV4cG9ydCAqIGZyb20gJy4vdG9TdHJpbmcnXG5leHBvcnQgKiBmcm9tICcuL3RyYW5zZm9ybSdcbmV4cG9ydCAqIGZyb20gJy4vdHJhbnNsYXRlJ1xuZXhwb3J0ICogZnJvbSAnLi9mcm9tVHJpYW5nbGVzJ1xuZXhwb3J0ICogZnJvbSAnLi9zbW9vdGhNYXRyaXgnXG5leHBvcnQgKiBmcm9tICcuL2Zyb21EZWZpbml0aW9uJ1xuZXhwb3J0ICogZnJvbSAnLi9mcm9tVHJhbnNmb3JtQXR0cmlidXRlJ1xuIiwiLyoqXG4gKiBDYWxjdWxhdGUgYSBtYXRyaXggdGhhdCBpcyB0aGUgaW52ZXJzZSBvZiB0aGUgcHJvdmlkZWQgbWF0cml4XG4gKiBAcGFyYW0gbWF0cml4IHtNYXRyaXh9IEFmZmluZSBNYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9IEludmVydGVkIEFmZmluZSBNYXRyaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2UgKG1hdHJpeCkge1xuICAvLyBodHRwOi8vd3d3LndvbGZyYW1hbHBoYS5jb20vaW5wdXQvP2k9SW52ZXJzZSslNUIlN0IlN0JhLGMsZSU3RCwlN0JiLGQsZiU3RCwlN0IwLDAsMSU3RCU3RCU1RFxuXG4gIGNvbnN0IHsgYSwgYiwgYywgZCwgZSwgZiB9ID0gbWF0cml4XG5cbiAgY29uc3QgZGVub20gPSBhICogZCAtIGIgKiBjXG5cbiAgcmV0dXJuIHtcbiAgICBhOiBkIC8gZGVub20sXG4gICAgYjogYiAvIC1kZW5vbSxcbiAgICBjOiBjIC8gLWRlbm9tLFxuICAgIGQ6IGEgLyBkZW5vbSxcbiAgICBlOiAoZCAqIGUgLSBjICogZikgLyAtZGVub20sXG4gICAgZjogKGIgKiBlIC0gYSAqIGYpIC8gZGVub21cbiAgfVxufVxuIiwiaW1wb3J0IHsgaXNOdW1lcmljLCBpc09iamVjdCB9IGZyb20gJy4vdXRpbHMnXG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIG9iamVjdCBjb250YWluIGFuIGFmZmluZSBtYXRyaXhcbiAqIEBwYXJhbSBvYmplY3Qge09iamVjdH0gR2VuZXJpYyBQbGFpbiBPYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgaXMgYW4gb2JqZWN0IGFuZCBjb250YWlucyBhbiBhZmZpbmUgbWF0cml4XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQWZmaW5lTWF0cml4IChvYmplY3QpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KG9iamVjdCkgJiZcbiAgICAnYScgaW4gb2JqZWN0ICYmXG4gICAgaXNOdW1lcmljKG9iamVjdC5hKSAmJlxuICAgICdiJyBpbiBvYmplY3QgJiZcbiAgICBpc051bWVyaWMob2JqZWN0LmIpICYmXG4gICAgJ2MnIGluIG9iamVjdCAmJlxuICAgIGlzTnVtZXJpYyhvYmplY3QuYykgJiZcbiAgICAnZCcgaW4gb2JqZWN0ICYmXG4gICAgaXNOdW1lcmljKG9iamVjdC5kKSAmJlxuICAgICdlJyBpbiBvYmplY3QgJiZcbiAgICBpc051bWVyaWMob2JqZWN0LmUpICYmXG4gICAgJ2YnIGluIG9iamVjdCAmJlxuICAgIGlzTnVtZXJpYyhvYmplY3QuZilcbn1cbiIsImltcG9ydCB7IGlzVW5kZWZpbmVkIH0gZnJvbSAnLi91dGlscydcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJy4vdHJhbnNsYXRlJ1xuaW1wb3J0IHsgdHJhbnNmb3JtIH0gZnJvbSAnLi90cmFuc2Zvcm0nXG5cbmNvbnN0IHsgY29zLCBzaW4sIFBJIH0gPSBNYXRoXG4vKipcbiAqIENhbGN1bGF0ZSBhIHJvdGF0aW9uIG1hdHJpeFxuICogQHBhcmFtIGFuZ2xlIHtudW1iZXJ9IEFuZ2xlIGluIHJhZGlhbnNcbiAqIEBwYXJhbSBbY3hdIHtudW1iZXJ9IElmIChjeCxjeSkgYXJlIHN1cHBsaWVkIHRoZSByb3RhdGUgaXMgYWJvdXQgdGhpcyBwb2ludFxuICogQHBhcmFtIFtjeV0ge251bWJlcn0gSWYgKGN4LGN5KSBhcmUgc3VwcGxpZWQgdGhlIHJvdGF0ZSBpcyBhYm91dCB0aGlzIHBvaW50XG4gKiBAcmV0dXJucyB7TWF0cml4fSBBZmZpbmUgTWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUgKGFuZ2xlLCBjeCwgY3kpIHtcbiAgY29uc3QgY29zQW5nbGUgPSBjb3MoYW5nbGUpXG4gIGNvbnN0IHNpbkFuZ2xlID0gc2luKGFuZ2xlKVxuICBjb25zdCByb3RhdGlvbk1hdHJpeCA9IHtcbiAgICBhOiBjb3NBbmdsZSxcbiAgICBjOiAtc2luQW5nbGUsXG4gICAgZTogMCxcbiAgICBiOiBzaW5BbmdsZSxcbiAgICBkOiBjb3NBbmdsZSxcbiAgICBmOiAwXG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKGN4KSB8fCBpc1VuZGVmaW5lZChjeSkpIHtcbiAgICByZXR1cm4gcm90YXRpb25NYXRyaXhcbiAgfVxuXG4gIHJldHVybiB0cmFuc2Zvcm0oW1xuICAgIHRyYW5zbGF0ZShjeCwgY3kpLFxuICAgIHJvdGF0aW9uTWF0cml4LFxuICAgIHRyYW5zbGF0ZSgtY3gsIC1jeSlcbiAgXSlcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgYSByb3RhdGlvbiBtYXRyaXggd2l0aCBhIERFRyBhbmdsZVxuICogQHBhcmFtIGFuZ2xlIHtudW1iZXJ9IEFuZ2xlIGluIGRlZ3JlZVxuICogQHBhcmFtIFtjeF0ge251bWJlcn0gSWYgKGN4LGN5KSBhcmUgc3VwcGxpZWQgdGhlIHJvdGF0ZSBpcyBhYm91dCB0aGlzIHBvaW50XG4gKiBAcGFyYW0gW2N5XSB7bnVtYmVyfSBJZiAoY3gsY3kpIGFyZSBzdXBwbGllZCB0aGUgcm90YXRlIGlzIGFib3V0IHRoaXMgcG9pbnRcbiAqIEByZXR1cm5zIHtNYXRyaXh9IEFmZmluZSBNYXRyaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZURFRyAoYW5nbGUsIGN4ID0gdW5kZWZpbmVkLCBjeSA9IHVuZGVmaW5lZCkge1xuICByZXR1cm4gcm90YXRlKGFuZ2xlICogUEkgLyAxODAsIGN4LCBjeSlcbn1cbiIsImltcG9ydCB7IGlzVW5kZWZpbmVkIH0gZnJvbSAnLi91dGlscydcblxuLyoqXG4gKiBDYWxjdWxhdGUgYSBzY2FsaW5nIG1hdHJpeFxuICogQHBhcmFtIHN4IHtudW1iZXJ9IFNjYWxpbmcgb24gYXhpcyB4XG4gKiBAcGFyYW0gW3N5ID0gc3hdIHtudW1iZXJ9IFNjYWxpbmcgb24gYXhpcyB5IChkZWZhdWx0IHN4KVxuICogQHJldHVybnMge01hdHJpeH0gQWZmaW5lIE1hdHJpeFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUgKHN4LCBzeSA9IHVuZGVmaW5lZCkge1xuICBpZiAoaXNVbmRlZmluZWQoc3kpKSBzeSA9IHN4XG4gIHJldHVybiB7XG4gICAgYTogc3gsXG4gICAgYzogMCxcbiAgICBlOiAwLFxuICAgIGI6IDAsXG4gICAgZDogc3ksXG4gICAgZjogMFxuICB9XG59XG4iLCIvKipcbiAqIENhbGN1bGF0ZSBhIHNoZWFyIG1hdHJpeFxuICogQHBhcmFtIHNoeCB7bnVtYmVyfSBTaGVhciBvbiBheGlzIHhcbiAqIEBwYXJhbSBzaHkge251bWJlcn0gU2hlYXIgb24gYXhpcyB5XG4gKiBAcmV0dXJucyB7TWF0cml4fSBBZmZpbmUgTWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaGVhciAoc2h4LCBzaHkpIHtcbiAgcmV0dXJuIHtcbiAgICBhOiAxLFxuICAgIGM6IHNoeCxcbiAgICBlOiAwLFxuICAgIGI6IHNoeSxcbiAgICBkOiAxLFxuICAgIGY6IDBcbiAgfVxufVxuIiwiLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RyYW5zZm9ybS1mdW5jdGlvbi9za2V3XG5jb25zdCB7IHRhbiB9ID0gTWF0aFxuXG4vKipcbiAqIENhbGN1bGF0ZSBhIHNrZXcgbWF0cml4XG4gKiBAcGFyYW0gYXgge251bWJlcn0gU2tldyBvbiBheGlzIHhcbiAqIEBwYXJhbSBheSB7bnVtYmVyfSBTa2V3IG9uIGF4aXMgeVxuICogQHJldHVybnMge01hdHJpeH0gQWZmaW5lIE1hdHJpeFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2tldyAoYXgsIGF5KSB7XG4gIHJldHVybiB7XG4gICAgYTogMSxcbiAgICBjOiB0YW4oYXgpLFxuICAgIGU6IDAsXG4gICAgYjogdGFuKGF5KSxcbiAgICBkOiAxLFxuICAgIGY6IDBcbiAgfVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZSBhIHNrZXcgbWF0cml4IHVzaW5nIERFRyBhbmdsZXNcbiAqIEBwYXJhbSBheCB7bnVtYmVyfSBTa2V3IG9uIGF4aXMgeFxuICogQHBhcmFtIGF5IHtudW1iZXJ9IFNrZXcgb24gYXhpcyB5XG4gKiBAcmV0dXJucyB7TWF0cml4fSBBZmZpbmUgTWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBza2V3REVHIChheCwgYXkpIHtcbiAgcmV0dXJuIHNrZXcoYXggKiBNYXRoLlBJIC8gMTgwLCBheSAqIE1hdGguUEkgLyAxODApXG59XG4iLCIvKipcbiAqIFJvdW5kcyBhbGwgZWxlbWVudHMgb2YgdGhlIGdpdmVuIG1hdHJpeCB1c2luZyB0aGUgZ2l2ZW4gcHJlY2lzaW9uXG4gKiBAcGFyYW0gbWF0cml4IHtNYXRyaXh9IEFuIGFmZmluZSBtYXRyaXggdG8gcm91bmRcbiAqIEBwYXJhbSBbcHJlY2lzaW9uXSB7bnVtYmVyfSBBIHByZWNpc2lvbiB0byB1c2UgZm9yIE1hdGgucm91bmQuIERlZmF1bHRzIHRvIDEwMDAwMDAwMDAwIChtZWFuaW5nIHdoaWNoIHJvdW5kcyB0byB0aGUgMTB0aCBkaWdpdCBhZnRlciB0aGUgY29tbWEpLlxuICogQHJldHVybnMge01hdHJpeH0gVGhlIHJvdW5kZWQgQWZmaW5lIE1hdHJpeFxuICovXG5leHBvcnQgZnVuY3Rpb24gc21vb3RoTWF0cml4IChtYXRyaXgsIHByZWNpc2lvbiA9IDEwMDAwMDAwMDAwKSB7XG4gIHJldHVybiB7XG4gICAgYTogTWF0aC5yb3VuZChtYXRyaXguYSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb24sXG4gICAgYjogTWF0aC5yb3VuZChtYXRyaXguYiAqIHByZWNpc2lvbikgLyBwcmVjaXNpb24sXG4gICAgYzogTWF0aC5yb3VuZChtYXRyaXguYyAqIHByZWNpc2lvbikgLyBwcmVjaXNpb24sXG4gICAgZDogTWF0aC5yb3VuZChtYXRyaXguZCAqIHByZWNpc2lvbikgLyBwcmVjaXNpb24sXG4gICAgZTogTWF0aC5yb3VuZChtYXRyaXguZSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb24sXG4gICAgZjogTWF0aC5yb3VuZChtYXRyaXguZiAqIHByZWNpc2lvbikgLyBwcmVjaXNpb25cbiAgfVxufVxuIiwiLyoqXG4gKiBTZXJpYWxpemUgYW4gYWZmaW5lIG1hdHJpeCB0byBhIHN0cmluZyB0aGF0IGNhbiBiZSB1c2VkIHdpdGggQ1NTIG9yIFNWR1xuICogQHBhcmFtIG1hdHJpeCB7TWF0cml4fSBBZmZpbmUgTWF0cml4XG4gKiBAcmV0dXJucyB7c3RyaW5nfSBTdHJpbmcgdGhhdCBjb250YWlucyBhbiBhZmZpbmUgbWF0cml4IGZvcm1hdHRlZCBhcyBtYXRyaXgoYSxiLGMsZCxlLGYpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0NTUyAobWF0cml4KSB7XG4gIHJldHVybiB0b1N0cmluZyhtYXRyaXgpXG59XG5cbi8qKlxuICogU2VyaWFsaXplIGFuIGFmZmluZSBtYXRyaXggdG8gYSBzdHJpbmcgdGhhdCBjYW4gYmUgdXNlZCB3aXRoIENTUyBvciBTVkdcbiAqIEBwYXJhbSBtYXRyaXgge01hdHJpeH0gQWZmaW5lIE1hdHJpeFxuICogQHJldHVybnMge3N0cmluZ30gU3RyaW5nIHRoYXQgY29udGFpbnMgYW4gYWZmaW5lIG1hdHJpeCBmb3JtYXR0ZWQgYXMgbWF0cml4KGEsYixjLGQsZSxmKVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9TVkcgKG1hdHJpeCkge1xuICByZXR1cm4gdG9TdHJpbmcobWF0cml4KVxufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSBhbiBhZmZpbmUgbWF0cml4IHRvIGEgc3RyaW5nIHRoYXQgY2FuIGJlIHVzZWQgd2l0aCBDU1Mgb3IgU1ZHXG4gKiBAcGFyYW0gbWF0cml4IHtNYXRyaXh9IEFmZmluZSBNYXRyaXhcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFN0cmluZyB0aGF0IGNvbnRhaW5zIGFuIGFmZmluZSBtYXRyaXggZm9ybWF0dGVkIGFzIG1hdHJpeChhLGIsYyxkLGUsZilcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvU3RyaW5nIChtYXRyaXgpIHtcbiAgcmV0dXJuIGBtYXRyaXgoJHttYXRyaXguYX0sJHttYXRyaXguYn0sJHttYXRyaXguY30sJHttYXRyaXguZH0sJHttYXRyaXguZX0sJHttYXRyaXguZn0pYFxufVxuIiwiLyoqXG4gKiBNZXJnZSBtdWx0aXBsZSBtYXRyaWNlcyBpbnRvIG9uZVxuICogQHBhcmFtIG1hdHJpY2VzIHsuLi5NYXRyaXggfCBNYXRyaXhbXX0gTWF0cmljZXMgbGlzdGVkIGFzIHNlcGFyYXRlIHBhcmFtZXRlcnMgb3IgaW4gYW4gYXJyYXlcbiAqIEByZXR1cm5zIHtNYXRyaXh9IEFmZmluZSBNYXRyaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybSAoLi4ubWF0cmljZXMpIHtcbiAgbWF0cmljZXMgPSBBcnJheS5pc0FycmF5KG1hdHJpY2VzWzBdKSA/IG1hdHJpY2VzWzBdIDogbWF0cmljZXNcblxuICBjb25zdCBtdWx0aXBseSA9IChtMSwgbTIpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgYTogbTEuYSAqIG0yLmEgKyBtMS5jICogbTIuYixcbiAgICAgIGM6IG0xLmEgKiBtMi5jICsgbTEuYyAqIG0yLmQsXG4gICAgICBlOiBtMS5hICogbTIuZSArIG0xLmMgKiBtMi5mICsgbTEuZSxcbiAgICAgIGI6IG0xLmIgKiBtMi5hICsgbTEuZCAqIG0yLmIsXG4gICAgICBkOiBtMS5iICogbTIuYyArIG0xLmQgKiBtMi5kLFxuICAgICAgZjogbTEuYiAqIG0yLmUgKyBtMS5kICogbTIuZiArIG0xLmZcbiAgICB9XG4gIH1cblxuICBzd2l0Y2ggKG1hdHJpY2VzLmxlbmd0aCkge1xuICAgIGNhc2UgMDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignbm8gbWF0cmljZXMgcHJvdmlkZWQnKVxuXG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIG1hdHJpY2VzWzBdXG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gbXVsdGlwbHkobWF0cmljZXNbMF0sIG1hdHJpY2VzWzFdKVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgY29uc3QgW20xLCBtMiwgLi4ucmVzdF0gPSBtYXRyaWNlc1xuICAgICAgY29uc3QgbSA9IG11bHRpcGx5KG0xLCBtMilcbiAgICAgIHJldHVybiB0cmFuc2Zvcm0obSwgLi4ucmVzdClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBNZXJnZSBtdWx0aXBsZSBtYXRyaWNlcyBpbnRvIG9uZVxuICogQHBhcmFtIG1hdHJpY2VzIHsuLi5NYXRyaXggfCBNYXRyaXhbXX0gTWF0cmljZXMgbGlzdGVkIGFzIHNlcGFyYXRlIHBhcmFtZXRlcnMgb3IgaW4gYW4gYXJyYXlcbiAqIEByZXR1cm5zIHtNYXRyaXh9IEFmZmluZSBNYXRyaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2UgKC4uLm1hdHJpY2VzKSB7XG4gIHJldHVybiB0cmFuc2Zvcm0oLi4ubWF0cmljZXMpXG59XG4iLCIvKipcbiAqIENhbGN1bGF0ZSBhIHRyYW5zbGF0ZSBtYXRyaXhcbiAqIEBwYXJhbSB0eCB7bnVtYmVyfSBUcmFuc2xhdGlvbiBvbiBheGlzIHhcbiAqIEBwYXJhbSBbdHkgPSAwXSB7bnVtYmVyfSBUcmFuc2xhdGlvbiBvbiBheGlzIHlcbiAqIEByZXR1cm5zIHtNYXRyaXh9IEFmZmluZSBNYXRyaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZSAodHgsIHR5ID0gMCkge1xuICByZXR1cm4ge1xuICAgIGE6IDEsXG4gICAgYzogMCxcbiAgICBlOiB0eCxcbiAgICBiOiAwLFxuICAgIGQ6IDEsXG4gICAgZjogdHlcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkICh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWVyaWMgKG4pIHtcbiAgcmV0dXJuIHR5cGVvZiBuID09PSAnbnVtYmVyJyAmJlxuICAgICFOdW1iZXIuaXNOYU4obikgJiZcbiAgICBOdW1iZXIuaXNGaW5pdGUobilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0IChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmXG4gICAgb2JqICE9PSBudWxsICYmXG4gICAgIUFycmF5LmlzQXJyYXkob2JqKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hlc1NoYXBlIChvYmosIGtleXMpIHtcbiAgcmV0dXJuIGtleXMuZXZlcnkoa2V5ID0+IGtleSBpbiBvYmopXG59XG4iLCJjbGFzcyBNb3VzZUhhbmRsZXIge1xyXG4gIGNhbnZhczpIVE1MQ2FudmFzRWxlbWVudDtcclxuICBtb3VzZWRvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBkcmFnZ2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGluaXRpYWxEcmFnOkRyYWdFdmVudHxudWxsID0gbnVsbDtcclxuICBsYXN0RHJhZzpEcmFnRXZlbnR8bnVsbCA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNhbnZhczpIVE1MQ2FudmFzRWxlbWVudCwgbGlzdGVuZXI/OkFjdGlvbkxpc3RlbmVyKSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuXHJcbiAgICBjYW52YXMub25tb3VzZWRvd24gPSAoZXZ0KSA9PiB7XHJcbiAgICAgIHRoaXMubW91c2Vkb3duID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjYW52YXMub25tb3VzZW1vdmUgPSAoZXZ0KSA9PiB7XHJcbiAgICAgIGlmKHRoaXMubW91c2Vkb3duKSB7XHJcbiAgICAgICAgICBpZih0aGlzLmRyYWdnaW5nKXtcclxuICAgICAgICAgICAgICBsZXQgZHJhZ0V2ZW50ID0gbmV3IERyYWdFdmVudChcIkRSQUdcIiwgZXZ0Lm9mZnNldFgsIGV2dC5vZmZzZXRZLCB0aGlzLmluaXRpYWxEcmFnLCB0aGlzLmxhc3REcmFnKTtcclxuICAgICAgICAgICAgICB0aGlzLmxhc3REcmFnID0gZHJhZ0V2ZW50O1xyXG4gICAgICAgICAgICAgIGxpc3RlbmVyPy5vbkRyYWcoZHJhZ0V2ZW50KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbGV0IGRyYWdFdmVudCA9IG5ldyBEcmFnRXZlbnQoXCJTVEFSVFwiLCBldnQub2Zmc2V0WCwgZXZ0Lm9mZnNldFksIG51bGwsIG51bGwpO1xyXG4gICAgICAgICAgICAgIHRoaXMuaW5pdGlhbERyYWcgPSBkcmFnRXZlbnQ7XHJcbiAgICAgICAgICAgICAgdGhpcy5sYXN0RHJhZyA9IGRyYWdFdmVudDtcclxuICAgICAgICAgICAgICBsaXN0ZW5lcj8ub25EcmFnKGRyYWdFdmVudCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbnZhcy5vbm1vdXNldXAgPSAoZXZ0KSA9PiB7XHJcbiAgICAgIHRoaXMubW91c2Vkb3duID0gZmFsc2U7XHJcbiAgICAgIGlmKHRoaXMuZHJhZ2dpbmcpIHtcclxuICAgICAgICBsaXN0ZW5lcj8ub25EcmFnKG5ldyBEcmFnRXZlbnQoXCJTVE9QXCIsIGV2dC5vZmZzZXRYLCBldnQub2Zmc2V0WSwgdGhpcy5pbml0aWFsRHJhZywgdGhpcy5sYXN0RHJhZykpXHJcbiAgICAgICAgdGhpcy5pbml0aWFsRHJhZyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sYXN0RHJhZyA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlzdGVuZXI/Lm9uQ2xpY2soZXZ0Lm9mZnNldFgsIGV2dC5vZmZzZXRZKVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjYW52YXMub253aGVlbCA9IChldnQpID0+IHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGxpc3RlbmVyPy5vbldoZWVsKGV2dC5vZmZzZXRYLCBldnQub2Zmc2V0WSwgZXZ0LmRlbHRhWSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgQWN0aW9uTGlzdGVuZXIge1xyXG4gIG9uRHJhZyhldmVudDpEcmFnRXZlbnQpOnZvaWQ7XHJcbiAgb25DbGljayh4Om51bWJlciwgeTpudW1iZXIpOnZvaWQ7XHJcbiAgb25XaGVlbCh4Om51bWJlciwgeTpudW1iZXIsIGRlbHRhOm51bWJlcik6dm9pZDtcclxufVxyXG5cclxuY2xhc3MgRHJhZ0V2ZW50IHtcclxuICByZWFkb25seSB0eXBlOlwiU1RBUlRcInxcIkRSQUdcInxcIlNUT1BcIlxyXG4gIHJlYWRvbmx5IHg6bnVtYmVyO1xyXG4gIHJlYWRvbmx5IHk6bnVtYmVyO1xyXG5cclxuICAvLyBkZWx0YSBmcm9tIHRoZSBsYXN0IGRyYWcgZXZlbnRcclxuICByZWFkb25seSBsYXN0RHJhZ0V2ZW50RGVsdGFYOm51bWJlciA9IDA7XHJcbiAgcmVhZG9ubHkgbGFzdERyYWdFdmVudERlbHRhWTpudW1iZXIgPSAwO1xyXG5cclxuICAvLyBkaXN0YW5jZSBmcm9tIHRoZSBpbml0aWFsIGRyYWcgZXZlbnRcclxuICByZWFkb25seSBpbml0aWFsRHJhZ0V2ZW50RGVsdGFYOm51bWJlciA9IDA7XHJcbiAgcmVhZG9ubHkgaW5pdGlhbERyYWdFdmVudERlbHRhWTpudW1iZXIgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0eXBlOlwiU1RBUlRcInxcIkRSQUdcInxcIlNUT1BcIiwgeDpudW1iZXIsIHk6bnVtYmVyLCBpbml0aWFsRHJhZzpEcmFnRXZlbnR8bnVsbCwgbGFzdERyYWc6RHJhZ0V2ZW50fG51bGwpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuXHJcbiAgICBpZihpbml0aWFsRHJhZyAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbERyYWdFdmVudERlbHRhWCA9IHRoaXMueCAtIGluaXRpYWxEcmFnLng7XHJcbiAgICAgIHRoaXMuaW5pdGlhbERyYWdFdmVudERlbHRhWSA9IHRoaXMueSAtIGluaXRpYWxEcmFnLnk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxhc3REcmFnICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5sYXN0RHJhZ0V2ZW50RGVsdGFYID0gdGhpcy54IC0gbGFzdERyYWcueDtcclxuICAgICAgdGhpcy5sYXN0RHJhZ0V2ZW50RGVsdGFZID0gdGhpcy55IC0gbGFzdERyYWcueTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7TW91c2VIYW5kbGVyLCBBY3Rpb25MaXN0ZW5lciwgRHJhZ0V2ZW50fSIsImltcG9ydCB7IHNjYWxlLCBhcHBseVRvUG9pbnQsIFBvaW50LCBpbnZlcnNlLCBjb21wb3NlLCB0cmFuc2xhdGUgfSBmcm9tIFwidHJhbnNmb3JtYXRpb24tbWF0cml4XCI7XHJcbmltcG9ydCB7IE1vdXNlSGFuZGxlciwgQWN0aW9uTGlzdGVuZXIsIERyYWdFdmVudCB9IGZyb20gXCIuL01vdXNlSGFuZGxlclwiO1xyXG5cclxuY2xhc3MgUGFuZWwgaW1wbGVtZW50cyBBY3Rpb25MaXN0ZW5lciB7XHJcbiAgY2FudmFzOkhUTUxDYW52YXNFbGVtZW50O1xyXG4gIG1vdXNlSGFuZGxlcjpNb3VzZUhhbmRsZXI7XHJcbiAgaW1hZ2U6SW1hZ2VCaXRtYXB8bnVsbCA9IG51bGw7XHJcbiAgaW1hZ2VUeDogbnVtYmVyID0gMDtcclxuICBpbWFnZVR5OiBudW1iZXIgPSAwO1xyXG4gIGltYWdlU2NhbGU6IG51bWJlciA9IDE7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNhbnZhczpIVE1MQ2FudmFzRWxlbWVudCkge1xyXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICB0aGlzLm1vdXNlSGFuZGxlciA9IG5ldyBNb3VzZUhhbmRsZXIoY2FudmFzLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2soeDpudW1iZXIsIHk6bnVtYmVyKSB7XHJcbiAgICBsZXQgaW1hZ2VQb2ludCA9IHRoaXMudG9JbWFnZVBvaW50KHt4LCB5fSk7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCBvbicsIHgsIHksIGltYWdlUG9pbnQpXHJcbiAgfVxyXG5cclxuICBvbkRyYWcoZHJhZzpEcmFnRXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKCdkcmFnJywgZHJhZy5sYXN0RHJhZ0V2ZW50RGVsdGFYKVxyXG4gICAgdGhpcy5pbWFnZVR4ICs9IGRyYWcubGFzdERyYWdFdmVudERlbHRhWDtcclxuICAgIHRoaXMuaW1hZ2VUeSArPSBkcmFnLmxhc3REcmFnRXZlbnREZWx0YVk7XHJcbiAgfVxyXG5cclxuICBvbldoZWVsKHg6bnVtYmVyLCB5Om51bWJlciwgZGVsdGE6bnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZygnd2hlZWwnLCBkZWx0YSlcclxuICAgIGlmKGRlbHRhID4gMCkge1xyXG4gICAgICB0aGlzLnpvb20oLTIwLCB4LCB5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuem9vbSgyMCwgeCwgeSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB6b29tT25JbWFnZShhbW91bnQ6bnVtYmVyLCBpbWFnZVg6bnVtYmVyLCBpbWFnZVk6bnVtYmVyKSB7XHJcbiAgICBsZXQgY2FudmFzUG9pbnQgPSB0aGlzLnRvQ2FudmFzUG9pbnQoe3g6IGltYWdlWCwgeTogaW1hZ2VZfSk7XHJcbiAgICB0aGlzLnpvb20oYW1vdW50LCBjYW52YXNQb2ludC54LCBjYW52YXNQb2ludC55KTtcclxuICB9XHJcblxyXG4gIHpvb20oYW1vdW50Om51bWJlciwgY2FudmFzWDpudW1iZXIsIGNhbnZhc1k6bnVtYmVyKSB7XHJcbiAgICBsZXQgY2FudmFzWm9vbVBvaW50ID0ge3g6IGNhbnZhc1gsIHk6IGNhbnZhc1l9XHJcblxyXG4gICAgbGV0IGRlbHRhU2NhbGUgPSB0aGlzLmltYWdlU2NhbGUvMTAwICogYW1vdW50O1xyXG4gICAgbGV0IG5ld1NjYWxlID0gdGhpcy5pbWFnZVNjYWxlICsgZGVsdGFTY2FsZTtcclxuXHJcbiAgICBsZXQgaW1hZ2Vab29tUG9pbnQgPSB0aGlzLnRvSW1hZ2VQb2ludChjYW52YXNab29tUG9pbnQpO1xyXG4gICAgXHJcbiAgICAvLyBmaXJzdCBjaGFuZ2UgdGhlIHNjYWxlLCB0aGVuIHdlIGNhbiBjb21wdXRlIHRoZSBwb2ludCBvbiBjYW52YXMgYWZ0ZXIgem9vbVxyXG4gICAgdGhpcy5pbWFnZVNjYWxlID0gbmV3U2NhbGU7XHJcbiAgICBsZXQgY2FudmFzUG9pbnRBZnRlclpvb20gPSB0aGlzLnRvQ2FudmFzUG9pbnQoaW1hZ2Vab29tUG9pbnQpO1xyXG5cclxuICAgIC8vIHRyYW5zbGF0ZSBiYWNrIHRoZSBpbWFnZVxyXG4gICAgdGhpcy5pbWFnZVR4IC09IGNhbnZhc1BvaW50QWZ0ZXJab29tLnggLSBjYW52YXNab29tUG9pbnQueDtcclxuICAgIHRoaXMuaW1hZ2VUeSAtPSBjYW52YXNQb2ludEFmdGVyWm9vbS55IC0gY2FudmFzWm9vbVBvaW50Lnk7XHJcbiAgfVxyXG5cclxuICBzZXRJbWFnZShpbWFnZTpJbWFnZUJpdG1hcCkge1xyXG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gIH1cclxuXHJcbiAgZml0KCkge1xyXG4gICAgaWYgKHRoaXMuaW1hZ2UgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmluZCB0aGUgY29ycmVjdCBzY2FsZSB0byBmaXQgdGhlIGltYWdlIGluc2lkZSB0aGUgcGFuZWxcclxuICAgIGxldCBzY2FsZVggPSB0aGlzLmNhbnZhcy53aWR0aC90aGlzLmltYWdlLndpZHRoO1xyXG4gICAgbGV0IHNjYWxlWSA9IHRoaXMuY2FudmFzLmhlaWdodC90aGlzLmltYWdlLmhlaWdodDtcclxuICAgIGxldCBuZXdTY2FsZSA9IHNjYWxlWCA8IHNjYWxlWSA/IHNjYWxlWCA6IHNjYWxlWTtcclxuICAgIGxldCBzY2FsZU1hdHJpeCA9IHNjYWxlKG5ld1NjYWxlKTtcclxuICAgIFxyXG4gICAgLy8gY2VudGVyIHRoZSBpbWFnZSBob3Jpem9udGFsbHkgYW5kIHZlcnRpY2FsbHlcclxuICAgIGxldCBpbWFnZUNlbnRlclggPSB0aGlzLmltYWdlLndpZHRoLzI7XHJcbiAgICBsZXQgaW1hZ2VDZW50ZXJZID0gdGhpcy5pbWFnZS5oZWlnaHQvMjtcclxuICAgIGxldCBpbWFnZUNlbnRlck9uQ2FudmFzOlBvaW50ID0gYXBwbHlUb1BvaW50KHNjYWxlTWF0cml4LCBbaW1hZ2VDZW50ZXJYLCBpbWFnZUNlbnRlclldKTtcclxuXHJcbiAgICAvLyBtb3ZlIHRoZSBjZW50ZXIgb2YgdGhlIGltYWdlIG9udG8gdGhlIGNlbnRlciBvZiB0aGUgY2FudmFzXHJcbiAgICBsZXQgY2FudmFzQ2VudGVyWCA9IHRoaXMuY2FudmFzLndpZHRoLzI7XHJcbiAgICBsZXQgY2FudmFzQ2VudGVyWSA9IHRoaXMuY2FudmFzLmhlaWdodC8yO1xyXG4gICAgbGV0IHR4ID0gY2FudmFzQ2VudGVyWCAtIGltYWdlQ2VudGVyT25DYW52YXNbMF07XHJcbiAgICBsZXQgdHkgPSBjYW52YXNDZW50ZXJZIC0gaW1hZ2VDZW50ZXJPbkNhbnZhc1sxXTtcclxuXHJcbiAgICAvLyBhcHBseVxyXG4gICAgdGhpcy5pbWFnZVR4ID0gdHg7XHJcbiAgICB0aGlzLmltYWdlVHkgPSB0eTtcclxuICAgIHRoaXMuaW1hZ2VTY2FsZSA9IG5ld1NjYWxlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2l2ZW4gYSBwb2ludCBvbiBzY3JlZW4gY2FudmFzLCByZXR1cm4gdGhlIHBvaW50IG9uIHRoZSBpbWFnZVxyXG4gICAqL1xyXG4gIHRvSW1hZ2VQb2ludChjYW52YXNQb2ludDpQb2ludCk6IFBvaW50IHtcclxuICAgIGxldCBtYXRyaXggPSBpbnZlcnNlKGNvbXBvc2UodHJhbnNsYXRlKHRoaXMuaW1hZ2VUeCwgdGhpcy5pbWFnZVR5KSwgc2NhbGUodGhpcy5pbWFnZVNjYWxlKSkpXHJcbiAgICByZXR1cm4gYXBwbHlUb1BvaW50KG1hdHJpeCwgY2FudmFzUG9pbnQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2l2ZW4gYSBwb2ludCBvbiB0aGUgaW1hZ2UsIHJldHVybiB0aGUgcG9pbnQgb24gY2FudmFzXHJcbiAgICovXHJcbiAgdG9DYW52YXNQb2ludChpbWFnZVBvaW50OlBvaW50KTpQb2ludHtcclxuICAgICAgbGV0IG1hdHJpeCA9IGNvbXBvc2UodHJhbnNsYXRlKHRoaXMuaW1hZ2VUeCwgdGhpcy5pbWFnZVR5KSwgc2NhbGUodGhpcy5pbWFnZVNjYWxlKSk7XHJcbiAgICAgIHJldHVybiBhcHBseVRvUG9pbnQobWF0cml4LCBpbWFnZVBvaW50KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcihjdHg6Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIGlmICh0aGlzLmltYWdlID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB3aWR0aCA9IHRoaXMuaW1hZ2Uud2lkdGggKiB0aGlzLmltYWdlU2NhbGU7XHJcbiAgICBsZXQgaGVpZ2h0ID0gdGhpcy5pbWFnZS5oZWlnaHQgKiB0aGlzLmltYWdlU2NhbGU7XHJcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMuaW1hZ2VUeCwgdGhpcy5pbWFnZVR5LCB3aWR0aCwgaGVpZ2h0KTsgXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1BhbmVsfTsiLCJpbXBvcnQgeyBQYW5lbCB9IGZyb20gXCIuL1BhbmVsXCI7XHJcblxyXG5jb25zdCB0aHVtYm5haWxBID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RodW1ibmFpbC1BJyk7XHJcbmNvbnN0IHRodW1ibmFpbEIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGh1bWJuYWlsLUInKTtcclxuY29uc3QgdGh1bWJuYWlsQyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aHVtYm5haWwtQycpO1xyXG5jb25zdCB0aHVtYm5haWxEID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RodW1ibmFpbC1EJyk7XHJcbmNvbnN0IHRodW1ibmFpbEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGh1bWJuYWlsLUUnKTtcclxuXHJcbmNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNhbnZhcycpO1xyXG5jYW52YXMud2lkdGggPSBjYW52YXMuc2Nyb2xsV2lkdGhcclxuY2FudmFzLmhlaWdodCA9IGNhbnZhcy5zY3JvbGxIZWlnaHRcclxuXHJcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XHJcblxyXG50aHVtYm5haWxBIS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgb3BlbignaW1hZ2VzL2hhbmRfMC5qcGcnKVxyXG59XHJcbnRodW1ibmFpbEIhLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBvcGVuKCdpbWFnZXMvZGluby5qcGcnKVxyXG59XHJcbnRodW1ibmFpbEMhLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBvcGVuKCdpbWFnZXMvc2YuanBnJylcclxufVxyXG50aHVtYm5haWxEIS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgb3BlbignaW1hZ2VzL3JvY2suanBnJylcclxufVxyXG50aHVtYm5haWxFIS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgb3BlbignaW1hZ2VzL2NhbXBpbmcuanBnJylcclxufVxyXG5cclxubGV0IHBhbmVsID0gbmV3IFBhbmVsKGNhbnZhcyk7XHJcblxyXG5mdW5jdGlvbiBvcGVuKHVybDpzdHJpbmcpIHtcclxuICAgIGZldGNoKHVybClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmJsb2IoKSlcclxuICAgIC50aGVuKGJsb2IgPT4gY3JlYXRlSW1hZ2VCaXRtYXAoYmxvYikpXHJcbiAgICAudGhlbihiaXRtYXAgPT4ge1xyXG4gICAgICAgIHBhbmVsLnNldEltYWdlKGJpdG1hcCk7XHJcbiAgICAgICAgcGFuZWwuZml0KCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICBwYW5lbC5yZW5kZXIoY3R4KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9vcCgpIHtcclxuICAgIHJlbmRlcigpXHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApXHJcbn1cclxuXHJcbndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7Il0sInNvdXJjZVJvb3QiOiIifQ==