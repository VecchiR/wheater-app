/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/* hidden things */
    /* width */
::-webkit-scrollbar {
    width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px var(--primary-darker);
    border-radius: 4px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: var(--accent);
    border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: var(--accent-darker);
}

.gh-logo-link, 
footer {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    column-gap: 10px;
}

.gh-logo-link,
.gh-logo {
    border-radius: 100%;
    max-width: 20px;
}

.gh-logo:hover {
    background-color: var(--accent);
}

.gh-name {
    text-decoration-line: none;
}

.gh-name-link:hover {
    color: var(--accent);
    text-decoration: underline;
}

a {
    text-decoration: none;
    color: var(--text);
}

:root {
    --text: #323232;
    --background: #E4DDDD;
    --primary: #A7ACB2;
    --secondary: #8B8A8B;
    --accent: rgb(193, 98, 129);
    
    --primary-little-lighter: hsl(from var(--primary) h s calc(l + 0.05));
    --primary-lighter: hsl(from var(--primary) h s calc(l + 0.14));
    --primary-even-lighter: hsl(from var(--primary) h s calc(l + 0.23));
    --primary-darker: hsl(from var(--primary) h s calc(l - 0.1));
    --primary-even-darker: hsl(from var(--primary) h s calc(l - 0.2));
    --background-lighter: hsl(from var(--background) h s calc(l + 0.08));
    --accent-darker: hsl(from var(--accent) h s calc(l - 0.05));
    --text-lighter: hsl(from var(--text) h s calc(l + 0.2));


    --shadow-color: 0deg 5% 56%;
    --shadow-elevation-low:
      0.3px 0.3px 0.4px hsl(var(--shadow-color) / 0.54),
      0.5px 0.5px 0.6px -2px hsl(var(--shadow-color) / 0.4),
      1.4px 1.2px 1.7px -4px hsl(var(--shadow-color) / 0.27);
    --shadow-elevation-medium:
      0.3px 0.3px 0.4px hsl(var(--shadow-color) / 0.57),
      0.8px 0.7px 1px -1.3px hsl(var(--shadow-color) / 0.46),
      2.5px 2.2px 3px -2.7px hsl(var(--shadow-color) / 0.35),
      6.8px 6.1px 8.2px -4px hsl(var(--shadow-color) / 0.25);
    --shadow-elevation-high:
      0.3px 0.3px 0.4px hsl(var(--shadow-color) / 0.53),
      1.1px 0.9px 1.3px -0.6px hsl(var(--shadow-color) / 0.48),
      2.1px 1.9px 2.5px -1.1px hsl(var(--shadow-color) / 0.43),
      4.2px 3.7px 5px -1.7px hsl(var(--shadow-color) / 0.38),
      7.8px 6.9px 9.4px -2.3px hsl(var(--shadow-color) / 0.33),
      13.5px 12px 16.3px -2.9px hsl(var(--shadow-color) / 0.28),
      22px 19.5px 26.5px -3.4px hsl(var(--shadow-color) / 0.23),
      33.8px 30px 40.7px -4px hsl(var(--shadow-color) / 0.18);
  }


body {
    display: grid;
    grid-template: 80px 1fr 35px / 1fr;
    height: 100vh;
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    color: var(--text);
    font-size: 20px;
    overflow-y: hidden;

}


