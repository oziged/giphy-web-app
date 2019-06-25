/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var _sass_main_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);\n/* harmony import */ var _js_start__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_start__WEBPACK_IMPORTED_MODULE_1__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz8zNzAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zYXNzL21haW4uc2Fzcyc7XG5pbXBvcnQgJy4vanMvc3RhcnQnOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zYXNzL21haW4uc2Fzcz9jZWUzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("var flex = document.querySelectorAll('.content_column');\nconsole.log(flex);\nvar xhr = new XMLHttpRequest();\nxhr.open('GET', 'https://api.giphy.com/v1/gifs/trending?api_key=wMqvSK3gHL65KRyFxTxyrNCUCJbskKtb&limit=25', true);\nxhr.send();\n\nxhr.onload = function () {\n  console.log(xhr.responseText);\n  var a = JSON.parse(xhr.responseText);\n  console.log(a);\n  a['data'].forEach(function (elem, index, array) {\n    var width = flex[1].clientWidth;\n    var img = document.createElement('img');\n    setListeners(img, a['data'][index]['images']['480w_still']['url'], a['data'][index]['images']['original']['url']);\n    img.src = a['data'][index]['images']['480w_still']['url'];\n    img.style.width = width + 'px'; // flex[Math.floor(Math.random()*3)].append(img);\n\n    console.log(flex[1]);\n    flex[1].append(img);\n  });\n};\n\nfunction setListeners(elem, pauseGif, playGif) {\n  elem.addEventListener('mouseenter', function () {\n    return elem.src = playGif;\n  });\n  elem.addEventListener('mouseleave', function () {\n    return elem.src = pauseGif;\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9zdGFydC5qcz9iMDQ0Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBmbGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRlbnRfY29sdW1uJyk7XG5jb25zb2xlLmxvZyhmbGV4KTtcbnZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbnhoci5vcGVuKCdHRVQnLCAnaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJlbmRpbmc/YXBpX2tleT13TXF2U0szZ0hMNjVLUnlGeFR4eXJOQ1VDSmJza0t0YiZsaW1pdD0yNScsIHRydWUpO1xueGhyLnNlbmQoKTtcblxueGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc29sZS5sb2coeGhyLnJlc3BvbnNlVGV4dCk7XG4gIHZhciBhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgY29uc29sZS5sb2coYSk7XG4gIGFbJ2RhdGEnXS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtLCBpbmRleCwgYXJyYXkpIHtcbiAgICB2YXIgd2lkdGggPSBmbGV4WzFdLmNsaWVudFdpZHRoO1xuICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBzZXRMaXN0ZW5lcnMoaW1nLCBhWydkYXRhJ11baW5kZXhdWydpbWFnZXMnXVsnNDgwd19zdGlsbCddWyd1cmwnXSwgYVsnZGF0YSddW2luZGV4XVsnaW1hZ2VzJ11bJ29yaWdpbmFsJ11bJ3VybCddKTtcbiAgICBpbWcuc3JjID0gYVsnZGF0YSddW2luZGV4XVsnaW1hZ2VzJ11bJzQ4MHdfc3RpbGwnXVsndXJsJ107XG4gICAgaW1nLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnOyAvLyBmbGV4W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSozKV0uYXBwZW5kKGltZyk7XG5cbiAgICBjb25zb2xlLmxvZyhmbGV4WzFdKTtcbiAgICBmbGV4WzFdLmFwcGVuZChpbWcpO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIHNldExpc3RlbmVycyhlbGVtLCBwYXVzZUdpZiwgcGxheUdpZikge1xuICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGVsZW0uc3JjID0gcGxheUdpZjtcbiAgfSk7XG4gIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZWxlbS5zcmMgPSBwYXVzZUdpZjtcbiAgfSk7XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);