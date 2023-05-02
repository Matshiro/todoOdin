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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --font-size-p: clamp(.5rem, 20px, 2rem);\n    --font-size-h3: 26px;\n    --font-size-h2: 32px;\n\n    --border-color-sidenav: #00000055;\n\n    --background-color-sidenav: #FCFCFC;\n    --background-color-header: #F3F3F3;\n    --button-backgroud-color-add: #69ff6911;\n    --button-backgroud-color-add-hover: #69ff6933;\n    --button-backgroud-color-cancel: #ff6b6b11;;\n    --button-backgroud-color-cancel-hover: #ff6b6b33;\n    --button-backgroud-color-active: #DDD;\n    --button-backgroud-color-hover: #EEE;\n    --border-color-add: #33ff33;\n    --border-color-cancel: #ff3333;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-family: 'Roboto', sans-serif;\n}\nbody{\n    height: 100dvh;\n    width: 100dvw;\n    overflow-y: hidden;\n    display: flex;\n}\n\n#sidenav{\n    width: 15%;\n    min-width: 250px;\n}\n\n#mainSidenavContainer{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    background: var(--background-color-sidenav);\n    border-right: solid 0.5px var(--border-color-sidenav);\n}\n\n.sidenavButton{\n    display: flex;\n    align-items: flex-end;\n    background: transparent;\n    width: 80%;\n    border-radius: 5px;\n    padding: 2%;\n    gap: 3%;\n    margin-top: 6%;\n    margin-left: 14%;\n    cursor: pointer;\n}\n\n.sidenavButton:hover{\n    background-color: var(--button-backgroud-color-hover);\n}\n\n.buttonClicked{\n    background-color: var(--button-backgroud-color-active) !important;\n}\n\n.sidenavButton:first-child{\n    margin-top: 30%;\n}\n\n.sidenavText{\n    min-width: 65%;\n    max-width: 65%;\n    font-size: var(--font-size-p);\n    font-weight: 200;\n    margin-left: 2%;\n    text-align: left;\n    text-overflow:ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.sidenavImage{\n    max-width: 1.5rem;\n    max-height: auto;\n}\n\n#sidenavProjectText{\n    padding-left: 10%;\n    margin-top: 20%;\n    padding-top: 5%;\n    font-size: var(--font-size-h3);\n    font-weight: 800;\n    border-top: solid 1px var(--border-color-sidenav);\n}\n\n#createProjectDiv{\n    display: flex;\n    flex-direction: column;\n}\n\n.projectButton{\n    background: transparent;\n    cursor: pointer;\n    display: flex;\n    width: 80%;\n    padding: 2%;\n    border-radius: 5px;\n    margin-left: 14%;\n    margin-top: 6%;\n    gap: .5rem;\n}\n\n.projectButton:hover{\n    background-color: var(--button-backgroud-color-hover);\n}\n\n.projectButton:last-child{\n    gap: 2%;\n}\n\n#inputContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n#createProjectInput{\n    width: 80%;\n    align-self: center;\n    border: solid 1px var(--border-color-sidenav);\n    font-size: var(--font-size-p);\n    margin-bottom: 5%;\n    margin-top: 9%;\n}\n\n\n#createProjectDivButtons{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n}\n\n.addCancelButton{\n    min-width: 30%;\n    min-height: 15%;\n    cursor: pointer;\n    font-weight: bold;\n}\n\n#projectAdd{\n    background-color: var(--button-backgroud-color-add);\n    border: solid 1px var(--border-color-add);\n}\n\n#projectAdd:hover{\n    background-color: var(--button-backgroud-color-add-hover);\n}\n\n#projectCancel{\n    background-color: var(--button-backgroud-color-cancel);\n    border: solid 1px var(--border-color-cancel);\n}\n\n#projectCancel:hover{\n    background-color: var(--button-backgroud-color-cancel-hover);\n}\n\n.closeButton{\n    cursor: pointer;\n    background-color: transparent;\n    margin-right: 0;\n}\n\n\n#rightContainer{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n}\n\n#headerContainer{\n    background-color: var(--background-color-header);\n}\n\n#headerText{\n    font-style: oblique;\n    padding: 1%;\n    padding-left: 10%;\n    border-bottom: solid 1px var(--border-color-sidenav);\n}\n\n#mainContainer{\n    display: flex;\n    flex-direction: column;\n    margin: 2% 25%;\n}\n\n#mainSectionHeader{\n    font-size: var(--font-size-h2);\n    margin-bottom: 5%;\n}\n\n.taskButton{\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    background-color: transparent;\n    cursor: pointer;\n    padding: 1%;\n    border-radius: 5px;\n}\n.taskButton:hover{\n    background-color: var(--button-backgroud-color-hover);\n}\n\n", "",{"version":3,"sources":["webpack://./src/styles/ui.css"],"names":[],"mappings":"AAEA;IACI,uCAAuC;IACvC,oBAAoB;IACpB,oBAAoB;;IAEpB,iCAAiC;;IAEjC,mCAAmC;IACnC,kCAAkC;IAClC,uCAAuC;IACvC,6CAA6C;IAC7C,0CAA0C;IAC1C,gDAAgD;IAChD,qCAAqC;IACrC,oCAAoC;IACpC,2BAA2B;IAC3B,8BAA8B;AAClC;;AAEA;IACI,SAAS;IACT,UAAU;IACV,SAAS;IACT,iCAAiC;AACrC;AACA;IACI,cAAc;IACd,aAAa;IACb,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,2CAA2C;IAC3C,qDAAqD;AACzD;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,uBAAuB;IACvB,UAAU;IACV,kBAAkB;IAClB,WAAW;IACX,OAAO;IACP,cAAc;IACd,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,qDAAqD;AACzD;;AAEA;IACI,iEAAiE;AACrE;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,6BAA6B;IAC7B,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,sBAAsB;IACtB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,eAAe;IACf,8BAA8B;IAC9B,gBAAgB;IAChB,iDAAiD;AACrD;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;IACvB,eAAe;IACf,aAAa;IACb,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;IACd,UAAU;AACd;;AAEA;IACI,qDAAqD;AACzD;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,6CAA6C;IAC7C,6BAA6B;IAC7B,iBAAiB;IACjB,cAAc;AAClB;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,OAAO;AACX;;AAEA;IACI,cAAc;IACd,eAAe;IACf,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,mDAAmD;IACnD,yCAAyC;AAC7C;;AAEA;IACI,yDAAyD;AAC7D;;AAEA;IACI,sDAAsD;IACtD,4CAA4C;AAChD;;AAEA;IACI,4DAA4D;AAChE;;AAEA;IACI,eAAe;IACf,6BAA6B;IAC7B,eAAe;AACnB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,gDAAgD;AACpD;;AAEA;IACI,mBAAmB;IACnB,WAAW;IACX,iBAAiB;IACjB,oDAAoD;AACxD;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,cAAc;AAClB;;AAEA;IACI,8BAA8B;IAC9B,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,6BAA6B;IAC7B,eAAe;IACf,WAAW;IACX,kBAAkB;AACtB;AACA;IACI,qDAAqD;AACzD","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300&display=swap');\n\n:root{\n    --font-size-p: clamp(.5rem, 20px, 2rem);\n    --font-size-h3: 26px;\n    --font-size-h2: 32px;\n\n    --border-color-sidenav: #00000055;\n\n    --background-color-sidenav: #FCFCFC;\n    --background-color-header: #F3F3F3;\n    --button-backgroud-color-add: #69ff6911;\n    --button-backgroud-color-add-hover: #69ff6933;\n    --button-backgroud-color-cancel: #ff6b6b11;;\n    --button-backgroud-color-cancel-hover: #ff6b6b33;\n    --button-backgroud-color-active: #DDD;\n    --button-backgroud-color-hover: #EEE;\n    --border-color-add: #33ff33;\n    --border-color-cancel: #ff3333;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-family: 'Roboto', sans-serif;\n}\nbody{\n    height: 100dvh;\n    width: 100dvw;\n    overflow-y: hidden;\n    display: flex;\n}\n\n#sidenav{\n    width: 15%;\n    min-width: 250px;\n}\n\n#mainSidenavContainer{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    background: var(--background-color-sidenav);\n    border-right: solid 0.5px var(--border-color-sidenav);\n}\n\n.sidenavButton{\n    display: flex;\n    align-items: flex-end;\n    background: transparent;\n    width: 80%;\n    border-radius: 5px;\n    padding: 2%;\n    gap: 3%;\n    margin-top: 6%;\n    margin-left: 14%;\n    cursor: pointer;\n}\n\n.sidenavButton:hover{\n    background-color: var(--button-backgroud-color-hover);\n}\n\n.buttonClicked{\n    background-color: var(--button-backgroud-color-active) !important;\n}\n\n.sidenavButton:first-child{\n    margin-top: 30%;\n}\n\n.sidenavText{\n    min-width: 65%;\n    max-width: 65%;\n    font-size: var(--font-size-p);\n    font-weight: 200;\n    margin-left: 2%;\n    text-align: left;\n    text-overflow:ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.sidenavImage{\n    max-width: 1.5rem;\n    max-height: auto;\n}\n\n#sidenavProjectText{\n    padding-left: 10%;\n    margin-top: 20%;\n    padding-top: 5%;\n    font-size: var(--font-size-h3);\n    font-weight: 800;\n    border-top: solid 1px var(--border-color-sidenav);\n}\n\n#createProjectDiv{\n    display: flex;\n    flex-direction: column;\n}\n\n.projectButton{\n    background: transparent;\n    cursor: pointer;\n    display: flex;\n    width: 80%;\n    padding: 2%;\n    border-radius: 5px;\n    margin-left: 14%;\n    margin-top: 6%;\n    gap: .5rem;\n}\n\n.projectButton:hover{\n    background-color: var(--button-backgroud-color-hover);\n}\n\n.projectButton:last-child{\n    gap: 2%;\n}\n\n#inputContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n#createProjectInput{\n    width: 80%;\n    align-self: center;\n    border: solid 1px var(--border-color-sidenav);\n    font-size: var(--font-size-p);\n    margin-bottom: 5%;\n    margin-top: 9%;\n}\n\n\n#createProjectDivButtons{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n}\n\n.addCancelButton{\n    min-width: 30%;\n    min-height: 15%;\n    cursor: pointer;\n    font-weight: bold;\n}\n\n#projectAdd{\n    background-color: var(--button-backgroud-color-add);\n    border: solid 1px var(--border-color-add);\n}\n\n#projectAdd:hover{\n    background-color: var(--button-backgroud-color-add-hover);\n}\n\n#projectCancel{\n    background-color: var(--button-backgroud-color-cancel);\n    border: solid 1px var(--border-color-cancel);\n}\n\n#projectCancel:hover{\n    background-color: var(--button-backgroud-color-cancel-hover);\n}\n\n.closeButton{\n    cursor: pointer;\n    background-color: transparent;\n    margin-right: 0;\n}\n\n\n#rightContainer{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n}\n\n#headerContainer{\n    background-color: var(--background-color-header);\n}\n\n#headerText{\n    font-style: oblique;\n    padding: 1%;\n    padding-left: 10%;\n    border-bottom: solid 1px var(--border-color-sidenav);\n}\n\n#mainContainer{\n    display: flex;\n    flex-direction: column;\n    margin: 2% 25%;\n}\n\n#mainSectionHeader{\n    font-size: var(--font-size-h2);\n    margin-bottom: 5%;\n}\n\n.taskButton{\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    background-color: transparent;\n    cursor: pointer;\n    padding: 1%;\n    border-radius: 5px;\n}\n.taskButton:hover{\n    background-color: var(--button-backgroud-color-hover);\n}\n\n"],"sourceRoot":""}]);
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
/* harmony import */ var _pages_mainSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/mainSection */ "./src/pages/mainSection.js");




