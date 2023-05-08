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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --font-size-p: clamp(.5rem, 20px, 2rem);\n    --font-size-h3: 26px;\n    --font-size-h2: 32px;\n\n    --border-color-sidenav: #00000055;\n\n    --background-color-sidenav: #FCFCFC;\n    --background-color-header: #F3F3F3;\n    --button-background-color-add: #69ff6911;\n    --button-background-color-add-hover: #69ff6933;\n    --button-background-color-cancel: #ff6b6b11;;\n    --button-background-color-cancel-hover: #ff6b6b33;\n    --button-background-color-active: #DDD;\n    --button-background-color-hover: #EEE;\n    --button-background-color-checklist-hover: #00000099;\n    --border-color-add: #33ff33;\n    --border-color-cancel: #ff3333;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-family: 'Roboto', sans-serif;\n}\nbody{\n    height: 100dvh;\n    width: 100dvw;\n    overflow-y: hidden;\n    display: flex;\n}\n\n#sidenav{\n    display: flex;\n    flex-direction: column;\n    width: 15%;\n    min-width: 250px;\n    height: 100%;\n    background: var(--background-color-sidenav);\n    border-right: solid 0.5px var(--border-color-sidenav);\n}\n\n#sidenavButtonContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n.sidenavButton{\n    display: flex;\n    align-items: flex-end;\n    background: transparent;\n    width: 80%;\n    border-radius: 5px;\n    padding: 2%;\n    gap: 3%;\n    margin-top: 6%;\n    margin-left: 14%;\n    cursor: pointer;\n}\n\n.sidenavButton:hover{\n    background-color: var(--button-background-color-hover);\n}\n\n.buttonFocus{\n    background-color: var(--button-background-color-active) !important;\n}\n\n.sidenavButton:first-child{\n    margin-top: 30%;\n}\n\n.sidenavButtonText{\n    min-width: 65%;\n    max-width: 65%;\n    font-size: var(--font-size-p);\n    font-weight: 200;\n    margin-left: 2%;\n    padding: 0 1%;\n    border-radius: 10px;\n    text-align: left;\n    text-overflow:ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.sidenavButtonImg{\n    max-width: 1.5rem;\n    max-height: auto;\n}\n\n#sideNavProjectText{\n    padding-left: 10%;\n    margin-top: 20%;\n    padding-top: 5%;\n    font-size: var(--font-size-h3);\n    font-weight: 800;\n    border-top: solid 1px var(--border-color-sidenav);\n}\n\n#createProjectDiv{\n    display: flex;\n    flex-direction: column;\n}\n\n.pTButton{\n    background: transparent;\n    cursor: pointer;\n    display: flex;\n    width: 80%;\n    padding: 2%;\n    border-radius: 5px;\n    margin-left: 14%;\n    margin-top: 6%;\n    gap: .5rem;\n}\n\n.pTButton:hover{\n    background-color: var(--button-background-color-hover);\n}\n\n.pTButton:last-child{\n    gap: 2%;\n}\n\n.inputContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n.inputBox{\n    width: 80%;\n    align-self: center;\n    border: solid 1px var(--border-color-sidenav);\n    font-size: var(--font-size-p);\n    margin-bottom: 5%;\n    margin-top: 9%;\n}\n\n\n.acButtonsContainer{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n}\n\n.acButton{\n    width: 30%;\n    height: 100%;\n    max-width: 10rem;\n    cursor: pointer;\n    font-weight: bold;\n}\n\n.addButton{\n    background-color: var(--button-background-color-add);\n    border: solid 1px var(--border-color-add);\n}\n\n.addButton:hover{\n    background-color: var(--button-background-color-add-hover);\n}\n\n.cancelButton{\n    background-color: var(--button-background-color-cancel);\n    border: solid 1px var(--border-color-cancel);\n}\n\n.cancelButton:hover{\n    background-color: var(--button-background-color-cancel-hover);\n}\n\n.closeButton{\n    cursor: pointer;\n    background-color: transparent;\n    margin-right: 0;\n}\n\n\n#rightContainer{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n}\n\n#headerContainer{\n    background-color: var(--background-color-header);\n}\n\n#headerText{\n    font-style: oblique;\n    padding: 1%;\n    padding-left: 10%;\n    border-bottom: solid 1px var(--border-color-sidenav);\n}\n\n#mainContainer{\n    display: flex;\n    flex-direction: column;\n    margin: 2% 25%;\n}\n\n#mainSectionHeader{\n    font-size: var(--font-size-h2);\n    margin-bottom: 5%;\n}\n\n#createTaskInput{\n    font-size: var(--font-size-h3);\n    margin-bottom: 2%;\n}\n\n#taskContainer{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.taskButton{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    background-color: transparent;\n    cursor: pointer;\n    margin:0;\n    padding: 1%;\n    border-radius: 5px;\n}\n.taskButton:hover{\n    background-color: var(--button-background-color-hover);\n}\n\n.checkButton{\n    border: 1px solid black;\n    border-radius: 100px;\n    min-width: 1rem;\n    min-height: 1rem;\n    background-color: transparent;\n}\n\n.checkButtonActive{\n    background-color: var(--button-background-color-checklist-hover);\n}\n\n.checkButtonActiveText{\n    text-decoration: line-through;\n}\n\n.containerForInputs{\n    min-width: calc(24% - 1rem);\n    display: flex;\n    justify-content: flex-start;\n    gap:5%;\n}\n\n.dateInput{\n    background-color: transparent;\n}\n\n.colorInput{\n    width: 2rem;\n}\n\n", "",{"version":3,"sources":["webpack://./src/styles/ui.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300&display=swap');\n\n:root{\n    --font-size-p: clamp(.5rem, 20px, 2rem);\n    --font-size-h3: 26px;\n    --font-size-h2: 32px;\n\n    --border-color-sidenav: #00000055;\n\n    --background-color-sidenav: #FCFCFC;\n    --background-color-header: #F3F3F3;\n    --button-background-color-add: #69ff6911;\n    --button-background-color-add-hover: #69ff6933;\n    --button-background-color-cancel: #ff6b6b11;;\n    --button-background-color-cancel-hover: #ff6b6b33;\n    --button-background-color-active: #DDD;\n    --button-background-color-hover: #EEE;\n    --button-background-color-checklist-hover: #00000099;\n    --border-color-add: #33ff33;\n    --border-color-cancel: #ff3333;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-family: 'Roboto', sans-serif;\n}\nbody{\n    height: 100dvh;\n    width: 100dvw;\n    overflow-y: hidden;\n    display: flex;\n}\n\n#sidenav{\n    display: flex;\n    flex-direction: column;\n    width: 15%;\n    min-width: 250px;\n    height: 100%;\n    background: var(--background-color-sidenav);\n    border-right: solid 0.5px var(--border-color-sidenav);\n}\n\n#sidenavButtonContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n.sidenavButton{\n    display: flex;\n    align-items: flex-end;\n    background: transparent;\n    width: 80%;\n    border-radius: 5px;\n    padding: 2%;\n    gap: 3%;\n    margin-top: 6%;\n    margin-left: 14%;\n    cursor: pointer;\n}\n\n.sidenavButton:hover{\n    background-color: var(--button-background-color-hover);\n}\n\n.buttonFocus{\n    background-color: var(--button-background-color-active) !important;\n}\n\n.sidenavButton:first-child{\n    margin-top: 30%;\n}\n\n.sidenavButtonText{\n    min-width: 65%;\n    max-width: 65%;\n    font-size: var(--font-size-p);\n    font-weight: 200;\n    margin-left: 2%;\n    padding: 0 1%;\n    border-radius: 10px;\n    text-align: left;\n    text-overflow:ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.sidenavButtonImg{\n    max-width: 1.5rem;\n    max-height: auto;\n}\n\n#sideNavProjectText{\n    padding-left: 10%;\n    margin-top: 20%;\n    padding-top: 5%;\n    font-size: var(--font-size-h3);\n    font-weight: 800;\n    border-top: solid 1px var(--border-color-sidenav);\n}\n\n#createProjectDiv{\n    display: flex;\n    flex-direction: column;\n}\n\n.pTButton{\n    background: transparent;\n    cursor: pointer;\n    display: flex;\n    width: 80%;\n    padding: 2%;\n    border-radius: 5px;\n    margin-left: 14%;\n    margin-top: 6%;\n    gap: .5rem;\n}\n\n.pTButton:hover{\n    background-color: var(--button-background-color-hover);\n}\n\n.pTButton:last-child{\n    gap: 2%;\n}\n\n.inputContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n.inputBox{\n    width: 80%;\n    align-self: center;\n    border: solid 1px var(--border-color-sidenav);\n    font-size: var(--font-size-p);\n    margin-bottom: 5%;\n    margin-top: 9%;\n}\n\n\n.acButtonsContainer{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n}\n\n.acButton{\n    width: 30%;\n    height: 100%;\n    max-width: 10rem;\n    cursor: pointer;\n    font-weight: bold;\n}\n\n.addButton{\n    background-color: var(--button-background-color-add);\n    border: solid 1px var(--border-color-add);\n}\n\n.addButton:hover{\n    background-color: var(--button-background-color-add-hover);\n}\n\n.cancelButton{\n    background-color: var(--button-background-color-cancel);\n    border: solid 1px var(--border-color-cancel);\n}\n\n.cancelButton:hover{\n    background-color: var(--button-background-color-cancel-hover);\n}\n\n.closeButton{\n    cursor: pointer;\n    background-color: transparent;\n    margin-right: 0;\n}\n\n\n#rightContainer{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n}\n\n#headerContainer{\n    background-color: var(--background-color-header);\n}\n\n#headerText{\n    font-style: oblique;\n    padding: 1%;\n    padding-left: 10%;\n    border-bottom: solid 1px var(--border-color-sidenav);\n}\n\n#mainContainer{\n    display: flex;\n    flex-direction: column;\n    margin: 2% 25%;\n}\n\n#mainSectionHeader{\n    font-size: var(--font-size-h2);\n    margin-bottom: 5%;\n}\n\n#createTaskInput{\n    font-size: var(--font-size-h3);\n    margin-bottom: 2%;\n}\n\n#taskContainer{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.taskButton{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    background-color: transparent;\n    cursor: pointer;\n    margin:0;\n    padding: 1%;\n    border-radius: 5px;\n}\n.taskButton:hover{\n    background-color: var(--button-background-color-hover);\n}\n\n.checkButton{\n    border: 1px solid black;\n    border-radius: 100px;\n    min-width: 1rem;\n    min-height: 1rem;\n    background-color: transparent;\n}\n\n.checkButtonActive{\n    background-color: var(--button-background-color-checklist-hover);\n}\n\n.checkButtonActiveText{\n    text-decoration: line-through;\n}\n\n.containerForInputs{\n    min-width: calc(24% - 1rem);\n    display: flex;\n    justify-content: flex-start;\n    gap:5%;\n}\n\n.dateInput{\n    background-color: transparent;\n}\n\n.colorInput{\n    width: 2rem;\n}\n\n"],"sourceRoot":""}]);
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listOfProjectMaps": () => (/* binding */ listOfProjectMaps),
/* harmony export */   "localStorageExists": () => (/* binding */ localStorageExists)
/* harmony export */ });
/* harmony import */ var _pages_projectsAndTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/projectsAndTasks */ "./src/pages/projectsAndTasks.js");
/* harmony import */ var _pages_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/ui */ "./src/pages/ui.js");