header {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.main-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

    .label {
        border: 1px solid;
        font-size: xx-large;
    }

    .current {
        height: 20%;
        border: 1px solid;
        display: flex;
        align-items: center;
    }

    .main-area > *{
        height: 1fr;
    }

    .forecast {
        border: 1px solid;
        display: flex;
        height: 30%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

        .forecast * {
            display: flex;
            height: 100%;
            align-items: center;
            width: 60vw;
            justify-content: center;
        }

        .forecast-days {
            border: 1px solid red;
            display: flex;
            flex-direction: row;
        }

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,kBAAkB;IACd,UAAU;AACd;IACI,UAAU;AACd;;AAEA,UAAU;AACV;IACI,gDAAgD;IAChD,kBAAkB;AACtB;;AAEA,WAAW;AACX;IACI,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA,oBAAoB;AACpB;IACI,gCAAgC;AACpC;;AAEA;;IAEI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,uBAAuB;IACvB,qBAAqB;IACrB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;;IAEI,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,oBAAoB;IACpB,0BAA0B;AAC9B;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,qBAAqB;IACrB,kBAAkB;IAClB,oBAAoB;IACpB,2BAA2B;;IAE3B,qEAAqE;IACrE,8DAA8D;IAC9D,mEAAmE;IACnE,4DAA4D;IAC5D,iEAAiE;IACjE,oEAAoE;IACpE,2DAA2D;IAC3D,uDAAuD;;;IAGvD,2BAA2B;IAC3B;;;4DAGwD;IACxD;;;;4DAIwD;IACxD;;;;;;;;6DAQyD;EAC3D;;;AAGF;IACI,aAAa;IACb,kCAAkC;IAClC,aAAa;IACb,SAAS;IACT,mJAAmJ;IACnJ,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;;AAEtB;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;IAEI;QACI,iBAAiB;QACjB,mBAAmB;IACvB;;IAEA;QACI,WAAW;QACX,iBAAiB;QACjB,aAAa;QACb,mBAAmB;IACvB;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,iBAAiB;QACjB,aAAa;QACb,WAAW;QACX,sBAAsB;QACtB,mBAAmB;QACnB,uBAAuB;IAC3B;;QAEI;YACI,aAAa;YACb,YAAY;YACZ,mBAAmB;YACnB,WAAW;YACX,uBAAuB;QAC3B;;QAEA;YACI,qBAAqB;YACrB,aAAa;YACb,mBAAmB;QACvB","sourcesContent":["/* hidden things */\n    /* width */\n::-webkit-scrollbar {\n    width: 5px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 10px var(--primary-darker);\n    border-radius: 4px;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n    background: var(--accent);\n    border-radius: 10px;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: var(--accent-darker);\n}\n\n.gh-logo-link, \nfooter {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    column-gap: 10px;\n}\n\n.gh-logo-link,\n.gh-logo {\n    border-radius: 100%;\n    max-width: 20px;\n}\n\n.gh-logo:hover {\n    background-color: var(--accent);\n}\n\n.gh-name {\n    text-decoration-line: none;\n}\n\n.gh-name-link:hover {\n    color: var(--accent);\n    text-decoration: underline;\n}\n\na {\n    text-decoration: none;\n    color: var(--text);\n}\n\n:root {\n    --text: #323232;\n    --background: #E4DDDD;\n    --primary: #A7ACB2;\n    --secondary: #8B8A8B;\n    --accent: rgb(193, 98, 129);\n    \n    --primary-little-lighter: hsl(from var(--primary) h s calc(l + 0.05));\n    --primary-lighter: hsl(from var(--primary) h s calc(l + 0.14));\n    --primary-even-lighter: hsl(from var(--primary) h s calc(l + 0.23));\n    --primary-darker: hsl(from var(--primary) h s calc(l - 0.1));\n    --primary-even-darker: hsl(from var(--primary) h s calc(l - 0.2));\n    --background-lighter: hsl(from var(--background) h s calc(l + 0.08));\n    --accent-darker: hsl(from var(--accent) h s calc(l - 0.05));\n    --text-lighter: hsl(from var(--text) h s calc(l + 0.2));\n\n\n    --shadow-color: 0deg 5% 56%;\n    --shadow-elevation-low:\n      0.3px 0.3px 0.4px hsl(var(--shadow-color) / 0.54),\n      0.5px 0.5px 0.6px -2px hsl(var(--shadow-color) / 0.4),\n      1.4px 1.2px 1.7px -4px hsl(var(--shadow-color) / 0.27);\n    --shadow-elevation-medium:\n      0.3px 0.3px 0.4px hsl(var(--shadow-color) / 0.57),\n      0.8px 0.7px 1px -1.3px hsl(var(--shadow-color) / 0.46),\n      2.5px 2.2px 3px -2.7px hsl(var(--shadow-color) / 0.35),\n      6.8px 6.1px 8.2px -4px hsl(var(--shadow-color) / 0.25);\n    --shadow-elevation-high:\n      0.3px 0.3px 0.4px hsl(var(--shadow-color) / 0.53),\n      1.1px 0.9px 1.3px -0.6px hsl(var(--shadow-color) / 0.48),\n      2.1px 1.9px 2.5px -1.1px hsl(var(--shadow-color) / 0.43),\n      4.2px 3.7px 5px -1.7px hsl(var(--shadow-color) / 0.38),\n      7.8px 6.9px 9.4px -2.3px hsl(var(--shadow-color) / 0.33),\n      13.5px 12px 16.3px -2.9px hsl(var(--shadow-color) / 0.28),\n      22px 19.5px 26.5px -3.4px hsl(var(--shadow-color) / 0.23),\n      33.8px 30px 40.7px -4px hsl(var(--shadow-color) / 0.18);\n  }\n\n\nbody {\n    display: grid;\n    grid-template: 80px 1fr 35px / 1fr;\n    height: 100vh;\n    margin: 0;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-weight: 400;\n    color: var(--text);\n    font-size: 20px;\n    overflow-y: hidden;\n\n}\n\n\nheader {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n.main-area {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n    .label {\n        border: 1px solid;\n        font-size: xx-large;\n    }\n\n    .current {\n        height: 20%;\n        border: 1px solid;\n        display: flex;\n        align-items: center;\n    }\n\n    .main-area > *{\n        height: 1fr;\n    }\n\n    .forecast {\n        border: 1px solid;\n        display: flex;\n        height: 30%;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n    }\n\n        .forecast * {\n            display: flex;\n            height: 100%;\n            align-items: center;\n            width: 60vw;\n            justify-content: center;\n        }\n\n        .forecast-days {\n            border: 1px solid red;\n            display: flex;\n            flex-direction: row;\n        }\n\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/DOMstuff.js":
/*!*************************!*\
  !*** ./src/DOMstuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanSearch: () => (/* binding */ cleanSearch),
/* harmony export */   getActiveTempScale: () => (/* binding */ getActiveTempScale),
/* harmony export */   readSearch: () => (/* binding */ readSearch),
/* harmony export */   renderData: () => (/* binding */ renderData),
/* harmony export */   scaleToggle: () => (/* binding */ scaleToggle),
/* harmony export */   searchBtn: () => (/* binding */ searchBtn)
/* harmony export */ });
document.querySelector('[type="radio"]#celsius')
    .defaultChecked = true;


