/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    box-sizing: border-box;
}

html{
    height: 100%;
    --primary-color:rgb(24, 135, 199);
}
body{
    position: relative;
    margin: 0;
    min-height: 100%;
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 200px auto;
    background-color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

ul{
    margin: 0;
    padding: 0;
    list-style: none;
}

input,select{
    width: 90%;
}

label{
    display: block;
}

#priority{
    margin: 0;
    padding: 0;
    margin-bottom: 15px;
}

.header{
    position: sticky;
    top: 0px;
    text-align: center;
    grid-row: 1;
    grid-column: 2;
    background-color: rgb(255, 255, 255);
    color: black;
    font-size: 2rem;
    text-shadow: 2px 4px rgb(91, 213, 235);
    box-shadow: 0px 1px 10px black;
}
.sidebar{
    position: sticky;
    top: 0px;
    left: 0px;
    height: 100vh;
    grid-row: 1/-1;
    display: grid;
    grid-template-rows: 1fr 7fr;
    background-color: var(--primary-color);
    color: white;
    padding: 10px;
}

.proj-section button{
    text-align: left;
    border: none;
    padding: 5px 10px;
    width: 80%;
    background-color: transparent;
    border-radius: 10px;
    color: white;
    font-size: 1.2rem;
    &:hover{
        background-color: rgb(79, 179, 226);
    }
    &.highlight{
        background-color: rgb(79, 179, 226);
    }
}

.proj-add{
    margin: 0 auto;
    width: 50%;
    border: none;
    background-color: transparent;
    color: white;
    font-size: 1.4rem;
    border-radius: 20px;
    text-shadow: 1px 1px black;
    &:hover{
        background-color:rgb(79, 179, 226) ;
    }
}


.proj-section >ul{
    display: flex;
    flex-direction: column;
    gap: 13px;
}

.proj-section >h3{
    font-size: 2.1rem;
    text-shadow: 2px 2px black;
}

.main-content{
    grid-row: 2/-1;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    >button{
        position: sticky;
        bottom: 20px;
        right: 20px;
        margin: 20px 20px;
        border: 2px solid black;
        background-color: var(--primary-color);
        font-size: 1.7rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        align-self:flex-end;
    }
    >button:hover{
        background-color: rgb(14, 108, 172);
    }
}

.task{
    background-color: rgb(245, 245, 245);
    box-shadow: 1px 1px 5px black;
    border-radius: 10px;
    margin-bottom: 20px;
    height: 150px;
    width: 30%;
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;
    & p{
        margin:0;
        font-weight: bold;
        padding-left: 10px;
    }
    & p:last-of-type{
        font-size: 1rem;
        font-weight: 100;
    }
}

.task span{
    margin-top: auto;
    display: flex;
    >button{
        flex: 1;
        border: none;
        font-size: 1.9rem;
        background-color: var(--primary-color);
        border-top: 1px solid black;
        border-bottom: 1px solid black;
    }
    >button:first-of-type{
        color: green;
        border-right: 1px solid black;
    }
    >button:hover{
        background-color: rgb(18, 100, 138);
    }
    >button:last-of-type{
        border-bottom-right-radius: 9px;
        border-left: 1px solid black;
    }
}