let listOfProjectMaps = new Map;
let listOfTasksMap = new Map;
let localStorageExists = false;


(0,_pages_ui__WEBPACK_IMPORTED_MODULE_1__.createUI)();

document.addEventListener("DOMContentLoaded", function() {
    checkLocalStorage();
  });


function checkLocalStorage(){
    if (storageAvailable("localStorage")) {
        checkForProjectList();
        localStorageExists = true;
      } else {
        listOfProjectMaps.set("Inbox", listOfTasksMap);
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
    } 
    catch (e) {
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
    const localStorageProjectList = localStorage.getItem("listOfProjectMaps");
    listOfProjectMaps = new Map(JSON.parse(localStorageProjectList));
    const projectContainer = document.getElementById("projectsContainer");
    const inboxTaskContainer = document.getElementById("mainContainer");
    if (listOfProjectMaps.size === 0){
      listOfProjectMaps.set("Inbox", listOfTasksMap);
      return;
    }
    for (let key of listOfProjectMaps.keys()){
        try{
            const localProject = localStorage.getItem(key.toString());
            listOfTasksMap = new Map(JSON.parse(localProject));
            listOfProjectMaps.set(key, listOfTasksMap);
            if (key === "Inbox"){
              continue;
            }
            (0,_pages_ui__WEBPACK_IMPORTED_MODULE_1__.addPTToPTList)(key, projectContainer, false);
        }
        catch(e){
            console.log("Error while getting listOfProjectMaps from localStorage\n" + e);
        }
        finally{
            continue;
        }
    }
    for (let key of listOfProjectMaps.get("Inbox").keys()){
      try{
        (0,_pages_ui__WEBPACK_IMPORTED_MODULE_1__.addPTToPTList)(key, inboxTaskContainer, true);
      }
      catch(e){
        console.log("Error while generating tasks to Inbox \n" + e)
      }
    }
    return;
}

/***/ }),

/***/ "./src/pages/builders.js":
/*!*******************************!*\
  !*** ./src/pages/builders.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createButton": () => (/* binding */ createButton),
/* harmony export */   "createDiv": () => (/* binding */ createDiv),
/* harmony export */   "createImg": () => (/* binding */ createImg),
/* harmony export */   "createInput": () => (/* binding */ createInput),
/* harmony export */   "createPTButton": () => (/* binding */ createPTButton),
/* harmony export */   "createSidenavButtons": () => (/* binding */ createSidenavButtons),
/* harmony export */   "createText": () => (/* binding */ createText)
/* harmony export */ });
/* harmony import */ var _projectsAndTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectsAndTasks */ "./src/pages/projectsAndTasks.js");


function createDiv(type, id = null, className = null){
    const div = document.createElement(type);

    if (id !== null) {
        div.id = id;
    }
    if (className !== null){
        if (Array.isArray(className)){
            addClassNamesToObject(div, className);
        }
        else{
            div.className = className;
        }
    }
    return div;
}

function createText(type, id = null, className = null, textValue = null){
    const text = document.createElement(type);
    text.textContent = textValue;

    if (id !== null){
        text.id = id;
    }
    if (className !== null){
        if (Array.isArray(className)){
            addClassNamesToObject(text, className);
        }
        else{
            text.className = className;
        }
    }
    return text;
}

function createImg(src, alt, id = null, className = null){
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;

    if (id != null){
        img.id = id;
    }
    if (className !== null){
        if (Array.isArray(className)){
            addClassNamesToObject(img, className);
        }
        else{
            img.className = className;
        }
    }
    return img;
}

function createButton(id = null, className = null, buttonText = null){
    const button = document.createElement('button');
    if (id !== null){
        button.id = id;
    }
    if (className !== null){
        if (Array.isArray(className)){
            addClassNamesToObject(button, className);
        }
        else{
            button.className = className;
        }

    }
    if (buttonText !== null){
        button.textContent = buttonText;
    }
    return button;
}


function createInput(id = null, className = null, typeOfInput = null, placeholder = null, focus = null){
    const input = document.createElement('input');
    if (id !== null){
        input.id = id;
    }
    if (className !== null){
        if (Array.isArray(className)){
            addClassNamesToObject(input, className);
        }
        else{
            input.className = className;
        }
    }
    if (typeOfInput !== null){
        input.type = typeOfInput;
    }
    if (typeOfInput !== null){
        input.placeholder = placeholder;
    }
    if (focus !== null && focus == true){
        input.focus();
    }
    return input;
}


function addClassNamesToObject(object,className){
    className.forEach(element => {
        object.classList.add(element);
    });
    return;
}

function createSidenavButtons(name, img){
    const button = createButton(null, "sidenavButton");
    const buttonImg = createImg(img, name+" icon", null, "sidenavButtonImg");
    const buttonText = createText("p", null, "sidenavButtonText", name);
    button.appendChild(buttonImg);
    button.appendChild(buttonText);
    button.addEventListener("click", function(){
        sidenavButtonFocus(button);
    })
    if (name === "Inbox"){
        button.classList.add("buttonFocus");
    }
    return button;
}

function sidenavButtonFocus(name){
    const buttonFocus = document.querySelector(".buttonFocus");
    if (!buttonFocus){
        name.classList.add("buttonFocus");
        return;
    }
    buttonFocus.classList.remove("buttonFocus");
    name.classList.add("buttonFocus");
}

function createPTButton(type, img, container, activeButtonName){
    const button = createButton(type + "Button", "pTButton");
    const buttonImg = createImg(img, "plus icon", null, "sidenavButtonImg");
    const buttonText = createText("p", null, "sidenavButtonText", "Add "+ type);

    button.appendChild(buttonImg);
    button.appendChild(buttonText)
    button.addEventListener("click", function(){
    ;(0,_projectsAndTasks__WEBPACK_IMPORTED_MODULE_0__.buttonPTClicked)(type, button, container, activeButtonName)
    });

    return button;
}

/***/ }),

/***/ "./src/pages/projectsAndTasks.js":
/*!***************************************!*\
  !*** ./src/pages/projectsAndTasks.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "buttonPTClicked": () => (/* binding */ buttonPTClicked),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "removeInput": () => (/* binding */ removeInput)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/pages/ui.js");
/* harmony import */ var _builders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./builders */ "./src/pages/builders.js");




const date = new Date();
const currentDay = date.getDate();
const currentMonth = date.getMonth() + 1;
const currentYear = date.getFullYear();
const currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

