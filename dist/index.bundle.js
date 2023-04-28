"use strict";
(self["webpackChunktodoodin"] = self["webpackChunktodoodin"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/ui.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/ui.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --font-size-p: clamp(.5rem, 20px, 2rem);\n    --font-size-h3: 26px;\n\n    --border-color-sidenav: #00000055;\n\n    --background-color-sidenav: #FCFCFC;\n    --background-color-header: #F3F3F3;\n    --button-backgroud-color-add: #69ff6911;\n    --button-backgroud-color-add-hover: #69ff6933;\n    --button-backgroud-color-cancel: #ff6b6b11;;\n    --button-backgroud-color-cancel-hover: #ff6b6b33;\n    --border-color-add: #33ff33;\n    --border-color-cancel: #ff3333;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-family: 'Roboto', sans-serif;\n}\nbody{\n    height: 100dvh;\n    width: 100dvw;\n    overflow-y: hidden;\n    display: flex;\n}\n\n#sidenav{\n    width: 15%;\n    min-width: 250px;\n}\n\n#mainSidenavContainer{\n    display: flex;\n    flex-direction: column;\n\n    height: 100%;\n    background: var(--background-color-sidenav);\n    border-right: solid 0.5px var(--border-color-sidenav);\n}\n\n.sidenavButton{\n    display: flex;\n    align-items: flex-end;\n    background: transparent;\n    gap: 3%;\n    margin-top: 9%;\n    margin-left: 15%;\n    cursor: pointer;\n}\n\n.sidenavButton:first-child{\n    margin-top: 30%;\n}\n\n.sidenavText{\n    max-width: 100%;\n    font-size: var(--font-size-p);\n    font-weight: 200;\n    margin-left: 2%;\n    text-overflow:ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.sidenavImage{\n    max-width: 1.5rem;\n    max-height: auto;\n}\n\n#sidenavProjectText{\n    padding-left: 10%;\n    margin-top: 20%;\n    padding-top: 5%;\n    font-size: var(--font-size-h3);\n    font-weight: 800;\n    border-top: solid 1px var(--border-color-sidenav);\n}\n\n#createProjectDiv{\n    display: flex;\n    flex-direction: column;\n}\n\n.projectButton{\n    background: transparent;\n    cursor: pointer;\n    display: flex;\n    width: 80%;\n    margin-left: 15%;\n    margin-top: 9%;\n    gap: .5rem;\n}\n\n.projectButton:last-child{\n    gap: 2%;\n}\n\n#inputContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n#createProjectInput{\n    width: 80%;\n    align-self: center;\n    border: solid 1px var(--border-color-sidenav);\n    font-size: var(--font-size-p);\n    margin-bottom: 5%;\n    margin-top: 9%;\n}\n\n#createProjectDivButtons{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n}\n\n.addCancelButton{\n    min-width: 30%;\n    min-height: 15%;\n    cursor: pointer;\n    font-weight: bold;\n}\n\n#projectAdd{\n    background-color: var(--button-backgroud-color-add);\n    border: solid 1px var(--border-color-add);\n}\n\n#projectAdd:hover{\n    background-color: var(--button-backgroud-color-add-hover);\n}\n\n#projectCancel{\n    background-color: var(--button-backgroud-color-cancel);\n    border: solid 1px var(--border-color-cancel);\n}\n\n#projectCancel:hover{\n    background-color: var(--button-backgroud-color-cancel-hover);\n}\n\n\n#rightContainer{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n}\n\n#headerContainer{\n    background-color: var(--background-color-header);\n}\n\n#headerText{\n    font-style: oblique;\n    padding: 1%;\n    padding-left: 10%;\n    border-bottom: solid 1px var(--border-color-sidenav);\n}\n\n", "",{"version":3,"sources":["webpack://./src/styles/ui.css"],"names":[],"mappings":"AAEA;IACI,uCAAuC;IACvC,oBAAoB;;IAEpB,iCAAiC;;IAEjC,mCAAmC;IACnC,kCAAkC;IAClC,uCAAuC;IACvC,6CAA6C;IAC7C,0CAA0C;IAC1C,gDAAgD;IAChD,2BAA2B;IAC3B,8BAA8B;AAClC;;AAEA;IACI,SAAS;IACT,UAAU;IACV,SAAS;IACT,iCAAiC;AACrC;AACA;IACI,cAAc;IACd,aAAa;IACb,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;;IAEtB,YAAY;IACZ,2CAA2C;IAC3C,qDAAqD;AACzD;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,uBAAuB;IACvB,OAAO;IACP,cAAc;IACd,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,6BAA6B;IAC7B,gBAAgB;IAChB,eAAe;IACf,sBAAsB;IACtB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,eAAe;IACf,8BAA8B;IAC9B,gBAAgB;IAChB,iDAAiD;AACrD;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;IACvB,eAAe;IACf,aAAa;IACb,UAAU;IACV,gBAAgB;IAChB,cAAc;IACd,UAAU;AACd;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,6CAA6C;IAC7C,6BAA6B;IAC7B,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,OAAO;AACX;;AAEA;IACI,cAAc;IACd,eAAe;IACf,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,mDAAmD;IACnD,yCAAyC;AAC7C;;AAEA;IACI,yDAAyD;AAC7D;;AAEA;IACI,sDAAsD;IACtD,4CAA4C;AAChD;;AAEA;IACI,4DAA4D;AAChE;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,gDAAgD;AACpD;;AAEA;IACI,mBAAmB;IACnB,WAAW;IACX,iBAAiB;IACjB,oDAAoD;AACxD","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300&display=swap');\n\n:root{\n    --font-size-p: clamp(.5rem, 20px, 2rem);\n    --font-size-h3: 26px;\n\n    --border-color-sidenav: #00000055;\n\n    --background-color-sidenav: #FCFCFC;\n    --background-color-header: #F3F3F3;\n    --button-backgroud-color-add: #69ff6911;\n    --button-backgroud-color-add-hover: #69ff6933;\n    --button-backgroud-color-cancel: #ff6b6b11;;\n    --button-backgroud-color-cancel-hover: #ff6b6b33;\n    --border-color-add: #33ff33;\n    --border-color-cancel: #ff3333;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-family: 'Roboto', sans-serif;\n}\nbody{\n    height: 100dvh;\n    width: 100dvw;\n    overflow-y: hidden;\n    display: flex;\n}\n\n#sidenav{\n    width: 15%;\n    min-width: 250px;\n}\n\n#mainSidenavContainer{\n    display: flex;\n    flex-direction: column;\n\n    height: 100%;\n    background: var(--background-color-sidenav);\n    border-right: solid 0.5px var(--border-color-sidenav);\n}\n\n.sidenavButton{\n    display: flex;\n    align-items: flex-end;\n    background: transparent;\n    gap: 3%;\n    margin-top: 9%;\n    margin-left: 15%;\n    cursor: pointer;\n}\n\n.sidenavButton:first-child{\n    margin-top: 30%;\n}\n\n.sidenavText{\n    max-width: 100%;\n    font-size: var(--font-size-p);\n    font-weight: 200;\n    margin-left: 2%;\n    text-overflow:ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.sidenavImage{\n    max-width: 1.5rem;\n    max-height: auto;\n}\n\n#sidenavProjectText{\n    padding-left: 10%;\n    margin-top: 20%;\n    padding-top: 5%;\n    font-size: var(--font-size-h3);\n    font-weight: 800;\n    border-top: solid 1px var(--border-color-sidenav);\n}\n\n#createProjectDiv{\n    display: flex;\n    flex-direction: column;\n}\n\n.projectButton{\n    background: transparent;\n    cursor: pointer;\n    display: flex;\n    width: 80%;\n    margin-left: 15%;\n    margin-top: 9%;\n    gap: .5rem;\n}\n\n.projectButton:last-child{\n    gap: 2%;\n}\n\n#inputContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n#createProjectInput{\n    width: 80%;\n    align-self: center;\n    border: solid 1px var(--border-color-sidenav);\n    font-size: var(--font-size-p);\n    margin-bottom: 5%;\n    margin-top: 9%;\n}\n\n#createProjectDivButtons{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n}\n\n.addCancelButton{\n    min-width: 30%;\n    min-height: 15%;\n    cursor: pointer;\n    font-weight: bold;\n}\n\n#projectAdd{\n    background-color: var(--button-backgroud-color-add);\n    border: solid 1px var(--border-color-add);\n}\n\n#projectAdd:hover{\n    background-color: var(--button-backgroud-color-add-hover);\n}\n\n#projectCancel{\n    background-color: var(--button-backgroud-color-cancel);\n    border: solid 1px var(--border-color-cancel);\n}\n\n#projectCancel:hover{\n    background-color: var(--button-backgroud-color-cancel-hover);\n}\n\n\n#rightContainer{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n}\n\n#headerContainer{\n    background-color: var(--background-color-header);\n}\n\n#headerText{\n    font-style: oblique;\n    padding: 1%;\n    padding-left: 10%;\n    border-bottom: solid 1px var(--border-color-sidenav);\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/ui.css":
/*!***************************!*\
  !*** ./src/styles/ui.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ui_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./ui.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/ui.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ui_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ui_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ui_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ui_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/ui */ "./src/pages/ui.js");


try{
    createUI();
}
catch(e){
    throw "Problem w wygenerowaniu UI w createUI(); \n" + e.message;
}

function createUI(){
    try{
        document.body.appendChild((0,_pages_ui__WEBPACK_IMPORTED_MODULE_0__.createSidenav)());
    }
    catch(e){
        throw "Problem w wygenerowaniu sidenava \n" + e.message;
    }
    try{
        document.body.appendChild((0,_pages_ui__WEBPACK_IMPORTED_MODULE_0__.createRightSection)());
    }
    catch(e){
        throw "Problem w wygenerowaniu prawego containera \n" + e.message;
    }
    
}

/***/ }),

