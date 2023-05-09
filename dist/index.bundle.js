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
              const keyValue = listOfProjectMaps.get("Inbox").get(key)
        const taskColor = keyValue[0];
        const taskDate = keyValue[1];
        console.log(taskDate);
        (0,_pages_ui__WEBPACK_IMPORTED_MODULE_1__.addPTToPTList)(key, inboxTaskContainer, true, taskColor, taskDate);
      try{

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
/* harmony export */   "changeValuesOnTask": () => (/* binding */ changeValuesOnTask),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "removeInput": () => (/* binding */ removeInput)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/pages/ui.js");
/* harmony import */ var _builders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./builders */ "./src/pages/builders.js");




const date = new Date();
const dateString = date.toJSON();
const dateStringForInput = dateString.slice(0,10);



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
        // console.log(listOfProjectMaps);
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
    if (input.value === "" || input.value.match(/^ *$/) !== null){
        input.value = "";
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

    if (taskInput.value === "" || taskInput.value.match(/^ *$/) !== null){
        taskInput.value = "";
        taskInput.placeholder = "Task must have a name.";
        return;
    }
    if (valueMapofProjectName.has(taskInput.value)){
        taskInput.value = "";
        taskInput.placeholder = "Task already exists.";
        return;
    }

    valueMapofProjectName.set(taskInput.value, ["#FFFFFF", dateStringForInput])
    ___WEBPACK_IMPORTED_MODULE_0__.listOfProjectMaps.set(projectName, valueMapofProjectName);
    pushChangesToLocalStorage();
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.addPTToPTList)(taskInput.value, parentContainer, true, "#FFFFFF", dateStringForInput);
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

function deleteTask(button, projectName, parentContainerName){
    button.remove();
    ___WEBPACK_IMPORTED_MODULE_0__.listOfProjectMaps.get(parentContainerName).delete(projectName);
    pushChangesToLocalStorage();
}

function changeValuesOnTask(nameOfProject, nameOfTask, nameOfInput, inputValue){
    let valueOfTask = ___WEBPACK_IMPORTED_MODULE_0__.listOfProjectMaps.get(nameOfProject).get(nameOfTask);
    if (nameOfInput === "colorInput"){
        valueOfTask[0] = inputValue;
    }
    if (nameOfInput === "dateInput"){
        valueOfTask[1] = inputValue;
    }

    ___WEBPACK_IMPORTED_MODULE_0__.listOfProjectMaps.get(nameOfProject).set(nameOfTask, valueOfTask);
    pushChangesToLocalStorage();

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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! .. */ "./src/index.js");











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

