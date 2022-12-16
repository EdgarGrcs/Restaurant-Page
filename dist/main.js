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

/***/ "./src/aboutPage.js":
/*!**************************!*\
  !*** ./src/aboutPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createAboutPage() {\r\n\r\n    const introductionDiv = document.createElement(\"div\");\r\n    introductionDiv.classList.add(\"introduction\");\r\n\r\n    const leftDiv = document.createElement(\"div\");\r\n    leftDiv.classList.add(\"left-side\");\r\n    const introImg = document.createElement(\"img\");\r\n    introImg.classList.add(\"image-left-side\");\r\n    introImg.setAttribute(\"src\", \"Images/photo-1514933651103-005eec06c04b.jpg\");\r\n\r\n    leftDiv.appendChild(introImg);\r\n\r\n    const rightDiv = document.createElement(\"div\");\r\n    rightDiv.classList.add(\"right-side\");\r\n\r\n    const introText = document.createElement(\"div\");\r\n    introText.classList.add(\"intro\");\r\n    introText.textContent = \"About our establishment\";\r\n\r\n    const loremIpsumText = document.createElement(\"div\");\r\n    loremIpsumText.classList.add(\"lorem-text\");\r\n    loremIpsumText.textContent = \"The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\";\r\n\r\n    rightDiv.appendChild(introText);\r\n    rightDiv.appendChild(loremIpsumText);\r\n\r\n    introductionDiv.appendChild(leftDiv);\r\n    introductionDiv.appendChild(rightDiv);\r\n\r\n    return introductionDiv;\r\n}\r\n\r\n\r\nfunction createChefSection() {\r\n\r\n    const chefSection = document.createElement(\"div\");\r\n    chefSection.classList.add(\"chef-section\");\r\n\r\n    const title = document.createElement(\"div\");\r\n    title.textContent = \"Our world class chefs:\";\r\n\r\n    const chefDiv1 = document.createElement(\"div\");\r\n    chefDiv1.classList.add(\"chef-div\");\r\n    const chefImg1 = document.createElement(\"img\");\r\n    chefImg1.classList.add(\"chef-img\");\r\n    chefImg1.setAttribute(\"src\", \"./Images/Chefs-Images/benson.jpg\");\r\n    const chefName1 = document.createElement(\"div\");\r\n    chefName1.textContent = \"Benson\";\r\n    const chefQuote1 = document.createElement(\"div\");\r\n    chefQuote1.classList.add(\"quotes\");\r\n    chefQuote1.textContent = \"GET BACK TO WORK OR YOU'RE FIRED!\";\r\n\r\n    chefDiv1.appendChild(chefImg1);\r\n    chefDiv1.appendChild(chefName1);\r\n    chefDiv1.appendChild(chefQuote1);\r\n\r\n    const chefDiv2 = document.createElement(\"div\");\r\n    chefDiv2.classList.add(\"chef-div\");\r\n    const chefImg2 = document.createElement(\"img\");\r\n    chefImg2.classList.add(\"chef-img\");\r\n    chefImg2.setAttribute(\"src\", \"./Images/Chefs-Images/bobs-burgers-1632818603.jpg\");\r\n    const chefName2 = document.createElement(\"div\");\r\n    chefName2.textContent = \"Bob Belcher\";\r\n    const chefQuote2 = document.createElement(\"div\");\r\n    chefQuote2.classList.add(\"quotes\");\r\n    chefQuote2.textContent = \"Linda, Torpedo Jones said he liked my burger! I want that on my tombstone. Seriously, I do.\";\r\n\r\n    chefDiv2.appendChild(chefImg2);\r\n    chefDiv2.appendChild(chefName2);\r\n    chefDiv2.appendChild(chefQuote2);\r\n\r\n    const chefDiv3 = document.createElement(\"div\");\r\n    chefDiv3.classList.add(\"chef-div\");\r\n    const chefImg3 = document.createElement(\"img\");\r\n    chefImg3.classList.add(\"chef-img\");\r\n    chefImg3.setAttribute(\"src\", \"./Images/Chefs-Images/chef-mullet.jpg\");\r\n    const chefName3 = document.createElement(\"div\");\r\n    chefName3.textContent = \"Sensai\";\r\n    const chefQuote3 = document.createElement(\"div\");\r\n    chefQuote3.classList.add(\"quotes\");\r\n    chefQuote3.textContent = \"NOOOOO!\";\r\n\r\n    chefDiv3.appendChild(chefImg3);\r\n    chefDiv3.appendChild(chefName3);\r\n    chefDiv3.appendChild(chefQuote3);\r\n\r\n    const chefDiv4 = document.createElement(\"div\");\r\n    chefDiv4.classList.add(\"chef-div\");\r\n    const chefImg4 = document.createElement(\"img\");\r\n    chefImg4.classList.add(\"chef-img\");\r\n    chefImg4.setAttribute(\"src\", \"./Images/Chefs-Images/chowder.jpg\");\r\n    const chefName4 = document.createElement(\"div\");\r\n    chefName4.textContent = \"Mung Daal\";\r\n    const chefQuote4 = document.createElement(\"div\");\r\n    chefQuote4.classList.add(\"quotes\");\r\n    chefQuote4.textContent = \"You don't know what you're missing...\";\r\n\r\n    chefDiv4.appendChild(chefImg4);\r\n    chefDiv4.appendChild(chefName4);\r\n    chefDiv4.appendChild(chefQuote4);\r\n\r\n\r\n\r\n\r\n    chefSection.appendChild(title);\r\n    chefSection.appendChild(chefDiv1);\r\n    chefSection.appendChild(chefDiv2);\r\n    chefSection.appendChild(chefDiv3);\r\n    chefSection.appendChild(chefDiv4);\r\n\r\n\r\n    return chefSection;\r\n}\r\n\r\n\r\n\r\nfunction initAboutPage() {\r\n    const content = document.getElementById(\"content\");\r\n    content.appendChild(createAboutPage());\r\n    content.appendChild(createChefSection());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initAboutPage);\n\n//# sourceURL=webpack://package/./src/aboutPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing */ \"./src/landing.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _aboutPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutPage */ \"./src/aboutPage.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n//initNavBar();\r\n//initWebsite();\r\n\r\n\r\n(0,_aboutPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://package/./src/index.js?");