/***/ "./src/pages/builders.js":
/*!*******************************!*\
  !*** ./src/pages/builders.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContainer": () => (/* binding */ createContainer),
/* harmony export */   "createImg": () => (/* binding */ createImg),
/* harmony export */   "createText": () => (/* binding */ createText)
/* harmony export */ });
function createContainer(){

}

function createText(type, classId, className, textValue){
    const text = document.createElement(type);
    text.id = classId;
    text.className = className
    text.textContent = textValue;

    if (classId === null){
        text.removeAttribute('id');
    }
    if (className === null){
        text.removeAttribute('id');
    }

    return text;
}

function createImg(className,src){
    const img = document.createElement('img');
    img.classList = className;
    img.src = src;

    return img;
}

/***/ }),

/***/ "./src/pages/projects.js":
/*!*******************************!*\
  !*** ./src/pages/projects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewProject": () => (/* binding */ addNewProject),
/* harmony export */   "addProjectButon": () => (/* binding */ addProjectButon)
/* harmony export */ });
/* harmony import */ var _assets_images_add_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/add.svg */ "./src/assets/images/add.svg");
/* harmony import */ var _assets_images_list_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/list.svg */ "./src/assets/images/list.svg");
/* harmony import */ var _builders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./builders */ "./src/pages/builders.js");