const search = document.querySelector('.searchbar-container > input');
const searchBtn = document.querySelector('.searchbar-container > button');

const scaleToggle = document.querySelector('.scale-toggle-container');

const locationName = document.querySelector('.location-name');
const locationCountry = document.querySelector('.location-country');
const current = document.querySelector('.current');
const allForecastDays = document.querySelectorAll('.forecast-days > div');

function renderData(data) {
    const tempScale = getActiveTempScale();
    locationName.textContent = data.location.name;
    locationCountry.textContent = data.location.country;

    if (tempScale === 'F') {
        current.textContent = data.current.temp_f + "°F";

        allForecastDays.forEach((element, index) => {
            element.textContent =
                data.forecast.forecastday[index].date +
                " = " + "min: " +
                data.forecast.forecastday[index].day.mintemp_f +
                "°F | max: " +
                data.forecast.forecastday[index].day.maxtemp_f + "°F";
        });
    } else {
        current.textContent = data.current.temp_c + "°C";
        allForecastDays.forEach((element, index) => {
            element.textContent =
                data.forecast.forecastday[index].date +
                " = " + "min: " +
                data.forecast.forecastday[index].day.mintemp_c +
                "°C | max: " +
                data.forecast.forecastday[index].day.maxtemp_c + "°C";
        });
    }
}


function readSearch() {
    return search.value ? search.value : 'campinas';
}

function cleanSearch() {
    search.value = '';
}

