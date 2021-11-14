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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    padding: 0;\n    margin: 0;\n}\n\n.topBar{\n    width: 100%;\n    height: 3rem;\n    display: flex;\n    align-items: center;\n}\n\n.header-img{\n    width: 100%;\n    height: 15rem;\n}\n\nimg{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.Iconimg{\n    height: 1rem;\n    width: 1rem;\n    padding-right: 0.5rem;\n    padding-top: 0.3rem;\n}\n\n.instruct{\n    padding-top: 2.5rem;\n    width: 25rem;\n    height: 12rem;\n    text-align: left;\n    margin-left: 6.5rem;\n}\n\n.toDoListContainer{\n    width: 86%;\n    height: 12rem;\n    text-align: left;\n    margin-left: 6.5rem;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n/* div{\n    border: green 1px solid;\n} */\n\n.toDoBlock{\n    width: 14rem;\n    align-items: flex-start;\n    display: flex;\n    flex-direction: column;\n    align-items: left;\n    padding:0;\n    margin-left: 1.8rem;\n    margin-top: 0.8;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 14px;\n}\n\nh5{\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 14px;\n    font-weight: 400;\n    margin: 0;\n    color: rgb(64, 44, 27);\n    margin-top: 0.3rem;\n}\n\n.group1Color{\n    background: rgb(200, 225, 253);\n}\n\n.group2Color{\n    background: rgb(219, 237, 219);\n}\n\n.group3Color{\n    background: rgb(255, 226, 221);\n}\n\n.group4Color{\n    background: rgb(253, 236, 200);\n}\n\n.group5Color{\n    background: rgb(232, 222, 238);\n}\n\n\n.groupBtn{\n    width: 2rem;\n    height: 2rem;\n    text-align: center;\n    font-size: 1.4rem;\n    color: #9C9C98;\n}\n\n.groupBtn:hover{\n    background-color: rgba(55,53,47,0.08);\n}\n\n.inputBtn{\n    display: none;\n}\n\n.taskBox{\n    width: 10rem;\n    height: 2rem;\n    margin-top: 0.5rem;\n    outline: none;\n    border: none;\n    color:black;\n    border-radius: 3px;\n    font-size: 14px;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.taskBox:hover{\n    background-color: rgba(55,53,47,0.08);\n}\n\n.taskBox::placeholder{\n    color: rgba(55, 53, 47, 0.4);\n}\n\n.submitGroupBtn{\n    position:relative;\n    left: -13%;\n    top: 4px;\n    width: 4rem;\n    height: 1.6rem;\n    background-color: rgb(46, 170, 220);\n    border-radius: 3px;\n    box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px inset, rgb(15 15 15 / 10%) 0px 1px 2px;\n    border: none;\n    color: white;\n    align-items: center;\n}\n\n.submitGroupBtn:hover{\n    background-color: rgb(6, 156, 205);\n}\n\n#group, #group2, #group3, #group4, #group5{\n    position:relative;\n    left: 10%;\n    top: 2%;\n    width: 15rem;\n    height: 2.3rem;\n    color: black;\n    border: 1.5px #DEDEDE solid;\n    background-color: #F7F7F5;\n    box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px;\n    outline: none;\n    font-family: sans-serif;\n    border-radius: 3px;\n}\n\n#group::placeholder, #group2::placeholder{\n    color: #B0B0AD;\n}\n\nspan{\n    padding-top: 0.2rem;\n    margin-left: 0.5rem;\n}\n\np{\n    margin-top: -0.6rem;\n    color: #373630;\n}\n\nhr{\n    width:89%; \n    background-color: black;\n}\n\nli {\n    width: 130%;\n    height: 2rem;\n    border: 1.5px #DEDEDE solid;\n    border-radius: 3px;\n    margin-top: 10px;\n    margin-left: -2rem;\n    padding-left: 0.5rem;\n    padding-top: 0.5rem;\n    padding-right: 0.5rem;\n    box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    \n}\n\n\nli:hover{\n    background-color: rgba(82, 79, 70, 0.03) ;\n}\n\nli:hover .menuBtn{\n    display: block; \n}\n\nli:hover .popWindow{\n    display: block;\n}\n\nul{\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n}\n\n\n\n   .menuBtn{\n    background-color: rgb(255, 255, 255);\n    width: 1.7rem;\n    height: 1.5rem;\n    display: inline-block;\n    margin-bottom: 0.5rem;\n    border: #DEDEDE 1px solid;\n    padding-bottom: 10px;\n    font-weight: 800;\n    font-size: 28px;\n    color: grey;\n    padding-left: 0;\n    padding-right: 0;\n    align-self: center;\n    border-radius: 3px;\n    display: none;\n    box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px;\n   }\n\n   .menuBtn:hover{\n    background-color: rgba(82, 79, 70, 0.05) ;\n   }\n\n   h6{\n       margin-bottom: 0rem;\n       margin-top: -0.3rem;\n       padding-bottom: 2rem;\n   }\n\n   .popWindow{\n    display: flex;   \n    border: #DADADA 1px solid;\n    flex-direction: column;\n    width: 8rem;\n    box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px;\n    border-radius: 3px;\n    display: block;\n    position: relative;\n    top: -34px;\n    left: 13px;\n    display: block;\n    background-color: #FFFF;\n   }\n\n   h3{\n       padding-left: 0rem;\n       font-weight: 200;\n       font-size: 0.8rem;\n       margin-top: 0.2rem;\n       margin-bottom: 0.4rem;\n       font-family: Verdana, Geneva, Tahoma, sans-serif;\n       color: #373630;\n       position: relative;\n       left:0%;\n   }\n\n   .tab:hover{\n    background-color: rgba(55,53,47,0.08);\n   }\n   \n   input{\n       margin-bottom: 0.4rem\n   }", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,aAAa;IACb,eAAe;AACnB;;AAEA;;GAEG;;AAEH;IACI,YAAY;IACZ,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,SAAS;IACT,mBAAmB;IACnB,eAAe;IACf,wIAAwI;IACxI,eAAe;AACnB;;AAEA;IACI,wIAAwI;IACxI,eAAe;IACf,gBAAgB;IAChB,SAAS;IACT,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;AAClC;;;AAGA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,eAAe;IACf,wIAAwI;AAC5I;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,QAAQ;IACR,WAAW;IACX,cAAc;IACd,mCAAmC;IACnC,kBAAkB;IAClB,sFAAsF;IACtF,YAAY;IACZ,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,iBAAiB;IACjB,SAAS;IACT,OAAO;IACP,YAAY;IACZ,cAAc;IACd,YAAY;IACZ,2BAA2B;IAC3B,yBAAyB;IACzB,gFAAgF;IAChF,aAAa;IACb,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,2BAA2B;IAC3B,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,oBAAoB;IACpB,mBAAmB;IACnB,qBAAqB;IACrB,gFAAgF;IAChF,aAAa;IACb,mBAAmB;IACnB,8BAA8B;;AAElC;;;AAGA;IACI,yCAAyC;AAC7C;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,qBAAqB;IACrB,UAAU;IACV,SAAS;AACb;;;;GAIG;IACC,oCAAoC;IACpC,aAAa;IACb,cAAc;IACd,qBAAqB;IACrB,qBAAqB;IACrB,yBAAyB;IACzB,oBAAoB;IACpB,gBAAgB;IAChB,eAAe;IACf,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,gFAAgF;GACjF;;GAEA;IACC,yCAAyC;GAC1C;;GAEA;OACI,mBAAmB;OACnB,mBAAmB;OACnB,oBAAoB;GACxB;;GAEA;IACC,aAAa;IACb,yBAAyB;IACzB,sBAAsB;IACtB,WAAW;IACX,gFAAgF;IAChF,kBAAkB;IAClB,cAAc;IACd,kBAAkB;IAClB,UAAU;IACV,UAAU;IACV,cAAc;IACd,uBAAuB;GACxB;;GAEA;OACI,kBAAkB;OAClB,gBAAgB;OAChB,iBAAiB;OACjB,kBAAkB;OAClB,qBAAqB;OACrB,gDAAgD;OAChD,cAAc;OACd,kBAAkB;OAClB,OAAO;GACX;;GAEA;IACC,qCAAqC;GACtC;;GAEA;OACI;GACJ","sourcesContent":["body{\n    padding: 0;\n    margin: 0;\n}\n\n.topBar{\n    width: 100%;\n    height: 3rem;\n    display: flex;\n    align-items: center;\n}\n\n.header-img{\n    width: 100%;\n    height: 15rem;\n}\n\nimg{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.Iconimg{\n    height: 1rem;\n    width: 1rem;\n    padding-right: 0.5rem;\n    padding-top: 0.3rem;\n}\n\n.instruct{\n    padding-top: 2.5rem;\n    width: 25rem;\n    height: 12rem;\n    text-align: left;\n    margin-left: 6.5rem;\n}\n\n.toDoListContainer{\n    width: 86%;\n    height: 12rem;\n    text-align: left;\n    margin-left: 6.5rem;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n/* div{\n    border: green 1px solid;\n} */\n\n.toDoBlock{\n    width: 14rem;\n    align-items: flex-start;\n    display: flex;\n    flex-direction: column;\n    align-items: left;\n    padding:0;\n    margin-left: 1.8rem;\n    margin-top: 0.8;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 14px;\n}\n\nh5{\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 14px;\n    font-weight: 400;\n    margin: 0;\n    color: rgb(64, 44, 27);\n    margin-top: 0.3rem;\n}\n\n.group1Color{\n    background: rgb(200, 225, 253);\n}\n\n.group2Color{\n    background: rgb(219, 237, 219);\n}\n\n.group3Color{\n    background: rgb(255, 226, 221);\n}\n\n.group4Color{\n    background: rgb(253, 236, 200);\n}\n\n.group5Color{\n    background: rgb(232, 222, 238);\n}\n\n\n.groupBtn{\n    width: 2rem;\n    height: 2rem;\n    text-align: center;\n    font-size: 1.4rem;\n    color: #9C9C98;\n}\n\n.groupBtn:hover{\n    background-color: rgba(55,53,47,0.08);\n}\n\n.inputBtn{\n    display: none;\n}\n\n.taskBox{\n    width: 10rem;\n    height: 2rem;\n    margin-top: 0.5rem;\n    outline: none;\n    border: none;\n    color:black;\n    border-radius: 3px;\n    font-size: 14px;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.taskBox:hover{\n    background-color: rgba(55,53,47,0.08);\n}\n\n.taskBox::placeholder{\n    color: rgba(55, 53, 47, 0.4);\n}\n\n.submitGroupBtn{\n    position:relative;\n    left: -13%;\n    top: 4px;\n    width: 4rem;\n    height: 1.6rem;\n    background-color: rgb(46, 170, 220);\n    border-radius: 3px;\n    box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px inset, rgb(15 15 15 / 10%) 0px 1px 2px;\n    border: none;\n    color: white;\n    align-items: center;\n}\n\n.submitGroupBtn:hover{\n    background-color: rgb(6, 156, 205);\n}\n\n#group, #group2, #group3, #group4, #group5{\n    position:relative;\n    left: 10%;\n    top: 2%;\n    width: 15rem;\n    height: 2.3rem;\n    color: black;\n    border: 1.5px #DEDEDE solid;\n    background-color: #F7F7F5;\n    box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px;\n    outline: none;\n    font-family: sans-serif;\n    border-radius: 3px;\n}\n\n#group::placeholder, #group2::placeholder{\n    color: #B0B0AD;\n}\n\nspan{\n    padding-top: 0.2rem;\n    margin-left: 0.5rem;\n}\n\np{\n    margin-top: -0.6rem;\n    color: #373630;\n}\n\nhr{\n    width:89%; \n    background-color: black;\n}\n\nli {\n    width: 130%;\n    height: 2rem;\n    border: 1.5px #DEDEDE solid;\n    border-radius: 3px;\n    margin-top: 10px;\n    margin-left: -2rem;\n    padding-left: 0.5rem;\n    padding-top: 0.5rem;\n    padding-right: 0.5rem;\n    box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    \n}\n\n\nli:hover{\n    background-color: rgba(82, 79, 70, 0.03) ;\n}\n\nli:hover .menuBtn{\n    display: block; \n}\n\nli:hover .popWindow{\n    display: block;\n}\n\nul{\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n}\n\n\n\n   .menuBtn{\n    background-color: rgb(255, 255, 255);\n    width: 1.7rem;\n    height: 1.5rem;\n    display: inline-block;\n    margin-bottom: 0.5rem;\n    border: #DEDEDE 1px solid;\n    padding-bottom: 10px;\n    font-weight: 800;\n    font-size: 28px;\n    color: grey;\n    padding-left: 0;\n    padding-right: 0;\n    align-self: center;\n    border-radius: 3px;\n    display: none;\n    box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px;\n   }\n\n   .menuBtn:hover{\n    background-color: rgba(82, 79, 70, 0.05) ;\n   }\n\n   h6{\n       margin-bottom: 0rem;\n       margin-top: -0.3rem;\n       padding-bottom: 2rem;\n   }\n\n   .popWindow{\n    display: flex;   \n    border: #DADADA 1px solid;\n    flex-direction: column;\n    width: 8rem;\n    box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px;\n    border-radius: 3px;\n    display: block;\n    position: relative;\n    top: -34px;\n    left: 13px;\n    display: block;\n    background-color: #FFFF;\n   }\n\n   h3{\n       padding-left: 0rem;\n       font-weight: 200;\n       font-size: 0.8rem;\n       margin-top: 0.2rem;\n       margin-bottom: 0.4rem;\n       font-family: Verdana, Geneva, Tahoma, sans-serif;\n       color: #373630;\n       position: relative;\n       left:0%;\n   }\n\n   .tab:hover{\n    background-color: rgba(55,53,47,0.08);\n   }\n   \n   input{\n       margin-bottom: 0.4rem\n   }"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/group1.js":
/*!***********************!*\
  !*** ./src/group1.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "groupInput": () => (/* binding */ groupInput),
/* harmony export */   "ToDoContainer": () => (/* binding */ ToDoContainer)
/* harmony export */ });
let groupNameVar = ""

function Task (task, group){
    this.task = task
    this.group = group 
}

let newTask = new Task()
let list = document.createElement("ul")

const ToDoContainer = document.createElement("div")
    ToDoContainer.classList.add("toDoListContainer")
    

// Group

const groupName = ()=>{
    const groupInput = document.createElement("input")
    groupInput.setAttribute('type', 'text')
    groupInput.id = 'group'
    groupInput.setAttribute("placeholder", 'New group')
    
    groupInput.addEventListener("submit", (e) => {
        e.preventDefault();
    })

    return groupInput
}

const getGroup = () => {
    groupNameVar = document.getElementById('group').value
    return groupName
}

const groupInput = () => {
    const form1 = document.createElement("form")
    
    form1.classList.add("formGroup")

    form1.appendChild(groupName())
    form1.appendChild(submitGroup())
    
    return form1
}

const submitGroup = () => {
    
    const inputBtn = document.createElement("button")
    inputBtn.setAttribute("type", "sumbit")
    inputBtn.classList.add("submitGroupBtn")
    inputBtn.textContent = "Done"
    

    inputBtn.addEventListener("click", (e) =>{
    e.preventDefault()
    if(document.getElementById("group").value.length == 0)
    {
    alert("Do Not leave group name empty")
    }else{
        getGroup()
        const bubble1 = inputBtn.parentNode
        bubble1.style.display = "none"
        ToDoContainer.insertBefore(toDoBlock2(), ToDoContainer.lastElementChild)
    }
        
    })

    return inputBtn
}

//Group

const newInput = () =>{
    const input = document.createElement("input")
    return input
}

const makeInput = () => {
    const input1 = newInput()
    input1.setAttribute("type", 'text')
    input1.id = `task`
    input1.classList.add("taskBox")
    input1.setAttribute("placeholder", '+ New')
   
    input1.addEventListener("submit", (e) => {
        e.preventDefault();
    })
   
    return input1
}

const getTask = () => {
    newTask.task = document.getElementById('task').value
    document.querySelector('.remove').reset()
   return newTask.task
}

function displayTask()  {
    
    const taskDisplay = document.createElement("li")
    const span = document.createElement("span")
    span.textContent = newTask.task;
    taskDisplay.appendChild(span)
    taskDisplay.appendChild(menuButton.create())
    return taskDisplay
}

const submitTask = () => {
    
    const inputBtn = document.createElement("button")
    inputBtn.setAttribute("type", "sumbit")
    inputBtn.classList.add("inputBtn")
    
    inputBtn.addEventListener("click", (e) =>{
    e.preventDefault()
    if(document.getElementById("task").value.length == 0){
        alert("Do not leave task bar empty")
    }else{
        getTask()
        createList().appendChild(displayTask())
    }    
    
    })

    return inputBtn
}

function createList () {
    
    
    list.addEventListener("click", (e) =>{
        const button = e.target;
        const li = button.parentNode;
        const li2 = li.parentNode;
        if (button.textContent === '...'){
            if(li.childElementCount < 2){
                li.appendChild(popOutMenu())        //Making sure only one menu is appended
                
            }
        }
})

    return list

}

const input = () => {
    const form2 = document.createElement("form")
    form2.classList.add("remove")

    form2.appendChild(makeInput())
    form2.appendChild(submitTask())
    form2.appendChild(createList())
    
 
    return form2
}


//Create group

const toDoBlock2 = () => {
    
    const block = document.createElement("div")
    const h5 = document.createElement("h5")
    h5.classList.add('group1Color')
    h5.textContent = groupNameVar
    block.appendChild(h5)
    block.classList.add("toDoBlock")
    block.appendChild(input())
    return block
}


//Create group

const menuButton = (() => {
   
   const create = () =>{
   const menuBtn = document.createElement("button")
    menuBtn.classList.add("menuBtn")
    const p = document.createElement('h6')
    p.textContent = "..."
    menuBtn.appendChild(p)
    menuBtn.setAttribute("type", "button")
    return menuBtn
   }
    return {create}
})()



