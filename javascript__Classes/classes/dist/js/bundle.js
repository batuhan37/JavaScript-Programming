/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _productList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productList */ \"./src/js/productList.js\");\n/* harmony import */ var _json_products_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json/products.json */ \"./src/json/products.json\");\n\n\n\n\nconst element = document.querySelector('#appleProducts');\nconst appleProducts = new _productList__WEBPACK_IMPORTED_MODULE_0__.productList(_json_products_json__WEBPACK_IMPORTED_MODULE_1__, element);\n\nappleProducts.init();\n\n//# sourceURL=webpack://logisticscompany/./src/js/index.js?");

/***/ }),

/***/ "./src/js/productList.js":
/*!*******************************!*\
  !*** ./src/js/productList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productList\": () => (/* binding */ productList)\n/* harmony export */ });\nclass productList {\n  constructor(list, element){\n    this.list = list;\n    this.element = element;\n\n  }\n  init(){\n\n    this.render(this.list.products);\n\n  }\n\n  render(list) {\n    const element = this.element\n  \n    list.forEach((item) => {\n     element.innerHTML += `\n        <div class=\"col\">\n          <div class=\"card\">\n            <img src=\"${item.image}\" class=\"card-img-top\" alt=\"${item.name}\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">${item.name}</h5>\n              <p class=\"card-text\">${item.price} ${item.currency}</p>\n              <a href=\"#\" class=\"btn btn-primary\">Sepete Ekle</a>\n            </div>\n          </div>\n        </div>\n   `\n    });\n\n  }\n}\n\n//# sourceURL=webpack://logisticscompany/./src/js/productList.js?");

/***/ }),

/***/ "./src/json/products.json":
/*!********************************!*\
  !*** ./src/json/products.json ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"products\":[{\"name\":\"Macbook\",\"price\":1500,\"currency\":\"usd\",\"image\":\"\"},{\"name\":\"IMac\",\"price\":100000,\"currency\":\"tl\",\"image\":\"\"},{\"name\":\"Ipad mini\",\"price\":90000,\"currency\":\"tl\",\"image\":\"\"},{\"name\":\"Iphone\",\"price\":1000,\"currency\":\"usd\",\"image\":\"\"}]}');\n\n//# sourceURL=webpack://logisticscompany/./src/json/products.json?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;