`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,iCAAiC;AACrC;AACA;IACI,kBAAkB;IAClB,SAAS;IACT,gBAAgB;IAChB,aAAa;IACb,8BAA8B;IAC9B,8BAA8B;IAC9B,uBAAuB;IACvB,mJAAmJ;AACvJ;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,QAAQ;IACR,kBAAkB;IAClB,WAAW;IACX,cAAc;IACd,oCAAoC;IACpC,YAAY;IACZ,eAAe;IACf,sCAAsC;IACtC,8BAA8B;AAClC;AACA;IACI,gBAAgB;IAChB,QAAQ;IACR,SAAS;IACT,aAAa;IACb,cAAc;IACd,aAAa;IACb,2BAA2B;IAC3B,sCAAsC;IACtC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,UAAU;IACV,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB;QACI,mCAAmC;IACvC;IACA;QACI,mCAAmC;IACvC;AACJ;;AAEA;IACI,cAAc;IACd,UAAU;IACV,YAAY;IACZ,6BAA6B;IAC7B,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;IACnB,0BAA0B;IAC1B;QACI,mCAAmC;IACvC;AACJ;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B;QACI,gBAAgB;QAChB,YAAY;QACZ,WAAW;QACX,iBAAiB;QACjB,uBAAuB;QACvB,sCAAsC;QACtC,iBAAiB;QACjB,WAAW;QACX,YAAY;QACZ,kBAAkB;QAClB,mBAAmB;IACvB;IACA;QACI,mCAAmC;IACvC;AACJ;;AAEA;IACI,oCAAoC;IACpC,6BAA6B;IAC7B,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,UAAU;IACV,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB;QACI,QAAQ;QACR,iBAAiB;QACjB,kBAAkB;IACtB;IACA;QACI,eAAe;QACf,gBAAgB;IACpB;AACJ;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb;QACI,OAAO;QACP,YAAY;QACZ,iBAAiB;QACjB,sCAAsC;QACtC,2BAA2B;QAC3B,8BAA8B;IAClC;IACA;QACI,YAAY;QACZ,6BAA6B;IACjC;IACA;QACI,mCAAmC;IACvC;IACA;QACI,+BAA+B;QAC/B,4BAA4B;IAChC;AACJ","sourcesContent":["*{\n    box-sizing: border-box;\n}\n\nhtml{\n    height: 100%;\n    --primary-color:rgb(24, 135, 199);\n}\nbody{\n    position: relative;\n    margin: 0;\n    min-height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 200px auto;\n    background-color: white;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nul{\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\ninput,select{\n    width: 90%;\n}\n\nlabel{\n    display: block;\n}\n\n#priority{\n    margin: 0;\n    padding: 0;\n    margin-bottom: 15px;\n}\n\n.header{\n    position: sticky;\n    top: 0px;\n    text-align: center;\n    grid-row: 1;\n    grid-column: 2;\n    background-color: rgb(255, 255, 255);\n    color: black;\n    font-size: 2rem;\n    text-shadow: 2px 4px rgb(91, 213, 235);\n    box-shadow: 0px 1px 10px black;\n}\n.sidebar{\n    position: sticky;\n    top: 0px;\n    left: 0px;\n    height: 100vh;\n    grid-row: 1/-1;\n    display: grid;\n    grid-template-rows: 1fr 7fr;\n    background-color: var(--primary-color);\n    color: white;\n    padding: 10px;\n}\n\n.proj-section button{\n    text-align: left;\n    border: none;\n    padding: 5px 10px;\n    width: 80%;\n    background-color: transparent;\n    border-radius: 10px;\n    color: white;\n    font-size: 1.2rem;\n    &:hover{\n        background-color: rgb(79, 179, 226);\n    }\n    &.highlight{\n        background-color: rgb(79, 179, 226);\n    }\n}\n\n.proj-add{\n    margin: 0 auto;\n    width: 50%;\n    border: none;\n    background-color: transparent;\n    color: white;\n    font-size: 1.4rem;\n    border-radius: 20px;\n    text-shadow: 1px 1px black;\n    &:hover{\n        background-color:rgb(79, 179, 226) ;\n    }\n}\n\n\n.proj-section >ul{\n    display: flex;\n    flex-direction: column;\n    gap: 13px;\n}\n\n.proj-section >h3{\n    font-size: 2.1rem;\n    text-shadow: 2px 2px black;\n}\n\n.main-content{\n    grid-row: 2/-1;\n    padding-left: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    >button{\n        position: sticky;\n        bottom: 20px;\n        right: 20px;\n        margin: 20px 20px;\n        border: 2px solid black;\n        background-color: var(--primary-color);\n        font-size: 1.7rem;\n        width: 50px;\n        height: 50px;\n        border-radius: 50%;\n        align-self:flex-end;\n    }\n    >button:hover{\n        background-color: rgb(14, 108, 172);\n    }\n}\n\n.task{\n    background-color: rgb(245, 245, 245);\n    box-shadow: 1px 1px 5px black;\n    border-radius: 10px;\n    margin-bottom: 20px;\n    height: 150px;\n    width: 30%;\n    font-size: 1.8rem;\n    display: flex;\n    flex-direction: column;\n    & p{\n        margin:0;\n        font-weight: bold;\n        padding-left: 10px;\n    }\n    & p:last-of-type{\n        font-size: 1rem;\n        font-weight: 100;\n    }\n}\n\n.task span{\n    margin-top: auto;\n    display: flex;\n    >button{\n        flex: 1;\n        border: none;\n        font-size: 1.9rem;\n        background-color: var(--primary-color);\n        border-top: 1px solid black;\n        border-bottom: 1px solid black;\n    }\n    >button:first-of-type{\n        color: green;\n        border-right: 1px solid black;\n    }\n    >button:hover{\n        background-color: rgb(18, 100, 138);\n    }\n    >button:last-of-type{\n        border-bottom-right-radius: 9px;\n        border-left: 1px solid black;\n    }\n}\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StorageModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StorageModule */ "./src/StorageModule.js");
/* harmony import */ var _projOps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projOps.js */ "./src/projOps.js");
/* harmony import */ var _pen_solid_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pen-solid.svg */ "./src/pen-solid.svg");
/* harmony import */ var _trash_solid_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trash-solid.svg */ "./src/trash-solid.svg");






const DOM=(function(){
    let taskList=null;
    let projectList=null;

    function addTodo(Todo,newLength){
        if(!taskList)
            taskList=document.querySelector('.task-list');
        const listItem=document.createElement('li');

        const div=createTodoItem(Todo);
        div.setAttribute('data-index',newLength-1);
        div.style.borderLeft=`7px solid ${Todo.priority}`;
        listItem.appendChild(div);
        taskList.appendChild(listItem);
    }

    function createTodoItem(Todo){
        const div=document.createElement('div');
        div.classList="task";

        const infoDiv=document.createElement('div');
        const title=document.createElement('p');
        const description=document.createElement('p');
        title.textContent=Todo.title;
        description.textContent=Todo.description;

        infoDiv.appendChild(title);
        infoDiv.appendChild(description);

        const buttonSpan=document.createElement('span');
        const doneBtn=document.createElement('button');
        doneBtn.textContent="✓";
        const deleteBtn=document.createElement('button');
        const editBtn=document.createElement('button');

        const deleteImage=new Image();
        deleteImage.src=_trash_solid_svg__WEBPACK_IMPORTED_MODULE_3__;
        deleteImage.height=20;
        deleteImage.width=10;
        const editImage=new Image();
        editImage.src=_pen_solid_svg__WEBPACK_IMPORTED_MODULE_2__;
        editImage.height=20;
        editImage.width=10;

        deleteBtn.appendChild(deleteImage);
        editBtn.appendChild(editImage);

        buttonSpan.appendChild(doneBtn);
        buttonSpan.appendChild(deleteBtn);
        buttonSpan.appendChild(editBtn);

        div.appendChild(infoDiv);
        div.appendChild(buttonSpan);

        return div;

    }

    function renderList(key){
        if(!key)
            return;
        if(!taskList)
            taskList=document.querySelector('.task-list');
        taskList.textContent="";
        const list=_StorageModule__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveItem(key);
        list.forEach(
            (Todo,index)=>addTodo(Todo,index+1)
        );
    }

    function renderProjectList(){
        if(!projectList)
            projectList=document.querySelector('#project-list');
        projectList.textContent="";
        for(let i=0;i<_StorageModule__WEBPACK_IMPORTED_MODULE_0__["default"].length();i++){
            const [name,index]=(_StorageModule__WEBPACK_IMPORTED_MODULE_0__["default"].key(i)).split("%$%");
            addProject(index,name);
        }
        renderList(_projOps_js__WEBPACK_IMPORTED_MODULE_1__["default"].getSelectedKey());
    }

    function markInvalid(element){
        element.style.border="2px solid red";
    }

    function removeMark(element){
        element.style.border="";
    }

    function addProject(index,name){
        if(!projectList)
            projectList=document.querySelector('#project-list');
        const key=`${name}%$%${index}`;
        const listItem=document.createElement('li');
        const projBtn=document.createElement('button');
        projBtn.setAttribute('data-proj',key);
        projBtn.textContent=name;
        highlightSelectedBtn(projBtn);

        listItem.appendChild(projBtn);
        projectList.appendChild(listItem);
        renderList(key);
    }

    function highlightSelectedBtn(selectedBtn){
        const prevSelectedKey=_projOps_js__WEBPACK_IMPORTED_MODULE_1__["default"].getSelectedKey();
        if(prevSelectedKey!==""){
            const prevSelectedBtn=document.querySelector(`button[data-proj="${prevSelectedKey}"]`);
            prevSelectedBtn.classList="";
        }
        selectedBtn.classList="highlight";
        const selectedKey=selectedBtn.getAttribute('data-proj');
        _projOps_js__WEBPACK_IMPORTED_MODULE_1__["default"].setSelectedKey(selectedKey);
    }


    return {addTodo,renderList,markInvalid,removeMark,addProject,renderProjectList,highlightSelectedBtn};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);

/***/ }),

/***/ "./src/Dialog.js":
/*!***********************!*\
  !*** ./src/Dialog.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");


const Dialog=(function(){
    function isInputsFilled(inputs){
        let isFilled=true;
        inputs.forEach(
            (input)=>{
                if(input.value===""){
                    isFilled=false;
                    _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].markInvalid(input);
                }
                else
                    _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].removeMark(input);   
            }
        );
        return isFilled;
    }

    function clearInvalidMarks(inputs){
        inputs.forEach(
            (input)=>_DOM__WEBPACK_IMPORTED_MODULE_0__["default"].removeMark(input)
        );
    }

    function clearInputs(inputs){
        inputs.forEach(
            (input)=>{
                input.value="";
                _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].removeMark(input);
            }
        );
    }
    return {isInputsFilled,clearInvalidMarks,clearInputs};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dialog);

/***/ }),

/***/ "./src/StorageModule.js":
/*!******************************!*\
  !*** ./src/StorageModule.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const StorageModule=(function(){
    
    function length(){
        return localStorage.length;
    }

    function addItem(id,item){
        item=JSON.stringify(item);
        localStorage.setItem(`${id}`,item);
    }
    
    function retrieveItem(key){
        const resultString=localStorage.getItem(key);
        const result=JSON.parse(resultString);
        return result;
    }

    function key(i){
        return localStorage.key(i)
    }

    function pushObject(key,object){
        const list=retrieveItem(key);
        list.push(object);
        const newLength=list.length;
        addItem(key,list);
        return newLength;
    }

    return {addItem,retrieveItem,key,length,pushObject};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageModule);


/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo{
    constructor(title,description,dueDate,priority){
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
    }
}

/***/ }),

/***/ "./src/Todoops.js":
/*!************************!*\
  !*** ./src/Todoops.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTodo: () => (/* binding */ addTodo),
/* harmony export */   createTodo: () => (/* binding */ createTodo),
/* harmony export */   retrieveTodo: () => (/* binding */ retrieveTodo)
/* harmony export */ });
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _StorageModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StorageModule.js */ "./src/StorageModule.js");
/* harmony import */ var _Todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todo.js */ "./src/Todo.js");
/* harmony import */ var _projOps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projOps.js */ "./src/projOps.js");





function addTodo(Todo){
    const key=_projOps_js__WEBPACK_IMPORTED_MODULE_3__["default"].getSelectedKey();
    const newLength=_StorageModule_js__WEBPACK_IMPORTED_MODULE_1__["default"].pushObject(key,Todo);
    _DOM_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTodo(Todo,newLength);
}

function retrieveTodo(id){
    const TodoObject=_StorageModule_js__WEBPACK_IMPORTED_MODULE_1__["default"].retrieveItem(id);
    return TodoObject;

}

function createTodo(inputString){
    const [title,description,due,priority]=inputString.split("|");
    const TodoObject=new _Todo_js__WEBPACK_IMPORTED_MODULE_2__["default"](title,description,due,priority);
    return TodoObject;
}



/***/ }),

/***/ "./src/projDialog.js":
/*!***************************!*\
  !*** ./src/projDialog.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dialog */ "./src/Dialog.js");
/* harmony import */ var _projOps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projOps */ "./src/projOps.js");



const projDialogBox=(function(){
    const dialog=document.querySelector('#projDialog');

    const closeBtn=document.querySelector('#proj-close');
    const addBtn=document.querySelector('#proj-append');
    const inputs=document.querySelectorAll('#projDialog input');

    function openDialog(){
        _Dialog__WEBPACK_IMPORTED_MODULE_0__["default"].clearInputs(inputs);
        dialog.showModal();
    }

    closeBtn.addEventListener('click',
        (event)=>{
            event.preventDefault();
            dialog.close();
        }
    );

    addBtn.addEventListener('click',
        (event)=>{
            event.preventDefault();
            if(_Dialog__WEBPACK_IMPORTED_MODULE_0__["default"].isInputsFilled(inputs)){
                _projOps__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(inputs[0].value);
                dialog.close();
            }
        }
    );

        return {openDialog};

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projDialogBox);

/***/ }),

/***/ "./src/projOps.js":
/*!************************!*\
  !*** ./src/projOps.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _StorageModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StorageModule */ "./src/StorageModule.js");



const Project=(function(){
    let selected="";
    function addProject(name){
        const index=_StorageModule__WEBPACK_IMPORTED_MODULE_1__["default"].length();
        const key=`${name}%$%${index}`;
        _StorageModule__WEBPACK_IMPORTED_MODULE_1__["default"].addItem(key,[]);
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(index,name);
    }

    function getSelectedKey(){
        return selected;
    }

    function setSelectedKey(key){
        selected=key;
    }

    return {addProject,getSelectedKey,setSelectedKey};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/taskDialog.js":
/*!***************************!*\
  !*** ./src/taskDialog.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Todoops__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todoops */ "./src/Todoops.js");
/* harmony import */ var date_fns_compareAsc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/compareAsc */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dialog */ "./src/Dialog.js");





const taskDialogBox=(function(){
    const dialog=document.querySelector('#taskDiag');
    const diagClose=document.querySelector('#close');
    const diagAdd=document.querySelector('#close + button');

    const diagSelect=document.querySelector('#priority');
    let selectVal="orange";

    const inputs=document.querySelectorAll('#taskDiag input');

    function openDialog(){
        _Dialog__WEBPACK_IMPORTED_MODULE_2__["default"].clearInputs(inputs);
        dialog.showModal();
    }

    dialog.addEventListener('close',
        ()=>{
            console.log("CLOSED");
        }
    );

    diagClose.addEventListener('click',
        (event)=>{
            event.preventDefault();
            dialog.close()
        }
    )

    diagAdd.addEventListener('click',
        (event)=>{
            event.preventDefault();
            if(checkInputs()){
                _Dialog__WEBPACK_IMPORTED_MODULE_2__["default"].clearInvalidMarks(inputs);
                const inputString=fetchInputs();
                (0,_Todoops__WEBPACK_IMPORTED_MODULE_0__.addTodo)((0,_Todoops__WEBPACK_IMPORTED_MODULE_0__.createTodo)(inputString));
                dialog.close();
            }
            else    
                console.log("Invalid")
        }
    );

    diagSelect.addEventListener('change',
        ()=>{
            selectVal=diagSelect.value;
        }
    );

    function fetchInputs(){
        let inputString="";
        inputs.forEach(
            (input)=>inputString+=(input.value+"|")
        );
        inputString+=`${selectVal}`;
        return inputString;
    }

    function checkInputs(){
        let isValid=_Dialog__WEBPACK_IMPORTED_MODULE_2__["default"].isInputsFilled(inputs);
        if(isValid){
            const date=inputs[2].value;
            const DateObj=new Date(date);
            DateObj.setHours(23,59,59,99);
            console.log(DateObj,new Date());
            if((0,date_fns_compareAsc__WEBPACK_IMPORTED_MODULE_3__["default"])(DateObj,new Date())<0){
                isValid=false;
                _DOM__WEBPACK_IMPORTED_MODULE_1__["default"].markInvalid(inputs[2]);
            }
        }
        return isValid;
    }

    return {openDialog};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskDialogBox);

/***/ }),

/***/ "./src/pen-solid.svg":
/*!***************************!*\
  !*** ./src/pen-solid.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b569d02e3e2a9e881d6.svg";

/***/ }),

/***/ "./src/trash-solid.svg":
/*!*****************************!*\
  !*** ./src/trash-solid.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2484007181bb43b1a273.svg";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo.js */ "./src/Todo.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _taskDialog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskDialog.js */ "./src/taskDialog.js");
/* harmony import */ var _projDialog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projDialog.js */ "./src/projDialog.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");








const p=new _Todo_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Title","Des","tom",2);
const p2=new _Todo_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Title2","Des2","tom2",3);

const addTaskBtn=document.querySelector('#add-task');
const addProjBtn=document.querySelector('.proj-add');

_DOM_js__WEBPACK_IMPORTED_MODULE_4__["default"].renderProjectList();
addTaskBtn.addEventListener('click',_taskDialog_js__WEBPACK_IMPORTED_MODULE_2__["default"].openDialog);
addProjBtn.addEventListener('click',_projDialog_js__WEBPACK_IMPORTED_MODULE_3__["default"].openDialog);

const projectList=document.querySelector('#project-list');
projectList.addEventListener('click',
    (event)=>{
        const target=event.target;
        const key=target.getAttribute('data-proj');
        if(!key)
            return;
        _DOM_js__WEBPACK_IMPORTED_MODULE_4__["default"].highlightSelectedBtn(target);
        _DOM_js__WEBPACK_IMPORTED_MODULE_4__["default"].renderList(key);
    }
)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RpYWxvZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvU3RvcmFnZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVG9kb29wcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvakRpYWxvZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvak9wcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza0RpYWxvZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLS1wcmltYXJ5LWNvbG9yOnJnYigyNCwgMTM1LCAxOTkpO1xufVxuYm9keXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMDBweCBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbn1cblxudWx7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaW5wdXQsc2VsZWN0e1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbmxhYmVse1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jcHJpb3JpdHl7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmhlYWRlcntcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBncmlkLXJvdzogMTtcbiAgICBncmlkLWNvbHVtbjogMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDRweCByZ2IoOTEsIDIxMywgMjM1KTtcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggYmxhY2s7XG59XG4uc2lkZWJhcntcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGdyaWQtcm93OiAxLy0xO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucHJvai1zZWN0aW9uIGJ1dHRvbntcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICB3aWR0aDogODAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICY6aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3OSwgMTc5LCAyMjYpO1xuICAgIH1cbiAgICAmLmhpZ2hsaWdodHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc5LCAxNzksIDIyNik7XG4gICAgfVxufVxuXG4ucHJvai1hZGR7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XG4gICAgJjpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNzksIDE3OSwgMjI2KSA7XG4gICAgfVxufVxuXG5cbi5wcm9qLXNlY3Rpb24gPnVse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEzcHg7XG59XG5cbi5wcm9qLXNlY3Rpb24gPmgze1xuICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4IGJsYWNrO1xufVxuXG4ubWFpbi1jb250ZW50e1xuICAgIGdyaWQtcm93OiAyLy0xO1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgID5idXR0b257XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgIG1hcmdpbjogMjBweCAyMHB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGFsaWduLXNlbGY6ZmxleC1lbmQ7XG4gICAgfVxuICAgID5idXR0b246aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNCwgMTA4LCAxNzIpO1xuICAgIH1cbn1cblxuLnRhc2t7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAzMCU7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICYgcHtcbiAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxuICAgICYgcDpsYXN0LW9mLXR5cGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICB9XG59XG5cbi50YXNrIHNwYW57XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgID5idXR0b257XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjlyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICB9XG4gICAgPmJ1dHRvbjpmaXJzdC1vZi10eXBle1xuICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICAgIH1cbiAgICA+YnV0dG9uOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDEwMCwgMTM4KTtcbiAgICB9XG4gICAgPmJ1dHRvbjpsYXN0LW9mLXR5cGV7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA5cHg7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XG4gICAgfVxufVxuXG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixtSkFBbUo7QUFDdko7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixlQUFlO0lBQ2Ysc0NBQXNDO0lBQ3RDLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixTQUFTO0lBQ1QsYUFBYTtJQUNiLGNBQWM7SUFDZCxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakI7UUFDSSxtQ0FBbUM7SUFDdkM7SUFDQTtRQUNJLG1DQUFtQztJQUN2QztBQUNKOztBQUVBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQjtRQUNJLG1DQUFtQztJQUN2QztBQUNKOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUI7UUFDSSxnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsdUJBQXVCO1FBQ3ZCLHNDQUFzQztRQUN0QyxpQkFBaUI7UUFDakIsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQ0FBbUM7SUFDdkM7QUFDSjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCO1FBQ0ksUUFBUTtRQUNSLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2I7UUFDSSxPQUFPO1FBQ1AsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixzQ0FBc0M7UUFDdEMsMkJBQTJCO1FBQzNCLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksWUFBWTtRQUNaLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksbUNBQW1DO0lBQ3ZDO0lBQ0E7UUFDSSwrQkFBK0I7UUFDL0IsNEJBQTRCO0lBQ2hDO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAtLXByaW1hcnktY29sb3I6cmdiKDI0LCAxMzUsIDE5OSk7XFxufVxcbmJvZHl7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAwcHggYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxudWx7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaW5wdXQsc2VsZWN0e1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG5sYWJlbHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNwcmlvcml0eXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtc2hhZG93OiAycHggNHB4IHJnYig5MSwgMjEzLCAyMzUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggYmxhY2s7XFxufVxcbi5zaWRlYmFye1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDBweDtcXG4gICAgbGVmdDogMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBncmlkLXJvdzogMS8tMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucHJvai1zZWN0aW9uIGJ1dHRvbntcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICY6aG92ZXJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzksIDE3OSwgMjI2KTtcXG4gICAgfVxcbiAgICAmLmhpZ2hsaWdodHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3OSwgMTc5LCAyMjYpO1xcbiAgICB9XFxufVxcblxcbi5wcm9qLWFkZHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IGJsYWNrO1xcbiAgICAmOmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNzksIDE3OSwgMjI2KSA7XFxuICAgIH1cXG59XFxuXFxuXFxuLnByb2otc2VjdGlvbiA+dWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTNweDtcXG59XFxuXFxuLnByb2otc2VjdGlvbiA+aDN7XFxuICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCBibGFjaztcXG59XFxuXFxuLm1haW4tY29udGVudHtcXG4gICAgZ3JpZC1yb3c6IDIvLTE7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICA+YnV0dG9ue1xcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgICAgIGJvdHRvbTogMjBweDtcXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xcbiAgICAgICAgbWFyZ2luOiAyMHB4IDIwcHg7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGFsaWduLXNlbGY6ZmxleC1lbmQ7XFxuICAgIH1cXG4gICAgPmJ1dHRvbjpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNCwgMTA4LCAxNzIpO1xcbiAgICB9XFxufVxcblxcbi50YXNre1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgJiBwe1xcbiAgICAgICAgbWFyZ2luOjA7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgfVxcbiAgICAmIHA6bGFzdC1vZi10eXBle1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgfVxcbn1cXG5cXG4udGFzayBzcGFue1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICA+YnV0dG9ue1xcbiAgICAgICAgZmxleDogMTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS45cmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIH1cXG4gICAgPmJ1dHRvbjpmaXJzdC1vZi10eXBle1xcbiAgICAgICAgY29sb3I6IGdyZWVuO1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxuICAgIH1cXG4gICAgPmJ1dHRvbjpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMTAwLCAxMzgpO1xcbiAgICB9XFxuICAgID5idXR0b246bGFzdC1vZi10eXBle1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDlweDtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XFxuICAgIH1cXG59XFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7XG4gICAgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFN0b3JhZ2VNb2R1bGUgZnJvbSBcIi4vU3RvcmFnZU1vZHVsZVwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvak9wcy5qc1wiO1xuaW1wb3J0IEVkaXQgZnJvbSAnLi9wZW4tc29saWQuc3ZnJztcbmltcG9ydCBEZWxldGUgZnJvbSAnLi90cmFzaC1zb2xpZC5zdmcnO1xuXG5cbmNvbnN0IERPTT0oZnVuY3Rpb24oKXtcbiAgICBsZXQgdGFza0xpc3Q9bnVsbDtcbiAgICBsZXQgcHJvamVjdExpc3Q9bnVsbDtcblxuICAgIGZ1bmN0aW9uIGFkZFRvZG8oVG9kbyxuZXdMZW5ndGgpe1xuICAgICAgICBpZighdGFza0xpc3QpXG4gICAgICAgICAgICB0YXNrTGlzdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1saXN0Jyk7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgY29uc3QgZGl2PWNyZWF0ZVRvZG9JdGVtKFRvZG8pO1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JyxuZXdMZW5ndGgtMSk7XG4gICAgICAgIGRpdi5zdHlsZS5ib3JkZXJMZWZ0PWA3cHggc29saWQgJHtUb2RvLnByaW9yaXR5fWA7XG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUb2RvSXRlbShUb2RvKXtcbiAgICAgICAgY29uc3QgZGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0PVwidGFza1wiO1xuXG4gICAgICAgIGNvbnN0IGluZm9EaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudD1Ub2RvLnRpdGxlO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudD1Ub2RvLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBpbmZvRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBjb25zdCBidXR0b25TcGFuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgY29uc3QgZG9uZUJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZG9uZUJ0bi50ZXh0Q29udGVudD1cIuKck1wiO1xuICAgICAgICBjb25zdCBkZWxldGVCdG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGVkaXRCdG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlSW1hZ2U9bmV3IEltYWdlKCk7XG4gICAgICAgIGRlbGV0ZUltYWdlLnNyYz1EZWxldGU7XG4gICAgICAgIGRlbGV0ZUltYWdlLmhlaWdodD0yMDtcbiAgICAgICAgZGVsZXRlSW1hZ2Uud2lkdGg9MTA7XG4gICAgICAgIGNvbnN0IGVkaXRJbWFnZT1uZXcgSW1hZ2UoKTtcbiAgICAgICAgZWRpdEltYWdlLnNyYz1FZGl0O1xuICAgICAgICBlZGl0SW1hZ2UuaGVpZ2h0PTIwO1xuICAgICAgICBlZGl0SW1hZ2Uud2lkdGg9MTA7XG5cbiAgICAgICAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZUltYWdlKTtcbiAgICAgICAgZWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0SW1hZ2UpO1xuXG4gICAgICAgIGJ1dHRvblNwYW4uYXBwZW5kQ2hpbGQoZG9uZUJ0bik7XG4gICAgICAgIGJ1dHRvblNwYW4uYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICAgICAgYnV0dG9uU3Bhbi5hcHBlbmRDaGlsZChlZGl0QnRuKTtcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5mb0Rpdik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b25TcGFuKTtcblxuICAgICAgICByZXR1cm4gZGl2O1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyTGlzdChrZXkpe1xuICAgICAgICBpZigha2V5KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZighdGFza0xpc3QpXG4gICAgICAgICAgICB0YXNrTGlzdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1saXN0Jyk7XG4gICAgICAgIHRhc2tMaXN0LnRleHRDb250ZW50PVwiXCI7XG4gICAgICAgIGNvbnN0IGxpc3Q9U3RvcmFnZU1vZHVsZS5yZXRyaWV2ZUl0ZW0oa2V5KTtcbiAgICAgICAgbGlzdC5mb3JFYWNoKFxuICAgICAgICAgICAgKFRvZG8saW5kZXgpPT5hZGRUb2RvKFRvZG8saW5kZXgrMSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0TGlzdCgpe1xuICAgICAgICBpZighcHJvamVjdExpc3QpXG4gICAgICAgICAgICBwcm9qZWN0TGlzdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0Jyk7XG4gICAgICAgIHByb2plY3RMaXN0LnRleHRDb250ZW50PVwiXCI7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8U3RvcmFnZU1vZHVsZS5sZW5ndGgoKTtpKyspe1xuICAgICAgICAgICAgY29uc3QgW25hbWUsaW5kZXhdPShTdG9yYWdlTW9kdWxlLmtleShpKSkuc3BsaXQoXCIlJCVcIik7XG4gICAgICAgICAgICBhZGRQcm9qZWN0KGluZGV4LG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJlbmRlckxpc3QoUHJvamVjdC5nZXRTZWxlY3RlZEtleSgpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXJrSW52YWxpZChlbGVtZW50KXtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3JkZXI9XCIycHggc29saWQgcmVkXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlTWFyayhlbGVtZW50KXtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3JkZXI9XCJcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KGluZGV4LG5hbWUpe1xuICAgICAgICBpZighcHJvamVjdExpc3QpXG4gICAgICAgICAgICBwcm9qZWN0TGlzdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0Jyk7XG4gICAgICAgIGNvbnN0IGtleT1gJHtuYW1lfSUkJSR7aW5kZXh9YDtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW09ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29uc3QgcHJvakJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcHJvakJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvaicsa2V5KTtcbiAgICAgICAgcHJvakJ0bi50ZXh0Q29udGVudD1uYW1lO1xuICAgICAgICBoaWdobGlnaHRTZWxlY3RlZEJ0bihwcm9qQnRuKTtcblxuICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChwcm9qQnRuKTtcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgICAgICByZW5kZXJMaXN0KGtleSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlnaGxpZ2h0U2VsZWN0ZWRCdG4oc2VsZWN0ZWRCdG4pe1xuICAgICAgICBjb25zdCBwcmV2U2VsZWN0ZWRLZXk9UHJvamVjdC5nZXRTZWxlY3RlZEtleSgpO1xuICAgICAgICBpZihwcmV2U2VsZWN0ZWRLZXkhPT1cIlwiKXtcbiAgICAgICAgICAgIGNvbnN0IHByZXZTZWxlY3RlZEJ0bj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBidXR0b25bZGF0YS1wcm9qPVwiJHtwcmV2U2VsZWN0ZWRLZXl9XCJdYCk7XG4gICAgICAgICAgICBwcmV2U2VsZWN0ZWRCdG4uY2xhc3NMaXN0PVwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0ZWRCdG4uY2xhc3NMaXN0PVwiaGlnaGxpZ2h0XCI7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkS2V5PXNlbGVjdGVkQnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qJyk7XG4gICAgICAgIFByb2plY3Quc2V0U2VsZWN0ZWRLZXkoc2VsZWN0ZWRLZXkpO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIHthZGRUb2RvLHJlbmRlckxpc3QsbWFya0ludmFsaWQscmVtb3ZlTWFyayxhZGRQcm9qZWN0LHJlbmRlclByb2plY3RMaXN0LGhpZ2hsaWdodFNlbGVjdGVkQnRufTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTTsiLCJpbXBvcnQgRE9NIGZyb20gXCIuL0RPTVwiO1xuXG5jb25zdCBEaWFsb2c9KGZ1bmN0aW9uKCl7XG4gICAgZnVuY3Rpb24gaXNJbnB1dHNGaWxsZWQoaW5wdXRzKXtcbiAgICAgICAgbGV0IGlzRmlsbGVkPXRydWU7XG4gICAgICAgIGlucHV0cy5mb3JFYWNoKFxuICAgICAgICAgICAgKGlucHV0KT0+e1xuICAgICAgICAgICAgICAgIGlmKGlucHV0LnZhbHVlPT09XCJcIil7XG4gICAgICAgICAgICAgICAgICAgIGlzRmlsbGVkPWZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBET00ubWFya0ludmFsaWQoaW5wdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIERPTS5yZW1vdmVNYXJrKGlucHV0KTsgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGlzRmlsbGVkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW52YWxpZE1hcmtzKGlucHV0cyl7XG4gICAgICAgIGlucHV0cy5mb3JFYWNoKFxuICAgICAgICAgICAgKGlucHV0KT0+RE9NLnJlbW92ZU1hcmsoaW5wdXQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbnB1dHMoaW5wdXRzKXtcbiAgICAgICAgaW5wdXRzLmZvckVhY2goXG4gICAgICAgICAgICAoaW5wdXQpPT57XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWU9XCJcIjtcbiAgICAgICAgICAgICAgICBET00ucmVtb3ZlTWFyayhpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB7aXNJbnB1dHNGaWxsZWQsY2xlYXJJbnZhbGlkTWFya3MsY2xlYXJJbnB1dHN9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nOyIsImNvbnN0IFN0b3JhZ2VNb2R1bGU9KGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgZnVuY3Rpb24gbGVuZ3RoKCl7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubGVuZ3RoO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEl0ZW0oaWQsaXRlbSl7XG4gICAgICAgIGl0ZW09SlNPTi5zdHJpbmdpZnkoaXRlbSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke2lkfWAsaXRlbSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHJldHJpZXZlSXRlbShrZXkpe1xuICAgICAgICBjb25zdCByZXN1bHRTdHJpbmc9bG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgY29uc3QgcmVzdWx0PUpTT04ucGFyc2UocmVzdWx0U3RyaW5nKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBrZXkoaSl7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uua2V5KGkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHVzaE9iamVjdChrZXksb2JqZWN0KXtcbiAgICAgICAgY29uc3QgbGlzdD1yZXRyaWV2ZUl0ZW0oa2V5KTtcbiAgICAgICAgbGlzdC5wdXNoKG9iamVjdCk7XG4gICAgICAgIGNvbnN0IG5ld0xlbmd0aD1saXN0Lmxlbmd0aDtcbiAgICAgICAgYWRkSXRlbShrZXksbGlzdCk7XG4gICAgICAgIHJldHVybiBuZXdMZW5ndGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHthZGRJdGVtLHJldHJpZXZlSXRlbSxrZXksbGVuZ3RoLHB1c2hPYmplY3R9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZU1vZHVsZTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG97XG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSl7XG4gICAgICAgIHRoaXMudGl0bGU9dGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb249ZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZT1kdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5PXByaW9yaXR5O1xuICAgIH1cbn0iLCJpbXBvcnQgRE9NIGZyb20gJy4vRE9NLmpzJztcbmltcG9ydCBTdG9yYWdlTW9kdWxlIGZyb20gJy4vU3RvcmFnZU1vZHVsZS5qcyc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL1RvZG8uanMnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qT3BzLmpzJztcblxuZnVuY3Rpb24gYWRkVG9kbyhUb2RvKXtcbiAgICBjb25zdCBrZXk9UHJvamVjdC5nZXRTZWxlY3RlZEtleSgpO1xuICAgIGNvbnN0IG5ld0xlbmd0aD1TdG9yYWdlTW9kdWxlLnB1c2hPYmplY3Qoa2V5LFRvZG8pO1xuICAgIERPTS5hZGRUb2RvKFRvZG8sbmV3TGVuZ3RoKTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVUb2RvKGlkKXtcbiAgICBjb25zdCBUb2RvT2JqZWN0PVN0b3JhZ2VNb2R1bGUucmV0cmlldmVJdGVtKGlkKTtcbiAgICByZXR1cm4gVG9kb09iamVjdDtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvKGlucHV0U3RyaW5nKXtcbiAgICBjb25zdCBbdGl0bGUsZGVzY3JpcHRpb24sZHVlLHByaW9yaXR5XT1pbnB1dFN0cmluZy5zcGxpdChcInxcIik7XG4gICAgY29uc3QgVG9kb09iamVjdD1uZXcgVG9kbyh0aXRsZSxkZXNjcmlwdGlvbixkdWUscHJpb3JpdHkpO1xuICAgIHJldHVybiBUb2RvT2JqZWN0O1xufVxuXG5leHBvcnQge2FkZFRvZG8scmV0cmlldmVUb2RvLGNyZWF0ZVRvZG99OyIsImltcG9ydCBEaWFsb2cgZnJvbSBcIi4vRGlhbG9nXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qT3BzXCI7XG5cbmNvbnN0IHByb2pEaWFsb2dCb3g9KGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgZGlhbG9nPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qRGlhbG9nJyk7XG5cbiAgICBjb25zdCBjbG9zZUJ0bj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvai1jbG9zZScpO1xuICAgIGNvbnN0IGFkZEJ0bj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvai1hcHBlbmQnKTtcbiAgICBjb25zdCBpbnB1dHM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Byb2pEaWFsb2cgaW5wdXQnKTtcblxuICAgIGZ1bmN0aW9uIG9wZW5EaWFsb2coKXtcbiAgICAgICAgRGlhbG9nLmNsZWFySW5wdXRzKGlucHV0cyk7XG4gICAgICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9XG5cbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXG4gICAgICAgIChldmVudCk9PntcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgICAgICAoZXZlbnQpPT57XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYoRGlhbG9nLmlzSW5wdXRzRmlsbGVkKGlucHV0cykpe1xuICAgICAgICAgICAgICAgIFByb2plY3QuYWRkUHJvamVjdChpbnB1dHNbMF0udmFsdWUpO1xuICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcblxuICAgICAgICByZXR1cm4ge29wZW5EaWFsb2d9O1xuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qRGlhbG9nQm94OyIsImltcG9ydCBET00gZnJvbSBcIi4vRE9NXCI7XG5pbXBvcnQgU3RvcmFnZU1vZHVsZSBmcm9tIFwiLi9TdG9yYWdlTW9kdWxlXCI7XG5cbmNvbnN0IFByb2plY3Q9KGZ1bmN0aW9uKCl7XG4gICAgbGV0IHNlbGVjdGVkPVwiXCI7XG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdChuYW1lKXtcbiAgICAgICAgY29uc3QgaW5kZXg9U3RvcmFnZU1vZHVsZS5sZW5ndGgoKTtcbiAgICAgICAgY29uc3Qga2V5PWAke25hbWV9JSQlJHtpbmRleH1gO1xuICAgICAgICBTdG9yYWdlTW9kdWxlLmFkZEl0ZW0oa2V5LFtdKTtcbiAgICAgICAgRE9NLmFkZFByb2plY3QoaW5kZXgsbmFtZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRLZXkoKXtcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFNlbGVjdGVkS2V5KGtleSl7XG4gICAgICAgIHNlbGVjdGVkPWtleTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2FkZFByb2plY3QsZ2V0U2VsZWN0ZWRLZXksc2V0U2VsZWN0ZWRLZXl9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiLCJpbXBvcnQgeyBjcmVhdGVUb2RvLGFkZFRvZG8gfSBmcm9tIFwiLi9Ub2Rvb3BzXCI7XG5pbXBvcnQgY29tcGFyZUFzYyBmcm9tIFwiZGF0ZS1mbnMvY29tcGFyZUFzY1wiO1xuaW1wb3J0IERPTSBmcm9tIFwiLi9ET01cIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIi4vRGlhbG9nXCI7XG5cbmNvbnN0IHRhc2tEaWFsb2dCb3g9KGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgZGlhbG9nPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRGlhZycpO1xuICAgIGNvbnN0IGRpYWdDbG9zZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UnKTtcbiAgICBjb25zdCBkaWFnQWRkPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZSArIGJ1dHRvbicpO1xuXG4gICAgY29uc3QgZGlhZ1NlbGVjdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcbiAgICBsZXQgc2VsZWN0VmFsPVwib3JhbmdlXCI7XG5cbiAgICBjb25zdCBpbnB1dHM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Rhc2tEaWFnIGlucHV0Jyk7XG5cbiAgICBmdW5jdGlvbiBvcGVuRGlhbG9nKCl7XG4gICAgICAgIERpYWxvZy5jbGVhcklucHV0cyhpbnB1dHMpO1xuICAgICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfVxuXG4gICAgZGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJyxcbiAgICAgICAgKCk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ0xPU0VEXCIpO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIGRpYWdDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXG4gICAgICAgIChldmVudCk9PntcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkaWFsb2cuY2xvc2UoKVxuICAgICAgICB9XG4gICAgKVxuXG4gICAgZGlhZ0FkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXG4gICAgICAgIChldmVudCk9PntcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZihjaGVja0lucHV0cygpKXtcbiAgICAgICAgICAgICAgICBEaWFsb2cuY2xlYXJJbnZhbGlkTWFya3MoaW5wdXRzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFN0cmluZz1mZXRjaElucHV0cygpO1xuICAgICAgICAgICAgICAgIGFkZFRvZG8oY3JlYXRlVG9kbyhpbnB1dFN0cmluZykpO1xuICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkludmFsaWRcIilcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBkaWFnU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsXG4gICAgICAgICgpPT57XG4gICAgICAgICAgICBzZWxlY3RWYWw9ZGlhZ1NlbGVjdC52YWx1ZTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBmdW5jdGlvbiBmZXRjaElucHV0cygpe1xuICAgICAgICBsZXQgaW5wdXRTdHJpbmc9XCJcIjtcbiAgICAgICAgaW5wdXRzLmZvckVhY2goXG4gICAgICAgICAgICAoaW5wdXQpPT5pbnB1dFN0cmluZys9KGlucHV0LnZhbHVlK1wifFwiKVxuICAgICAgICApO1xuICAgICAgICBpbnB1dFN0cmluZys9YCR7c2VsZWN0VmFsfWA7XG4gICAgICAgIHJldHVybiBpbnB1dFN0cmluZztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0lucHV0cygpe1xuICAgICAgICBsZXQgaXNWYWxpZD1EaWFsb2cuaXNJbnB1dHNGaWxsZWQoaW5wdXRzKTtcbiAgICAgICAgaWYoaXNWYWxpZCl7XG4gICAgICAgICAgICBjb25zdCBkYXRlPWlucHV0c1syXS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IERhdGVPYmo9bmV3IERhdGUoZGF0ZSk7XG4gICAgICAgICAgICBEYXRlT2JqLnNldEhvdXJzKDIzLDU5LDU5LDk5KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKERhdGVPYmosbmV3IERhdGUoKSk7XG4gICAgICAgICAgICBpZihjb21wYXJlQXNjKERhdGVPYmosbmV3IERhdGUoKSk8MCl7XG4gICAgICAgICAgICAgICAgaXNWYWxpZD1mYWxzZTtcbiAgICAgICAgICAgICAgICBET00ubWFya0ludmFsaWQoaW5wdXRzWzJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9XG5cbiAgICByZXR1cm4ge29wZW5EaWFsb2d9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdGFza0RpYWxvZ0JveDsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFRvZG8gZnJvbSAnLi9Ub2RvLmpzJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB0YXNrRGlhbG9nQm94IGZyb20gJy4vdGFza0RpYWxvZy5qcyc7XG5pbXBvcnQgcHJvakRpYWxvZ0JveCBmcm9tICcuL3Byb2pEaWFsb2cuanMnO1xuaW1wb3J0IERPTSBmcm9tICcuL0RPTS5qcyc7XG5cblxuXG5jb25zdCBwPW5ldyBUb2RvKFwiVGl0bGVcIixcIkRlc1wiLFwidG9tXCIsMik7XG5jb25zdCBwMj1uZXcgVG9kbyhcIlRpdGxlMlwiLFwiRGVzMlwiLFwidG9tMlwiLDMpO1xuXG5jb25zdCBhZGRUYXNrQnRuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpO1xuY29uc3QgYWRkUHJvakJ0bj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvai1hZGQnKTtcblxuRE9NLnJlbmRlclByb2plY3RMaXN0KCk7XG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0YXNrRGlhbG9nQm94Lm9wZW5EaWFsb2cpO1xuYWRkUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycscHJvakRpYWxvZ0JveC5vcGVuRGlhbG9nKTtcblxuY29uc3QgcHJvamVjdExpc3Q9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpO1xucHJvamVjdExpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgIChldmVudCk9PntcbiAgICAgICAgY29uc3QgdGFyZ2V0PWV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3Qga2V5PXRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvaicpO1xuICAgICAgICBpZigha2V5KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBET00uaGlnaGxpZ2h0U2VsZWN0ZWRCdG4odGFyZ2V0KTtcbiAgICAgICAgRE9NLnJlbmRlckxpc3Qoa2V5KTtcbiAgICB9XG4pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9