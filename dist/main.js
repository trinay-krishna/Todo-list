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

.proj-button-container{
    display: flex;
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

.proj-add,.proj-delete{
    margin: 0 auto;
    margin-bottom: 10px;
    flex: 1;
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
    & .Check-Btn{
        color: green;
        border-right: 1px solid black;
    }
    >button:hover{
        background-color: rgb(18, 100, 138);
    }
    & .Edit-Btn{
        border-bottom-right-radius: 9px;
        border-left: 1px solid black;
    }
}




`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,iCAAiC;AACrC;AACA;IACI,kBAAkB;IAClB,SAAS;IACT,gBAAgB;IAChB,aAAa;IACb,8BAA8B;IAC9B,8BAA8B;IAC9B,uBAAuB;IACvB,mJAAmJ;AACvJ;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,QAAQ;IACR,kBAAkB;IAClB,WAAW;IACX,cAAc;IACd,oCAAoC;IACpC,YAAY;IACZ,eAAe;IACf,sCAAsC;IACtC,8BAA8B;AAClC;AACA;IACI,gBAAgB;IAChB,QAAQ;IACR,SAAS;IACT,aAAa;IACb,cAAc;IACd,aAAa;IACb,2BAA2B;IAC3B,sCAAsC;IACtC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,UAAU;IACV,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB;QACI,mCAAmC;IACvC;IACA;QACI,mCAAmC;IACvC;AACJ;;AAEA;IACI,cAAc;IACd,mBAAmB;IACnB,OAAO;IACP,YAAY;IACZ,6BAA6B;IAC7B,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;IACnB,0BAA0B;IAC1B;QACI,mCAAmC;IACvC;AACJ;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B;QACI,gBAAgB;QAChB,YAAY;QACZ,WAAW;QACX,iBAAiB;QACjB,uBAAuB;QACvB,sCAAsC;QACtC,iBAAiB;QACjB,WAAW;QACX,YAAY;QACZ,kBAAkB;QAClB,mBAAmB;IACvB;IACA;QACI,mCAAmC;IACvC;AACJ;;AAEA;IACI,oCAAoC;IACpC,6BAA6B;IAC7B,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,UAAU;IACV,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB;QACI,QAAQ;QACR,iBAAiB;QACjB,kBAAkB;IACtB;IACA;QACI,eAAe;QACf,gBAAgB;IACpB;AACJ;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb;QACI,OAAO;QACP,YAAY;QACZ,iBAAiB;QACjB,sCAAsC;QACtC,2BAA2B;QAC3B,8BAA8B;IAClC;IACA;QACI,YAAY;QACZ,6BAA6B;IACjC;IACA;QACI,mCAAmC;IACvC;IACA;QACI,+BAA+B;QAC/B,4BAA4B;IAChC;AACJ","sourcesContent":["*{\n    box-sizing: border-box;\n}\n\nhtml{\n    height: 100%;\n    --primary-color:rgb(24, 135, 199);\n}\nbody{\n    position: relative;\n    margin: 0;\n    min-height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 200px auto;\n    background-color: white;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nul{\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\ninput,select{\n    width: 90%;\n}\n\nlabel{\n    display: block;\n}\n\n#priority{\n    margin: 0;\n    padding: 0;\n    margin-bottom: 15px;\n}\n\n.header{\n    position: sticky;\n    top: 0px;\n    text-align: center;\n    grid-row: 1;\n    grid-column: 2;\n    background-color: rgb(255, 255, 255);\n    color: black;\n    font-size: 2rem;\n    text-shadow: 2px 4px rgb(91, 213, 235);\n    box-shadow: 0px 1px 10px black;\n}\n.sidebar{\n    position: sticky;\n    top: 0px;\n    left: 0px;\n    height: 100vh;\n    grid-row: 1/-1;\n    display: grid;\n    grid-template-rows: 1fr 7fr;\n    background-color: var(--primary-color);\n    color: white;\n    padding: 10px;\n}\n\n.proj-button-container{\n    display: flex;\n}\n\n.proj-section button{\n    text-align: left;\n    border: none;\n    padding: 5px 10px;\n    width: 80%;\n    background-color: transparent;\n    border-radius: 10px;\n    color: white;\n    font-size: 1.2rem;\n    &:hover{\n        background-color: rgb(79, 179, 226);\n    }\n    &.highlight{\n        background-color: rgb(79, 179, 226);\n    }\n}\n\n.proj-add,.proj-delete{\n    margin: 0 auto;\n    margin-bottom: 10px;\n    flex: 1;\n    border: none;\n    background-color: transparent;\n    color: white;\n    font-size: 1.4rem;\n    border-radius: 20px;\n    text-shadow: 1px 1px black;\n    &:hover{\n        background-color:rgb(79, 179, 226) ;\n    }\n}\n\n\n.proj-section >ul{\n    display: flex;\n    flex-direction: column;\n    gap: 13px;\n}\n\n.proj-section >h3{\n    font-size: 2.1rem;\n    text-shadow: 2px 2px black;\n}\n\n.main-content{\n    grid-row: 2/-1;\n    padding-left: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    >button{\n        position: sticky;\n        bottom: 20px;\n        right: 20px;\n        margin: 20px 20px;\n        border: 2px solid black;\n        background-color: var(--primary-color);\n        font-size: 1.7rem;\n        width: 50px;\n        height: 50px;\n        border-radius: 50%;\n        align-self:flex-end;\n    }\n    >button:hover{\n        background-color: rgb(14, 108, 172);\n    }\n}\n\n.task{\n    background-color: rgb(245, 245, 245);\n    box-shadow: 1px 1px 5px black;\n    border-radius: 10px;\n    margin-bottom: 20px;\n    height: 150px;\n    width: 30%;\n    font-size: 1.8rem;\n    display: flex;\n    flex-direction: column;\n    & p{\n        margin:0;\n        font-weight: bold;\n        padding-left: 10px;\n    }\n    & p:last-of-type{\n        font-size: 1rem;\n        font-weight: 100;\n    }\n}\n\n.task span{\n    margin-top: auto;\n    display: flex;\n    >button{\n        flex: 1;\n        border: none;\n        font-size: 1.9rem;\n        background-color: var(--primary-color);\n        border-top: 1px solid black;\n        border-bottom: 1px solid black;\n    }\n    & .Check-Btn{\n        color: green;\n        border-right: 1px solid black;\n    }\n    >button:hover{\n        background-color: rgb(18, 100, 138);\n    }\n    & .Edit-Btn{\n        border-bottom-right-radius: 9px;\n        border-left: 1px solid black;\n    }\n}\n\n\n\n\n"],"sourceRoot":""}]);
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
        doneBtn.classList="Check-Btn";
        const deleteBtn=document.createElement('button');
        deleteBtn.classList="Delete-Btn";
        const editBtn=document.createElement('button');
        editBtn.classList="Edit-Btn";

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
        if(!taskList)
            taskList=document.querySelector('.task-list');
        taskList.textContent="";
        if(!key)
            return;
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

    function deleteKey(key){
        localStorage.removeItem(key);
    }

    return {addItem,retrieveItem,key,length,pushObject,deleteKey};
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
    constructor(title,description,dueDate,priority,isComplete=false){
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
        this.isComplete=isComplete;
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
/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),
/* harmony export */   editTodo: () => (/* binding */ editTodo),
/* harmony export */   getEditIndex: () => (/* binding */ getEditIndex),
/* harmony export */   retrieveTodo: () => (/* binding */ retrieveTodo),
/* harmony export */   setEditIndex: () => (/* binding */ setEditIndex)
/* harmony export */ });
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _StorageModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StorageModule.js */ "./src/StorageModule.js");
/* harmony import */ var _Todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todo.js */ "./src/Todo.js");
/* harmony import */ var _projOps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projOps.js */ "./src/projOps.js");






let editIndex=-1;
function addTodo(Todo){
    const key=_projOps_js__WEBPACK_IMPORTED_MODULE_3__["default"].getSelectedKey();
    const newLength=_StorageModule_js__WEBPACK_IMPORTED_MODULE_1__["default"].pushObject(key,Todo);
    _DOM_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTodo(Todo,newLength);
}

function createTodo(inputString){
    const [title,description,due,priority]=inputString.split("|");
    const TodoObject=new _Todo_js__WEBPACK_IMPORTED_MODULE_2__["default"](title,description,due,priority);
    return TodoObject;
}

function deleteTodo(index){
    const key=_projOps_js__WEBPACK_IMPORTED_MODULE_3__["default"].getSelectedKey();
    const list=_StorageModule_js__WEBPACK_IMPORTED_MODULE_1__["default"].retrieveItem(key);
    const newList=[...list.slice(0,index),...list.slice(index+1)];
    _StorageModule_js__WEBPACK_IMPORTED_MODULE_1__["default"].addItem(key,newList);
    _DOM_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderList(key);
}

function retrieveTodo(index){
    const key=_projOps_js__WEBPACK_IMPORTED_MODULE_3__["default"].getSelectedKey();
    const list=_StorageModule_js__WEBPACK_IMPORTED_MODULE_1__["default"].retrieveItem(key);
    return list[index];
}

function editTodo(inputString){
    const key=_projOps_js__WEBPACK_IMPORTED_MODULE_3__["default"].getSelectedKey();
    const list=_StorageModule_js__WEBPACK_IMPORTED_MODULE_1__["default"].retrieveItem(key);
    const newTodo=createTodo(inputString);
    list[editIndex]=newTodo;
    _StorageModule_js__WEBPACK_IMPORTED_MODULE_1__["default"].addItem(key,list);
    _DOM_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderList(key);
}

function getEditIndex(){
    return editIndex;
}

function setEditIndex(value){
    editIndex=value;
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
    const confirmDialogBox=document.querySelector('#confirmDialog');

    const closeBtn=document.querySelector('#proj-close');
    const addBtn=document.querySelector('#proj-append');
    const inputs=document.querySelectorAll('#projDialog input');

    const confirmYes=document.querySelector('#confirmYes');

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

    confirmYes.addEventListener('click',
        (event)=>{
            event.preventDefault();
            _projOps__WEBPACK_IMPORTED_MODULE_1__["default"].deleteProject();
            confirmDialogBox.close();
        }
    )

    function openConfirmDialog(){
        confirmDialogBox.showModal();
    }

    return {openDialog,openConfirmDialog};

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

    function deleteProject(){
        if(selected==="")
            return;
        _StorageModule__WEBPACK_IMPORTED_MODULE_1__["default"].deleteKey(selected);
        selected="";
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].renderProjectList();
    }

    return {addProject,getSelectedKey,setSelectedKey,deleteProject};
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
/* harmony import */ var date_fns_compareAsc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/compareAsc */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dialog */ "./src/Dialog.js");
/* harmony import */ var _projOps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projOps */ "./src/projOps.js");






const taskDialogBox=(function(){
    const dialog=document.querySelector('#taskDiag');
    const diagClose=document.querySelector('#close');
    const diagAdd=document.querySelector('#close + button');

    const diagSelect=document.querySelector('#priority');
    let selectVal="orange";

    const inputs=document.querySelectorAll('#taskDiag input');

    function openDialog(){
        if(_projOps__WEBPACK_IMPORTED_MODULE_3__["default"].getSelectedKey()==="")
            return;
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
                if(diagAdd.textContent==="Edit"){
                    (0,_Todoops__WEBPACK_IMPORTED_MODULE_0__.editTodo)(inputString);
                    dialog.close();
                    diagAdd.textContent="Add";
                    return;
                }
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
            if((0,date_fns_compareAsc__WEBPACK_IMPORTED_MODULE_4__["default"])(DateObj,new Date())<0){
                isValid=false;
                _DOM__WEBPACK_IMPORTED_MODULE_1__["default"].markInvalid(inputs[2]);
            }
        }
        return isValid;
    }

    function openEditDialog(Todo){
        diagAdd.textContent="Edit";
        openDialog();
        inputs[0].value=Todo.title;
        inputs[1].value=Todo.description;
        inputs[2].value=Todo.dueDate;
    }

    return {openDialog,openEditDialog};
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _taskDialog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskDialog.js */ "./src/taskDialog.js");
/* harmony import */ var _projDialog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projDialog.js */ "./src/projDialog.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _Todoops__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Todoops */ "./src/Todoops.js");
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Dialog */ "./src/Dialog.js");







const addTaskBtn=document.querySelector('#add-task');
const addProjBtn=document.querySelector('.proj-add');
const deleteProjBtn=document.querySelector('.proj-delete');

_DOM_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderProjectList();
addTaskBtn.addEventListener('click',_taskDialog_js__WEBPACK_IMPORTED_MODULE_1__["default"].openDialog);
addProjBtn.addEventListener('click',_projDialog_js__WEBPACK_IMPORTED_MODULE_2__["default"].openDialog);
deleteProjBtn.addEventListener('click',_projDialog_js__WEBPACK_IMPORTED_MODULE_2__["default"].openConfirmDialog);

const projectList=document.querySelector('#project-list');
projectList.addEventListener('click',
    (event)=>{
        const target=event.target;
        const key=target.getAttribute('data-proj');
        if(!key)
            return;
        _DOM_js__WEBPACK_IMPORTED_MODULE_3__["default"].highlightSelectedBtn(target);
        _DOM_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderList(key);
    }
);

const taskList=document.querySelector('.task-list');

taskList.addEventListener('click',
    (event)=>{
        const composedPath=event.composedPath();
        if(composedPath[0].tagName!=="BUTTON")
            return;
        const dataIndex=composedPath[2].getAttribute('data-index');
        const button=composedPath[0].getAttribute('class');
        const firstChar=button.charAt(0);
        if(firstChar==='C')
            console.log("Check");
        else if(firstChar==="D")
            (0,_Todoops__WEBPACK_IMPORTED_MODULE_4__.deleteTodo)(+dataIndex);
        else{
            (0,_Todoops__WEBPACK_IMPORTED_MODULE_4__.setEditIndex)(+dataIndex);
            _taskDialog_js__WEBPACK_IMPORTED_MODULE_1__["default"].openEditDialog((0,_Todoops__WEBPACK_IMPORTED_MODULE_4__.retrieveTodo)(+dataIndex));
        }
    }
);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBLE9BQU8saUZBQWlGLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sMkJBQTJCLDZC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QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDc0I7QUFDQTtBQUNqQjtBQUNvQztBQUNqQzs7QUFFOUI7QUFDQTtBQUNBOztBQUVBLCtDQUFHO0FBQ0gsb0NBQW9DLHNEQUFhO0FBQ2pELG9DQUFvQyxzREFBYTtBQUNqRCx1Q0FBdUMsc0RBQWE7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBRztBQUNYLFFBQVEsK0NBQUc7QUFDWDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFVO0FBQ3RCO0FBQ0EsWUFBWSxzREFBWTtBQUN4QixZQUFZLHNEQUFhLGdCQUFnQixzREFBWTtBQUNyRDtBQUNBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RpYWxvZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvU3RvcmFnZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVG9kb29wcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvakRpYWxvZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvak9wcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza0RpYWxvZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLS1wcmltYXJ5LWNvbG9yOnJnYigyNCwgMTM1LCAxOTkpO1xufVxuYm9keXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMDBweCBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbn1cblxudWx7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaW5wdXQsc2VsZWN0e1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbmxhYmVse1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jcHJpb3JpdHl7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmhlYWRlcntcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBncmlkLXJvdzogMTtcbiAgICBncmlkLWNvbHVtbjogMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDRweCByZ2IoOTEsIDIxMywgMjM1KTtcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggYmxhY2s7XG59XG4uc2lkZWJhcntcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGdyaWQtcm93OiAxLy0xO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucHJvai1idXR0b24tY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wcm9qLXNlY3Rpb24gYnV0dG9ue1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgJjpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc5LCAxNzksIDIyNik7XG4gICAgfVxuICAgICYuaGlnaGxpZ2h0e1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzksIDE3OSwgMjI2KTtcbiAgICB9XG59XG5cbi5wcm9qLWFkZCwucHJvai1kZWxldGV7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmbGV4OiAxO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCBibGFjaztcbiAgICAmOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig3OSwgMTc5LCAyMjYpIDtcbiAgICB9XG59XG5cblxuLnByb2otc2VjdGlvbiA+dWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTNweDtcbn1cblxuLnByb2otc2VjdGlvbiA+aDN7XG4gICAgZm9udC1zaXplOiAyLjFyZW07XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggYmxhY2s7XG59XG5cbi5tYWluLWNvbnRlbnR7XG4gICAgZ3JpZC1yb3c6IDIvLTE7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgPmJ1dHRvbntcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDIwcHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYWxpZ24tc2VsZjpmbGV4LWVuZDtcbiAgICB9XG4gICAgPmJ1dHRvbjpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0LCAxMDgsIDE3Mik7XG4gICAgfVxufVxuXG4udGFza3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgJiBwe1xuICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB9XG4gICAgJiBwOmxhc3Qtb2YtdHlwZXtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgIH1cbn1cblxuLnRhc2sgc3BhbntcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgPmJ1dHRvbntcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDEuOXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIH1cbiAgICAmIC5DaGVjay1CdG57XG4gICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG4gICAgfVxuICAgID5idXR0b246aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMTAwLCAxMzgpO1xuICAgIH1cbiAgICAmIC5FZGl0LUJ0bntcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDlweDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcbiAgICB9XG59XG5cblxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsbUpBQW1KO0FBQ3ZKOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztJQUNkLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osZUFBZTtJQUNmLHNDQUFzQztJQUN0Qyw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsU0FBUztJQUNULGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQjtRQUNJLG1DQUFtQztJQUN2QztJQUNBO1FBQ0ksbUNBQW1DO0lBQ3ZDO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQjtRQUNJLG1DQUFtQztJQUN2QztBQUNKOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUI7UUFDSSxnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsdUJBQXVCO1FBQ3ZCLHNDQUFzQztRQUN0QyxpQkFBaUI7UUFDakIsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQ0FBbUM7SUFDdkM7QUFDSjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCO1FBQ0ksUUFBUTtRQUNSLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2I7UUFDSSxPQUFPO1FBQ1AsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixzQ0FBc0M7UUFDdEMsMkJBQTJCO1FBQzNCLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksWUFBWTtRQUNaLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksbUNBQW1DO0lBQ3ZDO0lBQ0E7UUFDSSwrQkFBK0I7UUFDL0IsNEJBQTRCO0lBQ2hDO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAtLXByaW1hcnktY29sb3I6cmdiKDI0LCAxMzUsIDE5OSk7XFxufVxcbmJvZHl7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAwcHggYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxudWx7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaW5wdXQsc2VsZWN0e1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG5sYWJlbHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNwcmlvcml0eXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtc2hhZG93OiAycHggNHB4IHJnYig5MSwgMjEzLCAyMzUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggYmxhY2s7XFxufVxcbi5zaWRlYmFye1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDBweDtcXG4gICAgbGVmdDogMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBncmlkLXJvdzogMS8tMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucHJvai1idXR0b24tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvai1zZWN0aW9uIGJ1dHRvbntcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICY6aG92ZXJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzksIDE3OSwgMjI2KTtcXG4gICAgfVxcbiAgICAmLmhpZ2hsaWdodHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3OSwgMTc5LCAyMjYpO1xcbiAgICB9XFxufVxcblxcbi5wcm9qLWFkZCwucHJvai1kZWxldGV7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCBibGFjaztcXG4gICAgJjpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDc5LCAxNzksIDIyNikgO1xcbiAgICB9XFxufVxcblxcblxcbi5wcm9qLXNlY3Rpb24gPnVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEzcHg7XFxufVxcblxcbi5wcm9qLXNlY3Rpb24gPmgze1xcbiAgICBmb250LXNpemU6IDIuMXJlbTtcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggYmxhY2s7XFxufVxcblxcbi5tYWluLWNvbnRlbnR7XFxuICAgIGdyaWQtcm93OiAyLy0xO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgPmJ1dHRvbntcXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgICAgICBib3R0b206IDIwcHg7XFxuICAgICAgICByaWdodDogMjBweDtcXG4gICAgICAgIG1hcmdpbjogMjBweCAyMHB4O1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICBhbGlnbi1zZWxmOmZsZXgtZW5kO1xcbiAgICB9XFxuICAgID5idXR0b246aG92ZXJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQsIDEwOCwgMTcyKTtcXG4gICAgfVxcbn1cXG5cXG4udGFza3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICYgcHtcXG4gICAgICAgIG1hcmdpbjowO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIH1cXG4gICAgJiBwOmxhc3Qtb2YtdHlwZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIH1cXG59XFxuXFxuLnRhc2sgc3BhbntcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgPmJ1dHRvbntcXG4gICAgICAgIGZsZXg6IDE7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBmb250LXNpemU6IDEuOXJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB9XFxuICAgICYgLkNoZWNrLUJ0bntcXG4gICAgICAgIGNvbG9yOiBncmVlbjtcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB9XFxuICAgID5idXR0b246aG92ZXJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDEwMCwgMTM4KTtcXG4gICAgfVxcbiAgICAmIC5FZGl0LUJ0bntcXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA5cHg7XFxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB9XFxufVxcblxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgZGlmZiA9IGRhdGVMZWZ0LmdldFRpbWUoKSAtIGRhdGVSaWdodC5nZXRUaW1lKCk7XG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxO1xuICAgIC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBTdG9yYWdlTW9kdWxlIGZyb20gXCIuL1N0b3JhZ2VNb2R1bGVcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2pPcHMuanNcIjtcbmltcG9ydCBFZGl0IGZyb20gJy4vcGVuLXNvbGlkLnN2Zyc7XG5pbXBvcnQgRGVsZXRlIGZyb20gJy4vdHJhc2gtc29saWQuc3ZnJztcblxuXG5jb25zdCBET009KGZ1bmN0aW9uKCl7XG4gICAgbGV0IHRhc2tMaXN0PW51bGw7XG4gICAgbGV0IHByb2plY3RMaXN0PW51bGw7XG5cbiAgICBmdW5jdGlvbiBhZGRUb2RvKFRvZG8sbmV3TGVuZ3RoKXtcbiAgICAgICAgaWYoIXRhc2tMaXN0KVxuICAgICAgICAgICAgdGFza0xpc3Q9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbGlzdCcpO1xuICAgICAgICBjb25zdCBsaXN0SXRlbT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgIGNvbnN0IGRpdj1jcmVhdGVUb2RvSXRlbShUb2RvKTtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsbmV3TGVuZ3RoLTEpO1xuICAgICAgICBkaXYuc3R5bGUuYm9yZGVyTGVmdD1gN3B4IHNvbGlkICR7VG9kby5wcmlvcml0eX1gO1xuICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVG9kb0l0ZW0oVG9kbyl7XG4gICAgICAgIGNvbnN0IGRpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdD1cInRhc2tcIjtcblxuICAgICAgICBjb25zdCBpbmZvRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0aXRsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQ9VG9kby50aXRsZTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQ9VG9kby5kZXNjcmlwdGlvbjtcblxuICAgICAgICBpbmZvRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uU3Bhbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IGRvbmVCdG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRvbmVCdG4udGV4dENvbnRlbnQ9XCLinJNcIjtcbiAgICAgICAgZG9uZUJ0bi5jbGFzc0xpc3Q9XCJDaGVjay1CdG5cIjtcbiAgICAgICAgY29uc3QgZGVsZXRlQnRuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0PVwiRGVsZXRlLUJ0blwiO1xuICAgICAgICBjb25zdCBlZGl0QnRuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdD1cIkVkaXQtQnRuXCI7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlSW1hZ2U9bmV3IEltYWdlKCk7XG4gICAgICAgIGRlbGV0ZUltYWdlLnNyYz1EZWxldGU7XG4gICAgICAgIGRlbGV0ZUltYWdlLmhlaWdodD0yMDtcbiAgICAgICAgZGVsZXRlSW1hZ2Uud2lkdGg9MTA7XG4gICAgICAgIGNvbnN0IGVkaXRJbWFnZT1uZXcgSW1hZ2UoKTtcbiAgICAgICAgZWRpdEltYWdlLnNyYz1FZGl0O1xuICAgICAgICBlZGl0SW1hZ2UuaGVpZ2h0PTIwO1xuICAgICAgICBlZGl0SW1hZ2Uud2lkdGg9MTA7XG5cbiAgICAgICAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZUltYWdlKTtcbiAgICAgICAgZWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0SW1hZ2UpO1xuXG4gICAgICAgIGJ1dHRvblNwYW4uYXBwZW5kQ2hpbGQoZG9uZUJ0bik7XG4gICAgICAgIGJ1dHRvblNwYW4uYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICAgICAgYnV0dG9uU3Bhbi5hcHBlbmRDaGlsZChlZGl0QnRuKTtcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5mb0Rpdik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b25TcGFuKTtcblxuICAgICAgICByZXR1cm4gZGl2O1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyTGlzdChrZXkpe1xuICAgICAgICBpZighdGFza0xpc3QpXG4gICAgICAgICAgICB0YXNrTGlzdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1saXN0Jyk7XG4gICAgICAgIHRhc2tMaXN0LnRleHRDb250ZW50PVwiXCI7XG4gICAgICAgIGlmKCFrZXkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGxpc3Q9U3RvcmFnZU1vZHVsZS5yZXRyaWV2ZUl0ZW0oa2V5KTtcbiAgICAgICAgbGlzdC5mb3JFYWNoKFxuICAgICAgICAgICAgKFRvZG8saW5kZXgpPT5hZGRUb2RvKFRvZG8saW5kZXgrMSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0TGlzdCgpe1xuICAgICAgICBpZighcHJvamVjdExpc3QpXG4gICAgICAgICAgICBwcm9qZWN0TGlzdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0Jyk7XG4gICAgICAgIHByb2plY3RMaXN0LnRleHRDb250ZW50PVwiXCI7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8U3RvcmFnZU1vZHVsZS5sZW5ndGgoKTtpKyspe1xuICAgICAgICAgICAgY29uc3QgW25hbWUsaW5kZXhdPShTdG9yYWdlTW9kdWxlLmtleShpKSkuc3BsaXQoXCIlJCVcIik7XG4gICAgICAgICAgICBhZGRQcm9qZWN0KGluZGV4LG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJlbmRlckxpc3QoUHJvamVjdC5nZXRTZWxlY3RlZEtleSgpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXJrSW52YWxpZChlbGVtZW50KXtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3JkZXI9XCIycHggc29saWQgcmVkXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlTWFyayhlbGVtZW50KXtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3JkZXI9XCJcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KGluZGV4LG5hbWUpe1xuICAgICAgICBpZighcHJvamVjdExpc3QpXG4gICAgICAgICAgICBwcm9qZWN0TGlzdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0Jyk7XG4gICAgICAgIGNvbnN0IGtleT1gJHtuYW1lfSUkJSR7aW5kZXh9YDtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW09ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29uc3QgcHJvakJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcHJvakJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvaicsa2V5KTtcbiAgICAgICAgcHJvakJ0bi50ZXh0Q29udGVudD1uYW1lO1xuICAgICAgICBoaWdobGlnaHRTZWxlY3RlZEJ0bihwcm9qQnRuKTtcblxuICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChwcm9qQnRuKTtcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgICAgICByZW5kZXJMaXN0KGtleSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlnaGxpZ2h0U2VsZWN0ZWRCdG4oc2VsZWN0ZWRCdG4pe1xuICAgICAgICBjb25zdCBwcmV2U2VsZWN0ZWRLZXk9UHJvamVjdC5nZXRTZWxlY3RlZEtleSgpO1xuICAgICAgICBpZihwcmV2U2VsZWN0ZWRLZXkhPT1cIlwiKXtcbiAgICAgICAgICAgIGNvbnN0IHByZXZTZWxlY3RlZEJ0bj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBidXR0b25bZGF0YS1wcm9qPVwiJHtwcmV2U2VsZWN0ZWRLZXl9XCJdYCk7XG4gICAgICAgICAgICBwcmV2U2VsZWN0ZWRCdG4uY2xhc3NMaXN0PVwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0ZWRCdG4uY2xhc3NMaXN0PVwiaGlnaGxpZ2h0XCI7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkS2V5PXNlbGVjdGVkQnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qJyk7XG4gICAgICAgIFByb2plY3Quc2V0U2VsZWN0ZWRLZXkoc2VsZWN0ZWRLZXkpO1xuICAgIH1cblxuXG5cbiAgICByZXR1cm4ge2FkZFRvZG8scmVuZGVyTGlzdCxtYXJrSW52YWxpZCxyZW1vdmVNYXJrLGFkZFByb2plY3QscmVuZGVyUHJvamVjdExpc3QsaGlnaGxpZ2h0U2VsZWN0ZWRCdG59O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NOyIsImltcG9ydCBET00gZnJvbSBcIi4vRE9NXCI7XG5cbmNvbnN0IERpYWxvZz0oZnVuY3Rpb24oKXtcbiAgICBmdW5jdGlvbiBpc0lucHV0c0ZpbGxlZChpbnB1dHMpe1xuICAgICAgICBsZXQgaXNGaWxsZWQ9dHJ1ZTtcbiAgICAgICAgaW5wdXRzLmZvckVhY2goXG4gICAgICAgICAgICAoaW5wdXQpPT57XG4gICAgICAgICAgICAgICAgaWYoaW5wdXQudmFsdWU9PT1cIlwiKXtcbiAgICAgICAgICAgICAgICAgICAgaXNGaWxsZWQ9ZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIERPTS5tYXJrSW52YWxpZChpbnB1dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgRE9NLnJlbW92ZU1hcmsoaW5wdXQpOyAgIFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gaXNGaWxsZWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbnZhbGlkTWFya3MoaW5wdXRzKXtcbiAgICAgICAgaW5wdXRzLmZvckVhY2goXG4gICAgICAgICAgICAoaW5wdXQpPT5ET00ucmVtb3ZlTWFyayhpbnB1dClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhcklucHV0cyhpbnB1dHMpe1xuICAgICAgICBpbnB1dHMuZm9yRWFjaChcbiAgICAgICAgICAgIChpbnB1dCk9PntcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZT1cIlwiO1xuICAgICAgICAgICAgICAgIERPTS5yZW1vdmVNYXJrKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2lzSW5wdXRzRmlsbGVkLGNsZWFySW52YWxpZE1hcmtzLGNsZWFySW5wdXRzfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERpYWxvZzsiLCJjb25zdCBTdG9yYWdlTW9kdWxlPShmdW5jdGlvbigpe1xuICAgIFxuICAgIGZ1bmN0aW9uIGxlbmd0aCgpe1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmxlbmd0aDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRJdGVtKGlkLGl0ZW0pe1xuICAgICAgICBpdGVtPUpTT04uc3RyaW5naWZ5KGl0ZW0pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtpZH1gLGl0ZW0pO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiByZXRyaWV2ZUl0ZW0oa2V5KXtcbiAgICAgICAgY29uc3QgcmVzdWx0U3RyaW5nPWxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdD1KU09OLnBhcnNlKHJlc3VsdFN0cmluZyk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24ga2V5KGkpe1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmtleShpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHB1c2hPYmplY3Qoa2V5LG9iamVjdCl7XG4gICAgICAgIGNvbnN0IGxpc3Q9cmV0cmlldmVJdGVtKGtleSk7XG4gICAgICAgIGxpc3QucHVzaChvYmplY3QpO1xuICAgICAgICBjb25zdCBuZXdMZW5ndGg9bGlzdC5sZW5ndGg7XG4gICAgICAgIGFkZEl0ZW0oa2V5LGxpc3QpO1xuICAgICAgICByZXR1cm4gbmV3TGVuZ3RoO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUtleShrZXkpe1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgIH1cblxuICAgIHJldHVybiB7YWRkSXRlbSxyZXRyaWV2ZUl0ZW0sa2V5LGxlbmd0aCxwdXNoT2JqZWN0LGRlbGV0ZUtleX07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlTW9kdWxlO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb3tcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LGlzQ29tcGxldGU9ZmFsc2Upe1xuICAgICAgICB0aGlzLnRpdGxlPXRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uPWRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGU9ZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eT1wcmlvcml0eTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlPWlzQ29tcGxldGU7XG4gICAgfVxufSIsImltcG9ydCBET00gZnJvbSAnLi9ET00uanMnO1xuaW1wb3J0IFN0b3JhZ2VNb2R1bGUgZnJvbSAnLi9TdG9yYWdlTW9kdWxlLmpzJztcbmltcG9ydCBUb2RvIGZyb20gJy4vVG9kby5qcyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2pPcHMuanMnO1xuXG5cbmxldCBlZGl0SW5kZXg9LTE7XG5mdW5jdGlvbiBhZGRUb2RvKFRvZG8pe1xuICAgIGNvbnN0IGtleT1Qcm9qZWN0LmdldFNlbGVjdGVkS2V5KCk7XG4gICAgY29uc3QgbmV3TGVuZ3RoPVN0b3JhZ2VNb2R1bGUucHVzaE9iamVjdChrZXksVG9kbyk7XG4gICAgRE9NLmFkZFRvZG8oVG9kbyxuZXdMZW5ndGgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvKGlucHV0U3RyaW5nKXtcbiAgICBjb25zdCBbdGl0bGUsZGVzY3JpcHRpb24sZHVlLHByaW9yaXR5XT1pbnB1dFN0cmluZy5zcGxpdChcInxcIik7XG4gICAgY29uc3QgVG9kb09iamVjdD1uZXcgVG9kbyh0aXRsZSxkZXNjcmlwdGlvbixkdWUscHJpb3JpdHkpO1xuICAgIHJldHVybiBUb2RvT2JqZWN0O1xufVxuXG5mdW5jdGlvbiBkZWxldGVUb2RvKGluZGV4KXtcbiAgICBjb25zdCBrZXk9UHJvamVjdC5nZXRTZWxlY3RlZEtleSgpO1xuICAgIGNvbnN0IGxpc3Q9U3RvcmFnZU1vZHVsZS5yZXRyaWV2ZUl0ZW0oa2V5KTtcbiAgICBjb25zdCBuZXdMaXN0PVsuLi5saXN0LnNsaWNlKDAsaW5kZXgpLC4uLmxpc3Quc2xpY2UoaW5kZXgrMSldO1xuICAgIFN0b3JhZ2VNb2R1bGUuYWRkSXRlbShrZXksbmV3TGlzdCk7XG4gICAgRE9NLnJlbmRlckxpc3Qoa2V5KTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVUb2RvKGluZGV4KXtcbiAgICBjb25zdCBrZXk9UHJvamVjdC5nZXRTZWxlY3RlZEtleSgpO1xuICAgIGNvbnN0IGxpc3Q9U3RvcmFnZU1vZHVsZS5yZXRyaWV2ZUl0ZW0oa2V5KTtcbiAgICByZXR1cm4gbGlzdFtpbmRleF07XG59XG5cbmZ1bmN0aW9uIGVkaXRUb2RvKGlucHV0U3RyaW5nKXtcbiAgICBjb25zdCBrZXk9UHJvamVjdC5nZXRTZWxlY3RlZEtleSgpO1xuICAgIGNvbnN0IGxpc3Q9U3RvcmFnZU1vZHVsZS5yZXRyaWV2ZUl0ZW0oa2V5KTtcbiAgICBjb25zdCBuZXdUb2RvPWNyZWF0ZVRvZG8oaW5wdXRTdHJpbmcpO1xuICAgIGxpc3RbZWRpdEluZGV4XT1uZXdUb2RvO1xuICAgIFN0b3JhZ2VNb2R1bGUuYWRkSXRlbShrZXksbGlzdCk7XG4gICAgRE9NLnJlbmRlckxpc3Qoa2V5KTtcbn1cblxuZnVuY3Rpb24gZ2V0RWRpdEluZGV4KCl7XG4gICAgcmV0dXJuIGVkaXRJbmRleDtcbn1cblxuZnVuY3Rpb24gc2V0RWRpdEluZGV4KHZhbHVlKXtcbiAgICBlZGl0SW5kZXg9dmFsdWU7XG59XG5cbmV4cG9ydCB7YWRkVG9kbyxjcmVhdGVUb2RvLGRlbGV0ZVRvZG8sZWRpdFRvZG8sZ2V0RWRpdEluZGV4LHNldEVkaXRJbmRleCxyZXRyaWV2ZVRvZG99OyIsImltcG9ydCBEaWFsb2cgZnJvbSBcIi4vRGlhbG9nXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qT3BzXCI7XG5cbmNvbnN0IHByb2pEaWFsb2dCb3g9KGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgZGlhbG9nPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qRGlhbG9nJyk7XG4gICAgY29uc3QgY29uZmlybURpYWxvZ0JveD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29uZmlybURpYWxvZycpO1xuXG4gICAgY29uc3QgY2xvc2VCdG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2otY2xvc2UnKTtcbiAgICBjb25zdCBhZGRCdG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2otYXBwZW5kJyk7XG4gICAgY29uc3QgaW5wdXRzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwcm9qRGlhbG9nIGlucHV0Jyk7XG5cbiAgICBjb25zdCBjb25maXJtWWVzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb25maXJtWWVzJyk7XG5cbiAgICBmdW5jdGlvbiBvcGVuRGlhbG9nKCl7XG4gICAgICAgIERpYWxvZy5jbGVhcklucHV0cyhpbnB1dHMpO1xuICAgICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfVxuXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgICAgICAoZXZlbnQpPT57XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcbiAgICAgICAgKGV2ZW50KT0+e1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmKERpYWxvZy5pc0lucHV0c0ZpbGxlZChpbnB1dHMpKXtcbiAgICAgICAgICAgICAgICBQcm9qZWN0LmFkZFByb2plY3QoaW5wdXRzWzBdLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBjb25maXJtWWVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcbiAgICAgICAgKGV2ZW50KT0+e1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIFByb2plY3QuZGVsZXRlUHJvamVjdCgpO1xuICAgICAgICAgICAgY29uZmlybURpYWxvZ0JveC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgKVxuXG4gICAgZnVuY3Rpb24gb3BlbkNvbmZpcm1EaWFsb2coKXtcbiAgICAgICAgY29uZmlybURpYWxvZ0JveC5zaG93TW9kYWwoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge29wZW5EaWFsb2csb3BlbkNvbmZpcm1EaWFsb2d9O1xuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qRGlhbG9nQm94OyIsImltcG9ydCBET00gZnJvbSBcIi4vRE9NXCI7XG5pbXBvcnQgU3RvcmFnZU1vZHVsZSBmcm9tIFwiLi9TdG9yYWdlTW9kdWxlXCI7XG5cbmNvbnN0IFByb2plY3Q9KGZ1bmN0aW9uKCl7XG4gICAgbGV0IHNlbGVjdGVkPVwiXCI7XG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdChuYW1lKXtcbiAgICAgICAgY29uc3QgaW5kZXg9U3RvcmFnZU1vZHVsZS5sZW5ndGgoKTtcbiAgICAgICAgY29uc3Qga2V5PWAke25hbWV9JSQlJHtpbmRleH1gO1xuICAgICAgICBTdG9yYWdlTW9kdWxlLmFkZEl0ZW0oa2V5LFtdKTtcbiAgICAgICAgRE9NLmFkZFByb2plY3QoaW5kZXgsbmFtZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRLZXkoKXtcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFNlbGVjdGVkS2V5KGtleSl7XG4gICAgICAgIHNlbGVjdGVkPWtleTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KCl7XG4gICAgICAgIGlmKHNlbGVjdGVkPT09XCJcIilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgU3RvcmFnZU1vZHVsZS5kZWxldGVLZXkoc2VsZWN0ZWQpO1xuICAgICAgICBzZWxlY3RlZD1cIlwiO1xuICAgICAgICBET00ucmVuZGVyUHJvamVjdExpc3QoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2FkZFByb2plY3QsZ2V0U2VsZWN0ZWRLZXksc2V0U2VsZWN0ZWRLZXksZGVsZXRlUHJvamVjdH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyIsImltcG9ydCB7IGNyZWF0ZVRvZG8sYWRkVG9kbywgZWRpdFRvZG8gfSBmcm9tIFwiLi9Ub2Rvb3BzXCI7XG5pbXBvcnQgY29tcGFyZUFzYyBmcm9tIFwiZGF0ZS1mbnMvY29tcGFyZUFzY1wiO1xuaW1wb3J0IERPTSBmcm9tIFwiLi9ET01cIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIi4vRGlhbG9nXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qT3BzXCI7XG5cbmNvbnN0IHRhc2tEaWFsb2dCb3g9KGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgZGlhbG9nPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRGlhZycpO1xuICAgIGNvbnN0IGRpYWdDbG9zZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UnKTtcbiAgICBjb25zdCBkaWFnQWRkPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZSArIGJ1dHRvbicpO1xuXG4gICAgY29uc3QgZGlhZ1NlbGVjdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcbiAgICBsZXQgc2VsZWN0VmFsPVwib3JhbmdlXCI7XG5cbiAgICBjb25zdCBpbnB1dHM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Rhc2tEaWFnIGlucHV0Jyk7XG5cbiAgICBmdW5jdGlvbiBvcGVuRGlhbG9nKCl7XG4gICAgICAgIGlmKFByb2plY3QuZ2V0U2VsZWN0ZWRLZXkoKT09PVwiXCIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIERpYWxvZy5jbGVhcklucHV0cyhpbnB1dHMpO1xuICAgICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfVxuXG4gICAgZGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJyxcbiAgICAgICAgKCk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ0xPU0VEXCIpO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIGRpYWdDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXG4gICAgICAgIChldmVudCk9PntcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkaWFsb2cuY2xvc2UoKVxuICAgICAgICB9XG4gICAgKVxuXG4gICAgZGlhZ0FkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXG4gICAgICAgIChldmVudCk9PntcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZihjaGVja0lucHV0cygpKXtcbiAgICAgICAgICAgICAgICBEaWFsb2cuY2xlYXJJbnZhbGlkTWFya3MoaW5wdXRzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFN0cmluZz1mZXRjaElucHV0cygpO1xuICAgICAgICAgICAgICAgIGlmKGRpYWdBZGQudGV4dENvbnRlbnQ9PT1cIkVkaXRcIil7XG4gICAgICAgICAgICAgICAgICAgIGVkaXRUb2RvKGlucHV0U3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIGRpYWdBZGQudGV4dENvbnRlbnQ9XCJBZGRcIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhZGRUb2RvKGNyZWF0ZVRvZG8oaW5wdXRTdHJpbmcpKTtcbiAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkXCIpXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgZGlhZ1NlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLFxuICAgICAgICAoKT0+e1xuICAgICAgICAgICAgc2VsZWN0VmFsPWRpYWdTZWxlY3QudmFsdWU7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgZnVuY3Rpb24gZmV0Y2hJbnB1dHMoKXtcbiAgICAgICAgbGV0IGlucHV0U3RyaW5nPVwiXCI7XG4gICAgICAgIGlucHV0cy5mb3JFYWNoKFxuICAgICAgICAgICAgKGlucHV0KT0+aW5wdXRTdHJpbmcrPShpbnB1dC52YWx1ZStcInxcIilcbiAgICAgICAgKTtcbiAgICAgICAgaW5wdXRTdHJpbmcrPWAke3NlbGVjdFZhbH1gO1xuICAgICAgICByZXR1cm4gaW5wdXRTdHJpbmc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tJbnB1dHMoKXtcbiAgICAgICAgbGV0IGlzVmFsaWQ9RGlhbG9nLmlzSW5wdXRzRmlsbGVkKGlucHV0cyk7XG4gICAgICAgIGlmKGlzVmFsaWQpe1xuICAgICAgICAgICAgY29uc3QgZGF0ZT1pbnB1dHNbMl0udmFsdWU7XG4gICAgICAgICAgICBjb25zdCBEYXRlT2JqPW5ldyBEYXRlKGRhdGUpO1xuICAgICAgICAgICAgRGF0ZU9iai5zZXRIb3VycygyMyw1OSw1OSw5OSk7XG4gICAgICAgICAgICBpZihjb21wYXJlQXNjKERhdGVPYmosbmV3IERhdGUoKSk8MCl7XG4gICAgICAgICAgICAgICAgaXNWYWxpZD1mYWxzZTtcbiAgICAgICAgICAgICAgICBET00ubWFya0ludmFsaWQoaW5wdXRzWzJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvcGVuRWRpdERpYWxvZyhUb2RvKXtcbiAgICAgICAgZGlhZ0FkZC50ZXh0Q29udGVudD1cIkVkaXRcIjtcbiAgICAgICAgb3BlbkRpYWxvZygpO1xuICAgICAgICBpbnB1dHNbMF0udmFsdWU9VG9kby50aXRsZTtcbiAgICAgICAgaW5wdXRzWzFdLnZhbHVlPVRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgIGlucHV0c1syXS52YWx1ZT1Ub2RvLmR1ZURhdGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtvcGVuRGlhbG9nLG9wZW5FZGl0RGlhbG9nfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tEaWFsb2dCb3g7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB0YXNrRGlhbG9nQm94IGZyb20gJy4vdGFza0RpYWxvZy5qcyc7XG5pbXBvcnQgcHJvakRpYWxvZ0JveCBmcm9tICcuL3Byb2pEaWFsb2cuanMnO1xuaW1wb3J0IERPTSBmcm9tICcuL0RPTS5qcyc7XG5pbXBvcnQge2RlbGV0ZVRvZG8sc2V0RWRpdEluZGV4LHJldHJpZXZlVG9kb30gZnJvbSAnLi9Ub2Rvb3BzJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi9EaWFsb2cnO1xuXG5jb25zdCBhZGRUYXNrQnRuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpO1xuY29uc3QgYWRkUHJvakJ0bj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvai1hZGQnKTtcbmNvbnN0IGRlbGV0ZVByb2pCdG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2otZGVsZXRlJyk7XG5cbkRPTS5yZW5kZXJQcm9qZWN0TGlzdCgpO1xuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdGFza0RpYWxvZ0JveC5vcGVuRGlhbG9nKTtcbmFkZFByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHByb2pEaWFsb2dCb3gub3BlbkRpYWxvZyk7XG5kZWxldGVQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxwcm9qRGlhbG9nQm94Lm9wZW5Db25maXJtRGlhbG9nKTtcblxuY29uc3QgcHJvamVjdExpc3Q9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpO1xucHJvamVjdExpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgIChldmVudCk9PntcbiAgICAgICAgY29uc3QgdGFyZ2V0PWV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3Qga2V5PXRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvaicpO1xuICAgICAgICBpZigha2V5KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBET00uaGlnaGxpZ2h0U2VsZWN0ZWRCdG4odGFyZ2V0KTtcbiAgICAgICAgRE9NLnJlbmRlckxpc3Qoa2V5KTtcbiAgICB9XG4pO1xuXG5jb25zdCB0YXNrTGlzdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1saXN0Jyk7XG5cbnRhc2tMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcbiAgICAoZXZlbnQpPT57XG4gICAgICAgIGNvbnN0IGNvbXBvc2VkUGF0aD1ldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgICAgICAgaWYoY29tcG9zZWRQYXRoWzBdLnRhZ05hbWUhPT1cIkJVVFRPTlwiKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBkYXRhSW5kZXg9Y29tcG9zZWRQYXRoWzJdLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xuICAgICAgICBjb25zdCBidXR0b249Y29tcG9zZWRQYXRoWzBdLmdldEF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgY29uc3QgZmlyc3RDaGFyPWJ1dHRvbi5jaGFyQXQoMCk7XG4gICAgICAgIGlmKGZpcnN0Q2hhcj09PSdDJylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hlY2tcIik7XG4gICAgICAgIGVsc2UgaWYoZmlyc3RDaGFyPT09XCJEXCIpXG4gICAgICAgICAgICBkZWxldGVUb2RvKCtkYXRhSW5kZXgpO1xuICAgICAgICBlbHNle1xuICAgICAgICAgICAgc2V0RWRpdEluZGV4KCtkYXRhSW5kZXgpO1xuICAgICAgICAgICAgdGFza0RpYWxvZ0JveC5vcGVuRWRpdERpYWxvZyhyZXRyaWV2ZVRvZG8oK2RhdGFJbmRleCkpO1xuICAgICAgICB9XG4gICAgfVxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=