createUI();


function createUI(){
    try{
        document.body.appendChild((0,_pages_ui__WEBPACK_IMPORTED_MODULE_0__.createSidenav)());
    }
    catch(e){
        throw "Problem w wygenerowaniu sidenava \n" + e.message;
    }
    try{
        document.body.appendChild((0,_pages_ui__WEBPACK_IMPORTED_MODULE_0__.createRightSection)());
        (0,_pages_mainSection__WEBPACK_IMPORTED_MODULE_1__.showInbox)();
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
/* harmony export */   "createAddProjectTask": () => (/* binding */ createAddProjectTask),
/* harmony export */   "createButton": () => (/* binding */ createButton),
/* harmony export */   "createContainer": () => (/* binding */ createContainer),
/* harmony export */   "createImg": () => (/* binding */ createImg),
/* harmony export */   "createText": () => (/* binding */ createText)
/* harmony export */ });
function createContainer(){
    console.log("a");
}

function createText(type, id, className, textValue){
    const text = document.createElement(type);
    text.textContent = textValue;

    if (id !== null){
        text.id = id;
    }
    if (className !== null){
        text.className = className;
    }

    return text;
}

function createImg(id = null, className, src){
    const img = document.createElement('img');
    if (id != null){
        img.id = id;
    }
    if (className != null){
        img.className = className;
    }
    if (src != null){
        img.src = src;
    }
    
    return img;
}

function createButton(id, className, buttonText = null){
    const button = document.createElement('button');

    if (id !== null){
        button.id = id;
    }
    if (className !== null){
        button.className = className;
    }
    if (buttonText !== null){
        button.textContent = buttonText;
    }
    return button;
}


function createAddProjectTask(div, isProject){

}



/***/ }),

/***/ "./src/pages/mainSection.js":
/*!**********************************!*\
  !*** ./src/pages/mainSection.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showInbox": () => (/* binding */ showInbox)
/* harmony export */ });
/* harmony import */ var _builders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builders */ "./src/pages/builders.js");
/* harmony import */ var _assets_images_add_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/add.svg */ "./src/assets/images/add.svg");
/* harmony import */ var _projectsAndTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectsAndTasks */ "./src/pages/projectsAndTasks.js");






function showInbox(){
    const taskContainer = document.getElementById("taskContainer");
    taskContainer.appendChild(buttonAddTask("Inbox", taskContainer));
    getTaskList("Inbox", taskContainer);
}

function showToday(){

}

function showThisWeek(){

}

function showProject(projectName){

}

function clearSection(){

}