function addPTToPTList(name, parentContainer, isTask, backgroundColor, taskDate){
    const button = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createButton)(null, "pTButton");
    const buttonImg = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createImg)(_assets_images_list_svg__WEBPACK_IMPORTED_MODULE_6__, "Image of a list", null, "sidenavButtonImg");
    const buttonText = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createText)("p", null, "sidenavButtonText", name);
    const container = parentContainer;
    const closeButton = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createButton)(null, "closeButton");
    const closeButtonImg = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createImg)(_assets_images_close_svg__WEBPACK_IMPORTED_MODULE_5__, "Cross for closing", null, "sidenavButtonImg");
    const nameOfContainer = document.getElementById("mainSectionHeader").textContent;

    if (!isTask){
        closeButton.addEventListener("click", function(){
            (0,_projectsAndTasks__WEBPACK_IMPORTED_MODULE_8__.deleteProject)(button, name);
        })
    }

    button.appendChild(buttonImg);
    button.appendChild(buttonText);
    if (isTask){

        closeButton.addEventListener("click", function(){
            (0,_projectsAndTasks__WEBPACK_IMPORTED_MODULE_8__.deleteTask)(button, name, nameOfContainer);
        })

        button.classList.add("taskButton");
        const containerForInputs = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createDiv)("container", null, "containerForInputs");
        const colorInput = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createInput)(null, "colorInput", "color");
        colorInput.value = backgroundColor;
        buttonText.style.backgroundColor = colorInput.value;
        colorInput.addEventListener("change", function(){
            (0,_projectsAndTasks__WEBPACK_IMPORTED_MODULE_8__.changeValuesOnTask)(nameOfContainer, name, "colorInput" , colorInput.value);
            buttonText.style.backgroundColor = colorInput.value;       
        })
        const dateInput = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createInput)(null, "dateInput", "date");
        dateInput.value = taskDate;
        dateInput.addEventListener("change", function(){
            (0,_projectsAndTasks__WEBPACK_IMPORTED_MODULE_8__.changeValuesOnTask)(nameOfContainer, name, "dateInput" , dateInput.value);         
        })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFL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O0FBQ0E7QUFDQSxZQUFZLHFFQUFrQjtBQUM5QixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9zcmMvc3R5bGVzL3VpLmNzcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL3NyYy9zdHlsZXMvdWkuY3NzPzgxYjMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL3NyYy9wYWdlcy9idWlsZGVycy5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL3NyYy9wYWdlcy9wcm9qZWN0c0FuZFRhc2tzLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vc3JjL3BhZ2VzL3VpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gICAgLS1mb250LXNpemUtcDogY2xhbXAoLjVyZW0sIDIwcHgsIDJyZW0pO1xcbiAgICAtLWZvbnQtc2l6ZS1oMzogMjZweDtcXG4gICAgLS1mb250LXNpemUtaDI6IDMycHg7XFxuXFxuICAgIC0tYm9yZGVyLWNvbG9yLXNpZGVuYXY6ICMwMDAwMDA1NTtcXG5cXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yLXNpZGVuYXY6ICNGQ0ZDRkM7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvci1oZWFkZXI6ICNGM0YzRjM7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItYWRkOiAjNjlmZjY5MTE7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItYWRkLWhvdmVyOiAjNjlmZjY5MzM7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItY2FuY2VsOiAjZmY2YjZiMTE7O1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWNhbmNlbC1ob3ZlcjogI2ZmNmI2YjMzO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWFjdGl2ZTogI0RERDtcXG4gICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogI0VFRTtcXG4gICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1jaGVja2xpc3QtaG92ZXI6ICMwMDAwMDA5OTtcXG4gICAgLS1ib3JkZXItY29sb3ItYWRkOiAjMzNmZjMzO1xcbiAgICAtLWJvcmRlci1jb2xvci1jYW5jZWw6ICNmZjMzMzM7XFxufVxcblxcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwZHZoO1xcbiAgICB3aWR0aDogMTAwZHZ3O1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzaWRlbmF2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3Itc2lkZW5hdik7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMC41cHggdmFyKC0tYm9yZGVyLWNvbG9yLXNpZGVuYXYpO1xcbn1cXG5cXG4jc2lkZW5hdkJ1dHRvbkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNpZGVuYXZCdXR0b257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGdhcDogMyU7XFxuICAgIG1hcmdpbi10b3A6IDYlO1xcbiAgICBtYXJnaW4tbGVmdDogMTQlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlbmF2QnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5idXR0b25Gb2N1c3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItYWN0aXZlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2lkZW5hdkJ1dHRvbjpmaXJzdC1jaGlsZHtcXG4gICAgbWFyZ2luLXRvcDogMzAlO1xcbn1cXG5cXG4uc2lkZW5hdkJ1dHRvblRleHR7XFxuICAgIG1pbi13aWR0aDogNjUlO1xcbiAgICBtYXgtd2lkdGg6IDY1JTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtcCk7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcXG4gICAgcGFkZGluZzogMCAxJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnNpZGVuYXZCdXR0b25JbWd7XFxuICAgIG1heC13aWR0aDogMS41cmVtO1xcbiAgICBtYXgtaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4jc2lkZU5hdlByb2plY3RUZXh0e1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gICAgbWFyZ2luLXRvcDogMjAlO1xcbiAgICBwYWRkaW5nLXRvcDogNSU7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgzKTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvci1zaWRlbmF2KTtcXG59XFxuXFxuI2NyZWF0ZVByb2plY3REaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wVEJ1dHRvbntcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE0JTtcXG4gICAgbWFyZ2luLXRvcDogNiU7XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbi5wVEJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4ucFRCdXR0b246bGFzdC1jaGlsZHtcXG4gICAgZ2FwOiAyJTtcXG59XFxuXFxuLmlucHV0Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaW5wdXRCb3h7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yLXNpZGVuYXYpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1wKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxuICAgIG1hcmdpbi10b3A6IDklO1xcbn1cXG5cXG5cXG4uYWNCdXR0b25zQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1JTtcXG59XFxuXFxuLmFjQnV0dG9ue1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTByZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hZGRCdXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWFkZCk7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvci1hZGQpO1xcbn1cXG5cXG4uYWRkQnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1hZGQtaG92ZXIpO1xcbn1cXG5cXG4uY2FuY2VsQnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1jYW5jZWwpO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3ItY2FuY2VsKTtcXG59XFxuXFxuLmNhbmNlbEJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItY2FuY2VsLWhvdmVyKTtcXG59XFxuXFxuLmNsb3NlQnV0dG9ue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcblxcbiNyaWdodENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNoZWFkZXJDb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItaGVhZGVyKTtcXG59XFxuXFxuI2hlYWRlclRleHR7XFxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvci1zaWRlbmF2KTtcXG59XFxuXFxuI21haW5Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMiUgMjUlO1xcbn1cXG5cXG4jbWFpblNlY3Rpb25IZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgyKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxufVxcblxcbiNjcmVhdGVUYXNrSW5wdXR7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgzKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XFxufVxcblxcbiN0YXNrQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YXNrQnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi50YXNrQnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5jaGVja0J1dHRvbntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBtaW4td2lkdGg6IDFyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uY2hlY2tCdXR0b25BY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWNoZWNrbGlzdC1ob3Zlcik7XFxufVxcblxcbi5jaGVja0J1dHRvbkFjdGl2ZVRleHR7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uY29udGFpbmVyRm9ySW5wdXRze1xcbiAgICBtaW4td2lkdGg6IGNhbGMoMjQlIC0gMXJlbSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOjUlO1xcbn1cXG5cXG4uZGF0ZUlucHV0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNvbG9ySW5wdXR7XFxuICAgIHdpZHRoOiAycmVtO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3VpLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHVDQUF1QztJQUN2QyxvQkFBb0I7SUFDcEIsb0JBQW9COztJQUVwQixpQ0FBaUM7O0lB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ZUFBZTtJQUNmLFFBQVE7SUFDUixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZ0VBQWdFO0FBQ3BFOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsTUFBTTtBQUNWOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwzMDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3R7XFxuICAgIC0tZm9udC1zaXplLXA6IGNsYW1wKC41cmVtLCAyMHB4LCAycmVtKTtcXG4gICAgLS1mb250LXNpemUtaDM6IDI2cHg7XFxuICAgIC0tZm9udC1zaXplLWgyOiAzMnB4O1xcblxcbiAgICAtLWJvcmRlci1jb2xvci1zaWRlbmF2OiAjMDAwMDAwNTU7XFxuXFxuICAgIC0tYmFja2dyb3VuZC1jb2xvci1zaWRlbmF2OiAjRkNGQ0ZDO1xcbiAgICAtLWJhY2tncm91bmQtY29sb3ItaGVhZGVyOiAjRjNGM0YzO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWFkZDogIzY5ZmY2OTExO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWFkZC1ob3ZlcjogIzY5ZmY2OTMzO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWNhbmNlbDogI2ZmNmI2YjExOztcXG4gICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1jYW5jZWwtaG92ZXI6ICNmZjZiNmIzMztcXG4gICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1hY3RpdmU6ICNEREQ7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItaG92ZXI6ICNFRUU7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItY2hlY2tsaXN0LWhvdmVyOiAjMDAwMDAwOTk7XFxuICAgIC0tYm9yZGVyLWNvbG9yLWFkZDogIzMzZmYzMztcXG4gICAgLS1ib3JkZXItY29sb3ItY2FuY2VsOiAjZmYzMzMzO1xcbn1cXG5cXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMGR2aDtcXG4gICAgd2lkdGg6IDEwMGR2dztcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc2lkZW5hdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXNpZGVuYXYpO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDAuNXB4IHZhcigtLWJvcmRlci1jb2xvci1zaWRlbmF2KTtcXG59XFxuXFxuI3NpZGVuYXZCdXR0b25Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaWRlbmF2QnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBnYXA6IDMlO1xcbiAgICBtYXJnaW4tdG9wOiA2JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDE0JTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZW5hdkJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4uYnV0dG9uRm9jdXN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWFjdGl2ZSkgIWltcG9ydGFudDtcXG59XFxuXFxuLnNpZGVuYXZCdXR0b246Zmlyc3QtY2hpbGR7XFxuICAgIG1hcmdpbi10b3A6IDMwJTtcXG59XFxuXFxuLnNpZGVuYXZCdXR0b25UZXh0e1xcbiAgICBtaW4td2lkdGg6IDY1JTtcXG4gICAgbWF4LXdpZHRoOiA2NSU7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXApO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBtYXJnaW4tbGVmdDogMiU7XFxuICAgIHBhZGRpbmc6IDAgMSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5zaWRlbmF2QnV0dG9uSW1ne1xcbiAgICBtYXgtd2lkdGg6IDEuNXJlbTtcXG4gICAgbWF4LWhlaWdodDogYXV0bztcXG59XFxuXFxuI3NpZGVOYXZQcm9qZWN0VGV4dHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi10b3A6IDIwJTtcXG4gICAgcGFkZGluZy10b3A6IDUlO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3Itc2lkZW5hdik7XFxufVxcblxcbiNjcmVhdGVQcm9qZWN0RGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucFRCdXR0b257XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNCU7XFxuICAgIG1hcmdpbi10b3A6IDYlO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4ucFRCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLnBUQnV0dG9uOmxhc3QtY2hpbGR7XFxuICAgIGdhcDogMiU7XFxufVxcblxcbi5pbnB1dENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmlucHV0Qm94e1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvci1zaWRlbmF2KTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtcCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcbiAgICBtYXJnaW4tdG9wOiA5JTtcXG59XFxuXFxuXFxuLmFjQnV0dG9uc0NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNSU7XFxufVxcblxcbi5hY0J1dHRvbntcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYWRkQnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1hZGQpO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3ItYWRkKTtcXG59XFxuXFxuLmFkZEJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItYWRkLWhvdmVyKTtcXG59XFxuXFxuLmNhbmNlbEJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItY2FuY2VsKTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yLWNhbmNlbCk7XFxufVxcblxcbi5jYW5jZWxCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWNhbmNlbC1ob3Zlcik7XFxufVxcblxcbi5jbG9zZUJ1dHRvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG5cXG5cXG4jcmlnaHRDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jaGVhZGVyQ29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWhlYWRlcik7XFxufVxcblxcbiNoZWFkZXJUZXh0e1xcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbiAgICBwYWRkaW5nOiAxJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3Itc2lkZW5hdik7XFxufVxcblxcbiNtYWluQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDIlIDI1JTtcXG59XFxuXFxuI21haW5TZWN0aW9uSGVhZGVye1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMik7XFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcbn1cXG5cXG4jY3JlYXRlVGFza0lucHV0e1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMyk7XFxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xcbn1cXG5cXG4jdGFza0NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udGFza0J1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOiAxJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4udGFza0J1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4uY2hlY2tCdXR0b257XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgbWluLXdpZHRoOiAxcmVtO1xcbiAgICBtaW4taGVpZ2h0OiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNoZWNrQnV0dG9uQWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1jaGVja2xpc3QtaG92ZXIpO1xcbn1cXG5cXG4uY2hlY2tCdXR0b25BY3RpdmVUZXh0e1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmNvbnRhaW5lckZvcklucHV0c3tcXG4gICAgbWluLXdpZHRoOiBjYWxjKDI0JSAtIDFyZW0pO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDo1JTtcXG59XFxuXFxuLmRhdGVJbnB1dHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5jb2xvcklucHV0e1xcbiAgICB3aWR0aDogMnJlbTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdWkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91aS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHRlc3RGdW5jdGlvbiB9IGZyb20gXCIuL3BhZ2VzL3Byb2plY3RzQW5kVGFza3NcIjtcbmltcG9ydCB7IGFkZFBUVG9QVExpc3QsIGNyZWF0ZVVJIH0gZnJvbSBcIi4vcGFnZXMvdWlcIjtcblxuZXhwb3J0IGxldCBsaXN0T2ZQcm9qZWN0TWFwcyA9IG5ldyBNYXA7XG5sZXQgbGlzdE9mVGFza3NNYXAgPSBuZXcgTWFwO1xuZXhwb3J0IGxldCBsb2NhbFN0b3JhZ2VFeGlzdHMgPSBmYWxzZTtcblxuXG5jcmVhdGVVSSgpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICBjaGVja0xvY2FsU3RvcmFnZSgpO1xuICB9KTtcblxuXG5mdW5jdGlvbiBjaGVja0xvY2FsU3RvcmFnZSgpe1xuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgICAgIGNoZWNrRm9yUHJvamVjdExpc3QoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlRXhpc3RzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3RPZlByb2plY3RNYXBzLnNldChcIkluYm94XCIsIGxpc3RPZlRhc2tzTWFwKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBcbiAgICBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG4gICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgIHN0b3JhZ2UgJiZcbiAgICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICAgICk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0ZvclByb2plY3RMaXN0KCl7XG4gICAgY29uc3QgbG9jYWxTdG9yYWdlUHJvamVjdExpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RPZlByb2plY3RNYXBzXCIpO1xuICAgIGxpc3RPZlByb2plY3RNYXBzID0gbmV3IE1hcChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVByb2plY3RMaXN0KSk7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNDb250YWluZXJcIik7XG4gICAgY29uc3QgaW5ib3hUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGFpbmVyXCIpO1xuICAgXG4gICAgaWYgKGxpc3RPZlByb2plY3RNYXBzLnNpemUgPT09IDApe1xuICAgICAgbGlzdE9mUHJvamVjdE1hcHMuc2V0KFwiSW5ib3hcIiwgbGlzdE9mVGFza3NNYXApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGxldCBrZXkgb2YgbGlzdE9mUHJvamVjdE1hcHMua2V5cygpKXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgbG9jYWxQcm9qZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgbGlzdE9mVGFza3NNYXAgPSBuZXcgTWFwKEpTT04ucGFyc2UobG9jYWxQcm9qZWN0KSk7XG4gICAgICAgICAgICBsaXN0T2ZQcm9qZWN0TWFwcy5zZXQoa2V5LCBsaXN0T2ZUYXNrc01hcCk7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSBcIkluYm94XCIpe1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZFBUVG9QVExpc3Qoa2V5LCBwcm9qZWN0Q29udGFpbmVyLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIGdldHRpbmcgbGlzdE9mUHJvamVjdE1hcHMgZnJvbSBsb2NhbFN0b3JhZ2VcXG5cIiArIGUpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHl7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBrZXkgb2YgbGlzdE9mUHJvamVjdE1hcHMuZ2V0KFwiSW5ib3hcIikua2V5cygpKXtcbiAgICAgICAgICAgICAgY29uc3Qga2V5VmFsdWUgPSBsaXN0T2ZQcm9qZWN0TWFwcy5nZXQoXCJJbmJveFwiKS5nZXQoa2V5KVxuICAgICAgICBjb25zdCB0YXNrQ29sb3IgPSBrZXlWYWx1ZVswXTtcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBrZXlWYWx1ZVsxXTtcbiAgICAgICAgY29uc29sZS5sb2codGFza0RhdGUpO1xuICAgICAgICBhZGRQVFRvUFRMaXN0KGtleSwgaW5ib3hUYXNrQ29udGFpbmVyLCB0cnVlLCB0YXNrQ29sb3IsIHRhc2tEYXRlKTtcbiAgICAgIHRyeXtcblxuICAgICAgfVxuICAgICAgY2F0Y2goZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hpbGUgZ2VuZXJhdGluZyB0YXNrcyB0byBJbmJveCBcXG5cIiArIGUpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybjtcbn0iLCJpbXBvcnQgeyBidXR0b25QVENsaWNrZWQgfSBmcm9tIFwiLi9wcm9qZWN0c0FuZFRhc2tzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXYodHlwZSwgaWQgPSBudWxsLCBjbGFzc05hbWUgPSBudWxsKXtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXG4gICAgaWYgKGlkICE9PSBudWxsKSB7XG4gICAgICAgIGRpdi5pZCA9IGlkO1xuICAgIH1cbiAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKXtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2xhc3NOYW1lKSl7XG4gICAgICAgICAgICBhZGRDbGFzc05hbWVzVG9PYmplY3QoZGl2LCBjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBkaXYuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZXh0KHR5cGUsIGlkID0gbnVsbCwgY2xhc3NOYW1lID0gbnVsbCwgdGV4dFZhbHVlID0gbnVsbCl7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IHRleHRWYWx1ZTtcblxuICAgIGlmIChpZCAhPT0gbnVsbCl7XG4gICAgICAgIHRleHQuaWQgPSBpZDtcbiAgICB9XG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCl7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNsYXNzTmFtZSkpe1xuICAgICAgICAgICAgYWRkQ2xhc3NOYW1lc1RvT2JqZWN0KHRleHQsIGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRleHQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0ZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1nKHNyYywgYWx0LCBpZCA9IG51bGwsIGNsYXNzTmFtZSA9IG51bGwpe1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSBzcmM7XG4gICAgaW1nLmFsdCA9IGFsdDtcblxuICAgIGlmIChpZCAhPSBudWxsKXtcbiAgICAgICAgaW1nLmlkID0gaWQ7XG4gICAgfVxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpe1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjbGFzc05hbWUpKXtcbiAgICAgICAgICAgIGFkZENsYXNzTmFtZXNUb09iamVjdChpbWcsIGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGltZy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGltZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihpZCA9IG51bGwsIGNsYXNzTmFtZSA9IG51bGwsIGJ1dHRvblRleHQgPSBudWxsKXtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpZiAoaWQgIT09IG51bGwpe1xuICAgICAgICBidXR0b24uaWQgPSBpZDtcbiAgICB9XG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCl7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNsYXNzTmFtZSkpe1xuICAgICAgICAgICAgYWRkQ2xhc3NOYW1lc1RvT2JqZWN0KGJ1dHRvbiwgY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGlmIChidXR0b25UZXh0ICE9PSBudWxsKXtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gYnV0dG9uVGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5wdXQoaWQgPSBudWxsLCBjbGFzc05hbWUgPSBudWxsLCB0eXBlT2ZJbnB1dCA9IG51bGwsIHBsYWNlaG9sZGVyID0gbnVsbCwgZm9jdXMgPSBudWxsKXtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaWYgKGlkICE9PSBudWxsKXtcbiAgICAgICAgaW5wdXQuaWQgPSBpZDtcbiAgICB9XG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCl7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNsYXNzTmFtZSkpe1xuICAgICAgICAgICAgYWRkQ2xhc3NOYW1lc1RvT2JqZWN0KGlucHV0LCBjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBpbnB1dC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVPZklucHV0ICE9PSBudWxsKXtcbiAgICAgICAgaW5wdXQudHlwZSA9IHR5cGVPZklucHV0O1xuICAgIH1cbiAgICBpZiAodHlwZU9mSW5wdXQgIT09IG51bGwpe1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgIH1cbiAgICBpZiAoZm9jdXMgIT09IG51bGwgJiYgZm9jdXMgPT0gdHJ1ZSl7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgfVxuICAgIHJldHVybiBpbnB1dDtcbn1cblxuXG5mdW5jdGlvbiBhZGRDbGFzc05hbWVzVG9PYmplY3Qob2JqZWN0LGNsYXNzTmFtZSl7XG4gICAgY2xhc3NOYW1lLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIG9iamVjdC5jbGFzc0xpc3QuYWRkKGVsZW1lbnQpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNpZGVuYXZCdXR0b25zKG5hbWUsIGltZyl7XG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKG51bGwsIFwic2lkZW5hdkJ1dHRvblwiKTtcbiAgICBjb25zdCBidXR0b25JbWcgPSBjcmVhdGVJbWcoaW1nLCBuYW1lK1wiIGljb25cIiwgbnVsbCwgXCJzaWRlbmF2QnV0dG9uSW1nXCIpO1xuICAgIGNvbnN0IGJ1dHRvblRleHQgPSBjcmVhdGVUZXh0KFwicFwiLCBudWxsLCBcInNpZGVuYXZCdXR0b25UZXh0XCIsIG5hbWUpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25JbWcpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25UZXh0KTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHNpZGVuYXZCdXR0b25Gb2N1cyhidXR0b24pO1xuICAgIH0pXG4gICAgaWYgKG5hbWUgPT09IFwiSW5ib3hcIil7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uRm9jdXNcIik7XG4gICAgfVxuICAgIHJldHVybiBidXR0b247XG59XG5cbmZ1bmN0aW9uIHNpZGVuYXZCdXR0b25Gb2N1cyhuYW1lKXtcbiAgICBjb25zdCBidXR0b25Gb2N1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uRm9jdXNcIik7XG4gICAgaWYgKCFidXR0b25Gb2N1cyl7XG4gICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcImJ1dHRvbkZvY3VzXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGJ1dHRvbkZvY3VzLmNsYXNzTGlzdC5yZW1vdmUoXCJidXR0b25Gb2N1c1wiKTtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJidXR0b25Gb2N1c1wiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBUQnV0dG9uKHR5cGUsIGltZywgY29udGFpbmVyLCBhY3RpdmVCdXR0b25OYW1lKXtcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24odHlwZSArIFwiQnV0dG9uXCIsIFwicFRCdXR0b25cIik7XG4gICAgY29uc3QgYnV0dG9uSW1nID0gY3JlYXRlSW1nKGltZywgXCJwbHVzIGljb25cIiwgbnVsbCwgXCJzaWRlbmF2QnV0dG9uSW1nXCIpO1xuICAgIGNvbnN0IGJ1dHRvblRleHQgPSBjcmVhdGVUZXh0KFwicFwiLCBudWxsLCBcInNpZGVuYXZCdXR0b25UZXh0XCIsIFwiQWRkIFwiKyB0eXBlKTtcblxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25JbWcpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25UZXh0KVxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICBidXR0b25QVENsaWNrZWQodHlwZSwgYnV0dG9uLCBjb250YWluZXIsIGFjdGl2ZUJ1dHRvbk5hbWUpXG4gICAgfSk7XG5cbiAgICByZXR1cm4gYnV0dG9uO1xufSIsImltcG9ydCB7IGxpc3RPZlRhc2tzTWFwLCBsaXN0T2ZQcm9qZWN0TWFwcyB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgY3JlYXRlSW5wdXRGb3JQVCwgYWRkUFRUb1BUTGlzdCB9IGZyb20gXCIuL3VpXCI7XG5pbXBvcnQge2NyZWF0ZVBUQnV0dG9ufSBmcm9tIFwiLi9idWlsZGVyc1wiO1xuXG5jb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbmNvbnN0IGRhdGVTdHJpbmcgPSBkYXRlLnRvSlNPTigpO1xuY29uc3QgZGF0ZVN0cmluZ0ZvcklucHV0ID0gZGF0ZVN0cmluZy5zbGljZSgwLDEwKTtcblxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiB0ZXN0RnVuY3Rpb24oKXtcbi8vICAgICBsZXQgbGlzdE9mVGFza3NNYXAgPSBuZXcgTWFwO1xuXG4vLyAgICAgZm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKyl7XG4vLyAgICAgICAgIGxpc3RPZlRhc2tzTWFwLnNldChcIlRhc2tcIitpLCBbXCJjb2xvclwiK2ksIFwiZGF0ZVwiLCBmYWxzZV0pO1xuLy8gICAgICAgICBsaXN0T2ZQcm9qZWN0TWFwcy5zZXQoXCJJbmJveFwiLCBsaXN0T2ZUYXNrc01hcCk7XG4vLyAgICAgfVxuLy8gICAgIGxpc3RPZlRhc2tzTWFwID0gbmV3IE1hcDtcbi8vICAgICBmb3IobGV0IGogPSAwOyBqIDwgNDsgaisrKXtcblxuLy8gICAgICAgICBsaXN0T2ZUYXNrc01hcC5zZXQoXCJUYXNrSW5Qcm9qZWN0MVwiK2osIFtcImNvbG9yXCIraiwgXCJkYXRlXCIsIHRydWVdKTtcbi8vICAgICAgICAgbGlzdE9mUHJvamVjdE1hcHMuc2V0KFwiUHJvamVrdDFcIiwgbGlzdE9mVGFza3NNYXApO1xuXG4vLyAgICAgfVxuLy8gICAgIHB1c2hDaGFuZ2VzVG9Mb2NhbFN0b3JhZ2UoKVxuLy8gfVxuXG5mdW5jdGlvbiBwdXNoQ2hhbmdlc1RvTG9jYWxTdG9yYWdlKCl7XG4gICAgdHJ5e1xuICAgICAgICBmb3IobGV0IGtleSBvZiBsaXN0T2ZQcm9qZWN0TWFwcy5rZXlzKCkpe1xuICAgICAgICAgICAgY29uc3QgbGlzdE9mS2V5cyA9IGxpc3RPZlByb2plY3RNYXBzLmdldChrZXkpLmVudHJpZXMoKTtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RPZktleXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShBcnJheS5mcm9tKGxpc3RPZktleXMpKTtcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBsaXN0T2ZLZXlzU3RyaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsaXN0T2ZQcm9qZWN0TWFwc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KEFycmF5LmZyb20obGlzdE9mUHJvamVjdE1hcHMuZW50cmllcygpKSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdE9mUHJvamVjdE1hcHNcIiwgbGlzdE9mUHJvamVjdE1hcHNTdHJpbmcpO1xuICAgIH1cbiAgICBjYXRjaChlKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciB3aXRoIHdyaXRpbmcgaW5mbyB0byBsb2NhbCBzdG9yYWdlXFxuXCIgKyBlKTtcbiAgICB9XG4gICAgZmluYWxseXtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobGlzdE9mUHJvamVjdE1hcHMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1dHRvblBUQ2xpY2tlZCh0eXBlLCBwYXJlbnRCdXR0b24sIGNvbnRhaW5lciwgYWN0aXZlQnV0dG9uTmFtZSl7XG4gICAgdHJ5e1xuICAgICAgICBwYXJlbnRCdXR0b24ucmVtb3ZlKCk7XG4gICAgICAgIGNyZWF0ZUlucHV0Rm9yUFQodHlwZSwgY29udGFpbmVyLCBhY3RpdmVCdXR0b25OYW1lKTtcbiAgICB9XG4gICAgY2F0Y2goZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FuJ3QgY3JlYXRlIGlucHV0IGZvciBcIiArIHR5cGUgKyBcIlxcblwiICsgZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdChpbnB1dCwgdHlwZSwgcGFyZW50Q29udGFpbmVyLCBjb250YWluZXIsIGltZ0FkZCl7XG4gICAgaWYgKGlucHV0LnZhbHVlID09PSBcIlwiIHx8IGlucHV0LnZhbHVlLm1hdGNoKC9eICokLykgIT09IG51bGwpe1xuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCJDYW4ndCBiZSBlbXB0eVwiO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChsaXN0T2ZQcm9qZWN0TWFwcy5oYXMoaW5wdXQudmFsdWUpKXtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiXG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCJQcm9qZWN0IGV4c2lzdC5cIlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxpc3RPZlByb2plY3RNYXBzLnNldChpbnB1dC52YWx1ZSwgbmV3IE1hcCk7XG4gICAgcHVzaENoYW5nZXNUb0xvY2FsU3RvcmFnZSgpO1xuICAgIGFkZFBUVG9QVExpc3QoaW5wdXQudmFsdWUsIHBhcmVudENvbnRhaW5lciwgZmFsc2UpO1xuICAgIHJlbW92ZUlucHV0KHR5cGUsIHBhcmVudENvbnRhaW5lciwgY29udGFpbmVyLCBpbWdBZGQpO1xuICAgIHJldHVybjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2socHJvamVjdE5hbWUsIHRhc2tJbnB1dCwgdHlwZSwgcGFyZW50Q29udGFpbmVyLCBjb250YWluZXIsIGltZ0FkZCl7XG4gICAgY29uc3QgdmFsdWVNYXBvZlByb2plY3ROYW1lID0gbGlzdE9mUHJvamVjdE1hcHMuZ2V0KHByb2plY3ROYW1lKVxuXG4gICAgaWYgKHRhc2tJbnB1dC52YWx1ZSA9PT0gXCJcIiB8fCB0YXNrSW5wdXQudmFsdWUubWF0Y2goL14gKiQvKSAhPT0gbnVsbCl7XG4gICAgICAgIHRhc2tJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRhc2tJbnB1dC5wbGFjZWhvbGRlciA9IFwiVGFzayBtdXN0IGhhdmUgYSBuYW1lLlwiO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2YWx1ZU1hcG9mUHJvamVjdE5hbWUuaGFzKHRhc2tJbnB1dC52YWx1ZSkpe1xuICAgICAgICB0YXNrSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICB0YXNrSW5wdXQucGxhY2Vob2xkZXIgPSBcIlRhc2sgYWxyZWFkeSBleGlzdHMuXCI7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YWx1ZU1hcG9mUHJvamVjdE5hbWUuc2V0KHRhc2tJbnB1dC52YWx1ZSwgW1wiI0ZGRkZGRlwiLCBkYXRlU3RyaW5nRm9ySW5wdXRdKVxuICAgIGxpc3RPZlByb2plY3RNYXBzLnNldChwcm9qZWN0TmFtZSwgdmFsdWVNYXBvZlByb2plY3ROYW1lKTtcbiAgICBwdXNoQ2hhbmdlc1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgYWRkUFRUb1BUTGlzdCh0YXNrSW5wdXQudmFsdWUsIHBhcmVudENvbnRhaW5lciwgdHJ1ZSwgXCIjRkZGRkZGXCIsIGRhdGVTdHJpbmdGb3JJbnB1dCk7XG4gICAgcmVtb3ZlSW5wdXQodHlwZSwgcGFyZW50Q29udGFpbmVyLCBjb250YWluZXIsIGltZ0FkZCwgcHJvamVjdE5hbWUpO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJbnB1dCh0eXBlLCBwYXJlbnRDb250YWluZXIsIGNvbnRhaW5lciwgaW1nQWRkLCBhY3RpdmVCdXR0b25OYW1lKXtcbiAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgcGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVBUQnV0dG9uKHR5cGUsIGltZ0FkZCwgcGFyZW50Q29udGFpbmVyLCBhY3RpdmVCdXR0b25OYW1lKSk7XG4gICAgcmV0dXJuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChidXR0b24sIHByb2plY3ROYW1lKXtcbiAgICBidXR0b24ucmVtb3ZlKCk7XG4gICAgbGlzdE9mUHJvamVjdE1hcHMuZGVsZXRlKHByb2plY3ROYW1lKTtcbiAgICBwdXNoQ2hhbmdlc1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocHJvamVjdE5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFzayhidXR0b24sIHByb2plY3ROYW1lLCBwYXJlbnRDb250YWluZXJOYW1lKXtcbiAgICBidXR0b24ucmVtb3ZlKCk7XG4gICAgbGlzdE9mUHJvamVjdE1hcHMuZ2V0KHBhcmVudENvbnRhaW5lck5hbWUpLmRlbGV0ZShwcm9qZWN0TmFtZSk7XG4gICAgcHVzaENoYW5nZXNUb0xvY2FsU3RvcmFnZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVmFsdWVzT25UYXNrKG5hbWVPZlByb2plY3QsIG5hbWVPZlRhc2ssIG5hbWVPZklucHV0LCBpbnB1dFZhbHVlKXtcbiAgICBsZXQgdmFsdWVPZlRhc2sgPSBsaXN0T2ZQcm9qZWN0TWFwcy5nZXQobmFtZU9mUHJvamVjdCkuZ2V0KG5hbWVPZlRhc2spO1xuICAgIGlmIChuYW1lT2ZJbnB1dCA9PT0gXCJjb2xvcklucHV0XCIpe1xuICAgICAgICB2YWx1ZU9mVGFza1swXSA9IGlucHV0VmFsdWU7XG4gICAgfVxuICAgIGlmIChuYW1lT2ZJbnB1dCA9PT0gXCJkYXRlSW5wdXRcIil7XG4gICAgICAgIHZhbHVlT2ZUYXNrWzFdID0gaW5wdXRWYWx1ZTtcbiAgICB9XG5cbiAgICBsaXN0T2ZQcm9qZWN0TWFwcy5nZXQobmFtZU9mUHJvamVjdCkuc2V0KG5hbWVPZlRhc2ssIHZhbHVlT2ZUYXNrKTtcbiAgICBwdXNoQ2hhbmdlc1RvTG9jYWxTdG9yYWdlKCk7XG5cbn0iLCJpbXBvcnQgJy4uL3N0eWxlcy91aS5jc3MnO1xuaW1wb3J0IGltZ0luYm94IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaW5ib3guc3ZnJztcbmltcG9ydCBpbWdUb2RheSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3RvZGF5LnN2Zyc7XG5pbXBvcnQgaW1nV2VlayBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3dlZWsuc3ZnJztcbmltcG9ydCBpbWdBZGQgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9hZGQuc3ZnJztcbmltcG9ydCBpbWdDbG9zZSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2Nsb3NlLnN2Zyc7XG5pbXBvcnQgaW1nTGlzdCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2xpc3Quc3ZnJztcbmltcG9ydCB7IGNyZWF0ZURpdiwgY3JlYXRlVGV4dCwgY3JlYXRlSW1nLCBjcmVhdGVCdXR0b24sIGNyZWF0ZUlucHV0LCBjcmVhdGVTaWRlbmF2QnV0dG9ucywgY3JlYXRlUFRCdXR0b24gfSBmcm9tIFwiLi9idWlsZGVyc1wiO1xuaW1wb3J0IHsgcmVtb3ZlSW5wdXQsIGFkZFByb2plY3QsIGFkZFRhc2ssIGRlbGV0ZVByb2plY3QsIGRlbGV0ZVRhc2ssIGNoYW5nZVZhbHVlc09uVGFzayB9IGZyb20gJy4vcHJvamVjdHNBbmRUYXNrcyc7XG5pbXBvcnQgeyBsaXN0T2ZQcm9qZWN0TWFwcyB9IGZyb20gJy4uJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVJKCl7XG4gICAgdHJ5e1xuICAgICAgICBjcmVhdGVTaWRlbmF2KCk7XG4gICAgICAgIGNyZWF0ZVJpZ2h0U2VjdGlvbigpO1xuICAgIH1cbiAgICBjYXRjaChlKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJQcm9ibGVtIHdpdGggY3JlYXRpbmcgc2lkZW5hdlxcblwiICsgZSk7XG4gICAgfVxuICAgIFxufVxuXG5mdW5jdGlvbiBjcmVhdGVTaWRlbmF2KCl7XG4gICAgY29uc3Qgc2lkZW5hdkNvbnRhaW5lciA9IGNyZWF0ZURpdihcInNpZGVuYXZcIiwgXCJzaWRlbmF2XCIpO1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGNyZWF0ZUJ1dHRvbkNvbnRhaW5lcigpO1xuICAgIGNvbnN0IHByb2plY3RUZXh0ID0gY3JlYXRlVGV4dChcImRpdlwiLCBcInNpZGVOYXZQcm9qZWN0VGV4dFwiLCBudWxsLCBcIlByb2plY3RzXCIpO1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gY3JlYXRlUHJvamVjdHNDb250YWluZXIoKTtcblxuICAgIHNpZGVuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcbiAgICBzaWRlbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RUZXh0KTtcbiAgICBzaWRlbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNpZGVuYXZDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCdXR0b25Db250YWluZXIoKXtcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBjcmVhdGVEaXYoXCJjb250YWluZXJcIiwgXCJzaWRlbmF2QnV0dG9uQ29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGJ1dHRvbnMgPSB7XG4gICAgICAgIEluYm94OiBbXCJJbmJveFwiLCBpbWdJbmJveF0sXG4gICAgICAgIFRvZGF5OiBbXCJUb2RheVwiLCBpbWdUb2RheV0sXG4gICAgICAgIFdlZWs6IFtcIlRoaXMgd2Vla1wiLCBpbWdXZWVrXVxuICAgIH1cbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2lkZW5hdkJ1dHRvbnMoYnV0dG9ucy5JbmJveFswXSwgYnV0dG9ucy5JbmJveFsxXSkpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTaWRlbmF2QnV0dG9ucyhidXR0b25zLlRvZGF5WzBdLCBidXR0b25zLlRvZGF5WzFdKSk7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVNpZGVuYXZCdXR0b25zKGJ1dHRvbnMuV2Vla1swXSwgYnV0dG9ucy5XZWVrWzFdKSk7XG5cbiAgICByZXR1cm4gYnV0dG9uQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0c0NvbnRhaW5lcigpe1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gY3JlYXRlRGl2KFwiY29udGFpbmVyXCIsIFwicHJvamVjdHNDb250YWluZXJcIik7XG4gICAgY29uc3QgcHJvamVjdEFkZEJ1dHRvbiA9IGNyZWF0ZVBUQnV0dG9uKFwiUHJvamVjdFwiLCBpbWdBZGQsIHByb2plY3RzQ29udGFpbmVyLCBudWxsKTtcblxuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RBZGRCdXR0b24pO1xuXG4gICAgcmV0dXJuIHByb2plY3RzQ29udGFpbmVyO1xufVxuXG5cblxuZnVuY3Rpb24gY3JlYXRlUmlnaHRTZWN0aW9uKCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRGl2KFwiY29udGFpbmVyXCIsIFwicmlnaHRDb250YWluZXJcIik7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCk7XG4gICAgY29uc3QgbWFpblNlY3Rpb24gPSBjcmVhdGVNYWluKFwiSW5ib3hcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5TZWN0aW9uKTtcblxuICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZURpdihcImNvbnRhaW5lclwiLCBcImhlYWRlckNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBsb2dvVGV4dCA9IGNyZWF0ZVRleHQoXCJoMVwiLCBcImhlYWRlclRleHRcIiwgbnVsbCwgXCJMaXN0IGRvVG9cIik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9nb1RleHQpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbihhY3RpdmVCdXR0b25OYW1lKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVEaXYoXCJjb250YWluZXJcIiwgXCJtYWluQ29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRleHQgPSBjcmVhdGVUZXh0KFwiaDJcIiwgXCJtYWluU2VjdGlvbkhlYWRlclwiLCBudWxsLCBhY3RpdmVCdXR0b25OYW1lKTtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gY3JlYXRlRGl2KFwiY29udGFpbmVyXCIsIFwidGFza0NvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0YXNrQWRkQnV0dG9uID0gY3JlYXRlUFRCdXR0b24oXCJUYXNrXCIsIGltZ0FkZCwgdGFza0NvbnRhaW5lciwgYWN0aXZlQnV0dG9uTmFtZSk7XG5cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQWRkQnV0dG9uKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnB1dEZvclBUKHR5cGUsIHBhcmVudENvbnRhaW5lciwgYWN0aXZlQnV0dG9uTmFtZSl7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRGl2KFwiY29udGFpbmVyXCIsIG51bGwsIFwiaW5wdXRDb250YWluZXJcIik7XG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVJbnB1dChgY3JlYXRlJHt0eXBlfUlucHV0YCwgXCJpbnB1dEJveFwiLCBcInRleHRcIiwgdHlwZSArIFwiIG5hbWVcIiwgdHJ1ZSk7XG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gY3JlYXRlRGl2KFwiZGl2XCIsIG51bGwsIFwiYWNCdXR0b25zQ29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihudWxsLCBbXCJhY0J1dHRvblwiLCBcImFkZEJ1dHRvblwiXSwgXCJBZGRcIik7XG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gY3JlYXRlQnV0dG9uKG51bGwsIFtcImFjQnV0dG9uXCIsIFwiY2FuY2VsQnV0dG9uXCJdLCBcIkNhbmNlbFwiKTtcblxuICAgIGlmICh0eXBlID09PSBcIlByb2plY3RcIil7XG4gICAgICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGFkZFByb2plY3QoaW5wdXQsIHR5cGUsIHBhcmVudENvbnRhaW5lciwgY29udGFpbmVyLCBpbWdBZGQpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIGlmICh0eXBlID09PSBcIlRhc2tcIil7XG4gICAgICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGFkZFRhc2soYWN0aXZlQnV0dG9uTmFtZSwgaW5wdXQsIHR5cGUsIHBhcmVudENvbnRhaW5lciwgY29udGFpbmVyLCBpbWdBZGQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICByZW1vdmVJbnB1dCh0eXBlLCBwYXJlbnRDb250YWluZXIsIGNvbnRhaW5lciwgaW1nQWRkLCBhY3RpdmVCdXR0b25OYW1lKTtcbiAgICB9KTtcbiAgICBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG5cbiAgICBwYXJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBpbnB1dC5mb2N1cygpO1xuICAgIHJldHVybjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBUVG9QVExpc3QobmFtZSwgcGFyZW50Q29udGFpbmVyLCBpc1Rhc2ssIGJhY2tncm91bmRDb2xvciwgdGFza0RhdGUpe1xuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihudWxsLCBcInBUQnV0dG9uXCIpO1xuICAgIGNvbnN0IGJ1dHRvbkltZyA9IGNyZWF0ZUltZyhpbWdMaXN0LCBcIkltYWdlIG9mIGEgbGlzdFwiLCBudWxsLCBcInNpZGVuYXZCdXR0b25JbWdcIik7XG4gICAgY29uc3QgYnV0dG9uVGV4dCA9IGNyZWF0ZVRleHQoXCJwXCIsIG51bGwsIFwic2lkZW5hdkJ1dHRvblRleHRcIiwgbmFtZSk7XG4gICAgY29uc3QgY29udGFpbmVyID0gcGFyZW50Q29udGFpbmVyO1xuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gY3JlYXRlQnV0dG9uKG51bGwsIFwiY2xvc2VCdXR0b25cIik7XG4gICAgY29uc3QgY2xvc2VCdXR0b25JbWcgPSBjcmVhdGVJbWcoaW1nQ2xvc2UsIFwiQ3Jvc3MgZm9yIGNsb3NpbmdcIiwgbnVsbCwgXCJzaWRlbmF2QnV0dG9uSW1nXCIpO1xuICAgIGNvbnN0IG5hbWVPZkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblNlY3Rpb25IZWFkZXJcIikudGV4dENvbnRlbnQ7XG5cbiAgICBpZiAoIWlzVGFzayl7XG4gICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdChidXR0b24sIG5hbWUpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25JbWcpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25UZXh0KTtcbiAgICBpZiAoaXNUYXNrKXtcblxuICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGRlbGV0ZVRhc2soYnV0dG9uLCBuYW1lLCBuYW1lT2ZDb250YWluZXIpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFza0J1dHRvblwiKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyRm9ySW5wdXRzID0gY3JlYXRlRGl2KFwiY29udGFpbmVyXCIsIG51bGwsIFwiY29udGFpbmVyRm9ySW5wdXRzXCIpO1xuICAgICAgICBjb25zdCBjb2xvcklucHV0ID0gY3JlYXRlSW5wdXQobnVsbCwgXCJjb2xvcklucHV0XCIsIFwiY29sb3JcIik7XG4gICAgICAgIGNvbG9ySW5wdXQudmFsdWUgPSBiYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIGJ1dHRvblRleHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JJbnB1dC52YWx1ZTtcbiAgICAgICAgY29sb3JJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjaGFuZ2VWYWx1ZXNPblRhc2sobmFtZU9mQ29udGFpbmVyLCBuYW1lLCBcImNvbG9ySW5wdXRcIiAsIGNvbG9ySW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgYnV0dG9uVGV4dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcklucHV0LnZhbHVlOyAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gY3JlYXRlSW5wdXQobnVsbCwgXCJkYXRlSW5wdXRcIiwgXCJkYXRlXCIpO1xuICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSB0YXNrRGF0ZTtcbiAgICAgICAgZGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNoYW5nZVZhbHVlc09uVGFzayhuYW1lT2ZDb250YWluZXIsIG5hbWUsIFwiZGF0ZUlucHV0XCIgLCBkYXRlSW5wdXQudmFsdWUpOyAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoY29udGFpbmVyRm9ySW5wdXRzKTtcbiAgICAgICAgY29udGFpbmVyRm9ySW5wdXRzLmFwcGVuZENoaWxkKGNvbG9ySW5wdXQpO1xuICAgICAgICBjb250YWluZXJGb3JJbnB1dHMuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgICB9XG4gICAgY2xvc2VCdXR0b24uYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b25JbWcpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cblxuICAgIHJldHVybiBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGJ1dHRvbiwgY29udGFpbmVyLmxhc3RDaGlsZCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=