const deleteTab = () => {
    const deleteTab = document.createElement("div")
    deleteTab.classList.add("tab")
    const MenuTitle1 = document.createElement("h3")
    MenuTitle1.textContent = "Delete"
    const imgTrash = document.createElement("img")
    imgTrash.classList.add("Iconimg")
    imgTrash.src = "../src/images/garbage.png"
    deleteTab.appendChild(MenuTitle1)
    MenuTitle1.prepend(imgTrash)
    
    
    return deleteTab

    
}

const renameTab = () => {
    const renameTab = document.createElement("div")
    renameTab.classList.add("tab")
    const MenuTitle2 = document.createElement("h3")
    MenuTitle2.textContent = "Rename"
    const imgRename = document.createElement("img")
    imgRename.classList.add("Iconimg")
    imgRename.src = "../src/images/edit.png"
    renameTab.appendChild(MenuTitle2)
    MenuTitle2.prepend(imgRename)
    return renameTab
}

const saveTab = () => {
    const saveTab = document.createElement("div")
    saveTab.classList.add("tab")
    const MenuTitle3 = document.createElement("h3")
    MenuTitle3.textContent = "Save"
    const imgSave = document.createElement("img")
    imgSave.classList.add("Iconimg")
    imgSave.src = "../src/images/save.png"
    saveTab.appendChild(MenuTitle3)
    MenuTitle3.prepend(imgSave)
    return saveTab
}



const popOutMenu = () => {
    const popOut = document.createElement("div")
    popOut.classList.add("popWindow")
   
    
    popOut.appendChild(deleteTab())
    popOut.appendChild(renameTab())
    
    popOut.addEventListener("click", (e) => {
        const button = e.target;
        const bubble1 = button.parentNode;
        const bubble2 = bubble1.parentNode
        const bubble3 = bubble2.parentNode
        const bubble4 = bubble3.parentNode
        const bubble5 = bubble4.parentNode
        if (button.textContent === 'Delete'){
            bubble5.removeChild(bubble4)
        }else if(button.textContent === 'Rename'){
            list.addEventListener('keypress', function (e) {    //Preventing user from using 'Enter' after pressing edit
                if (e.key === 'Enter') {
                    e.preventDefault();
                    return false;
                }               
            });            
            const span = bubble4.firstElementChild;
            const input = document.createElement('input');
            input.type = 'text';
            bubble4.insertBefore(input, span);
            bubble4.removeChild(span); 
            popOut.removeChild(popOut.childNodes[1])
            popOut.appendChild(saveTab())
        }else if(button.textContent === 'Save'){
            const input = bubble4.firstElementChild;
            const span = document.createElement('span');
            span.textContent = input.value;
            bubble4.insertBefore(span, input);
            bubble4.removeChild(input);
            button.textContent = 'Rename';
            bubble3.removeChild(bubble3.childNodes[1])  // remove popout onced saved
        }
       
    })
    
    return popOut
}





/***/ }),

/***/ "./src/group2.js":
/*!***********************!*\
  !*** ./src/group2.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "groupInput2": () => (/* binding */ groupInput2)
/* harmony export */ });
/* harmony import */ var _group1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group1 */ "./src/group1.js");



let groupNameVar2 = ""

function Task (task){
    this.task = task
}

let newTask = new Task()
let list = document.createElement("ul")


// Group

const groupName = ()=>{
    const groupInput = document.createElement("input")
    groupInput.setAttribute('type', 'text')
    groupInput.id = 'group2'
    groupInput.setAttribute("placeholder", 'New group')
    
    
    groupInput.addEventListener("submit", (e) => {
        e.preventDefault();
    })

    return groupInput
}

const getGroup = () => {
    groupNameVar2 = document.getElementById('group2').value
    return groupNameVar2
}

const groupInput2 = () => {
    const form1 = document.createElement("form")
    
    form1.classList.add("formGroup")

    form1.appendChild(groupName())
    form1.appendChild(submitGroup())
    
    return form1
}

const submitGroup = () => {
    
    const inputBtn = document.createElement("button")
    inputBtn.setAttribute("type", "sumbit")
    inputBtn.classList.add("submitGroupBtn")
    inputBtn.textContent = "Done"

    inputBtn.addEventListener("click", (e) =>{
    e.preventDefault()
    if(document.getElementById("group2").value.length == 0){
        alert("Do Not leave group name empty")
    }else{
        getGroup()
        const bubble1 = inputBtn.parentNode
        bubble1.style.display = "none"    //Removing text box
        _group1__WEBPACK_IMPORTED_MODULE_0__.ToDoContainer.insertBefore(toDoBlock(), _group1__WEBPACK_IMPORTED_MODULE_0__.ToDoContainer.lastElementChild)
    }
    
    })

    return inputBtn
}

//Group

const newInput = () =>{
    const input = document.createElement("input")
    return input
}

const makeInput = () => {
    const input1 = newInput()
    input1.setAttribute("type", 'text')
    input1.id = 'task1'
    input1.classList.add("taskBox")
    input1.setAttribute("placeholder", '+ New')
   
    input1.addEventListener("submit", (e) => {
        e.preventDefault();
    })
   
    return input1
}

const getTask = () => {
    newTask.task = document.getElementById("task1").value
    document.querySelector('.remove1').reset()
   return newTask.task
}

function displayTask()  {
    
    const taskDisplay = document.createElement("li")
    const span = document.createElement("span")
    span.textContent = newTask.task;
    taskDisplay.appendChild(span)
    taskDisplay.appendChild(menuButton.create())
    return taskDisplay
}



const submitTask = () => {
    
    const inputBtn = document.createElement("button")
    inputBtn.setAttribute("type", "sumbit")
    inputBtn.classList.add("inputBtn")
    
    inputBtn.addEventListener("click", (e) =>{
    e.preventDefault()
    if(document.getElementById("task1").value.length == 0){
        alert("Do not leave task empty")
    }else{
        getTask()
        createList().appendChild(displayTask())
    } 
    
    })

    return inputBtn
}

function createList () {
    
    
    list.addEventListener("click", (e) =>{
        const button = e.target;
        const li = button.parentNode;
        const li2 = li.parentNode;
        if (button.textContent === '...'){
            if(li.childElementCount < 2){
                li.appendChild(popOutMenu())        //Making sure only one menu is appended
                
            }
        }
})

    return list

}

const input = () => {
    const form1 = document.createElement("form")
    form1.classList.add("remove1")
   
    form1.appendChild(makeInput())
    form1.appendChild(submitTask())
    form1.appendChild(createList())
    
    return form1
}


//Create group

const toDoBlock = () => {
    
    const block = document.createElement("div")
    const h5 = document.createElement("h5")
    h5.classList.add('group2Color')
    h5.textContent = groupNameVar2
    block.appendChild(h5)
    block.classList.add("toDoBlock")
    block.appendChild(input())
    return block
}


//Create group

const menuButton = (() => {
   
   const create = () =>{
   const menuBtn = document.createElement("button")
    menuBtn.classList.add("menuBtn")
    const p = document.createElement('h6')
    p.textContent = "..."
    menuBtn.appendChild(p)
    menuBtn.setAttribute("type", "button")
    return menuBtn
   }
    return {create}
})()



const deleteTab = () => {
    const deleteTab = document.createElement("div")
    deleteTab.classList.add("tab")
    const MenuTitle1 = document.createElement("h3")
    MenuTitle1.textContent = "Delete"
    const imgTrash = document.createElement("img")
    imgTrash.classList.add("Iconimg")
    imgTrash.src = "../src/images/garbage.png"
    deleteTab.appendChild(MenuTitle1)
    MenuTitle1.prepend(imgTrash) 
    
    return deleteTab
}

const renameTab = () => {
    const renameTab = document.createElement("div")
    renameTab.classList.add("tab")
    const MenuTitle2 = document.createElement("h3")
    MenuTitle2.textContent = "Rename"
    const imgRename = document.createElement("img")
    imgRename.classList.add("Iconimg")
    imgRename.src = "../src/images/edit.png"
    renameTab.appendChild(MenuTitle2)
    MenuTitle2.prepend(imgRename)
    return renameTab
}

const saveTab = () => {
    const saveTab = document.createElement("div")
    saveTab.classList.add("tab")
    const MenuTitle3 = document.createElement("h3")
    MenuTitle3.textContent = "Save"
    const imgSave = document.createElement("img")
    imgSave.classList.add("Iconimg")
    imgSave.src = "../src/images/save.png"
    saveTab.appendChild(MenuTitle3)
    MenuTitle3.prepend(imgSave)
    return saveTab
}

const popOutMenu = () => {
    const popOut = document.createElement("div")
    popOut.classList.add("popWindow")
   
    
    popOut.appendChild(deleteTab())
    popOut.appendChild(renameTab())
    
    popOut.addEventListener("click", (e) => {
        const button = e.target;
        const bubble1 = button.parentNode;
        const bubble2 = bubble1.parentNode
        const bubble3 = bubble2.parentNode
        const bubble4 = bubble3.parentNode
        const bubble5 = bubble4.parentNode
        if (button.textContent === 'Delete'){
            bubble5.removeChild(bubble4)
        }else if(button.textContent === 'Rename'){
            list.addEventListener('keypress', function (e) {    //Preventing user from using 'Enter' after pressing edit
                if (e.key === 'Enter') {
                    e.preventDefault();
                    return false;
                }               
            });            
            const span = bubble4.firstElementChild;
            const input = document.createElement('input');
            input.type = 'text';
            bubble4.insertBefore(input, span);
            bubble4.removeChild(span); 
            popOut.removeChild(popOut.childNodes[1])
            popOut.appendChild(saveTab())
        }else if(button.textContent === 'Save'){
            const input = bubble4.firstElementChild;
            const span = document.createElement('span');
            span.textContent = input.value;
            bubble4.insertBefore(span, input);
            bubble4.removeChild(input);
            button.textContent = 'Rename';
            bubble3.removeChild(bubble3.childNodes[1])  // remove popout onced saved
        }
       
    })
    
    return popOut
}





/***/ }),

/***/ "./src/group3.js":
/*!***********************!*\
  !*** ./src/group3.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "groupInput3": () => (/* binding */ groupInput3)
/* harmony export */ });
/* harmony import */ var _group1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group1 */ "./src/group1.js");



let groupNameVar3 = ""

function Task (task){
    this.task = task
}

let newTask = new Task()
let list = document.createElement("ul")


// Group

const groupName = ()=>{
    const groupInput = document.createElement("input")
    groupInput.setAttribute('type', 'text')
    groupInput.id = 'group3'
    groupInput.setAttribute("placeholder", 'New group')
    
    
    groupInput.addEventListener("submit", (e) => {
        e.preventDefault();
    })

    return groupInput
}

const getGroup = () => {
    groupNameVar3 = document.getElementById('group3').value
    return groupNameVar3
}

const groupInput3 = () => {
    const form1 = document.createElement("form")
    
    form1.classList.add("formGroup")

    form1.appendChild(groupName())
    form1.appendChild(submitGroup())
    
    return form1
}

const submitGroup = () => {
    
    const inputBtn = document.createElement("button")
    inputBtn.setAttribute("type", "sumbit")
    inputBtn.classList.add("submitGroupBtn")
    inputBtn.textContent = "Done"

    inputBtn.addEventListener("click", (e) =>{
    e.preventDefault()
    if(document.getElementById("group3").value.length == 0){
        alert("Do Not leave group name empty")
    }else{
        getGroup()
        const bubble1 = inputBtn.parentNode
        bubble1.style.display = "none"    //Removing text box
        _group1__WEBPACK_IMPORTED_MODULE_0__.ToDoContainer.insertBefore(toDoBlock3(), _group1__WEBPACK_IMPORTED_MODULE_0__.ToDoContainer.lastElementChild)
    }
    
    })

    return inputBtn
}

//Group

const newInput = () =>{
    const input = document.createElement("input")
    return input
}

const makeInput = () => {
    const input1 = newInput()
    input1.setAttribute("type", 'text')
    input1.id = 'task2'
    input1.classList.add("taskBox")
    input1.setAttribute("placeholder", '+ New')
   
    input1.addEventListener("submit", (e) => {
        e.preventDefault();
    })
   
    return input1
}

const getTask = () => {
    newTask.task = document.getElementById("task2").value
    document.querySelector('.remove2').reset()
   return newTask.task
}

function displayTask()  {
    
    const taskDisplay = document.createElement("li")
    const span = document.createElement("span")
    span.textContent = newTask.task;
    taskDisplay.appendChild(span)
    taskDisplay.appendChild(menuButton.create())
    return taskDisplay
}



const submitTask = () => {
    
    const inputBtn = document.createElement("button")
    inputBtn.setAttribute("type", "sumbit")
    inputBtn.classList.add("inputBtn")
    
    inputBtn.addEventListener("click", (e) =>{
    e.preventDefault()
    if(document.getElementById("task2").value.length == 0){
        alert("Do not leave task empty")
    }else{
        getTask()
        createList().appendChild(displayTask())
    } 
    
    })

    return inputBtn
}

function createList () {
    
    
    list.addEventListener("click", (e) =>{
        const button = e.target;
        const li = button.parentNode;
        const li2 = li.parentNode;
        if (button.textContent === '...'){
            if(li.childElementCount < 2){
                li.appendChild(popOutMenu())        //Making sure only one menu is appended
                
            }
        }
})

    return list

}

const input = () => {
    const form3 = document.createElement("form")
    form3.classList.add("remove2")
   
    form3.appendChild(makeInput())
    form3.appendChild(submitTask())
    form3.appendChild(createList())
    
    return form3
}


//Create group

const toDoBlock3 = () => {
    
    const block = document.createElement("div")
    const h5 = document.createElement("h5")
    h5.classList.add('group3Color')
    h5.textContent = groupNameVar3
    block.appendChild(h5)
    block.classList.add("toDoBlock")
    block.appendChild(input())
    return block
}


//Create group

const menuButton = (() => {
   
   const create = () =>{
   const menuBtn = document.createElement("button")
    menuBtn.classList.add("menuBtn")
    const p = document.createElement('h6')
    p.textContent = "..."
    menuBtn.appendChild(p)
    menuBtn.setAttribute("type", "button")
    return menuBtn
   }
    return {create}
})()



const deleteTab = () => {
    const deleteTab = document.createElement("div")
    deleteTab.classList.add("tab")
    const MenuTitle1 = document.createElement("h3")
    MenuTitle1.textContent = "Delete"
    const imgTrash = document.createElement("img")
    imgTrash.classList.add("Iconimg")
    imgTrash.src = "../src/images/garbage.png"
    deleteTab.appendChild(MenuTitle1)
    MenuTitle1.prepend(imgTrash) 
    
    return deleteTab
}

const renameTab = () => {
    const renameTab = document.createElement("div")
    renameTab.classList.add("tab")
    const MenuTitle2 = document.createElement("h3")
    MenuTitle2.textContent = "Rename"
    const imgRename = document.createElement("img")
    imgRename.classList.add("Iconimg")
    imgRename.src = "../src/images/edit.png"
    renameTab.appendChild(MenuTitle2)
    MenuTitle2.prepend(imgRename)
    return renameTab
}

const saveTab = () => {
    const saveTab = document.createElement("div")
    saveTab.classList.add("tab")
    const MenuTitle3 = document.createElement("h3")
    MenuTitle3.textContent = "Save"
    const imgSave = document.createElement("img")
    imgSave.classList.add("Iconimg")
    imgSave.src = "../src/images/save.png"
    saveTab.appendChild(MenuTitle3)
    MenuTitle3.prepend(imgSave)
    return saveTab
}

const popOutMenu = () => {
    const popOut = document.createElement("div")
    popOut.classList.add("popWindow")
   
    
    popOut.appendChild(deleteTab())
    popOut.appendChild(renameTab())
    
    popOut.addEventListener("click", (e) => {
        const button = e.target;
        const bubble1 = button.parentNode;
        const bubble2 = bubble1.parentNode
        const bubble3 = bubble2.parentNode
        const bubble4 = bubble3.parentNode
        const bubble5 = bubble4.parentNode
        if (button.textContent === 'Delete'){
            bubble5.removeChild(bubble4)
        }else if(button.textContent === 'Rename'){
            list.addEventListener('keypress', function (e) {    //Preventing user from using 'Enter' after pressing edit
                if (e.key === 'Enter') {
                    e.preventDefault();
                    return false;
                }               
            });            
            const span = bubble4.firstElementChild;
            const input = document.createElement('input');
            input.type = 'text';
            bubble4.insertBefore(input, span);
            bubble4.removeChild(span); 
            popOut.removeChild(popOut.childNodes[1])
            popOut.appendChild(saveTab())
        }else if(button.textContent === 'Save'){
            const input = bubble4.firstElementChild;
            const span = document.createElement('span');
            span.textContent = input.value;
            bubble4.insertBefore(span, input);
            bubble4.removeChild(input);
            button.textContent = 'Rename';
            bubble3.removeChild(bubble3.childNodes[1])  // remove popout onced saved
        }
       
    })
    
    return popOut
}





/***/ }),

/***/ "./src/group4.js":
/*!***********************!*\
  !*** ./src/group4.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "groupInput4": () => (/* binding */ groupInput4)
/* harmony export */ });
/* harmony import */ var _group1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group1 */ "./src/group1.js");



let groupNameVar4 = ""

function Task (task){
    this.task = task
}

let newTask = new Task()
let list = document.createElement("ul")


// Group

const groupName = ()=>{
    const groupInput = document.createElement("input")
    groupInput.setAttribute('type', 'text')
    groupInput.id = 'group4'
    groupInput.setAttribute("placeholder", 'New group')
    
    
    groupInput.addEventListener("submit", (e) => {
        e.preventDefault();
    })

    return groupInput
}

const getGroup = () => {
    groupNameVar4 = document.getElementById('group4').value
    return groupNameVar4
}

const groupInput4 = () => {
    const form1 = document.createElement("form")
    
    form1.classList.add("formGroup")

    form1.appendChild(groupName())
    form1.appendChild(submitGroup())
    
    return form1
}