const projectsList = [];

function addProjectButon(div){
    const button = document.createElement('button');
    button.className = "projectButton";
    button.id = "createProjectButton";
    button.addEventListener('click', function(){addNewProject(div)})
    div.appendChild(button);

    button.appendChild((0,_builders__WEBPACK_IMPORTED_MODULE_2__.createImg)("sidenavImage", _assets_images_add_svg__WEBPACK_IMPORTED_MODULE_0__));
    button.appendChild((0,_builders__WEBPACK_IMPORTED_MODULE_2__.createText)("p", null, "sidenavText", "Add Project"));

}

function addNewProject(createProjectDiv){
    try{
        createProjectDiv.removeChild(createProjectDiv.firstChild);
    }
    catch(e){
        console.log("Error in addNewProject \n" + e);
    }
    finally{
        addProjectInput(createProjectDiv)
    }

}


function addProjectInput(div){
    const container = document.createElement('container');
    container.id = "inputContainer";
    div.appendChild(container);

    const input = document.createElement('input');
    input.id = "createProjectInput";
    input.placeholder = "Project name";
    container.appendChild(input);

    const divButtons = document.createElement('div');
    divButtons.id = "createProjectDivButtons";
    container.appendChild(divButtons);
    
    divButtons.appendChild(createButton("projectAdd"));
    divButtons.appendChild(createButton("projectCancel"));

    return input;
}

function createButton(type){
    const button = document.createElement('button');
    button.className = "addCancelButton";
    button.id = type;
    if (type === "projectAdd"){
        button.textContent = "Add";
        button.addEventListener('click', function(){
            addProject();
        })
        
    }
    if (type === "projectCancel"){
        button.textContent = "Cancel";
        button.addEventListener('click', function(){
            removeProjectInput();
        })
    }

    return button;
}

function addProject(){
    const projectName = document.getElementById("createProjectInput").value;
    createProjectButton(projectName);
    projectsList.push(projectName);
    removeProjectInput();
}

function removeProjectInput(){
    addProjectButon(document.getElementById("createProjectDiv"));
    createProjectDiv.removeChild(createProjectDiv.firstChild);
}

function createProjectButton(name){
    const button = document.createElement('button');
    button.id = "projectButton" + projectsList.length;
    button.className = "projectButton";

    button.appendChild((0,_builders__WEBPACK_IMPORTED_MODULE_2__.createImg)("sidenavImage", _assets_images_list_svg__WEBPACK_IMPORTED_MODULE_1__));
    button.appendChild((0,_builders__WEBPACK_IMPORTED_MODULE_2__.createText)("p", null, "sidenavText", name));

    const projectsContainer = document.getElementById("projectsContainer");
    projectsContainer.insertBefore(button, projectsContainer.lastChild);

}




/***/ }),

