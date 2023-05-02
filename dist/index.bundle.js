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
/* harmony import */ var _pages_projectsAndTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/projectsAndTasks */ "./src/pages/projectsAndTasks.js");





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
        const listOfValues = [..._projectsAndTasks__WEBPACK_IMPORTED_MODULE_2__.projectsList.get(projectName).values()];
        listOfValues.forEach(element => {
            const taskButtonId = container.querySelector("#taskButton"+element);
            if (taskButtonId != undefined){
                return;
            }
            return (0,_projectsAndTasks__WEBPACK_IMPORTED_MODULE_2__.createTaskButton)(element);
            
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
/* harmony export */   "localStorageExists": () => (/* binding */ localStorageExists),
/* harmony export */   "projectsList": () => (/* binding */ projectsList)
/* harmony export */ });
/* harmony import */ var _assets_images_add_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/add.svg */ "./src/assets/images/add.svg");
/* harmony import */ var _assets_images_list_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/list.svg */ "./src/assets/images/list.svg");
/* harmony import */ var _assets_images_close_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/close.svg */ "./src/assets/images/close.svg");
/* harmony import */ var _builders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./builders */ "./src/pages/builders.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui */ "./src/pages/ui.js");
/* harmony import */ var _mainSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mainSection */ "./src/pages/mainSection.js");







let projectsList = new Map;
projectsList.set("Inbox",[]);
let localStorageExists;

document.addEventListener("DOMContentLoaded", function() {
    checkLocalStorage();
  });


function checkLocalStorage(){
    if (storageAvailable("localStorage")) {
        checkForProjectList();
        localStorageExists = true;
        (0,_mainSection__WEBPACK_IMPORTED_MODULE_5__.showInbox)();
      } else {
        projectsList.set("Inbox",[]);
    }
}


function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
}
  
function checkForProjectList(){
    const localStorageProjectList = localStorage.getItem("projectsList");
    if (localStorageProjectList != null || localStorageProjectList != undefined){
        projectsList = new Map(JSON.parse(localStorageProjectList));
        for (const key of projectsList.keys()){
            if (key == "Inbox"){
                continue;
            }
            createProjectButton(key);
        }
        return;
    }
    pushToLocalStorage();
}

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
    if (localStorageExists){
        pushToLocalStorage();
    }
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
    if (localStorageExists){
        pushToLocalStorage();
    }
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
    if (localStorageExists){
        pushToLocalStorage();
    }
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


