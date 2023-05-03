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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --font-size-p: clamp(.5rem, 20px, 2rem);\n    --font-size-h3: 26px;\n    --font-size-h2: 32px;\n\n    --border-color-sidenav: #00000055;\n\n    --background-color-sidenav: #FCFCFC;\n    --background-color-header: #F3F3F3;\n    --button-background-color-add: #69ff6911;\n    --button-background-color-add-hover: #69ff6933;\n    --button-background-color-cancel: #ff6b6b11;;\n    --button-background-color-cancel-hover: #ff6b6b33;\n    --button-background-color-active: #DDD;\n    --button-background-color-hover: #EEE;\n    --button-background-color-checklist-hover: #00000099;\n    --border-color-add: #33ff33;\n    --border-color-cancel: #ff3333;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-family: 'Roboto', sans-serif;\n}\nbody{\n    height: 100dvh;\n    width: 100dvw;\n    overflow-y: hidden;\n    display: flex;\n}\n\n#sidenav{\n    width: 15%;\n    min-width: 250px;\n}\n\n#mainSidenavContainer{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    background: var(--background-color-sidenav);\n    border-right: solid 0.5px var(--border-color-sidenav);\n}\n\n.sidenavButton{\n    display: flex;\n    align-items: flex-end;\n    background: transparent;\n    width: 80%;\n    border-radius: 5px;\n    padding: 2%;\n    gap: 3%;\n    margin-top: 6%;\n    margin-left: 14%;\n    cursor: pointer;\n}\n\n.sidenavButton:hover{\n    background-color: var(--button-background-color-hover);\n}\n\n.buttonClicked{\n    background-color: var(--button-background-color-active) !important;\n}\n\n.sidenavButton:first-child{\n    margin-top: 30%;\n}\n\n.sidenavText{\n    min-width: 65%;\n    max-width: 65%;\n    font-size: var(--font-size-p);\n    font-weight: 200;\n    margin-left: 2%;\n    padding: 0 1%;\n    border-radius: 10px;\n    text-align: left;\n    text-overflow:ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.sidenavImage{\n    max-width: 1.5rem;\n    max-height: auto;\n}\n\n#sidenavProjectText{\n    padding-left: 10%;\n    margin-top: 20%;\n    padding-top: 5%;\n    font-size: var(--font-size-h3);\n    font-weight: 800;\n    border-top: solid 1px var(--border-color-sidenav);\n}\n\n#createProjectDiv{\n    display: flex;\n    flex-direction: column;\n}\n\n.projectButton{\n    background: transparent;\n    cursor: pointer;\n    display: flex;\n    width: 80%;\n    padding: 2%;\n    border-radius: 5px;\n    margin-left: 14%;\n    margin-top: 6%;\n    gap: .5rem;\n}\n\n.projectButton:hover{\n    background-color: var(--button-background-color-hover);\n}\n\n.projectButton:last-child{\n    gap: 2%;\n}\n\n#inputContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n#createProjectInput{\n    width: 80%;\n    align-self: center;\n    border: solid 1px var(--border-color-sidenav);\n    font-size: var(--font-size-p);\n    margin-bottom: 5%;\n    margin-top: 9%;\n}\n\n\n#createProjectDivButtons{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n}\n\n.addCancelButton{\n    width: 30%;\n    height: 100%;\n    max-width: 10rem;\n    cursor: pointer;\n    font-weight: bold;\n}\n\n#projectAdd{\n    background-color: var(--button-background-color-add);\n    border: solid 1px var(--border-color-add);\n}\n\n#projectAdd:hover{\n    background-color: var(--button-background-color-add-hover);\n}\n\n#projectCancel{\n    background-color: var(--button-background-color-cancel);\n    border: solid 1px var(--border-color-cancel);\n}\n\n#projectCancel:hover{\n    background-color: var(--button-background-color-cancel-hover);\n}\n\n.closeButton{\n    cursor: pointer;\n    background-color: transparent;\n    margin-right: 0;\n}\n\n\n#rightContainer{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n}\n\n#headerContainer{\n    background-color: var(--background-color-header);\n}\n\n#headerText{\n    font-style: oblique;\n    padding: 1%;\n    padding-left: 10%;\n    border-bottom: solid 1px var(--border-color-sidenav);\n}\n\n#mainContainer{\n    display: flex;\n    flex-direction: column;\n    margin: 2% 25%;\n}\n\n#mainSectionHeader{\n    font-size: var(--font-size-h2);\n    margin-bottom: 5%;\n}\n\n#createTaskInput{\n    font-size: var(--font-size-h3);\n    margin-bottom: 2%;\n}\n\n#taskContainer{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.taskButton{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    background-color: transparent;\n    cursor: pointer;\n    padding: 1%;\n    border-radius: 5px;\n}\n.taskButton:hover{\n    background-color: var(--button-background-color-hover);\n}\n\n.checkButton{\n    border: 1px solid black;\n    border-radius: 100px;\n    min-width: 1rem;\n    min-height: 1rem;\n    background-color: transparent;\n}\n\n.checkButtonActive{\n    background-color: var(--button-background-color-checklist-hover);\n}\n\n.checkButtonActiveText{\n    text-decoration: line-through;\n}\n\n.containerForInputs{\n    min-width: calc(32% - 1rem);\n    display: flex;\n    justify-content: flex-end;\n    gap:5%;\n}\n\n.dateInput{\n    background-color: transparent;\n}\n\n.colorInput{\n    width: 2rem;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/ui.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300&display=swap');\n\n:root{\n    --font-size-p: clamp(.5rem, 20px, 2rem);\n    --font-size-h3: 26px;\n    --font-size-h2: 32px;\n\n    --border-color-sidenav: #00000055;\n\n    --background-color-sidenav: #FCFCFC;\n    --background-color-header: #F3F3F3;\n    --button-background-color-add: #69ff6911;\n    --button-background-color-add-hover: #69ff6933;\n    --button-background-color-cancel: #ff6b6b11;;\n    --button-background-color-cancel-hover: #ff6b6b33;\n    --button-background-color-active: #DDD;\n    --button-background-color-hover: #EEE;\n    --button-background-color-checklist-hover: #00000099;\n    --border-color-add: #33ff33;\n    --border-color-cancel: #ff3333;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-family: 'Roboto', sans-serif;\n}\nbody{\n    height: 100dvh;\n    width: 100dvw;\n    overflow-y: hidden;\n    display: flex;\n}\n\n#sidenav{\n    width: 15%;\n    min-width: 250px;\n}\n\n#mainSidenavContainer{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    background: var(--background-color-sidenav);\n    border-right: solid 0.5px var(--border-color-sidenav);\n}\n\n.sidenavButton{\n    display: flex;\n    align-items: flex-end;\n    background: transparent;\n    width: 80%;\n    border-radius: 5px;\n    padding: 2%;\n    gap: 3%;\n    margin-top: 6%;\n    margin-left: 14%;\n    cursor: pointer;\n}\n\n.sidenavButton:hover{\n    background-color: var(--button-background-color-hover);\n}\n\n.buttonClicked{\n    background-color: var(--button-background-color-active) !important;\n}\n\n.sidenavButton:first-child{\n    margin-top: 30%;\n}\n\n.sidenavText{\n    min-width: 65%;\n    max-width: 65%;\n    font-size: var(--font-size-p);\n    font-weight: 200;\n    margin-left: 2%;\n    padding: 0 1%;\n    border-radius: 10px;\n    text-align: left;\n    text-overflow:ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.sidenavImage{\n    max-width: 1.5rem;\n    max-height: auto;\n}\n\n#sidenavProjectText{\n    padding-left: 10%;\n    margin-top: 20%;\n    padding-top: 5%;\n    font-size: var(--font-size-h3);\n    font-weight: 800;\n    border-top: solid 1px var(--border-color-sidenav);\n}\n\n#createProjectDiv{\n    display: flex;\n    flex-direction: column;\n}\n\n.projectButton{\n    background: transparent;\n    cursor: pointer;\n    display: flex;\n    width: 80%;\n    padding: 2%;\n    border-radius: 5px;\n    margin-left: 14%;\n    margin-top: 6%;\n    gap: .5rem;\n}\n\n.projectButton:hover{\n    background-color: var(--button-background-color-hover);\n}\n\n.projectButton:last-child{\n    gap: 2%;\n}\n\n#inputContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n#createProjectInput{\n    width: 80%;\n    align-self: center;\n    border: solid 1px var(--border-color-sidenav);\n    font-size: var(--font-size-p);\n    margin-bottom: 5%;\n    margin-top: 9%;\n}\n\n\n#createProjectDivButtons{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n}\n\n.addCancelButton{\n    width: 30%;\n    height: 100%;\n    max-width: 10rem;\n    cursor: pointer;\n    font-weight: bold;\n}\n\n#projectAdd{\n    background-color: var(--button-background-color-add);\n    border: solid 1px var(--border-color-add);\n}\n\n#projectAdd:hover{\n    background-color: var(--button-background-color-add-hover);\n}\n\n#projectCancel{\n    background-color: var(--button-background-color-cancel);\n    border: solid 1px var(--border-color-cancel);\n}\n\n#projectCancel:hover{\n    background-color: var(--button-background-color-cancel-hover);\n}\n\n.closeButton{\n    cursor: pointer;\n    background-color: transparent;\n    margin-right: 0;\n}\n\n\n#rightContainer{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n}\n\n#headerContainer{\n    background-color: var(--background-color-header);\n}\n\n#headerText{\n    font-style: oblique;\n    padding: 1%;\n    padding-left: 10%;\n    border-bottom: solid 1px var(--border-color-sidenav);\n}\n\n#mainContainer{\n    display: flex;\n    flex-direction: column;\n    margin: 2% 25%;\n}\n\n#mainSectionHeader{\n    font-size: var(--font-size-h2);\n    margin-bottom: 5%;\n}\n\n#createTaskInput{\n    font-size: var(--font-size-h3);\n    margin-bottom: 2%;\n}\n\n#taskContainer{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.taskButton{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    background-color: transparent;\n    cursor: pointer;\n    padding: 1%;\n    border-radius: 5px;\n}\n.taskButton:hover{\n    background-color: var(--button-background-color-hover);\n}\n\n.checkButton{\n    border: 1px solid black;\n    border-radius: 100px;\n    min-width: 1rem;\n    min-height: 1rem;\n    background-color: transparent;\n}\n\n.checkButtonActive{\n    background-color: var(--button-background-color-checklist-hover);\n}\n\n.checkButtonActiveText{\n    text-decoration: line-through;\n}\n\n.containerForInputs{\n    min-width: calc(32% - 1rem);\n    display: flex;\n    justify-content: flex-end;\n    gap:5%;\n}\n\n.dateInput{\n    background-color: transparent;\n}\n\n.colorInput{\n    width: 2rem;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "createButton": () => (/* binding */ createButton),
/* harmony export */   "createContainer": () => (/* binding */ createContainer),
/* harmony export */   "createImg": () => (/* binding */ createImg),
/* harmony export */   "createInput": () => (/* binding */ createInput),
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