/***/ "./src/pages/ui.js":
/*!*************************!*\
  !*** ./src/pages/ui.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRightSection": () => (/* binding */ createRightSection),
/* harmony export */   "createSidenav": () => (/* binding */ createSidenav)
/* harmony export */ });
/* harmony import */ var _styles_ui_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/ui.css */ "./src/styles/ui.css");
/* harmony import */ var _assets_images_inbox_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/inbox.svg */ "./src/assets/images/inbox.svg");
/* harmony import */ var _assets_images_today_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/today.svg */ "./src/assets/images/today.svg");
/* harmony import */ var _assets_images_week_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/week.svg */ "./src/assets/images/week.svg");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects */ "./src/pages/projects.js");








function createSidenav(){
    const sidenavContainer = document.createElement('sidenav');
    sidenavContainer.id = "sidenav";

    const mainContainer = document.createElement('container');
    mainContainer.id = "mainSidenavContainer";
    sidenavContainer.appendChild(mainContainer);

    mainContainer.appendChild(createSideButton("Inbox", _assets_images_inbox_svg__WEBPACK_IMPORTED_MODULE_1__));
    mainContainer.appendChild(createSideButton("Today", _assets_images_today_svg__WEBPACK_IMPORTED_MODULE_2__));
    mainContainer.appendChild(createSideButton("This week", _assets_images_week_svg__WEBPACK_IMPORTED_MODULE_3__));

    const projectsText = document.createElement('div');
    projectsText.id = "sidenavProjectText";
    projectsText.textContent = "Projects";
    mainContainer.appendChild(projectsText);

    const projectsContainer = document.createElement('container');
    projectsContainer.id = "projectsContainer";
    mainContainer.appendChild(projectsContainer);

    projectsContainer.appendChild(addProjectContainer());

    return sidenavContainer;
}

function createSideButton(name, icon){
    const div = document.createElement('button');
    div.className = "sidenavButton";

    const img = document.createElement('img');
    img.className = "sidenavImage";
    img.src = icon;
    div.appendChild(img);

    const text = document.createElement('p');
    text.className = "sidenavText";
    text.textContent = name;
    div.appendChild(text);

    return div;
}

function addProjectContainer(){
    const div = document.createElement('div');
    div.id = "createProjectDiv";

    (0,_projects__WEBPACK_IMPORTED_MODULE_4__.addProjectButon)(div);

    return div;
}

function createRightSection(){
    const container = document.createElement('container');
    container.id = "rightContainer";
    container.appendChild(createHeader());
    container.appendChild(createMain());

    return container;
}


function createHeader(){
    const container = document.createElement('container');
    container.id = "headerContainer";
    const text = document.createElement('h1');
    text.id = "headerText";
    text.textContent = "List doTo";
    container.appendChild(text);

    return container;
}

function createMain(){
    const container = document.createElement('contaier');
    container.id = "mainContainer";


    return container;
}

/***/ }),

/***/ "./src/assets/images/add.svg":
/*!***********************************!*\
  !*** ./src/assets/images/add.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/add.svg";

/***/ }),

/***/ "./src/assets/images/inbox.svg":
/*!*************************************!*\
  !*** ./src/assets/images/inbox.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/inbox.svg";

/***/ }),

/***/ "./src/assets/images/list.svg":
/*!************************************!*\
  !*** ./src/assets/images/list.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/list.svg";

/***/ }),

/***/ "./src/assets/images/today.svg":
/*!*************************************!*\
  !*** ./src/assets/images/today.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/today.svg";

/***/ }),