// export function testFunction(){
//     let listOfTasksMap = new Map;

//     for(let i = 0; i < 4; i++){
//         listOfTasksMap.set("Task"+i, ["color"+i, "date", false]);
//         listOfProjectMaps.set("Inbox", listOfTasksMap);
//     }
//     listOfTasksMap = new Map;
//     for(let j = 0; j < 4; j++){

//         listOfTasksMap.set("TaskInProject1"+j, ["color"+j, "date", true]);
//         listOfProjectMaps.set("Projekt1", listOfTasksMap);

//     }
//     pushChangesToLocalStorage()
// }

function pushChangesToLocalStorage(){
    try{
        for(let key of ___WEBPACK_IMPORTED_MODULE_0__.listOfProjectMaps.keys()){
            const listOfKeys = ___WEBPACK_IMPORTED_MODULE_0__.listOfProjectMaps.get(key).entries();
            const listOfKeysString = JSON.stringify(Array.from(listOfKeys));

            localStorage.setItem(key, listOfKeysString);
        }
        const listOfProjectMapsString = JSON.stringify(Array.from(___WEBPACK_IMPORTED_MODULE_0__.listOfProjectMaps.entries()));
        localStorage.setItem("listOfProjectMaps", listOfProjectMapsString);
    }
    catch(e){
        console.log("Error with writing info to local storage\n" + e);
    }
    finally{
        console.log(___WEBPACK_IMPORTED_MODULE_0__.listOfProjectMaps);
    }
}

function buttonPTClicked(type, parentButton, container, activeButtonName){
    try{
        parentButton.remove();
        (0,_ui__WEBPACK_IMPORTED_MODULE_1__.createInputForPT)(type, container, activeButtonName);
    }
    catch(e){
        console.log("Can't create input for " + type + "\n" + e);
    }
}

function addProject(input, type, parentContainer, container, imgAdd){
    if (input.value === ""){
        input.placeholder = "Can't be empty";
        return;
    }
    if (___WEBPACK_IMPORTED_MODULE_0__.listOfProjectMaps.has(input.value)){
        input.value = ""
        input.placeholder = "Project exsist."
        return;
    }
    ___WEBPACK_IMPORTED_MODULE_0__.listOfProjectMaps.set(input.value, new Map);
    pushChangesToLocalStorage();
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.addPTToPTList)(input.value, parentContainer, false);
    removeInput(type, parentContainer, container, imgAdd);
    return;
}

function addTask(projectName, taskInput, type, parentContainer, container, imgAdd){
    const valueMapofProjectName = ___WEBPACK_IMPORTED_MODULE_0__.listOfProjectMaps.get(projectName)

    if (taskInput.value === ""){
        taskInput.placeholder = "Task must have a name.";
        return;
    }
    if (valueMapofProjectName.has(taskInput.value)){
        taskInput.value = "";
        taskInput.placeholder = "Task already exists.";
        return;
    }

    valueMapofProjectName.set(taskInput.value, ["#FFF", currentDate])
    ___WEBPACK_IMPORTED_MODULE_0__.listOfProjectMaps.set(projectName, valueMapofProjectName);
    pushChangesToLocalStorage();
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.addPTToPTList)(input.value, parentContainer, true);
    removeInput(type, parentContainer, container, imgAdd, projectName);

}

function removeInput(type, parentContainer, container, imgAdd, activeButtonName){
    container.remove();
    parentContainer.appendChild((0,_builders__WEBPACK_IMPORTED_MODULE_2__.createPTButton)(type, imgAdd, parentContainer, activeButtonName));
    return;
}

function deleteProject(button, projectName){
    button.remove();
    ___WEBPACK_IMPORTED_MODULE_0__.listOfProjectMaps["delete"](projectName);
    pushChangesToLocalStorage();
    localStorage.removeItem(projectName);
}

/***/ }),

/***/ "./src/pages/ui.js":
/*!*************************!*\
  !*** ./src/pages/ui.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPTToPTList": () => (/* binding */ addPTToPTList),
/* harmony export */   "createInputForPT": () => (/* binding */ createInputForPT),
/* harmony export */   "createUI": () => (/* binding */ createUI)
/* harmony export */ });
/* harmony import */ var _styles_ui_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/ui.css */ "./src/styles/ui.css");
/* harmony import */ var _assets_images_inbox_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/inbox.svg */ "./src/assets/images/inbox.svg");
/* harmony import */ var _assets_images_today_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/today.svg */ "./src/assets/images/today.svg");
/* harmony import */ var _assets_images_week_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/week.svg */ "./src/assets/images/week.svg");
/* harmony import */ var _assets_images_add_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/add.svg */ "./src/assets/images/add.svg");
/* harmony import */ var _assets_images_close_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/close.svg */ "./src/assets/images/close.svg");
/* harmony import */ var _assets_images_list_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/list.svg */ "./src/assets/images/list.svg");
/* harmony import */ var _builders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./builders */ "./src/pages/builders.js");
/* harmony import */ var _projectsAndTasks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projectsAndTasks */ "./src/pages/projectsAndTasks.js");










function createUI(){
    try{
        createSidenav();
        createRightSection();
    }
    catch(e){
        console.log("Problem with creating sidenav\n" + e);
    }
    
}

function createSidenav(){
    const sidenavContainer = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createDiv)("sidenav", "sidenav");
    const buttonContainer = createButtonContainer();
    const projectText = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createText)("div", "sideNavProjectText", null, "Projects");
    const projectsContainer = createProjectsContainer();

    sidenavContainer.appendChild(buttonContainer);
    sidenavContainer.appendChild(projectText);
    sidenavContainer.appendChild(projectsContainer);

    return document.body.appendChild(sidenavContainer);
}

function createButtonContainer(){
    const buttonContainer = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createDiv)("container", "sidenavButtonContainer");
    const buttons = {
        Inbox: ["Inbox", _assets_images_inbox_svg__WEBPACK_IMPORTED_MODULE_1__],
        Today: ["Today", _assets_images_today_svg__WEBPACK_IMPORTED_MODULE_2__],
        Week: ["This week", _assets_images_week_svg__WEBPACK_IMPORTED_MODULE_3__]
    }
    buttonContainer.appendChild((0,_builders__WEBPACK_IMPORTED_MODULE_7__.createSidenavButtons)(buttons.Inbox[0], buttons.Inbox[1]));
    buttonContainer.appendChild((0,_builders__WEBPACK_IMPORTED_MODULE_7__.createSidenavButtons)(buttons.Today[0], buttons.Today[1]));
    buttonContainer.appendChild((0,_builders__WEBPACK_IMPORTED_MODULE_7__.createSidenavButtons)(buttons.Week[0], buttons.Week[1]));

    return buttonContainer;
}

function createProjectsContainer(){
    const projectsContainer = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createDiv)("container", "projectsContainer");
    const projectAddButton = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createPTButton)("Project", _assets_images_add_svg__WEBPACK_IMPORTED_MODULE_4__, projectsContainer, null);

    projectsContainer.appendChild(projectAddButton);

    return projectsContainer;
}



function createRightSection(){
    const container = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createDiv)("container", "rightContainer");
    const header = createHeader();
    const mainSection = createMain("Inbox");
    container.appendChild(header);
    container.appendChild(mainSection);

    return document.body.appendChild(container);
}

function createHeader(){
    const container = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createDiv)("container", "headerContainer");
    const logoText = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createText)("h1", "headerText", null, "List doTo");

    container.appendChild(logoText);

    return container;
}

function createMain(activeButtonName){
    const container = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createDiv)("container", "mainContainer");
    const text = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createText)("h2", "mainSectionHeader", null, activeButtonName);
    const taskContainer = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createDiv)("container", "taskContainer");
    const taskAddButton = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createPTButton)("Task", _assets_images_add_svg__WEBPACK_IMPORTED_MODULE_4__, taskContainer, activeButtonName);


    container.appendChild(text);
    container.appendChild(taskContainer);
    taskContainer.appendChild(taskAddButton);

    return container;
}

function createInputForPT(type, parentContainer, activeButtonName){
    const container = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createDiv)("container", null, "inputContainer");
    const input = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createInput)(`create${type}Input`, "inputBox", "text", type + " name", true);
    const buttonContainer = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createDiv)("div", null, "acButtonsContainer");
    const addButton = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createButton)(null, ["acButton", "addButton"], "Add");
    const cancelButton = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createButton)(null, ["acButton", "cancelButton"], "Cancel");

    if (type === "Project"){
        addButton.addEventListener("click", function(){
            (0,_projectsAndTasks__WEBPACK_IMPORTED_MODULE_8__.addProject)(input, type, parentContainer, container, _assets_images_add_svg__WEBPACK_IMPORTED_MODULE_4__);

        });

    }
    if (type === "Task"){
        addButton.addEventListener("click", function(){
            (0,_projectsAndTasks__WEBPACK_IMPORTED_MODULE_8__.addTask)(activeButtonName, input, type, parentContainer, container, _assets_images_add_svg__WEBPACK_IMPORTED_MODULE_4__);
        });
    }
    cancelButton.addEventListener("click", function(){
        (0,_projectsAndTasks__WEBPACK_IMPORTED_MODULE_8__.removeInput)(type, parentContainer, container, _assets_images_add_svg__WEBPACK_IMPORTED_MODULE_4__, activeButtonName);
    });
    
    container.appendChild(input);
    container.appendChild(buttonContainer);
    buttonContainer.appendChild(addButton);
    buttonContainer.appendChild(cancelButton);


    parentContainer.appendChild(container);
    input.focus();
    return;
}

