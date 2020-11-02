module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/news.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/Socials.js":
/*!*******************************!*\
  !*** ./components/Socials.js ***!
  \*******************************/
/*! exports provided: SocialItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialItems", function() { return SocialItems; });
const SocialItems = [{
  social: 'Twitter',
  url: 'https://twitter.com/CosmereLatam',
  cName: 'tw',
  cIcon: 'tw_icon'
}, {
  social: 'Facebook',
  url: 'https://www.facebook.com/cosmerelatam',
  cName: 'fb',
  cIcon: 'fb_icon'
}, {
  social: 'Instagram',
  url: 'https://www.instagram.com/cosmerelatam/',
  cName: 'ig',
  cIcon: 'ig_icon'
}, {
  social: 'Youtube',
  url: 'https://www.youtube.com/channel/UCjnXHtHI0L4rfvTWccLuebQ',
  cName: 'yt',
  cIcon: 'yt_icon'
}, {
  social: 'Discord',
  url: '#',
  cName: 'dc',
  cIcon: 'dc_icon'
}];

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Socials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Socials */ "./components/Socials.js");
/* harmony import */ var _styles_mainStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/mainStyles */ "./styles/mainStyles.js");

var _jsxFileName = "D:\\Programacion\\DesarrolloWeb\\web-cosmerelatam\\cosmere-latam\\components\\footer.js";

 //import './../styles/footer.css';


function Footer(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_3__["footerStyle"].__hash}` + " " + "Footer",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_3__["footerStyle"].__hash}`,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_3__["footerStyle"].__hash}` + " " + "social",
        children: _Socials__WEBPACK_IMPORTED_MODULE_2__["SocialItems"].map((item, index) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_3__["footerStyle"].__hash}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: item.url,
              target: "_blank",
              rel: "noopener",
              className: `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_3__["footerStyle"].__hash}` + " " + (item.cName || ""),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_3__["footerStyle"].__hash}` + " " + (item.cIcon || "")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 37
            }, this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 33
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
        className: `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_3__["footerStyle"].__hash}` + " " + "line_1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_3__["footerStyle"].__hash}` + " " + "copyright",
        children: "\xA92020 dise\xF1ado y programado por Neodoom Xardax."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: _styles_mainStyles__WEBPACK_IMPORTED_MODULE_3__["footerStyle"].__hash,
      children: _styles_mainStyles__WEBPACK_IMPORTED_MODULE_3__["footerStyle"]
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/goTop.js":
/*!*****************************!*\
  !*** ./components/goTop.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GoTop; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_globalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globalStyles */ "./styles/globalStyles.js");


var _jsxFileName = "D:\\Programacion\\DesarrolloWeb\\web-cosmerelatam\\cosmere-latam\\components\\goTop.js";



function GoTop(props) {
  const handleScroll = event => {
    event.preventDefault();

    if (window.scrollY > 100) {
      document.querySelector('.goTopConteiner').classList.add('show');
    } else {
      document.querySelector('.goTopConteiner').classList.remove('show');
    }
  };

  const handleClick = event => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: handleClick,
      className: "jsx-894508577 " + `jsx-${_styles_globalStyles__WEBPACK_IMPORTED_MODULE_3__["icons"].__hash}` + " " + "goTopConteiner btn-black",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "jsx-894508577 " + `jsx-${_styles_globalStyles__WEBPACK_IMPORTED_MODULE_3__["icons"].__hash}` + " " + "arrows"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: _styles_globalStyles__WEBPACK_IMPORTED_MODULE_3__["icons"].__hash,
      children: _styles_globalStyles__WEBPACK_IMPORTED_MODULE_3__["icons"]
    }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "894508577",
      children: ".goTopConteiner.jsx-894508577{width:50px;height:50px;position:fixed;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;right:50px;bottom:-50px;z-index:99;-webkit-animation:all-jsx-894508577 1 ease-in-out;animation:all-jsx-894508577 1 ease-in-out;-webkit-animation:fadeOut-jsx-894508577 .5s ease-in-out;animation:fadeOut-jsx-894508577 .5s ease-in-out;opacity:0;}.arrows.jsx-894508577{background:none;display:block;height:2px;width:20px;position:relative;-webkit-transition:all .5s ease-out;transition:all .5s ease-out;}.arrows.jsx-894508577::before,.arrows.jsx-894508577::after{background:#999999;content:\"\";height:100%;width:100%;position:absolute;}.arrows.jsx-894508577::before{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);right:7px;}.arrows.jsx-894508577::after{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);left:7px;}.arrows.jsx-894508577::before{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);right:7px;}.arrows.jsx-894508577::after{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);left:7px;}.show.jsx-894508577{-webkit-transform:translateY(50px);-ms-transform:translateY(50px);transform:translateY(50px);-webkit-animation:all-jsx-894508577 1s ease-in-out;animation:all-jsx-894508577 1s ease-in-out;-webkit-animation:fadeIn-jsx-894508577 .5s ease-in-out;animation:fadeIn-jsx-894508577 .5s ease-in-out;opacity:1;}@media all and (min-width:768px){.show.jsx-894508577{-webkit-transform:translateY(-70px);-ms-transform:translateY(-70px);transform:translateY(-70px);}}@-webkit-keyframes fadeIn-jsx-894508577{0%{opacity:0;}100%{opacity:1;}}@keyframes fadeIn-jsx-894508577{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes fadeOut-jsx-894508577{0%{opacity:1;}100%{opacity:0;}}@keyframes fadeOut-jsx-894508577{0%{opacity:1;}100%{opacity:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXGNvbXBvbmVudHNcXGdvVG9wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Dd0IsQUFHZ0MsQUFZSyxBQVVHLEFBT00sQUFJRCxBQUlDLEFBSUQsQUFJRyxBQU9LLEFBS25CLEFBQ0UsQUFHRixBQUNFLFVBTEQsQUFDRSxBQUdGLEFBQ0UsQ0E3REosS0FZRSxHQVVILElBckJJLE9BWUosQUFVQyxRQXJCVyxHQVlaLENBVUEsVUFUTyxDQVVBLGlCQVRVLENBVWhDLGFBT2EsQUFRQSxHQVpDLEFBUUEsTUFIZCxBQVFBLEFBR2lDLEdBTzdCLENBdEJKLEFBUUEscUNBcEJBLEdBZmUsV0FDRSxhQUNGLFdBQ2lCLGVBd0NLLDZFQXZDQyx5QkF5Q3ZDLFVBQUMscUVBeENjLFVBQ2QiLCJmaWxlIjoiRDpcXFByb2dyYW1hY2lvblxcRGVzYXJyb2xsb1dlYlxcd2ViLWNvc21lcmVsYXRhbVxcY29zbWVyZS1sYXRhbVxcY29tcG9uZW50c1xcZ29Ub3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgaWNvbnMgfSBmcm9tICcuLi9zdHlsZXMvZ2xvYmFsU3R5bGVzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR29Ub3AocHJvcHMpe1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTAwKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvVG9wQ29udGVpbmVyJylcclxuICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdzaG93JylcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvVG9wQ29udGVpbmVyJylcclxuICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29Ub3BDb250ZWluZXIgYnRuLWJsYWNrXCIgb25DbGljaz17IGhhbmRsZUNsaWNrIH0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnJvd3NcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57IGljb25zIH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuZ29Ub3BDb250ZWluZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IC01MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYWxsIDEgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlT3V0IC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFycm93c3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFycm93czo6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgLmFycm93czo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzk5OTk5OTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYXJyb3dzOjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogN3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFycm93czo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDdweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hcnJvd3M6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA3cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYXJyb3dzOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogN3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNob3d7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLnNob3d7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZUlue1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtvcGFjaXR5OiAwO31cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtvcGFjaXR5OiAxO31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZU91dHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7b3BhY2l0eTogMTt9XHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7b3BhY2l0eTogMDt9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il19 */\n/*@ sourceURL=D:\\\\Programacion\\\\DesarrolloWeb\\\\web-cosmerelatam\\\\cosmere-latam\\\\components\\\\goTop.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/main.js":
/*!****************************!*\
  !*** ./components/main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainConteiner; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar */ "./components/navbar.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var _styles_globalStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../styles/globalStyles */ "./styles/globalStyles.js");

var _jsxFileName = "D:\\Programacion\\DesarrolloWeb\\web-cosmerelatam\\cosmere-latam\\components\\main.js";





function MainConteiner(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        charSet: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        httpEquiv: "content-type",
        content: "charset=UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Cosmere-latam"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Web del fandom de Brandon Sanderson en latinoamerica."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "Keywords",
        content: "cosmere; cosmere latam; latam; latinoamerica; fandom; brandon; sanderson; fanderson; mistbotn; nacidos de la bruma; stormlight archive; archivo de las tormentas; warbreker; el aliento de los dioces; juramentada"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "manifest",
        href: "/manifest.json"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "theme-color",
        content: "#317EFB"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "apple-touch-icon",
        href: "/images/icon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this), props.children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: _styles_globalStyles__WEBPACK_IMPORTED_MODULE_5__["globalStyles"].__hash,
      children: _styles_globalStyles__WEBPACK_IMPORTED_MODULE_5__["globalStyles"]
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_mainStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../styles/mainStyles */ "./styles/mainStyles.js");


var _jsxFileName = "D:\\Programacion\\DesarrolloWeb\\web-cosmerelatam\\cosmere-latam\\components\\navbar.js";


 //import './../styles/navbar.css';



function setSpotlight(url) {
  var spot = 'barLine set--';
  var newLoc = url.split("/");
  spot += newLoc[1];
  return spot;
}

function Navbar(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: "jsx-473862663 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_4__["navbarStyle"].__hash}` + " " + "NavbarItems",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "jsx-473862663 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_4__["navbarStyle"].__hash}` + " " + "nav_logo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "checkbox",
        id: "menuBtn",
        className: "jsx-473862663 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_4__["navbarStyle"].__hash}` + " " + "menuBtn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "menuBtn",
        className: "jsx-473862663 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_4__["navbarStyle"].__hash}` + " " + "menuIcon",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "jsx-473862663 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_4__["navbarStyle"].__hash}` + " " + "bars"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "jsx-473862663 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_4__["navbarStyle"].__hash}` + " " + "nav_link",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-473862663 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_4__["navbarStyle"].__hash}`,
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 32
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 16
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/news",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-473862663 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_4__["navbarStyle"].__hash}`,
            children: "Noticias"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 37
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/artists",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-473862663 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_4__["navbarStyle"].__hash}`,
            children: "Artistas"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 40
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/potcast",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-473862663 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_4__["navbarStyle"].__hash}`,
            children: "Podcasts"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 40
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/cosmere",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-473862663 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_4__["navbarStyle"].__hash}`,
            children: "Cosmere"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 40
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          id: "lineNav",
          className: "jsx-473862663 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_4__["navbarStyle"].__hash}` + " " + (setSpotlight(router.pathname) || "")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: _styles_mainStyles__WEBPACK_IMPORTED_MODULE_4__["navbarStyle"].__hash,
      children: _styles_mainStyles__WEBPACK_IMPORTED_MODULE_4__["navbarStyle"]
    }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "473862663",
      children: ".NavbarItems.jsx-473862663 .barLine.jsx-473862663{display:inline-block;box-shadow:none;width:100px;}.NavbarItems.jsx-473862663 ul.jsx-473862663 li.jsx-473862663:nth-child(1){width:100px;}.set--home.jsx-473862663,.NavbarItems.jsx-473862663 ul.jsx-473862663 li.jsx-473862663:nth-child(1):hover~.barLine.jsx-473862663{width:100px;-webkit-transform:translate(0);-ms-transform:translate(0);transform:translate(0);}.NavbarItems.jsx-473862663 ul.jsx-473862663 li.jsx-473862663:nth-child(2){width:100px;}.set--news.jsx-473862663,.NavbarItems.jsx-473862663 ul.jsx-473862663 li.jsx-473862663:nth-child(2):hover~.barLine.jsx-473862663{width:100px;-webkit-transform:translate(100px);-ms-transform:translate(100px);transform:translate(100px);}.NavbarItems.jsx-473862663 ul.jsx-473862663 li.jsx-473862663:nth-child(3){width:100px;}.set--artists.jsx-473862663,.NavbarItems.jsx-473862663 ul.jsx-473862663 li.jsx-473862663:nth-child(3):hover~.barLine.jsx-473862663{width:100px;-webkit-transform:translate(200px);-ms-transform:translate(200px);transform:translate(200px);}.NavbarItems.jsx-473862663 ul.jsx-473862663 li.jsx-473862663:nth-child(4){width:100px;}.set--potcast.jsx-473862663,.NavbarItems.jsx-473862663 ul.jsx-473862663 li.jsx-473862663:nth-child(4):hover~.barLine.jsx-473862663{width:100px;-webkit-transform:translate(300px);-ms-transform:translate(300px);transform:translate(300px);}.NavbarItems.jsx-473862663 ul.jsx-473862663 li.jsx-473862663:nth-child(5){width:100px;}.set--cosmeremecum.jsx-473862663,.NavbarItems.jsx-473862663 ul.jsx-473862663 li.jsx-473862663:nth-child(5):hover~.barLine.jsx-473862663{width:100px;-webkit-transform:translate(400px);-ms-transform:translate(400px);transform:translate(400px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXGNvbXBvbmVudHNcXG5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ29CLEFBR3NDLEFBS1QsQUFHQSxBQUlBLEFBR0EsQUFJQSxBQUdBLEFBSUEsQUFHQSxBQUlBLEFBR0EsWUE5QmhCLEFBRzJCLEFBSTNCLEFBRytCLEFBSS9CLEFBRytCLEFBSS9CLEFBRytCLEFBSS9CLEFBRytCLFNBcENYLGdCQUNKLFlBQ2hCLDRDQU9BLFlBT0EsQUFPQSxBQU9BLEFBT0EiLCJmaWxlIjoiRDpcXFByb2dyYW1hY2lvblxcRGVzYXJyb2xsb1dlYlxcd2ViLWNvc21lcmVsYXRhbVxcY29zbWVyZS1sYXRhbVxcY29tcG9uZW50c1xcbmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbi8vaW1wb3J0ICcuLy4uL3N0eWxlcy9uYXZiYXIuY3NzJztcclxuaW1wb3J0IHsgbmF2YmFyU3R5bGUgfSBmcm9tICcuLy4uL3N0eWxlcy9tYWluU3R5bGVzJztcclxuXHJcbmZ1bmN0aW9uIHNldFNwb3RsaWdodCh1cmwpe1xyXG4gICAgdmFyIHNwb3QgPSAnYmFyTGluZSBzZXQtLSdcclxuICAgIHZhciBuZXdMb2MgPSB1cmwuc3BsaXQoXCIvXCIpXHJcbiAgICBzcG90ICs9IG5ld0xvY1sxXVxyXG4gICAgcmV0dXJuKHNwb3QpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIocHJvcHMpe1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiTmF2YmFySXRlbXNcIj5cclxuXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdl9sb2dvXCI+PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cIm1lbnVCdG5cIiBpZD1cIm1lbnVCdG5cIi8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtZW51SWNvblwiIGh0bWxGb3I9XCJtZW51QnRuXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXJzXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdl9saW5rXCI+XHJcbiAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgPjxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgICAgPC9saT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL25ld3NcIiA+PGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOb3RpY2lhcyAgXHJcbiAgICAgICAgICAgICAgICA8L2xpPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXJ0aXN0c1wiID48bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFydGlzdGFzICBcclxuICAgICAgICAgICAgICAgIDwvbGk+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3RjYXN0XCIgPjxsaT5cclxuICAgICAgICAgICAgICAgICAgICBQb2RjYXN0c1xyXG4gICAgICAgICAgICAgICAgPC9saT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Nvc21lcmVcIiA+PGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIENvc21lcmVcclxuICAgICAgICAgICAgICAgIDwvbGk+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c2V0U3BvdGxpZ2h0KHJvdXRlci5wYXRobmFtZSl9IGlkPVwibGluZU5hdlwiPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57IG5hdmJhclN0eWxlIH08L3N0eWxlPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLk5hdmJhckl0ZW1zIC5iYXJMaW5le1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuTmF2YmFySXRlbXMgdWwgbGk6bnRoLWNoaWxkKDEpe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZXQtLWhvbWUsIC5OYXZiYXJJdGVtcyB1bCBsaTpudGgtY2hpbGQoMSk6aG92ZXIgfiAuYmFyTGluZXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5OYXZiYXJJdGVtcyB1bCBsaTpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNldC0tbmV3cywgLk5hdmJhckl0ZW1zIHVsIGxpOm50aC1jaGlsZCgyKTpob3ZlciB+IC5iYXJMaW5le1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwcHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5OYXZiYXJJdGVtcyB1bCBsaTpudGgtY2hpbGQoMyl7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNldC0tYXJ0aXN0cywgLk5hdmJhckl0ZW1zIHVsIGxpOm50aC1jaGlsZCgzKTpob3ZlciB+IC5iYXJMaW5le1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjAwcHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5OYXZiYXJJdGVtcyB1bCBsaTpudGgtY2hpbGQoNCl7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNldC0tcG90Y2FzdCwgLk5hdmJhckl0ZW1zIHVsIGxpOm50aC1jaGlsZCg0KTpob3ZlciB+IC5iYXJMaW5le1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1x0XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMDBweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLk5hdmJhckl0ZW1zIHVsIGxpOm50aC1jaGlsZCg1KXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2V0LS1jb3NtZXJlbWVjdW0sIC5OYXZiYXJJdGVtcyB1bCBsaTpudGgtY2hpbGQoNSk6aG92ZXIgfiAuYmFyTGluZXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcdFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDAwcHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=D:\\\\Programacion\\\\DesarrolloWeb\\\\web-cosmerelatam\\\\cosmere-latam\\\\components\\\\navbar.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/news/newsList.js":
/*!*************************************!*\
  !*** ./components/news/newsList.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return newList; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_newStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/newStyles */ "./styles/newStyles.js");


var _jsxFileName = "D:\\Programacion\\DesarrolloWeb\\web-cosmerelatam\\cosmere-latam\\components\\news\\newsList.js";


 //import './../../styles/newsList.css';


