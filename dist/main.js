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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createAboutPage() {\r\n\r\n    const introductionDiv = document.createElement(\"div\");\r\n    introductionDiv.classList.add(\"introduction\");\r\n\r\n    const leftDiv = document.createElement(\"div\");\r\n    leftDiv.classList.add(\"left-side\");\r\n    const introImg = document.createElement(\"img\");\r\n    introImg.classList.add(\"image-left-side\");\r\n    introImg.setAttribute(\"src\", \"Images/photo-1514933651103-005eec06c04b.jpg\");\r\n\r\n    leftDiv.appendChild(introImg);\r\n\r\n    const rightDiv = document.createElement(\"div\");\r\n    rightDiv.classList.add(\"right-side\");\r\n\r\n    const introText = document.createElement(\"div\");\r\n    introText.classList.add(\"intro\");\r\n    introText.textContent = \"About our establishment\";\r\n\r\n    const loremIpsumText = document.createElement(\"div\");\r\n    loremIpsumText.classList.add(\"lorem-text\");\r\n    loremIpsumText.textContent = \"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\";\r\n\r\n    rightDiv.appendChild(introText);\r\n    rightDiv.appendChild(loremIpsumText);\r\n\r\n    introductionDiv.appendChild(leftDiv);\r\n    introductionDiv.appendChild(rightDiv);\r\n\r\n    return introductionDiv;\r\n}\r\n\r\n\r\nfunction createChefSection() {\r\n\r\n    const chefAboutSection = document.createElement(\"div\");\r\n\r\n    const title = document.createElement(\"div\");\r\n    title.classList.add(\"chefSectionTitle\")\r\n    title.textContent = \"Our world class chefs:\";\r\n\r\n\r\n\r\n\r\n    const chefSection = document.createElement(\"div\");\r\n    chefSection.classList.add(\"chef-section\");\r\n\r\n\r\n\r\n    const chefDiv1 = document.createElement(\"div\");\r\n    chefDiv1.classList.add(\"chef-div\");\r\n    const chefImg1 = document.createElement(\"img\");\r\n    chefImg1.classList.add(\"chef-img\");\r\n    chefImg1.setAttribute(\"src\", \"./Images/Chefs-Images/benson.jpg\");\r\n    const chefName1 = document.createElement(\"div\");\r\n    chefName1.textContent = \"Benson\";\r\n    const chefQuote1 = document.createElement(\"div\");\r\n    chefQuote1.classList.add(\"quotes\");\r\n    chefQuote1.textContent = \"\\\"GET BACK TO WORK OR YOU 'RE FIRED!\\\"\";\r\n\r\n    chefDiv1.appendChild(chefImg1);\r\n    chefDiv1.appendChild(chefName1);\r\n    chefDiv1.appendChild(chefQuote1);\r\n\r\n    const chefDiv2 = document.createElement(\"div\");\r\n    chefDiv2.classList.add(\"chef-div\");\r\n    const chefImg2 = document.createElement(\"img\");\r\n    chefImg2.classList.add(\"chef-img\");\r\n    chefImg2.setAttribute(\"src\", \"./Images/Chefs-Images/bobs-burgers-1632818603.jpg\");\r\n    const chefName2 = document.createElement(\"div\");\r\n    chefName2.textContent = \"Bob Belcher\";\r\n    const chefQuote2 = document.createElement(\"div\");\r\n    chefQuote2.classList.add(\"quotes\");\r\n    chefQuote2.textContent = \"\\\"Linda, Torpedo Jones said he liked my burger!I want that on my tombstone.Seriously, I do .\\\"\";\r\n\r\n    chefDiv2.appendChild(chefImg2);\r\n    chefDiv2.appendChild(chefName2);\r\n    chefDiv2.appendChild(chefQuote2);\r\n\r\n    const chefDiv3 = document.createElement(\"div\");\r\n    chefDiv3.classList.add(\"chef-div\");\r\n    const chefImg3 = document.createElement(\"img\");\r\n    chefImg3.classList.add(\"chef-img\");\r\n    chefImg3.setAttribute(\"src\", \"./Images/Chefs-Images/chef-mullet.jpg\");\r\n    const chefName3 = document.createElement(\"div\");\r\n    chefName3.textContent = \"Sensai\";\r\n    const chefQuote3 = document.createElement(\"div\");\r\n    chefQuote3.classList.add(\"quotes\");\r\n    chefQuote3.textContent = \"\\\"NOOOOO!\\\"\";\r\n\r\n    chefDiv3.appendChild(chefImg3);\r\n    chefDiv3.appendChild(chefName3);\r\n    chefDiv3.appendChild(chefQuote3);\r\n\r\n    const chefDiv4 = document.createElement(\"div\");\r\n    chefDiv4.classList.add(\"chef-div\");\r\n    const chefImg4 = document.createElement(\"img\");\r\n    chefImg4.classList.add(\"chef-img\");\r\n    chefImg4.setAttribute(\"src\", \"./Images/Chefs-Images/chowder.jpg\");\r\n    const chefName4 = document.createElement(\"div\");\r\n    chefName4.textContent = \"Mung Daal\";\r\n    const chefQuote4 = document.createElement(\"div\");\r\n    chefQuote4.classList.add(\"quotes\");\r\n    chefQuote4.textContent = \"\\\"You don 't know what you're missing...\\\"\";\r\n\r\n    chefDiv4.appendChild(chefImg4);\r\n    chefDiv4.appendChild(chefName4);\r\n    chefDiv4.appendChild(chefQuote4);\r\n\r\n\r\n\r\n\r\n    chefSection.appendChild(title);\r\n    chefSection.appendChild(chefDiv1);\r\n    chefSection.appendChild(chefDiv2);\r\n    chefSection.appendChild(chefDiv3);\r\n    chefSection.appendChild(chefDiv4);\r\n\r\n    chefAboutSection.appendChild(title);\r\n    chefAboutSection.appendChild(chefSection);\r\n\r\n\r\n    return chefAboutSection;\r\n}\r\n\r\n\r\n\r\nfunction initAboutPage() {\r\n    const content = document.getElementById(\"content\");\r\n    content.textContent = \"\";\r\n    content.appendChild(createAboutPage());\r\n    content.appendChild(createChefSection());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initAboutPage);\n\n//# sourceURL=webpack://package/./src/aboutPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing */ \"./src/landing.js\");\n/* harmony import */ var _aboutPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutPage */ \"./src/aboutPage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n\r\n\r\n\r\n\r\n//Implement method that removes active class from buttons\r\n\r\nconst content = document.getElementById(\"content\");\r\n\r\nfunction setActiveClass(button) {\r\n    const navButtons = document.querySelectorAll(\".nav-text\");\r\n\r\n    navButtons.forEach((navButton) => {\r\n        if (navButton != this) {\r\n            navButton.classList.remove(\"active\");\r\n        }\r\n    });\r\n    button.classList.add(\"active\");\r\n}\r\n\r\n\r\nfunction createNavBar() {\r\n\r\n    const navDiv = document.createElement(\"div\");\r\n    navDiv.classList.add(\"topnav\");\r\n\r\n    const aHome = document.createElement(\"button\");\r\n    aHome.classList.add(\"nav-text\");\r\n    aHome.textContent = \"Home\";\r\n    aHome.addEventListener(\"click\", (e) => {\r\n        if (aHome.classList.contains(\"active\"))\r\n            return;\r\n        setActiveClass(aHome);\r\n        (0,_landing__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    })\r\n\r\n    const navRight = document.createElement(\"div\");\r\n    navRight.classList.add(\"nav-right\");\r\n    const menuDiv = document.createElement(\"button\");\r\n    menuDiv.classList.add(\"nav-text\");\r\n    menuDiv.textContent = \"Menu\";\r\n    menuDiv.addEventListener(\"click\", (e) => {\r\n        if (menuDiv.classList.contains(\"active\"))\r\n            return;\r\n        setActiveClass(menuDiv);\r\n        (0,_menuPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    })\r\n    const aboutDiv = document.createElement(\"button\");\r\n    aboutDiv.classList.add(\"nav-text\");\r\n    aboutDiv.textContent = \"About\";\r\n    aboutDiv.addEventListener(\"click\", (e) => {\r\n        if (aboutDiv.classList.contains(\"active\"))\r\n            return;\r\n        setActiveClass(aboutDiv);\r\n        (0,_aboutPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    })\r\n\r\n    const contactDiv = document.createElement(\"button\");\r\n    contactDiv.classList.add(\"nav-text\");\r\n    contactDiv.textContent = \"Contact\";\r\n    contactDiv.addEventListener(\"click\", (e) => {\r\n        if (contactDiv.classList.contains(\"active\"))\r\n            return;\r\n        setActiveClass(contactDiv);\r\n        //contact method missing\r\n    })\r\n\r\n    navRight.appendChild(menuDiv);\r\n    navRight.appendChild(aboutDiv);\r\n    navRight.appendChild(contactDiv);\r\n\r\n    navDiv.appendChild(aHome);\r\n    navDiv.appendChild(navRight);\r\n\r\n\r\n    //navDiv ready to append to content\r\n    return navDiv;\r\n}\r\n\r\n\r\nfunction initNavBar() {\r\n    const main = document.getElementById(\"main\");\r\n    main.appendChild(createNavBar());\r\n}\r\n\r\ninitNavBar();\r\n\r\n\r\n//initMenuPage();\r\n\r\n\r\n//initAboutPage();\n\n//# sourceURL=webpack://package/./src/index.js?");

/***/ }),