function addPTToPTList(name, parentContainer, isTask){
    const button = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createButton)(null, "pTButton");
    const buttonImg = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createImg)(_assets_images_list_svg__WEBPACK_IMPORTED_MODULE_6__, "Image of a list", null, "sidenavButtonImg");
    const buttonText = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createText)("p", null, "sidenavButtonText", name);
    const container = parentContainer;
    const closeButton = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createButton)(null, "closeButton");
    const closeButtonImg = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createImg)(_assets_images_close_svg__WEBPACK_IMPORTED_MODULE_5__, "Cross for closing", null, "sidenavButtonImg");

    closeButton.addEventListener("click", function(){
        (0,_projectsAndTasks__WEBPACK_IMPORTED_MODULE_8__.deleteProject)(button, name);
    })

    button.appendChild(buttonImg);
    button.appendChild(buttonText);
    if (isTask){
        button.classList.add("taskButton");
        const containerForInputs = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createDiv)("container", null, "containerForInputs");
        const colorInput = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createInput)(null, "colorInput", "color", "#FFF");
        const dateInput = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createInput)(null, "dateInput", "date");
        button.appendChild(containerForInputs);
        containerForInputs.appendChild(colorInput);
        containerForInputs.appendChild(dateInput);
    }
    closeButton.appendChild(closeButtonImg);
    button.appendChild(closeButton);


    return container.insertBefore(button, container.lastChild);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFL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QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLG9EQUFTO0FBQy9CLGlCQUFpQixxREFBVTtBQUMzQiwwQkFBMEIsb0RBQVM7QUFDbkMsMEJBQTBCLHlEQUFjLFNBQVMsbURBQU07OztBQUd2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQLHNCQUFzQixvREFBUztBQUMvQixrQkFBa0Isc0RBQVcsVUFBVSxLQUFLO0FBQzVDLDRCQUE0QixvREFBUztBQUNyQyxzQkFBc0IsdURBQVk7QUFDbEMseUJBQXlCLHVEQUFZOztBQUVyQztBQUNBO0FBQ0EsWUFBWSw2REFBVSwwQ0FBMEMsbURBQU07O0FBRXRFLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwREFBTyw0REFBNEQsbURBQU07QUFDckYsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRLDhEQUFXLG1DQUFtQyxtREFBTTtBQUM1RCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxtQkFBbUIsdURBQVk7QUFDL0Isc0JBQXNCLG9EQUFTLENBQUMsb0RBQU87QUFDdkMsdUJBQXVCLHFEQUFVO0FBQ2pDO0FBQ0Esd0JBQXdCLHVEQUFZO0FBQ3BDLDJCQUEyQixvREFBUyxDQUFDLHFEQUFROztBQUU3QztBQUNBLFFBQVEsZ0VBQWE7QUFDckIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxvREFBUztBQUM1QywyQkFBMkIsc0RBQVc7QUFDdEMsMEJBQTBCLHNEQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9vZGluLy4vc3JjL3N0eWxlcy91aS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9zcmMvc3R5bGVzL3VpLmNzcz84MWIzIiwid2VicGFjazovL3RvZG9vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9zcmMvcGFnZXMvYnVpbGRlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9zcmMvcGFnZXMvcHJvamVjdHNBbmRUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL3NyYy9wYWdlcy91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAgIC0tZm9udC1zaXplLXA6IGNsYW1wKC41cmVtLCAyMHB4LCAycmVtKTtcXG4gICAgLS1mb250LXNpemUtaDM6IDI2cHg7XFxuICAgIC0tZm9udC1zaXplLWgyOiAzMnB4O1xcblxcbiAgICAtLWJvcmRlci1jb2xvci1zaWRlbmF2OiAjMDAwMDAwNTU7XFxuXFxuICAgIC0tYmFja2dyb3VuZC1jb2xvci1zaWRlbmF2OiAjRkNGQ0ZDO1xcbiAgICAtLWJhY2tncm91bmQtY29sb3ItaGVhZGVyOiAjRjNGM0YzO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWFkZDogIzY5ZmY2OTExO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWFkZC1ob3ZlcjogIzY5ZmY2OTMzO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWNhbmNlbDogI2ZmNmI2YjExOztcXG4gICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1jYW5jZWwtaG92ZXI6ICNmZjZiNmIzMztcXG4gICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1hY3RpdmU6ICNEREQ7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItaG92ZXI6ICNFRUU7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItY2hlY2tsaXN0LWhvdmVyOiAjMDAwMDAwOTk7XFxuICAgIC0tYm9yZGVyLWNvbG9yLWFkZDogIzMzZmYzMztcXG4gICAgLS1ib3JkZXItY29sb3ItY2FuY2VsOiAjZmYzMzMzO1xcbn1cXG5cXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMGR2aDtcXG4gICAgd2lkdGg6IDEwMGR2dztcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc2lkZW5hdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXNpZGVuYXYpO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDAuNXB4IHZhcigtLWJvcmRlci1jb2xvci1zaWRlbmF2KTtcXG59XFxuXFxuI3NpZGVuYXZCdXR0b25Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaWRlbmF2QnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBnYXA6IDMlO1xcbiAgICBtYXJnaW4tdG9wOiA2JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDE0JTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZW5hdkJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4uYnV0dG9uRm9jdXN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWFjdGl2ZSkgIWltcG9ydGFudDtcXG59XFxuXFxuLnNpZGVuYXZCdXR0b246Zmlyc3QtY2hpbGR7XFxuICAgIG1hcmdpbi10b3A6IDMwJTtcXG59XFxuXFxuLnNpZGVuYXZCdXR0b25UZXh0e1xcbiAgICBtaW4td2lkdGg6IDY1JTtcXG4gICAgbWF4LXdpZHRoOiA2NSU7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXApO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBtYXJnaW4tbGVmdDogMiU7XFxuICAgIHBhZGRpbmc6IDAgMSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5zaWRlbmF2QnV0dG9uSW1ne1xcbiAgICBtYXgtd2lkdGg6IDEuNXJlbTtcXG4gICAgbWF4LWhlaWdodDogYXV0bztcXG59XFxuXFxuI3NpZGVOYXZQcm9qZWN0VGV4dHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi10b3A6IDIwJTtcXG4gICAgcGFkZGluZy10b3A6IDUlO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3Itc2lkZW5hdik7XFxufVxcblxcbiNjcmVhdGVQcm9qZWN0RGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucFRCdXR0b257XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNCU7XFxuICAgIG1hcmdpbi10b3A6IDYlO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4ucFRCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLnBUQnV0dG9uOmxhc3QtY2hpbGR7XFxuICAgIGdhcDogMiU7XFxufVxcblxcbi5pbnB1dENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmlucHV0Qm94e1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvci1zaWRlbmF2KTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtcCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcbiAgICBtYXJnaW4tdG9wOiA5JTtcXG59XFxuXFxuXFxuLmFjQnV0dG9uc0NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNSU7XFxufVxcblxcbi5hY0J1dHRvbntcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYWRkQnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1hZGQpO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3ItYWRkKTtcXG59XFxuXFxuLmFkZEJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItYWRkLWhvdmVyKTtcXG59XFxuXFxuLmNhbmNlbEJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItY2FuY2VsKTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yLWNhbmNlbCk7XFxufVxcblxcbi5jYW5jZWxCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWNhbmNlbC1ob3Zlcik7XFxufVxcblxcbi5jbG9zZUJ1dHRvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG5cXG5cXG4jcmlnaHRDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jaGVhZGVyQ29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWhlYWRlcik7XFxufVxcblxcbiNoZWFkZXJUZXh0e1xcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbiAgICBwYWRkaW5nOiAxJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3Itc2lkZW5hdik7XFxufVxcblxcbiNtYWluQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDIlIDI1JTtcXG59XFxuXFxuI21haW5TZWN0aW9uSGVhZGVye1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMik7XFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcbn1cXG5cXG4jY3JlYXRlVGFza0lucHV0e1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMyk7XFxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xcbn1cXG5cXG4jdGFza0NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udGFza0J1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOiAxJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4udGFza0J1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4uY2hlY2tCdXR0b257XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgbWluLXdpZHRoOiAxcmVtO1xcbiAgICBtaW4taGVpZ2h0OiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNoZWNrQnV0dG9uQWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1jaGVja2xpc3QtaG92ZXIpO1xcbn1cXG5cXG4uY2hlY2tCdXR0b25BY3RpdmVUZXh0e1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmNvbnRhaW5lckZvcklucHV0c3tcXG4gICAgbWluLXdpZHRoOiBjYWxjKDI0JSAtIDFyZW0pO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDo1JTtcXG59XFxuXFxuLmRhdGVJbnB1dHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5jb2xvcklucHV0e1xcbiAgICB3aWR0aDogMnJlbTtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy91aS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsb0JBQW9CO0lBQ3BCLG9CQUFvQjs7SUFFcEIsaUNBQWlDOztJQUVqQyxtQ0FBbUM7SUFDbkMsa0NBQWtDO0lBQ2xDLHdDQUF3QztJQUN4Qyw4Q0FBOEM7SUFDOUMsMkNBQTJDO0lBQzNDLGlEQUFpRDtJQUNqRCxzQ0FBc0M7SUFDdEMscUNBQXFDO0lBQ3JDLG9EQUFvRDtJQUNwRCwyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1QsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFh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QTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290e1xcbiAgICAtLWZvbnQtc2l6ZS1wOiBjbGFtcCguNXJlbSwgMjBweCwgMnJlbSk7XFxuICAgIC0tZm9udC1zaXplLWgzOiAyNnB4O1xcbiAgICAtLWZvbnQtc2l6ZS1oMjogMzJweDtcXG5cXG4gICAgLS1ib3JkZXItY29sb3Itc2lkZW5hdjogIzAwMDAwMDU1O1xcblxcbiAgICAtLWJhY2tncm91bmQtY29sb3Itc2lkZW5hdjogI0ZDRkNGQztcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yLWhlYWRlcjogI0YzRjNGMztcXG4gICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1hZGQ6ICM2OWZmNjkxMTtcXG4gICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1hZGQtaG92ZXI6ICM2OWZmNjkzMztcXG4gICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1jYW5jZWw6ICNmZjZiNmIxMTs7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItY2FuY2VsLWhvdmVyOiAjZmY2YjZiMzM7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItYWN0aXZlOiAjREREO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiAjRUVFO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWNoZWNrbGlzdC1ob3ZlcjogIzAwMDAwMDk5O1xcbiAgICAtLWJvcmRlci1jb2xvci1hZGQ6ICMzM2ZmMzM7XFxuICAgIC0tYm9yZGVyLWNvbG9yLWNhbmNlbDogI2ZmMzMzMztcXG59XFxuXFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDBkdmg7XFxuICAgIHdpZHRoOiAxMDBkdnc7XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZGVuYXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1zaWRlbmF2KTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAwLjVweCB2YXIoLS1ib3JkZXItY29sb3Itc2lkZW5hdik7XFxufVxcblxcbiNzaWRlbmF2QnV0dG9uQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2lkZW5hdkJ1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgZ2FwOiAzJTtcXG4gICAgbWFyZ2luLXRvcDogNiU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGVuYXZCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLmJ1dHRvbkZvY3Vze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1hY3RpdmUpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zaWRlbmF2QnV0dG9uOmZpcnN0LWNoaWxke1xcbiAgICBtYXJnaW4tdG9wOiAzMCU7XFxufVxcblxcbi5zaWRlbmF2QnV0dG9uVGV4dHtcXG4gICAgbWluLXdpZHRoOiA2NSU7XFxuICAgIG1heC13aWR0aDogNjUlO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1wKTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xcbiAgICBwYWRkaW5nOiAwIDElO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uc2lkZW5hdkJ1dHRvbkltZ3tcXG4gICAgbWF4LXdpZHRoOiAxLjVyZW07XFxuICAgIG1heC1oZWlnaHQ6IGF1dG87XFxufVxcblxcbiNzaWRlTmF2UHJvamVjdFRleHR7XFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgICBtYXJnaW4tdG9wOiAyMCU7XFxuICAgIHBhZGRpbmctdG9wOiA1JTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDMpO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yLXNpZGVuYXYpO1xcbn1cXG5cXG4jY3JlYXRlUHJvamVjdERpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBUQnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTQlO1xcbiAgICBtYXJnaW4tdG9wOiA2JTtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLnBUQnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5wVEJ1dHRvbjpsYXN0LWNoaWxke1xcbiAgICBnYXA6IDIlO1xcbn1cXG5cXG4uaW5wdXRDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5pbnB1dEJveHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3Itc2lkZW5hdik7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXApO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXG4gICAgbWFyZ2luLXRvcDogOSU7XFxufVxcblxcblxcbi5hY0J1dHRvbnNDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDUlO1xcbn1cXG5cXG4uYWNCdXR0b257XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMHJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFkZEJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItYWRkKTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yLWFkZCk7XFxufVxcblxcbi5hZGRCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWFkZC1ob3Zlcik7XFxufVxcblxcbi5jYW5jZWxCdXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWNhbmNlbCk7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvci1jYW5jZWwpO1xcbn1cXG5cXG4uY2FuY2VsQnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1jYW5jZWwtaG92ZXIpO1xcbn1cXG5cXG4uY2xvc2VCdXR0b257XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG59XFxuXFxuXFxuI3JpZ2h0Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2hlYWRlckNvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1oZWFkZXIpO1xcbn1cXG5cXG4jaGVhZGVyVGV4dHtcXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yLXNpZGVuYXYpO1xcbn1cXG5cXG4jbWFpbkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAyJSAyNSU7XFxufVxcblxcbiNtYWluU2VjdGlvbkhlYWRlcntcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDIpO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXG59XFxuXFxuI2NyZWF0ZVRhc2tJbnB1dHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDMpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcXG59XFxuXFxuI3Rhc2tDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRhc2tCdXR0b257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46MDtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnRhc2tCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLmNoZWNrQnV0dG9ue1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIG1pbi13aWR0aDogMXJlbTtcXG4gICAgbWluLWhlaWdodDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5jaGVja0J1dHRvbkFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItY2hlY2tsaXN0LWhvdmVyKTtcXG59XFxuXFxuLmNoZWNrQnV0dG9uQWN0aXZlVGV4dHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5jb250YWluZXJGb3JJbnB1dHN7XFxuICAgIG1pbi13aWR0aDogY2FsYygyNCUgLSAxcmVtKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6NSU7XFxufVxcblxcbi5kYXRlSW5wdXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uY29sb3JJbnB1dHtcXG4gICAgd2lkdGg6IDJyZW07XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VpLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdWkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB0ZXN0RnVuY3Rpb24gfSBmcm9tIFwiLi9wYWdlcy9wcm9qZWN0c0FuZFRhc2tzXCI7XG5pbXBvcnQgeyBhZGRQVFRvUFRMaXN0LCBjcmVhdGVVSSB9IGZyb20gXCIuL3BhZ2VzL3VpXCI7XG5cbmV4cG9ydCBsZXQgbGlzdE9mUHJvamVjdE1hcHMgPSBuZXcgTWFwO1xubGV0IGxpc3RPZlRhc2tzTWFwID0gbmV3IE1hcDtcbmV4cG9ydCBsZXQgbG9jYWxTdG9yYWdlRXhpc3RzID0gZmFsc2U7XG5cblxuY3JlYXRlVUkoKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgY2hlY2tMb2NhbFN0b3JhZ2UoKTtcbiAgfSk7XG5cblxuZnVuY3Rpb24gY2hlY2tMb2NhbFN0b3JhZ2UoKXtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgICBjaGVja0ZvclByb2plY3RMaXN0KCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZUV4aXN0cyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0T2ZQcm9qZWN0TWFwcy5zZXQoXCJJbmJveFwiLCBsaXN0T2ZUYXNrc01hcCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICBsZXQgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gXG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICBzdG9yYWdlICYmXG4gICAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgICApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JQcm9qZWN0TGlzdCgpe1xuICAgIGNvbnN0IGxvY2FsU3RvcmFnZVByb2plY3RMaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsaXN0T2ZQcm9qZWN0TWFwc1wiKTtcbiAgICBsaXN0T2ZQcm9qZWN0TWFwcyA9IG5ldyBNYXAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VQcm9qZWN0TGlzdCkpO1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzQ29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGluYm94VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRhaW5lclwiKTtcbiAgICBpZiAobGlzdE9mUHJvamVjdE1hcHMuc2l6ZSA9PT0gMCl7XG4gICAgICBsaXN0T2ZQcm9qZWN0TWFwcy5zZXQoXCJJbmJveFwiLCBsaXN0T2ZUYXNrc01hcCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAobGV0IGtleSBvZiBsaXN0T2ZQcm9qZWN0TWFwcy5rZXlzKCkpe1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFByb2plY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBsaXN0T2ZUYXNrc01hcCA9IG5ldyBNYXAoSlNPTi5wYXJzZShsb2NhbFByb2plY3QpKTtcbiAgICAgICAgICAgIGxpc3RPZlByb2plY3RNYXBzLnNldChrZXksIGxpc3RPZlRhc2tzTWFwKTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IFwiSW5ib3hcIil7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkUFRUb1BUTGlzdChrZXksIHByb2plY3RDb250YWluZXIsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hpbGUgZ2V0dGluZyBsaXN0T2ZQcm9qZWN0TWFwcyBmcm9tIGxvY2FsU3RvcmFnZVxcblwiICsgZSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseXtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGtleSBvZiBsaXN0T2ZQcm9qZWN0TWFwcy5nZXQoXCJJbmJveFwiKS5rZXlzKCkpe1xuICAgICAgdHJ5e1xuICAgICAgICBhZGRQVFRvUFRMaXN0KGtleSwgaW5ib3hUYXNrQ29udGFpbmVyLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGNhdGNoKGUpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIGdlbmVyYXRpbmcgdGFza3MgdG8gSW5ib3ggXFxuXCIgKyBlKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG59IiwiaW1wb3J0IHsgYnV0dG9uUFRDbGlja2VkIH0gZnJvbSBcIi4vcHJvamVjdHNBbmRUYXNrc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGl2KHR5cGUsIGlkID0gbnVsbCwgY2xhc3NOYW1lID0gbnVsbCl7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblxuICAgIGlmIChpZCAhPT0gbnVsbCkge1xuICAgICAgICBkaXYuaWQgPSBpZDtcbiAgICB9XG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCl7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNsYXNzTmFtZSkpe1xuICAgICAgICAgICAgYWRkQ2xhc3NOYW1lc1RvT2JqZWN0KGRpdiwgY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgZGl2LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGV4dCh0eXBlLCBpZCA9IG51bGwsIGNsYXNzTmFtZSA9IG51bGwsIHRleHRWYWx1ZSA9IG51bGwpe1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSB0ZXh0VmFsdWU7XG5cbiAgICBpZiAoaWQgIT09IG51bGwpe1xuICAgICAgICB0ZXh0LmlkID0gaWQ7XG4gICAgfVxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpe1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjbGFzc05hbWUpKXtcbiAgICAgICAgICAgIGFkZENsYXNzTmFtZXNUb09iamVjdCh0ZXh0LCBjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0ZXh0LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltZyhzcmMsIGFsdCwgaWQgPSBudWxsLCBjbGFzc05hbWUgPSBudWxsKXtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuc3JjID0gc3JjO1xuICAgIGltZy5hbHQgPSBhbHQ7XG5cbiAgICBpZiAoaWQgIT0gbnVsbCl7XG4gICAgICAgIGltZy5pZCA9IGlkO1xuICAgIH1cbiAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKXtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2xhc3NOYW1lKSl7XG4gICAgICAgICAgICBhZGRDbGFzc05hbWVzVG9PYmplY3QoaW1nLCBjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBpbWcuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdXR0b24oaWQgPSBudWxsLCBjbGFzc05hbWUgPSBudWxsLCBidXR0b25UZXh0ID0gbnVsbCl7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaWYgKGlkICE9PSBudWxsKXtcbiAgICAgICAgYnV0dG9uLmlkID0gaWQ7XG4gICAgfVxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpe1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjbGFzc05hbWUpKXtcbiAgICAgICAgICAgIGFkZENsYXNzTmFtZXNUb09iamVjdChidXR0b24sIGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBpZiAoYnV0dG9uVGV4dCAhPT0gbnVsbCl7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGJ1dHRvblRleHQ7XG4gICAgfVxuICAgIHJldHVybiBidXR0b247XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUlucHV0KGlkID0gbnVsbCwgY2xhc3NOYW1lID0gbnVsbCwgdHlwZU9mSW5wdXQgPSBudWxsLCBwbGFjZWhvbGRlciA9IG51bGwsIGZvY3VzID0gbnVsbCl7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlmIChpZCAhPT0gbnVsbCl7XG4gICAgICAgIGlucHV0LmlkID0gaWQ7XG4gICAgfVxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpe1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjbGFzc05hbWUpKXtcbiAgICAgICAgICAgIGFkZENsYXNzTmFtZXNUb09iamVjdChpbnB1dCwgY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgaW5wdXQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlT2ZJbnB1dCAhPT0gbnVsbCl7XG4gICAgICAgIGlucHV0LnR5cGUgPSB0eXBlT2ZJbnB1dDtcbiAgICB9XG4gICAgaWYgKHR5cGVPZklucHV0ICE9PSBudWxsKXtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB9XG4gICAgaWYgKGZvY3VzICE9PSBudWxsICYmIGZvY3VzID09IHRydWUpe1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgIH1cbiAgICByZXR1cm4gaW5wdXQ7XG59XG5cblxuZnVuY3Rpb24gYWRkQ2xhc3NOYW1lc1RvT2JqZWN0KG9iamVjdCxjbGFzc05hbWUpe1xuICAgIGNsYXNzTmFtZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBvYmplY3QuY2xhc3NMaXN0LmFkZChlbGVtZW50KTtcbiAgICB9KTtcbiAgICByZXR1cm47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaWRlbmF2QnV0dG9ucyhuYW1lLCBpbWcpe1xuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihudWxsLCBcInNpZGVuYXZCdXR0b25cIik7XG4gICAgY29uc3QgYnV0dG9uSW1nID0gY3JlYXRlSW1nKGltZywgbmFtZStcIiBpY29uXCIsIG51bGwsIFwic2lkZW5hdkJ1dHRvbkltZ1wiKTtcbiAgICBjb25zdCBidXR0b25UZXh0ID0gY3JlYXRlVGV4dChcInBcIiwgbnVsbCwgXCJzaWRlbmF2QnV0dG9uVGV4dFwiLCBuYW1lKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uSW1nKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uVGV4dCk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBzaWRlbmF2QnV0dG9uRm9jdXMoYnV0dG9uKTtcbiAgICB9KVxuICAgIGlmIChuYW1lID09PSBcIkluYm94XCIpe1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbkZvY3VzXCIpO1xuICAgIH1cbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBzaWRlbmF2QnV0dG9uRm9jdXMobmFtZSl7XG4gICAgY29uc3QgYnV0dG9uRm9jdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbkZvY3VzXCIpO1xuICAgIGlmICghYnV0dG9uRm9jdXMpe1xuICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJidXR0b25Gb2N1c1wiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBidXR0b25Gb2N1cy5jbGFzc0xpc3QucmVtb3ZlKFwiYnV0dG9uRm9jdXNcIik7XG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uRm9jdXNcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQVEJ1dHRvbih0eXBlLCBpbWcsIGNvbnRhaW5lciwgYWN0aXZlQnV0dG9uTmFtZSl7XG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKHR5cGUgKyBcIkJ1dHRvblwiLCBcInBUQnV0dG9uXCIpO1xuICAgIGNvbnN0IGJ1dHRvbkltZyA9IGNyZWF0ZUltZyhpbWcsIFwicGx1cyBpY29uXCIsIG51bGwsIFwic2lkZW5hdkJ1dHRvbkltZ1wiKTtcbiAgICBjb25zdCBidXR0b25UZXh0ID0gY3JlYXRlVGV4dChcInBcIiwgbnVsbCwgXCJzaWRlbmF2QnV0dG9uVGV4dFwiLCBcIkFkZCBcIisgdHlwZSk7XG5cbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uSW1nKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uVGV4dClcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgYnV0dG9uUFRDbGlja2VkKHR5cGUsIGJ1dHRvbiwgY29udGFpbmVyLCBhY3RpdmVCdXR0b25OYW1lKVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbn0iLCJpbXBvcnQgeyBsaXN0T2ZUYXNrc01hcCwgbGlzdE9mUHJvamVjdE1hcHMgfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IGNyZWF0ZUlucHV0Rm9yUFQsIGFkZFBUVG9QVExpc3QgfSBmcm9tIFwiLi91aVwiO1xuaW1wb3J0IHtjcmVhdGVQVEJ1dHRvbn0gZnJvbSBcIi4vYnVpbGRlcnNcIjtcblxuY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5jb25zdCBjdXJyZW50RGF5ID0gZGF0ZS5nZXREYXRlKCk7XG5jb25zdCBjdXJyZW50TW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuY29uc3QgY3VycmVudFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG5jb25zdCBjdXJyZW50RGF0ZSA9IGAke2N1cnJlbnREYXl9LSR7Y3VycmVudE1vbnRofS0ke2N1cnJlbnRZZWFyfWA7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiB0ZXN0RnVuY3Rpb24oKXtcbi8vICAgICBsZXQgbGlzdE9mVGFza3NNYXAgPSBuZXcgTWFwO1xuXG4vLyAgICAgZm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKyl7XG4vLyAgICAgICAgIGxpc3RPZlRhc2tzTWFwLnNldChcIlRhc2tcIitpLCBbXCJjb2xvclwiK2ksIFwiZGF0ZVwiLCBmYWxzZV0pO1xuLy8gICAgICAgICBsaXN0T2ZQcm9qZWN0TWFwcy5zZXQoXCJJbmJveFwiLCBsaXN0T2ZUYXNrc01hcCk7XG4vLyAgICAgfVxuLy8gICAgIGxpc3RPZlRhc2tzTWFwID0gbmV3IE1hcDtcbi8vICAgICBmb3IobGV0IGogPSAwOyBqIDwgNDsgaisrKXtcblxuLy8gICAgICAgICBsaXN0T2ZUYXNrc01hcC5zZXQoXCJUYXNrSW5Qcm9qZWN0MVwiK2osIFtcImNvbG9yXCIraiwgXCJkYXRlXCIsIHRydWVdKTtcbi8vICAgICAgICAgbGlzdE9mUHJvamVjdE1hcHMuc2V0KFwiUHJvamVrdDFcIiwgbGlzdE9mVGFza3NNYXApO1xuXG4vLyAgICAgfVxuLy8gICAgIHB1c2hDaGFuZ2VzVG9Mb2NhbFN0b3JhZ2UoKVxuLy8gfVxuXG5mdW5jdGlvbiBwdXNoQ2hhbmdlc1RvTG9jYWxTdG9yYWdlKCl7XG4gICAgdHJ5e1xuICAgICAgICBmb3IobGV0IGtleSBvZiBsaXN0T2ZQcm9qZWN0TWFwcy5rZXlzKCkpe1xuICAgICAgICAgICAgY29uc3QgbGlzdE9mS2V5cyA9IGxpc3RPZlByb2plY3RNYXBzLmdldChrZXkpLmVudHJpZXMoKTtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RPZktleXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShBcnJheS5mcm9tKGxpc3RPZktleXMpKTtcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBsaXN0T2ZLZXlzU3RyaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsaXN0T2ZQcm9qZWN0TWFwc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KEFycmF5LmZyb20obGlzdE9mUHJvamVjdE1hcHMuZW50cmllcygpKSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdE9mUHJvamVjdE1hcHNcIiwgbGlzdE9mUHJvamVjdE1hcHNTdHJpbmcpO1xuICAgIH1cbiAgICBjYXRjaChlKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciB3aXRoIHdyaXRpbmcgaW5mbyB0byBsb2NhbCBzdG9yYWdlXFxuXCIgKyBlKTtcbiAgICB9XG4gICAgZmluYWxseXtcbiAgICAgICAgY29uc29sZS5sb2cobGlzdE9mUHJvamVjdE1hcHMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1dHRvblBUQ2xpY2tlZCh0eXBlLCBwYXJlbnRCdXR0b24sIGNvbnRhaW5lciwgYWN0aXZlQnV0dG9uTmFtZSl7XG4gICAgdHJ5e1xuICAgICAgICBwYXJlbnRCdXR0b24ucmVtb3ZlKCk7XG4gICAgICAgIGNyZWF0ZUlucHV0Rm9yUFQodHlwZSwgY29udGFpbmVyLCBhY3RpdmVCdXR0b25OYW1lKTtcbiAgICB9XG4gICAgY2F0Y2goZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FuJ3QgY3JlYXRlIGlucHV0IGZvciBcIiArIHR5cGUgKyBcIlxcblwiICsgZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdChpbnB1dCwgdHlwZSwgcGFyZW50Q29udGFpbmVyLCBjb250YWluZXIsIGltZ0FkZCl7XG4gICAgaWYgKGlucHV0LnZhbHVlID09PSBcIlwiKXtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBcIkNhbid0IGJlIGVtcHR5XCI7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGxpc3RPZlByb2plY3RNYXBzLmhhcyhpbnB1dC52YWx1ZSkpe1xuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCJcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBcIlByb2plY3QgZXhzaXN0LlwiXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGlzdE9mUHJvamVjdE1hcHMuc2V0KGlucHV0LnZhbHVlLCBuZXcgTWFwKTtcbiAgICBwdXNoQ2hhbmdlc1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgYWRkUFRUb1BUTGlzdChpbnB1dC52YWx1ZSwgcGFyZW50Q29udGFpbmVyLCBmYWxzZSk7XG4gICAgcmVtb3ZlSW5wdXQodHlwZSwgcGFyZW50Q29udGFpbmVyLCBjb250YWluZXIsIGltZ0FkZCk7XG4gICAgcmV0dXJuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFzayhwcm9qZWN0TmFtZSwgdGFza0lucHV0LCB0eXBlLCBwYXJlbnRDb250YWluZXIsIGNvbnRhaW5lciwgaW1nQWRkKXtcbiAgICBjb25zdCB2YWx1ZU1hcG9mUHJvamVjdE5hbWUgPSBsaXN0T2ZQcm9qZWN0TWFwcy5nZXQocHJvamVjdE5hbWUpXG5cbiAgICBpZiAodGFza0lucHV0LnZhbHVlID09PSBcIlwiKXtcbiAgICAgICAgdGFza0lucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrIG11c3QgaGF2ZSBhIG5hbWUuXCI7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbHVlTWFwb2ZQcm9qZWN0TmFtZS5oYXModGFza0lucHV0LnZhbHVlKSl7XG4gICAgICAgIHRhc2tJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRhc2tJbnB1dC5wbGFjZWhvbGRlciA9IFwiVGFzayBhbHJlYWR5IGV4aXN0cy5cIjtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhbHVlTWFwb2ZQcm9qZWN0TmFtZS5zZXQodGFza0lucHV0LnZhbHVlLCBbXCIjRkZGXCIsIGN1cnJlbnREYXRlXSlcbiAgICBsaXN0T2ZQcm9qZWN0TWFwcy5zZXQocHJvamVjdE5hbWUsIHZhbHVlTWFwb2ZQcm9qZWN0TmFtZSk7XG4gICAgcHVzaENoYW5nZXNUb0xvY2FsU3RvcmFnZSgpO1xuICAgIGFkZFBUVG9QVExpc3QoaW5wdXQudmFsdWUsIHBhcmVudENvbnRhaW5lciwgdHJ1ZSk7XG4gICAgcmVtb3ZlSW5wdXQodHlwZSwgcGFyZW50Q29udGFpbmVyLCBjb250YWluZXIsIGltZ0FkZCwgcHJvamVjdE5hbWUpO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJbnB1dCh0eXBlLCBwYXJlbnRDb250YWluZXIsIGNvbnRhaW5lciwgaW1nQWRkLCBhY3RpdmVCdXR0b25OYW1lKXtcbiAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgcGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVBUQnV0dG9uKHR5cGUsIGltZ0FkZCwgcGFyZW50Q29udGFpbmVyLCBhY3RpdmVCdXR0b25OYW1lKSk7XG4gICAgcmV0dXJuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChidXR0b24sIHByb2plY3ROYW1lKXtcbiAgICBidXR0b24ucmVtb3ZlKCk7XG4gICAgbGlzdE9mUHJvamVjdE1hcHMuZGVsZXRlKHByb2plY3ROYW1lKTtcbiAgICBwdXNoQ2hhbmdlc1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocHJvamVjdE5hbWUpO1xufSIsImltcG9ydCAnLi4vc3R5bGVzL3VpLmNzcyc7XG5pbXBvcnQgaW1nSW5ib3ggZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9pbmJveC5zdmcnO1xuaW1wb3J0IGltZ1RvZGF5IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvdG9kYXkuc3ZnJztcbmltcG9ydCBpbWdXZWVrIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvd2Vlay5zdmcnO1xuaW1wb3J0IGltZ0FkZCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2FkZC5zdmcnO1xuaW1wb3J0IGltZ0Nsb3NlIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvY2xvc2Uuc3ZnJztcbmltcG9ydCBpbWdMaXN0IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvbGlzdC5zdmcnO1xuaW1wb3J0IHsgY3JlYXRlRGl2LCBjcmVhdGVUZXh0LCBjcmVhdGVJbWcsIGNyZWF0ZUJ1dHRvbiwgY3JlYXRlSW5wdXQsIGNyZWF0ZVNpZGVuYXZCdXR0b25zLCBjcmVhdGVQVEJ1dHRvbiB9IGZyb20gXCIuL2J1aWxkZXJzXCI7XG5pbXBvcnQgeyByZW1vdmVJbnB1dCwgYWRkUHJvamVjdCwgYWRkVGFzaywgZGVsZXRlUHJvamVjdCwgZGVsZXRlVGFzayB9IGZyb20gJy4vcHJvamVjdHNBbmRUYXNrcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVSSgpe1xuICAgIHRyeXtcbiAgICAgICAgY3JlYXRlU2lkZW5hdigpO1xuICAgICAgICBjcmVhdGVSaWdodFNlY3Rpb24oKTtcbiAgICB9XG4gICAgY2F0Y2goZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJvYmxlbSB3aXRoIGNyZWF0aW5nIHNpZGVuYXZcXG5cIiArIGUpO1xuICAgIH1cbiAgICBcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZW5hdigpe1xuICAgIGNvbnN0IHNpZGVuYXZDb250YWluZXIgPSBjcmVhdGVEaXYoXCJzaWRlbmF2XCIsIFwic2lkZW5hdlwiKTtcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBjcmVhdGVCdXR0b25Db250YWluZXIoKTtcbiAgICBjb25zdCBwcm9qZWN0VGV4dCA9IGNyZWF0ZVRleHQoXCJkaXZcIiwgXCJzaWRlTmF2UHJvamVjdFRleHRcIiwgbnVsbCwgXCJQcm9qZWN0c1wiKTtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGNyZWF0ZVByb2plY3RzQ29udGFpbmVyKCk7XG5cbiAgICBzaWRlbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgc2lkZW5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0VGV4dCk7XG4gICAgc2lkZW5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzaWRlbmF2Q29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uQ29udGFpbmVyKCl7XG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gY3JlYXRlRGl2KFwiY29udGFpbmVyXCIsIFwic2lkZW5hdkJ1dHRvbkNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBidXR0b25zID0ge1xuICAgICAgICBJbmJveDogW1wiSW5ib3hcIiwgaW1nSW5ib3hdLFxuICAgICAgICBUb2RheTogW1wiVG9kYXlcIiwgaW1nVG9kYXldLFxuICAgICAgICBXZWVrOiBbXCJUaGlzIHdlZWtcIiwgaW1nV2Vla11cbiAgICB9XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVNpZGVuYXZCdXR0b25zKGJ1dHRvbnMuSW5ib3hbMF0sIGJ1dHRvbnMuSW5ib3hbMV0pKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2lkZW5hdkJ1dHRvbnMoYnV0dG9ucy5Ub2RheVswXSwgYnV0dG9ucy5Ub2RheVsxXSkpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTaWRlbmF2QnV0dG9ucyhidXR0b25zLldlZWtbMF0sIGJ1dHRvbnMuV2Vla1sxXSkpO1xuXG4gICAgcmV0dXJuIGJ1dHRvbkNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdHNDb250YWluZXIoKXtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGNyZWF0ZURpdihcImNvbnRhaW5lclwiLCBcInByb2plY3RzQ29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHByb2plY3RBZGRCdXR0b24gPSBjcmVhdGVQVEJ1dHRvbihcIlByb2plY3RcIiwgaW1nQWRkLCBwcm9qZWN0c0NvbnRhaW5lciwgbnVsbCk7XG5cbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0QWRkQnV0dG9uKTtcblxuICAgIHJldHVybiBwcm9qZWN0c0NvbnRhaW5lcjtcbn1cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVJpZ2h0U2VjdGlvbigpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZURpdihcImNvbnRhaW5lclwiLCBcInJpZ2h0Q29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcigpO1xuICAgIGNvbnN0IG1haW5TZWN0aW9uID0gY3JlYXRlTWFpbihcIkluYm94XCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluU2VjdGlvbik7XG5cbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVEaXYoXCJjb250YWluZXJcIiwgXCJoZWFkZXJDb250YWluZXJcIik7XG4gICAgY29uc3QgbG9nb1RleHQgPSBjcmVhdGVUZXh0KFwiaDFcIiwgXCJoZWFkZXJUZXh0XCIsIG51bGwsIFwiTGlzdCBkb1RvXCIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29UZXh0KTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oYWN0aXZlQnV0dG9uTmFtZSl7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRGl2KFwiY29udGFpbmVyXCIsIFwibWFpbkNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0ZXh0ID0gY3JlYXRlVGV4dChcImgyXCIsIFwibWFpblNlY3Rpb25IZWFkZXJcIiwgbnVsbCwgYWN0aXZlQnV0dG9uTmFtZSk7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGNyZWF0ZURpdihcImNvbnRhaW5lclwiLCBcInRhc2tDb250YWluZXJcIik7XG4gICAgY29uc3QgdGFza0FkZEJ1dHRvbiA9IGNyZWF0ZVBUQnV0dG9uKFwiVGFza1wiLCBpbWdBZGQsIHRhc2tDb250YWluZXIsIGFjdGl2ZUJ1dHRvbk5hbWUpO1xuXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0FkZEJ1dHRvbik7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5wdXRGb3JQVCh0eXBlLCBwYXJlbnRDb250YWluZXIsIGFjdGl2ZUJ1dHRvbk5hbWUpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZURpdihcImNvbnRhaW5lclwiLCBudWxsLCBcImlucHV0Q29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlSW5wdXQoYGNyZWF0ZSR7dHlwZX1JbnB1dGAsIFwiaW5wdXRCb3hcIiwgXCJ0ZXh0XCIsIHR5cGUgKyBcIiBuYW1lXCIsIHRydWUpO1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGNyZWF0ZURpdihcImRpdlwiLCBudWxsLCBcImFjQnV0dG9uc0NvbnRhaW5lclwiKTtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBjcmVhdGVCdXR0b24obnVsbCwgW1wiYWNCdXR0b25cIiwgXCJhZGRCdXR0b25cIl0sIFwiQWRkXCIpO1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihudWxsLCBbXCJhY0J1dHRvblwiLCBcImNhbmNlbEJ1dHRvblwiXSwgXCJDYW5jZWxcIik7XG5cbiAgICBpZiAodHlwZSA9PT0gXCJQcm9qZWN0XCIpe1xuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhZGRQcm9qZWN0KGlucHV0LCB0eXBlLCBwYXJlbnRDb250YWluZXIsIGNvbnRhaW5lciwgaW1nQWRkKTtcblxuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gXCJUYXNrXCIpe1xuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhZGRUYXNrKGFjdGl2ZUJ1dHRvbk5hbWUsIGlucHV0LCB0eXBlLCBwYXJlbnRDb250YWluZXIsIGNvbnRhaW5lciwgaW1nQWRkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgcmVtb3ZlSW5wdXQodHlwZSwgcGFyZW50Q29udGFpbmVyLCBjb250YWluZXIsIGltZ0FkZCwgYWN0aXZlQnV0dG9uTmFtZSk7XG4gICAgfSk7XG4gICAgXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuXG4gICAgcGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgaW5wdXQuZm9jdXMoKTtcbiAgICByZXR1cm47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQVFRvUFRMaXN0KG5hbWUsIHBhcmVudENvbnRhaW5lciwgaXNUYXNrKXtcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24obnVsbCwgXCJwVEJ1dHRvblwiKTtcbiAgICBjb25zdCBidXR0b25JbWcgPSBjcmVhdGVJbWcoaW1nTGlzdCwgXCJJbWFnZSBvZiBhIGxpc3RcIiwgbnVsbCwgXCJzaWRlbmF2QnV0dG9uSW1nXCIpO1xuICAgIGNvbnN0IGJ1dHRvblRleHQgPSBjcmVhdGVUZXh0KFwicFwiLCBudWxsLCBcInNpZGVuYXZCdXR0b25UZXh0XCIsIG5hbWUpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHBhcmVudENvbnRhaW5lcjtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihudWxsLCBcImNsb3NlQnV0dG9uXCIpO1xuICAgIGNvbnN0IGNsb3NlQnV0dG9uSW1nID0gY3JlYXRlSW1nKGltZ0Nsb3NlLCBcIkNyb3NzIGZvciBjbG9zaW5nXCIsIG51bGwsIFwic2lkZW5hdkJ1dHRvbkltZ1wiKTtcblxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBkZWxldGVQcm9qZWN0KGJ1dHRvbiwgbmFtZSk7XG4gICAgfSlcblxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25JbWcpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25UZXh0KTtcbiAgICBpZiAoaXNUYXNrKXtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQnV0dG9uXCIpO1xuICAgICAgICBjb25zdCBjb250YWluZXJGb3JJbnB1dHMgPSBjcmVhdGVEaXYoXCJjb250YWluZXJcIiwgbnVsbCwgXCJjb250YWluZXJGb3JJbnB1dHNcIik7XG4gICAgICAgIGNvbnN0IGNvbG9ySW5wdXQgPSBjcmVhdGVJbnB1dChudWxsLCBcImNvbG9ySW5wdXRcIiwgXCJjb2xvclwiLCBcIiNGRkZcIik7XG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGNyZWF0ZUlucHV0KG51bGwsIFwiZGF0ZUlucHV0XCIsIFwiZGF0ZVwiKTtcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGNvbnRhaW5lckZvcklucHV0cyk7XG4gICAgICAgIGNvbnRhaW5lckZvcklucHV0cy5hcHBlbmRDaGlsZChjb2xvcklucHV0KTtcbiAgICAgICAgY29udGFpbmVyRm9ySW5wdXRzLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgfVxuICAgIGNsb3NlQnV0dG9uLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uSW1nKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG5cbiAgICByZXR1cm4gY29udGFpbmVyLmluc2VydEJlZm9yZShidXR0b24sIGNvbnRhaW5lci5sYXN0Q2hpbGQpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9