function buttonAddTask(projectName, contaier){
    const button = (0,_builders__WEBPACK_IMPORTED_MODULE_0__.createButton)(projectName, "taskButton");
    button.appendChild((0,_builders__WEBPACK_IMPORTED_MODULE_0__.createImg)(null, "sidenavImage", _assets_images_add_svg__WEBPACK_IMPORTED_MODULE_1__));
    button.appendChild((0,_builders__WEBPACK_IMPORTED_MODULE_0__.createText)("p", null, "sidenavText", "Add Task"));
    button.addEventListener("click", function(){
        (0,_projectsAndTasks__WEBPACK_IMPORTED_MODULE_2__.addNewProject)(contaier, "task");
    });
    return button;
}

function getTaskList(projectName, container){
    const listOfValues = [..._projectsAndTasks__WEBPACK_IMPORTED_MODULE_2__.projectsList.get(projectName).values()]
    listOfValues.forEach(element => {
        const taskButtonId = container.querySelector("#taskButton"+element);
        if (taskButtonId != undefined){
            return;
        }
        (0,_projectsAndTasks__WEBPACK_IMPORTED_MODULE_2__.createTaskButton)(element);
    })
}

/***/ }),

/***/ "./src/pages/projectsAndTasks.js":
/*!***************************************!*\
  !*** ./src/pages/projectsAndTasks.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewProject": () => (/* binding */ addNewProject),
/* harmony export */   "addProjectButon": () => (/* binding */ addProjectButon),
/* harmony export */   "createTaskButton": () => (/* binding */ createTaskButton),
/* harmony export */   "projectsList": () => (/* binding */ projectsList)
/* harmony export */ });
/* harmony import */ var _assets_images_add_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/add.svg */ "./src/assets/images/add.svg");
/* harmony import */ var _assets_images_list_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/list.svg */ "./src/assets/images/list.svg");
/* harmony import */ var _assets_images_close_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/close.svg */ "./src/assets/images/close.svg");
/* harmony import */ var _builders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./builders */ "./src/pages/builders.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui */ "./src/pages/ui.js");
/* harmony import */ var _mainSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mainSection */ "./src/pages/mainSection.js");







const projectsList = new Map;
projectsList.set("Inbox",[]);

function addProjectButon(div){
    const button = document.createElement('button');
    button.className = "projectButton";
    button.id = "createProjectButton";
    button.addEventListener('click', function(){addNewProject(div, "project")})
    div.appendChild(button);

    button.appendChild((0,_builders__WEBPACK_IMPORTED_MODULE_3__.createImg)(null, "sidenavImage", _assets_images_add_svg__WEBPACK_IMPORTED_MODULE_0__));
    button.appendChild((0,_builders__WEBPACK_IMPORTED_MODULE_3__.createText)("p", null, "sidenavText", "Add Project"));

}

function addNewProject(createProjectDiv, type){
    try{
        createProjectDiv.removeChild(createProjectDiv.lastChild);
    }
    catch(e){
        console.log("Error in addNewProject \n" + e);
    }
    finally{
        addInput(createProjectDiv, type)
    }
}

function addInput(div, type, project = null){
    const container = document.createElement('container');
    container.id = "inputContainer";
    div.appendChild(container);

    const input = document.createElement('input');
    if (type == "project"){
        input.id = "createProjectInput";
        input.placeholder = "Project name";
    }
    if (type == "task"){
        input.id = "createTaskInput";
        input.placeholder = "Task name";
    }
    container.appendChild(input);

    const divButtons = document.createElement('div');
    divButtons.id = "createProjectDivButtons";
    container.appendChild(divButtons);
    
    const buttonAdd = (0,_builders__WEBPACK_IMPORTED_MODULE_3__.createButton)("projectAdd", "addCancelButton", "Add");
    buttonAdd.addEventListener("click", function(){
        if (type == "project"){
            addProject();
        }
        if (type == "task"){
            addTask(project, container);
        }
    });
    divButtons.appendChild(buttonAdd);

    const buttonCancel = (0,_builders__WEBPACK_IMPORTED_MODULE_3__.createButton)("projectCancel", "addCancelButton", "Cancel",);
    buttonCancel.addEventListener("click", function(){
        if (type == "project"){
            removeProjectInput();
        }
        if (type == "task"){
            removeTaskInput(container);
        }
    });
    divButtons.appendChild(buttonCancel);

    input.focus();
    return input;
}

function addProject(){
    const projectName = document.getElementById("createProjectInput");
    const tasksInProject = [];
    if (projectName.value == ""){
        projectName.placeholder = "Can't be empty";
        return;
    }
    if (projectsList.has(projectName.value)){
        projectName.value = "";
        projectName.placeholder = "Name exists";
        return;
    }
    createProjectButton(projectName.value);
    projectsList.set(projectName.value, []);
    removeProjectInput();
}

function removeProjectInput(){
    addProjectButon(document.getElementById("createProjectDiv"));
    createProjectDiv.removeChild(createProjectDiv.firstChild);
}

function createProjectButton(name){
    const button = (0,_builders__WEBPACK_IMPORTED_MODULE_3__.createButton)("projectButton"+ projectsList.length, "projectButton");

    button.appendChild((0,_builders__WEBPACK_IMPORTED_MODULE_3__.createImg)(null, "sidenavImage", _assets_images_list_svg__WEBPACK_IMPORTED_MODULE_1__));
    button.appendChild((0,_builders__WEBPACK_IMPORTED_MODULE_3__.createText)("p", null, "sidenavText", name));
    button.addEventListener("click", function(){
        (0,_ui__WEBPACK_IMPORTED_MODULE_4__.buttonClicked)(button);
    })
    const closeButton = (0,_builders__WEBPACK_IMPORTED_MODULE_3__.createButton)(null,"closeButton",null);
    closeButton.addEventListener("click", function(){
        deleteProject(name, button);
    })

    const img = (0,_builders__WEBPACK_IMPORTED_MODULE_3__.createImg)(null, "sidenavImage", _assets_images_close_svg__WEBPACK_IMPORTED_MODULE_2__);
    img.classList.add("closeButtonImg");
    closeButton.appendChild(img);

    button.appendChild(closeButton)

    const projectsContainer = document.getElementById("projectsContainer");
    projectsContainer.insertBefore(button, projectsContainer.lastChild);

}

function deleteProject(name, button){
    projectsList.delete(name.toString());

    button.remove();
}

function addTask(project, container){
    const taskInput = document.getElementById("createTaskInput");
    const taskName = taskInput.value;
    if (project == null){
        project = "Inbox";
    }
    if (taskName == ""){
        taskInput.placeholder = "Can't be empty";
        return;
    }
    else if (projectsList.has(project)){
        const projectValues = [...projectsList.get(project).values()];
        if (projectValues.includes(taskName)){
            taskInput.value = "";
            taskInput.placeholder = "This task already exists";
            return;
        }
    }
    projectsList.set(project, projectsList.get(project).concat(taskName));
    removeTaskInput(container);
}

function removeTaskInput(container){
    (0,_mainSection__WEBPACK_IMPORTED_MODULE_5__.showInbox)();
    container.remove();
}