function createInput(id, className, typeOfInput){
    const input = document.createElement('input');
    if (id !== null){
        input.id = id;
    }
    if (className !== null){
        input.className = className;
    }
    if (typeOfInput !== null){
        input.type = typeOfInput;
    }
    return input;
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
            return (0,_projectsAndTasks__WEBPACK_IMPORTED_MODULE_2__.createTaskButton)(element, projectName);
            
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


function createTaskButton(taskName, projectName){
    const button = (0,_builders__WEBPACK_IMPORTED_MODULE_3__.createButton)("taskButton"+ taskName, "taskButton");

    // button.appendChild(createImg(null, "sidenavImage", list));
    const checkButton = (0,_builders__WEBPACK_IMPORTED_MODULE_3__.createButton)(null, "checkButton");

    const text = (0,_builders__WEBPACK_IMPORTED_MODULE_3__.createText)("p", null, "sidenavText", taskName);
    checkButton.addEventListener("click", function(){
        checkButton.classList.toggle("checkButtonActive");
        text.classList.toggle("checkButtonActiveText");
    })

    button.appendChild(checkButton);
    button.appendChild(text);
    button.addEventListener("click", function(){
        return;
    })

    const closeButton = (0,_builders__WEBPACK_IMPORTED_MODULE_3__.createButton)(null,"closeButton",null);
    closeButton.addEventListener("click", function(){
        deleteTask(taskName, button, projectName);
        return;
    })

    const containerForInputs = document.createElement('container');
    containerForInputs.className = "containerForInputs";
    button.appendChild(containerForInputs);

    const colorInput = (0,_builders__WEBPACK_IMPORTED_MODULE_3__.createInput)(null, "colorInput", "color");
    colorInput.addEventListener("input", function(){
        text.style.backgroundColor = colorInput.value;
    })
    containerForInputs.appendChild(colorInput);
    const dateInput = (0,_builders__WEBPACK_IMPORTED_MODULE_3__.createInput)(null, "dateInput", "date");
    containerForInputs.appendChild(dateInput);

    const img = (0,_builders__WEBPACK_IMPORTED_MODULE_3__.createImg)(null, "sidenavImage", _assets_images_close_svg__WEBPACK_IMPORTED_MODULE_2__);
    img.classList.add("closeButtonImg");
    closeButton.appendChild(img);

    containerForInputs.appendChild(closeButton);

    const container = document.getElementById("taskContainer");
    container.insertBefore(button, container.lastChild);
    return;
}

function changeTaskColor(colorPicked ,background){
    console.log(colorPicked);
    return background.style.backgroundColor = colorPicked.value;

}

function deleteTask(taskName, button, projectName){
    let project = projectsList.get(projectName.toString());
    project.forEach((element, index) => {
        if (element === taskName){
            try{
                project.splice(index, 1);
                projectsList.set(projectName, project);
                console.log(projectsList);
                return;
            }
            catch(e){
                console.log("Can't delete task: \n" + e);
            }

        }
    });
    if (localStorageExists){
        pushToLocalStorage();
    }
    button.remove();
    
}


function pushToLocalStorage(){
    try{
        const mapString = JSON.stringify(Array.from(projectsList.entries()));
        localStorage.setItem("projectsList", mapString);
    }
    catch(e){
        console.log("Error with writing info to localStorage \n" + e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0s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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4VHlCO0FBQ3NCO0FBQ0E7QUFDRjtBQUNvQjs7QUFFWjs7QUFFOUM7QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3REFBd0QscURBQUs7QUFDN0Qsd0RBQXdELHFEQUFLO0FBQzdELDREQUE0RCxvREFBSTtBQUNoRTtBQUNBLDhCQUE4QixxREFBVTs7QUFFeEM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBLG1CQUFtQix1REFBWTtBQUMvQix1QkFBdUIsb0RBQVM7QUFDaEMsdUJBQXVCLHFEQUFVO0FBQ2pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGtFQUFlOztBQUVuQjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHFEQUFVOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIscURBQVU7O0FBRXBDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9zcmMvc3R5bGVzL3VpLmNzcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL3NyYy9zdHlsZXMvdWkuY3NzPzgxYjMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb29kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL3NyYy9wYWdlcy9idWlsZGVycy5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL3NyYy9wYWdlcy9tYWluU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly90b2Rvb2Rpbi8uL3NyYy9wYWdlcy9wcm9qZWN0c0FuZFRhc2tzLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vc3JjL3BhZ2VzL3VpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gICAgLS1mb250LXNpemUtcDogY2xhbXAoLjVyZW0sIDIwcHgsIDJyZW0pO1xcbiAgICAtLWZvbnQtc2l6ZS1oMzogMjZweDtcXG4gICAgLS1mb250LXNpemUtaDI6IDMycHg7XFxuXFxuICAgIC0tYm9yZGVyLWNvbG9yLXNpZGVuYXY6ICMwMDAwMDA1NTtcXG5cXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yLXNpZGVuYXY6ICNGQ0ZDRkM7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvci1oZWFkZXI6ICNGM0YzRjM7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItYWRkOiAjNjlmZjY5MTE7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItYWRkLWhvdmVyOiAjNjlmZjY5MzM7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItY2FuY2VsOiAjZmY2YjZiMTE7O1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWNhbmNlbC1ob3ZlcjogI2ZmNmI2YjMzO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWFjdGl2ZTogI0RERDtcXG4gICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogI0VFRTtcXG4gICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1jaGVja2xpc3QtaG92ZXI6ICMwMDAwMDA5OTtcXG4gICAgLS1ib3JkZXItY29sb3ItYWRkOiAjMzNmZjMzO1xcbiAgICAtLWJvcmRlci1jb2xvci1jYW5jZWw6ICNmZjMzMzM7XFxufVxcblxcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwZHZoO1xcbiAgICB3aWR0aDogMTAwZHZ3O1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzaWRlbmF2e1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4jbWFpblNpZGVuYXZDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1zaWRlbmF2KTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAwLjVweCB2YXIoLS1ib3JkZXItY29sb3Itc2lkZW5hdik7XFxufVxcblxcbi5zaWRlbmF2QnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBnYXA6IDMlO1xcbiAgICBtYXJnaW4tdG9wOiA2JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDE0JTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZW5hdkJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4uYnV0dG9uQ2xpY2tlZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItYWN0aXZlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2lkZW5hdkJ1dHRvbjpmaXJzdC1jaGlsZHtcXG4gICAgbWFyZ2luLXRvcDogMzAlO1xcbn1cXG5cXG4uc2lkZW5hdlRleHR7XFxuICAgIG1pbi13aWR0aDogNjUlO1xcbiAgICBtYXgtd2lkdGg6IDY1JTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtcCk7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcXG4gICAgcGFkZGluZzogMCAxJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnNpZGVuYXZJbWFnZXtcXG4gICAgbWF4LXdpZHRoOiAxLjVyZW07XFxuICAgIG1heC1oZWlnaHQ6IGF1dG87XFxufVxcblxcbiNzaWRlbmF2UHJvamVjdFRleHR7XFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgICBtYXJnaW4tdG9wOiAyMCU7XFxuICAgIHBhZGRpbmctdG9wOiA1JTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDMpO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yLXNpZGVuYXYpO1xcbn1cXG5cXG4jY3JlYXRlUHJvamVjdERpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3RCdXR0b257XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNCU7XFxuICAgIG1hcmdpbi10b3A6IDYlO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbjpsYXN0LWNoaWxke1xcbiAgICBnYXA6IDIlO1xcbn1cXG5cXG4jaW5wdXRDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjcmVhdGVQcm9qZWN0SW5wdXR7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yLXNpZGVuYXYpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1wKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxuICAgIG1hcmdpbi10b3A6IDklO1xcbn1cXG5cXG5cXG4jY3JlYXRlUHJvamVjdERpdkJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDUlO1xcbn1cXG5cXG4uYWRkQ2FuY2VsQnV0dG9ue1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTByZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNwcm9qZWN0QWRke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1hZGQpO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3ItYWRkKTtcXG59XFxuXFxuI3Byb2plY3RBZGQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWFkZC1ob3Zlcik7XFxufVxcblxcbiNwcm9qZWN0Q2FuY2Vse1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1jYW5jZWwpO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3ItY2FuY2VsKTtcXG59XFxuXFxuI3Byb2plY3RDYW5jZWw6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWNhbmNlbC1ob3Zlcik7XFxufVxcblxcbi5jbG9zZUJ1dHRvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG5cXG5cXG4jcmlnaHRDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jaGVhZGVyQ29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWhlYWRlcik7XFxufVxcblxcbiNoZWFkZXJUZXh0e1xcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbiAgICBwYWRkaW5nOiAxJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3Itc2lkZW5hdik7XFxufVxcblxcbiNtYWluQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDIlIDI1JTtcXG59XFxuXFxuI21haW5TZWN0aW9uSGVhZGVye1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMik7XFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcbn1cXG5cXG4jY3JlYXRlVGFza0lucHV0e1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMyk7XFxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xcbn1cXG5cXG4jdGFza0NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udGFza0J1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi50YXNrQnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5jaGVja0J1dHRvbntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBtaW4td2lkdGg6IDFyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uY2hlY2tCdXR0b25BY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWNoZWNrbGlzdC1ob3Zlcik7XFxufVxcblxcbi5jaGVja0J1dHRvbkFjdGl2ZVRleHR7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uY29udGFpbmVyRm9ySW5wdXRze1xcbiAgICBtaW4td2lkdGg6IGNhbGMoMzIlIC0gMXJlbSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDo1JTtcXG59XFxuXFxuLmRhdGVJbnB1dHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5jb2xvcklucHV0e1xcbiAgICB3aWR0aDogMnJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy91aS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsb0JBQW9CO0lBQ3BCLG9CQUFvQjs7SUFFcEIsaUNBQWlDOztJQUVqQyxtQ0FBbUM7SUFDbkMsa0NBQWtDO0lBQ2xDLHdDQUF3QztJQUN4Qyw4Q0FBOEM7SUFDOUMsMkNBQTJDO0lBQzNDLGlEQUFpRDtJQUNqRCxzQ0FBc0M7SUFDdEMscUNBQXFDO0lBQ3JDLG9EQUFvRDtJQUNwRCwyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1QsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDJDQUEyQztJQUMzQyxxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxPQUFPO0lBQ1AsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksa0VBQWtFO0FBQ3RFOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiw2Q0FBNkM7SUFDN0MsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLE9BQU87QUFDWDs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvREFBb0Q7SUFDcEQseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksMERBQTBEO0FBQzlEOztBQUVBO0lBQ0ksdURBQXVEO0lBQ3ZELDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLDZEQUE2RDtBQUNqRTs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG9EQUFvRDtBQUN4RDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdFQUFnRTtBQUNwRTs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLE1BQU07QUFDVjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290e1xcbiAgICAtLWZvbnQtc2l6ZS1wOiBjbGFtcCguNXJlbSwgMjBweCwgMnJlbSk7XFxuICAgIC0tZm9udC1zaXplLWgzOiAyNnB4O1xcbiAgICAtLWZvbnQtc2l6ZS1oMjogMzJweDtcXG5cXG4gICAgLS1ib3JkZXItY29sb3Itc2lkZW5hdjogIzAwMDAwMDU1O1xcblxcbiAgICAtLWJhY2tncm91bmQtY29sb3Itc2lkZW5hdjogI0ZDRkNGQztcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yLWhlYWRlcjogI0YzRjNGMztcXG4gICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1hZGQ6ICM2OWZmNjkxMTtcXG4gICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1hZGQtaG92ZXI6ICM2OWZmNjkzMztcXG4gICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1jYW5jZWw6ICNmZjZiNmIxMTs7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItY2FuY2VsLWhvdmVyOiAjZmY2YjZiMzM7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItYWN0aXZlOiAjREREO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiAjRUVFO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWNoZWNrbGlzdC1ob3ZlcjogIzAwMDAwMDk5O1xcbiAgICAtLWJvcmRlci1jb2xvci1hZGQ6ICMzM2ZmMzM7XFxuICAgIC0tYm9yZGVyLWNvbG9yLWNhbmNlbDogI2ZmMzMzMztcXG59XFxuXFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDBkdmg7XFxuICAgIHdpZHRoOiAxMDBkdnc7XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZGVuYXZ7XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxufVxcblxcbiNtYWluU2lkZW5hdkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXNpZGVuYXYpO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDAuNXB4IHZhcigtLWJvcmRlci1jb2xvci1zaWRlbmF2KTtcXG59XFxuXFxuLnNpZGVuYXZCdXR0b257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGdhcDogMyU7XFxuICAgIG1hcmdpbi10b3A6IDYlO1xcbiAgICBtYXJnaW4tbGVmdDogMTQlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlbmF2QnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5idXR0b25DbGlja2Vke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1hY3RpdmUpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zaWRlbmF2QnV0dG9uOmZpcnN0LWNoaWxke1xcbiAgICBtYXJnaW4tdG9wOiAzMCU7XFxufVxcblxcbi5zaWRlbmF2VGV4dHtcXG4gICAgbWluLXdpZHRoOiA2NSU7XFxuICAgIG1heC13aWR0aDogNjUlO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1wKTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xcbiAgICBwYWRkaW5nOiAwIDElO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uc2lkZW5hdkltYWdle1xcbiAgICBtYXgtd2lkdGg6IDEuNXJlbTtcXG4gICAgbWF4LWhlaWdodDogYXV0bztcXG59XFxuXFxuI3NpZGVuYXZQcm9qZWN0VGV4dHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi10b3A6IDIwJTtcXG4gICAgcGFkZGluZy10b3A6IDUlO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3Itc2lkZW5hdik7XFxufVxcblxcbiNjcmVhdGVQcm9qZWN0RGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbntcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE0JTtcXG4gICAgbWFyZ2luLXRvcDogNiU7XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbi5wcm9qZWN0QnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5wcm9qZWN0QnV0dG9uOmxhc3QtY2hpbGR7XFxuICAgIGdhcDogMiU7XFxufVxcblxcbiNpbnB1dENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NyZWF0ZVByb2plY3RJbnB1dHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3Itc2lkZW5hdik7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXApO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXG4gICAgbWFyZ2luLXRvcDogOSU7XFxufVxcblxcblxcbiNjcmVhdGVQcm9qZWN0RGl2QnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNSU7XFxufVxcblxcbi5hZGRDYW5jZWxCdXR0b257XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMHJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3Byb2plY3RBZGR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWFkZCk7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvci1hZGQpO1xcbn1cXG5cXG4jcHJvamVjdEFkZDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItYWRkLWhvdmVyKTtcXG59XFxuXFxuI3Byb2plY3RDYW5jZWx7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWNhbmNlbCk7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvci1jYW5jZWwpO1xcbn1cXG5cXG4jcHJvamVjdENhbmNlbDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItY2FuY2VsLWhvdmVyKTtcXG59XFxuXFxuLmNsb3NlQnV0dG9ue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcblxcbiNyaWdodENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNoZWFkZXJDb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItaGVhZGVyKTtcXG59XFxuXFxuI2hlYWRlclRleHR7XFxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvci1zaWRlbmF2KTtcXG59XFxuXFxuI21haW5Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMiUgMjUlO1xcbn1cXG5cXG4jbWFpblNlY3Rpb25IZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgyKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxufVxcblxcbiNjcmVhdGVUYXNrSW5wdXR7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgzKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XFxufVxcblxcbiN0YXNrQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YXNrQnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnRhc2tCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLmNoZWNrQnV0dG9ue1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIG1pbi13aWR0aDogMXJlbTtcXG4gICAgbWluLWhlaWdodDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5jaGVja0J1dHRvbkFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3ItY2hlY2tsaXN0LWhvdmVyKTtcXG59XFxuXFxuLmNoZWNrQnV0dG9uQWN0aXZlVGV4dHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5jb250YWluZXJGb3JJbnB1dHN7XFxuICAgIG1pbi13aWR0aDogY2FsYygzMiUgLSAxcmVtKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOjUlO1xcbn1cXG5cXG4uZGF0ZUlucHV0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNvbG9ySW5wdXR7XFxuICAgIHdpZHRoOiAycmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91aS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VpLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtjcmVhdGVTaWRlbmF2LCBjcmVhdGVSaWdodFNlY3Rpb259IGZyb20gJy4vcGFnZXMvdWknO1xuaW1wb3J0IHsgc2hvd0luYm94IH0gZnJvbSAnLi9wYWdlcy9tYWluU2VjdGlvbic7XG5pbXBvcnQgeyBwcm9qZWN0c0xpc3QgfSBmcm9tICcuL3BhZ2VzL3Byb2plY3RzQW5kVGFza3MnO1xuXG5cbmNyZWF0ZVVJKCk7XG5cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVVJKCl7XG4gICAgdHJ5e1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVNpZGVuYXYoKSk7XG4gICAgfVxuICAgIGNhdGNoKGUpe1xuICAgICAgICB0aHJvdyBcIlByb2JsZW0gdyB3eWdlbmVyb3dhbml1IHNpZGVuYXZhIFxcblwiICsgZS5tZXNzYWdlO1xuICAgIH1cbiAgICB0cnl7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlUmlnaHRTZWN0aW9uKCkpO1xuICAgIH1cbiAgICBjYXRjaChlKXtcbiAgICAgICAgdGhyb3cgXCJQcm9ibGVtIHcgd3lnZW5lcm93YW5pdSBwcmF3ZWdvIGNvbnRhaW5lcmEgXFxuXCIgKyBlLm1lc3NhZ2U7XG4gICAgfVxuICAgIFxufVxuXG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVyKCl7XG4gICAgY29uc29sZS5sb2coXCJhXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGV4dCh0eXBlLCBpZCwgY2xhc3NOYW1lLCB0ZXh0VmFsdWUpe1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSB0ZXh0VmFsdWU7XG5cbiAgICBpZiAoaWQgIT09IG51bGwpe1xuICAgICAgICB0ZXh0LmlkID0gaWQ7XG4gICAgfVxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpe1xuICAgICAgICB0ZXh0LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltZyhpZCA9IG51bGwsIGNsYXNzTmFtZSwgc3JjKXtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpZiAoaWQgIT0gbnVsbCl7XG4gICAgICAgIGltZy5pZCA9IGlkO1xuICAgIH1cbiAgICBpZiAoY2xhc3NOYW1lICE9IG51bGwpe1xuICAgICAgICBpbWcuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIH1cbiAgICBpZiAoc3JjICE9IG51bGwpe1xuICAgICAgICBpbWcuc3JjID0gc3JjO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gaW1nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnV0dG9uKGlkLCBjbGFzc05hbWUsIGJ1dHRvblRleHQgPSBudWxsKXtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpZiAoaWQgIT09IG51bGwpe1xuICAgICAgICBidXR0b24uaWQgPSBpZDtcbiAgICB9XG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCl7XG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgfVxuICAgIGlmIChidXR0b25UZXh0ICE9PSBudWxsKXtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gYnV0dG9uVGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5wdXQoaWQsIGNsYXNzTmFtZSwgdHlwZU9mSW5wdXQpe1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpZiAoaWQgIT09IG51bGwpe1xuICAgICAgICBpbnB1dC5pZCA9IGlkO1xuICAgIH1cbiAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKXtcbiAgICAgICAgaW5wdXQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIH1cbiAgICBpZiAodHlwZU9mSW5wdXQgIT09IG51bGwpe1xuICAgICAgICBpbnB1dC50eXBlID0gdHlwZU9mSW5wdXQ7XG4gICAgfVxuICAgIHJldHVybiBpbnB1dDtcbn1cblxuIiwiaW1wb3J0IHsgY3JlYXRlSW1nLCBjcmVhdGVUZXh0LCBjcmVhdGVCdXR0b24gfSBmcm9tICcuL2J1aWxkZXJzJztcbmltcG9ydCBhZGQgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvYWRkLnN2Z1wiO1xuaW1wb3J0IHsgYWRkTmV3UHJvamVjdCwgY3JlYXRlVGFza0J1dHRvbiwgbG9jYWxTdG9yYWdlRXhpc3RzLCBwcm9qZWN0c0xpc3QgfSBmcm9tIFwiLi9wcm9qZWN0c0FuZFRhc2tzXCI7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0luYm94KCl7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0NvbnRhaW5lclwiKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkFkZFRhc2soXCJJbmJveFwiLCB0YXNrQ29udGFpbmVyKSk7XG4gICAgZ2V0VGFza0xpc3QoXCJJbmJveFwiLCB0YXNrQ29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gc2hvd1RvZGF5KCl7XG5cbn1cblxuZnVuY3Rpb24gc2hvd1RoaXNXZWVrKCl7XG5cbn1cblxuZnVuY3Rpb24gc2hvd1Byb2plY3QocHJvamVjdE5hbWUpe1xuXG59XG5cbmZ1bmN0aW9uIGNsZWFyU2VjdGlvbigpe1xuXG59XG5cbmZ1bmN0aW9uIGJ1dHRvbkFkZFRhc2socHJvamVjdE5hbWUsIGNvbnRhaWVyKXtcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24ocHJvamVjdE5hbWUsIFwidGFza0J1dHRvblwiKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoY3JlYXRlSW1nKG51bGwsIFwic2lkZW5hdkltYWdlXCIsIGFkZCkpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KFwicFwiLCBudWxsLCBcInNpZGVuYXZUZXh0XCIsIFwiQWRkIFRhc2tcIikpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgYWRkTmV3UHJvamVjdChjb250YWllciwgXCJ0YXNrXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBidXR0b247XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tMaXN0KHByb2plY3ROYW1lLCBjb250YWluZXIpe1xuICAgICAgICBjb25zdCBsaXN0T2ZWYWx1ZXMgPSBbLi4ucHJvamVjdHNMaXN0LmdldChwcm9qZWN0TmFtZSkudmFsdWVzKCldO1xuICAgICAgICBsaXN0T2ZWYWx1ZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tCdXR0b25JZCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tCdXR0b25cIitlbGVtZW50KTtcbiAgICAgICAgICAgIGlmICh0YXNrQnV0dG9uSWQgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlVGFza0J1dHRvbihlbGVtZW50LCBwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbn1cbiIsImltcG9ydCBhZGQgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9hZGQuc3ZnJztcbmltcG9ydCBsaXN0IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvbGlzdC5zdmcnO1xuaW1wb3J0IGNsb3NlIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvY2xvc2Uuc3ZnJztcbmltcG9ydCB7IGNyZWF0ZUltZywgY3JlYXRlVGV4dCwgY3JlYXRlQnV0dG9uLCBjcmVhdGVJbnB1dCB9IGZyb20gJy4vYnVpbGRlcnMnO1xuaW1wb3J0IHsgYnV0dG9uQ2xpY2tlZCB9IGZyb20gJy4vdWknO1xuaW1wb3J0IHsgc2hvd0luYm94IH0gZnJvbSAnLi9tYWluU2VjdGlvbic7XG5cbmV4cG9ydCBsZXQgcHJvamVjdHNMaXN0ID0gbmV3IE1hcDtcbnByb2plY3RzTGlzdC5zZXQoXCJJbmJveFwiLFtdKTtcbmV4cG9ydCBsZXQgbG9jYWxTdG9yYWdlRXhpc3RzO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICBjaGVja0xvY2FsU3RvcmFnZSgpO1xuICB9KTtcblxuXG5mdW5jdGlvbiBjaGVja0xvY2FsU3RvcmFnZSgpe1xuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgICAgIGNoZWNrRm9yUHJvamVjdExpc3QoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlRXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgc2hvd0luYm94KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0c0xpc3Quc2V0KFwiSW5ib3hcIixbXSk7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG4gICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgIHN0b3JhZ2UgJiZcbiAgICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICAgICk7XG4gICAgfVxufVxuICBcbmZ1bmN0aW9uIGNoZWNrRm9yUHJvamVjdExpc3QoKXtcbiAgICBjb25zdCBsb2NhbFN0b3JhZ2VQcm9qZWN0TGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNMaXN0XCIpO1xuICAgIGlmIChsb2NhbFN0b3JhZ2VQcm9qZWN0TGlzdCAhPSBudWxsIHx8IGxvY2FsU3RvcmFnZVByb2plY3RMaXN0ICE9IHVuZGVmaW5lZCl7XG4gICAgICAgIHByb2plY3RzTGlzdCA9IG5ldyBNYXAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VQcm9qZWN0TGlzdCkpO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBwcm9qZWN0c0xpc3Qua2V5cygpKXtcbiAgICAgICAgICAgIGlmIChrZXkgPT0gXCJJbmJveFwiKXtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RCdXR0b24oa2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHB1c2hUb0xvY2FsU3RvcmFnZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdEJ1dG9uKGRpdil7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwicHJvamVjdEJ1dHRvblwiO1xuICAgIGJ1dHRvbi5pZCA9IFwiY3JlYXRlUHJvamVjdEJ1dHRvblwiO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7YWRkTmV3UHJvamVjdChkaXYsIFwicHJvamVjdFwiKX0pXG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoY3JlYXRlSW1nKG51bGwsIFwic2lkZW5hdkltYWdlXCIsIGFkZCkpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KFwicFwiLCBudWxsLCBcInNpZGVuYXZUZXh0XCIsIFwiQWRkIFByb2plY3RcIikpO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdQcm9qZWN0KGNyZWF0ZVByb2plY3REaXYsIHR5cGUpe1xuICAgIHRyeXtcbiAgICAgICAgY3JlYXRlUHJvamVjdERpdi5yZW1vdmVDaGlsZChjcmVhdGVQcm9qZWN0RGl2Lmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIGNhdGNoKGUpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGluIGFkZE5ld1Byb2plY3QgXFxuXCIgKyBlKTtcbiAgICB9XG4gICAgZmluYWxseXtcbiAgICAgICAgYWRkSW5wdXQoY3JlYXRlUHJvamVjdERpdiwgdHlwZSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZElucHV0KGRpdiwgdHlwZSwgcHJvamVjdCA9IG51bGwpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5pZCA9IFwiaW5wdXRDb250YWluZXJcIjtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpZiAodHlwZSA9PSBcInByb2plY3RcIil7XG4gICAgICAgIGlucHV0LmlkID0gXCJjcmVhdGVQcm9qZWN0SW5wdXRcIjtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBcIlByb2plY3QgbmFtZVwiO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PSBcInRhc2tcIil7XG4gICAgICAgIGlucHV0LmlkID0gXCJjcmVhdGVUYXNrSW5wdXRcIjtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBcIlRhc2sgbmFtZVwiO1xuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgY29uc3QgZGl2QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkJ1dHRvbnMuaWQgPSBcImNyZWF0ZVByb2plY3REaXZCdXR0b25zXCI7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkJ1dHRvbnMpO1xuICAgIFxuICAgIGNvbnN0IGJ1dHRvbkFkZCA9IGNyZWF0ZUJ1dHRvbihcInByb2plY3RBZGRcIiwgXCJhZGRDYW5jZWxCdXR0b25cIiwgXCJBZGRcIik7XG4gICAgYnV0dG9uQWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBpZiAodHlwZSA9PSBcInByb2plY3RcIil7XG4gICAgICAgICAgICBhZGRQcm9qZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT0gXCJ0YXNrXCIpe1xuICAgICAgICAgICAgYWRkVGFzayhwcm9qZWN0LCBjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgZGl2QnV0dG9ucy5hcHBlbmRDaGlsZChidXR0b25BZGQpO1xuXG4gICAgY29uc3QgYnV0dG9uQ2FuY2VsID0gY3JlYXRlQnV0dG9uKFwicHJvamVjdENhbmNlbFwiLCBcImFkZENhbmNlbEJ1dHRvblwiLCBcIkNhbmNlbFwiLCk7XG4gICAgYnV0dG9uQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBpZiAodHlwZSA9PSBcInByb2plY3RcIil7XG4gICAgICAgICAgICByZW1vdmVQcm9qZWN0SW5wdXQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PSBcInRhc2tcIil7XG4gICAgICAgICAgICByZW1vdmVUYXNrSW5wdXQoY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGRpdkJ1dHRvbnMuYXBwZW5kQ2hpbGQoYnV0dG9uQ2FuY2VsKTtcblxuICAgIGlucHV0LmZvY3VzKCk7XG4gICAgcmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCl7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZVByb2plY3RJbnB1dFwiKTtcbiAgICBjb25zdCB0YXNrc0luUHJvamVjdCA9IFtdO1xuICAgIGlmIChwcm9qZWN0TmFtZS52YWx1ZSA9PSBcIlwiKXtcbiAgICAgICAgcHJvamVjdE5hbWUucGxhY2Vob2xkZXIgPSBcIkNhbid0IGJlIGVtcHR5XCI7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHByb2plY3RzTGlzdC5oYXMocHJvamVjdE5hbWUudmFsdWUpKXtcbiAgICAgICAgcHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xuICAgICAgICBwcm9qZWN0TmFtZS5wbGFjZWhvbGRlciA9IFwiTmFtZSBleGlzdHNcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjcmVhdGVQcm9qZWN0QnV0dG9uKHByb2plY3ROYW1lLnZhbHVlKTtcbiAgICBwcm9qZWN0c0xpc3Quc2V0KHByb2plY3ROYW1lLnZhbHVlLCBbXSk7XG4gICAgaWYgKGxvY2FsU3RvcmFnZUV4aXN0cyl7XG4gICAgICAgIHB1c2hUb0xvY2FsU3RvcmFnZSgpO1xuICAgIH1cbiAgICByZW1vdmVQcm9qZWN0SW5wdXQoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdElucHV0KCl7XG4gICAgYWRkUHJvamVjdEJ1dG9uKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlUHJvamVjdERpdlwiKSk7XG4gICAgY3JlYXRlUHJvamVjdERpdi5yZW1vdmVDaGlsZChjcmVhdGVQcm9qZWN0RGl2LmZpcnN0Q2hpbGQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0QnV0dG9uKG5hbWUpe1xuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihcInByb2plY3RCdXR0b25cIisgcHJvamVjdHNMaXN0Lmxlbmd0aCwgXCJwcm9qZWN0QnV0dG9uXCIpO1xuXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGNyZWF0ZUltZyhudWxsLCBcInNpZGVuYXZJbWFnZVwiLCBsaXN0KSk7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHQoXCJwXCIsIG51bGwsIFwic2lkZW5hdlRleHRcIiwgbmFtZSkpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgYnV0dG9uQ2xpY2tlZChidXR0b24pO1xuICAgIH0pXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBjcmVhdGVCdXR0b24obnVsbCxcImNsb3NlQnV0dG9uXCIsbnVsbCk7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGRlbGV0ZVByb2plY3QobmFtZSwgYnV0dG9uKTtcbiAgICB9KVxuXG4gICAgY29uc3QgaW1nID0gY3JlYXRlSW1nKG51bGwsIFwic2lkZW5hdkltYWdlXCIsIGNsb3NlKTtcbiAgICBpbWcuY2xhc3NMaXN0LmFkZChcImNsb3NlQnV0dG9uSW1nXCIpO1xuICAgIGNsb3NlQnV0dG9uLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pXG5cbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNDb250YWluZXJcIik7XG4gICAgcHJvamVjdHNDb250YWluZXIuaW5zZXJ0QmVmb3JlKGJ1dHRvbiwgcHJvamVjdHNDb250YWluZXIubGFzdENoaWxkKTtcblxufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KG5hbWUsIGJ1dHRvbil7XG4gICAgcHJvamVjdHNMaXN0LmRlbGV0ZShuYW1lLnRvU3RyaW5nKCkpO1xuICAgIGlmIChsb2NhbFN0b3JhZ2VFeGlzdHMpe1xuICAgICAgICBwdXNoVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG4gICAgYnV0dG9uLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrKHByb2plY3QsIGNvbnRhaW5lcil7XG4gICAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVUYXNrSW5wdXRcIik7XG4gICAgY29uc3QgdGFza05hbWUgPSB0YXNrSW5wdXQudmFsdWU7XG4gICAgaWYgKHByb2plY3QgPT0gbnVsbCl7XG4gICAgICAgIHByb2plY3QgPSBcIkluYm94XCI7XG4gICAgfVxuICAgIGlmICh0YXNrTmFtZSA9PSBcIlwiKXtcbiAgICAgICAgdGFza0lucHV0LnBsYWNlaG9sZGVyID0gXCJDYW4ndCBiZSBlbXB0eVwiO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb2plY3RzTGlzdC5oYXMocHJvamVjdCkpe1xuICAgICAgICBjb25zdCBwcm9qZWN0VmFsdWVzID0gWy4uLnByb2plY3RzTGlzdC5nZXQocHJvamVjdCkudmFsdWVzKCldO1xuICAgICAgICBpZiAocHJvamVjdFZhbHVlcy5pbmNsdWRlcyh0YXNrTmFtZSkpe1xuICAgICAgICAgICAgdGFza0lucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIHRhc2tJbnB1dC5wbGFjZWhvbGRlciA9IFwiVGhpcyB0YXNrIGFscmVhZHkgZXhpc3RzXCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvamVjdHNMaXN0LnNldChwcm9qZWN0LCBwcm9qZWN0c0xpc3QuZ2V0KHByb2plY3QpLmNvbmNhdCh0YXNrTmFtZSkpO1xuICAgIGlmIChsb2NhbFN0b3JhZ2VFeGlzdHMpe1xuICAgICAgICBwdXNoVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG4gICAgcmVtb3ZlVGFza0lucHV0KGNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2tJbnB1dChjb250YWluZXIpe1xuICAgIHNob3dJbmJveCgpO1xuICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza0J1dHRvbih0YXNrTmFtZSwgcHJvamVjdE5hbWUpe1xuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihcInRhc2tCdXR0b25cIisgdGFza05hbWUsIFwidGFza0J1dHRvblwiKTtcblxuICAgIC8vIGJ1dHRvbi5hcHBlbmRDaGlsZChjcmVhdGVJbWcobnVsbCwgXCJzaWRlbmF2SW1hZ2VcIiwgbGlzdCkpO1xuICAgIGNvbnN0IGNoZWNrQnV0dG9uID0gY3JlYXRlQnV0dG9uKG51bGwsIFwiY2hlY2tCdXR0b25cIik7XG5cbiAgICBjb25zdCB0ZXh0ID0gY3JlYXRlVGV4dChcInBcIiwgbnVsbCwgXCJzaWRlbmF2VGV4dFwiLCB0YXNrTmFtZSk7XG4gICAgY2hlY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNoZWNrQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjaGVja0J1dHRvbkFjdGl2ZVwiKTtcbiAgICAgICAgdGV4dC5jbGFzc0xpc3QudG9nZ2xlKFwiY2hlY2tCdXR0b25BY3RpdmVUZXh0XCIpO1xuICAgIH0pXG5cbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoY2hlY2tCdXR0b24pO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybjtcbiAgICB9KVxuXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBjcmVhdGVCdXR0b24obnVsbCxcImNsb3NlQnV0dG9uXCIsbnVsbCk7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGRlbGV0ZVRhc2sodGFza05hbWUsIGJ1dHRvbiwgcHJvamVjdE5hbWUpO1xuICAgICAgICByZXR1cm47XG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhaW5lckZvcklucHV0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lckZvcklucHV0cy5jbGFzc05hbWUgPSBcImNvbnRhaW5lckZvcklucHV0c1wiO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChjb250YWluZXJGb3JJbnB1dHMpO1xuXG4gICAgY29uc3QgY29sb3JJbnB1dCA9IGNyZWF0ZUlucHV0KG51bGwsIFwiY29sb3JJbnB1dFwiLCBcImNvbG9yXCIpO1xuICAgIGNvbG9ySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHRleHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JJbnB1dC52YWx1ZTtcbiAgICB9KVxuICAgIGNvbnRhaW5lckZvcklucHV0cy5hcHBlbmRDaGlsZChjb2xvcklucHV0KTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBjcmVhdGVJbnB1dChudWxsLCBcImRhdGVJbnB1dFwiLCBcImRhdGVcIik7XG4gICAgY29udGFpbmVyRm9ySW5wdXRzLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgICBjb25zdCBpbWcgPSBjcmVhdGVJbWcobnVsbCwgXCJzaWRlbmF2SW1hZ2VcIiwgY2xvc2UpO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiY2xvc2VCdXR0b25JbWdcIik7XG4gICAgY2xvc2VCdXR0b24uYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIGNvbnRhaW5lckZvcklucHV0cy5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tDb250YWluZXJcIik7XG4gICAgY29udGFpbmVyLmluc2VydEJlZm9yZShidXR0b24sIGNvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgIHJldHVybjtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGFza0NvbG9yKGNvbG9yUGlja2VkICxiYWNrZ3JvdW5kKXtcbiAgICBjb25zb2xlLmxvZyhjb2xvclBpY2tlZCk7XG4gICAgcmV0dXJuIGJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JQaWNrZWQudmFsdWU7XG5cbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayh0YXNrTmFtZSwgYnV0dG9uLCBwcm9qZWN0TmFtZSl7XG4gICAgbGV0IHByb2plY3QgPSBwcm9qZWN0c0xpc3QuZ2V0KHByb2plY3ROYW1lLnRvU3RyaW5nKCkpO1xuICAgIHByb2plY3QuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRhc2tOYW1lKXtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNMaXN0LnNldChwcm9qZWN0TmFtZSwgcHJvamVjdCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNMaXN0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaChlKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhbid0IGRlbGV0ZSB0YXNrOiBcXG5cIiArIGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAobG9jYWxTdG9yYWdlRXhpc3RzKXtcbiAgICAgICAgcHVzaFRvTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuICAgIGJ1dHRvbi5yZW1vdmUoKTtcbiAgICBcbn1cblxuXG5mdW5jdGlvbiBwdXNoVG9Mb2NhbFN0b3JhZ2UoKXtcbiAgICB0cnl7XG4gICAgICAgIGNvbnN0IG1hcFN0cmluZyA9IEpTT04uc3RyaW5naWZ5KEFycmF5LmZyb20ocHJvamVjdHNMaXN0LmVudHJpZXMoKSkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzTGlzdFwiLCBtYXBTdHJpbmcpO1xuICAgIH1cbiAgICBjYXRjaChlKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciB3aXRoIHdyaXRpbmcgaW5mbyB0byBsb2NhbFN0b3JhZ2UgXFxuXCIgKyBlKTtcbiAgICB9XG59XG5cbiIsImltcG9ydCAnLi4vc3R5bGVzL3VpLmNzcydcbmltcG9ydCBpbmJveCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2luYm94LnN2Zyc7XG5pbXBvcnQgdG9kYXkgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy90b2RheS5zdmcnO1xuaW1wb3J0IHdlZWsgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy93ZWVrLnN2Zyc7XG5pbXBvcnQgeyBjcmVhdGVJbWcsIGNyZWF0ZVRleHQsIGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4vYnVpbGRlcnMnO1xuXG5pbXBvcnQgeyBhZGRQcm9qZWN0QnV0b24gfSBmcm9tICcuL3Byb2plY3RzQW5kVGFza3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2lkZW5hdigpe1xuICAgIGNvbnN0IHNpZGVuYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzaWRlbmF2Jyk7XG4gICAgc2lkZW5hdkNvbnRhaW5lci5pZCA9IFwic2lkZW5hdlwiO1xuXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NvbnRhaW5lcicpO1xuICAgIG1haW5Db250YWluZXIuaWQgPSBcIm1haW5TaWRlbmF2Q29udGFpbmVyXCI7XG4gICAgc2lkZW5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2lkZUJ1dHRvbihcIkluYm94XCIsIGluYm94KSk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTaWRlQnV0dG9uKFwiVG9kYXlcIiwgdG9kYXkpKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVNpZGVCdXR0b24oXCJUaGlzIHdlZWtcIiwgd2VlaykpO1xuICAgIFxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dChcImRpdlwiLCBcInNpZGVuYXZQcm9qZWN0VGV4dFwiLCBudWxsLCBcIlByb2plY3RzXCIpKTtcblxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY29udGFpbmVyJyk7XG4gICAgcHJvamVjdHNDb250YWluZXIuaWQgPSBcInByb2plY3RzQ29udGFpbmVyXCI7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lcik7XG5cbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0Q29udGFpbmVyKCkpO1xuXG4gICAgcmV0dXJuIHNpZGVuYXZDb250YWluZXI7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlU2lkZUJ1dHRvbihuYW1lLCBpY29uKXtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihudWxsLCBcInNpZGVuYXZCdXR0b25cIik7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGNyZWF0ZUltZyhudWxsLCBcInNpZGVuYXZJbWFnZVwiLCBpY29uKSk7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHQoXCJwXCIsIG51bGwsIFwic2lkZW5hdlRleHRcIiwgbmFtZSkpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICBidXR0b25DbGlja2VkKGJ1dHRvbik7XG4gICAgfSlcbiAgICBpZiAobmFtZSA9PT0gXCJJbmJveFwiKXtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b25DbGlja2VkXCIpO1xuICAgIH1cbiAgICByZXR1cm4gYnV0dG9uO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidXR0b25DbGlja2VkKGJ1dHRvbil7XG4gICAgY29uc3QgYnV0dG9uQ2xpY2tlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uQ2xpY2tlZFwiKTtcbiAgICBpZiAoIWJ1dHRvbkNsaWNrZWQpe1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbkNsaWNrZWRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYnV0dG9uQ2xpY2tlZC5jbGFzc0xpc3QucmVtb3ZlKFwiYnV0dG9uQ2xpY2tlZFwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbkNsaWNrZWRcIik7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RDb250YWluZXIoKXtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaWQgPSBcImNyZWF0ZVByb2plY3REaXZcIjtcblxuICAgIGFkZFByb2plY3RCdXRvbihkaXYpO1xuXG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJpZ2h0U2VjdGlvbigpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5pZCA9IFwicmlnaHRDb250YWluZXJcIjtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb250YWluZXInKTtcbiAgICBjb250YWluZXIuaWQgPSBcImhlYWRlckNvbnRhaW5lclwiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KFwiaDFcIiwgXCJoZWFkZXJUZXh0XCIsIG51bGwsIFwiTGlzdCBkb1RvXCIpKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb250YWllcicpO1xuICAgIGNvbnRhaW5lci5pZCA9IFwibWFpbkNvbnRhaW5lclwiO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRleHQoXCJoMlwiLCBcIm1haW5TZWN0aW9uSGVhZGVyXCIsIG51bGwsIFwiSW5ib3hcIikpO1xuXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NvbnRhaW5lcicpO1xuICAgIHRhc2tDb250YWluZXIuaWQgPSBcInRhc2tDb250YWluZXJcIjtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=