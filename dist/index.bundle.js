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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --font-size-p: clamp(.5rem, 20px, 2rem);\n    --font-size-h3: 26px;\n    --font-size-h2: 32px;\n\n    --border-color-sidenav: #00000055;\n\n    --background-color-sidenav: #FCFCFC;\n    --background-color-header: #F3F3F3;\n    --button-background-color-add: #69ff6911;\n    --button-background-color-add-hover: #69ff6933;\n    --button-background-color-cancel: #ff6b6b11;;\n    --button-background-color-cancel-hover: #ff6b6b33;\n    --button-background-color-active: #DDD;\n    --button-background-color-hover: #EEE;\n    --button-background-color-checklist-hover: #00000099;\n    --border-color-add: #33ff33;\n    --border-color-cancel: #ff3333;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-family: 'Roboto', sans-serif;\n}\nbody{\n    height: 100dvh;\n    width: 100dvw;\n    overflow-y: hidden;\n    display: flex;\n}\n\n#sidenav{\n    display: flex;\n    flex-direction: column;\n    width: 15%;\n    min-width: 250px;\n    height: 100%;\n    background: var(--background-color-sidenav);\n    border-right: solid 0.5px var(--border-color-sidenav);\n}\n\n#sidenavButtonContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n.sidenavButton{\n    display: flex;\n    align-items: flex-end;\n    background: transparent;\n    width: 80%;\n    border-radius: 5px;\n    padding: 2%;\n    gap: 3%;\n    margin-top: 6%;\n    margin-left: 14%;\n    cursor: pointer;\n}\n\n.sidenavButton:hover{\n    background-color: var(--button-background-color-hover);\n}\n\n.buttonFocus{\n    background-color: var(--button-background-color-active) !important;\n}\n\n.sidenavButton:first-child{\n    margin-top: 30%;\n}\n\n.sidenavButtonText{\n    min-width: 65%;\n    max-width: 65%;\n    font-size: var(--font-size-p);\n    font-weight: 200;\n    margin-left: 2%;\n    padding: 0 1%;\n    border-radius: 10px;\n    text-align: left;\n    text-overflow:ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.sidenavButtonImg{\n    max-width: 1.5rem;\n    max-height: auto;\n}\n\n#sideNavProjectText{\n    padding-left: 10%;\n    margin-top: 20%;\n    padding-top: 5%;\n    font-size: var(--font-size-h3);\n    font-weight: 800;\n    border-top: solid 1px var(--border-color-sidenav);\n}\n\n#createProjectDiv{\n    display: flex;\n    flex-direction: column;\n}\n\n.pTButton{\n    background: transparent;\n    cursor: pointer;\n    display: flex;\n    width: 80%;\n    padding: 2%;\n    border-radius: 5px;\n    margin-left: 14%;\n    margin-top: 6%;\n    gap: .5rem;\n}\n\n.pTButton:hover{\n    background-color: var(--button-background-color-hover);\n}\n\n.pTButton:last-child{\n    gap: 2%;\n}\n\n#inputContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n#createProjectInput{\n    width: 80%;\n    align-self: center;\n    border: solid 1px var(--border-color-sidenav);\n    font-size: var(--font-size-p);\n    margin-bottom: 5%;\n    margin-top: 9%;\n}\n\n\n#createProjectDivButtons{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n}\n\n.addCancelButton{\n    width: 30%;\n    height: 100%;\n    max-width: 10rem;\n    cursor: pointer;\n    font-weight: bold;\n}\n\n#projectAdd{\n    background-color: var(--button-background-color-add);\n    border: solid 1px var(--border-color-add);\n}\n\n#projectAdd:hover{\n    background-color: var(--button-background-color-add-hover);\n}\n\n#projectCancel{\n    background-color: var(--button-background-color-cancel);\n    border: solid 1px var(--border-color-cancel);\n}\n\n#projectCancel:hover{\n    background-color: var(--button-background-color-cancel-hover);\n}\n\n.closeButton{\n    cursor: pointer;\n    background-color: transparent;\n    margin-right: 0;\n}\n\n\n#rightContainer{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n}\n\n#headerContainer{\n    background-color: var(--background-color-header);\n}\n\n#headerText{\n    font-style: oblique;\n    padding: 1%;\n    padding-left: 10%;\n    border-bottom: solid 1px var(--border-color-sidenav);\n}\n\n#mainContainer{\n    display: flex;\n    flex-direction: column;\n    margin: 2% 25%;\n}\n\n#mainSectionHeader{\n    font-size: var(--font-size-h2);\n    margin-bottom: 5%;\n}\n\n#createTaskInput{\n    font-size: var(--font-size-h3);\n    margin-bottom: 2%;\n}\n\n#taskContainer{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.taskButton{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    background-color: transparent;\n    cursor: pointer;\n    padding: 1%;\n    border-radius: 5px;\n}\n.taskButton:hover{\n    background-color: var(--button-background-color-hover);\n}\n\n.checkButton{\n    border: 1px solid black;\n    border-radius: 100px;\n    min-width: 1rem;\n    min-height: 1rem;\n    background-color: transparent;\n}\n\n.checkButtonActive{\n    background-color: var(--button-background-color-checklist-hover);\n}\n\n.checkButtonActiveText{\n    text-decoration: line-through;\n}\n\n.containerForInputs{\n    min-width: calc(32% - 1rem);\n    display: flex;\n    justify-content: flex-end;\n    gap:5%;\n}\n\n.dateInput{\n    background-color: transparent;\n}\n\n.colorInput{\n    width: 2rem;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/ui.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300&display=swap');\n\n:root{\n    --font-size-p: clamp(.5rem, 20px, 2rem);\n    --font-size-h3: 26px;\n    --font-size-h2: 32px;\n\n    --border-color-sidenav: #00000055;\n\n    --background-color-sidenav: #FCFCFC;\n    --background-color-header: #F3F3F3;\n    --button-background-color-add: #69ff6911;\n    --button-background-color-add-hover: #69ff6933;\n    --button-background-color-cancel: #ff6b6b11;;\n    --button-background-color-cancel-hover: #ff6b6b33;\n    --button-background-color-active: #DDD;\n    --button-background-color-hover: #EEE;\n    --button-background-color-checklist-hover: #00000099;\n    --border-color-add: #33ff33;\n    --border-color-cancel: #ff3333;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-family: 'Roboto', sans-serif;\n}\nbody{\n    height: 100dvh;\n    width: 100dvw;\n    overflow-y: hidden;\n    display: flex;\n}\n\n#sidenav{\n    display: flex;\n    flex-direction: column;\n    width: 15%;\n    min-width: 250px;\n    height: 100%;\n    background: var(--background-color-sidenav);\n    border-right: solid 0.5px var(--border-color-sidenav);\n}\n\n#sidenavButtonContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n.sidenavButton{\n    display: flex;\n    align-items: flex-end;\n    background: transparent;\n    width: 80%;\n    border-radius: 5px;\n    padding: 2%;\n    gap: 3%;\n    margin-top: 6%;\n    margin-left: 14%;\n    cursor: pointer;\n}\n\n.sidenavButton:hover{\n    background-color: var(--button-background-color-hover);\n}\n\n.buttonFocus{\n    background-color: var(--button-background-color-active) !important;\n}\n\n.sidenavButton:first-child{\n    margin-top: 30%;\n}\n\n.sidenavButtonText{\n    min-width: 65%;\n    max-width: 65%;\n    font-size: var(--font-size-p);\n    font-weight: 200;\n    margin-left: 2%;\n    padding: 0 1%;\n    border-radius: 10px;\n    text-align: left;\n    text-overflow:ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.sidenavButtonImg{\n    max-width: 1.5rem;\n    max-height: auto;\n}\n\n#sideNavProjectText{\n    padding-left: 10%;\n    margin-top: 20%;\n    padding-top: 5%;\n    font-size: var(--font-size-h3);\n    font-weight: 800;\n    border-top: solid 1px var(--border-color-sidenav);\n}\n\n#createProjectDiv{\n    display: flex;\n    flex-direction: column;\n}\n\n.pTButton{\n    background: transparent;\n    cursor: pointer;\n    display: flex;\n    width: 80%;\n    padding: 2%;\n    border-radius: 5px;\n    margin-left: 14%;\n    margin-top: 6%;\n    gap: .5rem;\n}\n\n.pTButton:hover{\n    background-color: var(--button-background-color-hover);\n}\n\n.pTButton:last-child{\n    gap: 2%;\n}\n\n#inputContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n#createProjectInput{\n    width: 80%;\n    align-self: center;\n    border: solid 1px var(--border-color-sidenav);\n    font-size: var(--font-size-p);\n    margin-bottom: 5%;\n    margin-top: 9%;\n}\n\n\n#createProjectDivButtons{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n}\n\n.addCancelButton{\n    width: 30%;\n    height: 100%;\n    max-width: 10rem;\n    cursor: pointer;\n    font-weight: bold;\n}\n\n#projectAdd{\n    background-color: var(--button-background-color-add);\n    border: solid 1px var(--border-color-add);\n}\n\n#projectAdd:hover{\n    background-color: var(--button-background-color-add-hover);\n}\n\n#projectCancel{\n    background-color: var(--button-background-color-cancel);\n    border: solid 1px var(--border-color-cancel);\n}\n\n#projectCancel:hover{\n    background-color: var(--button-background-color-cancel-hover);\n}\n\n.closeButton{\n    cursor: pointer;\n    background-color: transparent;\n    margin-right: 0;\n}\n\n\n#rightContainer{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n}\n\n#headerContainer{\n    background-color: var(--background-color-header);\n}\n\n#headerText{\n    font-style: oblique;\n    padding: 1%;\n    padding-left: 10%;\n    border-bottom: solid 1px var(--border-color-sidenav);\n}\n\n#mainContainer{\n    display: flex;\n    flex-direction: column;\n    margin: 2% 25%;\n}\n\n#mainSectionHeader{\n    font-size: var(--font-size-h2);\n    margin-bottom: 5%;\n}\n\n#createTaskInput{\n    font-size: var(--font-size-h3);\n    margin-bottom: 2%;\n}\n\n#taskContainer{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.taskButton{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    background-color: transparent;\n    cursor: pointer;\n    padding: 1%;\n    border-radius: 5px;\n}\n.taskButton:hover{\n    background-color: var(--button-background-color-hover);\n}\n\n.checkButton{\n    border: 1px solid black;\n    border-radius: 100px;\n    min-width: 1rem;\n    min-height: 1rem;\n    background-color: transparent;\n}\n\n.checkButtonActive{\n    background-color: var(--button-background-color-checklist-hover);\n}\n\n.checkButtonActiveText{\n    text-decoration: line-through;\n}\n\n.containerForInputs{\n    min-width: calc(32% - 1rem);\n    display: flex;\n    justify-content: flex-end;\n    gap:5%;\n}\n\n.dateInput{\n    background-color: transparent;\n}\n\n.colorInput{\n    width: 2rem;\n}\n"],"sourceRoot":""}]);
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
    for (let key of listOfProjectMaps.keys()){
        try{
            const localProject = localStorage.getItem(key.toString());
            listOfTasksMap = new Map(JSON.parse(localProject));
            listOfProjectMaps.set(key, listOfTasksMap);
        }
        catch(e){
            console.log("Error while getting listOfProjectMaps from localStorage" + e);
        }
        finally{
            continue;
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
        if (className == Array){
            addClassNamesToObject(div);
            return;
        }
        div.className = className;
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
        if (className == Array){
            addClassNamesToObject(text);
            return;
        }
        text.className = className;
    }
    return text;
}