const submitGroup = () => {
    
    const inputBtn = document.createElement("button")
    inputBtn.setAttribute("type", "sumbit")
    inputBtn.classList.add("submitGroupBtn")
    inputBtn.textContent = "Done"

    inputBtn.addEventListener("click", (e) =>{
    e.preventDefault()
    if(document.getElementById("group4").value.length == 0){
        alert("Do Not leave group name empty")
    }else{
        getGroup()
        const bubble1 = inputBtn.parentNode
        bubble1.style.display = "none"    //Removing text box
        _group1__WEBPACK_IMPORTED_MODULE_0__.ToDoContainer.insertBefore(toDoBlock4(), _group1__WEBPACK_IMPORTED_MODULE_0__.ToDoContainer.lastElementChild)
    }
    
    })

    return inputBtn
}

//Group

const newInput = () =>{
    const input = document.createElement("input")
    return input
}

const makeInput = () => {
    const input1 = newInput()
    input1.setAttribute("type", 'text')
    input1.id = 'task3'
    input1.classList.add("taskBox")
    input1.setAttribute("placeholder", '+ New')
   
    input1.addEventListener("submit", (e) => {
        e.preventDefault();
    })
   
    return input1
}

const getTask = () => {
    newTask.task = document.getElementById("task3").value
    document.querySelector('.remove3').reset()
   return newTask.task
}

function displayTask()  {
    
    const taskDisplay = document.createElement("li")
    const span = document.createElement("span")
    span.textContent = newTask.task;
    taskDisplay.appendChild(span)
    taskDisplay.appendChild(menuButton.create())
    return taskDisplay
}



const submitTask = () => {
    
    const inputBtn = document.createElement("button")
    inputBtn.setAttribute("type", "sumbit")
    inputBtn.classList.add("inputBtn")
    
    inputBtn.addEventListener("click", (e) =>{
    e.preventDefault()
    if(document.getElementById("task3").value.length == 0){
        alert("Do not leave task empty")
    }else{
        getTask()
        createList().appendChild(displayTask())
    } 
    
    })

    return inputBtn
}

function createList () {
    
    
    list.addEventListener("click", (e) =>{
        const button = e.target;
        const li = button.parentNode;
        const li2 = li.parentNode;
        if (button.textContent === '...'){
            if(li.childElementCount < 2){
                li.appendChild(popOutMenu())        //Making sure only one menu is appended
                
            }
        }
})

    return list

}

const input = () => {
    const form4 = document.createElement("form")
    form4.classList.add("remove3")
   
    form4.appendChild(makeInput())
    form4.appendChild(submitTask())
    form4.appendChild(createList())
    
    return form4
}


//Create group

const toDoBlock4 = () => {
    
    const block = document.createElement("div")
    const h5 = document.createElement("h5")
    h5.classList.add('group4Color')
    h5.textContent = groupNameVar4
    block.appendChild(h5)
    block.classList.add("toDoBlock")
    block.appendChild(input())
    return block
}


//Create group

const menuButton = (() => {
   
   const create = () =>{
   const menuBtn = document.createElement("button")
    menuBtn.classList.add("menuBtn")
    const p = document.createElement('h6')
    p.textContent = "..."
    menuBtn.appendChild(p)
    menuBtn.setAttribute("type", "button")
    return menuBtn
   }
    return {create}
})()



const deleteTab = () => {
    const deleteTab = document.createElement("div")
    deleteTab.classList.add("tab")
    const MenuTitle1 = document.createElement("h3")
    MenuTitle1.textContent = "Delete"
    const imgTrash = document.createElement("img")
    imgTrash.classList.add("Iconimg")
    imgTrash.src = "../src/images/garbage.png"
    deleteTab.appendChild(MenuTitle1)
    MenuTitle1.prepend(imgTrash) 
    
    return deleteTab
}

const renameTab = () => {
    const renameTab = document.createElement("div")
    renameTab.classList.add("tab")
    const MenuTitle2 = document.createElement("h3")
    MenuTitle2.textContent = "Rename"
    const imgRename = document.createElement("img")
    imgRename.classList.add("Iconimg")
    imgRename.src = "../src/images/edit.png"
    renameTab.appendChild(MenuTitle2)
    MenuTitle2.prepend(imgRename)
    return renameTab
}

const saveTab = () => {
    const saveTab = document.createElement("div")
    saveTab.classList.add("tab")
    const MenuTitle3 = document.createElement("h3")
    MenuTitle3.textContent = "Save"
    const imgSave = document.createElement("img")
    imgSave.classList.add("Iconimg")
    imgSave.src = "../src/images/save.png"
    saveTab.appendChild(MenuTitle3)
    MenuTitle3.prepend(imgSave)
    return saveTab
}

const popOutMenu = () => {
    const popOut = document.createElement("div")
    popOut.classList.add("popWindow")
   
    
    popOut.appendChild(deleteTab())
    popOut.appendChild(renameTab())
    
    popOut.addEventListener("click", (e) => {
        const button = e.target;
        const bubble1 = button.parentNode;
        const bubble2 = bubble1.parentNode
        const bubble3 = bubble2.parentNode
        const bubble4 = bubble3.parentNode
        const bubble5 = bubble4.parentNode
        if (button.textContent === 'Delete'){
            bubble5.removeChild(bubble4)
        }else if(button.textContent === 'Rename'){
            list.addEventListener('keypress', function (e) {    //Preventing user from using 'Enter' after pressing edit
                if (e.key === 'Enter') {
                    e.preventDefault();
                    return false;
                }               
            });            
            const span = bubble4.firstElementChild;
            const input = document.createElement('input');
            input.type = 'text';
            bubble4.insertBefore(input, span);
            bubble4.removeChild(span); 
            popOut.removeChild(popOut.childNodes[1])
            popOut.appendChild(saveTab())
        }else if(button.textContent === 'Save'){
            const input = bubble4.firstElementChild;
            const span = document.createElement('span');
            span.textContent = input.value;
            bubble4.insertBefore(span, input);
            bubble4.removeChild(input);
            button.textContent = 'Rename';
            bubble3.removeChild(bubble3.childNodes[1])  // remove popout onced saved
        }
       
    })
    
    return popOut
}





/***/ }),

/***/ "./src/group5.js":
/*!***********************!*\
  !*** ./src/group5.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "groupInput5": () => (/* binding */ groupInput5)
/* harmony export */ });
/* harmony import */ var _group1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group1 */ "./src/group1.js");



let groupNameVar5 = ""

function Task (task){
    this.task = task
}

let newTask = new Task()
let list = document.createElement("ul")


// Group

const groupName = ()=>{
    const groupInput = document.createElement("input")
    groupInput.setAttribute('type', 'text')
    groupInput.id = 'group5'
    groupInput.setAttribute("placeholder", 'New group')
    
    
    groupInput.addEventListener("submit", (e) => {
        e.preventDefault();
    })

    return groupInput
}

const getGroup = () => {
    groupNameVar5 = document.getElementById('group5').value
    return groupNameVar5
}

const groupInput5 = () => {
    const form1 = document.createElement("form")
    
    form1.classList.add("formGroup")

    form1.appendChild(groupName())
    form1.appendChild(submitGroup())
    
    return form1
}

const submitGroup = () => {
    
    const inputBtn = document.createElement("button")
    inputBtn.setAttribute("type", "sumbit")
    inputBtn.classList.add("submitGroupBtn")
    inputBtn.textContent = "Done"

    inputBtn.addEventListener("click", (e) =>{
    e.preventDefault()
    if(document.getElementById("group5").value.length == 0){
        alert("Do Not leave group name empty")
    }else{
        getGroup()
        const bubble1 = inputBtn.parentNode
        bubble1.style.display = "none"    //Removing text box
        _group1__WEBPACK_IMPORTED_MODULE_0__.ToDoContainer.insertBefore(toDoBlock5(), _group1__WEBPACK_IMPORTED_MODULE_0__.ToDoContainer.lastElementChild)
    }
    
    })

    return inputBtn
}

//Group

const newInput = () =>{
    const input = document.createElement("input")
    return input
}

const makeInput = () => {
    const input1 = newInput()
    input1.setAttribute("type", 'text')
    input1.id = 'task4'
    input1.classList.add("taskBox")
    input1.setAttribute("placeholder", '+ New')
   
    input1.addEventListener("submit", (e) => {
        e.preventDefault();
    })
   
    return input1
}

const getTask = () => {
    newTask.task = document.getElementById("task4").value
    document.querySelector('.remove4').reset()
   return newTask.task
}

function displayTask()  {
    
    const taskDisplay = document.createElement("li")
    const span = document.createElement("span")
    span.textContent = newTask.task;
    taskDisplay.appendChild(span)
    taskDisplay.appendChild(menuButton.create())
    return taskDisplay
}



const submitTask = () => {
    
    const inputBtn = document.createElement("button")
    inputBtn.setAttribute("type", "sumbit")
    inputBtn.classList.add("inputBtn")
    
    inputBtn.addEventListener("click", (e) =>{
    e.preventDefault()
    if(document.getElementById("task4").value.length == 0){
        alert("Do not leave task empty")
    }else{
        getTask()
        createList().appendChild(displayTask())
    } 
    
    })

    return inputBtn
}

function createList () {
    
    
    list.addEventListener("click", (e) =>{
        const button = e.target;
        const li = button.parentNode;
        const li2 = li.parentNode;
        if (button.textContent === '...'){
            if(li.childElementCount < 2){
                li.appendChild(popOutMenu())        //Making sure only one menu is appended
                
            }
        }
})

    return list

}

const input = () => {
    const form5 = document.createElement("form")
    form5.classList.add("remove4")
   
    form5.appendChild(makeInput())
    form5.appendChild(submitTask())
    form5.appendChild(createList())
    
    return form5
}


//Create group

const toDoBlock5 = () => {
    
    const block = document.createElement("div")
    const h5 = document.createElement("h5")
    h5.classList.add('group5Color')
    h5.textContent = groupNameVar5
    block.appendChild(h5)
    block.classList.add("toDoBlock")
    block.appendChild(input())
    return block
}


//Create group

const menuButton = (() => {
   
   const create = () =>{
   const menuBtn = document.createElement("button")
    menuBtn.classList.add("menuBtn")
    const p = document.createElement('h6')
    p.textContent = "..."
    menuBtn.appendChild(p)
    menuBtn.setAttribute("type", "button")
    return menuBtn
   }
    return {create}
})()



const deleteTab = () => {
    const deleteTab = document.createElement("div")
    deleteTab.classList.add("tab")
    const MenuTitle1 = document.createElement("h3")
    MenuTitle1.textContent = "Delete"
    const imgTrash = document.createElement("img")
    imgTrash.classList.add("Iconimg")
    imgTrash.src = "../src/images/garbage.png"
    deleteTab.appendChild(MenuTitle1)
    MenuTitle1.prepend(imgTrash) 
    
    return deleteTab
}

const renameTab = () => {
    const renameTab = document.createElement("div")
    renameTab.classList.add("tab")
    const MenuTitle2 = document.createElement("h3")
    MenuTitle2.textContent = "Rename"
    const imgRename = document.createElement("img")
    imgRename.classList.add("Iconimg")
    imgRename.src = "../src/images/edit.png"
    renameTab.appendChild(MenuTitle2)
    MenuTitle2.prepend(imgRename)
    return renameTab
}

const saveTab = () => {
    const saveTab = document.createElement("div")
    saveTab.classList.add("tab")
    const MenuTitle3 = document.createElement("h3")
    MenuTitle3.textContent = "Save"
    const imgSave = document.createElement("img")
    imgSave.classList.add("Iconimg")
    imgSave.src = "../src/images/save.png"
    saveTab.appendChild(MenuTitle3)
    MenuTitle3.prepend(imgSave)
    return saveTab
}

const popOutMenu = () => {
    const popOut = document.createElement("div")
    popOut.classList.add("popWindow")
   
    
    popOut.appendChild(deleteTab())
    popOut.appendChild(renameTab())
    
    popOut.addEventListener("click", (e) => {
        const button = e.target;
        const bubble1 = button.parentNode;
        const bubble2 = bubble1.parentNode
        const bubble3 = bubble2.parentNode
        const bubble4 = bubble3.parentNode
        const bubble5 = bubble4.parentNode
        if (button.textContent === 'Delete'){
            bubble5.removeChild(bubble4)
        }else if(button.textContent === 'Rename'){
            list.addEventListener('keypress', function (e) {    //Preventing user from using 'Enter' after pressing edit
                if (e.key === 'Enter') {
                    e.preventDefault();
                    return false;
                }               
            });            
            const span = bubble4.firstElementChild;
            const input = document.createElement('input');
            input.type = 'text';
            bubble4.insertBefore(input, span);
            bubble4.removeChild(span); 
            popOut.removeChild(popOut.childNodes[1])
            popOut.appendChild(saveTab())
        }else if(button.textContent === 'Save'){
            const input = bubble4.firstElementChild;
            const span = document.createElement('span');
            span.textContent = input.value;
            bubble4.insertBefore(span, input);
            bubble4.removeChild(input);
            button.textContent = 'Rename';
            bubble3.removeChild(bubble3.childNodes[1])  // remove popout onced saved
        }
       
    })
    
    return popOut
}





/***/ }),

/***/ "./src/renderPage.js":
/*!***************************!*\
  !*** ./src/renderPage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _group2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group2 */ "./src/group2.js");
/* harmony import */ var _group1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group1 */ "./src/group1.js");
/* harmony import */ var _group3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group3 */ "./src/group3.js");
/* harmony import */ var _group4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group4 */ "./src/group4.js");
/* harmony import */ var _group5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group5 */ "./src/group5.js");






let groupCount = 0;

const renderPage = function (){

    const content = document.createElement("div")
    document.body.appendChild(content)

    const topBar = document.createElement("div")
    topBar.classList.add("topBar")
    const subTitle = document.createElement("span")
    subTitle.textContent = "✔️ Task List"
    topBar.appendChild(subTitle)

    const headImg = document.createElement("div")
    headImg.classList.add("header-img")
    const img = document.createElement("img")
    img.src = "../src/images/header-Img.jpg"
    headImg.appendChild(img)

    const instructions = document.createElement("div")
    instructions.classList.add("instruct")
    const infoText = document.createElement("h1")
    infoText.textContent = '✔️ Task List'
    instructions.appendChild(infoText)

    const info1 = document.createElement("p")
    info1.textContent = "Use this template to track your personal tasks."
    instructions.appendChild(info1)

    const info2 = document.createElement("p")
    info2.textContent = "Click + New to create a new task directly on this board."
    instructions.appendChild(info2)

    const info3 = document.createElement("p")
    info3.textContent = "Click new project to add new colume"
    instructions.appendChild(info3)

    const lineBreak = document.createElement("hr")

    
    
    const newGroupBtn = () => {
    
        const newGroup = document.createElement("div")
        newGroup.classList.add('groupBtn')
        newGroup.textContent = "+"
    
       newGroup.addEventListener("click", (e) =>{
        
        if(e.target.textContent === '+' && groupCount == 0){   
            groupCount++
            _group1__WEBPACK_IMPORTED_MODULE_1__.ToDoContainer.appendChild((0,_group1__WEBPACK_IMPORTED_MODULE_1__.groupInput)())
        }else if(e.target.textContent === '+' && groupCount == 1){
            groupCount++
            _group1__WEBPACK_IMPORTED_MODULE_1__.ToDoContainer.appendChild((0,_group2__WEBPACK_IMPORTED_MODULE_0__.groupInput2)())
        }else if(e.target.textContent === '+' && groupCount == 2){
            groupCount++
            _group1__WEBPACK_IMPORTED_MODULE_1__.ToDoContainer.appendChild((0,_group3__WEBPACK_IMPORTED_MODULE_2__.groupInput3)())
        }else if(e.target.textContent === '+' && groupCount == 3){
            groupCount++
            _group1__WEBPACK_IMPORTED_MODULE_1__.ToDoContainer.appendChild((0,_group4__WEBPACK_IMPORTED_MODULE_3__.groupInput4)())
        }else if(e.target.textContent === '+' && groupCount == 4){
            groupCount++
            _group1__WEBPACK_IMPORTED_MODULE_1__.ToDoContainer.appendChild((0,_group5__WEBPACK_IMPORTED_MODULE_4__.groupInput5)())
        }

       
        })
        
        return newGroup 
    }
    
    _group1__WEBPACK_IMPORTED_MODULE_1__.ToDoContainer.appendChild(newGroupBtn())  
    
    content.appendChild(topBar)
    content.appendChild(headImg)
    content.appendChild(instructions)
    content.appendChild(lineBreak)
    content.appendChild(_group1__WEBPACK_IMPORTED_MODULE_1__.ToDoContainer)
    
  
}

  




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPage);

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renderPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPage */ "./src/renderPage.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");