/***/ }),

/***/ "./src/landing.js":
/*!************************!*\
  !*** ./src/landing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction backgroundImage() {\r\n    let backgroundImageDiv = document.createElement(\"div\");\r\n    backgroundImageDiv.classList.add(\"background-image\");\r\n    const bText = document.createElement(\"div\");\r\n    bText.classList.add(\"background-text\");\r\n    bText.textContent = \"Dorsia\";\r\n    backgroundImageDiv.appendChild(bText);\r\n    return backgroundImageDiv;\r\n}\r\n\r\n\r\n\r\n\r\n\r\nfunction creatorTag() {\r\n\r\n    const cTag = document.createElement(\"div\");\r\n    cTag.classList.add(\"creator-tag\");\r\n\r\n    const footer = document.createElement(\"div\");\r\n    footer.classList.add(\"footer\");\r\n\r\n    const gitLink = document.createElement(\"a\");\r\n    gitLink.classList.add(\"github-link\");\r\n    gitLink.setAttribute(\"href\", \"https://github.com/EdgarGrcs\");\r\n\r\n    //check why img not rendering\r\n\r\n    const gitImg = document.createElement(\"img\");\r\n    gitImg.classList.add(\"git-icon\");\r\n    gitImg.setAttribute(\"src\", \"./Images/github.png\");\r\n\r\n    gitLink.appendChild(gitImg);\r\n    gitLink.textContent = \"EdgarGrcs\";\r\n\r\n    footer.appendChild(gitLink);\r\n\r\n    cTag.appendChild(footer);\r\n\r\n    return cTag;\r\n}\r\n\r\n\r\nfunction initWebsite() {\r\n    const content = document.getElementById(\"content\");\r\n    content.appendChild(backgroundImage());\r\n    content.appendChild(creatorTag());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initWebsite);\n\n//# sourceURL=webpack://package/./src/landing.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createNavBar() {\r\n\r\n    const navDiv = document.createElement(\"div\");\r\n    navDiv.classList.add(\"topnav\");\r\n\r\n    const aHome = document.createElement(\"div\");\r\n    aHome.classList.add(\"nav-text\");\r\n    aHome.textContent = \"Home\";\r\n    const navRight = document.createElement(\"div\");\r\n    navRight.classList.add(\"nav-right\");\r\n    const menuDiv = document.createElement(\"div\");\r\n    menuDiv.classList.add(\"nav-text\");\r\n    menuDiv.textContent = \"Menu\";\r\n    const aboutDiv = document.createElement(\"div\");\r\n    aboutDiv.classList.add(\"nav-text\");\r\n    aboutDiv.textContent = \"About\";\r\n\r\n    const contactDiv = document.createElement(\"div\");\r\n    contactDiv.classList.add(\"nav-text\");\r\n    contactDiv.textContent = \"Contact\";\r\n\r\n    navRight.appendChild(menuDiv);\r\n    navRight.appendChild(aboutDiv);\r\n    navRight.appendChild(contactDiv);\r\n\r\n    navDiv.appendChild(aHome);\r\n    navDiv.appendChild(navRight);\r\n\r\n\r\n    //navDiv ready to append to content\r\n    return navDiv;\r\n}\r\n\r\n\r\nfunction initNavBar() {\r\n    const content = document.getElementById(\"content\");\r\n    content.appendChild(createNavBar());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initNavBar);\n\n//# sourceURL=webpack://package/./src/navbar.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;