function pushToLocalStorage(){
    const mapString = JSON.stringify(Array.from(projectsList.entries()));
    localStorage.setItem("projectsList", mapString);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdEQUF3RCxxREFBSztBQUM3RCx3REFBd0QscURBQUs7QUFDN0QsNERBQTRELG9EQUFJO0FBQ2hFO0FBQ0EsOEJBQThCLHFEQUFVOztBQUV4QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUEsbUJBQW1CLHVEQUFZO0FBQy9CLHVCQUF1QixvREFBUztBQUNoQyx1QkFBdUIscURBQVU7QUFDakM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQUksa0VBQWU7O0FBRW5CO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscURBQVU7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixxREFBVTs7QUFFcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL3NyYy9zdHlsZXMvdWkuY3NzIiwid2VicGFjazovL3RvZG9vZGluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vc3JjL3N0eWxlcy91aS5jc3M/ODFiMyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vc3JjL3BhZ2VzL2J1aWxkZXJzLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vc3JjL3BhZ2VzL21haW5TZWN0aW9uLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vc3JjL3BhZ2VzL3Byb2plY3RzQW5kVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9zcmMvcGFnZXMvdWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgICAtLWZvbnQtc2l6ZS1wOiBjbGFtcCguNXJlbSwgMjBweCwgMnJlbSk7XFxuICAgIC0tZm9udC1zaXplLWgzOiAyNnB4O1xcbiAgICAtLWZvbnQtc2l6ZS1oMjogMzJweDtcXG5cXG4gICAgLS1ib3JkZXItY29sb3Itc2lkZW5hdjogIzAwMDAwMDU1O1xcblxcbiAgICAtLWJhY2tncm91bmQtY29sb3Itc2lkZW5hdjogI0ZDRkNGQztcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yLWhlYWRlcjogI0YzRjNGMztcXG4gICAgLS1idXR0b24tYmFja2dyb3VkLWNvbG9yLWFkZDogIzY5ZmY2OTExO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdWQtY29sb3ItYWRkLWhvdmVyOiAjNjlmZjY5MzM7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91ZC1jb2xvci1jYW5jZWw6ICNmZjZiNmIxMTs7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91ZC1jb2xvci1jYW5jZWwtaG92ZXI6ICNmZjZiNmIzMztcXG4gICAgLS1idXR0b24tYmFja2dyb3VkLWNvbG9yLWFjdGl2ZTogI0RERDtcXG4gICAgLS1idXR0b24tYmFja2dyb3VkLWNvbG9yLWhvdmVyOiAjRUVFO1xcbiAgICAtLWJvcmRlci1jb2xvci1hZGQ6ICMzM2ZmMzM7XFxuICAgIC0tYm9yZGVyLWNvbG9yLWNhbmNlbDogI2ZmMzMzMztcXG59XFxuXFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDBkdmg7XFxuICAgIHdpZHRoOiAxMDBkdnc7XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZGVuYXZ7XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxufVxcblxcbiNtYWluU2lkZW5hdkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXNpZGVuYXYpO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDAuNXB4IHZhcigtLWJvcmRlci1jb2xvci1zaWRlbmF2KTtcXG59XFxuXFxuLnNpZGVuYXZCdXR0b257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGdhcDogMyU7XFxuICAgIG1hcmdpbi10b3A6IDYlO1xcbiAgICBtYXJnaW4tbGVmdDogMTQlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlbmF2QnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VkLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLmJ1dHRvbkNsaWNrZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdWQtY29sb3ItYWN0aXZlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2lkZW5hdkJ1dHRvbjpmaXJzdC1jaGlsZHtcXG4gICAgbWFyZ2luLXRvcDogMzAlO1xcbn1cXG5cXG4uc2lkZW5hdlRleHR7XFxuICAgIG1pbi13aWR0aDogNjUlO1xcbiAgICBtYXgtd2lkdGg6IDY1JTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtcCk7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnNpZGVuYXZJbWFnZXtcXG4gICAgbWF4LXdpZHRoOiAxLjVyZW07XFxuICAgIG1heC1oZWlnaHQ6IGF1dG87XFxufVxcblxcbiNzaWRlbmF2UHJvamVjdFRleHR7XFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgICBtYXJnaW4tdG9wOiAyMCU7XFxuICAgIHBhZGRpbmctdG9wOiA1JTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDMpO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yLXNpZGVuYXYpO1xcbn1cXG5cXG4jY3JlYXRlUHJvamVjdERpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3RCdXR0b257XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNCU7XFxuICAgIG1hcmdpbi10b3A6IDYlO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91ZC1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5wcm9qZWN0QnV0dG9uOmxhc3QtY2hpbGR7XFxuICAgIGdhcDogMiU7XFxufVxcblxcbiNpbnB1dENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NyZWF0ZVByb2plY3RJbnB1dHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3Itc2lkZW5hdik7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXApO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXG4gICAgbWFyZ2luLXRvcDogOSU7XFxufVxcblxcblxcbiNjcmVhdGVQcm9qZWN0RGl2QnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNSU7XFxufVxcblxcbi5hZGRDYW5jZWxCdXR0b257XFxuICAgIG1pbi13aWR0aDogMzAlO1xcbiAgICBtaW4taGVpZ2h0OiAxNSU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNwcm9qZWN0QWRke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VkLWNvbG9yLWFkZCk7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvci1hZGQpO1xcbn1cXG5cXG4jcHJvamVjdEFkZDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91ZC1jb2xvci1hZGQtaG92ZXIpO1xcbn1cXG5cXG4jcHJvamVjdENhbmNlbHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91ZC1jb2xvci1jYW5jZWwpO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3ItY2FuY2VsKTtcXG59XFxuXFxuI3Byb2plY3RDYW5jZWw6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdWQtY29sb3ItY2FuY2VsLWhvdmVyKTtcXG59XFxuXFxuLmNsb3NlQnV0dG9ue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcblxcbiNyaWdodENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNoZWFkZXJDb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItaGVhZGVyKTtcXG59XFxuXFxuI2hlYWRlclRleHR7XFxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvci1zaWRlbmF2KTtcXG59XFxuXFxuI21haW5Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMiUgMjUlO1xcbn1cXG5cXG4jbWFpblNlY3Rpb25IZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgyKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxufVxcblxcbi50YXNrQnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnRhc2tCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdWQtY29sb3ItaG92ZXIpO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3VpLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHVDQUF1QztJQUN2QyxvQkFBb0I7SUFDcEIsb0JBQW9COztJQUVwQixpQ0FBaUM7O0lBRWpDLG1DQUFtQztJQUNuQyxrQ0FBa0M7SUFDbEMsdUNBQXVDO0lBQ3ZDLDZDQUE2QztJQUM3QywwQ0FBMEM7SUFDMUMsZ0RBQWdEO0lBQ2hELHFDQUFxQztJQUNyQyxvQ0FBb0M7SUFDcEMsMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWiwyQ0FBMkM7SUFDM0MscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsT0FBTztJQUNQLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFEQUFxRDtBQUN6RDs7QUFFQTtJQUNJLGlFQUFpRTtBQUNyRTs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGFBQWE7SUFDYixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFEQUFxRDtBQUN6RDs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDZDQUE2QztJQUM3Qyw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsT0FBTztBQUNYOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbURBQW1EO0lBQ25ELHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLHlEQUF5RDtBQUM3RDs7QUFFQTtJQUNJLHNEQUFzRDtJQUN0RCw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSw0REFBNEQ7QUFDaEU7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixvREFBb0Q7QUFDeEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxREFBcUQ7QUFDekRcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdHtcXG4gICAgLS1mb250LXNpemUtcDogY2xhbXAoLjVyZW0sIDIwcHgsIDJyZW0pO1xcbiAgICAtLWZvbnQtc2l6ZS1oMzogMjZweDtcXG4gICAgLS1mb250LXNpemUtaDI6IDMycHg7XFxuXFxuICAgIC0tYm9yZGVyLWNvbG9yLXNpZGVuYXY6ICMwMDAwMDA1NTtcXG5cXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yLXNpZGVuYXY6ICNGQ0ZDRkM7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvci1oZWFkZXI6ICNGM0YzRjM7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91ZC1jb2xvci1hZGQ6ICM2OWZmNjkxMTtcXG4gICAgLS1idXR0b24tYmFja2dyb3VkLWNvbG9yLWFkZC1ob3ZlcjogIzY5ZmY2OTMzO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdWQtY29sb3ItY2FuY2VsOiAjZmY2YjZiMTE7O1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdWQtY29sb3ItY2FuY2VsLWhvdmVyOiAjZmY2YjZiMzM7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91ZC1jb2xvci1hY3RpdmU6ICNEREQ7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91ZC1jb2xvci1ob3ZlcjogI0VFRTtcXG4gICAgLS1ib3JkZXItY29sb3ItYWRkOiAjMzNmZjMzO1xcbiAgICAtLWJvcmRlci1jb2xvci1jYW5jZWw6ICNmZjMzMzM7XFxufVxcblxcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwZHZoO1xcbiAgICB3aWR0aDogMTAwZHZ3O1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzaWRlbmF2e1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4jbWFpblNpZGVuYXZDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1zaWRlbmF2KTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAwLjVweCB2YXIoLS1ib3JkZXItY29sb3Itc2lkZW5hdik7XFxufVxcblxcbi5zaWRlbmF2QnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBnYXA6IDMlO1xcbiAgICBtYXJnaW4tdG9wOiA2JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDE0JTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZW5hdkJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91ZC1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5idXR0b25DbGlja2Vke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VkLWNvbG9yLWFjdGl2ZSkgIWltcG9ydGFudDtcXG59XFxuXFxuLnNpZGVuYXZCdXR0b246Zmlyc3QtY2hpbGR7XFxuICAgIG1hcmdpbi10b3A6IDMwJTtcXG59XFxuXFxuLnNpZGVuYXZUZXh0e1xcbiAgICBtaW4td2lkdGg6IDY1JTtcXG4gICAgbWF4LXdpZHRoOiA2NSU7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXApO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBtYXJnaW4tbGVmdDogMiU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5zaWRlbmF2SW1hZ2V7XFxuICAgIG1heC13aWR0aDogMS41cmVtO1xcbiAgICBtYXgtaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4jc2lkZW5hdlByb2plY3RUZXh0e1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gICAgbWFyZ2luLXRvcDogMjAlO1xcbiAgICBwYWRkaW5nLXRvcDogNSU7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgzKTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvci1zaWRlbmF2KTtcXG59XFxuXFxuI2NyZWF0ZVByb2plY3REaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0QnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTQlO1xcbiAgICBtYXJnaW4tdG9wOiA2JTtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLnByb2plY3RCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdWQtY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbjpsYXN0LWNoaWxke1xcbiAgICBnYXA6IDIlO1xcbn1cXG5cXG4jaW5wdXRDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjcmVhdGVQcm9qZWN0SW5wdXR7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yLXNpZGVuYXYpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1wKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxuICAgIG1hcmdpbi10b3A6IDklO1xcbn1cXG5cXG5cXG4jY3JlYXRlUHJvamVjdERpdkJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDUlO1xcbn1cXG5cXG4uYWRkQ2FuY2VsQnV0dG9ue1xcbiAgICBtaW4td2lkdGg6IDMwJTtcXG4gICAgbWluLWhlaWdodDogMTUlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jcHJvamVjdEFkZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91ZC1jb2xvci1hZGQpO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3ItYWRkKTtcXG59XFxuXFxuI3Byb2plY3RBZGQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdWQtY29sb3ItYWRkLWhvdmVyKTtcXG59XFxuXFxuI3Byb2plY3RDYW5jZWx7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdWQtY29sb3ItY2FuY2VsKTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yLWNhbmNlbCk7XFxufVxcblxcbiNwcm9qZWN0Q2FuY2VsOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VkLWNvbG9yLWNhbmNlbC1ob3Zlcik7XFxufVxcblxcbi5jbG9zZUJ1dHRvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG5cXG5cXG4jcmlnaHRDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jaGVhZGVyQ29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWhlYWRlcik7XFxufVxcblxcbiNoZWFkZXJUZXh0e1xcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbiAgICBwYWRkaW5nOiAxJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3Itc2lkZW5hdik7XFxufVxcblxcbiNtYWluQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDIlIDI1JTtcXG59XFxuXFxuI21haW5TZWN0aW9uSGVhZGVye1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMik7XFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcbn1cXG5cXG4udGFza0J1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi50YXNrQnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VkLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdWkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91aS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7Y3JlYXRlU2lkZW5hdiwgY3JlYXRlUmlnaHRTZWN0aW9ufSBmcm9tICcuL3BhZ2VzL3VpJztcbmltcG9ydCB7IHNob3dJbmJveCB9IGZyb20gJy4vcGFnZXMvbWFpblNlY3Rpb24nO1xuaW1wb3J0IHsgcHJvamVjdHNMaXN0IH0gZnJvbSAnLi9wYWdlcy9wcm9qZWN0c0FuZFRhc2tzJztcblxuXG5jcmVhdGVVSSgpO1xuXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVVSSgpe1xuICAgIHRyeXtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVTaWRlbmF2KCkpO1xuICAgIH1cbiAgICBjYXRjaChlKXtcbiAgICAgICAgdGhyb3cgXCJQcm9ibGVtIHcgd3lnZW5lcm93YW5pdSBzaWRlbmF2YSBcXG5cIiArIGUubWVzc2FnZTtcbiAgICB9XG4gICAgdHJ5e1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVJpZ2h0U2VjdGlvbigpKTtcbiAgICB9XG4gICAgY2F0Y2goZSl7XG4gICAgICAgIHRocm93IFwiUHJvYmxlbSB3IHd5Z2VuZXJvd2FuaXUgcHJhd2VnbyBjb250YWluZXJhIFxcblwiICsgZS5tZXNzYWdlO1xuICAgIH1cbiAgICBcbn1cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhaW5lcigpe1xuICAgIGNvbnNvbGUubG9nKFwiYVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRleHQodHlwZSwgaWQsIGNsYXNzTmFtZSwgdGV4dFZhbHVlKXtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gdGV4dFZhbHVlO1xuXG4gICAgaWYgKGlkICE9PSBudWxsKXtcbiAgICAgICAgdGV4dC5pZCA9IGlkO1xuICAgIH1cbiAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKXtcbiAgICAgICAgdGV4dC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWcoaWQgPSBudWxsLCBjbGFzc05hbWUsIHNyYyl7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaWYgKGlkICE9IG51bGwpe1xuICAgICAgICBpbWcuaWQgPSBpZDtcbiAgICB9XG4gICAgaWYgKGNsYXNzTmFtZSAhPSBudWxsKXtcbiAgICAgICAgaW1nLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB9XG4gICAgaWYgKHNyYyAhPSBudWxsKXtcbiAgICAgICAgaW1nLnNyYyA9IHNyYztcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGltZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihpZCwgY2xhc3NOYW1lLCBidXR0b25UZXh0ID0gbnVsbCl7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBpZiAoaWQgIT09IG51bGwpe1xuICAgICAgICBidXR0b24uaWQgPSBpZDtcbiAgICB9XG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCl7XG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgfVxuICAgIGlmIChidXR0b25UZXh0ICE9PSBudWxsKXtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gYnV0dG9uVGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWRkUHJvamVjdFRhc2soZGl2LCBpc1Byb2plY3Qpe1xuXG59XG5cbiIsImltcG9ydCB7IGNyZWF0ZUltZywgY3JlYXRlVGV4dCwgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi9idWlsZGVycyc7XG5pbXBvcnQgYWRkIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2FkZC5zdmdcIjtcbmltcG9ydCB7IGFkZE5ld1Byb2plY3QsIGNyZWF0ZVRhc2tCdXR0b24sIGxvY2FsU3RvcmFnZUV4aXN0cywgcHJvamVjdHNMaXN0IH0gZnJvbSBcIi4vcHJvamVjdHNBbmRUYXNrc1wiO1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dJbmJveCgpe1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tDb250YWluZXJcIik7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25BZGRUYXNrKFwiSW5ib3hcIiwgdGFza0NvbnRhaW5lcikpO1xuICAgIGdldFRhc2tMaXN0KFwiSW5ib3hcIiwgdGFza0NvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIHNob3dUb2RheSgpe1xuXG59XG5cbmZ1bmN0aW9uIHNob3dUaGlzV2Vlaygpe1xuXG59XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0KHByb2plY3ROYW1lKXtcblxufVxuXG5mdW5jdGlvbiBjbGVhclNlY3Rpb24oKXtcblxufVxuXG5mdW5jdGlvbiBidXR0b25BZGRUYXNrKHByb2plY3ROYW1lLCBjb250YWllcil7XG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKHByb2plY3ROYW1lLCBcInRhc2tCdXR0b25cIik7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGNyZWF0ZUltZyhudWxsLCBcInNpZGVuYXZJbWFnZVwiLCBhZGQpKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dChcInBcIiwgbnVsbCwgXCJzaWRlbmF2VGV4dFwiLCBcIkFkZCBUYXNrXCIpKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGFkZE5ld1Byb2plY3QoY29udGFpZXIsIFwidGFza1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBnZXRUYXNrTGlzdChwcm9qZWN0TmFtZSwgY29udGFpbmVyKXtcbiAgICAgICAgY29uc3QgbGlzdE9mVmFsdWVzID0gWy4uLnByb2plY3RzTGlzdC5nZXQocHJvamVjdE5hbWUpLnZhbHVlcygpXTtcbiAgICAgICAgbGlzdE9mVmFsdWVzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrQnV0dG9uSWQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIiN0YXNrQnV0dG9uXCIrZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAodGFza0J1dHRvbklkICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVRhc2tCdXR0b24oZWxlbWVudCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbn1cbiIsImltcG9ydCBhZGQgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9hZGQuc3ZnJztcbmltcG9ydCBsaXN0IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvbGlzdC5zdmcnO1xuaW1wb3J0IGNsb3NlIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvY2xvc2Uuc3ZnJztcbmltcG9ydCB7IGNyZWF0ZUltZywgY3JlYXRlVGV4dCwgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi9idWlsZGVycyc7XG5pbXBvcnQgeyBidXR0b25DbGlja2VkIH0gZnJvbSAnLi91aSc7XG5pbXBvcnQgeyBzaG93SW5ib3ggfSBmcm9tICcuL21haW5TZWN0aW9uJztcblxuZXhwb3J0IGxldCBwcm9qZWN0c0xpc3QgPSBuZXcgTWFwO1xucHJvamVjdHNMaXN0LnNldChcIkluYm94XCIsW10pO1xuZXhwb3J0IGxldCBsb2NhbFN0b3JhZ2VFeGlzdHM7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuICAgIGNoZWNrTG9jYWxTdG9yYWdlKCk7XG4gIH0pO1xuXG5cbmZ1bmN0aW9uIGNoZWNrTG9jYWxTdG9yYWdlKCl7XG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICAgICAgY2hlY2tGb3JQcm9qZWN0TGlzdCgpO1xuICAgICAgICBsb2NhbFN0b3JhZ2VFeGlzdHMgPSB0cnVlO1xuICAgICAgICBzaG93SW5ib3goKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RzTGlzdC5zZXQoXCJJbmJveFwiLFtdKTtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgbGV0IHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcbiAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgc3RvcmFnZSAmJlxuICAgICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxuICAgICAgKTtcbiAgICB9XG59XG4gIFxuZnVuY3Rpb24gY2hlY2tGb3JQcm9qZWN0TGlzdCgpe1xuICAgIGNvbnN0IGxvY2FsU3RvcmFnZVByb2plY3RMaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c0xpc3RcIik7XG4gICAgaWYgKGxvY2FsU3RvcmFnZVByb2plY3RMaXN0ICE9IG51bGwgfHwgbG9jYWxTdG9yYWdlUHJvamVjdExpc3QgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgcHJvamVjdHNMaXN0ID0gbmV3IE1hcChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVByb2plY3RMaXN0KSk7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHByb2plY3RzTGlzdC5rZXlzKCkpe1xuICAgICAgICAgICAgaWYgKGtleSA9PSBcIkluYm94XCIpe1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdEJ1dHRvbihrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcHVzaFRvTG9jYWxTdG9yYWdlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0QnV0b24oZGl2KXtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NOYW1lID0gXCJwcm9qZWN0QnV0dG9uXCI7XG4gICAgYnV0dG9uLmlkID0gXCJjcmVhdGVQcm9qZWN0QnV0dG9uXCI7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXthZGROZXdQcm9qZWN0KGRpdiwgXCJwcm9qZWN0XCIpfSlcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChjcmVhdGVJbWcobnVsbCwgXCJzaWRlbmF2SW1hZ2VcIiwgYWRkKSk7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHQoXCJwXCIsIG51bGwsIFwic2lkZW5hdlRleHRcIiwgXCJBZGQgUHJvamVjdFwiKSk7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1Byb2plY3QoY3JlYXRlUHJvamVjdERpdiwgdHlwZSl7XG4gICAgdHJ5e1xuICAgICAgICBjcmVhdGVQcm9qZWN0RGl2LnJlbW92ZUNoaWxkKGNyZWF0ZVByb2plY3REaXYubGFzdENoaWxkKTtcbiAgICB9XG4gICAgY2F0Y2goZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgaW4gYWRkTmV3UHJvamVjdCBcXG5cIiArIGUpO1xuICAgIH1cbiAgICBmaW5hbGx5e1xuICAgICAgICBhZGRJbnB1dChjcmVhdGVQcm9qZWN0RGl2LCB0eXBlKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkSW5wdXQoZGl2LCB0eXBlLCBwcm9qZWN0ID0gbnVsbCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmlkID0gXCJpbnB1dENvbnRhaW5lclwiO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlmICh0eXBlID09IFwicHJvamVjdFwiKXtcbiAgICAgICAgaW5wdXQuaWQgPSBcImNyZWF0ZVByb2plY3RJbnB1dFwiO1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiUHJvamVjdCBuYW1lXCI7XG4gICAgfVxuICAgIGlmICh0eXBlID09IFwidGFza1wiKXtcbiAgICAgICAgaW5wdXQuaWQgPSBcImNyZWF0ZVRhc2tJbnB1dFwiO1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiVGFzayBuYW1lXCI7XG4gICAgfVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICBjb25zdCBkaXZCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2QnV0dG9ucy5pZCA9IFwiY3JlYXRlUHJvamVjdERpdkJ1dHRvbnNcIjtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2QnV0dG9ucyk7XG4gICAgXG4gICAgY29uc3QgYnV0dG9uQWRkID0gY3JlYXRlQnV0dG9uKFwicHJvamVjdEFkZFwiLCBcImFkZENhbmNlbEJ1dHRvblwiLCBcIkFkZFwiKTtcbiAgICBidXR0b25BZGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmICh0eXBlID09IFwicHJvamVjdFwiKXtcbiAgICAgICAgICAgIGFkZFByb2plY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PSBcInRhc2tcIil7XG4gICAgICAgICAgICBhZGRUYXNrKHByb2plY3QsIGNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBkaXZCdXR0b25zLmFwcGVuZENoaWxkKGJ1dHRvbkFkZCk7XG5cbiAgICBjb25zdCBidXR0b25DYW5jZWwgPSBjcmVhdGVCdXR0b24oXCJwcm9qZWN0Q2FuY2VsXCIsIFwiYWRkQ2FuY2VsQnV0dG9uXCIsIFwiQ2FuY2VsXCIsKTtcbiAgICBidXR0b25DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmICh0eXBlID09IFwicHJvamVjdFwiKXtcbiAgICAgICAgICAgIHJlbW92ZVByb2plY3RJbnB1dCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09IFwidGFza1wiKXtcbiAgICAgICAgICAgIHJlbW92ZVRhc2tJbnB1dChjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgZGl2QnV0dG9ucy5hcHBlbmRDaGlsZChidXR0b25DYW5jZWwpO1xuXG4gICAgaW5wdXQuZm9jdXMoKTtcbiAgICByZXR1cm4gaW5wdXQ7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QoKXtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlUHJvamVjdElucHV0XCIpO1xuICAgIGNvbnN0IHRhc2tzSW5Qcm9qZWN0ID0gW107XG4gICAgaWYgKHByb2plY3ROYW1lLnZhbHVlID09IFwiXCIpe1xuICAgICAgICBwcm9qZWN0TmFtZS5wbGFjZWhvbGRlciA9IFwiQ2FuJ3QgYmUgZW1wdHlcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocHJvamVjdHNMaXN0Lmhhcyhwcm9qZWN0TmFtZS52YWx1ZSkpe1xuICAgICAgICBwcm9qZWN0TmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHByb2plY3ROYW1lLnBsYWNlaG9sZGVyID0gXCJOYW1lIGV4aXN0c1wiO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNyZWF0ZVByb2plY3RCdXR0b24ocHJvamVjdE5hbWUudmFsdWUpO1xuICAgIHByb2plY3RzTGlzdC5zZXQocHJvamVjdE5hbWUudmFsdWUsIFtdKTtcbiAgICBpZiAobG9jYWxTdG9yYWdlRXhpc3RzKXtcbiAgICAgICAgcHVzaFRvTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuICAgIHJlbW92ZVByb2plY3RJbnB1dCgpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0SW5wdXQoKXtcbiAgICBhZGRQcm9qZWN0QnV0b24oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVQcm9qZWN0RGl2XCIpKTtcbiAgICBjcmVhdGVQcm9qZWN0RGl2LnJlbW92ZUNoaWxkKGNyZWF0ZVByb2plY3REaXYuZmlyc3RDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RCdXR0b24obmFtZSl7XG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKFwicHJvamVjdEJ1dHRvblwiKyBwcm9qZWN0c0xpc3QubGVuZ3RoLCBcInByb2plY3RCdXR0b25cIik7XG5cbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoY3JlYXRlSW1nKG51bGwsIFwic2lkZW5hdkltYWdlXCIsIGxpc3QpKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dChcInBcIiwgbnVsbCwgXCJzaWRlbmF2VGV4dFwiLCBuYW1lKSk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBidXR0b25DbGlja2VkKGJ1dHRvbik7XG4gICAgfSlcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihudWxsLFwiY2xvc2VCdXR0b25cIixudWxsKTtcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgZGVsZXRlUHJvamVjdChuYW1lLCBidXR0b24pO1xuICAgIH0pXG5cbiAgICBjb25zdCBpbWcgPSBjcmVhdGVJbWcobnVsbCwgXCJzaWRlbmF2SW1hZ2VcIiwgY2xvc2UpO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiY2xvc2VCdXR0b25JbWdcIik7XG4gICAgY2xvc2VCdXR0b24uYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbilcblxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c0NvbnRhaW5lclwiKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoYnV0dG9uLCBwcm9qZWN0c0NvbnRhaW5lci5sYXN0Q2hpbGQpO1xuXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QobmFtZSwgYnV0dG9uKXtcbiAgICBwcm9qZWN0c0xpc3QuZGVsZXRlKG5hbWUudG9TdHJpbmcoKSk7XG4gICAgaWYgKGxvY2FsU3RvcmFnZUV4aXN0cyl7XG4gICAgICAgIHB1c2hUb0xvY2FsU3RvcmFnZSgpO1xuICAgIH1cbiAgICBidXR0b24ucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2socHJvamVjdCwgY29udGFpbmVyKXtcbiAgICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZVRhc2tJbnB1dFwiKTtcbiAgICBjb25zdCB0YXNrTmFtZSA9IHRhc2tJbnB1dC52YWx1ZTtcbiAgICBpZiAocHJvamVjdCA9PSBudWxsKXtcbiAgICAgICAgcHJvamVjdCA9IFwiSW5ib3hcIjtcbiAgICB9XG4gICAgaWYgKHRhc2tOYW1lID09IFwiXCIpe1xuICAgICAgICB0YXNrSW5wdXQucGxhY2Vob2xkZXIgPSBcIkNhbid0IGJlIGVtcHR5XCI7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJvamVjdHNMaXN0Lmhhcyhwcm9qZWN0KSl7XG4gICAgICAgIGNvbnN0IHByb2plY3RWYWx1ZXMgPSBbLi4ucHJvamVjdHNMaXN0LmdldChwcm9qZWN0KS52YWx1ZXMoKV07XG4gICAgICAgIGlmIChwcm9qZWN0VmFsdWVzLmluY2x1ZGVzKHRhc2tOYW1lKSl7XG4gICAgICAgICAgICB0YXNrSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgdGFza0lucHV0LnBsYWNlaG9sZGVyID0gXCJUaGlzIHRhc2sgYWxyZWFkeSBleGlzdHNcIjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm9qZWN0c0xpc3Quc2V0KHByb2plY3QsIHByb2plY3RzTGlzdC5nZXQocHJvamVjdCkuY29uY2F0KHRhc2tOYW1lKSk7XG4gICAgaWYgKGxvY2FsU3RvcmFnZUV4aXN0cyl7XG4gICAgICAgIHB1c2hUb0xvY2FsU3RvcmFnZSgpO1xuICAgIH1cbiAgICByZW1vdmVUYXNrSW5wdXQoY29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFza0lucHV0KGNvbnRhaW5lcil7XG4gICAgc2hvd0luYm94KCk7XG4gICAgY29udGFpbmVyLnJlbW92ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza0J1dHRvbih0YXNrTmFtZSl7XG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKFwidGFza0J1dHRvblwiKyB0YXNrTmFtZSwgXCJ0YXNrQnV0dG9uXCIpO1xuXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGNyZWF0ZUltZyhudWxsLCBcInNpZGVuYXZJbWFnZVwiLCBsaXN0KSk7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHQoXCJwXCIsIG51bGwsIFwic2lkZW5hdlRleHRcIiwgdGFza05hbWUpKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybjtcbiAgICB9KVxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gY3JlYXRlQnV0dG9uKG51bGwsXCJjbG9zZUJ1dHRvblwiLG51bGwpO1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm47XG4gICAgfSlcblxuICAgIGNvbnN0IGltZyA9IGNyZWF0ZUltZyhudWxsLCBcInNpZGVuYXZJbWFnZVwiLCBjbG9zZSk7XG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJjbG9zZUJ1dHRvbkltZ1wiKTtcbiAgICBjbG9zZUJ1dHRvbi5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0NvbnRhaW5lclwiKTtcbiAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGJ1dHRvbiwgY29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgcmV0dXJuO1xufVxuXG5cbmZ1bmN0aW9uIHB1c2hUb0xvY2FsU3RvcmFnZSgpe1xuICAgIGNvbnN0IG1hcFN0cmluZyA9IEpTT04uc3RyaW5naWZ5KEFycmF5LmZyb20ocHJvamVjdHNMaXN0LmVudHJpZXMoKSkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNMaXN0XCIsIG1hcFN0cmluZyk7XG59IiwiaW1wb3J0ICcuLi9zdHlsZXMvdWkuY3NzJ1xuaW1wb3J0IGluYm94IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaW5ib3guc3ZnJztcbmltcG9ydCB0b2RheSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3RvZGF5LnN2Zyc7XG5pbXBvcnQgd2VlayBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3dlZWsuc3ZnJztcbmltcG9ydCB7IGNyZWF0ZUltZywgY3JlYXRlVGV4dCwgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi9idWlsZGVycyc7XG5cbmltcG9ydCB7IGFkZFByb2plY3RCdXRvbiB9IGZyb20gJy4vcHJvamVjdHNBbmRUYXNrcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaWRlbmF2KCl7XG4gICAgY29uc3Qgc2lkZW5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NpZGVuYXYnKTtcbiAgICBzaWRlbmF2Q29udGFpbmVyLmlkID0gXCJzaWRlbmF2XCI7XG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY29udGFpbmVyJyk7XG4gICAgbWFpbkNvbnRhaW5lci5pZCA9IFwibWFpblNpZGVuYXZDb250YWluZXJcIjtcbiAgICBzaWRlbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTaWRlQnV0dG9uKFwiSW5ib3hcIiwgaW5ib3gpKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVNpZGVCdXR0b24oXCJUb2RheVwiLCB0b2RheSkpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2lkZUJ1dHRvbihcIlRoaXMgd2Vla1wiLCB3ZWVrKSk7XG4gICAgXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KFwiZGl2XCIsIFwic2lkZW5hdlByb2plY3RUZXh0XCIsIG51bGwsIFwiUHJvamVjdHNcIikpO1xuXG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb250YWluZXInKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5pZCA9IFwicHJvamVjdHNDb250YWluZXJcIjtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzQ29udGFpbmVyKTtcblxuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RDb250YWluZXIoKSk7XG5cbiAgICByZXR1cm4gc2lkZW5hdkNvbnRhaW5lcjtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVTaWRlQnV0dG9uKG5hbWUsIGljb24pe1xuXG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKG51bGwsIFwic2lkZW5hdkJ1dHRvblwiKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoY3JlYXRlSW1nKG51bGwsIFwic2lkZW5hdkltYWdlXCIsIGljb24pKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dChcInBcIiwgbnVsbCwgXCJzaWRlbmF2VGV4dFwiLCBuYW1lKSk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgIGJ1dHRvbkNsaWNrZWQoYnV0dG9uKTtcbiAgICB9KVxuICAgIGlmIChuYW1lID09PSBcIkluYm94XCIpe1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbkNsaWNrZWRcIik7XG4gICAgfVxuICAgIHJldHVybiBidXR0b247XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1dHRvbkNsaWNrZWQoYnV0dG9uKXtcbiAgICBjb25zdCBidXR0b25DbGlja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b25DbGlja2VkXCIpO1xuICAgIGlmICghYnV0dG9uQ2xpY2tlZCl7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uQ2xpY2tlZFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBidXR0b25DbGlja2VkLmNsYXNzTGlzdC5yZW1vdmUoXCJidXR0b25DbGlja2VkXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uQ2xpY2tlZFwiKTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdENvbnRhaW5lcigpe1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pZCA9IFwiY3JlYXRlUHJvamVjdERpdlwiO1xuXG4gICAgYWRkUHJvamVjdEJ1dG9uKGRpdik7XG5cbiAgICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmlnaHRTZWN0aW9uKCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmlkID0gXCJyaWdodENvbnRhaW5lclwiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5pZCA9IFwiaGVhZGVyQ29udGFpbmVyXCI7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRleHQoXCJoMVwiLCBcImhlYWRlclRleHRcIiwgbnVsbCwgXCJMaXN0IGRvVG9cIikpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NvbnRhaWVyJyk7XG4gICAgY29udGFpbmVyLmlkID0gXCJtYWluQ29udGFpbmVyXCI7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dChcImgyXCIsIFwibWFpblNlY3Rpb25IZWFkZXJcIiwgbnVsbCwgXCJJbmJveFwiKSk7XG5cbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY29udGFpbmVyJyk7XG4gICAgdGFza0NvbnRhaW5lci5pZCA9IFwidGFza0NvbnRhaW5lclwiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==