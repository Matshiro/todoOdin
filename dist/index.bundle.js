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

localStorage.clear();
(0,_pages_ui__WEBPACK_IMPORTED_MODULE_1__.createUI)();
(0,_pages_projectsAndTasks__WEBPACK_IMPORTED_MODULE_0__.testFunction)();

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


function createInput(id = null, className = null, typeOfInput = null){
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

function createPTButton(type, img){
    const button = createButton(type + "Button", "pTButton");
    const buttonImg = createImg(img, null, "sidenavButtonImg");
    const buttonText = createText("p", null, "sidenavButtonText", "Add "+ type);

    button.appendChild(buttonImg);
    button.appendChild(buttonText)
    button.addEventListener("click", function(){
        if (type === "Project"){
            addNewProject();
            return;
        }
        addNewTask();

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
/* harmony export */   "testFunction": () => (/* binding */ testFunction)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");


function testFunction(){
    let listOfTasksMap = new Map;

    for(let i = 0; i < 4; i++){
        listOfTasksMap.set("Task"+i, ["color"+i, "date", false]);
        ___WEBPACK_IMPORTED_MODULE_0__.listOfProjectMaps.set("Inbox", listOfTasksMap);
    }
    listOfTasksMap = new Map;
    for(let j = 0; j < 4; j++){

        listOfTasksMap.set("TaskInProject1"+j, ["color"+j, "date", true]);
        ___WEBPACK_IMPORTED_MODULE_0__.listOfProjectMaps.set("Projekt1", listOfTasksMap);

    }
    pushChangesToLocalStorage()
}

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

/***/ }),

/***/ "./src/pages/ui.js":
/*!*************************!*\
  !*** ./src/pages/ui.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
    const projectAddButton = (0,_builders__WEBPACK_IMPORTED_MODULE_7__.createPTButton)("Project", _assets_images_add_svg__WEBPACK_IMPORTED_MODULE_4__);

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

    container.appendChild(inboxText);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFB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QkFBeUIscURBQVE7QUFDakMsNEJBQTRCLG9EQUFPO0FBQ25DO0FBQ0EsZ0NBQWdDLCtEQUFvQjtBQUNwRCxnQ0FBZ0MsK0RBQW9CO0FBQ3BELGdDQUFnQywrREFBb0I7O0FBRXBEO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsb0RBQVM7QUFDdkMsNkJBQTZCLHlEQUFjLFlBQVksbURBQU07O0FBRTdEOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBLHNCQUFzQixvREFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLG9EQUFTO0FBQy9CLHFCQUFxQixxREFBVTs7QUFFL0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixvREFBUztBQUMvQixzQkFBc0IscURBQVU7QUFDaEMsMEJBQTBCLG9EQUFTOztBQUVuQztBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL3NyYy9zdHlsZXMvdWkuY3NzIiwid2VicGFjazovL3RvZG9vZGluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vc3JjL3N0eWxlcy91aS5jc3M/ODFiMyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vc3JjL3BhZ2VzL2J1aWxkZXJzLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vc3JjL3BhZ2VzL3Byb2plY3RzQW5kVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9zcmMvcGFnZXMvdWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgICAtLWZvbnQtc2l6ZS1wOiBjbGFtcCguNXJlbSwgMjBweCwgMnJlbSk7XFxuICAgIC0tZm9udC1zaXplLWgzOiAyNnB4O1xcbiAgICAtLWZvbnQtc2l6ZS1oMjogMzJweDtcXG5cXG4gICAgLS1ib3JkZXItY29sb3Itc2lkZW5hdjogIzAwMDAwMDU1O1xcblxcbiAgICAtLWJhY2tncm91bmQtY29sb3Itc2lkZW5hdjogI0ZDRkNGQztcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yLWhlYWRlcjogI0YzRjNGMztcXG4gICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1hZGQ6ICM2OWZmNjkxMTtcXG4gICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1hZGQtaG92ZXI6ICM2OWZmNjkzMztcXG4gICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1jYW5jZWw6ICNmZjZiNmIxMTs7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItY2FuY2VsLWhvdmVyOiAjZmY2YjZiMzM7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItYWN0aXZlOiAjREREO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiAjRUVFO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWNoZWNrbGlzdC1ob3ZlcjogIzAwMDAwMDk5O1xcbiAgICAtLWJvcmRlci1jb2xvci1hZGQ6ICMzM2ZmMzM7XFxuICAgIC0tYm9yZGVyLWNvbG9yLWNhbmNlbDogI2ZmMzMzMztcXG59XFxuXFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDBkdmg7XFxuICAgIHdpZHRoOiAxMDBkdnc7XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZGVuYXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1zaWRlbmF2KTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAwLjVweCB2YXIoLS1ib3JkZXItY29sb3Itc2lkZW5hdik7XFxufVxcblxcbiNzaWRlbmF2QnV0dG9uQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2lkZW5hdkJ1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgZ2FwOiAzJTtcXG4gICAgbWFyZ2luLXRvcDogNiU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGVuYXZCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLmJ1dHRvbkZvY3Vze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1hY3RpdmUpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zaWRlbmF2QnV0dG9uOmZpcnN0LWNoaWxke1xcbiAgICBtYXJnaW4tdG9wOiAzMCU7XFxufVxcblxcbi5zaWRlbmF2QnV0dG9uVGV4dHtcXG4gICAgbWluLXdpZHRoOiA2NSU7XFxuICAgIG1heC13aWR0aDogNjUlO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1wKTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xcbiAgICBwYWRkaW5nOiAwIDElO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uc2lkZW5hdkJ1dHRvbkltZ3tcXG4gICAgbWF4LXdpZHRoOiAxLjVyZW07XFxuICAgIG1heC1oZWlnaHQ6IGF1dG87XFxufVxcblxcbiNzaWRlTmF2UHJvamVjdFRleHR7XFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgICBtYXJnaW4tdG9wOiAyMCU7XFxuICAgIHBhZGRpbmctdG9wOiA1JTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDMpO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yLXNpZGVuYXYpO1xcbn1cXG5cXG4jY3JlYXRlUHJvamVjdERpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBUQnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTQlO1xcbiAgICBtYXJnaW4tdG9wOiA2JTtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLnBUQnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5wVEJ1dHRvbjpsYXN0LWNoaWxke1xcbiAgICBnYXA6IDIlO1xcbn1cXG5cXG4jaW5wdXRDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjcmVhdGVQcm9qZWN0SW5wdXR7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yLXNpZGVuYXYpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1wKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxuICAgIG1hcmdpbi10b3A6IDklO1xcbn1cXG5cXG5cXG4jY3JlYXRlUHJvamVjdERpdkJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDUlO1xcbn1cXG5cXG4uYWRkQ2FuY2VsQnV0dG9ue1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTByZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNwcm9qZWN0QWRke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1hZGQpO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3ItYWRkKTtcXG59XFxuXFxuI3Byb2plY3RBZGQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWFkZC1ob3Zlcik7XFxufVxcblxcbiNwcm9qZWN0Q2FuY2Vse1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1jYW5jZWwpO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3ItY2FuY2VsKTtcXG59XFxuXFxuI3Byb2plY3RDYW5jZWw6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWNhbmNlbC1ob3Zlcik7XFxufVxcblxcbi5jbG9zZUJ1dHRvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG5cXG5cXG4jcmlnaHRDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jaGVhZGVyQ29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWhlYWRlcik7XFxufVxcblxcbiNoZWFkZXJUZXh0e1xcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbiAgICBwYWRkaW5nOiAxJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3Itc2lkZW5hdik7XFxufVxcblxcbiNtYWluQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDIlIDI1JTtcXG59XFxuXFxuI21haW5TZWN0aW9uSGVhZGVye1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMik7XFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcbn1cXG5cXG4jY3JlYXRlVGFza0lucHV0e1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMyk7XFxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xcbn1cXG5cXG4jdGFza0NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udGFza0J1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi50YXNrQnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5jaGVja0J1dHRvbntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBtaW4td2lkdGg6IDFyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uY2hlY2tCdXR0b25BY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWNoZWNrbGlzdC1ob3Zlcik7XFxufVxcblxcbi5jaGVja0J1dHRvbkFjdGl2ZVRleHR7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uY29udGFpbmVyRm9ySW5wdXRze1xcbiAgICBtaW4td2lkdGg6IGNhbGMoMzIlIC0gMXJlbSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDo1JTtcXG59XFxuXFxuLmRhdGVJbnB1dHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5jb2xvcklucHV0e1xcbiAgICB3aWR0aDogMnJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy91aS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsb0JBQW9CO0lBQ3BCLG9CQUFvQjs7SUFFcEIsaUNBQWlDOztJQUVqQyxtQ0FBbUM7SUFDbkMsa0NBQWtDO0lBQ2xDLHdDQUF3QztJQUN4Qyw4Q0FBOEM7SUFDOUMsMkNBQTJDO0lBQzNDLGlEQUFpRDtJQUNqRCxzQ0FBc0M7SUFDdEMscUNBQXFDO0lBQ3JDLG9EQUFvRDtJQUNwRCwyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1QsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiwyQ0FBMkM7SUFDM0MscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE9BQU87SUFDUCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxrRUFBa0U7QUFDdEU7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGFBQWE7SUFDYixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDZDQUE2QztJQUM3Qyw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsT0FBTztBQUNYOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9EQUFvRDtJQUNwRCx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSwwREFBMEQ7QUFDOUQ7O0FBRUE7SUFDSSx1REFBdUQ7SUFDdkQsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksNkRBQTZEO0FBQ2pFOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25COzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZ0VBQWdFO0FBQ3BFOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsTUFBTTtBQUNWOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwzMDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3R7XFxuICAgIC0tZm9udC1zaXplLXA6IGNsYW1wKC41cmVtLCAyMHB4LCAycmVtKTtcXG4gICAgLS1mb250LXNpemUtaDM6IDI2cHg7XFxuICAgIC0tZm9udC1zaXplLWgyOiAzMnB4O1xcblxcbiAgICAtLWJvcmRlci1jb2xvci1zaWRlbmF2OiAjMDAwMDAwNTU7XFxuXFxuICAgIC0tYmFja2dyb3VuZC1jb2xvci1zaWRlbmF2OiAjRkNGQ0ZDO1xcbiAgICAtLWJhY2tncm91bmQtY29sb3ItaGVhZGVyOiAjRjNGM0YzO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWFkZDogIzY5ZmY2OTExO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWFkZC1ob3ZlcjogIzY5ZmY2OTMzO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWNhbmNlbDogI2ZmNmI2YjExOztcXG4gICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1jYW5jZWwtaG92ZXI6ICNmZjZiNmIzMztcXG4gICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1hY3RpdmU6ICNEREQ7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItaG92ZXI6ICNFRUU7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItY2hlY2tsaXN0LWhvdmVyOiAjMDAwMDAwOTk7XFxuICAgIC0tYm9yZGVyLWNvbG9yLWFkZDogIzMzZmYzMztcXG4gICAgLS1ib3JkZXItY29sb3ItY2FuY2VsOiAjZmYzMzMzO1xcbn1cXG5cXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMGR2aDtcXG4gICAgd2lkdGg6IDEwMGR2dztcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc2lkZW5hdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXNpZGVuYXYpO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDAuNXB4IHZhcigtLWJvcmRlci1jb2xvci1zaWRlbmF2KTtcXG59XFxuXFxuI3NpZGVuYXZCdXR0b25Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaWRlbmF2QnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBnYXA6IDMlO1xcbiAgICBtYXJnaW4tdG9wOiA2JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDE0JTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZW5hdkJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4uYnV0dG9uRm9jdXN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWFjdGl2ZSkgIWltcG9ydGFudDtcXG59XFxuXFxuLnNpZGVuYXZCdXR0b246Zmlyc3QtY2hpbGR7XFxuICAgIG1hcmdpbi10b3A6IDMwJTtcXG59XFxuXFxuLnNpZGVuYXZCdXR0b25UZXh0e1xcbiAgICBtaW4td2lkdGg6IDY1JTtcXG4gICAgbWF4LXdpZHRoOiA2NSU7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXApO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBtYXJnaW4tbGVmdDogMiU7XFxuICAgIHBhZGRpbmc6IDAgMSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5zaWRlbmF2QnV0dG9uSW1ne1xcbiAgICBtYXgtd2lkdGg6IDEuNXJlbTtcXG4gICAgbWF4LWhlaWdodDogYXV0bztcXG59XFxuXFxuI3NpZGVOYXZQcm9qZWN0VGV4dHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi10b3A6IDIwJTtcXG4gICAgcGFkZGluZy10b3A6IDUlO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3Itc2lkZW5hdik7XFxufVxcblxcbiNjcmVhdGVQcm9qZWN0RGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucFRCdXR0b257XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNCU7XFxuICAgIG1hcmdpbi10b3A6IDYlO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4ucFRCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLnBUQnV0dG9uOmxhc3QtY2hpbGR7XFxuICAgIGdhcDogMiU7XFxufVxcblxcbiNpbnB1dENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NyZWF0ZVByb2plY3RJbnB1dHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3Itc2lkZW5hdik7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXApO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXG4gICAgbWFyZ2luLXRvcDogOSU7XFxufVxcblxcblxcbiNjcmVhdGVQcm9qZWN0RGl2QnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNSU7XFxufVxcblxcbi5hZGRDYW5jZWxCdXR0b257XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMHJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3Byb2plY3RBZGR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWFkZCk7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvci1hZGQpO1xcbn1cXG5cXG4jcHJvamVjdEFkZDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItYWRkLWhvdmVyKTtcXG59XFxuXFxuI3Byb2plY3RDYW5jZWx7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWNhbmNlbCk7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvci1jYW5jZWwpO1xcbn1cXG5cXG4jcHJvamVjdENhbmNlbDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItY2FuY2VsLWhvdmVyKTtcXG59XFxuXFxuLmNsb3NlQnV0dG9ue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcblxcbiNyaWdodENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNoZWFkZXJDb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItaGVhZGVyKTtcXG59XFxuXFxuI2hlYWRlclRleHR7XFxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvci1zaWRlbmF2KTtcXG59XFxuXFxuI21haW5Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMiUgMjUlO1xcbn1cXG5cXG4jbWFpblNlY3Rpb25IZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgyKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxufVxcblxcbiNjcmVhdGVUYXNrSW5wdXR7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgzKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XFxufVxcblxcbiN0YXNrQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YXNrQnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnRhc2tCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLmNoZWNrQnV0dG9ue1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIG1pbi13aWR0aDogMXJlbTtcXG4gICAgbWluLWhlaWdodDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5jaGVja0J1dHRvbkFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItY2hlY2tsaXN0LWhvdmVyKTtcXG59XFxuXFxuLmNoZWNrQnV0dG9uQWN0aXZlVGV4dHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5jb250YWluZXJGb3JJbnB1dHN7XFxuICAgIG1pbi13aWR0aDogY2FsYygzMiUgLSAxcmVtKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOjUlO1xcbn1cXG5cXG4uZGF0ZUlucHV0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNvbG9ySW5wdXR7XFxuICAgIHdpZHRoOiAycmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91aS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VpLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgdGVzdEZ1bmN0aW9uIH0gZnJvbSBcIi4vcGFnZXMvcHJvamVjdHNBbmRUYXNrc1wiO1xuaW1wb3J0IHsgY3JlYXRlVUkgfSBmcm9tIFwiLi9wYWdlcy91aVwiO1xuXG5leHBvcnQgbGV0IGxpc3RPZlByb2plY3RNYXBzID0gbmV3IE1hcDtcbmxldCBsaXN0T2ZUYXNrc01hcCA9IG5ldyBNYXA7XG5leHBvcnQgbGV0IGxvY2FsU3RvcmFnZUV4aXN0cyA9IGZhbHNlO1xuXG5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbmNyZWF0ZVVJKCk7XG50ZXN0RnVuY3Rpb24oKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgY2hlY2tMb2NhbFN0b3JhZ2UoKTtcbiAgfSk7XG5cblxuZnVuY3Rpb24gY2hlY2tMb2NhbFN0b3JhZ2UoKXtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgICBjaGVja0ZvclByb2plY3RMaXN0KCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZUV4aXN0cyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0T2ZQcm9qZWN0TWFwcy5zZXQoXCJJbmJveFwiLCBsaXN0T2ZUYXNrc01hcCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICBsZXQgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gXG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICBzdG9yYWdlICYmXG4gICAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgICApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JQcm9qZWN0TGlzdCgpe1xuICAgIGNvbnN0IGxvY2FsU3RvcmFnZVByb2plY3RMaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsaXN0T2ZQcm9qZWN0TWFwc1wiKTtcbiAgICBsaXN0T2ZQcm9qZWN0TWFwcyA9IG5ldyBNYXAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VQcm9qZWN0TGlzdCkpO1xuICAgIGZvciAobGV0IGtleSBvZiBsaXN0T2ZQcm9qZWN0TWFwcy5rZXlzKCkpe1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFByb2plY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBsaXN0T2ZUYXNrc01hcCA9IG5ldyBNYXAoSlNPTi5wYXJzZShsb2NhbFByb2plY3QpKTtcbiAgICAgICAgICAgIGxpc3RPZlByb2plY3RNYXBzLnNldChrZXksIGxpc3RPZlRhc2tzTWFwKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hpbGUgZ2V0dGluZyBsaXN0T2ZQcm9qZWN0TWFwcyBmcm9tIGxvY2FsU3RvcmFnZVwiICsgZSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseXtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybjtcbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRGl2KHR5cGUsIGlkID0gbnVsbCwgY2xhc3NOYW1lID0gbnVsbCl7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblxuICAgIGlmIChpZCAhPT0gbnVsbCkge1xuICAgICAgICBkaXYuaWQgPSBpZDtcbiAgICB9XG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCl7XG4gICAgICAgIGlmIChjbGFzc05hbWUgPT0gQXJyYXkpe1xuICAgICAgICAgICAgYWRkQ2xhc3NOYW1lc1RvT2JqZWN0KGRpdik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRleHQodHlwZSwgaWQgPSBudWxsLCBjbGFzc05hbWUgPSBudWxsLCB0ZXh0VmFsdWUgPSBudWxsKXtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gdGV4dFZhbHVlO1xuXG4gICAgaWYgKGlkICE9PSBudWxsKXtcbiAgICAgICAgdGV4dC5pZCA9IGlkO1xuICAgIH1cbiAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKXtcbiAgICAgICAgaWYgKGNsYXNzTmFtZSA9PSBBcnJheSl7XG4gICAgICAgICAgICBhZGRDbGFzc05hbWVzVG9PYmplY3QodGV4dCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGV4dC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgfVxuICAgIHJldHVybiB0ZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1nKHNyYywgaWQgPSBudWxsLCBjbGFzc05hbWUgPSBudWxsKXtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuc3JjID0gc3JjO1xuXG4gICAgaWYgKGlkICE9IG51bGwpe1xuICAgICAgICBpbWcuaWQgPSBpZDtcbiAgICB9XG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCl7XG4gICAgICAgIGlmIChjbGFzc05hbWUgPT0gQXJyYXkpe1xuICAgICAgICAgICAgYWRkQ2xhc3NOYW1lc1RvT2JqZWN0KGltZyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaW1nLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGltZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihpZCA9IG51bGwsIGNsYXNzTmFtZSA9IG51bGwsIGJ1dHRvblRleHQgPSBudWxsKXtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpZiAoaWQgIT09IG51bGwpe1xuICAgICAgICBidXR0b24uaWQgPSBpZDtcbiAgICB9XG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCl7XG4gICAgICAgIGlmIChjbGFzc05hbWUgPT0gQXJyYXkpe1xuICAgICAgICAgICAgYWRkQ2xhc3NOYW1lc1RvT2JqZWN0KGJ1dHRvbik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB9XG4gICAgaWYgKGJ1dHRvblRleHQgIT09IG51bGwpe1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBidXR0b25UZXh0O1xuICAgIH1cbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnB1dChpZCA9IG51bGwsIGNsYXNzTmFtZSA9IG51bGwsIHR5cGVPZklucHV0ID0gbnVsbCl7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlmIChpZCAhPT0gbnVsbCl7XG4gICAgICAgIGlucHV0LmlkID0gaWQ7XG4gICAgfVxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpe1xuICAgICAgICBpZiAoY2xhc3NOYW1lID09IEFycmF5KXtcbiAgICAgICAgICAgIGFkZENsYXNzTmFtZXNUb09iamVjdChpbnB1dCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIH1cbiAgICBpZiAodHlwZU9mSW5wdXQgIT09IG51bGwpe1xuICAgICAgICBpbnB1dC50eXBlID0gdHlwZU9mSW5wdXQ7XG4gICAgfVxuICAgIHJldHVybiBpbnB1dDtcbn1cblxuXG5mdW5jdGlvbiBhZGRDbGFzc05hbWVzVG9PYmplY3Qob2JqZWN0KXtcbiAgICBvYmplY3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgb2JqZWN0LmNsYXNzTGlzdC5hZGQoZWxlbWVudCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNpZGVuYXZCdXR0b25zKG5hbWUsIGltZyl7XG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKG51bGwsIFwic2lkZW5hdkJ1dHRvblwiKTtcbiAgICBjb25zdCBidXR0b25JbWcgPSBjcmVhdGVJbWcoaW1nLCBudWxsLCBcInNpZGVuYXZCdXR0b25JbWdcIik7XG4gICAgY29uc3QgYnV0dG9uVGV4dCA9IGNyZWF0ZVRleHQoXCJwXCIsIG51bGwsIFwic2lkZW5hdkJ1dHRvblRleHRcIiwgbmFtZSk7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvbkltZyk7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvblRleHQpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgc2lkZW5hdkJ1dHRvbkZvY3VzKGJ1dHRvbik7XG4gICAgfSlcbiAgICBpZiAobmFtZSA9PT0gXCJJbmJveFwiKXtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b25Gb2N1c1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gc2lkZW5hdkJ1dHRvbkZvY3VzKG5hbWUpe1xuICAgIGNvbnN0IGJ1dHRvbkZvY3VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b25Gb2N1c1wiKTtcbiAgICBpZiAoIWJ1dHRvbkZvY3VzKXtcbiAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uRm9jdXNcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYnV0dG9uRm9jdXMuY2xhc3NMaXN0LnJlbW92ZShcImJ1dHRvbkZvY3VzXCIpO1xuICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcImJ1dHRvbkZvY3VzXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUFRCdXR0b24odHlwZSwgaW1nKXtcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24odHlwZSArIFwiQnV0dG9uXCIsIFwicFRCdXR0b25cIik7XG4gICAgY29uc3QgYnV0dG9uSW1nID0gY3JlYXRlSW1nKGltZywgbnVsbCwgXCJzaWRlbmF2QnV0dG9uSW1nXCIpO1xuICAgIGNvbnN0IGJ1dHRvblRleHQgPSBjcmVhdGVUZXh0KFwicFwiLCBudWxsLCBcInNpZGVuYXZCdXR0b25UZXh0XCIsIFwiQWRkIFwiKyB0eXBlKTtcblxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25JbWcpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25UZXh0KVxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiUHJvamVjdFwiKXtcbiAgICAgICAgICAgIGFkZE5ld1Byb2plY3QoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhZGROZXdUYXNrKCk7XG5cbiAgICB9KTtcbiAgICByZXR1cm4gYnV0dG9uO1xufSIsImltcG9ydCB7IGxpc3RPZlRhc2tzTWFwLCBsaXN0T2ZQcm9qZWN0TWFwcyB9IGZyb20gXCIuLlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVzdEZ1bmN0aW9uKCl7XG4gICAgbGV0IGxpc3RPZlRhc2tzTWFwID0gbmV3IE1hcDtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA0OyBpKyspe1xuICAgICAgICBsaXN0T2ZUYXNrc01hcC5zZXQoXCJUYXNrXCIraSwgW1wiY29sb3JcIitpLCBcImRhdGVcIiwgZmFsc2VdKTtcbiAgICAgICAgbGlzdE9mUHJvamVjdE1hcHMuc2V0KFwiSW5ib3hcIiwgbGlzdE9mVGFza3NNYXApO1xuICAgIH1cbiAgICBsaXN0T2ZUYXNrc01hcCA9IG5ldyBNYXA7XG4gICAgZm9yKGxldCBqID0gMDsgaiA8IDQ7IGorKyl7XG5cbiAgICAgICAgbGlzdE9mVGFza3NNYXAuc2V0KFwiVGFza0luUHJvamVjdDFcIitqLCBbXCJjb2xvclwiK2osIFwiZGF0ZVwiLCB0cnVlXSk7XG4gICAgICAgIGxpc3RPZlByb2plY3RNYXBzLnNldChcIlByb2pla3QxXCIsIGxpc3RPZlRhc2tzTWFwKTtcblxuICAgIH1cbiAgICBwdXNoQ2hhbmdlc1RvTG9jYWxTdG9yYWdlKClcbn1cblxuZnVuY3Rpb24gcHVzaENoYW5nZXNUb0xvY2FsU3RvcmFnZSgpe1xuICAgIHRyeXtcbiAgICAgICAgZm9yKGxldCBrZXkgb2YgbGlzdE9mUHJvamVjdE1hcHMua2V5cygpKXtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RPZktleXMgPSBsaXN0T2ZQcm9qZWN0TWFwcy5nZXQoa2V5KS5lbnRyaWVzKCk7XG4gICAgICAgICAgICBjb25zdCBsaXN0T2ZLZXlzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoQXJyYXkuZnJvbShsaXN0T2ZLZXlzKSk7XG5cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgbGlzdE9mS2V5c1N0cmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGlzdE9mUHJvamVjdE1hcHNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShBcnJheS5mcm9tKGxpc3RPZlByb2plY3RNYXBzLmVudHJpZXMoKSkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RPZlByb2plY3RNYXBzXCIsIGxpc3RPZlByb2plY3RNYXBzU3RyaW5nKTtcbiAgICB9XG4gICAgY2F0Y2goZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2l0aCB3cml0aW5nIGluZm8gdG8gbG9jYWwgc3RvcmFnZVxcblwiICsgZSk7XG4gICAgfVxuICAgIGZpbmFsbHl7XG4gICAgICAgIGNvbnNvbGUubG9nKGxpc3RPZlByb2plY3RNYXBzKTtcbiAgICB9XG59IiwiaW1wb3J0ICcuLi9zdHlsZXMvdWkuY3NzJztcbmltcG9ydCBpbWdJbmJveCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2luYm94LnN2Zyc7XG5pbXBvcnQgaW1nVG9kYXkgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy90b2RheS5zdmcnO1xuaW1wb3J0IGltZ1dlZWsgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy93ZWVrLnN2Zyc7XG5pbXBvcnQgaW1nQWRkIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvYWRkLnN2Zyc7XG5pbXBvcnQgaW1nQ2xvc2UgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9jbG9zZS5zdmcnO1xuaW1wb3J0IGltZ0xpc3QgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9saXN0LnN2Zyc7XG5pbXBvcnQgeyBjcmVhdGVEaXYsIGNyZWF0ZVRleHQsIGNyZWF0ZUltZywgY3JlYXRlQnV0dG9uLCBjcmVhdGVJbnB1dCwgY3JlYXRlU2lkZW5hdkJ1dHRvbnMsIGNyZWF0ZVBUQnV0dG9uIH0gZnJvbSBcIi4vYnVpbGRlcnNcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVUkoKXtcbiAgICB0cnl7XG4gICAgICAgIGNyZWF0ZVNpZGVuYXYoKTtcbiAgICAgICAgY3JlYXRlUmlnaHRTZWN0aW9uKCk7XG4gICAgfVxuICAgIGNhdGNoKGUpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIlByb2JsZW0gd2l0aCBjcmVhdGluZyBzaWRlbmF2XFxuXCIgKyBlKTtcbiAgICB9XG4gICAgXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGVuYXYoKXtcbiAgICBjb25zdCBzaWRlbmF2Q29udGFpbmVyID0gY3JlYXRlRGl2KFwic2lkZW5hdlwiLCBcInNpZGVuYXZcIik7XG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gY3JlYXRlQnV0dG9uQ29udGFpbmVyKCk7XG4gICAgY29uc3QgcHJvamVjdFRleHQgPSBjcmVhdGVUZXh0KFwiZGl2XCIsIFwic2lkZU5hdlByb2plY3RUZXh0XCIsIG51bGwsIFwiUHJvamVjdHNcIik7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBjcmVhdGVQcm9qZWN0c0NvbnRhaW5lcigpO1xuXG4gICAgc2lkZW5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICAgIHNpZGVuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRleHQpO1xuICAgIHNpZGVuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2lkZW5hdkNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbkNvbnRhaW5lcigpe1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGNyZWF0ZURpdihcImNvbnRhaW5lclwiLCBcInNpZGVuYXZCdXR0b25Db250YWluZXJcIik7XG4gICAgY29uc3QgYnV0dG9ucyA9IHtcbiAgICAgICAgSW5ib3g6IFtcIkluYm94XCIsIGltZ0luYm94XSxcbiAgICAgICAgVG9kYXk6IFtcIlRvZGF5XCIsIGltZ1RvZGF5XSxcbiAgICAgICAgV2VlazogW1wiVGhpcyB3ZWVrXCIsIGltZ1dlZWtdXG4gICAgfVxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTaWRlbmF2QnV0dG9ucyhidXR0b25zLkluYm94WzBdLCBidXR0b25zLkluYm94WzFdKSk7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVNpZGVuYXZCdXR0b25zKGJ1dHRvbnMuVG9kYXlbMF0sIGJ1dHRvbnMuVG9kYXlbMV0pKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2lkZW5hdkJ1dHRvbnMoYnV0dG9ucy5XZWVrWzBdLCBidXR0b25zLldlZWtbMV0pKTtcblxuICAgIHJldHVybiBidXR0b25Db250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RzQ29udGFpbmVyKCl7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBjcmVhdGVEaXYoXCJjb250YWluZXJcIiwgXCJwcm9qZWN0c0NvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwcm9qZWN0QWRkQnV0dG9uID0gY3JlYXRlUFRCdXR0b24oXCJQcm9qZWN0XCIsIGltZ0FkZCk7XG5cbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0QWRkQnV0dG9uKTtcblxuICAgIHJldHVybiBwcm9qZWN0c0NvbnRhaW5lcjtcbn1cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVJpZ2h0U2VjdGlvbigpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZURpdihcImNvbnRhaW5lclwiLCBcInJpZ2h0Q29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcigpO1xuICAgIGNvbnN0IG1haW5TZWN0aW9uID0gY3JlYXRlTWFpbigpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluU2VjdGlvbik7XG5cbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVEaXYoXCJjb250YWluZXJcIiwgXCJoZWFkZXJDb250YWluZXJcIik7XG4gICAgY29uc3QgbG9nb1RleHQgPSBjcmVhdGVUZXh0KFwiaDFcIiwgXCJoZWFkZXJUZXh0XCIsIG51bGwsIFwiTGlzdCBkb1RvXCIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29UZXh0KTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVEaXYoXCJjb250YWluZXJcIiwgXCJtYWluQ29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGluYm94VGV4dCA9IGNyZWF0ZVRleHQoXCJoMlwiLCBcIm1haW5TZWN0aW9uSGVhZGVyXCIsIG51bGwsIFwiSW5ib3hcIik7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGNyZWF0ZURpdihcImNvbnRhaW5lclwiLCBcInRhc2tDb250YWluZXJcIik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5ib3hUZXh0KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==