function createTaskButton(taskName){
    const button = (0,_builders__WEBPACK_IMPORTED_MODULE_3__.createButton)("taskButton"+ taskName, "taskButton");

    button.appendChild((0,_builders__WEBPACK_IMPORTED_MODULE_3__.createImg)(null, "sidenavImage", _assets_images_list_svg__WEBPACK_IMPORTED_MODULE_1__));
    button.appendChild((0,_builders__WEBPACK_IMPORTED_MODULE_3__.createText)("p", null, "sidenavText", taskName));
    button.addEventListener("click", function(){
        return;
    })
    const closeButton = (0,_builders__WEBPACK_IMPORTED_MODULE_3__.createButton)(null,"closeButton",null);
    closeButton.addEventListener("click", function(){
        return;
    })

    const img = (0,_builders__WEBPACK_IMPORTED_MODULE_3__.createImg)(null, "sidenavImage", _assets_images_close_svg__WEBPACK_IMPORTED_MODULE_2__);
    img.classList.add("closeButtonImg");
    closeButton.appendChild(img);

    button.appendChild(closeButton);

    const container = document.getElementById("taskContainer");
    container.insertBefore(button, container.lastChild);
    return;
}

/***/ }),

/***/ "./src/pages/ui.js":
/*!*************************!*\
  !*** ./src/pages/ui.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonClicked": () => (/* binding */ buttonClicked),
/* harmony export */   "createRightSection": () => (/* binding */ createRightSection),
/* harmony export */   "createSidenav": () => (/* binding */ createSidenav)
/* harmony export */ });
/* harmony import */ var _styles_ui_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/ui.css */ "./src/styles/ui.css");
/* harmony import */ var _assets_images_inbox_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/inbox.svg */ "./src/assets/images/inbox.svg");
/* harmony import */ var _assets_images_today_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/today.svg */ "./src/assets/images/today.svg");
/* harmony import */ var _assets_images_week_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/week.svg */ "./src/assets/images/week.svg");
/* harmony import */ var _builders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./builders */ "./src/pages/builders.js");
/* harmony import */ var _projectsAndTasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectsAndTasks */ "./src/pages/projectsAndTasks.js");








function createSidenav(){
    const sidenavContainer = document.createElement('sidenav');
    sidenavContainer.id = "sidenav";

    const mainContainer = document.createElement('container');
    mainContainer.id = "mainSidenavContainer";
    sidenavContainer.appendChild(mainContainer);

    mainContainer.appendChild(createSideButton("Inbox", _assets_images_inbox_svg__WEBPACK_IMPORTED_MODULE_1__));
    mainContainer.appendChild(createSideButton("Today", _assets_images_today_svg__WEBPACK_IMPORTED_MODULE_2__));
    mainContainer.appendChild(createSideButton("This week", _assets_images_week_svg__WEBPACK_IMPORTED_MODULE_3__));
    
    mainContainer.appendChild((0,_builders__WEBPACK_IMPORTED_MODULE_4__.createText)("div", "sidenavProjectText", null, "Projects"));

    const projectsContainer = document.createElement('container');
    projectsContainer.id = "projectsContainer";
    mainContainer.appendChild(projectsContainer);

    projectsContainer.appendChild(addProjectContainer());

    return sidenavContainer;
}


function createSideButton(name, icon){

    const button = (0,_builders__WEBPACK_IMPORTED_MODULE_4__.createButton)(null, "sidenavButton");
    button.appendChild((0,_builders__WEBPACK_IMPORTED_MODULE_4__.createImg)(null, "sidenavImage", icon));
    button.appendChild((0,_builders__WEBPACK_IMPORTED_MODULE_4__.createText)("p", null, "sidenavText", name));
    button.addEventListener('click', function(){
         buttonClicked(button);
    })
    if (name === "Inbox"){
        button.classList.add("buttonClicked");
    }
    return button;

}

function buttonClicked(button){
    const buttonClicked = document.querySelector(".buttonClicked");
    if (!buttonClicked){
        button.classList.add("buttonClicked");
        return;
    }
    buttonClicked.classList.remove("buttonClicked");
    button.classList.add("buttonClicked");
}

function addProjectContainer(){
    const div = document.createElement('div');
    div.id = "createProjectDiv";

    (0,_projectsAndTasks__WEBPACK_IMPORTED_MODULE_5__.addProjectButon)(div);

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
    container.appendChild((0,_builders__WEBPACK_IMPORTED_MODULE_4__.createText)("h1", "headerText", null, "List doTo"));

    return container;
}