function getActiveTempScale() {
    const scale = document.querySelector('input[type="radio"]:checked').id;
    return scale === 'fahrenheit' ? 'F' : 'C';
}

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataStore: () => (/* binding */ dataStore),
/* harmony export */   getUrl: () => (/* binding */ getUrl),
/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData)
/* harmony export */ });
const key = '774b8f64b270468c90f150256242105';
let dataStore;


function getUrl(location) {
    return `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=3`;
}

async function getWeatherData(url) {
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    dataStore = data;
    return data;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.js */ "./src/weather.js");
/* harmony import */ var _DOMstuff_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMstuff.js */ "./src/DOMstuff.js");







async function newQuery() {
    let url = _weather_js__WEBPACK_IMPORTED_MODULE_1__.getUrl(_DOMstuff_js__WEBPACK_IMPORTED_MODULE_2__.readSearch());
    const data = await _weather_js__WEBPACK_IMPORTED_MODULE_1__.getWeatherData(url);
    _DOMstuff_js__WEBPACK_IMPORTED_MODULE_2__.renderData(data);
    _DOMstuff_js__WEBPACK_IMPORTED_MODULE_2__.cleanSearch();
}



_DOMstuff_js__WEBPACK_IMPORTED_MODULE_2__.searchBtn.addEventListener('click', newQuery);
_DOMstuff_js__WEBPACK_IMPORTED_MODULE_2__.scaleToggle.addEventListener('change', () => {
    _DOMstuff_js__WEBPACK_IMPORTED_MODULE_2__.renderData(_weather_js__WEBPACK_IMPORTED_MODULE_1__.dataStore);
})