function newList(props) {
  //onClick={() => Router.push('/news/[id]', `/news/${result.id}`)}
  //<Link href='news/[id]' as={`/news/${result.id}`} key={result.id}>
  //https://pbs.twimg.com/media/ElYIKfyXUAMUJvi?format=jpg&name=900x900
  var Label = '';
  {
    props.isLoad ? Label = 'Mas' : Label = 'Cargando...';
  }
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_4__["newStyle"].__hash}` + " " + 'newsList',
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_4__["newStyle"].__hash}`,
        children: [props.results.map(result => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_4__["newStyle"].__hash}` + " " + 'new',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "news/[id]",
            as: `/news/${result.id}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_4__["newStyle"].__hash}`,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: result.banner,
                className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_4__["newStyle"].__hash}` + " " + 'img'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_4__["newStyle"].__hash}` + " " + 'content',
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_4__["newStyle"].__hash}`,
                  children: result.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_4__["newStyle"].__hash}`,
                  children: result.subTitle
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_4__["newStyle"].__hash}` + " " + 'data',
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_4__["newStyle"].__hash}` + " " + 'date',
                  children: result.date
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 41
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_4__["newStyle"].__hash}` + " " + 'section',
                  children: result.section
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 78
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 29
          }, this)
        }, result.id, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 25
        }, this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          onClick: props.more,
          className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_4__["newStyle"].__hash}` + " " + "btn-black more",
          children: [" ", Label, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: _styles_newStyles__WEBPACK_IMPORTED_MODULE_4__["newStyle"].__hash,
      children: _styles_newStyles__WEBPACK_IMPORTED_MODULE_4__["newStyle"]
    }, void 0, false, void 0, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/news/sliderNews.js":
/*!***************************************!*\
  !*** ./components/news/sliderNews.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SliderNews; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_newStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/newStyles */ "./styles/newStyles.js");

var _jsxFileName = "D:\\Programacion\\DesarrolloWeb\\web-cosmerelatam\\cosmere-latam\\components\\news\\sliderNews.js";

//import './../../styles/sideNews.css';


function SliderNews(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_3__["sliderStyle"].__hash}` + " " + "topNews",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "radio",
      name: "slider",
      id: "slider1",
      className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_3__["sliderStyle"].__hash}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "radio",
      name: "slider",
      id: "slider2",
      className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_3__["sliderStyle"].__hash}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "radio",
      name: "slider",
      id: "slider3",
      className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_3__["sliderStyle"].__hash}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_3__["sliderStyle"].__hash}` + " " + "sliderMain",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_3__["sliderStyle"].__hash}` + " " + "slider",
        children: props.results.map(result => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "news/[id]",
          as: `/news/${result.id}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_3__["sliderStyle"].__hash}`,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: result.banner,
              className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_3__["sliderStyle"].__hash}` + " " + "newsImg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_3__["sliderStyle"].__hash}` + " " + "newsTitle",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_3__["sliderStyle"].__hash}`,
                children: result.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_3__["sliderStyle"].__hash}` + " " + "newsText",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_3__["sliderStyle"].__hash}`,
                children: result.subTitle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_3__["sliderStyle"].__hash}` + " " + "newsOrigin",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_3__["sliderStyle"].__hash}` + " " + "date",
                children: result.date
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_3__["sliderStyle"].__hash}` + " " + "origin",
                children: result.section
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, this)
        }, result.id, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_3__["sliderStyle"].__hash}` + " " + "sliderBar",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "slider1",
        className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_3__["sliderStyle"].__hash}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "slider2",
        className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_3__["sliderStyle"].__hash}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "slider3",
        className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_3__["sliderStyle"].__hash}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: _styles_newStyles__WEBPACK_IMPORTED_MODULE_3__["sliderStyle"].__hash,
      children: _styles_newStyles__WEBPACK_IMPORTED_MODULE_3__["sliderStyle"]
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./firebase/client.js":
/*!****************************!*\
  !*** ./firebase/client.js ***!
  \****************************/
/*! exports provided: default, fetchNewsList, fetchNew, addNews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchNewsList", function() { return fetchNewsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchNew", function() { return fetchNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNews", function() { return addNews; });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBHPAk4y_AXFzftLG-u06KfWwU5I9AyxRs",
  authDomain: "cosmere-latam.firebaseapp.com",
  databaseURL: "https://cosmere-latam.firebaseio.com",
  projectId: "cosmere-latam",
  storageBucket: "cosmere-latam.appspot.com",
  messagingSenderId: "448096953500",
  appId: "1:448096953500:web:6b09b61e0640f13d253959",
  measurementId: "G-YP20KEWYXN"
};
/* harmony default export */ __webpack_exports__["default"] = (!firebase__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length ? firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig) : firebase__WEBPACK_IMPORTED_MODULE_0___default.a.app());
const dbCon = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();
const fetchNewsList = (section, page) => {
  var logic = '';

  if (section == 'all') {
    return dbCon.collection('news').limit(page).orderBy("date", "desc").get().then(snapshot => {
      return snapshot.docs.map(doc => {
        const data = doc.data();
        const id = doc.id;
        const {
          date
        } = data;
        const intl = new Intl.DateTimeFormat('es-ES');
        const normalizedDate = new Date(date.seconds * 1000).toString();
        const splitDate = normalizedDate.split("(");
        return _objectSpread(_objectSpread({
          id
        }, data), {}, {
          date: splitDate[0]
        });
      });
    });
  } else {
    return dbCon.collection('news').orderBy("date", "desc").where('section', "==", section).limit(page).get().then(snapshot => {
      return snapshot.docs.map(doc => {
        const data = doc.data();
        const id = doc.id;
        const {
          date
        } = data;
        const intl = new Intl.DateTimeFormat('es-ES');
        const normalizedDate = new Date(date.seconds * 1000).toString();
        const splitDate = normalizedDate.split("(");
        return _objectSpread(_objectSpread({
          id
        }, data), {}, {
          date: splitDate[0]
        });
      });
    });
  }
};
const fetchNew = id => {
  return dbCon.collection('news').doc(id).get().then(snapshot => {
    const data = snapshot.data();
    const {
      date
    } = data;
    const intl = new Intl.DateTimeFormat('es-ES');
    const normalizedDate = new Date(date.seconds * 1000).toString();
    return _objectSpread(_objectSpread({}, data), {}, {
      date: normalizedDate
    });
  });
};
const addNews = (userId, titel, subTitle, banner, content, section) => {
  return dbCon.collection('news').add({
    userId,
    titel,
    subTitle,
    banner,
    content,
    section,
    date: firebase__WEBPACK_IMPORTED_MODULE_0___default.a.firestote.Timestaps.fromDate(new Date())
  });
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/news.jsx":
/*!************************!*\
  !*** ./pages/news.jsx ***!
  \************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return News; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../firebase/client */ "./firebase/client.js");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/main */ "./components/main.js");
/* harmony import */ var _components_news_sliderNews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/news/sliderNews */ "./components/news/sliderNews.js");
/* harmony import */ var _components_news_newsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../components/news/newsList */ "./components/news/newsList.js");
/* harmony import */ var _components_goTop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/goTop */ "./components/goTop.js");
/* harmony import */ var _styles_newStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/newStyles */ "./styles/newStyles.js");

var _jsxFileName = "D:\\Programacion\\DesarrolloWeb\\web-cosmerelatam\\cosmere-latam\\pages\\news.jsx";








function News(props) {
  //const [newsSlider, setSlider] = useState([]);
  const {
    0: newsList,
    1: setNews
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    0: section,
    1: setSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('all');
  const {
    0: page,
    1: setPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(5);
  const {
    0: reload,
    1: setReload
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(async () => {
    setReload(false);
    await Object(_firebase_client__WEBPACK_IMPORTED_MODULE_3__["fetchNewsList"])(section, page).then(setNews);
    setReload(true);
  }, [section, page]);

  const handleChange = event => {
    event.preventDefault();
    setSection(event.target.value);
    setPage(5); //fetchData(event.target.value);
  };

  const hadleMore = () => {
    setPage(page + 5);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_main__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_goTop__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newSecction"].__hash} jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newStyle"].__hash}` + " " + "news",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_news_sliderNews__WEBPACK_IMPORTED_MODULE_5__["default"], {
        results: props.slider
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newSecction"].__hash} jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newStyle"].__hash}` + " " + "category",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newSecction"].__hash} jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newStyle"].__hash}`,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "radio",
            name: "category",
            id: "category1",
            value: "all",
            checked: section === "all",
            onChange: handleChange,
            className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newSecction"].__hash} jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newStyle"].__hash}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "radio",
            name: "category",
            id: "category2",
            value: "news",
            checked: section === "news",
            onChange: handleChange,
            className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newSecction"].__hash} jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newStyle"].__hash}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "radio",
            name: "category",
            id: "category3",
            value: "event",
            checked: section === "event",
            onChange: handleChange,
            className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newSecction"].__hash} jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newStyle"].__hash}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "radio",
            name: "category",
            id: "category4",
            value: "adds",
            checked: section === "adds",
            onChange: handleChange,
            className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newSecction"].__hash} jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newStyle"].__hash}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "category1",
            className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newSecction"].__hash} jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newStyle"].__hash}`,
            children: "Recientes"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "category2",
            className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newSecction"].__hash} jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newStyle"].__hash}`,
            children: "Noticias"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "category3",
            className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newSecction"].__hash} jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newStyle"].__hash}`,
            children: "Eventos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "category4",
            className: `jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newSecction"].__hash} jsx-${_styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newStyle"].__hash}`,
            children: "Anuncios"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_news_newsList__WEBPACK_IMPORTED_MODULE_6__["default"], {
        results: newsList,
        more: hadleMore,
        isLoad: reload,
        thisStyle: _styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newStyle"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: _styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newSecction"].__hash,
      children: _styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newSecction"]
    }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: _styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newStyle"].__hash,
      children: _styles_newStyles__WEBPACK_IMPORTED_MODULE_8__["newStyle"]
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, this);
}
async function getServerSideProps(ctx) {
  const slider = await Object(_firebase_client__WEBPACK_IMPORTED_MODULE_3__["fetchNewsList"])('all', 3).then(snapshot => {
    return snapshot;
  });
  return {
    props: {
      slider: slider
    }
  };
}

/***/ }),

/***/ "./styles/globalStyles.js":
/*!********************************!*\
  !*** ./styles/globalStyles.js ***!
  \********************************/
/*! exports provided: globalStyles, errorStyles, icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalStyles", function() { return globalStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorStyles", function() { return errorStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icons", function() { return icons; });
const color = {
  primary: '#393b40',
  secondary: '#939313'
};
const globalStyles = new String("html,body{background-color:#202020;padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}a{color:inherit;-webkit-text-decoration:none;text-decoration:none;}*{box-sizing:border-box;}section{position:relative;background-size:cover;background-position:right;background-position:left top;background-position:20% top;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0;padding-top:70px;margin:0;}.btn-withe{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:rgb(230,230,230);border-radius:5px;padding:10px 10px;-webkit-transition:all .2s ease-out;transition:all .2s ease-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.btn-withe:hover{background:rgb(255,255,255);box-shadow:0 0 0 4px rgb(197,194,19);}.btn-withe{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:rgba(230,230,230,.8);color:#000000;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);border-radius:5px;padding:10px;padding:10px 10px;-webkit-transition:all .2s ease-out;transition:all .2s ease-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.btn-withe:hover{background:rgba(255,255,255,.8);box-shadow:0 0 0 4px rgb(197,194,19);}.btn-black{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#393b40cc;color:#ffffff;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);border-radius:5px;padding:10px;margin:10px 10px;-webkit-transition:all .2s ease-out;transition:all .2s ease-out;}.btn-black:hover{background-color:#393b40;box-shadow:0 0 0 4px rgb(197,194,19);color:rgb(197,194,19);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXHN0eWxlc1xcZ2xvYmFsU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9zQyxBQUk0QixBQVFYLEFBS1EsQUFJRixBQWVMLEFBVWlCLEFBS2pCLEFBY3NCLEFBS3RCLEFBYVUsY0F0RUosSUFTRyxJQUoxQixHQWJZLEFBK0U2QixHQXJDRSxJQW1CQSxHQTVEaEMsS0FpQm1CLElBZjBDLGtCQTZFOUMsRUF2RTFCLENBa0NBLENBeEJpQyxHQTJDakMsS0E5QnVCLEFBZUEsQUFtQkEsVUFldkIsV0E3RGdDLDRCQUNsQixVQUNHLFVBV00sQUFlQSxBQW1CQSxrQ0EvRHZCLDhCQW1CdUIsNkJBV1csQUFlUCxBQW1CQSw0QkFqQ0wsa0JBQ0Esa0JBWkssQUFhSyxtQ0FhTyxBQW1CUiwyQkFDYixFQWhDRyxHQWFILFNBb0JZLEtBbkJBLGtCQTNCaEIsVUFDTyxpQkFDUixTQUNiLENBNENzQixLQW5CQSxRQWR0QixLQWtDaUIsS0FuQkEsUUFvQkksS0FuQkMsWUFvQlUsTUFuQkEsMERBb0JoQyxNQW5CcUIscUZBQ3JCIiwiZmlsZSI6IkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXHN0eWxlc1xcZ2xvYmFsU3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcclxuXHJcbmNvbnN0IGNvbG9yID0ge1xyXG4gICAgcHJpbWFyeTogJyMzOTNiNDAnLFxyXG4gICAgc2Vjb25kYXJ5OiAnIzkzOTMxMycsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnbG9iYWxTdHlsZXMgPSBjc3MuZ2xvYmFsYFxyXG5odG1sLFxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcclxuICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMCUgdG9wO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDcwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5idG4td2l0aGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuLmJ0bi13aXRoZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxufVxyXG5cclxuLmJ0bi13aXRoZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDIzMCwgMjMwLCAuOCk7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4uYnRuLXdpdGhlOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiKDE5NywgMTk0LCAxOSk7XHJcbn1cclxuXHJcbi5idG4tYmxhY2t7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNiNDBjYztcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xyXG59XHJcbi5idG4tYmxhY2s6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2I0MDtcclxuICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG59XHJcbmBcclxuZXhwb3J0IGNvbnN0IGVycm9yU3R5bGVzID0gY3NzYFxyXG4ubm9ue1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoL2ltYWdlcy9Db25zdGVsYWNpb25lcy1tdW5kb3MtY29zbWVyZS5qcGcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbi5ub24gZGl2e1xyXG4gIGNvbG9yOiByZ2IoMTI4LCAxMTQsIDc5KTtcclxuICB0ZXh0LXNoYWRvdzowcHggMHB4IDNweCAjMDAwMDAwO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm5vbiBoMntcclxuICBmb250LXNpemU6IDU2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTB2aDtcclxufVxyXG4ubm9uIHB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBpY29ucyA9IGNzc2BcclxuXHJcbmAiXX0= */\n/*@ sourceURL=D:\\\\Programacion\\\\DesarrolloWeb\\\\web-cosmerelatam\\\\cosmere-latam\\\\styles\\\\globalStyles.js */");
globalStyles.__hash = "1741135465";
const errorStyles = new String(".non.jsx-4010740212{min-width:100%;min-height:100vh;background:url(/images/Constelaciones-mundos-cosmere.jpg);background-size:cover;background-position:center;}.non.jsx-4010740212 div.jsx-4010740212{color:rgb(128,114,79);text-shadow:0px 0px 3px #000000;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;text-align:center;}.non.jsx-4010740212 h2.jsx-4010740212{font-size:56px;margin-bottom:50vh;}.non.jsx-4010740212 p.jsx-4010740212{font-size:24px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXHN0eWxlc1xcZ2xvYmFsU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThGOEIsQUFHa0IsQUFPUyxBQU1ULEFBSUEsZUFoQkUsQUFhRSxBQUlyQixPQVZpQyxVQU4yQixFQWE1RCxvQkFOb0Isb0NBTkksc0JBQ0ssYUFNVCxjQUxwQixJQU1BIiwiZmlsZSI6IkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXHN0eWxlc1xcZ2xvYmFsU3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcclxuXHJcbmNvbnN0IGNvbG9yID0ge1xyXG4gICAgcHJpbWFyeTogJyMzOTNiNDAnLFxyXG4gICAgc2Vjb25kYXJ5OiAnIzkzOTMxMycsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnbG9iYWxTdHlsZXMgPSBjc3MuZ2xvYmFsYFxyXG5odG1sLFxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcclxuICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMCUgdG9wO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDcwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5idG4td2l0aGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuLmJ0bi13aXRoZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxufVxyXG5cclxuLmJ0bi13aXRoZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDIzMCwgMjMwLCAuOCk7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4uYnRuLXdpdGhlOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiKDE5NywgMTk0LCAxOSk7XHJcbn1cclxuXHJcbi5idG4tYmxhY2t7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNiNDBjYztcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xyXG59XHJcbi5idG4tYmxhY2s6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2I0MDtcclxuICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG59XHJcbmBcclxuZXhwb3J0IGNvbnN0IGVycm9yU3R5bGVzID0gY3NzYFxyXG4ubm9ue1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoL2ltYWdlcy9Db25zdGVsYWNpb25lcy1tdW5kb3MtY29zbWVyZS5qcGcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbi5ub24gZGl2e1xyXG4gIGNvbG9yOiByZ2IoMTI4LCAxMTQsIDc5KTtcclxuICB0ZXh0LXNoYWRvdzowcHggMHB4IDNweCAjMDAwMDAwO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm5vbiBoMntcclxuICBmb250LXNpemU6IDU2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTB2aDtcclxufVxyXG4ubm9uIHB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBpY29ucyA9IGNzc2BcclxuXHJcbmAiXX0= */\n/*@ sourceURL=D:\\\\Programacion\\\\DesarrolloWeb\\\\web-cosmerelatam\\\\cosmere-latam\\\\styles\\\\globalStyles.js */");
errorStyles.__hash = "4010740212";
const icons = new String("\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXHN0eWxlc1xcZ2xvYmFsU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFId0IiLCJmaWxlIjoiRDpcXFByb2dyYW1hY2lvblxcRGVzYXJyb2xsb1dlYlxcd2ViLWNvc21lcmVsYXRhbVxcY29zbWVyZS1sYXRhbVxcc3R5bGVzXFxnbG9iYWxTdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5cclxuY29uc3QgY29sb3IgPSB7XHJcbiAgICBwcmltYXJ5OiAnIzM5M2I0MCcsXHJcbiAgICBzZWNvbmRhcnk6ICcjOTM5MzEzJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdsb2JhbFN0eWxlcyA9IGNzcy5nbG9iYWxgXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxyXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwJSB0b3A7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJ0bi13aXRoZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMzAsIDIzMCwgMjMwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4uYnRuLXdpdGhlOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYigxOTcsIDE5NCwgMTkpO1xyXG59XHJcblxyXG4uYnRuLXdpdGhle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzMCwgMjMwLCAyMzAsIC44KTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbi5idG4td2l0aGU6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxufVxyXG5cclxuLmJ0bi1ibGFja3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2I0MGNjO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggMTBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XHJcbn1cclxuLmJ0bi1ibGFjazpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzYjQwO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICBjb2xvcjogcmdiKDE5NywgMTk0LCAxOSk7XHJcbn1cclxuYFxyXG5leHBvcnQgY29uc3QgZXJyb3JTdHlsZXMgPSBjc3NgXHJcbi5ub257XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IHVybCgvaW1hZ2VzL0NvbnN0ZWxhY2lvbmVzLW11bmRvcy1jb3NtZXJlLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuLm5vbiBkaXZ7XHJcbiAgY29sb3I6IHJnYigxMjgsIDExNCwgNzkpO1xyXG4gIHRleHQtc2hhZG93OjBweCAwcHggM3B4ICMwMDAwMDA7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubm9uIGgye1xyXG4gIGZvbnQtc2l6ZTogNTZweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHZoO1xyXG59XHJcbi5ub24gcHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGljb25zID0gY3NzYFxyXG5cclxuYCJdfQ== */\n/*@ sourceURL=D:\\\\Programacion\\\\DesarrolloWeb\\\\web-cosmerelatam\\\\cosmere-latam\\\\styles\\\\globalStyles.js */");
icons.__hash = "2008225623";

/***/ }),

/***/ "./styles/mainStyles.js":
/*!******************************!*\
  !*** ./styles/mainStyles.js ***!
  \******************************/
/*! exports provided: navbarStyle, footerStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navbarStyle", function() { return navbarStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footerStyle", function() { return footerStyle; });
const navbarStyle = new String(".NavbarItems.jsx-3096253922{background:linear-gradient(0deg,rgb(0,0,0,1.0) 0% ,rgba(0,0,0,0.5) 80%,rgba(0,0,0,0.5) 100%);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);padding:0px;margin:0px;position:fixed;top:0;left:0;width:100vw;z-index:10;box-shadow:0px 0px 10px #000000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:space-between;-ms-flex-line-pack:space-between;align-content:space-between;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.nav_logo.jsx-3096253922{display:block;width:70px;height:50px;background:url('/images/LogoCL.png');background-repeat:no-repeat;background-size:cover;padding:0;margin:5px;margin-left:20px;margin-right:50px;}.NavbarItems.jsx-3096253922 ul.jsx-3096253922{list-style:none;padding:0;margin:0;overflow:hidden;float:right;text-align:left;}.NavbarItems.jsx-3096253922 li.jsx-3096253922{display:block;margin:0;padding:0;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;z-index:5;color:#ffffff;padding:18px 20px;font-size:18px;}.NavbarItems.jsx-3096253922 li.jsx-3096253922{color:#ffffff;right:5%;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all .8s ease-in;transition:all .8s ease-in;display:block;padding:18px 20px;font-size:18px;border-left:5px solid transparent;}.NavbarItems.jsx-3096253922 li.jsx-3096253922:hover{color:rgb(197,194,19);-webkit-text-decoration:none;text-decoration:none;text-shadow:0px 0px 10px #000000;-webkit-transition:all .2s ease-in;transition:all .2s ease-in;list-style:none;border-left:5px solid #0088a9;}.btn-lg.jsx-3096253922{border:1px solid #0088a9;border-radius:5px;background:none;color:#0088a9;outline:none;cursor:pointer;margin:0;padding:10px 20px;margin-left:auto;}.btn-lg.jsx-3096253922:hover{border:1px solid #0088a9;border-radius:5px;background:#0088a9;color:#ffffff;outline:none;}.btn-lg.jsx-3096253922:active{border:1px solid #0088a9;border-radius:5px;background:none;color:#ffffff;outline:none;}.btn-lg.jsx-3096253922:focus{outline:none;}.NavbarItems.jsx-3096253922 .nav_link.jsx-3096253922{text-align:center;clear:both;width:0;-webkit-transition:all .5s ease-out;transition:all .5s ease-out;position:absolute;top:0;right:0;border-top:55px solid #111111;background:#333333;height:100vh;z-index:5;}.NavbarItems.jsx-3096253922 .menuBtn.jsx-3096253922{display:none;}.NavbarItems.jsx-3096253922 .menuIcon.jsx-3096253922{border:1px solid #0088a9;border-radius:5px;padding:20px 12px;cursor:pointer;z-index:10;margin-left:auto;margin-right:5px;}.NavbarItems.jsx-3096253922 .menuIcon.jsx-3096253922:hover{background-color:#0088a9;}.menuIcon.jsx-3096253922 .bars.jsx-3096253922{background:#999999;display:block;height:2px;width:18px;position:relative;-webkit-transition:all .5s ease-out;transition:all .5s ease-out;}.menuIcon.jsx-3096253922 .bars.jsx-3096253922::before,.menuIcon.jsx-3096253922 .bars.jsx-3096253922::after{background:#999999;content:\"\";height:100%;width:100%;position:absolute;-webkit-transition:all .5s ease-out;transition:all .5s ease-out;}.menuIcon.jsx-3096253922 .bars.jsx-3096253922::before{top:5px;}.menuIcon.jsx-3096253922 .bars.jsx-3096253922::after{top:-5px;}.menuBtn.jsx-3096253922:checked~.nav_link.jsx-3096253922{width:300px;}.menuBtn.jsx-3096253922:checked~.menuIcon.jsx-3096253922 .bars.jsx-3096253922{background:none;}.menuBtn.jsx-3096253922:checked~.menuIcon.jsx-3096253922 .bars.jsx-3096253922::before{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);top:0;}.menuBtn.jsx-3096253922:checked~.menuIcon.jsx-3096253922 .bars.jsx-3096253922::after{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);top:0;}.NavbarItems.jsx-3096253922 .barLine.jsx-3096253922{min-width:100px;height:0px;border-top:5px solid rgb(197,194,19);box-shadow:0px 0px 10px rgb(197,194,19);position:absolute;top:0;left:0;z-index:1;-webkit-transition-duration:.8s;transition-duration:.8s;display:none;}@media all and (min-width:768px){.NavbarItems.jsx-3096253922 .nav_link.jsx-3096253922{clear:none;width:auto;height:auto;position:relative;background:none;padding:0;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;border:none;}.NavbarItems.jsx-3096253922 .menuIcon.jsx-3096253922{display:none;}.NavbarItems.jsx-3096253922 li.jsx-3096253922{border:none;}.NavbarItems.jsx-3096253922 li.jsx-3096253922:hover{border:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXHN0eWxlc1xcbWFpblN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFOEIsQUFHMkcsQUFpQjNGLEFBYUUsQUFRRixBQVVBLEFBV1UsQUFTQyxBQVdBLEFBT0EsQUFPWixBQUlLLEFBY0wsQUFJWSxBQVVBLEFBSU4sQUFVQSxBQVFYLEFBR0MsQUFJRyxBQUdJLEFBR1MsQUFJRCxBQUtSLEFBZUosQUFZRSxBQUdLLEFBSU4sUUF2RGQsQ0FHQSxFQWtDYSxDQTlCYixBQThDQyxBQUdBLENBOUdELEFBa0JBLEFBcUZDLENBbkxXLEFBcUJGLEFBVUEsRUFsQkMsQUErSFgsQUFZWSxFQXhFQSxDQWdDRyxBQVVILEdBaEZVLEFBOEhSLENBbEpILEFBVWMsRUEvQlosQUFrRE0sQUFXQSxBQU9BLEFBNkJBLEFBVW5CLENBOUZVLENBMkk4QixFQXhFL0IsQ0EwQ0ksR0FwR08sQUEwRlIsQ0F3RFEsQ0ExSkgsRUFid0IsQUFnRlosS0EwQ2pCLENBeEVLLEFBV0csQUFPSCxBQTZCRSxDQWVQLE9BbEdDLENBMEpLLENBN0NDLEVBVkEsSUE5REosQUFrQkEsRUE2QkMsQ0FwQ0QsQ0EvQ0UsQ0F5STBCLElBaUIvQixHQTdDaUIsQ0FuRkksQ0FWTCxBQXFCZCxBQWtCQSxBQTRDZSxDQWpIRyxFQThEbEIsQUFvQ0YsRUF1RUQsQ0ExSlgsS0FpSU8sRUE1RlMsQUFrQmhCLENBNkJrQixBQXlDWCxBQThCUSxFQTNHZixDQWtGQSxHQXJLMkIsQUFpSzNCLFFBeEZVLEFBMkJTLENBL0VJLEVBbUdMLEFBb0RDLENBL0dTLEVBcEJkLEdBaUNLLE9BaENELEVBMkRYLEVBb0JQLENBb0RPLEVBdkpJLENBZ0ZGLEdBM0JTLEFBbUdWLEdBbkljLEVBNERTLENBaEZuQixDQTRCRyxBQTZGZixBQStCVyxFQXhDWCxRQS9Ha0IsQUFvRGxCLEFBb0d5QixJQXBJVCxBQVFHLElBbkROLFFBOExVLENBdEtKLENBK0VDLENBM0RwQixDQTNDVyxFQW1ESyxBQVNDLFNBM0RELElBdUJoQixFQTRCbUMsQUFtRHJCLENBMUNpQixRQTNEeEIsSUFzR0ksRUFyR0gsSUE0S00sR0EzS0QsQ0FxR2IsUUEzQ0EsQ0FrSEEsRUEzS1ksQUFnRFosV0EvQ2lDLFVBd0xuQixZQUNiLFVBeExhLDBFQUNNLDZGQUNTLGlHQUNYLHFGQUNsQiIsImZpbGUiOiJEOlxcUHJvZ3JhbWFjaW9uXFxEZXNhcnJvbGxvV2ViXFx3ZWItY29zbWVyZWxhdGFtXFxjb3NtZXJlLWxhdGFtXFxzdHlsZXNcXG1haW5TdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IG5hdmJhclN0eWxlID0gY3NzYFxyXG4uTmF2YmFySXRlbXMge1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2IoMCwgMCwgMCwgMS4wKSAwJSAsIHJnYmEoMCwgMCwgMCwgMC41KSA4MCUsIHJnYmEoMCwgMCwgMCwgMC41KSAxMDAlKTtcclxuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHRwYWRkaW5nOiAwcHg7XHJcblx0bWFyZ2luOjBweDtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMHZ3O1xyXG5cdHotaW5kZXg6IDEwO1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4ubmF2X2xvZ297XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDcwcHg7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvaW1hZ2VzL0xvZ29DTC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdG1hcmdpbjogNXB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cdG1hcmdpbi1yaWdodDogNTBweDtcclxufVxyXG5cclxuLk5hdmJhckl0ZW1zIHVse1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0cGFkZGluZzogMDtcclxuXHRtYXJnaW46IDA7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRmbG9hdDogcmlnaHQ7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uTmF2YmFySXRlbXMgbGl7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0YWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDE4cHggMjBweDtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLk5hdmJhckl0ZW1zIGxpe1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdHJpZ2h0OiA1JTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgLjhzIGVhc2UtaW47XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cGFkZGluZzogMThweCAyMHB4O1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uTmF2YmFySXRlbXMgbGk6aG92ZXJ7XHJcblx0Y29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHR0ZXh0LXNoYWRvdzowcHggMHB4IDEwcHggIzAwMDAwMDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW47XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRib3JkZXItbGVmdDogNXB4IHNvbGlkICMwMDg4YTk7XHJcbn1cclxuXHJcbi5idG4tbGd7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwODhhOTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRjb2xvcjogIzAwODhhOTtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMTBweCAyMHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbi5idG4tbGc6aG92ZXJ7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwODhhOTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0YmFja2dyb3VuZDogIzAwODhhOTtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcbi5idG4tbGc6YWN0aXZle1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDg4YTk7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGJhY2tncm91bmQ6IG5vbmU7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG4uYnRuLWxnOmZvY3Vze1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5OYXZiYXJJdGVtcyAubmF2X2xpbmt7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGNsZWFyOiBib3RoO1xyXG5cdHdpZHRoOiAwO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1vdXQ7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRyaWdodDogMDtcclxuXHRib3JkZXItdG9wOiA1NXB4IHNvbGlkICMxMTExMTE7XHJcblx0YmFja2dyb3VuZDogIzMzMzMzMztcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbi5OYXZiYXJJdGVtcyAubWVudUJ0bntcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uTmF2YmFySXRlbXMgLm1lbnVJY29ue1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDg4YTk7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdHBhZGRpbmc6IDIwcHggMTJweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ei1pbmRleDogMTA7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5OYXZiYXJJdGVtcyAubWVudUljb246aG92ZXJ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwODhhOTtcclxufVxyXG5cclxuLm1lbnVJY29uIC5iYXJze1xyXG5cdGJhY2tncm91bmQ6ICM5OTk5OTk7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0aGVpZ2h0OiAycHg7XHJcblx0d2lkdGg6IDE4cHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1vdXQ7XHJcblxyXG59XHJcbi5tZW51SWNvbiAuYmFyczo6YmVmb3JlLFxyXG4ubWVudUljb24gLmJhcnM6OmFmdGVye1xyXG5cdGJhY2tncm91bmQ6ICM5OTk5OTk7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1vdXQ7XHJcbn1cclxuLm1lbnVJY29uIC5iYXJzOjpiZWZvcmV7XHJcblx0dG9wOiA1cHg7XHJcbn1cclxuLm1lbnVJY29uIC5iYXJzOjphZnRlcntcclxuXHR0b3A6IC01cHg7XHJcbn1cclxuXHJcbi5tZW51QnRuOmNoZWNrZWQgfiAubmF2X2xpbmt7XHJcblx0d2lkdGg6IDMwMHB4O1xyXG59XHJcbi5tZW51QnRuOmNoZWNrZWQgfiAubWVudUljb24gLmJhcnN7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4ubWVudUJ0bjpjaGVja2VkIH4gLm1lbnVJY29uIC5iYXJzOjpiZWZvcmV7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuXHR0b3A6IDA7XHJcbn1cclxuLm1lbnVCdG46Y2hlY2tlZCB+IC5tZW51SWNvbiAuYmFyczo6YWZ0ZXJ7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdHRvcDogMDtcclxufVxyXG5cclxuLk5hdmJhckl0ZW1zIC5iYXJMaW5le1xyXG5cdG1pbi13aWR0aDogMTAwcHg7XHJcblx0aGVpZ2h0OiAwcHg7XHJcblx0Ym9yZGVyLXRvcDogNXB4IHNvbGlkIHJnYigxOTcsIDE5NCwgMTkpO1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0ei1pbmRleDogMTtcclxuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAuOHM7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuXHQuTmF2YmFySXRlbXMgLm5hdl9saW5rIHtcclxuXHRcdGNsZWFyOiBub25lO1xyXG5cdFx0d2lkdGg6IGF1dG87XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0fVxyXG5cdC5OYXZiYXJJdGVtcyAubWVudUljb257XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHQuTmF2YmFySXRlbXMgbGl7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIFxyXG5cdH1cclxuXHQuTmF2YmFySXRlbXMgbGk6aG92ZXJ7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0fVxyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBmb290ZXJTdHlsZSA9IGNzc2BcclxuLkZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDUwcHggMHB4O1xyXG59XHJcblxyXG4uRm9vdGVyIGRpdntcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAuRm9vdGVyIGRpdntcclxuICAgICAgICB3aWR0aDogNjQwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDEyODFweCl7XHJcbiAgICAuRm9vdGVyIGRpdntcclxuICAgICAgICB3aWR0aDogMTIwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuLmxpbmVfMXtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODY4Njg2O1xyXG59XHJcblxyXG4uY29weXJpZ2h0e1xyXG4gICAgbWFyZ2luOiAyMHB4IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnNvY2lhbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0cGFkZGluZzogMCU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5zb2NpYWwgbGl7XHJcblxyXG4gICAgbWFyZ2luOiA1cHggMTBweDtcclxufVxyXG5cclxuLnNvY2lhbCBhIHtcclxuICAgIGJhY2tncm91bmQ6ICM5OTk5OTk7XHJcbiAgICBjb2xvcjogI2VmZWZlZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnNvY2lhbCBsaSBhIGRpdntcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG59XHJcblxyXG4uZmJfaWNvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9pY29ucy9mYWNlYm9vay5wbmcnKTtcclxufVxyXG4udHdfaWNvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9pY29ucy90d2l0dGVyLnBuZycpO1xyXG59XHJcbi5pZ19pY29ue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1hZ2VzL2ljb25zL2luc3RhZ3JhbS5wbmcnKTtcclxufVxyXG4uZGNfaWNvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9pY29ucy9kaXNjb3JkaWEucG5nJyk7XHJcbn1cclxuLnl0X2ljb257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWFnZXMvaWNvbnMveW91dHViZS5wbmcnKTtcclxufVxyXG5cclxuXHJcbi5zb2NpYWwgYS50dzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBhY2VlO1xyXG59IFxyXG4uc29jaWFsIGEuZmI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzNiNTk5ODtcclxufVxyXG4uc29jaWFsIGEueXQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2RkNGIzOTtcclxufVxyXG4uc29jaWFsIGEuZGM6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzNiNTk5ODtcclxufVxyXG4uc29jaWFsIGEuaWc6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2JiOGQwZTtcclxufVxyXG5gIl19 */\n/*@ sourceURL=D:\\\\Programacion\\\\DesarrolloWeb\\\\web-cosmerelatam\\\\cosmere-latam\\\\styles\\\\mainStyles.js */");
navbarStyle.__hash = "3096253922";
const footerStyle = new String(".Footer.jsx-1433378752{background-color:#202020;position:relative;min-width:100%;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0;padding:50px 0px;}.Footer.jsx-1433378752 div.jsx-1433378752{width:320px;margin:auto;}@media all and (min-width:768px){.Footer.jsx-1433378752 div.jsx-1433378752{width:640px;margin:auto;}}@media all and (min-width:1281px){.Footer.jsx-1433378752 div.jsx-1433378752{width:1200px;margin:auto;}}.line_1.jsx-1433378752{margin-top:10px;border:1px solid #868686;}.copyright.jsx-1433378752{margin:20px 10px;color:#ffffff;}.social.jsx-1433378752{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0%;top:0;left:0;right:0;list-style:none;padding:0px;}.social.jsx-1433378752 li.jsx-1433378752{margin:5px 10px;}.social.jsx-1433378752 a.jsx-1433378752{background:#999999;color:#efefef;border-radius:20px;-webkit-text-decoration:none;text-decoration:none;line-height:30px;width:40px;height:40px;font-size:18px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.social.jsx-1433378752 li.jsx-1433378752 a.jsx-1433378752 div.jsx-1433378752{margin:10px;background-size:cover;background-position:center;background-repeat:no-repeat;margin:auto;width:60%;height:60%;}.fb_icon.jsx-1433378752{background-image:url('/images/icons/facebook.png');}.tw_icon.jsx-1433378752{background-image:url('/images/icons/twitter.png');}.ig_icon.jsx-1433378752{background-image:url('/images/icons/instagram.png');}.dc_icon.jsx-1433378752{background-image:url('/images/icons/discordia.png');}.yt_icon.jsx-1433378752{background-image:url('/images/icons/youtube.png');}.social.jsx-1433378752 a.tw.jsx-1433378752:hover{background:#00acee;}.social.jsx-1433378752 a.fb.jsx-1433378752:hover{background:#3b5998;}.social.jsx-1433378752 a.yt.jsx-1433378752:hover{background:#dd4b39;}.social.jsx-1433378752 a.dc.jsx-1433378752:hover{background:#3b5998;}.social.jsx-1433378752 a.ig.jsx-1433378752:hover{background:#bb8d0e;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXHN0eWxlc1xcbWFpblN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvTjhCLEFBRzhCLEFBWWIsQUFLSSxBQU1DLEFBTUQsQUFLQyxBQUtKLEFBV0csQUFJRyxBQVlQLEFBVXVDLEFBR0QsQUFHRSxBQUdBLEFBR0YsQUFLL0IsQUFHQSxBQUdBLEFBR0EsQUFHQSxZQTVGUCxBQUtJLEFBaURNLENBM0NOLEdBTVMsQUFxQjdCLENBaEJrQixFQW9CQSxBQXVDbEIsQUFHQSxBQUdBLEFBR0EsQUFHQSxLQTVGQSxBQUtJLENBbEJrQixBQXdCbEIsTUFXSixFQW9CdUIsQ0FZUSxPQXJDL0IsRUE3Qm1CLE9BOEVuQixBQVNBLENBWkEsQ0FwQnlCLEFBMEJ6QixBQUdBLE1BbkZjLEdBa0VrQixPQWpFZixNQW9DTCxXQUNMLElBNkJTLEVBNUJSLE9BQ0ksR0E0QkUsQ0FiTyxJQWRELEtBNEJMLFFBYkEsR0FkQyxBQTRCaEIsUUFiZ0IsSUFkaEIsUUF6Q3VCLEFBd0RKLGVBQ0YsMEVBQ2pCLElBekQyQixtR0FDZCxTQUNRLGlCQUNyQiIsImZpbGUiOiJEOlxcUHJvZ3JhbWFjaW9uXFxEZXNhcnJvbGxvV2ViXFx3ZWItY29zbWVyZWxhdGFtXFxjb3NtZXJlLWxhdGFtXFxzdHlsZXNcXG1haW5TdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IG5hdmJhclN0eWxlID0gY3NzYFxyXG4uTmF2YmFySXRlbXMge1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2IoMCwgMCwgMCwgMS4wKSAwJSAsIHJnYmEoMCwgMCwgMCwgMC41KSA4MCUsIHJnYmEoMCwgMCwgMCwgMC41KSAxMDAlKTtcclxuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHRwYWRkaW5nOiAwcHg7XHJcblx0bWFyZ2luOjBweDtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMHZ3O1xyXG5cdHotaW5kZXg6IDEwO1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4ubmF2X2xvZ297XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDcwcHg7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvaW1hZ2VzL0xvZ29DTC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdG1hcmdpbjogNXB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cdG1hcmdpbi1yaWdodDogNTBweDtcclxufVxyXG5cclxuLk5hdmJhckl0ZW1zIHVse1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0cGFkZGluZzogMDtcclxuXHRtYXJnaW46IDA7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRmbG9hdDogcmlnaHQ7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uTmF2YmFySXRlbXMgbGl7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0YWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDE4cHggMjBweDtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLk5hdmJhckl0ZW1zIGxpe1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdHJpZ2h0OiA1JTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgLjhzIGVhc2UtaW47XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cGFkZGluZzogMThweCAyMHB4O1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uTmF2YmFySXRlbXMgbGk6aG92ZXJ7XHJcblx0Y29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHR0ZXh0LXNoYWRvdzowcHggMHB4IDEwcHggIzAwMDAwMDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW47XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRib3JkZXItbGVmdDogNXB4IHNvbGlkICMwMDg4YTk7XHJcbn1cclxuXHJcbi5idG4tbGd7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwODhhOTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRjb2xvcjogIzAwODhhOTtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMTBweCAyMHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbi5idG4tbGc6aG92ZXJ7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwODhhOTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0YmFja2dyb3VuZDogIzAwODhhOTtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcbi5idG4tbGc6YWN0aXZle1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDg4YTk7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGJhY2tncm91bmQ6IG5vbmU7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG4uYnRuLWxnOmZvY3Vze1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5OYXZiYXJJdGVtcyAubmF2X2xpbmt7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGNsZWFyOiBib3RoO1xyXG5cdHdpZHRoOiAwO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1vdXQ7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRyaWdodDogMDtcclxuXHRib3JkZXItdG9wOiA1NXB4IHNvbGlkICMxMTExMTE7XHJcblx0YmFja2dyb3VuZDogIzMzMzMzMztcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbi5OYXZiYXJJdGVtcyAubWVudUJ0bntcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uTmF2YmFySXRlbXMgLm1lbnVJY29ue1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDg4YTk7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdHBhZGRpbmc6IDIwcHggMTJweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ei1pbmRleDogMTA7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5OYXZiYXJJdGVtcyAubWVudUljb246aG92ZXJ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwODhhOTtcclxufVxyXG5cclxuLm1lbnVJY29uIC5iYXJze1xyXG5cdGJhY2tncm91bmQ6ICM5OTk5OTk7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0aGVpZ2h0OiAycHg7XHJcblx0d2lkdGg6IDE4cHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1vdXQ7XHJcblxyXG59XHJcbi5tZW51SWNvbiAuYmFyczo6YmVmb3JlLFxyXG4ubWVudUljb24gLmJhcnM6OmFmdGVye1xyXG5cdGJhY2tncm91bmQ6ICM5OTk5OTk7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1vdXQ7XHJcbn1cclxuLm1lbnVJY29uIC5iYXJzOjpiZWZvcmV7XHJcblx0dG9wOiA1cHg7XHJcbn1cclxuLm1lbnVJY29uIC5iYXJzOjphZnRlcntcclxuXHR0b3A6IC01cHg7XHJcbn1cclxuXHJcbi5tZW51QnRuOmNoZWNrZWQgfiAubmF2X2xpbmt7XHJcblx0d2lkdGg6IDMwMHB4O1xyXG59XHJcbi5tZW51QnRuOmNoZWNrZWQgfiAubWVudUljb24gLmJhcnN7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4ubWVudUJ0bjpjaGVja2VkIH4gLm1lbnVJY29uIC5iYXJzOjpiZWZvcmV7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuXHR0b3A6IDA7XHJcbn1cclxuLm1lbnVCdG46Y2hlY2tlZCB+IC5tZW51SWNvbiAuYmFyczo6YWZ0ZXJ7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdHRvcDogMDtcclxufVxyXG5cclxuLk5hdmJhckl0ZW1zIC5iYXJMaW5le1xyXG5cdG1pbi13aWR0aDogMTAwcHg7XHJcblx0aGVpZ2h0OiAwcHg7XHJcblx0Ym9yZGVyLXRvcDogNXB4IHNvbGlkIHJnYigxOTcsIDE5NCwgMTkpO1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0ei1pbmRleDogMTtcclxuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAuOHM7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuXHQuTmF2YmFySXRlbXMgLm5hdl9saW5rIHtcclxuXHRcdGNsZWFyOiBub25lO1xyXG5cdFx0d2lkdGg6IGF1dG87XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0fVxyXG5cdC5OYXZiYXJJdGVtcyAubWVudUljb257XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHQuTmF2YmFySXRlbXMgbGl7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIFxyXG5cdH1cclxuXHQuTmF2YmFySXRlbXMgbGk6aG92ZXJ7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0fVxyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBmb290ZXJTdHlsZSA9IGNzc2BcclxuLkZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDUwcHggMHB4O1xyXG59XHJcblxyXG4uRm9vdGVyIGRpdntcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAuRm9vdGVyIGRpdntcclxuICAgICAgICB3aWR0aDogNjQwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDEyODFweCl7XHJcbiAgICAuRm9vdGVyIGRpdntcclxuICAgICAgICB3aWR0aDogMTIwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuLmxpbmVfMXtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODY4Njg2O1xyXG59XHJcblxyXG4uY29weXJpZ2h0e1xyXG4gICAgbWFyZ2luOiAyMHB4IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnNvY2lhbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0cGFkZGluZzogMCU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5zb2NpYWwgbGl7XHJcblxyXG4gICAgbWFyZ2luOiA1cHggMTBweDtcclxufVxyXG5cclxuLnNvY2lhbCBhIHtcclxuICAgIGJhY2tncm91bmQ6ICM5OTk5OTk7XHJcbiAgICBjb2xvcjogI2VmZWZlZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnNvY2lhbCBsaSBhIGRpdntcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG59XHJcblxyXG4uZmJfaWNvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9pY29ucy9mYWNlYm9vay5wbmcnKTtcclxufVxyXG4udHdfaWNvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9pY29ucy90d2l0dGVyLnBuZycpO1xyXG59XHJcbi5pZ19pY29ue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1hZ2VzL2ljb25zL2luc3RhZ3JhbS5wbmcnKTtcclxufVxyXG4uZGNfaWNvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9pY29ucy9kaXNjb3JkaWEucG5nJyk7XHJcbn1cclxuLnl0X2ljb257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWFnZXMvaWNvbnMveW91dHViZS5wbmcnKTtcclxufVxyXG5cclxuXHJcbi5zb2NpYWwgYS50dzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBhY2VlO1xyXG59IFxyXG4uc29jaWFsIGEuZmI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzNiNTk5ODtcclxufVxyXG4uc29jaWFsIGEueXQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2RkNGIzOTtcclxufVxyXG4uc29jaWFsIGEuZGM6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzNiNTk5ODtcclxufVxyXG4uc29jaWFsIGEuaWc6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2JiOGQwZTtcclxufVxyXG5gIl19 */\n/*@ sourceURL=D:\\\\Programacion\\\\DesarrolloWeb\\\\web-cosmerelatam\\\\cosmere-latam\\\\styles\\\\mainStyles.js */");
footerStyle.__hash = "1433378752";

/***/ }),

/***/ "./styles/newStyles.js":
/*!*****************************!*\
  !*** ./styles/newStyles.js ***!
  \*****************************/
/*! exports provided: newSecction, newStyle, sliderStyle, articleStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newSecction", function() { return newSecction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newStyle", function() { return newStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderStyle", function() { return sliderStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleStyles", function() { return articleStyles; });
const color = {
  primary: '#393b40',
  secondary: '#939313'
};
const newSecction = new String("section.jsx-2661352353{background:url(\"/images/newsBackground.jpg\") no-repeat;background-size:cover;background-position:left top;background-position:20% top;background-attachment:fixed;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}@media all and (min-width:768px){.new.jsx-2661352353{padding-top:66px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXHN0eWxlc1xcbmV3U3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU84QixBQUdnRSxBQVV0QyxpQkFFckIsc0NBWDBCLHNCQUNPLDZCQUNELDRCQUNBLDRCQUNOLDhFQUMxQiIsImZpbGUiOiJEOlxcUHJvZ3JhbWFjaW9uXFxEZXNhcnJvbGxvV2ViXFx3ZWItY29zbWVyZWxhdGFtXFxjb3NtZXJlLWxhdGFtXFxzdHlsZXNcXG5ld1N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXHJcblxyXG5jb25zdCBjb2xvciA9IHtcclxuICAgIHByaW1hcnk6ICcjMzkzYjQwJyxcclxuICAgIHNlY29uZGFyeTogJyM5MzkzMTMnLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbmV3U2VjY3Rpb24gPSBjc3NgXHJcbiAgICBzZWN0aW9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvaW1hZ2VzL25ld3NCYWNrZ3JvdW5kLmpwZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMCUgdG9wO1xyXG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAubmV3e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA2NnB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiAgICBcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IG5ld1N0eWxlID0gY3NzYFxyXG5oNXtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG4ubmV3cyAuY2F0ZWdvcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMHB4KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbn1cclxuLm5ld3MgaW5wdXR7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5uZXdzIC5jYXRlZ29yeSBsYWJlbHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1pbi13aWR0aDogMTU1cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTcsIDU5LCA2NCwgMC4yKTtcclxuICAgIGNvbG9yOiAjMzkzYjQwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1cHggMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIDBzIGVhc2U7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4ubmV3cyAuY2F0ZWdvcnkgbGFiZWw6aG92ZXJ7XHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzYjQwOyAgIFxyXG59XHJcbi5uZXdzIC5jYXRlZ29yeSBpbnB1dFtpZD1cImNhdGVnb3J5MVwiXTpjaGVja2VkIH4gbGFiZWxbZm9yPVwiY2F0ZWdvcnkxXCJde1xyXG4gICAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2I0MDtcclxufVxyXG4ubmV3cyAuY2F0ZWdvcnkgaW5wdXRbaWQ9XCJjYXRlZ29yeTJcIl06Y2hlY2tlZCB+IGxhYmVsW2Zvcj1cImNhdGVnb3J5MlwiXXtcclxuICAgIGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNiNDA7XHJcbn1cclxuLm5ld3MgLmNhdGVnb3J5IGlucHV0W2lkPVwiY2F0ZWdvcnkzXCJdOmNoZWNrZWQgfiBsYWJlbFtmb3I9XCJjYXRlZ29yeTNcIl17XHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzYjQwO1xyXG59XHJcbi5uZXdzIC5jYXRlZ29yeSBpbnB1dFtpZD1cImNhdGVnb3J5NFwiXTpjaGVja2VkIH4gbGFiZWxbZm9yPVwiY2F0ZWdvcnk0XCJde1xyXG4gICAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2I0MDtcclxufVxyXG5cclxuLm5ld3NMaXN0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogdG9wO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxufVxyXG4ubmV3c0xpc3QgdWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5uZXd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XHJcbn1cclxuLm5ldzpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxufVxyXG4ubmV3IGF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tb3Jle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5uZXcgLmltZyB7XHJcbiAgICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMwLCAzMCwgMzAsIDAuNyk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLm5ldyAuY29udGVudHtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHRvcDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG5cclxufVxyXG5cclxuLm5ldyAuZGF0YXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYm90dG9tOiAxNnB4O1xyXG4gICAgcmlnaHQ6IDE2cHg7XHJcbiAgICBjb2xvcjogcmdiYSg4MCwgODAsIDgwLCAxKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxufVxyXG4ubmV3IC5zZWN0aW9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUycHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLm5ldyBoM3tcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi5uZXcgcHtcclxuICAgIG1hcmdpbi10b3A6IDExcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzdkN2Q3ZDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgIC5uZXdzTGlzdHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHggMHB4O1xyXG4gICAgfVxyXG4gICAgLm5ld3NMaXN0IHVse1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAubmV3e1xyXG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEyODBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxNzBweDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIH1cclxuICAgLm1vcmV7XHJcbiAgICAgICAgd2lkdGg6IDEyODBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAubmV3IC5pbWcge1xyXG4gICAgICAgIHdpZHRoOiAyNjVweDtcclxuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDMwLCAzMCwgMC43KTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG4gICAgLm5ldyAuY29udGVudHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjg1cHgpO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIC5uZXcgaDN7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcbiAgICAubmV3IHB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTFweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICM3ZDdkN2Q7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAubmV3IC5kYXRhe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZXJTdHlsZSA9IGNzc2BcclxuLnRvcE5ld3N7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDcwcHggMHB4O1xyXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcclxufVxyXG5cclxuLnNsaWRlck1haW57XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XHJcbn1cclxuXHJcbi50b3BOZXdzIHVse1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDYwMG1zIGVhc2U7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYXV0b1NsaWRlO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMC41cztcclxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcbi50b3BOZXdzIGxpe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzAsIDMwLCAzMCwgMC43KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogMTBweCAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcclxufVxyXG4udG9wTmV3cyBsaTpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMCAycHggcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG59XHJcblxyXG4udG9wTmV3cyBsaSAubmV3c0ltZ3tcclxuICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgICB3aWR0aDogMjgzcHg7XHJcbiAgICBoZWlnaHQ6IDEyM3B4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbi50b3BOZXdzIGxpIC5uZXdzVGl0bGUgaDF7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAzcHggIzAwMDAwMDtcclxuICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbn1cclxuLnRvcE5ld3MgbGkgLm5ld3NUZXh0e1xyXG4gICAgbWluLWhlaWdodDogMTMwcHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi50b3BOZXdzIGxpIC5uZXdzVGV4dCBwe1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggM3B4ICMwMDAwMDA7XHJcbn1cclxuLnRvcE5ld3MgbGkgLm5ld3NPcmlnaW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDI4M3B4O1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggM3B4ICMwMDAwMDA7XHJcbn1cclxuLnRvcE5ld3MgbGkgLm5ld3NPcmlnaW4gLmRhdGV7XHJcbiAgICBcclxuICAgIGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5NCk7XHJcbn1cclxuLnRvcE5ld3MgbGkgLm5ld3NPcmlnaW4gLm9yaWdpbntcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG59XHJcblxyXG4udG9wTmV3cyAuc2xpZGVyQmFye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4udG9wTmV3cyBpbnB1dHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnRvcE5ld3MgLnNsaWRlckJhciBsYWJlbHtcclxuICAgIG1hcmdpbjogNXB4IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg1NywgNTksIDY0LCAwLjMpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCA1cHggcmdiYSg1NywgNTksIDY0LCAwLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuaW5wdXRbaWQ9XCJzbGlkZXIxXCJdOmNoZWNrZWQgfiAuc2xpZGVyTWFpbiAuc2xpZGVye1xyXG4gICAgYW5pbWF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbn1cclxuaW5wdXRbaWQ9XCJzbGlkZXIxXCJdOmNoZWNrZWQgfiAuc2xpZGVyQmFyIGxhYmVsW2Zvcj1cInNsaWRlcjFcIl17XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5NywgMTk0LCAxOSwgLjYpO1xyXG59XHJcblxyXG5pbnB1dFtpZD1cInNsaWRlcjJcIl06Y2hlY2tlZCB+IC5zbGlkZXJNYWluIC5zbGlkZXJ7XHJcbiAgICBhbmltYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzUwcHgsIDBweCk7XHJcbn1cclxuaW5wdXRbaWQ9XCJzbGlkZXIyXCJdOmNoZWNrZWQgfiAuc2xpZGVyQmFyIGxhYmVsW2Zvcj1cInNsaWRlcjJcIl17XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5NywgMTk0LCAxOSwgLjYpO1xyXG59XHJcblxyXG5pbnB1dFtpZD1cInNsaWRlcjNcIl06Y2hlY2tlZCB+IC5zbGlkZXJNYWluIC5zbGlkZXJ7XHJcbiAgICBhbmltYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzAwcHgsIDBweCk7XHJcbn1cclxuaW5wdXRbaWQ9XCJzbGlkZXIzXCJdOmNoZWNrZWQgfiAuc2xpZGVyQmFyIGxhYmVsW2Zvcj1cInNsaWRlcjNcIl17XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5NywgMTk0LCAxOSwgLjYpO1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAubmV3c3tcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG4gICAgLnRvcE5ld3MgdWx7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBwYWRkaW5nOiAwcHggMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICAgIGFuaW1hdGlvbjogbm9uZTtcclxuICAgIH1cclxuICAgIC50b3BOZXdzIGxpIC5uZXdzSW1ne1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgICAgICAgd2lkdGg6IDM4MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTkwcHg7XHJcbiAgICB9XHJcbiAgICAudG9wTmV3cyBsaXtcclxuICAgICAgICB3aWR0aDogNDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NTBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0NTBweDtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxuICAgIC50b3BOZXdzIGxpIC5uZXdzVGV4dHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMzBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuc2xpZGVyTWFpbntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC50b3BOZXdzIC5zbGlkZXJCYXJ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLyogQW5pbWFjaW9uICovXHJcblxyXG5Aa2V5ZnJhbWVzIGF1dG9TbGlkZXtcclxuICAgIDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgfVxyXG4gICAgMzAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgfVxyXG4gICAgNDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zNTBweCwgMCk7XHJcbiAgICB9XHJcbiAgICA3MCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTM1MHB4LCAwKTtcclxuICAgIH1cclxuICAgIDgwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzAwcHgsIDApO1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzAwcHgsIDApO1xyXG4gICAgfVxyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBhcnRpY2xlU3R5bGVzID0gY3NzYFxyXG5kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmFydGljbGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmYWE7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICBtYXJnaW46IDBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMzAxcHg7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZCAzcHggcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmJhY2t7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbn1cclxuaDF7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxufVxyXG5zcGFue1xyXG4gICAgY29sb3I6IHJnYmEoODAsIDgwLCA4MCwgMSk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbnAge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAuYXJ0aWNsZXtcclxuICAgICAgICB3aWR0aDogOTAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogc29saWQgNXB4IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY5OTtcclxuICAgICAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4ICMwMDAwMDA5OTtcclxuICAgIH1cclxuICAgIC5iYWNre1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgfVxyXG4gICAgLmJhY2sgZGl2e1xyXG4gICAgICAgIHdpZHRoOiA5MDBweDtcclxuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIH1cclxuICAgIC5ib2R5e1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY5OTtcclxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5gIl19 */\n/*@ sourceURL=D:\\\\Programacion\\\\DesarrolloWeb\\\\web-cosmerelatam\\\\cosmere-latam\\\\styles\\\\newStyles.js */");
newSecction.__hash = "2661352353";
const newStyle = new String("h5.jsx-774181638{margin:5px 0px;}.news.jsx-774181638 .category.jsx-774181638{background-color:rgba(255,255,255,.8);-webkit-backdrop-filter:blur(30px);backdrop-filter:blur(30px);box-shadow:0px 0px 10px #000000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:10px 0px;}.news.jsx-774181638 input.jsx-774181638{display:none;}.news.jsx-774181638 .category.jsx-774181638 label.jsx-774181638{display:inline-block;min-width:155px;height:36px;line-height:36px;background-color:rgba(57,59,64,0.2);color:#393b40;border-radius:4px;text-align:center;margin:5px 10px;cursor:pointer;-webkit-transition:all 0.2s 0s ease;transition:all 0.2s 0s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.news.jsx-774181638 .category.jsx-774181638 label.jsx-774181638:hover{color:rgb(197,194,19);background-color:#393b40;}.news.jsx-774181638 .category.jsx-774181638 input[id=\"category1\"].jsx-774181638:checked~label[for=\"category1\"].jsx-774181638{color:rgb(197,194,19);background-color:#393b40;}.news.jsx-774181638 .category.jsx-774181638 input[id=\"category2\"].jsx-774181638:checked~label[for=\"category2\"].jsx-774181638{color:rgb(197,194,19);background-color:#393b40;}.news.jsx-774181638 .category.jsx-774181638 input[id=\"category3\"].jsx-774181638:checked~label[for=\"category3\"].jsx-774181638{color:rgb(197,194,19);background-color:#393b40;}.news.jsx-774181638 .category.jsx-774181638 input[id=\"category4\"].jsx-774181638:checked~label[for=\"category4\"].jsx-774181638{color:rgb(197,194,19);background-color:#393b40;}.newsList.jsx-774181638{width:100%;background-color:rgba(255,255,255,.5);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:top;-webkit-box-align:top;-ms-flex-align:top;align-items:top;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:20px 0px;}.newsList.jsx-774181638 ul.jsx-774181638{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0;margin:0;}.new.jsx-774181638{width:100%;min-height:100px;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;background:rgb(230,230,230);border-radius:5px;padding:5px 10px;margin:5px 0px;-webkit-transition:all .2s ease-out;transition:all .2s ease-out;}.new.jsx-774181638:hover{background:rgb(255,255,255);box-shadow:0 0 0 4px rgb(197,194,19);}.new.jsx-774181638 a.jsx-774181638{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;overflow:hidden;}.more.jsx-774181638{width:100%;min-width:100%;height:50px;margin:0px;margin-top:20px;}.new.jsx-774181638 .img.jsx-774181638{min-width:80px;height:50px;background-color:rgba(30,30,30,0.7);margin-right:20px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.new.jsx-774181638 .content.jsx-774181638{height:80px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:top;-webkit-box-align:top;-ms-flex-align:top;align-items:top;margin:0px;}.new.jsx-774181638 .data.jsx-774181638{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:300px;bottom:16px;right:16px;color:rgba(80,80,80,1);font-weight:400;font-size:9px;}.new.jsx-774181638 .section.jsx-774181638{margin-left:52px;text-align:right;}.new.jsx-774181638 h3.jsx-774181638{color:#000000;font-weight:500;font-size:15px;margin:0px;}.new.jsx-774181638 p.jsx-774181638{margin-top:11px;font-size:16px;color:#7d7d7d;display:none;}@media all and (min-width:768px){.newsList.jsx-774181638{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:50px 0px;}.newsList.jsx-774181638 ul.jsx-774181638{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.new.jsx-774181638{min-width:300px;width:1280px;min-height:170px;margin:10px 0px;padding:15px 20px;}.more.jsx-774181638{width:1280px;height:80px;}.new.jsx-774181638 .img.jsx-774181638{width:265px;height:140px;background-color:rgba(30,30,30,0.7);margin-right:20px;padding:0px;}.new.jsx-774181638 .content.jsx-774181638{width:calc(100% - 285px);margin:0;}.new.jsx-774181638 h3.jsx-774181638{color:#000000;font-weight:500;font-size:19px;margin:0px;}.new.jsx-774181638 p.jsx-774181638{margin-top:11px;font-size:16px;color:#7d7d7d;display:block;}.new.jsx-774181638 .data.jsx-774181638{font-weight:600;font-size:12px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXHN0eWxlc1xcbmV3U3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCMkIsQUFHb0IsQUFHMEIsQUFXNUIsQUFHUSxBQWNHLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFLYixBQVNFLEFBT0YsQUFZbUIsQUFJbkIsQUFVQSxBQVFJLEFBT0gsQUFTTSxBQVdELEFBS0gsQUFNRSxBQVFPLEFBSUcsQUFHTixBQU9ILEFBSUQsQUFPYSxBQUlYLEFBTUUsQUFNQSxXQXhJcUIsQUFnQnhCLEFBZ0JMLEFBVUcsQ0FlRixBQXlESSxDQXhKckIsQUFvSm9CLENBNUJBLEFBMkNJLENBakx4QixBQXNHZ0IsQ0FzQ0csQUFlRSxBQTRCRSxBQU1BLENBNURGLENBWEosR0FyR0csQ0FjUyxBQUlBLEFBSUEsQUFJQSxBQUlBLENBc0NaLEVBOEViLEFBSTJDLEFBTTlCLENBOUVELENBUTJCLENBbENyQixBQVdxQixDQTRFbEIsQ0FyQk4sQUEyQ0ksQ0FyQ0wsQUEyQ0ksQUFNbEIsR0E1REosQUE0Q0ksR0E1SlksQ0FmZSxBQTZGaEIsT0F3Q0EsQUFNRSxBQXFDRSxBQU1HLENBbkhMLEFBdUZPLENBN0h4QixBQUlBLEFBSUEsQUFJQSxBQUlBLEVBN0JxQixBQWtDVSxBQTRDWCxPQXdDcEIsQUEyQ0ksRUFyQ0osQ0EyQ0ksRUFsQnNCLENBVkEsQ0F0REosRUF2QnRCLEFBaUJBLENBOUUyQyxHQWdJbEIsS0F2Rk4sSUEyRmYsQ0FpQmdCLENBVmhCLENBdERrQixLQUtJLEFBdUN0QixLQXFCQSxDQW5EeUIsS0FqQ04sR0FsRmEsRUFpQmxCLFNBaUNELEtBaENLLElBaURDLFdBVEksQ0F6RFYsRUFrQkssa0JBQ0YsQUFrRnBCLFlBS29CLEVBeEJNLEVBOURQLGVBQ2EsRUE2QlosSUFpQmMsQUFnRGxCLFlBQ0EsS0FuSE8sT0FvSFIsSUFqRE8sT0FrRFEsTUE1RGhCLEtBV08sS0FWUixLQWdERSxFQXJGTSxBQWlHRCxFQTNEcEIsR0FVbUIsSUF1Q25CLEtBMUJzQixFQXFDSixHQXJFUyxDQW9CSyxVQWtEaEMsc0JBdkhtQixnQ0FzRW5CLENBakRBLGtCQTZEb0IsTUFqRk8sU0FpRE4sQ0FpQ3JCLGdCQWhDQSx5RUFqRGUsV0FDTSxpQkFDckIiLCJmaWxlIjoiRDpcXFByb2dyYW1hY2lvblxcRGVzYXJyb2xsb1dlYlxcd2ViLWNvc21lcmVsYXRhbVxcY29zbWVyZS1sYXRhbVxcc3R5bGVzXFxuZXdTdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5cclxuY29uc3QgY29sb3IgPSB7XHJcbiAgICBwcmltYXJ5OiAnIzM5M2I0MCcsXHJcbiAgICBzZWNvbmRhcnk6ICcjOTM5MzEzJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5ld1NlY2N0aW9uID0gY3NzYFxyXG4gICAgc2VjdGlvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL2ltYWdlcy9uZXdzQmFja2dyb3VuZC5qcGdcIikgbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAlIHRvcDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLm5ld3tcclxuICAgICAgICBwYWRkaW5nLXRvcDogNjZweDtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4gICAgXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBuZXdTdHlsZSA9IGNzc2BcclxuaDV7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbn1cclxuLm5ld3MgLmNhdGVnb3J5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzBweCk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG59XHJcbi5uZXdzIGlucHV0e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubmV3cyAuY2F0ZWdvcnkgbGFiZWx7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtaW4td2lkdGg6IDE1NXB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU3LCA1OSwgNjQsIDAuMik7XHJcbiAgICBjb2xvcjogIzM5M2I0MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyAwcyBlYXNlO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuLm5ld3MgLmNhdGVnb3J5IGxhYmVsOmhvdmVye1xyXG4gICAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2I0MDsgICBcclxufVxyXG4ubmV3cyAuY2F0ZWdvcnkgaW5wdXRbaWQ9XCJjYXRlZ29yeTFcIl06Y2hlY2tlZCB+IGxhYmVsW2Zvcj1cImNhdGVnb3J5MVwiXXtcclxuICAgIGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNiNDA7XHJcbn1cclxuLm5ld3MgLmNhdGVnb3J5IGlucHV0W2lkPVwiY2F0ZWdvcnkyXCJdOmNoZWNrZWQgfiBsYWJlbFtmb3I9XCJjYXRlZ29yeTJcIl17XHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzYjQwO1xyXG59XHJcbi5uZXdzIC5jYXRlZ29yeSBpbnB1dFtpZD1cImNhdGVnb3J5M1wiXTpjaGVja2VkIH4gbGFiZWxbZm9yPVwiY2F0ZWdvcnkzXCJde1xyXG4gICAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2I0MDtcclxufVxyXG4ubmV3cyAuY2F0ZWdvcnkgaW5wdXRbaWQ9XCJjYXRlZ29yeTRcIl06Y2hlY2tlZCB+IGxhYmVsW2Zvcj1cImNhdGVnb3J5NFwiXXtcclxuICAgIGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNiNDA7XHJcbn1cclxuXHJcbi5uZXdzTGlzdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHRvcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweCAwcHg7XHJcbn1cclxuLm5ld3NMaXN0IHVse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4ubmV3e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xyXG59XHJcbi5uZXc6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiKDE5NywgMTk0LCAxOSk7XHJcbn1cclxuLm5ldyBhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubW9yZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubmV3IC5pbWcge1xyXG4gICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMCwgMzAsIDMwLCAwLjcpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbi5uZXcgLmNvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiB0b3A7XHJcbiAgICBtYXJnaW46IDBweDtcclxuXHJcbn1cclxuXHJcbi5uZXcgLmRhdGF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJvdHRvbTogMTZweDtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgY29sb3I6IHJnYmEoODAsIDgwLCA4MCwgMSk7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbn1cclxuLm5ldyAuc2VjdGlvbntcclxuICAgIG1hcmdpbi1sZWZ0OiA1MnB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5uZXcgaDN7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4ubmV3IHB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM3ZDdkN2Q7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAubmV3c0xpc3R7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IDBweDtcclxuICAgIH1cclxuICAgIC5uZXdzTGlzdCB1bHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLm5ld3tcclxuICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMjgwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTcwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICB9XHJcbiAgIC5tb3Jle1xyXG4gICAgICAgIHdpZHRoOiAxMjgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLm5ldyAuaW1nIHtcclxuICAgICAgICB3aWR0aDogMjY1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMwLCAzMCwgMzAsIDAuNyk7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuICAgIC5uZXcgLmNvbnRlbnR7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4NXB4KTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAubmV3IGgze1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG4gICAgLm5ldyBwe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDExcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjN2Q3ZDdkO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLm5ldyAuZGF0YXtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVyU3R5bGUgPSBjc3NgXHJcbi50b3BOZXdze1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiA3MHB4IDBweDtcclxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XHJcbn1cclxuXHJcbi5zbGlkZXJNYWlue1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG59XHJcblxyXG4udG9wTmV3cyB1bHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG5cclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCA2MDBtcyBlYXNlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGF1dG9TbGlkZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMjAuNXM7XHJcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcblxyXG4udG9wTmV3cyBsaXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMwLCAzMCwgMzAsIDAuNyk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDEwcHggMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XHJcbn1cclxuLnRvcE5ld3MgbGk6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDAgMnB4IHJnYmEoMCwgMCwgMCwgMC43KTtcclxufVxyXG5cclxuLnRvcE5ld3MgbGkgLm5ld3NJbWd7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xyXG4gICAgd2lkdGg6IDI4M3B4O1xyXG4gICAgaGVpZ2h0OiAxMjNweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4udG9wTmV3cyBsaSAubmV3c1RpdGxlIGgxe1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggM3B4ICMwMDAwMDA7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG59XHJcbi50b3BOZXdzIGxpIC5uZXdzVGV4dHtcclxuICAgIG1pbi1oZWlnaHQ6IDEzMHB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4udG9wTmV3cyBsaSAubmV3c1RleHQgcHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDNweCAjMDAwMDAwO1xyXG59XHJcbi50b3BOZXdzIGxpIC5uZXdzT3JpZ2lue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAyODNweDtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDNweCAjMDAwMDAwO1xyXG59XHJcbi50b3BOZXdzIGxpIC5uZXdzT3JpZ2luIC5kYXRle1xyXG4gICAgXHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk0LCAxOTQpO1xyXG59XHJcbi50b3BOZXdzIGxpIC5uZXdzT3JpZ2luIC5vcmlnaW57XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5KTtcclxufVxyXG5cclxuLnRvcE5ld3MgLnNsaWRlckJhcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnRvcE5ld3MgaW5wdXR7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi50b3BOZXdzIC5zbGlkZXJCYXIgbGFiZWx7XHJcbiAgICBtYXJnaW46IDVweCAxNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTcsIDU5LCA2NCwgMC4zKTtcclxuICAgIGJvcmRlcjogc29saWQgNXB4IHJnYmEoNTcsIDU5LCA2NCwgMC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmlucHV0W2lkPVwic2xpZGVyMVwiXTpjaGVja2VkIH4gLnNsaWRlck1haW4gLnNsaWRlcntcclxuICAgIGFuaW1hdGlvbjogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG59XHJcbmlucHV0W2lkPVwic2xpZGVyMVwiXTpjaGVja2VkIH4gLnNsaWRlckJhciBsYWJlbFtmb3I9XCJzbGlkZXIxXCJde1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOTcsIDE5NCwgMTksIC42KTtcclxufVxyXG5cclxuaW5wdXRbaWQ9XCJzbGlkZXIyXCJdOmNoZWNrZWQgfiAuc2xpZGVyTWFpbiAuc2xpZGVye1xyXG4gICAgYW5pbWF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTM1MHB4LCAwcHgpO1xyXG59XHJcbmlucHV0W2lkPVwic2xpZGVyMlwiXTpjaGVja2VkIH4gLnNsaWRlckJhciBsYWJlbFtmb3I9XCJzbGlkZXIyXCJde1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOTcsIDE5NCwgMTksIC42KTtcclxufVxyXG5cclxuaW5wdXRbaWQ9XCJzbGlkZXIzXCJdOmNoZWNrZWQgfiAuc2xpZGVyTWFpbiAuc2xpZGVye1xyXG4gICAgYW5pbWF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTcwMHB4LCAwcHgpO1xyXG59XHJcbmlucHV0W2lkPVwic2xpZGVyM1wiXTpjaGVja2VkIH4gLnNsaWRlckJhciBsYWJlbFtmb3I9XCJzbGlkZXIzXCJde1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOTcsIDE5NCwgMTksIC42KTtcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLm5ld3N7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuICAgIC50b3BOZXdzIHVse1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgICBhbmltYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICAudG9wTmV3cyBsaSAubmV3c0ltZ3tcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xyXG4gICAgICAgIHdpZHRoOiAzODBweDtcclxuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gICAgfVxyXG4gICAgLnRvcE5ld3MgbGl7XHJcbiAgICAgICAgd2lkdGg6IDQyMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDUwcHg7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICB9XHJcbiAgICAudG9wTmV3cyBsaSAubmV3c1RleHR7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTMwcHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gICAgLnNsaWRlck1haW57XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAudG9wTmV3cyAuc2xpZGVyQmFye1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIEFuaW1hY2lvbiAqL1xyXG5cclxuQGtleWZyYW1lcyBhdXRvU2xpZGV7XHJcbiAgICAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIH1cclxuICAgIDMwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIH1cclxuICAgIDQwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzUwcHgsIDApO1xyXG4gICAgfVxyXG4gICAgNzAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zNTBweCwgMCk7XHJcbiAgICB9XHJcbiAgICA4MCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTcwMHB4LCAwKTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTcwMHB4LCAwKTtcclxuICAgIH1cclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgYXJ0aWNsZVN0eWxlcyA9IGNzc2BcclxuZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5hcnRpY2xle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmFhO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMXB4O1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgM3B4IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5iYWNre1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogbm9uZTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG59XHJcbmgxe1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbn1cclxuc3BhbntcclxuICAgIGNvbG9yOiByZ2JhKDgwLCA4MCwgODAsIDEpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5wIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLmFydGljbGV7XHJcbiAgICAgICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDVweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOTk7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjMDAwMDAwOTk7XHJcbiAgICB9XHJcbiAgICAuYmFja3tcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgIH1cclxuICAgIC5iYWNrIGRpdntcclxuICAgICAgICB3aWR0aDogOTAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICB9XHJcbiAgICAuYm9keXtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOTk7XHJcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuYCJdfQ== */\n/*@ sourceURL=D:\\\\Programacion\\\\DesarrolloWeb\\\\web-cosmerelatam\\\\cosmere-latam\\\\styles\\\\newStyles.js */");
newStyle.__hash = "774181638";
const sliderStyle = new String(".topNews.jsx-2897110184{margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:70px 0px;justify-self:start;}.sliderMain.jsx-2897110184{width:350px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;justify-self:start;}.topNews.jsx-2897110184 ul.jsx-2897110184{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0px;margin:0;-webkit-transform:translate(0px,0px);-ms-transform:translate(0px,0px);transform:translate(0px,0px);-webkit-transition:all 600ms ease;transition:all 600ms ease;-webkit-animation-name:autoSlide-jsx-2897110184;animation-name:autoSlide-jsx-2897110184;-webkit-animation-duration:20.5s;animation-duration:20.5s;-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}.topNews.jsx-2897110184 li.jsx-2897110184{position:relative;width:320px;height:250px;background:rgba(30,30,30,0.7);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);border-radius:5px;padding:15px;margin:10px 15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-transition:all 0.2s ease-out;transition:all 0.2s ease-out;}.topNews.jsx-2897110184 li.jsx-2897110184:hover{box-shadow:0px 0px 0 2px rgba(0,0,0,0.7);}.topNews.jsx-2897110184 li.jsx-2897110184 .newsImg.jsx-2897110184{background:#333333;width:283px;height:123px;margin:0;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.topNews.jsx-2897110184 li.jsx-2897110184 .newsTitle.jsx-2897110184 h1.jsx-2897110184{color:#ffffff;font-size:22px;font-weight:500;text-shadow:0px 0px 3px #000000;margin:10px 0px;}.topNews.jsx-2897110184 li.jsx-2897110184 .newsText.jsx-2897110184{min-height:130px;display:none;}.topNews.jsx-2897110184 li.jsx-2897110184 .newsText.jsx-2897110184 p.jsx-2897110184{color:#ffffff;font-size:18px;overflow:hidden;text-shadow:0px 0px 3px #000000;}.topNews.jsx-2897110184 li.jsx-2897110184 .newsOrigin.jsx-2897110184{position:absolute;bottom:0px;right:10px;width:283px;margin-top:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;font-size:11px;text-shadow:0px 0px 3px #000000;}.topNews.jsx-2897110184 li.jsx-2897110184 .newsOrigin.jsx-2897110184 .date.jsx-2897110184{color:rgb(197,194,194);}.topNews.jsx-2897110184 li.jsx-2897110184 .newsOrigin.jsx-2897110184 .origin.jsx-2897110184{margin-left:auto;color:rgb(197,194,19);}.topNews.jsx-2897110184 .sliderBar.jsx-2897110184{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.topNews.jsx-2897110184 input.jsx-2897110184{display:none;}.topNews.jsx-2897110184 .sliderBar.jsx-2897110184 label.jsx-2897110184{margin:5px 15px;display:block;width:30px;height:30px;background:rgba(57,59,64,0.3);border:solid 5px rgba(57,59,64,0.5);border-radius:10px;}input[id=\"slider1\"].jsx-2897110184:checked~.sliderMain.jsx-2897110184 .slider.jsx-2897110184{-webkit-animation:none;animation:none;-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}input[id=\"slider1\"].jsx-2897110184:checked~.sliderBar.jsx-2897110184 label[for=\"slider1\"].jsx-2897110184{background:rgba(197,194,19,.6);}input[id=\"slider2\"].jsx-2897110184:checked~.sliderMain.jsx-2897110184 .slider.jsx-2897110184{-webkit-animation:none;animation:none;-webkit-transform:translate(-350px,0px);-ms-transform:translate(-350px,0px);transform:translate(-350px,0px);}input[id=\"slider2\"].jsx-2897110184:checked~.sliderBar.jsx-2897110184 label[for=\"slider2\"].jsx-2897110184{background:rgba(197,194,19,.6);}input[id=\"slider3\"].jsx-2897110184:checked~.sliderMain.jsx-2897110184 .slider.jsx-2897110184{-webkit-animation:none;animation:none;-webkit-transform:translate(-700px,0px);-ms-transform:translate(-700px,0px);transform:translate(-700px,0px);}input[id=\"slider3\"].jsx-2897110184:checked~.sliderBar.jsx-2897110184 label[for=\"slider3\"].jsx-2897110184{background:rgba(197,194,19,.6);}@media all and (min-width:768px){.news.jsx-2897110184{background-size:cover;}.topNews.jsx-2897110184 ul.jsx-2897110184{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:0px 0px;-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);-webkit-animation:none;animation:none;}.topNews.jsx-2897110184 li.jsx-2897110184 .newsImg.jsx-2897110184{background:#333333;width:380px;height:190px;}.topNews.jsx-2897110184 li.jsx-2897110184{width:420px;height:450px;min-height:450px;margin:5px;}.topNews.jsx-2897110184 li.jsx-2897110184 .newsText.jsx-2897110184{min-height:130px;display:inline-block;}.sliderMain.jsx-2897110184{width:100%;}.topNews.jsx-2897110184 .sliderBar.jsx-2897110184{display:none;}}@-webkit-keyframes autoSlide-jsx-2897110184{0%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}30%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}40%{-webkit-transform:translate(-350px,0);-ms-transform:translate(-350px,0);transform:translate(-350px,0);}70%{-webkit-transform:translate(-350px,0);-ms-transform:translate(-350px,0);transform:translate(-350px,0);}80%{-webkit-transform:translate(-700px,0);-ms-transform:translate(-700px,0);transform:translate(-700px,0);}100%{-webkit-transform:translate(-700px,0);-ms-transform:translate(-700px,0);transform:translate(-700px,0);}}@keyframes autoSlide-jsx-2897110184{0%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}30%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}40%{-webkit-transform:translate(-350px,0);-ms-transform:translate(-350px,0);transform:translate(-350px,0);}70%{-webkit-transform:translate(-350px,0);-ms-transform:translate(-350px,0);transform:translate(-350px,0);}80%{-webkit-transform:translate(-700px,0);-ms-transform:translate(-700px,0);transform:translate(-700px,0);}100%{-webkit-transform:translate(-700px,0);-ms-transform:translate(-700px,0);transform:translate(-700px,0);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXHN0eWxlc1xcbmV3U3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStOOEIsQUFHYyxBQVVHLEFBT00sQUFnQkEsQUFhMEIsQUFJekIsQUFPTCxBQU9HLEFBSUgsQUFNSSxBQVlPLEFBR1IsQUFLSixBQUtBLEFBR0csQUFVRCxBQUltQixBQUluQixBQUltQixBQUluQixBQUltQixBQUtSLEFBR0gsQUFNQSxBQUtQLEFBTUssQUFJTixBQUdFLEFBUWEsQUFHQSxBQUdLLEFBR0EsQUFHQSxBQUdBLFNBMUx0QixFQWlLYixDQXZKZ0IsQUE2SUMsQ0FwRHJCLEFBaUVJLENBM0dlLEFBV0EsRUFrQ0QsQ0F0Q0QsQUF5QlcsQUFvRUMsQ0E1SVosQUFnQkQsQUF5Q0QsQ0F4QkMsQUFnR0ksR0FUaEIsQ0FuREosRUFrRXlCLEdBN0lSLENBK0NHLEFBV0EsQUFNTCxDQXpDRSxBQStCakIsQUFzQ2UsQ0FwREUsQUFpRWpCLEFBUUEsQUFRQSxBQWVxQixPQW5DUyxBQVFPLEFBUUEsQUE4QmpDLENBcEVKLENBZGdCLENBOUJoQixBQTBEZ0IsQ0FpREcsQ0F0SGtCLENBaUJ4QixBQWdHVCxDQXpGZ0MsQUFXQSxPQU9oQixDQXhCRSxBQW9EZSxBQWlEakMsZUE1RWEsQ0E4RE8sSUF4R00sQ0EwRFAsR0FsQ0gsQUFXcEIsTUF0RXVCLEFBeUdvQixFQW1DVCxFQStCOUIsQUFHQSxLQTdKbUIsQ0EyQ3ZCLFNBakR1QixBQXNLbkIsQUFHQSxBQUdBLEFBR0EsaUJBaEZtQixFQTlGdkIsR0F5Q0EsQ0EyREEsUUE1RXNCLEtBdUV0QixJQTdCb0IsSUEwQ3BCLEFBUUEsS0EzRmlCLE9BMENFLE1BekNFLEdBd0RNLEtBK0NKLENBN0RhLEdBL0VULEtBc0NWLElBckJELFlBQ0gsUUE4RGIsQ0E1RGtDLElBeUg5Qiw2Q0F0R3NCLFdBdUQxQixTQTdGMEIsOEJBb0JJLDRCQW1CRyxvQkF0Q1osWUFvQlEsS0FuQk4sbUJBQ3ZCLFVBcUNBLHNEQWxCNkIsMERBQ0ssb0VBQ0Qsa0VBQ00sOEVBQ3ZDIiwiZmlsZSI6IkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXHN0eWxlc1xcbmV3U3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcclxuXHJcbmNvbnN0IGNvbG9yID0ge1xyXG4gICAgcHJpbWFyeTogJyMzOTNiNDAnLFxyXG4gICAgc2Vjb25kYXJ5OiAnIzkzOTMxMycsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuZXdTZWNjdGlvbiA9IGNzc2BcclxuICAgIHNlY3Rpb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi9pbWFnZXMvbmV3c0JhY2tncm91bmQuanBnXCIpIG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwJSB0b3A7XHJcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgIC5uZXd7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDY2cHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuICAgIFxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgbmV3U3R5bGUgPSBjc3NgXHJcbmg1e1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG59XHJcbi5uZXdzIC5jYXRlZ29yeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMwcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxufVxyXG4ubmV3cyBpbnB1dHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm5ld3MgLmNhdGVnb3J5IGxhYmVse1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWluLXdpZHRoOiAxNTVweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NywgNTksIDY0LCAwLjIpO1xyXG4gICAgY29sb3I6ICMzOTNiNDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgMHMgZWFzZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbi5uZXdzIC5jYXRlZ29yeSBsYWJlbDpob3ZlcntcclxuICAgIGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNiNDA7ICAgXHJcbn1cclxuLm5ld3MgLmNhdGVnb3J5IGlucHV0W2lkPVwiY2F0ZWdvcnkxXCJdOmNoZWNrZWQgfiBsYWJlbFtmb3I9XCJjYXRlZ29yeTFcIl17XHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzYjQwO1xyXG59XHJcbi5uZXdzIC5jYXRlZ29yeSBpbnB1dFtpZD1cImNhdGVnb3J5MlwiXTpjaGVja2VkIH4gbGFiZWxbZm9yPVwiY2F0ZWdvcnkyXCJde1xyXG4gICAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2I0MDtcclxufVxyXG4ubmV3cyAuY2F0ZWdvcnkgaW5wdXRbaWQ9XCJjYXRlZ29yeTNcIl06Y2hlY2tlZCB+IGxhYmVsW2Zvcj1cImNhdGVnb3J5M1wiXXtcclxuICAgIGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNiNDA7XHJcbn1cclxuLm5ld3MgLmNhdGVnb3J5IGlucHV0W2lkPVwiY2F0ZWdvcnk0XCJdOmNoZWNrZWQgfiBsYWJlbFtmb3I9XCJjYXRlZ29yeTRcIl17XHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzYjQwO1xyXG59XHJcblxyXG4ubmV3c0xpc3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiB0b3A7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG59XHJcbi5uZXdzTGlzdCB1bHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLm5ld3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMzAsIDIzMCwgMjMwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcclxufVxyXG4ubmV3OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYigxOTcsIDE5NCwgMTkpO1xyXG59XHJcbi5uZXcgYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm1vcmV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLm5ldyAuaW1nIHtcclxuICAgIG1pbi13aWR0aDogODBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDMwLCAzMCwgMC43KTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4ubmV3IC5jb250ZW50e1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogdG9wO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcblxyXG59XHJcblxyXG4ubmV3IC5kYXRhe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBib3R0b206IDE2cHg7XHJcbiAgICByaWdodDogMTZweDtcclxuICAgIGNvbG9yOiByZ2JhKDgwLCA4MCwgODAsIDEpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG59XHJcbi5uZXcgLnNlY3Rpb257XHJcbiAgICBtYXJnaW4tbGVmdDogNTJweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ubmV3IGgze1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLm5ldyBwe1xyXG4gICAgbWFyZ2luLXRvcDogMTFweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjN2Q3ZDdkO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLm5ld3NMaXN0e1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgcGFkZGluZzogNTBweCAwcHg7XHJcbiAgICB9XHJcbiAgICAubmV3c0xpc3QgdWx7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIC5uZXd7XHJcbiAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgICB3aWR0aDogMTI4MHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE3MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgfVxyXG4gICAubW9yZXtcclxuICAgICAgICB3aWR0aDogMTI4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIC5uZXcgLmltZyB7XHJcbiAgICAgICAgd2lkdGg6IDI2NXB4O1xyXG4gICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMCwgMzAsIDMwLCAwLjcpO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgICAubmV3IC5jb250ZW50e1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyODVweCk7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLm5ldyBoM3tcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuICAgIC5uZXcgcHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogIzdkN2Q3ZDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5uZXcgLmRhdGF7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlclN0eWxlID0gY3NzYFxyXG4udG9wTmV3c3tcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogNzBweCAwcHg7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG59XHJcblxyXG4uc2xpZGVyTWFpbntcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcclxufVxyXG5cclxuLnRvcE5ld3MgdWx7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgNjAwbXMgZWFzZTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBhdXRvU2xpZGU7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDIwLjVzO1xyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG5cclxuLnRvcE5ld3MgbGl7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgzMCwgMzAsIDMwLCAwLjcpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xyXG59XHJcbi50b3BOZXdzIGxpOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbn1cclxuXHJcbi50b3BOZXdzIGxpIC5uZXdzSW1ne1xyXG4gICAgYmFja2dyb3VuZDogIzMzMzMzMztcclxuICAgIHdpZHRoOiAyODNweDtcclxuICAgIGhlaWdodDogMTIzcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLnRvcE5ld3MgbGkgLm5ld3NUaXRsZSBoMXtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDNweCAjMDAwMDAwO1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxufVxyXG4udG9wTmV3cyBsaSAubmV3c1RleHR7XHJcbiAgICBtaW4taGVpZ2h0OiAxMzBweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnRvcE5ld3MgbGkgLm5ld3NUZXh0IHB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAzcHggIzAwMDAwMDtcclxufVxyXG4udG9wTmV3cyBsaSAubmV3c09yaWdpbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMjgzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAzcHggIzAwMDAwMDtcclxufVxyXG4udG9wTmV3cyBsaSAubmV3c09yaWdpbiAuZGF0ZXtcclxuICAgIFxyXG4gICAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTk0KTtcclxufVxyXG4udG9wTmV3cyBsaSAubmV3c09yaWdpbiAub3JpZ2lue1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk0LCAxOSk7XHJcbn1cclxuXHJcbi50b3BOZXdzIC5zbGlkZXJCYXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi50b3BOZXdzIGlucHV0e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4udG9wTmV3cyAuc2xpZGVyQmFyIGxhYmVse1xyXG4gICAgbWFyZ2luOiA1cHggMTVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDU3LCA1OSwgNjQsIDAuMyk7XHJcbiAgICBib3JkZXI6IHNvbGlkIDVweCByZ2JhKDU3LCA1OSwgNjQsIDAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5pbnB1dFtpZD1cInNsaWRlcjFcIl06Y2hlY2tlZCB+IC5zbGlkZXJNYWluIC5zbGlkZXJ7XHJcbiAgICBhbmltYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxufVxyXG5pbnB1dFtpZD1cInNsaWRlcjFcIl06Y2hlY2tlZCB+IC5zbGlkZXJCYXIgbGFiZWxbZm9yPVwic2xpZGVyMVwiXXtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk3LCAxOTQsIDE5LCAuNik7XHJcbn1cclxuXHJcbmlucHV0W2lkPVwic2xpZGVyMlwiXTpjaGVja2VkIH4gLnNsaWRlck1haW4gLnNsaWRlcntcclxuICAgIGFuaW1hdGlvbjogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zNTBweCwgMHB4KTtcclxufVxyXG5pbnB1dFtpZD1cInNsaWRlcjJcIl06Y2hlY2tlZCB+IC5zbGlkZXJCYXIgbGFiZWxbZm9yPVwic2xpZGVyMlwiXXtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk3LCAxOTQsIDE5LCAuNik7XHJcbn1cclxuXHJcbmlucHV0W2lkPVwic2xpZGVyM1wiXTpjaGVja2VkIH4gLnNsaWRlck1haW4gLnNsaWRlcntcclxuICAgIGFuaW1hdGlvbjogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03MDBweCwgMHB4KTtcclxufVxyXG5pbnB1dFtpZD1cInNsaWRlcjNcIl06Y2hlY2tlZCB+IC5zbGlkZXJCYXIgbGFiZWxbZm9yPVwic2xpZGVyM1wiXXtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk3LCAxOTQsIDE5LCAuNik7XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgIC5uZXdze1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbiAgICAudG9wTmV3cyB1bHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgLnRvcE5ld3MgbGkgLm5ld3NJbWd7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzMzMzMzMztcclxuICAgICAgICB3aWR0aDogMzgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOTBweDtcclxuICAgIH1cclxuICAgIC50b3BOZXdzIGxpe1xyXG4gICAgICAgIHdpZHRoOiA0MjBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgfVxyXG4gICAgLnRvcE5ld3MgbGkgLm5ld3NUZXh0e1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEzMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIC5zbGlkZXJNYWlue1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnRvcE5ld3MgLnNsaWRlckJhcntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBBbmltYWNpb24gKi9cclxuXHJcbkBrZXlmcmFtZXMgYXV0b1NsaWRle1xyXG4gICAgMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICB9XHJcbiAgICAzMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICB9XHJcbiAgICA0MCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTM1MHB4LCAwKTtcclxuICAgIH1cclxuICAgIDcwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzUwcHgsIDApO1xyXG4gICAgfVxyXG4gICAgODAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03MDBweCwgMCk7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03MDBweCwgMCk7XHJcbiAgICB9XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGFydGljbGVTdHlsZXMgPSBjc3NgXHJcbmRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYXJ0aWNsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZhYTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcclxuICAgIG1hcmdpbjogMHB4IDBweDtcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDFweDtcclxuICAgIGJvcmRlci10b3A6IHNvbGlkIDNweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uYmFja3tcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG5oMXtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG59XHJcbnNwYW57XHJcbiAgICBjb2xvcjogcmdiYSg4MCwgODAsIDgwLCAxKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxucCB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgIC5hcnRpY2xle1xyXG4gICAgICAgIHdpZHRoOiA5MDBweDtcclxuICAgICAgICBib3JkZXItdG9wOiBzb2xpZCA1cHggcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjk5O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggIzAwMDAwMDk5O1xyXG4gICAgfVxyXG4gICAgLmJhY2t7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgICB9XHJcbiAgICAuYmFjayBkaXZ7XHJcbiAgICAgICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmJvZHl7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjk5O1xyXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmAiXX0= */\n/*@ sourceURL=D:\\\\Programacion\\\\DesarrolloWeb\\\\web-cosmerelatam\\\\cosmere-latam\\\\styles\\\\newStyles.js */");
sliderStyle.__hash = "2897110184";
const articleStyles = new String("div.jsx-3983598635{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.article.jsx-3983598635{background-color:#ffffffaa;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);margin:0px 0px;padding:0px 20px;width:100%;min-height:301px;border-top:solid 3px rgb(197,194,19);border-radius:5px;}.back.jsx-3983598635{background:none;-webkit-backdrop-filter:none;backdrop-filter:none;height:30px;color:rgb(0,0,0);font-weight:500;font-size:19px;margin:5px 0px;}h1.jsx-3983598635{height:30px;color:rgb(0,0,0);font-weight:500;font-size:19px;}span.jsx-3983598635{color:rgba(80,80,80,1);font-weight:500;font-size:10px;}p.jsx-3983598635{color:#000000;font-weight:400;}@media all and (min-width:768px){.article.jsx-3983598635{width:900px;border-top:solid 5px rgb(197,194,19);margin:auto;margin-top:10px;background-color:#ffffff99;border-top:0;box-shadow:0px 0px 5px #00000099;}.back.jsx-3983598635{width:100vw;height:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#ffffff;margin:0px;margin-top:40px;padding:0px;box-shadow:0px 0px 10px #000000;border-bottom:solid 3px rgb(197,194,19);}.back.jsx-3983598635 div.jsx-3983598635{width:900px;margin:20px auto;}.body.jsx-3983598635{width:100vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#ffffff99;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);padding-bottom:210px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXHN0eWxlc1xcbmV3U3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlhZ0MsQUFHa0IsQUFLYyxBQVVYLEFBU0osQUFNYyxBQUtaLEFBTUUsQUFTQSxBQWFBLEFBSUEsWUExQ0csQUFpQndCLEFBUzNCLEFBYUssQUFJSixFQWhDRCxFQXBCSyxPQWVMLENBcUJDLEdBOUNVLEVBb0JYLEFBdUNoQixDQTVCSixTQUxtQixNQUxBLElBZ0JDLEtBVnBCLE1BTEEsQ0FnQndCLEtBM0JSLFFBaEJVLEdBNENTLENBM0JaLFFBbURRLEdBOURaLE1BWUMsR0FrQ1csTUE3Q1YsQUFzQ0EsT0ExQkYsTUEyQnNCLElBdEMxQixLQVlJLE1BWEUsU0FZckIsUUFYMkMsQ0FxQ3ZDLEVBOUNKLGlDQW9FbUMsQ0ExRGIsV0EwQ0ssT0F6QzNCLFFBMERtQyw4REFDTixnQkFqQkksS0FrQjdCLG9CQWpCZSxXQUNLLGdCQUNKLFlBQ29CLGdDQUNVLHdDQUM5QyIsImZpbGUiOiJEOlxcUHJvZ3JhbWFjaW9uXFxEZXNhcnJvbGxvV2ViXFx3ZWItY29zbWVyZWxhdGFtXFxjb3NtZXJlLWxhdGFtXFxzdHlsZXNcXG5ld1N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXHJcblxyXG5jb25zdCBjb2xvciA9IHtcclxuICAgIHByaW1hcnk6ICcjMzkzYjQwJyxcclxuICAgIHNlY29uZGFyeTogJyM5MzkzMTMnLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbmV3U2VjY3Rpb24gPSBjc3NgXHJcbiAgICBzZWN0aW9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvaW1hZ2VzL25ld3NCYWNrZ3JvdW5kLmpwZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMCUgdG9wO1xyXG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAubmV3e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA2NnB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiAgICBcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IG5ld1N0eWxlID0gY3NzYFxyXG5oNXtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG4ubmV3cyAuY2F0ZWdvcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMHB4KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbn1cclxuLm5ld3MgaW5wdXR7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5uZXdzIC5jYXRlZ29yeSBsYWJlbHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1pbi13aWR0aDogMTU1cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTcsIDU5LCA2NCwgMC4yKTtcclxuICAgIGNvbG9yOiAjMzkzYjQwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1cHggMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIDBzIGVhc2U7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4ubmV3cyAuY2F0ZWdvcnkgbGFiZWw6aG92ZXJ7XHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzYjQwOyAgIFxyXG59XHJcbi5uZXdzIC5jYXRlZ29yeSBpbnB1dFtpZD1cImNhdGVnb3J5MVwiXTpjaGVja2VkIH4gbGFiZWxbZm9yPVwiY2F0ZWdvcnkxXCJde1xyXG4gICAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2I0MDtcclxufVxyXG4ubmV3cyAuY2F0ZWdvcnkgaW5wdXRbaWQ9XCJjYXRlZ29yeTJcIl06Y2hlY2tlZCB+IGxhYmVsW2Zvcj1cImNhdGVnb3J5MlwiXXtcclxuICAgIGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNiNDA7XHJcbn1cclxuLm5ld3MgLmNhdGVnb3J5IGlucHV0W2lkPVwiY2F0ZWdvcnkzXCJdOmNoZWNrZWQgfiBsYWJlbFtmb3I9XCJjYXRlZ29yeTNcIl17XHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzYjQwO1xyXG59XHJcbi5uZXdzIC5jYXRlZ29yeSBpbnB1dFtpZD1cImNhdGVnb3J5NFwiXTpjaGVja2VkIH4gbGFiZWxbZm9yPVwiY2F0ZWdvcnk0XCJde1xyXG4gICAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2I0MDtcclxufVxyXG5cclxuLm5ld3NMaXN0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogdG9wO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxufVxyXG4ubmV3c0xpc3QgdWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5uZXd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XHJcbn1cclxuLm5ldzpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxufVxyXG4ubmV3IGF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tb3Jle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5uZXcgLmltZyB7XHJcbiAgICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMwLCAzMCwgMzAsIDAuNyk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLm5ldyAuY29udGVudHtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHRvcDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG5cclxufVxyXG5cclxuLm5ldyAuZGF0YXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYm90dG9tOiAxNnB4O1xyXG4gICAgcmlnaHQ6IDE2cHg7XHJcbiAgICBjb2xvcjogcmdiYSg4MCwgODAsIDgwLCAxKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxufVxyXG4ubmV3IC5zZWN0aW9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUycHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLm5ldyBoM3tcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi5uZXcgcHtcclxuICAgIG1hcmdpbi10b3A6IDExcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzdkN2Q3ZDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgIC5uZXdzTGlzdHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHggMHB4O1xyXG4gICAgfVxyXG4gICAgLm5ld3NMaXN0IHVse1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAubmV3e1xyXG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEyODBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxNzBweDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIH1cclxuICAgLm1vcmV7XHJcbiAgICAgICAgd2lkdGg6IDEyODBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAubmV3IC5pbWcge1xyXG4gICAgICAgIHdpZHRoOiAyNjVweDtcclxuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDMwLCAzMCwgMC43KTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG4gICAgLm5ldyAuY29udGVudHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjg1cHgpO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIC5uZXcgaDN7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcbiAgICAubmV3IHB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTFweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICM3ZDdkN2Q7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAubmV3IC5kYXRhe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZXJTdHlsZSA9IGNzc2BcclxuLnRvcE5ld3N7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDcwcHggMHB4O1xyXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcclxufVxyXG5cclxuLnNsaWRlck1haW57XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XHJcbn1cclxuXHJcbi50b3BOZXdzIHVse1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDYwMG1zIGVhc2U7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYXV0b1NsaWRlO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMC41cztcclxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcbi50b3BOZXdzIGxpe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzAsIDMwLCAzMCwgMC43KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogMTBweCAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcclxufVxyXG4udG9wTmV3cyBsaTpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMCAycHggcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG59XHJcblxyXG4udG9wTmV3cyBsaSAubmV3c0ltZ3tcclxuICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgICB3aWR0aDogMjgzcHg7XHJcbiAgICBoZWlnaHQ6IDEyM3B4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbi50b3BOZXdzIGxpIC5uZXdzVGl0bGUgaDF7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAzcHggIzAwMDAwMDtcclxuICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbn1cclxuLnRvcE5ld3MgbGkgLm5ld3NUZXh0e1xyXG4gICAgbWluLWhlaWdodDogMTMwcHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi50b3BOZXdzIGxpIC5uZXdzVGV4dCBwe1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggM3B4ICMwMDAwMDA7XHJcbn1cclxuLnRvcE5ld3MgbGkgLm5ld3NPcmlnaW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDI4M3B4O1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggM3B4ICMwMDAwMDA7XHJcbn1cclxuLnRvcE5ld3MgbGkgLm5ld3NPcmlnaW4gLmRhdGV7XHJcbiAgICBcclxuICAgIGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5NCk7XHJcbn1cclxuLnRvcE5ld3MgbGkgLm5ld3NPcmlnaW4gLm9yaWdpbntcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG59XHJcblxyXG4udG9wTmV3cyAuc2xpZGVyQmFye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4udG9wTmV3cyBpbnB1dHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnRvcE5ld3MgLnNsaWRlckJhciBsYWJlbHtcclxuICAgIG1hcmdpbjogNXB4IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg1NywgNTksIDY0LCAwLjMpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCA1cHggcmdiYSg1NywgNTksIDY0LCAwLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuaW5wdXRbaWQ9XCJzbGlkZXIxXCJdOmNoZWNrZWQgfiAuc2xpZGVyTWFpbiAuc2xpZGVye1xyXG4gICAgYW5pbWF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbn1cclxuaW5wdXRbaWQ9XCJzbGlkZXIxXCJdOmNoZWNrZWQgfiAuc2xpZGVyQmFyIGxhYmVsW2Zvcj1cInNsaWRlcjFcIl17XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5NywgMTk0LCAxOSwgLjYpO1xyXG59XHJcblxyXG5pbnB1dFtpZD1cInNsaWRlcjJcIl06Y2hlY2tlZCB+IC5zbGlkZXJNYWluIC5zbGlkZXJ7XHJcbiAgICBhbmltYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzUwcHgsIDBweCk7XHJcbn1cclxuaW5wdXRbaWQ9XCJzbGlkZXIyXCJdOmNoZWNrZWQgfiAuc2xpZGVyQmFyIGxhYmVsW2Zvcj1cInNsaWRlcjJcIl17XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5NywgMTk0LCAxOSwgLjYpO1xyXG59XHJcblxyXG5pbnB1dFtpZD1cInNsaWRlcjNcIl06Y2hlY2tlZCB+IC5zbGlkZXJNYWluIC5zbGlkZXJ7XHJcbiAgICBhbmltYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzAwcHgsIDBweCk7XHJcbn1cclxuaW5wdXRbaWQ9XCJzbGlkZXIzXCJdOmNoZWNrZWQgfiAuc2xpZGVyQmFyIGxhYmVsW2Zvcj1cInNsaWRlcjNcIl17XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5NywgMTk0LCAxOSwgLjYpO1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAubmV3c3tcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG4gICAgLnRvcE5ld3MgdWx7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBwYWRkaW5nOiAwcHggMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICAgIGFuaW1hdGlvbjogbm9uZTtcclxuICAgIH1cclxuICAgIC50b3BOZXdzIGxpIC5uZXdzSW1ne1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgICAgICAgd2lkdGg6IDM4MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTkwcHg7XHJcbiAgICB9XHJcbiAgICAudG9wTmV3cyBsaXtcclxuICAgICAgICB3aWR0aDogNDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NTBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0NTBweDtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxuICAgIC50b3BOZXdzIGxpIC5uZXdzVGV4dHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMzBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuc2xpZGVyTWFpbntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC50b3BOZXdzIC5zbGlkZXJCYXJ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLyogQW5pbWFjaW9uICovXHJcblxyXG5Aa2V5ZnJhbWVzIGF1dG9TbGlkZXtcclxuICAgIDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgfVxyXG4gICAgMzAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgfVxyXG4gICAgNDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zNTBweCwgMCk7XHJcbiAgICB9XHJcbiAgICA3MCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTM1MHB4LCAwKTtcclxuICAgIH1cclxuICAgIDgwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzAwcHgsIDApO1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzAwcHgsIDApO1xyXG4gICAgfVxyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBhcnRpY2xlU3R5bGVzID0gY3NzYFxyXG5kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmFydGljbGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmYWE7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICBtYXJnaW46IDBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMzAxcHg7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZCAzcHggcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmJhY2t7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbn1cclxuaDF7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxufVxyXG5zcGFue1xyXG4gICAgY29sb3I6IHJnYmEoODAsIDgwLCA4MCwgMSk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbnAge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAuYXJ0aWNsZXtcclxuICAgICAgICB3aWR0aDogOTAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogc29saWQgNXB4IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY5OTtcclxuICAgICAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4ICMwMDAwMDA5OTtcclxuICAgIH1cclxuICAgIC5iYWNre1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgfVxyXG4gICAgLmJhY2sgZGl2e1xyXG4gICAgICAgIHdpZHRoOiA5MDBweDtcclxuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIH1cclxuICAgIC5ib2R5e1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY5OTtcclxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5gIl19 */\n/*@ sourceURL=D:\\\\Programacion\\\\DesarrolloWeb\\\\web-cosmerelatam\\\\cosmere-latam\\\\styles\\\\newStyles.js */");
articleStyles.__hash = "3983598635";

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU29jaWFscy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dvVG9wLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25ld3MvbmV3c0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uZXdzL3NsaWRlck5ld3MuanMiLCJ3ZWJwYWNrOi8vLy4vZmlyZWJhc2UvY2xpZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL25ld3MuanN4Iiwid2VicGFjazovLy8uL3N0eWxlcy9nbG9iYWxTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL21haW5TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL25ld1N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJTb2NpYWxJdGVtcyIsInNvY2lhbCIsInVybCIsImNOYW1lIiwiY0ljb24iLCJGb290ZXIiLCJwcm9wcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIkdvVG9wIiwiaGFuZGxlU2Nyb2xsIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJoYW5kbGVDbGljayIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk1haW5Db250ZWluZXIiLCJjaGlsZHJlbiIsInNldFNwb3RsaWdodCIsInNwb3QiLCJuZXdMb2MiLCJzcGxpdCIsIk5hdmJhciIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwibmV3TGlzdCIsIkxhYmVsIiwiaXNMb2FkIiwicmVzdWx0cyIsInJlc3VsdCIsImlkIiwiYmFubmVyIiwidGl0bGUiLCJzdWJUaXRsZSIsImRhdGUiLCJzZWN0aW9uIiwibW9yZSIsIlNsaWRlck5ld3MiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJhcHAiLCJkYkNvbiIsImZpcmVzdG9yZSIsImZldGNoTmV3c0xpc3QiLCJwYWdlIiwibG9naWMiLCJjb2xsZWN0aW9uIiwibGltaXQiLCJvcmRlckJ5IiwiZ2V0IiwidGhlbiIsInNuYXBzaG90IiwiZG9jcyIsImRvYyIsImRhdGEiLCJpbnRsIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0Iiwibm9ybWFsaXplZERhdGUiLCJEYXRlIiwic2Vjb25kcyIsInRvU3RyaW5nIiwic3BsaXREYXRlIiwid2hlcmUiLCJmZXRjaE5ldyIsImFkZE5ld3MiLCJ1c2VySWQiLCJ0aXRlbCIsImNvbnRlbnQiLCJmaXJlc3RvdGUiLCJUaW1lc3RhcHMiLCJmcm9tRGF0ZSIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJlcnIiLCJocmVmIiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicmVzb2x2ZWRBcyIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJhZGRQYXRoUHJlZml4IiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJ2YWx1ZSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsInJlc29sdmVBcyIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImxvY2FsZSIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwic3RhdGUiLCJvcHRpb25zIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsImFwcENvbXAiLCJlcnJvciIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsIlByb21pc2UiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIk5ld3MiLCJuZXdzTGlzdCIsInNldE5ld3MiLCJ1c2VTdGF0ZSIsInNldFNlY3Rpb24iLCJzZXRQYWdlIiwic2V0UmVsb2FkIiwiaGFuZGxlQ2hhbmdlIiwiaGFkbGVNb3JlIiwic2xpZGVyIiwibmV3U3R5bGUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb2xvciIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJnbG9iYWxTdHlsZXMiLCJlcnJvclN0eWxlcyIsImljb25zIiwibmF2YmFyU3R5bGUiLCJmb290ZXJTdHlsZSIsIm5ld1NlY2N0aW9uIiwic2xpZGVyU3R5bGUiLCJhcnRp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Ozs7Ozs7OztBQ3RGRDtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU1HLEtBQUssR0FBRztBQUNWQyxTQUFPLEVBQUUsU0FEQztBQUVWQyxXQUFTLEVBQUU7QUFGRCxDQUFkO0FBS08sTUFBTUMsWUFBWSxzdk9BQWxCOztBQXVGQSxNQUFNQyxXQUFXLHVySkFBakI7O0FBdUJBLE1BQU1DLEtBQUssMG1JQUFYOzs7Ozs7Ozs7Ozs7O0FDbkhQO0FBQUE7QUFBQTtBQUFPLE1BQU1DLFdBQVcscXRkQUFqQjs7QUFrTkEsTUFBTUMsV0FBVyxtcFhBQWpCOzs7Ozs7Ozs7Ozs7O0FDbE5QO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFNUCxLQUFLLEdBQUc7QUFDVkMsU0FBTyxFQUFFLFNBREM7QUFFVkMsV0FBUyxFQUFFO0FBRkQsQ0FBZDtBQUtPLE1BQU1NLFdBQVcscTJmQUFqQjs7QUFtQkEsTUFBTVYsUUFBUSx5N3JCQUFkOztBQXFNQSxNQUFNVyxXQUFXLCtwdUJBQWpCOztBQWtNQSxNQUFNQyxhQUFhLHFzakJBQW5COzs7Ozs7Ozs7Ozs7QUNqYVAscUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvbmV3cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvbmV3cy5qc3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImV4cG9ydCBjb25zdCBTb2NpYWxJdGVtcyA9IFtcclxuICAgIHtcclxuICAgICAgICBzb2NpYWw6J1R3aXR0ZXInLFxyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vdHdpdHRlci5jb20vQ29zbWVyZUxhdGFtJyxcclxuICAgICAgICBjTmFtZTogJ3R3JyxcclxuICAgICAgICBjSWNvbjogJ3R3X2ljb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvY2lhbDonRmFjZWJvb2snLFxyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9jb3NtZXJlbGF0YW0nLFxyXG4gICAgICAgIGNOYW1lOiAnZmInLFxyXG4gICAgICAgIGNJY29uOiAnZmJfaWNvbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc29jaWFsOidJbnN0YWdyYW0nLFxyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vY29zbWVyZWxhdGFtLycsXHJcbiAgICAgICAgY05hbWU6ICdpZycsXHJcbiAgICAgICAgY0ljb246ICdpZ19pY29uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb2NpYWw6J1lvdXR1YmUnLFxyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNqblhIdEhJMEw0cmZ2VFdjY0x1ZWJRJyxcclxuICAgICAgICBjTmFtZTogJ3l0JyxcclxuICAgICAgICBjSWNvbjogJ3l0X2ljb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvY2lhbDonRGlzY29yZCcsXHJcbiAgICAgICAgdXJsOiAnIycsXHJcbiAgICAgICAgY05hbWU6ICdkYycsXHJcbiAgICAgICAgY0ljb246ICdkY19pY29uJ1xyXG4gICAgfVxyXG5dIiwiaW1wb3J0IHsgU29jaWFsSXRlbXMgfSBmcm9tIFwiLi9Tb2NpYWxzXCI7XHJcbi8vaW1wb3J0ICcuLy4uL3N0eWxlcy9mb290ZXIuY3NzJztcclxuaW1wb3J0IHsgZm9vdGVyU3R5bGUgfSBmcm9tICcuLi9zdHlsZXMvbWFpblN0eWxlcydcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIocHJvcHMpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIkZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic29jaWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtTb2NpYWxJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtLnVybH0gY2xhc3NOYW1lPXtpdGVtLmNOYW1lfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2l0ZW0uY0ljb259PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibGluZV8xXCI+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb3B5cmlnaHRcIj7CqTIwMjAgZGlzZcOxYWRvIHkgcHJvZ3JhbWFkbyBwb3IgTmVvZG9vbSBYYXJkYXguPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PnsgZm9vdGVyU3R5bGUgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgaWNvbnMgfSBmcm9tICcuLi9zdHlsZXMvZ2xvYmFsU3R5bGVzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR29Ub3AocHJvcHMpe1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTAwKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvVG9wQ29udGVpbmVyJylcclxuICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdzaG93JylcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvVG9wQ29udGVpbmVyJylcclxuICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29Ub3BDb250ZWluZXIgYnRuLWJsYWNrXCIgb25DbGljaz17IGhhbmRsZUNsaWNrIH0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnJvd3NcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57IGljb25zIH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuZ29Ub3BDb250ZWluZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IC01MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYWxsIDEgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlT3V0IC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFycm93c3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFycm93czo6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgLmFycm93czo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzk5OTk5OTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYXJyb3dzOjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogN3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFycm93czo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDdweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hcnJvd3M6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA3cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYXJyb3dzOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogN3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNob3d7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLnNob3d7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZUlue1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtvcGFjaXR5OiAwO31cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtvcGFjaXR5OiAxO31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZU91dHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7b3BhY2l0eTogMTt9XHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7b3BhY2l0eTogMDt9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vbmF2YmFyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJ1xyXG5cclxuaW1wb3J0IHsgZ2xvYmFsU3R5bGVzIH0gZnJvbSAnLi8uLi9zdHlsZXMvZ2xvYmFsU3R5bGVzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbkNvbnRlaW5lcihwcm9wcyl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cImNvbnRlbnQtdHlwZVwiIGNvbnRlbnQ9XCJjaGFyc2V0PVVURi04XCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Db3NtZXJlLWxhdGFtPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiV2ViIGRlbCBmYW5kb20gZGUgQnJhbmRvbiBTYW5kZXJzb24gZW4gbGF0aW5vYW1lcmljYS5cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJLZXl3b3Jkc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImNvc21lcmU7IGNvc21lcmUgbGF0YW07IGxhdGFtOyBsYXRpbm9hbWVyaWNhOyBmYW5kb207IGJyYW5kb247IHNhbmRlcnNvbjsgZmFuZGVyc29uOyBtaXN0Ym90bjsgbmFjaWRvcyBkZSBsYSBicnVtYTsgc3Rvcm1saWdodCBhcmNoaXZlOyBhcmNoaXZvIGRlIGxhcyB0b3JtZW50YXM7IHdhcmJyZWtlcjsgZWwgYWxpZW50byBkZSBsb3MgZGlvY2VzOyBqdXJhbWVudGFkYVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9tYW5pZmVzdC5qc29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMzE3RUZCXCIvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIGhyZWY9XCIvaW1hZ2VzL2ljb24ucG5nXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8TmF2YmFyPjwvTmF2YmFyPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDxGb290ZXI+PC9Gb290ZXI+XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PnsgZ2xvYmFsU3R5bGVzIH08L3N0eWxlPlxyXG4gICAgICAgIDwvbWFpbj5cclxuXHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG4vL2ltcG9ydCAnLi8uLi9zdHlsZXMvbmF2YmFyLmNzcyc7XHJcbmltcG9ydCB7IG5hdmJhclN0eWxlIH0gZnJvbSAnLi8uLi9zdHlsZXMvbWFpblN0eWxlcyc7XHJcblxyXG5mdW5jdGlvbiBzZXRTcG90bGlnaHQodXJsKXtcclxuICAgIHZhciBzcG90ID0gJ2JhckxpbmUgc2V0LS0nXHJcbiAgICB2YXIgbmV3TG9jID0gdXJsLnNwbGl0KFwiL1wiKVxyXG4gICAgc3BvdCArPSBuZXdMb2NbMV1cclxuICAgIHJldHVybihzcG90KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKHByb3BzKXtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIk5hdmJhckl0ZW1zXCI+XHJcblxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZfbG9nb1wiPjwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJtZW51QnRuXCIgaWQ9XCJtZW51QnRuXCIvPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWVudUljb25cIiBodG1sRm9yPVwibWVudUJ0blwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFyc1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZfbGlua1wiPlxyXG4gICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiID48bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgIDwvbGk+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9uZXdzXCIgPjxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTm90aWNpYXMgIFxyXG4gICAgICAgICAgICAgICAgPC9saT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FydGlzdHNcIiA+PGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcnRpc3RhcyAgXHJcbiAgICAgICAgICAgICAgICA8L2xpPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG90Y2FzdFwiID48bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgUG9kY2FzdHNcclxuICAgICAgICAgICAgICAgIDwvbGk+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb3NtZXJlXCIgPjxsaT5cclxuICAgICAgICAgICAgICAgICAgICBDb3NtZXJlXHJcbiAgICAgICAgICAgICAgICA8L2xpPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3NldFNwb3RsaWdodChyb3V0ZXIucGF0aG5hbWUpfSBpZD1cImxpbmVOYXZcIj48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+eyBuYXZiYXJTdHlsZSB9PC9zdHlsZT5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5OYXZiYXJJdGVtcyAuYmFyTGluZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLk5hdmJhckl0ZW1zIHVsIGxpOm50aC1jaGlsZCgxKXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2V0LS1ob21lLCAuTmF2YmFySXRlbXMgdWwgbGk6bnRoLWNoaWxkKDEpOmhvdmVyIH4gLmJhckxpbmV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuTmF2YmFySXRlbXMgdWwgbGk6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZXQtLW5ld3MsIC5OYXZiYXJJdGVtcyB1bCBsaTpudGgtY2hpbGQoMik6aG92ZXIgfiAuYmFyTGluZXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMHB4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuTmF2YmFySXRlbXMgdWwgbGk6bnRoLWNoaWxkKDMpe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZXQtLWFydGlzdHMsIC5OYXZiYXJJdGVtcyB1bCBsaTpudGgtY2hpbGQoMyk6aG92ZXIgfiAuYmFyTGluZXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwMHB4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuTmF2YmFySXRlbXMgdWwgbGk6bnRoLWNoaWxkKDQpe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZXQtLXBvdGNhc3QsIC5OYXZiYXJJdGVtcyB1bCBsaTpudGgtY2hpbGQoNCk6aG92ZXIgfiAuYmFyTGluZXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcdFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAwcHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5OYXZiYXJJdGVtcyB1bCBsaTpudGgtY2hpbGQoNSl7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNldC0tY29zbWVyZW1lY3VtLCAuTmF2YmFySXRlbXMgdWwgbGk6bnRoLWNoaWxkKDUpOmhvdmVyIH4gLmJhckxpbmV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHRcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQwMHB4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuLy9pbXBvcnQgJy4vLi4vLi4vc3R5bGVzL25ld3NMaXN0LmNzcyc7XHJcbmltcG9ydCB7IG5ld1N0eWxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL25ld1N0eWxlcydcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdMaXN0KHByb3BzKXtcclxuICAgIC8vb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9uZXdzL1tpZF0nLCBgL25ld3MvJHtyZXN1bHQuaWR9YCl9XHJcbiAgICAvLzxMaW5rIGhyZWY9J25ld3MvW2lkXScgYXM9e2AvbmV3cy8ke3Jlc3VsdC5pZH1gfSBrZXk9e3Jlc3VsdC5pZH0+XHJcbiAgICAvL2h0dHBzOi8vcGJzLnR3aW1nLmNvbS9tZWRpYS9FbFlJS2Z5WFVBTVVKdmk/Zm9ybWF0PWpwZyZuYW1lPTkwMHg5MDBcclxuXHJcbiAgICB2YXIgTGFiZWwgPSAnJ1xyXG4gICAge3Byb3BzLmlzTG9hZCA/IExhYmVsID0gJ01hcycgOiAgTGFiZWwgPSAnQ2FyZ2FuZG8uLi4nfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ld3NMaXN0Jz5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnJlc3VsdHMubWFwKHJlc3VsdD0+KFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbmV3JyBrZXk9e3Jlc3VsdC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPSduZXdzL1tpZF0nIGFzPXtgL25ld3MvJHtyZXN1bHQuaWR9YH0+PGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eyByZXN1bHQuYmFubmVyIH0gY2xhc3NOYW1lPSdpbWcnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57IHJlc3VsdC50aXRsZSB9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+eyByZXN1bHQuc3ViVGl0bGUgfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0YSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0ZSc+eyByZXN1bHQuZGF0ZSB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbic+eyByZXN1bHQuc2VjdGlvbiB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnRuLWJsYWNrIG1vcmVcIiBvbkNsaWNrPXtwcm9wcy5tb3JlfT4geyBMYWJlbCB9IDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57IG5ld1N0eWxlIH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vaW1wb3J0ICcuLy4uLy4uL3N0eWxlcy9zaWRlTmV3cy5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBzbGlkZXJTdHlsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9uZXdTdHlsZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZXJOZXdzKHByb3BzKXtcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wTmV3c1wiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNsaWRlclwiIGlkPVwic2xpZGVyMVwiLz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJzbGlkZXJcIiBpZD1cInNsaWRlcjJcIi8+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic2xpZGVyXCIgaWQ9XCJzbGlkZXIzXCIvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlck1haW5cIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2xpZGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMucmVzdWx0cy5tYXAocmVzdWx0PT4oXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nbmV3cy9baWRdJyBhcz17YC9uZXdzLyR7cmVzdWx0LmlkfWB9IGtleT17cmVzdWx0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eyByZXN1bHQuYmFubmVyIH0gY2xhc3NOYW1lPVwibmV3c0ltZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57IHJlc3VsdC50aXRsZSB9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnsgcmVzdWx0LnN1YlRpdGxlIH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c09yaWdpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRhdGVcIj57IHJlc3VsdC5kYXRlIH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwib3JpZ2luXCI+eyByZXN1bHQuc2VjdGlvbiB9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzbGlkZXJCYXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2xpZGVyMVwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNsaWRlcjJcIj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzbGlkZXIzXCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+eyBzbGlkZXJTdHlsZSB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICk7XHJcbn0iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG5cclxuLy8gRm9yIEZpcmViYXNlIEpTIFNESyB2Ny4yMC4wIGFuZCBsYXRlciwgbWVhc3VyZW1lbnRJZCBpcyBvcHRpb25hbFxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lCSFBBazR5X0FYRnpmdExHLXUwNktmV3dVNUk5QXl4UnNcIixcclxuICAgIGF1dGhEb21haW46IFwiY29zbWVyZS1sYXRhbS5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vY29zbWVyZS1sYXRhbS5maXJlYmFzZWlvLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcImNvc21lcmUtbGF0YW1cIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiY29zbWVyZS1sYXRhbS5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNDQ4MDk2OTUzNTAwXCIsXHJcbiAgICBhcHBJZDogXCIxOjQ0ODA5Njk1MzUwMDp3ZWI6NmIwOWI2MWUwNjQwZjEzZDI1Mzk1OVwiLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLVlQMjBLRVdZWE5cIlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgIWZpcmViYXNlLmFwcHMubGVuZ3RoID8gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgOiBmaXJlYmFzZS5hcHAoKTtcclxuXHJcbmNvbnN0IGRiQ29uID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hOZXdzTGlzdCA9IChzZWN0aW9uLCBwYWdlKSA9PntcclxuICAgIHZhciBsb2dpYyA9ICcnXHJcbiAgICBpZiAoc2VjdGlvbj09J2FsbCcpIHtcclxuICAgICAgICByZXR1cm4gZGJDb25cclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ25ld3MnKVxyXG4gICAgICAgICAgICAubGltaXQocGFnZSlcclxuICAgICAgICAgICAgLm9yZGVyQnkoXCJkYXRlXCIsIFwiZGVzY1wiKVxyXG4gICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgLnRoZW4oKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBkb2MuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBkb2MuaWRcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGUgfSA9IGRhdGFcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnRsID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VzLUVTJylcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBub3JtYWxpemVkRGF0ZSA9bmV3IERhdGUoZGF0ZS5zZWNvbmRzICogMTAwMCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0RGF0ZSA9IG5vcm1hbGl6ZWREYXRlLnNwbGl0KFwiKFwiKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlIDogc3BsaXREYXRlWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBkYkNvblxyXG4gICAgICAgIC5jb2xsZWN0aW9uKCduZXdzJylcclxuICAgICAgICAub3JkZXJCeShcImRhdGVcIiwgXCJkZXNjXCIpXHJcbiAgICAgICAgLndoZXJlKCdzZWN0aW9uJywgXCI9PVwiLCBzZWN0aW9uKVxyXG4gICAgICAgIC5saW1pdChwYWdlKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGRvYy5kYXRhKClcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZG9jLmlkXHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGUgfSA9IGRhdGFcclxuICAgICAgICAgICAgICAgIGNvbnN0IGludGwgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZXMtRVMnKVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZERhdGUgPSBuZXcgRGF0ZShkYXRlLnNlY29uZHMgKiAxMDAwKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0RGF0ZSA9IG5vcm1hbGl6ZWREYXRlLnNwbGl0KFwiKFwiKVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQsIFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGUgOiBzcGxpdERhdGVbMF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hOZXcgPSAoaWQpID0+e1xyXG4gICAgcmV0dXJuIGRiQ29uXHJcbiAgICAgICAgLmNvbGxlY3Rpb24oJ25ld3MnKVxyXG4gICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLnRoZW4oc25hcHNob3QgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gIHNuYXBzaG90LmRhdGEoKVxyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGUgfSA9IGRhdGFcclxuICAgICAgICAgICAgY29uc3QgaW50bCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlcy1FUycpXHJcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWREYXRlID1uZXcgRGF0ZShkYXRlLnNlY29uZHMgKiAxMDAwKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi4gZGF0YSxcclxuICAgICAgICAgICAgICAgIGRhdGUgOiBub3JtYWxpemVkRGF0ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGROZXdzID0gKHVzZXJJZCwgdGl0ZWwsIHN1YlRpdGxlLCBiYW5uZXIsIGNvbnRlbnQsIHNlY3Rpb24pID0+e1xyXG4gICAgcmV0dXJuIGRiQ29uLmNvbGxlY3Rpb24oJ25ld3MnKS5hZGQoe1xyXG4gICAgICAgIHVzZXJJZCxcclxuICAgICAgICB0aXRlbCxcclxuICAgICAgICBzdWJUaXRsZSxcclxuICAgICAgICBiYW5uZXIsXHJcbiAgICAgICAgY29udGVudCxcclxuICAgICAgICBzZWN0aW9uLFxyXG4gICAgICAgIGRhdGUgOiBmaXJlYmFzZS5maXJlc3RvdGUuVGltZXN0YXBzLmZyb21EYXRlKG5ldyBEYXRlKCkpXHJcbiAgICB9KVxyXG59IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtmZXRjaE5ld3NMaXN0fSBmcm9tICcuLy4uL2ZpcmViYXNlL2NsaWVudCdcclxuaW1wb3J0IE1haW5Db250ZWluZXIgZnJvbSAnLi8uLi9jb21wb25lbnRzL21haW4nO1xyXG5pbXBvcnQgU2xpZGVyTmV3cyBmcm9tICcuLy4uL2NvbXBvbmVudHMvbmV3cy9zbGlkZXJOZXdzJztcclxuaW1wb3J0IE5ld3NMaXN0IGZyb20gJy4vLi4vY29tcG9uZW50cy9uZXdzL25ld3NMaXN0JztcclxuaW1wb3J0IEdvVG9wIGZyb20gJy4uL2NvbXBvbmVudHMvZ29Ub3AnO1xyXG5cclxuaW1wb3J0IHsgbmV3U2VjY3Rpb24sIG5ld1N0eWxlIH0gZnJvbSAnLi4vc3R5bGVzL25ld1N0eWxlcydcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3cyhwcm9wcyl7XHJcblxyXG4gICAgLy9jb25zdCBbbmV3c1NsaWRlciwgc2V0U2xpZGVyXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtuZXdzTGlzdCwgc2V0TmV3c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgW3NlY3Rpb24sIHNldFNlY3Rpb25dID0gdXNlU3RhdGUoJ2FsbCcpO1xyXG4gICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoNSk7XHJcbiAgICBjb25zdCBbcmVsb2FkLCBzZXRSZWxvYWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCggYXN5bmMoKSA9PntcclxuICAgICAgICBzZXRSZWxvYWQoZmFsc2UpXHJcbiAgICAgICAgYXdhaXQgZmV0Y2hOZXdzTGlzdChzZWN0aW9uLCBwYWdlKVxyXG4gICAgICAgICAgICAudGhlbihzZXROZXdzKVxyXG4gICAgICAgIHNldFJlbG9hZCh0cnVlKVxyXG4gICAgfSwgW3NlY3Rpb24sIHBhZ2VdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+e1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0U2VjdGlvbihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHNldFBhZ2UoNSlcclxuICAgICAgICAvL2ZldGNoRGF0YShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhZGxlTW9yZSA9ICgpID0+e1xyXG4gICAgICAgIHNldFBhZ2UocGFnZSArIDUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8TWFpbkNvbnRlaW5lcj5cclxuICAgICAgICAgICAgPEdvVG9wLz5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibmV3c1wiPlxyXG4gICAgICAgICAgICAgICAgPFNsaWRlck5ld3NcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzID0geyBwcm9wcy5zbGlkZXIgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjYXRlZ29yeVwiIGlkPVwiY2F0ZWdvcnkxXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWN0aW9uID09PSBcImFsbFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjYXRlZ29yeVwiIGlkPVwiY2F0ZWdvcnkyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIm5ld3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VjdGlvbiA9PT0gXCJuZXdzXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNhdGVnb3J5XCIgaWQ9XCJjYXRlZ29yeTNcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZXZlbnRcIiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWN0aW9uID09PSBcImV2ZW50XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNhdGVnb3J5XCIgaWQ9XCJjYXRlZ29yeTRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiYWRkc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VjdGlvbiA9PT0gXCJhZGRzXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgIGh0bWxGb3I9XCJjYXRlZ29yeTFcIj5SZWNpZW50ZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgIGh0bWxGb3I9XCJjYXRlZ29yeTJcIj5Ob3RpY2lhczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCAgaHRtbEZvcj1cImNhdGVnb3J5M1wiPkV2ZW50b3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgIGh0bWxGb3I9XCJjYXRlZ29yeTRcIj5BbnVuY2lvczwvbGFiZWw+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPE5ld3NMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cyA9IHsgbmV3c0xpc3QgfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vcmUgPSB7IGhhZGxlTW9yZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkID0geyByZWxvYWQgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNTdHlsZSA9IHsgbmV3U3R5bGUgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PnsgbmV3U2VjY3Rpb24gfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+eyBuZXdTdHlsZSB9PC9zdHlsZT5cclxuICAgICAgICA8L01haW5Db250ZWluZXI+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpe1xyXG4gICAgY29uc3Qgc2xpZGVyID0gYXdhaXQgZmV0Y2hOZXdzTGlzdCgnYWxsJywgMykudGhlbihzbmFwc2hvdCA9PiB7cmV0dXJuIHNuYXBzaG90fSlcclxuICAgIHJldHVybiB7IHByb3BzOiB7IHNsaWRlciA6IHNsaWRlciB9IH0gICAgXHJcbn0iLCJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5cclxuY29uc3QgY29sb3IgPSB7XHJcbiAgICBwcmltYXJ5OiAnIzM5M2I0MCcsXHJcbiAgICBzZWNvbmRhcnk6ICcjOTM5MzEzJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdsb2JhbFN0eWxlcyA9IGNzcy5nbG9iYWxgXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxyXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwJSB0b3A7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJ0bi13aXRoZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMzAsIDIzMCwgMjMwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4uYnRuLXdpdGhlOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYigxOTcsIDE5NCwgMTkpO1xyXG59XHJcblxyXG4uYnRuLXdpdGhle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzMCwgMjMwLCAyMzAsIC44KTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbi5idG4td2l0aGU6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxufVxyXG5cclxuLmJ0bi1ibGFja3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2I0MGNjO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggMTBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XHJcbn1cclxuLmJ0bi1ibGFjazpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzYjQwO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICBjb2xvcjogcmdiKDE5NywgMTk0LCAxOSk7XHJcbn1cclxuYFxyXG5leHBvcnQgY29uc3QgZXJyb3JTdHlsZXMgPSBjc3NgXHJcbi5ub257XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IHVybCgvaW1hZ2VzL0NvbnN0ZWxhY2lvbmVzLW11bmRvcy1jb3NtZXJlLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuLm5vbiBkaXZ7XHJcbiAgY29sb3I6IHJnYigxMjgsIDExNCwgNzkpO1xyXG4gIHRleHQtc2hhZG93OjBweCAwcHggM3B4ICMwMDAwMDA7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubm9uIGgye1xyXG4gIGZvbnQtc2l6ZTogNTZweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHZoO1xyXG59XHJcbi5ub24gcHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGljb25zID0gY3NzYFxyXG5cclxuYCIsImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXHJcblxyXG5leHBvcnQgY29uc3QgbmF2YmFyU3R5bGUgPSBjc3NgXHJcbi5OYXZiYXJJdGVtcyB7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYigwLCAwLCAwLCAxLjApIDAlICwgcmdiYSgwLCAwLCAwLCAwLjUpIDgwJSwgcmdiYSgwLCAwLCAwLCAwLjUpIDEwMCUpO1xyXG5cdGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG5cdHBhZGRpbmc6IDBweDtcclxuXHRtYXJnaW46MHB4O1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHR3aWR0aDogMTAwdnc7XHJcblx0ei1pbmRleDogMTA7XHJcblx0Ym94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDA7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5uYXZfbG9nb3tcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogNzBweDtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9pbWFnZXMvTG9nb0NMLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bWFyZ2luOiA1cHg7XHJcblx0bWFyZ2luLWxlZnQ6IDIwcHg7XHJcblx0bWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uTmF2YmFySXRlbXMgdWx7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdG1hcmdpbjogMDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5OYXZiYXJJdGVtcyBsaXtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMThweCAyMHB4O1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uTmF2YmFySXRlbXMgbGl7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0cmlnaHQ6IDUlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuOHMgZWFzZS1pbjtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwYWRkaW5nOiAxOHB4IDIwcHg7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5OYXZiYXJJdGVtcyBsaTpob3ZlcntcclxuXHRjb2xvcjogcmdiKDE5NywgMTk0LCAxOSk7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdHRleHQtc2hhZG93OjBweCAwcHggMTBweCAjMDAwMDAwO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbjtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzAwODhhOTtcclxufVxyXG5cclxuLmJ0bi1sZ3tcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMDA4OGE5O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdGNvbG9yOiAjMDA4OGE5O1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAxMHB4IDIwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuLmJ0bi1sZzpob3ZlcntcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMDA4OGE5O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRiYWNrZ3JvdW5kOiAjMDA4OGE5O1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmJ0bi1sZzphY3RpdmV7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwODhhOTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcbi5idG4tbGc6Zm9jdXN7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLk5hdmJhckl0ZW1zIC5uYXZfbGlua3tcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y2xlYXI6IGJvdGg7XHJcblx0d2lkdGg6IDA7XHJcblx0dHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLW91dDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGJvcmRlci10b3A6IDU1cHggc29saWQgIzExMTExMTtcclxuXHRiYWNrZ3JvdW5kOiAjMzMzMzMzO1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0ei1pbmRleDogNTtcclxufVxyXG5cclxuLk5hdmJhckl0ZW1zIC5tZW51QnRue1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5OYXZiYXJJdGVtcyAubWVudUljb257XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwODhhOTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0cGFkZGluZzogMjBweCAxMnB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR6LWluZGV4OiAxMDtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLk5hdmJhckl0ZW1zIC5tZW51SWNvbjpob3ZlcntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4OGE5O1xyXG59XHJcblxyXG4ubWVudUljb24gLmJhcnN7XHJcblx0YmFja2dyb3VuZDogIzk5OTk5OTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRoZWlnaHQ6IDJweDtcclxuXHR3aWR0aDogMThweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLW91dDtcclxuXHJcbn1cclxuLm1lbnVJY29uIC5iYXJzOjpiZWZvcmUsXHJcbi5tZW51SWNvbiAuYmFyczo6YWZ0ZXJ7XHJcblx0YmFja2dyb3VuZDogIzk5OTk5OTtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLW91dDtcclxufVxyXG4ubWVudUljb24gLmJhcnM6OmJlZm9yZXtcclxuXHR0b3A6IDVweDtcclxufVxyXG4ubWVudUljb24gLmJhcnM6OmFmdGVye1xyXG5cdHRvcDogLTVweDtcclxufVxyXG5cclxuLm1lbnVCdG46Y2hlY2tlZCB+IC5uYXZfbGlua3tcclxuXHR3aWR0aDogMzAwcHg7XHJcbn1cclxuLm1lbnVCdG46Y2hlY2tlZCB+IC5tZW51SWNvbiAuYmFyc3tcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbi5tZW51QnRuOmNoZWNrZWQgfiAubWVudUljb24gLmJhcnM6OmJlZm9yZXtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG5cdHRvcDogMDtcclxufVxyXG4ubWVudUJ0bjpjaGVja2VkIH4gLm1lbnVJY29uIC5iYXJzOjphZnRlcntcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0dG9wOiAwO1xyXG59XHJcblxyXG4uTmF2YmFySXRlbXMgLmJhckxpbmV7XHJcblx0bWluLXdpZHRoOiAxMDBweDtcclxuXHRoZWlnaHQ6IDBweDtcclxuXHRib3JkZXItdG9wOiA1cHggc29saWQgcmdiKDE5NywgMTk0LCAxOSk7XHJcblx0Ym94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYigxOTcsIDE5NCwgMTkpO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHR6LWluZGV4OiAxO1xyXG5cdHRyYW5zaXRpb24tZHVyYXRpb246IC44cztcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG5cdC5OYXZiYXJJdGVtcyAubmF2X2xpbmsge1xyXG5cdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHR3aWR0aDogYXV0bztcclxuXHRcdGhlaWdodDogYXV0bztcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGJhY2tncm91bmQ6IG5vbmU7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGJvcmRlcjogbm9uZTtcclxuXHR9XHJcblx0Lk5hdmJhckl0ZW1zIC5tZW51SWNvbntcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cdC5OYXZiYXJJdGVtcyBsaXtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgXHJcblx0fVxyXG5cdC5OYXZiYXJJdGVtcyBsaTpob3ZlcntcclxuXHRcdGJvcmRlcjogbm9uZTtcclxuXHR9XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGZvb3RlclN0eWxlID0gY3NzYFxyXG4uRm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogNTBweCAwcHg7XHJcbn1cclxuXHJcbi5Gb290ZXIgZGl2e1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgIC5Gb290ZXIgZGl2e1xyXG4gICAgICAgIHdpZHRoOiA2NDBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMTI4MXB4KXtcclxuICAgIC5Gb290ZXIgZGl2e1xyXG4gICAgICAgIHdpZHRoOiAxMjAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGluZV8xe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4Njg2ODY7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHR7XHJcbiAgICBtYXJnaW46IDIwcHggMTBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uc29jaWFse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHRwYWRkaW5nOiAwJTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnNvY2lhbCBsaXtcclxuXHJcbiAgICBtYXJnaW46IDVweCAxMHB4O1xyXG59XHJcblxyXG4uc29jaWFsIGEge1xyXG4gICAgYmFja2dyb3VuZDogIzk5OTk5OTtcclxuICAgIGNvbG9yOiAjZWZlZmVmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc29jaWFsIGxpIGEgZGl2e1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbn1cclxuXHJcbi5mYl9pY29ue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1hZ2VzL2ljb25zL2ZhY2Vib29rLnBuZycpO1xyXG59XHJcbi50d19pY29ue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1hZ2VzL2ljb25zL3R3aXR0ZXIucG5nJyk7XHJcbn1cclxuLmlnX2ljb257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWFnZXMvaWNvbnMvaW5zdGFncmFtLnBuZycpO1xyXG59XHJcbi5kY19pY29ue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1hZ2VzL2ljb25zL2Rpc2NvcmRpYS5wbmcnKTtcclxufVxyXG4ueXRfaWNvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9pY29ucy95b3V0dWJlLnBuZycpO1xyXG59XHJcblxyXG5cclxuLnNvY2lhbCBhLnR3OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMGFjZWU7XHJcbn0gXHJcbi5zb2NpYWwgYS5mYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM2I1OTk4O1xyXG59XHJcbi5zb2NpYWwgYS55dDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xyXG59XHJcbi5zb2NpYWwgYS5kYzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM2I1OTk4O1xyXG59XHJcbi5zb2NpYWwgYS5pZzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYmI4ZDBlO1xyXG59XHJcbmAiLCJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5cclxuY29uc3QgY29sb3IgPSB7XHJcbiAgICBwcmltYXJ5OiAnIzM5M2I0MCcsXHJcbiAgICBzZWNvbmRhcnk6ICcjOTM5MzEzJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5ld1NlY2N0aW9uID0gY3NzYFxyXG4gICAgc2VjdGlvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL2ltYWdlcy9uZXdzQmFja2dyb3VuZC5qcGdcIikgbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAlIHRvcDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLm5ld3tcclxuICAgICAgICBwYWRkaW5nLXRvcDogNjZweDtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4gICAgXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBuZXdTdHlsZSA9IGNzc2BcclxuaDV7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbn1cclxuLm5ld3MgLmNhdGVnb3J5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzBweCk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG59XHJcbi5uZXdzIGlucHV0e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubmV3cyAuY2F0ZWdvcnkgbGFiZWx7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtaW4td2lkdGg6IDE1NXB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU3LCA1OSwgNjQsIDAuMik7XHJcbiAgICBjb2xvcjogIzM5M2I0MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyAwcyBlYXNlO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuLm5ld3MgLmNhdGVnb3J5IGxhYmVsOmhvdmVye1xyXG4gICAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2I0MDsgICBcclxufVxyXG4ubmV3cyAuY2F0ZWdvcnkgaW5wdXRbaWQ9XCJjYXRlZ29yeTFcIl06Y2hlY2tlZCB+IGxhYmVsW2Zvcj1cImNhdGVnb3J5MVwiXXtcclxuICAgIGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNiNDA7XHJcbn1cclxuLm5ld3MgLmNhdGVnb3J5IGlucHV0W2lkPVwiY2F0ZWdvcnkyXCJdOmNoZWNrZWQgfiBsYWJlbFtmb3I9XCJjYXRlZ29yeTJcIl17XHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzYjQwO1xyXG59XHJcbi5uZXdzIC5jYXRlZ29yeSBpbnB1dFtpZD1cImNhdGVnb3J5M1wiXTpjaGVja2VkIH4gbGFiZWxbZm9yPVwiY2F0ZWdvcnkzXCJde1xyXG4gICAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2I0MDtcclxufVxyXG4ubmV3cyAuY2F0ZWdvcnkgaW5wdXRbaWQ9XCJjYXRlZ29yeTRcIl06Y2hlY2tlZCB+IGxhYmVsW2Zvcj1cImNhdGVnb3J5NFwiXXtcclxuICAgIGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNiNDA7XHJcbn1cclxuXHJcbi5uZXdzTGlzdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHRvcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweCAwcHg7XHJcbn1cclxuLm5ld3NMaXN0IHVse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4ubmV3e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xyXG59XHJcbi5uZXc6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiKDE5NywgMTk0LCAxOSk7XHJcbn1cclxuLm5ldyBhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubW9yZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubmV3IC5pbWcge1xyXG4gICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMCwgMzAsIDMwLCAwLjcpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbi5uZXcgLmNvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiB0b3A7XHJcbiAgICBtYXJnaW46IDBweDtcclxuXHJcbn1cclxuXHJcbi5uZXcgLmRhdGF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJvdHRvbTogMTZweDtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgY29sb3I6IHJnYmEoODAsIDgwLCA4MCwgMSk7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbn1cclxuLm5ldyAuc2VjdGlvbntcclxuICAgIG1hcmdpbi1sZWZ0OiA1MnB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5uZXcgaDN7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4ubmV3IHB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM3ZDdkN2Q7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAubmV3c0xpc3R7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IDBweDtcclxuICAgIH1cclxuICAgIC5uZXdzTGlzdCB1bHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLm5ld3tcclxuICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMjgwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTcwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICB9XHJcbiAgIC5tb3Jle1xyXG4gICAgICAgIHdpZHRoOiAxMjgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLm5ldyAuaW1nIHtcclxuICAgICAgICB3aWR0aDogMjY1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMwLCAzMCwgMzAsIDAuNyk7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuICAgIC5uZXcgLmNvbnRlbnR7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4NXB4KTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAubmV3IGgze1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG4gICAgLm5ldyBwe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDExcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjN2Q3ZDdkO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLm5ldyAuZGF0YXtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVyU3R5bGUgPSBjc3NgXHJcbi50b3BOZXdze1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiA3MHB4IDBweDtcclxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XHJcbn1cclxuXHJcbi5zbGlkZXJNYWlue1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG59XHJcblxyXG4udG9wTmV3cyB1bHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG5cclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCA2MDBtcyBlYXNlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGF1dG9TbGlkZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMjAuNXM7XHJcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcblxyXG4udG9wTmV3cyBsaXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMwLCAzMCwgMzAsIDAuNyk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDEwcHggMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XHJcbn1cclxuLnRvcE5ld3MgbGk6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDAgMnB4IHJnYmEoMCwgMCwgMCwgMC43KTtcclxufVxyXG5cclxuLnRvcE5ld3MgbGkgLm5ld3NJbWd7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xyXG4gICAgd2lkdGg6IDI4M3B4O1xyXG4gICAgaGVpZ2h0OiAxMjNweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4udG9wTmV3cyBsaSAubmV3c1RpdGxlIGgxe1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggM3B4ICMwMDAwMDA7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG59XHJcbi50b3BOZXdzIGxpIC5uZXdzVGV4dHtcclxuICAgIG1pbi1oZWlnaHQ6IDEzMHB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4udG9wTmV3cyBsaSAubmV3c1RleHQgcHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDNweCAjMDAwMDAwO1xyXG59XHJcbi50b3BOZXdzIGxpIC5uZXdzT3JpZ2lue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAyODNweDtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDNweCAjMDAwMDAwO1xyXG59XHJcbi50b3BOZXdzIGxpIC5uZXdzT3JpZ2luIC5kYXRle1xyXG4gICAgXHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk0LCAxOTQpO1xyXG59XHJcbi50b3BOZXdzIGxpIC5uZXdzT3JpZ2luIC5vcmlnaW57XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5KTtcclxufVxyXG5cclxuLnRvcE5ld3MgLnNsaWRlckJhcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnRvcE5ld3MgaW5wdXR7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi50b3BOZXdzIC5zbGlkZXJCYXIgbGFiZWx7XHJcbiAgICBtYXJnaW46IDVweCAxNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTcsIDU5LCA2NCwgMC4zKTtcclxuICAgIGJvcmRlcjogc29saWQgNXB4IHJnYmEoNTcsIDU5LCA2NCwgMC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmlucHV0W2lkPVwic2xpZGVyMVwiXTpjaGVja2VkIH4gLnNsaWRlck1haW4gLnNsaWRlcntcclxuICAgIGFuaW1hdGlvbjogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG59XHJcbmlucHV0W2lkPVwic2xpZGVyMVwiXTpjaGVja2VkIH4gLnNsaWRlckJhciBsYWJlbFtmb3I9XCJzbGlkZXIxXCJde1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOTcsIDE5NCwgMTksIC42KTtcclxufVxyXG5cclxuaW5wdXRbaWQ9XCJzbGlkZXIyXCJdOmNoZWNrZWQgfiAuc2xpZGVyTWFpbiAuc2xpZGVye1xyXG4gICAgYW5pbWF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTM1MHB4LCAwcHgpO1xyXG59XHJcbmlucHV0W2lkPVwic2xpZGVyMlwiXTpjaGVja2VkIH4gLnNsaWRlckJhciBsYWJlbFtmb3I9XCJzbGlkZXIyXCJde1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOTcsIDE5NCwgMTksIC42KTtcclxufVxyXG5cclxuaW5wdXRbaWQ9XCJzbGlkZXIzXCJdOmNoZWNrZWQgfiAuc2xpZGVyTWFpbiAuc2xpZGVye1xyXG4gICAgYW5pbWF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTcwMHB4LCAwcHgpO1xyXG59XHJcbmlucHV0W2lkPVwic2xpZGVyM1wiXTpjaGVja2VkIH4gLnNsaWRlckJhciBsYWJlbFtmb3I9XCJzbGlkZXIzXCJde1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOTcsIDE5NCwgMTksIC42KTtcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLm5ld3N7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuICAgIC50b3BOZXdzIHVse1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgICBhbmltYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICAudG9wTmV3cyBsaSAubmV3c0ltZ3tcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xyXG4gICAgICAgIHdpZHRoOiAzODBweDtcclxuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gICAgfVxyXG4gICAgLnRvcE5ld3MgbGl7XHJcbiAgICAgICAgd2lkdGg6IDQyMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDUwcHg7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICB9XHJcbiAgICAudG9wTmV3cyBsaSAubmV3c1RleHR7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTMwcHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gICAgLnNsaWRlck1haW57XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAudG9wTmV3cyAuc2xpZGVyQmFye1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIEFuaW1hY2lvbiAqL1xyXG5cclxuQGtleWZyYW1lcyBhdXRvU2xpZGV7XHJcbiAgICAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIH1cclxuICAgIDMwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIH1cclxuICAgIDQwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzUwcHgsIDApO1xyXG4gICAgfVxyXG4gICAgNzAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zNTBweCwgMCk7XHJcbiAgICB9XHJcbiAgICA4MCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTcwMHB4LCAwKTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTcwMHB4LCAwKTtcclxuICAgIH1cclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgYXJ0aWNsZVN0eWxlcyA9IGNzc2BcclxuZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5hcnRpY2xle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmFhO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMXB4O1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgM3B4IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5iYWNre1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogbm9uZTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG59XHJcbmgxe1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbn1cclxuc3BhbntcclxuICAgIGNvbG9yOiByZ2JhKDgwLCA4MCwgODAsIDEpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5wIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLmFydGljbGV7XHJcbiAgICAgICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDVweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOTk7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjMDAwMDAwOTk7XHJcbiAgICB9XHJcbiAgICAuYmFja3tcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgIH1cclxuICAgIC5iYWNrIGRpdntcclxuICAgICAgICB3aWR0aDogOTAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICB9XHJcbiAgICAuYm9keXtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOTk7XHJcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuYCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9