/***/ "./src/landing.js":
/*!************************!*\
  !*** ./src/landing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction backgroundImage() {\r\n    let backgroundImageDiv = document.createElement(\"div\");\r\n    backgroundImageDiv.classList.add(\"background-image\");\r\n    const bText = document.createElement(\"div\");\r\n    bText.classList.add(\"background-text\");\r\n    bText.textContent = \"Dorsia\";\r\n    backgroundImageDiv.appendChild(bText);\r\n    return backgroundImageDiv;\r\n}\r\n\r\n\r\n\r\n\r\n\r\nfunction creatorTag() {\r\n\r\n    const cTag = document.createElement(\"div\");\r\n    cTag.classList.add(\"creator-tag\");\r\n\r\n    const footer = document.createElement(\"div\");\r\n    footer.classList.add(\"footer\");\r\n\r\n    const gitLink = document.createElement(\"a\");\r\n    gitLink.classList.add(\"github-link\");\r\n    gitLink.setAttribute(\"href\", \"https://github.com/EdgarGrcs\");\r\n\r\n    //check why img not rendering\r\n\r\n    const gitImg = document.createElement(\"img\");\r\n    gitImg.classList.add(\"git-icon\");\r\n    gitImg.setAttribute(\"src\", \"./Images/github.png\");\r\n\r\n    gitLink.appendChild(gitImg);\r\n    gitLink.textContent = \"EdgarGrcs\";\r\n\r\n    footer.appendChild(gitLink);\r\n\r\n    cTag.appendChild(footer);\r\n\r\n    return cTag;\r\n}\r\n\r\n\r\nfunction initWebsite() {\r\n    const content = document.getElementById(\"content\");\r\n    content.textContent = \"\";\r\n    content.appendChild(backgroundImage());\r\n    content.appendChild(creatorTag());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initWebsite);\n\n//# sourceURL=webpack://package/./src/landing.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenuPage() {\r\n\r\n    const menuSection = document.createElement(\"div\");\r\n    menuSection.classList.add(\"menu-section\");\r\n\r\n    const menuLeftSide = document.createElement(\"div\");\r\n    menuLeftSide.classList.add(\"menu-left-side\");\r\n\r\n    const innerLeft = document.createElement(\"div\");\r\n    innerLeft.classList.add(\"inner-left\");\r\n\r\n    const menuText = document.createElement(\"div\");\r\n    menuText.classList.add(\"menu-text\");\r\n    menuText.textContent = \"Our Specialties\";\r\n\r\n    const servings1 = document.createElement(\"div\");\r\n    servings1.classList.add(\"servings\");\r\n    servings1.textContent = \"Hors d'oeuvre\";\r\n    const servingDescription1 = document.createElement(\"div\");\r\n    servingDescription1.classList.add(\"serving-description\");\r\n    servingDescription1.textContent = \"Leek Confit and Goat Cheese Crostini, topped with Asian Pear and Smoked Paprika\";\r\n\r\n    const servings2 = document.createElement(\"div\");\r\n    servings2.classList.add(\"servings\");\r\n    servings2.textContent = \"Soup\";\r\n    const servingDescription2 = document.createElement(\"div\");\r\n    servingDescription2.classList.add(\"serving-description\");\r\n    servingDescription2.textContent = \"Cauliflower Soup With Seared Scallops, Lemon Oil, and Caviar\";\r\n\r\n    const servings3 = document.createElement(\"div\");\r\n    servings3.classList.add(\"servings\");\r\n    servings3.textContent = \"Entrée\";\r\n    const servingDescription3 = document.createElement(\"div\");\r\n    servingDescription3.classList.add(\"serving-description\");\r\n    servingDescription3.textContent = \"Boneless Lamb with Mushroom Crust and Leek Purée, paired with Sautéed Shiitake Mushrooms and Miniature Fingerling Potatoes\";\r\n\r\n    const servings4 = document.createElement(\"div\");\r\n    servings4.classList.add(\"servings\");\r\n    servings4.textContent = \"Dessert\";\r\n    const servingDescription4 = document.createElement(\"div\");\r\n    servingDescription4.classList.add(\"serving-description\");\r\n    servingDescription4.textContent = \"Meyer Lemon Semifreddo, with Candied Lemon Peel and Sugared Pistachios\";\r\n\r\n    const servings5 = document.createElement(\"div\");\r\n    servings5.classList.add(\"servings\");\r\n    servings5.textContent = \"Sturgeon\";\r\n    const servingDescription5 = document.createElement(\"div\");\r\n    servingDescription5.classList.add(\"serving-description\");\r\n    servingDescription5.textContent = \"Smoked Potato Salad, Trout Roe, Russian Cream, Dill\";\r\n\r\n    innerLeft.appendChild(menuText);\r\n    innerLeft.appendChild(servings1);\r\n    innerLeft.appendChild(servingDescription1);\r\n    innerLeft.appendChild(servings2);\r\n    innerLeft.appendChild(servingDescription2);\r\n    innerLeft.appendChild(servings3);\r\n    innerLeft.appendChild(servingDescription3);\r\n    innerLeft.appendChild(servings4);\r\n    innerLeft.appendChild(servingDescription4);\r\n    innerLeft.appendChild(servings5);\r\n    innerLeft.appendChild(servingDescription5);\r\n\r\n    menuLeftSide.appendChild(innerLeft);\r\n\r\n    const menuRightSide = document.createElement(\"div\");\r\n    menuRightSide.classList.add(\"menu-right-side\");\r\n    const menuImg = document.createElement(\"img\");\r\n    menuImg.classList.add(\"menu-dish\");\r\n    menuImg.setAttribute(\"src\", \"Images/luxury-dish.jpg\");\r\n\r\n    menuRightSide.appendChild(menuImg);\r\n\r\n    menuSection.appendChild(menuLeftSide);\r\n    menuSection.appendChild(menuRightSide);\r\n\r\n\r\n    return menuSection;\r\n}\r\n\r\nfunction createMenuPagePictures() {\r\n    const secondMenuSection = document.createElement(\"div\");\r\n    secondMenuSection.classList.add(\"secondMenuSection\");\r\n\r\n    const menuPicture1 = document.createElement(\"img\");\r\n    menuPicture1.classList.add(\"menuPicture\");\r\n    menuPicture1.setAttribute(\"src\", \"Images/golden-steak.jpg\");\r\n\r\n    const menuPicture2 = document.createElement(\"img\");\r\n    menuPicture2.classList.add(\"menuPicture\");\r\n    menuPicture2.setAttribute(\"src\", \"Images/plate.jpg\");\r\n\r\n    const menuPicture3 = document.createElement(\"img\");\r\n    menuPicture3.classList.add(\"menuPicture\");\r\n    menuPicture3.setAttribute(\"src\", \"Images/wagyu-beef.jpg\");\r\n\r\n    secondMenuSection.appendChild(menuPicture1);\r\n    secondMenuSection.appendChild(menuPicture2);\r\n    secondMenuSection.appendChild(menuPicture3);\r\n\r\n\r\n    return secondMenuSection;\r\n}\r\n\r\n\r\nfunction initMenuPage() {\r\n\r\n    const content = document.getElementById(\"content\");\r\n    content.textContent = \"\";\r\n    content.appendChild(createMenuPage());\r\n    content.appendChild(createMenuPagePictures());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initMenuPage);\n\n//# sourceURL=webpack://package/./src/menuPage.js?");

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