function createImg(src, id = null, className = null){
    const img = document.createElement('img');
    img.src = src;

    if (id != null){
        img.id = id;
    }
    if (className !== null){
        if (className == Array){
            addClassNamesToObject(img);
            return;
        }
        img.className = className;
    }
    return img;
}

function createButton(id = null, className = null, buttonText = null){
    const button = document.createElement('button');
    if (id !== null){
        button.id = id;
    }
    if (className !== null){
        if (className == Array){
            addClassNamesToObject(button);
            return;
        }
        button.className = className;
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
        if (className == Array){
            addClassNamesToObject(input);
            return;
        }
        input.className = className;
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


function addClassNamesToObject(object){
    object.forEach(element => {
        object.classList.add(element);
    });
    return object;
}

function createSidenavButtons(name, img){
    const button = createButton(null, "sidenavButton");
    const buttonImg = createImg(img, null, "sidenavButtonImg");
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

function createPTButton(type, img, container){
    const button = createButton(type + "Button", "pTButton");
    const buttonImg = createImg(img, null, "sidenavButtonImg");
    const buttonText = createText("p", null, "sidenavButtonText", "Add "+ type);

    button.appendChild(buttonImg);
    button.appendChild(buttonText)
    button.addEventListener("click", function(){
    ;(0,_projectsAndTasks__WEBPACK_IMPORTED_MODULE_0__.buttonPTClicked)(type, button, container)
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
/* harmony export */   "buttonPTClicked": () => (/* binding */ buttonPTClicked),
/* harmony export */   "cancelInput": () => (/* binding */ cancelInput)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/pages/ui.js");



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

function buttonPTClicked(type, parentButton, container){
    try{
        parentButton.remove();
        (0,_ui__WEBPACK_IMPORTED_MODULE_1__.createInputForPT)(type, container);
    }
    catch(e){
        console.log("Can't create input for " + type + "\n" + e);
    }
}

function addProject(){
    return;
}

function cancelInput(){
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
    const projectAddButton = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createPTButton)("Project", _assets_images_add_svg__WEBPACK_IMPORTED_MODULE_4__, projectsContainer);

    projectsContainer.appendChild(projectAddButton);

    return projectsContainer;
}



function createRightSection(){
    const container = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createDiv)("container", "rightContainer");
    const header = createHeader();
    const mainSection = createMain();
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

function createMain(){
    const container = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createDiv)("container", "mainContainer");
    const inboxText = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createText)("h2", "mainSectionHeader", null, "Inbox");
    const taskContainer = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createDiv)("container", "taskContainer");
    const taskAddButton = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createPTButton)("Task", _assets_images_add_svg__WEBPACK_IMPORTED_MODULE_4__, taskContainer);

    container.appendChild(inboxText);
    container.appendChild(taskContainer);
    taskContainer.appendChild(taskAddButton);

    return container;
}

function createInputForPT(type, parentContainer){
    const container = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createDiv)("container", null, "inputContainer");
    const input = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createInput)(`create${type}Input`, "inputBox", "text", type + " name", true);
    const buttonContainer = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createDiv)("div", null, "acButtonsContainer");
    const addButton = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createButton)(type + "Add", "acButton", "Add");
    const cancelButton = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createButton)(type + "Cancel", "acButton", "Cancel");

    if (type === "project"){
        addButton.addEventListener("click", function(){
            addProject();
        });

    }
    if (type === "task"){
        addButton.addEventListener("click", function(){
            addTask();
        });
    }
    cancelButton.addEventListener("click", function(){
            cancelInput();
    });
    
    container.appendChild(input);
    container.appendChild(buttonContainer);
    buttonContainer.appendChild(addButton);
    buttonContainer.appendChild(cancelButton);


    parentContainer.appendChild(container);
    input.focus();
    return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFB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VTtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixvREFBUztBQUNyQztBQUNBLHlCQUF5QixxREFBUTtBQUNqQyx5QkFBeUIscURBQVE7QUFDakMsNEJBQTRCLG9EQUFPO0FBQ25DO0FBQ0EsZ0NBQWdDLCtEQUFvQjtBQUNwRCxnQ0FBZ0MsK0RBQW9CO0FBQ3BELGdDQUFnQywrREFBb0I7O0FBRXBEO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsb0RBQVM7QUFDdkMsNkJBQTZCLHlEQUFjLFlBQVksbURBQU07O0FBRTdEOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBLHNCQUFzQixvREFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLG9EQUFTO0FBQy9CLHFCQUFxQixxREFBVTs7QUFFL0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixvREFBUztBQUMvQixzQkFBc0IscURBQVU7QUFDaEMsMEJBQTBCLG9EQUFTO0FBQ25DLDBCQUEwQix5REFBYyxTQUFTLG1EQUFNOztBQUV2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQLHNCQUFzQixvREFBUztBQUMvQixrQkFBa0Isc0RBQVcsVUFBVSxLQUFLO0FBQzVDLDRCQUE0QixvREFBUztBQUNyQyxzQkFBc0IsdURBQVk7QUFDbEMseUJBQXlCLHVEQUFZOztBQUVyQztBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9vZGluLy4vc3JjL3N0eWxlcy91aS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9zcmMvc3R5bGVzL3VpLmNzcz84MWIzIiwid2VicGFjazovL3RvZG9vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9zcmMvcGFnZXMvYnVpbGRlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9zcmMvcGFnZXMvcHJvamVjdHNBbmRUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL3NyYy9wYWdlcy91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAgIC0tZm9udC1zaXplLXA6IGNsYW1wKC41cmVtLCAyMHB4LCAycmVtKTtcXG4gICAgLS1mb250LXNpemUtaDM6IDI2cHg7XFxuICAgIC0tZm9udC1zaXplLWgyOiAzMnB4O1xcblxcbiAgICAtLWJvcmRlci1jb2xvci1zaWRlbmF2OiAjMDAwMDAwNTU7XFxuXFxuICAgIC0tYmFja2dyb3VuZC1jb2xvci1zaWRlbmF2OiAjRkNGQ0ZDO1xcbiAgICAtLWJhY2tncm91bmQtY29sb3ItaGVhZGVyOiAjRjNGM0YzO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWFkZDogIzY5ZmY2OTExO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWFkZC1ob3ZlcjogIzY5ZmY2OTMzO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWNhbmNlbDogI2ZmNmI2YjExOztcXG4gICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1jYW5jZWwtaG92ZXI6ICNmZjZiNmIzMztcXG4gICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1hY3RpdmU6ICNEREQ7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItaG92ZXI6ICNFRUU7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItY2hlY2tsaXN0LWhvdmVyOiAjMDAwMDAwOTk7XFxuICAgIC0tYm9yZGVyLWNvbG9yLWFkZDogIzMzZmYzMztcXG4gICAgLS1ib3JkZXItY29sb3ItY2FuY2VsOiAjZmYzMzMzO1xcbn1cXG5cXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMGR2aDtcXG4gICAgd2lkdGg6IDEwMGR2dztcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc2lkZW5hdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXNpZGVuYXYpO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDAuNXB4IHZhcigtLWJvcmRlci1jb2xvci1zaWRlbmF2KTtcXG59XFxuXFxuI3NpZGVuYXZCdXR0b25Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaWRlbmF2QnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBnYXA6IDMlO1xcbiAgICBtYXJnaW4tdG9wOiA2JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDE0JTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZW5hdkJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4uYnV0dG9uRm9jdXN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWFjdGl2ZSkgIWltcG9ydGFudDtcXG59XFxuXFxuLnNpZGVuYXZCdXR0b246Zmlyc3QtY2hpbGR7XFxuICAgIG1hcmdpbi10b3A6IDMwJTtcXG59XFxuXFxuLnNpZGVuYXZCdXR0b25UZXh0e1xcbiAgICBtaW4td2lkdGg6IDY1JTtcXG4gICAgbWF4LXdpZHRoOiA2NSU7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXApO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBtYXJnaW4tbGVmdDogMiU7XFxuICAgIHBhZGRpbmc6IDAgMSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5zaWRlbmF2QnV0dG9uSW1ne1xcbiAgICBtYXgtd2lkdGg6IDEuNXJlbTtcXG4gICAgbWF4LWhlaWdodDogYXV0bztcXG59XFxuXFxuI3NpZGVOYXZQcm9qZWN0VGV4dHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi10b3A6IDIwJTtcXG4gICAgcGFkZGluZy10b3A6IDUlO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3Itc2lkZW5hdik7XFxufVxcblxcbiNjcmVhdGVQcm9qZWN0RGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucFRCdXR0b257XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNCU7XFxuICAgIG1hcmdpbi10b3A6IDYlO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4ucFRCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLnBUQnV0dG9uOmxhc3QtY2hpbGR7XFxuICAgIGdhcDogMiU7XFxufVxcblxcbiNpbnB1dENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NyZWF0ZVByb2plY3RJbnB1dHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3Itc2lkZW5hdik7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXApO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXG4gICAgbWFyZ2luLXRvcDogOSU7XFxufVxcblxcblxcbiNjcmVhdGVQcm9qZWN0RGl2QnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNSU7XFxufVxcblxcbi5hZGRDYW5jZWxCdXR0b257XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMHJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3Byb2plY3RBZGR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWFkZCk7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvci1hZGQpO1xcbn1cXG5cXG4jcHJvamVjdEFkZDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItYWRkLWhvdmVyKTtcXG59XFxuXFxuI3Byb2plY3RDYW5jZWx7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWNhbmNlbCk7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvci1jYW5jZWwpO1xcbn1cXG5cXG4jcHJvamVjdENhbmNlbDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItY2FuY2VsLWhvdmVyKTtcXG59XFxuXFxuLmNsb3NlQnV0dG9ue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcblxcbiNyaWdodENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNoZWFkZXJDb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItaGVhZGVyKTtcXG59XFxuXFxuI2hlYWRlclRleHR7XFxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvci1zaWRlbmF2KTtcXG59XFxuXFxuI21haW5Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMiUgMjUlO1xcbn1cXG5cXG4jbWFpblNlY3Rpb25IZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgyKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxufVxcblxcbiNjcmVhdGVUYXNrSW5wdXR7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgzKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XFxufVxcblxcbiN0YXNrQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YXNrQnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnRhc2tCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLmNoZWNrQnV0dG9ue1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIG1pbi13aWR0aDogMXJlbTtcXG4gICAgbWluLWhlaWdodDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5jaGVja0J1dHRvbkFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItY2hlY2tsaXN0LWhvdmVyKTtcXG59XFxuXFxuLmNoZWNrQnV0dG9uQWN0aXZlVGV4dHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5jb250YWluZXJGb3JJbnB1dHN7XFxuICAgIG1pbi13aWR0aDogY2FsYygzMiUgLSAxcmVtKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOjUlO1xcbn1cXG5cXG4uZGF0ZUlucHV0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNvbG9ySW5wdXR7XFxuICAgIHdpZHRoOiAycmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3VpLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHVDQUF1QztJQUN2QyxvQkFBb0I7SUFDcEIsb0JBQW9COztJQUVwQixpQ0FBaUM7O0lBRWpDLG1DQUFtQztJQUNuQyxrQ0FBa0M7SUFDbEMsd0NBQXdDO0lBQ3hDLDhDQUE4QztJQUM5QywyQ0FBMkM7SUFDM0MsaURBQWlEO0lBQ2pELHNDQUFzQztJQUN0QyxxQ0FBcUM7SUFDckMsb0RBQW9EO0lBQ3BELDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGNBQWM7SUFDZCxh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QixNQUFNO0FBQ1Y7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdHtcXG4gICAgLS1mb250LXNpemUtcDogY2xhbXAoLjVyZW0sIDIwcHgsIDJyZW0pO1xcbiAgICAtLWZvbnQtc2l6ZS1oMzogMjZweDtcXG4gICAgLS1mb250LXNpemUtaDI6IDMycHg7XFxuXFxuICAgIC0tYm9yZGVyLWNvbG9yLXNpZGVuYXY6ICMwMDAwMDA1NTtcXG5cXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yLXNpZGVuYXY6ICNGQ0ZDRkM7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvci1oZWFkZXI6ICNGM0YzRjM7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItYWRkOiAjNjlmZjY5MTE7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItYWRkLWhvdmVyOiAjNjlmZjY5MzM7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItY2FuY2VsOiAjZmY2YjZiMTE7O1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWNhbmNlbC1ob3ZlcjogI2ZmNmI2YjMzO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWFjdGl2ZTogI0RERDtcXG4gICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogI0VFRTtcXG4gICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1jaGVja2xpc3QtaG92ZXI6ICMwMDAwMDA5OTtcXG4gICAgLS1ib3JkZXItY29sb3ItYWRkOiAjMzNmZjMzO1xcbiAgICAtLWJvcmRlci1jb2xvci1jYW5jZWw6ICNmZjMzMzM7XFxufVxcblxcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwZHZoO1xcbiAgICB3aWR0aDogMTAwZHZ3O1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzaWRlbmF2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3Itc2lkZW5hdik7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMC41cHggdmFyKC0tYm9yZGVyLWNvbG9yLXNpZGVuYXYpO1xcbn1cXG5cXG4jc2lkZW5hdkJ1dHRvbkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNpZGVuYXZCdXR0b257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGdhcDogMyU7XFxuICAgIG1hcmdpbi10b3A6IDYlO1xcbiAgICBtYXJnaW4tbGVmdDogMTQlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlbmF2QnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5idXR0b25Gb2N1c3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItYWN0aXZlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2lkZW5hdkJ1dHRvbjpmaXJzdC1jaGlsZHtcXG4gICAgbWFyZ2luLXRvcDogMzAlO1xcbn1cXG5cXG4uc2lkZW5hdkJ1dHRvblRleHR7XFxuICAgIG1pbi13aWR0aDogNjUlO1xcbiAgICBtYXgtd2lkdGg6IDY1JTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtcCk7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcXG4gICAgcGFkZGluZzogMCAxJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnNpZGVuYXZCdXR0b25JbWd7XFxuICAgIG1heC13aWR0aDogMS41cmVtO1xcbiAgICBtYXgtaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4jc2lkZU5hdlByb2plY3RUZXh0e1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gICAgbWFyZ2luLXRvcDogMjAlO1xcbiAgICBwYWRkaW5nLXRvcDogNSU7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgzKTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvci1zaWRlbmF2KTtcXG59XFxuXFxuI2NyZWF0ZVByb2plY3REaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wVEJ1dHRvbntcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE0JTtcXG4gICAgbWFyZ2luLXRvcDogNiU7XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbi5wVEJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4ucFRCdXR0b246bGFzdC1jaGlsZHtcXG4gICAgZ2FwOiAyJTtcXG59XFxuXFxuI2lucHV0Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jY3JlYXRlUHJvamVjdElucHV0e1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvci1zaWRlbmF2KTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtcCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcbiAgICBtYXJnaW4tdG9wOiA5JTtcXG59XFxuXFxuXFxuI2NyZWF0ZVByb2plY3REaXZCdXR0b25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1JTtcXG59XFxuXFxuLmFkZENhbmNlbEJ1dHRvbntcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jcHJvamVjdEFkZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItYWRkKTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yLWFkZCk7XFxufVxcblxcbiNwcm9qZWN0QWRkOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1hZGQtaG92ZXIpO1xcbn1cXG5cXG4jcHJvamVjdENhbmNlbHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItY2FuY2VsKTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yLWNhbmNlbCk7XFxufVxcblxcbiNwcm9qZWN0Q2FuY2VsOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1jYW5jZWwtaG92ZXIpO1xcbn1cXG5cXG4uY2xvc2VCdXR0b257XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG59XFxuXFxuXFxuI3JpZ2h0Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2hlYWRlckNvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1oZWFkZXIpO1xcbn1cXG5cXG4jaGVhZGVyVGV4dHtcXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yLXNpZGVuYXYpO1xcbn1cXG5cXG4jbWFpbkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAyJSAyNSU7XFxufVxcblxcbiNtYWluU2VjdGlvbkhlYWRlcntcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDIpO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXG59XFxuXFxuI2NyZWF0ZVRhc2tJbnB1dHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDMpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcXG59XFxuXFxuI3Rhc2tDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRhc2tCdXR0b257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4udGFza0J1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4uY2hlY2tCdXR0b257XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgbWluLXdpZHRoOiAxcmVtO1xcbiAgICBtaW4taGVpZ2h0OiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNoZWNrQnV0dG9uQWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1jaGVja2xpc3QtaG92ZXIpO1xcbn1cXG5cXG4uY2hlY2tCdXR0b25BY3RpdmVUZXh0e1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmNvbnRhaW5lckZvcklucHV0c3tcXG4gICAgbWluLXdpZHRoOiBjYWxjKDMyJSAtIDFyZW0pO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6NSU7XFxufVxcblxcbi5kYXRlSW5wdXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uY29sb3JJbnB1dHtcXG4gICAgd2lkdGg6IDJyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VpLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdWkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB0ZXN0RnVuY3Rpb24gfSBmcm9tIFwiLi9wYWdlcy9wcm9qZWN0c0FuZFRhc2tzXCI7XG5pbXBvcnQgeyBjcmVhdGVVSSB9IGZyb20gXCIuL3BhZ2VzL3VpXCI7XG5cbmV4cG9ydCBsZXQgbGlzdE9mUHJvamVjdE1hcHMgPSBuZXcgTWFwO1xubGV0IGxpc3RPZlRhc2tzTWFwID0gbmV3IE1hcDtcbmV4cG9ydCBsZXQgbG9jYWxTdG9yYWdlRXhpc3RzID0gZmFsc2U7XG5cblxuY3JlYXRlVUkoKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgY2hlY2tMb2NhbFN0b3JhZ2UoKTtcbiAgfSk7XG5cblxuZnVuY3Rpb24gY2hlY2tMb2NhbFN0b3JhZ2UoKXtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgICBjaGVja0ZvclByb2plY3RMaXN0KCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZUV4aXN0cyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0T2ZQcm9qZWN0TWFwcy5zZXQoXCJJbmJveFwiLCBsaXN0T2ZUYXNrc01hcCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICBsZXQgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gXG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICBzdG9yYWdlICYmXG4gICAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgICApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JQcm9qZWN0TGlzdCgpe1xuICAgIGNvbnN0IGxvY2FsU3RvcmFnZVByb2plY3RMaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsaXN0T2ZQcm9qZWN0TWFwc1wiKTtcbiAgICBsaXN0T2ZQcm9qZWN0TWFwcyA9IG5ldyBNYXAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VQcm9qZWN0TGlzdCkpO1xuICAgIGZvciAobGV0IGtleSBvZiBsaXN0T2ZQcm9qZWN0TWFwcy5rZXlzKCkpe1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFByb2plY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBsaXN0T2ZUYXNrc01hcCA9IG5ldyBNYXAoSlNPTi5wYXJzZShsb2NhbFByb2plY3QpKTtcbiAgICAgICAgICAgIGxpc3RPZlByb2plY3RNYXBzLnNldChrZXksIGxpc3RPZlRhc2tzTWFwKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hpbGUgZ2V0dGluZyBsaXN0T2ZQcm9qZWN0TWFwcyBmcm9tIGxvY2FsU3RvcmFnZVwiICsgZSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseXtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybjtcbn0iLCJpbXBvcnQgeyBidXR0b25QVENsaWNrZWQgfSBmcm9tIFwiLi9wcm9qZWN0c0FuZFRhc2tzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXYodHlwZSwgaWQgPSBudWxsLCBjbGFzc05hbWUgPSBudWxsKXtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXG4gICAgaWYgKGlkICE9PSBudWxsKSB7XG4gICAgICAgIGRpdi5pZCA9IGlkO1xuICAgIH1cbiAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKXtcbiAgICAgICAgaWYgKGNsYXNzTmFtZSA9PSBBcnJheSl7XG4gICAgICAgICAgICBhZGRDbGFzc05hbWVzVG9PYmplY3QoZGl2KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkaXYuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIH1cbiAgICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGV4dCh0eXBlLCBpZCA9IG51bGwsIGNsYXNzTmFtZSA9IG51bGwsIHRleHRWYWx1ZSA9IG51bGwpe1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSB0ZXh0VmFsdWU7XG5cbiAgICBpZiAoaWQgIT09IG51bGwpe1xuICAgICAgICB0ZXh0LmlkID0gaWQ7XG4gICAgfVxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpe1xuICAgICAgICBpZiAoY2xhc3NOYW1lID09IEFycmF5KXtcbiAgICAgICAgICAgIGFkZENsYXNzTmFtZXNUb09iamVjdCh0ZXh0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0ZXh0LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWcoc3JjLCBpZCA9IG51bGwsIGNsYXNzTmFtZSA9IG51bGwpe1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSBzcmM7XG5cbiAgICBpZiAoaWQgIT0gbnVsbCl7XG4gICAgICAgIGltZy5pZCA9IGlkO1xuICAgIH1cbiAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKXtcbiAgICAgICAgaWYgKGNsYXNzTmFtZSA9PSBBcnJheSl7XG4gICAgICAgICAgICBhZGRDbGFzc05hbWVzVG9PYmplY3QoaW1nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpbWcuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIH1cbiAgICByZXR1cm4gaW1nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnV0dG9uKGlkID0gbnVsbCwgY2xhc3NOYW1lID0gbnVsbCwgYnV0dG9uVGV4dCA9IG51bGwpe1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGlmIChpZCAhPT0gbnVsbCl7XG4gICAgICAgIGJ1dHRvbi5pZCA9IGlkO1xuICAgIH1cbiAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKXtcbiAgICAgICAgaWYgKGNsYXNzTmFtZSA9PSBBcnJheSl7XG4gICAgICAgICAgICBhZGRDbGFzc05hbWVzVG9PYmplY3QoYnV0dG9uKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIH1cbiAgICBpZiAoYnV0dG9uVGV4dCAhPT0gbnVsbCl7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGJ1dHRvblRleHQ7XG4gICAgfVxuICAgIHJldHVybiBidXR0b247XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUlucHV0KGlkID0gbnVsbCwgY2xhc3NOYW1lID0gbnVsbCwgdHlwZU9mSW5wdXQgPSBudWxsLCBwbGFjZWhvbGRlciA9IG51bGwsIGZvY3VzID0gbnVsbCl7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlmIChpZCAhPT0gbnVsbCl7XG4gICAgICAgIGlucHV0LmlkID0gaWQ7XG4gICAgfVxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpe1xuICAgICAgICBpZiAoY2xhc3NOYW1lID09IEFycmF5KXtcbiAgICAgICAgICAgIGFkZENsYXNzTmFtZXNUb09iamVjdChpbnB1dCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIH1cbiAgICBpZiAodHlwZU9mSW5wdXQgIT09IG51bGwpe1xuICAgICAgICBpbnB1dC50eXBlID0gdHlwZU9mSW5wdXQ7XG4gICAgfVxuICAgIGlmICh0eXBlT2ZJbnB1dCAhPT0gbnVsbCl7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgfVxuICAgIGlmIChmb2N1cyAhPT0gbnVsbCAmJiBmb2N1cyA9PSB0cnVlKXtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICB9XG4gICAgcmV0dXJuIGlucHV0O1xufVxuXG5cbmZ1bmN0aW9uIGFkZENsYXNzTmFtZXNUb09iamVjdChvYmplY3Qpe1xuICAgIG9iamVjdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBvYmplY3QuY2xhc3NMaXN0LmFkZChlbGVtZW50KTtcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2lkZW5hdkJ1dHRvbnMobmFtZSwgaW1nKXtcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24obnVsbCwgXCJzaWRlbmF2QnV0dG9uXCIpO1xuICAgIGNvbnN0IGJ1dHRvbkltZyA9IGNyZWF0ZUltZyhpbWcsIG51bGwsIFwic2lkZW5hdkJ1dHRvbkltZ1wiKTtcbiAgICBjb25zdCBidXR0b25UZXh0ID0gY3JlYXRlVGV4dChcInBcIiwgbnVsbCwgXCJzaWRlbmF2QnV0dG9uVGV4dFwiLCBuYW1lKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uSW1nKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uVGV4dCk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBzaWRlbmF2QnV0dG9uRm9jdXMoYnV0dG9uKTtcbiAgICB9KVxuICAgIGlmIChuYW1lID09PSBcIkluYm94XCIpe1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbkZvY3VzXCIpO1xuICAgIH1cbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBzaWRlbmF2QnV0dG9uRm9jdXMobmFtZSl7XG4gICAgY29uc3QgYnV0dG9uRm9jdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbkZvY3VzXCIpO1xuICAgIGlmICghYnV0dG9uRm9jdXMpe1xuICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJidXR0b25Gb2N1c1wiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBidXR0b25Gb2N1cy5jbGFzc0xpc3QucmVtb3ZlKFwiYnV0dG9uRm9jdXNcIik7XG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uRm9jdXNcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQVEJ1dHRvbih0eXBlLCBpbWcsIGNvbnRhaW5lcil7XG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKHR5cGUgKyBcIkJ1dHRvblwiLCBcInBUQnV0dG9uXCIpO1xuICAgIGNvbnN0IGJ1dHRvbkltZyA9IGNyZWF0ZUltZyhpbWcsIG51bGwsIFwic2lkZW5hdkJ1dHRvbkltZ1wiKTtcbiAgICBjb25zdCBidXR0b25UZXh0ID0gY3JlYXRlVGV4dChcInBcIiwgbnVsbCwgXCJzaWRlbmF2QnV0dG9uVGV4dFwiLCBcIkFkZCBcIisgdHlwZSk7XG5cbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uSW1nKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uVGV4dClcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgYnV0dG9uUFRDbGlja2VkKHR5cGUsIGJ1dHRvbiwgY29udGFpbmVyKVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbn0iLCJpbXBvcnQgeyBsaXN0T2ZUYXNrc01hcCwgbGlzdE9mUHJvamVjdE1hcHMgfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IGNyZWF0ZUlucHV0Rm9yUFQgfSBmcm9tIFwiLi91aVwiO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gdGVzdEZ1bmN0aW9uKCl7XG4vLyAgICAgbGV0IGxpc3RPZlRhc2tzTWFwID0gbmV3IE1hcDtcblxuLy8gICAgIGZvcihsZXQgaSA9IDA7IGkgPCA0OyBpKyspe1xuLy8gICAgICAgICBsaXN0T2ZUYXNrc01hcC5zZXQoXCJUYXNrXCIraSwgW1wiY29sb3JcIitpLCBcImRhdGVcIiwgZmFsc2VdKTtcbi8vICAgICAgICAgbGlzdE9mUHJvamVjdE1hcHMuc2V0KFwiSW5ib3hcIiwgbGlzdE9mVGFza3NNYXApO1xuLy8gICAgIH1cbi8vICAgICBsaXN0T2ZUYXNrc01hcCA9IG5ldyBNYXA7XG4vLyAgICAgZm9yKGxldCBqID0gMDsgaiA8IDQ7IGorKyl7XG5cbi8vICAgICAgICAgbGlzdE9mVGFza3NNYXAuc2V0KFwiVGFza0luUHJvamVjdDFcIitqLCBbXCJjb2xvclwiK2osIFwiZGF0ZVwiLCB0cnVlXSk7XG4vLyAgICAgICAgIGxpc3RPZlByb2plY3RNYXBzLnNldChcIlByb2pla3QxXCIsIGxpc3RPZlRhc2tzTWFwKTtcblxuLy8gICAgIH1cbi8vICAgICBwdXNoQ2hhbmdlc1RvTG9jYWxTdG9yYWdlKClcbi8vIH1cblxuZnVuY3Rpb24gcHVzaENoYW5nZXNUb0xvY2FsU3RvcmFnZSgpe1xuICAgIHRyeXtcbiAgICAgICAgZm9yKGxldCBrZXkgb2YgbGlzdE9mUHJvamVjdE1hcHMua2V5cygpKXtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RPZktleXMgPSBsaXN0T2ZQcm9qZWN0TWFwcy5nZXQoa2V5KS5lbnRyaWVzKCk7XG4gICAgICAgICAgICBjb25zdCBsaXN0T2ZLZXlzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoQXJyYXkuZnJvbShsaXN0T2ZLZXlzKSk7XG5cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgbGlzdE9mS2V5c1N0cmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGlzdE9mUHJvamVjdE1hcHNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShBcnJheS5mcm9tKGxpc3RPZlByb2plY3RNYXBzLmVudHJpZXMoKSkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RPZlByb2plY3RNYXBzXCIsIGxpc3RPZlByb2plY3RNYXBzU3RyaW5nKTtcbiAgICB9XG4gICAgY2F0Y2goZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2l0aCB3cml0aW5nIGluZm8gdG8gbG9jYWwgc3RvcmFnZVxcblwiICsgZSk7XG4gICAgfVxuICAgIGZpbmFsbHl7XG4gICAgICAgIGNvbnNvbGUubG9nKGxpc3RPZlByb2plY3RNYXBzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidXR0b25QVENsaWNrZWQodHlwZSwgcGFyZW50QnV0dG9uLCBjb250YWluZXIpe1xuICAgIHRyeXtcbiAgICAgICAgcGFyZW50QnV0dG9uLnJlbW92ZSgpO1xuICAgICAgICBjcmVhdGVJbnB1dEZvclBUKHR5cGUsIGNvbnRhaW5lcik7XG4gICAgfVxuICAgIGNhdGNoKGUpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNhbid0IGNyZWF0ZSBpbnB1dCBmb3IgXCIgKyB0eXBlICsgXCJcXG5cIiArIGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QoKXtcbiAgICByZXR1cm47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5jZWxJbnB1dCgpe1xuICAgIHJldHVybjtcbn0iLCJpbXBvcnQgJy4uL3N0eWxlcy91aS5jc3MnO1xuaW1wb3J0IGltZ0luYm94IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaW5ib3guc3ZnJztcbmltcG9ydCBpbWdUb2RheSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3RvZGF5LnN2Zyc7XG5pbXBvcnQgaW1nV2VlayBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3dlZWsuc3ZnJztcbmltcG9ydCBpbWdBZGQgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9hZGQuc3ZnJztcbmltcG9ydCBpbWdDbG9zZSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2Nsb3NlLnN2Zyc7XG5pbXBvcnQgaW1nTGlzdCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2xpc3Quc3ZnJztcbmltcG9ydCB7IGNyZWF0ZURpdiwgY3JlYXRlVGV4dCwgY3JlYXRlSW1nLCBjcmVhdGVCdXR0b24sIGNyZWF0ZUlucHV0LCBjcmVhdGVTaWRlbmF2QnV0dG9ucywgY3JlYXRlUFRCdXR0b24gfSBmcm9tIFwiLi9idWlsZGVyc1wiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVSSgpe1xuICAgIHRyeXtcbiAgICAgICAgY3JlYXRlU2lkZW5hdigpO1xuICAgICAgICBjcmVhdGVSaWdodFNlY3Rpb24oKTtcbiAgICB9XG4gICAgY2F0Y2goZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJvYmxlbSB3aXRoIGNyZWF0aW5nIHNpZGVuYXZcXG5cIiArIGUpO1xuICAgIH1cbiAgICBcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZW5hdigpe1xuICAgIGNvbnN0IHNpZGVuYXZDb250YWluZXIgPSBjcmVhdGVEaXYoXCJzaWRlbmF2XCIsIFwic2lkZW5hdlwiKTtcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBjcmVhdGVCdXR0b25Db250YWluZXIoKTtcbiAgICBjb25zdCBwcm9qZWN0VGV4dCA9IGNyZWF0ZVRleHQoXCJkaXZcIiwgXCJzaWRlTmF2UHJvamVjdFRleHRcIiwgbnVsbCwgXCJQcm9qZWN0c1wiKTtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGNyZWF0ZVByb2plY3RzQ29udGFpbmVyKCk7XG5cbiAgICBzaWRlbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgc2lkZW5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0VGV4dCk7XG4gICAgc2lkZW5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzaWRlbmF2Q29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uQ29udGFpbmVyKCl7XG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gY3JlYXRlRGl2KFwiY29udGFpbmVyXCIsIFwic2lkZW5hdkJ1dHRvbkNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBidXR0b25zID0ge1xuICAgICAgICBJbmJveDogW1wiSW5ib3hcIiwgaW1nSW5ib3hdLFxuICAgICAgICBUb2RheTogW1wiVG9kYXlcIiwgaW1nVG9kYXldLFxuICAgICAgICBXZWVrOiBbXCJUaGlzIHdlZWtcIiwgaW1nV2Vla11cbiAgICB9XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVNpZGVuYXZCdXR0b25zKGJ1dHRvbnMuSW5ib3hbMF0sIGJ1dHRvbnMuSW5ib3hbMV0pKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2lkZW5hdkJ1dHRvbnMoYnV0dG9ucy5Ub2RheVswXSwgYnV0dG9ucy5Ub2RheVsxXSkpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTaWRlbmF2QnV0dG9ucyhidXR0b25zLldlZWtbMF0sIGJ1dHRvbnMuV2Vla1sxXSkpO1xuXG4gICAgcmV0dXJuIGJ1dHRvbkNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdHNDb250YWluZXIoKXtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGNyZWF0ZURpdihcImNvbnRhaW5lclwiLCBcInByb2plY3RzQ29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHByb2plY3RBZGRCdXR0b24gPSBjcmVhdGVQVEJ1dHRvbihcIlByb2plY3RcIiwgaW1nQWRkLCBwcm9qZWN0c0NvbnRhaW5lcik7XG5cbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0QWRkQnV0dG9uKTtcblxuICAgIHJldHVybiBwcm9qZWN0c0NvbnRhaW5lcjtcbn1cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVJpZ2h0U2VjdGlvbigpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZURpdihcImNvbnRhaW5lclwiLCBcInJpZ2h0Q29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcigpO1xuICAgIGNvbnN0IG1haW5TZWN0aW9uID0gY3JlYXRlTWFpbigpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluU2VjdGlvbik7XG5cbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVEaXYoXCJjb250YWluZXJcIiwgXCJoZWFkZXJDb250YWluZXJcIik7XG4gICAgY29uc3QgbG9nb1RleHQgPSBjcmVhdGVUZXh0KFwiaDFcIiwgXCJoZWFkZXJUZXh0XCIsIG51bGwsIFwiTGlzdCBkb1RvXCIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29UZXh0KTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVEaXYoXCJjb250YWluZXJcIiwgXCJtYWluQ29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGluYm94VGV4dCA9IGNyZWF0ZVRleHQoXCJoMlwiLCBcIm1haW5TZWN0aW9uSGVhZGVyXCIsIG51bGwsIFwiSW5ib3hcIik7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGNyZWF0ZURpdihcImNvbnRhaW5lclwiLCBcInRhc2tDb250YWluZXJcIik7XG4gICAgY29uc3QgdGFza0FkZEJ1dHRvbiA9IGNyZWF0ZVBUQnV0dG9uKFwiVGFza1wiLCBpbWdBZGQsIHRhc2tDb250YWluZXIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluYm94VGV4dCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0FkZEJ1dHRvbik7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5wdXRGb3JQVCh0eXBlLCBwYXJlbnRDb250YWluZXIpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZURpdihcImNvbnRhaW5lclwiLCBudWxsLCBcImlucHV0Q29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlSW5wdXQoYGNyZWF0ZSR7dHlwZX1JbnB1dGAsIFwiaW5wdXRCb3hcIiwgXCJ0ZXh0XCIsIHR5cGUgKyBcIiBuYW1lXCIsIHRydWUpO1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGNyZWF0ZURpdihcImRpdlwiLCBudWxsLCBcImFjQnV0dG9uc0NvbnRhaW5lclwiKTtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBjcmVhdGVCdXR0b24odHlwZSArIFwiQWRkXCIsIFwiYWNCdXR0b25cIiwgXCJBZGRcIik7XG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gY3JlYXRlQnV0dG9uKHR5cGUgKyBcIkNhbmNlbFwiLCBcImFjQnV0dG9uXCIsIFwiQ2FuY2VsXCIpO1xuXG4gICAgaWYgKHR5cGUgPT09IFwicHJvamVjdFwiKXtcbiAgICAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgYWRkUHJvamVjdCgpO1xuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gXCJ0YXNrXCIpe1xuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhZGRUYXNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjYW5jZWxJbnB1dCgpO1xuICAgIH0pO1xuICAgIFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cblxuICAgIHBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIGlucHV0LmZvY3VzKCk7XG4gICAgcmV0dXJuO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=