function createMain(){
    const container = document.createElement('contaier');
    container.id = "mainContainer";

    container.appendChild((0,_builders__WEBPACK_IMPORTED_MODULE_4__.createText)("h2", "mainSectionHeader", null, "Inbox"));

    const taskContainer = document.createElement('container');
    taskContainer.id = "taskContainer";
    container.appendChild(taskContainer);

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

/***/ "./src/assets/images/close.svg":
/*!*************************************!*\
  !*** ./src/assets/images/close.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/close.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixxREFBVTs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLHFEQUFVOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9vZGluLy4vc3JjL3N0eWxlcy91aS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9zcmMvc3R5bGVzL3VpLmNzcz84MWIzIiwid2VicGFjazovL3RvZG9vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9zcmMvcGFnZXMvYnVpbGRlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9zcmMvcGFnZXMvbWFpblNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9zcmMvcGFnZXMvcHJvamVjdHNBbmRUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL3NyYy9wYWdlcy91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAgIC0tZm9udC1zaXplLXA6IGNsYW1wKC41cmVtLCAyMHB4LCAycmVtKTtcXG4gICAgLS1mb250LXNpemUtaDM6IDI2cHg7XFxuICAgIC0tZm9udC1zaXplLWgyOiAzMnB4O1xcblxcbiAgICAtLWJvcmRlci1jb2xvci1zaWRlbmF2OiAjMDAwMDAwNTU7XFxuXFxuICAgIC0tYmFja2dyb3VuZC1jb2xvci1zaWRlbmF2OiAjRkNGQ0ZDO1xcbiAgICAtLWJhY2tncm91bmQtY29sb3ItaGVhZGVyOiAjRjNGM0YzO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdWQtY29sb3ItYWRkOiAjNjlmZjY5MTE7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91ZC1jb2xvci1hZGQtaG92ZXI6ICM2OWZmNjkzMztcXG4gICAgLS1idXR0b24tYmFja2dyb3VkLWNvbG9yLWNhbmNlbDogI2ZmNmI2YjExOztcXG4gICAgLS1idXR0b24tYmFja2dyb3VkLWNvbG9yLWNhbmNlbC1ob3ZlcjogI2ZmNmI2YjMzO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdWQtY29sb3ItYWN0aXZlOiAjREREO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdWQtY29sb3ItaG92ZXI6ICNFRUU7XFxuICAgIC0tYm9yZGVyLWNvbG9yLWFkZDogIzMzZmYzMztcXG4gICAgLS1ib3JkZXItY29sb3ItY2FuY2VsOiAjZmYzMzMzO1xcbn1cXG5cXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMGR2aDtcXG4gICAgd2lkdGg6IDEwMGR2dztcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc2lkZW5hdntcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXG59XFxuXFxuI21haW5TaWRlbmF2Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3Itc2lkZW5hdik7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMC41cHggdmFyKC0tYm9yZGVyLWNvbG9yLXNpZGVuYXYpO1xcbn1cXG5cXG4uc2lkZW5hdkJ1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgZ2FwOiAzJTtcXG4gICAgbWFyZ2luLXRvcDogNiU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGVuYXZCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdWQtY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4uYnV0dG9uQ2xpY2tlZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91ZC1jb2xvci1hY3RpdmUpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zaWRlbmF2QnV0dG9uOmZpcnN0LWNoaWxke1xcbiAgICBtYXJnaW4tdG9wOiAzMCU7XFxufVxcblxcbi5zaWRlbmF2VGV4dHtcXG4gICAgbWluLXdpZHRoOiA2NSU7XFxuICAgIG1heC13aWR0aDogNjUlO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1wKTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uc2lkZW5hdkltYWdle1xcbiAgICBtYXgtd2lkdGg6IDEuNXJlbTtcXG4gICAgbWF4LWhlaWdodDogYXV0bztcXG59XFxuXFxuI3NpZGVuYXZQcm9qZWN0VGV4dHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi10b3A6IDIwJTtcXG4gICAgcGFkZGluZy10b3A6IDUlO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3Itc2lkZW5hdik7XFxufVxcblxcbiNjcmVhdGVQcm9qZWN0RGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbntcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE0JTtcXG4gICAgbWFyZ2luLXRvcDogNiU7XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbi5wcm9qZWN0QnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VkLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLnByb2plY3RCdXR0b246bGFzdC1jaGlsZHtcXG4gICAgZ2FwOiAyJTtcXG59XFxuXFxuI2lucHV0Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jY3JlYXRlUHJvamVjdElucHV0e1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvci1zaWRlbmF2KTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtcCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcbiAgICBtYXJnaW4tdG9wOiA5JTtcXG59XFxuXFxuXFxuI2NyZWF0ZVByb2plY3REaXZCdXR0b25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1JTtcXG59XFxuXFxuLmFkZENhbmNlbEJ1dHRvbntcXG4gICAgbWluLXdpZHRoOiAzMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDE1JTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3Byb2plY3RBZGR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdWQtY29sb3ItYWRkKTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yLWFkZCk7XFxufVxcblxcbiNwcm9qZWN0QWRkOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VkLWNvbG9yLWFkZC1ob3Zlcik7XFxufVxcblxcbiNwcm9qZWN0Q2FuY2Vse1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VkLWNvbG9yLWNhbmNlbCk7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvci1jYW5jZWwpO1xcbn1cXG5cXG4jcHJvamVjdENhbmNlbDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91ZC1jb2xvci1jYW5jZWwtaG92ZXIpO1xcbn1cXG5cXG4uY2xvc2VCdXR0b257XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG59XFxuXFxuXFxuI3JpZ2h0Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2hlYWRlckNvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1oZWFkZXIpO1xcbn1cXG5cXG4jaGVhZGVyVGV4dHtcXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yLXNpZGVuYXYpO1xcbn1cXG5cXG4jbWFpbkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAyJSAyNSU7XFxufVxcblxcbiNtYWluU2VjdGlvbkhlYWRlcntcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDIpO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXG59XFxuXFxuLnRhc2tCdXR0b257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4udGFza0J1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91ZC1jb2xvci1ob3Zlcik7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdWkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLG9CQUFvQjtJQUNwQixvQkFBb0I7O0lBRXBCLGlDQUFpQzs7SUFFakMsbUNBQW1DO0lBQ25DLGtDQUFrQztJQUNsQyx1Q0FBdUM7SUFDdkMsNkNBQTZDO0lBQzdDLDBDQUEwQztJQUMxQyxnREFBZ0Q7SUFDaEQscUNBQXFDO0lBQ3JDLG9DQUFvQztJQUNwQywyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1QsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDJDQUEyQztJQUMzQyxxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxPQUFPO0lBQ1AsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0kscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksaUVBQWlFO0FBQ3JFOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsVUFBVTtBQUNkOztBQUVBO0lBQ0kscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsNkNBQTZDO0lBQzdDLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtREFBbUQ7SUFDbkQseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0kseURBQXlEO0FBQzdEOztBQUVBO0lBQ0ksc0RBQXNEO0lBQ3RELDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLDREQUE0RDtBQUNoRTs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG9EQUFvRDtBQUN4RDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFEQUFxRDtBQUN6RFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290e1xcbiAgICAtLWZvbnQtc2l6ZS1wOiBjbGFtcCguNXJlbSwgMjBweCwgMnJlbSk7XFxuICAgIC0tZm9udC1zaXplLWgzOiAyNnB4O1xcbiAgICAtLWZvbnQtc2l6ZS1oMjogMzJweDtcXG5cXG4gICAgLS1ib3JkZXItY29sb3Itc2lkZW5hdjogIzAwMDAwMDU1O1xcblxcbiAgICAtLWJhY2tncm91bmQtY29sb3Itc2lkZW5hdjogI0ZDRkNGQztcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yLWhlYWRlcjogI0YzRjNGMztcXG4gICAgLS1idXR0b24tYmFja2dyb3VkLWNvbG9yLWFkZDogIzY5ZmY2OTExO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdWQtY29sb3ItYWRkLWhvdmVyOiAjNjlmZjY5MzM7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91ZC1jb2xvci1jYW5jZWw6ICNmZjZiNmIxMTs7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91ZC1jb2xvci1jYW5jZWwtaG92ZXI6ICNmZjZiNmIzMztcXG4gICAgLS1idXR0b24tYmFja2dyb3VkLWNvbG9yLWFjdGl2ZTogI0RERDtcXG4gICAgLS1idXR0b24tYmFja2dyb3VkLWNvbG9yLWhvdmVyOiAjRUVFO1xcbiAgICAtLWJvcmRlci1jb2xvci1hZGQ6ICMzM2ZmMzM7XFxuICAgIC0tYm9yZGVyLWNvbG9yLWNhbmNlbDogI2ZmMzMzMztcXG59XFxuXFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDBkdmg7XFxuICAgIHdpZHRoOiAxMDBkdnc7XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZGVuYXZ7XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxufVxcblxcbiNtYWluU2lkZW5hdkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXNpZGVuYXYpO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDAuNXB4IHZhcigtLWJvcmRlci1jb2xvci1zaWRlbmF2KTtcXG59XFxuXFxuLnNpZGVuYXZCdXR0b257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGdhcDogMyU7XFxuICAgIG1hcmdpbi10b3A6IDYlO1xcbiAgICBtYXJnaW4tbGVmdDogMTQlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlbmF2QnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VkLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLmJ1dHRvbkNsaWNrZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdWQtY29sb3ItYWN0aXZlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2lkZW5hdkJ1dHRvbjpmaXJzdC1jaGlsZHtcXG4gICAgbWFyZ2luLXRvcDogMzAlO1xcbn1cXG5cXG4uc2lkZW5hdlRleHR7XFxuICAgIG1pbi13aWR0aDogNjUlO1xcbiAgICBtYXgtd2lkdGg6IDY1JTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtcCk7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnNpZGVuYXZJbWFnZXtcXG4gICAgbWF4LXdpZHRoOiAxLjVyZW07XFxuICAgIG1heC1oZWlnaHQ6IGF1dG87XFxufVxcblxcbiNzaWRlbmF2UHJvamVjdFRleHR7XFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgICBtYXJnaW4tdG9wOiAyMCU7XFxuICAgIHBhZGRpbmctdG9wOiA1JTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDMpO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yLXNpZGVuYXYpO1xcbn1cXG5cXG4jY3JlYXRlUHJvamVjdERpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3RCdXR0b257XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNCU7XFxuICAgIG1hcmdpbi10b3A6IDYlO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91ZC1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5wcm9qZWN0QnV0dG9uOmxhc3QtY2hpbGR7XFxuICAgIGdhcDogMiU7XFxufVxcblxcbiNpbnB1dENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NyZWF0ZVByb2plY3RJbnB1dHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3Itc2lkZW5hdik7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXApO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXG4gICAgbWFyZ2luLXRvcDogOSU7XFxufVxcblxcblxcbiNjcmVhdGVQcm9qZWN0RGl2QnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNSU7XFxufVxcblxcbi5hZGRDYW5jZWxCdXR0b257XFxuICAgIG1pbi13aWR0aDogMzAlO1xcbiAgICBtaW4taGVpZ2h0OiAxNSU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNwcm9qZWN0QWRke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VkLWNvbG9yLWFkZCk7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvci1hZGQpO1xcbn1cXG5cXG4jcHJvamVjdEFkZDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91ZC1jb2xvci1hZGQtaG92ZXIpO1xcbn1cXG5cXG4jcHJvamVjdENhbmNlbHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91ZC1jb2xvci1jYW5jZWwpO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3ItY2FuY2VsKTtcXG59XFxuXFxuI3Byb2plY3RDYW5jZWw6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdWQtY29sb3ItY2FuY2VsLWhvdmVyKTtcXG59XFxuXFxuLmNsb3NlQnV0dG9ue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcblxcbiNyaWdodENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNoZWFkZXJDb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItaGVhZGVyKTtcXG59XFxuXFxuI2hlYWRlclRleHR7XFxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvci1zaWRlbmF2KTtcXG59XFxuXFxuI21haW5Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMiUgMjUlO1xcbn1cXG5cXG4jbWFpblNlY3Rpb25IZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgyKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxufVxcblxcbi50YXNrQnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnRhc2tCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdWQtY29sb3ItaG92ZXIpO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91aS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VpLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtjcmVhdGVTaWRlbmF2LCBjcmVhdGVSaWdodFNlY3Rpb259IGZyb20gJy4vcGFnZXMvdWknO1xuaW1wb3J0IHsgc2hvd0luYm94IH0gZnJvbSAnLi9wYWdlcy9tYWluU2VjdGlvbic7XG5cblxuY3JlYXRlVUkoKTtcblxuXG5mdW5jdGlvbiBjcmVhdGVVSSgpe1xuICAgIHRyeXtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVTaWRlbmF2KCkpO1xuICAgIH1cbiAgICBjYXRjaChlKXtcbiAgICAgICAgdGhyb3cgXCJQcm9ibGVtIHcgd3lnZW5lcm93YW5pdSBzaWRlbmF2YSBcXG5cIiArIGUubWVzc2FnZTtcbiAgICB9XG4gICAgdHJ5e1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVJpZ2h0U2VjdGlvbigpKTtcbiAgICAgICAgc2hvd0luYm94KCk7XG4gICAgfVxuICAgIGNhdGNoKGUpe1xuICAgICAgICB0aHJvdyBcIlByb2JsZW0gdyB3eWdlbmVyb3dhbml1IHByYXdlZ28gY29udGFpbmVyYSBcXG5cIiArIGUubWVzc2FnZTtcbiAgICB9XG4gICAgXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhaW5lcigpe1xuICAgIGNvbnNvbGUubG9nKFwiYVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRleHQodHlwZSwgaWQsIGNsYXNzTmFtZSwgdGV4dFZhbHVlKXtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gdGV4dFZhbHVlO1xuXG4gICAgaWYgKGlkICE9PSBudWxsKXtcbiAgICAgICAgdGV4dC5pZCA9IGlkO1xuICAgIH1cbiAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKXtcbiAgICAgICAgdGV4dC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWcoaWQgPSBudWxsLCBjbGFzc05hbWUsIHNyYyl7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaWYgKGlkICE9IG51bGwpe1xuICAgICAgICBpbWcuaWQgPSBpZDtcbiAgICB9XG4gICAgaWYgKGNsYXNzTmFtZSAhPSBudWxsKXtcbiAgICAgICAgaW1nLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB9XG4gICAgaWYgKHNyYyAhPSBudWxsKXtcbiAgICAgICAgaW1nLnNyYyA9IHNyYztcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGltZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihpZCwgY2xhc3NOYW1lLCBidXR0b25UZXh0ID0gbnVsbCl7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBpZiAoaWQgIT09IG51bGwpe1xuICAgICAgICBidXR0b24uaWQgPSBpZDtcbiAgICB9XG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCl7XG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgfVxuICAgIGlmIChidXR0b25UZXh0ICE9PSBudWxsKXtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gYnV0dG9uVGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWRkUHJvamVjdFRhc2soZGl2LCBpc1Byb2plY3Qpe1xuXG59XG5cbiIsImltcG9ydCB7IGNyZWF0ZUltZywgY3JlYXRlVGV4dCwgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi9idWlsZGVycyc7XG5pbXBvcnQgYWRkIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2FkZC5zdmdcIjtcbmltcG9ydCB7IGFkZE5ld1Byb2plY3QsIGNyZWF0ZVRhc2tCdXR0b24sIHByb2plY3RzTGlzdCB9IGZyb20gXCIuL3Byb2plY3RzQW5kVGFza3NcIjtcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93SW5ib3goKXtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrQ29udGFpbmVyXCIpO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQWRkVGFzayhcIkluYm94XCIsIHRhc2tDb250YWluZXIpKTtcbiAgICBnZXRUYXNrTGlzdChcIkluYm94XCIsIHRhc2tDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBzaG93VG9kYXkoKXtcblxufVxuXG5mdW5jdGlvbiBzaG93VGhpc1dlZWsoKXtcblxufVxuXG5mdW5jdGlvbiBzaG93UHJvamVjdChwcm9qZWN0TmFtZSl7XG5cbn1cblxuZnVuY3Rpb24gY2xlYXJTZWN0aW9uKCl7XG5cbn1cblxuZnVuY3Rpb24gYnV0dG9uQWRkVGFzayhwcm9qZWN0TmFtZSwgY29udGFpZXIpe1xuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihwcm9qZWN0TmFtZSwgXCJ0YXNrQnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChjcmVhdGVJbWcobnVsbCwgXCJzaWRlbmF2SW1hZ2VcIiwgYWRkKSk7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHQoXCJwXCIsIG51bGwsIFwic2lkZW5hdlRleHRcIiwgXCJBZGQgVGFza1wiKSk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBhZGROZXdQcm9qZWN0KGNvbnRhaWVyLCBcInRhc2tcIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gZ2V0VGFza0xpc3QocHJvamVjdE5hbWUsIGNvbnRhaW5lcil7XG4gICAgY29uc3QgbGlzdE9mVmFsdWVzID0gWy4uLnByb2plY3RzTGlzdC5nZXQocHJvamVjdE5hbWUpLnZhbHVlcygpXVxuICAgIGxpc3RPZlZhbHVlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCB0YXNrQnV0dG9uSWQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIiN0YXNrQnV0dG9uXCIrZWxlbWVudCk7XG4gICAgICAgIGlmICh0YXNrQnV0dG9uSWQgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVUYXNrQnV0dG9uKGVsZW1lbnQpO1xuICAgIH0pXG59IiwiaW1wb3J0IGFkZCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2FkZC5zdmcnO1xuaW1wb3J0IGxpc3QgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9saXN0LnN2Zyc7XG5pbXBvcnQgY2xvc2UgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9jbG9zZS5zdmcnO1xuaW1wb3J0IHsgY3JlYXRlSW1nLCBjcmVhdGVUZXh0LCBjcmVhdGVCdXR0b24gfSBmcm9tICcuL2J1aWxkZXJzJztcbmltcG9ydCB7IGJ1dHRvbkNsaWNrZWQgfSBmcm9tICcuL3VpJztcbmltcG9ydCB7IHNob3dJbmJveCB9IGZyb20gJy4vbWFpblNlY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdHNMaXN0ID0gbmV3IE1hcDtcbnByb2plY3RzTGlzdC5zZXQoXCJJbmJveFwiLFtdKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RCdXRvbihkaXYpe1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcInByb2plY3RCdXR0b25cIjtcbiAgICBidXR0b24uaWQgPSBcImNyZWF0ZVByb2plY3RCdXR0b25cIjtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe2FkZE5ld1Byb2plY3QoZGl2LCBcInByb2plY3RcIil9KVxuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGNyZWF0ZUltZyhudWxsLCBcInNpZGVuYXZJbWFnZVwiLCBhZGQpKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dChcInBcIiwgbnVsbCwgXCJzaWRlbmF2VGV4dFwiLCBcIkFkZCBQcm9qZWN0XCIpKTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3UHJvamVjdChjcmVhdGVQcm9qZWN0RGl2LCB0eXBlKXtcbiAgICB0cnl7XG4gICAgICAgIGNyZWF0ZVByb2plY3REaXYucmVtb3ZlQ2hpbGQoY3JlYXRlUHJvamVjdERpdi5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICBjYXRjaChlKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBpbiBhZGROZXdQcm9qZWN0IFxcblwiICsgZSk7XG4gICAgfVxuICAgIGZpbmFsbHl7XG4gICAgICAgIGFkZElucHV0KGNyZWF0ZVByb2plY3REaXYsIHR5cGUpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGRJbnB1dChkaXYsIHR5cGUsIHByb2plY3QgPSBudWxsKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb250YWluZXInKTtcbiAgICBjb250YWluZXIuaWQgPSBcImlucHV0Q29udGFpbmVyXCI7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaWYgKHR5cGUgPT0gXCJwcm9qZWN0XCIpe1xuICAgICAgICBpbnB1dC5pZCA9IFwiY3JlYXRlUHJvamVjdElucHV0XCI7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCJQcm9qZWN0IG5hbWVcIjtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT0gXCJ0YXNrXCIpe1xuICAgICAgICBpbnB1dC5pZCA9IFwiY3JlYXRlVGFza0lucHV0XCI7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrIG5hbWVcIjtcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIGNvbnN0IGRpdkJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZCdXR0b25zLmlkID0gXCJjcmVhdGVQcm9qZWN0RGl2QnV0dG9uc1wiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZCdXR0b25zKTtcbiAgICBcbiAgICBjb25zdCBidXR0b25BZGQgPSBjcmVhdGVCdXR0b24oXCJwcm9qZWN0QWRkXCIsIFwiYWRkQ2FuY2VsQnV0dG9uXCIsIFwiQWRkXCIpO1xuICAgIGJ1dHRvbkFkZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKHR5cGUgPT0gXCJwcm9qZWN0XCIpe1xuICAgICAgICAgICAgYWRkUHJvamVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09IFwidGFza1wiKXtcbiAgICAgICAgICAgIGFkZFRhc2socHJvamVjdCwgY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGRpdkJ1dHRvbnMuYXBwZW5kQ2hpbGQoYnV0dG9uQWRkKTtcblxuICAgIGNvbnN0IGJ1dHRvbkNhbmNlbCA9IGNyZWF0ZUJ1dHRvbihcInByb2plY3RDYW5jZWxcIiwgXCJhZGRDYW5jZWxCdXR0b25cIiwgXCJDYW5jZWxcIiwpO1xuICAgIGJ1dHRvbkNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKHR5cGUgPT0gXCJwcm9qZWN0XCIpe1xuICAgICAgICAgICAgcmVtb3ZlUHJvamVjdElucHV0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT0gXCJ0YXNrXCIpe1xuICAgICAgICAgICAgcmVtb3ZlVGFza0lucHV0KGNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBkaXZCdXR0b25zLmFwcGVuZENoaWxkKGJ1dHRvbkNhbmNlbCk7XG5cbiAgICBpbnB1dC5mb2N1cygpO1xuICAgIHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdCgpe1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVQcm9qZWN0SW5wdXRcIik7XG4gICAgY29uc3QgdGFza3NJblByb2plY3QgPSBbXTtcbiAgICBpZiAocHJvamVjdE5hbWUudmFsdWUgPT0gXCJcIil7XG4gICAgICAgIHByb2plY3ROYW1lLnBsYWNlaG9sZGVyID0gXCJDYW4ndCBiZSBlbXB0eVwiO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwcm9qZWN0c0xpc3QuaGFzKHByb2plY3ROYW1lLnZhbHVlKSl7XG4gICAgICAgIHByb2plY3ROYW1lLnZhbHVlID0gXCJcIjtcbiAgICAgICAgcHJvamVjdE5hbWUucGxhY2Vob2xkZXIgPSBcIk5hbWUgZXhpc3RzXCI7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY3JlYXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgcHJvamVjdHNMaXN0LnNldChwcm9qZWN0TmFtZS52YWx1ZSwgW10pO1xuICAgIHJlbW92ZVByb2plY3RJbnB1dCgpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0SW5wdXQoKXtcbiAgICBhZGRQcm9qZWN0QnV0b24oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVQcm9qZWN0RGl2XCIpKTtcbiAgICBjcmVhdGVQcm9qZWN0RGl2LnJlbW92ZUNoaWxkKGNyZWF0ZVByb2plY3REaXYuZmlyc3RDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RCdXR0b24obmFtZSl7XG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKFwicHJvamVjdEJ1dHRvblwiKyBwcm9qZWN0c0xpc3QubGVuZ3RoLCBcInByb2plY3RCdXR0b25cIik7XG5cbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoY3JlYXRlSW1nKG51bGwsIFwic2lkZW5hdkltYWdlXCIsIGxpc3QpKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dChcInBcIiwgbnVsbCwgXCJzaWRlbmF2VGV4dFwiLCBuYW1lKSk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBidXR0b25DbGlja2VkKGJ1dHRvbik7XG4gICAgfSlcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihudWxsLFwiY2xvc2VCdXR0b25cIixudWxsKTtcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgZGVsZXRlUHJvamVjdChuYW1lLCBidXR0b24pO1xuICAgIH0pXG5cbiAgICBjb25zdCBpbWcgPSBjcmVhdGVJbWcobnVsbCwgXCJzaWRlbmF2SW1hZ2VcIiwgY2xvc2UpO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiY2xvc2VCdXR0b25JbWdcIik7XG4gICAgY2xvc2VCdXR0b24uYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbilcblxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c0NvbnRhaW5lclwiKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoYnV0dG9uLCBwcm9qZWN0c0NvbnRhaW5lci5sYXN0Q2hpbGQpO1xuXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QobmFtZSwgYnV0dG9uKXtcbiAgICBwcm9qZWN0c0xpc3QuZGVsZXRlKG5hbWUudG9TdHJpbmcoKSk7XG5cbiAgICBidXR0b24ucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2socHJvamVjdCwgY29udGFpbmVyKXtcbiAgICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZVRhc2tJbnB1dFwiKTtcbiAgICBjb25zdCB0YXNrTmFtZSA9IHRhc2tJbnB1dC52YWx1ZTtcbiAgICBpZiAocHJvamVjdCA9PSBudWxsKXtcbiAgICAgICAgcHJvamVjdCA9IFwiSW5ib3hcIjtcbiAgICB9XG4gICAgaWYgKHRhc2tOYW1lID09IFwiXCIpe1xuICAgICAgICB0YXNrSW5wdXQucGxhY2Vob2xkZXIgPSBcIkNhbid0IGJlIGVtcHR5XCI7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJvamVjdHNMaXN0Lmhhcyhwcm9qZWN0KSl7XG4gICAgICAgIGNvbnN0IHByb2plY3RWYWx1ZXMgPSBbLi4ucHJvamVjdHNMaXN0LmdldChwcm9qZWN0KS52YWx1ZXMoKV07XG4gICAgICAgIGlmIChwcm9qZWN0VmFsdWVzLmluY2x1ZGVzKHRhc2tOYW1lKSl7XG4gICAgICAgICAgICB0YXNrSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgdGFza0lucHV0LnBsYWNlaG9sZGVyID0gXCJUaGlzIHRhc2sgYWxyZWFkeSBleGlzdHNcIjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm9qZWN0c0xpc3Quc2V0KHByb2plY3QsIHByb2plY3RzTGlzdC5nZXQocHJvamVjdCkuY29uY2F0KHRhc2tOYW1lKSk7XG4gICAgcmVtb3ZlVGFza0lucHV0KGNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2tJbnB1dChjb250YWluZXIpe1xuICAgIHNob3dJbmJveCgpO1xuICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tCdXR0b24odGFza05hbWUpe1xuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihcInRhc2tCdXR0b25cIisgdGFza05hbWUsIFwidGFza0J1dHRvblwiKTtcblxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChjcmVhdGVJbWcobnVsbCwgXCJzaWRlbmF2SW1hZ2VcIiwgbGlzdCkpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KFwicFwiLCBudWxsLCBcInNpZGVuYXZUZXh0XCIsIHRhc2tOYW1lKSk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm47XG4gICAgfSlcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihudWxsLFwiY2xvc2VCdXR0b25cIixudWxsKTtcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0pXG5cbiAgICBjb25zdCBpbWcgPSBjcmVhdGVJbWcobnVsbCwgXCJzaWRlbmF2SW1hZ2VcIiwgY2xvc2UpO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiY2xvc2VCdXR0b25JbWdcIik7XG4gICAgY2xvc2VCdXR0b24uYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tDb250YWluZXJcIik7XG4gICAgY29udGFpbmVyLmluc2VydEJlZm9yZShidXR0b24sIGNvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgIHJldHVybjtcbn0iLCJpbXBvcnQgJy4uL3N0eWxlcy91aS5jc3MnXG5pbXBvcnQgaW5ib3ggZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9pbmJveC5zdmcnO1xuaW1wb3J0IHRvZGF5IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvdG9kYXkuc3ZnJztcbmltcG9ydCB3ZWVrIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvd2Vlay5zdmcnO1xuaW1wb3J0IHsgY3JlYXRlSW1nLCBjcmVhdGVUZXh0LCBjcmVhdGVCdXR0b24gfSBmcm9tICcuL2J1aWxkZXJzJztcblxuaW1wb3J0IHsgYWRkUHJvamVjdEJ1dG9uIH0gZnJvbSAnLi9wcm9qZWN0c0FuZFRhc2tzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNpZGVuYXYoKXtcbiAgICBjb25zdCBzaWRlbmF2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2lkZW5hdicpO1xuICAgIHNpZGVuYXZDb250YWluZXIuaWQgPSBcInNpZGVuYXZcIjtcblxuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb250YWluZXInKTtcbiAgICBtYWluQ29udGFpbmVyLmlkID0gXCJtYWluU2lkZW5hdkNvbnRhaW5lclwiO1xuICAgIHNpZGVuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVNpZGVCdXR0b24oXCJJbmJveFwiLCBpbmJveCkpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2lkZUJ1dHRvbihcIlRvZGF5XCIsIHRvZGF5KSk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTaWRlQnV0dG9uKFwiVGhpcyB3ZWVrXCIsIHdlZWspKTtcbiAgICBcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRleHQoXCJkaXZcIiwgXCJzaWRlbmF2UHJvamVjdFRleHRcIiwgbnVsbCwgXCJQcm9qZWN0c1wiKSk7XG5cbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NvbnRhaW5lcicpO1xuICAgIHByb2plY3RzQ29udGFpbmVyLmlkID0gXCJwcm9qZWN0c0NvbnRhaW5lclwiO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNDb250YWluZXIpO1xuXG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdENvbnRhaW5lcigpKTtcblxuICAgIHJldHVybiBzaWRlbmF2Q29udGFpbmVyO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGVCdXR0b24obmFtZSwgaWNvbil7XG5cbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24obnVsbCwgXCJzaWRlbmF2QnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChjcmVhdGVJbWcobnVsbCwgXCJzaWRlbmF2SW1hZ2VcIiwgaWNvbikpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KFwicFwiLCBudWxsLCBcInNpZGVuYXZUZXh0XCIsIG5hbWUpKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgYnV0dG9uQ2xpY2tlZChidXR0b24pO1xuICAgIH0pXG4gICAgaWYgKG5hbWUgPT09IFwiSW5ib3hcIil7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uQ2xpY2tlZFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1dHRvbjtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gYnV0dG9uQ2xpY2tlZChidXR0b24pe1xuICAgIGNvbnN0IGJ1dHRvbkNsaWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbkNsaWNrZWRcIik7XG4gICAgaWYgKCFidXR0b25DbGlja2VkKXtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b25DbGlja2VkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGJ1dHRvbkNsaWNrZWQuY2xhc3NMaXN0LnJlbW92ZShcImJ1dHRvbkNsaWNrZWRcIik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b25DbGlja2VkXCIpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0Q29udGFpbmVyKCl7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlkID0gXCJjcmVhdGVQcm9qZWN0RGl2XCI7XG5cbiAgICBhZGRQcm9qZWN0QnV0b24oZGl2KTtcblxuICAgIHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSaWdodFNlY3Rpb24oKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb250YWluZXInKTtcbiAgICBjb250YWluZXIuaWQgPSBcInJpZ2h0Q29udGFpbmVyXCI7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmlkID0gXCJoZWFkZXJDb250YWluZXJcIjtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dChcImgxXCIsIFwiaGVhZGVyVGV4dFwiLCBudWxsLCBcIkxpc3QgZG9Ub1wiKSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY29udGFpZXInKTtcbiAgICBjb250YWluZXIuaWQgPSBcIm1haW5Db250YWluZXJcIjtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KFwiaDJcIiwgXCJtYWluU2VjdGlvbkhlYWRlclwiLCBudWxsLCBcIkluYm94XCIpKTtcblxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb250YWluZXInKTtcbiAgICB0YXNrQ29udGFpbmVyLmlkID0gXCJ0YXNrQ29udGFpbmVyXCI7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9