/***/ "./src/assets/images/week.svg":
/*!************************************!*\
  !*** ./src/assets/images/week.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/week.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RWpDOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsb0RBQVMsaUJBQWlCLG9EQUFJO0FBQ3JELHVCQUF1QixxREFBVTs7QUFFakM7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoR3lCO0FBQ3NCO0FBQ0E7QUFDRjs7QUFFQTs7O0FBR3RDO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0RBQXdELHFEQUFLO0FBQzdELHdEQUF3RCxxREFBSztBQUM3RCw0REFBNEQsb0RBQUk7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDBEQUFlOztBQUVuQjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL3NyYy9zdHlsZXMvdWkuY3NzIiwid2VicGFjazovL3RvZG9vZGluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vc3JjL3N0eWxlcy91aS5jc3M/ODFiMyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vc3JjL3BhZ2VzL2J1aWxkZXJzLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vc3JjL3BhZ2VzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vc3JjL3BhZ2VzL3VpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gICAgLS1mb250LXNpemUtcDogY2xhbXAoLjVyZW0sIDIwcHgsIDJyZW0pO1xcbiAgICAtLWZvbnQtc2l6ZS1oMzogMjZweDtcXG5cXG4gICAgLS1ib3JkZXItY29sb3Itc2lkZW5hdjogIzAwMDAwMDU1O1xcblxcbiAgICAtLWJhY2tncm91bmQtY29sb3Itc2lkZW5hdjogI0ZDRkNGQztcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yLWhlYWRlcjogI0YzRjNGMztcXG4gICAgLS1idXR0b24tYmFja2dyb3VkLWNvbG9yLWFkZDogIzY5ZmY2OTExO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdWQtY29sb3ItYWRkLWhvdmVyOiAjNjlmZjY5MzM7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91ZC1jb2xvci1jYW5jZWw6ICNmZjZiNmIxMTs7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91ZC1jb2xvci1jYW5jZWwtaG92ZXI6ICNmZjZiNmIzMztcXG4gICAgLS1ib3JkZXItY29sb3ItYWRkOiAjMzNmZjMzO1xcbiAgICAtLWJvcmRlci1jb2xvci1jYW5jZWw6ICNmZjMzMzM7XFxufVxcblxcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwZHZoO1xcbiAgICB3aWR0aDogMTAwZHZ3O1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzaWRlbmF2e1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4jbWFpblNpZGVuYXZDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1zaWRlbmF2KTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAwLjVweCB2YXIoLS1ib3JkZXItY29sb3Itc2lkZW5hdik7XFxufVxcblxcbi5zaWRlbmF2QnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBnYXA6IDMlO1xcbiAgICBtYXJnaW4tdG9wOiA5JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZW5hdkJ1dHRvbjpmaXJzdC1jaGlsZHtcXG4gICAgbWFyZ2luLXRvcDogMzAlO1xcbn1cXG5cXG4uc2lkZW5hdlRleHR7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtcCk7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcXG4gICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnNpZGVuYXZJbWFnZXtcXG4gICAgbWF4LXdpZHRoOiAxLjVyZW07XFxuICAgIG1heC1oZWlnaHQ6IGF1dG87XFxufVxcblxcbiNzaWRlbmF2UHJvamVjdFRleHR7XFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgICBtYXJnaW4tdG9wOiAyMCU7XFxuICAgIHBhZGRpbmctdG9wOiA1JTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDMpO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yLXNpZGVuYXYpO1xcbn1cXG5cXG4jY3JlYXRlUHJvamVjdERpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3RCdXR0b257XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XFxuICAgIG1hcmdpbi10b3A6IDklO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbjpsYXN0LWNoaWxke1xcbiAgICBnYXA6IDIlO1xcbn1cXG5cXG4jaW5wdXRDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjcmVhdGVQcm9qZWN0SW5wdXR7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yLXNpZGVuYXYpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1wKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxuICAgIG1hcmdpbi10b3A6IDklO1xcbn1cXG5cXG4jY3JlYXRlUHJvamVjdERpdkJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDUlO1xcbn1cXG5cXG4uYWRkQ2FuY2VsQnV0dG9ue1xcbiAgICBtaW4td2lkdGg6IDMwJTtcXG4gICAgbWluLWhlaWdodDogMTUlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jcHJvamVjdEFkZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91ZC1jb2xvci1hZGQpO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3ItYWRkKTtcXG59XFxuXFxuI3Byb2plY3RBZGQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdWQtY29sb3ItYWRkLWhvdmVyKTtcXG59XFxuXFxuI3Byb2plY3RDYW5jZWx7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdWQtY29sb3ItY2FuY2VsKTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yLWNhbmNlbCk7XFxufVxcblxcbiNwcm9qZWN0Q2FuY2VsOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VkLWNvbG9yLWNhbmNlbC1ob3Zlcik7XFxufVxcblxcblxcbiNyaWdodENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNoZWFkZXJDb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItaGVhZGVyKTtcXG59XFxuXFxuI2hlYWRlclRleHR7XFxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvci1zaWRlbmF2KTtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy91aS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsb0JBQW9COztJQUVwQixpQ0FBaUM7O0lBRWpDLG1DQUFtQztJQUNuQyxrQ0FBa0M7SUFDbEMsdUNBQXVDO0lBQ3ZDLDZDQUE2QztJQUM3QywwQ0FBMEM7SUFDMUMsZ0RBQWdEO0lBQ2hELDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjs7SUFFdEIsWUFBWTtJQUNaLDJDQUEyQztJQUMzQyxxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixPQUFPO0lBQ1AsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiw2Q0FBNkM7SUFDN0MsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsT0FBTztBQUNYOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbURBQW1EO0lBQ25ELHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLHlEQUF5RDtBQUM3RDs7QUFFQTtJQUNJLHNEQUFzRDtJQUN0RCw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSw0REFBNEQ7QUFDaEU7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixvREFBb0Q7QUFDeERcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdHtcXG4gICAgLS1mb250LXNpemUtcDogY2xhbXAoLjVyZW0sIDIwcHgsIDJyZW0pO1xcbiAgICAtLWZvbnQtc2l6ZS1oMzogMjZweDtcXG5cXG4gICAgLS1ib3JkZXItY29sb3Itc2lkZW5hdjogIzAwMDAwMDU1O1xcblxcbiAgICAtLWJhY2tncm91bmQtY29sb3Itc2lkZW5hdjogI0ZDRkNGQztcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yLWhlYWRlcjogI0YzRjNGMztcXG4gICAgLS1idXR0b24tYmFja2dyb3VkLWNvbG9yLWFkZDogIzY5ZmY2OTExO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdWQtY29sb3ItYWRkLWhvdmVyOiAjNjlmZjY5MzM7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91ZC1jb2xvci1jYW5jZWw6ICNmZjZiNmIxMTs7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91ZC1jb2xvci1jYW5jZWwtaG92ZXI6ICNmZjZiNmIzMztcXG4gICAgLS1ib3JkZXItY29sb3ItYWRkOiAjMzNmZjMzO1xcbiAgICAtLWJvcmRlci1jb2xvci1jYW5jZWw6ICNmZjMzMzM7XFxufVxcblxcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwZHZoO1xcbiAgICB3aWR0aDogMTAwZHZ3O1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzaWRlbmF2e1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4jbWFpblNpZGVuYXZDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1zaWRlbmF2KTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAwLjVweCB2YXIoLS1ib3JkZXItY29sb3Itc2lkZW5hdik7XFxufVxcblxcbi5zaWRlbmF2QnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBnYXA6IDMlO1xcbiAgICBtYXJnaW4tdG9wOiA5JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZW5hdkJ1dHRvbjpmaXJzdC1jaGlsZHtcXG4gICAgbWFyZ2luLXRvcDogMzAlO1xcbn1cXG5cXG4uc2lkZW5hdlRleHR7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtcCk7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcXG4gICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnNpZGVuYXZJbWFnZXtcXG4gICAgbWF4LXdpZHRoOiAxLjVyZW07XFxuICAgIG1heC1oZWlnaHQ6IGF1dG87XFxufVxcblxcbiNzaWRlbmF2UHJvamVjdFRleHR7XFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgICBtYXJnaW4tdG9wOiAyMCU7XFxuICAgIHBhZGRpbmctdG9wOiA1JTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDMpO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yLXNpZGVuYXYpO1xcbn1cXG5cXG4jY3JlYXRlUHJvamVjdERpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3RCdXR0b257XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XFxuICAgIG1hcmdpbi10b3A6IDklO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbjpsYXN0LWNoaWxke1xcbiAgICBnYXA6IDIlO1xcbn1cXG5cXG4jaW5wdXRDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjcmVhdGVQcm9qZWN0SW5wdXR7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yLXNpZGVuYXYpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1wKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxuICAgIG1hcmdpbi10b3A6IDklO1xcbn1cXG5cXG4jY3JlYXRlUHJvamVjdERpdkJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDUlO1xcbn1cXG5cXG4uYWRkQ2FuY2VsQnV0dG9ue1xcbiAgICBtaW4td2lkdGg6IDMwJTtcXG4gICAgbWluLWhlaWdodDogMTUlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jcHJvamVjdEFkZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91ZC1jb2xvci1hZGQpO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3ItYWRkKTtcXG59XFxuXFxuI3Byb2plY3RBZGQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdWQtY29sb3ItYWRkLWhvdmVyKTtcXG59XFxuXFxuI3Byb2plY3RDYW5jZWx7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdWQtY29sb3ItY2FuY2VsKTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yLWNhbmNlbCk7XFxufVxcblxcbiNwcm9qZWN0Q2FuY2VsOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VkLWNvbG9yLWNhbmNlbC1ob3Zlcik7XFxufVxcblxcblxcbiNyaWdodENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNoZWFkZXJDb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItaGVhZGVyKTtcXG59XFxuXFxuI2hlYWRlclRleHR7XFxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvci1zaWRlbmF2KTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdWkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91aS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7Y3JlYXRlU2lkZW5hdiwgY3JlYXRlUmlnaHRTZWN0aW9ufSBmcm9tICcuL3BhZ2VzL3VpJztcblxudHJ5e1xuICAgIGNyZWF0ZVVJKCk7XG59XG5jYXRjaChlKXtcbiAgICB0aHJvdyBcIlByb2JsZW0gdyB3eWdlbmVyb3dhbml1IFVJIHcgY3JlYXRlVUkoKTsgXFxuXCIgKyBlLm1lc3NhZ2U7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVJKCl7XG4gICAgdHJ5e1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVNpZGVuYXYoKSk7XG4gICAgfVxuICAgIGNhdGNoKGUpe1xuICAgICAgICB0aHJvdyBcIlByb2JsZW0gdyB3eWdlbmVyb3dhbml1IHNpZGVuYXZhIFxcblwiICsgZS5tZXNzYWdlO1xuICAgIH1cbiAgICB0cnl7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlUmlnaHRTZWN0aW9uKCkpO1xuICAgIH1cbiAgICBjYXRjaChlKXtcbiAgICAgICAgdGhyb3cgXCJQcm9ibGVtIHcgd3lnZW5lcm93YW5pdSBwcmF3ZWdvIGNvbnRhaW5lcmEgXFxuXCIgKyBlLm1lc3NhZ2U7XG4gICAgfVxuICAgIFxufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250YWluZXIoKXtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGV4dCh0eXBlLCBjbGFzc0lkLCBjbGFzc05hbWUsIHRleHRWYWx1ZSl7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgdGV4dC5pZCA9IGNsYXNzSWQ7XG4gICAgdGV4dC5jbGFzc05hbWUgPSBjbGFzc05hbWVcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gdGV4dFZhbHVlO1xuXG4gICAgaWYgKGNsYXNzSWQgPT09IG51bGwpe1xuICAgICAgICB0ZXh0LnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcbiAgICB9XG4gICAgaWYgKGNsYXNzTmFtZSA9PT0gbnVsbCl7XG4gICAgICAgIHRleHQucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1nKGNsYXNzTmFtZSxzcmMpe1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5jbGFzc0xpc3QgPSBjbGFzc05hbWU7XG4gICAgaW1nLnNyYyA9IHNyYztcblxuICAgIHJldHVybiBpbWc7XG59IiwiaW1wb3J0IGFkZCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2FkZC5zdmcnO1xuaW1wb3J0IGxpc3QgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9saXN0LnN2Zyc7XG5pbXBvcnQgeyBjcmVhdGVJbWcsIGNyZWF0ZVRleHQgfSBmcm9tICcuL2J1aWxkZXJzJztcblxuY29uc3QgcHJvamVjdHNMaXN0ID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0QnV0b24oZGl2KXtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NOYW1lID0gXCJwcm9qZWN0QnV0dG9uXCI7XG4gICAgYnV0dG9uLmlkID0gXCJjcmVhdGVQcm9qZWN0QnV0dG9uXCI7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXthZGROZXdQcm9qZWN0KGRpdil9KVxuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGNyZWF0ZUltZyhcInNpZGVuYXZJbWFnZVwiLCBhZGQpKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dChcInBcIiwgbnVsbCwgXCJzaWRlbmF2VGV4dFwiLCBcIkFkZCBQcm9qZWN0XCIpKTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3UHJvamVjdChjcmVhdGVQcm9qZWN0RGl2KXtcbiAgICB0cnl7XG4gICAgICAgIGNyZWF0ZVByb2plY3REaXYucmVtb3ZlQ2hpbGQoY3JlYXRlUHJvamVjdERpdi5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgY2F0Y2goZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgaW4gYWRkTmV3UHJvamVjdCBcXG5cIiArIGUpO1xuICAgIH1cbiAgICBmaW5hbGx5e1xuICAgICAgICBhZGRQcm9qZWN0SW5wdXQoY3JlYXRlUHJvamVjdERpdilcbiAgICB9XG5cbn1cblxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0SW5wdXQoZGl2KXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb250YWluZXInKTtcbiAgICBjb250YWluZXIuaWQgPSBcImlucHV0Q29udGFpbmVyXCI7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuaWQgPSBcImNyZWF0ZVByb2plY3RJbnB1dFwiO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCJQcm9qZWN0IG5hbWVcIjtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgY29uc3QgZGl2QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkJ1dHRvbnMuaWQgPSBcImNyZWF0ZVByb2plY3REaXZCdXR0b25zXCI7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkJ1dHRvbnMpO1xuICAgIFxuICAgIGRpdkJ1dHRvbnMuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKFwicHJvamVjdEFkZFwiKSk7XG4gICAgZGl2QnV0dG9ucy5hcHBlbmRDaGlsZChjcmVhdGVCdXR0b24oXCJwcm9qZWN0Q2FuY2VsXCIpKTtcblxuICAgIHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKHR5cGUpe1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcImFkZENhbmNlbEJ1dHRvblwiO1xuICAgIGJ1dHRvbi5pZCA9IHR5cGU7XG4gICAgaWYgKHR5cGUgPT09IFwicHJvamVjdEFkZFwiKXtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGFkZFByb2plY3QoKTtcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfVxuICAgIGlmICh0eXBlID09PSBcInByb2plY3RDYW5jZWxcIil7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZW1vdmVQcm9qZWN0SW5wdXQoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCl7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZVByb2plY3RJbnB1dFwiKS52YWx1ZTtcbiAgICBjcmVhdGVQcm9qZWN0QnV0dG9uKHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0c0xpc3QucHVzaChwcm9qZWN0TmFtZSk7XG4gICAgcmVtb3ZlUHJvamVjdElucHV0KCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3RJbnB1dCgpe1xuICAgIGFkZFByb2plY3RCdXRvbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZVByb2plY3REaXZcIikpO1xuICAgIGNyZWF0ZVByb2plY3REaXYucmVtb3ZlQ2hpbGQoY3JlYXRlUHJvamVjdERpdi5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEJ1dHRvbihuYW1lKXtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uaWQgPSBcInByb2plY3RCdXR0b25cIiArIHByb2plY3RzTGlzdC5sZW5ndGg7XG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwicHJvamVjdEJ1dHRvblwiO1xuXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGNyZWF0ZUltZyhcInNpZGVuYXZJbWFnZVwiLCBsaXN0KSk7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHQoXCJwXCIsIG51bGwsIFwic2lkZW5hdlRleHRcIiwgbmFtZSkpO1xuXG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzQ29udGFpbmVyXCIpO1xuICAgIHByb2plY3RzQ29udGFpbmVyLmluc2VydEJlZm9yZShidXR0b24sIHByb2plY3RzQ29udGFpbmVyLmxhc3RDaGlsZCk7XG5cbn1cblxuXG4iLCJpbXBvcnQgJy4uL3N0eWxlcy91aS5jc3MnXG5pbXBvcnQgaW5ib3ggZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9pbmJveC5zdmcnO1xuaW1wb3J0IHRvZGF5IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvdG9kYXkuc3ZnJztcbmltcG9ydCB3ZWVrIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvd2Vlay5zdmcnO1xuXG5pbXBvcnQgeyBhZGRQcm9qZWN0QnV0b24gfSBmcm9tICcuL3Byb2plY3RzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2lkZW5hdigpe1xuICAgIGNvbnN0IHNpZGVuYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzaWRlbmF2Jyk7XG4gICAgc2lkZW5hdkNvbnRhaW5lci5pZCA9IFwic2lkZW5hdlwiO1xuXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NvbnRhaW5lcicpO1xuICAgIG1haW5Db250YWluZXIuaWQgPSBcIm1haW5TaWRlbmF2Q29udGFpbmVyXCI7XG4gICAgc2lkZW5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2lkZUJ1dHRvbihcIkluYm94XCIsIGluYm94KSk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTaWRlQnV0dG9uKFwiVG9kYXlcIiwgdG9kYXkpKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVNpZGVCdXR0b24oXCJUaGlzIHdlZWtcIiwgd2VlaykpO1xuXG4gICAgY29uc3QgcHJvamVjdHNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHNUZXh0LmlkID0gXCJzaWRlbmF2UHJvamVjdFRleHRcIjtcbiAgICBwcm9qZWN0c1RleHQudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c1RleHQpO1xuXG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb250YWluZXInKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5pZCA9IFwicHJvamVjdHNDb250YWluZXJcIjtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzQ29udGFpbmVyKTtcblxuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RDb250YWluZXIoKSk7XG5cbiAgICByZXR1cm4gc2lkZW5hdkNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZUJ1dHRvbihuYW1lLCBpY29uKXtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJzaWRlbmF2QnV0dG9uXCI7XG5cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuY2xhc3NOYW1lID0gXCJzaWRlbmF2SW1hZ2VcIjtcbiAgICBpbWcuc3JjID0gaWNvbjtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dC5jbGFzc05hbWUgPSBcInNpZGVuYXZUZXh0XCI7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdENvbnRhaW5lcigpe1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pZCA9IFwiY3JlYXRlUHJvamVjdERpdlwiO1xuXG4gICAgYWRkUHJvamVjdEJ1dG9uKGRpdik7XG5cbiAgICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmlnaHRTZWN0aW9uKCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmlkID0gXCJyaWdodENvbnRhaW5lclwiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5pZCA9IFwiaGVhZGVyQ29udGFpbmVyXCI7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGV4dC5pZCA9IFwiaGVhZGVyVGV4dFwiO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBcIkxpc3QgZG9Ub1wiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb250YWllcicpO1xuICAgIGNvbnRhaW5lci5pZCA9IFwibWFpbkNvbnRhaW5lclwiO1xuXG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==