(0,_renderPage__WEBPACK_IMPORTED_MODULE_0__["default"])()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxjQUFjLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxh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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULGdFQUFnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hSc0M7O0FBRXRDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBMEIsY0FBYyxtRUFBOEI7QUFDOUU7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFJzQzs7QUFFdEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtEQUEwQixlQUFlLG1FQUE4QjtBQUMvRTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsUnNDOztBQUV0Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0RBQTBCLGVBQWUsbUVBQThCO0FBQy9FO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULGdFQUFnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xSc0M7O0FBRXRDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBMEIsZUFBZSxtRUFBOEI7QUFDL0U7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblJvQztBQUNjO0FBQ2Q7QUFDQTtBQUNBOztBQUVwQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksOERBQXlCLENBQUMsbURBQVU7QUFDaEQsU0FBUztBQUNUO0FBQ0EsWUFBWSw4REFBeUIsQ0FBQyxvREFBVztBQUNqRCxTQUFTO0FBQ1Q7QUFDQSxZQUFZLDhEQUF5QixDQUFDLG9EQUFXO0FBQ2pELFNBQVM7QUFDVDtBQUNBLFlBQVksOERBQXlCLENBQUMsb0RBQVc7QUFDakQsU0FBUztBQUNUO0FBQ0EsWUFBWSw4REFBeUIsQ0FBQyxvREFBVztBQUNqRDs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQXlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0RBQWE7QUFDckM7QUFDQTtBQUNBOztBQUVBOzs7OztBQUtBLGlFQUFlLFVBQVU7Ozs7OztVQzlGekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDaEI7Ozs7O0FBS3RCLHVEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVGFzay1MaXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vVGFzay1MaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9UYXNrLUxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9UYXNrLUxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL1Rhc2stTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9UYXNrLUxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1Rhc2stTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9UYXNrLUxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vVGFzay1MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vVGFzay1MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vVGFzay1MaXN0Ly4vc3JjL2dyb3VwMS5qcyIsIndlYnBhY2s6Ly9UYXNrLUxpc3QvLi9zcmMvZ3JvdXAyLmpzIiwid2VicGFjazovL1Rhc2stTGlzdC8uL3NyYy9ncm91cDMuanMiLCJ3ZWJwYWNrOi8vVGFzay1MaXN0Ly4vc3JjL2dyb3VwNC5qcyIsIndlYnBhY2s6Ly9UYXNrLUxpc3QvLi9zcmMvZ3JvdXA1LmpzIiwid2VicGFjazovL1Rhc2stTGlzdC8uL3NyYy9yZW5kZXJQYWdlLmpzIiwid2VicGFjazovL1Rhc2stTGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9UYXNrLUxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vVGFzay1MaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9UYXNrLUxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9UYXNrLUxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9UYXNrLUxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi50b3BCYXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXItaW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG59XFxuXFxuaW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLkljb25pbWd7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuM3JlbTtcXG59XFxuXFxuLmluc3RydWN0e1xcbiAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xcbiAgICB3aWR0aDogMjVyZW07XFxuICAgIGhlaWdodDogMTJyZW07XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiA2LjVyZW07XFxufVxcblxcbi50b0RvTGlzdENvbnRhaW5lcntcXG4gICAgd2lkdGg6IDg2JTtcXG4gICAgaGVpZ2h0OiAxMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luLWxlZnQ6IDYuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4vKiBkaXZ7XFxuICAgIGJvcmRlcjogZ3JlZW4gMXB4IHNvbGlkO1xcbn0gKi9cXG5cXG4udG9Eb0Jsb2Nre1xcbiAgICB3aWR0aDogMTRyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcXG4gICAgcGFkZGluZzowO1xcbiAgICBtYXJnaW4tbGVmdDogMS44cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwLjg7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuaDV7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogcmdiKDY0LCA0NCwgMjcpO1xcbiAgICBtYXJnaW4tdG9wOiAwLjNyZW07XFxufVxcblxcbi5ncm91cDFDb2xvcntcXG4gICAgYmFja2dyb3VuZDogcmdiKDIwMCwgMjI1LCAyNTMpO1xcbn1cXG5cXG4uZ3JvdXAyQ29sb3J7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMTksIDIzNywgMjE5KTtcXG59XFxuXFxuLmdyb3VwM0NvbG9ye1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyMjYsIDIyMSk7XFxufVxcblxcbi5ncm91cDRDb2xvcntcXG4gICAgYmFja2dyb3VuZDogcmdiKDI1MywgMjM2LCAyMDApO1xcbn1cXG5cXG4uZ3JvdXA1Q29sb3J7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMzIsIDIyMiwgMjM4KTtcXG59XFxuXFxuXFxuLmdyb3VwQnRue1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBjb2xvcjogIzlDOUM5ODtcXG59XFxuXFxuLmdyb3VwQnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU1LDUzLDQ3LDAuMDgpO1xcbn1cXG5cXG4uaW5wdXRCdG57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrQm94e1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOmJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRhc2tCb3g6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTUsNTMsNDcsMC4wOCk7XFxufVxcblxcbi50YXNrQm94OjpwbGFjZWhvbGRlcntcXG4gICAgY29sb3I6IHJnYmEoNTUsIDUzLCA0NywgMC40KTtcXG59XFxuXFxuLnN1Ym1pdEdyb3VwQnRue1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgbGVmdDogLTEzJTtcXG4gICAgdG9wOiA0cHg7XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBoZWlnaHQ6IDEuNnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCAxNzAsIDIyMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm94LXNoYWRvdzogcmdiKDE1IDE1IDE1IC8gMTAlKSAwcHggMHB4IDBweCAxcHggaW5zZXQsIHJnYigxNSAxNSAxNSAvIDEwJSkgMHB4IDFweCAycHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3VibWl0R3JvdXBCdG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCAxNTYsIDIwNSk7XFxufVxcblxcbiNncm91cCwgI2dyb3VwMiwgI2dyb3VwMywgI2dyb3VwNCwgI2dyb3VwNXtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIGxlZnQ6IDEwJTtcXG4gICAgdG9wOiAyJTtcXG4gICAgd2lkdGg6IDE1cmVtO1xcbiAgICBoZWlnaHQ6IDIuM3JlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IDEuNXB4ICNERURFREUgc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3RjU7XFxuICAgIGJveC1zaGFkb3c6IHJnYigxNSAxNSAxNSAvIDEwJSkgMHB4IDBweCAwcHggMXB4LCByZ2IoMTUgMTUgMTUgLyAxMCUpIDBweCAycHggNHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4jZ3JvdXA6OnBsYWNlaG9sZGVyLCAjZ3JvdXAyOjpwbGFjZWhvbGRlcntcXG4gICAgY29sb3I6ICNCMEIwQUQ7XFxufVxcblxcbnNwYW57XFxuICAgIHBhZGRpbmctdG9wOiAwLjJyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbnB7XFxuICAgIG1hcmdpbi10b3A6IC0wLjZyZW07XFxuICAgIGNvbG9yOiAjMzczNjMwO1xcbn1cXG5cXG5ocntcXG4gICAgd2lkdGg6ODklOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbmxpIHtcXG4gICAgd2lkdGg6IDEzMCU7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgYm9yZGVyOiAxLjVweCAjREVERURFIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMnJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiKDE1IDE1IDE1IC8gMTAlKSAwcHggMHB4IDBweCAxcHgsIHJnYigxNSAxNSAxNSAvIDEwJSkgMHB4IDJweCA0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgXFxufVxcblxcblxcbmxpOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgyLCA3OSwgNzAsIDAuMDMpIDtcXG59XFxuXFxubGk6aG92ZXIgLm1lbnVCdG57XFxuICAgIGRpc3BsYXk6IGJsb2NrOyBcXG59XFxuXFxubGk6aG92ZXIgLnBvcFdpbmRvd3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbnVse1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuXFxuXFxuICAgLm1lbnVCdG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgd2lkdGg6IDEuN3JlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgICBib3JkZXI6ICNERURFREUgMXB4IHNvbGlkO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogcmdiKDE1IDE1IDE1IC8gMTAlKSAwcHggMHB4IDBweCAxcHgsIHJnYigxNSAxNSAxNSAvIDEwJSkgMHB4IDJweCA0cHg7XFxuICAgfVxcblxcbiAgIC5tZW51QnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgyLCA3OSwgNzAsIDAuMDUpIDtcXG4gICB9XFxuXFxuICAgaDZ7XFxuICAgICAgIG1hcmdpbi1ib3R0b206IDByZW07XFxuICAgICAgIG1hcmdpbi10b3A6IC0wLjNyZW07XFxuICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgIH1cXG5cXG4gICAucG9wV2luZG93e1xcbiAgICBkaXNwbGF5OiBmbGV4OyAgIFxcbiAgICBib3JkZXI6ICNEQURBREEgMXB4IHNvbGlkO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogOHJlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiKDE1IDE1IDE1IC8gMTAlKSAwcHggMHB4IDBweCAxcHgsIHJnYigxNSAxNSAxNSAvIDEwJSkgMHB4IDJweCA0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMzRweDtcXG4gICAgbGVmdDogMTNweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGO1xcbiAgIH1cXG5cXG4gICBoM3tcXG4gICAgICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xcbiAgICAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgICAgbWFyZ2luLXRvcDogMC4ycmVtO1xcbiAgICAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxuICAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gICAgICAgY29sb3I6ICMzNzM2MzA7XFxuICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgbGVmdDowJTtcXG4gICB9XFxuXFxuICAgLnRhYjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NSw1Myw0NywwLjA4KTtcXG4gICB9XFxuICAgXFxuICAgaW5wdXR7XFxuICAgICAgIG1hcmdpbi1ib3R0b206IDAuNHJlbVxcbiAgIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysd0lBQXdJO0lBQ3hJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3SUFBd0k7SUFDeEksZUFBZTtJQUNm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XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnRvcEJhcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlci1pbWd7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDE1cmVtO1xcbn1cXG5cXG5pbWd7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uSWNvbmltZ3tcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC4zcmVtO1xcbn1cXG5cXG4uaW5zdHJ1Y3R7XFxuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XFxuICAgIHdpZHRoOiAyNXJlbTtcXG4gICAgaGVpZ2h0OiAxMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luLWxlZnQ6IDYuNXJlbTtcXG59XFxuXFxuLnRvRG9MaXN0Q29udGFpbmVye1xcbiAgICB3aWR0aDogODYlO1xcbiAgICBoZWlnaHQ6IDEycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW4tbGVmdDogNi41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi8qIGRpdntcXG4gICAgYm9yZGVyOiBncmVlbiAxcHggc29saWQ7XFxufSAqL1xcblxcbi50b0RvQmxvY2t7XFxuICAgIHdpZHRoOiAxNHJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xcbiAgICBwYWRkaW5nOjA7XFxuICAgIG1hcmdpbi1sZWZ0OiAxLjhyZW07XFxuICAgIG1hcmdpbi10b3A6IDAuODtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG5oNXtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGNvbG9yOiByZ2IoNjQsIDQ0LCAyNyk7XFxuICAgIG1hcmdpbi10b3A6IDAuM3JlbTtcXG59XFxuXFxuLmdyb3VwMUNvbG9ye1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjAwLCAyMjUsIDI1Myk7XFxufVxcblxcbi5ncm91cDJDb2xvcntcXG4gICAgYmFja2dyb3VuZDogcmdiKDIxOSwgMjM3LCAyMTkpO1xcbn1cXG5cXG4uZ3JvdXAzQ29sb3J7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDIyNiwgMjIxKTtcXG59XFxuXFxuLmdyb3VwNENvbG9ye1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjUzLCAyMzYsIDIwMCk7XFxufVxcblxcbi5ncm91cDVDb2xvcntcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzMiwgMjIyLCAyMzgpO1xcbn1cXG5cXG5cXG4uZ3JvdXBCdG57XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGNvbG9yOiAjOUM5Qzk4O1xcbn1cXG5cXG4uZ3JvdXBCdG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTUsNTMsNDcsMC4wOCk7XFxufVxcblxcbi5pbnB1dEJ0bntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2tCb3h7XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udGFza0JveDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NSw1Myw0NywwLjA4KTtcXG59XFxuXFxuLnRhc2tCb3g6OnBsYWNlaG9sZGVye1xcbiAgICBjb2xvcjogcmdiYSg1NSwgNTMsIDQ3LCAwLjQpO1xcbn1cXG5cXG4uc3VibWl0R3JvdXBCdG57XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICBsZWZ0OiAtMTMlO1xcbiAgICB0b3A6IDRweDtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGhlaWdodDogMS42cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDE3MCwgMjIwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBib3gtc2hhZG93OiByZ2IoMTUgMTUgMTUgLyAxMCUpIDBweCAwcHggMHB4IDFweCBpbnNldCwgcmdiKDE1IDE1IDE1IC8gMTAlKSAwcHggMXB4IDJweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zdWJtaXRHcm91cEJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDE1NiwgMjA1KTtcXG59XFxuXFxuI2dyb3VwLCAjZ3JvdXAyLCAjZ3JvdXAzLCAjZ3JvdXA0LCAjZ3JvdXA1e1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgbGVmdDogMTAlO1xcbiAgICB0b3A6IDIlO1xcbiAgICB3aWR0aDogMTVyZW07XFxuICAgIGhlaWdodDogMi4zcmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogMS41cHggI0RFREVERSBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNTtcXG4gICAgYm94LXNoYWRvdzogcmdiKDE1IDE1IDE1IC8gMTAlKSAwcHggMHB4IDBweCAxcHgsIHJnYigxNSAxNSAxNSAvIDEwJSkgMHB4IDJweCA0cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbiNncm91cDo6cGxhY2Vob2xkZXIsICNncm91cDI6OnBsYWNlaG9sZGVye1xcbiAgICBjb2xvcjogI0IwQjBBRDtcXG59XFxuXFxuc3BhbntcXG4gICAgcGFkZGluZy10b3A6IDAuMnJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxucHtcXG4gICAgbWFyZ2luLXRvcDogLTAuNnJlbTtcXG4gICAgY29sb3I6ICMzNzM2MzA7XFxufVxcblxcbmhye1xcbiAgICB3aWR0aDo4OSU7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxubGkge1xcbiAgICB3aWR0aDogMTMwJTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBib3JkZXI6IDEuNXB4ICNERURFREUgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgICBib3gtc2hhZG93OiByZ2IoMTUgMTUgMTUgLyAxMCUpIDBweCAwcHggMHB4IDFweCwgcmdiKDE1IDE1IDE1IC8gMTAlKSAwcHggMnB4IDRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBcXG59XFxuXFxuXFxubGk6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODIsIDc5LCA3MCwgMC4wMykgO1xcbn1cXG5cXG5saTpob3ZlciAubWVudUJ0bntcXG4gICAgZGlzcGxheTogYmxvY2s7IFxcbn1cXG5cXG5saTpob3ZlciAucG9wV2luZG93e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxudWx7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5cXG5cXG4gICAubWVudUJ0bntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICB3aWR0aDogMS43cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgIGJvcmRlcjogI0RFREVERSAxcHggc29saWQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBib3gtc2hhZG93OiByZ2IoMTUgMTUgMTUgLyAxMCUpIDBweCAwcHggMHB4IDFweCwgcmdiKDE1IDE1IDE1IC8gMTAlKSAwcHggMnB4IDRweDtcXG4gICB9XFxuXFxuICAgLm1lbnVCdG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODIsIDc5LCA3MCwgMC4wNSkgO1xcbiAgIH1cXG5cXG4gICBoNntcXG4gICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcXG4gICAgICAgbWFyZ2luLXRvcDogLTAuM3JlbTtcXG4gICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgfVxcblxcbiAgIC5wb3BXaW5kb3d7XFxuICAgIGRpc3BsYXk6IGZsZXg7ICAgXFxuICAgIGJvcmRlcjogI0RBREFEQSAxcHggc29saWQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA4cmVtO1xcbiAgICBib3gtc2hhZG93OiByZ2IoMTUgMTUgMTUgLyAxMCUpIDBweCAwcHggMHB4IDFweCwgcmdiKDE1IDE1IDE1IC8gMTAlKSAwcHggMnB4IDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0zNHB4O1xcbiAgICBsZWZ0OiAxM3B4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkY7XFxuICAgfVxcblxcbiAgIGgze1xcbiAgICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XFxuICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgICBtYXJnaW4tdG9wOiAwLjJyZW07XFxuICAgICAgIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXG4gICAgICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgICAgICBjb2xvcjogIzM3MzYzMDtcXG4gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICBsZWZ0OjAlO1xcbiAgIH1cXG5cXG4gICAudGFiOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU1LDUzLDQ3LDAuMDgpO1xcbiAgIH1cXG4gICBcXG4gICBpbnB1dHtcXG4gICAgICAgbWFyZ2luLWJvdHRvbTogMC40cmVtXFxuICAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJsZXQgZ3JvdXBOYW1lVmFyID0gXCJcIlxuXG5mdW5jdGlvbiBUYXNrICh0YXNrLCBncm91cCl7XG4gICAgdGhpcy50YXNrID0gdGFza1xuICAgIHRoaXMuZ3JvdXAgPSBncm91cCBcbn1cblxubGV0IG5ld1Rhc2sgPSBuZXcgVGFzaygpXG5sZXQgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuXG5jb25zdCBUb0RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIFRvRG9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvRG9MaXN0Q29udGFpbmVyXCIpXG4gICAgXG5cbi8vIEdyb3VwXG5cbmNvbnN0IGdyb3VwTmFtZSA9ICgpPT57XG4gICAgY29uc3QgZ3JvdXBJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGdyb3VwSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIGdyb3VwSW5wdXQuaWQgPSAnZ3JvdXAnXG4gICAgZ3JvdXBJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCAnTmV3IGdyb3VwJylcbiAgICBcbiAgICBncm91cElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gZ3JvdXBJbnB1dFxufVxuXG5jb25zdCBnZXRHcm91cCA9ICgpID0+IHtcbiAgICBncm91cE5hbWVWYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JvdXAnKS52YWx1ZVxuICAgIHJldHVybiBncm91cE5hbWVcbn1cblxuY29uc3QgZ3JvdXBJbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG4gICAgXG4gICAgZm9ybTEuY2xhc3NMaXN0LmFkZChcImZvcm1Hcm91cFwiKVxuXG4gICAgZm9ybTEuYXBwZW5kQ2hpbGQoZ3JvdXBOYW1lKCkpXG4gICAgZm9ybTEuYXBwZW5kQ2hpbGQoc3VibWl0R3JvdXAoKSlcbiAgICBcbiAgICByZXR1cm4gZm9ybTFcbn1cblxuY29uc3Qgc3VibWl0R3JvdXAgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgaW5wdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgaW5wdXRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1bWJpdFwiKVxuICAgIGlucHV0QnRuLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXRHcm91cEJ0blwiKVxuICAgIGlucHV0QnRuLnRleHRDb250ZW50ID0gXCJEb25lXCJcbiAgICBcblxuICAgIGlucHV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm91cFwiKS52YWx1ZS5sZW5ndGggPT0gMClcbiAgICB7XG4gICAgYWxlcnQoXCJEbyBOb3QgbGVhdmUgZ3JvdXAgbmFtZSBlbXB0eVwiKVxuICAgIH1lbHNle1xuICAgICAgICBnZXRHcm91cCgpXG4gICAgICAgIGNvbnN0IGJ1YmJsZTEgPSBpbnB1dEJ0bi5wYXJlbnROb2RlXG4gICAgICAgIGJ1YmJsZTEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIFRvRG9Db250YWluZXIuaW5zZXJ0QmVmb3JlKHRvRG9CbG9jazIoKSwgVG9Eb0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKVxuICAgIH1cbiAgICAgICAgXG4gICAgfSlcblxuICAgIHJldHVybiBpbnB1dEJ0blxufVxuXG4vL0dyb3VwXG5cbmNvbnN0IG5ld0lucHV0ID0gKCkgPT57XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICByZXR1cm4gaW5wdXRcbn1cblxuY29uc3QgbWFrZUlucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0MSA9IG5ld0lucHV0KClcbiAgICBpbnB1dDEuc2V0QXR0cmlidXRlKFwidHlwZVwiLCAndGV4dCcpXG4gICAgaW5wdXQxLmlkID0gYHRhc2tgXG4gICAgaW5wdXQxLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQm94XCIpXG4gICAgaW5wdXQxLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsICcrIE5ldycpXG4gICBcbiAgICBpbnB1dDEuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcbiAgIFxuICAgIHJldHVybiBpbnB1dDFcbn1cblxuY29uc3QgZ2V0VGFzayA9ICgpID0+IHtcbiAgICBuZXdUYXNrLnRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzaycpLnZhbHVlXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZScpLnJlc2V0KClcbiAgIHJldHVybiBuZXdUYXNrLnRhc2tcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2soKSAge1xuICAgIFxuICAgIGNvbnN0IHRhc2tEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IG5ld1Rhc2sudGFzaztcbiAgICB0YXNrRGlzcGxheS5hcHBlbmRDaGlsZChzcGFuKVxuICAgIHRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKG1lbnVCdXR0b24uY3JlYXRlKCkpXG4gICAgcmV0dXJuIHRhc2tEaXNwbGF5XG59XG5cbmNvbnN0IHN1Ym1pdFRhc2sgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgaW5wdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgaW5wdXRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1bWJpdFwiKVxuICAgIGlucHV0QnRuLmNsYXNzTGlzdC5hZGQoXCJpbnB1dEJ0blwiKVxuICAgIFxuICAgIGlucHV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrXCIpLnZhbHVlLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgYWxlcnQoXCJEbyBub3QgbGVhdmUgdGFzayBiYXIgZW1wdHlcIilcbiAgICB9ZWxzZXtcbiAgICAgICAgZ2V0VGFzaygpXG4gICAgICAgIGNyZWF0ZUxpc3QoKS5hcHBlbmRDaGlsZChkaXNwbGF5VGFzaygpKVxuICAgIH0gICAgXG4gICAgXG4gICAgfSlcblxuICAgIHJldHVybiBpbnB1dEJ0blxufVxuXG5mdW5jdGlvbiBjcmVhdGVMaXN0ICgpIHtcbiAgICBcbiAgICBcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCBsaSA9IGJ1dHRvbi5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBsaTIgPSBsaS5wYXJlbnROb2RlO1xuICAgICAgICBpZiAoYnV0dG9uLnRleHRDb250ZW50ID09PSAnLi4uJyl7XG4gICAgICAgICAgICBpZihsaS5jaGlsZEVsZW1lbnRDb3VudCA8IDIpe1xuICAgICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHBvcE91dE1lbnUoKSkgICAgICAgIC8vTWFraW5nIHN1cmUgb25seSBvbmUgbWVudSBpcyBhcHBlbmRlZFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG59KVxuXG4gICAgcmV0dXJuIGxpc3RcblxufVxuXG5jb25zdCBpbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG4gICAgZm9ybTIuY2xhc3NMaXN0LmFkZChcInJlbW92ZVwiKVxuXG4gICAgZm9ybTIuYXBwZW5kQ2hpbGQobWFrZUlucHV0KCkpXG4gICAgZm9ybTIuYXBwZW5kQ2hpbGQoc3VibWl0VGFzaygpKVxuICAgIGZvcm0yLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3QoKSlcbiAgICBcbiBcbiAgICByZXR1cm4gZm9ybTJcbn1cblxuXG4vL0NyZWF0ZSBncm91cFxuXG5jb25zdCB0b0RvQmxvY2syID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGg1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpXG4gICAgaDUuY2xhc3NMaXN0LmFkZCgnZ3JvdXAxQ29sb3InKVxuICAgIGg1LnRleHRDb250ZW50ID0gZ3JvdXBOYW1lVmFyXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoaDUpXG4gICAgYmxvY2suY2xhc3NMaXN0LmFkZChcInRvRG9CbG9ja1wiKVxuICAgIGJsb2NrLmFwcGVuZENoaWxkKGlucHV0KCkpXG4gICAgcmV0dXJuIGJsb2NrXG59XG5cblxuLy9DcmVhdGUgZ3JvdXBcblxuY29uc3QgbWVudUJ1dHRvbiA9ICgoKSA9PiB7XG4gICBcbiAgIGNvbnN0IGNyZWF0ZSA9ICgpID0+e1xuICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJtZW51QnRuXCIpXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2JylcbiAgICBwLnRleHRDb250ZW50ID0gXCIuLi5cIlxuICAgIG1lbnVCdG4uYXBwZW5kQ2hpbGQocClcbiAgICBtZW51QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIilcbiAgICByZXR1cm4gbWVudUJ0blxuICAgfVxuICAgIHJldHVybiB7Y3JlYXRlfVxufSkoKVxuXG5cblxuY29uc3QgZGVsZXRlVGFiID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlbGV0ZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBkZWxldGVUYWIuY2xhc3NMaXN0LmFkZChcInRhYlwiKVxuICAgIGNvbnN0IE1lbnVUaXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgICBNZW51VGl0bGUxLnRleHRDb250ZW50ID0gXCJEZWxldGVcIlxuICAgIGNvbnN0IGltZ1RyYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGltZ1RyYXNoLmNsYXNzTGlzdC5hZGQoXCJJY29uaW1nXCIpXG4gICAgaW1nVHJhc2guc3JjID0gXCIuLi9zcmMvaW1hZ2VzL2dhcmJhZ2UucG5nXCJcbiAgICBkZWxldGVUYWIuYXBwZW5kQ2hpbGQoTWVudVRpdGxlMSlcbiAgICBNZW51VGl0bGUxLnByZXBlbmQoaW1nVHJhc2gpXG4gICAgXG4gICAgXG4gICAgcmV0dXJuIGRlbGV0ZVRhYlxuXG4gICAgXG59XG5cbmNvbnN0IHJlbmFtZVRhYiA9ICgpID0+IHtcbiAgICBjb25zdCByZW5hbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgcmVuYW1lVGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIilcbiAgICBjb25zdCBNZW51VGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgTWVudVRpdGxlMi50ZXh0Q29udGVudCA9IFwiUmVuYW1lXCJcbiAgICBjb25zdCBpbWdSZW5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgaW1nUmVuYW1lLmNsYXNzTGlzdC5hZGQoXCJJY29uaW1nXCIpXG4gICAgaW1nUmVuYW1lLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9lZGl0LnBuZ1wiXG4gICAgcmVuYW1lVGFiLmFwcGVuZENoaWxkKE1lbnVUaXRsZTIpXG4gICAgTWVudVRpdGxlMi5wcmVwZW5kKGltZ1JlbmFtZSlcbiAgICByZXR1cm4gcmVuYW1lVGFiXG59XG5cbmNvbnN0IHNhdmVUYWIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBzYXZlVGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIilcbiAgICBjb25zdCBNZW51VGl0bGUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgTWVudVRpdGxlMy50ZXh0Q29udGVudCA9IFwiU2F2ZVwiXG4gICAgY29uc3QgaW1nU2F2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBpbWdTYXZlLmNsYXNzTGlzdC5hZGQoXCJJY29uaW1nXCIpXG4gICAgaW1nU2F2ZS5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvc2F2ZS5wbmdcIlxuICAgIHNhdmVUYWIuYXBwZW5kQ2hpbGQoTWVudVRpdGxlMylcbiAgICBNZW51VGl0bGUzLnByZXBlbmQoaW1nU2F2ZSlcbiAgICByZXR1cm4gc2F2ZVRhYlxufVxuXG5cblxuY29uc3QgcG9wT3V0TWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBwb3BPdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgcG9wT3V0LmNsYXNzTGlzdC5hZGQoXCJwb3BXaW5kb3dcIilcbiAgIFxuICAgIFxuICAgIHBvcE91dC5hcHBlbmRDaGlsZChkZWxldGVUYWIoKSlcbiAgICBwb3BPdXQuYXBwZW5kQ2hpbGQocmVuYW1lVGFiKCkpXG4gICAgXG4gICAgcG9wT3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSBlLnRhcmdldDtcbiAgICAgICAgY29uc3QgYnViYmxlMSA9IGJ1dHRvbi5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBidWJibGUyID0gYnViYmxlMS5wYXJlbnROb2RlXG4gICAgICAgIGNvbnN0IGJ1YmJsZTMgPSBidWJibGUyLnBhcmVudE5vZGVcbiAgICAgICAgY29uc3QgYnViYmxlNCA9IGJ1YmJsZTMucGFyZW50Tm9kZVxuICAgICAgICBjb25zdCBidWJibGU1ID0gYnViYmxlNC5wYXJlbnROb2RlXG4gICAgICAgIGlmIChidXR0b24udGV4dENvbnRlbnQgPT09ICdEZWxldGUnKXtcbiAgICAgICAgICAgIGJ1YmJsZTUucmVtb3ZlQ2hpbGQoYnViYmxlNClcbiAgICAgICAgfWVsc2UgaWYoYnV0dG9uLnRleHRDb250ZW50ID09PSAnUmVuYW1lJyl7XG4gICAgICAgICAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHsgICAgLy9QcmV2ZW50aW5nIHVzZXIgZnJvbSB1c2luZyAnRW50ZXInIGFmdGVyIHByZXNzaW5nIGVkaXRcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBzcGFuID0gYnViYmxlNC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICBidWJibGU0Lmluc2VydEJlZm9yZShpbnB1dCwgc3Bhbik7XG4gICAgICAgICAgICBidWJibGU0LnJlbW92ZUNoaWxkKHNwYW4pOyBcbiAgICAgICAgICAgIHBvcE91dC5yZW1vdmVDaGlsZChwb3BPdXQuY2hpbGROb2Rlc1sxXSlcbiAgICAgICAgICAgIHBvcE91dC5hcHBlbmRDaGlsZChzYXZlVGFiKCkpXG4gICAgICAgIH1lbHNlIGlmKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gJ1NhdmUnKXtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gYnViYmxlNC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICBidWJibGU0Lmluc2VydEJlZm9yZShzcGFuLCBpbnB1dCk7XG4gICAgICAgICAgICBidWJibGU0LnJlbW92ZUNoaWxkKGlucHV0KTtcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdSZW5hbWUnO1xuICAgICAgICAgICAgYnViYmxlMy5yZW1vdmVDaGlsZChidWJibGUzLmNoaWxkTm9kZXNbMV0pICAvLyByZW1vdmUgcG9wb3V0IG9uY2VkIHNhdmVkXG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9KVxuICAgIFxuICAgIHJldHVybiBwb3BPdXRcbn1cblxuXG5cbmV4cG9ydCAge2dyb3VwSW5wdXQsIFRvRG9Db250YWluZXJ9IiwiXG5pbXBvcnQge1RvRG9Db250YWluZXJ9IGZyb20gXCIuL2dyb3VwMVwiXG5cbmxldCBncm91cE5hbWVWYXIyID0gXCJcIlxuXG5mdW5jdGlvbiBUYXNrICh0YXNrKXtcbiAgICB0aGlzLnRhc2sgPSB0YXNrXG59XG5cbmxldCBuZXdUYXNrID0gbmV3IFRhc2soKVxubGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcblxuXG4vLyBHcm91cFxuXG5jb25zdCBncm91cE5hbWUgPSAoKT0+e1xuICAgIGNvbnN0IGdyb3VwSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBncm91cElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICBncm91cElucHV0LmlkID0gJ2dyb3VwMidcbiAgICBncm91cElucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsICdOZXcgZ3JvdXAnKVxuICAgIFxuICAgIFxuICAgIGdyb3VwSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcblxuICAgIHJldHVybiBncm91cElucHV0XG59XG5cbmNvbnN0IGdldEdyb3VwID0gKCkgPT4ge1xuICAgIGdyb3VwTmFtZVZhcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JvdXAyJykudmFsdWVcbiAgICByZXR1cm4gZ3JvdXBOYW1lVmFyMlxufVxuXG5jb25zdCBncm91cElucHV0MiA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG4gICAgXG4gICAgZm9ybTEuY2xhc3NMaXN0LmFkZChcImZvcm1Hcm91cFwiKVxuXG4gICAgZm9ybTEuYXBwZW5kQ2hpbGQoZ3JvdXBOYW1lKCkpXG4gICAgZm9ybTEuYXBwZW5kQ2hpbGQoc3VibWl0R3JvdXAoKSlcbiAgICBcbiAgICByZXR1cm4gZm9ybTFcbn1cblxuY29uc3Qgc3VibWl0R3JvdXAgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgaW5wdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgaW5wdXRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1bWJpdFwiKVxuICAgIGlucHV0QnRuLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXRHcm91cEJ0blwiKVxuICAgIGlucHV0QnRuLnRleHRDb250ZW50ID0gXCJEb25lXCJcblxuICAgIGlucHV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm91cDJcIikudmFsdWUubGVuZ3RoID09IDApe1xuICAgICAgICBhbGVydChcIkRvIE5vdCBsZWF2ZSBncm91cCBuYW1lIGVtcHR5XCIpXG4gICAgfWVsc2V7XG4gICAgICAgIGdldEdyb3VwKClcbiAgICAgICAgY29uc3QgYnViYmxlMSA9IGlucHV0QnRuLnBhcmVudE5vZGVcbiAgICAgICAgYnViYmxlMS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIgICAgLy9SZW1vdmluZyB0ZXh0IGJveFxuICAgICAgICBUb0RvQ29udGFpbmVyLmluc2VydEJlZm9yZSh0b0RvQmxvY2soKSwgVG9Eb0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKVxuICAgIH1cbiAgICBcbiAgICB9KVxuXG4gICAgcmV0dXJuIGlucHV0QnRuXG59XG5cbi8vR3JvdXBcblxuY29uc3QgbmV3SW5wdXQgPSAoKSA9PntcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIHJldHVybiBpbnB1dFxufVxuXG5jb25zdCBtYWtlSW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXQxID0gbmV3SW5wdXQoKVxuICAgIGlucHV0MS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsICd0ZXh0JylcbiAgICBpbnB1dDEuaWQgPSAndGFzazEnXG4gICAgaW5wdXQxLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQm94XCIpXG4gICAgaW5wdXQxLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsICcrIE5ldycpXG4gICBcbiAgICBpbnB1dDEuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcbiAgIFxuICAgIHJldHVybiBpbnB1dDFcbn1cblxuY29uc3QgZ2V0VGFzayA9ICgpID0+IHtcbiAgICBuZXdUYXNrLnRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2sxXCIpLnZhbHVlXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZTEnKS5yZXNldCgpXG4gICByZXR1cm4gbmV3VGFzay50YXNrXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrKCkgIHtcbiAgICBcbiAgICBjb25zdCB0YXNrRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBuZXdUYXNrLnRhc2s7XG4gICAgdGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQoc3BhbilcbiAgICB0YXNrRGlzcGxheS5hcHBlbmRDaGlsZChtZW51QnV0dG9uLmNyZWF0ZSgpKVxuICAgIHJldHVybiB0YXNrRGlzcGxheVxufVxuXG5cblxuY29uc3Qgc3VibWl0VGFzayA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBpbnB1dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBpbnB1dEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VtYml0XCIpXG4gICAgaW5wdXRCdG4uY2xhc3NMaXN0LmFkZChcImlucHV0QnRuXCIpXG4gICAgXG4gICAgaW5wdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2sxXCIpLnZhbHVlLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgYWxlcnQoXCJEbyBub3QgbGVhdmUgdGFzayBlbXB0eVwiKVxuICAgIH1lbHNle1xuICAgICAgICBnZXRUYXNrKClcbiAgICAgICAgY3JlYXRlTGlzdCgpLmFwcGVuZENoaWxkKGRpc3BsYXlUYXNrKCkpXG4gICAgfSBcbiAgICBcbiAgICB9KVxuXG4gICAgcmV0dXJuIGlucHV0QnRuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3QgKCkge1xuICAgIFxuICAgIFxuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZS50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGxpID0gYnV0dG9uLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IGxpMiA9IGxpLnBhcmVudE5vZGU7XG4gICAgICAgIGlmIChidXR0b24udGV4dENvbnRlbnQgPT09ICcuLi4nKXtcbiAgICAgICAgICAgIGlmKGxpLmNoaWxkRWxlbWVudENvdW50IDwgMil7XG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQocG9wT3V0TWVudSgpKSAgICAgICAgLy9NYWtpbmcgc3VyZSBvbmx5IG9uZSBtZW51IGlzIGFwcGVuZGVkXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbn0pXG5cbiAgICByZXR1cm4gbGlzdFxuXG59XG5cbmNvbnN0IGlucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcbiAgICBmb3JtMS5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlMVwiKVxuICAgXG4gICAgZm9ybTEuYXBwZW5kQ2hpbGQobWFrZUlucHV0KCkpXG4gICAgZm9ybTEuYXBwZW5kQ2hpbGQoc3VibWl0VGFzaygpKVxuICAgIGZvcm0xLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3QoKSlcbiAgICBcbiAgICByZXR1cm4gZm9ybTFcbn1cblxuXG4vL0NyZWF0ZSBncm91cFxuXG5jb25zdCB0b0RvQmxvY2sgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgaDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIilcbiAgICBoNS5jbGFzc0xpc3QuYWRkKCdncm91cDJDb2xvcicpXG4gICAgaDUudGV4dENvbnRlbnQgPSBncm91cE5hbWVWYXIyXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoaDUpXG4gICAgYmxvY2suY2xhc3NMaXN0LmFkZChcInRvRG9CbG9ja1wiKVxuICAgIGJsb2NrLmFwcGVuZENoaWxkKGlucHV0KCkpXG4gICAgcmV0dXJuIGJsb2NrXG59XG5cblxuLy9DcmVhdGUgZ3JvdXBcblxuY29uc3QgbWVudUJ1dHRvbiA9ICgoKSA9PiB7XG4gICBcbiAgIGNvbnN0IGNyZWF0ZSA9ICgpID0+e1xuICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJtZW51QnRuXCIpXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2JylcbiAgICBwLnRleHRDb250ZW50ID0gXCIuLi5cIlxuICAgIG1lbnVCdG4uYXBwZW5kQ2hpbGQocClcbiAgICBtZW51QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIilcbiAgICByZXR1cm4gbWVudUJ0blxuICAgfVxuICAgIHJldHVybiB7Y3JlYXRlfVxufSkoKVxuXG5cblxuY29uc3QgZGVsZXRlVGFiID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlbGV0ZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBkZWxldGVUYWIuY2xhc3NMaXN0LmFkZChcInRhYlwiKVxuICAgIGNvbnN0IE1lbnVUaXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgICBNZW51VGl0bGUxLnRleHRDb250ZW50ID0gXCJEZWxldGVcIlxuICAgIGNvbnN0IGltZ1RyYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGltZ1RyYXNoLmNsYXNzTGlzdC5hZGQoXCJJY29uaW1nXCIpXG4gICAgaW1nVHJhc2guc3JjID0gXCIuLi9zcmMvaW1hZ2VzL2dhcmJhZ2UucG5nXCJcbiAgICBkZWxldGVUYWIuYXBwZW5kQ2hpbGQoTWVudVRpdGxlMSlcbiAgICBNZW51VGl0bGUxLnByZXBlbmQoaW1nVHJhc2gpIFxuICAgIFxuICAgIHJldHVybiBkZWxldGVUYWJcbn1cblxuY29uc3QgcmVuYW1lVGFiID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlbmFtZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICByZW5hbWVUYWIuY2xhc3NMaXN0LmFkZChcInRhYlwiKVxuICAgIGNvbnN0IE1lbnVUaXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgICBNZW51VGl0bGUyLnRleHRDb250ZW50ID0gXCJSZW5hbWVcIlxuICAgIGNvbnN0IGltZ1JlbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBpbWdSZW5hbWUuY2xhc3NMaXN0LmFkZChcIkljb25pbWdcIilcbiAgICBpbWdSZW5hbWUuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL2VkaXQucG5nXCJcbiAgICByZW5hbWVUYWIuYXBwZW5kQ2hpbGQoTWVudVRpdGxlMilcbiAgICBNZW51VGl0bGUyLnByZXBlbmQoaW1nUmVuYW1lKVxuICAgIHJldHVybiByZW5hbWVUYWJcbn1cblxuY29uc3Qgc2F2ZVRhYiA9ICgpID0+IHtcbiAgICBjb25zdCBzYXZlVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHNhdmVUYWIuY2xhc3NMaXN0LmFkZChcInRhYlwiKVxuICAgIGNvbnN0IE1lbnVUaXRsZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgICBNZW51VGl0bGUzLnRleHRDb250ZW50ID0gXCJTYXZlXCJcbiAgICBjb25zdCBpbWdTYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGltZ1NhdmUuY2xhc3NMaXN0LmFkZChcIkljb25pbWdcIilcbiAgICBpbWdTYXZlLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9zYXZlLnBuZ1wiXG4gICAgc2F2ZVRhYi5hcHBlbmRDaGlsZChNZW51VGl0bGUzKVxuICAgIE1lbnVUaXRsZTMucHJlcGVuZChpbWdTYXZlKVxuICAgIHJldHVybiBzYXZlVGFiXG59XG5cbmNvbnN0IHBvcE91dE1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9wT3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHBvcE91dC5jbGFzc0xpc3QuYWRkKFwicG9wV2luZG93XCIpXG4gICBcbiAgICBcbiAgICBwb3BPdXQuYXBwZW5kQ2hpbGQoZGVsZXRlVGFiKCkpXG4gICAgcG9wT3V0LmFwcGVuZENoaWxkKHJlbmFtZVRhYigpKVxuICAgIFxuICAgIHBvcE91dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZS50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGJ1YmJsZTEgPSBidXR0b24ucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgYnViYmxlMiA9IGJ1YmJsZTEucGFyZW50Tm9kZVxuICAgICAgICBjb25zdCBidWJibGUzID0gYnViYmxlMi5wYXJlbnROb2RlXG4gICAgICAgIGNvbnN0IGJ1YmJsZTQgPSBidWJibGUzLnBhcmVudE5vZGVcbiAgICAgICAgY29uc3QgYnViYmxlNSA9IGJ1YmJsZTQucGFyZW50Tm9kZVxuICAgICAgICBpZiAoYnV0dG9uLnRleHRDb250ZW50ID09PSAnRGVsZXRlJyl7XG4gICAgICAgICAgICBidWJibGU1LnJlbW92ZUNoaWxkKGJ1YmJsZTQpXG4gICAgICAgIH1lbHNlIGlmKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gJ1JlbmFtZScpe1xuICAgICAgICAgICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7ICAgIC8vUHJldmVudGluZyB1c2VyIGZyb20gdXNpbmcgJ0VudGVyJyBhZnRlciBwcmVzc2luZyBlZGl0XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pOyAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGJ1YmJsZTQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgYnViYmxlNC5pbnNlcnRCZWZvcmUoaW5wdXQsIHNwYW4pO1xuICAgICAgICAgICAgYnViYmxlNC5yZW1vdmVDaGlsZChzcGFuKTsgXG4gICAgICAgICAgICBwb3BPdXQucmVtb3ZlQ2hpbGQocG9wT3V0LmNoaWxkTm9kZXNbMV0pXG4gICAgICAgICAgICBwb3BPdXQuYXBwZW5kQ2hpbGQoc2F2ZVRhYigpKVxuICAgICAgICB9ZWxzZSBpZihidXR0b24udGV4dENvbnRlbnQgPT09ICdTYXZlJyl7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGJ1YmJsZTQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgYnViYmxlNC5pbnNlcnRCZWZvcmUoc3BhbiwgaW5wdXQpO1xuICAgICAgICAgICAgYnViYmxlNC5yZW1vdmVDaGlsZChpbnB1dCk7XG4gICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnUmVuYW1lJztcbiAgICAgICAgICAgIGJ1YmJsZTMucmVtb3ZlQ2hpbGQoYnViYmxlMy5jaGlsZE5vZGVzWzFdKSAgLy8gcmVtb3ZlIHBvcG91dCBvbmNlZCBzYXZlZFxuICAgICAgICB9XG4gICAgICAgXG4gICAgfSlcbiAgICBcbiAgICByZXR1cm4gcG9wT3V0XG59XG5cblxuXG5leHBvcnQgIHtncm91cElucHV0Mn0iLCJcbmltcG9ydCB7VG9Eb0NvbnRhaW5lcn0gZnJvbSBcIi4vZ3JvdXAxXCJcblxubGV0IGdyb3VwTmFtZVZhcjMgPSBcIlwiXG5cbmZ1bmN0aW9uIFRhc2sgKHRhc2spe1xuICAgIHRoaXMudGFzayA9IHRhc2tcbn1cblxubGV0IG5ld1Rhc2sgPSBuZXcgVGFzaygpXG5sZXQgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuXG5cbi8vIEdyb3VwXG5cbmNvbnN0IGdyb3VwTmFtZSA9ICgpPT57XG4gICAgY29uc3QgZ3JvdXBJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGdyb3VwSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIGdyb3VwSW5wdXQuaWQgPSAnZ3JvdXAzJ1xuICAgIGdyb3VwSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgJ05ldyBncm91cCcpXG4gICAgXG4gICAgXG4gICAgZ3JvdXBJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIGdyb3VwSW5wdXRcbn1cblxuY29uc3QgZ2V0R3JvdXAgPSAoKSA9PiB7XG4gICAgZ3JvdXBOYW1lVmFyMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncm91cDMnKS52YWx1ZVxuICAgIHJldHVybiBncm91cE5hbWVWYXIzXG59XG5cbmNvbnN0IGdyb3VwSW5wdXQzID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcbiAgICBcbiAgICBmb3JtMS5jbGFzc0xpc3QuYWRkKFwiZm9ybUdyb3VwXCIpXG5cbiAgICBmb3JtMS5hcHBlbmRDaGlsZChncm91cE5hbWUoKSlcbiAgICBmb3JtMS5hcHBlbmRDaGlsZChzdWJtaXRHcm91cCgpKVxuICAgIFxuICAgIHJldHVybiBmb3JtMVxufVxuXG5jb25zdCBzdWJtaXRHcm91cCA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBpbnB1dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBpbnB1dEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VtYml0XCIpXG4gICAgaW5wdXRCdG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdEdyb3VwQnRuXCIpXG4gICAgaW5wdXRCdG4udGV4dENvbnRlbnQgPSBcIkRvbmVcIlxuXG4gICAgaW5wdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb3VwM1wiKS52YWx1ZS5sZW5ndGggPT0gMCl7XG4gICAgICAgIGFsZXJ0KFwiRG8gTm90IGxlYXZlIGdyb3VwIG5hbWUgZW1wdHlcIilcbiAgICB9ZWxzZXtcbiAgICAgICAgZ2V0R3JvdXAoKVxuICAgICAgICBjb25zdCBidWJibGUxID0gaW5wdXRCdG4ucGFyZW50Tm9kZVxuICAgICAgICBidWJibGUxLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiAgICAvL1JlbW92aW5nIHRleHQgYm94XG4gICAgICAgIFRvRG9Db250YWluZXIuaW5zZXJ0QmVmb3JlKHRvRG9CbG9jazMoKSwgVG9Eb0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKVxuICAgIH1cbiAgICBcbiAgICB9KVxuXG4gICAgcmV0dXJuIGlucHV0QnRuXG59XG5cbi8vR3JvdXBcblxuY29uc3QgbmV3SW5wdXQgPSAoKSA9PntcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIHJldHVybiBpbnB1dFxufVxuXG5jb25zdCBtYWtlSW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXQxID0gbmV3SW5wdXQoKVxuICAgIGlucHV0MS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsICd0ZXh0JylcbiAgICBpbnB1dDEuaWQgPSAndGFzazInXG4gICAgaW5wdXQxLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQm94XCIpXG4gICAgaW5wdXQxLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsICcrIE5ldycpXG4gICBcbiAgICBpbnB1dDEuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcbiAgIFxuICAgIHJldHVybiBpbnB1dDFcbn1cblxuY29uc3QgZ2V0VGFzayA9ICgpID0+IHtcbiAgICBuZXdUYXNrLnRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2syXCIpLnZhbHVlXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZTInKS5yZXNldCgpXG4gICByZXR1cm4gbmV3VGFzay50YXNrXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrKCkgIHtcbiAgICBcbiAgICBjb25zdCB0YXNrRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBuZXdUYXNrLnRhc2s7XG4gICAgdGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQoc3BhbilcbiAgICB0YXNrRGlzcGxheS5hcHBlbmRDaGlsZChtZW51QnV0dG9uLmNyZWF0ZSgpKVxuICAgIHJldHVybiB0YXNrRGlzcGxheVxufVxuXG5cblxuY29uc3Qgc3VibWl0VGFzayA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBpbnB1dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBpbnB1dEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VtYml0XCIpXG4gICAgaW5wdXRCdG4uY2xhc3NMaXN0LmFkZChcImlucHV0QnRuXCIpXG4gICAgXG4gICAgaW5wdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2syXCIpLnZhbHVlLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgYWxlcnQoXCJEbyBub3QgbGVhdmUgdGFzayBlbXB0eVwiKVxuICAgIH1lbHNle1xuICAgICAgICBnZXRUYXNrKClcbiAgICAgICAgY3JlYXRlTGlzdCgpLmFwcGVuZENoaWxkKGRpc3BsYXlUYXNrKCkpXG4gICAgfSBcbiAgICBcbiAgICB9KVxuXG4gICAgcmV0dXJuIGlucHV0QnRuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3QgKCkge1xuICAgIFxuICAgIFxuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZS50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGxpID0gYnV0dG9uLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IGxpMiA9IGxpLnBhcmVudE5vZGU7XG4gICAgICAgIGlmIChidXR0b24udGV4dENvbnRlbnQgPT09ICcuLi4nKXtcbiAgICAgICAgICAgIGlmKGxpLmNoaWxkRWxlbWVudENvdW50IDwgMil7XG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQocG9wT3V0TWVudSgpKSAgICAgICAgLy9NYWtpbmcgc3VyZSBvbmx5IG9uZSBtZW51IGlzIGFwcGVuZGVkXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbn0pXG5cbiAgICByZXR1cm4gbGlzdFxuXG59XG5cbmNvbnN0IGlucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcbiAgICBmb3JtMy5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlMlwiKVxuICAgXG4gICAgZm9ybTMuYXBwZW5kQ2hpbGQobWFrZUlucHV0KCkpXG4gICAgZm9ybTMuYXBwZW5kQ2hpbGQoc3VibWl0VGFzaygpKVxuICAgIGZvcm0zLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3QoKSlcbiAgICBcbiAgICByZXR1cm4gZm9ybTNcbn1cblxuXG4vL0NyZWF0ZSBncm91cFxuXG5jb25zdCB0b0RvQmxvY2szID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGg1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpXG4gICAgaDUuY2xhc3NMaXN0LmFkZCgnZ3JvdXAzQ29sb3InKVxuICAgIGg1LnRleHRDb250ZW50ID0gZ3JvdXBOYW1lVmFyM1xuICAgIGJsb2NrLmFwcGVuZENoaWxkKGg1KVxuICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoXCJ0b0RvQmxvY2tcIilcbiAgICBibG9jay5hcHBlbmRDaGlsZChpbnB1dCgpKVxuICAgIHJldHVybiBibG9ja1xufVxuXG5cbi8vQ3JlYXRlIGdyb3VwXG5cbmNvbnN0IG1lbnVCdXR0b24gPSAoKCkgPT4ge1xuICAgXG4gICBjb25zdCBjcmVhdGUgPSAoKSA9PntcbiAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwibWVudUJ0blwiKVxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpXG4gICAgcC50ZXh0Q29udGVudCA9IFwiLi4uXCJcbiAgICBtZW51QnRuLmFwcGVuZENoaWxkKHApXG4gICAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpXG4gICAgcmV0dXJuIG1lbnVCdG5cbiAgIH1cbiAgICByZXR1cm4ge2NyZWF0ZX1cbn0pKClcblxuXG5cbmNvbnN0IGRlbGV0ZVRhYiA9ICgpID0+IHtcbiAgICBjb25zdCBkZWxldGVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZGVsZXRlVGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIilcbiAgICBjb25zdCBNZW51VGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgTWVudVRpdGxlMS50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCJcbiAgICBjb25zdCBpbWdUcmFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBpbWdUcmFzaC5jbGFzc0xpc3QuYWRkKFwiSWNvbmltZ1wiKVxuICAgIGltZ1RyYXNoLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9nYXJiYWdlLnBuZ1wiXG4gICAgZGVsZXRlVGFiLmFwcGVuZENoaWxkKE1lbnVUaXRsZTEpXG4gICAgTWVudVRpdGxlMS5wcmVwZW5kKGltZ1RyYXNoKSBcbiAgICBcbiAgICByZXR1cm4gZGVsZXRlVGFiXG59XG5cbmNvbnN0IHJlbmFtZVRhYiA9ICgpID0+IHtcbiAgICBjb25zdCByZW5hbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgcmVuYW1lVGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIilcbiAgICBjb25zdCBNZW51VGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgTWVudVRpdGxlMi50ZXh0Q29udGVudCA9IFwiUmVuYW1lXCJcbiAgICBjb25zdCBpbWdSZW5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgaW1nUmVuYW1lLmNsYXNzTGlzdC5hZGQoXCJJY29uaW1nXCIpXG4gICAgaW1nUmVuYW1lLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9lZGl0LnBuZ1wiXG4gICAgcmVuYW1lVGFiLmFwcGVuZENoaWxkKE1lbnVUaXRsZTIpXG4gICAgTWVudVRpdGxlMi5wcmVwZW5kKGltZ1JlbmFtZSlcbiAgICByZXR1cm4gcmVuYW1lVGFiXG59XG5cbmNvbnN0IHNhdmVUYWIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBzYXZlVGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIilcbiAgICBjb25zdCBNZW51VGl0bGUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgTWVudVRpdGxlMy50ZXh0Q29udGVudCA9IFwiU2F2ZVwiXG4gICAgY29uc3QgaW1nU2F2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBpbWdTYXZlLmNsYXNzTGlzdC5hZGQoXCJJY29uaW1nXCIpXG4gICAgaW1nU2F2ZS5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvc2F2ZS5wbmdcIlxuICAgIHNhdmVUYWIuYXBwZW5kQ2hpbGQoTWVudVRpdGxlMylcbiAgICBNZW51VGl0bGUzLnByZXBlbmQoaW1nU2F2ZSlcbiAgICByZXR1cm4gc2F2ZVRhYlxufVxuXG5jb25zdCBwb3BPdXRNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvcE91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBwb3BPdXQuY2xhc3NMaXN0LmFkZChcInBvcFdpbmRvd1wiKVxuICAgXG4gICAgXG4gICAgcG9wT3V0LmFwcGVuZENoaWxkKGRlbGV0ZVRhYigpKVxuICAgIHBvcE91dC5hcHBlbmRDaGlsZChyZW5hbWVUYWIoKSlcbiAgICBcbiAgICBwb3BPdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCBidWJibGUxID0gYnV0dG9uLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IGJ1YmJsZTIgPSBidWJibGUxLnBhcmVudE5vZGVcbiAgICAgICAgY29uc3QgYnViYmxlMyA9IGJ1YmJsZTIucGFyZW50Tm9kZVxuICAgICAgICBjb25zdCBidWJibGU0ID0gYnViYmxlMy5wYXJlbnROb2RlXG4gICAgICAgIGNvbnN0IGJ1YmJsZTUgPSBidWJibGU0LnBhcmVudE5vZGVcbiAgICAgICAgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gJ0RlbGV0ZScpe1xuICAgICAgICAgICAgYnViYmxlNS5yZW1vdmVDaGlsZChidWJibGU0KVxuICAgICAgICB9ZWxzZSBpZihidXR0b24udGV4dENvbnRlbnQgPT09ICdSZW5hbWUnKXtcbiAgICAgICAgICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkgeyAgICAvL1ByZXZlbnRpbmcgdXNlciBmcm9tIHVzaW5nICdFbnRlcicgYWZ0ZXIgcHJlc3NpbmcgZWRpdFxuICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBidWJibGU0LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgIGJ1YmJsZTQuaW5zZXJ0QmVmb3JlKGlucHV0LCBzcGFuKTtcbiAgICAgICAgICAgIGJ1YmJsZTQucmVtb3ZlQ2hpbGQoc3Bhbik7IFxuICAgICAgICAgICAgcG9wT3V0LnJlbW92ZUNoaWxkKHBvcE91dC5jaGlsZE5vZGVzWzFdKVxuICAgICAgICAgICAgcG9wT3V0LmFwcGVuZENoaWxkKHNhdmVUYWIoKSlcbiAgICAgICAgfWVsc2UgaWYoYnV0dG9uLnRleHRDb250ZW50ID09PSAnU2F2ZScpe1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBidWJibGU0LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGJ1YmJsZTQuaW5zZXJ0QmVmb3JlKHNwYW4sIGlucHV0KTtcbiAgICAgICAgICAgIGJ1YmJsZTQucmVtb3ZlQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1JlbmFtZSc7XG4gICAgICAgICAgICBidWJibGUzLnJlbW92ZUNoaWxkKGJ1YmJsZTMuY2hpbGROb2Rlc1sxXSkgIC8vIHJlbW92ZSBwb3BvdXQgb25jZWQgc2F2ZWRcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH0pXG4gICAgXG4gICAgcmV0dXJuIHBvcE91dFxufVxuXG5cblxuZXhwb3J0ICB7Z3JvdXBJbnB1dDN9IiwiXG5pbXBvcnQge1RvRG9Db250YWluZXJ9IGZyb20gXCIuL2dyb3VwMVwiXG5cbmxldCBncm91cE5hbWVWYXI0ID0gXCJcIlxuXG5mdW5jdGlvbiBUYXNrICh0YXNrKXtcbiAgICB0aGlzLnRhc2sgPSB0YXNrXG59XG5cbmxldCBuZXdUYXNrID0gbmV3IFRhc2soKVxubGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcblxuXG4vLyBHcm91cFxuXG5jb25zdCBncm91cE5hbWUgPSAoKT0+e1xuICAgIGNvbnN0IGdyb3VwSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBncm91cElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICBncm91cElucHV0LmlkID0gJ2dyb3VwNCdcbiAgICBncm91cElucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsICdOZXcgZ3JvdXAnKVxuICAgIFxuICAgIFxuICAgIGdyb3VwSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcblxuICAgIHJldHVybiBncm91cElucHV0XG59XG5cbmNvbnN0IGdldEdyb3VwID0gKCkgPT4ge1xuICAgIGdyb3VwTmFtZVZhcjQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JvdXA0JykudmFsdWVcbiAgICByZXR1cm4gZ3JvdXBOYW1lVmFyNFxufVxuXG5jb25zdCBncm91cElucHV0NCA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG4gICAgXG4gICAgZm9ybTEuY2xhc3NMaXN0LmFkZChcImZvcm1Hcm91cFwiKVxuXG4gICAgZm9ybTEuYXBwZW5kQ2hpbGQoZ3JvdXBOYW1lKCkpXG4gICAgZm9ybTEuYXBwZW5kQ2hpbGQoc3VibWl0R3JvdXAoKSlcbiAgICBcbiAgICByZXR1cm4gZm9ybTFcbn1cblxuY29uc3Qgc3VibWl0R3JvdXAgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgaW5wdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgaW5wdXRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1bWJpdFwiKVxuICAgIGlucHV0QnRuLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXRHcm91cEJ0blwiKVxuICAgIGlucHV0QnRuLnRleHRDb250ZW50ID0gXCJEb25lXCJcblxuICAgIGlucHV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm91cDRcIikudmFsdWUubGVuZ3RoID09IDApe1xuICAgICAgICBhbGVydChcIkRvIE5vdCBsZWF2ZSBncm91cCBuYW1lIGVtcHR5XCIpXG4gICAgfWVsc2V7XG4gICAgICAgIGdldEdyb3VwKClcbiAgICAgICAgY29uc3QgYnViYmxlMSA9IGlucHV0QnRuLnBhcmVudE5vZGVcbiAgICAgICAgYnViYmxlMS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIgICAgLy9SZW1vdmluZyB0ZXh0IGJveFxuICAgICAgICBUb0RvQ29udGFpbmVyLmluc2VydEJlZm9yZSh0b0RvQmxvY2s0KCksIFRvRG9Db250YWluZXIubGFzdEVsZW1lbnRDaGlsZClcbiAgICB9XG4gICAgXG4gICAgfSlcblxuICAgIHJldHVybiBpbnB1dEJ0blxufVxuXG4vL0dyb3VwXG5cbmNvbnN0IG5ld0lucHV0ID0gKCkgPT57XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICByZXR1cm4gaW5wdXRcbn1cblxuY29uc3QgbWFrZUlucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0MSA9IG5ld0lucHV0KClcbiAgICBpbnB1dDEuc2V0QXR0cmlidXRlKFwidHlwZVwiLCAndGV4dCcpXG4gICAgaW5wdXQxLmlkID0gJ3Rhc2szJ1xuICAgIGlucHV0MS5jbGFzc0xpc3QuYWRkKFwidGFza0JveFwiKVxuICAgIGlucHV0MS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCAnKyBOZXcnKVxuICAgXG4gICAgaW5wdXQxLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG4gICBcbiAgICByZXR1cm4gaW5wdXQxXG59XG5cbmNvbnN0IGdldFRhc2sgPSAoKSA9PiB7XG4gICAgbmV3VGFzay50YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrM1wiKS52YWx1ZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUzJykucmVzZXQoKVxuICAgcmV0dXJuIG5ld1Rhc2sudGFza1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFzaygpICB7XG4gICAgXG4gICAgY29uc3QgdGFza0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICBzcGFuLnRleHRDb250ZW50ID0gbmV3VGFzay50YXNrO1xuICAgIHRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKHNwYW4pXG4gICAgdGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbi5jcmVhdGUoKSlcbiAgICByZXR1cm4gdGFza0Rpc3BsYXlcbn1cblxuXG5cbmNvbnN0IHN1Ym1pdFRhc2sgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgaW5wdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgaW5wdXRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1bWJpdFwiKVxuICAgIGlucHV0QnRuLmNsYXNzTGlzdC5hZGQoXCJpbnB1dEJ0blwiKVxuICAgIFxuICAgIGlucHV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrM1wiKS52YWx1ZS5sZW5ndGggPT0gMCl7XG4gICAgICAgIGFsZXJ0KFwiRG8gbm90IGxlYXZlIHRhc2sgZW1wdHlcIilcbiAgICB9ZWxzZXtcbiAgICAgICAgZ2V0VGFzaygpXG4gICAgICAgIGNyZWF0ZUxpc3QoKS5hcHBlbmRDaGlsZChkaXNwbGF5VGFzaygpKVxuICAgIH0gXG4gICAgXG4gICAgfSlcblxuICAgIHJldHVybiBpbnB1dEJ0blxufVxuXG5mdW5jdGlvbiBjcmVhdGVMaXN0ICgpIHtcbiAgICBcbiAgICBcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCBsaSA9IGJ1dHRvbi5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBsaTIgPSBsaS5wYXJlbnROb2RlO1xuICAgICAgICBpZiAoYnV0dG9uLnRleHRDb250ZW50ID09PSAnLi4uJyl7XG4gICAgICAgICAgICBpZihsaS5jaGlsZEVsZW1lbnRDb3VudCA8IDIpe1xuICAgICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHBvcE91dE1lbnUoKSkgICAgICAgIC8vTWFraW5nIHN1cmUgb25seSBvbmUgbWVudSBpcyBhcHBlbmRlZFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG59KVxuXG4gICAgcmV0dXJuIGxpc3RcblxufVxuXG5jb25zdCBpbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG4gICAgZm9ybTQuY2xhc3NMaXN0LmFkZChcInJlbW92ZTNcIilcbiAgIFxuICAgIGZvcm00LmFwcGVuZENoaWxkKG1ha2VJbnB1dCgpKVxuICAgIGZvcm00LmFwcGVuZENoaWxkKHN1Ym1pdFRhc2soKSlcbiAgICBmb3JtNC5hcHBlbmRDaGlsZChjcmVhdGVMaXN0KCkpXG4gICAgXG4gICAgcmV0dXJuIGZvcm00XG59XG5cblxuLy9DcmVhdGUgZ3JvdXBcblxuY29uc3QgdG9Eb0Jsb2NrNCA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBoNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKVxuICAgIGg1LmNsYXNzTGlzdC5hZGQoJ2dyb3VwNENvbG9yJylcbiAgICBoNS50ZXh0Q29udGVudCA9IGdyb3VwTmFtZVZhcjRcbiAgICBibG9jay5hcHBlbmRDaGlsZChoNSlcbiAgICBibG9jay5jbGFzc0xpc3QuYWRkKFwidG9Eb0Jsb2NrXCIpXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoaW5wdXQoKSlcbiAgICByZXR1cm4gYmxvY2tcbn1cblxuXG4vL0NyZWF0ZSBncm91cFxuXG5jb25zdCBtZW51QnV0dG9uID0gKCgpID0+IHtcbiAgIFxuICAgY29uc3QgY3JlYXRlID0gKCkgPT57XG4gICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcIm1lbnVCdG5cIilcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKVxuICAgIHAudGV4dENvbnRlbnQgPSBcIi4uLlwiXG4gICAgbWVudUJ0bi5hcHBlbmRDaGlsZChwKVxuICAgIG1lbnVCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKVxuICAgIHJldHVybiBtZW51QnRuXG4gICB9XG4gICAgcmV0dXJuIHtjcmVhdGV9XG59KSgpXG5cblxuXG5jb25zdCBkZWxldGVUYWIgPSAoKSA9PiB7XG4gICAgY29uc3QgZGVsZXRlVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGRlbGV0ZVRhYi5jbGFzc0xpc3QuYWRkKFwidGFiXCIpXG4gICAgY29uc3QgTWVudVRpdGxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgIE1lbnVUaXRsZTEudGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiXG4gICAgY29uc3QgaW1nVHJhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgaW1nVHJhc2guY2xhc3NMaXN0LmFkZChcIkljb25pbWdcIilcbiAgICBpbWdUcmFzaC5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvZ2FyYmFnZS5wbmdcIlxuICAgIGRlbGV0ZVRhYi5hcHBlbmRDaGlsZChNZW51VGl0bGUxKVxuICAgIE1lbnVUaXRsZTEucHJlcGVuZChpbWdUcmFzaCkgXG4gICAgXG4gICAgcmV0dXJuIGRlbGV0ZVRhYlxufVxuXG5jb25zdCByZW5hbWVUYWIgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVuYW1lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHJlbmFtZVRhYi5jbGFzc0xpc3QuYWRkKFwidGFiXCIpXG4gICAgY29uc3QgTWVudVRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgIE1lbnVUaXRsZTIudGV4dENvbnRlbnQgPSBcIlJlbmFtZVwiXG4gICAgY29uc3QgaW1nUmVuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGltZ1JlbmFtZS5jbGFzc0xpc3QuYWRkKFwiSWNvbmltZ1wiKVxuICAgIGltZ1JlbmFtZS5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvZWRpdC5wbmdcIlxuICAgIHJlbmFtZVRhYi5hcHBlbmRDaGlsZChNZW51VGl0bGUyKVxuICAgIE1lbnVUaXRsZTIucHJlcGVuZChpbWdSZW5hbWUpXG4gICAgcmV0dXJuIHJlbmFtZVRhYlxufVxuXG5jb25zdCBzYXZlVGFiID0gKCkgPT4ge1xuICAgIGNvbnN0IHNhdmVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgc2F2ZVRhYi5jbGFzc0xpc3QuYWRkKFwidGFiXCIpXG4gICAgY29uc3QgTWVudVRpdGxlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgIE1lbnVUaXRsZTMudGV4dENvbnRlbnQgPSBcIlNhdmVcIlxuICAgIGNvbnN0IGltZ1NhdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgaW1nU2F2ZS5jbGFzc0xpc3QuYWRkKFwiSWNvbmltZ1wiKVxuICAgIGltZ1NhdmUuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL3NhdmUucG5nXCJcbiAgICBzYXZlVGFiLmFwcGVuZENoaWxkKE1lbnVUaXRsZTMpXG4gICAgTWVudVRpdGxlMy5wcmVwZW5kKGltZ1NhdmUpXG4gICAgcmV0dXJuIHNhdmVUYWJcbn1cblxuY29uc3QgcG9wT3V0TWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBwb3BPdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgcG9wT3V0LmNsYXNzTGlzdC5hZGQoXCJwb3BXaW5kb3dcIilcbiAgIFxuICAgIFxuICAgIHBvcE91dC5hcHBlbmRDaGlsZChkZWxldGVUYWIoKSlcbiAgICBwb3BPdXQuYXBwZW5kQ2hpbGQocmVuYW1lVGFiKCkpXG4gICAgXG4gICAgcG9wT3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSBlLnRhcmdldDtcbiAgICAgICAgY29uc3QgYnViYmxlMSA9IGJ1dHRvbi5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBidWJibGUyID0gYnViYmxlMS5wYXJlbnROb2RlXG4gICAgICAgIGNvbnN0IGJ1YmJsZTMgPSBidWJibGUyLnBhcmVudE5vZGVcbiAgICAgICAgY29uc3QgYnViYmxlNCA9IGJ1YmJsZTMucGFyZW50Tm9kZVxuICAgICAgICBjb25zdCBidWJibGU1ID0gYnViYmxlNC5wYXJlbnROb2RlXG4gICAgICAgIGlmIChidXR0b24udGV4dENvbnRlbnQgPT09ICdEZWxldGUnKXtcbiAgICAgICAgICAgIGJ1YmJsZTUucmVtb3ZlQ2hpbGQoYnViYmxlNClcbiAgICAgICAgfWVsc2UgaWYoYnV0dG9uLnRleHRDb250ZW50ID09PSAnUmVuYW1lJyl7XG4gICAgICAgICAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHsgICAgLy9QcmV2ZW50aW5nIHVzZXIgZnJvbSB1c2luZyAnRW50ZXInIGFmdGVyIHByZXNzaW5nIGVkaXRcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBzcGFuID0gYnViYmxlNC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICBidWJibGU0Lmluc2VydEJlZm9yZShpbnB1dCwgc3Bhbik7XG4gICAgICAgICAgICBidWJibGU0LnJlbW92ZUNoaWxkKHNwYW4pOyBcbiAgICAgICAgICAgIHBvcE91dC5yZW1vdmVDaGlsZChwb3BPdXQuY2hpbGROb2Rlc1sxXSlcbiAgICAgICAgICAgIHBvcE91dC5hcHBlbmRDaGlsZChzYXZlVGFiKCkpXG4gICAgICAgIH1lbHNlIGlmKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gJ1NhdmUnKXtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gYnViYmxlNC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICBidWJibGU0Lmluc2VydEJlZm9yZShzcGFuLCBpbnB1dCk7XG4gICAgICAgICAgICBidWJibGU0LnJlbW92ZUNoaWxkKGlucHV0KTtcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdSZW5hbWUnO1xuICAgICAgICAgICAgYnViYmxlMy5yZW1vdmVDaGlsZChidWJibGUzLmNoaWxkTm9kZXNbMV0pICAvLyByZW1vdmUgcG9wb3V0IG9uY2VkIHNhdmVkXG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9KVxuICAgIFxuICAgIHJldHVybiBwb3BPdXRcbn1cblxuXG5cbmV4cG9ydCAge2dyb3VwSW5wdXQ0fSIsIlxuaW1wb3J0IHtUb0RvQ29udGFpbmVyfSBmcm9tIFwiLi9ncm91cDFcIlxuXG5sZXQgZ3JvdXBOYW1lVmFyNSA9IFwiXCJcblxuZnVuY3Rpb24gVGFzayAodGFzayl7XG4gICAgdGhpcy50YXNrID0gdGFza1xufVxuXG5sZXQgbmV3VGFzayA9IG5ldyBUYXNrKClcbmxldCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXG5cblxuLy8gR3JvdXBcblxuY29uc3QgZ3JvdXBOYW1lID0gKCk9PntcbiAgICBjb25zdCBncm91cElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgZ3JvdXBJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgZ3JvdXBJbnB1dC5pZCA9ICdncm91cDUnXG4gICAgZ3JvdXBJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCAnTmV3IGdyb3VwJylcbiAgICBcbiAgICBcbiAgICBncm91cElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gZ3JvdXBJbnB1dFxufVxuXG5jb25zdCBnZXRHcm91cCA9ICgpID0+IHtcbiAgICBncm91cE5hbWVWYXI1ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyb3VwNScpLnZhbHVlXG4gICAgcmV0dXJuIGdyb3VwTmFtZVZhcjVcbn1cblxuY29uc3QgZ3JvdXBJbnB1dDUgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuICAgIFxuICAgIGZvcm0xLmNsYXNzTGlzdC5hZGQoXCJmb3JtR3JvdXBcIilcblxuICAgIGZvcm0xLmFwcGVuZENoaWxkKGdyb3VwTmFtZSgpKVxuICAgIGZvcm0xLmFwcGVuZENoaWxkKHN1Ym1pdEdyb3VwKCkpXG4gICAgXG4gICAgcmV0dXJuIGZvcm0xXG59XG5cbmNvbnN0IHN1Ym1pdEdyb3VwID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGlucHV0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGlucHV0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdW1iaXRcIilcbiAgICBpbnB1dEJ0bi5jbGFzc0xpc3QuYWRkKFwic3VibWl0R3JvdXBCdG5cIilcbiAgICBpbnB1dEJ0bi50ZXh0Q29udGVudCA9IFwiRG9uZVwiXG5cbiAgICBpbnB1dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JvdXA1XCIpLnZhbHVlLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgYWxlcnQoXCJEbyBOb3QgbGVhdmUgZ3JvdXAgbmFtZSBlbXB0eVwiKVxuICAgIH1lbHNle1xuICAgICAgICBnZXRHcm91cCgpXG4gICAgICAgIGNvbnN0IGJ1YmJsZTEgPSBpbnB1dEJ0bi5wYXJlbnROb2RlXG4gICAgICAgIGJ1YmJsZTEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiICAgIC8vUmVtb3ZpbmcgdGV4dCBib3hcbiAgICAgICAgVG9Eb0NvbnRhaW5lci5pbnNlcnRCZWZvcmUodG9Eb0Jsb2NrNSgpLCBUb0RvQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpXG4gICAgfVxuICAgIFxuICAgIH0pXG5cbiAgICByZXR1cm4gaW5wdXRCdG5cbn1cblxuLy9Hcm91cFxuXG5jb25zdCBuZXdJbnB1dCA9ICgpID0+e1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgcmV0dXJuIGlucHV0XG59XG5cbmNvbnN0IG1ha2VJbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dDEgPSBuZXdJbnB1dCgpXG4gICAgaW5wdXQxLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgJ3RleHQnKVxuICAgIGlucHV0MS5pZCA9ICd0YXNrNCdcbiAgICBpbnB1dDEuY2xhc3NMaXN0LmFkZChcInRhc2tCb3hcIilcbiAgICBpbnB1dDEuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgJysgTmV3JylcbiAgIFxuICAgIGlucHV0MS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KVxuICAgXG4gICAgcmV0dXJuIGlucHV0MVxufVxuXG5jb25zdCBnZXRUYXNrID0gKCkgPT4ge1xuICAgIG5ld1Rhc2sudGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzazRcIikudmFsdWVcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlNCcpLnJlc2V0KClcbiAgIHJldHVybiBuZXdUYXNrLnRhc2tcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2soKSAge1xuICAgIFxuICAgIGNvbnN0IHRhc2tEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IG5ld1Rhc2sudGFzaztcbiAgICB0YXNrRGlzcGxheS5hcHBlbmRDaGlsZChzcGFuKVxuICAgIHRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKG1lbnVCdXR0b24uY3JlYXRlKCkpXG4gICAgcmV0dXJuIHRhc2tEaXNwbGF5XG59XG5cblxuXG5jb25zdCBzdWJtaXRUYXNrID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGlucHV0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGlucHV0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdW1iaXRcIilcbiAgICBpbnB1dEJ0bi5jbGFzc0xpc3QuYWRkKFwiaW5wdXRCdG5cIilcbiAgICBcbiAgICBpbnB1dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzazRcIikudmFsdWUubGVuZ3RoID09IDApe1xuICAgICAgICBhbGVydChcIkRvIG5vdCBsZWF2ZSB0YXNrIGVtcHR5XCIpXG4gICAgfWVsc2V7XG4gICAgICAgIGdldFRhc2soKVxuICAgICAgICBjcmVhdGVMaXN0KCkuYXBwZW5kQ2hpbGQoZGlzcGxheVRhc2soKSlcbiAgICB9IFxuICAgIFxuICAgIH0pXG5cbiAgICByZXR1cm4gaW5wdXRCdG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlzdCAoKSB7XG4gICAgXG4gICAgXG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICBjb25zdCBidXR0b24gPSBlLnRhcmdldDtcbiAgICAgICAgY29uc3QgbGkgPSBidXR0b24ucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgbGkyID0gbGkucGFyZW50Tm9kZTtcbiAgICAgICAgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gJy4uLicpe1xuICAgICAgICAgICAgaWYobGkuY2hpbGRFbGVtZW50Q291bnQgPCAyKXtcbiAgICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChwb3BPdXRNZW51KCkpICAgICAgICAvL01ha2luZyBzdXJlIG9ubHkgb25lIG1lbnUgaXMgYXBwZW5kZWRcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxufSlcblxuICAgIHJldHVybiBsaXN0XG5cbn1cblxuY29uc3QgaW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuICAgIGZvcm01LmNsYXNzTGlzdC5hZGQoXCJyZW1vdmU0XCIpXG4gICBcbiAgICBmb3JtNS5hcHBlbmRDaGlsZChtYWtlSW5wdXQoKSlcbiAgICBmb3JtNS5hcHBlbmRDaGlsZChzdWJtaXRUYXNrKCkpXG4gICAgZm9ybTUuYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdCgpKVxuICAgIFxuICAgIHJldHVybiBmb3JtNVxufVxuXG5cbi8vQ3JlYXRlIGdyb3VwXG5cbmNvbnN0IHRvRG9CbG9jazUgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgaDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIilcbiAgICBoNS5jbGFzc0xpc3QuYWRkKCdncm91cDVDb2xvcicpXG4gICAgaDUudGV4dENvbnRlbnQgPSBncm91cE5hbWVWYXI1XG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoaDUpXG4gICAgYmxvY2suY2xhc3NMaXN0LmFkZChcInRvRG9CbG9ja1wiKVxuICAgIGJsb2NrLmFwcGVuZENoaWxkKGlucHV0KCkpXG4gICAgcmV0dXJuIGJsb2NrXG59XG5cblxuLy9DcmVhdGUgZ3JvdXBcblxuY29uc3QgbWVudUJ1dHRvbiA9ICgoKSA9PiB7XG4gICBcbiAgIGNvbnN0IGNyZWF0ZSA9ICgpID0+e1xuICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJtZW51QnRuXCIpXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2JylcbiAgICBwLnRleHRDb250ZW50ID0gXCIuLi5cIlxuICAgIG1lbnVCdG4uYXBwZW5kQ2hpbGQocClcbiAgICBtZW51QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIilcbiAgICByZXR1cm4gbWVudUJ0blxuICAgfVxuICAgIHJldHVybiB7Y3JlYXRlfVxufSkoKVxuXG5cblxuY29uc3QgZGVsZXRlVGFiID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlbGV0ZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBkZWxldGVUYWIuY2xhc3NMaXN0LmFkZChcInRhYlwiKVxuICAgIGNvbnN0IE1lbnVUaXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgICBNZW51VGl0bGUxLnRleHRDb250ZW50ID0gXCJEZWxldGVcIlxuICAgIGNvbnN0IGltZ1RyYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGltZ1RyYXNoLmNsYXNzTGlzdC5hZGQoXCJJY29uaW1nXCIpXG4gICAgaW1nVHJhc2guc3JjID0gXCIuLi9zcmMvaW1hZ2VzL2dhcmJhZ2UucG5nXCJcbiAgICBkZWxldGVUYWIuYXBwZW5kQ2hpbGQoTWVudVRpdGxlMSlcbiAgICBNZW51VGl0bGUxLnByZXBlbmQoaW1nVHJhc2gpIFxuICAgIFxuICAgIHJldHVybiBkZWxldGVUYWJcbn1cblxuY29uc3QgcmVuYW1lVGFiID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlbmFtZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICByZW5hbWVUYWIuY2xhc3NMaXN0LmFkZChcInRhYlwiKVxuICAgIGNvbnN0IE1lbnVUaXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgICBNZW51VGl0bGUyLnRleHRDb250ZW50ID0gXCJSZW5hbWVcIlxuICAgIGNvbnN0IGltZ1JlbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBpbWdSZW5hbWUuY2xhc3NMaXN0LmFkZChcIkljb25pbWdcIilcbiAgICBpbWdSZW5hbWUuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL2VkaXQucG5nXCJcbiAgICByZW5hbWVUYWIuYXBwZW5kQ2hpbGQoTWVudVRpdGxlMilcbiAgICBNZW51VGl0bGUyLnByZXBlbmQoaW1nUmVuYW1lKVxuICAgIHJldHVybiByZW5hbWVUYWJcbn1cblxuY29uc3Qgc2F2ZVRhYiA9ICgpID0+IHtcbiAgICBjb25zdCBzYXZlVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHNhdmVUYWIuY2xhc3NMaXN0LmFkZChcInRhYlwiKVxuICAgIGNvbnN0IE1lbnVUaXRsZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgICBNZW51VGl0bGUzLnRleHRDb250ZW50ID0gXCJTYXZlXCJcbiAgICBjb25zdCBpbWdTYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGltZ1NhdmUuY2xhc3NMaXN0LmFkZChcIkljb25pbWdcIilcbiAgICBpbWdTYXZlLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9zYXZlLnBuZ1wiXG4gICAgc2F2ZVRhYi5hcHBlbmRDaGlsZChNZW51VGl0bGUzKVxuICAgIE1lbnVUaXRsZTMucHJlcGVuZChpbWdTYXZlKVxuICAgIHJldHVybiBzYXZlVGFiXG59XG5cbmNvbnN0IHBvcE91dE1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9wT3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHBvcE91dC5jbGFzc0xpc3QuYWRkKFwicG9wV2luZG93XCIpXG4gICBcbiAgICBcbiAgICBwb3BPdXQuYXBwZW5kQ2hpbGQoZGVsZXRlVGFiKCkpXG4gICAgcG9wT3V0LmFwcGVuZENoaWxkKHJlbmFtZVRhYigpKVxuICAgIFxuICAgIHBvcE91dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZS50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGJ1YmJsZTEgPSBidXR0b24ucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgYnViYmxlMiA9IGJ1YmJsZTEucGFyZW50Tm9kZVxuICAgICAgICBjb25zdCBidWJibGUzID0gYnViYmxlMi5wYXJlbnROb2RlXG4gICAgICAgIGNvbnN0IGJ1YmJsZTQgPSBidWJibGUzLnBhcmVudE5vZGVcbiAgICAgICAgY29uc3QgYnViYmxlNSA9IGJ1YmJsZTQucGFyZW50Tm9kZVxuICAgICAgICBpZiAoYnV0dG9uLnRleHRDb250ZW50ID09PSAnRGVsZXRlJyl7XG4gICAgICAgICAgICBidWJibGU1LnJlbW92ZUNoaWxkKGJ1YmJsZTQpXG4gICAgICAgIH1lbHNlIGlmKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gJ1JlbmFtZScpe1xuICAgICAgICAgICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7ICAgIC8vUHJldmVudGluZyB1c2VyIGZyb20gdXNpbmcgJ0VudGVyJyBhZnRlciBwcmVzc2luZyBlZGl0XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pOyAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGJ1YmJsZTQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgYnViYmxlNC5pbnNlcnRCZWZvcmUoaW5wdXQsIHNwYW4pO1xuICAgICAgICAgICAgYnViYmxlNC5yZW1vdmVDaGlsZChzcGFuKTsgXG4gICAgICAgICAgICBwb3BPdXQucmVtb3ZlQ2hpbGQocG9wT3V0LmNoaWxkTm9kZXNbMV0pXG4gICAgICAgICAgICBwb3BPdXQuYXBwZW5kQ2hpbGQoc2F2ZVRhYigpKVxuICAgICAgICB9ZWxzZSBpZihidXR0b24udGV4dENvbnRlbnQgPT09ICdTYXZlJyl7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGJ1YmJsZTQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgYnViYmxlNC5pbnNlcnRCZWZvcmUoc3BhbiwgaW5wdXQpO1xuICAgICAgICAgICAgYnViYmxlNC5yZW1vdmVDaGlsZChpbnB1dCk7XG4gICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnUmVuYW1lJztcbiAgICAgICAgICAgIGJ1YmJsZTMucmVtb3ZlQ2hpbGQoYnViYmxlMy5jaGlsZE5vZGVzWzFdKSAgLy8gcmVtb3ZlIHBvcG91dCBvbmNlZCBzYXZlZFxuICAgICAgICB9XG4gICAgICAgXG4gICAgfSlcbiAgICBcbiAgICByZXR1cm4gcG9wT3V0XG59XG5cblxuXG5leHBvcnQgIHtncm91cElucHV0NX0iLCJpbXBvcnQge2dyb3VwSW5wdXQyfSBmcm9tIFwiLi9ncm91cDJcIlxuaW1wb3J0IHtncm91cElucHV0LCBUb0RvQ29udGFpbmVyfSBmcm9tIFwiLi9ncm91cDFcIlxuaW1wb3J0IHtncm91cElucHV0M30gZnJvbSBcIi4vZ3JvdXAzXCJcbmltcG9ydCB7Z3JvdXBJbnB1dDR9IGZyb20gXCIuL2dyb3VwNFwiXG5pbXBvcnQge2dyb3VwSW5wdXQ1fSBmcm9tIFwiLi9ncm91cDVcIlxuXG5sZXQgZ3JvdXBDb3VudCA9IDA7XG5cbmNvbnN0IHJlbmRlclBhZ2UgPSBmdW5jdGlvbiAoKXtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KVxuXG4gICAgY29uc3QgdG9wQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRvcEJhci5jbGFzc0xpc3QuYWRkKFwidG9wQmFyXCIpXG4gICAgY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuICAgIHN1YlRpdGxlLnRleHRDb250ZW50ID0gXCLinJTvuI8gVGFzayBMaXN0XCJcbiAgICB0b3BCYXIuYXBwZW5kQ2hpbGQoc3ViVGl0bGUpXG5cbiAgICBjb25zdCBoZWFkSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGhlYWRJbWcuY2xhc3NMaXN0LmFkZChcImhlYWRlci1pbWdcIilcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgaW1nLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9oZWFkZXItSW1nLmpwZ1wiXG4gICAgaGVhZEltZy5hcHBlbmRDaGlsZChpbWcpXG5cbiAgICBjb25zdCBpbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgaW5zdHJ1Y3Rpb25zLmNsYXNzTGlzdC5hZGQoXCJpbnN0cnVjdFwiKVxuICAgIGNvbnN0IGluZm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgaW5mb1RleHQudGV4dENvbnRlbnQgPSAn4pyU77iPIFRhc2sgTGlzdCdcbiAgICBpbnN0cnVjdGlvbnMuYXBwZW5kQ2hpbGQoaW5mb1RleHQpXG5cbiAgICBjb25zdCBpbmZvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgaW5mbzEudGV4dENvbnRlbnQgPSBcIlVzZSB0aGlzIHRlbXBsYXRlIHRvIHRyYWNrIHlvdXIgcGVyc29uYWwgdGFza3MuXCJcbiAgICBpbnN0cnVjdGlvbnMuYXBwZW5kQ2hpbGQoaW5mbzEpXG5cbiAgICBjb25zdCBpbmZvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgaW5mbzIudGV4dENvbnRlbnQgPSBcIkNsaWNrICsgTmV3IHRvIGNyZWF0ZSBhIG5ldyB0YXNrIGRpcmVjdGx5IG9uIHRoaXMgYm9hcmQuXCJcbiAgICBpbnN0cnVjdGlvbnMuYXBwZW5kQ2hpbGQoaW5mbzIpXG5cbiAgICBjb25zdCBpbmZvMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgaW5mbzMudGV4dENvbnRlbnQgPSBcIkNsaWNrIG5ldyBwcm9qZWN0IHRvIGFkZCBuZXcgY29sdW1lXCJcbiAgICBpbnN0cnVjdGlvbnMuYXBwZW5kQ2hpbGQoaW5mbzMpXG5cbiAgICBjb25zdCBsaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIilcblxuICAgIFxuICAgIFxuICAgIGNvbnN0IG5ld0dyb3VwQnRuID0gKCkgPT4ge1xuICAgIFxuICAgICAgICBjb25zdCBuZXdHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgbmV3R3JvdXAuY2xhc3NMaXN0LmFkZCgnZ3JvdXBCdG4nKVxuICAgICAgICBuZXdHcm91cC50ZXh0Q29udGVudCA9IFwiK1wiXG4gICAgXG4gICAgICAgbmV3R3JvdXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgXG4gICAgICAgIGlmKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSAnKycgJiYgZ3JvdXBDb3VudCA9PSAwKXsgICBcbiAgICAgICAgICAgIGdyb3VwQ291bnQrK1xuICAgICAgICAgICAgVG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZChncm91cElucHV0KCkpXG4gICAgICAgIH1lbHNlIGlmKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSAnKycgJiYgZ3JvdXBDb3VudCA9PSAxKXtcbiAgICAgICAgICAgIGdyb3VwQ291bnQrK1xuICAgICAgICAgICAgVG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZChncm91cElucHV0MigpKVxuICAgICAgICB9ZWxzZSBpZihlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gJysnICYmIGdyb3VwQ291bnQgPT0gMil7XG4gICAgICAgICAgICBncm91cENvdW50KytcbiAgICAgICAgICAgIFRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZ3JvdXBJbnB1dDMoKSlcbiAgICAgICAgfWVsc2UgaWYoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICcrJyAmJiBncm91cENvdW50ID09IDMpe1xuICAgICAgICAgICAgZ3JvdXBDb3VudCsrXG4gICAgICAgICAgICBUb0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGdyb3VwSW5wdXQ0KCkpXG4gICAgICAgIH1lbHNlIGlmKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSAnKycgJiYgZ3JvdXBDb3VudCA9PSA0KXtcbiAgICAgICAgICAgIGdyb3VwQ291bnQrK1xuICAgICAgICAgICAgVG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZChncm91cElucHV0NSgpKVxuICAgICAgICB9XG5cbiAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBuZXdHcm91cCBcbiAgICB9XG4gICAgXG4gICAgVG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdHcm91cEJ0bigpKSAgXG4gICAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b3BCYXIpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkSW1nKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb25zKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGluZUJyZWFrKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoVG9Eb0NvbnRhaW5lcilcbiAgICBcbiAgXG59XG5cbiAgXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclBhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCByZW5kZXJQYWdlIGZyb20gXCIuL3JlbmRlclBhZ2VcIjtcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuXG5cblxucmVuZGVyUGFnZSgpXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==