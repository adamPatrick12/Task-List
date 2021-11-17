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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    padding: 0;\n    margin: 0;\n}\n\n.topBar{\n    width: 100%;\n    height: 3rem;\n    display: flex;\n    align-items: center;\n}\n\n.header-img{\n    width: 100%;\n    height: 15rem;\n}\n\nimg{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.Iconimg{\n    height: 1rem;\n    width: 1rem;\n    padding-right: 0.5rem;\n    padding-top: 0.3rem;\n}\n\n.instruct{\n    padding-top: 2.5rem;\n    width: 25rem;\n    height: 12rem;\n    text-align: left;\n    margin-left: 6.5rem;\n}\n\n.toDoListContainer{\n    width: 86%;\n    height: 12rem;\n    text-align: left;\n    margin-left: 6.5rem;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n/* div{\n    border: green 1px solid;\n} */\n\n.toDoBlock{\n    width: 14rem;\n    align-items: flex-start;\n    display: flex;\n    flex-direction: column;\n    align-items: left;\n    padding:0;\n    margin-left: 1.8rem;\n    margin-top: 0.8;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 14px;\n}\n\nh5{\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 14px;\n    font-weight: 400;\n    margin: 0;\n    color: rgb(64, 44, 27);\n    margin-top: 0.3rem;\n}\n\n.group1Color{\n    background: rgb(200, 225, 253);\n}\n\n.group2Color{\n    background: rgb(219, 237, 219);\n}\n\n.group3Color{\n    background: rgb(255, 226, 221);\n}\n\n.group4Color{\n    background: rgb(253, 236, 200);\n}\n\n.group5Color{\n    background: rgb(232, 222, 238);\n}\n\n\n.groupBtn{\n    width: 2rem;\n    height: 2rem;\n    text-align: center;\n    font-size: 1.4rem;\n    color: #9C9C98;\n}\n\n.groupBtn:hover{\n    background-color: rgba(55,53,47,0.08);\n}\n\n.inputBtn{\n    display: none;\n}\n\n.taskBox{\n    width: 10rem;\n    height: 2rem;\n    margin-top: 0.5rem;\n    outline: none;\n    border: none;\n    color:black;\n    border-radius: 3px;\n    font-size: 14px;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.taskBox:hover{\n    background-color: rgba(55,53,47,0.08);\n}\n\n.taskBox::placeholder{\n    color: rgba(55, 53, 47, 0.4);\n}\n\n.submitGroupBtn{\n    position:relative;\n    left: -13%;\n    top: 4px;\n    width: 4rem;\n    height: 1.6rem;\n    background-color: rgb(46, 170, 220);\n    border-radius: 3px;\n    box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px inset, rgb(15 15 15 / 10%) 0px 1px 2px;\n    border: none;\n    color: white;\n    align-items: center;\n}\n\n.submitGroupBtn:hover{\n    background-color: rgb(6, 156, 205);\n}\n\n#group, #group2, #group3, #group4, #group5{\n    position:relative;\n    left: 10%;\n    top: 2%;\n    width: 15rem;\n    height: 2.3rem;\n    color: black;\n    border: 1.5px #DEDEDE solid;\n    background-color: #F7F7F5;\n    box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px;\n    outline: none;\n    font-family: sans-serif;\n    border-radius: 3px;\n}\n\n#group::placeholder, #group2::placeholder{\n    color: #B0B0AD;\n}\n\nspan{\n    padding-top: 0.2rem;\n    margin-left: 0.5rem;\n}\n\np{\n    margin-top: -0.6rem;\n    color: #373630;\n}\n\nhr{\n    width:89%; \n    background-color: black;\n}\n\nli {\n    width: 130%;\n    height: 2rem;\n    border: 1.5px #DEDEDE solid;\n    border-radius: 3px;\n    margin-top: 10px;\n    margin-left: -2rem;\n    padding-left: 0.5rem;\n    padding-top: 0.5rem;\n    padding-right: 0.5rem;\n    box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    \n}\n\n\nli:hover{\n    background-color: rgba(82, 79, 70, 0.03) ;\n}\n\nli:hover .menuBtn{\n    display: block; \n}\n\nli:hover .popWindow{\n    display: block;\n}\n\nul{\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n}\n\n\n\n   .menuBtn{\n    background-color: rgb(255, 255, 255);\n    width: 1.7rem;\n    height: 1.5rem;\n    display: inline-block;\n    margin-bottom: 0.5rem;\n    border: #DEDEDE 1px solid;\n    padding-bottom: 10px;\n    font-weight: 800;\n    font-size: 28px;\n    color: grey;\n    padding-left: 0;\n    padding-right: 0;\n    align-self: center;\n    border-radius: 3px;\n    display: none;\n    box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px;\n   }\n\n   .menuBtn:hover{\n    background-color: rgba(82, 79, 70, 0.05) ;\n   }\n\n   h6{\n       margin-bottom: 0rem;\n       margin-top: -0.3rem;\n       padding-bottom: 2rem;\n   }\n\n   .popWindow{\n    display: flex;   \n    border: #DADADA 1px solid;\n    flex-direction: column;\n    width: 8rem;\n    box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px;\n    border-radius: 3px;\n    display: block;\n    position: relative;\n    top: -34px;\n    left: 13px;\n    display: block;\n    background-color: #FFFF;\n   }\n\n   h3{\n       padding-left: 0rem;\n       font-weight: 200;\n       font-size: 0.8rem;\n       margin-top: 0.2rem;\n       margin-bottom: 0.4rem;\n       font-family: Verdana, Geneva, Tahoma, sans-serif;\n       color: #373630;\n       position: relative;\n       left:0%;\n   }\n\n   .tab:hover{\n    background-color: rgba(55,53,47,0.08);\n   }\n   \n   input{\n       margin-bottom: 0.4rem\n   }", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["body{\n    padding: 0;\n    margin: 0;\n}\n\n.topBar{\n    width: 100%;\n    height: 3rem;\n    display: flex;\n    align-items: center;\n}\n\n.header-img{\n    width: 100%;\n    height: 15rem;\n}\n\nimg{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.Iconimg{\n    height: 1rem;\n    width: 1rem;\n    padding-right: 0.5rem;\n    padding-top: 0.3rem;\n}\n\n.instruct{\n    padding-top: 2.5rem;\n    width: 25rem;\n    height: 12rem;\n    text-align: left;\n    margin-left: 6.5rem;\n}\n\n.toDoListContainer{\n    width: 86%;\n    height: 12rem;\n    text-align: left;\n    margin-left: 6.5rem;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n/* div{\n    border: green 1px solid;\n} */\n\n.toDoBlock{\n    width: 14rem;\n    align-items: flex-start;\n    display: flex;\n    flex-direction: column;\n    align-items: left;\n    padding:0;\n    margin-left: 1.8rem;\n    margin-top: 0.8;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 14px;\n}\n\nh5{\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 14px;\n    font-weight: 400;\n    margin: 0;\n    color: rgb(64, 44, 27);\n    margin-top: 0.3rem;\n}\n\n.group1Color{\n    background: rgb(200, 225, 253);\n}\n\n.group2Color{\n    background: rgb(219, 237, 219);\n}\n\n.group3Color{\n    background: rgb(255, 226, 221);\n}\n\n.group4Color{\n    background: rgb(253, 236, 200);\n}\n\n.group5Color{\n    background: rgb(232, 222, 238);\n}\n\n\n.groupBtn{\n    width: 2rem;\n    height: 2rem;\n    text-align: center;\n    font-size: 1.4rem;\n    color: #9C9C98;\n}\n\n.groupBtn:hover{\n    background-color: rgba(55,53,47,0.08);\n}\n\n.inputBtn{\n    display: none;\n}\n\n.taskBox{\n    width: 10rem;\n    height: 2rem;\n    margin-top: 0.5rem;\n    outline: none;\n    border: none;\n    color:black;\n    border-radius: 3px;\n    font-size: 14px;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.taskBox:hover{\n    background-color: rgba(55,53,47,0.08);\n}\n\n.taskBox::placeholder{\n    color: rgba(55, 53, 47, 0.4);\n}\n\n.submitGroupBtn{\n    position:relative;\n    left: -13%;\n    top: 4px;\n    width: 4rem;\n    height: 1.6rem;\n    background-color: rgb(46, 170, 220);\n    border-radius: 3px;\n    box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px inset, rgb(15 15 15 / 10%) 0px 1px 2px;\n    border: none;\n    color: white;\n    align-items: center;\n}\n\n.submitGroupBtn:hover{\n    background-color: rgb(6, 156, 205);\n}\n\n#group, #group2, #group3, #group4, #group5{\n    position:relative;\n    left: 10%;\n    top: 2%;\n    width: 15rem;\n    height: 2.3rem;\n    color: black;\n    border: 1.5px #DEDEDE solid;\n    background-color: #F7F7F5;\n    box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px;\n    outline: none;\n    font-family: sans-serif;\n    border-radius: 3px;\n}\n\n#group::placeholder, #group2::placeholder{\n    color: #B0B0AD;\n}\n\nspan{\n    padding-top: 0.2rem;\n    margin-left: 0.5rem;\n}\n\np{\n    margin-top: -0.6rem;\n    color: #373630;\n}\n\nhr{\n    width:89%; \n    background-color: black;\n}\n\nli {\n    width: 130%;\n    height: 2rem;\n    border: 1.5px #DEDEDE solid;\n    border-radius: 3px;\n    margin-top: 10px;\n    margin-left: -2rem;\n    padding-left: 0.5rem;\n    padding-top: 0.5rem;\n    padding-right: 0.5rem;\n    box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    \n}\n\n\nli:hover{\n    background-color: rgba(82, 79, 70, 0.03) ;\n}\n\nli:hover .menuBtn{\n    display: block; \n}\n\nli:hover .popWindow{\n    display: block;\n}\n\nul{\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n}\n\n\n\n   .menuBtn{\n    background-color: rgb(255, 255, 255);\n    width: 1.7rem;\n    height: 1.5rem;\n    display: inline-block;\n    margin-bottom: 0.5rem;\n    border: #DEDEDE 1px solid;\n    padding-bottom: 10px;\n    font-weight: 800;\n    font-size: 28px;\n    color: grey;\n    padding-left: 0;\n    padding-right: 0;\n    align-self: center;\n    border-radius: 3px;\n    display: none;\n    box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px;\n   }\n\n   .menuBtn:hover{\n    background-color: rgba(82, 79, 70, 0.05) ;\n   }\n\n   h6{\n       margin-bottom: 0rem;\n       margin-top: -0.3rem;\n       padding-bottom: 2rem;\n   }\n\n   .popWindow{\n    display: flex;   \n    border: #DADADA 1px solid;\n    flex-direction: column;\n    width: 8rem;\n    box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px;\n    border-radius: 3px;\n    display: block;\n    position: relative;\n    top: -34px;\n    left: 13px;\n    display: block;\n    background-color: #FFFF;\n   }\n\n   h3{\n       padding-left: 0rem;\n       font-weight: 200;\n       font-size: 0.8rem;\n       margin-top: 0.2rem;\n       margin-bottom: 0.4rem;\n       font-family: Verdana, Geneva, Tahoma, sans-serif;\n       color: #373630;\n       position: relative;\n       left:0%;\n   }\n\n   .tab:hover{\n    background-color: rgba(55,53,47,0.08);\n   }\n   \n   input{\n       margin-bottom: 0.4rem\n   }"],"sourceRoot":""}]);
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
    img.src = "images/header-Img.jpg"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxjQUFjLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxh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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULGdFQUFnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hSc0M7O0FBRXRDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBMEIsY0FBYyxtRUFBOEI7QUFDOUU7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFJzQzs7QUFFdEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtEQUEwQixlQUFlLG1FQUE4QjtBQUMvRTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsUnNDOztBQUV0Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0RBQTBCLGVBQWUsbUVBQThCO0FBQy9FO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULGdFQUFnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xSc0M7O0FBRXRDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBMEIsZUFBZSxtRUFBOEI7QUFDL0U7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblJvQztBQUNjO0FBQ2Q7QUFDQTtBQUNBOzs7QUFHcEM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhEQUF5QixDQUFDLG1EQUFVO0FBQ2hELFNBQVM7QUFDVDtBQUNBLFlBQVksOERBQXlCLENBQUMsb0RBQVc7QUFDakQsU0FBUztBQUNUO0FBQ0EsWUFBWSw4REFBeUIsQ0FBQyxvREFBVztBQUNqRCxTQUFTO0FBQ1Q7QUFDQSxZQUFZLDhEQUF5QixDQUFDLG9EQUFXO0FBQ2pELFNBQVM7QUFDVDtBQUNBLFlBQVksOERBQXlCLENBQUMsb0RBQVc7QUFDakQ7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhEQUF5QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtEQUFhO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFLQSxpRUFBZSxVQUFVOzs7Ozs7VUMvRnpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ2hCOzs7OztBQUt0Qix1REFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL1Rhc2stTGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL1Rhc2stTGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vVGFzay1MaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vVGFzay1MaXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9UYXNrLUxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vVGFzay1MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9UYXNrLUxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vVGFzay1MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1Rhc2stTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1Rhc2stTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1Rhc2stTGlzdC8uL3NyYy9ncm91cDEuanMiLCJ3ZWJwYWNrOi8vVGFzay1MaXN0Ly4vc3JjL2dyb3VwMi5qcyIsIndlYnBhY2s6Ly9UYXNrLUxpc3QvLi9zcmMvZ3JvdXAzLmpzIiwid2VicGFjazovL1Rhc2stTGlzdC8uL3NyYy9ncm91cDQuanMiLCJ3ZWJwYWNrOi8vVGFzay1MaXN0Ly4vc3JjL2dyb3VwNS5qcyIsIndlYnBhY2s6Ly9UYXNrLUxpc3QvLi9zcmMvcmVuZGVyUGFnZS5qcyIsIndlYnBhY2s6Ly9UYXNrLUxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVGFzay1MaXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1Rhc2stTGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVGFzay1MaXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVGFzay1MaXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVGFzay1MaXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udG9wQmFye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyLWltZ3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTVyZW07XFxufVxcblxcbmltZ3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5JY29uaW1ne1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICAgIHBhZGRpbmctdG9wOiAwLjNyZW07XFxufVxcblxcbi5pbnN0cnVjdHtcXG4gICAgcGFkZGluZy10b3A6IDIuNXJlbTtcXG4gICAgd2lkdGg6IDI1cmVtO1xcbiAgICBoZWlnaHQ6IDEycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW4tbGVmdDogNi41cmVtO1xcbn1cXG5cXG4udG9Eb0xpc3RDb250YWluZXJ7XFxuICAgIHdpZHRoOiA4NiU7XFxuICAgIGhlaWdodDogMTJyZW07XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiA2LjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLyogZGl2e1xcbiAgICBib3JkZXI6IGdyZWVuIDFweCBzb2xpZDtcXG59ICovXFxuXFxuLnRvRG9CbG9ja3tcXG4gICAgd2lkdGg6IDE0cmVtO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuOHJlbTtcXG4gICAgbWFyZ2luLXRvcDogMC44O1xcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbmg1e1xcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6IHJnYig2NCwgNDQsIDI3KTtcXG4gICAgbWFyZ2luLXRvcDogMC4zcmVtO1xcbn1cXG5cXG4uZ3JvdXAxQ29sb3J7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMDAsIDIyNSwgMjUzKTtcXG59XFxuXFxuLmdyb3VwMkNvbG9ye1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjE5LCAyMzcsIDIxOSk7XFxufVxcblxcbi5ncm91cDNDb2xvcntcXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjI2LCAyMjEpO1xcbn1cXG5cXG4uZ3JvdXA0Q29sb3J7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTMsIDIzNiwgMjAwKTtcXG59XFxuXFxuLmdyb3VwNUNvbG9ye1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjMyLCAyMjIsIDIzOCk7XFxufVxcblxcblxcbi5ncm91cEJ0bntcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgY29sb3I6ICM5QzlDOTg7XFxufVxcblxcbi5ncm91cEJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NSw1Myw0NywwLjA4KTtcXG59XFxuXFxuLmlucHV0QnRue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFza0JveHtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjpibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50YXNrQm94OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU1LDUzLDQ3LDAuMDgpO1xcbn1cXG5cXG4udGFza0JveDo6cGxhY2Vob2xkZXJ7XFxuICAgIGNvbG9yOiByZ2JhKDU1LCA1MywgNDcsIDAuNCk7XFxufVxcblxcbi5zdWJtaXRHcm91cEJ0bntcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIGxlZnQ6IC0xMyU7XFxuICAgIHRvcDogNHB4O1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OiAxLjZyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgMTcwLCAyMjApO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYigxNSAxNSAxNSAvIDEwJSkgMHB4IDBweCAwcHggMXB4IGluc2V0LCByZ2IoMTUgMTUgMTUgLyAxMCUpIDBweCAxcHggMnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnN1Ym1pdEdyb3VwQnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgMTU2LCAyMDUpO1xcbn1cXG5cXG4jZ3JvdXAsICNncm91cDIsICNncm91cDMsICNncm91cDQsICNncm91cDV7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICBsZWZ0OiAxMCU7XFxuICAgIHRvcDogMiU7XFxuICAgIHdpZHRoOiAxNXJlbTtcXG4gICAgaGVpZ2h0OiAyLjNyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiAxLjVweCAjREVERURFIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y1O1xcbiAgICBib3gtc2hhZG93OiByZ2IoMTUgMTUgMTUgLyAxMCUpIDBweCAwcHggMHB4IDFweCwgcmdiKDE1IDE1IDE1IC8gMTAlKSAwcHggMnB4IDRweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuI2dyb3VwOjpwbGFjZWhvbGRlciwgI2dyb3VwMjo6cGxhY2Vob2xkZXJ7XFxuICAgIGNvbG9yOiAjQjBCMEFEO1xcbn1cXG5cXG5zcGFue1xcbiAgICBwYWRkaW5nLXRvcDogMC4ycmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG5we1xcbiAgICBtYXJnaW4tdG9wOiAtMC42cmVtO1xcbiAgICBjb2xvcjogIzM3MzYzMDtcXG59XFxuXFxuaHJ7XFxuICAgIHdpZHRoOjg5JTsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5saSB7XFxuICAgIHdpZHRoOiAxMzAlO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGJvcmRlcjogMS41cHggI0RFREVERSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTJyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IHJnYigxNSAxNSAxNSAvIDEwJSkgMHB4IDBweCAwcHggMXB4LCByZ2IoMTUgMTUgMTUgLyAxMCUpIDBweCAycHggNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIFxcbn1cXG5cXG5cXG5saTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MiwgNzksIDcwLCAwLjAzKSA7XFxufVxcblxcbmxpOmhvdmVyIC5tZW51QnRue1xcbiAgICBkaXNwbGF5OiBibG9jazsgXFxufVxcblxcbmxpOmhvdmVyIC5wb3BXaW5kb3d7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG51bHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcblxcblxcbiAgIC5tZW51QnRue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIHdpZHRoOiAxLjdyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gICAgYm9yZGVyOiAjREVERURFIDFweCBzb2xpZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgcGFkZGluZy1yaWdodDogMDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IHJnYigxNSAxNSAxNSAvIDEwJSkgMHB4IDBweCAwcHggMXB4LCByZ2IoMTUgMTUgMTUgLyAxMCUpIDBweCAycHggNHB4O1xcbiAgIH1cXG5cXG4gICAubWVudUJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MiwgNzksIDcwLCAwLjA1KSA7XFxuICAgfVxcblxcbiAgIGg2e1xcbiAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xcbiAgICAgICBtYXJnaW4tdG9wOiAtMC4zcmVtO1xcbiAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gICB9XFxuXFxuICAgLnBvcFdpbmRvd3tcXG4gICAgZGlzcGxheTogZmxleDsgICBcXG4gICAgYm9yZGVyOiAjREFEQURBIDFweCBzb2xpZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDhyZW07XFxuICAgIGJveC1zaGFkb3c6IHJnYigxNSAxNSAxNSAvIDEwJSkgMHB4IDBweCAwcHggMXB4LCByZ2IoMTUgMTUgMTUgLyAxMCUpIDBweCAycHggNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTM0cHg7XFxuICAgIGxlZnQ6IDEzcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRjtcXG4gICB9XFxuXFxuICAgaDN7XFxuICAgICAgIHBhZGRpbmctbGVmdDogMHJlbTtcXG4gICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgIG1hcmdpbi10b3A6IDAuMnJlbTtcXG4gICAgICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcbiAgICAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICAgICAgIGNvbG9yOiAjMzczNjMwO1xcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgIGxlZnQ6MCU7XFxuICAgfVxcblxcbiAgIC50YWI6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTUsNTMsNDcsMC4wOCk7XFxuICAgfVxcbiAgIFxcbiAgIGlucHV0e1xcbiAgICAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW1cXG4gICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHdJQUF3STtJQUN4SSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0lBQXdJO0lBQ3hJLGVBQWU7SUFD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O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi50b3BCYXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXItaW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG59XFxuXFxuaW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLkljb25pbWd7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuM3JlbTtcXG59XFxuXFxuLmluc3RydWN0e1xcbiAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xcbiAgICB3aWR0aDogMjVyZW07XFxuICAgIGhlaWdodDogMTJyZW07XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiA2LjVyZW07XFxufVxcblxcbi50b0RvTGlzdENvbnRhaW5lcntcXG4gICAgd2lkdGg6IDg2JTtcXG4gICAgaGVpZ2h0OiAxMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luLWxlZnQ6IDYuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4vKiBkaXZ7XFxuICAgIGJvcmRlcjogZ3JlZW4gMXB4IHNvbGlkO1xcbn0gKi9cXG5cXG4udG9Eb0Jsb2Nre1xcbiAgICB3aWR0aDogMTRyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcXG4gICAgcGFkZGluZzowO1xcbiAgICBtYXJnaW4tbGVmdDogMS44cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwLjg7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuaDV7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogcmdiKDY0LCA0NCwgMjcpO1xcbiAgICBtYXJnaW4tdG9wOiAwLjNyZW07XFxufVxcblxcbi5ncm91cDFDb2xvcntcXG4gICAgYmFja2dyb3VuZDogcmdiKDIwMCwgMjI1LCAyNTMpO1xcbn1cXG5cXG4uZ3JvdXAyQ29sb3J7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMTksIDIzNywgMjE5KTtcXG59XFxuXFxuLmdyb3VwM0NvbG9ye1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyMjYsIDIyMSk7XFxufVxcblxcbi5ncm91cDRDb2xvcntcXG4gICAgYmFja2dyb3VuZDogcmdiKDI1MywgMjM2LCAyMDApO1xcbn1cXG5cXG4uZ3JvdXA1Q29sb3J7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMzIsIDIyMiwgMjM4KTtcXG59XFxuXFxuXFxuLmdyb3VwQnRue1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBjb2xvcjogIzlDOUM5ODtcXG59XFxuXFxuLmdyb3VwQnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU1LDUzLDQ3LDAuMDgpO1xcbn1cXG5cXG4uaW5wdXRCdG57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrQm94e1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOmJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRhc2tCb3g6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTUsNTMsNDcsMC4wOCk7XFxufVxcblxcbi50YXNrQm94OjpwbGFjZWhvbGRlcntcXG4gICAgY29sb3I6IHJnYmEoNTUsIDUzLCA0NywgMC40KTtcXG59XFxuXFxuLnN1Ym1pdEdyb3VwQnRue1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgbGVmdDogLTEzJTtcXG4gICAgdG9wOiA0cHg7XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBoZWlnaHQ6IDEuNnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCAxNzAsIDIyMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm94LXNoYWRvdzogcmdiKDE1IDE1IDE1IC8gMTAlKSAwcHggMHB4IDBweCAxcHggaW5zZXQsIHJnYigxNSAxNSAxNSAvIDEwJSkgMHB4IDFweCAycHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3VibWl0R3JvdXBCdG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCAxNTYsIDIwNSk7XFxufVxcblxcbiNncm91cCwgI2dyb3VwMiwgI2dyb3VwMywgI2dyb3VwNCwgI2dyb3VwNXtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIGxlZnQ6IDEwJTtcXG4gICAgdG9wOiAyJTtcXG4gICAgd2lkdGg6IDE1cmVtO1xcbiAgICBoZWlnaHQ6IDIuM3JlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IDEuNXB4ICNERURFREUgc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3RjU7XFxuICAgIGJveC1zaGFkb3c6IHJnYigxNSAxNSAxNSAvIDEwJSkgMHB4IDBweCAwcHggMXB4LCByZ2IoMTUgMTUgMTUgLyAxMCUpIDBweCAycHggNHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4jZ3JvdXA6OnBsYWNlaG9sZGVyLCAjZ3JvdXAyOjpwbGFjZWhvbGRlcntcXG4gICAgY29sb3I6ICNCMEIwQUQ7XFxufVxcblxcbnNwYW57XFxuICAgIHBhZGRpbmctdG9wOiAwLjJyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbnB7XFxuICAgIG1hcmdpbi10b3A6IC0wLjZyZW07XFxuICAgIGNvbG9yOiAjMzczNjMwO1xcbn1cXG5cXG5ocntcXG4gICAgd2lkdGg6ODklOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbmxpIHtcXG4gICAgd2lkdGg6IDEzMCU7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgYm9yZGVyOiAxLjVweCAjREVERURFIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMnJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiKDE1IDE1IDE1IC8gMTAlKSAwcHggMHB4IDBweCAxcHgsIHJnYigxNSAxNSAxNSAvIDEwJSkgMHB4IDJweCA0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgXFxufVxcblxcblxcbmxpOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgyLCA3OSwgNzAsIDAuMDMpIDtcXG59XFxuXFxubGk6aG92ZXIgLm1lbnVCdG57XFxuICAgIGRpc3BsYXk6IGJsb2NrOyBcXG59XFxuXFxubGk6aG92ZXIgLnBvcFdpbmRvd3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbnVse1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuXFxuXFxuICAgLm1lbnVCdG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgd2lkdGg6IDEuN3JlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgICBib3JkZXI6ICNERURFREUgMXB4IHNvbGlkO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogcmdiKDE1IDE1IDE1IC8gMTAlKSAwcHggMHB4IDBweCAxcHgsIHJnYigxNSAxNSAxNSAvIDEwJSkgMHB4IDJweCA0cHg7XFxuICAgfVxcblxcbiAgIC5tZW51QnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgyLCA3OSwgNzAsIDAuMDUpIDtcXG4gICB9XFxuXFxuICAgaDZ7XFxuICAgICAgIG1hcmdpbi1ib3R0b206IDByZW07XFxuICAgICAgIG1hcmdpbi10b3A6IC0wLjNyZW07XFxuICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgIH1cXG5cXG4gICAucG9wV2luZG93e1xcbiAgICBkaXNwbGF5OiBmbGV4OyAgIFxcbiAgICBib3JkZXI6ICNEQURBREEgMXB4IHNvbGlkO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogOHJlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiKDE1IDE1IDE1IC8gMTAlKSAwcHggMHB4IDBweCAxcHgsIHJnYigxNSAxNSAxNSAvIDEwJSkgMHB4IDJweCA0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMzRweDtcXG4gICAgbGVmdDogMTNweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGO1xcbiAgIH1cXG5cXG4gICBoM3tcXG4gICAgICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xcbiAgICAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgICAgbWFyZ2luLXRvcDogMC4ycmVtO1xcbiAgICAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxuICAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gICAgICAgY29sb3I6ICMzNzM2MzA7XFxuICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgbGVmdDowJTtcXG4gICB9XFxuXFxuICAgLnRhYjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NSw1Myw0NywwLjA4KTtcXG4gICB9XFxuICAgXFxuICAgaW5wdXR7XFxuICAgICAgIG1hcmdpbi1ib3R0b206IDAuNHJlbVxcbiAgIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibGV0IGdyb3VwTmFtZVZhciA9IFwiXCJcblxuZnVuY3Rpb24gVGFzayAodGFzaywgZ3JvdXApe1xuICAgIHRoaXMudGFzayA9IHRhc2tcbiAgICB0aGlzLmdyb3VwID0gZ3JvdXAgXG59XG5cbmxldCBuZXdUYXNrID0gbmV3IFRhc2soKVxubGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcblxuY29uc3QgVG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBUb0RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b0RvTGlzdENvbnRhaW5lclwiKVxuICAgIFxuXG4vLyBHcm91cFxuXG5jb25zdCBncm91cE5hbWUgPSAoKT0+e1xuICAgIGNvbnN0IGdyb3VwSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBncm91cElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICBncm91cElucHV0LmlkID0gJ2dyb3VwJ1xuICAgIGdyb3VwSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgJ05ldyBncm91cCcpXG4gICAgXG4gICAgZ3JvdXBJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIGdyb3VwSW5wdXRcbn1cblxuY29uc3QgZ2V0R3JvdXAgPSAoKSA9PiB7XG4gICAgZ3JvdXBOYW1lVmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyb3VwJykudmFsdWVcbiAgICByZXR1cm4gZ3JvdXBOYW1lXG59XG5cbmNvbnN0IGdyb3VwSW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuICAgIFxuICAgIGZvcm0xLmNsYXNzTGlzdC5hZGQoXCJmb3JtR3JvdXBcIilcblxuICAgIGZvcm0xLmFwcGVuZENoaWxkKGdyb3VwTmFtZSgpKVxuICAgIGZvcm0xLmFwcGVuZENoaWxkKHN1Ym1pdEdyb3VwKCkpXG4gICAgXG4gICAgcmV0dXJuIGZvcm0xXG59XG5cbmNvbnN0IHN1Ym1pdEdyb3VwID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGlucHV0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGlucHV0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdW1iaXRcIilcbiAgICBpbnB1dEJ0bi5jbGFzc0xpc3QuYWRkKFwic3VibWl0R3JvdXBCdG5cIilcbiAgICBpbnB1dEJ0bi50ZXh0Q29udGVudCA9IFwiRG9uZVwiXG4gICAgXG5cbiAgICBpbnB1dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JvdXBcIikudmFsdWUubGVuZ3RoID09IDApXG4gICAge1xuICAgIGFsZXJ0KFwiRG8gTm90IGxlYXZlIGdyb3VwIG5hbWUgZW1wdHlcIilcbiAgICB9ZWxzZXtcbiAgICAgICAgZ2V0R3JvdXAoKVxuICAgICAgICBjb25zdCBidWJibGUxID0gaW5wdXRCdG4ucGFyZW50Tm9kZVxuICAgICAgICBidWJibGUxLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICBUb0RvQ29udGFpbmVyLmluc2VydEJlZm9yZSh0b0RvQmxvY2syKCksIFRvRG9Db250YWluZXIubGFzdEVsZW1lbnRDaGlsZClcbiAgICB9XG4gICAgICAgIFxuICAgIH0pXG5cbiAgICByZXR1cm4gaW5wdXRCdG5cbn1cblxuLy9Hcm91cFxuXG5jb25zdCBuZXdJbnB1dCA9ICgpID0+e1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgcmV0dXJuIGlucHV0XG59XG5cbmNvbnN0IG1ha2VJbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dDEgPSBuZXdJbnB1dCgpXG4gICAgaW5wdXQxLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgJ3RleHQnKVxuICAgIGlucHV0MS5pZCA9IGB0YXNrYFxuICAgIGlucHV0MS5jbGFzc0xpc3QuYWRkKFwidGFza0JveFwiKVxuICAgIGlucHV0MS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCAnKyBOZXcnKVxuICAgXG4gICAgaW5wdXQxLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG4gICBcbiAgICByZXR1cm4gaW5wdXQxXG59XG5cbmNvbnN0IGdldFRhc2sgPSAoKSA9PiB7XG4gICAgbmV3VGFzay50YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2snKS52YWx1ZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUnKS5yZXNldCgpXG4gICByZXR1cm4gbmV3VGFzay50YXNrXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrKCkgIHtcbiAgICBcbiAgICBjb25zdCB0YXNrRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBuZXdUYXNrLnRhc2s7XG4gICAgdGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQoc3BhbilcbiAgICB0YXNrRGlzcGxheS5hcHBlbmRDaGlsZChtZW51QnV0dG9uLmNyZWF0ZSgpKVxuICAgIHJldHVybiB0YXNrRGlzcGxheVxufVxuXG5jb25zdCBzdWJtaXRUYXNrID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGlucHV0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGlucHV0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdW1iaXRcIilcbiAgICBpbnB1dEJ0bi5jbGFzc0xpc3QuYWRkKFwiaW5wdXRCdG5cIilcbiAgICBcbiAgICBpbnB1dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1wiKS52YWx1ZS5sZW5ndGggPT0gMCl7XG4gICAgICAgIGFsZXJ0KFwiRG8gbm90IGxlYXZlIHRhc2sgYmFyIGVtcHR5XCIpXG4gICAgfWVsc2V7XG4gICAgICAgIGdldFRhc2soKVxuICAgICAgICBjcmVhdGVMaXN0KCkuYXBwZW5kQ2hpbGQoZGlzcGxheVRhc2soKSlcbiAgICB9ICAgIFxuICAgIFxuICAgIH0pXG5cbiAgICByZXR1cm4gaW5wdXRCdG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlzdCAoKSB7XG4gICAgXG4gICAgXG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICBjb25zdCBidXR0b24gPSBlLnRhcmdldDtcbiAgICAgICAgY29uc3QgbGkgPSBidXR0b24ucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgbGkyID0gbGkucGFyZW50Tm9kZTtcbiAgICAgICAgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gJy4uLicpe1xuICAgICAgICAgICAgaWYobGkuY2hpbGRFbGVtZW50Q291bnQgPCAyKXtcbiAgICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChwb3BPdXRNZW51KCkpICAgICAgICAvL01ha2luZyBzdXJlIG9ubHkgb25lIG1lbnUgaXMgYXBwZW5kZWRcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxufSlcblxuICAgIHJldHVybiBsaXN0XG5cbn1cblxuY29uc3QgaW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuICAgIGZvcm0yLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVcIilcblxuICAgIGZvcm0yLmFwcGVuZENoaWxkKG1ha2VJbnB1dCgpKVxuICAgIGZvcm0yLmFwcGVuZENoaWxkKHN1Ym1pdFRhc2soKSlcbiAgICBmb3JtMi5hcHBlbmRDaGlsZChjcmVhdGVMaXN0KCkpXG4gICAgXG4gXG4gICAgcmV0dXJuIGZvcm0yXG59XG5cblxuLy9DcmVhdGUgZ3JvdXBcblxuY29uc3QgdG9Eb0Jsb2NrMiA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBoNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKVxuICAgIGg1LmNsYXNzTGlzdC5hZGQoJ2dyb3VwMUNvbG9yJylcbiAgICBoNS50ZXh0Q29udGVudCA9IGdyb3VwTmFtZVZhclxuICAgIGJsb2NrLmFwcGVuZENoaWxkKGg1KVxuICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoXCJ0b0RvQmxvY2tcIilcbiAgICBibG9jay5hcHBlbmRDaGlsZChpbnB1dCgpKVxuICAgIHJldHVybiBibG9ja1xufVxuXG5cbi8vQ3JlYXRlIGdyb3VwXG5cbmNvbnN0IG1lbnVCdXR0b24gPSAoKCkgPT4ge1xuICAgXG4gICBjb25zdCBjcmVhdGUgPSAoKSA9PntcbiAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwibWVudUJ0blwiKVxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpXG4gICAgcC50ZXh0Q29udGVudCA9IFwiLi4uXCJcbiAgICBtZW51QnRuLmFwcGVuZENoaWxkKHApXG4gICAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpXG4gICAgcmV0dXJuIG1lbnVCdG5cbiAgIH1cbiAgICByZXR1cm4ge2NyZWF0ZX1cbn0pKClcblxuXG5cbmNvbnN0IGRlbGV0ZVRhYiA9ICgpID0+IHtcbiAgICBjb25zdCBkZWxldGVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZGVsZXRlVGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIilcbiAgICBjb25zdCBNZW51VGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgTWVudVRpdGxlMS50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCJcbiAgICBjb25zdCBpbWdUcmFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBpbWdUcmFzaC5jbGFzc0xpc3QuYWRkKFwiSWNvbmltZ1wiKVxuICAgIGltZ1RyYXNoLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9nYXJiYWdlLnBuZ1wiXG4gICAgZGVsZXRlVGFiLmFwcGVuZENoaWxkKE1lbnVUaXRsZTEpXG4gICAgTWVudVRpdGxlMS5wcmVwZW5kKGltZ1RyYXNoKVxuICAgIFxuICAgIFxuICAgIHJldHVybiBkZWxldGVUYWJcblxuICAgIFxufVxuXG5jb25zdCByZW5hbWVUYWIgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVuYW1lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHJlbmFtZVRhYi5jbGFzc0xpc3QuYWRkKFwidGFiXCIpXG4gICAgY29uc3QgTWVudVRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgIE1lbnVUaXRsZTIudGV4dENvbnRlbnQgPSBcIlJlbmFtZVwiXG4gICAgY29uc3QgaW1nUmVuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGltZ1JlbmFtZS5jbGFzc0xpc3QuYWRkKFwiSWNvbmltZ1wiKVxuICAgIGltZ1JlbmFtZS5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvZWRpdC5wbmdcIlxuICAgIHJlbmFtZVRhYi5hcHBlbmRDaGlsZChNZW51VGl0bGUyKVxuICAgIE1lbnVUaXRsZTIucHJlcGVuZChpbWdSZW5hbWUpXG4gICAgcmV0dXJuIHJlbmFtZVRhYlxufVxuXG5jb25zdCBzYXZlVGFiID0gKCkgPT4ge1xuICAgIGNvbnN0IHNhdmVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgc2F2ZVRhYi5jbGFzc0xpc3QuYWRkKFwidGFiXCIpXG4gICAgY29uc3QgTWVudVRpdGxlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgIE1lbnVUaXRsZTMudGV4dENvbnRlbnQgPSBcIlNhdmVcIlxuICAgIGNvbnN0IGltZ1NhdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgaW1nU2F2ZS5jbGFzc0xpc3QuYWRkKFwiSWNvbmltZ1wiKVxuICAgIGltZ1NhdmUuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL3NhdmUucG5nXCJcbiAgICBzYXZlVGFiLmFwcGVuZENoaWxkKE1lbnVUaXRsZTMpXG4gICAgTWVudVRpdGxlMy5wcmVwZW5kKGltZ1NhdmUpXG4gICAgcmV0dXJuIHNhdmVUYWJcbn1cblxuXG5cbmNvbnN0IHBvcE91dE1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9wT3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHBvcE91dC5jbGFzc0xpc3QuYWRkKFwicG9wV2luZG93XCIpXG4gICBcbiAgICBcbiAgICBwb3BPdXQuYXBwZW5kQ2hpbGQoZGVsZXRlVGFiKCkpXG4gICAgcG9wT3V0LmFwcGVuZENoaWxkKHJlbmFtZVRhYigpKVxuICAgIFxuICAgIHBvcE91dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZS50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGJ1YmJsZTEgPSBidXR0b24ucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgYnViYmxlMiA9IGJ1YmJsZTEucGFyZW50Tm9kZVxuICAgICAgICBjb25zdCBidWJibGUzID0gYnViYmxlMi5wYXJlbnROb2RlXG4gICAgICAgIGNvbnN0IGJ1YmJsZTQgPSBidWJibGUzLnBhcmVudE5vZGVcbiAgICAgICAgY29uc3QgYnViYmxlNSA9IGJ1YmJsZTQucGFyZW50Tm9kZVxuICAgICAgICBpZiAoYnV0dG9uLnRleHRDb250ZW50ID09PSAnRGVsZXRlJyl7XG4gICAgICAgICAgICBidWJibGU1LnJlbW92ZUNoaWxkKGJ1YmJsZTQpXG4gICAgICAgIH1lbHNlIGlmKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gJ1JlbmFtZScpe1xuICAgICAgICAgICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7ICAgIC8vUHJldmVudGluZyB1c2VyIGZyb20gdXNpbmcgJ0VudGVyJyBhZnRlciBwcmVzc2luZyBlZGl0XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pOyAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGJ1YmJsZTQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgYnViYmxlNC5pbnNlcnRCZWZvcmUoaW5wdXQsIHNwYW4pO1xuICAgICAgICAgICAgYnViYmxlNC5yZW1vdmVDaGlsZChzcGFuKTsgXG4gICAgICAgICAgICBwb3BPdXQucmVtb3ZlQ2hpbGQocG9wT3V0LmNoaWxkTm9kZXNbMV0pXG4gICAgICAgICAgICBwb3BPdXQuYXBwZW5kQ2hpbGQoc2F2ZVRhYigpKVxuICAgICAgICB9ZWxzZSBpZihidXR0b24udGV4dENvbnRlbnQgPT09ICdTYXZlJyl7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGJ1YmJsZTQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgYnViYmxlNC5pbnNlcnRCZWZvcmUoc3BhbiwgaW5wdXQpO1xuICAgICAgICAgICAgYnViYmxlNC5yZW1vdmVDaGlsZChpbnB1dCk7XG4gICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnUmVuYW1lJztcbiAgICAgICAgICAgIGJ1YmJsZTMucmVtb3ZlQ2hpbGQoYnViYmxlMy5jaGlsZE5vZGVzWzFdKSAgLy8gcmVtb3ZlIHBvcG91dCBvbmNlZCBzYXZlZFxuICAgICAgICB9XG4gICAgICAgXG4gICAgfSlcbiAgICBcbiAgICByZXR1cm4gcG9wT3V0XG59XG5cblxuXG5leHBvcnQgIHtncm91cElucHV0LCBUb0RvQ29udGFpbmVyfSIsIlxuaW1wb3J0IHtUb0RvQ29udGFpbmVyfSBmcm9tIFwiLi9ncm91cDFcIlxuXG5sZXQgZ3JvdXBOYW1lVmFyMiA9IFwiXCJcblxuZnVuY3Rpb24gVGFzayAodGFzayl7XG4gICAgdGhpcy50YXNrID0gdGFza1xufVxuXG5sZXQgbmV3VGFzayA9IG5ldyBUYXNrKClcbmxldCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXG5cblxuLy8gR3JvdXBcblxuY29uc3QgZ3JvdXBOYW1lID0gKCk9PntcbiAgICBjb25zdCBncm91cElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgZ3JvdXBJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgZ3JvdXBJbnB1dC5pZCA9ICdncm91cDInXG4gICAgZ3JvdXBJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCAnTmV3IGdyb3VwJylcbiAgICBcbiAgICBcbiAgICBncm91cElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gZ3JvdXBJbnB1dFxufVxuXG5jb25zdCBnZXRHcm91cCA9ICgpID0+IHtcbiAgICBncm91cE5hbWVWYXIyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyb3VwMicpLnZhbHVlXG4gICAgcmV0dXJuIGdyb3VwTmFtZVZhcjJcbn1cblxuY29uc3QgZ3JvdXBJbnB1dDIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuICAgIFxuICAgIGZvcm0xLmNsYXNzTGlzdC5hZGQoXCJmb3JtR3JvdXBcIilcblxuICAgIGZvcm0xLmFwcGVuZENoaWxkKGdyb3VwTmFtZSgpKVxuICAgIGZvcm0xLmFwcGVuZENoaWxkKHN1Ym1pdEdyb3VwKCkpXG4gICAgXG4gICAgcmV0dXJuIGZvcm0xXG59XG5cbmNvbnN0IHN1Ym1pdEdyb3VwID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGlucHV0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGlucHV0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdW1iaXRcIilcbiAgICBpbnB1dEJ0bi5jbGFzc0xpc3QuYWRkKFwic3VibWl0R3JvdXBCdG5cIilcbiAgICBpbnB1dEJ0bi50ZXh0Q29udGVudCA9IFwiRG9uZVwiXG5cbiAgICBpbnB1dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JvdXAyXCIpLnZhbHVlLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgYWxlcnQoXCJEbyBOb3QgbGVhdmUgZ3JvdXAgbmFtZSBlbXB0eVwiKVxuICAgIH1lbHNle1xuICAgICAgICBnZXRHcm91cCgpXG4gICAgICAgIGNvbnN0IGJ1YmJsZTEgPSBpbnB1dEJ0bi5wYXJlbnROb2RlXG4gICAgICAgIGJ1YmJsZTEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiICAgIC8vUmVtb3ZpbmcgdGV4dCBib3hcbiAgICAgICAgVG9Eb0NvbnRhaW5lci5pbnNlcnRCZWZvcmUodG9Eb0Jsb2NrKCksIFRvRG9Db250YWluZXIubGFzdEVsZW1lbnRDaGlsZClcbiAgICB9XG4gICAgXG4gICAgfSlcblxuICAgIHJldHVybiBpbnB1dEJ0blxufVxuXG4vL0dyb3VwXG5cbmNvbnN0IG5ld0lucHV0ID0gKCkgPT57XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICByZXR1cm4gaW5wdXRcbn1cblxuY29uc3QgbWFrZUlucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0MSA9IG5ld0lucHV0KClcbiAgICBpbnB1dDEuc2V0QXR0cmlidXRlKFwidHlwZVwiLCAndGV4dCcpXG4gICAgaW5wdXQxLmlkID0gJ3Rhc2sxJ1xuICAgIGlucHV0MS5jbGFzc0xpc3QuYWRkKFwidGFza0JveFwiKVxuICAgIGlucHV0MS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCAnKyBOZXcnKVxuICAgXG4gICAgaW5wdXQxLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG4gICBcbiAgICByZXR1cm4gaW5wdXQxXG59XG5cbmNvbnN0IGdldFRhc2sgPSAoKSA9PiB7XG4gICAgbmV3VGFzay50YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrMVwiKS52YWx1ZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUxJykucmVzZXQoKVxuICAgcmV0dXJuIG5ld1Rhc2sudGFza1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFzaygpICB7XG4gICAgXG4gICAgY29uc3QgdGFza0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICBzcGFuLnRleHRDb250ZW50ID0gbmV3VGFzay50YXNrO1xuICAgIHRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKHNwYW4pXG4gICAgdGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbi5jcmVhdGUoKSlcbiAgICByZXR1cm4gdGFza0Rpc3BsYXlcbn1cblxuXG5cbmNvbnN0IHN1Ym1pdFRhc2sgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgaW5wdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgaW5wdXRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1bWJpdFwiKVxuICAgIGlucHV0QnRuLmNsYXNzTGlzdC5hZGQoXCJpbnB1dEJ0blwiKVxuICAgIFxuICAgIGlucHV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrMVwiKS52YWx1ZS5sZW5ndGggPT0gMCl7XG4gICAgICAgIGFsZXJ0KFwiRG8gbm90IGxlYXZlIHRhc2sgZW1wdHlcIilcbiAgICB9ZWxzZXtcbiAgICAgICAgZ2V0VGFzaygpXG4gICAgICAgIGNyZWF0ZUxpc3QoKS5hcHBlbmRDaGlsZChkaXNwbGF5VGFzaygpKVxuICAgIH0gXG4gICAgXG4gICAgfSlcblxuICAgIHJldHVybiBpbnB1dEJ0blxufVxuXG5mdW5jdGlvbiBjcmVhdGVMaXN0ICgpIHtcbiAgICBcbiAgICBcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCBsaSA9IGJ1dHRvbi5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBsaTIgPSBsaS5wYXJlbnROb2RlO1xuICAgICAgICBpZiAoYnV0dG9uLnRleHRDb250ZW50ID09PSAnLi4uJyl7XG4gICAgICAgICAgICBpZihsaS5jaGlsZEVsZW1lbnRDb3VudCA8IDIpe1xuICAgICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHBvcE91dE1lbnUoKSkgICAgICAgIC8vTWFraW5nIHN1cmUgb25seSBvbmUgbWVudSBpcyBhcHBlbmRlZFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG59KVxuXG4gICAgcmV0dXJuIGxpc3RcblxufVxuXG5jb25zdCBpbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG4gICAgZm9ybTEuY2xhc3NMaXN0LmFkZChcInJlbW92ZTFcIilcbiAgIFxuICAgIGZvcm0xLmFwcGVuZENoaWxkKG1ha2VJbnB1dCgpKVxuICAgIGZvcm0xLmFwcGVuZENoaWxkKHN1Ym1pdFRhc2soKSlcbiAgICBmb3JtMS5hcHBlbmRDaGlsZChjcmVhdGVMaXN0KCkpXG4gICAgXG4gICAgcmV0dXJuIGZvcm0xXG59XG5cblxuLy9DcmVhdGUgZ3JvdXBcblxuY29uc3QgdG9Eb0Jsb2NrID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGg1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpXG4gICAgaDUuY2xhc3NMaXN0LmFkZCgnZ3JvdXAyQ29sb3InKVxuICAgIGg1LnRleHRDb250ZW50ID0gZ3JvdXBOYW1lVmFyMlxuICAgIGJsb2NrLmFwcGVuZENoaWxkKGg1KVxuICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoXCJ0b0RvQmxvY2tcIilcbiAgICBibG9jay5hcHBlbmRDaGlsZChpbnB1dCgpKVxuICAgIHJldHVybiBibG9ja1xufVxuXG5cbi8vQ3JlYXRlIGdyb3VwXG5cbmNvbnN0IG1lbnVCdXR0b24gPSAoKCkgPT4ge1xuICAgXG4gICBjb25zdCBjcmVhdGUgPSAoKSA9PntcbiAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwibWVudUJ0blwiKVxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpXG4gICAgcC50ZXh0Q29udGVudCA9IFwiLi4uXCJcbiAgICBtZW51QnRuLmFwcGVuZENoaWxkKHApXG4gICAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpXG4gICAgcmV0dXJuIG1lbnVCdG5cbiAgIH1cbiAgICByZXR1cm4ge2NyZWF0ZX1cbn0pKClcblxuXG5cbmNvbnN0IGRlbGV0ZVRhYiA9ICgpID0+IHtcbiAgICBjb25zdCBkZWxldGVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZGVsZXRlVGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIilcbiAgICBjb25zdCBNZW51VGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgTWVudVRpdGxlMS50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCJcbiAgICBjb25zdCBpbWdUcmFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBpbWdUcmFzaC5jbGFzc0xpc3QuYWRkKFwiSWNvbmltZ1wiKVxuICAgIGltZ1RyYXNoLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9nYXJiYWdlLnBuZ1wiXG4gICAgZGVsZXRlVGFiLmFwcGVuZENoaWxkKE1lbnVUaXRsZTEpXG4gICAgTWVudVRpdGxlMS5wcmVwZW5kKGltZ1RyYXNoKSBcbiAgICBcbiAgICByZXR1cm4gZGVsZXRlVGFiXG59XG5cbmNvbnN0IHJlbmFtZVRhYiA9ICgpID0+IHtcbiAgICBjb25zdCByZW5hbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgcmVuYW1lVGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIilcbiAgICBjb25zdCBNZW51VGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgTWVudVRpdGxlMi50ZXh0Q29udGVudCA9IFwiUmVuYW1lXCJcbiAgICBjb25zdCBpbWdSZW5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgaW1nUmVuYW1lLmNsYXNzTGlzdC5hZGQoXCJJY29uaW1nXCIpXG4gICAgaW1nUmVuYW1lLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9lZGl0LnBuZ1wiXG4gICAgcmVuYW1lVGFiLmFwcGVuZENoaWxkKE1lbnVUaXRsZTIpXG4gICAgTWVudVRpdGxlMi5wcmVwZW5kKGltZ1JlbmFtZSlcbiAgICByZXR1cm4gcmVuYW1lVGFiXG59XG5cbmNvbnN0IHNhdmVUYWIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBzYXZlVGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIilcbiAgICBjb25zdCBNZW51VGl0bGUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgTWVudVRpdGxlMy50ZXh0Q29udGVudCA9IFwiU2F2ZVwiXG4gICAgY29uc3QgaW1nU2F2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBpbWdTYXZlLmNsYXNzTGlzdC5hZGQoXCJJY29uaW1nXCIpXG4gICAgaW1nU2F2ZS5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvc2F2ZS5wbmdcIlxuICAgIHNhdmVUYWIuYXBwZW5kQ2hpbGQoTWVudVRpdGxlMylcbiAgICBNZW51VGl0bGUzLnByZXBlbmQoaW1nU2F2ZSlcbiAgICByZXR1cm4gc2F2ZVRhYlxufVxuXG5jb25zdCBwb3BPdXRNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvcE91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBwb3BPdXQuY2xhc3NMaXN0LmFkZChcInBvcFdpbmRvd1wiKVxuICAgXG4gICAgXG4gICAgcG9wT3V0LmFwcGVuZENoaWxkKGRlbGV0ZVRhYigpKVxuICAgIHBvcE91dC5hcHBlbmRDaGlsZChyZW5hbWVUYWIoKSlcbiAgICBcbiAgICBwb3BPdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCBidWJibGUxID0gYnV0dG9uLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IGJ1YmJsZTIgPSBidWJibGUxLnBhcmVudE5vZGVcbiAgICAgICAgY29uc3QgYnViYmxlMyA9IGJ1YmJsZTIucGFyZW50Tm9kZVxuICAgICAgICBjb25zdCBidWJibGU0ID0gYnViYmxlMy5wYXJlbnROb2RlXG4gICAgICAgIGNvbnN0IGJ1YmJsZTUgPSBidWJibGU0LnBhcmVudE5vZGVcbiAgICAgICAgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gJ0RlbGV0ZScpe1xuICAgICAgICAgICAgYnViYmxlNS5yZW1vdmVDaGlsZChidWJibGU0KVxuICAgICAgICB9ZWxzZSBpZihidXR0b24udGV4dENvbnRlbnQgPT09ICdSZW5hbWUnKXtcbiAgICAgICAgICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkgeyAgICAvL1ByZXZlbnRpbmcgdXNlciBmcm9tIHVzaW5nICdFbnRlcicgYWZ0ZXIgcHJlc3NpbmcgZWRpdFxuICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBidWJibGU0LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgIGJ1YmJsZTQuaW5zZXJ0QmVmb3JlKGlucHV0LCBzcGFuKTtcbiAgICAgICAgICAgIGJ1YmJsZTQucmVtb3ZlQ2hpbGQoc3Bhbik7IFxuICAgICAgICAgICAgcG9wT3V0LnJlbW92ZUNoaWxkKHBvcE91dC5jaGlsZE5vZGVzWzFdKVxuICAgICAgICAgICAgcG9wT3V0LmFwcGVuZENoaWxkKHNhdmVUYWIoKSlcbiAgICAgICAgfWVsc2UgaWYoYnV0dG9uLnRleHRDb250ZW50ID09PSAnU2F2ZScpe1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBidWJibGU0LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGJ1YmJsZTQuaW5zZXJ0QmVmb3JlKHNwYW4sIGlucHV0KTtcbiAgICAgICAgICAgIGJ1YmJsZTQucmVtb3ZlQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1JlbmFtZSc7XG4gICAgICAgICAgICBidWJibGUzLnJlbW92ZUNoaWxkKGJ1YmJsZTMuY2hpbGROb2Rlc1sxXSkgIC8vIHJlbW92ZSBwb3BvdXQgb25jZWQgc2F2ZWRcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH0pXG4gICAgXG4gICAgcmV0dXJuIHBvcE91dFxufVxuXG5cblxuZXhwb3J0ICB7Z3JvdXBJbnB1dDJ9IiwiXG5pbXBvcnQge1RvRG9Db250YWluZXJ9IGZyb20gXCIuL2dyb3VwMVwiXG5cbmxldCBncm91cE5hbWVWYXIzID0gXCJcIlxuXG5mdW5jdGlvbiBUYXNrICh0YXNrKXtcbiAgICB0aGlzLnRhc2sgPSB0YXNrXG59XG5cbmxldCBuZXdUYXNrID0gbmV3IFRhc2soKVxubGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcblxuXG4vLyBHcm91cFxuXG5jb25zdCBncm91cE5hbWUgPSAoKT0+e1xuICAgIGNvbnN0IGdyb3VwSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBncm91cElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICBncm91cElucHV0LmlkID0gJ2dyb3VwMydcbiAgICBncm91cElucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsICdOZXcgZ3JvdXAnKVxuICAgIFxuICAgIFxuICAgIGdyb3VwSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcblxuICAgIHJldHVybiBncm91cElucHV0XG59XG5cbmNvbnN0IGdldEdyb3VwID0gKCkgPT4ge1xuICAgIGdyb3VwTmFtZVZhcjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JvdXAzJykudmFsdWVcbiAgICByZXR1cm4gZ3JvdXBOYW1lVmFyM1xufVxuXG5jb25zdCBncm91cElucHV0MyA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG4gICAgXG4gICAgZm9ybTEuY2xhc3NMaXN0LmFkZChcImZvcm1Hcm91cFwiKVxuXG4gICAgZm9ybTEuYXBwZW5kQ2hpbGQoZ3JvdXBOYW1lKCkpXG4gICAgZm9ybTEuYXBwZW5kQ2hpbGQoc3VibWl0R3JvdXAoKSlcbiAgICBcbiAgICByZXR1cm4gZm9ybTFcbn1cblxuY29uc3Qgc3VibWl0R3JvdXAgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgaW5wdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgaW5wdXRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1bWJpdFwiKVxuICAgIGlucHV0QnRuLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXRHcm91cEJ0blwiKVxuICAgIGlucHV0QnRuLnRleHRDb250ZW50ID0gXCJEb25lXCJcblxuICAgIGlucHV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm91cDNcIikudmFsdWUubGVuZ3RoID09IDApe1xuICAgICAgICBhbGVydChcIkRvIE5vdCBsZWF2ZSBncm91cCBuYW1lIGVtcHR5XCIpXG4gICAgfWVsc2V7XG4gICAgICAgIGdldEdyb3VwKClcbiAgICAgICAgY29uc3QgYnViYmxlMSA9IGlucHV0QnRuLnBhcmVudE5vZGVcbiAgICAgICAgYnViYmxlMS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIgICAgLy9SZW1vdmluZyB0ZXh0IGJveFxuICAgICAgICBUb0RvQ29udGFpbmVyLmluc2VydEJlZm9yZSh0b0RvQmxvY2szKCksIFRvRG9Db250YWluZXIubGFzdEVsZW1lbnRDaGlsZClcbiAgICB9XG4gICAgXG4gICAgfSlcblxuICAgIHJldHVybiBpbnB1dEJ0blxufVxuXG4vL0dyb3VwXG5cbmNvbnN0IG5ld0lucHV0ID0gKCkgPT57XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICByZXR1cm4gaW5wdXRcbn1cblxuY29uc3QgbWFrZUlucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0MSA9IG5ld0lucHV0KClcbiAgICBpbnB1dDEuc2V0QXR0cmlidXRlKFwidHlwZVwiLCAndGV4dCcpXG4gICAgaW5wdXQxLmlkID0gJ3Rhc2syJ1xuICAgIGlucHV0MS5jbGFzc0xpc3QuYWRkKFwidGFza0JveFwiKVxuICAgIGlucHV0MS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCAnKyBOZXcnKVxuICAgXG4gICAgaW5wdXQxLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG4gICBcbiAgICByZXR1cm4gaW5wdXQxXG59XG5cbmNvbnN0IGdldFRhc2sgPSAoKSA9PiB7XG4gICAgbmV3VGFzay50YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrMlwiKS52YWx1ZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUyJykucmVzZXQoKVxuICAgcmV0dXJuIG5ld1Rhc2sudGFza1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFzaygpICB7XG4gICAgXG4gICAgY29uc3QgdGFza0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICBzcGFuLnRleHRDb250ZW50ID0gbmV3VGFzay50YXNrO1xuICAgIHRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKHNwYW4pXG4gICAgdGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbi5jcmVhdGUoKSlcbiAgICByZXR1cm4gdGFza0Rpc3BsYXlcbn1cblxuXG5cbmNvbnN0IHN1Ym1pdFRhc2sgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgaW5wdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgaW5wdXRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1bWJpdFwiKVxuICAgIGlucHV0QnRuLmNsYXNzTGlzdC5hZGQoXCJpbnB1dEJ0blwiKVxuICAgIFxuICAgIGlucHV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrMlwiKS52YWx1ZS5sZW5ndGggPT0gMCl7XG4gICAgICAgIGFsZXJ0KFwiRG8gbm90IGxlYXZlIHRhc2sgZW1wdHlcIilcbiAgICB9ZWxzZXtcbiAgICAgICAgZ2V0VGFzaygpXG4gICAgICAgIGNyZWF0ZUxpc3QoKS5hcHBlbmRDaGlsZChkaXNwbGF5VGFzaygpKVxuICAgIH0gXG4gICAgXG4gICAgfSlcblxuICAgIHJldHVybiBpbnB1dEJ0blxufVxuXG5mdW5jdGlvbiBjcmVhdGVMaXN0ICgpIHtcbiAgICBcbiAgICBcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCBsaSA9IGJ1dHRvbi5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBsaTIgPSBsaS5wYXJlbnROb2RlO1xuICAgICAgICBpZiAoYnV0dG9uLnRleHRDb250ZW50ID09PSAnLi4uJyl7XG4gICAgICAgICAgICBpZihsaS5jaGlsZEVsZW1lbnRDb3VudCA8IDIpe1xuICAgICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHBvcE91dE1lbnUoKSkgICAgICAgIC8vTWFraW5nIHN1cmUgb25seSBvbmUgbWVudSBpcyBhcHBlbmRlZFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG59KVxuXG4gICAgcmV0dXJuIGxpc3RcblxufVxuXG5jb25zdCBpbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG4gICAgZm9ybTMuY2xhc3NMaXN0LmFkZChcInJlbW92ZTJcIilcbiAgIFxuICAgIGZvcm0zLmFwcGVuZENoaWxkKG1ha2VJbnB1dCgpKVxuICAgIGZvcm0zLmFwcGVuZENoaWxkKHN1Ym1pdFRhc2soKSlcbiAgICBmb3JtMy5hcHBlbmRDaGlsZChjcmVhdGVMaXN0KCkpXG4gICAgXG4gICAgcmV0dXJuIGZvcm0zXG59XG5cblxuLy9DcmVhdGUgZ3JvdXBcblxuY29uc3QgdG9Eb0Jsb2NrMyA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBoNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKVxuICAgIGg1LmNsYXNzTGlzdC5hZGQoJ2dyb3VwM0NvbG9yJylcbiAgICBoNS50ZXh0Q29udGVudCA9IGdyb3VwTmFtZVZhcjNcbiAgICBibG9jay5hcHBlbmRDaGlsZChoNSlcbiAgICBibG9jay5jbGFzc0xpc3QuYWRkKFwidG9Eb0Jsb2NrXCIpXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoaW5wdXQoKSlcbiAgICByZXR1cm4gYmxvY2tcbn1cblxuXG4vL0NyZWF0ZSBncm91cFxuXG5jb25zdCBtZW51QnV0dG9uID0gKCgpID0+IHtcbiAgIFxuICAgY29uc3QgY3JlYXRlID0gKCkgPT57XG4gICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcIm1lbnVCdG5cIilcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKVxuICAgIHAudGV4dENvbnRlbnQgPSBcIi4uLlwiXG4gICAgbWVudUJ0bi5hcHBlbmRDaGlsZChwKVxuICAgIG1lbnVCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKVxuICAgIHJldHVybiBtZW51QnRuXG4gICB9XG4gICAgcmV0dXJuIHtjcmVhdGV9XG59KSgpXG5cblxuXG5jb25zdCBkZWxldGVUYWIgPSAoKSA9PiB7XG4gICAgY29uc3QgZGVsZXRlVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGRlbGV0ZVRhYi5jbGFzc0xpc3QuYWRkKFwidGFiXCIpXG4gICAgY29uc3QgTWVudVRpdGxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgIE1lbnVUaXRsZTEudGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiXG4gICAgY29uc3QgaW1nVHJhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgaW1nVHJhc2guY2xhc3NMaXN0LmFkZChcIkljb25pbWdcIilcbiAgICBpbWdUcmFzaC5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvZ2FyYmFnZS5wbmdcIlxuICAgIGRlbGV0ZVRhYi5hcHBlbmRDaGlsZChNZW51VGl0bGUxKVxuICAgIE1lbnVUaXRsZTEucHJlcGVuZChpbWdUcmFzaCkgXG4gICAgXG4gICAgcmV0dXJuIGRlbGV0ZVRhYlxufVxuXG5jb25zdCByZW5hbWVUYWIgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVuYW1lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHJlbmFtZVRhYi5jbGFzc0xpc3QuYWRkKFwidGFiXCIpXG4gICAgY29uc3QgTWVudVRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgIE1lbnVUaXRsZTIudGV4dENvbnRlbnQgPSBcIlJlbmFtZVwiXG4gICAgY29uc3QgaW1nUmVuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGltZ1JlbmFtZS5jbGFzc0xpc3QuYWRkKFwiSWNvbmltZ1wiKVxuICAgIGltZ1JlbmFtZS5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvZWRpdC5wbmdcIlxuICAgIHJlbmFtZVRhYi5hcHBlbmRDaGlsZChNZW51VGl0bGUyKVxuICAgIE1lbnVUaXRsZTIucHJlcGVuZChpbWdSZW5hbWUpXG4gICAgcmV0dXJuIHJlbmFtZVRhYlxufVxuXG5jb25zdCBzYXZlVGFiID0gKCkgPT4ge1xuICAgIGNvbnN0IHNhdmVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgc2F2ZVRhYi5jbGFzc0xpc3QuYWRkKFwidGFiXCIpXG4gICAgY29uc3QgTWVudVRpdGxlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgIE1lbnVUaXRsZTMudGV4dENvbnRlbnQgPSBcIlNhdmVcIlxuICAgIGNvbnN0IGltZ1NhdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgaW1nU2F2ZS5jbGFzc0xpc3QuYWRkKFwiSWNvbmltZ1wiKVxuICAgIGltZ1NhdmUuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL3NhdmUucG5nXCJcbiAgICBzYXZlVGFiLmFwcGVuZENoaWxkKE1lbnVUaXRsZTMpXG4gICAgTWVudVRpdGxlMy5wcmVwZW5kKGltZ1NhdmUpXG4gICAgcmV0dXJuIHNhdmVUYWJcbn1cblxuY29uc3QgcG9wT3V0TWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBwb3BPdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgcG9wT3V0LmNsYXNzTGlzdC5hZGQoXCJwb3BXaW5kb3dcIilcbiAgIFxuICAgIFxuICAgIHBvcE91dC5hcHBlbmRDaGlsZChkZWxldGVUYWIoKSlcbiAgICBwb3BPdXQuYXBwZW5kQ2hpbGQocmVuYW1lVGFiKCkpXG4gICAgXG4gICAgcG9wT3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSBlLnRhcmdldDtcbiAgICAgICAgY29uc3QgYnViYmxlMSA9IGJ1dHRvbi5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBidWJibGUyID0gYnViYmxlMS5wYXJlbnROb2RlXG4gICAgICAgIGNvbnN0IGJ1YmJsZTMgPSBidWJibGUyLnBhcmVudE5vZGVcbiAgICAgICAgY29uc3QgYnViYmxlNCA9IGJ1YmJsZTMucGFyZW50Tm9kZVxuICAgICAgICBjb25zdCBidWJibGU1ID0gYnViYmxlNC5wYXJlbnROb2RlXG4gICAgICAgIGlmIChidXR0b24udGV4dENvbnRlbnQgPT09ICdEZWxldGUnKXtcbiAgICAgICAgICAgIGJ1YmJsZTUucmVtb3ZlQ2hpbGQoYnViYmxlNClcbiAgICAgICAgfWVsc2UgaWYoYnV0dG9uLnRleHRDb250ZW50ID09PSAnUmVuYW1lJyl7XG4gICAgICAgICAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHsgICAgLy9QcmV2ZW50aW5nIHVzZXIgZnJvbSB1c2luZyAnRW50ZXInIGFmdGVyIHByZXNzaW5nIGVkaXRcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBzcGFuID0gYnViYmxlNC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICBidWJibGU0Lmluc2VydEJlZm9yZShpbnB1dCwgc3Bhbik7XG4gICAgICAgICAgICBidWJibGU0LnJlbW92ZUNoaWxkKHNwYW4pOyBcbiAgICAgICAgICAgIHBvcE91dC5yZW1vdmVDaGlsZChwb3BPdXQuY2hpbGROb2Rlc1sxXSlcbiAgICAgICAgICAgIHBvcE91dC5hcHBlbmRDaGlsZChzYXZlVGFiKCkpXG4gICAgICAgIH1lbHNlIGlmKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gJ1NhdmUnKXtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gYnViYmxlNC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICBidWJibGU0Lmluc2VydEJlZm9yZShzcGFuLCBpbnB1dCk7XG4gICAgICAgICAgICBidWJibGU0LnJlbW92ZUNoaWxkKGlucHV0KTtcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdSZW5hbWUnO1xuICAgICAgICAgICAgYnViYmxlMy5yZW1vdmVDaGlsZChidWJibGUzLmNoaWxkTm9kZXNbMV0pICAvLyByZW1vdmUgcG9wb3V0IG9uY2VkIHNhdmVkXG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9KVxuICAgIFxuICAgIHJldHVybiBwb3BPdXRcbn1cblxuXG5cbmV4cG9ydCAge2dyb3VwSW5wdXQzfSIsIlxuaW1wb3J0IHtUb0RvQ29udGFpbmVyfSBmcm9tIFwiLi9ncm91cDFcIlxuXG5sZXQgZ3JvdXBOYW1lVmFyNCA9IFwiXCJcblxuZnVuY3Rpb24gVGFzayAodGFzayl7XG4gICAgdGhpcy50YXNrID0gdGFza1xufVxuXG5sZXQgbmV3VGFzayA9IG5ldyBUYXNrKClcbmxldCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXG5cblxuLy8gR3JvdXBcblxuY29uc3QgZ3JvdXBOYW1lID0gKCk9PntcbiAgICBjb25zdCBncm91cElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgZ3JvdXBJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgZ3JvdXBJbnB1dC5pZCA9ICdncm91cDQnXG4gICAgZ3JvdXBJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCAnTmV3IGdyb3VwJylcbiAgICBcbiAgICBcbiAgICBncm91cElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gZ3JvdXBJbnB1dFxufVxuXG5jb25zdCBnZXRHcm91cCA9ICgpID0+IHtcbiAgICBncm91cE5hbWVWYXI0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyb3VwNCcpLnZhbHVlXG4gICAgcmV0dXJuIGdyb3VwTmFtZVZhcjRcbn1cblxuY29uc3QgZ3JvdXBJbnB1dDQgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuICAgIFxuICAgIGZvcm0xLmNsYXNzTGlzdC5hZGQoXCJmb3JtR3JvdXBcIilcblxuICAgIGZvcm0xLmFwcGVuZENoaWxkKGdyb3VwTmFtZSgpKVxuICAgIGZvcm0xLmFwcGVuZENoaWxkKHN1Ym1pdEdyb3VwKCkpXG4gICAgXG4gICAgcmV0dXJuIGZvcm0xXG59XG5cbmNvbnN0IHN1Ym1pdEdyb3VwID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGlucHV0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGlucHV0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdW1iaXRcIilcbiAgICBpbnB1dEJ0bi5jbGFzc0xpc3QuYWRkKFwic3VibWl0R3JvdXBCdG5cIilcbiAgICBpbnB1dEJ0bi50ZXh0Q29udGVudCA9IFwiRG9uZVwiXG5cbiAgICBpbnB1dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JvdXA0XCIpLnZhbHVlLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgYWxlcnQoXCJEbyBOb3QgbGVhdmUgZ3JvdXAgbmFtZSBlbXB0eVwiKVxuICAgIH1lbHNle1xuICAgICAgICBnZXRHcm91cCgpXG4gICAgICAgIGNvbnN0IGJ1YmJsZTEgPSBpbnB1dEJ0bi5wYXJlbnROb2RlXG4gICAgICAgIGJ1YmJsZTEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiICAgIC8vUmVtb3ZpbmcgdGV4dCBib3hcbiAgICAgICAgVG9Eb0NvbnRhaW5lci5pbnNlcnRCZWZvcmUodG9Eb0Jsb2NrNCgpLCBUb0RvQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpXG4gICAgfVxuICAgIFxuICAgIH0pXG5cbiAgICByZXR1cm4gaW5wdXRCdG5cbn1cblxuLy9Hcm91cFxuXG5jb25zdCBuZXdJbnB1dCA9ICgpID0+e1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgcmV0dXJuIGlucHV0XG59XG5cbmNvbnN0IG1ha2VJbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dDEgPSBuZXdJbnB1dCgpXG4gICAgaW5wdXQxLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgJ3RleHQnKVxuICAgIGlucHV0MS5pZCA9ICd0YXNrMydcbiAgICBpbnB1dDEuY2xhc3NMaXN0LmFkZChcInRhc2tCb3hcIilcbiAgICBpbnB1dDEuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgJysgTmV3JylcbiAgIFxuICAgIGlucHV0MS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KVxuICAgXG4gICAgcmV0dXJuIGlucHV0MVxufVxuXG5jb25zdCBnZXRUYXNrID0gKCkgPT4ge1xuICAgIG5ld1Rhc2sudGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzazNcIikudmFsdWVcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlMycpLnJlc2V0KClcbiAgIHJldHVybiBuZXdUYXNrLnRhc2tcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2soKSAge1xuICAgIFxuICAgIGNvbnN0IHRhc2tEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IG5ld1Rhc2sudGFzaztcbiAgICB0YXNrRGlzcGxheS5hcHBlbmRDaGlsZChzcGFuKVxuICAgIHRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKG1lbnVCdXR0b24uY3JlYXRlKCkpXG4gICAgcmV0dXJuIHRhc2tEaXNwbGF5XG59XG5cblxuXG5jb25zdCBzdWJtaXRUYXNrID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGlucHV0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGlucHV0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdW1iaXRcIilcbiAgICBpbnB1dEJ0bi5jbGFzc0xpc3QuYWRkKFwiaW5wdXRCdG5cIilcbiAgICBcbiAgICBpbnB1dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzazNcIikudmFsdWUubGVuZ3RoID09IDApe1xuICAgICAgICBhbGVydChcIkRvIG5vdCBsZWF2ZSB0YXNrIGVtcHR5XCIpXG4gICAgfWVsc2V7XG4gICAgICAgIGdldFRhc2soKVxuICAgICAgICBjcmVhdGVMaXN0KCkuYXBwZW5kQ2hpbGQoZGlzcGxheVRhc2soKSlcbiAgICB9IFxuICAgIFxuICAgIH0pXG5cbiAgICByZXR1cm4gaW5wdXRCdG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlzdCAoKSB7XG4gICAgXG4gICAgXG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICBjb25zdCBidXR0b24gPSBlLnRhcmdldDtcbiAgICAgICAgY29uc3QgbGkgPSBidXR0b24ucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgbGkyID0gbGkucGFyZW50Tm9kZTtcbiAgICAgICAgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gJy4uLicpe1xuICAgICAgICAgICAgaWYobGkuY2hpbGRFbGVtZW50Q291bnQgPCAyKXtcbiAgICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChwb3BPdXRNZW51KCkpICAgICAgICAvL01ha2luZyBzdXJlIG9ubHkgb25lIG1lbnUgaXMgYXBwZW5kZWRcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxufSlcblxuICAgIHJldHVybiBsaXN0XG5cbn1cblxuY29uc3QgaW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuICAgIGZvcm00LmNsYXNzTGlzdC5hZGQoXCJyZW1vdmUzXCIpXG4gICBcbiAgICBmb3JtNC5hcHBlbmRDaGlsZChtYWtlSW5wdXQoKSlcbiAgICBmb3JtNC5hcHBlbmRDaGlsZChzdWJtaXRUYXNrKCkpXG4gICAgZm9ybTQuYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdCgpKVxuICAgIFxuICAgIHJldHVybiBmb3JtNFxufVxuXG5cbi8vQ3JlYXRlIGdyb3VwXG5cbmNvbnN0IHRvRG9CbG9jazQgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgaDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIilcbiAgICBoNS5jbGFzc0xpc3QuYWRkKCdncm91cDRDb2xvcicpXG4gICAgaDUudGV4dENvbnRlbnQgPSBncm91cE5hbWVWYXI0XG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoaDUpXG4gICAgYmxvY2suY2xhc3NMaXN0LmFkZChcInRvRG9CbG9ja1wiKVxuICAgIGJsb2NrLmFwcGVuZENoaWxkKGlucHV0KCkpXG4gICAgcmV0dXJuIGJsb2NrXG59XG5cblxuLy9DcmVhdGUgZ3JvdXBcblxuY29uc3QgbWVudUJ1dHRvbiA9ICgoKSA9PiB7XG4gICBcbiAgIGNvbnN0IGNyZWF0ZSA9ICgpID0+e1xuICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJtZW51QnRuXCIpXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2JylcbiAgICBwLnRleHRDb250ZW50ID0gXCIuLi5cIlxuICAgIG1lbnVCdG4uYXBwZW5kQ2hpbGQocClcbiAgICBtZW51QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIilcbiAgICByZXR1cm4gbWVudUJ0blxuICAgfVxuICAgIHJldHVybiB7Y3JlYXRlfVxufSkoKVxuXG5cblxuY29uc3QgZGVsZXRlVGFiID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlbGV0ZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBkZWxldGVUYWIuY2xhc3NMaXN0LmFkZChcInRhYlwiKVxuICAgIGNvbnN0IE1lbnVUaXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgICBNZW51VGl0bGUxLnRleHRDb250ZW50ID0gXCJEZWxldGVcIlxuICAgIGNvbnN0IGltZ1RyYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGltZ1RyYXNoLmNsYXNzTGlzdC5hZGQoXCJJY29uaW1nXCIpXG4gICAgaW1nVHJhc2guc3JjID0gXCIuLi9zcmMvaW1hZ2VzL2dhcmJhZ2UucG5nXCJcbiAgICBkZWxldGVUYWIuYXBwZW5kQ2hpbGQoTWVudVRpdGxlMSlcbiAgICBNZW51VGl0bGUxLnByZXBlbmQoaW1nVHJhc2gpIFxuICAgIFxuICAgIHJldHVybiBkZWxldGVUYWJcbn1cblxuY29uc3QgcmVuYW1lVGFiID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlbmFtZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICByZW5hbWVUYWIuY2xhc3NMaXN0LmFkZChcInRhYlwiKVxuICAgIGNvbnN0IE1lbnVUaXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgICBNZW51VGl0bGUyLnRleHRDb250ZW50ID0gXCJSZW5hbWVcIlxuICAgIGNvbnN0IGltZ1JlbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBpbWdSZW5hbWUuY2xhc3NMaXN0LmFkZChcIkljb25pbWdcIilcbiAgICBpbWdSZW5hbWUuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL2VkaXQucG5nXCJcbiAgICByZW5hbWVUYWIuYXBwZW5kQ2hpbGQoTWVudVRpdGxlMilcbiAgICBNZW51VGl0bGUyLnByZXBlbmQoaW1nUmVuYW1lKVxuICAgIHJldHVybiByZW5hbWVUYWJcbn1cblxuY29uc3Qgc2F2ZVRhYiA9ICgpID0+IHtcbiAgICBjb25zdCBzYXZlVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHNhdmVUYWIuY2xhc3NMaXN0LmFkZChcInRhYlwiKVxuICAgIGNvbnN0IE1lbnVUaXRsZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgICBNZW51VGl0bGUzLnRleHRDb250ZW50ID0gXCJTYXZlXCJcbiAgICBjb25zdCBpbWdTYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGltZ1NhdmUuY2xhc3NMaXN0LmFkZChcIkljb25pbWdcIilcbiAgICBpbWdTYXZlLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9zYXZlLnBuZ1wiXG4gICAgc2F2ZVRhYi5hcHBlbmRDaGlsZChNZW51VGl0bGUzKVxuICAgIE1lbnVUaXRsZTMucHJlcGVuZChpbWdTYXZlKVxuICAgIHJldHVybiBzYXZlVGFiXG59XG5cbmNvbnN0IHBvcE91dE1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9wT3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHBvcE91dC5jbGFzc0xpc3QuYWRkKFwicG9wV2luZG93XCIpXG4gICBcbiAgICBcbiAgICBwb3BPdXQuYXBwZW5kQ2hpbGQoZGVsZXRlVGFiKCkpXG4gICAgcG9wT3V0LmFwcGVuZENoaWxkKHJlbmFtZVRhYigpKVxuICAgIFxuICAgIHBvcE91dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZS50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGJ1YmJsZTEgPSBidXR0b24ucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgYnViYmxlMiA9IGJ1YmJsZTEucGFyZW50Tm9kZVxuICAgICAgICBjb25zdCBidWJibGUzID0gYnViYmxlMi5wYXJlbnROb2RlXG4gICAgICAgIGNvbnN0IGJ1YmJsZTQgPSBidWJibGUzLnBhcmVudE5vZGVcbiAgICAgICAgY29uc3QgYnViYmxlNSA9IGJ1YmJsZTQucGFyZW50Tm9kZVxuICAgICAgICBpZiAoYnV0dG9uLnRleHRDb250ZW50ID09PSAnRGVsZXRlJyl7XG4gICAgICAgICAgICBidWJibGU1LnJlbW92ZUNoaWxkKGJ1YmJsZTQpXG4gICAgICAgIH1lbHNlIGlmKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gJ1JlbmFtZScpe1xuICAgICAgICAgICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7ICAgIC8vUHJldmVudGluZyB1c2VyIGZyb20gdXNpbmcgJ0VudGVyJyBhZnRlciBwcmVzc2luZyBlZGl0XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pOyAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGJ1YmJsZTQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgYnViYmxlNC5pbnNlcnRCZWZvcmUoaW5wdXQsIHNwYW4pO1xuICAgICAgICAgICAgYnViYmxlNC5yZW1vdmVDaGlsZChzcGFuKTsgXG4gICAgICAgICAgICBwb3BPdXQucmVtb3ZlQ2hpbGQocG9wT3V0LmNoaWxkTm9kZXNbMV0pXG4gICAgICAgICAgICBwb3BPdXQuYXBwZW5kQ2hpbGQoc2F2ZVRhYigpKVxuICAgICAgICB9ZWxzZSBpZihidXR0b24udGV4dENvbnRlbnQgPT09ICdTYXZlJyl7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGJ1YmJsZTQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgYnViYmxlNC5pbnNlcnRCZWZvcmUoc3BhbiwgaW5wdXQpO1xuICAgICAgICAgICAgYnViYmxlNC5yZW1vdmVDaGlsZChpbnB1dCk7XG4gICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnUmVuYW1lJztcbiAgICAgICAgICAgIGJ1YmJsZTMucmVtb3ZlQ2hpbGQoYnViYmxlMy5jaGlsZE5vZGVzWzFdKSAgLy8gcmVtb3ZlIHBvcG91dCBvbmNlZCBzYXZlZFxuICAgICAgICB9XG4gICAgICAgXG4gICAgfSlcbiAgICBcbiAgICByZXR1cm4gcG9wT3V0XG59XG5cblxuXG5leHBvcnQgIHtncm91cElucHV0NH0iLCJcbmltcG9ydCB7VG9Eb0NvbnRhaW5lcn0gZnJvbSBcIi4vZ3JvdXAxXCJcblxubGV0IGdyb3VwTmFtZVZhcjUgPSBcIlwiXG5cbmZ1bmN0aW9uIFRhc2sgKHRhc2spe1xuICAgIHRoaXMudGFzayA9IHRhc2tcbn1cblxubGV0IG5ld1Rhc2sgPSBuZXcgVGFzaygpXG5sZXQgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuXG5cbi8vIEdyb3VwXG5cbmNvbnN0IGdyb3VwTmFtZSA9ICgpPT57XG4gICAgY29uc3QgZ3JvdXBJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGdyb3VwSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIGdyb3VwSW5wdXQuaWQgPSAnZ3JvdXA1J1xuICAgIGdyb3VwSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgJ05ldyBncm91cCcpXG4gICAgXG4gICAgXG4gICAgZ3JvdXBJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIGdyb3VwSW5wdXRcbn1cblxuY29uc3QgZ2V0R3JvdXAgPSAoKSA9PiB7XG4gICAgZ3JvdXBOYW1lVmFyNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncm91cDUnKS52YWx1ZVxuICAgIHJldHVybiBncm91cE5hbWVWYXI1XG59XG5cbmNvbnN0IGdyb3VwSW5wdXQ1ID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcbiAgICBcbiAgICBmb3JtMS5jbGFzc0xpc3QuYWRkKFwiZm9ybUdyb3VwXCIpXG5cbiAgICBmb3JtMS5hcHBlbmRDaGlsZChncm91cE5hbWUoKSlcbiAgICBmb3JtMS5hcHBlbmRDaGlsZChzdWJtaXRHcm91cCgpKVxuICAgIFxuICAgIHJldHVybiBmb3JtMVxufVxuXG5jb25zdCBzdWJtaXRHcm91cCA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBpbnB1dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBpbnB1dEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VtYml0XCIpXG4gICAgaW5wdXRCdG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdEdyb3VwQnRuXCIpXG4gICAgaW5wdXRCdG4udGV4dENvbnRlbnQgPSBcIkRvbmVcIlxuXG4gICAgaW5wdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb3VwNVwiKS52YWx1ZS5sZW5ndGggPT0gMCl7XG4gICAgICAgIGFsZXJ0KFwiRG8gTm90IGxlYXZlIGdyb3VwIG5hbWUgZW1wdHlcIilcbiAgICB9ZWxzZXtcbiAgICAgICAgZ2V0R3JvdXAoKVxuICAgICAgICBjb25zdCBidWJibGUxID0gaW5wdXRCdG4ucGFyZW50Tm9kZVxuICAgICAgICBidWJibGUxLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiAgICAvL1JlbW92aW5nIHRleHQgYm94XG4gICAgICAgIFRvRG9Db250YWluZXIuaW5zZXJ0QmVmb3JlKHRvRG9CbG9jazUoKSwgVG9Eb0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKVxuICAgIH1cbiAgICBcbiAgICB9KVxuXG4gICAgcmV0dXJuIGlucHV0QnRuXG59XG5cbi8vR3JvdXBcblxuY29uc3QgbmV3SW5wdXQgPSAoKSA9PntcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIHJldHVybiBpbnB1dFxufVxuXG5jb25zdCBtYWtlSW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXQxID0gbmV3SW5wdXQoKVxuICAgIGlucHV0MS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsICd0ZXh0JylcbiAgICBpbnB1dDEuaWQgPSAndGFzazQnXG4gICAgaW5wdXQxLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQm94XCIpXG4gICAgaW5wdXQxLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsICcrIE5ldycpXG4gICBcbiAgICBpbnB1dDEuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcbiAgIFxuICAgIHJldHVybiBpbnB1dDFcbn1cblxuY29uc3QgZ2V0VGFzayA9ICgpID0+IHtcbiAgICBuZXdUYXNrLnRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2s0XCIpLnZhbHVlXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZTQnKS5yZXNldCgpXG4gICByZXR1cm4gbmV3VGFzay50YXNrXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrKCkgIHtcbiAgICBcbiAgICBjb25zdCB0YXNrRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBuZXdUYXNrLnRhc2s7XG4gICAgdGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQoc3BhbilcbiAgICB0YXNrRGlzcGxheS5hcHBlbmRDaGlsZChtZW51QnV0dG9uLmNyZWF0ZSgpKVxuICAgIHJldHVybiB0YXNrRGlzcGxheVxufVxuXG5cblxuY29uc3Qgc3VibWl0VGFzayA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBpbnB1dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBpbnB1dEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VtYml0XCIpXG4gICAgaW5wdXRCdG4uY2xhc3NMaXN0LmFkZChcImlucHV0QnRuXCIpXG4gICAgXG4gICAgaW5wdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2s0XCIpLnZhbHVlLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgYWxlcnQoXCJEbyBub3QgbGVhdmUgdGFzayBlbXB0eVwiKVxuICAgIH1lbHNle1xuICAgICAgICBnZXRUYXNrKClcbiAgICAgICAgY3JlYXRlTGlzdCgpLmFwcGVuZENoaWxkKGRpc3BsYXlUYXNrKCkpXG4gICAgfSBcbiAgICBcbiAgICB9KVxuXG4gICAgcmV0dXJuIGlucHV0QnRuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3QgKCkge1xuICAgIFxuICAgIFxuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZS50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGxpID0gYnV0dG9uLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IGxpMiA9IGxpLnBhcmVudE5vZGU7XG4gICAgICAgIGlmIChidXR0b24udGV4dENvbnRlbnQgPT09ICcuLi4nKXtcbiAgICAgICAgICAgIGlmKGxpLmNoaWxkRWxlbWVudENvdW50IDwgMil7XG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQocG9wT3V0TWVudSgpKSAgICAgICAgLy9NYWtpbmcgc3VyZSBvbmx5IG9uZSBtZW51IGlzIGFwcGVuZGVkXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbn0pXG5cbiAgICByZXR1cm4gbGlzdFxuXG59XG5cbmNvbnN0IGlucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm01ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcbiAgICBmb3JtNS5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlNFwiKVxuICAgXG4gICAgZm9ybTUuYXBwZW5kQ2hpbGQobWFrZUlucHV0KCkpXG4gICAgZm9ybTUuYXBwZW5kQ2hpbGQoc3VibWl0VGFzaygpKVxuICAgIGZvcm01LmFwcGVuZENoaWxkKGNyZWF0ZUxpc3QoKSlcbiAgICBcbiAgICByZXR1cm4gZm9ybTVcbn1cblxuXG4vL0NyZWF0ZSBncm91cFxuXG5jb25zdCB0b0RvQmxvY2s1ID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGg1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpXG4gICAgaDUuY2xhc3NMaXN0LmFkZCgnZ3JvdXA1Q29sb3InKVxuICAgIGg1LnRleHRDb250ZW50ID0gZ3JvdXBOYW1lVmFyNVxuICAgIGJsb2NrLmFwcGVuZENoaWxkKGg1KVxuICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoXCJ0b0RvQmxvY2tcIilcbiAgICBibG9jay5hcHBlbmRDaGlsZChpbnB1dCgpKVxuICAgIHJldHVybiBibG9ja1xufVxuXG5cbi8vQ3JlYXRlIGdyb3VwXG5cbmNvbnN0IG1lbnVCdXR0b24gPSAoKCkgPT4ge1xuICAgXG4gICBjb25zdCBjcmVhdGUgPSAoKSA9PntcbiAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwibWVudUJ0blwiKVxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpXG4gICAgcC50ZXh0Q29udGVudCA9IFwiLi4uXCJcbiAgICBtZW51QnRuLmFwcGVuZENoaWxkKHApXG4gICAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpXG4gICAgcmV0dXJuIG1lbnVCdG5cbiAgIH1cbiAgICByZXR1cm4ge2NyZWF0ZX1cbn0pKClcblxuXG5cbmNvbnN0IGRlbGV0ZVRhYiA9ICgpID0+IHtcbiAgICBjb25zdCBkZWxldGVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZGVsZXRlVGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIilcbiAgICBjb25zdCBNZW51VGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgTWVudVRpdGxlMS50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCJcbiAgICBjb25zdCBpbWdUcmFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBpbWdUcmFzaC5jbGFzc0xpc3QuYWRkKFwiSWNvbmltZ1wiKVxuICAgIGltZ1RyYXNoLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9nYXJiYWdlLnBuZ1wiXG4gICAgZGVsZXRlVGFiLmFwcGVuZENoaWxkKE1lbnVUaXRsZTEpXG4gICAgTWVudVRpdGxlMS5wcmVwZW5kKGltZ1RyYXNoKSBcbiAgICBcbiAgICByZXR1cm4gZGVsZXRlVGFiXG59XG5cbmNvbnN0IHJlbmFtZVRhYiA9ICgpID0+IHtcbiAgICBjb25zdCByZW5hbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgcmVuYW1lVGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIilcbiAgICBjb25zdCBNZW51VGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgTWVudVRpdGxlMi50ZXh0Q29udGVudCA9IFwiUmVuYW1lXCJcbiAgICBjb25zdCBpbWdSZW5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgaW1nUmVuYW1lLmNsYXNzTGlzdC5hZGQoXCJJY29uaW1nXCIpXG4gICAgaW1nUmVuYW1lLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9lZGl0LnBuZ1wiXG4gICAgcmVuYW1lVGFiLmFwcGVuZENoaWxkKE1lbnVUaXRsZTIpXG4gICAgTWVudVRpdGxlMi5wcmVwZW5kKGltZ1JlbmFtZSlcbiAgICByZXR1cm4gcmVuYW1lVGFiXG59XG5cbmNvbnN0IHNhdmVUYWIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBzYXZlVGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIilcbiAgICBjb25zdCBNZW51VGl0bGUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgTWVudVRpdGxlMy50ZXh0Q29udGVudCA9IFwiU2F2ZVwiXG4gICAgY29uc3QgaW1nU2F2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBpbWdTYXZlLmNsYXNzTGlzdC5hZGQoXCJJY29uaW1nXCIpXG4gICAgaW1nU2F2ZS5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvc2F2ZS5wbmdcIlxuICAgIHNhdmVUYWIuYXBwZW5kQ2hpbGQoTWVudVRpdGxlMylcbiAgICBNZW51VGl0bGUzLnByZXBlbmQoaW1nU2F2ZSlcbiAgICByZXR1cm4gc2F2ZVRhYlxufVxuXG5jb25zdCBwb3BPdXRNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvcE91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBwb3BPdXQuY2xhc3NMaXN0LmFkZChcInBvcFdpbmRvd1wiKVxuICAgXG4gICAgXG4gICAgcG9wT3V0LmFwcGVuZENoaWxkKGRlbGV0ZVRhYigpKVxuICAgIHBvcE91dC5hcHBlbmRDaGlsZChyZW5hbWVUYWIoKSlcbiAgICBcbiAgICBwb3BPdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCBidWJibGUxID0gYnV0dG9uLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IGJ1YmJsZTIgPSBidWJibGUxLnBhcmVudE5vZGVcbiAgICAgICAgY29uc3QgYnViYmxlMyA9IGJ1YmJsZTIucGFyZW50Tm9kZVxuICAgICAgICBjb25zdCBidWJibGU0ID0gYnViYmxlMy5wYXJlbnROb2RlXG4gICAgICAgIGNvbnN0IGJ1YmJsZTUgPSBidWJibGU0LnBhcmVudE5vZGVcbiAgICAgICAgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gJ0RlbGV0ZScpe1xuICAgICAgICAgICAgYnViYmxlNS5yZW1vdmVDaGlsZChidWJibGU0KVxuICAgICAgICB9ZWxzZSBpZihidXR0b24udGV4dENvbnRlbnQgPT09ICdSZW5hbWUnKXtcbiAgICAgICAgICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkgeyAgICAvL1ByZXZlbnRpbmcgdXNlciBmcm9tIHVzaW5nICdFbnRlcicgYWZ0ZXIgcHJlc3NpbmcgZWRpdFxuICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBidWJibGU0LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgIGJ1YmJsZTQuaW5zZXJ0QmVmb3JlKGlucHV0LCBzcGFuKTtcbiAgICAgICAgICAgIGJ1YmJsZTQucmVtb3ZlQ2hpbGQoc3Bhbik7IFxuICAgICAgICAgICAgcG9wT3V0LnJlbW92ZUNoaWxkKHBvcE91dC5jaGlsZE5vZGVzWzFdKVxuICAgICAgICAgICAgcG9wT3V0LmFwcGVuZENoaWxkKHNhdmVUYWIoKSlcbiAgICAgICAgfWVsc2UgaWYoYnV0dG9uLnRleHRDb250ZW50ID09PSAnU2F2ZScpe1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBidWJibGU0LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGJ1YmJsZTQuaW5zZXJ0QmVmb3JlKHNwYW4sIGlucHV0KTtcbiAgICAgICAgICAgIGJ1YmJsZTQucmVtb3ZlQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1JlbmFtZSc7XG4gICAgICAgICAgICBidWJibGUzLnJlbW92ZUNoaWxkKGJ1YmJsZTMuY2hpbGROb2Rlc1sxXSkgIC8vIHJlbW92ZSBwb3BvdXQgb25jZWQgc2F2ZWRcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH0pXG4gICAgXG4gICAgcmV0dXJuIHBvcE91dFxufVxuXG5cblxuZXhwb3J0ICB7Z3JvdXBJbnB1dDV9IiwiaW1wb3J0IHtncm91cElucHV0Mn0gZnJvbSBcIi4vZ3JvdXAyXCJcbmltcG9ydCB7Z3JvdXBJbnB1dCwgVG9Eb0NvbnRhaW5lcn0gZnJvbSBcIi4vZ3JvdXAxXCJcbmltcG9ydCB7Z3JvdXBJbnB1dDN9IGZyb20gXCIuL2dyb3VwM1wiXG5pbXBvcnQge2dyb3VwSW5wdXQ0fSBmcm9tIFwiLi9ncm91cDRcIlxuaW1wb3J0IHtncm91cElucHV0NX0gZnJvbSBcIi4vZ3JvdXA1XCJcblxuXG5sZXQgZ3JvdXBDb3VudCA9IDA7XG5cbmNvbnN0IHJlbmRlclBhZ2UgPSBmdW5jdGlvbiAoKXtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KVxuXG4gICAgY29uc3QgdG9wQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRvcEJhci5jbGFzc0xpc3QuYWRkKFwidG9wQmFyXCIpXG4gICAgY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuICAgIHN1YlRpdGxlLnRleHRDb250ZW50ID0gXCLinJTvuI8gVGFzayBMaXN0XCJcbiAgICB0b3BCYXIuYXBwZW5kQ2hpbGQoc3ViVGl0bGUpXG5cbiAgICBjb25zdCBoZWFkSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGhlYWRJbWcuY2xhc3NMaXN0LmFkZChcImhlYWRlci1pbWdcIilcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgaW1nLnNyYyA9IFwiaW1hZ2VzL2hlYWRlci1JbWcuanBnXCJcbiAgICBoZWFkSW1nLmFwcGVuZENoaWxkKGltZylcblxuICAgIGNvbnN0IGluc3RydWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBpbnN0cnVjdGlvbnMuY2xhc3NMaXN0LmFkZChcImluc3RydWN0XCIpXG4gICAgY29uc3QgaW5mb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBpbmZvVGV4dC50ZXh0Q29udGVudCA9ICfinJTvuI8gVGFzayBMaXN0J1xuICAgIGluc3RydWN0aW9ucy5hcHBlbmRDaGlsZChpbmZvVGV4dClcblxuICAgIGNvbnN0IGluZm8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBpbmZvMS50ZXh0Q29udGVudCA9IFwiVXNlIHRoaXMgdGVtcGxhdGUgdG8gdHJhY2sgeW91ciBwZXJzb25hbCB0YXNrcy5cIlxuICAgIGluc3RydWN0aW9ucy5hcHBlbmRDaGlsZChpbmZvMSlcblxuICAgIGNvbnN0IGluZm8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBpbmZvMi50ZXh0Q29udGVudCA9IFwiQ2xpY2sgKyBOZXcgdG8gY3JlYXRlIGEgbmV3IHRhc2sgZGlyZWN0bHkgb24gdGhpcyBib2FyZC5cIlxuICAgIGluc3RydWN0aW9ucy5hcHBlbmRDaGlsZChpbmZvMilcblxuICAgIGNvbnN0IGluZm8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBpbmZvMy50ZXh0Q29udGVudCA9IFwiQ2xpY2sgbmV3IHByb2plY3QgdG8gYWRkIG5ldyBjb2x1bWVcIlxuICAgIGluc3RydWN0aW9ucy5hcHBlbmRDaGlsZChpbmZvMylcblxuICAgIGNvbnN0IGxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKVxuXG4gICAgXG4gICAgXG4gICAgY29uc3QgbmV3R3JvdXBCdG4gPSAoKSA9PiB7XG4gICAgXG4gICAgICAgIGNvbnN0IG5ld0dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBuZXdHcm91cC5jbGFzc0xpc3QuYWRkKCdncm91cEJ0bicpXG4gICAgICAgIG5ld0dyb3VwLnRleHRDb250ZW50ID0gXCIrXCJcbiAgICBcbiAgICAgICBuZXdHcm91cC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICBcbiAgICAgICAgaWYoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICcrJyAmJiBncm91cENvdW50ID09IDApeyAgIFxuICAgICAgICAgICAgZ3JvdXBDb3VudCsrXG4gICAgICAgICAgICBUb0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGdyb3VwSW5wdXQoKSlcbiAgICAgICAgfWVsc2UgaWYoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICcrJyAmJiBncm91cENvdW50ID09IDEpe1xuICAgICAgICAgICAgZ3JvdXBDb3VudCsrXG4gICAgICAgICAgICBUb0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGdyb3VwSW5wdXQyKCkpXG4gICAgICAgIH1lbHNlIGlmKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSAnKycgJiYgZ3JvdXBDb3VudCA9PSAyKXtcbiAgICAgICAgICAgIGdyb3VwQ291bnQrK1xuICAgICAgICAgICAgVG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZChncm91cElucHV0MygpKVxuICAgICAgICB9ZWxzZSBpZihlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gJysnICYmIGdyb3VwQ291bnQgPT0gMyl7XG4gICAgICAgICAgICBncm91cENvdW50KytcbiAgICAgICAgICAgIFRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZ3JvdXBJbnB1dDQoKSlcbiAgICAgICAgfWVsc2UgaWYoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICcrJyAmJiBncm91cENvdW50ID09IDQpe1xuICAgICAgICAgICAgZ3JvdXBDb3VudCsrXG4gICAgICAgICAgICBUb0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGdyb3VwSW5wdXQ1KCkpXG4gICAgICAgIH1cblxuICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ld0dyb3VwIFxuICAgIH1cbiAgICBcbiAgICBUb0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0dyb3VwQnRuKCkpICBcbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvcEJhcilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRJbWcpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbnN0cnVjdGlvbnMpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsaW5lQnJlYWspXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChUb0RvQ29udGFpbmVyKVxuICAgIFxuICBcbn1cblxuICBcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyUGFnZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHJlbmRlclBhZ2UgZnJvbSBcIi4vcmVuZGVyUGFnZVwiO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5cblxuXG5yZW5kZXJQYWdlKClcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9