document.addEventListener("DOMContentLoaded", function() {
    newQuery();
  });


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vd2hlYXRlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3doZWF0ZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93aGVhdGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3doZWF0ZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3doZWF0ZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3doZWF0ZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93aGVhdGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93aGVhdGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93aGVhdGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3doZWF0ZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2hlYXRlci1hcHAvLi9zcmMvRE9Nc3R1ZmYuanMiLCJ3ZWJwYWNrOi8vd2hlYXRlci1hcHAvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93aGVhdGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93aGVhdGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93aGVhdGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2hlYXRlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93aGVhdGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3doZWF0ZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93aGVhdGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogaGlkZGVuIHRoaW5ncyAqL1xuICAgIC8qIHdpZHRoICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogNXB4O1xufVxuXG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggdmFyKC0tcHJpbWFyeS1kYXJrZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWRhcmtlcik7XG59XG5cbi5naC1sb2dvLWxpbmssIFxuZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sdW1uLWdhcDogMTBweDtcbn1cblxuLmdoLWxvZ28tbGluayxcbi5naC1sb2dvIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG1heC13aWR0aDogMjBweDtcbn1cblxuLmdoLWxvZ286aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XG59XG5cbi5naC1uYW1lIHtcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcbn1cblxuLmdoLW5hbWUtbGluazpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbjpyb290IHtcbiAgICAtLXRleHQ6ICMzMjMyMzI7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRTREREREO1xuICAgIC0tcHJpbWFyeTogI0E3QUNCMjtcbiAgICAtLXNlY29uZGFyeTogIzhCOEE4QjtcbiAgICAtLWFjY2VudDogcmdiKDE5MywgOTgsIDEyOSk7XG4gICAgXG4gICAgLS1wcmltYXJ5LWxpdHRsZS1saWdodGVyOiBoc2woZnJvbSB2YXIoLS1wcmltYXJ5KSBoIHMgY2FsYyhsICsgMC4wNSkpO1xuICAgIC0tcHJpbWFyeS1saWdodGVyOiBoc2woZnJvbSB2YXIoLS1wcmltYXJ5KSBoIHMgY2FsYyhsICsgMC4xNCkpO1xuICAgIC0tcHJpbWFyeS1ldmVuLWxpZ2h0ZXI6IGhzbChmcm9tIHZhcigtLXByaW1hcnkpIGggcyBjYWxjKGwgKyAwLjIzKSk7XG4gICAgLS1wcmltYXJ5LWRhcmtlcjogaHNsKGZyb20gdmFyKC0tcHJpbWFyeSkgaCBzIGNhbGMobCAtIDAuMSkpO1xuICAgIC0tcHJpbWFyeS1ldmVuLWRhcmtlcjogaHNsKGZyb20gdmFyKC0tcHJpbWFyeSkgaCBzIGNhbGMobCAtIDAuMikpO1xuICAgIC0tYmFja2dyb3VuZC1saWdodGVyOiBoc2woZnJvbSB2YXIoLS1iYWNrZ3JvdW5kKSBoIHMgY2FsYyhsICsgMC4wOCkpO1xuICAgIC0tYWNjZW50LWRhcmtlcjogaHNsKGZyb20gdmFyKC0tYWNjZW50KSBoIHMgY2FsYyhsIC0gMC4wNSkpO1xuICAgIC0tdGV4dC1saWdodGVyOiBoc2woZnJvbSB2YXIoLS10ZXh0KSBoIHMgY2FsYyhsICsgMC4yKSk7XG5cblxuICAgIC0tc2hhZG93LWNvbG9yOiAwZGVnIDUlIDU2JTtcbiAgICAtLXNoYWRvdy1lbGV2YXRpb24tbG93OlxuICAgICAgMC4zcHggMC4zcHggMC40cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjU0KSxcbiAgICAgIDAuNXB4IDAuNXB4IDAuNnB4IC0ycHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjQpLFxuICAgICAgMS40cHggMS4ycHggMS43cHggLTRweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMjcpO1xuICAgIC0tc2hhZG93LWVsZXZhdGlvbi1tZWRpdW06XG4gICAgICAwLjNweCAwLjNweCAwLjRweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuNTcpLFxuICAgICAgMC44cHggMC43cHggMXB4IC0xLjNweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuNDYpLFxuICAgICAgMi41cHggMi4ycHggM3B4IC0yLjdweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMzUpLFxuICAgICAgNi44cHggNi4xcHggOC4ycHggLTRweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMjUpO1xuICAgIC0tc2hhZG93LWVsZXZhdGlvbi1oaWdoOlxuICAgICAgMC4zcHggMC4zcHggMC40cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjUzKSxcbiAgICAgIDEuMXB4IDAuOXB4IDEuM3B4IC0wLjZweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuNDgpLFxuICAgICAgMi4xcHggMS45cHggMi41cHggLTEuMXB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC40MyksXG4gICAgICA0LjJweCAzLjdweCA1cHggLTEuN3B4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4zOCksXG4gICAgICA3LjhweCA2LjlweCA5LjRweCAtMi4zcHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjMzKSxcbiAgICAgIDEzLjVweCAxMnB4IDE2LjNweCAtMi45cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjI4KSxcbiAgICAgIDIycHggMTkuNXB4IDI2LjVweCAtMy40cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjIzKSxcbiAgICAgIDMzLjhweCAzMHB4IDQwLjdweCAtNHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4xOCk7XG4gIH1cblxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDgwcHggMWZyIDM1cHggLyAxZnI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG5cbn1cblxuXG5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubWFpbi1hcmVhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuICAgIC5sYWJlbCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICAgIH1cblxuICAgIC5jdXJyZW50IHtcbiAgICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5tYWluLWFyZWEgPiAqe1xuICAgICAgICBoZWlnaHQ6IDFmcjtcbiAgICB9XG5cbiAgICAuZm9yZWNhc3Qge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiAzMCU7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgICAgICAuZm9yZWNhc3QgKiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiA2MHZ3O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9yZWNhc3QtZGF5cyB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgfVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsa0JBQWtCO0lBQ2QsVUFBVTtBQUNkO0lBQ0ksVUFBVTtBQUNkOztBQUVBLFVBQVU7QUFDVjtJQUNJLGdEQUFnRDtJQUNoRCxrQkFBa0I7QUFDdEI7O0FBRUEsV0FBVztBQUNYO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsMkJBQTJCOztJQUUzQixxRUFBcUU7SUFDckUsOERBQThEO0lBQzlELG1FQUFtRTtJQUNuRSw0REFBNEQ7SUFDNUQsaUVBQWlFO0lBQ2pFLG9FQUFvRTtJQUNwRSwyREFBMkQ7SUFDM0QsdURBQXVEOzs7SUFHdkQsMkJBQTJCO0lBQzNCOzs7NERBR3dEO0lBQ3hEOzs7OzREQUl3RDtJQUN4RDs7Ozs7Ozs7NkRBUXlEO0VBQzNEOzs7QUFHRjtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLFNBQVM7SUFDVCxtSkFBbUo7SUFDbkosZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCOztBQUV0Qjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7SUFFSTtRQUNJLGlCQUFpQjtRQUNqQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsYUFBYTtRQUNiLFdBQVc7UUFDWCxzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLHVCQUF1QjtJQUMzQjs7UUFFSTtZQUNJLGFBQWE7WUFDYixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCx1QkFBdUI7UUFDM0I7O1FBRUE7WUFDSSxxQkFBcUI7WUFDckIsYUFBYTtZQUNiLG1CQUFtQjtRQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBoaWRkZW4gdGhpbmdzICovXFxuICAgIC8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiA1cHg7XFxufVxcblxcbi8qIFRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IHZhcigtLXByaW1hcnktZGFya2VyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4vKiBIYW5kbGUgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1kYXJrZXIpO1xcbn1cXG5cXG4uZ2gtbG9nby1saW5rLCBcXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXG59XFxuXFxuLmdoLWxvZ28tbGluayxcXG4uZ2gtbG9nbyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMjBweDtcXG59XFxuXFxuLmdoLWxvZ286aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbn1cXG5cXG4uZ2gtbmFtZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xcbn1cXG5cXG4uZ2gtbmFtZS1saW5rOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS10ZXh0OiAjMzIzMjMyO1xcbiAgICAtLWJhY2tncm91bmQ6ICNFNEREREQ7XFxuICAgIC0tcHJpbWFyeTogI0E3QUNCMjtcXG4gICAgLS1zZWNvbmRhcnk6ICM4QjhBOEI7XFxuICAgIC0tYWNjZW50OiByZ2IoMTkzLCA5OCwgMTI5KTtcXG4gICAgXFxuICAgIC0tcHJpbWFyeS1saXR0bGUtbGlnaHRlcjogaHNsKGZyb20gdmFyKC0tcHJpbWFyeSkgaCBzIGNhbGMobCArIDAuMDUpKTtcXG4gICAgLS1wcmltYXJ5LWxpZ2h0ZXI6IGhzbChmcm9tIHZhcigtLXByaW1hcnkpIGggcyBjYWxjKGwgKyAwLjE0KSk7XFxuICAgIC0tcHJpbWFyeS1ldmVuLWxpZ2h0ZXI6IGhzbChmcm9tIHZhcigtLXByaW1hcnkpIGggcyBjYWxjKGwgKyAwLjIzKSk7XFxuICAgIC0tcHJpbWFyeS1kYXJrZXI6IGhzbChmcm9tIHZhcigtLXByaW1hcnkpIGggcyBjYWxjKGwgLSAwLjEpKTtcXG4gICAgLS1wcmltYXJ5LWV2ZW4tZGFya2VyOiBoc2woZnJvbSB2YXIoLS1wcmltYXJ5KSBoIHMgY2FsYyhsIC0gMC4yKSk7XFxuICAgIC0tYmFja2dyb3VuZC1saWdodGVyOiBoc2woZnJvbSB2YXIoLS1iYWNrZ3JvdW5kKSBoIHMgY2FsYyhsICsgMC4wOCkpO1xcbiAgICAtLWFjY2VudC1kYXJrZXI6IGhzbChmcm9tIHZhcigtLWFjY2VudCkgaCBzIGNhbGMobCAtIDAuMDUpKTtcXG4gICAgLS10ZXh0LWxpZ2h0ZXI6IGhzbChmcm9tIHZhcigtLXRleHQpIGggcyBjYWxjKGwgKyAwLjIpKTtcXG5cXG5cXG4gICAgLS1zaGFkb3ctY29sb3I6IDBkZWcgNSUgNTYlO1xcbiAgICAtLXNoYWRvdy1lbGV2YXRpb24tbG93OlxcbiAgICAgIDAuM3B4IDAuM3B4IDAuNHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC41NCksXFxuICAgICAgMC41cHggMC41cHggMC42cHggLTJweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuNCksXFxuICAgICAgMS40cHggMS4ycHggMS43cHggLTRweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMjcpO1xcbiAgICAtLXNoYWRvdy1lbGV2YXRpb24tbWVkaXVtOlxcbiAgICAgIDAuM3B4IDAuM3B4IDAuNHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC41NyksXFxuICAgICAgMC44cHggMC43cHggMXB4IC0xLjNweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuNDYpLFxcbiAgICAgIDIuNXB4IDIuMnB4IDNweCAtMi43cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjM1KSxcXG4gICAgICA2LjhweCA2LjFweCA4LjJweCAtNHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4yNSk7XFxuICAgIC0tc2hhZG93LWVsZXZhdGlvbi1oaWdoOlxcbiAgICAgIDAuM3B4IDAuM3B4IDAuNHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC41MyksXFxuICAgICAgMS4xcHggMC45cHggMS4zcHggLTAuNnB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC40OCksXFxuICAgICAgMi4xcHggMS45cHggMi41cHggLTEuMXB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC40MyksXFxuICAgICAgNC4ycHggMy43cHggNXB4IC0xLjdweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMzgpLFxcbiAgICAgIDcuOHB4IDYuOXB4IDkuNHB4IC0yLjNweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMzMpLFxcbiAgICAgIDEzLjVweCAxMnB4IDE2LjNweCAtMi45cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjI4KSxcXG4gICAgICAyMnB4IDE5LjVweCAyNi41cHggLTMuNHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4yMyksXFxuICAgICAgMzMuOHB4IDMwcHggNDAuN3B4IC00cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjE4KTtcXG4gIH1cXG5cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogODBweCAxZnIgMzVweCAvIDFmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuXFxufVxcblxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tYWluLWFyZWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuICAgIC5sYWJlbCB7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICAgIH1cXG5cXG4gICAgLmN1cnJlbnQge1xcbiAgICAgICAgaGVpZ2h0OiAyMCU7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5tYWluLWFyZWEgPiAqe1xcbiAgICAgICAgaGVpZ2h0OiAxZnI7XFxuICAgIH1cXG5cXG4gICAgLmZvcmVjYXN0IHtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGhlaWdodDogMzAlO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAgICAgLmZvcmVjYXN0ICoge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgd2lkdGg6IDYwdnc7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZm9yZWNhc3QtZGF5cyB7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIH1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwicmFkaW9cIl0jY2Vsc2l1cycpXG4gICAgLmRlZmF1bHRDaGVja2VkID0gdHJ1ZTtcblxuXG5jb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoYmFyLWNvbnRhaW5lciA+IGlucHV0Jyk7XG5leHBvcnQgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaGJhci1jb250YWluZXIgPiBidXR0b24nKTtcblxuZXhwb3J0IGNvbnN0IHNjYWxlVG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjYWxlLXRvZ2dsZS1jb250YWluZXInKTtcblxuY29uc3QgbG9jYXRpb25OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uLW5hbWUnKTtcbmNvbnN0IGxvY2F0aW9uQ291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi1jb3VudHJ5Jyk7XG5jb25zdCBjdXJyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQnKTtcbmNvbnN0IGFsbEZvcmVjYXN0RGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JlY2FzdC1kYXlzID4gZGl2Jyk7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEYXRhKGRhdGEpIHtcbiAgICBjb25zdCB0ZW1wU2NhbGUgPSBnZXRBY3RpdmVUZW1wU2NhbGUoKTtcbiAgICBsb2NhdGlvbk5hbWUudGV4dENvbnRlbnQgPSBkYXRhLmxvY2F0aW9uLm5hbWU7XG4gICAgbG9jYXRpb25Db3VudHJ5LnRleHRDb250ZW50ID0gZGF0YS5sb2NhdGlvbi5jb3VudHJ5O1xuXG4gICAgaWYgKHRlbXBTY2FsZSA9PT0gJ0YnKSB7XG4gICAgICAgIGN1cnJlbnQudGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQudGVtcF9mICsgXCLCsEZcIjtcblxuICAgICAgICBhbGxGb3JlY2FzdERheXMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaW5kZXhdLmRhdGUgK1xuICAgICAgICAgICAgICAgIFwiID0gXCIgKyBcIm1pbjogXCIgK1xuICAgICAgICAgICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaW5kZXhdLmRheS5taW50ZW1wX2YgK1xuICAgICAgICAgICAgICAgIFwiwrBGIHwgbWF4OiBcIiArXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpbmRleF0uZGF5Lm1heHRlbXBfZiArIFwiwrBGXCI7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnQudGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQudGVtcF9jICsgXCLCsENcIjtcbiAgICAgICAgYWxsRm9yZWNhc3REYXlzLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2luZGV4XS5kYXRlICtcbiAgICAgICAgICAgICAgICBcIiA9IFwiICsgXCJtaW46IFwiICtcbiAgICAgICAgICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2luZGV4XS5kYXkubWludGVtcF9jICtcbiAgICAgICAgICAgICAgICBcIsKwQyB8IG1heDogXCIgK1xuICAgICAgICAgICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaW5kZXhdLmRheS5tYXh0ZW1wX2MgKyBcIsKwQ1wiO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRTZWFyY2goKSB7XG4gICAgcmV0dXJuIHNlYXJjaC52YWx1ZSA/IHNlYXJjaC52YWx1ZSA6ICdjYW1waW5hcyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhblNlYXJjaCgpIHtcbiAgICBzZWFyY2gudmFsdWUgPSAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGl2ZVRlbXBTY2FsZSgpIHtcbiAgICBjb25zdCBzY2FsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkJykuaWQ7XG4gICAgcmV0dXJuIHNjYWxlID09PSAnZmFocmVuaGVpdCcgPyAnRicgOiAnQyc7XG59IiwiY29uc3Qga2V5ID0gJzc3NGI4ZjY0YjI3MDQ2OGM5MGYxNTAyNTYyNDIxMDUnO1xuZXhwb3J0IGxldCBkYXRhU3RvcmU7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVybChsb2NhdGlvbikge1xuICAgIHJldHVybiBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke2tleX0mcT0ke2xvY2F0aW9ufSZkYXlzPTNgO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEodXJsKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgZGF0YVN0b3JlID0gZGF0YTtcbiAgICByZXR1cm4gZGF0YTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0ICogYXMgd2FwcCBmcm9tIFwiLi93ZWF0aGVyLmpzXCI7XG5pbXBvcnQgKiBhcyBkb20gZnJvbSBcIi4vRE9Nc3R1ZmYuanNcIjtcblxuXG5cblxuYXN5bmMgZnVuY3Rpb24gbmV3UXVlcnkoKSB7XG4gICAgbGV0IHVybCA9IHdhcHAuZ2V0VXJsKGRvbS5yZWFkU2VhcmNoKCkpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3YXBwLmdldFdlYXRoZXJEYXRhKHVybCk7XG4gICAgZG9tLnJlbmRlckRhdGEoZGF0YSk7XG4gICAgZG9tLmNsZWFuU2VhcmNoKCk7XG59XG5cblxuXG5kb20uc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3UXVlcnkpO1xuZG9tLnNjYWxlVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBkb20ucmVuZGVyRGF0YSh3YXBwLmRhdGFTdG9yZSk7XG59KVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICBuZXdRdWVyeSgpO1xuICB9KTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9